(()=>{var gf=0,tu=1,_f=2;var Ya=1,xf=2,Ur=3,vs=0,Wn=1,zi=2,ki=0,Fr=1,eu=2,nu=3,iu=4,vf=5;var Gs=100,yf=101,Sf=102,Mf=103,bf=104,wf=200,Ef=201,Tf=202,Af=203,su=204,ru=205,Cf=206,Rf=207,If=208,Pf=209,Lf=210,Df=211,Nf=212,Uf=213,Ff=214,el=0,nl=1,il=2,Mr=3,sl=4,rl=5,al=6,ol=7,Hl=0,Of=1,Bf=2,wi=0,au=1,ou=2,lu=3,cu=4,hu=5,uu=6,du=7;var fu=300,ys=301,Ws=302,Gl=303,Wl=304,Za=306,ll=1e3,Di=1001,cl=1002,vn=1003,zf=1004;var Ja=1005;var En=1006,$l=1007;var Ss=1008;var Qn=1009,pu=1010,mu=1011,Or=1012,Xl=1013,Ei=1014,fi=1015,Ti=1016,ql=1017,Yl=1018,Br=1020,gu=35902,_u=35899,xu=1021,vu=1022,pi=1023,Ui=1026,Ms=1027,Zl=1028,Jl=1029,bs=1030,Kl=1031;var jl=1033,Ka=33776,ja=33777,Qa=33778,to=33779,Ql=35840,tc=35841,ec=35842,nc=35843,ic=36196,sc=37492,rc=37496,ac=37488,oc=37489,eo=37490,lc=37491,cc=37808,hc=37809,uc=37810,dc=37811,fc=37812,pc=37813,mc=37814,gc=37815,_c=37816,xc=37817,vc=37818,yc=37819,Sc=37820,Mc=37821,bc=36492,wc=36494,Ec=36495,Tc=36283,Ac=36284,no=36285,Cc=36286;var pa=2300,hl=2301,Qo=2302,Vh=2303,Hh=2400,Gh=2401,Wh=2402;var kf=3200;var Rc=0,Vf=1,is="",ii="srgb",ma="srgb-linear",ga="linear",Ve="srgb";var tl=7680;var Hf=519,Gf=512,Wf=513,$f=514,Ic=515,Xf=516,qf=517,Pc=518,Yf=519,yu=35044;var Su="300 es",Si=2e3,br=2001;function Nm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Um(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _a(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zf(){let i=_a("canvas");return i.style.display="block",i}var Pd={},wr=null;function xa(...i){let t="THREE."+i.shift();wr?wr("log",t,...i):console.log(t,...i)}function Jf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ae(...i){i=Jf(i);let t="THREE."+i.shift();if(wr)wr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=Jf(i);let t="THREE."+i.shift();if(wr)wr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Us(...i){let t=i.join(" ");t in Pd||(Pd[t]=!0,ae(...i))}function Kf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var jf={[el]:nl,[il]:al,[sl]:ol,[Mr]:rl,[nl]:el,[al]:il,[ol]:sl,[rl]:Mr},Fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ld=1234567,ha=Math.PI/180,Er=180/Math.PI;function Ni(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[e&63|128]+Nn[e>>8&255]+"-"+Nn[e>>16&255]+Nn[e>>24&255]+Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function Mu(i,t){return(i%t+t)%t}function Fm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Om(i,t,e){return i!==t?(e-i)/(t-i):0}function ua(i,t,e){return(1-e)*i+e*t}function Bm(i,t,e,n){return ua(i,t,1-Math.exp(-e*n))}function zm(i,t=1){return t-Math.abs(Mu(i,t*2)-t)}function km(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Vm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Hm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Gm(i,t){return i+Math.random()*(t-i)}function Wm(i){return i*(.5-Math.random())}function $m(i){i!==void 0&&(Ld=i);let t=Ld+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xm(i){return i*ha}function qm(i){return i*Er}function Ym(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Zm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Km(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),p=r((t-n)/2),u=a((t-n)/2),g=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*p,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*p,o*c);break;case"ZXZ":i.set(l*p,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*g,o*c);break;case"YXY":i.set(l*g,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*g,o*h,o*c);break;default:ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var bu={DEG2RAD:ha,RAD2DEG:Er,generateUUID:Ni,clamp:xe,euclideanModulo:Mu,mapLinear:Fm,inverseLerp:Om,lerp:ua,damp:Bm,pingpong:zm,smoothstep:km,smootherstep:Vm,randInt:Hm,randFloat:Gm,randFloatSpread:Wm,seededRandom:$m,degToRad:Xm,radToDeg:qm,isPowerOfTwo:Ym,ceilPowerOfTwo:Zm,floorPowerOfTwo:Jm,setQuaternionFromProperEuler:Km,normalize:We,denormalize:yi},Nt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Oi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],u=r[a+0],g=r[a+1],_=r[a+2],E=r[a+3];if(p!==E||l!==u||c!==g||h!==_){let f=l*u+c*g+h*_+p*E;f<0&&(u=-u,g=-g,_=-_,E=-E,f=-f);let d=1-o;if(f<.9995){let L=Math.acos(f),D=Math.sin(L);d=Math.sin(d*L)/D,o=Math.sin(o*L)/D,l=l*d+u*o,c=c*d+g*o,h=h*d+_*o,p=p*d+E*o}else{l=l*d+u*o,c=c*d+g*o,h=h*d+_*o,p=p*d+E*o;let L=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=L,c*=L,h*=L,p*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],u=r[a+1],g=r[a+2],_=r[a+3];return t[e]=o*_+h*p+l*g-c*u,t[e+1]=l*_+h*u+c*p-o*g,t[e+2]=c*_+h*g+o*u-l*p,t[e+3]=h*_-o*p-l*u-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),u=l(n/2),g=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*p+c*g*_,this._y=c*g*p-u*h*_,this._z=c*h*_+u*g*p,this._w=c*h*p-u*g*_;break;case"YXZ":this._x=u*h*p+c*g*_,this._y=c*g*p-u*h*_,this._z=c*h*_-u*g*p,this._w=c*h*p+u*g*_;break;case"ZXY":this._x=u*h*p-c*g*_,this._y=c*g*p+u*h*_,this._z=c*h*_+u*g*p,this._w=c*h*p-u*g*_;break;case"ZYX":this._x=u*h*p-c*g*_,this._y=c*g*p+u*h*_,this._z=c*h*_-u*g*p,this._w=c*h*p+u*g*_;break;case"YZX":this._x=u*h*p+c*g*_,this._y=c*g*p+u*h*_,this._z=c*h*_-u*g*p,this._w=c*h*p-u*g*_;break;case"XZY":this._x=u*h*p-c*g*_,this._y=c*g*p-u*h*_,this._z=c*h*_+u*g*p,this._w=c*h*p+u*g*_;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],u=n+o+p;if(u>0){let g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>p){let g=2*Math.sqrt(1+n-o-p);this._w=(h-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>p){let g=2*Math.sqrt(1+o-n-p);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+p-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mh.copy(this).projectOnVector(t),this.sub(mh)}reflect(t){return this.sub(mh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mh=new B,Dd=new Oi,me=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],u=n[2],g=n[5],_=n[8],E=s[0],f=s[3],d=s[6],L=s[1],D=s[4],w=s[7],b=s[2],I=s[5],O=s[8];return r[0]=a*E+o*L+l*b,r[3]=a*f+o*D+l*I,r[6]=a*d+o*w+l*O,r[1]=c*E+h*L+p*b,r[4]=c*f+h*D+p*I,r[7]=c*d+h*w+p*O,r[2]=u*E+g*L+_*b,r[5]=u*f+g*D+_*I,r[8]=u*d+g*w+_*O,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*a-o*c,u=o*l-h*r,g=c*r-a*l,_=e*p+n*u+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/_;return t[0]=p*E,t[1]=(s*c-h*n)*E,t[2]=(o*n-s*a)*E,t[3]=u*E,t[4]=(h*e-s*l)*E,t[5]=(s*r-o*e)*E,t[6]=g*E,t[7]=(n*l-c*e)*E,t[8]=(a*e-n*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gh.makeScale(t,e)),this}rotate(t){return Us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gh.makeRotation(-t)),this}translate(t,e){return Us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},gh=new me,Nd=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ud=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jm(){let i={enabled:!0,workingColorSpace:ma,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ve&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ve&&(s.r=Sr(s.r),s.g=Sr(s.g),s.b=Sr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===is?ga:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ma]:{primaries:t,whitePoint:n,transfer:ga,toXYZ:Nd,fromXYZ:Ud,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:t,whitePoint:n,transfer:Ve,toXYZ:Nd,fromXYZ:Ud,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),i}var Re=jm();function es(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rr,ul=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rr===void 0&&(rr=_a("canvas")),rr.width=t.width,rr.height=t.height;let s=rr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=rr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_a("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=es(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(es(e[n]/255)*255):e[n]=es(e[n]);return{data:e,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qm=0,Tr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_h(s[a].image)):r.push(_h(s[a]))}else r=_h(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function _h(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ul.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}var tg=0,xh=new B,Jn=class i extends Fi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Di,s=Di,r=En,a=Ss,o=pi,l=Qn,c=i.DEFAULT_ANISOTROPY,h=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Ni(),this.name="",this.source=new Tr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ae(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ll:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ll:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=fu;Jn.DEFAULT_ANISOTROPY=1;var He=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],g=l[5],_=l[9],E=l[2],f=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-E)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+E)<.1&&Math.abs(_+f)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let D=(c+1)/2,w=(g+1)/2,b=(d+1)/2,I=(h+u)/4,O=(p+E)/4,v=(_+f)/4;return D>w&&D>b?D<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(D),s=I/n,r=O/n):w>b?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=I/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=O/r,s=v/r),this.set(n,s,r,e),this}let L=Math.sqrt((f-_)*(f-_)+(p-E)*(p-E)+(u-h)*(u-h));return Math.abs(L)<.001&&(L=1),this.x=(f-_)/L,this.y=(p-E)/L,this.z=(u-h)/L,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this.w=xe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this.w=xe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dl=class extends Fi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Jn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Tr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},va=class extends Jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fl=class extends Jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ne=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,p,u,g,_,E,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,p,u,g,_,E,f)}set(t,e,n,s,r,a,o,l,c,h,p,u,g,_,E,f){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=g,d[7]=_,d[11]=E,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ar.setFromMatrixColumn(t,0).length(),r=1/ar.setFromMatrixColumn(t,1).length(),a=1/ar.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let u=a*h,g=a*p,_=o*h,E=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=g+_*c,e[5]=u-E*c,e[9]=-o*l,e[2]=E-u*c,e[6]=_+g*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,g=l*p,_=c*h,E=c*p;e[0]=u+E*o,e[4]=_*o-g,e[8]=a*c,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=g*o-_,e[6]=E+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,g=l*p,_=c*h,E=c*p;e[0]=u-E*o,e[4]=-a*p,e[8]=_+g*o,e[1]=g+_*o,e[5]=a*h,e[9]=E-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,g=a*p,_=o*h,E=o*p;e[0]=l*h,e[4]=_*c-g,e[8]=u*c+E,e[1]=l*p,e[5]=E*c+u,e[9]=g*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,g=a*c,_=o*l,E=o*c;e[0]=l*h,e[4]=E-u*p,e[8]=_*p+g,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=g*p+_,e[10]=u-E*p}else if(t.order==="XZY"){let u=a*l,g=a*c,_=o*l,E=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=u*p+E,e[5]=a*h,e[9]=g*p-_,e[2]=_*p-g,e[6]=o*h,e[10]=E*p+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eg,t,ng)}lookAt(t,e,n){let s=this.elements;return ei.subVectors(t,e),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ls.crossVectors(n,ei),ls.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ls.crossVectors(n,ei)),ls.normalize(),To.crossVectors(ei,ls),s[0]=ls.x,s[4]=To.x,s[8]=ei.x,s[1]=ls.y,s[5]=To.y,s[9]=ei.y,s[2]=ls.z,s[6]=To.z,s[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],u=n[9],g=n[13],_=n[2],E=n[6],f=n[10],d=n[14],L=n[3],D=n[7],w=n[11],b=n[15],I=s[0],O=s[4],v=s[8],R=s[12],z=s[1],W=s[5],Y=s[9],Z=s[13],k=s[2],J=s[6],it=s[10],st=s[14],yt=s[3],rt=s[7],ht=s[11],pt=s[15];return r[0]=a*I+o*z+l*k+c*yt,r[4]=a*O+o*W+l*J+c*rt,r[8]=a*v+o*Y+l*it+c*ht,r[12]=a*R+o*Z+l*st+c*pt,r[1]=h*I+p*z+u*k+g*yt,r[5]=h*O+p*W+u*J+g*rt,r[9]=h*v+p*Y+u*it+g*ht,r[13]=h*R+p*Z+u*st+g*pt,r[2]=_*I+E*z+f*k+d*yt,r[6]=_*O+E*W+f*J+d*rt,r[10]=_*v+E*Y+f*it+d*ht,r[14]=_*R+E*Z+f*st+d*pt,r[3]=L*I+D*z+w*k+b*yt,r[7]=L*O+D*W+w*J+b*rt,r[11]=L*v+D*Y+w*it+b*ht,r[15]=L*R+D*Z+w*st+b*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],g=t[14],_=t[3],E=t[7],f=t[11],d=t[15],L=l*g-c*u,D=o*g-c*p,w=o*u-l*p,b=a*g-c*h,I=a*u-l*h,O=a*p-o*h;return e*(E*L-f*D+d*w)-n*(_*L-f*b+d*I)+s*(_*D-E*b+d*O)-r*(_*w-E*I+f*O)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],g=t[11],_=t[12],E=t[13],f=t[14],d=t[15],L=e*o-n*a,D=e*l-s*a,w=e*c-r*a,b=n*l-s*o,I=n*c-r*o,O=s*c-r*l,v=h*E-p*_,R=h*f-u*_,z=h*d-g*_,W=p*f-u*E,Y=p*d-g*E,Z=u*d-g*f,k=L*Z-D*Y+w*W+b*z-I*R+O*v;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let J=1/k;return t[0]=(o*Z-l*Y+c*W)*J,t[1]=(s*Y-n*Z-r*W)*J,t[2]=(E*O-f*I+d*b)*J,t[3]=(u*I-p*O-g*b)*J,t[4]=(l*z-a*Z-c*R)*J,t[5]=(e*Z-s*z+r*R)*J,t[6]=(f*w-_*O-d*D)*J,t[7]=(h*O-u*w+g*D)*J,t[8]=(a*Y-o*z+c*v)*J,t[9]=(n*z-e*Y-r*v)*J,t[10]=(_*I-E*w+d*L)*J,t[11]=(p*w-h*I-g*L)*J,t[12]=(o*R-a*W-l*v)*J,t[13]=(e*W-n*R+s*v)*J,t[14]=(E*D-_*b-f*L)*J,t[15]=(h*b-p*D+u*L)*J,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,p=o+o,u=r*c,g=r*h,_=r*p,E=a*h,f=a*p,d=o*p,L=l*c,D=l*h,w=l*p,b=n.x,I=n.y,O=n.z;return s[0]=(1-(E+d))*b,s[1]=(g+w)*b,s[2]=(_-D)*b,s[3]=0,s[4]=(g-w)*I,s[5]=(1-(u+d))*I,s[6]=(f+L)*I,s[7]=0,s[8]=(_+D)*O,s[9]=(f-L)*O,s[10]=(1-(u+E))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ar.set(s[0],s[1],s[2]).length(),o=ar.set(s[4],s[5],s[6]).length(),l=ar.set(s[8],s[9],s[10]).length();r<0&&(a=-a),gi.copy(this);let c=1/a,h=1/o,p=1/l;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=p,gi.elements[9]*=p,gi.elements[10]*=p,e.setFromRotationMatrix(gi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Si,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(n-s),u=(e+t)/(e-t),g=(n+s)/(n-s),_,E;if(l)_=r/(a-r),E=a*r/(a-r);else if(o===Si)_=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===br)_=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Si,l=!1){let c=this.elements,h=2/(e-t),p=2/(n-s),u=-(e+t)/(e-t),g=-(n+s)/(n-s),_,E;if(l)_=1/(a-r),E=a/(a-r);else if(o===Si)_=-2/(a-r),E=-(a+r)/(a-r);else if(o===br)_=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ar=new B,gi=new Ne,eg=new B(0,0,0),ng=new B(1,1,1),ls=new B,To=new B,ei=new B,Fd=new Ne,Od=new Oi,ns=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Od.setFromEuler(this),this.setFromQuaternion(Od,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ns.DEFAULT_ORDER="XYZ";var Ar=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ig=0,Bd=new B,or=new Oi,Ji=new Ne,Ao=new B,na=new B,sg=new B,rg=new Oi,zd=new B(1,0,0),kd=new B(0,1,0),Vd=new B(0,0,1),Hd={type:"added"},ag={type:"removed"},lr={type:"childadded",child:null},vh={type:"childremoved",child:null},yn=class i extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new ns,n=new Oi,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new me}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(zd,t)}rotateY(t){return this.rotateOnAxis(kd,t)}rotateZ(t){return this.rotateOnAxis(Vd,t)}translateOnAxis(t,e){return Bd.copy(t).applyQuaternion(this.quaternion),this.position.add(Bd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zd,t)}translateY(t){return this.translateOnAxis(kd,t)}translateZ(t){return this.translateOnAxis(Vd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ao.copy(t):Ao.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(na,Ao,this.up):Ji.lookAt(Ao,na,this.up),this.quaternion.setFromRotationMatrix(Ji),s&&(Ji.extractRotation(s.matrixWorld),or.setFromRotationMatrix(Ji),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hd),lr.child=t,this.dispatchEvent(lr),lr.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ag),vh.child=t,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hd),lr.child=t,this.dispatchEvent(lr),lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,t,sg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,rg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),p=a(t.shapes),u=a(t.skeletons),g=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yn.DEFAULT_UP=new B(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mi=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},og={type:"move"},Cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let E of t.hand.values()){let f=e.getJointPose(E,n),d=this._getHandJoint(c,E);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),g=.02,_=.005;c.inputState.pinching&&u>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(og)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Mi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Co={h:0,s:0,l:0};function yh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var oe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Re.workingColorSpace){return this.r=t,this.g=e,this.b=n,Re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Re.workingColorSpace){if(t=Mu(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=yh(a,r,t+1/3),this.g=yh(a,r,t),this.b=yh(a,r,t-1/3)}return Re.colorSpaceToWorking(this,s),this}setStyle(t,e=ii){function n(r){r!==void 0&&parseFloat(r)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ae("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ii){let n=Qf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=Sr(t.r),this.g=Sr(t.g),this.b=Sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ii){return Re.workingToColorSpace(Un.copy(this),t),Math.round(xe(Un.r*255,0,255))*65536+Math.round(xe(Un.g*255,0,255))*256+Math.round(xe(Un.b*255,0,255))}getHexString(t=ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Re.workingColorSpace){Re.workingToColorSpace(Un.copy(this),e);let n=Un.r,s=Un.g,r=Un.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Re.workingColorSpace){return Re.workingToColorSpace(Un.copy(this),e),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=ii){Re.workingToColorSpace(Un.copy(this),t);let e=Un.r,n=Un.g,s=Un.b;return t!==ii?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+e,cs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(cs),t.getHSL(Co);let n=ua(cs.h,Co.h,e),s=ua(cs.s,Co.s,e),r=ua(cs.l,Co.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new oe;oe.NAMES=Qf;var ya=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},_i=new B,Ki=new B,Sh=new B,ji=new B,cr=new B,hr=new B,Gd=new B,Mh=new B,bh=new B,wh=new B,Eh=new He,Th=new He,Ah=new He,fs=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_i.subVectors(t,e),s.cross(_i);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_i.subVectors(s,e),Ki.subVectors(n,e),Sh.subVectors(t,e);let a=_i.dot(_i),o=_i.dot(Ki),l=_i.dot(Sh),c=Ki.dot(Ki),h=Ki.dot(Sh),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,g=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-g-_,_,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ji.x),l.addScaledVector(a,ji.y),l.addScaledVector(o,ji.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Eh.setScalar(0),Th.setScalar(0),Ah.setScalar(0),Eh.fromBufferAttribute(t,e),Th.fromBufferAttribute(t,n),Ah.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Eh,r.x),a.addScaledVector(Th,r.y),a.addScaledVector(Ah,r.z),a}static isFrontFacing(t,e,n,s){return _i.subVectors(n,e),Ki.subVectors(t,e),_i.cross(Ki).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),_i.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;cr.subVectors(s,n),hr.subVectors(r,n),Mh.subVectors(t,n);let l=cr.dot(Mh),c=hr.dot(Mh);if(l<=0&&c<=0)return e.copy(n);bh.subVectors(t,s);let h=cr.dot(bh),p=hr.dot(bh);if(h>=0&&p<=h)return e.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(cr,a);wh.subVectors(t,r);let g=cr.dot(wh),_=hr.dot(wh);if(_>=0&&g<=_)return e.copy(r);let E=g*c-l*_;if(E<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(hr,o);let f=h*_-g*p;if(f<=0&&p-h>=0&&g-_>=0)return Gd.subVectors(r,s),o=(p-h)/(p-h+(g-_)),e.copy(s).addScaledVector(Gd,o);let d=1/(f+E+u);return a=E*d,o=u*d,e.copy(n).addScaledVector(cr,a).addScaledVector(hr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gn=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xi):xi.fromBufferAttribute(r,a),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ro.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ro.copy(n.boundingBox)),Ro.applyMatrix4(t.matrixWorld),this.union(Ro)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ia),Io.subVectors(this.max,ia),ur.subVectors(t.a,ia),dr.subVectors(t.b,ia),fr.subVectors(t.c,ia),hs.subVectors(dr,ur),us.subVectors(fr,dr),Is.subVectors(ur,fr);let e=[0,-hs.z,hs.y,0,-us.z,us.y,0,-Is.z,Is.y,hs.z,0,-hs.x,us.z,0,-us.x,Is.z,0,-Is.x,-hs.y,hs.x,0,-us.y,us.x,0,-Is.y,Is.x,0];return!Ch(e,ur,dr,fr,Io)||(e=[1,0,0,0,1,0,0,0,1],!Ch(e,ur,dr,fr,Io))?!1:(Po.crossVectors(hs,us),e=[Po.x,Po.y,Po.z],Ch(e,ur,dr,fr,Io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Qi=[new B,new B,new B,new B,new B,new B,new B,new B],xi=new B,Ro=new Gn,ur=new B,dr=new B,fr=new B,hs=new B,us=new B,Is=new B,ia=new B,Io=new B,Po=new B,Ps=new B;function Ch(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ps.fromArray(i,r);let o=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),l=t.dot(Ps),c=e.dot(Ps),h=n.dot(Ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ln=new B,Lo=new Nt,lg=0,$e=class extends Fi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yu,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lo.fromBufferAttribute(this,e),Lo.applyMatrix3(t),this.setXY(e,Lo.x,Lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix3(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Sa=class extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ma=class extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var nn=class extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}},cg=new Gn,sa=new B,Rh=new B,jn=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sa.subVectors(t,this.center);let e=sa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(sa,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sa.copy(t.center).add(Rh)),this.expandByPoint(sa.copy(t.center).sub(Rh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},hg=0,di=new Ne,Ih=new yn,pr=new B,ni=new Gn,ra=new Gn,xn=new B,sn=class i extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nm(t)?Ma:Sa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new me().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,e,n){return di.makeTranslation(t,e,n),this.applyMatrix4(di),this}scale(t,e,n){return di.makeScale(t,e,n),this.applyMatrix4(di),this}lookAt(t){return Ih.lookAt(t),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ra.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(ni.min,ra.min),ni.expandByPoint(xn),xn.addVectors(ni.max,ra.max),ni.expandByPoint(xn)):(ni.expandByPoint(ra.min),ni.expandByPoint(ra.max))}ni.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xn.fromBufferAttribute(o,c),l&&(pr.fromBufferAttribute(t,c),xn.add(pr)),s=Math.max(s,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new $e(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new B,l[v]=new B;let c=new B,h=new B,p=new B,u=new Nt,g=new Nt,_=new Nt,E=new B,f=new B;function d(v,R,z){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,R),p.fromBufferAttribute(n,z),u.fromBufferAttribute(r,v),g.fromBufferAttribute(r,R),_.fromBufferAttribute(r,z),h.sub(c),p.sub(c),g.sub(u),_.sub(u);let W=1/(g.x*_.y-_.x*g.y);isFinite(W)&&(E.copy(h).multiplyScalar(_.y).addScaledVector(p,-g.y).multiplyScalar(W),f.copy(p).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(W),o[v].add(E),o[R].add(E),o[z].add(E),l[v].add(f),l[R].add(f),l[z].add(f))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let v=0,R=L.length;v<R;++v){let z=L[v],W=z.start,Y=z.count;for(let Z=W,k=W+Y;Z<k;Z+=3)d(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}let D=new B,w=new B,b=new B,I=new B;function O(v){b.fromBufferAttribute(s,v),I.copy(b);let R=o[v];D.copy(R),D.sub(b.multiplyScalar(b.dot(R))).normalize(),w.crossVectors(I,R);let W=w.dot(l[v])<0?-1:1;a.setXYZW(v,D.x,D.y,D.z,W)}for(let v=0,R=L.length;v<R;++v){let z=L[v],W=z.start,Y=z.count;for(let Z=W,k=W+Y;Z<k;Z+=3)O(t.getX(Z+0)),O(t.getX(Z+1)),O(t.getX(Z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,g=n.count;u<g;u++)n.setXYZ(u,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,p=new B;if(t)for(let u=0,g=t.count;u<g;u+=3){let _=t.getX(u+0),E=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,f),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,g=e.count;u<g;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xn.fromBufferAttribute(t,e),xn.normalize(),t.setXYZ(e,xn.x,xn.y,xn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),g=0,_=0;for(let E=0,f=l.length;E<f;E++){o.isInterleavedBufferAttribute?g=l[E]*o.data.stride+o.offset:g=l[E]*h;for(let d=0;d<h;d++)u[_++]=c[g++]}return new $e(u,h,p)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],g=t(u,n);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let g=c[p];h.push(g.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let u=0,g=p.length;u<g;u++)h.push(p[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},pl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=yu,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Hn=new B,bi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyMatrix4(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyNormalMatrix(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.transformDirection(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){xa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){xa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ph=new B,ug=new B,dg=new me,vi=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ph.subVectors(n,e).cross(ug.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ph),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||dg.getNormalMatrix(t),s=this.coplanarPoint(Ph).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},fg=0,Bi=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Fr,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=su,this.blendDst=ru,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tl,this.stencilZFail=tl,this.stencilZPass=tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ae(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new oe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new vi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ts=new B,Lh=new B,Do=new B,No=new B,Fs=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ts)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ts.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ts.copy(this.origin).addScaledVector(this.direction,e),ts.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Lh.copy(t).add(e).multiplyScalar(.5),Do.copy(e).sub(t).normalize(),No.copy(this.origin).sub(Lh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Do),o=No.dot(this.direction),l=-No.dot(Do),c=No.lengthSq(),h=Math.abs(1-a*a),p,u,g,_;if(h>0)if(p=a*l-o,u=a*o-l,_=r*h,p>=0)if(u>=-_)if(u<=_){let E=1/h;p*=E,u*=E,g=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=r,p=Math.max(0,-(a*u+o)),g=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(a*u+o)),g=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),g=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-r,-l),r),g=u*(u+2*l)+c):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),g=-p*p+u*(u+2*l)+c);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),g=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Lh).addScaledVector(Do,u),g}intersectSphere(t,e){if(t.radius<0)return null;ts.subVectors(t.center,this.origin);let n=ts.dot(this.direction),s=ts.dot(ts)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ts)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-a.x,u=t.y-a.y,g=t.z-a.z,_=e.x-a.x,E=e.y-a.y,f=e.z-a.z,d=n.x-a.x,L=n.y-a.y,D=n.z-a.z,w=Math.abs(l),b=Math.abs(c),I=Math.abs(h),O,v,R,z,W,Y,Z,k,J,it,st,yt;if(w>=b&&w>=I?(R=l,Y=p,J=_,yt=d,l>=0?(O=c,v=h,z=u,W=g,Z=E,k=f,it=L,st=D):(O=h,v=c,z=g,W=u,Z=f,k=E,it=D,st=L)):b>=I?(R=c,Y=u,J=E,yt=L,c>=0?(O=h,v=l,z=g,W=p,Z=f,k=_,it=D,st=d):(O=l,v=h,z=p,W=g,Z=_,k=f,it=d,st=D)):(R=h,Y=g,J=f,yt=D,h>=0?(O=l,v=c,z=p,W=u,Z=_,k=E,it=d,st=L):(O=c,v=l,z=u,W=p,Z=E,k=_,it=L,st=d)),R===0)return null;let rt=O/R,ht=v/R,pt=1/R,Jt=z-rt*Y,Gt=W-ht*Y,Pe=Z-rt*J,we=k-ht*J,Te=it-rt*yt,et=st-ht*yt,ut=Te*we-et*Pe,Ut=Jt*et-Gt*Te,ie=Pe*Gt-we*Jt;if(s){if(ut<0||Ut<0||ie<0)return null}else if((ut<0||Ut<0||ie<0)&&(ut>0||Ut>0||ie>0))return null;let Rt=ut+Ut+ie;if(Rt===0)return null;let Vt=pt*(ut*Y+Ut*J+ie*yt);return(Rt>0?Vt<0:Vt>0)?null:this.at(Vt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Os=class extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Wd=new Ne,Ls=new Fs,Uo=new jn,$d=new B,Fo=new B,Oo=new B,Bo=new B,Dh=new B,zo=new B,Xd=new B,ko=new B,Sn=class extends yn{constructor(t=new sn,e=new Os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(Dh.fromBufferAttribute(p,t),a?zo.addScaledVector(Dh,h):zo.addScaledVector(Dh.sub(e),h))}e.add(zo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),Ls.copy(t.ray).recast(t.near),!(Uo.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Uo,$d)===null||Ls.origin.distanceToSquared($d)>(t.far-t.near)**2))&&(Wd.copy(r).invert(),Ls.copy(t.ray).applyMatrix4(Wd),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ls)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,E=u.length;_<E;_++){let f=u[_],d=a[f.materialIndex],L=Math.max(f.start,g.start),D=Math.min(o.count,Math.min(f.start+f.count,g.start+g.count));for(let w=L,b=D;w<b;w+=3){let I=o.getX(w),O=o.getX(w+1),v=o.getX(w+2);s=Vo(this,d,t,n,c,h,p,I,O,v),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),E=Math.min(o.count,g.start+g.count);for(let f=_,d=E;f<d;f+=3){let L=o.getX(f),D=o.getX(f+1),w=o.getX(f+2);s=Vo(this,a,t,n,c,h,p,L,D,w),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,E=u.length;_<E;_++){let f=u[_],d=a[f.materialIndex],L=Math.max(f.start,g.start),D=Math.min(l.count,Math.min(f.start+f.count,g.start+g.count));for(let w=L,b=D;w<b;w+=3){let I=w,O=w+1,v=w+2;s=Vo(this,d,t,n,c,h,p,I,O,v),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),E=Math.min(l.count,g.start+g.count);for(let f=_,d=E;f<d;f+=3){let L=f,D=f+1,w=f+2;s=Vo(this,a,t,n,c,h,p,L,D,w),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function pg(i,t,e,n,s,r,a,o){let l;if(t.side===Wn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===vs,o),l===null)return null;ko.copy(o),ko.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ko);return c<e.near||c>e.far?null:{distance:c,point:ko.clone(),object:i}}function Vo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Fo),i.getVertexPosition(l,Oo),i.getVertexPosition(c,Bo);let h=pg(i,t,e,n,Fo,Oo,Bo,Xd);if(h){let p=new B;fs.getBarycoord(Xd,Fo,Oo,Bo,p),s&&(h.uv=fs.getInterpolatedAttribute(s,o,l,c,p,new Nt)),r&&(h.uv1=fs.getInterpolatedAttribute(r,o,l,c,p,new Nt)),a&&(h.normal=fs.getInterpolatedAttribute(a,o,l,c,p,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new B,materialIndex:0};fs.getNormal(Fo,Oo,Bo,u.normal),h.face=u,h.barycoord=p}return h}var ba=class extends Jn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=vn,h=vn,p,u){super(null,a,o,l,c,h,s,r,p,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wa=class extends $e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},mr=new Ne,qd=new Ne,Ho=[],Yd=new Gn,mg=new Ne,aa=new Sn,oa=new jn,Ea=class extends Sn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mr),Yd.copy(t.boundingBox).applyMatrix4(mr),this.boundingBox.union(Yd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mr),oa.copy(t.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(oa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(n),t.ray.intersectsSphere(oa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,mr),qd.multiplyMatrices(n,mr),aa.matrixWorld=qd,aa.raycast(t,Ho);for(let a=0,o=Ho.length;a<o;a++){let l=Ho[a];l.instanceId=r,l.object=this,e.push(l)}Ho.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new wa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ba(new Float32Array(s*this.count),s,this.count,Zl,fi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ds=new jn,gg=new Nt(.5,.5),Go=new B,Rr=class{constructor(t=new vi,e=new vi,n=new vi,s=new vi,r=new vi,a=new vi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Si,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],u=r[6],g=r[7],_=r[8],E=r[9],f=r[10],d=r[11],L=r[12],D=r[13],w=r[14],b=r[15];if(s[0].setComponents(c-a,g-h,d-_,b-L).normalize(),s[1].setComponents(c+a,g+h,d+_,b+L).normalize(),s[2].setComponents(c+o,g+p,d+E,b+D).normalize(),s[3].setComponents(c-o,g-p,d-E,b-D).normalize(),n)s[4].setComponents(l,u,f,w).normalize(),s[5].setComponents(c-l,g-u,d-f,b-w).normalize();else if(s[4].setComponents(c-l,g-u,d-f,b-w).normalize(),e===Si)s[5].setComponents(c+l,g+u,d+f,b+w).normalize();else if(e===br)s[5].setComponents(l,u,f,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);let e=gg.distanceTo(t.center);return Ds.radius=.7071067811865476+e,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Go.x=s.normal.x>0?t.max.x:t.min.x,Go.y=s.normal.y>0?t.max.y:t.min.y,Go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Bs=class extends Bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ml=new B,gl=new B,Zd=new Ne,la=new Fs,Wo=new jn,Nh=new B,Jd=new B,_l=class extends yn{constructor(t=new sn,e=new Bs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ml.fromBufferAttribute(e,s-1),gl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ml.distanceTo(gl);t.setAttribute("lineDistance",new nn(n,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,t.ray.intersectsSphere(Wo)===!1)return;Zd.copy(s).invert(),la.copy(t.ray).applyMatrix4(Zd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let g=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let E=g,f=_-1;E<f;E+=c){let d=h.getX(E),L=h.getX(E+1),D=$o(this,t,la,l,d,L,E);D&&e.push(D)}if(this.isLineLoop){let E=h.getX(_-1),f=h.getX(g),d=$o(this,t,la,l,E,f,_-1);d&&e.push(d)}}else{let g=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let E=g,f=_-1;E<f;E+=c){let d=$o(this,t,la,l,E,E+1,E);d&&e.push(d)}if(this.isLineLoop){let E=$o(this,t,la,l,_-1,g,_-1);E&&e.push(E)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function $o(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(ml.fromBufferAttribute(o,s),gl.fromBufferAttribute(o,r),e.distanceSqToSegment(ml,gl,Nh,Jd)>n)return;Nh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Nh);if(!(c<t.near||c>t.far))return{distance:c,point:Jd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ta=class extends _l{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},xl=class extends Bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Kd=new Ne,$h=new Fs,Xo=new jn,qo=new B,zs=class extends yn{constructor(t=new sn,e=new xl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(s),Xo.radius+=r,t.ray.intersectsSphere(Xo)===!1)return;Kd.copy(s).invert(),$h.copy(t.ray).applyMatrix4(Kd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let _=u,E=g;_<E;_++){let f=c.getX(_);qo.fromBufferAttribute(p,f),jd(qo,f,l,s,t,e,this)}}else{let u=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let _=u,E=g;_<E;_++)qo.fromBufferAttribute(p,_),jd(qo,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function jd(i,t,e,n,s,r,a){let o=$h.distanceSqToPoint(i);if(o<e){let l=new B;$h.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Aa=class extends Jn{constructor(t=[],e=ys,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ps=class extends Jn{constructor(t,e,n=Ei,s,r,a,o=vn,l=vn,c,h=Ui,p=1){if(h!==Ui&&h!==Ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:p};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},vl=class extends ps{constructor(t,e=Ei,n=ys,s,r,a=vn,o=vn,l,c=Ui){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ca=class extends Jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ir=class i extends sn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],u=0,g=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(p,2));function _(E,f,d,L,D,w,b,I,O,v,R){let z=w/O,W=b/v,Y=w/2,Z=b/2,k=I/2,J=O+1,it=v+1,st=0,yt=0,rt=new B;for(let ht=0;ht<it;ht++){let pt=ht*W-Z;for(let Jt=0;Jt<J;Jt++){let Gt=Jt*z-Y;rt[E]=Gt*L,rt[f]=pt*D,rt[d]=k,c.push(rt.x,rt.y,rt.z),rt[E]=0,rt[f]=0,rt[d]=I>0?1:-1,h.push(rt.x,rt.y,rt.z),p.push(Jt/O),p.push(1-ht/v),st+=1}}for(let ht=0;ht<v;ht++)for(let pt=0;pt<O;pt++){let Jt=u+pt+J*ht,Gt=u+pt+J*(ht+1),Pe=u+(pt+1)+J*(ht+1),we=u+(pt+1)+J*ht;l.push(Jt,Gt,we),l.push(Gt,Pe,we),yt+=6}o.addGroup(g,yt,R),g+=yt,u+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ra=class i extends sn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],u=[],g=[],_=0,E=[],f=n/2,d=0;L(),a===!1&&(t>0&&D(!0),e>0&&D(!1)),this.setIndex(h),this.setAttribute("position",new nn(p,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(g,2));function L(){let w=new B,b=new B,I=0,O=(e-t)/n;for(let v=0;v<=r;v++){let R=[],z=v/r,W=z*(e-t)+t;for(let Y=0;Y<=s;Y++){let Z=Y/s,k=Z*l+o,J=Math.sin(k),it=Math.cos(k);b.x=W*J,b.y=-z*n+f,b.z=W*it,p.push(b.x,b.y,b.z),w.set(J,O,it).normalize(),u.push(w.x,w.y,w.z),g.push(Z,1-z),R.push(_++)}E.push(R)}for(let v=0;v<s;v++)for(let R=0;R<r;R++){let z=E[R][v],W=E[R+1][v],Y=E[R+1][v+1],Z=E[R][v+1];(t>0||R!==0)&&(h.push(z,W,Z),I+=3),(e>0||R!==r-1)&&(h.push(W,Y,Z),I+=3)}c.addGroup(d,I,0),d+=I}function D(w){let b=_,I=new Nt,O=new B,v=0,R=w===!0?t:e,z=w===!0?1:-1;for(let Y=1;Y<=s;Y++)p.push(0,f*z,0),u.push(0,z,0),g.push(.5,.5),_++;let W=_;for(let Y=0;Y<=s;Y++){let k=Y/s*l+o,J=Math.cos(k),it=Math.sin(k);O.x=R*it,O.y=f*z,O.z=R*J,p.push(O.x,O.y,O.z),u.push(0,z,0),I.x=J*.5+.5,I.y=it*.5*z+.5,g.push(I.x,I.y),_++}for(let Y=0;Y<s;Y++){let Z=b+Y,k=W+Y;w===!0?h.push(k,k+1,Z):h.push(k+1,k,Z),v+=3}c.addGroup(d,v,w===!0?1:2),d+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ae("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,g=(a-h)/u;return(s+g)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Nt:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new B,s=[],r=[],a=[],o=new B,l=new Ne;for(let g=0;g<=t;g++){let _=g/t;s[g]=this.getTangentAt(_,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(s[g-1],s[g]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(xe(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(o,_))}a[g].crossVectors(s[g],r[g])}if(e===!0){let g=Math.acos(xe(r[0].dot(r[t]),-1,1));g/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(g=-g);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],g*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Pr=class extends si{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,g=c-this.aY;l=u*h-g*p+this.aX,c=u*p+g*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},yl=class extends Pr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function wu(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,g=(o-a)/h-(l-a)/(h+p)+(l-o)/p;u*=h,g*=h,s(a,o,u,g)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Qd=new B,tf=new B,Uh=new wu,Fh=new wu,Oh=new wu,Sl=class extends si{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(tf.subVectors(s[0],s[1]).add(s[0]),c=tf);let p=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Qd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qd),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(p),g),E=Math.pow(p.distanceToSquared(u),g),f=Math.pow(u.distanceToSquared(h),g);E<1e-4&&(E=1),_<1e-4&&(_=E),f<1e-4&&(f=E),Uh.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,_,E,f),Fh.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,_,E,f),Oh.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,_,E,f)}else this.curveType==="catmullrom"&&(Uh.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),Fh.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),Oh.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return n.set(Uh.calc(l),Fh.calc(l),Oh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ef(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function _g(i,t){let e=1-i;return e*e*t}function xg(i,t){return 2*(1-i)*i*t}function vg(i,t){return i*i*t}function da(i,t,e,n){return _g(i,t)+xg(i,e)+vg(i,n)}function yg(i,t){let e=1-i;return e*e*e*t}function Sg(i,t){let e=1-i;return 3*e*e*i*t}function Mg(i,t){return 3*(1-i)*i*i*t}function bg(i,t){return i*i*i*t}function fa(i,t,e,n,s){return yg(i,t)+Sg(i,e)+Mg(i,n)+bg(i,s)}var Ia=class extends si{constructor(t=new Nt,e=new Nt,n=new Nt,s=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fa(t,s.x,r.x,a.x,o.x),fa(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ml=class extends si{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fa(t,s.x,r.x,a.x,o.x),fa(t,s.y,r.y,a.y,o.y),fa(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pa=class extends si{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bl=class extends si{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},La=class extends si{constructor(t=new Nt,e=new Nt,n=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(da(t,s.x,r.x,a.x),da(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wl=class extends si{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(da(t,s.x,r.x,a.x),da(t,s.y,r.y,a.y),da(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Da=class extends si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(ef(o,l.x,c.x,h.x,p.x),ef(o,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Nt().fromArray(s))}return this}},Xh=Object.freeze({__proto__:null,ArcCurve:yl,CatmullRomCurve3:Sl,CubicBezierCurve:Ia,CubicBezierCurve3:Ml,EllipseCurve:Pr,LineCurve:Pa,LineCurve3:bl,QuadraticBezierCurve:La,QuadraticBezierCurve3:wl,SplineCurve:Da}),El=class extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Xh[s.type]().fromJSON(s))}return this}},ks=class extends El{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Pa(this.currentPoint.clone(),new Nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new La(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ia(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s),new Nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Da(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Pr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Lr=class extends ks{constructor(t){super(t),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ks().fromJSON(s))}return this}};function wg(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=tp(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Rg(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,p=l;for(let u=e;u<s;u+=e){let g=i[u],_=i[u+1];g<o&&(o=g),_<l&&(l=_),g>h&&(h=g),_>p&&(p=_)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return Na(r,a,e,o,l,c,0),a}function tp(i,t,e,n,s){let r;if(s===kg(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=nf(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=nf(a/n|0,i[a],i[a+1],r);return r&&Dr(r,r.next)&&(Fa(r),r=r.next),r}function Vs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Dr(e,e.next)||en(e.prev,e,e.next)===0)){if(Fa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Na(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Ng(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Tg(i,n,s,r):Eg(i)){t.push(l.i,i.i,c.i),Fa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ag(Vs(i),t),Na(i,t,e,n,s,r,2)):a===2&&Cg(i,t,e,n,s,r):Na(Vs(i),t,e,n,s,r,1);break}}}function Eg(i){let t=i.prev,e=i,n=i.next;if(en(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),p=Math.min(o,l,c),u=Math.max(s,r,a),g=Math.max(o,l,c),_=n.next;for(;_!==t;){if(_.x>=h&&_.x<=u&&_.y>=p&&_.y<=g&&ca(s,o,r,l,a,c,_.x,_.y)&&en(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Tg(i,t,e,n){let s=i.prev,r=i,a=i.next;if(en(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,p=r.y,u=a.y,g=Math.min(o,l,c),_=Math.min(h,p,u),E=Math.max(o,l,c),f=Math.max(h,p,u),d=qh(g,_,t,e,n),L=qh(E,f,t,e,n),D=i.prevZ,w=i.nextZ;for(;D&&D.z>=d&&w&&w.z<=L;){if(D.x>=g&&D.x<=E&&D.y>=_&&D.y<=f&&D!==s&&D!==a&&ca(o,h,l,p,c,u,D.x,D.y)&&en(D.prev,D,D.next)>=0||(D=D.prevZ,w.x>=g&&w.x<=E&&w.y>=_&&w.y<=f&&w!==s&&w!==a&&ca(o,h,l,p,c,u,w.x,w.y)&&en(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;D&&D.z>=d;){if(D.x>=g&&D.x<=E&&D.y>=_&&D.y<=f&&D!==s&&D!==a&&ca(o,h,l,p,c,u,D.x,D.y)&&en(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;w&&w.z<=L;){if(w.x>=g&&w.x<=E&&w.y>=_&&w.y<=f&&w!==s&&w!==a&&ca(o,h,l,p,c,u,w.x,w.y)&&en(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Ag(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Dr(n,s)&&np(n,e,e.next,s)&&Ua(n,s)&&Ua(s,n)&&(t.push(n.i,e.i,s.i),Fa(e),Fa(e.next),e=i=s),e=e.next}while(e!==i);return Vs(e)}function Cg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Og(a,o)){let l=ip(a,o);a=Vs(a,a.next),l=Vs(l,l.next),Na(a,t,e,n,s,r,0),Na(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Rg(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=tp(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Fg(c))}s.sort(Ig);for(let r=0;r<s.length;r++)e=Pg(s[r],e);return e}function Ig(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Pg(i,t){let e=Lg(i,t);if(!e)return t;let n=ip(e,i);return Vs(n,n.next),Vs(e,e.next)}function Lg(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Dr(i,e))return e;do{if(Dr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ep(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);Ua(e,i)&&(p<h||p===h&&(e.x>a.x||e.x===a.x&&Dg(a,e)))&&(a=e,h=p)}e=e.next}while(e!==o);return a}function Dg(i,t){return en(i.prev,i,t.prev)<0&&en(t.next,i,i.next)<0}function Ng(i,t,e,n){let s=i;do s.z===0&&(s.z=qh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ug(s)}function Ug(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function qh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Fg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ep(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ca(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&ep(i,t,e,n,s,r,a,o)}function Og(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Bg(i,t)&&(Ua(i,t)&&Ua(t,i)&&zg(i,t)&&(en(i.prev,i,t.prev)||en(i,t.prev,t))||Dr(i,t)&&en(i.prev,i,i.next)>0&&en(t.prev,t,t.next)>0)}function en(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Dr(i,t){return i.x===t.x&&i.y===t.y}function np(i,t,e,n){let s=Zo(en(i,t,e)),r=Zo(en(i,t,n)),a=Zo(en(e,n,i)),o=Zo(en(e,n,t));return!!(s!==r&&a!==o||s===0&&Yo(i,e,t)||r===0&&Yo(i,n,t)||a===0&&Yo(e,i,n)||o===0&&Yo(e,t,n))}function Yo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Zo(i){return i>0?1:i<0?-1:0}function Bg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&np(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ua(i,t){return en(i.prev,i,i.next)<0?en(i,t,i.next)>=0&&en(i,i.prev,t)>=0:en(i,t,i.prev)<0||en(i,i.next,t)<0}function zg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ip(i,t){let e=Yh(i.i,i.x,i.y),n=Yh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function nf(i,t,e,n){let s=Yh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Yh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Zh=class{static triangulate(t,e,n=2){return wg(t,e,n)}},Ns=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];sf(t),rf(n,t);let a=t.length;e.forEach(sf);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,rf(n,e[l]);let o=Zh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function sf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function rf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Oa=class i extends sn{constructor(t=new Lr([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new nn(s,3)),this.setAttribute("uv",new nn(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:g-.1,E=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,L=e.UVGenerator!==void 0?e.UVGenerator:Vg,D,w=!1,b,I,O,v;if(d){D=d.getSpacedPoints(h),w=!0,u=!1;let F=d.isCatmullRomCurve3?d.closed:!1;b=d.computeFrenetFrames(h,F),I=new B,O=new B,v=new B}u||(f=0,g=0,_=0,E=0);let R=o.extractPoints(c),z=R.shape,W=R.holes;if(!Ns.isClockWise(z)){z=z.reverse();for(let F=0,_t=W.length;F<_t;F++){let bt=W[F];Ns.isClockWise(bt)&&(W[F]=bt.reverse())}}function Z(F){let bt=10000000000000001e-36,Mt=F[0];for(let wt=1;wt<=F.length;wt++){let te=wt%F.length,Wt=F[te],le=Wt.x-Mt.x,he=Wt.y-Mt.y,U=le*le+he*he,De=Math.max(Math.abs(Wt.x),Math.abs(Wt.y),Math.abs(Mt.x),Math.abs(Mt.y)),Se=bt*De*De;if(U<=Se){F.splice(te,1),wt--;continue}Mt=Wt}}Z(z),W.forEach(Z);let k=W.length,J=z;for(let F=0;F<k;F++){let _t=W[F];z=z.concat(_t)}function it(F,_t,bt){return _t||ce("ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(_t,bt)}let st=z.length;function yt(F,_t,bt){let Mt,wt,te,Wt=F.x-_t.x,le=F.y-_t.y,he=bt.x-F.x,U=bt.y-F.y,De=Wt*Wt+le*le,Se=Wt*U-le*he;if(Math.abs(Se)>Number.EPSILON){let C=Math.sqrt(De),x=Math.sqrt(he*he+U*U),q=_t.x-le/C,tt=_t.y+Wt/C,ot=bt.x-U/x,At=bt.y+he/x,It=((ot-q)*U-(At-tt)*he)/(Wt*U-le*he);Mt=q+Wt*It-F.x,wt=tt+le*It-F.y;let lt=Mt*Mt+wt*wt;if(lt<=2)return new Nt(Mt,wt);te=Math.sqrt(lt/2)}else{let C=!1;Wt>Number.EPSILON?he>Number.EPSILON&&(C=!0):Wt<-Number.EPSILON?he<-Number.EPSILON&&(C=!0):Math.sign(le)===Math.sign(U)&&(C=!0),C?(Mt=-le,wt=Wt,te=Math.sqrt(De)):(Mt=Wt,wt=le,te=Math.sqrt(De/2))}return new Nt(Mt/te,wt/te)}let rt=[];for(let F=0,_t=J.length,bt=_t-1,Mt=F+1;F<_t;F++,bt++,Mt++)bt===_t&&(bt=0),Mt===_t&&(Mt=0),rt[F]=yt(J[F],J[bt],J[Mt]);let ht=[],pt,Jt=rt.concat();for(let F=0,_t=k;F<_t;F++){let bt=W[F];pt=[];for(let Mt=0,wt=bt.length,te=wt-1,Wt=Mt+1;Mt<wt;Mt++,te++,Wt++)te===wt&&(te=0),Wt===wt&&(Wt=0),pt[Mt]=yt(bt[Mt],bt[te],bt[Wt]);ht.push(pt),Jt=Jt.concat(pt)}let Gt;if(f===0)Gt=Ns.triangulateShape(J,W);else{let F=[],_t=[];for(let bt=0;bt<f;bt++){let Mt=bt/f,wt=g*Math.cos(Mt*Math.PI/2),te=_*Math.sin(Mt*Math.PI/2)+E;for(let Wt=0,le=J.length;Wt<le;Wt++){let he=it(J[Wt],rt[Wt],te);Ut(he.x,he.y,-wt),Mt===0&&F.push(he)}for(let Wt=0,le=k;Wt<le;Wt++){let he=W[Wt];pt=ht[Wt];let U=[];for(let De=0,Se=he.length;De<Se;De++){let C=it(he[De],pt[De],te);Ut(C.x,C.y,-wt),Mt===0&&U.push(C)}Mt===0&&_t.push(U)}}Gt=Ns.triangulateShape(F,_t)}let Pe=Gt.length,we=_+E;for(let F=0;F<st;F++){let _t=u?it(z[F],Jt[F],we):z[F];w?(O.copy(b.normals[0]).multiplyScalar(_t.x),I.copy(b.binormals[0]).multiplyScalar(_t.y),v.copy(D[0]).add(O).add(I),Ut(v.x,v.y,v.z)):Ut(_t.x,_t.y,0)}for(let F=1;F<=h;F++)for(let _t=0;_t<st;_t++){let bt=u?it(z[_t],Jt[_t],we):z[_t];w?(O.copy(b.normals[F]).multiplyScalar(bt.x),I.copy(b.binormals[F]).multiplyScalar(bt.y),v.copy(D[F]).add(O).add(I),Ut(v.x,v.y,v.z)):Ut(bt.x,bt.y,p/h*F)}for(let F=f-1;F>=0;F--){let _t=F/f,bt=g*Math.cos(_t*Math.PI/2),Mt=_*Math.sin(_t*Math.PI/2)+E;for(let wt=0,te=J.length;wt<te;wt++){let Wt=it(J[wt],rt[wt],Mt);Ut(Wt.x,Wt.y,p+bt)}for(let wt=0,te=W.length;wt<te;wt++){let Wt=W[wt];pt=ht[wt];for(let le=0,he=Wt.length;le<he;le++){let U=it(Wt[le],pt[le],Mt);w?Ut(U.x,U.y+D[h-1].y,D[h-1].x+bt):Ut(U.x,U.y,p+bt)}}}Te(),et();function Te(){let F=s.length/3;if(u){let _t=0,bt=st*_t;for(let Mt=0;Mt<Pe;Mt++){let wt=Gt[Mt];ie(wt[2]+bt,wt[1]+bt,wt[0]+bt)}_t=h+f*2,bt=st*_t;for(let Mt=0;Mt<Pe;Mt++){let wt=Gt[Mt];ie(wt[0]+bt,wt[1]+bt,wt[2]+bt)}}else{for(let _t=0;_t<Pe;_t++){let bt=Gt[_t];ie(bt[2],bt[1],bt[0])}for(let _t=0;_t<Pe;_t++){let bt=Gt[_t];ie(bt[0]+st*h,bt[1]+st*h,bt[2]+st*h)}}n.addGroup(F,s.length/3-F,0)}function et(){let F=s.length/3,_t=0;ut(J,_t),_t+=J.length;for(let bt=0,Mt=W.length;bt<Mt;bt++){let wt=W[bt];ut(wt,_t),_t+=wt.length}n.addGroup(F,s.length/3-F,1)}function ut(F,_t){let bt=F.length;for(;--bt>=0;){let Mt=bt,wt=bt-1;wt<0&&(wt=F.length-1);for(let te=0,Wt=h+f*2;te<Wt;te++){let le=st*te,he=st*(te+1),U=_t+Mt+le,De=_t+wt+le,Se=_t+wt+he,C=_t+Mt+he;Rt(U,De,Se,C)}}}function Ut(F,_t,bt){l.push(F),l.push(_t),l.push(bt)}function ie(F,_t,bt){Vt(F),Vt(_t),Vt(bt);let Mt=s.length/3,wt=L.generateTopUV(n,s,Mt-3,Mt-2,Mt-1);Le(wt[0]),Le(wt[1]),Le(wt[2])}function Rt(F,_t,bt,Mt){Vt(F),Vt(_t),Vt(Mt),Vt(_t),Vt(bt),Vt(Mt);let wt=s.length/3,te=L.generateSideWallUV(n,s,wt-6,wt-3,wt-2,wt-1);Le(te[0]),Le(te[1]),Le(te[3]),Le(te[1]),Le(te[2]),Le(te[3])}function Vt(F){s.push(l[F*3+0]),s.push(l[F*3+1]),s.push(l[F*3+2])}function Le(F){r.push(F.x),r.push(F.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Hg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Xh[s.type]().fromJSON(s)),new i(n,t.options)}},Vg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Nt(r,a),new Nt(o,l),new Nt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],u=t[s*3],g=t[s*3+1],_=t[s*3+2],E=t[r*3],f=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Nt(a,1-l),new Nt(c,1-p),new Nt(u,1-_),new Nt(E,1-d)]:[new Nt(o,1-l),new Nt(h,1-p),new Nt(g,1-_),new Nt(f,1-d)]}};function Hg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ba=class i extends sn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=t/o,u=e/l,g=[],_=[],E=[],f=[];for(let d=0;d<h;d++){let L=d*u-a;for(let D=0;D<c;D++){let w=D*p-r;_.push(w,-L,0),E.push(0,0,1),f.push(D/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let L=0;L<o;L++){let D=L+c*d,w=L+c*(d+1),b=L+1+c*(d+1),I=L+1+c*d;g.push(D,w,I),g.push(w,b,I)}this.setIndex(g),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(E,3)),this.setAttribute("uv",new nn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var za=class extends sn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new B,r=new B;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let p=l[c],u=p.start,g=p.count;for(let _=u,E=u+g;_<E;_+=3)for(let f=0;f<3;f++){let d=o.getX(_+f),L=o.getX(_+(f+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,L),af(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,p=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,p),af(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new nn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function af(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function $s(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(of(s))s.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(of(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function On(i){let t={};for(let e=0;e<i.length;e++){let n=$s(i[e]);for(let s in n)t[s]=n[s]}return t}function of(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Eu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}var io={clone:$s,merge:On},Wg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$g=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wg,this.fragmentShader=$g,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$s(t.uniforms),this.uniformsGroups=Gg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new oe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new He().fromArray(s.value);break;case"m3":this.uniforms[n].value=new me().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ne().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Tl=class extends Mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ka=class extends Bi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=Hl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Al=class extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Cl=class extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function gr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Bh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ms=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Rl=class extends ms{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hh,endingEnd:Hh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gh:r=t,o=2*e-n;break;case Wh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gh:a=t,l=2*n-e;break;case Wh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,g=this._weightNext,_=(n-e)/(s-e),E=_*_,f=E*_,d=-u*f+2*u*E-u*_,L=(1+u)*f+(-1.5-2*u)*E+(-.5+u)*_+1,D=(-1-g)*f+(1.5+g)*E+.5*_,w=g*f-g*E;for(let b=0;b!==o;++b)r[b]=d*a[h+b]+L*a[c+b]+D*a[l+b]+w*a[p+b];return r}},Il=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),p=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*p+a[l+u]*h;return r}},Pl=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ll=class extends ms{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let _=(n-e)/(s-e),E=1-_;for(let f=0;f!==o;++f)r[f]=a[c+f]*E+a[l+f]*_;return r}let u=o*2,g=t-1;for(let _=0;_!==o;++_){let E=a[c+_],f=a[l+_],d=g*u+_*2,L=p[d],D=p[d+1],w=t*u+_*2,b=h[w],I=h[w+1],O=qg(n,e,L,b,s);r[_]=sp(O,E,D,I,f)}return r}};function sp(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Xg(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function qg(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=sp(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Xg(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ri=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gr(e,this.TimeBufferType),this.values=gr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:gr(t.times,Array),values:gr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Bh(t.settings)&&(n.settings={inTangents:gr(t.settings.inTangents,Array),outTangents:gr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ll(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case pa:e=this.InterpolantFactoryMethodDiscrete;break;case hl:e=this.InterpolantFactoryMethodLinear;break;case Qo:e=this.InterpolantFactoryMethodSmooth;break;case Vh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ae("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return Qo;case this.InterpolantFactoryMethodBezier:return Vh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Bh(this.settings)&&(lf(this.settings.inTangents,t),lf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ce("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ce("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ce("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ce("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Um(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ce("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,u=p-n,g=p+n;for(let _=0;_!==n;++_){let E=e[p+_];if(E!==e[u+_]||E!==e[g+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,u=a*n;for(let g=0;g!==n;++g)e[u+g]=e[p+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Bh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function lf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}ri.prototype.ValueTypeName="";ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=hl;var gs=class extends ri{constructor(t,e,n){super(t,e,n)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=pa;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}};Dl.prototype.ValueTypeName="color";var Nl=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}};Nl.prototype.ValueTypeName="number";var Ul=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Oi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Va=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ul(this.times,this.values,this.getValueSize(),t)}};Va.prototype.ValueTypeName="quaternion";Va.prototype.InterpolantFactoryMethodSmooth=void 0;var _s=class extends ri{constructor(t,e,n){super(t,e,n)}};_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=pa;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Fl=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}};Fl.prototype.ValueTypeName="vector";var Ol=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let g=c[p],_=c[p+1];if(g.global&&(g.lastIndex=0),g.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rp=new Ol,Bl=class{constructor(t){this.manager=t!==void 0?t:rp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Bl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ha=class extends yn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ga=class extends Ha{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},zh=new Ne,cf=new B,hf=new B,zl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rr,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;cf.setFromMatrixPosition(t.matrixWorld),e.position.copy(cf),hf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){zh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(zh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===br||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(zh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Jo=new B,Ko=new Oi,Li=new B,Wa=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Jo,Ko,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Ko,Li.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Jo,Ko,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Ko,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ds=new B,uf=new Nt,df=new Nt,Fn=class extends Wa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ds.x,ds.y).multiplyScalar(-t/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-t/ds.z)}getViewSize(t,e){return this.getViewBounds(t,uf,df),e.subVectors(df,uf)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ha*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Nr=class extends Wa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Jh=class extends zl{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$a=class extends Ha{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new Jh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Xa=class extends sn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var _r=-90,xr=1,kl=class extends yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fn(_r,xr,t,e);s.layers=this.layers,this.add(s);let r=new Fn(_r,xr,t,e);r.layers=this.layers,this.add(r);let a=new Fn(_r,xr,t,e);a.layers=this.layers,this.add(a);let o=new Fn(_r,xr,t,e);o.layers=this.layers,this.add(o);let l=new Fn(_r,xr,t,e);l.layers=this.layers,this.add(l);let c=new Fn(_r,xr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=E,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,u,g),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Vl=class extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Tu="\\[\\]\\.:\\/",Yg=new RegExp("["+Tu+"]","g"),Au="[^"+Tu+"]",Zg="[^"+Tu.replace("\\.","")+"]",Jg=/((?:WC+[\/:])*)/.source.replace("WC",Au),Kg=/(WCOD+)?/.source.replace("WCOD",Zg),jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Au),Qg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Au),t0=new RegExp("^"+Jg+Kg+jg+Qg+"$"),e0=["material","materials","bones","map"],Kh=class{constructor(t,e,n){let s=n||Ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ke=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yg,"")}static parseTrackName(t){let e=t0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);e0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ce("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ke.Composite=Kh;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gS=new Float32Array(1);var xs=class extends pl{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var ff=new Ne,Hs=class{constructor(t,e,n=0,s=1/0){this.ray=new Fs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ar,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ff.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ff),this}intersectObject(t,e=!0,n=[]){return jh(t,this,n,e),n.sort(pf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)jh(t[s],this,n,e);return n.sort(pf),n}};function pf(i,t){return i.distance-t.distance}function jh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)jh(r[a],t,e,!0)}}var Qh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var mf=new B,jo=new B,vr=new B,yr=new B,kh=new B,n0=new B,i0=new B,qa=class{constructor(t=new B,e=new B){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){mf.subVectors(t,this.start),jo.subVectors(this.end,this.start);let n=jo.dot(jo);if(n===0)return 0;let r=jo.dot(mf)/n;return e&&(r=xe(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=n0,n=i0){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;vr.subVectors(c,o),yr.subVectors(h,l),kh.subVectors(o,l);let p=vr.dot(vr),u=yr.dot(yr),g=yr.dot(kh);if(p<=s&&u<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(p<=s)r=0,a=g/u,a=xe(a,0,1);else{let _=vr.dot(kh);if(u<=s)a=0,r=xe(-_/p,0,1);else{let E=vr.dot(yr),f=p*u-E*E;f!==0?r=xe((E*g-_*u)/f,0,1):r=0,a=(E*r+g)/u,a<0?(a=0,r=xe(-_/p,0,1)):a>1&&(a=1,r=xe((E-_)/p,0,1))}}return e.copy(o).addScaledVector(vr,r),n.copy(l).addScaledVector(yr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Cu(i,t,e,n){let s=s0(n);switch(e){case xu:return i*t;case Zl:return i*t/s.components*s.byteLength;case Jl:return i*t/s.components*s.byteLength;case bs:return i*t*2/s.components*s.byteLength;case Kl:return i*t*2/s.components*s.byteLength;case vu:return i*t*3/s.components*s.byteLength;case pi:return i*t*4/s.components*s.byteLength;case jl:return i*t*4/s.components*s.byteLength;case Ka:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tc:case nc:return Math.max(i,16)*Math.max(t,8)/4;case Ql:case ec:return Math.max(i,8)*Math.max(t,8)/2;case ic:case sc:case ac:case oc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rc:case eo:case lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case uc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case mc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case gc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _c:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case vc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case bc:case wc:case Ec:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Tc:case Ac:return Math.ceil(i/4)*Math.ceil(t/4)*8;case no:case Cc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function s0(i){switch(i){case Qn:case pu:return{byteLength:1,components:1};case Or:case mu:case Ti:return{byteLength:2,components:1};case ql:case Yl:return{byteLength:2,components:4};case Ei:case Xl:case fi:return{byteLength:4,components:1};case gu:case _u:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ap(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function a0(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,h);else{p.sort((g,_)=>g.start-_.start);let u=0;for(let g=1;g<p.length;g++){let _=p[u],E=p[g];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++u,p[u]=E)}p.length=u+1;for(let g=0,_=p.length;g<_;g++){let E=p[g];i.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var o0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l0=`#ifdef USE_ALPHAHASH
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
#endif`,c0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f0=`#ifdef USE_AOMAP
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
#endif`,p0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m0=`#ifdef USE_BATCHING
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
#endif`,g0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y0=`#ifdef USE_IRIDESCENCE
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
#endif`,S0=`#ifdef USE_BUMPMAP
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
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,A0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,I0=`#define PI 3.141592653589793
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
} // validated`,P0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,L0=`vec3 transformedNormal = objectNormal;
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
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O0="gl_FragColor = linearToOutputTexel( gl_FragColor );",B0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,H0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y0=`#ifdef USE_GRADIENTMAP
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
}`,Z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Q0=`#ifdef USE_ENVMAP
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
#endif`,t_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s_=`PhysicalMaterial material;
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
#endif`,r_=`uniform sampler2D dfgLUT;
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
}`,a_=`
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
#endif`,o_=`#if defined( RE_IndirectDiffuse )
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
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,h_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,__=`#if defined( USE_POINTS_UV )
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
#endif`,x_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b_=`#ifdef USE_MORPHTARGETS
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
#endif`,w_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,I_=`#ifdef USE_NORMALMAP
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
#endif`,P_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X_=`float getShadowMask() {
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
}`,q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y_=`#ifdef USE_SKINNING
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
#endif`,Z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J_=`#ifdef USE_SKINNING
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
#endif`,K_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ex=`#ifdef USE_TRANSMISSION
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
#endif`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lx=`uniform sampler2D t2D;
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`#include <common>
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
}`,px=`#if DEPTH_PACKING == 3200
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
}`,mx=`#define DISTANCE
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
}`,gx=`#define DISTANCE
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`uniform float scale;
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
}`,yx=`uniform vec3 diffuse;
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
}`,Sx=`#include <common>
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
}`,Mx=`uniform vec3 diffuse;
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
}`,bx=`#define LAMBERT
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
}`,wx=`#define LAMBERT
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
}`,Ex=`#define MATCAP
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
}`,Tx=`#define MATCAP
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
}`,Ax=`#define NORMAL
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
}`,Cx=`#define NORMAL
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
}`,Rx=`#define PHONG
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
}`,Ix=`#define PHONG
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
}`,Px=`#define STANDARD
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
}`,Lx=`#define STANDARD
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
}`,Dx=`#define TOON
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
}`,Nx=`#define TOON
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
}`,Ux=`uniform float size;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Ox=`#include <common>
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
}`,Bx=`uniform vec3 color;
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
}`,zx=`uniform float rotation;
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
}`,kx=`uniform vec3 diffuse;
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
}`,be={alphahash_fragment:o0,alphahash_pars_fragment:l0,alphamap_fragment:c0,alphamap_pars_fragment:h0,alphatest_fragment:u0,alphatest_pars_fragment:d0,aomap_fragment:f0,aomap_pars_fragment:p0,batching_pars_vertex:m0,batching_vertex:g0,begin_vertex:_0,beginnormal_vertex:x0,bsdfs:v0,iridescence_fragment:y0,bumpmap_pars_fragment:S0,clipping_planes_fragment:M0,clipping_planes_pars_fragment:b0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:E0,color_fragment:T0,color_pars_fragment:A0,color_pars_vertex:C0,color_vertex:R0,common:I0,cube_uv_reflection_fragment:P0,defaultnormal_vertex:L0,displacementmap_pars_vertex:D0,displacementmap_vertex:N0,emissivemap_fragment:U0,emissivemap_pars_fragment:F0,colorspace_fragment:O0,colorspace_pars_fragment:B0,envmap_fragment:z0,envmap_common_pars_fragment:k0,envmap_pars_fragment:V0,envmap_pars_vertex:H0,envmap_physical_pars_fragment:Q0,envmap_vertex:G0,fog_vertex:W0,fog_pars_vertex:$0,fog_fragment:X0,fog_pars_fragment:q0,gradientmap_pars_fragment:Y0,lightmap_pars_fragment:Z0,lights_lambert_fragment:J0,lights_lambert_pars_fragment:K0,lights_pars_begin:j0,lights_toon_fragment:t_,lights_toon_pars_fragment:e_,lights_phong_fragment:n_,lights_phong_pars_fragment:i_,lights_physical_fragment:s_,lights_physical_pars_fragment:r_,lights_fragment_begin:a_,lights_fragment_maps:o_,lights_fragment_end:l_,lightprobes_pars_fragment:c_,logdepthbuf_fragment:h_,logdepthbuf_pars_fragment:u_,logdepthbuf_pars_vertex:d_,logdepthbuf_vertex:f_,map_fragment:p_,map_pars_fragment:m_,map_particle_fragment:g_,map_particle_pars_fragment:__,metalnessmap_fragment:x_,metalnessmap_pars_fragment:v_,morphinstance_vertex:y_,morphcolor_vertex:S_,morphnormal_vertex:M_,morphtarget_pars_vertex:b_,morphtarget_vertex:w_,normal_fragment_begin:E_,normal_fragment_maps:T_,normal_pars_fragment:A_,normal_pars_vertex:C_,normal_vertex:R_,normalmap_pars_fragment:I_,clearcoat_normal_fragment_begin:P_,clearcoat_normal_fragment_maps:L_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:N_,opaque_fragment:U_,packing:F_,premultiplied_alpha_fragment:O_,project_vertex:B_,dithering_fragment:z_,dithering_pars_fragment:k_,roughnessmap_fragment:V_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:W_,shadowmap_vertex:$_,shadowmask_pars_fragment:X_,skinbase_vertex:q_,skinning_pars_vertex:Y_,skinning_vertex:Z_,skinnormal_vertex:J_,specularmap_fragment:K_,specularmap_pars_fragment:j_,tonemapping_fragment:Q_,tonemapping_pars_fragment:tx,transmission_fragment:ex,transmission_pars_fragment:nx,uv_pars_fragment:ix,uv_pars_vertex:sx,uv_vertex:rx,worldpos_vertex:ax,background_vert:ox,background_frag:lx,backgroundCube_vert:cx,backgroundCube_frag:hx,cube_vert:ux,cube_frag:dx,depth_vert:fx,depth_frag:px,distance_vert:mx,distance_frag:gx,equirect_vert:_x,equirect_frag:xx,linedashed_vert:vx,linedashed_frag:yx,meshbasic_vert:Sx,meshbasic_frag:Mx,meshlambert_vert:bx,meshlambert_frag:wx,meshmatcap_vert:Ex,meshmatcap_frag:Tx,meshnormal_vert:Ax,meshnormal_frag:Cx,meshphong_vert:Rx,meshphong_frag:Ix,meshphysical_vert:Px,meshphysical_frag:Lx,meshtoon_vert:Dx,meshtoon_frag:Nx,points_vert:Ux,points_frag:Fx,shadow_vert:Ox,shadow_frag:Bx,sprite_vert:zx,sprite_frag:kx},Bt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},$n={basic:{uniforms:On([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:On([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new oe(0)},envMapIntensity:{value:1}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:On([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:On([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:On([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new oe(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:On([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:On([Bt.points,Bt.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:On([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:On([Bt.common,Bt.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:On([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:On([Bt.sprite,Bt.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distance:{uniforms:On([Bt.common,Bt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distance_vert,fragmentShader:be.distance_frag},shadow:{uniforms:On([Bt.lights,Bt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};$n.physical={uniforms:On([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};var Lc={r:0,b:0,g:0},Vx=new Ne,Cp=new me;Cp.set(-1,0,0,0,1,0,0,0,1);function Hx(i,t,e,n,s,r){let a=new oe(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function g(L){let D=L.isScene===!0?L.background:null;if(D&&D.isTexture){let w=L.backgroundBlurriness>0;D=t.get(D,w)}return D}function _(L){let D=!1,w=g(L);w===null?f(a,o):w&&w.isColor&&(f(w,1),D=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||D)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(L,D){let w=g(D);w&&(w.isCubeTexture||w.mapping===Za)?(c===void 0&&(c=new Sn(new Ir(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:$s($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(D.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cp),c.material.toneMapped=Re.getTransfer(w.colorSpace)!==Ve,(h!==w||p!==w.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,p=w.version,u=i.toneMapping),c.layers.enableAll(),L.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Sn(new Ba(2,2),new Mn({name:"BackgroundMaterial",uniforms:$s($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.toneMapped=Re.getTransfer(w.colorSpace)!==Ve,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||p!==w.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=w,p=w.version,u=i.toneMapping),l.layers.enableAll(),L.unshift(l,l.geometry,l.material,0,0,null))}function f(L,D){L.getRGB(Lc,Eu(i)),e.buffers.color.setClear(Lc.r,Lc.g,Lc.b,D,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(L,D=1){a.set(L),o=D,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(L){o=L,f(a,o)},render:_,addToRenderList:E,dispose:d}}function Gx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(W,Y,Z,k,J){let it=!1,st=p(W,k,Z,Y);r!==st&&(r=st,c(r.object)),it=g(W,k,Z,J),it&&_(W,k,Z,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(it||a)&&(a=!1,w(W,Y,Z,k),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return i.createVertexArray()}function c(W){return i.bindVertexArray(W)}function h(W){return i.deleteVertexArray(W)}function p(W,Y,Z,k){let J=k.wireframe===!0,it=n[Y.id];it===void 0&&(it={},n[Y.id]=it);let st=W.isInstancedMesh===!0?W.id:0,yt=it[st];yt===void 0&&(yt={},it[st]=yt);let rt=yt[Z.id];rt===void 0&&(rt={},yt[Z.id]=rt);let ht=rt[J];return ht===void 0&&(ht=u(l()),rt[J]=ht),ht}function u(W){let Y=[],Z=[],k=[];for(let J=0;J<e;J++)Y[J]=0,Z[J]=0,k[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:Z,attributeDivisors:k,object:W,attributes:{},index:null}}function g(W,Y,Z,k){let J=r.attributes,it=Y.attributes,st=0,yt=Z.getAttributes();for(let rt in yt)if(yt[rt].location>=0){let pt=J[rt],Jt=it[rt];if(Jt===void 0&&(rt==="instanceMatrix"&&W.instanceMatrix&&(Jt=W.instanceMatrix),rt==="instanceColor"&&W.instanceColor&&(Jt=W.instanceColor)),pt===void 0||pt.attribute!==Jt||Jt&&pt.data!==Jt.data)return!0;st++}return r.attributesNum!==st||r.index!==k}function _(W,Y,Z,k){let J={},it=Y.attributes,st=0,yt=Z.getAttributes();for(let rt in yt)if(yt[rt].location>=0){let pt=it[rt];pt===void 0&&(rt==="instanceMatrix"&&W.instanceMatrix&&(pt=W.instanceMatrix),rt==="instanceColor"&&W.instanceColor&&(pt=W.instanceColor));let Jt={};Jt.attribute=pt,pt&&pt.data&&(Jt.data=pt.data),J[rt]=Jt,st++}r.attributes=J,r.attributesNum=st,r.index=k}function E(){let W=r.newAttributes;for(let Y=0,Z=W.length;Y<Z;Y++)W[Y]=0}function f(W){d(W,0)}function d(W,Y){let Z=r.newAttributes,k=r.enabledAttributes,J=r.attributeDivisors;Z[W]=1,k[W]===0&&(i.enableVertexAttribArray(W),k[W]=1),J[W]!==Y&&(i.vertexAttribDivisor(W,Y),J[W]=Y)}function L(){let W=r.newAttributes,Y=r.enabledAttributes;for(let Z=0,k=Y.length;Z<k;Z++)Y[Z]!==W[Z]&&(i.disableVertexAttribArray(Z),Y[Z]=0)}function D(W,Y,Z,k,J,it,st){st===!0?i.vertexAttribIPointer(W,Y,Z,J,it):i.vertexAttribPointer(W,Y,Z,k,J,it)}function w(W,Y,Z,k){E();let J=k.attributes,it=Z.getAttributes(),st=Y.defaultAttributeValues;for(let yt in it){let rt=it[yt];if(rt.location>=0){let ht=J[yt];if(ht===void 0&&(yt==="instanceMatrix"&&W.instanceMatrix&&(ht=W.instanceMatrix),yt==="instanceColor"&&W.instanceColor&&(ht=W.instanceColor)),ht!==void 0){let pt=ht.normalized,Jt=ht.itemSize,Gt=t.get(ht);if(Gt===void 0)continue;let Pe=Gt.buffer,we=Gt.type,Te=Gt.bytesPerElement,et=we===i.INT||we===i.UNSIGNED_INT||ht.gpuType===Xl;if(ht.isInterleavedBufferAttribute){let ut=ht.data,Ut=ut.stride,ie=ht.offset;if(ut.isInstancedInterleavedBuffer){for(let Rt=0;Rt<rt.locationSize;Rt++)d(rt.location+Rt,ut.meshPerAttribute);W.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Rt=0;Rt<rt.locationSize;Rt++)f(rt.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let Rt=0;Rt<rt.locationSize;Rt++)D(rt.location+Rt,Jt/rt.locationSize,we,pt,Ut*Te,(ie+Jt/rt.locationSize*Rt)*Te,et)}else{if(ht.isInstancedBufferAttribute){for(let ut=0;ut<rt.locationSize;ut++)d(rt.location+ut,ht.meshPerAttribute);W.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ut=0;ut<rt.locationSize;ut++)f(rt.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let ut=0;ut<rt.locationSize;ut++)D(rt.location+ut,Jt/rt.locationSize,we,pt,Jt*Te,Jt/rt.locationSize*ut*Te,et)}}else if(st!==void 0){let pt=st[yt];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(rt.location,pt);break;case 3:i.vertexAttrib3fv(rt.location,pt);break;case 4:i.vertexAttrib4fv(rt.location,pt);break;default:i.vertexAttrib1fv(rt.location,pt)}}}}L()}function b(){R();for(let W in n){let Y=n[W];for(let Z in Y){let k=Y[Z];for(let J in k){let it=k[J];for(let st in it)h(it[st].object),delete it[st];delete k[J]}}delete n[W]}}function I(W){if(n[W.id]===void 0)return;let Y=n[W.id];for(let Z in Y){let k=Y[Z];for(let J in k){let it=k[J];for(let st in it)h(it[st].object),delete it[st];delete k[J]}}delete n[W.id]}function O(W){for(let Y in n){let Z=n[Y];for(let k in Z){let J=Z[k];if(J[W.id]===void 0)continue;let it=J[W.id];for(let st in it)h(it[st].object),delete it[st];delete J[W.id]}}}function v(W){for(let Y in n){let Z=n[Y],k=W.isInstancedMesh===!0?W.id:0,J=Z[k];if(J!==void 0){for(let it in J){let st=J[it];for(let yt in st)h(st[yt].object),delete st[yt];delete J[it]}delete Z[k],Object.keys(Z).length===0&&delete n[Y]}}}function R(){z(),a=!0,r!==s&&(r=s,c(r.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:z,dispose:b,releaseStatesOfGeometry:I,releaseStatesOfObject:v,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:f,disableUnusedAttributes:L}}function Wx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let g=0;g<h;g++)u+=c[g];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $x(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let O=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(O){return!(O!==pi&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(O){let v=O===Ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Qn&&O!==fi&&!v&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ae("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),I=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:g,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:w,maxSamples:b,samples:I}}function Xx(i){let t=this,e=null,n=0,s=!1,r=!1,a=new vi,o=new me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let g=p.length!==0||u||n!==0||s;return s=u,n=p.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){e=h(p,u,0)},this.setState=function(p,u,g){let _=p.clippingPlanes,E=p.clipIntersection,f=p.clipShadows,d=i.get(p);if(!s||_===null||_.length===0||r&&!f)r?h(null):c();else{let L=r?0:n,D=L*4,w=d.clippingState||null;l.value=w,w=h(_,u,D,g);for(let b=0;b!==D;++b)w[b]=e[b];d.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,u,g,_){let E=p!==null?p.length:0,f=null;if(E!==0){if(f=l.value,_!==!0||f===null){let d=g+E*4,L=u.matrixWorldInverse;o.getNormalMatrix(L),(f===null||f.length<d)&&(f=new Float32Array(d));for(let D=0,w=g;D!==E;++D,w+=4)a.copy(p[D]).applyMatrix4(L,o),a.normal.toArray(f,w),f[w+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,f}}var kr=4,qx=6,Yx=20,Zx=256,so=new Nr,ap=new oe,Ru=null,Iu=0,Pu=0,Lu=!1,Jx=new B,Xs=new B,Nc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Jx}=r;Ru=this._renderer.getRenderTarget(),Iu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ru,Iu,Pu),this._renderer.xr.enabled=Lu,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ru=this._renderer.getRenderTarget(),Iu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:Ti,format:pi,colorSpace:ma,depthBuffer:!1},s=op(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=op(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Kx(r)),this._blurMaterial=Qx(r,t,e),this._ggxMaterial=jx(r,t,e)}return s}_compileMaterial(t){let e=new Sn(new sn,t);this._renderer.compile(e,so)}_sceneToCubeUV(t,e,n,s,r){let l=new Fn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,g=p.toneMapping;p.getClearColor(ap),p.toneMapping=wi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new Ir,new Os({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,f=E.material,d=!1,L=t.background;L?L.isColor&&(f.color.copy(L),t.background=null,d=!0):(f.color.copy(ap),d=!0);for(let D=0;D<6;D++){let w=D%3;w===0?(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[D],r.y,r.z)):w===1?(l.up.set(0,0,c[D]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[D],r.z)):(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[D]));let b=this._cubeSize;zr(s,w*b,D>2?b:0,b,b),p.setRenderTarget(s),d&&p.render(E,l),p.render(t,l)}p.toneMapping=g,p.autoClear=u,t.background=L}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ys||t.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;zr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,so)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,g=p*u,{_lodMax:_}=this,E=this._sizeLods[n],f=3*E*(n>_-kr?n-_+kr:0),d=4*(this._cubeSize-E);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=_-e,zr(r,f,d,3*E,2*E),s.setRenderTarget(r),s.render(o,so),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,zr(t,f,d,3*E,2*E),s.setRenderTarget(t),s.render(o,so)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-kr?s-this._lodMax+kr:0),u=4*(this._cubeSize-h);zr(e,p,u,3*h,2*h),a.setRenderTarget(e),a.render(l,so)}};function Kx(i){let t=[],e=[],n=i,s=i-kr+1+qx;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,g=3,_=new Float32Array(g*u*p),E=new Float32Array(g*u*p);for(let d=0;d<p;d++){let L=d%3*2/3-1,D=d>2?0:-1,w=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];_.set(w,g*u*d);for(let b=0;b<u;b++){let I=h[b*2]*2-1,O=h[b*2+1]*2-1;d===0?Xs.set(1,O,I):d===1?Xs.set(-I,1,-O):d===2?Xs.set(-I,O,1):d===3?Xs.set(-1,O,-I):d===4?Xs.set(-I,-1,O):Xs.set(I,O,-1),Xs.toArray(E,(d*u+b)*g)}}let f=new sn;f.setAttribute("position",new $e(_,g)),f.setAttribute("outputDirection",new $e(E,g)),e.push(new Sn(f,null)),n>kr&&n--}return{lodMeshes:e,sizeLods:t}}function op(i,t,e){let n=new Kn(i,t,e);return n.texture.mapping=Za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function jx(i,t,e){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Qx(i,t,e){return new Mn({name:"SphericalGaussianBlur",defines:{SAMPLES:Yx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function lp(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function cp(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Oc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Uc=class extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Aa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ir(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:ki});r.uniforms.tEquirect.value=e;let a=new Sn(s,r),o=e.minFilter;return e.minFilter===Ss&&(e.minFilter=En),new kl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function tv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,g=!1){return u==null?null:g?a(u):r(u)}function r(u){if(u&&u.isTexture){let g=u.mapping;if(g===Gl||g===Wl)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let E=new Uc(_.height);return E.fromEquirectangularTexture(i,u),t.set(u,E),u.addEventListener("dispose",c),o(E.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let g=u.mapping,_=g===Gl||g===Wl,E=g===ys||g===Ws;if(_||E){let f=e.get(u),d=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new Nc(i)),f=_?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{let L=u.image;return _&&L&&L.height>0||E&&L&&l(L)?(n===null&&(n=new Nc(i)),f=_?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,g){return g===Gl?u.mapping=ys:g===Wl&&(u.mapping=Ws),u}function l(u){let g=0,_=6;for(let E=0;E<_;E++)u[E]!==void 0&&g++;return g===_}function c(u){let g=u.target;g.removeEventListener("dispose",c);let _=t.get(g);_!==void 0&&(t.delete(g),_.dispose())}function h(u){let g=u.target;g.removeEventListener("dispose",h);let _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function ev(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Us("WebGLRenderer: "+n+" extension not supported."),s}}}function nv(i,t,e,n){let s={},r=new WeakMap;function a(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];let g=r.get(u);g&&(t.remove(g),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(p){let u=p.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER)}function c(p){let u=[],g=p.index,_=p.attributes.position,E=0;if(_===void 0)return;if(g!==null){let L=g.array;E=g.version;for(let D=0,w=L.length;D<w;D+=3){let b=L[D+0],I=L[D+1],O=L[D+2];u.push(b,I,I,O,O,b)}}else{let L=_.array;E=_.version;for(let D=0,w=L.length/3-1;D<w;D+=3){let b=D+0,I=D+1,O=D+2;u.push(b,I,I,O,O,b)}}let f=new(_.count>=65535?Ma:Sa)(u,1);f.version=E;let d=r.get(p);d&&t.remove(d),r.set(p,f)}function h(p){let u=r.get(p);if(u){let g=p.index;g!==null&&u.version<g.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function iv(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,u){i.drawElements(n,u,r,p*a),e.update(u,n,1)}function c(p,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,p*a,g),e.update(u,n,g))}function h(p,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,g);let E=0;for(let f=0;f<g;f++)E+=u[f];e.update(E,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function sv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ce("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rv(i,t,e){let n=new WeakMap,s=new He;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==p){let R=function(){O.dispose(),n.delete(o),o.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],L=o.morphAttributes.color||[],D=0;g===!0&&(D=1),_===!0&&(D=2),E===!0&&(D=3);let w=o.attributes.position.count*D,b=1;w>t.maxTextureSize&&(b=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let I=new Float32Array(w*b*4*p),O=new va(I,w,b,p);O.type=fi,O.needsUpdate=!0;let v=D*4;for(let z=0;z<p;z++){let W=f[z],Y=d[z],Z=L[z],k=w*b*4*z;for(let J=0;J<W.count;J++){let it=J*v;g===!0&&(s.fromBufferAttribute(W,J),I[k+it+0]=s.x,I[k+it+1]=s.y,I[k+it+2]=s.z,I[k+it+3]=0),_===!0&&(s.fromBufferAttribute(Y,J),I[k+it+4]=s.x,I[k+it+5]=s.y,I[k+it+6]=s.z,I[k+it+7]=0),E===!0&&(s.fromBufferAttribute(Z,J),I[k+it+8]=s.x,I[k+it+9]=s.y,I[k+it+10]=s.z,I[k+it+11]=Z.itemSize===4?s.w:1)}}u={count:p,texture:O,size:new Nt(w,b)},n.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let E=0;E<c.length;E++)g+=c[E];let _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function av(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,u=t.get(c,p);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let g=c.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var ov={[au]:"LINEAR_TONE_MAPPING",[ou]:"REINHARD_TONE_MAPPING",[lu]:"CINEON_TONE_MAPPING",[cu]:"ACES_FILMIC_TONE_MAPPING",[uu]:"AGX_TONE_MAPPING",[du]:"NEUTRAL_TONE_MAPPING",[hu]:"CUSTOM_TONE_MAPPING"};function lv(i,t,e,n,s,r){let a=new Kn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new sn;c.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new nn([0,2,0,0,2,0],2));let h=new Tl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Sn(c,h),u=new Nr(-1,1,1,-1,0,1),g=null,_=null,E=!1,f,d=null,L=[],D=!1;this.setSize=function(w,b){a.setSize(w,b),o!==null&&o.setSize(w,b),l!==null&&l.setSize(w,b);for(let I=0;I<L.length;I++){let O=L[I];O.setSize&&O.setSize(w,b)}},this.setEffects=function(w){L=w,D=L.length>0&&L[0].isRenderPass===!0;let b=a.width,I=a.height;L.length>0&&o===null&&(o=new Kn(b,I,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),l=new Kn(b,I,{type:Ti,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<L.length;O++){let v=L[O];v.setSize&&v.setSize(b,I)}},this.begin=function(w,b){if(E||w.toneMapping===wi&&L.length===0)return!1;if(d=b,b!==null){let I=b.width,O=b.height;(a.width!==I||a.height!==O)&&this.setSize(I,O)}return D===!1&&w.setRenderTarget(a),f=w.toneMapping,w.toneMapping=wi,!0},this.hasRenderPass=function(){return D},this.end=function(w,b){w.toneMapping=f,E=!0;let I=a,O=o;for(let v=0;v<L.length;v++){let R=L[v];R.enabled!==!1&&(R.render(w,O,I,b),R.needsSwap!==!1&&(I=O,O=O===o?l:o))}if(g!==w.outputColorSpace||_!==w.toneMapping){g=w.outputColorSpace,_=w.toneMapping,h.defines={},Re.getTransfer(g)===Ve&&(h.defines.SRGB_TRANSFER="");let v=ov[_];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=I.texture,w.setRenderTarget(d),w.render(p,u),d=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Rp=new Jn,Uu=new ps(1,1),Ip=new va,Pp=new fl,Lp=new Aa,hp=[],up=[],dp=new Float32Array(16),fp=new Float32Array(9),pp=new Float32Array(4);function Hr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=hp[s];if(r===void 0&&(r=new Float32Array(s),hp[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function dn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Bc(i,t){let e=up[t];e===void 0&&(e=new Int32Array(t),up[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2fv(this.addr,t),fn(e,t)}}function uv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(dn(e,t))return;i.uniform3fv(this.addr,t),fn(e,t)}}function dv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4fv(this.addr,t),fn(e,t)}}function fv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;pp.set(n),i.uniformMatrix2fv(this.addr,!1,pp),fn(e,n)}}function pv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;fp.set(n),i.uniformMatrix3fv(this.addr,!1,fp),fn(e,n)}}function mv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;dp.set(n),i.uniformMatrix4fv(this.addr,!1,dp),fn(e,n)}}function gv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _v(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2iv(this.addr,t),fn(e,t)}}function xv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;i.uniform3iv(this.addr,t),fn(e,t)}}function vv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4iv(this.addr,t),fn(e,t)}}function yv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2uiv(this.addr,t),fn(e,t)}}function Mv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;i.uniform3uiv(this.addr,t),fn(e,t)}}function bv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4uiv(this.addr,t),fn(e,t)}}function wv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Uu.compareFunction=e.isReversedDepthBuffer()?Pc:Ic,r=Uu):r=Rp,e.setTexture2D(t||r,s)}function Ev(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Pp,s)}function Tv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Lp,s)}function Av(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ip,s)}function Cv(i){switch(i){case 5126:return cv;case 35664:return hv;case 35665:return uv;case 35666:return dv;case 35674:return fv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return gv;case 35667:case 35671:return _v;case 35668:case 35672:return xv;case 35669:case 35673:return vv;case 5125:return yv;case 36294:return Sv;case 36295:return Mv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return Av}}function Rv(i,t){i.uniform1fv(this.addr,t)}function Iv(i,t){let e=Hr(t,this.size,2);i.uniform2fv(this.addr,e)}function Pv(i,t){let e=Hr(t,this.size,3);i.uniform3fv(this.addr,e)}function Lv(i,t){let e=Hr(t,this.size,4);i.uniform4fv(this.addr,e)}function Dv(i,t){let e=Hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Nv(i,t){let e=Hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Uv(i,t){let e=Hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fv(i,t){i.uniform1iv(this.addr,t)}function Ov(i,t){i.uniform2iv(this.addr,t)}function Bv(i,t){i.uniform3iv(this.addr,t)}function zv(i,t){i.uniform4iv(this.addr,t)}function kv(i,t){i.uniform1uiv(this.addr,t)}function Vv(i,t){i.uniform2uiv(this.addr,t)}function Hv(i,t){i.uniform3uiv(this.addr,t)}function Gv(i,t){i.uniform4uiv(this.addr,t)}function Wv(i,t,e){let n=this.cache,s=t.length,r=Bc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Uu:a=Rp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function $v(i,t,e){let n=this.cache,s=t.length,r=Bc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Pp,r[a])}function Xv(i,t,e){let n=this.cache,s=t.length,r=Bc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Lp,r[a])}function qv(i,t,e){let n=this.cache,s=t.length,r=Bc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ip,r[a])}function Yv(i){switch(i){case 5126:return Rv;case 35664:return Iv;case 35665:return Pv;case 35666:return Lv;case 35674:return Dv;case 35675:return Nv;case 35676:return Uv;case 5124:case 35670:return Fv;case 35667:case 35671:return Ov;case 35668:case 35672:return Bv;case 35669:case 35673:return zv;case 5125:return kv;case 36294:return Vv;case 36295:return Hv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Wv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return qv}}var Fu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cv(e.type)}},Ou=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yv(e.type)}},Bu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Du=/(\w+)(\])?(\[|\.)?/g;function mp(i,t){i.seq.push(t),i.map[t.id]=t}function Zv(i,t,e){let n=i.name,s=n.length;for(Du.lastIndex=0;;){let r=Du.exec(n),a=Du.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){mp(e,c===void 0?new Fu(o,i,t):new Ou(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Bu(o),mp(e,p)),e=p}}}var Vr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Zv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function gp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Jv=37297,Kv=0;function jv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var _p=new me;function Qv(i){Re._getMatrix(_p,Re.workingColorSpace,i);let t=`mat3( ${_p.elements.map(e=>e.toFixed(4))} )`;switch(Re.getTransfer(i)){case ga:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+jv(i.getShaderSource(t),o)}else return r}function ty(i,t){let e=Qv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var ey={[au]:"Linear",[ou]:"Reinhard",[lu]:"Cineon",[cu]:"ACESFilmic",[uu]:"AgX",[du]:"Neutral",[hu]:"Custom"};function ny(i,t){let e=ey[t];return e===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Dc=new B;function iy(){Re.getLuminanceCoefficients(Dc);let i=Dc.x.toFixed(4),t=Dc.y.toFixed(4),e=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function ry(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ay(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ao(i){return i!==""}function vp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function zu(i){return i.replace(oy,cy)}var ly=new Map;function cy(i,t){let e=be[t];if(e===void 0){let n=ly.get(t);if(n!==void 0)e=be[n],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return zu(e)}var hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sp(i){return i.replace(hy,uy)}function uy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var dy={[Ya]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"};function fy(i){return dy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var py={[ys]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[Za]:"ENVMAP_TYPE_CUBE_UV"};function my(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":py[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var gy={[Ws]:"ENVMAP_MODE_REFRACTION"};function _y(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":gy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xy={[Hl]:"ENVMAP_BLENDING_MULTIPLY",[Of]:"ENVMAP_BLENDING_MIX",[Bf]:"ENVMAP_BLENDING_ADD"};function vy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":xy[i.combine]||"ENVMAP_BLENDING_NONE"}function yy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Sy(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=fy(e),c=my(e),h=_y(e),p=vy(e),u=yy(e),g=sy(e),_=ry(r),E=s.createProgram(),f,d,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ao).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ao).join(`
`),d.length>0&&(d+=`
`)):(f=[Mp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),d=[Mp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?be.tonemapping_pars_fragment:"",e.toneMapping!==wi?ny("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,ty("linearToOutputTexel",e.outputColorSpace),iy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ao).join(`
`)),a=zu(a),a=vp(a,e),a=yp(a,e),o=zu(o),o=vp(o,e),o=yp(o,e),a=Sp(a),o=Sp(o),e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,f=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===Su?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let D=L+f+a,w=L+d+o,b=gp(s,s.VERTEX_SHADER,D),I=gp(s,s.FRAGMENT_SHADER,w);s.attachShader(E,b),s.attachShader(E,I),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function O(W){if(i.debug.checkShaderErrors){let Y=s.getProgramInfoLog(E)||"",Z=s.getShaderInfoLog(b)||"",k=s.getShaderInfoLog(I)||"",J=Y.trim(),it=Z.trim(),st=k.trim(),yt=!0,rt=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(yt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,b,I);else{let ht=xp(s,b,"vertex"),pt=xp(s,I,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+J+`
`+ht+`
`+pt)}else J!==""?ae("WebGLProgram: Program Info Log:",J):(it===""||st==="")&&(rt=!1);rt&&(W.diagnostics={runnable:yt,programLog:J,vertexShader:{log:it,prefix:f},fragmentShader:{log:st,prefix:d}})}s.deleteShader(b),s.deleteShader(I),v=new Vr(s,E),R=ay(s,E)}let v;this.getUniforms=function(){return v===void 0&&O(this),v};let R;this.getAttributes=function(){return R===void 0&&O(this),R};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(E,Jv)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kv++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=b,this.fragmentShader=I,this}var My=0,ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Vu(t),e.set(t,n)),n}},Vu=class{constructor(t){this.id=My++,this.code=t,this.usedTimes=0}};function by(i){return i===bs||i===eo||i===no}function wy(i,t,e,n,s,r){let a=new Ar,o=new ku,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,u=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function E(v,R,z,W,Y,Z){let k=W.fog,J=Y.geometry,it=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?W.environment:null,st=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,yt=t.get(v.envMap||it,st),rt=yt&&yt.mapping===Za?yt.image.height:null,ht=g[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&ae("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let pt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Jt=pt!==void 0?pt.length:0,Gt=0;J.morphAttributes.position!==void 0&&(Gt=1),J.morphAttributes.normal!==void 0&&(Gt=2),J.morphAttributes.color!==void 0&&(Gt=3);let Pe,we,Te,et;if(ht){let Oe=$n[ht];Pe=Oe.vertexShader,we=Oe.fragmentShader}else{Pe=v.vertexShader,we=v.fragmentShader;let Oe=o.getVertexShaderStage(v),Be=o.getFragmentShaderStage(v);o.update(v,Oe,Be),Te=Oe.id,et=Be.id}let ut=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),ie=Y.isInstancedMesh===!0,Rt=Y.isBatchedMesh===!0,Vt=!!v.map,Le=!!v.matcap,F=!!yt,_t=!!v.aoMap,bt=!!v.lightMap,Mt=!!v.bumpMap&&v.wireframe===!1,wt=!!v.normalMap,te=!!v.displacementMap,Wt=!!v.emissiveMap,le=!!v.metalnessMap,he=!!v.roughnessMap,U=v.anisotropy>0,De=v.clearcoat>0,Se=v.dispersion>0,C=v.retroreflectivity>0,x=v.iridescence>0,q=v.sheen>0,tt=v.transmission>0,ot=U&&!!v.anisotropyMap,At=De&&!!v.clearcoatMap,It=De&&!!v.clearcoatNormalMap,lt=De&&!!v.clearcoatRoughnessMap,ft=x&&!!v.iridescenceMap,Ft=x&&!!v.iridescenceThicknessMap,$t=q&&!!v.sheenColorMap,Lt=q&&!!v.sheenRoughnessMap,Dt=!!v.specularMap,jt=!!v.specularColorMap,ne=!!v.specularIntensityMap,de=tt&&!!v.transmissionMap,G=tt&&!!v.thicknessMap,Et=!!v.gradientMap,ct=!!v.alphaMap,Ct=v.alphaTest>0,zt=!!v.alphaHash,gt=!!v.extensions,Qt=wi;v.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Qt=i.toneMapping);let Yt={shaderID:ht,shaderType:v.type,shaderName:v.name,vertexShader:Pe,fragmentShader:we,defines:v.defines,customVertexShaderID:Te,customFragmentShaderID:et,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Rt,batchingColor:Rt&&Y._colorsTexture!==null,instancing:ie,instancingColor:ie&&Y.instanceColor!==null,instancingMorph:ie&&Y.morphTexture!==null,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Re.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Vt,matcap:Le,envMap:F,envMapMode:F&&yt.mapping,envMapCubeUVHeight:rt,aoMap:_t,lightMap:bt,bumpMap:Mt,normalMap:wt,displacementMap:te,emissiveMap:Wt,normalMapObjectSpace:wt&&v.normalMapType===Vf,normalMapTangentSpace:wt&&v.normalMapType===Rc,packedNormalMap:wt&&v.normalMapType===Rc&&by(v.normalMap.format),metalnessMap:le,roughnessMap:he,anisotropy:U,anisotropyMap:ot,clearcoat:De,clearcoatMap:At,clearcoatNormalMap:It,clearcoatRoughnessMap:lt,dispersion:Se,retroreflection:C,iridescence:x,iridescenceMap:ft,iridescenceThicknessMap:Ft,sheen:q,sheenColorMap:$t,sheenRoughnessMap:Lt,specularMap:Dt,specularColorMap:jt,specularIntensityMap:ne,transmission:tt,transmissionMap:de,thicknessMap:G,gradientMap:Et,opaque:v.transparent===!1&&v.blending===Fr&&v.alphaToCoverage===!1,alphaMap:ct,alphaTest:Ct,alphaHash:zt,combine:v.combine,mapUv:Vt&&_(v.map.channel),aoMapUv:_t&&_(v.aoMap.channel),lightMapUv:bt&&_(v.lightMap.channel),bumpMapUv:Mt&&_(v.bumpMap.channel),normalMapUv:wt&&_(v.normalMap.channel),displacementMapUv:te&&_(v.displacementMap.channel),emissiveMapUv:Wt&&_(v.emissiveMap.channel),metalnessMapUv:le&&_(v.metalnessMap.channel),roughnessMapUv:he&&_(v.roughnessMap.channel),anisotropyMapUv:ot&&_(v.anisotropyMap.channel),clearcoatMapUv:At&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:It&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&_(v.sheenRoughnessMap.channel),specularMapUv:Dt&&_(v.specularMap.channel),specularColorMapUv:jt&&_(v.specularColorMap.channel),specularIntensityMapUv:ne&&_(v.specularIntensityMap.channel),transmissionMapUv:de&&_(v.transmissionMap.channel),thicknessMapUv:G&&_(v.thicknessMap.channel),alphaMapUv:ct&&_(v.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(wt||U),vertexNormals:!!J.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!J.attributes.uv&&(Vt||ct),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||J.attributes.normal===void 0&&wt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ut,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Jt,morphTextureStride:Gt,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,decodeVideoTexture:Vt&&v.map.isVideoTexture===!0&&Re.getTransfer(v.map.colorSpace)===Ve,decodeVideoTextureEmissive:Wt&&v.emissiveMap.isVideoTexture===!0&&Re.getTransfer(v.emissiveMap.colorSpace)===Ve,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===zi,flipSided:v.side===Wn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:gt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&v.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function f(v){let R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(let z in v.defines)R.push(z),R.push(v.defines[z]);return v.isRawShaderMaterial===!1&&(d(R,v),L(R,v),R.push(i.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function d(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numSunLights),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numSunLightShadows),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function L(v,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.retroreflection&&a.enable(24),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function D(v){let R=g[v.type],z;if(R){let W=$n[R];z=io.clone(W.uniforms)}else z=v.uniforms;return z}function w(v,R){let z=h.get(R);return z!==void 0?++z.usedTimes:(z=new Sy(i,R,v,s),c.push(z),h.set(R,z)),z}function b(v){if(--v.usedTimes===0){let R=c.indexOf(v);c[R]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function I(v){o.remove(v)}function O(){o.dispose()}return{getParameters:E,getProgramCacheKey:f,getUniforms:D,acquireProgram:w,releaseProgram:b,releaseShaderCache:I,programs:c,dispose:O}}function Ey(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ty(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function bp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let g=0;return u.isInstancedMesh&&(g+=2),u.isSkinnedMesh&&(g+=1),g}function o(u,g,_,E,f,d){let L=i[t];return L===void 0?(L={id:u.id,object:u,geometry:g,material:_,materialVariant:a(u),groupOrder:E,renderOrder:u.renderOrder,z:f,group:d},i[t]=L):(L.id=u.id,L.object=u,L.geometry=g,L.material=_,L.materialVariant=a(u),L.groupOrder=E,L.renderOrder=u.renderOrder,L.z=f,L.group=d),t++,L}function l(u,g,_,E,f,d,L){L.reversedDepth===!0&&(f=-f);let D=o(u,g,_,E,f,d);_.transmission>0?n.push(D):_.transparent===!0?s.push(D):e.push(D)}function c(u,g,_,E,f,d){let L=o(u,g,_,E,f,d);_.transmission>0?n.unshift(L):_.transparent===!0?s.unshift(L):e.unshift(L)}function h(u,g){e.length>1&&e.sort(u||Ty),n.length>1&&n.sort(g||bp),s.length>1&&s.sort(g||bp)}function p(){for(let u=t,g=i.length;u<g;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function Ay(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new wp,i.set(n,[a])):s>=r.length?(a=new wp,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Cy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new oe};break;case"SpotLight":e={position:new B,direction:new B,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function Ry(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Iy=0;function Py(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ly(i){let t=new Cy,e=Ry(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new Ne,a=new Ne;function o(c){let h=0,p=0,u=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let g=0,_=0,E=0,f=0,d=0,L=0,D=0,w=0,b=0,I=0,O=0,v=0,R=0,z=0;c.sort(Py);for(let Y=0,Z=c.length;Y<Z;Y++){let k=c[Y],J=k.color,it=k.intensity,st=k.distance,yt=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===bs?yt=k.shadow.map.texture:yt=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)h+=J.r*it,p+=J.g*it,u+=J.b*it;else if(k.isLightProbe){for(let rt=0;rt<9;rt++)n.probe[rt].addScaledVector(k.sh.coefficients[rt],it);z++}else if(k.isSunLight){let rt=t.get(k);if(rt.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let ht=k.shadow,pt=e.get(k);pt.shadowIntensity=ht.intensity,pt.shadowBias=ht.bias,pt.shadowNormalBias=ht.normalBias,pt.shadowRadius=ht.radius,pt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),n.sunShadow[_]=pt,n.sunShadowMap[_]=yt;let Jt=ht.getViewportCount();for(let Gt=0;Gt<Jt;Gt++)n.sunShadowMatrix[E+Gt]=ht.getMatrix(Gt),n.sunShadowCascade[E+Gt]=ht._cascadeData[Gt];E+=Jt,_++}n.sun[g]=rt,g++}else if(k.isDirectionalLight){let rt=t.get(k);if(rt.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let ht=k.shadow,pt=e.get(k);pt.shadowIntensity=ht.intensity,pt.shadowBias=ht.bias,pt.shadowNormalBias=ht.normalBias,pt.shadowRadius=ht.radius,pt.shadowMapSize=ht.mapSize,n.directionalShadow[f]=pt,n.directionalShadowMap[f]=yt,n.directionalShadowMatrix[f]=k.shadow.matrix,b++}n.directional[f]=rt,f++}else if(k.isSpotLight){let rt=t.get(k);rt.position.setFromMatrixPosition(k.matrixWorld),rt.color.copy(J).multiplyScalar(it),rt.distance=st,rt.coneCos=Math.cos(k.angle),rt.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),rt.decay=k.decay,n.spot[L]=rt;let ht=k.shadow;if(k.map&&(n.spotLightMap[v]=k.map,v++,ht.updateMatrices(k),k.castShadow&&R++),n.spotLightMatrix[L]=ht.matrix,k.castShadow){let pt=e.get(k);pt.shadowIntensity=ht.intensity,pt.shadowBias=ht.bias,pt.shadowNormalBias=ht.normalBias,pt.shadowRadius=ht.radius,pt.shadowMapSize=ht.mapSize,n.spotShadow[L]=pt,n.spotShadowMap[L]=yt,O++}L++}else if(k.isRectAreaLight){let rt=t.get(k);rt.color.copy(J).multiplyScalar(it),rt.halfWidth.set(k.width*.5,0,0),rt.halfHeight.set(0,k.height*.5,0),n.rectArea[D]=rt,D++}else if(k.isPointLight){let rt=t.get(k);if(rt.color.copy(k.color).multiplyScalar(k.intensity),rt.distance=k.distance,rt.decay=k.decay,k.castShadow){let ht=k.shadow,pt=e.get(k);pt.shadowIntensity=ht.intensity,pt.shadowBias=ht.bias,pt.shadowNormalBias=ht.normalBias,pt.shadowRadius=ht.radius,pt.shadowMapSize=ht.mapSize,pt.shadowCameraNear=ht.camera.near,pt.shadowCameraFar=ht.camera.far,n.pointShadow[d]=pt,n.pointShadowMap[d]=yt,n.pointShadowMatrix[d]=k.shadow.matrix,I++}n.point[d]=rt,d++}else if(k.isHemisphereLight){let rt=t.get(k);rt.skyColor.copy(k.color).multiplyScalar(it),rt.groundColor.copy(k.groundColor).multiplyScalar(it),n.hemi[w]=rt,w++}}D>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Bt.LTC_FLOAT_1,n.rectAreaLTC2=Bt.LTC_FLOAT_2):(n.rectAreaLTC1=Bt.LTC_HALF_1,n.rectAreaLTC2=Bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;let W=n.hash;(W.sunLength!==g||W.directionalLength!==f||W.pointLength!==d||W.spotLength!==L||W.rectAreaLength!==D||W.hemiLength!==w||W.numSunShadows!==_||W.numDirectionalShadows!==b||W.numPointShadows!==I||W.numSpotShadows!==O||W.numSpotMaps!==v||W.numLightProbes!==z)&&(n.sun.length=g,n.directional.length=f,n.spot.length=L,n.rectArea.length=D,n.point.length=d,n.hemi.length=w,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=I,n.pointShadowMap.length=I,n.pointShadowMatrix.length=I,n.spotShadow.length=O,n.spotShadowMap.length=O,n.spotLightMatrix.length=O+v-R,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=z,W.sunLength=g,W.directionalLength=f,W.pointLength=d,W.spotLength=L,W.rectAreaLength=D,W.hemiLength=w,W.numSunShadows=_,W.numDirectionalShadows=b,W.numPointShadows=I,W.numSpotShadows=O,W.numSpotMaps=v,W.numLightProbes=z,n.version=Iy++)}function l(c,h){let p=0,u=0,g=0,_=0,E=0,f=0,d=h.matrixWorldInverse;for(let L=0,D=c.length;L<D;L++){let w=c[L];if(w.isSunLight){let b=n.sun[p];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(d),p++}else if(w.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),u++}else if(w.isSpotLight){let b=n.spot[_];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),_++}else if(w.isRectAreaLight){let b=n.rectArea[E];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(d),a.identity(),r.copy(w.matrixWorld),r.premultiply(d),a.extractRotation(r),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),E++}else if(w.isPointLight){let b=n.point[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(d),g++}else if(w.isHemisphereLight){let b=n.hemi[f];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(d),f++}}}return{setup:o,setupView:l,state:n}}function Ep(i){let t=new Ly(i),e=[],n=[],s=[];function r(u){p.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Dy(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Ep(i),t.set(s,[o])):r>=a.length?(o=new Ep(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uy=`uniform sampler2D shadow_pass;
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
}`,Fy=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Oy=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Tp=new Ne,ro=new B,Nu=new B;function By(i,t,e){let n=new Rr,s=new Nt,r=new Nt,a=new He,o=new Al,l=new Cl,c={},h=e.maxTextureSize,p={[vs]:Wn,[Wn]:vs,[zi]:zi},u=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Ny,fragmentShader:Uy}),g=u.clone();g.defines.HORIZONTAL_PASS=1;let _=new sn;_.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new Sn(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let d=this.type;this.render=function(I,O,v){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||I.length===0)return;this.type===xf&&(ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ya);let R=i.getRenderTarget(),z=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(ki),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let Z=d!==this.type;Z&&O.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(J=>J.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,J=I.length;k<J;k++){let it=I[k],st=it.shadow;if(st===void 0){ae("WebGLShadowMap:",it,"has no shadow.");continue}if(st.autoUpdate===!1&&st.needsUpdate===!1)continue;s.copy(st.mapSize);let yt=st.getFrameExtents();s.multiply(yt),r.copy(st.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/yt.x),s.x=r.x*yt.x,st.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/yt.y),s.y=r.y*yt.y,st.mapSize.y=r.y));let rt=i.state.buffers.depth.getReversed();if(st.camera._reversedDepth=rt,st.map===null||Z===!0){if(st.map!==null&&(st.map.depthTexture!==null&&(st.map.depthTexture.dispose(),st.map.depthTexture=null),st.map.dispose()),this.type===Ur){if(it.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}st.map=new Kn(s.x,s.y,{format:bs,type:Ti,minFilter:En,magFilter:En,generateMipmaps:!1}),st.map.texture.name=it.name+".shadowMap",st.map.depthTexture=new ps(s.x,s.y,fi),st.map.depthTexture.name=it.name+".shadowMapDepth",st.map.depthTexture.format=Ui,st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=vn,st.map.depthTexture.magFilter=vn}else it.isPointLight?(st.map=new Uc(s.x),st.map.depthTexture=new vl(s.x,Ei)):(st.map=new Kn(s.x,s.y),st.map.depthTexture=new ps(s.x,s.y,Ei)),st.map.depthTexture.name=it.name+".shadowMap",st.map.depthTexture.format=Ui,this.type===Ya?(st.map.depthTexture.compareFunction=rt?Pc:Ic,st.map.depthTexture.minFilter=En,st.map.depthTexture.magFilter=En):(st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=vn,st.map.depthTexture.magFilter=vn);st.camera.updateProjectionMatrix()}st.map.isWebGLCubeRenderTarget!==!0&&(st.map.width!==s.x||st.map.height!==s.y)&&st.map.setSize(s.x,s.y);let ht=st.map.isWebGLCubeRenderTarget?6:st.getViewportCount();it.isPointLight!==!0&&st.updateMatrices(it,v);for(let pt=0;pt<ht;pt++){let Jt=st.getCamera(pt);if(it.isPointLight){let Gt=st.camera,Pe=st.matrix,we=it.distance||Gt.far;we!==Gt.far&&(Gt.far=we,Gt.updateProjectionMatrix()),ro.setFromMatrixPosition(it.matrixWorld),Gt.position.copy(ro),Nu.copy(Gt.position),Nu.add(Fy[pt]),Gt.up.copy(Oy[pt]),Gt.lookAt(Nu),Gt.updateMatrixWorld(),Pe.makeTranslation(-ro.x,-ro.y,-ro.z),Tp.multiplyMatrices(Gt.projectionMatrix,Gt.matrixWorldInverse),st._frustum.setFromProjectionMatrix(Tp,Gt.coordinateSystem,Gt.reversedDepth)}if(st.map.isWebGLCubeRenderTarget)i.setRenderTarget(st.map,pt),i.clear();else{pt===0&&(i.setRenderTarget(st.map),i.clear());let Gt=st.getViewport(pt);a.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),Y.viewport(a)}n=st.getFrustum(pt),w(O,v,Jt,it,this.type)}st.isPointLightShadow!==!0&&this.type===Ur&&L(st,v),st.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(R,z,W)};function L(I,O){let v=t.update(E);u.defines.VSM_SAMPLES!==I.blurSamples&&(u.defines.VSM_SAMPLES=I.blurSamples,g.defines.VSM_SAMPLES=I.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),I.mapPass===null?I.mapPass=new Kn(s.x,s.y,{format:bs,type:Ti}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),u.uniforms.shadow_pass.value=I.map.depthTexture,u.uniforms.resolution.value.set(I.map.width,I.map.height),u.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(O,null,v,u,E,null),g.uniforms.shadow_pass.value=I.mapPass.texture,g.uniforms.resolution.value.set(I.map.width,I.map.height),g.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(O,null,v,g,E,null)}function D(I,O,v,R){let z=null,W=v.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(W!==void 0)z=W;else if(z=v.isPointLight===!0?l:o,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){let Y=z.uuid,Z=O.uuid,k=c[Y];k===void 0&&(k={},c[Y]=k);let J=k[Z];J===void 0&&(J=z.clone(),k[Z]=J,O.addEventListener("dispose",b)),z=J}if(z.visible=O.visible,z.wireframe=O.wireframe,R===Ur?z.side=O.shadowSide!==null?O.shadowSide:O.side:z.side=O.shadowSide!==null?O.shadowSide:p[O.side],z.alphaMap=O.alphaMap,z.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,z.map=O.map,z.clipShadows=O.clipShadows,z.clippingPlanes=O.clippingPlanes,z.clipIntersection=O.clipIntersection,z.displacementMap=O.displacementMap,z.displacementScale=O.displacementScale,z.displacementBias=O.displacementBias,z.wireframeLinewidth=O.wireframeLinewidth,z.linewidth=O.linewidth,v.isPointLight===!0&&z.isMeshDistanceMaterial===!0){let Y=i.properties.get(z);Y.light=v}return z}function w(I,O,v,R,z){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&z===Ur)&&(!I.frustumCulled||I.intersectsFrustum(n))){I.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,I.matrixWorld);let Z=t.update(I),k=I.material;if(Array.isArray(k)){let J=Z.groups;for(let it=0,st=J.length;it<st;it++){let yt=J[it],rt=k[yt.materialIndex];if(rt&&rt.visible){let ht=D(I,rt,R,z);I.onBeforeShadow(i,I,O,v,Z,ht,yt),i.renderBufferDirect(v,null,Z,ht,I,yt),I.onAfterShadow(i,I,O,v,Z,ht,yt)}}}else if(k.visible){let J=D(I,k,R,z);I.onBeforeShadow(i,I,O,v,Z,J,null),i.renderBufferDirect(v,null,Z,J,I,null),I.onAfterShadow(i,I,O,v,Z,J,null)}}let Y=I.children;for(let Z=0,k=Y.length;Z<k;Z++)w(Y[Z],O,v,R,z)}function b(I){I.target.removeEventListener("dispose",b);for(let v in c){let R=c[v],z=I.target.uuid;z in R&&(R[z].dispose(),delete R[z])}}}function zy(i,t){function e(){let G=!1,Et=new He,ct=null,Ct=new He(0,0,0,0);return{setMask:function(zt){ct!==zt&&!G&&(i.colorMask(zt,zt,zt,zt),ct=zt)},setLocked:function(zt){G=zt},setClear:function(zt,gt,Qt,Yt,Oe){Oe===!0&&(zt*=Yt,gt*=Yt,Qt*=Yt),Et.set(zt,gt,Qt,Yt),Ct.equals(Et)===!1&&(i.clearColor(zt,gt,Qt,Yt),Ct.copy(Et))},reset:function(){G=!1,ct=null,Ct.set(-1,0,0,0)}}}function n(){let G=!1,Et=!1,ct=null,Ct=null,zt=null;return{setReversed:function(gt){if(Et!==gt){let Qt=t.get("EXT_clip_control");gt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),Et=gt;let Yt=zt;zt=null,this.setClear(Yt)}},getReversed:function(){return Et},setTest:function(gt){gt?ut(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(gt){ct!==gt&&!G&&(i.depthMask(gt),ct=gt)},setFunc:function(gt){if(Et&&(gt=jf[gt]),Ct!==gt){switch(gt){case el:i.depthFunc(i.NEVER);break;case nl:i.depthFunc(i.ALWAYS);break;case il:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case sl:i.depthFunc(i.EQUAL);break;case rl:i.depthFunc(i.GEQUAL);break;case al:i.depthFunc(i.GREATER);break;case ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ct=gt}},setLocked:function(gt){G=gt},setClear:function(gt){zt!==gt&&(zt=gt,Et&&(gt=1-gt),i.clearDepth(gt))},reset:function(){G=!1,ct=null,Ct=null,zt=null,Et=!1}}}function s(){let G=!1,Et=null,ct=null,Ct=null,zt=null,gt=null,Qt=null,Yt=null,Oe=null;return{setTest:function(Be){G||(Be?ut(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(Be){Et!==Be&&!G&&(i.stencilMask(Be),Et=Be)},setFunc:function(Be,zn,pn){(ct!==Be||Ct!==zn||zt!==pn)&&(i.stencilFunc(Be,zn,pn),ct=Be,Ct=zn,zt=pn)},setOp:function(Be,zn,pn){(gt!==Be||Qt!==zn||Yt!==pn)&&(i.stencilOp(Be,zn,pn),gt=Be,Qt=zn,Yt=pn)},setLocked:function(Be){G=Be},setClear:function(Be){Oe!==Be&&(i.clearStencil(Be),Oe=Be)},reset:function(){G=!1,Et=null,ct=null,Ct=null,zt=null,gt=null,Qt=null,Yt=null,Oe=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},p={},u={},g=new WeakMap,_=[],E=null,f=!1,d=null,L=null,D=null,w=null,b=null,I=null,O=null,v=new oe(0,0,0),R=0,z=!1,W=null,Y=null,Z=null,k=null,J=null,it=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),st=!1,yt=0,rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(yt=parseFloat(/^WebGL (\d)/.exec(rt)[1]),st=yt>=1):rt.indexOf("OpenGL ES")!==-1&&(yt=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),st=yt>=2);let ht=null,pt={},Jt=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),Pe=new He().fromArray(Jt),we=new He().fromArray(Gt);function Te(G,Et,ct,Ct){let zt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(G,gt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<ct;Qt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,Ct,0,i.RGBA,i.UNSIGNED_BYTE,zt):i.texImage2D(Et+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,zt);return gt}let et={};et[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(i.DEPTH_TEST),a.setFunc(Mr),Mt(!1),wt(tu),ut(i.CULL_FACE),_t(ki);function ut(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function Ut(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function ie(G,Et){return u[G]!==Et?(i.bindFramebuffer(G,Et),u[G]=Et,G===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Et),G===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function Rt(G,Et){let ct=_,Ct=!1;if(G){ct=g.get(Et),ct===void 0&&(ct=[],g.set(Et,ct));let zt=G.textures;if(ct.length!==zt.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Qt=zt.length;gt<Qt;gt++)ct[gt]=i.COLOR_ATTACHMENT0+gt;ct.length=zt.length,Ct=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,Ct=!0);Ct&&i.drawBuffers(ct)}function Vt(G){return E!==G?(i.useProgram(G),E=G,!0):!1}let Le={[Gs]:i.FUNC_ADD,[yf]:i.FUNC_SUBTRACT,[Sf]:i.FUNC_REVERSE_SUBTRACT};Le[Mf]=i.MIN,Le[bf]=i.MAX;let F={[wf]:i.ZERO,[Ef]:i.ONE,[Tf]:i.SRC_COLOR,[su]:i.SRC_ALPHA,[Lf]:i.SRC_ALPHA_SATURATE,[If]:i.DST_COLOR,[Cf]:i.DST_ALPHA,[Af]:i.ONE_MINUS_SRC_COLOR,[ru]:i.ONE_MINUS_SRC_ALPHA,[Pf]:i.ONE_MINUS_DST_COLOR,[Rf]:i.ONE_MINUS_DST_ALPHA,[Df]:i.CONSTANT_COLOR,[Nf]:i.ONE_MINUS_CONSTANT_COLOR,[Uf]:i.CONSTANT_ALPHA,[Ff]:i.ONE_MINUS_CONSTANT_ALPHA};function _t(G,Et,ct,Ct,zt,gt,Qt,Yt,Oe,Be){if(G===ki){f===!0&&(Ut(i.BLEND),f=!1);return}if(f===!1&&(ut(i.BLEND),f=!0),G!==vf){if(G!==d||Be!==z){if((L!==Gs||b!==Gs)&&(i.blendEquation(i.FUNC_ADD),L=Gs,b=Gs),Be)switch(G){case Fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eu:i.blendFunc(i.ONE,i.ONE);break;case nu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case iu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",G);break}else switch(G){case Fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nu:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iu:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",G);break}D=null,w=null,I=null,O=null,v.set(0,0,0),R=0,d=G,z=Be}return}zt=zt||Et,gt=gt||ct,Qt=Qt||Ct,(Et!==L||zt!==b)&&(i.blendEquationSeparate(Le[Et],Le[zt]),L=Et,b=zt),(ct!==D||Ct!==w||gt!==I||Qt!==O)&&(i.blendFuncSeparate(F[ct],F[Ct],F[gt],F[Qt]),D=ct,w=Ct,I=gt,O=Qt),(Yt.equals(v)===!1||Oe!==R)&&(i.blendColor(Yt.r,Yt.g,Yt.b,Oe),v.copy(Yt),R=Oe),d=G,z=!1}function bt(G,Et){G.side===zi?Ut(i.CULL_FACE):ut(i.CULL_FACE);let ct=G.side===Wn;Et&&(ct=!ct),Mt(ct),G.blending===Fr&&G.transparent===!1?_t(ki):_t(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);let Ct=G.stencilWrite;o.setTest(Ct),Ct&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Wt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(G){W!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),W=G)}function wt(G){G!==gf?(ut(i.CULL_FACE),G!==Y&&(G===tu?i.cullFace(i.BACK):G===_f?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),Y=G}function te(G){G!==Z&&(st&&i.lineWidth(G),Z=G)}function Wt(G,Et,ct){G?(ut(i.POLYGON_OFFSET_FILL),(k!==Et||J!==ct)&&(k=Et,J=ct,a.getReversed()&&(Et=-Et),i.polygonOffset(Et,ct))):Ut(i.POLYGON_OFFSET_FILL)}function le(G){G?ut(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function he(G){G===void 0&&(G=i.TEXTURE0+it-1),ht!==G&&(i.activeTexture(G),ht=G)}function U(G,Et,ct){ct===void 0&&(ht===null?ct=i.TEXTURE0+it-1:ct=ht);let Ct=pt[ct];Ct===void 0&&(Ct={type:void 0,texture:void 0},pt[ct]=Ct),(Ct.type!==G||Ct.texture!==Et)&&(ht!==ct&&(i.activeTexture(ct),ht=ct),i.bindTexture(G,Et||et[G]),Ct.type=G,Ct.texture=Et)}function De(){let G=pt[ht];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Se(){try{i.compressedTexImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function x(){try{i.texSubImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function q(){try{i.texSubImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function ot(){try{i.compressedTexSubImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function At(){try{i.texStorage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function It(){try{i.texStorage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function lt(){try{i.texImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function ft(){try{i.texImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function Ft(G){return p[G]!==void 0?p[G]:i.getParameter(G)}function $t(G,Et){p[G]!==Et&&(i.pixelStorei(G,Et),p[G]=Et)}function Lt(G){Pe.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Pe.copy(G))}function Dt(G){we.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),we.copy(G))}function jt(G,Et){let ct=c.get(Et);ct===void 0&&(ct=new WeakMap,c.set(Et,ct));let Ct=ct.get(G);Ct===void 0&&(Ct=i.getUniformBlockIndex(Et,G.name),ct.set(G,Ct))}function ne(G,Et){let Ct=c.get(Et).get(G);l.get(Et)!==Ct&&(i.uniformBlockBinding(Et,Ct,G.__bindingPointIndex),l.set(Et,Ct))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},ht=null,pt={},u={},g=new WeakMap,_=[],E=null,f=!1,d=null,L=null,D=null,w=null,b=null,I=null,O=null,v=new oe(0,0,0),R=0,z=!1,W=null,Y=null,Z=null,k=null,J=null,Pe.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ut,disable:Ut,bindFramebuffer:ie,drawBuffers:Rt,useProgram:Vt,setBlending:_t,setMaterial:bt,setFlipSided:Mt,setCullFace:wt,setLineWidth:te,setPolygonOffset:Wt,setScissorTest:le,activeTexture:he,bindTexture:U,unbindTexture:De,compressedTexImage2D:Se,compressedTexImage3D:C,texImage2D:lt,texImage3D:ft,pixelStorei:$t,getParameter:Ft,updateUBOMapping:jt,uniformBlockBinding:ne,texStorage2D:At,texStorage3D:It,texSubImage2D:x,texSubImage3D:q,compressedTexSubImage2D:tt,compressedTexSubImage3D:ot,scissor:Lt,viewport:Dt,reset:de}}function ky(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,h=new WeakMap,p=new Set,u,g=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(C,x){return _?new OffscreenCanvas(C,x):_a("canvas")}function f(C,x,q){let tt=1,ot=Se(C);if((ot.width>q||ot.height>q)&&(tt=q/Math.max(ot.width,ot.height)),tt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let At=Math.floor(tt*ot.width),It=Math.floor(tt*ot.height);u===void 0&&(u=E(At,It));let lt=x?E(At,It):u;return lt.width=At,lt.height=It,lt.getContext("2d").drawImage(C,0,0,At,It),ae("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+At+"x"+It+")."),lt}else return"data"in C&&ae("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),C;return C}function d(C){return C.generateMipmaps}function L(C){i.generateMipmap(C)}function D(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(C,x,q,tt,ot,At=!1){if(C!==null){if(i[C]!==void 0)return i[C];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let It;tt&&(It=t.get("EXT_texture_norm16"),It||ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=x;if(x===i.RED&&(q===i.FLOAT&&(lt=i.R32F),q===i.HALF_FLOAT&&(lt=i.R16F),q===i.UNSIGNED_BYTE&&(lt=i.R8),q===i.UNSIGNED_SHORT&&It&&(lt=It.R16_EXT),q===i.SHORT&&It&&(lt=It.R16_SNORM_EXT)),x===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(lt=i.R8UI),q===i.UNSIGNED_SHORT&&(lt=i.R16UI),q===i.UNSIGNED_INT&&(lt=i.R32UI),q===i.BYTE&&(lt=i.R8I),q===i.SHORT&&(lt=i.R16I),q===i.INT&&(lt=i.R32I)),x===i.RG&&(q===i.FLOAT&&(lt=i.RG32F),q===i.HALF_FLOAT&&(lt=i.RG16F),q===i.UNSIGNED_BYTE&&(lt=i.RG8),q===i.UNSIGNED_SHORT&&It&&(lt=It.RG16_EXT),q===i.SHORT&&It&&(lt=It.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(lt=i.RG8UI),q===i.UNSIGNED_SHORT&&(lt=i.RG16UI),q===i.UNSIGNED_INT&&(lt=i.RG32UI),q===i.BYTE&&(lt=i.RG8I),q===i.SHORT&&(lt=i.RG16I),q===i.INT&&(lt=i.RG32I)),x===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),q===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),q===i.UNSIGNED_INT&&(lt=i.RGB32UI),q===i.BYTE&&(lt=i.RGB8I),q===i.SHORT&&(lt=i.RGB16I),q===i.INT&&(lt=i.RGB32I)),x===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),q===i.UNSIGNED_INT&&(lt=i.RGBA32UI),q===i.BYTE&&(lt=i.RGBA8I),q===i.SHORT&&(lt=i.RGBA16I),q===i.INT&&(lt=i.RGBA32I)),x===i.RGB&&(q===i.UNSIGNED_SHORT&&It&&(lt=It.RGB16_EXT),q===i.SHORT&&It&&(lt=It.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(lt=i.R11F_G11F_B10F)),x===i.RGBA){let ft=At?ga:Re.getTransfer(ot);q===i.FLOAT&&(lt=i.RGBA32F),q===i.HALF_FLOAT&&(lt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(lt=ft===Ve?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&It&&(lt=It.RGBA16_EXT),q===i.SHORT&&It&&(lt=It.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function b(C,x){let q;return C?x===null||x===Ei||x===Br?q=i.DEPTH24_STENCIL8:x===fi?q=i.DEPTH32F_STENCIL8:x===Or&&(q=i.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ei||x===Br?q=i.DEPTH_COMPONENT24:x===fi?q=i.DEPTH_COMPONENT32F:x===Or&&(q=i.DEPTH_COMPONENT16),q}function I(C,x){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==vn&&C.minFilter!==En?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function O(C){let x=C.target;x.removeEventListener("dispose",O),R(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&p.delete(x)}function v(C){let x=C.target;x.removeEventListener("dispose",v),W(x)}function R(C){let x=n.get(C);if(x.__webglInit===void 0)return;let q=C.source,tt=g.get(q);if(tt){let ot=tt[x.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&z(C),Object.keys(tt).length===0&&g.delete(q)}n.remove(C)}function z(C){let x=n.get(C);i.deleteTexture(x.__webglTexture);let q=C.source,tt=g.get(q);delete tt[x.__cacheKey],a.memory.textures--}function W(C){let x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(x.__webglFramebuffer[tt]))for(let ot=0;ot<x.__webglFramebuffer[tt].length;ot++)i.deleteFramebuffer(x.__webglFramebuffer[tt][ot]);else i.deleteFramebuffer(x.__webglFramebuffer[tt]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[tt])}else{if(Array.isArray(x.__webglFramebuffer))for(let tt=0;tt<x.__webglFramebuffer.length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[tt]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let tt=0;tt<x.__webglColorRenderbuffer.length;tt++)x.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[tt]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let q=C.textures;for(let tt=0,ot=q.length;tt<ot;tt++){let At=n.get(q[tt]);At.__webglTexture&&(i.deleteTexture(At.__webglTexture),a.memory.textures--),n.remove(q[tt])}n.remove(C)}let Y=0;function Z(){Y=0}function k(){return Y}function J(C){Y=C}function it(){let C=Y;return C>=s.maxTextures&&ae("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,C}function st(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function yt(C,x){let q=n.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&q.__version!==C.version){let tt=C.image;if(tt===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(q,C,x);return}}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+x)}function rt(C,x){let q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){Ut(q,C,x);return}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+x)}function ht(C,x){let q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){Ut(q,C,x);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+x)}function pt(C,x){let q=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&q.__version!==C.version){ie(q,C,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+x)}let Jt={[ll]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[cl]:i.MIRRORED_REPEAT},Gt={[vn]:i.NEAREST,[zf]:i.NEAREST_MIPMAP_NEAREST,[Ja]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[$l]:i.LINEAR_MIPMAP_NEAREST,[Ss]:i.LINEAR_MIPMAP_LINEAR},Pe={[Gf]:i.NEVER,[Yf]:i.ALWAYS,[Wf]:i.LESS,[Ic]:i.LEQUAL,[$f]:i.EQUAL,[Pc]:i.GEQUAL,[Xf]:i.GREATER,[qf]:i.NOTEQUAL};function we(C,x){if(x.type===fi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===En||x.magFilter===$l||x.magFilter===Ja||x.magFilter===Ss||x.minFilter===En||x.minFilter===$l||x.minFilter===Ja||x.minFilter===Ss)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Jt[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Jt[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Jt[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Gt[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Gt[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Pe[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===vn||x.minFilter!==Ja&&x.minFilter!==Ss||x.type===fi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Te(C,x){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",O));let tt=x.source,ot=g.get(tt);ot===void 0&&(ot={},g.set(tt,ot));let At=st(x);if(At!==C.__cacheKey){ot[At]===void 0&&(ot[At]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ot[At].usedTimes++;let It=ot[C.__cacheKey];It!==void 0&&(ot[C.__cacheKey].usedTimes--,It.usedTimes===0&&z(x)),C.__cacheKey=At,C.__webglTexture=ot[At].texture}return q}function et(C,x,q){return Math.floor(Math.floor(C/q)/x)}function ut(C,x,q,tt){let At=C.updateRanges;if(At.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,q,tt,x.data);else{At.sort(($t,Lt)=>$t.start-Lt.start);let It=0;for(let $t=1;$t<At.length;$t++){let Lt=At[It],Dt=At[$t],jt=Lt.start+Lt.count,ne=et(Dt.start,x.width,4),de=et(Lt.start,x.width,4);Dt.start<=jt+1&&ne===de&&et(Dt.start+Dt.count-1,x.width,4)===ne?Lt.count=Math.max(Lt.count,Dt.start+Dt.count-Lt.start):(++It,At[It]=Dt)}At.length=It+1;let lt=e.getParameter(i.UNPACK_ROW_LENGTH),ft=e.getParameter(i.UNPACK_SKIP_PIXELS),Ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let $t=0,Lt=At.length;$t<Lt;$t++){let Dt=At[$t],jt=Math.floor(Dt.start/4),ne=Math.ceil(Dt.count/4),de=jt%x.width,G=Math.floor(jt/x.width),Et=ne,ct=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,de),e.pixelStorei(i.UNPACK_SKIP_ROWS,G),e.texSubImage2D(i.TEXTURE_2D,0,de,G,Et,ct,q,tt,x.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,lt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ft)}}function Ut(C,x,q){let tt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(tt=i.TEXTURE_3D);let ot=Te(C,x),At=x.source;e.bindTexture(tt,C.__webglTexture,i.TEXTURE0+q);let It=n.get(At);if(At.version!==It.__version||ot===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ct=Re.getPrimaries(Re.workingColorSpace),Ct=x.colorSpace===is?null:Re.getPrimaries(x.colorSpace),zt=x.colorSpace===is||ct===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let ft=f(x.image,!1,s.maxTextureSize);ft=De(x,ft);let Ft=r.convert(x.format,x.colorSpace),$t=r.convert(x.type),Lt=w(x.internalFormat,Ft,$t,x.normalized,x.colorSpace,x.isVideoTexture);we(tt,x);let Dt,jt=x.mipmaps,ne=x.isVideoTexture!==!0,de=It.__version===void 0||ot===!0,G=At.dataReady,Et=I(x,ft);if(x.isDepthTexture)Lt=b(x.format===Ms,x.type),de&&(ne?e.texStorage2D(i.TEXTURE_2D,1,Lt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Lt,ft.width,ft.height,0,Ft,$t,null));else if(x.isDataTexture)if(jt.length>0){ne&&de&&e.texStorage2D(i.TEXTURE_2D,Et,Lt,jt[0].width,jt[0].height);for(let ct=0,Ct=jt.length;ct<Ct;ct++)Dt=jt[ct],ne?G&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Dt.width,Dt.height,Ft,$t,Dt.data):e.texImage2D(i.TEXTURE_2D,ct,Lt,Dt.width,Dt.height,0,Ft,$t,Dt.data);x.generateMipmaps=!1}else ne?(de&&e.texStorage2D(i.TEXTURE_2D,Et,Lt,ft.width,ft.height),G&&ut(x,ft,Ft,$t)):e.texImage2D(i.TEXTURE_2D,0,Lt,ft.width,ft.height,0,Ft,$t,ft.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ne&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Lt,jt[0].width,jt[0].height,ft.depth);for(let ct=0,Ct=jt.length;ct<Ct;ct++)if(Dt=jt[ct],x.format!==pi)if(Ft!==null)if(ne){if(G)if(x.layerUpdates.size>0){let zt=Cu(Dt.width,Dt.height,x.format,x.type);for(let gt of x.layerUpdates){let Qt=Dt.data.subarray(gt*zt/Dt.data.BYTES_PER_ELEMENT,(gt+1)*zt/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,gt,Dt.width,Dt.height,1,Ft,Qt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Dt.width,Dt.height,ft.depth,Ft,Dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,Lt,Dt.width,Dt.height,ft.depth,0,Dt.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Dt.width,Dt.height,ft.depth,Ft,$t,Dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,Lt,Dt.width,Dt.height,ft.depth,0,Ft,$t,Dt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ne&&de&&e.texStorage2D(i.TEXTURE_2D,Et,Lt,jt[0].width,jt[0].height);for(let ct=0,Ct=jt.length;ct<Ct;ct++)Dt=jt[ct],x.format!==pi?Ft!==null?ne?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,Dt.width,Dt.height,Ft,Dt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,Lt,Dt.width,Dt.height,0,Dt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?G&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Dt.width,Dt.height,Ft,$t,Dt.data):e.texImage2D(i.TEXTURE_2D,ct,Lt,Dt.width,Dt.height,0,Ft,$t,Dt.data)}else if(x.isDataArrayTexture)if(ne){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Lt,ft.width,ft.height,ft.depth),G)if(x.layerUpdates.size>0){let ct=Cu(ft.width,ft.height,x.format,x.type);for(let Ct of x.layerUpdates){let zt=ft.data.subarray(Ct*ct/ft.data.BYTES_PER_ELEMENT,(Ct+1)*ct/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ct,ft.width,ft.height,1,Ft,$t,zt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Ft,$t,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,ft.width,ft.height,ft.depth,0,Ft,$t,ft.data);else if(x.isData3DTexture)ne?(de&&e.texStorage3D(i.TEXTURE_3D,Et,Lt,ft.width,ft.height,ft.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Ft,$t,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,ft.width,ft.height,ft.depth,0,Ft,$t,ft.data);else if(x.isFramebufferTexture){if(de)if(ne)e.texStorage2D(i.TEXTURE_2D,Et,Lt,ft.width,ft.height);else{let ct=ft.width,Ct=ft.height;for(let zt=0;zt<Et;zt++)e.texImage2D(i.TEXTURE_2D,zt,Lt,ct,Ct,0,Ft,$t,null),ct>>=1,Ct>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ct=i.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),ft.parentNode!==ct){ct.appendChild(ft),p.add(x),ct.onpaint=Ct=>{let zt=Ct.changedElements;for(let gt of p)zt.includes(gt.image)&&(gt.needsUpdate=!0)},ct.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ft);else{let zt=i.RGBA,gt=i.RGBA,Qt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,zt,gt,Qt,ft)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(jt.length>0){if(ne&&de){let ct=Se(jt[0]);e.texStorage2D(i.TEXTURE_2D,Et,Lt,ct.width,ct.height)}for(let ct=0,Ct=jt.length;ct<Ct;ct++)Dt=jt[ct],ne?G&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Ft,$t,Dt):e.texImage2D(i.TEXTURE_2D,ct,Lt,Ft,$t,Dt);x.generateMipmaps=!1}else if(ne){if(de){let ct=Se(ft);e.texStorage2D(i.TEXTURE_2D,Et,Lt,ct.width,ct.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ft,$t,ft)}else e.texImage2D(i.TEXTURE_2D,0,Lt,Ft,$t,ft);d(x)&&L(tt),It.__version=At.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function ie(C,x,q){if(x.image.length!==6)return;let tt=Te(C,x),ot=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+q);let At=n.get(ot);if(ot.version!==At.__version||tt===!0){e.activeTexture(i.TEXTURE0+q);let It=Re.getPrimaries(Re.workingColorSpace),lt=x.colorSpace===is?null:Re.getPrimaries(x.colorSpace),ft=x.colorSpace===is||It===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Ft=x.isCompressedTexture||x.image[0].isCompressedTexture,$t=x.image[0]&&x.image[0].isDataTexture,Lt=[];for(let gt=0;gt<6;gt++)!Ft&&!$t?Lt[gt]=f(x.image[gt],!0,s.maxCubemapSize):Lt[gt]=$t?x.image[gt].image:x.image[gt],Lt[gt]=De(x,Lt[gt]);let Dt=Lt[0],jt=r.convert(x.format,x.colorSpace),ne=r.convert(x.type),de=w(x.internalFormat,jt,ne,x.normalized,x.colorSpace),G=x.isVideoTexture!==!0,Et=At.__version===void 0||tt===!0,ct=ot.dataReady,Ct=I(x,Dt);we(i.TEXTURE_CUBE_MAP,x);let zt;if(Ft){G&&Et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,de,Dt.width,Dt.height);for(let gt=0;gt<6;gt++){zt=Lt[gt].mipmaps;for(let Qt=0;Qt<zt.length;Qt++){let Yt=zt[Qt];x.format!==pi?jt!==null?G?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Qt,0,0,Yt.width,Yt.height,jt,Yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Qt,de,Yt.width,Yt.height,0,Yt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Qt,0,0,Yt.width,Yt.height,jt,ne,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Qt,de,Yt.width,Yt.height,0,jt,ne,Yt.data)}}}else{if(zt=x.mipmaps,G&&Et){zt.length>0&&Ct++;let gt=Se(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,de,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if($t){G?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Lt[gt].width,Lt[gt].height,jt,ne,Lt[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,de,Lt[gt].width,Lt[gt].height,0,jt,ne,Lt[gt].data);for(let Qt=0;Qt<zt.length;Qt++){let Oe=zt[Qt].image[gt].image;G?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Qt+1,0,0,Oe.width,Oe.height,jt,ne,Oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Qt+1,de,Oe.width,Oe.height,0,jt,ne,Oe.data)}}else{G?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,jt,ne,Lt[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,de,jt,ne,Lt[gt]);for(let Qt=0;Qt<zt.length;Qt++){let Yt=zt[Qt];G?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Qt+1,0,0,jt,ne,Yt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Qt+1,de,jt,ne,Yt.image[gt])}}}d(x)&&L(i.TEXTURE_CUBE_MAP),At.__version=ot.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Rt(C,x,q,tt,ot,At){let It=r.convert(q.format,q.colorSpace),lt=r.convert(q.type),ft=w(q.internalFormat,It,lt,q.normalized,q.colorSpace),Ft=n.get(x),$t=n.get(q);if($t.__renderTarget=x,!Ft.__hasExternalTextures){let Lt=Math.max(1,x.width>>At),Dt=Math.max(1,x.height>>At);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,At,ft,Lt,Dt,x.depth,0,It,lt,null):e.texImage2D(ot,At,ft,Lt,Dt,0,It,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,ot,$t.__webglTexture,0,le(x)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,ot,$t.__webglTexture,At),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(C,x,q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){let tt=x.depthTexture,ot=tt&&tt.isDepthTexture?tt.type:null,At=b(x.stencilBuffer,ot),It=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;he(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(x),At,x.width,x.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(x),At,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,At,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,C)}else{let tt=x.textures;for(let ot=0;ot<tt.length;ot++){let At=tt[ot],It=r.convert(At.format,At.colorSpace),lt=r.convert(At.type),ft=w(At.internalFormat,It,lt,At.normalized,At.colorSpace);he(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(x),ft,x.width,x.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(x),ft,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ft,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(C,x,q){let tt=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=n.get(x.depthTexture);if(ot.__renderTarget=x,(!ot.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),tt){if(ot.__webglInit===void 0&&(ot.__webglInit=!0,x.depthTexture.addEventListener("dispose",O)),ot.__webglTexture===void 0){ot.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),we(i.TEXTURE_CUBE_MAP,x.depthTexture);let Ft=r.convert(x.depthTexture.format),$t=r.convert(x.depthTexture.type),Lt;x.depthTexture.format===Ui?Lt=i.DEPTH_COMPONENT24:x.depthTexture.format===Ms&&(Lt=i.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Lt,x.width,x.height,0,Ft,$t,null)}}else yt(x.depthTexture,0);let At=ot.__webglTexture,It=le(x),lt=tt?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,ft=x.depthTexture.format===Ms?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ui)he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,lt,At,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,ft,lt,At,0);else if(x.depthTexture.format===Ms)he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,lt,At,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,ft,lt,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function F(C){let x=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let tt=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),tt){let ot=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,tt.removeEventListener("dispose",ot)};tt.addEventListener("dispose",ot),x.__depthDisposeCallback=ot}x.__boundDepthTexture=tt}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(q)for(let tt=0;tt<6;tt++)Le(x.__webglFramebuffer[tt],C,tt);else{let tt=C.texture.mipmaps;tt&&tt.length>0?Le(x.__webglFramebuffer[0],C,0):Le(x.__webglFramebuffer,C,0)}else if(q){x.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[tt]),x.__webglDepthbuffer[tt]===void 0)x.__webglDepthbuffer[tt]=i.createRenderbuffer(),Vt(x.__webglDepthbuffer[tt],C,!1);else{let ot=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=x.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,At),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,At)}}else{let tt=C.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Vt(x.__webglDepthbuffer,C,!1);else{let ot=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,At),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,At)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(C,x,q){let tt=n.get(C);x!==void 0&&Rt(tt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&F(C)}function bt(C){let x=C.texture,q=n.get(C),tt=n.get(x);C.addEventListener("dispose",v);let ot=C.textures,At=C.isWebGLCubeRenderTarget===!0,It=ot.length>1;if(It||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=x.version,a.memory.textures++),At){q.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0){q.__webglFramebuffer[lt]=[];for(let ft=0;ft<x.mipmaps.length;ft++)q.__webglFramebuffer[lt][ft]=i.createFramebuffer()}else q.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){q.__webglFramebuffer=[];for(let lt=0;lt<x.mipmaps.length;lt++)q.__webglFramebuffer[lt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(It)for(let lt=0,ft=ot.length;lt<ft;lt++){let Ft=n.get(ot[lt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&he(C)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let lt=0;lt<ot.length;lt++){let ft=ot[lt];q.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[lt]);let Ft=r.convert(ft.format,ft.colorSpace),$t=r.convert(ft.type),Lt=w(ft.internalFormat,Ft,$t,ft.normalized,ft.colorSpace,C.isXRRenderTarget===!0),Dt=le(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Lt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,q.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Vt(q.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(At){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),we(i.TEXTURE_CUBE_MAP,x);for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)Rt(q.__webglFramebuffer[lt][ft],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ft);else Rt(q.__webglFramebuffer[lt],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);d(x)&&L(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let lt=0,ft=ot.length;lt<ft;lt++){let Ft=ot[lt],$t=n.get(Ft),Lt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Lt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Lt,$t.__webglTexture),we(Lt,Ft),Rt(q.__webglFramebuffer,C,Ft,i.COLOR_ATTACHMENT0+lt,Lt,0),d(Ft)&&L(Lt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,tt.__webglTexture),we(lt,x),x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)Rt(q.__webglFramebuffer[ft],C,x,i.COLOR_ATTACHMENT0,lt,ft);else Rt(q.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,lt,0);d(x)&&L(lt),e.unbindTexture()}C.depthBuffer&&F(C)}function Mt(C){let x=C.textures;for(let q=0,tt=x.length;q<tt;q++){let ot=x[q];if(d(ot)){let At=D(C),It=n.get(ot).__webglTexture;e.bindTexture(At,It),L(At),e.unbindTexture()}}}let wt=[],te=[];function Wt(C){if(C.samples>0){if(he(C)===!1){let x=C.textures,q=C.width,tt=C.height,ot=i.COLOR_BUFFER_BIT,At=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(C),lt=x.length>1;if(lt)for(let Ft=0;Ft<x.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);let ft=C.texture.mipmaps;ft&&ft.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Ft=0;Ft<x.length;Ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Ft]);let $t=n.get(x[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,q,tt,0,0,q,tt,ot,i.NEAREST),l===!0&&(wt.length=0,te.length=0,wt.push(i.COLOR_ATTACHMENT0+Ft),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(wt.push(At),te.push(At),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Ft=0;Ft<x.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,It.__webglColorRenderbuffer[Ft]);let $t=n.get(x[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function le(C){return Math.min(s.maxSamples,C.samples)}function he(C){let x=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(C){let x=a.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function De(C,x){let q=C.colorSpace,tt=C.format,ot=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==ma&&q!==is&&(Re.getTransfer(q)===Ve?(tt!==pi||ot!==Qn)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",q)),x}function Se(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=it,this.resetTextureUnits=Z,this.getTextureUnits=k,this.setTextureUnits=J,this.setTexture2D=yt,this.setTexture2DArray=rt,this.setTexture3D=ht,this.setTextureCube=pt,this.rebindTextures=_t,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Vy(i,t){function e(n,s=is){let r,a=Re.getTransfer(s);if(n===Qn)return i.UNSIGNED_BYTE;if(n===ql)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_u)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pu)return i.BYTE;if(n===mu)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===Xl)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===fi)return i.FLOAT;if(n===Ti)return i.HALF_FLOAT;if(n===xu)return i.ALPHA;if(n===vu)return i.RGB;if(n===pi)return i.RGBA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===Zl)return i.RED;if(n===Jl)return i.RED_INTEGER;if(n===bs)return i.RG;if(n===Kl)return i.RG_INTEGER;if(n===jl)return i.RGBA_INTEGER;if(n===Ka||n===ja||n===Qa||n===to)if(a===Ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ql||n===tc||n===ec||n===nc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ic||n===sc||n===rc||n===ac||n===oc||n===eo||n===lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ic||n===sc)return a===Ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ac)return r.COMPRESSED_R11_EAC;if(n===oc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===eo)return r.COMPRESSED_RG11_EAC;if(n===lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc||n===vc||n===yc||n===Sc||n===Mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_c)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bc||n===wc||n===Ec)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===bc)return a===Ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tc||n===Ac||n===no||n===Cc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gy=`
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

}`,Hu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ca(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Mn({vertexShader:Hy,fragmentShader:Gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Sn(new Ba(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gu=class extends Fi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,g=null,_=null,E=typeof XRWebGLBinding<"u",f=new Hu,d={},L=e.getContextAttributes(),D=null,w=null,b=[],I=[],O=new Nt,v=null,R=null,z=new Fn;z.viewport=new He;let W=new Fn;W.viewport=new He;let Y=[z,W],Z=new Vl,k=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ut=b[et];return ut===void 0&&(ut=new Cr,b[et]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(et){let ut=b[et];return ut===void 0&&(ut=new Cr,b[et]=ut),ut.getGripSpace()},this.getHand=function(et){let ut=b[et];return ut===void 0&&(ut=new Cr,b[et]=ut),ut.getHandSpace()};function it(et){let ut=I.indexOf(et.inputSource);if(ut===-1)return;let Ut=b[ut];Ut!==void 0&&(Ut.update(et.inputSource,et.frame,c||a),Ut.dispatchEvent({type:et.type,data:et.inputSource}))}function st(){s.removeEventListener("select",it),s.removeEventListener("selectstart",it),s.removeEventListener("selectend",it),s.removeEventListener("squeeze",it),s.removeEventListener("squeezestart",it),s.removeEventListener("squeezeend",it),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",yt);for(let et=0;et<b.length;et++){let ut=I[et];ut!==null&&(I[et]=null,b[et].disconnect(ut))}k=null,J=null,f.reset();for(let et in d)delete d[et];if(t.setRenderTarget(D),g=null,u=null,p=null,s=null,w=null,Te.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(O.width,O.height,!1),R!==null){let et=R.camera;et.fov=R.fov,et.zoom=R.zoom,et.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,n.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(D=t.getRenderTarget(),s.addEventListener("select",it),s.addEventListener("selectstart",it),s.addEventListener("selectend",it),s.addEventListener("squeeze",it),s.addEventListener("squeezestart",it),s.addEventListener("squeezeend",it),s.addEventListener("end",st),s.addEventListener("inputsourceschange",yt),L.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(O),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,ie=null,Rt=null;L.depth&&(Rt=L.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ut=L.stencil?Ms:Ui,ie=L.stencil?Br:Ei);let Vt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Vt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new Kn(u.textureWidth,u.textureHeight,{format:pi,type:Qn,depthTexture:new ps(u.textureWidth,u.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ut={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,Ut),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new Kn(g.framebufferWidth,g.framebufferHeight,{format:pi,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Te.setContext(s),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function yt(et){for(let ut=0;ut<et.removed.length;ut++){let Ut=et.removed[ut],ie=I.indexOf(Ut);ie>=0&&(I[ie]=null,b[ie].disconnect(Ut))}for(let ut=0;ut<et.added.length;ut++){let Ut=et.added[ut],ie=I.indexOf(Ut);if(ie===-1){for(let Vt=0;Vt<b.length;Vt++)if(Vt>=I.length){I.push(Ut),ie=Vt;break}else if(I[Vt]===null){I[Vt]=Ut,ie=Vt;break}if(ie===-1)break}let Rt=b[ie];Rt&&Rt.connect(Ut)}}let rt=new B,ht=new B;function pt(et,ut,Ut){rt.setFromMatrixPosition(ut.matrixWorld),ht.setFromMatrixPosition(Ut.matrixWorld);let ie=rt.distanceTo(ht),Rt=ut.projectionMatrix.elements,Vt=Ut.projectionMatrix.elements,Le=Rt[14]/(Rt[10]-1),F=Rt[14]/(Rt[10]+1),_t=(Rt[9]+1)/Rt[5],bt=(Rt[9]-1)/Rt[5],Mt=(Rt[8]-1)/Rt[0],wt=(Vt[8]+1)/Vt[0],te=Le*Mt,Wt=Le*wt,le=ie/(-Mt+wt),he=le*-Mt;if(ut.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(he),et.translateZ(le),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Rt[10]===-1)et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{let U=Le+le,De=F+le,Se=te-he,C=Wt+(ie-he),x=_t*F/De*U,q=bt*F/De*U;et.projectionMatrix.makePerspective(Se,C,x,q,U,De),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Jt(et,ut){ut===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ut.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let ut=et.near,Ut=et.far;f.texture!==null&&(f.depthNear>0&&(ut=f.depthNear),f.depthFar>0&&(Ut=f.depthFar)),Z.near=W.near=z.near=ut,Z.far=W.far=z.far=Ut,(k!==Z.near||J!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),k=Z.near,J=Z.far),Z.layers.mask=et.layers.mask|6,z.layers.mask=Z.layers.mask&-5,W.layers.mask=Z.layers.mask&-3;let ie=et.parent,Rt=Z.cameras;Jt(Z,ie);for(let Vt=0;Vt<Rt.length;Vt++)Jt(Rt[Vt],ie);Rt.length===2?pt(Z,z,W):Z.projectionMatrix.copy(z.projectionMatrix),R===null&&et.isPerspectiveCamera&&(R={camera:et,fov:et.fov,zoom:et.zoom}),Gt(et,Z,ie)};function Gt(et,ut,Ut){Ut===null?et.matrix.copy(ut.matrixWorld):(et.matrix.copy(Ut.matrixWorld),et.matrix.invert(),et.matrix.multiply(ut.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Er*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(u===null&&g===null))return l},this.setFoveation=function(et){l=et,u!==null&&(u.fixedFoveation=et),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=et)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(Z)},this.getCameraTexture=function(et){return d[et]};let Pe=null;function we(et,ut){if(h=ut.getViewerPose(c||a),_=ut,h!==null){let Ut=h.views;g!==null&&(t.setRenderTargetFramebuffer(w,g.framebuffer),t.setRenderTarget(w));let ie=!1;Ut.length!==Z.cameras.length&&(Z.cameras.length=0,ie=!0);for(let F=0;F<Ut.length;F++){let _t=Ut[F],bt=null;if(g!==null)bt=g.getViewport(_t);else{let wt=p.getViewSubImage(u,_t);bt=wt.viewport,F===0&&(t.setRenderTargetTextures(w,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(w))}let Mt=Y[F];Mt===void 0&&(Mt=new Fn,Mt.layers.enable(F),Mt.viewport=new He,Y[F]=Mt),Mt.matrix.fromArray(_t.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(_t.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(bt.x,bt.y,bt.width,bt.height),F===0&&(Z.matrix.copy(Mt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),ie===!0&&Z.cameras.push(Mt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){p=n.getBinding();let F=p.getDepthInformation(Ut[0]);F&&F.isValid&&F.texture&&f.init(F,s.renderState)}if(Rt&&Rt.includes("camera-access")&&E){t.state.unbindTexture(),p=n.getBinding();for(let F=0;F<Ut.length;F++){let _t=Ut[F].camera;if(_t){let bt=d[_t];bt||(bt=new Ca,d[_t]=bt);let Mt=p.getCameraImage(_t);bt.sourceTexture=Mt}}}}for(let Ut=0;Ut<b.length;Ut++){let ie=I[Ut],Rt=b[Ut];ie!==null&&Rt!==void 0&&Rt.update(ie,ut,c||a)}Pe&&Pe(et,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),_=null}let Te=new Ap;Te.setAnimationLoop(we),this.setAnimationLoop=function(et){Pe=et},this.dispose=function(){}}},Wy=new Ne,Dp=new me;Dp.set(-1,0,0,0,1,0,0,0,1);function $y(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Eu(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,L,D,w){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(f,d):d.isMeshLambertMaterial?(r(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(f,d),p(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(f,d),u(f,d),d.isMeshPhysicalMaterial&&g(f,d,w)):d.isMeshMatcapMaterial?(r(f,d),_(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),E(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,L,D):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Wn&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Wn&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let L=t.get(d),D=L.envMap,w=L.envMapRotation;D&&(f.envMap.value=D,f.envMapRotation.value.setFromMatrix4(Wy.makeRotationFromEuler(w)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Dp),f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,L,D){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*L,f.scale.value=D*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function p(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function u(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function g(f,d,L){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Wn&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.retroreflectivity>0&&(f.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=L.texture,f.transmissionSamplerSize.value.set(L.width,L.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,d){d.matcap&&(f.matcap.value=d.matcap)}function E(f,d){let L=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(L.matrixWorld),f.nearDistance.value=L.shadow.camera.near,f.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xy(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){let I=b.program;n.uniformBlockBinding(w,I)}function c(w,b){let I=s[w.id];I===void 0&&(f(w),I=h(w),s[w.id]=I,w.addEventListener("dispose",L));let O=b.program;n.updateUBOMapping(w,O);let v=t.render.frame;r[w.id]!==v&&(u(w),r[w.id]=v)}function h(w){let b=p();w.__bindingPointIndex=b;let I=i.createBuffer(),O=w.__size,v=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,O,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,I),I}function p(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){let b=s[w.id],I=w.uniforms,O=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,R=I.length;v<R;v++){let z=I[v];if(Array.isArray(z))for(let W=0,Y=z.length;W<Y;W++)g(z[W],v,W,O);else g(z,v,0,O)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(w,b,I,O){if(E(w,b,I,O)===!0){let v=w.__offset,R=w.value;if(Array.isArray(R)){let z=0;for(let W=0;W<R.length;W++){let Y=R[W],Z=d(Y);_(Y,w.__data,z),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(R,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,w.__data)}}function _(w,b,I){typeof w=="number"||typeof w=="boolean"?b[0]=w:w.isMatrix3?(b[0]=w.elements[0],b[1]=w.elements[1],b[2]=w.elements[2],b[3]=0,b[4]=w.elements[3],b[5]=w.elements[4],b[6]=w.elements[5],b[7]=0,b[8]=w.elements[6],b[9]=w.elements[7],b[10]=w.elements[8],b[11]=0):ArrayBuffer.isView(w)?b.set(new w.constructor(w.buffer,w.byteOffset,b.length)):w.toArray(b,I)}function E(w,b,I,O){let v=w.value,R=b+"_"+I;if(O[R]===void 0)return typeof v=="number"||typeof v=="boolean"?O[R]=v:ArrayBuffer.isView(v)?O[R]=v.slice():O[R]=v.clone(),!0;{let z=O[R];if(typeof v=="number"||typeof v=="boolean"){if(z!==v)return O[R]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(z.equals(v)===!1)return z.copy(v),!0}}return!1}function f(w){let b=w.uniforms,I=0,O=16;for(let R=0,z=b.length;R<z;R++){let W=Array.isArray(b[R])?b[R]:[b[R]];for(let Y=0,Z=W.length;Y<Z;Y++){let k=W[Y],J=Array.isArray(k.value)?k.value:[k.value];for(let it=0,st=J.length;it<st;it++){let yt=J[it],rt=d(yt),ht=I%O,pt=ht%rt.boundary,Jt=ht+pt;I+=pt,Jt!==0&&O-Jt<rt.storage&&(I+=O-Jt),k.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=I,I+=rt.storage}}}let v=I%O;return v>0&&(I+=O-v),w.__size=I,w.__cache={},this}function d(w){let b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(b.boundary=16,b.storage=w.byteLength):ae("WebGLRenderer: Unsupported uniform value type.",w),b}function L(w){let b=w.target;b.removeEventListener("dispose",L);let I=a.indexOf(b.__bindingPointIndex);a.splice(I,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function D(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:D}}var qy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vi=null;function Yy(){return Vi===null&&(Vi=new ba(qy,16,16,bs,Ti),Vi.name="DFG_LUT",Vi.minFilter=En,Vi.magFilter=En,Vi.wrapS=Di,Vi.wrapT=Di,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}var Fc=class{constructor(t={}){let{canvas:e=Zf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:g=Qn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let E=g,f=new Set([jl,Kl,Jl]),d=new Set([Qn,Ei,Or,Br,ql,Yl]),L=new Uint32Array(4),D=new Int32Array(4),w=new B,b=null,I=null,O=[],v=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let z=this,W=!1,Y=null,Z=null,k=null,J=null;this._outputColorSpace=ii;let it=0,st=0,yt=null,rt=-1,ht=null,pt=new He,Jt=new He,Gt=null,Pe=new oe(0),we=0,Te=e.width,et=e.height,ut=1,Ut=null,ie=null,Rt=new He(0,0,Te,et),Vt=new He(0,0,Te,et),Le=!1,F=new Rr,_t=!1,bt=!1,Mt=new Ne,wt=new B,te=new He,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function he(){return yt===null?ut:1}let U=n;function De(y,V){return e.getContext(y,V)}let Se,C,x,q,tt,ot,At,It,lt,ft,Ft,$t,Lt,Dt,jt,ne,de,G,Et,ct,Ct,zt,gt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Oe,!1),e.addEventListener("webglcontextrestored",Be,!1),e.addEventListener("webglcontextcreationerror",zn,!1),U===null){let V="webgl2";if(U=De(V,y),U===null)throw De(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(y){throw e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",Be,!1),e.removeEventListener("webglcontextcreationerror",zn,!1),ce("WebGLRenderer: "+y.message),y}function Qt(){Se=new ev(U),Se.init(),Ct=new Vy(U,Se),C=new $x(U,Se,t,Ct),x=new zy(U,Se),C.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),Z=U.createFramebuffer(),k=U.createFramebuffer(),J=U.createFramebuffer(),q=new sv(U),tt=new Ey,ot=new ky(U,Se,x,tt,C,Ct,q),At=new tv(z),It=new a0(U),zt=new Gx(U,It),lt=new nv(U,It,q,zt),ft=new av(U,lt,It,zt,q),G=new rv(U,C,ot),jt=new Xx(tt),Ft=new wy(z,At,Se,C,zt,jt),$t=new $y(z,tt),Lt=new Ay,Dt=new Dy(Se),de=new Hx(z,At,x,ft,_,l),ne=new By(z,ft,C),gt=new Xy(U,q,C,x),Et=new Wx(U,Se,q),ct=new iv(U,Se,q),q.programs=Ft.programs,z.capabilities=C,z.extensions=Se,z.properties=tt,z.renderLists=Lt,z.shadowMap=ne,z.state=x,z.info=q}E!==Qn&&(R=new lv(E,e.width,e.height,o,s,r));let Yt=new Gu(z,U);this.xr=Yt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let y=Se.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Se.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(y){y!==void 0&&(ut=y,this.setSize(Te,et,!1))},this.getSize=function(y){return y.set(Te,et)},this.setSize=function(y,V,nt=!0){if(Yt.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=y,et=V,e.width=Math.floor(y*ut),e.height=Math.floor(V*ut),nt===!0&&(e.style.width=y+"px",e.style.height=V+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,y,V)},this.getDrawingBufferSize=function(y){return y.set(Te*ut,et*ut).floor()},this.setDrawingBufferSize=function(y,V,nt){Te=y,et=V,ut=nt,e.width=Math.floor(y*nt),e.height=Math.floor(V*nt),this.setViewport(0,0,y,V)},this.setEffects=function(y){if(E===Qn){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let V=0;V<y.length;V++)if(y[V].isOutputPass===!0){ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(pt)},this.getViewport=function(y){return y.copy(Rt)},this.setViewport=function(y,V,nt,Q){y.isVector4?Rt.set(y.x,y.y,y.z,y.w):Rt.set(y,V,nt,Q),x.viewport(pt.copy(Rt).multiplyScalar(ut).round())},this.getScissor=function(y){return y.copy(Vt)},this.setScissor=function(y,V,nt,Q){y.isVector4?Vt.set(y.x,y.y,y.z,y.w):Vt.set(y,V,nt,Q),x.scissor(Jt.copy(Vt).multiplyScalar(ut).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(y){x.setScissorTest(Le=y)},this.setOpaqueSort=function(y){Ut=y},this.setTransparentSort=function(y){ie=y},this.getClearColor=function(y){return y.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(y=!0,V=!0,nt=!0){let Q=0;if(y){let K=!1;if(yt!==null){let Ot=yt.texture.format;K=f.has(Ot)}if(K){let Ot=yt.texture.type,Ht=d.has(Ot),Pt=de.getClearColor(),Xt=de.getClearAlpha(),Kt=Pt.r,ve=Pt.g,Ee=Pt.b;Ht?(L[0]=Kt,L[1]=ve,L[2]=Ee,L[3]=Xt,U.clearBufferuiv(U.COLOR,0,L)):(D[0]=Kt,D[1]=ve,D[2]=Ee,D[3]=Xt,U.clearBufferiv(U.COLOR,0,D))}else Q|=U.COLOR_BUFFER_BIT}V&&(Q|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&(Q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&U.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),Y=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",Be,!1),e.removeEventListener("webglcontextcreationerror",zn,!1),de.dispose(),Lt.dispose(),Dt.dispose(),tt.dispose(),At.dispose(),ft.dispose(),zt.dispose(),gt.dispose(),Ft.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",Yr),Yt.removeEventListener("sessionend",Zr),oi.stop()};function Oe(y){y.preventDefault(),xa("WebGLRenderer: Context Lost."),W=!0}function Be(){xa("WebGLRenderer: Context Restored."),W=!1;let y=q.autoReset,V=ne.enabled,nt=ne.autoUpdate,Q=ne.needsUpdate,K=ne.type;Qt(),q.autoReset=y,ne.enabled=V,ne.autoUpdate=nt,ne.needsUpdate=Q,ne.type=K}function zn(y){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function pn(y){let V=y.target;V.removeEventListener("dispose",pn),tr(V)}function tr(y){mo(y),tt.remove(y)}function mo(y){let V=tt.get(y).programs;V!==void 0&&(V.forEach(function(nt){Ft.releaseProgram(nt)}),y.isShaderMaterial&&Ft.releaseShaderCache(y))}this.renderBufferDirect=function(y,V,nt,Q,K,Ot){V===null&&(V=Wt);let Ht=K.isMesh&&K.matrixWorld.determinantAffine()<0,Pt=mi(y,V,nt,Q,K);x.setMaterial(Q,Ht);let Xt=nt.index,Kt=1;if(Q.wireframe===!0){if(Xt=lt.getWireframeAttribute(nt),Xt===void 0)return;Kt=2}let ve=nt.drawRange,Ee=nt.attributes.position,qt=ve.start*Kt,ze=(ve.start+ve.count)*Kt;Ot!==null&&(qt=Math.max(qt,Ot.start*Kt),ze=Math.min(ze,(Ot.start+Ot.count)*Kt)),Xt!==null?(qt=Math.max(qt,0),ze=Math.min(ze,Xt.count)):Ee!=null&&(qt=Math.max(qt,0),ze=Math.min(ze,Ee.count));let je=ze-qt;if(je<0||je===1/0)return;zt.setup(K,Q,Pt,nt,Xt);let ge,Ge=Et;if(Xt!==null&&(ge=It.get(Xt),Ge=ct,Ge.setIndex(ge)),K.isMesh)Q.wireframe===!0?(x.setLineWidth(Q.wireframeLinewidth*he()),Ge.setMode(U.LINES)):Ge.setMode(U.TRIANGLES);else if(K.isLine){let un=Q.linewidth;un===void 0&&(un=1),x.setLineWidth(un*he()),K.isLineSegments?Ge.setMode(U.LINES):K.isLineLoop?Ge.setMode(U.LINE_LOOP):Ge.setMode(U.LINE_STRIP)}else K.isPoints?Ge.setMode(U.POINTS):K.isSprite&&Ge.setMode(U.TRIANGLES);if(K.isBatchedMesh)if(Se.get("WEBGL_multi_draw"))Ge.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let un=K._multiDrawStarts,kt=K._multiDrawCounts,Qe=K._multiDrawCount,Ce=Xt?It.get(Xt).bytesPerElement:1,on=tt.get(Q).currentProgram.getUniforms();for(let kn=0;kn<Qe;kn++)on.setValue(U,"_gl_DrawID",kn),Ge.render(un[kn]/Ce,kt[kn])}else if(K.isInstancedMesh)Ge.renderInstances(qt,je,K.count);else if(nt.isInstancedBufferGeometry){let un=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,kt=Math.min(nt.instanceCount,un);Ge.renderInstances(qt,je,kt)}else Ge.render(qt,je)};function Xr(y,V,nt,Q){Y!==null&&y.isNodeMaterial&&Y.setObject(Q,y),_t===!0&&jt.setState(y,nt,!1),y.transparent===!0&&y.side===zi&&y.forceSinglePass===!1?(y.side=Wn,y.needsUpdate=!0,In(y,V,Q),y.side=vs,y.needsUpdate=!0,In(y,V,Q),y.side=zi):In(y,V,Q)}this.compile=function(y,V,nt=null){nt===null&&(nt=y),Y!==null&&Y.renderStart(y,V,nt),I=Dt.get(nt),I.init(V),v.push(I),nt.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(I.pushLight(K),K.castShadow&&I.pushShadow(K))}),y!==nt&&y.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(I.pushLight(K),K.castShadow&&I.pushShadow(K))}),I.setupLights(),Y!==null&&Y.updateLights(I.state.lightsArray),bt=this.localClippingEnabled,_t=jt.init(this.clippingPlanes,bt),_t===!0&&jt.setGlobalState(this.clippingPlanes,V),Y!==null&&ne.render(I.state.shadowsArray,nt,V);let Q=new Set;return y.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Ot=K.material;if(Ot)if(Array.isArray(Ot))for(let Ht=0;Ht<Ot.length;Ht++){let Pt=Ot[Ht];Xr(Pt,nt,V,K),Q.add(Pt)}else Xr(Ot,nt,V,K),Q.add(Ot)}),I=v.pop(),Y!==null&&Y.renderEnd(),Q},this.compileAsync=function(y,V,nt=null){let Q=this.compile(y,V,nt);return new Promise(K=>{function Ot(){if(Q.forEach(function(Ht){let Xt=tt.get(Ht).currentProgram;(Xt===void 0||Xt.isReady())&&Q.delete(Ht)}),Q.size===0){K(y);return}setTimeout(Ot,10)}Se.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let er=null;function qr(y){er&&er(y)}function Yr(){oi.stop()}function Zr(){oi.start()}let oi=new Ap;oi.setAnimationLoop(qr),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(y){er=y,Yt.setAnimationLoop(y),y===null?oi.stop():oi.start()},Yt.addEventListener("sessionstart",Yr),Yt.addEventListener("sessionend",Zr),this.render=function(y,V){if(V!==void 0&&V.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;Y!==null&&Y.renderStart(y,V);let nt=Yt.enabled===!0&&Yt.isPresenting===!0,Q=R!==null&&(yt===null||nt)&&R.begin(z,yt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(V),V=Yt.getCamera()),y.isScene===!0&&y.onBeforeRender(z,y,V,yt),I=Dt.get(y,v.length),I.init(V),I.state.textureUnits=ot.getTextureUnits(),v.push(I),Mt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),F.setFromProjectionMatrix(Mt,Si,V.reversedDepth),bt=this.localClippingEnabled,_t=jt.init(this.clippingPlanes,bt),b=Lt.get(y,O.length),b.init(),O.push(b),Yt.enabled===!0&&Yt.isPresenting===!0){let Ht=z.xr.getDepthSensingMesh();Ht!==null&&nr(Ht,V,-1/0,z.sortObjects)}nr(y,V,0,z.sortObjects),b.finish(),Y!==null&&Y.updateLights(I.state.lightsArray),z.sortObjects===!0&&b.sort(Ut,ie),le=Yt.enabled===!1||Yt.isPresenting===!1||Yt.hasDepthSensing()===!1,le&&de.addToRenderList(b,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&jt.beginShadows();let K=I.state.shadowsArray;if(ne.render(K,y,V),_t===!0&&jt.endShadows(),(Q&&R.hasRenderPass())===!1){let Ht=b.opaque,Pt=b.transmissive;if(I.setupLights(),V.isArrayCamera){let Xt=V.cameras;if(Pt.length>0)for(let Kt=0,ve=Xt.length;Kt<ve;Kt++){let Ee=Xt[Kt];_o(Ht,Pt,y,Ee)}le&&de.render(y);for(let Kt=0,ve=Xt.length;Kt<ve;Kt++){let Ee=Xt[Kt];go(b,y,Ee,Ee.viewport)}}else Pt.length>0&&_o(Ht,Pt,y,V),le&&de.render(y),go(b,y,V)}yt!==null&&st===0&&(ot.updateMultisampleRenderTarget(yt),ot.updateRenderTargetMipmap(yt)),Q&&R.end(z),y.isScene===!0&&y.onAfterRender(z,y,V),zt.resetDefaultState(),rt=-1,ht=null,v.pop(),v.length>0?(I=v[v.length-1],ot.setTextureUnits(I.state.textureUnits),_t===!0&&jt.setGlobalState(z.clippingPlanes,I.state.camera)):I=null,O.pop(),O.length>0?b=O[O.length-1]:b=null,Y!==null&&Y.renderEnd()};function nr(y,V,nt,Q){if(y.visible===!1)return;if(y.layers.test(V.layers)){if(y.isGroup)nt=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(V);else if(y.isLightProbeGrid)I.pushLightProbeGrid(y);else if(y.isLight)I.pushLight(y),y.castShadow&&I.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(F)){Q&&te.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Mt);let Ht=ft.update(y),Pt=y.material;Pt.visible&&b.push(y,Ht,Pt,nt,te.z,null,V)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(F))){let Ht=ft.update(y),Pt=y.material;if(Q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),te.copy(y.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),te.copy(Ht.boundingSphere.center)),te.applyMatrix4(y.matrixWorld).applyMatrix4(Mt)),Array.isArray(Pt)){let Xt=Ht.groups;for(let Kt=0,ve=Xt.length;Kt<ve;Kt++){let Ee=Xt[Kt],qt=Pt[Ee.materialIndex];qt&&qt.visible&&b.push(y,Ht,qt,nt,te.z,Ee,V)}}else Pt.visible&&b.push(y,Ht,Pt,nt,te.z,null,V)}}let Ot=y.children;for(let Ht=0,Pt=Ot.length;Ht<Pt;Ht++)nr(Ot[Ht],V,nt,Q)}function go(y,V,nt,Q){let{opaque:K,transmissive:Ot,transparent:Ht}=y;I.setupLightsView(nt),_t===!0&&jt.setGlobalState(z.clippingPlanes,nt),Q&&x.viewport(pt.copy(Q)),K.length>0&&As(K,V,nt),Ot.length>0&&As(Ot,V,nt),Ht.length>0&&As(Ht,V,nt),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function _o(y,V,nt,Q){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[Q.id]===void 0){let qt=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[Q.id]=new Kn(1,1,{generateMipmaps:!0,type:qt?Ti:Qn,minFilter:Ss,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Re.workingColorSpace})}let Ot=I.state.transmissionRenderTarget[Q.id],Ht=Q.viewport||pt;Ot.setSize(Ht.z*z.transmissionResolutionScale,Ht.w*z.transmissionResolutionScale);let Pt=z.getRenderTarget(),Xt=z.getActiveCubeFace(),Kt=z.getActiveMipmapLevel();z.setRenderTarget(Ot),z.getClearColor(Pe),we=z.getClearAlpha(),we<1&&z.setClearColor(16777215,.5),z.clear(),le&&de.render(nt);let ve=z.toneMapping;z.toneMapping=wi;let Ee=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),I.setupLightsView(Q),_t===!0&&jt.setGlobalState(z.clippingPlanes,Q),As(y,nt,Q),ot.updateMultisampleRenderTarget(Ot),ot.updateRenderTargetMipmap(Ot),Se.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let ze=0,je=V.length;ze<je;ze++){let ge=V[ze],{object:Ge,geometry:un,material:kt,group:Qe}=ge;if(kt.side===zi&&Ge.layers.test(Q.layers)){let Ce=kt.side;kt.side=Wn,kt.needsUpdate=!0,xo(Ge,nt,Q,un,kt,Qe),kt.side=Ce,kt.needsUpdate=!0,qt=!0}}qt===!0&&(ot.updateMultisampleRenderTarget(Ot),ot.updateRenderTargetMipmap(Ot))}z.setRenderTarget(Pt,Xt,Kt),z.setClearColor(Pe,we),Ee!==void 0&&(Q.viewport=Ee),z.toneMapping=ve}function As(y,V,nt){let Q=V.isScene===!0?V.overrideMaterial:null;for(let K=0,Ot=y.length;K<Ot;K++){let Ht=y[K],{object:Pt,geometry:Xt,group:Kt}=Ht,ve=Ht.material;ve.allowOverride===!0&&Q!==null&&(ve=Q),Pt.layers.test(nt.layers)&&xo(Pt,V,nt,Xt,ve,Kt)}}function xo(y,V,nt,Q,K,Ot){Y!==null&&K.isNodeMaterial&&Y.setObject(y,K),y.onBeforeRender(z,V,nt,Q,K,Ot),y.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),K.onBeforeRender(z,V,nt,Q,y,Ot),K.transparent===!0&&K.side===zi&&K.forceSinglePass===!1?(K.side=Wn,K.needsUpdate=!0,z.renderBufferDirect(nt,V,Q,K,y,Ot),K.side=vs,K.needsUpdate=!0,z.renderBufferDirect(nt,V,Q,K,y,Ot),K.side=zi):z.renderBufferDirect(nt,V,Q,K,y,Ot),y.onAfterRender(z,V,nt,Q,K,Ot)}function In(y,V,nt){V.isScene!==!0&&(V=Wt);let Q=tt.get(y),K=I.state.lights,Ot=I.state.shadowsArray,Ht=K.state.version,Pt=Ft.getParameters(y,K.state,Ot,V,nt,I.state.lightProbeGridArray),Xt=Ft.getProgramCacheKey(Pt),Kt=Q.programs;Q.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?V.environment:null,Q.fog=V.fog;let ve=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;Q.envMap=At.get(y.envMap||Q.environment,ve),Q.envMapRotation=Q.environment!==null&&y.envMap===null?V.environmentRotation:y.envMapRotation,Kt===void 0&&(y.addEventListener("dispose",pn),Kt=new Map,Q.programs=Kt);let Ee=Kt.get(Xt);if(Ee!==void 0){if(Q.currentProgram===Ee&&Q.lightsStateVersion===Ht)return cn(y,Pt),Ee}else Pt.uniforms=Ft.getUniforms(y),Y!==null&&y.isNodeMaterial&&Y.build(y,nt,Pt),y.onBeforeCompile(Pt,z),Ee=Ft.acquireProgram(Pt,Xt),Kt.set(Xt,Ee),Q.uniforms=Pt.uniforms;let qt=Q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(qt.clippingPlanes=jt.uniform),cn(y,Pt),Q.needsLights=Me(y),Q.lightsStateVersion=Ht,Q.needsLights&&(qt.ambientLightColor.value=K.state.ambient,qt.lightProbe.value=K.state.probe,qt.sunLights.value=K.state.sun,qt.sunLightShadows.value=K.state.sunShadow,qt.directionalLights.value=K.state.directional,qt.directionalLightShadows.value=K.state.directionalShadow,qt.spotLights.value=K.state.spot,qt.spotLightShadows.value=K.state.spotShadow,qt.rectAreaLights.value=K.state.rectArea,qt.ltc_1.value=K.state.rectAreaLTC1,qt.ltc_2.value=K.state.rectAreaLTC2,qt.pointLights.value=K.state.point,qt.pointLightShadows.value=K.state.pointShadow,qt.hemisphereLights.value=K.state.hemi,qt.sunShadowMatrix.value=K.state.sunShadowMatrix,qt.sunShadowCascade.value=K.state.sunShadowCascade,qt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,qt.spotLightMatrix.value=K.state.spotLightMatrix,qt.spotLightMap.value=K.state.spotLightMap,qt.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.lightProbeGrid=I.state.lightProbeGridArray.length>0,Q.currentProgram=Ee,Q.uniformsList=null,Ee}function mn(y){if(y.uniformsList===null){let V=y.currentProgram.getUniforms();y.uniformsList=Vr.seqWithValue(V.seq,y.uniforms)}return y.uniformsList}function cn(y,V){let nt=tt.get(y);nt.outputColorSpace=V.outputColorSpace,nt.batching=V.batching,nt.batchingColor=V.batchingColor,nt.instancing=V.instancing,nt.instancingColor=V.instancingColor,nt.instancingMorph=V.instancingMorph,nt.skinning=V.skinning,nt.morphTargets=V.morphTargets,nt.morphNormals=V.morphNormals,nt.morphColors=V.morphColors,nt.morphTargetsCount=V.morphTargetsCount,nt.numClippingPlanes=V.numClippingPlanes,nt.numIntersection=V.numClipIntersection,nt.vertexAlphas=V.vertexAlphas,nt.vertexTangents=V.vertexTangents,nt.toneMapping=V.toneMapping}function qn(y,V){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;w.setFromMatrixPosition(V.matrixWorld);for(let nt=0,Q=y.length;nt<Q;nt++){let K=y[nt];if(K.texture!==null&&K.boundingBox.containsPoint(w))return K}return null}function mi(y,V,nt,Q,K){V.isScene!==!0&&(V=Wt),ot.resetTextureUnits();let Ot=V.fog,Ht=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?V.environment:null,Pt=yt===null?z.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Re.workingColorSpace,Xt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Kt=At.get(Q.envMap||Ht,Xt),ve=Q.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,Ee=!!nt.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),qt=!!nt.morphAttributes.position,ze=!!nt.morphAttributes.normal,je=!!nt.morphAttributes.color,ge=wi;Q.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(ge=z.toneMapping);let Ge=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,un=Ge!==void 0?Ge.length:0,kt=tt.get(Q),Qe=I.state.lights;if(_t===!0&&(bt===!0||y!==ht)){let Ue=y===ht&&Q.id===rt;jt.setState(Q,y,Ue)}let Ce=!1;Q.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Qe.state.version||kt.outputColorSpace!==Pt||K.isBatchedMesh&&kt.batching===!1||!K.isBatchedMesh&&kt.batching===!0||K.isBatchedMesh&&kt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&kt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&kt.instancing===!1||!K.isInstancedMesh&&kt.instancing===!0||K.isSkinnedMesh&&kt.skinning===!1||!K.isSkinnedMesh&&kt.skinning===!0||K.isInstancedMesh&&kt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&kt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&kt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&kt.instancingMorph===!1&&K.morphTexture!==null||kt.envMap!==Kt||Q.fog===!0&&kt.fog!==Ot||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==jt.numPlanes||kt.numIntersection!==jt.numIntersection)||kt.vertexAlphas!==ve||kt.vertexTangents!==Ee||kt.morphTargets!==qt||kt.morphNormals!==ze||kt.morphColors!==je||kt.toneMapping!==ge||kt.morphTargetsCount!==un||!!kt.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Ce=!0):(Ce=!0,kt.__version=Q.version);let on=kt.currentProgram;Ce===!0&&(on=In(Q,V,K),Y&&Q.isNodeMaterial&&Y.onUpdateProgram(Q,on,kt));let kn=!1,Ai=!1,os=!1,ye=on.getUniforms(),tn=kt.uniforms;if(x.useProgram(on.program)&&(kn=!0,Ai=!0,os=!0),Q.id!==rt&&(rt=Q.id,Ai=!0),kt.needsLights){let Ue=qn(I.state.lightProbeGridArray,K);kt.lightProbeGrid!==Ue&&(kt.lightProbeGrid=Ue,Ai=!0)}if(kn||ht!==y){x.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ye.setValue(U,"projectionMatrix",y.projectionMatrix),ye.setValue(U,"viewMatrix",y.matrixWorldInverse);let Ri=ye.map.cameraPosition;Ri!==void 0&&Ri.setValue(U,wt.setFromMatrixPosition(y.matrixWorld)),C.logarithmicDepthBuffer&&ye.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ye.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),ht!==y&&(ht=y,Ai=!0,os=!0)}if(kt.needsLights&&(Qe.state.sunShadowMap.length>0&&ye.setValue(U,"sunShadowMap",Qe.state.sunShadowMap,ot),Qe.state.directionalShadowMap.length>0&&ye.setValue(U,"directionalShadowMap",Qe.state.directionalShadowMap,ot),Qe.state.spotShadowMap.length>0&&ye.setValue(U,"spotShadowMap",Qe.state.spotShadowMap,ot),Qe.state.pointShadowMap.length>0&&ye.setValue(U,"pointShadowMap",Qe.state.pointShadowMap,ot)),K.isSkinnedMesh){ye.setOptional(U,K,"bindMatrix"),ye.setOptional(U,K,"bindMatrixInverse");let Ue=K.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),ye.setValue(U,"boneTexture",Ue.boneTexture,ot))}K.isBatchedMesh&&(ye.setOptional(U,K,"batchingTexture"),ye.setValue(U,"batchingTexture",K._matricesTexture,ot),ye.setOptional(U,K,"batchingIdTexture"),ye.setValue(U,"batchingIdTexture",K._indirectTexture,ot),ye.setOptional(U,K,"batchingColorTexture"),K._colorsTexture!==null&&ye.setValue(U,"batchingColorTexture",K._colorsTexture,ot));let Ci=nt.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&G.update(K,nt,on),(Ai||kt.receiveShadow!==K.receiveShadow)&&(kt.receiveShadow=K.receiveShadow,ye.setValue(U,"receiveShadow",K.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&V.environment!==null&&(tn.envMapIntensity.value=V.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=Yy()),Ai){if(ye.setValue(U,"toneMappingExposure",z.toneMappingExposure),kt.needsLights&&hn(tn,os),Ot&&Q.fog===!0&&$t.refreshFogUniforms(tn,Ot),$t.refreshMaterialUniforms(tn,Q,ut,et,I.state.transmissionRenderTarget[y.id]),kt.needsLights&&kt.lightProbeGrid){let Ue=kt.lightProbeGrid;tn.probesSH.value=Ue.texture,tn.probesMin.value.copy(Ue.boundingBox.min),tn.probesMax.value.copy(Ue.boundingBox.max),tn.probesResolution.value.copy(Ue.resolution)}Vr.upload(U,mn(kt),tn,ot)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Vr.upload(U,mn(kt),tn,ot),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ye.setValue(U,"center",K.center),ye.setValue(U,"modelViewMatrix",K.modelViewMatrix),ye.setValue(U,"normalMatrix",K.normalMatrix),ye.setValue(U,"modelMatrix",K.matrixWorld),Q.uniformsGroups!==void 0){let Ue=Q.uniformsGroups;for(let Ri=0,li=Ue.length;Ri<li;Ri++){let gn=Ue[Ri];gt.update(gn,on),gt.bind(gn,on)}}return on}function hn(y,V){y.ambientLightColor.needsUpdate=V,y.lightProbe.needsUpdate=V,y.sunLights.needsUpdate=V,y.sunLightShadows.needsUpdate=V,y.directionalLights.needsUpdate=V,y.directionalLightShadows.needsUpdate=V,y.pointLights.needsUpdate=V,y.pointLightShadows.needsUpdate=V,y.spotLights.needsUpdate=V,y.spotLightShadows.needsUpdate=V,y.rectAreaLights.needsUpdate=V,y.hemisphereLights.needsUpdate=V}function Me(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return it},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return yt},this.setRenderTargetTextures=function(y,V,nt){let Q=tt.get(y);Q.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),tt.get(y.texture).__webglTexture=V,tt.get(y.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:nt,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,V){let nt=tt.get(y);nt.__webglFramebuffer=V,nt.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(y,V=0,nt=0){yt=y,it=V,st=nt;let Q=null,K=!1,Ot=!1;if(y){let Pt=tt.get(y);if(Pt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,Pt.__webglFramebuffer),pt.copy(y.viewport),Jt.copy(y.scissor),Gt=y.scissorTest,x.viewport(pt),x.scissor(Jt),x.setScissorTest(Gt),rt=-1;return}else if(Pt.__webglFramebuffer===void 0)ot.setupRenderTarget(y);else if(Pt.__hasExternalTextures)ot.rebindTextures(y,tt.get(y.texture).__webglTexture,tt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let ve=y.depthTexture;if(Pt.__boundDepthTexture!==ve){if(ve!==null&&tt.has(ve)&&(y.width!==ve.image.width||y.height!==ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(y)}}let Xt=y.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ot=!0);let Kt=tt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Kt[V])?Q=Kt[V][nt]:Q=Kt[V],K=!0):y.samples>0&&ot.useMultisampledRTT(y)===!1?Q=tt.get(y).__webglMultisampledFramebuffer:Array.isArray(Kt)?Q=Kt[nt]:Q=Kt,pt.copy(y.viewport),Jt.copy(y.scissor),Gt=y.scissorTest}else pt.copy(Rt).multiplyScalar(ut).floor(),Jt.copy(Vt).multiplyScalar(ut).floor(),Gt=Le;if(nt!==0&&(Q=Z),x.bindFramebuffer(U.FRAMEBUFFER,Q)&&x.drawBuffers(y,Q),x.viewport(pt),x.scissor(Jt),x.setScissorTest(Gt),K){let Pt=tt.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Pt.__webglTexture,nt)}else if(Ot){let Pt=V;for(let Xt=0;Xt<y.textures.length;Xt++){let Kt=tt.get(y.textures[Xt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Xt,Kt.__webglTexture,nt,Pt)}}else if(y!==null&&nt!==0){let Pt=tt.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pt.__webglTexture,nt)}rt=-1};function Ye(y){let V=tt.get(y);return(V.__readFormat!==y.format||V.__readType!==y.type)&&(V.__readFormat=y.format,V.__readType=y.type,V.__formatReadable=C.textureFormatReadable(y.format),V.__typeReadable=C.textureTypeReadable(y.type)),V}this.readRenderTargetPixels=function(y,V,nt,Q,K,Ot,Ht,Pt=0){if(!(y&&y.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=tt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ht!==void 0&&(Xt=Xt[Ht]),Xt){x.bindFramebuffer(U.FRAMEBUFFER,Xt);try{let Kt=y.textures[Pt],ve=Kt.format,Ee=Kt.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pt);let qt=Ye(Kt);if(qt.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qt.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=y.width-Q&&nt>=0&&nt<=y.height-K&&U.readPixels(V,nt,Q,K,Ct.convert(ve),Ct.convert(Ee),Ot)}finally{let Kt=yt!==null?tt.get(yt).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(y,V,nt,Q,K,Ot,Ht,Pt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=tt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ht!==void 0&&(Xt=Xt[Ht]),Xt)if(V>=0&&V<=y.width-Q&&nt>=0&&nt<=y.height-K){x.bindFramebuffer(U.FRAMEBUFFER,Xt);let Kt=y.textures[Pt],ve=Kt.format,Ee=Kt.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pt);let qt=Ye(Kt);if(qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ze=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ze),U.bufferData(U.PIXEL_PACK_BUFFER,Ot.byteLength,U.STREAM_READ),U.readPixels(V,nt,Q,K,Ct.convert(ve),Ct.convert(Ee),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let je=yt!==null?tt.get(yt).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,je);let ge=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Kf(U,ge,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ze),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ot),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ze),U.deleteSync(ge),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,V=null,nt=0){let Q=Math.pow(2,-nt),K=Math.floor(y.image.width*Q),Ot=Math.floor(y.image.height*Q),Ht=V!==null?V.x:0,Pt=V!==null?V.y:0;ot.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,nt,0,0,Ht,Pt,K,Ot),x.unbindTexture()},this.copyTextureToTexture=function(y,V,nt=null,Q=null,K=0,Ot=0){let Ht,Pt,Xt,Kt,ve,Ee,qt,ze,je,ge=y.isCompressedTexture?y.mipmaps[Ot]:y.image;if(nt!==null)Ht=nt.max.x-nt.min.x,Pt=nt.max.y-nt.min.y,Xt=nt.isBox3?nt.max.z-nt.min.z:1,Kt=nt.min.x,ve=nt.min.y,Ee=nt.isBox3?nt.min.z:0;else{let tn=Math.pow(2,-K);Ht=Math.floor(ge.width*tn),Pt=Math.floor(ge.height*tn),y.isDataArrayTexture?Xt=ge.depth:y.isData3DTexture?Xt=Math.floor(ge.depth*tn):Xt=1,Kt=0,ve=0,Ee=0}Q!==null?(qt=Q.x,ze=Q.y,je=Q.z):(qt=0,ze=0,je=0);let Ge=Ct.convert(V.format),un=Ct.convert(V.type),kt;V.isData3DTexture?(ot.setTexture3D(V,0),kt=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ot.setTexture2DArray(V,0),kt=U.TEXTURE_2D_ARRAY):(ot.setTexture2D(V,0),kt=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);let Qe=x.getParameter(U.UNPACK_ROW_LENGTH),Ce=x.getParameter(U.UNPACK_IMAGE_HEIGHT),on=x.getParameter(U.UNPACK_SKIP_PIXELS),kn=x.getParameter(U.UNPACK_SKIP_ROWS),Ai=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,ge.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ge.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Kt),x.pixelStorei(U.UNPACK_SKIP_ROWS,ve),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Ee);let os=y.isDataArrayTexture||y.isData3DTexture,ye=V.isDataArrayTexture||V.isData3DTexture;if(y.isDepthTexture){let tn=tt.get(y),Ci=tt.get(V),Ue=tt.get(tn.__renderTarget),Ri=tt.get(Ci.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,Ue.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let li=0;li<Xt;li++)os&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,tt.get(y).__webglTexture,K,Ee+li),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,tt.get(V).__webglTexture,Ot,je+li)),U.blitFramebuffer(Kt,ve,Ht,Pt,qt,ze,Ht,Pt,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(K!==0||y.isRenderTargetTexture||tt.has(y)){let tn=tt.get(y),Ci=tt.get(V);x.bindFramebuffer(U.READ_FRAMEBUFFER,k),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,J);for(let Ue=0;Ue<Xt;Ue++)os?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,tn.__webglTexture,K,Ee+Ue):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,tn.__webglTexture,K),ye?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ci.__webglTexture,Ot,je+Ue):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ci.__webglTexture,Ot),K!==0?U.blitFramebuffer(Kt,ve,Ht,Pt,qt,ze,Ht,Pt,U.COLOR_BUFFER_BIT,U.NEAREST):ye?U.copyTexSubImage3D(kt,Ot,qt,ze,je+Ue,Kt,ve,Ht,Pt):U.copyTexSubImage2D(kt,Ot,qt,ze,Kt,ve,Ht,Pt);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ye?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(kt,Ot,qt,ze,je,Ht,Pt,Xt,Ge,un,ge.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(kt,Ot,qt,ze,je,Ht,Pt,Xt,Ge,ge.data):U.texSubImage3D(kt,Ot,qt,ze,je,Ht,Pt,Xt,Ge,un,ge):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ot,qt,ze,Ht,Pt,Ge,un,ge.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ot,qt,ze,ge.width,ge.height,Ge,ge.data):U.texSubImage2D(U.TEXTURE_2D,Ot,qt,ze,Ht,Pt,Ge,un,ge);x.pixelStorei(U.UNPACK_ROW_LENGTH,Qe),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ce),x.pixelStorei(U.UNPACK_SKIP_PIXELS,on),x.pixelStorei(U.UNPACK_SKIP_ROWS,kn),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Ai),Ot===0&&V.generateMipmaps&&U.generateMipmap(kt),x.unbindTexture()},this.initRenderTarget=function(y){tt.get(y).__webglFramebuffer===void 0&&ot.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?ot.setTextureCube(y,0):y.isData3DTexture?ot.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ot.setTexture2DArray(y,0):ot.setTexture2D(y,0),x.unbindTexture()},this.resetState=function(){it=0,st=0,yt=null,x.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),e.unpackColorSpace=Re._getUnpackColorSpace()}};var Up=new Gn,zc=new B,ss=class extends Xa{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new nn(t,3)),this.setAttribute("uv",new nn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new xs(e,6,1);return this.setAttribute("instanceStart",new bi(n,3,0)),this.setAttribute("instanceEnd",new bi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new xs(e,6,1);return this.setAttribute("instanceColorStart",new bi(n,3,0)),this.setAttribute("instanceColorEnd",new bi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new za(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Up.setFromBufferAttribute(e),this.boundingBox.union(Up))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)zc.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(zc)),zc.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Bt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Nt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};$n.line={uniforms:io.merge([Bt.common,Bt.fog,Bt.line]),vertexShader:`
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
		`};var Hi=class extends Mn{constructor(t){super({type:"LineMaterial",uniforms:io.clone($n.line.uniforms),vertexShader:$n.line.vertexShader,fragmentShader:$n.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Wu=new He,Fp=new B,Op=new B,Tn=new He,An=new He,Gi=new He,$u=new B,Xu=new Ne,Cn=new qa,Bp=new B,kc=new Gn,Vc=new jn,Wi=new He,$i,qs;function zp(i,t,e){return Wi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Wi.multiplyScalar(1/Wi.w),Wi.x=qs/e.width,Wi.y=qs/e.height,Wi.applyMatrix4(i.projectionMatrixInverse),Wi.multiplyScalar(1/Wi.w),Math.abs(Math.max(Wi.x,Wi.y))}function Zy(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Cn.start.fromBufferAttribute(s,o),Cn.end.fromBufferAttribute(r,o),Cn.applyMatrix4(e);let c=new B,h=new B;$i.distanceSqToSegment(Cn.start,Cn.end,h,c),h.distanceTo(c)<qs*.5&&t.push({point:h,pointOnLine:c,distance:$i.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function Jy(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),p=-t.near;$i.at(1,Gi),Gi.w=1,Gi.applyMatrix4(t.matrixWorldInverse),Gi.applyMatrix4(n),Gi.multiplyScalar(1/Gi.w),Gi.x*=r.x/2,Gi.y*=r.y/2,Gi.z=0,$u.copy(Gi),Xu.multiplyMatrices(t.matrixWorldInverse,a);for(let u=0,g=h;u<g;u++){if(Tn.fromBufferAttribute(l,u),An.fromBufferAttribute(c,u),Tn.w=1,An.w=1,Tn.applyMatrix4(Xu),An.applyMatrix4(Xu),Tn.z>p&&An.z>p)continue;if(Tn.z>p){let D=Tn.z-An.z,w=(Tn.z-p)/D;Tn.lerp(An,w)}else if(An.z>p){let D=An.z-Tn.z,w=(An.z-p)/D;An.lerp(Tn,w)}Tn.applyMatrix4(n),An.applyMatrix4(n),Tn.multiplyScalar(1/Tn.w),An.multiplyScalar(1/An.w),Tn.x*=r.x/2,Tn.y*=r.y/2,An.x*=r.x/2,An.y*=r.y/2,Cn.start.copy(Tn),Cn.start.z=0,Cn.end.copy(An),Cn.end.z=0;let E=Cn.closestPointToPointParameter($u,!0);Cn.at(E,Bp);let f=bu.lerp(Tn.z,An.z,E),d=f>=-1&&f<=1,L=$u.distanceTo(Bp)<qs*.5;if(d&&L){Cn.start.fromBufferAttribute(l,u),Cn.end.fromBufferAttribute(c,u),Cn.start.applyMatrix4(a),Cn.end.applyMatrix4(a);let D=new B,w=new B;$i.distanceSqToSegment(Cn.start,Cn.end,w,D),e.push({point:w,pointOnLine:D,distance:$i.origin.distanceTo(w),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}}var Ys=class extends Sn{constructor(t=new ss,e=new Hi({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)Fp.fromBufferAttribute(e,a),Op.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Fp.distanceTo(Op);let r=new xs(s,2,1);return t.setAttribute("instanceDistanceStart",new bi(r,1,0)),t.setAttribute("instanceDistanceEnd",new bi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;$i=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;qs=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Vc.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=qs*.5;else{let p=Math.max(s.near,Vc.distanceToPoint($i.origin));c=zp(s,p,l.resolution)}if(Vc.radius+=c,$i.intersectsSphere(Vc)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),kc.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=qs*.5;else{let p=Math.max(s.near,kc.distanceToPoint($i.origin));h=zp(s,p,l.resolution)}kc.expandByScalar(h),$i.intersectsBox(kc)!==!1&&(n?Zy(this,e):Jy(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Wu),this.material.uniforms.resolution.value.set(Wu.z,Wu.w))}};function kp(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:l,CY:c,mcs:h,q:p,list:u,clamp:g,norm:_,munis:E}=i,f=m=>document.querySelector(m),d=m=>String(m).replace(/[<>&"]/g,S=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[S]),L=(m,S)=>[(m-l)*o,(S-c)*o],D=.06,w=t.segs.map(m=>{let S=[],T=[0];for(let A=0;A<m.length;A+=2){let P=L(m[A],m[A+1]);S.length&&T.push(T[T.length-1]+Math.hypot(P[0]-S[S.length-1][0],P[1]-S[S.length-1][1])),S.push(P)}return{p:S,c:T,L:T[T.length-1]}}),b=t.stops.map(([m,S,T,A])=>({n:m,id:A,w:L(S,T),fams:new Set})),I=t.routes.map(([m,S,T])=>({s:m,l:S,c:T})),O=(m,S)=>{let T=m.match(/^R([A-Z]*)(\d*)(.*)$/),A=S.match(/^R([A-Z]*)(\d*)(.*)$/);return(T[1]||"").localeCompare(A[1]||"")||(+T[2]||0)-(+A[2]||0)||T[3].localeCompare(A[3])},v=[...new Set(I.map(m=>m.s))].sort(O),R={};I.forEach(m=>{R[m.s]||(R[m.s]=m.c)});let z=t.pats.map(([m,S,T])=>({stops:m,t:S,segs:T})),W=t.trips.map(([m,S,T,A,P],N)=>({day:m,pat:z[S],fam:I[T].s,c:I[T].c,t0:A,num:P,tid:t.tids[N]})),Y={};v.forEach(m=>Y[m]=new Set),W.forEach(m=>{m.pat.segs.forEach(S=>Y[m.fam].add(S)),m.pat.stops.forEach(S=>b[S].fams.add(m.fam))});let Z=t.days.map((m,S)=>W.filter(T=>T.day===S)),k=new Map(W.map(m=>[m.tid,m])),J=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],it=Math.PI/180,st=3.922*it,yt=-39.705*it;function rt(m,S){let T=m*it+st,A=S*it,P=Math.cos(yt),N=Math.sin(yt),X=Math.cos(A),$=Math.cos(T)*X,j=Math.sin(T)*X,at=Math.sin(A),dt=Math.atan2(j,$*P-at*N),M=Math.asin(at*P+$*N),H=Math.sqrt(2/(1+Math.cos(dt)*Math.cos(M))),xt=H*Math.cos(M)*Math.sin(dt),mt=H*Math.sin(M),[Zt,re,pe,vt,St,se,_e]=J;return L((re+Zt*xt-St)*_e,(se-(vt-pe*mt))*_e)}let ht=new Map(b.map((m,S)=>[m.id,S]));function pt(m){if(m.g)return m.g;let S=[],T=[],A=[0],P=0;return m.segs.forEach((N,X)=>{let $=w[N];$.p.forEach((j,at)=>{X&&!at||(S.push(j),T.push(P+$.c[at]))}),P+=$.L,A.push(P)}),m.g={pts:S,cum:T,stopD:A}}function Jt(m,S,T,A){let P=1e18,N=0;for(let X=0;X+1<m.pts.length;X++){if(m.cum[X+1]<T||m.cum[X]>A)continue;let $=m.pts[X],j=m.pts[X+1],at=j[0]-$[0],dt=j[1]-$[1],M=at*at+dt*dt||1e-9,H=Math.max(0,Math.min(1,((S[0]-$[0])*at+(S[1]-$[1])*dt)/M)),xt=$[0]+at*H-S[0],mt=$[1]+dt*H-S[1],Zt=xt*xt+mt*mt;Zt<P&&(P=Zt,N=m.cum[X]+H*(m.cum[X+1]-m.cum[X]))}return{d:N,err:Math.sqrt(P)}}function Gt(m,S){let T=0,A=m.cum.length-1;if(S<=0)return m.pts[0];if(S>=m.cum[A])return m.pts[A];for(;A-T>1;){let $=T+A>>1;m.cum[$]<=S?T=$:A=$}let P=(S-m.cum[T])/(m.cum[A]-m.cum[T]||1),N=m.pts[T],X=m.pts[A];return[N[0]+(X[0]-N[0])*P,N[1]+(X[1]-N[1])*P]}let Pe=m=>`${m.slice(6,8)}/${m.slice(4,6)}`,we=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Te(m){let S={};return we.formatToParts(m).forEach(T=>S[T.type]=T.value),{ymd:S.year+S.month+S.day,min:+S.hour*60+ +S.minute+ +S.second/60}}let et=0,ut=null,Ut=0,ie=0;function Rt(){let m=Te(new Date);if(et===0&&ut==null)return{...m,live:!0};let S=ut==null?m.min:Ut+(et?(performance.now()-ie)/6e4*et:0);return{ymd:m.ymd,min:S,live:!1}}let Vt=m=>(m=(Math.round(m)%1440+1440)%1440,String(Math.floor(m/60)).padStart(2,"0")+":"+String(m%60).padStart(2,"0")),Le="https://rodalies.erathegameoftime.com",F={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let m=new URLSearchParams(location.search).get("rt");m&&localStorage.setItem("rod_rt",m);let S=localStorage.getItem("rod_rt");S&&/jhmuyo\.workers\.dev/.test(S)&&(S=Le,localStorage.setItem("rod_rt",S)),F.url=S||Le}catch{F.url=Le}let _t=(m,S)=>fetch(m+S,{cache:"no-store"}).then(T=>{if(!T.ok)throw new Error("HTTP "+T.status);return T.json()}),bt=m=>/^51/.test(m||"");async function Mt(){if(!F.url){te();return}let m=F.url.replace(/\/+$/,"");(!F.repFail||Date.now()-F.repFail>15*6e4)&&_t(m,"/reports.json").then(j=>{j&&Array.isArray(j.items)?(F.rep=j.items,F.repSkew=(j.now||Date.now())-Date.now(),j.tipos&&(F.tipos=j.tipos),F.repOk=Date.now(),F.repFail=0):F.repFail=Date.now()}).catch(()=>{F.repFail=Date.now(),F.repOk=0});let S=!F.adifAt||Date.now()-F.adifAt>11e4,[T,A,P,N,X]=await Promise.allSettled([_t(m,"/trip_updates.json"),_t(m,"/vehicle_positions.json"),_t(m,"/alerts.json"),_t(m,"/notices.json"),S?_t(m,"/adif.json"):Promise.reject(0)]);if(X.status==="fulfilled"&&X.value&&X.value.ok?(F.adif=X.value,F.adifAt=Date.now()):S&&(F.adifAt=Date.now()-6e4),T.status==="fulfilled"){let j=new Map,at=new Map;for(let dt of T.value.entity||[]){let M=dt.tripUpdate;if(!M||!M.trip||!bt(M.trip.tripId))continue;let H=M.trip.tripId,xt=(M.stopTimeUpdate||[])[0],mt=M.delay;mt==null&&xt&&(mt=(xt.arrival||xt.departure||{}).delay),M.trip.scheduleRelationship==="CANCELED"&&(mt="X"),mt!=null&&j.set(H,mt),at.set(H,{next:xt?{sid:xt.stopId,t:+((xt.arrival||xt.departure||{}).time||0)}:null})}F.delays=j,F.tu=at,F.ok=Date.now(),F.feedTs=+((T.value.header||{}).timestamp||0)*1e3,F.err=""}else F.err=T.reason&&T.reason.message||"sin respuesta";if(A.status==="fulfilled"){let j=new Map,at=Date.now()/1e3;for(let dt of A.value.entity||[]){let M=dt.vehicle;if(!M||!M.trip||!bt(M.trip.tripId)||!M.position)continue;let H=M.vehicle&&M.vehicle.label||"",xt=H.match(/PLATF\.\(([^)]+)\)/),mt=F.vp.get(M.trip.tripId),Zt={tid:M.trip.tripId,w:rt(+M.position.longitude,+M.position.latitude),st:M.currentStatus||"",sid:M.stopId||"",ts:+M.timestamp||at,label:H,plat:xt?xt[1]:"",fam:(H.split("-")[0]||"").trim(),num:M.vehicle&&M.vehicle.id||""};Zt.disp=mt?mt.disp:null,j.set(Zt.tid,Zt)}F.vp=j,F.okVP=Date.now()}let $=[];if(N.status==="fulfilled"&&Array.isArray(N.value.included)){F.okNotices=Date.now();for(let j of N.value.included){let at=new Set((j.lines||[]).map(H=>H.id).filter(H=>R[H])),dt=H=>((H||{}).es||(H||{}).ca||"").trim(),M=[dt(j.description),dt(j.title)].sort((H,xt)=>xt.length-H.length)[0];M&&$.push({id:"N"+j.externalId,fams:at,stops:new Set,txt:M,when:(j.date||"")+"T"+(j.time||""),src:"Rodalies",core:j.core||""})}}if(P.status==="fulfilled"){let j=+((P.value.header||{}).timestamp||0);if(F.alertsTs=j,Date.now()/1e3-j<6*3600)for(let at of P.value.entity||[]){let dt=at.alert;if(!dt)continue;let M=new Set,H=new Set;for(let re of dt.informedEntity||[])(re.routeId||"").startsWith("51")&&M.add(re.routeId.replace(/^51T\d+/,"")),re.stopId&&ht.has(re.stopId)&&H.add(ht.get(re.stopId));if(!M.size&&!H.size)continue;let xt=(dt.descriptionText||dt.headerText||{translation:[]}).translation||[],mt=((xt.find(re=>re.language==="es")||xt[0]||{}).text||"").trim(),Zt=+((dt.activePeriod||[])[0]||{}).start||0;$.some(re=>re.txt===mt)||$.push({id:at.id,fams:M,stops:H,txt:mt,when:Zt?new Date(Zt*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(F.adif&&Date.now()-F.adifAt<15*6e4)for(let[j,at]of(F.adif.items||[]).entries()){let dt=(at.t?at.t+". ":"")+at.txt,M=new Set,H=new Set,xt=_(dt);for(let mt of dt.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))R[mt[1]]&&M.add(mt[1]);b.forEach((mt,Zt)=>{mt.fams.size&&mt.n.length>4&&xt.includes(_(mt.n))&&(H.add(Zt),M.size||mt.fams.forEach(re=>M.add(re)))}),$.some(mt=>mt.txt===dt)||$.push({id:"A"+j,fams:M,stops:H,txt:dt,when:F.adif.upd||"",src:"Adif",lvl:at.lvl})}if(N.status==="fulfilled"||P.status==="fulfilled"||F.adif){F.alerts=$.sort((j,at)=>at.when>j.when?1:-1);try{Am()}catch{}}te(),rh(),mi=0,a()}let wt=()=>F.okVP&&Date.now()-F.okVP<9e4;function te(){let m=f("#rtst"),S=f("#mode");if(S){let A=!!wt()&&Rt().live;S.classList.toggle("on",A),S.classList.toggle("pre",!A),S.textContent=A?"En directo":Wt.cur?"Repaso real":"Previsi\xF3n",S.classList.toggle("past",!!Wt.cur),S.title=Wt.cur?`Retrasos reales de la foto de las ${Wt.cur.sn.t} (se toma una cada 15 min)`:""}if(!m)return;F.url?F.err?m.textContent="No se pudo conectar con el puente ("+F.err+"). Se usa el horario.":wt()?m.innerHTML=`Conectado \xB7 ${F.vp.size} trenes con posici\xF3n real y ${F.delays.size} con retraso \xB7 actualizado a las ${new Date(F.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:m.textContent="Conectando\u2026":m.textContent=F.err||"Sin puente: trenes seg\xFAn horario oficial.";let T=f("#rturl");T&&T._shown!==F.url&&(T.value=F.url,T._shown=F.url)}f("#rtsave").onclick=()=>{let m=f("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(m&&!/^https?:\/\//.test(m)&&(m="https://"+m),!m){F.err="pega la direcci\xF3n de tu puente",te();return}F.url=m;try{localStorage.setItem("rod_rt",m)}catch{}F.ok=0,F.err="",te(),Mt()},f("#rtoff").onclick=()=>{F.url=Le;try{localStorage.removeItem("rod_rt")}catch{}h._h="",Mt()},setInterval(Mt,2e4),setTimeout(Mt,50);let Wt={snap:null,key:""};function le(){let m=Rt();if(m.live||!ge.hoy||!ge.hoy.snaps||et&&ut==null)return null;let S=Te(new Date).min;if(m.min>S+1)return null;let T=null;for(let A of ge.hoy.snaps){if(!A.d)continue;let P=xd(A.t);P<=m.min+1&&(!T||P>T.m)&&(T={m:P,sn:A})}return T&&m.min-T.m<=25?T:null}let he=m=>{{let P=eh(m.num);if(P&&P.cx&&Rt().live)return"X"}let S=Wt.cur;if(S){if(S.sn.x&&S.sn.x.includes(m.tid))return"X";let P=S.sn.d[m.tid];return P??0}if(!wt())return null;let T=F.delays.get(m.tid),A=F.vp.get(m.tid);return T==="X"?T:A&&A.pre&&A.preDl>=1?Math.max(typeof T=="number"?T:0,A.preDl*60):T??null},U=new Set(v);try{let m=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(m)&&m.some(S=>v.includes(S))&&(U.clear(),m.forEach(S=>v.includes(S)&&U.add(S)))}catch{}let De=new ss,Se=new ss,C=new Hi({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),x=new Hi({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),q=new Ys(De,C),tt=new Ys(Se,x);tt.renderOrder=20,q.renderOrder=21,q.frustumCulled=tt.frustumCulled=!1,e.add(tt,q);let ot=!1;function At(){if(ot||!E.length)return;ot=!0,e.updateMatrixWorld(!0);let m=new Hs,S=E.map(P=>P.mesh),T=new B(0,0,-1);b.forEach(P=>{m.set(new B(P.w[0],P.w[1],50),T),P.ext=!m.intersectObjects(S,!1).length});let A=(P,N)=>b.findIndex(X=>Math.hypot(X.w[0]-P[0],X.w[1]-P[1])<.05);w.forEach(P=>{let N=A(P.p[0]),X=A(P.p[P.p.length-1]),$=j=>(m.set(new B(j[0],j[1],50),T),!m.intersectObjects(S,!1).length);P.ext=(N>=0?b[N].ext:$(P.p[0]))&&(X>=0?b[X].ext:$(P.p[P.p.length-1]))})}let It=()=>{let m=new Set(U.size<=2?U:[]);try{Me&&Me.fam&&m.add(Me.fam)}catch{}return m},lt="";function ft(){At();let m=[],S=[],T=new Set,A=new oe,P=new oe("#d2d0d0"),N=It();lt=[...N].join();for(let X of v)if(U.has(X))for(let $ of Y[X]){if(T.has($))continue;T.add($);let j=w[$].p;A.set(R[X]),w[$].ext&&!N.has(X)&&A.lerp(P,.72);for(let at=0;at+1<j.length;at++)m.push(j[at][0],j[at][1],D,j[at+1][0],j[at+1][1],D),S.push(A.r,A.g,A.b,A.r,A.g,A.b)}m.length||(m.push(0,0,-50,0,0,-50),S.push(0,0,0,0,0,0)),De.setPositions(m),De.setColors(S),Se.setPositions(m),a()}ft();let Ft=m=>new Mn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new oe(m)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),$t=new sn,Lt=b.length,Dt=new Float32Array(Lt*3),jt=new Float32Array(Lt*3),ne=new Float32Array(Lt),de=new Float32Array(Lt);b.forEach((m,S)=>{Dt[S*3]=m.w[0],Dt[S*3+1]=m.w[1],Dt[S*3+2]=D,jt.set([1,1,1],S*3),ne[S]=6,de[S]=1.6}),$t.setAttribute("position",new $e(Dt,3)),$t.setAttribute("fill",new $e(jt,3)),$t.setAttribute("size",new $e(ne,1)),$t.setAttribute("bw",new $e(de,1));let G=new zs($t,Ft("#1d2330"));G.renderOrder=22,G.frustumCulled=!1,e.add(G);function Et(){let m=r.dist<45,S=It();b.forEach((T,A)=>{let P=[...T.fams].some(X=>U.has(X)),N=T.ext&&![...T.fams].some(X=>S.has(X))&&A!==Ye;ne[A]=P?A===Ye?13:N?3:m?8:5:0,de[A]=A===Ye?3:1.6}),$t.attributes.size.needsUpdate=!0,$t.attributes.bw.needsUpdate=!0}let ct=600,Ct=new sn,zt=new Float32Array(ct*3),gt=new Float32Array(ct*3),Qt=new Float32Array(ct),Yt=new Float32Array(ct);Ct.setAttribute("position",new $e(zt,3)),Ct.setAttribute("fill",new $e(gt,3)),Ct.setAttribute("size",new $e(Qt,1)),Ct.setAttribute("bw",new $e(Yt,1));let Oe=new Float32Array(ct);Ct.setAttribute("ang",new $e(Oe,1));let Be=new Mn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new oe("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),zn=new zs(Ct,Be);zn.renderOrder=24,zn.frustumCulled=!1,e.add(zn);let pn=new sn,tr=new Float32Array(ct*3),mo=new Float32Array(ct*3),Xr=new Float32Array(ct),er=new Float32Array(ct);pn.setAttribute("position",new $e(tr,3)),pn.setAttribute("fill",new $e(mo,3)),pn.setAttribute("size",new $e(Xr,1)),pn.setAttribute("bw",new $e(er,1));let qr=new zs(pn,Ft("#ffffff"));qr.renderOrder=23,qr.frustumCulled=!1,e.add(qr);function Yr(m,S){let T=w[m],A=S*T.L,P=0,N=T.c.length-1;for(;N-P>1;){let dt=P+N>>1;T.c[dt]<=A?P=dt:N=dt}let X=T.c[N]-T.c[P]||1,$=(A-T.c[P])/X,j=T.p[P],at=T.p[N];return[j[0]+(at[0]-j[0])*$,j[1]+(at[1]-j[1])*$]}let Zr=m=>m*m*(3-2*m)*.35+m*.65;function oi(m,S){let T=m.pat.t,A=m.pat.stops.length,P=T[2*A-2];if(S<T[1]-2||S>P+1)return null;if(S<=T[1])return{w:b[m.pat.stops[0]].w,at:0,next:0,moving:!1};for(let N=0;N<A-1;N++){let X=T[2*N+1],$=T[2*N+2],j=T[2*N+3];if(S<=$){let at=$>X?(S-X)/($-X):1;return{w:Yr(m.pat.segs[N],Zr(g(at,0,1))),at:-1,next:N+1,prev:N,moving:!0}}if(S<=j)return{w:b[m.pat.stops[N+1]].w,at:N+1,next:N+1,moving:!1}}return{w:b[m.pat.stops[A-1]].w,at:A-1,next:A-1,moving:!1}}function nr(m){let S=t.days.indexOf(m.ymd),T=[];if(S<0)return{k:S,out:T};let A=(P,N)=>{for(let X of P){if(!U.has(X.fam))continue;let $=he(X);if($==="X")continue;let j=($||0)/60,at=m.min+N-X.t0-j;if(at<-2||at>X.pat.t[X.pat.t.length-2]+1)continue;let dt=oi(X,at);dt&&T.push({tr:X,p:dt,rel:at,dl:j,live:$!=null})}};return A(Z[S],0),S>0&&A(Z[S-1],1440),{k:S,out:T}}function go(m,S,T,A){let P=m.pat.stops[0],N=S.dep0,X=null,$=(at,dt)=>{for(let M of at||[]){let H=M.pat.stops,xt=H.length;if(H[xt-1]!==P||M===m)continue;let mt=M.t0+M.pat.t[2*(xt-1)]-dt;if(mt>N+5||mt<N-120)continue;let Zt=pt(M.pat),re=Jt(Zt,S.w,-1,1e9);if(re.err>.6)continue;let pe=Zt.stopD,vt=M.pat.t,St=pe.findIndex(Ie=>Ie>re.d);St<0&&(St=xt-1);let se=St===0?vt[1]:vt[2*St-1]+(pe[St]>pe[St-1]?(re.d-pe[St-1])/(pe[St]-pe[St-1]):1)*(vt[2*St]-vt[2*St-1]),_e=T-(M.t0+se-dt);_e<-5||_e>120||(!X||Math.abs(_e)<Math.abs(X.prevDl))&&(X={prevTr:M,dPrev:re.d,prevDl:_e,arrO:mt+Math.max(0,_e)})}};if($(Z[A],0),A>0&&$(Z[A-1],1440),!X)return{prevTr:null,preDl:0};let j=Math.max(N,X.arrO+3);return{...X,depEst:j,preDl:Math.max(0,j-N)}}function _o(m,S,T){let A=m.pat.t,P=S.length;if(!(T>=0))return T<0?S[0]:null;for(let N=0;N<P;N++)if(T<=A[2*N+1]){if(T>=A[2*N]||N===0)return S[N];let X=A[2*N-1],$=A[2*N];return S[N-1]+(S[N]-S[N-1])*($>X?(T-X)/($-X):1)}return S[P-1]}let As=performance.now();function xo(){let m=[],S=Date.now()/1e3,T=performance.now(),A=Math.min(1,(T-As)/1e3);As=T;for(let P of F.vp.values()){let N=k.get(P.tid),X=N?N.fam:P.fam;if(X&&R[X]&&!U.has(X))continue;let $=F.delays.get(P.tid),j=typeof $=="number"?$/60:0,at=Math.max(0,S-P.ts);P.mvTs!==P.ts&&((!P.mvW||Math.hypot(P.w[0]-P.mvW[0],P.w[1]-P.mvW[1])>.025)&&(P.mvW=P.w,P.mvAt=P.ts),P.mvTs=P.ts),P.still=P.ts-(P.mvAt||P.ts);let dt=P.w,M=-1;if(N){let xt=pt(N.pat),mt=xt.stopD;if(P.dObs==null||P.obsAt!==P.ts){let St=Jt(xt,P.w,-1,1e9);P.dObs=St.d,P.err=St.err,P.obsAt=P.ts}let Zt=Rt(),re=t.days.indexOf(Zt.ymd),pe=N.day===re-1?1440:0,vt=N.t0+N.pat.t[1]-pe;if(P.pre=Zt.min+j<vt-1&&(P.dObs>mt[0]+.35||P.err>.6)&&!(P.st==="STOPPED_AT"&&P.sid===b[N.pat.stops[0]].id),P.dep0=vt,P.pre){if(P.atStop=-1,P.next=0,M=0,P.disp=null,P.prevAt!==P.ts&&(P.prevAt=P.ts,Object.assign(P,go(N,P,Zt.min,re))),P.prevTr){let St=pt(P.prevTr.pat);dt=Gt(St,P.dPrev)}}else if(P.err<=.6){let St=mt.findIndex(Ie=>Ie>P.dObs+.08);St<0&&(St=mt.length-1);let se=mt.reduce((Ie,_n,ke)=>Math.abs(_n-P.dObs)<Math.abs(mt[Ie]-P.dObs)?ke:Ie,0);P.atStop=Math.abs(mt[se]-P.dObs)<.16?se:-1,P.next=St,M=St;let _e=P.dObs;if(P.st==="STOPPED_AT"&&P.atStop>=0)_e=mt[P.atStop];else if(St>0){let Ie=(N.pat.t[2*St]-N.pat.t[2*St-1])*60,_n=Ie>0?(mt[St]-mt[St-1])/Ie:0,ke=Rt(),Fe=t.days.indexOf(ke.ymd),Zi=N.day===Fe-1?1440:0,sr=_o(N,mt,ke.min+Zi-N.t0-j),Ln=P.dObs+_n*Math.min(at,60);sr!=null&&(Ln=Math.min(Ln,Math.max(P.dObs,sr))),_e=Math.max(P.dObs,Math.min(mt[St]-.03,Ln))}P.disp==null||Math.abs(P.disp-_e)>1.2?P.disp=_e:_e>P.disp&&(P.disp+=(_e-P.disp)*Math.min(1,A*1.5)),dt=Gt(xt,P.disp)}else if(P.err>2){let St=Rt(),se=t.days.indexOf(St.ymd),_e=N.day===se-1?1440:0,Ie=oi(N,St.min+_e-N.t0-j);Ie&&(dt=Ie.w,P.est=!0,M=Ie.next),P.atStop=-1,P.next=Ie?Ie.next:-1}else P.atStop=-1,P.next=-1}let H=P.pre?"":P.st==="STOPPED_AT"&&P.atStop>=0||P.atStop>=0&&P.still>30?"st":P.still>=90?"via":"";m.push({tr:N,v:P,w:dt,stop:H,p:{w:dt},fam:X||"?",c:N?N.c:R[X]||"#6b7385",dl:j,live:!0,real:!0,idx:M,age:at,cancel:$==="X"})}return m}let In=new Map,mn=!1,cn=!1,qn=[],mi=0,hn=null,Me=null,Ye=-1,y=!1,V=0,nt="";function Q(m){let S=et>0||wt()&&ut==null||!!Me,T=S?50:250;if(m-mi<T)return!1;mi=m,[...It()].join()!==lt&&(ft(),Et());{let M=le(),H=M?M.sn.t:"";Wt.cur=M,H!==Wt.key&&(Wt.key=H,te()),!M&&!Rt().live&&!ge.at&&un()}let A=Rt(),P=wt()&&A.live,N=P?{k:t.days.indexOf(A.ymd),out:xo()}:nr(A);qn=N.out;let X=new oe,$=0,j=0;for(let M of qn){if($>=ct)break;zt[$*3]=M.p.w[0],zt[$*3+1]=M.p.w[1],zt[$*3+2]=D+.02;let H=null;if(M.real&&M.v.pre&&M.v.prevTr)H=Gt(pt(M.v.prevTr.pat),M.v.dPrev+.35);else if(M.real&&M.tr&&!M.v.pre&&M.v.err<=.6&&M.v.disp!=null&&!(M.v.st==="STOPPED_AT"&&M.v.atStop>=0))H=Gt(pt(M.tr.pat),M.v.disp+.35);else if(!M.real&&M.p.moving){let pe=M.tr.pat.t,vt=M.p.prev,St=pe[2*vt+1],se=pe[2*vt+2],_e=se>St?(M.rel-St)/(se-St):1;H=Yr(M.tr.pat.segs[vt],Math.min(1,Zr(g(_e,0,1))+.04))}let xt=M.real?!!M.stop:!M.p.moving;if(M.broke=dd(M),M.broke)Oe[$]=85;else if(xt)Oe[$]=75;else if(H){let pe=vo(M.p.w),vt=vo(H),St=vt[0]-pe[0],se=vt[1]-pe[1];Oe[$]=Math.hypot(St,se)>.05?Math.atan2(St,-se):99}else Oe[$]=99;X.set(M.c||M.tr.c),gt[$*3]=X.r,gt[$*3+1]=X.g,gt[$*3+2]=X.b;let mt=M.tr?M.tr===Me:Me&&Me.vtid===M.v.tid;Qt[$]=mt?22:r.dist<45?17:14,Yt[$]=mt?3.5:2.2;let Zt=M.real&&M.stop==="via"||!!M.broke,re=M.cancel||M.broke?[.86,.15,.15]:M.dl>10?[.86,.15,.15]:M.dl>5?[.92,.48,.05]:M.dl>=1?[.98,.8,.08]:[.09,.64,.29];(M.live&&M.dl>=5||mt||Zt)&&(tr[j*3]=M.p.w[0],tr[j*3+1]=M.p.w[1],tr[j*3+2]=D+.01,mo.set(mt?re:Zt?[.86,.15,.15]:[.98,.45,.09],j*3),Xr[j]=Qt[$]+(mt?16+5*Math.sin(m/220):Zt?10+3*Math.sin(m/400):8),er[j]=mt?2:3,j++),$++}if(Ct.setDrawRange(0,$),pn.setDrawRange(0,j),["position","fill","size","bw"].forEach(M=>{Ct.attributes[M].needsUpdate=!0,pn.attributes[M].needsUpdate=!0}),Ct.attributes.ang.needsUpdate=!0,hn){let M=qn.find(H=>H.tr===hn);if(M){let H=0,xt=innerHeight,mt=h.style.display!=="none"&&!h.classList.contains("min")?h.getBoundingClientRect():null,Zt=f("#rc").getBoundingClientRect();innerWidth<=640&&(mt&&(H=mt.bottom),xt=Math.min(xt,Zt.top));let re=H+(xt-H)/2,pe=re-innerHeight/2,vt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=M.p.w[0]-Math.sin(r.yaw)*pe*vt,s.ty=M.p.w[1]+Math.cos(r.yaw)*pe*vt}else wt()&&Rt().live&&(hn=null)}let at=Vt(A.min);at!==nt&&(nt=at,f("#ctime").textContent=at),f("#ntr").textContent=String(qn.length),f("#ntrl").textContent=P?"trenes de Rodalies con posici\xF3n real":"trenes previstos seg\xFAn el horario";{let M=U.size<v.length?[...U].sort(O).join(", "):"",H=f("#ccount"),xt=Wt.cur?`\u23EA ${qn.length} trenes con los retrasos reales de las ${Wt.cur.sn.t} \xB7 ${Object.values(Wt.cur.sn.d).filter(mt=>mt>=60).length} iban con retraso`:!A.live&&A.min<Te(new Date).min-1&&!et?`\u23EA Hora pasada seg\xFAn horario${ge.hoy&&ge.hoy.snaps&&ge.hoy.snaps.some(mt=>mt.d)?` \xB7 hay retrasos reales desde las ${ge.hoy.snaps.find(mt=>mt.d).t}`:" \xB7 a\xFAn no hay fotos con retrasos reales de hoy"}`:`\u{1F686} ${qn.length} ${P?"trenes con posici\xF3n real":"trenes previstos"}${M?` <small>\xB7 ${d(M)}</small>`:""}`;H&&H._t!==xt&&(H.innerHTML=xt,H._t=xt)}let dt=new Date;if(f("#cdate").textContent=A.live?"hora actual":et?"simulaci\xF3n \xD7"+et:hi?"en pausa":"hora elegida",N.k<0?f("#src").innerHTML=`<b style="color:#c2410c">Sin horarios para hoy.</b> Los datos guardados van del ${Pe(t.days[0])} al ${Pe(t.days[t.days.length-1])}: actualiza la app.`:P?f("#src").textContent=`En directo \xB7 posiciones de Renfe de hace ${Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...F.vp.values()].map(M=>M.ts),0)))} s`:f("#src").innerHTML='<b style="color:#c2410c">No es tiempo real:</b> '+(F.url?"sin conexi\xF3n con el puente, ":"conecta el puente para ver los trenes reales; ")+"posiciones calculadas con el horario",A.live){let M=Math.round(A.min),H=f("#tsl");document.activeElement!==H&&(H.value=M<240?M+1440:M)}return Pn(),m-V>3e3&&(Me||Ye>=0||y||cn)&&(V=m,Je()),te(),!0}let K=-1,Ot=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Ht=[],Pt=document.createElement("button");Pt.type="button",Pt.id="mbtn",Pt.title="Ver los nombres de los municipios",Pt.innerHTML="\u{1F3D8}\uFE0F<span>Municipios</span>",Pt.onclick=()=>{Ot=!Ot;try{localStorage.setItem("rod_mun",Ot?"1":"")}catch{}Pt.classList.toggle("on",Ot),a(),je()},Pt.classList.toggle("on",Ot),document.body.appendChild(Pt);let Xt=E.slice().sort((m,S)=>S.pop-m.pop);function Kt(m){if(m._a)return m._a;let S=null,T=0;for(let A of m.rings||[]){let P=A[0];if(!P)continue;let N=0,X=0,$=0;for(let j=0,at=P.length;j<at;j+=2){let dt=P[j],M=P[j+1],H=P[(j+2)%at],xt=P[(j+3)%at],mt=dt*xt-H*M;N+=mt,X+=(dt+H)*mt,$+=(M+xt)*mt}Math.abs(N)>T&&(T=Math.abs(N),S=[X/(3*N),$/(3*N)])}return m._a=S?[(S[0]-l)*o,(S[1]-c)*o]:[m.cx,m.cy]}let ve=m=>m>=1e5?1:m>=2e4?2:m>=5e3?3:4,Ee=[0,7.6,6.7,6,5.4],qt=[0,17,15,13,12],ze=m=>m.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function je(){let m=s.tilt<.06&&r.tilt<.08;Pt.classList.toggle("show",m);let S=0;if(Ot&&m){let T=[...document.querySelectorAll(".plab, .slab")].filter(N=>N.offsetParent!==null||N.style.display==="block").map(N=>{let X=N.getBoundingClientRect();return[X.left-2,X.top-2,X.right+2,X.bottom+2]}).filter(N=>N[2]>N[0]),A=r.dist,P=A>160?5e4:A>130?2e4:A>105?8e3:A>80?3e3:A>62?800:0;for(let N of Xt){let X=ve(N.pop);if(N.pop<P)break;let $=Kt(N);if(gn.set($[0],$[1],D).project(n),Math.abs(gn.x)>1.02||Math.abs(gn.y)>1.02)continue;let j=(gn.x*.5+.5)*innerWidth,at=(-gn.y*.5+.5)*innerHeight,dt=ze(N.name),M=dt.length*Ee[X]+8,H=qt[X],xt=[j-M/2,at-H/2,j+M/2,at+H/2];if(T.some(Zt=>xt[0]<Zt[2]&&Zt[0]<xt[2]&&xt[1]<Zt[3]&&Zt[1]<xt[3]))continue;T.push(xt);let mt=Ht[S]||(Ht[S]=Object.assign(document.createElement("div"),{className:"mlab"}));mt.isConnected||document.body.appendChild(mt),mt._n!==dt&&(mt.textContent=dt,mt._n=dt),mt._t!==X&&(mt.className="mlab t"+X,mt._t=X),mt.style.transform=`translate(${Math.round(j)}px,${Math.round(at)}px) translate(-50%,-50%)`,mt.style.display="block",S++}}for(;S<Ht.length;S++)Ht[S].style.display="none"}let ge={at:0,hoy:null,ayer:null,err:""},Ge="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function un(){Date.now()-ge.at<5*6e4||(ge.at=Date.now(),Promise.all(["hoy","ayer"].map(m=>fetch(Ge+m+".json",{cache:"no-store"}).then(S=>S.ok?S.json():null).catch(()=>null))).then(([m,S])=>{ge.hoy=m,ge.ayer=S,ge.err=m?"":"sin datos",cn&&(h._h="",Je())}))}let kt=m=>m>=90?"g":m>=80?"y":m>=65?"w":"b",Qe={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},Ce=m=>m>10?Qe.b:m>5?Qe.w:m>=1?Qe.y:Qe.g,on=m=>(m>=.05?"+":"")+(Math.round(m*10)/10).toString().replace(".",",")+" min";function kn(m,S,T){return`<div class="sbars">${m.map(A=>`<div class="sbar" title="${d(A.tip||"")}"><span class="sl">${A.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(A.w*100))}%;background:${A.c}"></i></span><b class="sv" style="color:${A.c===Qe.y?"#a16207":A.c}">${A.val}</b></div>`).join("")}</div>`}function Ai(m){if(!m||m.length<2){let $=m&&m[0];return $?`<p class="snote">Primera foto del d\xEDa a las ${$.t}: ${Math.round($.ok/$.n*100)} % puntuales de ${$.n} trenes. El gr\xE1fico aparece con la segunda foto.</p>`:'<p class="snote">A\xFAn no hay fotos de hoy.</p>'}let S=300,T=92,A=22,P=$=>A+$*(S-A-6)/(m.length-1),N=$=>6+(100-$)/100*(T-22),X=m.map(($,j)=>[P(j),N($.n?$.ok/$.n*100:100),$]);return`<svg class="schart" viewBox="0 0 ${S} ${T}" role="img" aria-label="Porcentaje de trenes puntuales a lo largo del d\xEDa">
      ${[100,75,50].map($=>`<line x1="${A}" x2="${S-4}" y1="${N($)}" y2="${N($)}" class="gl"/><text x="2" y="${N($)+3}" class="ax">${$}%</text>`).join("")}
      <polyline points="${X.map($=>$[0].toFixed(1)+","+$[1].toFixed(1)).join(" ")}" class="ln"/>
      ${X.map(([$,j,at])=>`<circle cx="${$.toFixed(1)}" cy="${j.toFixed(1)}" r="5" class="pt"><title>${at.t} \xB7 ${at.n?Math.round(at.ok/at.n*100):100}% puntuales \xB7 ${at.n} trenes \xB7 ${at.d5} con +5 min \xB7 retraso medio ${on(at.avg)}${at.nd?` \xB7 ${at.nd} sin dato`:""}</title></circle>`).join("")}
      <text x="${A}" y="${T-3}" class="ax">${m[0].t}</text><text x="${S-4}" y="${T-3}" class="ax" text-anchor="end">${m[m.length-1].t}</text></svg>`}function os(){un();let m=Rt(),S=qn.filter($=>$.real&&wt()&&m.live),T=S.filter($=>F.delays.has($.v.tid)),A=T.length,P=S.length-A,N='<div class="tc sts" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>\u{1F4CA} Estad\xEDsticas</h3>';if(A){let $=T.filter(vt=>vt.dl<3).length,j=T.filter(vt=>vt.dl>=5).length,at=T.filter(vt=>vt.stop==="via").length,dt=Math.round($/A*100);N+=`<small>Ahora mismo \xB7 ${A} trenes con retraso publicado por Renfe${P?` \xB7 ${P} sin dato (no se cuentan)`:""}</small><div class="kpis">
        <div class="kpi ${kt(dt)}"><b>${dt}%</b><span>puntuales</span></div>
        <div class="kpi ${kt(100-j/A*100*2)}" title="${Math.round(j/A*100)} % de los trenes"><b>${j}</b><span>con 5 min<br>o m\xE1s</span></div>
        <div class="kpi ${at===0?"g":at<=2?"w":"b"}"><b>${at}</b><span>detenidos<br>en la v\xEDa</span></div></div>`;let M=new Map;T.forEach(vt=>{let St=vt.fam,se=M.get(St)||{n:0,ok:0,sum:0};se.n++,se.ok+=vt.dl<3,se.sum+=Math.max(0,vt.dl),M.set(St,se)});let H=[...M].filter(([vt])=>R[vt]).sort((vt,St)=>vt[1].ok/vt[1].n-St[1].ok/St[1].n||St[1].sum/St[1].n-vt[1].sum/vt[1].n),xt=H.filter(([,vt])=>vt.ok<vt.n),mt=H.filter(([,vt])=>vt.ok===vt.n);N+="<h4>Puntualidad por l\xEDnea ahora</h4>"+(xt.length?"":'<p class="snote">\u2713 Todas las l\xEDneas van puntuales.</p>')+kn(xt.map(([vt,St])=>({lab:Ii(vt),w:St.ok/St.n,c:Qe[kt(St.ok/St.n*100)],val:`${Math.round(St.ok/St.n*100)}% <small>${on(St.sum/St.n)}</small>`,tip:`${vt}: ${St.ok} de ${St.n} trenes puntuales \xB7 retraso medio ${on(St.sum/St.n)}`})))+(mt.length?`<p class="snote">Puntuales al 100 %: ${mt.map(([vt])=>Ii(vt)).join(" ")}</p>`:"");let Zt=new Map;T.forEach(vt=>{if(!vt.tr||vt.v.next==null||vt.v.next<0||vt.v.pre)return;let St=vt.tr.pat.stops[vt.v.next],se=Zt.get(St)||{n:0,sum:0};se.n++,se.sum+=Math.max(0,vt.dl),Zt.set(St,se)});let re=[...Zt].filter(([,vt])=>vt.sum/vt.n>=1).sort((vt,St)=>St[1].sum/St[1].n-vt[1].sum/vt[1].n).slice(0,8),pe=re.length?re[0][1].sum/re[0][1].n:1;N+='<h4>Estaciones con m\xE1s retraso ahora</h4><small class="snote">Retraso medio de los trenes que van a llegar a cada estaci\xF3n</small>'+(re.length?kn(re.map(([vt,St])=>({lab:`<span class="sn" data-gs="${vt}">${d(b[vt].n)}</span>`,w:St.sum/St.n/pe,c:Ce(St.sum/St.n),val:`${on(St.sum/St.n)} <small>${St.n} ${St.n===1?"tren":"trenes"}</small>`,tip:`${b[vt].n}: ${St.n} trenes llegando con ${on(St.sum/St.n)} de media`}))):'<p class="snote">\u2713 Ning\xFAn tren llega con retraso ahora mismo.</p>')}else N+='<p class="snote">Las estad\xEDsticas en directo necesitan el puente de tiempo real conectado.</p>';let X=ge.hoy;if(N+=`<button type="button" class="hmore" data-cols>${ye.on?"\u25BE Quitar columnas del mapa":"\u{1F3D9}\uFE0F Ver el retraso de cada estaci\xF3n en 3D"}</button>`,N+="<h4>Hoy, a lo largo del d\xEDa</h4>",X&&X.snaps){N+=Ai(X.snaps);let $=Object.entries(X.st||{}).map(([dt,M])=>[ht.get(dt),M]).filter(([dt,M])=>dt!=null&&M.n>=3).map(([dt,M])=>[dt,M.sum/M.n/60,M]).filter(dt=>dt[1]>=1).sort((dt,M)=>M[1]-dt[1]).slice(0,8);if($.length){let dt=$[0][1];N+='<h4>Estaciones con m\xE1s retraso hoy</h4><small class="snote">Retraso medio de los trenes al llegar \xB7 al menos 3 mediciones</small>'+kn($.map(([M,H,xt])=>({lab:`<span class="sn" data-gs="${M}">${d(b[M].n)}</span>`,w:H/dt,c:Ce(H),val:`${on(H)} <small>m\xE1x +${Math.round(xt.max/60)}</small>`,tip:`${b[M].n}: ${xt.n} mediciones hoy (foto cada 15 min) \xB7 ${xt.d5} con 5 min o m\xE1s \xB7 peor +${Math.round(xt.max/60)} min`})))}let j=Object.entries(X.lines||{}).filter(([dt,M])=>R[dt]&&M.n>=3).sort((dt,M)=>dt[1].ok/dt[1].n-M[1].ok/M[1].n);j.length&&(N+="<h4>L\xEDneas hoy</h4>"+kn(j.map(([dt,M])=>({lab:Ii(dt),w:M.ok/M.n,c:Qe[kt(M.ok/M.n*100)],val:`${Math.round(M.ok/M.n*100)}% <small>${on(M.sum/M.n/60)}</small>`,tip:`${dt} hoy: ${Math.round(M.ok/M.n*100)}% de las mediciones puntuales \xB7 peor retraso +${Math.round(M.max/60)} min`}))));let at=X.upd?(Date.now()-Date.parse(X.upd))/6e4:0;N+=`<small class="snote">${at>40?`<b>\xDAltima foto hace ${Math.round(at)} min</b> (GitHub a veces retrasa las tareas autom\xE1ticas) \xB7 `:""}Foto cada 15 min del tiempo real de Renfe \xB7 actualizado ${d((X.upd||"").slice(11,16))} \xB7 ${(X.note||"").includes("Solo cuentan")?"solo cuentan los trenes con dato de retraso":"las fotos anteriores a las 12:20 contaban como puntuales los trenes sin dato"}</small>`}else N+=`<p class="snote">${ge.at?"El hist\xF3rico de hoy a\xFAn no est\xE1 disponible: se va reuniendo cada 15 min.":"Cargando\u2026"}</p>`;return N+"</div>"}let ye={on:!1,mesh:null};function tn(){let m=ge.hoy,S=[];if(m&&m.st)for(let[T,A]of Object.entries(m.st)){let P=ht.get(T);P!=null&&A.n>=2&&S.push([P,A.sum/A.n/60,A.n])}if(!S.length){let T=new Map;qn.forEach(A=>{if(!A.real||!A.tr||A.v.next==null||A.v.next<0||A.v.pre||!F.delays.has(A.v.tid))return;let P=A.tr.pat.stops[A.v.next],N=T.get(P)||[0,0];N[0]+=Math.max(0,A.dl),N[1]++,T.set(P,N)}),T.forEach((A,P)=>S.push([P,A[0]/A[1],A[1]]))}return S}function Ci(){if(ye.mesh&&(e.remove(ye.mesh),ye.mesh.geometry.dispose(),ye.mesh.material.dispose(),ye.mesh=null),!ye.on){a();return}let m=tn();if(!m.length){Yn("A\xFAn no hay datos de retraso por estaci\xF3n"),ye.on=!1;return}let S=new Ra(.32,.32,1,16);S.rotateX(Math.PI/2),S.translate(0,0,.5);let T=new Os({fog:!1}),A=new Ea(S,T,m.length),P=new Ne,N=new oe;m.forEach(([X,$],j)=>{let at=.3+Math.min($,40)*.3;P.makeScale(1,1,at),P.setPosition(b[X].w[0],b[X].w[1],D),A.setMatrixAt(j,P),N.set($>10?"#dc2626":$>5?"#ea7a0c":$>=1?"#eab308":"#16a34a"),A.setColorAt(j,N)}),A.renderOrder=25,A.frustumCulled=!1,e.add(A),ye.mesh=A,s.tilt<.5&&(s.tilt=.85),a()}let Ue=document.createElement("button");Ue.type="button",Ue.id="sbtn",Ue.title="Estad\xEDsticas de puntualidad",Ue.innerHTML="\u{1F4CA}<span>Estad\xEDsticas</span>",Ue.onclick=()=>{cn=!cn,cn&&(mn=y=!1,Me=null,Ye=-1,hn=null,ge.at=0,Et()),h._h="",Je(),a()},document.body.appendChild(Ue);function Ri(){r.dist<45!=K<45&&(K=r.dist,Et()),dm(),je()}let li=[],gn=new B;function dm(){let m=r.dist<30,S=0;if(m){let T=[];for(let A=0;A<Lt;A++)ne[A]<4||(gn.set(b[A].w[0],b[A].w[1],D).project(n),!(gn.z>1||Math.abs(gn.x)>1.05||Math.abs(gn.y)>1.05)&&T.push([A,(gn.x*.5+.5)*innerWidth,(-gn.y*.5+.5)*innerHeight]));if(T.length<=70)for(let[A,P,N]of T){let X=li[S]||(li[S]=Object.assign(document.createElement("div"),{className:"slab"}));X.isConnected||document.body.appendChild(X),X.textContent=b[A].n,X.dataset.i=A,X.style.display="block",X.style.transform=`translate(${Math.round(P+8)}px,${Math.round(N-7)}px)`,S++}}for(;S<li.length;S++)li[S].style.display="none"}function vo(m){return gn.set(m[0],m[1],D).project(n),[(gn.x*.5+.5)*innerWidth,(-gn.y*.5+.5)*innerHeight,gn.z]}function hd(m,S,T,A){let P=null,N=T*T;for(let X of qn){let[$,j,at]=vo(X.p.w);if(at>1)continue;let dt=($-m)**2+(j-S)**2;dt<N&&(N=dt,P={a:X})}if(P)return P;N=A*A;for(let X=0;X<Lt;X++){if(!ne[X])continue;let[$,j,at]=vo(b[X].w);if(at>1)continue;let dt=($-m)**2+(j-S)**2;dt<N&&(N=dt,P={s:X})}return P}window.__rodTap=(m,S)=>{let T=null,A=1e9;for(let N of li){if(N.style.display==="none")continue;let X=N.getBoundingClientRect();if(m>=X.left-4&&m<=X.right+4&&S>=X.top-4&&S<=X.bottom+4){let $=Math.abs(S-(X.top+X.bottom)/2)*4+(m-X.left);$<A&&(A=$,T=N)}}if(T)return window.__rodPickStation(+T.dataset.i),!0;let P=hd(m,S,24,18);return P&&P.a?(mn=!1,y=!1,cn=!1,Me=P.a.tr||{vtid:P.a.v.tid},Ye=-1,hn=null,Et(),Je(),mi=0,a(),!0):P&&P.s!=null?(mn=!1,y=!1,cn=!1,Ye=P.s,Me=null,hn=null,Et(),Je(),a(),!0):!1},window.__rodHover=(m,S)=>{let T=hd(m,S,14,10);if(T&&T.a){let A=T.a,P=A.tr?b[A.tr.pat.stops[A.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${A.c}">\u25A0</span> ${d(A.fam||A.tr&&A.tr.fam||"?")} \xB7 tren ${d(A.tr?A.tr.num:A.v.num)}</b><small>${P?"hacia "+d(P):""}${A.real?(A.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(A.dl)} min</b>`:" \xB7 puntual")+" \xB7 en directo":" \xB7 previsto"}</small>`}return T&&T.s!=null?`<b>${d(b[T.s].n)}</b><small>${[...b[T.s].fams].sort(O).join(" \xB7 ")}</small>`:null},window.__rodPickStation=m=>{mn=y=cn=!1,Me=null,hn=null,Ye=m,Et(),h._h="",Je(),a()};{let m=f("#rc"),S=()=>{let T=m.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,T-64-10)+"px")};try{new ResizeObserver(S).observe(m)}catch{}addEventListener("resize",S),setTimeout(S,300)}window.__rodTick=Q,window.__rodFrame=Ri,window.__rodResize=()=>{C.resolution.set(innerWidth,innerHeight),x.resolution.set(innerWidth,innerHeight)},window.__rodResize();let ci={st:-1,f:new Set},ud=m=>{let S=[...b[m].fams].sort(O);return`<div class="sfc">${S.length>1?`<button type="button" data-sf="" class="${ci.f.size?"":"on"}">Todas</button>`:""}${S.map(T=>`<button type="button" data-sf="${d(T)}" class="ln ${ci.f.size&&!ci.f.has(T)?"off":""}${U.has(T)?"":" hid"}" style="--c:${R[T]}">${d(T)}</button>`).join("")}</div>${S.some(T=>!U.has(T))?"<small>Las l\xEDneas apagadas en el filtro general no se muestran</small>":""}`},fm=m=>{let S=(m||"#6b7385").replace("#",""),T=parseInt(S.slice(0,2),16),A=parseInt(S.slice(2,4),16),P=parseInt(S.slice(4,6),16);return(.299*T+.587*A+.114*P)/255>.62?"#1d2330":"#fff"},Cs=(m,S)=>{let T=R[S]||"#6b7385";return`<span class="dst" style="background:${T};color:${fm(T)}" title="${d(S||"")}">${d(m)}</span>`},yo=m=>{let S=b[m]&&b[m].id;return Zn.st.includes(S)?"\u{1F3E0} ":bn.st.includes(S)?"\u{1F4BC} ":""},ir=m=>m>10?"d-hi":m>5?"d-md":"d-lo",pm=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,Jr={ref:null,m:new Map};function eh(m){if(Jr.ref!==F.alerts){Jr.ref=F.alerts,Jr.m=new Map;for(let S of F.alerts){if(S.src!=="Rodalies")continue;let T=S.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a)\s+([^.]{4,140})/i);for(let A of S.txt.matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))Jr.m.set(A[1],{why:T?T[1].trim().replace(/\s+/g," "):"",txt:S.txt,when:S.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(S.txt)})}}return Jr.m.get(String(m))||null}let Kr={ref:null,m:new Map};function dd(m){let S=String(m.tr?m.tr.num:m.v&&m.v.num||"");if(!S)return null;if(Kr.ref!==F.alerts){Kr.ref=F.alerts,Kr.m=new Map;for(let A of F.alerts)if(A.src==="Rodalies"&&pm.test(A.txt))for(let P of A.txt.matchAll(/\b(\d{4,6})\b/g))Kr.m.set(P[1],A)}let T=Kr.m.get(S);return T?{why:"aviso",txt:T.txt}:m.real&&m.stop==="via"&&m.v.still>=300?{why:"via",min:Math.round(m.v.still/60)}:null}let Ii=m=>`<span class="ln" style="--c:${R[m]}">${d(m)}</span>`;function fd(m,S){return S?m==="X"?'<span class="st late">Cancelado</span>':m>=60?`<span class="st late ${ir(m/60)}">Retraso de ${Math.round(m/60)} min</span>`:'<span class="st ok">Puntual</span>':'<span class="st sch">Seg\xFAn horario \xB7 sin dato en directo</span>'}function Je(){if(!Me&&Ye<0&&!y&&!mn&&!cn){h.innerHTML="",h._h="",h.style.display="none",h.classList.remove("peek"),hh();return}let m=Rt(),S="",T=wt()&&m.live,A=(M,H)=>F.alerts.filter(xt=>[...xt.fams].some(mt=>M.has(mt))||H!=null&&xt.stops.has(H)),P=M=>M.length?`<div class="al">${M.slice(0,4).map(H=>`<p>\u26A0\uFE0F ${ih(H)} ${[...H.fams].sort(O).slice(0,6).map(Ii).join(" ")} ${d(H.txt)} <small>${sh(H)}</small></p>`).join("")}${M.length>4?`<small>y ${M.length-4} avisos m\xE1s</small>`:""}</div>`:"",N=Me&&T?qn.find(M=>M.real&&(Me.vtid?M.v.tid===Me.vtid:M.tr===Me)):null;if(cn)S=os();else if(mn)S=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>Novedades</h3><small>${d(f("#ver").textContent.replace(" \xB7 novedades y fuentes",""))}</small><ul class="chg">${f("#chg").innerHTML||"<li>Versi\xF3n de prueba</li>"}</ul>
        <h3 style="margin-top:14px">Fuentes</h3><ul class="fts">
        <li><b>Renfe Operadora</b> \xB7 horarios (GTFS), posici\xF3n de los trenes y retrasos (GTFS-RT) \xB7 <a href="https://data.renfe.com" target="_blank" rel="noopener">data.renfe.com</a> \xB7 licencia CC BY 4.0</li>
        <li><b>Rodalies de Catalunya</b> (Generalitat) \xB7 salidas con v\xEDa, cancelaciones y avisos \xB7 <a href="https://rodalies.gencat.cat" target="_blank" rel="noopener">rodalies.gencat.cat</a></li>
        <li><b>Adif</b> \xB7 incidencias en la infraestructura de Catalu\xF1a \xB7 <a href="https://www.adif.es/viajeros/estado-de-la-red" target="_blank" rel="noopener">estado de la red</a> \xB7 \xA9 Adif</li>
        <li><b>OpenStreetMap</b> \xB7 trazado de las v\xEDas \xB7 <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">\xA9 colaboradores de OpenStreetMap</a>, licencia ODbL</li>
        </ul><small>Los datos se muestran tal como los publican sus fuentes. Ante cualquier duda, manda lo que diga el operador en la estaci\xF3n.</small></div>`;else if(y){let M=F.alerts.filter(H=>[...H.fams].some(xt=>U.has(xt))||!H.fams.size);S=`<div class="tc" style="--c:#c2410c"><button class="x" data-cx>\xD7</button><h3>Avisos e incidencias</h3><small>${M.length} avisos activos para las l\xEDneas que tienes visibles</small>${M.map(H=>`<div class="al"><p>${ih(H)} ${[...H.fams].sort(O).map(Ii).join(" ")} <small>${sh(H)}</small></p><p>${d(H.txt)}</p></div>`).join("")||"<p>Sin avisos activos.</p>"}<small>Fuente: avisos oficiales de Rodalies de Catalunya, incidencias en la v\xEDa de Adif (gestor de la infraestructura)${F.alertsTs&&Date.now()/1e3-F.alertsTs<6*3600?" y de Renfe":` \xB7 los avisos GTFS de Renfe no se muestran: Renfe no los actualiza desde el ${F.alertsTs?new Date(F.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(N){let M=N.v,H=N.tr,xt=Fe=>d(b[H.pat.stops[Fe]].n),mt=H?H.pat.stops.length:0,Zt=ht.get(M.sid),re=Zt!=null?d(b[Zt].n):d(M.sid),pe=H&&M.atStop>=0?xt(M.atStop):"",vt=H&&M.next>=0?xt(M.next):re,St=H&&M.next>0?xt(M.next-1):"",se=N.broke||dd(N),_e=se?`<b class="stopv">\u26A0\uFE0F ${se.why==="aviso"?"Tren averiado seg\xFAn Rodalies":`Posible aver\xEDa: detenido en la v\xEDa desde hace ${se.min} min`}</b>${H&&St?` \xB7 entre ${St} y <b>${vt}</b>`:""}`:N.stop==="via"&&H?`<b class="stopv">\u23F8 Detenido</b> ${St?`entre ${St} y <b>${vt}</b>`:`antes de <b>${vt}</b>`} desde hace ${Math.max(1,Math.round(M.still/60))} min`:M.pre&&H?M.prevTr?`A\xFAn no ha empezado este viaje. Est\xE1 terminando el tren <b>${d(M.prevTr.num)}</b> hacia <b>${xt(0)}</b>${M.prevDl>=1?` con <b>+${Math.round(M.prevDl)} min</b>`:""}: llega hacia las <b>${Vt(M.arrO)}</b> y saldr\xEDa hacia las <b>${Vt(M.depEst)}</b>${M.preDl>=1?` (horario ${Vt(M.dep0)})`:""}`:`A\xFAn no ha empezado este viaje: va hacia <b>${xt(0)}</b>, de donde sale a las <b>${Vt(M.dep0+N.dl)}</b>`:M.st==="STOPPED_AT"&&pe?`Parado en <b>${pe}</b>`:pe&&M.next>=0&&M.atStop!==M.next?`Saliendo de <b>${pe}</b> hacia <b>${vt}</b>`:St?`Entre ${St} y <b>${vt}</b>`:`Hacia <b>${vt}</b>`,Ie=F.tu.get(M.tid),_n=Ie&&Ie.next&&H&&M.next>=0&&Ie.next.sid===b[H.pat.stops[M.next]].id&&Ie.next.t?new Date(Ie.next.t*1e3).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"",ke=[];if(H){let Fe=N.idx>=0?N.idx:0,Zi=M.pre?Math.max(N.dl,M.preDl||0):N.dl,sr=Ln=>H.t0+H.pat.t[Ln]+Zi;for(let Ln=Fe;Ln<mt;Ln++)ke.push(`<li${yo(H.pat.stops[Ln])?' class="mine"':""}><b>${Vt(sr(Ln===0?1:2*Ln))}</b><span title="${xt(Ln)}">${yo(H.pat.stops[Ln])}${xt(Ln)}</span>${Zi>=1?`<em class="dl ${ir(Zi)}">${M.pre?"\u2248":""}+${Math.round(Zi)}</em>`:""}</li>`)}S=`<div class="tc" style="--c:${N.c}"><button class="x" data-cx>\xD7</button><div>${Ii(N.fam)}<b>Tren ${d(H?H.num:M.num)}</b> <span class="lv">\u25CF en directo</span></div>${H?`<h3 class="rt"><span class="o" title="${xt(0)}">${xt(0)}</span><span class="ar">\u2192</span>${Cs(b[H.pat.stops[mt-1]].n,H.fam)}</h3>`:""}
        <p>${_e}${_n?` \xB7 prevista ${_n}`:""}${M.plat&&M.st==="STOPPED_AT"&&pe?` \xB7 <b>v\xEDa ${d(M.plat)}</b>`:""}</p><p>${M.pre&&M.prevTr?M.preDl>=1?`<span class="st late">Saldr\xE1 con unos ${Math.round(M.preDl)} min de retraso (estimado)</span>`:'<span class="st ok">Le da tiempo a salir a su hora (estimado)</span>':fd(F.delays.get(M.tid),F.delays.has(M.tid))}${(()=>{let Fe=H&&eh(H.num);return Fe?`<span class="why" title="${d(Fe.txt)}">${Fe.why?"Motivo: "+d(Fe.why):"Rodalies ha publicado un aviso de este tren"}</span>`:""})()}</p>
        <small>${M.pre?`Renfe ya le pone el n\xFAmero de su pr\xF3ximo viaje. Posici\xF3n real enviada hace ${Math.round(N.age)} s`:M.est?"Renfe da una posici\xF3n que no encaja con su recorrido: se muestra donde deber\xEDa estar seg\xFAn el horario y su retraso":`Posici\xF3n enviada por Renfe hace ${Math.round(N.age)} s${N.age>120?" \xB7 <b>sin actualizar</b>":""}`}</small>
        ${ke.length?`${N.dl>=1||M.pre&&M.preDl>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${ke.join("")}</ol>`:""}${P(A(new Set([N.fam])))}
        ${bo(H?H.num:M.num,"",N.fam)}${H?`<div class="rtb"><button type="button" data-follow>${hn===H?"Dejar de seguir":"Seguir este tren"}</button></div>`:""}</div>`}else if(Me&&T)S=`<div class="tc" style="--c:#6b7385"><button class="x" data-cx>\xD7</button><h3>Tren ${d(Me.num||Me.vtid||"")}</h3><p>Renfe no da ahora la posici\xF3n de este tren: puede haber terminado su viaje, no haber salido o no estar circulando.</p></div>`;else if(Me){let M=Me,H=M.pat,xt=H.stops.length,mt=he(M),Zt=typeof mt=="number"?mt/60:0,re=t.days.indexOf(m.ymd),pe=M.day===re-1?1440:0,vt=m.min+pe-M.t0-Zt,St=oi(M,vt),se=Fe=>M.t0+H.t[Fe]+Zt,_e=Fe=>d(b[H.stops[Fe]].n),Ie="Fuera de servicio ahora";St&&(Ie=St.moving?`Circulando hacia <b>${_e(St.next)}</b> \xB7 llega ${Vt(se(2*St.next))}`:St.at===xt-1?`Ha llegado a <b>${_e(xt-1)}</b>`:`Parado en <b>${_e(St.at)}</b> \xB7 sale ${Vt(se(2*St.at+1))}`);let _n=St?St.next:0,ke=[];for(let Fe=_n;Fe<xt;Fe++)ke.push(`<li${yo(H.stops[Fe])?' class="mine"':""}><b>${Vt(se(2*Fe))}</b><span title="${_e(Fe)}">${yo(H.stops[Fe])}${_e(Fe)}</span>${Zt>=1?`<em class="dl ${ir(Zt)}">+${Math.round(Zt)}</em>`:""}</li>`);S=`<div class="tc" style="--c:${M.c}"><button class="x" data-cx>\xD7</button><div>${Ii(M.fam)}<b>Tren ${d(M.num)}</b> <span class="pv">previsi\xF3n</span></div><h3 class="rt"><span class="o" title="${_e(0)}">${_e(0)}</span><span class="ar">\u2192</span>${Cs(b[M.pat.stops[xt-1]].n,M.fam)}</h3>
        <p>${Ie}</p><p>${fd(mt,mt!=null)}</p><small>Sale ${Vt(M.t0+H.t[1])} \xB7 llega ${Vt(M.t0+H.t[2*xt-2])} (horario)</small>
        ${Zt>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${ke.join("")}</ol>${bo(M.num,"",M.fam)}<div class="rtb"><button type="button" data-follow>${hn===M?"Dejar de seguir":"Seguir este tren"}</button></div></div>`}else{let M=Ye,H=t.days.indexOf(m.ymd),xt=[];ci.st!==M&&(ci.st=M,ci.f.clear());let mt=vt=>(!R[vt]||U.has(vt))&&(!ci.f.size||ci.f.has(vt));if(H>=0){let vt=(St,se)=>{for(let _e of St){if(!mt(_e.fam))continue;let Ie=_e.pat.stops.indexOf(M);if(Ie<0||Ie===_e.pat.stops.length-1)continue;let _n=he(_e),ke=typeof _n=="number"?_n/60:0,Fe=_e.t0+_e.pat.t[2*Ie+1]-se;Fe+ke<m.min-1||Fe>m.min+360||xt.push({tr:_e,t:Fe,dl:ke,d:_n,on:F.vp.has(_e.tid),past:m.min>_e.t0+_e.pat.t[1]-se+2})}};vt(Z[H],0),H>0&&vt(Z[H-1],1440)}xt.sort((vt,St)=>vt.t+vt.dl-St.t-St.dl);let Zt=b[M].id,re=In.get(Zt);T&&F.url&&(!re||Date.now()-re.at>3e4)&&!re?.loading&&(In.set(Zt,{...re||{},loading:!0,at:re?re.at:0}),_t(F.url.replace(/\/+$/,""),"/departures.json?stationId="+Zt).then(vt=>{In.set(Zt,{at:Date.now(),d:vt}),Ye===M&&(h._h="",Je())}).catch(()=>In.set(Zt,{at:Date.now(),err:1})));let pe=T&&re&&re.d&&Array.isArray(re.d.trains)?re.d.trains:null;if(pe){let vt=new Map([...F.vp.values()].map(se=>[String((k.get(se.tid)||{}).num||se.num),se])),St=pe.filter(se=>mt((se.line||{}).id||"")).slice(0,40).map(se=>{let _e=(se.departureDateHourSelectedStation||"").slice(11,16),Ie=(se.line||{}).id||"",_n=String(se.commercialNumber||se.technicalNumber||""),ke=vt.get(_n),Fe=ke?F.delays.get(ke.tid):null;return`<li class="go" data-gt="${d(_n)}|${ke?d(ke.tid):""}"><b>${d(_e)}</b>${R[Ie]?Ii(Ie):`<span class="ln" style="--c:#6b7385">${d(Ie||"?")}</span>`}<span>${Cs((se.destinationStation||{}).name||"",Ie)}${se.trainObservations?` \xB7 <i>${d(se.trainObservations)}</i>`:""}</span>${se.trainCancelled?"<em>cancelado</em>":typeof Fe=="number"&&Fe>=60?`<em class="dl ${ir(Fe/60)}">+${Math.round(Fe/60)}</em>`:""}${se.platformSelectedStation?`<i class="via">v\xEDa ${d(se.platformSelectedStation)}</i>`:""}${ke?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");S=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(b[M].n)}</h3>${ud(M)}${bo("",b[M].id,"")}
          <small style="margin-top:6px">Pr\xF3ximas salidas oficiales de Rodalies \xB7 hora prevista \xB7 <span class="lvk">\u25CF</span> tren circulando</small>
          <ol>${St||"<li><span>Rodalies no anuncia salidas ahora mismo</span></li>"}</ol>${P(A(b[M].fams,M))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}else S=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(b[M].n)}</h3>${ud(M)}${bo("",b[M].id,"")}
        <small style="margin-top:6px">${T&&F.url?"Cargando salidas oficiales\u2026 mientras, ":""}Pr\xF3ximas salidas${T?' \xB7 hora prevista con el retraso actual \xB7 <span class="lvk">\u25CF</span> tren circulando':" \xB7 previsi\xF3n seg\xFAn horario (sin tiempo real)"}</small>
        <ol>${xt.slice(0,40).map(vt=>`<li class="go" data-gt="${d(vt.tr.num)}|${d(vt.tr.tid)}"><b>${Vt(vt.t+vt.dl)}</b>${Ii(vt.tr.fam)}<span>${Cs(b[vt.tr.pat.stops[vt.tr.pat.stops.length-1]].n,vt.tr.fam)}</span>${vt.d==="X"?"<em>cancelado</em>":vt.dl>=1?`<em class="dl ${ir(vt.dl)}">+${Math.round(vt.dl)}</em>`:""}${T?vt.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':vt.past?'<i class="nos" title="deber\xEDa haber salido y Renfe no da su posici\xF3n">sin se\xF1al</i>':'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||"<li><span>No hay salidas en las pr\xF3ximas 6 horas</span></li>"}</ol>${P(A(b[M].fams,M))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}let X=h.scrollTop;if(h._h!==S&&(h.innerHTML=S,h._h=S,h.scrollTop=X),h.style.display="flex",h.classList.remove("min"),hh(),innerWidth<=640){let M=h.querySelector(".tc");if(M&&!M.querySelector(".mn")){let H=document.createElement("button");H.type="button",H.className="mn",H.setAttribute("aria-label","Encoger o ampliar la ficha"),H.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",H.onclick=xt=>{xt.stopPropagation(),h.classList.toggle("peek"),H.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",h.scrollTop=0},M.appendChild(H)}}else h.classList.remove("peek");let $=f("#rc");if(innerWidth<=640&&!$.classList.contains("min")&&!Je.done&&(Je.done=1,f("#rcgrab").click()),innerWidth<=640){let M=f("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(M+8)+"px",h.style.width="calc(100vw - 76px)",h.style.maxHeight=Math.max(140,f("#rc").getBoundingClientRect().top-M-16)+"px"}else if(innerHeight<=500){let M=f("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(M+8)+"px",h.style.width="min(290px, 40vw)",h.style.maxHeight=innerHeight-M-20+"px"}else h.style.top="",h.style.width=cn?"390px":"300px",h.style.maxHeight="";let at=h.querySelector("[data-cx]");at&&(at.onclick=M=>{M.stopPropagation(),Je.done=0,y=!1,mn=!1,cn=!1,Me=null,Ye=-1,hn=null,Et(),Je(),mi=0,a()}),gd(h);{let M=h.querySelector("[data-cols]");M&&(M.onclick=()=>{ye.on=!ye.on,Ci(),h._h="",Je()})}h.querySelectorAll("[data-gs]").forEach(M=>M.onclick=()=>{let H=+M.dataset.gs;cn=!1,window.__rodPickStation(H),Object.assign(s,{tx:b[H].w[0],ty:b[H].w[1],dist:Math.min(s.dist,20)}),a()}),h.querySelectorAll("[data-sf]").forEach(M=>M.onclick=H=>{H.stopPropagation();let xt=M.dataset.sf;xt?ci.f.has(xt)?ci.f.delete(xt):ci.f.add(xt):ci.f.clear(),h._h="",Je()}),h.querySelectorAll("[data-gt]").forEach(M=>M.onclick=()=>{let[H,xt]=M.dataset.gt.split("|"),mt=k.get(xt);Cd({num:H,tid:F.vp.has(xt)?xt:"",tr:mt||null})}),h.querySelectorAll("[data-sethome]").forEach(M=>M.onclick=()=>uh(Ye,M.dataset.sethome));let dt=h.querySelector("[data-follow]");dt&&(dt.onclick=()=>{hn=hn===Me?null:Me,hn?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(h.classList.add("peek"),h.scrollTop=0,f("#rc").classList.contains("min")||f("#rcgrab").click())):h.classList.remove("peek"),h._h="",Je(),a()})}window.__rodCard=Je;try{localStorage.getItem("rod_inf")==="mini"&&f("#inf").classList.add("mini")}catch{}f("#inft").onclick=()=>{let m=f("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",m?"mini":"")}catch{}(Me||Ye>=0||y||mn)&&(h._h="",Je())},f("#ver").onclick=()=>{mn=!0,Me=null,Ye=-1,y=!1,h._h="",Je()};let So={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},mm=["vacio","lleno","petado","parado","calor","abordo"],gm=["gente","retraso","cancel","ascensor","via"],_m={vacio:"Va con sitio",lleno:"Va lleno",petado:"Muy lleno, cuesta subir",parado:"Parado sin moverse",calor:"Sin aire acondicionado",abordo:"Incidencia a bordo",gente:"Mucha gente esperando",retraso:"Anuncian retraso por megafon\xEDa",cancel:"Anuncian tren cancelado",ascensor:"Ascensor o escalera averiados",via:"Incidencia en la estaci\xF3n"},Mo=m=>(F.tipos||_m)[m]||m,nh=(m,S)=>(F.rep||[]).filter(T=>m&&T.num===String(m)&&!T.sid||S&&T.sid===String(S)&&!T.num||m&&S&&T.num===String(m)&&T.sid===String(S)),pd=m=>{let S=Math.round((Date.now()+(F.repSkew||0)-m.at)/6e4);return S<1?"ahora":`hace ${S} min`},jr=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function bo(m,S,T){if(!F.url||!F.repOk)return"";let A=nh(m,S),P=m?mm:gm;return`<div class="crowd"><small>\u{1F465} Lo que dicen los viajeros${A.length?"":" \xB7 nadie ha avisado todav\xEDa"}</small>${A.map(N=>`<p><span>${So[N.kind]||"\u2022"} <b>${d(Mo(N.kind))}</b> <small>${N.up>1?N.up+" viajeros \xB7 ":""}${pd(N)}</small></span>${jr.has(N.id)?"<small>\u2713</small>":`<button type="button" data-rv="${N.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${N.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${m?"\xBFVas en este tren? Avisa a los dem\xE1s":"\xBFEst\xE1s en la estaci\xF3n? Avisa a los dem\xE1s"}</summary><div class="ckb">${P.map(N=>`<button type="button" data-rk="${N}" data-rn="${d(m||"")}" data-rs="${d(S||"")}" data-rl="${d(T||"")}">${So[N]} ${d(Mo(N))}</button>`).join("")}</div><small>An\xF3nimo \xB7 se borra solo en 90 min \xB7 sin texto libre</small></details></div>`}async function md(m,S){try{let A=await(await fetch(F.url.replace(/\/+$/,"")+S,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)})).json();if(!A.ok){Yn(A.err||"No se ha podido enviar");return}if(A.id){jr.add(A.id);try{localStorage.setItem("rod_votes",JSON.stringify([...jr].slice(-300)))}catch{}}Yn(S==="/vote"?"Gracias, voto guardado":A.n>1?`Gracias \xB7 ya sois ${A.n} avisando de lo mismo`:"Gracias, aviso enviado");let P=await _t(F.url.replace(/\/+$/,""),"/reports.json");P&&P.items&&(F.rep=P.items),h._h="",Je(),Pn(!0)}catch{Yn("Sin conexi\xF3n con el puente")}}function gd(m){m.querySelectorAll("[data-rk]").forEach(S=>S.onclick=T=>{T.stopPropagation(),S.disabled=!0,md({kind:S.dataset.rk,num:S.dataset.rn,sid:S.dataset.rs,line:S.dataset.rl},"/report")}),m.querySelectorAll("[data-rv]").forEach(S=>S.onclick=T=>{T.stopPropagation();let[A,P]=S.dataset.rv.split(":");jr.add(+A);try{localStorage.setItem("rod_votes",JSON.stringify([...jr].slice(-300)))}catch{}md({id:+A,v:+P},"/vote")})}let _d=0;function Yn(m){let S=f("#toast");S||(S=document.createElement("div"),S.id="toast",document.body.appendChild(S)),S.textContent=m,S.className="on",clearTimeout(_d),_d=setTimeout(()=>{S.className=""},2600)}function ih(m){return m.src?`<b class="asrc ${m.src==="Adif"?"adif":""}">${m.src==="Adif"?"Adif \xB7 v\xEDa":d(m.src)}</b>`:""}function sh(m){if(!m.when)return"";let[S,T]=m.when.split("T"),A=Te(new Date),P=A.ymd.slice(0,4)+"-"+A.ymd.slice(4,6)+"-"+A.ymd.slice(6,8);if(S===P&&T){let N=Math.round(A.min-(+T.slice(0,2)*60+ +T.slice(3,5)));return N<1?"ahora":N<60?`hace ${N} min`:`hoy a las ${T.slice(0,5)}`}return`${S.slice(8,10)}/${S.slice(5,7)}${T?" "+T.slice(0,5):""}`}function rh(){let m=f("#alr");if(!m)return;let S=F.alerts.filter(T=>[...T.fams].some(A=>U.has(A))).length;m.hidden=!S,m.textContent=`\u26A0\uFE0F ${S} aviso${S===1?"":"s"}`}{let m=f("#alrslot");m&&m.appendChild(f("#alr"))}f("#alr").onclick=()=>{mn=!1,y=!0,Me=null,Ye=-1,Je()},f("#wcopy").onclick=async()=>{let m=f("#wcode").textContent;try{await navigator.clipboard.writeText(m),f("#wcopy").textContent="Copiado \u2713"}catch{let T=document.createRange();T.selectNodeContents(f("#wcode"));let A=getSelection();A.removeAllRanges(),A.addRange(T),f("#wcopy").textContent="Selecciona y copia"}setTimeout(()=>f("#wcopy").textContent="Copiar c\xF3digo",2500)};let xm=ht.get("71801");function vm(m,S){let T=b[m].id,A=In.get(T);!(wt()&&F.url)||A&&(A.loading||Date.now()-A.at<3e4)||(In.set(T,{...A||{},loading:!0,at:A?A.at:0}),_t(F.url.replace(/\/+$/,""),"/departures.json?stationId="+T).then(P=>{In.set(T,{at:Date.now(),d:P}),S&&S()}).catch(()=>In.set(T,{at:Date.now(),err:1})))}let xd=m=>+m.slice(0,2)*60+ +m.slice(3,5),Qr={k:-2,m:null};function ym(m){let S=t.days.indexOf(Rt().ymd);if(Qr.k!==S){Qr.k=S,Qr.m=new Map;for(let T of Z[S]||[])Qr.m.set(String(T.num),T)}return Qr.m.get(String(m))||null}function ah(m,S){let T=Rt(),A=wt()&&T.live&&!S,P=In.get(b[m].id),N=[],X=new Map([...F.vp.values()].map(j=>[String((k.get(j.tid)||{}).num||j.num),j]));if(A&&P&&P.d&&Array.isArray(P.d.trains))for(let j of P.d.trains){let at=(j.departureDateHourSelectedStation||"").slice(11,16);if(!at)continue;let dt=String(j.commercialNumber||j.technicalNumber||""),M=X.get(dt),H=M?F.delays.get(M.tid):null,xt=Math.max(typeof H=="number"?Math.max(0,H/60):0,M&&M.pre&&M.preDl||0),mt=xd(at);mt<T.min-720&&(mt+=1440),N.push({sm:mt,est:mt+xt,dl:xt,fam:(j.line||{}).id||"",dest:(j.destinationStation||{}).name||"",destId:(j.destinationStation||{}).id||"",plat:j.platformSelectedStation||"",cancel:!!j.trainCancelled,obs:j.trainObservations||"",live:!!M,num:dt,tid:M?M.tid:"",tr:M&&k.get(M.tid)||ym(dt),src:"oficial"})}else{let j=t.days.indexOf(T.ymd);if(j<0)return N;let at=(dt,M)=>{for(let H of dt){let xt=H.pat.stops.indexOf(m);if(xt<0||xt===H.pat.stops.length-1)continue;let mt=he(H),Zt=typeof mt=="number"?Math.max(0,mt/60):0,re=H.t0+H.pat.t[2*xt+1]-M;if(re+Zt<T.min-1||re>T.min+360)continue;let pe=H.pat.stops[H.pat.stops.length-1];N.push({sm:re,est:re+Zt,dl:Zt,fam:H.fam,dest:b[pe].n,destId:b[pe].id,plat:"",cancel:mt==="X",obs:"",live:F.vp.has(H.tid),num:H.num,tid:H.tid,tr:H,src:"horario"})}};at(Z[j],0),j>0&&at(Z[j-1],1440),j+1<t.days.length&&T.min>1080&&at(Z[j+1],-1440)}let $=N.filter(j=>j.est>=T.min-.5).sort((j,at)=>j.est-at.est);if(!$.length&&N.length&&N[0].src==="oficial"&&!S)return ah(m,!0);for(let j of $){let at=j.num&&eh(j.num);at&&at.cx&&(j.cancel=!0,j.cxWhy=at.txt)}if(wt()&&T.live){let j=t.days.indexOf(T.ymd);for(let at of $){if(at.live||at.cancel||!at.tr)continue;let dt=at.tr.day===j-1?1440:at.tr.day===j+1?-1440:0,M=at.tr.t0+at.tr.pat.t[1]-dt+(at.dl||0);at.ghost=T.min>M+3}}if($.length&&$[0].src==="oficial"){let j=Math.max(...$.map(dt=>dt.sm)),at=new Set($.map(dt=>dt.num));$=$.concat(ah(m,!0).filter(dt=>dt.sm>j&&!at.has(String(dt.num))))}return $}let vd=(m,S,T,A)=>{let P={key:m,ico:S,name:T,st:[],i:0,walk:10,open:!1};try{let N=JSON.parse(localStorage.getItem("rod_"+m)||"null");N&&Object.assign(P,N)}catch{}return!P.st.length&&A&&(P.st=A),P},Zn=vd("home","\u{1F3E0}","Casa",["79410","79412"]),bn=vd("work","\u{1F4BC}","Trabajo",null),ue={key:"near",ico:"\u{1F4CD}",name:"Cerca de ti",st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},wo=[ue,Zn,bn];Zn.open=!1,bn.open=!1;function Sm(m,S){let T=rt(m,S),A=rt(m,S+.009);return 1/Math.hypot(A[0]-T[0],A[1]-T[1])}function oh(m){if(!navigator.geolocation){ue.err="Este navegador no da la ubicaci\xF3n",Pn(!0);return}navigator.geolocation.getCurrentPosition(S=>{let{longitude:T,latitude:A}=S.coords,P=rt(T,A),N=Sm(T,A),X=b.map((dt,M)=>[M,Math.hypot(dt.w[0]-P[0],dt.w[1]-P[1])*N]).filter(([dt])=>b[dt].fams.size).sort((dt,M)=>dt[1]-M[1]),$=X.filter(([,dt],M)=>M===0||dt<Math.max(2.5,X[0][1]*1.6)).slice(0,3),j=ue.st[0]!==b[$[0][0]].id;ue.w=P,ue.k=N,ue.st=$.map(([dt])=>b[dt].id),ue.dist=Object.fromEntries($.map(([dt,M])=>[b[dt].id,M])),ue.fix=Date.now(),ue.err="",j&&(ue.i=0);let at=[Zn,bn].find(dt=>dt.st.includes(ue.st[0])&&ue.dist[ue.st[0]]<1.5);m&&(at?at.open=!0:ue.open=!0),Pn(!0)},S=>{ue.err=S.code===1?"Sin permiso de ubicaci\xF3n":"No se ha podido obtener la ubicaci\xF3n",m&&(Zn.open=!!Zn.st.length),Pn(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let Mm=m=>Math.max(1,Math.round(m*1.3/.08));setTimeout(()=>oh(!0),400),setInterval(()=>{document.hidden||oh(!1)},12e4);let ta=m=>{try{localStorage.setItem("rod_"+m.key,JSON.stringify({st:m.st,i:m.i,walk:m.walk,open:m.open}))}catch{}},lh=m=>m.st.length?ht.get(m.st[m.i]||m.st[0]):null;function bm(m,S,T,A){if(A&&S.tr){let X=S.tr.pat.stops,$=X.indexOf(m);if($>=0&&X.slice($+1).some(j=>A.has(j)))return"to"}if(A&&S.tr)return"out";let P=ht.get(S.destId)??b.findIndex(X=>X.n===S.dest);if(P<0||P==null||T==null)return"otros";let N=X=>Math.hypot(b[X].w[0]-b[T].w[0],b[X].w[1]-b[T].w[1]);return N(P)<N(m)?"to":"out"}let Eo=m=>m<1?"ahora":m<60?Math.round(m)+" min":Math.floor(m/60)+" h "+String(Math.round(m%60)).padStart(2,"0"),yd=0,wm=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i;function Em(m,S,T){let A=lh(m);if(m===ue){if(A==null)return`<div class="hplace"><button type="button" class="hhead hnew" data-hloc><span class="hico">\u{1F4CD}</span><span class="htit"><b>Cerca de ti</b><small>${ue.err?d(ue.err)+" \xB7 toca para reintentar":"Buscando tu ubicaci\xF3n\u2026"}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Zn,bn].find(ee=>ee.st.includes(ue.st[0])&&ue.dist[ue.st[0]]<1.5))return"";m.walk=Mm(ue.dist[m.st[m.i]]||0)}if(A==null){let Tt=ue.st.length?ht.get(ue.st[0]):null,ee=m===bn?Zn:bn,Ze=Tt!=null&&!ee.st.includes(ue.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${m.ico}</span><span class="htit"><b>${m.name}</b><small>${Ze?`Est\xE1s en <b>${d(b[Tt].n)}</b>`:"Elige tu estaci\xF3n"}</small></span>${Ze?`<button type="button" class="hpick" data-hnear="${m.key}">Usar esta</button>`:""}<button type="button" class="hpick alt" data-hset="${m.key}">${Ze?"Otra\u2026":"Elegir"}</button></div></div>`}vm(A,()=>Pn(!0));let P=m===ue?null:m===Zn?bn:Zn,N=P?lh(P):null,X=N!=null&&N!==A?N:xm,$=N!=null&&N!==A?P===bn?"el trabajo":"casa":"Barcelona",j=b[A].fams,at=new Set([...j].filter(Tt=>U.has(Tt))),dt=at.size<j.size,M=ue.w?Math.hypot(b[A].w[0]-ue.w[0],b[A].w[1]-ue.w[1])*ue.k:null,H=m===ue||M!=null&&M>3&&Date.now()-ue.fix<15*6e4,xt=ah(A).filter(Tt=>!R[Tt.fam]||U.has(Tt.fam)),mt=H?0:m.walk,Zt=F.alerts.filter(Tt=>[...Tt.fams].some(ee=>at.has(ee))||Tt.stops&&Tt.stops.has(A)),re=Zt.some(Tt=>wm.test(Tt.txt)),pe={to:[],out:[],otros:[],all:xt},vt=$!=="Barcelona"?new Set(P.st.map(Tt=>ht.get(Tt)).filter(Tt=>Tt!=null)):null;xt.forEach(Tt=>pe[bm(A,Tt,X,vt)].push(Tt));let St=Tt=>{if(Tt==="all")return"Pr\xF3ximas salidas \xB7 todas las direcciones";let ee=wn=>(wn.find(ui=>ui.fam)||{}).fam;if(Tt==="to")return"Hacia "+Cs($==="Barcelona"?"Barcelona":b[X].n,ee(pe.to)||[...at][0])+($!=="Barcelona"?` <small>${$}</small>`:"");let Ze=[];for(let wn of pe[Tt])Ze.some(ui=>ui[0]===wn.dest)||Ze.push([wn.dest,wn.fam]);return Ze.length?"Hacia "+Ze.slice(0,2).map(([wn,ui])=>Cs(wn,ui)).join(" "):"Otros"},se=Tt=>{let ee=pe[Tt].find(Dn=>!Dn.cancel&&Dn.est-S.min>=mt);if(!ee){let Dn=pe[Tt].find(Dm=>!Dm.cancel);return Dn&&!H?{cls:"v-no",big:"No llegas",small:`El pr\xF3ximo (${Vt(Dn.est)}) sale en ${Eo(Dn.est-S.min)}: no da tiempo a pie`}:{cls:"v-no",big:"Sin trenes",small:"No hay salidas pr\xF3ximas en este sentido"}}let Ze=ee.est-S.min-mt,wn=H?"v-info":Ze<1.5?"v-bad":Ze<5?"v-warn":"v-ok",ui=ee.ghost?pe[Tt].find(Dn=>!Dn.cancel&&!Dn.ghost&&Dn.live&&Dn.est>ee.est):null;return{cls:wn,ghost:!!ee.ghost,big:H?Ze<1?"Sale ahora":"Sale en "+Eo(Ze):Ze<1.5?"\xA1Sal ya!":"Sal en "+Eo(Ze),warn:ee.ghost?`\u26A0\uFE0F Sin se\xF1al de Renfe: puede no pasar${ui?` \xB7 el siguiente en marcha sale a las ${Vt(ui.est)}`:""}`:re?"\u26A0\uFE0F Servicio afectado por una incidencia":"",small:`${Vt(ee.est)} \xB7 ${ee.fam} a ${ee.dest}${ee.plat?" \xB7 v\xEDa "+ee.plat:""}${ee.dl>=1?` \xB7 +${Math.round(ee.dl)} min`:""}${ee.arr!=null?` \xB7 llegas a las ${Vt(ee.arr)}`:""}`,x:ee}},_e=vt||new Set([X]),Ie=Tt=>{let ee=Tt.tr;if(!ee)return null;let Ze=ee.pat.stops,wn=Ze.indexOf(A);if(wn<0)return null;let ui=-1;for(let Dn=wn+1;Dn<Ze.length;Dn++)if(_e.has(Ze[Dn])){ui=Dn;break}return ui<0?null:Tt.est+(ee.pat.t[2*ui]-ee.pat.t[2*wn+1])};pe.to.forEach(Tt=>{Tt.arr=Ie(Tt)});let _n=pe.out.length?"out":"otros",ke=se("to"),Fe=se(_n),Zi=wt()&&S.live,sr=at.size===1,Ln=Tt=>{let ee=Tt.est-S.min;return H?Tt.cancel?"cx":ee<0?"u-miss":"u-info":Tt.cancel?"cx":ee<mt?"u-miss":ee<mt+1.5?"u-now":ee<mt+5?"u-soon":"u-ok"},Im=Tt=>{let ee=!Tt.cancel&&Tt.est-S.min<mt,Ze=nh(Tt.num,"");return`<li class="hr ${Ln(Tt)}${Tt.live?" on":""}${Tt.ghost?" gh":""} go" style="--lc:${R[Tt.fam]||"#6b7385"}" data-dk="${T.push(Tt)-1}" title="${Tt.cancel?"Cancelado":ee?"No llegas a pie":"Ver este tren en el mapa"}"><span class="hrt"><b>${Tt.cancel?"\u2715":ee?Vt(Tt.est):Eo(Tt.est-S.min)}</b><small>${Tt.cancel?"cancelado":ee?"no llegas":Tt.ghost?'<i class="ghs" title="Deber\xEDa estar circulando y Renfe no da su posici\xF3n">sin se\xF1al</i>':Vt(Tt.est)}</small></span><span class="hrd">${Cs((sr?"":Tt.fam+" \xB7 ")+Tt.dest,Tt.fam)}${Ze.length?`<i class="cr" title="${d(Ze.map(wn=>Mo(wn.kind)).join(" \xB7 "))}">${Ze.slice(0,2).map(wn=>So[wn.kind]).join("")}</i>`:""}${Tt.arr!=null?`<small class="hro">llegas a las ${Vt(Tt.arr)}</small>`:""}${Tt.obs?`<small class="hro">${d(Tt.obs)}</small>`:""}</span><span class="hrm">${!Tt.cancel&&Tt.dl>=1?`<em class="dl ${ir(Tt.dl)}">+${Math.round(Tt.dl)}</em>`:""}${Tt.plat?`<i class="via">v\xEDa ${d(Tt.plat)}</i>`:""}</span></li>`},ph=(Tt,ee)=>`<div class="hcol"><div class="hdir">${St(Tt)}</div><div class="hv ${ee.cls}${ee.ghost?" gh":""}${ee.x?" go":""}"${ee.x?` data-dk="${T.push(ee.x)-1}"`:""}><b>${ee.big}</b><small>${d(ee.small)}</small>${ee.warn?`<span class="hvw">${d(ee.warn)}</span>`:""}</div><ol>${pe[Tt].slice(0,m.more?Tt==="all"?20:10:Tt==="all"?7:4).map(Im).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(m===ue){let Tt=se("all");var Pm=Tt.x?`${Tt.big} \xB7 <b>${Vt(Tt.x.est)}</b> ${d(Tt.x.fam)} a ${d(Tt.x.dest)}${Tt.x.plat?" \xB7 v\xEDa "+d(Tt.x.plat):""}`:Tt.big}let Lm=m===ue?Pm:ke.x?`${ke.big} \xB7 <b>${Vt(ke.x.est)}</b>${ke.x.arr!=null?` \u2192 llegas a las <b>${Vt(ke.x.arr)}</b>`:""} hacia ${d($)}${ke.x.plat?" \xB7 v\xEDa "+d(ke.x.plat):""}`:"Sin trenes hacia "+d($);return`<div class="hplace ${m.open?"open":""}"><button type="button" class="hhead" data-ht="${m.key}"><span class="hico">${m.ico}</span><span class="htit"><b>${d(b[A].n)}</b><small class="c${re?"bad":ke.cls.slice(2)}">${Lm}</small></span><span class="hchev">\u25BE</span></button>`+(m.open?`
      <div class="hbody">
        ${m.st.length>1?`<div class="hst">${m.st.map((Tt,ee)=>{let Ze=ht.get(Tt);return Ze==null?"":`<button type="button" data-hs="${m.key}:${ee}" class="${ee===m.i?"on":""}">${d(b[Ze].n)}</button>`}).join("")}</div>`:""}
        ${m===ue?`<div class="hwalk">\u{1F4CD} A ${(()=>{let Tt=ue.dist[m.st[m.i]]||0;return Tt<1?Math.round(Tt*100)*10+" m":Tt.toFixed(1).replace(".",",")+" km"})()} \xB7 unos <b>${m.walk} min</b> a pie</div>`:""}
        ${H&&m!==ue?`<div class="hwalk away">\u{1F4CD} Est\xE1s a ${M<10?M.toFixed(1).replace(".",","):Math.round(M)} km: horas de salida del tren, sin contar el camino</div>`:""}<div class="hwalk"${H?" hidden":""}>\u{1F6B6} Tardo <button type="button" data-hw="${m.key}:-1">\u2212</button><b>${mt} min</b><button type="button" data-hw="${m.key}:1">+</button> a pie hasta la estaci\xF3n</div>
        ${dt?`<div class="hflt">Solo ${[...at].sort(O).map(Ii).join(" ")||"ninguna l\xEDnea"} \xB7 filtro de l\xEDneas activo</div>`:""}
        ${Zt.length?`<div class="hal ${re?"bad":""}">\u26A0\uFE0F ${ih(Zt[0])} ${d(Zt[0].txt)} <small>${sh(Zt[0])}</small>${Zt.length>1?` <a data-hal>+${Zt.length-1} avisos</a>`:""}</div>`:`<div class="hok">\u2713 Sin avisos para ${[...at].sort(O).join(", ")}</div>`}
        ${(()=>{let Tt=m.st.flatMap(ee=>nh("",ee));return Tt.length?`<div class="hcr">${Tt.slice(0,3).map(ee=>`${So[ee.kind]} <b>${d(Mo(ee.kind))}</b> <small>${ee.up>1?ee.up+" viajeros \xB7 ":""}${pd(ee)}</small>`).join("<br>")}</div>`:""})()}
        ${m===ue?`<div class="hcols one">${ph("all",se("all"))}</div>`:`<div class="hcols">${ph("to",ke)}${ph(_n,Fe)}</div>`}
        ${xt.length>(m===ue?7:8)?`<button type="button" class="hmore" data-hmore="${m.key}">${m.more?"\u25B4 Menos trenes":"\u25BE M\xE1s trenes \xB7 pr\xF3ximas horas"}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${Zi?In.get(b[A].id)?.d?"Salidas oficiales de Rodalies en directo":"Horario + retrasos mientras cargan las salidas oficiales":"Previsi\xF3n seg\xFAn horario (sin tiempo real)"} \xB7 \u25CF = tren circulando">${Zi?In.get(b[A].id)?.d?"\u25CF oficial en directo":"\u25CF horario + retrasos":"seg\xFAn horario"}</span><a data-hmap="${A}">\u{1F5FA}\uFE0F mapa</a>${m===ue?"<a data-hloc>\u{1F4CD} actualizar</a>":`<a data-hset="${m.key}">\u270E cambiar</a>`}${m===bn?'<a data-hdel="work">\u2715 quitar</a>':""}</div>
      </div>`:"")+"</div>"}let Pi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},Sd=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Md=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,ea=()=>{let m=[...Zn.st,...bn.st],S=new Set;return m.forEach(T=>{let A=ht.get(T);A!=null&&b[A].fams.forEach(P=>S.add(P))}),{stations:m,lines:[...S].sort(O)}},Tm=m=>Uint8Array.from(atob(m.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((m.length+3)%4)),S=>S.charCodeAt(0));async function bd(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function wd(m){let T=await(await fetch(F.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:m.toJSON(),...ea()})})).json();if(!T.ok)throw new Error(T.err||"error")}let Vn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function Am(){let{lines:m,stations:S}=ea(),T=new Set(m),A=new Set(S.map(X=>ht.get(X))),P=F.alerts.filter(X=>[...X.fams].some($=>T.has($))||[...X.stops||[]].some($=>A.has($)));if(!Vn.seen){try{Vn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Vn.seen=new Set}if(!Vn.seen.size){P.forEach(X=>Vn.seen.add(X.id+"|"+X.txt.length)),Ed();return}}let N=P.filter(X=>!Vn.seen.has(X.id+"|"+X.txt.length));if(N.length&&(N.forEach(X=>Vn.seen.add(X.id+"|"+X.txt.length)),Ed(),!(!Vn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let X of N.slice(0,3)){let $=(X.src==="Adif"?"Adif \xB7 v\xEDa":"Rodalies")+(X.fams.size?" \xB7 "+[...X.fams].sort(O).slice(0,4).join(" "):""),j={body:X.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+X.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(at=>at?at.showNotification($,j):new Notification($,j)).catch(()=>{try{new Notification($,j)}catch{}})}}function Ed(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Vn.seen].slice(-400)))}catch{}}async function Cm(){if(Vn.on)Vn.on=!1,Yn("Avisos desactivados");else{if(!("Notification"in window)){Yn(Sd&&!Md()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio y activa los avisos desde la app":"Este navegador no permite avisos");return}if(await Notification.requestPermission()!=="granted"){Yn("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}Vn.on=!0,Yn("Listo: te aviso de incidencias en "+ea().lines.join(", ")+" mientras la app est\xE9 abierta")}try{localStorage.setItem("rod_ln",Vn.on?"1":"")}catch{}Pn(!0)}async function Rm(){if(!F.repOk)return Cm();if(!Pi.busy){Pi.busy=!0;try{let m=await bd();if(!m){Yn(Sd&&!Md()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio, abre la app desde ah\xED y activa los avisos":"Este navegador no permite avisos (hace falta abrir la web publicada, no el archivo)");return}if(await navigator.serviceWorker.ready,Pi.on){let S=await m.pushManager.getSubscription();S&&(fetch(F.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:S.endpoint})}).catch(()=>{}),await S.unsubscribe().catch(()=>{})),Pi.on=!1,Yn("Avisos desactivados")}else{if(!F.url){Yn("Hace falta el puente en directo");return}if(await Notification.requestPermission()!=="granted"){Yn("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}let T=(await _t(F.url.replace(/\/+$/,""),"/push/key")).key,A=await m.pushManager.getSubscription()||await m.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Tm(T)});await wd(A),Pi.on=!0,Yn("Listo: te avisaremos de incidencias en "+ea().lines.join(", "))}try{localStorage.setItem("rod_push",Pi.on?"1":"")}catch{}}catch(m){Yn("No se han podido activar los avisos: "+(m.message||m))}finally{Pi.busy=!1,Pn(!0)}}}async function Td(){if(Pi.on)try{let m=await bd(),S=m&&await m.pushManager.getSubscription();S&&await wd(S)}catch{}}let ch=!1,Ad="";function hh(){let m=Me?"t"+(Me.tid||Me.vtid):Ye>=0?"s"+Ye:y?"a":mn?"n":"";m!==Ad&&(ch=!1,Ad=m);let S=innerWidth<=640&&!!m&&!ch,T=f("#inf");T.classList.contains("compact")!==S&&(T.classList.toggle("compact",S),requestAnimationFrame(()=>{if(h.style.display!=="none"){let A=T.getBoundingClientRect().bottom;h.style.top=Math.round(A+8)+"px",h.style.maxHeight=Math.max(140,f("#rc").getBoundingClientRect().top-A-16)+"px"}}))}function Pn(m){let S=f("#home");if(!S)return;let T=performance.now();if(!m&&T-yd<4e3)return;yd=T;let A=Rt(),P=[],N=ea(),X=M=>{let H=lh(M);return H==null||!ue.w?1:Math.hypot(b[H].w[0]-ue.w[0],b[H].w[1]-ue.w[1])},$=[ue,...[Zn,bn].sort((M,H)=>X(M)-X(H))],j=$.map(M=>Em(M,A,P)).join("")+(wo.some(M=>M.open)&&N.lines.length,"");if(S.className=wo.some(M=>M.open)?"open":"",S._h===j)return;S._h=j,S.innerHTML=j;{let M=[...S.children].find(H=>H.classList.contains("hplace")&&!H.querySelector(".hnew"));M&&M.classList.add("lead")}let at=M=>M==="work"?bn:M==="near"?ue:Zn;S.querySelectorAll("[data-hloc]").forEach(M=>M.onclick=()=>{ue.err="",oh(!0)}),S.querySelectorAll("[data-ht]").forEach(M=>M.onclick=()=>{if(f("#inf").classList.contains("compact")){ch=!0,hh();return}let H=at(M.dataset.ht);H.open=!H.open,ta(H),Pn(!0),(Me||Ye>=0||y||mn)&&(h._h="",Je())}),S.querySelectorAll("[data-hs]").forEach(M=>M.onclick=()=>{let[H,xt]=M.dataset.hs.split(":"),mt=at(H);mt.i=+xt,ta(mt),Pn(!0)}),S.querySelectorAll("[data-hw]").forEach(M=>M.onclick=()=>{let[H,xt]=M.dataset.hw.split(":"),mt=at(H);mt.walk=g(mt.walk+ +xt,0,60),ta(mt),Pn(!0)}),S.querySelectorAll("[data-hmap]").forEach(M=>M.onclick=()=>{let H=+M.dataset.hmap;mn=y=cn=!1,Me=null,Ye=H,Et(),Object.assign(s,{tx:b[H].w[0],ty:b[H].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),h._h="",Je(),a()}),S.querySelectorAll("[data-hset]").forEach(M=>M.onclick=()=>{Rs=M.dataset.hset,p.value="",p.placeholder=Rs==="work"?"Escribe la estaci\xF3n del trabajo\u2026":"Escribe la estaci\xF3n de casa\u2026",p.focus()}),S.querySelectorAll("[data-hnear]").forEach(M=>M.onclick=()=>{let H=ht.get(ue.st[0]);H!=null&&uh(H,M.dataset.hnear)}),S.querySelectorAll("[data-hmore]").forEach(M=>M.onclick=()=>{let H=at(M.dataset.hmore);H.more=!H.more,Pn(!0)}),S.querySelectorAll("[data-hdel]").forEach(M=>M.onclick=()=>{bn.st=[],bn.open=!1,ta(bn),Pn(!0),Td()}),S.querySelectorAll("[data-dk]").forEach(M=>M.onclick=()=>Cd(P[+M.dataset.dk])),S.querySelectorAll("[data-hal]").forEach(M=>M.onclick=()=>f("#alr").click());let dt=f("#bell");dt||(dt=document.createElement("button"),dt.type="button",dt.id="bell",dt.onclick=Rm,f("#inf .more").prepend(dt));{let M=F.repOk?Pi.on:Vn.on;dt.hidden=!N.lines.length,dt.className=M?"on":"",dt.textContent=(M?"\u{1F514} Avisos activados \xB7 ":"\u{1F515} Activar avisos de ")+N.lines.join(", "),dt.title=(M?"Avisos activados":"Activar avisos")+" de "+N.lines.join(", ")+(F.repOk?"":" (mientras la app est\xE9 abierta)")}gd(S)}function Cd(m){if(!m)return;let S=t.days.indexOf(Rt().ymd),T=qn.find(N=>N.real?m.tid&&N.v.tid===m.tid||m.num&&String(N.tr?N.tr.num:N.v.num)===String(m.num):m.tr&&N.tr===m.tr||m.num&&N.tr&&String(N.tr.num)===String(m.num)),A=m.tr||T&&T.tr||(Z[S]||[]).find(N=>String(N.num)===String(m.num));if(mn=y=cn=!1,Ye=-1,Me=T?T.tr||{vtid:T.v.tid}:A||null,!Me)return;hn=T&&T.tr?T.tr:null,hn&&innerWidth<=640&&(h.classList.add("peek"),f("#rc").classList.contains("min")||f("#rcgrab").click());let P=T?T.p.w:null;P&&Object.assign(s,{tx:P[0],ty:P[1],dist:Math.min(s.dist,22)}),Et(),h._h="",Je(),mi=0,a()}let Rs=!1;p.addEventListener("blur",()=>setTimeout(()=>{Rs&&!p.value.trim()&&(Rs=!1,p.placeholder="Buscar estaci\xF3n o municipio\u2026")},600));function mS(){}function uh(m,S){let T=S==="work"?bn:Zn,A=b[m].id,P=b.filter(N=>N.fams.size&&N!==b[m]&&Math.hypot(N.w[0]-b[m].w[0],N.w[1]-b[m].w[1])<.6).map(N=>N.id);T.st=[A,...P].slice(0,3),T.i=0,T.open=!0,ta(T),Pn(!0),Td()}let dh=f("#lines");dh.innerHTML='<button type="button" class="all" data-f="*">Todas</button>'+v.map(m=>`<button type="button" style="--c:${R[m]}" data-f="${m}">${m}</button>`).join("");function Rd(){try{Pn(!0)}catch{}dh.querySelectorAll("[data-f]").forEach(m=>{m.dataset.f!=="*"&&m.classList.toggle("off",!U.has(m.dataset.f))})}dh.querySelectorAll("[data-f]").forEach(m=>m.onclick=()=>{let S=m.dataset.f;S==="*"?v.forEach(T=>U.add(T)):U.size===v.length?(U.clear(),U.add(S)):U.has(S)?(U.delete(S),U.size||v.forEach(T=>U.add(T))):U.add(S);try{localStorage.setItem("rod_lines",JSON.stringify([...U]))}catch{}Rd(),ft(),Et(),rh(),mi=0,a()});let fh=[...document.querySelectorAll("[data-sp]")],hi=0;function Id(m){let S=Rt();m&&(et===m||hi===m)?et?(Ut=S.min,ut=S.min,et=0,hi=m):(ie=performance.now(),et=m,hi=0):m===0?(et=0,ut=null,hi=0):(Ut=S.min,ie=performance.now(),ut=S.min,et=m,hi=0),fh.forEach(T=>{let A=+T.dataset.sp;T.classList.toggle("on",A===(et||hi)||!et&&!hi&&ut==null&&A===0),T.classList.toggle("pz",!!hi&&A===hi),T.textContent=A===0?"Ahora":hi===A?"\u25B6 \xD7"+A:et===A?"\u23F8 \xD7"+A:"\xD7"+A}),mi=0,a()}fh.forEach(m=>m.onclick=()=>Id(+m.dataset.sp)),f("#tsl").oninput=m=>{let S=+m.target.value;Ut=S,ut=S,ie=performance.now(),et===0&&!hi&&fh.forEach(T=>T.classList.remove("on")),mi=0,a()},setInterval(()=>{ut!=null&&et&&Ut+(performance.now()-ie)/6e4*et>1560&&(Ut=240,ie=performance.now())},1e3),window.__rodSearch=m=>{let S=_(m.trim());if(!S){u.style.display="none",u._pick=null;return}let T=[],A=[];b.forEach(($,j)=>{if(!$.fams.size)return;let at=_($.n);at.startsWith(S)||at.includes(" "+S)||at.includes("-"+S)?T.push(j):at.includes(S)&&A.push(j)});let P=T.concat(A).slice(0,7),N=E.filter($=>_($.name).startsWith(S)).sort(($,j)=>j.pop-$.pop).slice(0,3),X=P.map($=>({h:`\u{1F689} ${d(b[$].n)}<em>${[...b[$].fams].sort(O).slice(0,3).map(j=>`<em class="ls" style="background:${R[j]}">${j}</em>`).join(" ")}</em>`,go:()=>{if(Rs){let j=Rs;Rs=!1,p.placeholder="Buscar estaci\xF3n o municipio\u2026",uh($,j);return}mn=!1,y=!1,cn=!1,Ye=$,Me=null,hn=null,Et(),Object.assign(s,{tx:b[$].w[0],ty:b[$].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Je(),a()}})).concat(N.map($=>({h:`${d($.name)}<em>municipio</em>`,go:()=>{Object.assign(s,{tx:$.cx,ty:$.cy,dist:g($.size*3+14,14,60)}),a()}})));u.innerHTML=X.map(($,j)=>`<li data-i="${j}">${$.h}</li>`).join("")||'<li class="no">Sin resultados</li>',u.style.display="block",u._pick=$=>{X[$]&&(X[$].go(),u.style.display="none",p.value="",p.blur())},u.querySelectorAll("li[data-i]").forEach($=>$.onclick=()=>u._pick(+$.dataset.i))},Rd(),Et();try{let m=new URLSearchParams(location.search).get("st");if(m){let S=_(m),T=-1,A=0;b.forEach((P,N)=>{if(!P.fams.size)return;let X=_(P.n),$=X===S?3:X.startsWith(S)||S.startsWith(X)?2:X.includes(S)||S.includes(X)?1:0;$>A&&(A=$,T=N)}),T>=0&&setTimeout(()=>{Ye=T,Et(),Object.assign(s,{tx:b[T].w[0],ty:b[T].w[1],dist:18,tilt:.5}),Je(),a()},300)}}catch{}window.__rod={get hist(){return ge},get past(){return Wt.cur},get cols(){return ye.mesh?ye.mesh.count:-1},get dist(){return r.dist},get follow(){return hn},get selTrip(){return Me},ST:b,TR:W,FAM:v,act:()=>qn,setSpeed:Id,RT:F,pollRT:Mt,nowState:Rt,posAt:oi,activeTrips:nr,select:m=>{Me=m,Je()}}}var $r=window.__DATA__;var Ae=i=>document.querySelector(i),as=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Bn=(i,t,e)=>Math.min(e,Math.max(t,i)),Zu=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Xn=Ae("#c"),fo=new Fc({canvas:Xn,antialias:!0});fo.setPixelRatio(Math.min(devicePixelRatio||1,2));var Es=new ya;Es.background=new oe(15659509);var Kc=35,Yi=new Fn(Kc,1,2,1500);Es.add(new Ga(16777215,9080992,1));var Yp=new $a(16777215,.9);Yp.position.set(-40,-70,90);Es.add(Yp);var Xi=100/$r.w,lo=$r.w/2,co=$r.h/2,rn=[],Ju=new Mi;Es.add(Ju);var Zp=new Bs({color:16777215,transparent:!0,opacity:.55});for(let i of $r.m){let t=new Mi,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let g of i.g){let _=g.map(f=>{let d=[];for(let L=0;L<f.length;L+=2)d.push(new Nt((f[L]-lo)*Xi,(f[L+1]-co)*Xi));return d.length>1&&d[0].equals(d[d.length-1])&&d.pop(),d}).filter(f=>f.length>=3);if(!_.length)continue;let E=new Lr(_[0]);for(let f=1;f<_.length;f++)E.holes.push(new ks(_[f]));e.push(E);for(let f of _[0])s=Math.min(s,f.x),r=Math.max(r,f.x),a=Math.min(a,f.y),o=Math.max(o,f.y);for(let f of _)n.push(new Ta(new sn().setFromPoints(f.map(d=>new B(d.x,d.y,0))),Zp))}if(!e.length)continue;let l;try{l=new Oa(e,{depth:1,bevelEnabled:!1})}catch{continue}let c=new ka({color:13421772}),h=new Sn(l,c);t.add(h);let p=new Mi;n.forEach(g=>p.add(g)),p.position.z=.04,Ju.add(p),t.scale.z=.01,Ju.add(t);let u={og:p,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:h,mat:c,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};h.userData.m=u,rn.push(u)}var kw=rn.map(i=>i.mesh),Vp=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},Jp=0,Kp=0;for(let i of rn){for(let t of i.rings)Jp+=Vp(t[0])-t.slice(1).reduce((e,n)=>e+Vp(n),0);Kp+=i.area}var Ky=Math.sqrt(Kp/Jp),Gc={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},jp={"08":"provincia de Barcelona",17:"provincia de Girona",25:"provincia de Lleida",43:"provincia de Tarragona"},id="sqrt",sd="pop",qu=0,Ku=0,Gr=1,oo=1,jy={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},ju=i=>sd==="pop"?i.pop:i.pop/i.area,Hc=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new oe(i));function Qy(i){i=Bn(i,0,1)*(Hc.length-1);let t=Math.min(Math.floor(i),Hc.length-2);return Hc[t].clone().lerp(Hc[t+1],i-t)}var Wr=i=>i>=100?as(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function tS(){Ku=0;for(let i of rn)Ku+=i.pop;[...rn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...rn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),Qp()}var eS=new oe("#d3d8e2"),nS=new oe("#eceff3");function rd(i){i.mat.color.copy(i.base).lerp(nS,.86),i.inF||i.mat.color.lerp(eS,.8)}function Qp(){Gr=1,oo=1e12;for(let e of rn){let n=ju(e);Gr=Math.max(Gr,n),oo=Math.min(oo,n)}let i=Math.log10(Math.max(oo,.01)),t=Math.log10(Gr);for(let e of rn)e.base=Qy((Math.log10(Math.max(ju(e),.01))-i)/(t-i)),rd(e);Ae("#lmin").textContent=Wr(oo),Ae("#lmax").textContent=Wr(Gr),Ae("#lname").textContent=sd==="pop"?"habitantes":"hab./km\xB2",jc()}function jc(){let i=jy[id],t=i(Gr),e=24*qu;for(let n of rn)n.zt=qu<=.001?.01:Math.max(.12*Math.min(1,qu),e*i(ju(n))/t)*(n.inF?1:.1);Rn()}var Hp=Object.fromEntries(rn.map(i=>[i.code,i])),Wc=[],tm=[];for(let i of $r.bd){let t=Hp[i.a],e=Hp[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)tm.push((i.p[n]-lo)*Xi,(i.p[n+1]-co)*Xi,0,(i.p[n+2]-lo)*Xi,(i.p[n+3]-co)*Xi,0),Wc.push(t,e)}var qc=new ss;qc.setPositions(tm);var em=new Hi({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),nm=new Hi({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[em,nm].forEach((i,t)=>{let e=new Ys(qc,i);e.frustumCulled=!1,e.renderOrder=10+t,Es.add(e)});function iS(){let i=qc.attributes.instanceStart.data.array;for(let t=0;t<Wc.length;t+=2){let e=Math.max(Wc[t].z,Wc[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}qc.attributes.instanceStart.data.needsUpdate=!0}var Yc={};for(let i of Object.keys(Gc)){let t=rn.filter(h=>h.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,l=-1e9;for(let h of t)e+=h.area,n+=h.cx*h.area,s+=h.cy*h.area,r=Math.min(r,h.cx),a=Math.max(a,h.cx),o=Math.min(o,h.cy),l=Math.max(l,h.cy);let c=document.createElement("div");c.className="plab",c.textContent=Gc[i],c.title="Ver solo "+jp[i],c.onclick=()=>pS("pr:"+i),document.body.appendChild(c),Yc[i]={el:c,p:new B(n/e,s/e,0),cx:(r+a)/2,cy:(o+l)/2,ext:Math.max(a-r,l-o),ext2:[a-r,l-o],area:e,name:Gc[i]}}var Yu=new B;function sS(){for(let i in Yc){let t=Yc[i];Yu.copy(t.p).project(Yi),t.el.style.transform=`translate(-50%,-50%) translate(${(Yu.x*.5+.5)*innerWidth}px,${(-Yu.y*.5+.5)*innerHeight}px)`}}var an={tilt:0,yaw:0,dist:150,tx:0,ty:0},fe={...an};function rS(){let i=innerWidth/innerHeight,t=Math.tan(Kc*Math.PI/360);return Math.max($r.h*Xi*1.1,100*1.1/i)/(2*t)}var aS=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{fe.yaw=Math.round(fe.yaw/(2*Math.PI))*2*Math.PI,fe.tilt=0,Rn()});function ad(){Object.assign(fe,{tilt:0,yaw:0,dist:rS(),tx:0,ty:0}),Rn()}function oS(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=an;Yi.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),Yi.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),Yi.lookAt(n,s,0)}var $c=!0,Gp=performance.now(),ho=new Map;function Rn(){$c=!0}function im(i){requestAnimationFrame(im);let t=Bn((i-Gp)/1e3,0,.05);Gp=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(an)){let r=fe[s]-an[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(an[s]+=r*e,n=!0):an[s]=fe[s]}for(let s of rn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of ho){let a=(i-r)/1800;a>=1?(ho.delete(s),Qs(s)):Qs(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&($c=!0),n||$c){aS.style.transform=`rotate(${an.yaw}rad) scaleY(${(.55+.45*Math.cos(an.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(fe.yaw/2))<.02&&fe.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?"El norte ya est\xE1 arriba":"Poner el norte arriba y el mapa plano")}oS(),iS(),sS(),window.__rodFrame&&window.__rodFrame(),fo.render(Es,Yi),$c=n,Ae("#tilt").value=Math.round(fe.tilt*180/Math.PI),Ae("#yaw").value=Math.round(((fe.yaw*180/Math.PI+180)%360+360)%360-180)}}function sm(){fo.setSize(innerWidth,innerHeight,!1),Yi.aspect=innerWidth/innerHeight,Yi.updateProjectionMatrix(),em.resolution.set(innerWidth,innerHeight),nm.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),Rn()}addEventListener("resize",()=>{sm(),qe.length&&Ts()});Xn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;fe.yaw+=n*.0035}else i.ctrlKey?fe.dist=Bn(fe.dist*Math.exp(e*.01),6,400):fe.tilt=Bn(fe.tilt+e*.002,0,1.32);Rn()},{passive:!1});Xn.addEventListener("contextmenu",i=>i.preventDefault());var qi=new Map,ti=null,Js=0,Qu=0,td=0;var Zc=null;Xn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),qe.length&&setTimeout(Ts,50)),Xn.setPointerCapture(i.pointerId),qi.set(i.pointerId,{x:i.clientX,y:i.clientY}),qi.size===1&&(ti={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),qi.size===2){let[t,e]=[...qi.values()];Js=Math.hypot(t.x-e.x,t.y-e.y),Qu=Math.atan2(e.y-t.y,e.x-t.x),td=(t.y+e.y)/2,Zc={mode:null,rot:0,sc:0,tl:0},ti&&(ti.multi=!0)}od()});Xn.addEventListener("pointermove",i=>{let t=qi.get(i.pointerId);if(!t){rs={x:i.clientX,y:i.clientY},ed||(ed=requestAnimationFrame(cS));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,qi.size===2){let[s,r]=[...qi.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),l=(s.y+r.y)/2,c=o-Qu;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI);let h=Js?a-Js:0,p=l-td,u=Zc||(Zc={mode:null,rot:0,sc:0,tl:0});u.rot+=c,u.sc+=h,u.tl+=p,u.mode?u.mode==="zoom"&&Math.abs(u.rot)>.45&&(u.mode="rotate"):Math.abs(u.rot)>.3?u.mode="rotate":Math.abs(u.tl)>30&&Math.abs(u.sc)<18?u.mode="tilt":Math.abs(u.sc)>12&&(u.mode="zoom"),(u.mode==="zoom"||u.mode==="rotate")&&Js&&(fe.dist=Bn(fe.dist*Js/a,6,400)),u.mode==="rotate"&&(fe.yaw+=c,an.yaw=fe.yaw),u.mode==="tilt"&&(fe.tilt=Bn(fe.tilt-p*.006,0,1.32),an.tilt=fe.tilt),Js=a,Qu=o,td=l,Rn();return}if(ti.moved+=Math.abs(e)+Math.abs(n),ti.rot||i.altKey)fe.yaw+=e*.005,fe.tilt=Bn(fe.tilt+n*.004,0,1.32),an.yaw=fe.yaw,an.tilt=fe.tilt;else{let s=2*an.dist*Math.tan(Kc*Math.PI/360)/innerHeight,r=Math.sin(an.yaw),a=Math.cos(an.yaw),o=1/Math.max(Math.cos(an.tilt),.3);fe.tx=Bn(fe.tx-a*e*s+-r*n*s*o,-70,70),fe.ty=Bn(fe.ty-r*e*s+a*n*s*o,-70,70),an.tx=fe.tx,an.ty=fe.ty}Rn()});var rm=i=>{let t=ti&&!ti.rot&&!ti.multi&&ti.moved<(ti.touch?12:6)&&i.type==="pointerup"&&qi.size===1,e=ti&&ti.touch;qi.delete(i.pointerId),Js=0,Zc=null,qi.size||(ti=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};Xn.addEventListener("pointerup",rm);Xn.addEventListener("pointercancel",rm);Xn.addEventListener("dblclick",ad);addEventListener("keydown",i=>{i.key==="Alt"&&(Xn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(Xn.style.cursor="")});addEventListener("blur",()=>{Xn.style.cursor=""});var lS=new Hs,Wp=new Nt,rs=null,ed=0,Ks=null;function cS(){if(ed=0,!rs||ti)return;Wp.set(rs.x/innerWidth*2-1,-(rs.y/innerHeight)*2+1),lS.setFromCamera(Wp,Yi);let i=null;if(i!==Ks){let e=Ks;Ks=i,e&&Qs(e),i&&Qs(i),Rn()}let t=window.__rodHover&&window.__rodHover(rs.x,rs.y);if(t){Zs.innerHTML=t,Zs.style.display="block";let e=Zs.offsetWidth,n=Zs.offsetHeight;Zs.style.left=Bn(rs.x+14,6,innerWidth-e-6)+"px",Zs.style.top=Bn(rs.y+14,6,innerHeight-n-6)+"px",Xn.style.cursor="pointer"}else od(),Xn.style.cursor=""}Xn.addEventListener("pointerleave",()=>{if(rs=null,Ks){let i=Ks;Ks=null,Qs(i),Rn()}od()});var Zs=Ae("#tip");function od(){Zs.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{sd=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),Qp()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{id=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),jc()});Ae("#yaw").oninput=i=>{fe.yaw=+i.target.value*Math.PI/180,Rn()};Ae("#tilt").oninput=i=>{fe.tilt=+i.target.value*Math.PI/180,Rn()};Ae("#zin").onclick=()=>{fe.dist=Bn(fe.dist*.75,6,400),Rn()};Ae("#zout").onclick=()=>{fe.dist=Bn(fe.dist/.75,6,400),Rn()};Ae("#rst").onclick=ad;var $p=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],qe=[],Xp={},hS=i=>Xp[i]||(Xp[i]=new Bs({color:i}));function am(i,t){i.og.children.forEach(e=>e.material=t?hS(t):Zp)}function Qs(i,t=0){let e=i.mat.emissive;i===Ks?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function ld(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let c of i)e=Math.min(e,c.cx-c.size/2),n=Math.max(n,c.cx+c.size/2),s=Math.min(s,c.cy-c.size/2),r=Math.max(r,c.cy+c.size/2);let a=innerWidth/innerHeight,o=Math.tan(Kc*Math.PI/360),l=i.length===1?Bn(i[0].size*3.2+14,14,120):Bn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(fe,{tx:(e+n)/2,ty:(s+r)/2,dist:l,tilt:t,yaw:0}),Rn()}var ws=Ae("#q"),ai=Ae("#list"),Xe=Ae("#mcs");function Qc(i,t=!0){if(ai.style.display="none",ws.value="",!i.sel){qe.length>=6&&om(qe[0].o,!0);let e=new Set(qe.map(s=>s.color)),n=$p.find(s=>!e.has(s))||$p[0];i.sel={o:i,color:n,tint:new oe(n).multiplyScalar(.12)},qe.push(i.sel),am(i,n)}Xe.classList.contains("min")&&po(!1),ho.set(i,performance.now()),Qs(i),t&&ld([i],Math.max(fe.tilt,.9)),Ts()}function om(i,t){let e=qe.indexOf(i.sel);e>=0&&qe.splice(e,1),i.sel=null,am(i,null),Qs(i),Rn(),t||Ts()}function lm(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=qe.map(h=>{let p=1e9,u=-1e9,g=1e9,_=-1e9;for(let E of h.o.rings)for(let f=0;f<E[0].length;f+=2)p=Math.min(p,E[0][f]),u=Math.max(u,E[0][f]),g=Math.min(g,E[0][f+1]),_=Math.max(_,E[0][f+1]);return{x0:p,x1:u,y0:g,y1:_}}),a=Math.max(...r.map(h=>Math.max(h.x1-h.x0,h.y1-h.y0))),o=(Math.min(e,n)-22)/a;qe.forEach((h,p)=>{let u=r[p],g=(u.x0+u.x1)/2,_=(u.y0+u.y1)/2;s.beginPath();for(let E of h.o.rings)for(let f of E)for(let d=0;d<f.length;d+=2){let L=e/2+(f[d]-g)*o,D=n/2-(f[d+1]-_)*o;d?s.lineTo(L,D):s.moveTo(L,D),d===f.length-2&&s.closePath()}s.fillStyle=h.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=h.color,s.stroke()});let l=o/Ky,c=[.5,1,2,5,10,20,50,100].find(h=>h*l>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,c*l,2),s.font="10px system-ui",s.fillText(c+" km",12+c*l,n-8)}function Ts(){if(!qe.length){Xe.innerHTML="",Xe.style.display="none",po(!1);return}if(Xe.style.display="flex",innerWidth<=640){let e=Ae("#inf").getBoundingClientRect().bottom;Xe.style.top=Math.round(e+8)+"px",Xe.style.maxHeight=Math.max(110,Math.min(innerHeight*(Ae("#rc").classList.contains("min")?.7:.4),Ae("#rc").getBoundingClientRect().top-e-16))+"px",Xe.style.width=""}else if(innerHeight<=500){let e=Ae("#inf").getBoundingClientRect().bottom;Xe.style.top=Math.round(e+8)+"px",Xe.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",Xe.style.width="min(290px, 40vw)"}else Xe.style.top="",Xe.style.maxHeight="",Xe.style.width="";let i=qe.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${Gc[s.pr]}</em></div><div class="mb">${as(s.pop)} hab.</div><small>${Wr(s.area)} km\xB2 \xB7 ${Wr(s.pop/s.area)} hab./km\xB2 \xB7 n\xBA ${s.rankP} en poblaci\xF3n</small></div>`}).join("");if(qe.length>1){let e=s=>Math.max(...qe.map(s));if(i+='<div class="cmp"><div class="ct">Comparar <small>arrastra una ficha sobre otra para reordenar</small></div><canvas id="sil"></canvas><small class="sc">Siluetas superpuestas a la misma escala</small>'+[["Habitantes",s=>s.o.pop,as],["Superficie (km\xB2)",s=>s.o.area,Wr],["Densidad (hab./km\xB2)",s=>s.o.pop/s.o.area,Wr]].map(([s,r,a])=>`<div class="cr"><span>${s}</span>${qe.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),qe.length===2){let[s,r]=qe.map(c=>c.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],l=(c,h)=>(c>=h?c/h:h/c).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}</b> tiene ${l(a.pop,o.pop)}\xD7 los habitantes de <b>${o.name}</b> y ocupa ${l(a.area,o.area)}\xD7 ${a.area>=o.area?"su superficie":"menos superficie"}.</small>`}i+="</div>"}Xe.innerHTML=i,Xe.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),om(qe[+e.dataset.x].o)}),Xe.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>ld([qe[+e.dataset.i].o],Math.max(fe.tilt,.9)),e.onmouseenter=()=>{let n=qe[+e.dataset.i].o;ho.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=qe.splice(s,1);qe.splice(r,0,a),Ts();let o=Ae("#sil");o&&o.classList.add("flash")}}});let t=Ae("#sil");t&&lm(t)}ws.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(ws.value);return}let i=Zu(ws.value.trim());if(!i){ai.style.display="none";return}let t=[],e=[];for(let s of rn){let r=Zu(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);ai.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${as(s.pop)}</em></li>`).join("")||'<li class="no">Sin resultados</li>',ai.style.display="block",ai.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>Qc(n[+s.dataset.i])),ai._r=n});ws.addEventListener("keydown",i=>{i.key==="Enter"&&ai._pick?ai._pick(0):i.key==="Enter"&&ai._r&&ai._r[0]&&Qc(ai._r[0]),i.key==="Escape"&&(ws.value="",ai.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==ws&&cm()});var qp=0;addEventListener("resize",()=>{clearTimeout(qp),qp=setTimeout(()=>{let i=Ae("#sil");i&&lm(i)},120)});var Jc=null,nd=Ae("#chip");function uS(i,t,e=.8){Jc={codes:new Set(i.map(n=>n.code)),label:t},rn.forEach(n=>{n.inF=Jc.codes.has(n.code),rd(n)}),nd.innerHTML=`<span>Mostrando: <b>${t}</b> \xB7 ${i.length} municipio${i.length===1?"":"s"}</span><button id="chx" title="Quitar filtro">\xD7</button>`,nd.style.display="flex",Ae("#chx").onclick=cm,jc(),ld(i,e),i.slice(0,40).forEach(n=>ho.set(n,performance.now()))}function cm(){Jc&&(Jc=null,rn.forEach(i=>{i.inF=!0,rd(i)}),nd.style.display="none",jc())}var dS="prov";function fS(i){let t=[...rn].sort((a,o)=>o.pop-a.pop),e=[...rn].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[rn.filter(a=>a.pr===s),jp[s]];if(n==="top")return s==="pop"?[t.slice(0,10),"10 con m\xE1s habitantes"]:[e.slice(0,10),"10 m\xE1s densos"];if(n==="low")return s==="pop"?[t.slice(-10),"10 con menos habitantes"]:[e.slice(-10),"10 menos densos"];if(n==="size")return[rn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${as(+s)} o m\xE1s habitantes`:+s==0?`menos de ${as(+r)} habitantes`:`${as(+s)} \u2013 ${as(+r-1)} habitantes`];if(n==="n50"){let a=0,o=0;for(let l of t)if(a+=l.pop,o++,a>=Ku/2)break;return[t.slice(0,o),"la mitad de la poblaci\xF3n"]}return[[],""]}function pS(i){let[t,e]=fS(i);t.length&&uS(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{dS=i.dataset.tab,Ae("#dbody").scrollTop=0});var js=Ae("#rc"),Xc=Ae("#mcstab");function uo(i){js.classList.toggle("min",i),Ae("#rcgrab span").textContent=i?"Mostrar controles":"Ocultar controles",qe.length&&Ts()}function po(i){Xe.classList.toggle("min",i),Xe.style.transform="",Xe.style.opacity="",Xc.classList.toggle("on",i&&qe.length>0),i&&(Xc.textContent=`\u25B8 ${qe.length} ${qe.length===1?"ficha":"fichas"}`,Xc.style.top=Xe.style.top||"124px")}function cd(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!th.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y;!s.lock&&Math.hypot(o,l)>10&&(s.lock=Math.abs(o)>Math.abs(l)?"x":"y"),s.lock===n&&t&&t(o,l)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y,c=s.lock;s=null,e(c===n?o:0,c===n?l:0,c)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Ae("#rcgrab").onclick=()=>uo(!js.classList.contains("min"));var hm=()=>innerWidth>640;cd(js,{axis:"y",onEnd:(i,t)=>{if(!hm())if(t>40&&!js.classList.contains("min")){let e=Ae("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&uo(!0)}else t<-30&&js.classList.contains("min")&&uo(!1)}});cd(js,{axis:"x",onEnd:i=>{hm()&&(i>50?uo(!0):i<-30&&js.classList.contains("min")&&uo(!1))}});cd(Xe,{axis:"x",onMove:i=>{i<0&&(Xe.classList.add("sw"),Xe.style.transform=`translateX(${i}px)`,Xe.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{Xe.classList.remove("sw"),i<-60?po(!0):(Xe.style.transform="",Xe.style.opacity="")}});Xc.onclick=()=>{po(!1),Ts()};Ae("#dtoggle").onclick=()=>{let i=Ae("#dp").classList.toggle("open");Ae("#rc").classList.toggle("dopen",i),Ae("#dtoggle").textContent=i?th.matches&&innerWidth<=640?"\u2190 Controles":"En directo \u25B4":"En directo: conectar datos de Renfe \u25BE",window.__rodCard&&window.__rodCard()};var th=matchMedia("(max-width:640px), (max-height:500px)");function um(){let i=Ae("#leg");th.matches?Ae("#rc").insertBefore(i,Ae("#dtoggle")):document.body.appendChild(i),qe.length&&Ts()}th.addEventListener("change",um);um();sm();tS();ad();Object.assign(an,fe);for(let i of rn)i.z=.01;requestAnimationFrame(im);kp({scene:Es,camera:Yi,renderer:fo,goal:fe,cur:an,invalidate:Rn,flyTo:(i,t,e,n)=>{Object.assign(fe,{tx:(i-lo)*Xi,ty:(t-co)*Xi,dist:e,tilt:n}),Rn()},K:Xi,CX:lo,CY:co,mcs:Xe,q:ws,list:ai,munis:rn,select:Qc,norm:Zu,fmt:as,clamp:Bn,mcsMin:po});window.__app={scene:Es,renderer:fo,camera:Yi,munis:rn,labs:Yc,goal:fe,cur:an,select:Qc,get mode(){return id}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
