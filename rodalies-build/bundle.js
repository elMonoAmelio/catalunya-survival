(()=>{var jd=0,kh=1,Qd=2;var ka=1,tf=2,Pr=3,_s=0,kn=1,Oi=2,Bi=0,Lr=1,Vh=2,Hh=3,Gh=4,ef=5;var ks=100,nf=101,sf=102,rf=103,af=104,of=200,lf=201,cf=202,hf=203,Wh=204,$h=205,uf=206,df=207,ff=208,pf=209,mf=210,gf=211,_f=212,xf=213,vf=214,Go=0,Wo=1,$o=2,xr=3,Xo=4,qo=5,Yo=6,Zo=7,Pl=0,yf=1,Sf=2,Mi=0,Xh=1,qh=2,Yh=3,Zh=4,Jh=5,Kh=6,jh=7;var Qh=300,xs=301,Vs=302,Ll=303,Dl=304,Va=306,Jo=1e3,Pi=1001,Ko=1002,_n=1003,Mf=1004;var Ha=1005;var Sn=1006,Nl=1007;var vs=1008;var Xn=1009,tu=1010,eu=1011,Dr=1012,Ul=1013,bi=1014,wi=1015,Ei=1016,Fl=1017,Ol=1018,Nr=1020,nu=35902,iu=35899,su=1021,ru=1022,di=1023,Di=1026,ys=1027,au=1028,Bl=1029,Ss=1030,zl=1031;var kl=1033,Ga=33776,Wa=33777,$a=33778,Xa=33779,Vl=35840,Hl=35841,Gl=35842,Wl=35843,$l=36196,Xl=37492,ql=37496,Yl=37488,Zl=37489,qa=37490,Jl=37491,Kl=37808,jl=37809,Ql=37810,tc=37811,ec=37812,nc=37813,ic=37814,sc=37815,rc=37816,ac=37817,oc=37818,lc=37819,cc=37820,hc=37821,uc=36492,dc=36494,fc=36495,pc=36283,mc=36284,Ya=36285,gc=36286;var ca=2300,jo=2301,Vo=2302,Ah=2303,Ch=2400,Rh=2401,Ih=2402;var bf=3200;var _c=0,wf=1,es="",ti="srgb",ha="srgb-linear",ua="linear",ze="srgb";var Ho=7680;var Ef=519,Tf=512,Af=513,Cf=514,xc=515,Rf=516,If=517,vc=518,Pf=519,ou=35044;var lu="300 es",vi=2e3,vr=2001;function pm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function da(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lf(){let i=da("canvas");return i.style.display="block",i}var gd={},yr=null;function fa(...i){let t="THREE."+i.shift();yr?yr("log",t,...i):console.log(t,...i)}function Df(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function oe(...i){i=Df(i);let t="THREE."+i.shift();if(yr)yr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=Df(i);let t="THREE."+i.shift();if(yr)yr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ds(...i){let t=i.join(" ");t in gd||(gd[t]=!0,oe(...i))}function Nf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Uf={[Go]:Wo,[$o]:Yo,[Xo]:Zo,[xr]:qo,[Wo]:Go,[Yo]:$o,[Zo]:Xo,[qo]:xr},Ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_d=1234567,ra=Math.PI/180,Sr=180/Math.PI;function Li(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[e&63|128]+Pn[e>>8&255]+"-"+Pn[e>>16&255]+Pn[e>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function cu(i,t){return(i%t+t)%t}function gm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function _m(i,t,e){return i!==t?(e-i)/(t-i):0}function aa(i,t,e){return(1-e)*i+e*t}function xm(i,t,e,n){return aa(i,t,1-Math.exp(-e*n))}function vm(i,t=1){return t-Math.abs(cu(i,t*2)-t)}function ym(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Sm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Mm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function bm(i,t){return i+Math.random()*(t-i)}function wm(i){return i*(.5-Math.random())}function Em(i){i!==void 0&&(_d=i);let t=_d+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tm(i){return i*ra}function Am(i){return i*Sr}function Cm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Rm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Im(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pm(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),p=r((t-n)/2),u=a((t-n)/2),m=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*p,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*p,o*c);break;case"ZXZ":i.set(l*p,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*m,o*h,o*c);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var hu={DEG2RAD:ra,RAD2DEG:Sr,generateUUID:Li,clamp:me,euclideanModulo:cu,mapLinear:gm,inverseLerp:_m,lerp:aa,damp:xm,pingpong:vm,smoothstep:ym,smootherstep:Sm,randInt:Mm,randFloat:bm,randFloatSpread:wm,seededRandom:Em,degToRad:Tm,radToDeg:Am,isPowerOfTwo:Cm,ceilPowerOfTwo:Rm,floorPowerOfTwo:Im,setQuaternionFromProperEuler:Pm,normalize:Ve,denormalize:xi},Nt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ui=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],u=r[a+0],m=r[a+1],_=r[a+2],w=r[a+3];if(p!==w||l!==u||c!==m||h!==_){let f=l*u+c*m+h*_+p*w;f<0&&(u=-u,m=-m,_=-_,w=-w,f=-f);let d=1-o;if(f<.9995){let I=Math.acos(f),D=Math.sin(I);d=Math.sin(d*I)/D,o=Math.sin(o*I)/D,l=l*d+u*o,c=c*d+m*o,h=h*d+_*o,p=p*d+w*o}else{l=l*d+u*o,c=c*d+m*o,h=h*d+_*o,p=p*d+w*o;let I=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=I,c*=I,h*=I,p*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],u=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+h*p+l*m-c*u,t[e+1]=l*_+h*u+c*p-o*m,t[e+2]=c*_+h*m+o*u-l*p,t[e+3]=h*_-o*p-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),u=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*p+c*m*_,this._y=c*m*p-u*h*_,this._z=c*h*_+u*m*p,this._w=c*h*p-u*m*_;break;case"YXZ":this._x=u*h*p+c*m*_,this._y=c*m*p-u*h*_,this._z=c*h*_-u*m*p,this._w=c*h*p+u*m*_;break;case"ZXY":this._x=u*h*p-c*m*_,this._y=c*m*p+u*h*_,this._z=c*h*_+u*m*p,this._w=c*h*p-u*m*_;break;case"ZYX":this._x=u*h*p-c*m*_,this._y=c*m*p+u*h*_,this._z=c*h*_-u*m*p,this._w=c*h*p+u*m*_;break;case"YZX":this._x=u*h*p+c*m*_,this._y=c*m*p+u*h*_,this._z=c*h*_-u*m*p,this._w=c*h*p-u*m*_;break;case"XZY":this._x=u*h*p-c*m*_,this._y=c*m*p-u*h*_,this._z=c*h*_+u*m*p,this._w=c*h*p+u*m*_;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],u=n+o+p;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return eh.copy(this).projectOnVector(t),this.sub(eh)}reflect(t){return this.sub(eh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eh=new O,xd=new Ui,de=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],u=n[2],m=n[5],_=n[8],w=s[0],f=s[3],d=s[6],I=s[1],D=s[4],b=s[7],M=s[2],R=s[5],F=s[8];return r[0]=a*w+o*I+l*M,r[3]=a*f+o*D+l*R,r[6]=a*d+o*b+l*F,r[1]=c*w+h*I+p*M,r[4]=c*f+h*D+p*R,r[7]=c*d+h*b+p*F,r[2]=u*w+m*I+_*M,r[5]=u*f+m*D+_*R,r[8]=u*d+m*b+_*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*a-o*c,u=o*l-h*r,m=c*r-a*l,_=e*p+n*u+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/_;return t[0]=p*w,t[1]=(s*c-h*n)*w,t[2]=(o*n-s*a)*w,t[3]=u*w,t[4]=(h*e-s*l)*w,t[5]=(s*r-o*e)*w,t[6]=m*w,t[7]=(n*l-c*e)*w,t[8]=(a*e-n*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nh.makeScale(t,e)),this}rotate(t){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nh.makeRotation(-t)),this}translate(t,e){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},nh=new de,vd=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yd=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lm(){let i={enabled:!0,workingColorSpace:ha,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ze&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ze&&(s.r=_r(s.r),s.g=_r(s.g),s.b=_r(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===es?ua:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ha]:{primaries:t,whitePoint:n,transfer:ua,toXYZ:vd,fromXYZ:yd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:t,whitePoint:n,transfer:ze,toXYZ:vd,fromXYZ:yd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),i}var Ie=Lm();function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var nr,Qo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{nr===void 0&&(nr=da("canvas")),nr.width=t.width,nr.height=t.height;let s=nr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=nr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=da("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qi(e[n]/255)*255):e[n]=Qi(e[n]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Dm=0,Mr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ih(s[a].image)):r.push(ih(s[a]))}else r=ih(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ih(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}var Nm=0,sh=new O,Wn=class i extends Ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Pi,s=Pi,r=Sn,a=vs,o=di,l=Xn,c=i.DEFAULT_ANISOTROPY,h=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Li(),this.name="",this.source=new Mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jo:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case Ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jo:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case Ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Qh;Wn.DEFAULT_ANISOTROPY=1;var ke=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],m=l[5],_=l[9],w=l[2],f=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-w)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+w)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let D=(c+1)/2,b=(m+1)/2,M=(d+1)/2,R=(h+u)/4,F=(p+w)/4,v=(_+f)/4;return D>b&&D>M?D<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(D),s=R/n,r=F/n):b>M?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=v/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=F/r,s=v/r),this.set(n,s,r,e),this}let I=Math.sqrt((f-_)*(f-_)+(p-w)*(p-w)+(u-h)*(u-h));return Math.abs(I)<.001&&(I=1),this.x=(f-_)/I,this.y=(p-w)/I,this.z=(u-h)/I,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tl=class extends Ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Wn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Mr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends tl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},pa=class extends Wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var el=class extends Wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var He=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,p,u,m,_,w,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,p,u,m,_,w,f)}set(t,e,n,s,r,a,o,l,c,h,p,u,m,_,w,f){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=m,d[7]=_,d[11]=w,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ir.setFromMatrixColumn(t,0).length(),r=1/ir.setFromMatrixColumn(t,1).length(),a=1/ir.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*p,_=o*h,w=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=m+_*c,e[5]=u-w*c,e[9]=-o*l,e[2]=w-u*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,m=l*p,_=c*h,w=c*p;e[0]=u+w*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=m*o-_,e[6]=w+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,m=l*p,_=c*h,w=c*p;e[0]=u-w*o,e[4]=-a*p,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*h,e[9]=w-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,m=a*p,_=o*h,w=o*p;e[0]=l*h,e[4]=_*c-m,e[8]=u*c+w,e[1]=l*p,e[5]=w*c+u,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*c,_=o*l,w=o*c;e[0]=l*h,e[4]=w-u*p,e[8]=_*p+m,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*p+_,e[10]=u-w*p}else if(t.order==="XZY"){let u=a*l,m=a*c,_=o*l,w=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=u*p+w,e[5]=a*h,e[9]=m*p-_,e[2]=_*p-m,e[6]=o*h,e[10]=w*p+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Um,t,Fm)}lookAt(t,e,n){let s=this.elements;return jn.subVectors(t,e),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),as.crossVectors(n,jn),as.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),as.crossVectors(n,jn)),as.normalize(),mo.crossVectors(jn,as),s[0]=as.x,s[4]=mo.x,s[8]=jn.x,s[1]=as.y,s[5]=mo.y,s[9]=jn.y,s[2]=as.z,s[6]=mo.z,s[10]=jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],u=n[9],m=n[13],_=n[2],w=n[6],f=n[10],d=n[14],I=n[3],D=n[7],b=n[11],M=n[15],R=s[0],F=s[4],v=s[8],C=s[12],V=s[1],G=s[5],tt=s[9],et=s[13],H=s[2],K=s[6],ct=s[10],st=s[14],vt=s[3],rt=s[7],ht=s[11],pt=s[15];return r[0]=a*R+o*V+l*H+c*vt,r[4]=a*F+o*G+l*K+c*rt,r[8]=a*v+o*tt+l*ct+c*ht,r[12]=a*C+o*et+l*st+c*pt,r[1]=h*R+p*V+u*H+m*vt,r[5]=h*F+p*G+u*K+m*rt,r[9]=h*v+p*tt+u*ct+m*ht,r[13]=h*C+p*et+u*st+m*pt,r[2]=_*R+w*V+f*H+d*vt,r[6]=_*F+w*G+f*K+d*rt,r[10]=_*v+w*tt+f*ct+d*ht,r[14]=_*C+w*et+f*st+d*pt,r[3]=I*R+D*V+b*H+M*vt,r[7]=I*F+D*G+b*K+M*rt,r[11]=I*v+D*tt+b*ct+M*ht,r[15]=I*C+D*et+b*st+M*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],m=t[14],_=t[3],w=t[7],f=t[11],d=t[15],I=l*m-c*u,D=o*m-c*p,b=o*u-l*p,M=a*m-c*h,R=a*u-l*h,F=a*p-o*h;return e*(w*I-f*D+d*b)-n*(_*I-f*M+d*R)+s*(_*D-w*M+d*F)-r*(_*b-w*R+f*F)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],m=t[11],_=t[12],w=t[13],f=t[14],d=t[15],I=e*o-n*a,D=e*l-s*a,b=e*c-r*a,M=n*l-s*o,R=n*c-r*o,F=s*c-r*l,v=h*w-p*_,C=h*f-u*_,V=h*d-m*_,G=p*f-u*w,tt=p*d-m*w,et=u*d-m*f,H=I*et-D*tt+b*G+M*V-R*C+F*v;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/H;return t[0]=(o*et-l*tt+c*G)*K,t[1]=(s*tt-n*et-r*G)*K,t[2]=(w*F-f*R+d*M)*K,t[3]=(u*R-p*F-m*M)*K,t[4]=(l*V-a*et-c*C)*K,t[5]=(e*et-s*V+r*C)*K,t[6]=(f*b-_*F-d*D)*K,t[7]=(h*F-u*b+m*D)*K,t[8]=(a*tt-o*V+c*v)*K,t[9]=(n*V-e*tt-r*v)*K,t[10]=(_*R-w*b+d*I)*K,t[11]=(p*b-h*R-m*I)*K,t[12]=(o*C-a*G-l*v)*K,t[13]=(e*G-n*C+s*v)*K,t[14]=(w*D-_*M-f*I)*K,t[15]=(h*M-p*D+u*I)*K,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,p=o+o,u=r*c,m=r*h,_=r*p,w=a*h,f=a*p,d=o*p,I=l*c,D=l*h,b=l*p,M=n.x,R=n.y,F=n.z;return s[0]=(1-(w+d))*M,s[1]=(m+b)*M,s[2]=(_-D)*M,s[3]=0,s[4]=(m-b)*R,s[5]=(1-(u+d))*R,s[6]=(f+I)*R,s[7]=0,s[8]=(_+D)*F,s[9]=(f-I)*F,s[10]=(1-(u+w))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ir.set(s[0],s[1],s[2]).length(),o=ir.set(s[4],s[5],s[6]).length(),l=ir.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pi.copy(this);let c=1/a,h=1/o,p=1/l;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=p,pi.elements[9]*=p,pi.elements[10]*=p,e.setFromRotationMatrix(pi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=vi,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s),_,w;if(l)_=r/(a-r),w=a*r/(a-r);else if(o===vi)_=-(a+r)/(a-r),w=-2*a*r/(a-r);else if(o===vr)_=-a/(a-r),w=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=vi,l=!1){let c=this.elements,h=2/(e-t),p=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s),_,w;if(l)_=1/(a-r),w=a/(a-r);else if(o===vi)_=-2/(a-r),w=-(a+r)/(a-r);else if(o===vr)_=-1/(a-r),w=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ir=new O,pi=new He,Um=new O(0,0,0),Fm=new O(1,1,1),as=new O,mo=new O,jn=new O,Sd=new He,Md=new Ui,ts=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Md.setFromEuler(this),this.setFromQuaternion(Md,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ts.DEFAULT_ORDER="XYZ";var br=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Om=0,bd=new O,sr=new Ui,Yi=new He,go=new O,Qr=new O,Bm=new O,zm=new Ui,wd=new O(1,0,0),Ed=new O(0,1,0),Td=new O(0,0,1),Ad={type:"added"},km={type:"removed"},rr={type:"childadded",child:null},rh={type:"childremoved",child:null},xn=class i extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new ts,n=new Ui,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new de}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return sr.setFromAxisAngle(t,e),this.quaternion.multiply(sr),this}rotateOnWorldAxis(t,e){return sr.setFromAxisAngle(t,e),this.quaternion.premultiply(sr),this}rotateX(t){return this.rotateOnAxis(wd,t)}rotateY(t){return this.rotateOnAxis(Ed,t)}rotateZ(t){return this.rotateOnAxis(Td,t)}translateOnAxis(t,e){return bd.copy(t).applyQuaternion(this.quaternion),this.position.add(bd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wd,t)}translateY(t){return this.translateOnAxis(Ed,t)}translateZ(t){return this.translateOnAxis(Td,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?go.copy(t):go.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Qr,go,this.up):Yi.lookAt(go,Qr,this.up),this.quaternion.setFromRotationMatrix(Yi),s&&(Yi.extractRotation(s.matrixWorld),sr.setFromRotationMatrix(Yi),this.quaternion.premultiply(sr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ad),rr.child=t,this.dispatchEvent(rr),rr.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(km),rh.child=t,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ad),rr.child=t,this.dispatchEvent(rr),rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,t,Bm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,zm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),p=a(t.shapes),u=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xn.DEFAULT_UP=new O(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yi=class extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vm={type:"move"},wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let w of t.hand.values()){let f=e.getJointPose(w,n),d=this._getHandJoint(c,w);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new yi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},_o={h:0,s:0,l:0};function ah(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var le=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ie.workingColorSpace){if(t=cu(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ah(a,r,t+1/3),this.g=ah(a,r,t),this.b=ah(a,r,t-1/3)}return Ie.colorSpaceToWorking(this,s),this}setStyle(t,e=ti){function n(r){r!==void 0&&parseFloat(r)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ti){let n=Ff[t.toLowerCase()];return n!==void 0?this.setHex(n,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ti){return Ie.workingToColorSpace(Ln.copy(this),t),Math.round(me(Ln.r*255,0,255))*65536+Math.round(me(Ln.g*255,0,255))*256+Math.round(me(Ln.b*255,0,255))}getHexString(t=ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.workingToColorSpace(Ln.copy(this),e);let n=Ln.r,s=Ln.g,r=Ln.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ie.workingColorSpace){return Ie.workingToColorSpace(Ln.copy(this),e),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=ti){Ie.workingToColorSpace(Ln.copy(this),t);let e=Ln.r,n=Ln.g,s=Ln.b;return t!==ti?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(os),this.setHSL(os.h+t,os.s+e,os.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(os),t.getHSL(_o);let n=aa(os.h,_o.h,e),s=aa(os.s,_o.s,e),r=aa(os.l,_o.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new le;le.NAMES=Ff;var ma=class extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ts,this.environmentIntensity=1,this.environmentRotation=new ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},mi=new O,Zi=new O,oh=new O,Ji=new O,ar=new O,or=new O,Cd=new O,lh=new O,ch=new O,hh=new O,uh=new ke,dh=new ke,fh=new ke,us=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mi.subVectors(t,e),s.cross(mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mi.subVectors(s,e),Zi.subVectors(n,e),oh.subVectors(t,e);let a=mi.dot(mi),o=mi.dot(Zi),l=mi.dot(oh),c=Zi.dot(Zi),h=Zi.dot(oh),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,m=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ji.x),l.addScaledVector(a,Ji.y),l.addScaledVector(o,Ji.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return uh.setScalar(0),dh.setScalar(0),fh.setScalar(0),uh.fromBufferAttribute(t,e),dh.fromBufferAttribute(t,n),fh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(uh,r.x),a.addScaledVector(dh,r.y),a.addScaledVector(fh,r.z),a}static isFrontFacing(t,e,n,s){return mi.subVectors(n,e),Zi.subVectors(t,e),mi.cross(Zi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),mi.cross(Zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ar.subVectors(s,n),or.subVectors(r,n),lh.subVectors(t,n);let l=ar.dot(lh),c=or.dot(lh);if(l<=0&&c<=0)return e.copy(n);ch.subVectors(t,s);let h=ar.dot(ch),p=or.dot(ch);if(h>=0&&p<=h)return e.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ar,a);hh.subVectors(t,r);let m=ar.dot(hh),_=or.dot(hh);if(_>=0&&m<=_)return e.copy(r);let w=m*c-l*_;if(w<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(or,o);let f=h*_-m*p;if(f<=0&&p-h>=0&&m-_>=0)return Cd.subVectors(r,s),o=(p-h)/(p-h+(m-_)),e.copy(s).addScaledVector(Cd,o);let d=1/(f+w+u);return a=w*d,o=u*d,e.copy(n).addScaledVector(ar,a).addScaledVector(or,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ei=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gi):gi.fromBufferAttribute(r,a),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xo.copy(n.boundingBox)),xo.applyMatrix4(t.matrixWorld),this.union(xo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ta),vo.subVectors(this.max,ta),lr.subVectors(t.a,ta),cr.subVectors(t.b,ta),hr.subVectors(t.c,ta),ls.subVectors(cr,lr),cs.subVectors(hr,cr),Cs.subVectors(lr,hr);let e=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Cs.z,Cs.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Cs.z,0,-Cs.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Cs.y,Cs.x,0];return!ph(e,lr,cr,hr,vo)||(e=[1,0,0,0,1,0,0,0,1],!ph(e,lr,cr,hr,vo))?!1:(yo.crossVectors(ls,cs),e=[yo.x,yo.y,yo.z],ph(e,lr,cr,hr,vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ki=[new O,new O,new O,new O,new O,new O,new O,new O],gi=new O,xo=new ei,lr=new O,cr=new O,hr=new O,ls=new O,cs=new O,Cs=new O,ta=new O,vo=new O,yo=new O,Rs=new O;function ph(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Rs.fromArray(i,r);let o=s.x*Math.abs(Rs.x)+s.y*Math.abs(Rs.y)+s.z*Math.abs(Rs.z),l=t.dot(Rs),c=e.dot(Rs),h=n.dot(Rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ln=new O,So=new Nt,Hm=0,Xe=class extends Ni{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ou,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)So.fromBufferAttribute(this,e),So.applyMatrix3(t),this.setXY(e,So.x,So.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix3(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ga=class extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _a=class extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var un=class extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Gm=new ei,ea=new O,mh=new O,ui=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ea.subVectors(t,this.center);let e=ea.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ea,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ea.copy(t.center).add(mh)),this.expandByPoint(ea.copy(t.center).sub(mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Wm=0,hi=new He,gh=new xn,ur=new O,Qn=new ei,na=new ei,gn=new O,rn=class i extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pm(t)?_a:ga)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new de().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,e,n){return hi.makeTranslation(t,e,n),this.applyMatrix4(hi),this}scale(t,e,n){return hi.makeScale(t,e,n),this.applyMatrix4(hi),this}lookAt(t){return gh.lookAt(t),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new un(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];na.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(Qn.min,na.min),Qn.expandByPoint(gn),gn.addVectors(Qn.max,na.max),Qn.expandByPoint(gn)):(Qn.expandByPoint(na.min),Qn.expandByPoint(na.max))}Qn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)gn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(gn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)gn.fromBufferAttribute(o,c),l&&(ur.fromBufferAttribute(t,c),gn.add(ur)),s=Math.max(s,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Xe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new O,l[v]=new O;let c=new O,h=new O,p=new O,u=new Nt,m=new Nt,_=new Nt,w=new O,f=new O;function d(v,C,V){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,C),p.fromBufferAttribute(n,V),u.fromBufferAttribute(r,v),m.fromBufferAttribute(r,C),_.fromBufferAttribute(r,V),h.sub(c),p.sub(c),m.sub(u),_.sub(u);let G=1/(m.x*_.y-_.x*m.y);isFinite(G)&&(w.copy(h).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(G),f.copy(p).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(G),o[v].add(w),o[C].add(w),o[V].add(w),l[v].add(f),l[C].add(f),l[V].add(f))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let v=0,C=I.length;v<C;++v){let V=I[v],G=V.start,tt=V.count;for(let et=G,H=G+tt;et<H;et+=3)d(t.getX(et+0),t.getX(et+1),t.getX(et+2))}let D=new O,b=new O,M=new O,R=new O;function F(v){M.fromBufferAttribute(s,v),R.copy(M);let C=o[v];D.copy(C),D.sub(M.multiplyScalar(M.dot(C))).normalize(),b.crossVectors(R,C);let G=b.dot(l[v])<0?-1:1;a.setXYZW(v,D.x,D.y,D.z,G)}for(let v=0,C=I.length;v<C;++v){let V=I[v],G=V.start,tt=V.count;for(let et=G,H=G+tt;et<H;et+=3)F(t.getX(et+0)),F(t.getX(et+1)),F(t.getX(et+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,p=new O;if(t)for(let u=0,m=t.count;u<m;u+=3){let _=t.getX(u+0),w=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,w),a.fromBufferAttribute(e,f),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)gn.fromBufferAttribute(t,e),gn.normalize(),t.setXYZ(e,gn.x,gn.y,gn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),m=0,_=0;for(let w=0,f=l.length;w<f;w++){o.isInterleavedBufferAttribute?m=l[w]*o.data.stride+o.offset:m=l[w]*h;for(let d=0;d<h;d++)u[_++]=c[m++]}return new Xe(u,h,p)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let m=c[p];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let u=0,m=p.length;u<m;u++)h.push(p[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},nl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ou,this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},zn=new O,Si=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.applyMatrix4(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.applyNormalMatrix(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.transformDirection(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){fa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){fa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_h=new O,$m=new O,Xm=new de,_i=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=_h.subVectors(n,e).cross($m.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(_h),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Xm.getNormalMatrix(t),s=this.coplanarPoint(_h).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},qm=0,Fi=class extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=Lr,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=$h,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ho,this.stencilZFail=Ho,this.stencilZPass=Ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new le().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new _i().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ji=new O,xh=new O,Mo=new O,bo=new O,Ns=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,e),ji.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xh.copy(t).add(e).multiplyScalar(.5),Mo.copy(e).sub(t).normalize(),bo.copy(this.origin).sub(xh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Mo),o=bo.dot(this.direction),l=-bo.dot(Mo),c=bo.lengthSq(),h=Math.abs(1-a*a),p,u,m,_;if(h>0)if(p=a*l-o,u=a*o-l,_=r*h,p>=0)if(u>=-_)if(u<=_){let w=1/h;p*=w,u*=w,m=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(xh).addScaledVector(Mo,u),m}intersectSphere(t,e){if(t.radius<0)return null;ji.subVectors(t.center,this.origin);let n=ji.dot(this.direction),s=ji.dot(ji)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-a.x,u=t.y-a.y,m=t.z-a.z,_=e.x-a.x,w=e.y-a.y,f=e.z-a.z,d=n.x-a.x,I=n.y-a.y,D=n.z-a.z,b=Math.abs(l),M=Math.abs(c),R=Math.abs(h),F,v,C,V,G,tt,et,H,K,ct,st,vt;if(b>=M&&b>=R?(C=l,tt=p,K=_,vt=d,l>=0?(F=c,v=h,V=u,G=m,et=w,H=f,ct=I,st=D):(F=h,v=c,V=m,G=u,et=f,H=w,ct=D,st=I)):M>=R?(C=c,tt=u,K=w,vt=I,c>=0?(F=h,v=l,V=m,G=p,et=f,H=_,ct=D,st=d):(F=l,v=h,V=p,G=m,et=_,H=f,ct=d,st=D)):(C=h,tt=m,K=f,vt=D,h>=0?(F=l,v=c,V=p,G=u,et=_,H=w,ct=d,st=I):(F=c,v=l,V=u,G=p,et=w,H=_,ct=I,st=d)),C===0)return null;let rt=F/C,ht=v/C,pt=1/C,Kt=V-rt*tt,Ht=G-ht*tt,Le=et-rt*K,ye=H-ht*K,Ae=ct-rt*vt,nt=st-ht*vt,ut=Ae*ye-nt*Le,Dt=Kt*nt-Ht*Ae,ie=Le*Ht-ye*Kt;if(s){if(ut<0||Dt<0||ie<0)return null}else if((ut<0||Dt<0||ie<0)&&(ut>0||Dt>0||ie>0))return null;let Rt=ut+Dt+ie;if(Rt===0)return null;let Wt=pt*(ut*tt+Dt*K+ie*vt);return(Rt>0?Wt<0:Wt>0)?null:this.at(Wt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xa=class extends Fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Rd=new He,Is=new Ns,wo=new ui,Id=new O,Eo=new O,To=new O,Ao=new O,vh=new O,Co=new O,Pd=new O,Ro=new O,Nn=class extends xn{constructor(t=new rn,e=new xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(vh.fromBufferAttribute(p,t),a?Co.addScaledVector(vh,h):Co.addScaledVector(vh.sub(e),h))}e.add(Co)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),Is.copy(t.ray).recast(t.near),!(wo.containsPoint(Is.origin)===!1&&(Is.intersectSphere(wo,Id)===null||Is.origin.distanceToSquared(Id)>(t.far-t.near)**2))&&(Rd.copy(r).invert(),Is.copy(t.ray).applyMatrix4(Rd),!(n.boundingBox!==null&&Is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Is)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,w=u.length;_<w;_++){let f=u[_],d=a[f.materialIndex],I=Math.max(f.start,m.start),D=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let b=I,M=D;b<M;b+=3){let R=o.getX(b),F=o.getX(b+1),v=o.getX(b+2);s=Io(this,d,t,n,c,h,p,R,F,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),w=Math.min(o.count,m.start+m.count);for(let f=_,d=w;f<d;f+=3){let I=o.getX(f),D=o.getX(f+1),b=o.getX(f+2);s=Io(this,a,t,n,c,h,p,I,D,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,w=u.length;_<w;_++){let f=u[_],d=a[f.materialIndex],I=Math.max(f.start,m.start),D=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let b=I,M=D;b<M;b+=3){let R=b,F=b+1,v=b+2;s=Io(this,d,t,n,c,h,p,R,F,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),w=Math.min(l.count,m.start+m.count);for(let f=_,d=w;f<d;f+=3){let I=f,D=f+1,b=f+2;s=Io(this,a,t,n,c,h,p,I,D,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function Ym(i,t,e,n,s,r,a,o){let l;if(t.side===kn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===_s,o),l===null)return null;Ro.copy(o),Ro.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ro);return c<e.near||c>e.far?null:{distance:c,point:Ro.clone(),object:i}}function Io(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Eo),i.getVertexPosition(l,To),i.getVertexPosition(c,Ao);let h=Ym(i,t,e,n,Eo,To,Ao,Pd);if(h){let p=new O;us.getBarycoord(Pd,Eo,To,Ao,p),s&&(h.uv=us.getInterpolatedAttribute(s,o,l,c,p,new Nt)),r&&(h.uv1=us.getInterpolatedAttribute(r,o,l,c,p,new Nt)),a&&(h.normal=us.getInterpolatedAttribute(a,o,l,c,p,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new O,materialIndex:0};us.getNormal(Eo,To,Ao,u.normal),h.face=u,h.barycoord=p}return h}var il=class extends Wn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=_n,h=_n,p,u){super(null,a,o,l,c,h,s,r,p,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ps=new ui,Zm=new Nt(.5,.5),Po=new O,Er=class{constructor(t=new _i,e=new _i,n=new _i,s=new _i,r=new _i,a=new _i){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vi,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],u=r[6],m=r[7],_=r[8],w=r[9],f=r[10],d=r[11],I=r[12],D=r[13],b=r[14],M=r[15];if(s[0].setComponents(c-a,m-h,d-_,M-I).normalize(),s[1].setComponents(c+a,m+h,d+_,M+I).normalize(),s[2].setComponents(c+o,m+p,d+w,M+D).normalize(),s[3].setComponents(c-o,m-p,d-w,M-D).normalize(),n)s[4].setComponents(l,u,f,b).normalize(),s[5].setComponents(c-l,m-u,d-f,M-b).normalize();else if(s[4].setComponents(c-l,m-u,d-f,M-b).normalize(),e===vi)s[5].setComponents(c+l,m+u,d+f,M+b).normalize();else if(e===vr)s[5].setComponents(l,u,f,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(t){Ps.center.set(0,0,0);let e=Zm.distanceTo(t.center);return Ps.radius=.7071067811865476+e,Ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Po.x=s.normal.x>0?t.max.x:t.min.x,Po.y=s.normal.y>0?t.max.y:t.min.y,Po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Us=class extends Fi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},sl=new O,rl=new O,Ld=new He,ia=new Ns,Lo=new ui,yh=new O,Dd=new O,al=class extends xn{constructor(t=new rn,e=new Us){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)sl.fromBufferAttribute(e,s-1),rl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=sl.distanceTo(rl);t.setAttribute("lineDistance",new un(n,1))}else oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(s),Lo.radius+=r,t.ray.intersectsSphere(Lo)===!1)return;Ld.copy(s).invert(),ia.copy(t.ray).applyMatrix4(Ld);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let w=m,f=_-1;w<f;w+=c){let d=h.getX(w),I=h.getX(w+1),D=Do(this,t,ia,l,d,I,w);D&&e.push(D)}if(this.isLineLoop){let w=h.getX(_-1),f=h.getX(m),d=Do(this,t,ia,l,w,f,_-1);d&&e.push(d)}}else{let m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let w=m,f=_-1;w<f;w+=c){let d=Do(this,t,ia,l,w,w+1,w);d&&e.push(d)}if(this.isLineLoop){let w=Do(this,t,ia,l,_-1,m,_-1);w&&e.push(w)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Do(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(sl.fromBufferAttribute(o,s),rl.fromBufferAttribute(o,r),e.distanceSqToSegment(sl,rl,yh,Dd)>n)return;yh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(yh);if(!(c<t.near||c>t.far))return{distance:c,point:Dd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var va=class extends al{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},ol=class extends Fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Nd=new He,Ph=new Ns,No=new ui,Uo=new O,Fs=class extends xn{constructor(t=new rn,e=new ol){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),No.radius+=r,t.ray.intersectsSphere(No)===!1)return;Nd.copy(s).invert(),Ph.copy(t.ray).applyMatrix4(Nd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=u,w=m;_<w;_++){let f=c.getX(_);Uo.fromBufferAttribute(p,f),Ud(Uo,f,l,s,t,e,this)}}else{let u=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let _=u,w=m;_<w;_++)Uo.fromBufferAttribute(p,_),Ud(Uo,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ud(i,t,e,n,s,r,a){let o=Ph.distanceSqToPoint(i);if(o<e){let l=new O;Ph.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ya=class extends Wn{constructor(t=[],e=xs,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ds=class extends Wn{constructor(t,e,n=bi,s,r,a,o=_n,l=_n,c,h=Di,p=1){if(h!==Di&&h!==ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:p};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Mr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ll=class extends ds{constructor(t,e=bi,n=xs,s,r,a=_n,o=_n,l,c=Di){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Sa=class extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Tr=class i extends rn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],u=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(h,3)),this.setAttribute("uv",new un(p,2));function _(w,f,d,I,D,b,M,R,F,v,C){let V=b/F,G=M/v,tt=b/2,et=M/2,H=R/2,K=F+1,ct=v+1,st=0,vt=0,rt=new O;for(let ht=0;ht<ct;ht++){let pt=ht*G-et;for(let Kt=0;Kt<K;Kt++){let Ht=Kt*V-tt;rt[w]=Ht*I,rt[f]=pt*D,rt[d]=H,c.push(rt.x,rt.y,rt.z),rt[w]=0,rt[f]=0,rt[d]=R>0?1:-1,h.push(rt.x,rt.y,rt.z),p.push(Kt/F),p.push(1-ht/v),st+=1}}for(let ht=0;ht<v;ht++)for(let pt=0;pt<F;pt++){let Kt=u+pt+K*ht,Ht=u+pt+K*(ht+1),Le=u+(pt+1)+K*(ht+1),ye=u+(pt+1)+K*ht;l.push(Kt,Ht,ye),l.push(Ht,Le,ye),vt+=6}o.addGroup(m,vt,C),m+=vt,u+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){oe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,m=(a-h)/u;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Nt:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new O,s=[],r=[],a=[],o=new O,l=new He;for(let m=0;m<=t;m++){let _=m/t;s[m]=this.getTangentAt(_,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(me(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(me(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],m*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ar=class extends ni{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*h-m*p+this.aX,c=u*p+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},cl=class extends Ar{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function uu(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+p)+(l-o)/p;u*=h,m*=h,s(a,o,u,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Fd=new O,Od=new O,Sh=new uu,Mh=new uu,bh=new uu,hl=class extends ni{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Od.subVectors(s[0],s[1]).add(s[0]),c=Od);let p=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Fd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fd),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(p),m),w=Math.pow(p.distanceToSquared(u),m),f=Math.pow(u.distanceToSquared(h),m);w<1e-4&&(w=1),_<1e-4&&(_=w),f<1e-4&&(f=w),Sh.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,_,w,f),Mh.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,_,w,f),bh.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,_,w,f)}else this.curveType==="catmullrom"&&(Sh.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),Mh.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),bh.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return n.set(Sh.calc(l),Mh.calc(l),bh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Bd(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Jm(i,t){let e=1-i;return e*e*t}function Km(i,t){return 2*(1-i)*i*t}function jm(i,t){return i*i*t}function oa(i,t,e,n){return Jm(i,t)+Km(i,e)+jm(i,n)}function Qm(i,t){let e=1-i;return e*e*e*t}function tg(i,t){let e=1-i;return 3*e*e*i*t}function eg(i,t){return 3*(1-i)*i*i*t}function ng(i,t){return i*i*i*t}function la(i,t,e,n,s){return Qm(i,t)+tg(i,e)+eg(i,n)+ng(i,s)}var Ma=class extends ni{constructor(t=new Nt,e=new Nt,n=new Nt,s=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(la(t,s.x,r.x,a.x,o.x),la(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ul=class extends ni{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(la(t,s.x,r.x,a.x,o.x),la(t,s.y,r.y,a.y,o.y),la(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ba=class extends ni{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dl=class extends ni{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wa=class extends ni{constructor(t=new Nt,e=new Nt,n=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(oa(t,s.x,r.x,a.x),oa(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fl=class extends ni{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(oa(t,s.x,r.x,a.x),oa(t,s.y,r.y,a.y),oa(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ea=class extends ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(Bd(o,l.x,c.x,h.x,p.x),Bd(o,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Nt().fromArray(s))}return this}},Lh=Object.freeze({__proto__:null,ArcCurve:cl,CatmullRomCurve3:hl,CubicBezierCurve:Ma,CubicBezierCurve3:ul,EllipseCurve:Ar,LineCurve:ba,LineCurve3:dl,QuadraticBezierCurve:wa,QuadraticBezierCurve3:fl,SplineCurve:Ea}),pl=class extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Lh[s.type]().fromJSON(s))}return this}},Os=class extends pl{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ba(this.currentPoint.clone(),new Nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new wa(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ma(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s),new Nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ea(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Ar(t,e,n,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Cr=class extends Os{constructor(t){super(t),this.uuid=Li(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Os().fromJSON(s))}return this}};function ig(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Of(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=lg(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,p=l;for(let u=e;u<s;u+=e){let m=i[u],_=i[u+1];m<o&&(o=m),_<l&&(l=_),m>h&&(h=m),_>p&&(p=_)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return Ta(r,a,e,o,l,c,0),a}function Of(i,t,e,n,s){let r;if(s===vg(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=zd(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=zd(a/n|0,i[a],i[a+1],r);return r&&Rr(r,r.next)&&(Ca(r),r=r.next),r}function Bs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Rr(e,e.next)||Qe(e.prev,e,e.next)===0)){if(Ca(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ta(i,t,e,n,s,r,a){if(!i)return;!a&&r&&fg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?rg(i,n,s,r):sg(i)){t.push(l.i,i.i,c.i),Ca(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=ag(Bs(i),t),Ta(i,t,e,n,s,r,2)):a===2&&og(i,t,e,n,s,r):Ta(Bs(i),t,e,n,s,r,1);break}}}function sg(i){let t=i.prev,e=i,n=i.next;if(Qe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),p=Math.min(o,l,c),u=Math.max(s,r,a),m=Math.max(o,l,c),_=n.next;for(;_!==t;){if(_.x>=h&&_.x<=u&&_.y>=p&&_.y<=m&&sa(s,o,r,l,a,c,_.x,_.y)&&Qe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function rg(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Qe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,p=r.y,u=a.y,m=Math.min(o,l,c),_=Math.min(h,p,u),w=Math.max(o,l,c),f=Math.max(h,p,u),d=Dh(m,_,t,e,n),I=Dh(w,f,t,e,n),D=i.prevZ,b=i.nextZ;for(;D&&D.z>=d&&b&&b.z<=I;){if(D.x>=m&&D.x<=w&&D.y>=_&&D.y<=f&&D!==s&&D!==a&&sa(o,h,l,p,c,u,D.x,D.y)&&Qe(D.prev,D,D.next)>=0||(D=D.prevZ,b.x>=m&&b.x<=w&&b.y>=_&&b.y<=f&&b!==s&&b!==a&&sa(o,h,l,p,c,u,b.x,b.y)&&Qe(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;D&&D.z>=d;){if(D.x>=m&&D.x<=w&&D.y>=_&&D.y<=f&&D!==s&&D!==a&&sa(o,h,l,p,c,u,D.x,D.y)&&Qe(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;b&&b.z<=I;){if(b.x>=m&&b.x<=w&&b.y>=_&&b.y<=f&&b!==s&&b!==a&&sa(o,h,l,p,c,u,b.x,b.y)&&Qe(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ag(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Rr(n,s)&&zf(n,e,e.next,s)&&Aa(n,s)&&Aa(s,n)&&(t.push(n.i,e.i,s.i),Ca(e),Ca(e.next),e=i=s),e=e.next}while(e!==i);return Bs(e)}function og(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&gg(a,o)){let l=kf(a,o);a=Bs(a,a.next),l=Bs(l,l.next),Ta(a,t,e,n,s,r,0),Ta(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function lg(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Of(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(mg(c))}s.sort(cg);for(let r=0;r<s.length;r++)e=hg(s[r],e);return e}function cg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function hg(i,t){let e=ug(i,t);if(!e)return t;let n=kf(e,i);return Bs(n,n.next),Bs(e,e.next)}function ug(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Rr(i,e))return e;do{if(Rr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Bf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);Aa(e,i)&&(p<h||p===h&&(e.x>a.x||e.x===a.x&&dg(a,e)))&&(a=e,h=p)}e=e.next}while(e!==o);return a}function dg(i,t){return Qe(i.prev,i,t.prev)<0&&Qe(t.next,i,i.next)<0}function fg(i,t,e,n){let s=i;do s.z===0&&(s.z=Dh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,pg(s)}function pg(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Dh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function mg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Bf(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function sa(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Bf(i,t,e,n,s,r,a,o)}function gg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!_g(i,t)&&(Aa(i,t)&&Aa(t,i)&&xg(i,t)&&(Qe(i.prev,i,t.prev)||Qe(i,t.prev,t))||Rr(i,t)&&Qe(i.prev,i,i.next)>0&&Qe(t.prev,t,t.next)>0)}function Qe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Rr(i,t){return i.x===t.x&&i.y===t.y}function zf(i,t,e,n){let s=Oo(Qe(i,t,e)),r=Oo(Qe(i,t,n)),a=Oo(Qe(e,n,i)),o=Oo(Qe(e,n,t));return!!(s!==r&&a!==o||s===0&&Fo(i,e,t)||r===0&&Fo(i,n,t)||a===0&&Fo(e,i,n)||o===0&&Fo(e,t,n))}function Fo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Oo(i){return i>0?1:i<0?-1:0}function _g(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&zf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Aa(i,t){return Qe(i.prev,i,i.next)<0?Qe(i,t,i.next)>=0&&Qe(i,i.prev,t)>=0:Qe(i,t,i.prev)<0||Qe(i,i.next,t)<0}function xg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function kf(i,t){let e=Nh(i.i,i.x,i.y),n=Nh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function zd(i,t,e,n){let s=Nh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ca(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Uh=class{static triangulate(t,e,n=2){return ig(t,e,n)}},Ls=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];kd(t),Vd(n,t);let a=t.length;e.forEach(kd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Vd(n,e[l]);let o=Uh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function kd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Vd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ra=class i extends rn{constructor(t=new Cr([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new un(s,3)),this.setAttribute("uv",new un(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:m-.1,w=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,I=e.UVGenerator!==void 0?e.UVGenerator:yg,D,b=!1,M,R,F,v;if(d){D=d.getSpacedPoints(h),b=!0,u=!1;let U=d.isCatmullRomCurve3?d.closed:!1;M=d.computeFrenetFrames(h,U),R=new O,F=new O,v=new O}u||(f=0,m=0,_=0,w=0);let C=o.extractPoints(c),V=C.shape,G=C.holes;if(!Ls.isClockWise(V)){V=V.reverse();for(let U=0,mt=G.length;U<mt;U++){let bt=G[U];Ls.isClockWise(bt)&&(G[U]=bt.reverse())}}function et(U){let bt=10000000000000001e-36,Mt=U[0];for(let wt=1;wt<=U.length;wt++){let ne=wt%U.length,te=U[ne],kt=te.x-Mt.x,he=te.y-Mt.y,B=kt*kt+he*he,Ue=Math.max(Math.abs(te.x),Math.abs(te.y),Math.abs(Mt.x),Math.abs(Mt.y)),_e=bt*Ue*Ue;if(B<=_e){U.splice(ne,1),wt--;continue}Mt=te}}et(V),G.forEach(et);let H=G.length,K=V;for(let U=0;U<H;U++){let mt=G[U];V=V.concat(mt)}function ct(U,mt,bt){return mt||ce("ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(mt,bt)}let st=V.length;function vt(U,mt,bt){let Mt,wt,ne,te=U.x-mt.x,kt=U.y-mt.y,he=bt.x-U.x,B=bt.y-U.y,Ue=te*te+kt*kt,_e=te*B-kt*he;if(Math.abs(_e)>Number.EPSILON){let T=Math.sqrt(Ue),x=Math.sqrt(he*he+B*B),$=mt.x-kt/T,j=mt.y+te/T,ot=bt.x-B/x,Et=bt.y+he/x,At=((ot-$)*B-(Et-j)*he)/(te*B-kt*he);Mt=$+te*At-U.x,wt=j+kt*At-U.y;let lt=Mt*Mt+wt*wt;if(lt<=2)return new Nt(Mt,wt);ne=Math.sqrt(lt/2)}else{let T=!1;te>Number.EPSILON?he>Number.EPSILON&&(T=!0):te<-Number.EPSILON?he<-Number.EPSILON&&(T=!0):Math.sign(kt)===Math.sign(B)&&(T=!0),T?(Mt=-kt,wt=te,ne=Math.sqrt(Ue)):(Mt=te,wt=kt,ne=Math.sqrt(Ue/2))}return new Nt(Mt/ne,wt/ne)}let rt=[];for(let U=0,mt=K.length,bt=mt-1,Mt=U+1;U<mt;U++,bt++,Mt++)bt===mt&&(bt=0),Mt===mt&&(Mt=0),rt[U]=vt(K[U],K[bt],K[Mt]);let ht=[],pt,Kt=rt.concat();for(let U=0,mt=H;U<mt;U++){let bt=G[U];pt=[];for(let Mt=0,wt=bt.length,ne=wt-1,te=Mt+1;Mt<wt;Mt++,ne++,te++)ne===wt&&(ne=0),te===wt&&(te=0),pt[Mt]=vt(bt[Mt],bt[ne],bt[te]);ht.push(pt),Kt=Kt.concat(pt)}let Ht;if(f===0)Ht=Ls.triangulateShape(K,G);else{let U=[],mt=[];for(let bt=0;bt<f;bt++){let Mt=bt/f,wt=m*Math.cos(Mt*Math.PI/2),ne=_*Math.sin(Mt*Math.PI/2)+w;for(let te=0,kt=K.length;te<kt;te++){let he=ct(K[te],rt[te],ne);Dt(he.x,he.y,-wt),Mt===0&&U.push(he)}for(let te=0,kt=H;te<kt;te++){let he=G[te];pt=ht[te];let B=[];for(let Ue=0,_e=he.length;Ue<_e;Ue++){let T=ct(he[Ue],pt[Ue],ne);Dt(T.x,T.y,-wt),Mt===0&&B.push(T)}Mt===0&&mt.push(B)}}Ht=Ls.triangulateShape(U,mt)}let Le=Ht.length,ye=_+w;for(let U=0;U<st;U++){let mt=u?ct(V[U],Kt[U],ye):V[U];b?(F.copy(M.normals[0]).multiplyScalar(mt.x),R.copy(M.binormals[0]).multiplyScalar(mt.y),v.copy(D[0]).add(F).add(R),Dt(v.x,v.y,v.z)):Dt(mt.x,mt.y,0)}for(let U=1;U<=h;U++)for(let mt=0;mt<st;mt++){let bt=u?ct(V[mt],Kt[mt],ye):V[mt];b?(F.copy(M.normals[U]).multiplyScalar(bt.x),R.copy(M.binormals[U]).multiplyScalar(bt.y),v.copy(D[U]).add(F).add(R),Dt(v.x,v.y,v.z)):Dt(bt.x,bt.y,p/h*U)}for(let U=f-1;U>=0;U--){let mt=U/f,bt=m*Math.cos(mt*Math.PI/2),Mt=_*Math.sin(mt*Math.PI/2)+w;for(let wt=0,ne=K.length;wt<ne;wt++){let te=ct(K[wt],rt[wt],Mt);Dt(te.x,te.y,p+bt)}for(let wt=0,ne=G.length;wt<ne;wt++){let te=G[wt];pt=ht[wt];for(let kt=0,he=te.length;kt<he;kt++){let B=ct(te[kt],pt[kt],Mt);b?Dt(B.x,B.y+D[h-1].y,D[h-1].x+bt):Dt(B.x,B.y,p+bt)}}}Ae(),nt();function Ae(){let U=s.length/3;if(u){let mt=0,bt=st*mt;for(let Mt=0;Mt<Le;Mt++){let wt=Ht[Mt];ie(wt[2]+bt,wt[1]+bt,wt[0]+bt)}mt=h+f*2,bt=st*mt;for(let Mt=0;Mt<Le;Mt++){let wt=Ht[Mt];ie(wt[0]+bt,wt[1]+bt,wt[2]+bt)}}else{for(let mt=0;mt<Le;mt++){let bt=Ht[mt];ie(bt[2],bt[1],bt[0])}for(let mt=0;mt<Le;mt++){let bt=Ht[mt];ie(bt[0]+st*h,bt[1]+st*h,bt[2]+st*h)}}n.addGroup(U,s.length/3-U,0)}function nt(){let U=s.length/3,mt=0;ut(K,mt),mt+=K.length;for(let bt=0,Mt=G.length;bt<Mt;bt++){let wt=G[bt];ut(wt,mt),mt+=wt.length}n.addGroup(U,s.length/3-U,1)}function ut(U,mt){let bt=U.length;for(;--bt>=0;){let Mt=bt,wt=bt-1;wt<0&&(wt=U.length-1);for(let ne=0,te=h+f*2;ne<te;ne++){let kt=st*ne,he=st*(ne+1),B=mt+Mt+kt,Ue=mt+wt+kt,_e=mt+wt+he,T=mt+Mt+he;Rt(B,Ue,_e,T)}}}function Dt(U,mt,bt){l.push(U),l.push(mt),l.push(bt)}function ie(U,mt,bt){Wt(U),Wt(mt),Wt(bt);let Mt=s.length/3,wt=I.generateTopUV(n,s,Mt-3,Mt-2,Mt-1);De(wt[0]),De(wt[1]),De(wt[2])}function Rt(U,mt,bt,Mt){Wt(U),Wt(mt),Wt(Mt),Wt(mt),Wt(bt),Wt(Mt);let wt=s.length/3,ne=I.generateSideWallUV(n,s,wt-6,wt-3,wt-2,wt-1);De(ne[0]),De(ne[1]),De(ne[3]),De(ne[1]),De(ne[2]),De(ne[3])}function Wt(U){s.push(l[U*3+0]),s.push(l[U*3+1]),s.push(l[U*3+2])}function De(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Sg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Lh[s.type]().fromJSON(s)),new i(n,t.options)}},yg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Nt(r,a),new Nt(o,l),new Nt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],u=t[s*3],m=t[s*3+1],_=t[s*3+2],w=t[r*3],f=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Nt(a,1-l),new Nt(c,1-p),new Nt(u,1-_),new Nt(w,1-d)]:[new Nt(o,1-l),new Nt(h,1-p),new Nt(m,1-_),new Nt(f,1-d)]}};function Sg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ia=class i extends rn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=t/o,u=e/l,m=[],_=[],w=[],f=[];for(let d=0;d<h;d++){let I=d*u-a;for(let D=0;D<c;D++){let b=D*p-r;_.push(b,-I,0),w.push(0,0,1),f.push(D/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let I=0;I<o;I++){let D=I+c*d,b=I+c*(d+1),M=I+1+c*(d+1),R=I+1+c*d;m.push(D,b,R),m.push(b,M,R)}this.setIndex(m),this.setAttribute("position",new un(_,3)),this.setAttribute("normal",new un(w,3)),this.setAttribute("uv",new un(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Pa=class extends rn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new O,r=new O;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let p=l[c],u=p.start,m=p.count;for(let _=u,w=u+m;_<w;_+=3)for(let f=0;f<3;f++){let d=o.getX(_+f),I=o.getX(_+(f+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,I),Hd(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,p=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,p),Hd(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new un(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Hd(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Hs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Gd(s))s.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Gd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Un(i){let t={};for(let e=0;e<i.length;e++){let n=Hs(i[e]);for(let s in n)t[s]=n[s]}return t}function Gd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function du(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}var Za={clone:Hs,merge:Un},bg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends Fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bg,this.fragmentShader=wg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=Mg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new le().setHex(s.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ke().fromArray(s.value);break;case"m3":this.uniforms[n].value=new de().fromArray(s.value);break;case"m4":this.uniforms[n].value=new He().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ml=class extends vn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var La=class extends Fi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.combine=Pl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},gl=class extends Fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_l=class extends Fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function dr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function wh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var fs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xl=class extends fs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ch,endingEnd:Ch}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rh:r=t,o=2*e-n;break;case Ih:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rh:a=t,l=2*n-e;break;case Ih:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,m=this._weightNext,_=(n-e)/(s-e),w=_*_,f=w*_,d=-u*f+2*u*w-u*_,I=(1+u)*f+(-1.5-2*u)*w+(-.5+u)*_+1,D=(-1-m)*f+(1.5+m)*w+.5*_,b=m*f-m*w;for(let M=0;M!==o;++M)r[M]=d*a[h+M]+I*a[c+M]+D*a[l+M]+b*a[p+M];return r}},vl=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),p=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*p+a[l+u]*h;return r}},yl=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Sl=class extends fs{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let _=(n-e)/(s-e),w=1-_;for(let f=0;f!==o;++f)r[f]=a[c+f]*w+a[l+f]*_;return r}let u=o*2,m=t-1;for(let _=0;_!==o;++_){let w=a[c+_],f=a[l+_],d=m*u+_*2,I=p[d],D=p[d+1],b=t*u+_*2,M=h[b],R=h[b+1],F=Tg(n,e,I,M,s);r[_]=Vf(F,w,D,R,f)}return r}};function Vf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Eg(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Tg(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Vf(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Eg(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ii=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=dr(e,this.TimeBufferType),this.values=dr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:dr(t.times,Array),values:dr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),wh(t.settings)&&(n.settings={inTangents:dr(t.settings.inTangents,Array),outTangents:dr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Sl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ca:e=this.InterpolantFactoryMethodDiscrete;break;case jo:e=this.InterpolantFactoryMethodLinear;break;case Vo:e=this.InterpolantFactoryMethodSmooth;break;case Ah:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return oe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ca;case this.InterpolantFactoryMethodLinear:return jo;case this.InterpolantFactoryMethodSmooth:return Vo;case this.InterpolantFactoryMethodBezier:return Ah}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;wh(this.settings)&&(Wd(this.settings.inTangents,t),Wd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ce("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ce("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ce("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ce("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&mm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ce("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,u=p-n,m=p+n;for(let _=0;_!==n;++_){let w=e[p+_];if(w!==e[u+_]||w!==e[m+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[p+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,wh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Wd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=jo;var ps=class extends ii{constructor(t,e,n){super(t,e,n)}};ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=ca;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}};Ml.prototype.ValueTypeName="color";var bl=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}};bl.prototype.ValueTypeName="number";var wl=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ui.slerpFlat(r,0,a,c-o,a,c,l);return r}},Da=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new wl(this.times,this.values,this.getValueSize(),t)}};Da.prototype.ValueTypeName="quaternion";Da.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends ii{constructor(t,e,n){super(t,e,n)}};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=ca;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var El=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}};El.prototype.ValueTypeName="vector";var Tl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let m=c[p],_=c[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hf=new Tl,Al=class{constructor(t){this.manager=t!==void 0?t:Hf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Al.DEFAULT_MATERIAL_NAME="__DEFAULT";var Na=class extends xn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ua=class extends Na{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Eh=new He,$d=new O,Xd=new O,Cl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;$d.setFromMatrixPosition(t.matrixWorld),e.position.copy($d),Xd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Eh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Eh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===vr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Eh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Bo=new O,zo=new Ui,Ii=new O,Fa=class extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Bo,zo,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,zo,Ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Bo,zo,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,zo,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hs=new O,qd=new Nt,Yd=new Nt,Dn=class extends Fa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hs.x,hs.y).multiplyScalar(-t/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hs.x,hs.y).multiplyScalar(-t/hs.z)}getViewSize(t,e){return this.getViewBounds(t,qd,Yd),e.subVectors(Yd,qd)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ra*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ir=class extends Fa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fh=class extends Cl{constructor(){super(new Ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oa=class extends Na{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new Fh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ba=class extends rn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var fr=-90,pr=1,Rl=class extends xn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dn(fr,pr,t,e);s.layers=this.layers,this.add(s);let r=new Dn(fr,pr,t,e);r.layers=this.layers,this.add(r);let a=new Dn(fr,pr,t,e);a.layers=this.layers,this.add(a);let o=new Dn(fr,pr,t,e);o.layers=this.layers,this.add(o);let l=new Dn(fr,pr,t,e);l.layers=this.layers,this.add(l);let c=new Dn(fr,pr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=w,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,u,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Il=class extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var fu="\\[\\]\\.:\\/",Ag=new RegExp("["+fu+"]","g"),pu="[^"+fu+"]",Cg="[^"+fu.replace("\\.","")+"]",Rg=/((?:WC+[\/:])*)/.source.replace("WC",pu),Ig=/(WCOD+)?/.source.replace("WCOD",Cg),Pg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pu),Lg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pu),Dg=new RegExp("^"+Rg+Ig+Pg+Lg+"$"),Ng=["material","materials","bones","map"],Oh=class{constructor(t,e,n){let s=n||Ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ze=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ag,"")}static parseTrackName(t){let e=Dg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ng.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ce("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ze.Composite=Oh;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yy=new Float32Array(1);var gs=class extends nl{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Zd=new He,zs=class{constructor(t,e,n=0,s=1/0){this.ray=new Ns(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new br,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Zd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zd),this}intersectObject(t,e=!0,n=[]){return Bh(t,this,n,e),n.sort(Jd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Bh(t[s],this,n,e);return n.sort(Jd),n}};function Jd(i,t){return i.distance-t.distance}function Bh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Bh(r[a],t,e,!0)}}var zh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Kd=new O,ko=new O,mr=new O,gr=new O,Th=new O,Ug=new O,Fg=new O,za=class{constructor(t=new O,e=new O){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Kd.subVectors(t,this.start),ko.subVectors(this.end,this.start);let n=ko.dot(ko);if(n===0)return 0;let r=ko.dot(Kd)/n;return e&&(r=me(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Ug,n=Fg){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;mr.subVectors(c,o),gr.subVectors(h,l),Th.subVectors(o,l);let p=mr.dot(mr),u=gr.dot(gr),m=gr.dot(Th);if(p<=s&&u<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(p<=s)r=0,a=m/u,a=me(a,0,1);else{let _=mr.dot(Th);if(u<=s)a=0,r=me(-_/p,0,1);else{let w=mr.dot(gr),f=p*u-w*w;f!==0?r=me((w*m-_*u)/f,0,1):r=0,a=(w*r+m)/u,a<0?(a=0,r=me(-_/p,0,1)):a>1&&(a=1,r=me((w-_)/p,0,1))}}return e.copy(o).addScaledVector(mr,r),n.copy(l).addScaledVector(gr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function mu(i,t,e,n){let s=Og(n);switch(e){case su:return i*t;case au:return i*t/s.components*s.byteLength;case Bl:return i*t/s.components*s.byteLength;case Ss:return i*t*2/s.components*s.byteLength;case zl:return i*t*2/s.components*s.byteLength;case ru:return i*t*3/s.components*s.byteLength;case di:return i*t*4/s.components*s.byteLength;case kl:return i*t*4/s.components*s.byteLength;case Ga:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $a:case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hl:case Wl:return Math.max(i,16)*Math.max(t,8)/4;case Vl:case Gl:return Math.max(i,8)*Math.max(t,8)/2;case $l:case Xl:case Yl:case Zl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ql:case qa:case Jl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case oc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case uc:case dc:case fc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case pc:case mc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ya:case gc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Og(i){switch(i){case Xn:case tu:return{byteLength:1,components:1};case Dr:case eu:case Ei:return{byteLength:2,components:1};case Fl:case Ol:return{byteLength:2,components:4};case bi:case Ul:case wi:return{byteLength:4,components:1};case nu:case iu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function hp(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zg(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,h);else{p.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<p.length;m++){let _=p[u],w=p[m];w.start<=_.start+_.count+1?_.count=Math.max(_.count,w.start+w.count-_.start):(++u,p[u]=w)}p.length=u+1;for(let m=0,_=p.length;m<_;m++){let w=p[m];i.bufferSubData(c,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vg=`#ifdef USE_ALPHAHASH
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
#endif`,Hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xg=`#ifdef USE_AOMAP
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
#endif`,qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yg=`#ifdef USE_BATCHING
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
#endif`,Zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qg=`#ifdef USE_IRIDESCENCE
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
#endif`,t0=`#ifdef USE_BUMPMAP
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
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,c0=`#define PI 3.141592653589793
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
} // validated`,h0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,u0=`vec3 transformedNormal = objectNormal;
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
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g0="gl_FragColor = linearToOutputTexel( gl_FragColor );",_0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A0=`#ifdef USE_GRADIENTMAP
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
}`,C0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,L0=`#ifdef USE_ENVMAP
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
#endif`,D0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O0=`PhysicalMaterial material;
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
#endif`,B0=`uniform sampler2D dfgLUT;
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
}`,z0=`
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
#endif`,k0=`#if defined( RE_IndirectDiffuse )
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,G0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J0=`#if defined( USE_POINTS_UV )
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
#endif`,K0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n_=`#ifdef USE_MORPHTARGETS
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
#endif`,i_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,r_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,c_=`#ifdef USE_NORMALMAP
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
#endif`,h_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,g_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,__=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,E_=`float getShadowMask() {
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
}`,T_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A_=`#ifdef USE_SKINNING
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
#endif`,C_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R_=`#ifdef USE_SKINNING
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
#endif`,I_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N_=`#ifdef USE_TRANSMISSION
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
#endif`,U_=`#ifdef USE_TRANSMISSION
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
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,k_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V_=`uniform sampler2D t2D;
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
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`#include <common>
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
}`,q_=`#if DEPTH_PACKING == 3200
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
}`,Y_=`#define DISTANCE
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
}`,Z_=`#define DISTANCE
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
}`,J_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j_=`uniform float scale;
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
}`,Q_=`uniform vec3 diffuse;
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
}`,tx=`#include <common>
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
}`,ex=`uniform vec3 diffuse;
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
}`,nx=`#define LAMBERT
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
}`,ix=`#define LAMBERT
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
}`,sx=`#define MATCAP
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
}`,rx=`#define MATCAP
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
}`,ax=`#define NORMAL
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
}`,ox=`#define NORMAL
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
}`,lx=`#define PHONG
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
}`,cx=`#define PHONG
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
}`,hx=`#define STANDARD
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
}`,ux=`#define STANDARD
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
}`,dx=`#define TOON
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
}`,fx=`#define TOON
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
}`,px=`uniform float size;
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#include <common>
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
}`,_x=`uniform vec3 color;
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
}`,xx=`uniform float rotation;
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
}`,vx=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:kg,alphahash_pars_fragment:Vg,alphamap_fragment:Hg,alphamap_pars_fragment:Gg,alphatest_fragment:Wg,alphatest_pars_fragment:$g,aomap_fragment:Xg,aomap_pars_fragment:qg,batching_pars_vertex:Yg,batching_vertex:Zg,begin_vertex:Jg,beginnormal_vertex:Kg,bsdfs:jg,iridescence_fragment:Qg,bumpmap_pars_fragment:t0,clipping_planes_fragment:e0,clipping_planes_pars_fragment:n0,clipping_planes_pars_vertex:i0,clipping_planes_vertex:s0,color_fragment:r0,color_pars_fragment:a0,color_pars_vertex:o0,color_vertex:l0,common:c0,cube_uv_reflection_fragment:h0,defaultnormal_vertex:u0,displacementmap_pars_vertex:d0,displacementmap_vertex:f0,emissivemap_fragment:p0,emissivemap_pars_fragment:m0,colorspace_fragment:g0,colorspace_pars_fragment:_0,envmap_fragment:x0,envmap_common_pars_fragment:v0,envmap_pars_fragment:y0,envmap_pars_vertex:S0,envmap_physical_pars_fragment:L0,envmap_vertex:M0,fog_vertex:b0,fog_pars_vertex:w0,fog_fragment:E0,fog_pars_fragment:T0,gradientmap_pars_fragment:A0,lightmap_pars_fragment:C0,lights_lambert_fragment:R0,lights_lambert_pars_fragment:I0,lights_pars_begin:P0,lights_toon_fragment:D0,lights_toon_pars_fragment:N0,lights_phong_fragment:U0,lights_phong_pars_fragment:F0,lights_physical_fragment:O0,lights_physical_pars_fragment:B0,lights_fragment_begin:z0,lights_fragment_maps:k0,lights_fragment_end:V0,lightprobes_pars_fragment:H0,logdepthbuf_fragment:G0,logdepthbuf_pars_fragment:W0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:X0,map_fragment:q0,map_pars_fragment:Y0,map_particle_fragment:Z0,map_particle_pars_fragment:J0,metalnessmap_fragment:K0,metalnessmap_pars_fragment:j0,morphinstance_vertex:Q0,morphcolor_vertex:t_,morphnormal_vertex:e_,morphtarget_pars_vertex:n_,morphtarget_vertex:i_,normal_fragment_begin:s_,normal_fragment_maps:r_,normal_pars_fragment:a_,normal_pars_vertex:o_,normal_vertex:l_,normalmap_pars_fragment:c_,clearcoat_normal_fragment_begin:h_,clearcoat_normal_fragment_maps:u_,clearcoat_pars_fragment:d_,iridescence_pars_fragment:f_,opaque_fragment:p_,packing:m_,premultiplied_alpha_fragment:g_,project_vertex:__,dithering_fragment:x_,dithering_pars_fragment:v_,roughnessmap_fragment:y_,roughnessmap_pars_fragment:S_,shadowmap_pars_fragment:M_,shadowmap_pars_vertex:b_,shadowmap_vertex:w_,shadowmask_pars_fragment:E_,skinbase_vertex:T_,skinning_pars_vertex:A_,skinning_vertex:C_,skinnormal_vertex:R_,specularmap_fragment:I_,specularmap_pars_fragment:P_,tonemapping_fragment:L_,tonemapping_pars_fragment:D_,transmission_fragment:N_,transmission_pars_fragment:U_,uv_pars_fragment:F_,uv_pars_vertex:O_,uv_vertex:B_,worldpos_vertex:z_,background_vert:k_,background_frag:V_,backgroundCube_vert:H_,backgroundCube_frag:G_,cube_vert:W_,cube_frag:$_,depth_vert:X_,depth_frag:q_,distance_vert:Y_,distance_frag:Z_,equirect_vert:J_,equirect_frag:K_,linedashed_vert:j_,linedashed_frag:Q_,meshbasic_vert:tx,meshbasic_frag:ex,meshlambert_vert:nx,meshlambert_frag:ix,meshmatcap_vert:sx,meshmatcap_frag:rx,meshnormal_vert:ax,meshnormal_frag:ox,meshphong_vert:lx,meshphong_frag:cx,meshphysical_vert:hx,meshphysical_frag:ux,meshtoon_vert:dx,meshtoon_frag:fx,points_vert:px,points_frag:mx,shadow_vert:gx,shadow_frag:_x,sprite_vert:xx,sprite_frag:vx},Ut={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Vn={basic:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Un([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Un([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Un([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Un([Ut.points,Ut.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Un([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Un([Ut.common,Ut.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Un([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Un([Ut.sprite,Ut.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:Un([Ut.common,Ut.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:Un([Ut.lights,Ut.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Vn.physical={uniforms:Un([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};var yc={r:0,b:0,g:0},yx=new He,up=new de;up.set(-1,0,0,0,1,0,0,0,1);function Sx(i,t,e,n,s,r){let a=new le(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function m(I){let D=I.isScene===!0?I.background:null;if(D&&D.isTexture){let b=I.backgroundBlurriness>0;D=t.get(D,b)}return D}function _(I){let D=!1,b=m(I);b===null?f(a,o):b&&b.isColor&&(f(b,1),D=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||D)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function w(I,D){let b=m(D);b&&(b.isCubeTexture||b.mapping===Va)?(c===void 0&&(c=new Nn(new Tr(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Hs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yx.makeRotationFromEuler(D.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(up),c.material.toneMapped=Ie.getTransfer(b.colorSpace)!==ze,(h!==b||p!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,p=b.version,u=i.toneMapping),c.layers.enableAll(),I.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Nn(new Ia(2,2),new vn({name:"BackgroundMaterial",uniforms:Hs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.toneMapped=Ie.getTransfer(b.colorSpace)!==ze,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||p!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,p=b.version,u=i.toneMapping),l.layers.enableAll(),I.unshift(l,l.geometry,l.material,0,0,null))}function f(I,D){I.getRGB(yc,du(i)),e.buffers.color.setClear(yc.r,yc.g,yc.b,D,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(I,D=1){a.set(I),o=D,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(I){o=I,f(a,o)},render:_,addToRenderList:w,dispose:d}}function Mx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(G,tt,et,H,K){let ct=!1,st=p(G,H,et,tt);r!==st&&(r=st,c(r.object)),ct=m(G,H,et,K),ct&&_(G,H,et,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(ct||a)&&(a=!1,b(G,tt,et,H),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(G){return i.bindVertexArray(G)}function h(G){return i.deleteVertexArray(G)}function p(G,tt,et,H){let K=H.wireframe===!0,ct=n[tt.id];ct===void 0&&(ct={},n[tt.id]=ct);let st=G.isInstancedMesh===!0?G.id:0,vt=ct[st];vt===void 0&&(vt={},ct[st]=vt);let rt=vt[et.id];rt===void 0&&(rt={},vt[et.id]=rt);let ht=rt[K];return ht===void 0&&(ht=u(l()),rt[K]=ht),ht}function u(G){let tt=[],et=[],H=[];for(let K=0;K<e;K++)tt[K]=0,et[K]=0,H[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:tt,enabledAttributes:et,attributeDivisors:H,object:G,attributes:{},index:null}}function m(G,tt,et,H){let K=r.attributes,ct=tt.attributes,st=0,vt=et.getAttributes();for(let rt in vt)if(vt[rt].location>=0){let pt=K[rt],Kt=ct[rt];if(Kt===void 0&&(rt==="instanceMatrix"&&G.instanceMatrix&&(Kt=G.instanceMatrix),rt==="instanceColor"&&G.instanceColor&&(Kt=G.instanceColor)),pt===void 0||pt.attribute!==Kt||Kt&&pt.data!==Kt.data)return!0;st++}return r.attributesNum!==st||r.index!==H}function _(G,tt,et,H){let K={},ct=tt.attributes,st=0,vt=et.getAttributes();for(let rt in vt)if(vt[rt].location>=0){let pt=ct[rt];pt===void 0&&(rt==="instanceMatrix"&&G.instanceMatrix&&(pt=G.instanceMatrix),rt==="instanceColor"&&G.instanceColor&&(pt=G.instanceColor));let Kt={};Kt.attribute=pt,pt&&pt.data&&(Kt.data=pt.data),K[rt]=Kt,st++}r.attributes=K,r.attributesNum=st,r.index=H}function w(){let G=r.newAttributes;for(let tt=0,et=G.length;tt<et;tt++)G[tt]=0}function f(G){d(G,0)}function d(G,tt){let et=r.newAttributes,H=r.enabledAttributes,K=r.attributeDivisors;et[G]=1,H[G]===0&&(i.enableVertexAttribArray(G),H[G]=1),K[G]!==tt&&(i.vertexAttribDivisor(G,tt),K[G]=tt)}function I(){let G=r.newAttributes,tt=r.enabledAttributes;for(let et=0,H=tt.length;et<H;et++)tt[et]!==G[et]&&(i.disableVertexAttribArray(et),tt[et]=0)}function D(G,tt,et,H,K,ct,st){st===!0?i.vertexAttribIPointer(G,tt,et,K,ct):i.vertexAttribPointer(G,tt,et,H,K,ct)}function b(G,tt,et,H){w();let K=H.attributes,ct=et.getAttributes(),st=tt.defaultAttributeValues;for(let vt in ct){let rt=ct[vt];if(rt.location>=0){let ht=K[vt];if(ht===void 0&&(vt==="instanceMatrix"&&G.instanceMatrix&&(ht=G.instanceMatrix),vt==="instanceColor"&&G.instanceColor&&(ht=G.instanceColor)),ht!==void 0){let pt=ht.normalized,Kt=ht.itemSize,Ht=t.get(ht);if(Ht===void 0)continue;let Le=Ht.buffer,ye=Ht.type,Ae=Ht.bytesPerElement,nt=ye===i.INT||ye===i.UNSIGNED_INT||ht.gpuType===Ul;if(ht.isInterleavedBufferAttribute){let ut=ht.data,Dt=ut.stride,ie=ht.offset;if(ut.isInstancedInterleavedBuffer){for(let Rt=0;Rt<rt.locationSize;Rt++)d(rt.location+Rt,ut.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Rt=0;Rt<rt.locationSize;Rt++)f(rt.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let Rt=0;Rt<rt.locationSize;Rt++)D(rt.location+Rt,Kt/rt.locationSize,ye,pt,Dt*Ae,(ie+Kt/rt.locationSize*Rt)*Ae,nt)}else{if(ht.isInstancedBufferAttribute){for(let ut=0;ut<rt.locationSize;ut++)d(rt.location+ut,ht.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ut=0;ut<rt.locationSize;ut++)f(rt.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let ut=0;ut<rt.locationSize;ut++)D(rt.location+ut,Kt/rt.locationSize,ye,pt,Kt*Ae,Kt/rt.locationSize*ut*Ae,nt)}}else if(st!==void 0){let pt=st[vt];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(rt.location,pt);break;case 3:i.vertexAttrib3fv(rt.location,pt);break;case 4:i.vertexAttrib4fv(rt.location,pt);break;default:i.vertexAttrib1fv(rt.location,pt)}}}}I()}function M(){C();for(let G in n){let tt=n[G];for(let et in tt){let H=tt[et];for(let K in H){let ct=H[K];for(let st in ct)h(ct[st].object),delete ct[st];delete H[K]}}delete n[G]}}function R(G){if(n[G.id]===void 0)return;let tt=n[G.id];for(let et in tt){let H=tt[et];for(let K in H){let ct=H[K];for(let st in ct)h(ct[st].object),delete ct[st];delete H[K]}}delete n[G.id]}function F(G){for(let tt in n){let et=n[tt];for(let H in et){let K=et[H];if(K[G.id]===void 0)continue;let ct=K[G.id];for(let st in ct)h(ct[st].object),delete ct[st];delete K[G.id]}}}function v(G){for(let tt in n){let et=n[tt],H=G.isInstancedMesh===!0?G.id:0,K=et[H];if(K!==void 0){for(let ct in K){let st=K[ct];for(let vt in st)h(st[vt].object),delete st[vt];delete K[ct]}delete et[H],Object.keys(et).length===0&&delete n[tt]}}}function C(){V(),a=!0,r!==s&&(r=s,c(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:V,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfObject:v,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:f,disableUnusedAttributes:I}}function bx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function wx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(F){return!(F!==di&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(F){let v=F===Ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Xn&&F!==wi&&!v&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:w,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:b,maxSamples:M,samples:R}}function Ex(i){let t=this,e=null,n=0,s=!1,r=!1,a=new _i,o=new de,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let m=p.length!==0||u||n!==0||s;return s=u,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){e=h(p,u,0)},this.setState=function(p,u,m){let _=p.clippingPlanes,w=p.clipIntersection,f=p.clipShadows,d=i.get(p);if(!s||_===null||_.length===0||r&&!f)r?h(null):c();else{let I=r?0:n,D=I*4,b=d.clippingState||null;l.value=b,b=h(_,u,D,m);for(let M=0;M!==D;++M)b[M]=e[M];d.clippingState=b,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,u,m,_){let w=p!==null?p.length:0,f=null;if(w!==0){if(f=l.value,_!==!0||f===null){let d=m+w*4,I=u.matrixWorldInverse;o.getNormalMatrix(I),(f===null||f.length<d)&&(f=new Float32Array(d));for(let D=0,b=m;D!==w;++D,b+=4)a.copy(p[D]).applyMatrix4(I,o),a.normal.toArray(f,b),f[b+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,f}}var Fr=4,Tx=6,Ax=20,Cx=256,Ja=new Ir,Gf=new le,gu=null,_u=0,xu=0,vu=!1,Rx=new O,Gs=new O,Mc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Rx}=r;gu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(gu,_u,xu),this._renderer.xr.enabled=vu,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===Vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Ei,format:di,colorSpace:ha,depthBuffer:!1},s=Wf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ix(r)),this._blurMaterial=Lx(r,t,e),this._ggxMaterial=Px(r,t,e)}return s}_compileMaterial(t){let e=new Nn(new rn,t);this._renderer.compile(e,Ja)}_sceneToCubeUV(t,e,n,s,r){let l=new Dn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(Gf),p.toneMapping=Mi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nn(new Tr,new xa({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));let w=this._backgroundBox,f=w.material,d=!1,I=t.background;I?I.isColor&&(f.color.copy(I),t.background=null,d=!0):(f.color.copy(Gf),d=!0);for(let D=0;D<6;D++){let b=D%3;b===0?(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[D],r.y,r.z)):b===1?(l.up.set(0,0,c[D]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[D],r.z)):(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[D]));let M=this._cubeSize;Ur(s,b*M,D>2?M:0,M,M),p.setRenderTarget(s),d&&p.render(w,l),p.render(t,l)}p.toneMapping=m,p.autoClear=u,t.background=I}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===xs||t.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$f());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ja)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,m=p*u,{_lodMax:_}=this,w=this._sizeLods[n],f=3*w*(n>_-Fr?n-_+Fr:0),d=4*(this._cubeSize-w);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=_-e,Ur(r,f,d,3*w,2*w),s.setRenderTarget(r),s.render(o,Ja),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,Ur(t,f,d,3*w,2*w),s.setRenderTarget(t),s.render(o,Ja)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-Fr?s-this._lodMax+Fr:0),u=4*(this._cubeSize-h);Ur(e,p,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Ja)}};function Ix(i){let t=[],e=[],n=i,s=i-Fr+1+Tx;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,m=3,_=new Float32Array(m*u*p),w=new Float32Array(m*u*p);for(let d=0;d<p;d++){let I=d%3*2/3-1,D=d>2?0:-1,b=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];_.set(b,m*u*d);for(let M=0;M<u;M++){let R=h[M*2]*2-1,F=h[M*2+1]*2-1;d===0?Gs.set(1,F,R):d===1?Gs.set(-R,1,-F):d===2?Gs.set(-R,F,1):d===3?Gs.set(-1,F,-R):d===4?Gs.set(-R,-1,F):Gs.set(R,F,-1),Gs.toArray(w,(d*u+M)*m)}}let f=new rn;f.setAttribute("position",new Xe(_,m)),f.setAttribute("outputDirection",new Xe(w,m)),e.push(new Nn(f,null)),n>Fr&&n--}return{lodMeshes:e,sizeLods:t}}function Wf(i,t,e){let n=new $n(i,t,e);return n.texture.mapping=Va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Px(i,t,e){return new vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Lx(i,t,e){return new vn({name:"SphericalGaussianBlur",defines:{SAMPLES:Ax,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function $f(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Xf(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Ec(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var bc=class extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ya(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tr(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:Bi});r.uniforms.tEquirect.value=e;let a=new Nn(s,r),o=e.minFilter;return e.minFilter===vs&&(e.minFilter=Sn),new Rl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Dx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Ll||m===Dl)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let w=new bc(_.height);return w.fromEquirectangularTexture(i,u),t.set(u,w),u.addEventListener("dispose",c),o(w.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let m=u.mapping,_=m===Ll||m===Dl,w=m===xs||m===Vs;if(_||w){let f=e.get(u),d=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new Mc(i)),f=_?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{let I=u.image;return _&&I&&I.height>0||w&&I&&l(I)?(n===null&&(n=new Mc(i)),f=_?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,m){return m===Ll?u.mapping=xs:m===Dl&&(u.mapping=Vs),u}function l(u){let m=0,_=6;for(let w=0;w<_;w++)u[w]!==void 0&&m++;return m===_}function c(u){let m=u.target;m.removeEventListener("dispose",c);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Nx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ds("WebGLRenderer: "+n+" extension not supported."),s}}}function Ux(i,t,e,n){let s={},r=new WeakMap;function a(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(p){let u=p.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER)}function c(p){let u=[],m=p.index,_=p.attributes.position,w=0;if(_===void 0)return;if(m!==null){let I=m.array;w=m.version;for(let D=0,b=I.length;D<b;D+=3){let M=I[D+0],R=I[D+1],F=I[D+2];u.push(M,R,R,F,F,M)}}else{let I=_.array;w=_.version;for(let D=0,b=I.length/3-1;D<b;D+=3){let M=D+0,R=D+1,F=D+2;u.push(M,R,R,F,F,M)}}let f=new(_.count>=65535?_a:ga)(u,1);f.version=w;let d=r.get(p);d&&t.remove(d),r.set(p,f)}function h(p){let u=r.get(p);if(u){let m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function Fx(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,u){i.drawElements(n,u,r,p*a),e.update(u,n,1)}function c(p,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,p*a,m),e.update(u,n,m))}function h(p,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,m);let w=0;for(let f=0;f<m;f++)w+=u[f];e.update(w,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ox(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ce("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Bx(i,t,e){let n=new WeakMap,s=new ke;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==p){let C=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],I=o.morphAttributes.color||[],D=0;m===!0&&(D=1),_===!0&&(D=2),w===!0&&(D=3);let b=o.attributes.position.count*D,M=1;b>t.maxTextureSize&&(M=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let R=new Float32Array(b*M*4*p),F=new pa(R,b,M,p);F.type=wi,F.needsUpdate=!0;let v=D*4;for(let V=0;V<p;V++){let G=f[V],tt=d[V],et=I[V],H=b*M*4*V;for(let K=0;K<G.count;K++){let ct=K*v;m===!0&&(s.fromBufferAttribute(G,K),R[H+ct+0]=s.x,R[H+ct+1]=s.y,R[H+ct+2]=s.z,R[H+ct+3]=0),_===!0&&(s.fromBufferAttribute(tt,K),R[H+ct+4]=s.x,R[H+ct+5]=s.y,R[H+ct+6]=s.z,R[H+ct+7]=0),w===!0&&(s.fromBufferAttribute(et,K),R[H+ct+8]=s.x,R[H+ct+9]=s.y,R[H+ct+10]=s.z,R[H+ct+11]=et.itemSize===4?s.w:1)}}u={count:p,texture:F,size:new Nt(b,M)},n.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let w=0;w<c.length;w++)m+=c[w];let _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function zx(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,u=t.get(c,p);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var kx={[Xh]:"LINEAR_TONE_MAPPING",[qh]:"REINHARD_TONE_MAPPING",[Yh]:"CINEON_TONE_MAPPING",[Zh]:"ACES_FILMIC_TONE_MAPPING",[Kh]:"AGX_TONE_MAPPING",[jh]:"NEUTRAL_TONE_MAPPING",[Jh]:"CUSTOM_TONE_MAPPING"};function Vx(i,t,e,n,s,r){let a=new $n(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new rn;c.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new un([0,2,0,0,2,0],2));let h=new ml({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Nn(c,h),u=new Ir(-1,1,1,-1,0,1),m=null,_=null,w=!1,f,d=null,I=[],D=!1;this.setSize=function(b,M){a.setSize(b,M),o!==null&&o.setSize(b,M),l!==null&&l.setSize(b,M);for(let R=0;R<I.length;R++){let F=I[R];F.setSize&&F.setSize(b,M)}},this.setEffects=function(b){I=b,D=I.length>0&&I[0].isRenderPass===!0;let M=a.width,R=a.height;I.length>0&&o===null&&(o=new $n(M,R,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),l=new $n(M,R,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<I.length;F++){let v=I[F];v.setSize&&v.setSize(M,R)}},this.begin=function(b,M){if(w||b.toneMapping===Mi&&I.length===0)return!1;if(d=M,M!==null){let R=M.width,F=M.height;(a.width!==R||a.height!==F)&&this.setSize(R,F)}return D===!1&&b.setRenderTarget(a),f=b.toneMapping,b.toneMapping=Mi,!0},this.hasRenderPass=function(){return D},this.end=function(b,M){b.toneMapping=f,w=!0;let R=a,F=o;for(let v=0;v<I.length;v++){let C=I[v];C.enabled!==!1&&(C.render(b,F,R,M),C.needsSwap!==!1&&(R=F,F=F===o?l:o))}if(m!==b.outputColorSpace||_!==b.toneMapping){m=b.outputColorSpace,_=b.toneMapping,h.defines={},Ie.getTransfer(m)===ze&&(h.defines.SRGB_TRANSFER="");let v=kx[_];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=R.texture,b.setRenderTarget(d),b.render(p,u),d=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var dp=new Wn,Mu=new ds(1,1),fp=new pa,pp=new el,mp=new ya,qf=[],Yf=[],Zf=new Float32Array(16),Jf=new Float32Array(9),Kf=new Float32Array(4);function Br(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=qf[s];if(r===void 0&&(r=new Float32Array(s),qf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function dn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Tc(i,t){let e=Yf[t];e===void 0&&(e=new Int32Array(t),Yf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2fv(this.addr,t),fn(e,t)}}function Wx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(dn(e,t))return;i.uniform3fv(this.addr,t),fn(e,t)}}function $x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4fv(this.addr,t),fn(e,t)}}function Xx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;Kf.set(n),i.uniformMatrix2fv(this.addr,!1,Kf),fn(e,n)}}function qx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;Jf.set(n),i.uniformMatrix3fv(this.addr,!1,Jf),fn(e,n)}}function Yx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;Zf.set(n),i.uniformMatrix4fv(this.addr,!1,Zf),fn(e,n)}}function Zx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2iv(this.addr,t),fn(e,t)}}function Kx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;i.uniform3iv(this.addr,t),fn(e,t)}}function jx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4iv(this.addr,t),fn(e,t)}}function Qx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2uiv(this.addr,t),fn(e,t)}}function ev(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;i.uniform3uiv(this.addr,t),fn(e,t)}}function nv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4uiv(this.addr,t),fn(e,t)}}function iv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mu.compareFunction=e.isReversedDepthBuffer()?vc:xc,r=Mu):r=dp,e.setTexture2D(t||r,s)}function sv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||pp,s)}function rv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||mp,s)}function av(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fp,s)}function ov(i){switch(i){case 5126:return Hx;case 35664:return Gx;case 35665:return Wx;case 35666:return $x;case 35674:return Xx;case 35675:return qx;case 35676:return Yx;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return Kx;case 35669:case 35673:return jx;case 5125:return Qx;case 36294:return tv;case 36295:return ev;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return av}}function lv(i,t){i.uniform1fv(this.addr,t)}function cv(i,t){let e=Br(t,this.size,2);i.uniform2fv(this.addr,e)}function hv(i,t){let e=Br(t,this.size,3);i.uniform3fv(this.addr,e)}function uv(i,t){let e=Br(t,this.size,4);i.uniform4fv(this.addr,e)}function dv(i,t){let e=Br(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fv(i,t){let e=Br(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pv(i,t){let e=Br(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mv(i,t){i.uniform1iv(this.addr,t)}function gv(i,t){i.uniform2iv(this.addr,t)}function _v(i,t){i.uniform3iv(this.addr,t)}function xv(i,t){i.uniform4iv(this.addr,t)}function vv(i,t){i.uniform1uiv(this.addr,t)}function yv(i,t){i.uniform2uiv(this.addr,t)}function Sv(i,t){i.uniform3uiv(this.addr,t)}function Mv(i,t){i.uniform4uiv(this.addr,t)}function bv(i,t,e){let n=this.cache,s=t.length,r=Tc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Mu:a=dp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function wv(i,t,e){let n=this.cache,s=t.length,r=Tc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||pp,r[a])}function Ev(i,t,e){let n=this.cache,s=t.length,r=Tc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||mp,r[a])}function Tv(i,t,e){let n=this.cache,s=t.length,r=Tc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||fp,r[a])}function Av(i){switch(i){case 5126:return lv;case 35664:return cv;case 35665:return hv;case 35666:return uv;case 35674:return dv;case 35675:return fv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return _v;case 35669:case 35673:return xv;case 5125:return vv;case 36294:return yv;case 36295:return Sv;case 36296:return Mv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return Tv}}var bu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ov(e.type)}},wu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Av(e.type)}},Eu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},yu=/(\w+)(\])?(\[|\.)?/g;function jf(i,t){i.seq.push(t),i.map[t.id]=t}function Cv(i,t,e){let n=i.name,s=n.length;for(yu.lastIndex=0;;){let r=yu.exec(n),a=yu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){jf(e,c===void 0?new bu(o,i,t):new wu(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Eu(o),jf(e,p)),e=p}}}var Or=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Cv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Qf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Rv=37297,Iv=0;function Pv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var tp=new de;function Lv(i){Ie._getMatrix(tp,Ie.workingColorSpace,i);let t=`mat3( ${tp.elements.map(e=>e.toFixed(4))} )`;switch(Ie.getTransfer(i)){case ua:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ep(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Pv(i.getShaderSource(t),o)}else return r}function Dv(i,t){let e=Lv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Nv={[Xh]:"Linear",[qh]:"Reinhard",[Yh]:"Cineon",[Zh]:"ACESFilmic",[Kh]:"AgX",[jh]:"Neutral",[Jh]:"Custom"};function Uv(i,t){let e=Nv[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Sc=new O;function Fv(){Ie.getLuminanceCoefficients(Sc);let i=Sc.x.toFixed(4),t=Sc.y.toFixed(4),e=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ov(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function Bv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ja(i){return i!==""}function np(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ip(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(i){return i.replace(kv,Hv)}var Vv=new Map;function Hv(i,t){let e=ve[t];if(e===void 0){let n=Vv.get(t);if(n!==void 0)e=ve[n],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Tu(e)}var Gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sp(i){return i.replace(Gv,Wv)}function Wv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var $v={[ka]:"SHADOWMAP_TYPE_PCF",[Pr]:"SHADOWMAP_TYPE_VSM"};function Xv(i){return $v[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var qv={[xs]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE",[Va]:"ENVMAP_TYPE_CUBE_UV"};function Yv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":qv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Zv={[Vs]:"ENVMAP_MODE_REFRACTION"};function Jv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Zv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Kv={[Pl]:"ENVMAP_BLENDING_MULTIPLY",[yf]:"ENVMAP_BLENDING_MIX",[Sf]:"ENVMAP_BLENDING_ADD"};function jv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Kv[i.combine]||"ENVMAP_BLENDING_NONE"}function Qv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ty(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Xv(e),c=Yv(e),h=Jv(e),p=jv(e),u=Qv(e),m=Ov(e),_=Bv(r),w=s.createProgram(),f,d,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ja).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ja).join(`
`),d.length>0&&(d+=`
`)):(f=[rp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),d=[rp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?ve.tonemapping_pars_fragment:"",e.toneMapping!==Mi?Uv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,Dv("linearToOutputTexel",e.outputColorSpace),Fv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ja).join(`
`)),a=Tu(a),a=np(a,e),a=ip(a,e),o=Tu(o),o=np(o,e),o=ip(o,e),a=sp(a),o=sp(o),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let D=I+f+a,b=I+d+o,M=Qf(s,s.VERTEX_SHADER,D),R=Qf(s,s.FRAGMENT_SHADER,b);s.attachShader(w,M),s.attachShader(w,R),e.index0AttributeName!==void 0?s.bindAttribLocation(w,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function F(G){if(i.debug.checkShaderErrors){let tt=s.getProgramInfoLog(w)||"",et=s.getShaderInfoLog(M)||"",H=s.getShaderInfoLog(R)||"",K=tt.trim(),ct=et.trim(),st=H.trim(),vt=!0,rt=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(vt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,w,M,R);else{let ht=ep(s,M,"vertex"),pt=ep(s,R,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+K+`
`+ht+`
`+pt)}else K!==""?oe("WebGLProgram: Program Info Log:",K):(ct===""||st==="")&&(rt=!1);rt&&(G.diagnostics={runnable:vt,programLog:K,vertexShader:{log:ct,prefix:f},fragmentShader:{log:st,prefix:d}})}s.deleteShader(M),s.deleteShader(R),v=new Or(s,w),C=zv(s,w)}let v;this.getUniforms=function(){return v===void 0&&F(this),v};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(w,Rv)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Iv++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=M,this.fragmentShader=R,this}var ey=0,Au=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Cu(t),e.set(t,n)),n}},Cu=class{constructor(t){this.id=ey++,this.code=t,this.usedTimes=0}};function ny(i){return i===Ss||i===qa||i===Ya}function iy(i,t,e,n,s,r){let a=new br,o=new Au,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,u=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function w(v,C,V,G,tt,et){let H=G.fog,K=tt.geometry,ct=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?G.environment:null,st=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,vt=t.get(v.envMap||ct,st),rt=vt&&vt.mapping===Va?vt.image.height:null,ht=m[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&oe("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let pt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Kt=pt!==void 0?pt.length:0,Ht=0;K.morphAttributes.position!==void 0&&(Ht=1),K.morphAttributes.normal!==void 0&&(Ht=2),K.morphAttributes.color!==void 0&&(Ht=3);let Le,ye,Ae,nt;if(ht){let Be=Vn[ht];Le=Be.vertexShader,ye=Be.fragmentShader}else{Le=v.vertexShader,ye=v.fragmentShader;let Be=o.getVertexShaderStage(v),be=o.getFragmentShaderStage(v);o.update(v,Be,be),Ae=Be.id,nt=be.id}let ut=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),ie=tt.isInstancedMesh===!0,Rt=tt.isBatchedMesh===!0,Wt=!!v.map,De=!!v.matcap,U=!!vt,mt=!!v.aoMap,bt=!!v.lightMap,Mt=!!v.bumpMap&&v.wireframe===!1,wt=!!v.normalMap,ne=!!v.displacementMap,te=!!v.emissiveMap,kt=!!v.metalnessMap,he=!!v.roughnessMap,B=v.anisotropy>0,Ue=v.clearcoat>0,_e=v.dispersion>0,T=v.retroreflectivity>0,x=v.iridescence>0,$=v.sheen>0,j=v.transmission>0,ot=B&&!!v.anisotropyMap,Et=Ue&&!!v.clearcoatMap,At=Ue&&!!v.clearcoatNormalMap,lt=Ue&&!!v.clearcoatRoughnessMap,dt=x&&!!v.iridescenceMap,Ct=x&&!!v.iridescenceThicknessMap,Yt=$&&!!v.sheenColorMap,Ot=$&&!!v.sheenRoughnessMap,It=!!v.specularMap,jt=!!v.specularColorMap,re=!!v.specularIntensityMap,se=j&&!!v.transmissionMap,z=j&&!!v.thicknessMap,Tt=!!v.gradientMap,ft=!!v.alphaMap,Lt=v.alphaTest>0,zt=!!v.alphaHash,gt=!!v.extensions,Zt=Mi;v.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Zt=i.toneMapping);let Jt={shaderID:ht,shaderType:v.type,shaderName:v.name,vertexShader:Le,fragmentShader:ye,defines:v.defines,customVertexShaderID:Ae,customFragmentShaderID:nt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Rt,batchingColor:Rt&&tt._colorsTexture!==null,instancing:ie,instancingColor:ie&&tt.instanceColor!==null,instancingMorph:ie&&tt.morphTexture!==null,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Ie.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Wt,matcap:De,envMap:U,envMapMode:U&&vt.mapping,envMapCubeUVHeight:rt,aoMap:mt,lightMap:bt,bumpMap:Mt,normalMap:wt,displacementMap:ne,emissiveMap:te,normalMapObjectSpace:wt&&v.normalMapType===wf,normalMapTangentSpace:wt&&v.normalMapType===_c,packedNormalMap:wt&&v.normalMapType===_c&&ny(v.normalMap.format),metalnessMap:kt,roughnessMap:he,anisotropy:B,anisotropyMap:ot,clearcoat:Ue,clearcoatMap:Et,clearcoatNormalMap:At,clearcoatRoughnessMap:lt,dispersion:_e,retroreflection:T,iridescence:x,iridescenceMap:dt,iridescenceThicknessMap:Ct,sheen:$,sheenColorMap:Yt,sheenRoughnessMap:Ot,specularMap:It,specularColorMap:jt,specularIntensityMap:re,transmission:j,transmissionMap:se,thicknessMap:z,gradientMap:Tt,opaque:v.transparent===!1&&v.blending===Lr&&v.alphaToCoverage===!1,alphaMap:ft,alphaTest:Lt,alphaHash:zt,combine:v.combine,mapUv:Wt&&_(v.map.channel),aoMapUv:mt&&_(v.aoMap.channel),lightMapUv:bt&&_(v.lightMap.channel),bumpMapUv:Mt&&_(v.bumpMap.channel),normalMapUv:wt&&_(v.normalMap.channel),displacementMapUv:ne&&_(v.displacementMap.channel),emissiveMapUv:te&&_(v.emissiveMap.channel),metalnessMapUv:kt&&_(v.metalnessMap.channel),roughnessMapUv:he&&_(v.roughnessMap.channel),anisotropyMapUv:ot&&_(v.anisotropyMap.channel),clearcoatMapUv:Et&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:At&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&_(v.sheenRoughnessMap.channel),specularMapUv:It&&_(v.specularMap.channel),specularColorMapUv:jt&&_(v.specularColorMap.channel),specularIntensityMapUv:re&&_(v.specularIntensityMap.channel),transmissionMapUv:se&&_(v.transmissionMap.channel),thicknessMapUv:z&&_(v.thicknessMap.channel),alphaMapUv:ft&&_(v.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(wt||B),vertexNormals:!!K.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!K.attributes.uv&&(Wt||ft),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||K.attributes.normal===void 0&&wt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Dt,skinning:tt.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Kt,morphTextureStride:Ht,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:et.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Wt&&v.map.isVideoTexture===!0&&Ie.getTransfer(v.map.colorSpace)===ze,decodeVideoTextureEmissive:te&&v.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(v.emissiveMap.colorSpace)===ze,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Oi,flipSided:v.side===kn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:gt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&v.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Jt.vertexUv1s=l.has(1),Jt.vertexUv2s=l.has(2),Jt.vertexUv3s=l.has(3),l.clear(),Jt}function f(v){let C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(let V in v.defines)C.push(V),C.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(d(C,v),I(C,v),C.push(i.outputColorSpace)),C.push(v.customProgramCacheKey),C.join()}function d(v,C){v.push(C.precision),v.push(C.outputColorSpace),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.mapUv),v.push(C.alphaMapUv),v.push(C.lightMapUv),v.push(C.aoMapUv),v.push(C.bumpMapUv),v.push(C.normalMapUv),v.push(C.displacementMapUv),v.push(C.emissiveMapUv),v.push(C.metalnessMapUv),v.push(C.roughnessMapUv),v.push(C.anisotropyMapUv),v.push(C.clearcoatMapUv),v.push(C.clearcoatNormalMapUv),v.push(C.clearcoatRoughnessMapUv),v.push(C.iridescenceMapUv),v.push(C.iridescenceThicknessMapUv),v.push(C.sheenColorMapUv),v.push(C.sheenRoughnessMapUv),v.push(C.specularMapUv),v.push(C.specularColorMapUv),v.push(C.specularIntensityMapUv),v.push(C.transmissionMapUv),v.push(C.thicknessMapUv),v.push(C.combine),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numSunLights),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numSunLightShadows),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.numLightProbes),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function I(v,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function D(v){let C=m[v.type],V;if(C){let G=Vn[C];V=Za.clone(G.uniforms)}else V=v.uniforms;return V}function b(v,C){let V=h.get(C);return V!==void 0?++V.usedTimes:(V=new ty(i,C,v,s),c.push(V),h.set(C,V)),V}function M(v){if(--v.usedTimes===0){let C=c.indexOf(v);c[C]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function R(v){o.remove(v)}function F(){o.dispose()}return{getParameters:w,getProgramCacheKey:f,getUniforms:D,acquireProgram:b,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:F}}function sy(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ry(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ap(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function op(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,_,w,f,d){let I=i[t];return I===void 0?(I={id:u.id,object:u,geometry:m,material:_,materialVariant:a(u),groupOrder:w,renderOrder:u.renderOrder,z:f,group:d},i[t]=I):(I.id=u.id,I.object=u,I.geometry=m,I.material=_,I.materialVariant=a(u),I.groupOrder=w,I.renderOrder=u.renderOrder,I.z=f,I.group=d),t++,I}function l(u,m,_,w,f,d,I){I.reversedDepth===!0&&(f=-f);let D=o(u,m,_,w,f,d);_.transmission>0?n.push(D):_.transparent===!0?s.push(D):e.push(D)}function c(u,m,_,w,f,d){let I=o(u,m,_,w,f,d);_.transmission>0?n.unshift(I):_.transparent===!0?s.unshift(I):e.unshift(I)}function h(u,m){e.length>1&&e.sort(u||ry),n.length>1&&n.sort(m||ap),s.length>1&&s.sort(m||ap)}function p(){for(let u=t,m=i.length;u<m;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function ay(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new op,i.set(n,[a])):s>=r.length?(a=new op,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function oy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new le};break;case"SpotLight":e={position:new O,direction:new O,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function ly(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var cy=0;function hy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function uy(i){let t=new oy,e=ly(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new He,a=new He;function o(c){let h=0,p=0,u=0;for(let tt=0;tt<9;tt++)n.probe[tt].set(0,0,0);let m=0,_=0,w=0,f=0,d=0,I=0,D=0,b=0,M=0,R=0,F=0,v=0,C=0,V=0;c.sort(hy);for(let tt=0,et=c.length;tt<et;tt++){let H=c[tt],K=H.color,ct=H.intensity,st=H.distance,vt=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Ss?vt=H.shadow.map.texture:vt=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)h+=K.r*ct,p+=K.g*ct,u+=K.b*ct;else if(H.isLightProbe){for(let rt=0;rt<9;rt++)n.probe[rt].addScaledVector(H.sh.coefficients[rt],ct);V++}else if(H.isSunLight){let rt=t.get(H);if(rt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let ht=H.shadow,pt=e.get(H);pt.shadowIntensity=ht.intensity,pt.shadowBias=ht.bias,pt.shadowNormalBias=ht.normalBias,pt.shadowRadius=ht.radius,pt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),n.sunShadow[_]=pt,n.sunShadowMap[_]=vt;let Kt=ht.getViewportCount();for(let Ht=0;Ht<Kt;Ht++)n.sunShadowMatrix[w+Ht]=ht.getMatrix(Ht),n.sunShadowCascade[w+Ht]=ht._cascadeData[Ht];w+=Kt,_++}n.sun[m]=rt,m++}else if(H.isDirectionalLight){let rt=t.get(H);if(rt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let ht=H.shadow,pt=e.get(H);pt.shadowIntensity=ht.intensity,pt.shadowBias=ht.bias,pt.shadowNormalBias=ht.normalBias,pt.shadowRadius=ht.radius,pt.shadowMapSize=ht.mapSize,n.directionalShadow[f]=pt,n.directionalShadowMap[f]=vt,n.directionalShadowMatrix[f]=H.shadow.matrix,M++}n.directional[f]=rt,f++}else if(H.isSpotLight){let rt=t.get(H);rt.position.setFromMatrixPosition(H.matrixWorld),rt.color.copy(K).multiplyScalar(ct),rt.distance=st,rt.coneCos=Math.cos(H.angle),rt.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),rt.decay=H.decay,n.spot[I]=rt;let ht=H.shadow;if(H.map&&(n.spotLightMap[v]=H.map,v++,ht.updateMatrices(H),H.castShadow&&C++),n.spotLightMatrix[I]=ht.matrix,H.castShadow){let pt=e.get(H);pt.shadowIntensity=ht.intensity,pt.shadowBias=ht.bias,pt.shadowNormalBias=ht.normalBias,pt.shadowRadius=ht.radius,pt.shadowMapSize=ht.mapSize,n.spotShadow[I]=pt,n.spotShadowMap[I]=vt,F++}I++}else if(H.isRectAreaLight){let rt=t.get(H);rt.color.copy(K).multiplyScalar(ct),rt.halfWidth.set(H.width*.5,0,0),rt.halfHeight.set(0,H.height*.5,0),n.rectArea[D]=rt,D++}else if(H.isPointLight){let rt=t.get(H);if(rt.color.copy(H.color).multiplyScalar(H.intensity),rt.distance=H.distance,rt.decay=H.decay,H.castShadow){let ht=H.shadow,pt=e.get(H);pt.shadowIntensity=ht.intensity,pt.shadowBias=ht.bias,pt.shadowNormalBias=ht.normalBias,pt.shadowRadius=ht.radius,pt.shadowMapSize=ht.mapSize,pt.shadowCameraNear=ht.camera.near,pt.shadowCameraFar=ht.camera.far,n.pointShadow[d]=pt,n.pointShadowMap[d]=vt,n.pointShadowMatrix[d]=H.shadow.matrix,R++}n.point[d]=rt,d++}else if(H.isHemisphereLight){let rt=t.get(H);rt.skyColor.copy(H.color).multiplyScalar(ct),rt.groundColor.copy(H.groundColor).multiplyScalar(ct),n.hemi[b]=rt,b++}}D>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;let G=n.hash;(G.sunLength!==m||G.directionalLength!==f||G.pointLength!==d||G.spotLength!==I||G.rectAreaLength!==D||G.hemiLength!==b||G.numSunShadows!==_||G.numDirectionalShadows!==M||G.numPointShadows!==R||G.numSpotShadows!==F||G.numSpotMaps!==v||G.numLightProbes!==V)&&(n.sun.length=m,n.directional.length=f,n.spot.length=I,n.rectArea.length=D,n.point.length=d,n.hemi.length=b,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=w,n.sunShadowCascade.length=w,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=F,n.spotShadowMap.length=F,n.spotLightMatrix.length=F+v-C,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=V,G.sunLength=m,G.directionalLength=f,G.pointLength=d,G.spotLength=I,G.rectAreaLength=D,G.hemiLength=b,G.numSunShadows=_,G.numDirectionalShadows=M,G.numPointShadows=R,G.numSpotShadows=F,G.numSpotMaps=v,G.numLightProbes=V,n.version=cy++)}function l(c,h){let p=0,u=0,m=0,_=0,w=0,f=0,d=h.matrixWorldInverse;for(let I=0,D=c.length;I<D;I++){let b=c[I];if(b.isSunLight){let M=n.sun[p];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(d),p++}else if(b.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),u++}else if(b.isSpotLight){let M=n.spot[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),_++}else if(b.isRectAreaLight){let M=n.rectArea[w];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),a.identity(),r.copy(b.matrixWorld),r.premultiply(d),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),w++}else if(b.isPointLight){let M=n.point[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),m++}else if(b.isHemisphereLight){let M=n.hemi[f];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(d),f++}}}return{setup:o,setupView:l,state:n}}function lp(i){let t=new uy(i),e=[],n=[],s=[];function r(u){p.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function dy(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new lp(i),t.set(s,[o])):r>=a.length?(o=new lp(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,py=`uniform sampler2D shadow_pass;
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
}`,my=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],gy=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],cp=new He,Ka=new O,Su=new O;function _y(i,t,e){let n=new Er,s=new Nt,r=new Nt,a=new ke,o=new gl,l=new _l,c={},h=e.maxTextureSize,p={[_s]:kn,[kn]:_s,[Oi]:Oi},u=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:fy,fragmentShader:py}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let _=new rn;_.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Nn(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ka;let d=this.type;this.render=function(R,F,v){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;this.type===tf&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ka);let C=i.getRenderTarget(),V=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),tt=i.state;tt.setBlending(Bi),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);let et=d!==this.type;et&&F.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(K=>K.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,K=R.length;H<K;H++){let ct=R[H],st=ct.shadow;if(st===void 0){oe("WebGLShadowMap:",ct,"has no shadow.");continue}if(st.autoUpdate===!1&&st.needsUpdate===!1)continue;s.copy(st.mapSize);let vt=st.getFrameExtents();s.multiply(vt),r.copy(st.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/vt.x),s.x=r.x*vt.x,st.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/vt.y),s.y=r.y*vt.y,st.mapSize.y=r.y));let rt=i.state.buffers.depth.getReversed();if(st.camera._reversedDepth=rt,st.map===null||et===!0){if(st.map!==null&&(st.map.depthTexture!==null&&(st.map.depthTexture.dispose(),st.map.depthTexture=null),st.map.dispose()),this.type===Pr){if(ct.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}st.map=new $n(s.x,s.y,{format:Ss,type:Ei,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),st.map.texture.name=ct.name+".shadowMap",st.map.depthTexture=new ds(s.x,s.y,wi),st.map.depthTexture.name=ct.name+".shadowMapDepth",st.map.depthTexture.format=Di,st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=_n,st.map.depthTexture.magFilter=_n}else ct.isPointLight?(st.map=new bc(s.x),st.map.depthTexture=new ll(s.x,bi)):(st.map=new $n(s.x,s.y),st.map.depthTexture=new ds(s.x,s.y,bi)),st.map.depthTexture.name=ct.name+".shadowMap",st.map.depthTexture.format=Di,this.type===ka?(st.map.depthTexture.compareFunction=rt?vc:xc,st.map.depthTexture.minFilter=Sn,st.map.depthTexture.magFilter=Sn):(st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=_n,st.map.depthTexture.magFilter=_n);st.camera.updateProjectionMatrix()}st.map.isWebGLCubeRenderTarget!==!0&&(st.map.width!==s.x||st.map.height!==s.y)&&st.map.setSize(s.x,s.y);let ht=st.map.isWebGLCubeRenderTarget?6:st.getViewportCount();ct.isPointLight!==!0&&st.updateMatrices(ct,v);for(let pt=0;pt<ht;pt++){let Kt=st.getCamera(pt);if(ct.isPointLight){let Ht=st.camera,Le=st.matrix,ye=ct.distance||Ht.far;ye!==Ht.far&&(Ht.far=ye,Ht.updateProjectionMatrix()),Ka.setFromMatrixPosition(ct.matrixWorld),Ht.position.copy(Ka),Su.copy(Ht.position),Su.add(my[pt]),Ht.up.copy(gy[pt]),Ht.lookAt(Su),Ht.updateMatrixWorld(),Le.makeTranslation(-Ka.x,-Ka.y,-Ka.z),cp.multiplyMatrices(Ht.projectionMatrix,Ht.matrixWorldInverse),st._frustum.setFromProjectionMatrix(cp,Ht.coordinateSystem,Ht.reversedDepth)}if(st.map.isWebGLCubeRenderTarget)i.setRenderTarget(st.map,pt),i.clear();else{pt===0&&(i.setRenderTarget(st.map),i.clear());let Ht=st.getViewport(pt);a.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),tt.viewport(a)}n=st.getFrustum(pt),b(F,v,Kt,ct,this.type)}st.isPointLightShadow!==!0&&this.type===Pr&&I(st,v),st.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(C,V,G)};function I(R,F){let v=t.update(w);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null?R.mapPass=new $n(s.x,s.y,{format:Ss,type:Ei}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(F,null,v,u,w,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value.set(R.map.width,R.map.height),m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(F,null,v,m,w,null)}function D(R,F,v,C){let V=null,G=v.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(G!==void 0)V=G;else if(V=v.isPointLight===!0?l:o,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){let tt=V.uuid,et=F.uuid,H=c[tt];H===void 0&&(H={},c[tt]=H);let K=H[et];K===void 0&&(K=V.clone(),H[et]=K,F.addEventListener("dispose",M)),V=K}if(V.visible=F.visible,V.wireframe=F.wireframe,C===Pr?V.side=F.shadowSide!==null?F.shadowSide:F.side:V.side=F.shadowSide!==null?F.shadowSide:p[F.side],V.alphaMap=F.alphaMap,V.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,V.map=F.map,V.clipShadows=F.clipShadows,V.clippingPlanes=F.clippingPlanes,V.clipIntersection=F.clipIntersection,V.displacementMap=F.displacementMap,V.displacementScale=F.displacementScale,V.displacementBias=F.displacementBias,V.wireframeLinewidth=F.wireframeLinewidth,V.linewidth=F.linewidth,v.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let tt=i.properties.get(V);tt.light=v}return V}function b(R,F,v,C,V){if(R.visible===!1)return;if(R.layers.test(F.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&V===Pr)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,R.matrixWorld);let et=t.update(R),H=R.material;if(Array.isArray(H)){let K=et.groups;for(let ct=0,st=K.length;ct<st;ct++){let vt=K[ct],rt=H[vt.materialIndex];if(rt&&rt.visible){let ht=D(R,rt,C,V);R.onBeforeShadow(i,R,F,v,et,ht,vt),i.renderBufferDirect(v,null,et,ht,R,vt),R.onAfterShadow(i,R,F,v,et,ht,vt)}}}else if(H.visible){let K=D(R,H,C,V);R.onBeforeShadow(i,R,F,v,et,K,null),i.renderBufferDirect(v,null,et,K,R,null),R.onAfterShadow(i,R,F,v,et,K,null)}}let tt=R.children;for(let et=0,H=tt.length;et<H;et++)b(tt[et],F,v,C,V)}function M(R){R.target.removeEventListener("dispose",M);for(let v in c){let C=c[v],V=R.target.uuid;V in C&&(C[V].dispose(),delete C[V])}}}function xy(i,t){function e(){let z=!1,Tt=new ke,ft=null,Lt=new ke(0,0,0,0);return{setMask:function(zt){ft!==zt&&!z&&(i.colorMask(zt,zt,zt,zt),ft=zt)},setLocked:function(zt){z=zt},setClear:function(zt,gt,Zt,Jt,Be){Be===!0&&(zt*=Jt,gt*=Jt,Zt*=Jt),Tt.set(zt,gt,Zt,Jt),Lt.equals(Tt)===!1&&(i.clearColor(zt,gt,Zt,Jt),Lt.copy(Tt))},reset:function(){z=!1,ft=null,Lt.set(-1,0,0,0)}}}function n(){let z=!1,Tt=!1,ft=null,Lt=null,zt=null;return{setReversed:function(gt){if(Tt!==gt){let Zt=t.get("EXT_clip_control");gt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Tt=gt;let Jt=zt;zt=null,this.setClear(Jt)}},getReversed:function(){return Tt},setTest:function(gt){gt?ut(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(gt){ft!==gt&&!z&&(i.depthMask(gt),ft=gt)},setFunc:function(gt){if(Tt&&(gt=Uf[gt]),Lt!==gt){switch(gt){case Go:i.depthFunc(i.NEVER);break;case Wo:i.depthFunc(i.ALWAYS);break;case $o:i.depthFunc(i.LESS);break;case xr:i.depthFunc(i.LEQUAL);break;case Xo:i.depthFunc(i.EQUAL);break;case qo:i.depthFunc(i.GEQUAL);break;case Yo:i.depthFunc(i.GREATER);break;case Zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Lt=gt}},setLocked:function(gt){z=gt},setClear:function(gt){zt!==gt&&(zt=gt,Tt&&(gt=1-gt),i.clearDepth(gt))},reset:function(){z=!1,ft=null,Lt=null,zt=null,Tt=!1}}}function s(){let z=!1,Tt=null,ft=null,Lt=null,zt=null,gt=null,Zt=null,Jt=null,Be=null;return{setTest:function(be){z||(be?ut(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(be){Tt!==be&&!z&&(i.stencilMask(be),Tt=be)},setFunc:function(be,Tn,Yn){(ft!==be||Lt!==Tn||zt!==Yn)&&(i.stencilFunc(be,Tn,Yn),ft=be,Lt=Tn,zt=Yn)},setOp:function(be,Tn,Yn){(gt!==be||Zt!==Tn||Jt!==Yn)&&(i.stencilOp(be,Tn,Yn),gt=be,Zt=Tn,Jt=Yn)},setLocked:function(be){z=be},setClear:function(be){Be!==be&&(i.clearStencil(be),Be=be)},reset:function(){z=!1,Tt=null,ft=null,Lt=null,zt=null,gt=null,Zt=null,Jt=null,Be=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},p={},u={},m=new WeakMap,_=[],w=null,f=!1,d=null,I=null,D=null,b=null,M=null,R=null,F=null,v=new le(0,0,0),C=0,V=!1,G=null,tt=null,et=null,H=null,K=null,ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),st=!1,vt=0,rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(vt=parseFloat(/^WebGL (\d)/.exec(rt)[1]),st=vt>=1):rt.indexOf("OpenGL ES")!==-1&&(vt=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),st=vt>=2);let ht=null,pt={},Kt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),Le=new ke().fromArray(Kt),ye=new ke().fromArray(Ht);function Ae(z,Tt,ft,Lt){let zt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(z,gt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<ft;Zt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,zt):i.texImage2D(Tt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,zt);return gt}let nt={};nt[i.TEXTURE_2D]=Ae(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(i.DEPTH_TEST),a.setFunc(xr),Mt(!1),wt(kh),ut(i.CULL_FACE),mt(Bi);function ut(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Dt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function ie(z,Tt){return u[z]!==Tt?(i.bindFramebuffer(z,Tt),u[z]=Tt,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Tt),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Rt(z,Tt){let ft=_,Lt=!1;if(z){ft=m.get(Tt),ft===void 0&&(ft=[],m.set(Tt,ft));let zt=z.textures;if(ft.length!==zt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Zt=zt.length;gt<Zt;gt++)ft[gt]=i.COLOR_ATTACHMENT0+gt;ft.length=zt.length,Lt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,Lt=!0);Lt&&i.drawBuffers(ft)}function Wt(z){return w!==z?(i.useProgram(z),w=z,!0):!1}let De={[ks]:i.FUNC_ADD,[nf]:i.FUNC_SUBTRACT,[sf]:i.FUNC_REVERSE_SUBTRACT};De[rf]=i.MIN,De[af]=i.MAX;let U={[of]:i.ZERO,[lf]:i.ONE,[cf]:i.SRC_COLOR,[Wh]:i.SRC_ALPHA,[mf]:i.SRC_ALPHA_SATURATE,[ff]:i.DST_COLOR,[uf]:i.DST_ALPHA,[hf]:i.ONE_MINUS_SRC_COLOR,[$h]:i.ONE_MINUS_SRC_ALPHA,[pf]:i.ONE_MINUS_DST_COLOR,[df]:i.ONE_MINUS_DST_ALPHA,[gf]:i.CONSTANT_COLOR,[_f]:i.ONE_MINUS_CONSTANT_COLOR,[xf]:i.CONSTANT_ALPHA,[vf]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(z,Tt,ft,Lt,zt,gt,Zt,Jt,Be,be){if(z===Bi){f===!0&&(Dt(i.BLEND),f=!1);return}if(f===!1&&(ut(i.BLEND),f=!0),z!==ef){if(z!==d||be!==V){if((I!==ks||M!==ks)&&(i.blendEquation(i.FUNC_ADD),I=ks,M=ks),be)switch(z){case Lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vh:i.blendFunc(i.ONE,i.ONE);break;case Hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",z);break}else switch(z){case Lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hh:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gh:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",z);break}D=null,b=null,R=null,F=null,v.set(0,0,0),C=0,d=z,V=be}return}zt=zt||Tt,gt=gt||ft,Zt=Zt||Lt,(Tt!==I||zt!==M)&&(i.blendEquationSeparate(De[Tt],De[zt]),I=Tt,M=zt),(ft!==D||Lt!==b||gt!==R||Zt!==F)&&(i.blendFuncSeparate(U[ft],U[Lt],U[gt],U[Zt]),D=ft,b=Lt,R=gt,F=Zt),(Jt.equals(v)===!1||Be!==C)&&(i.blendColor(Jt.r,Jt.g,Jt.b,Be),v.copy(Jt),C=Be),d=z,V=!1}function bt(z,Tt){z.side===Oi?Dt(i.CULL_FACE):ut(i.CULL_FACE);let ft=z.side===kn;Tt&&(ft=!ft),Mt(ft),z.blending===Lr&&z.transparent===!1?mt(Bi):mt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let Lt=z.stencilWrite;o.setTest(Lt),Lt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),te(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(z){G!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),G=z)}function wt(z){z!==jd?(ut(i.CULL_FACE),z!==tt&&(z===kh?i.cullFace(i.BACK):z===Qd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),tt=z}function ne(z){z!==et&&(st&&i.lineWidth(z),et=z)}function te(z,Tt,ft){z?(ut(i.POLYGON_OFFSET_FILL),(H!==Tt||K!==ft)&&(H=Tt,K=ft,a.getReversed()&&(Tt=-Tt),i.polygonOffset(Tt,ft))):Dt(i.POLYGON_OFFSET_FILL)}function kt(z){z?ut(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function he(z){z===void 0&&(z=i.TEXTURE0+ct-1),ht!==z&&(i.activeTexture(z),ht=z)}function B(z,Tt,ft){ft===void 0&&(ht===null?ft=i.TEXTURE0+ct-1:ft=ht);let Lt=pt[ft];Lt===void 0&&(Lt={type:void 0,texture:void 0},pt[ft]=Lt),(Lt.type!==z||Lt.texture!==Tt)&&(ht!==ft&&(i.activeTexture(ft),ht=ft),i.bindTexture(z,Tt||nt[z]),Lt.type=z,Lt.texture=Tt)}function Ue(){let z=pt[ht];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function _e(){try{i.compressedTexImage2D(...arguments)}catch(z){ce("WebGLState:",z)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(z){ce("WebGLState:",z)}}function x(){try{i.texSubImage2D(...arguments)}catch(z){ce("WebGLState:",z)}}function $(){try{i.texSubImage3D(...arguments)}catch(z){ce("WebGLState:",z)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(z){ce("WebGLState:",z)}}function ot(){try{i.compressedTexSubImage3D(...arguments)}catch(z){ce("WebGLState:",z)}}function Et(){try{i.texStorage2D(...arguments)}catch(z){ce("WebGLState:",z)}}function At(){try{i.texStorage3D(...arguments)}catch(z){ce("WebGLState:",z)}}function lt(){try{i.texImage2D(...arguments)}catch(z){ce("WebGLState:",z)}}function dt(){try{i.texImage3D(...arguments)}catch(z){ce("WebGLState:",z)}}function Ct(z){return p[z]!==void 0?p[z]:i.getParameter(z)}function Yt(z,Tt){p[z]!==Tt&&(i.pixelStorei(z,Tt),p[z]=Tt)}function Ot(z){Le.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Le.copy(z))}function It(z){ye.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),ye.copy(z))}function jt(z,Tt){let ft=c.get(Tt);ft===void 0&&(ft=new WeakMap,c.set(Tt,ft));let Lt=ft.get(z);Lt===void 0&&(Lt=i.getUniformBlockIndex(Tt,z.name),ft.set(z,Lt))}function re(z,Tt){let Lt=c.get(Tt).get(z);l.get(Tt)!==Lt&&(i.uniformBlockBinding(Tt,Lt,z.__bindingPointIndex),l.set(Tt,Lt))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},ht=null,pt={},u={},m=new WeakMap,_=[],w=null,f=!1,d=null,I=null,D=null,b=null,M=null,R=null,F=null,v=new le(0,0,0),C=0,V=!1,G=null,tt=null,et=null,H=null,K=null,Le.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ut,disable:Dt,bindFramebuffer:ie,drawBuffers:Rt,useProgram:Wt,setBlending:mt,setMaterial:bt,setFlipSided:Mt,setCullFace:wt,setLineWidth:ne,setPolygonOffset:te,setScissorTest:kt,activeTexture:he,bindTexture:B,unbindTexture:Ue,compressedTexImage2D:_e,compressedTexImage3D:T,texImage2D:lt,texImage3D:dt,pixelStorei:Yt,getParameter:Ct,updateUBOMapping:jt,uniformBlockBinding:re,texStorage2D:Et,texStorage3D:At,texSubImage2D:x,texSubImage3D:$,compressedTexSubImage2D:j,compressedTexSubImage3D:ot,scissor:Ot,viewport:It,reset:se}}function vy(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,h=new WeakMap,p=new Set,u,m=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(T,x){return _?new OffscreenCanvas(T,x):da("canvas")}function f(T,x,$){let j=1,ot=_e(T);if((ot.width>$||ot.height>$)&&(j=$/Math.max(ot.width,ot.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Et=Math.floor(j*ot.width),At=Math.floor(j*ot.height);u===void 0&&(u=w(Et,At));let lt=x?w(Et,At):u;return lt.width=Et,lt.height=At,lt.getContext("2d").drawImage(T,0,0,Et,At),oe("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+Et+"x"+At+")."),lt}else return"data"in T&&oe("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),T;return T}function d(T){return T.generateMipmaps}function I(T){i.generateMipmap(T)}function D(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,x,$,j,ot,Et=!1){if(T!==null){if(i[T]!==void 0)return i[T];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let At;j&&(At=t.get("EXT_texture_norm16"),At||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=x;if(x===i.RED&&($===i.FLOAT&&(lt=i.R32F),$===i.HALF_FLOAT&&(lt=i.R16F),$===i.UNSIGNED_BYTE&&(lt=i.R8),$===i.UNSIGNED_SHORT&&At&&(lt=At.R16_EXT),$===i.SHORT&&At&&(lt=At.R16_SNORM_EXT)),x===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(lt=i.R8UI),$===i.UNSIGNED_SHORT&&(lt=i.R16UI),$===i.UNSIGNED_INT&&(lt=i.R32UI),$===i.BYTE&&(lt=i.R8I),$===i.SHORT&&(lt=i.R16I),$===i.INT&&(lt=i.R32I)),x===i.RG&&($===i.FLOAT&&(lt=i.RG32F),$===i.HALF_FLOAT&&(lt=i.RG16F),$===i.UNSIGNED_BYTE&&(lt=i.RG8),$===i.UNSIGNED_SHORT&&At&&(lt=At.RG16_EXT),$===i.SHORT&&At&&(lt=At.RG16_SNORM_EXT)),x===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(lt=i.RG8UI),$===i.UNSIGNED_SHORT&&(lt=i.RG16UI),$===i.UNSIGNED_INT&&(lt=i.RG32UI),$===i.BYTE&&(lt=i.RG8I),$===i.SHORT&&(lt=i.RG16I),$===i.INT&&(lt=i.RG32I)),x===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),$===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),$===i.UNSIGNED_INT&&(lt=i.RGB32UI),$===i.BYTE&&(lt=i.RGB8I),$===i.SHORT&&(lt=i.RGB16I),$===i.INT&&(lt=i.RGB32I)),x===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),$===i.UNSIGNED_INT&&(lt=i.RGBA32UI),$===i.BYTE&&(lt=i.RGBA8I),$===i.SHORT&&(lt=i.RGBA16I),$===i.INT&&(lt=i.RGBA32I)),x===i.RGB&&($===i.UNSIGNED_SHORT&&At&&(lt=At.RGB16_EXT),$===i.SHORT&&At&&(lt=At.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(lt=i.R11F_G11F_B10F)),x===i.RGBA){let dt=Et?ua:Ie.getTransfer(ot);$===i.FLOAT&&(lt=i.RGBA32F),$===i.HALF_FLOAT&&(lt=i.RGBA16F),$===i.UNSIGNED_BYTE&&(lt=dt===ze?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&At&&(lt=At.RGBA16_EXT),$===i.SHORT&&At&&(lt=At.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function M(T,x){let $;return T?x===null||x===bi||x===Nr?$=i.DEPTH24_STENCIL8:x===wi?$=i.DEPTH32F_STENCIL8:x===Dr&&($=i.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===bi||x===Nr?$=i.DEPTH_COMPONENT24:x===wi?$=i.DEPTH_COMPONENT32F:x===Dr&&($=i.DEPTH_COMPONENT16),$}function R(T,x){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==_n&&T.minFilter!==Sn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function F(T){let x=T.target;x.removeEventListener("dispose",F),C(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&p.delete(x)}function v(T){let x=T.target;x.removeEventListener("dispose",v),G(x)}function C(T){let x=n.get(T);if(x.__webglInit===void 0)return;let $=T.source,j=m.get($);if(j){let ot=j[x.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&V(T),Object.keys(j).length===0&&m.delete($)}n.remove(T)}function V(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let $=T.source,j=m.get($);delete j[x.__cacheKey],a.memory.textures--}function G(T){let x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let ot=0;ot<x.__webglFramebuffer[j].length;ot++)i.deleteFramebuffer(x.__webglFramebuffer[j][ot]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let $=T.textures;for(let j=0,ot=$.length;j<ot;j++){let Et=n.get($[j]);Et.__webglTexture&&(i.deleteTexture(Et.__webglTexture),a.memory.textures--),n.remove($[j])}n.remove(T)}let tt=0;function et(){tt=0}function H(){return tt}function K(T){tt=T}function ct(){let T=tt;return T>=s.maxTextures&&oe("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),tt+=1,T}function st(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function vt(T,x){let $=n.get(T);if(T.isVideoTexture&&B(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&$.__version!==T.version){let j=T.image;if(j===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt($,T,x);return}}else T.isExternalTexture&&($.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+x)}function rt(T,x){let $=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&$.__version!==T.version){Dt($,T,x);return}else T.isExternalTexture&&($.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+x)}function ht(T,x){let $=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&$.__version!==T.version){Dt($,T,x);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+x)}function pt(T,x){let $=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&$.__version!==T.version){ie($,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+x)}let Kt={[Jo]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[Ko]:i.MIRRORED_REPEAT},Ht={[_n]:i.NEAREST,[Mf]:i.NEAREST_MIPMAP_NEAREST,[Ha]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Nl]:i.LINEAR_MIPMAP_NEAREST,[vs]:i.LINEAR_MIPMAP_LINEAR},Le={[Tf]:i.NEVER,[Pf]:i.ALWAYS,[Af]:i.LESS,[xc]:i.LEQUAL,[Cf]:i.EQUAL,[vc]:i.GEQUAL,[Rf]:i.GREATER,[If]:i.NOTEQUAL};function ye(T,x){if(x.type===wi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Sn||x.magFilter===Nl||x.magFilter===Ha||x.magFilter===vs||x.minFilter===Sn||x.minFilter===Nl||x.minFilter===Ha||x.minFilter===vs)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Kt[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Kt[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Kt[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Ht[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Ht[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Le[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===_n||x.minFilter!==Ha&&x.minFilter!==vs||x.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ae(T,x){let $=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",F));let j=x.source,ot=m.get(j);ot===void 0&&(ot={},m.set(j,ot));let Et=st(x);if(Et!==T.__cacheKey){ot[Et]===void 0&&(ot[Et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,$=!0),ot[Et].usedTimes++;let At=ot[T.__cacheKey];At!==void 0&&(ot[T.__cacheKey].usedTimes--,At.usedTimes===0&&V(x)),T.__cacheKey=Et,T.__webglTexture=ot[Et].texture}return $}function nt(T,x,$){return Math.floor(Math.floor(T/$)/x)}function ut(T,x,$,j){let Et=T.updateRanges;if(Et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,$,j,x.data);else{Et.sort((Yt,Ot)=>Yt.start-Ot.start);let At=0;for(let Yt=1;Yt<Et.length;Yt++){let Ot=Et[At],It=Et[Yt],jt=Ot.start+Ot.count,re=nt(It.start,x.width,4),se=nt(Ot.start,x.width,4);It.start<=jt+1&&re===se&&nt(It.start+It.count-1,x.width,4)===re?Ot.count=Math.max(Ot.count,It.start+It.count-Ot.start):(++At,Et[At]=It)}Et.length=At+1;let lt=e.getParameter(i.UNPACK_ROW_LENGTH),dt=e.getParameter(i.UNPACK_SKIP_PIXELS),Ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Yt=0,Ot=Et.length;Yt<Ot;Yt++){let It=Et[Yt],jt=Math.floor(It.start/4),re=Math.ceil(It.count/4),se=jt%x.width,z=Math.floor(jt/x.width),Tt=re,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,se),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,se,z,Tt,ft,$,j,x.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,lt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function Dt(T,x,$){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);let ot=Ae(T,x),Et=x.source;e.bindTexture(j,T.__webglTexture,i.TEXTURE0+$);let At=n.get(Et);if(Et.version!==At.__version||ot===!0){if(e.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ft=Ie.getPrimaries(Ie.workingColorSpace),Lt=x.colorSpace===es?null:Ie.getPrimaries(x.colorSpace),zt=x.colorSpace===es||ft===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let dt=f(x.image,!1,s.maxTextureSize);dt=Ue(x,dt);let Ct=r.convert(x.format,x.colorSpace),Yt=r.convert(x.type),Ot=b(x.internalFormat,Ct,Yt,x.normalized,x.colorSpace,x.isVideoTexture);ye(j,x);let It,jt=x.mipmaps,re=x.isVideoTexture!==!0,se=At.__version===void 0||ot===!0,z=Et.dataReady,Tt=R(x,dt);if(x.isDepthTexture)Ot=M(x.format===ys,x.type),se&&(re?e.texStorage2D(i.TEXTURE_2D,1,Ot,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,dt.width,dt.height,0,Ct,Yt,null));else if(x.isDataTexture)if(jt.length>0){re&&se&&e.texStorage2D(i.TEXTURE_2D,Tt,Ot,jt[0].width,jt[0].height);for(let ft=0,Lt=jt.length;ft<Lt;ft++)It=jt[ft],re?z&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,It.width,It.height,Ct,Yt,It.data):e.texImage2D(i.TEXTURE_2D,ft,Ot,It.width,It.height,0,Ct,Yt,It.data);x.generateMipmaps=!1}else re?(se&&e.texStorage2D(i.TEXTURE_2D,Tt,Ot,dt.width,dt.height),z&&ut(x,dt,Ct,Yt)):e.texImage2D(i.TEXTURE_2D,0,Ot,dt.width,dt.height,0,Ct,Yt,dt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){re&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Ot,jt[0].width,jt[0].height,dt.depth);for(let ft=0,Lt=jt.length;ft<Lt;ft++)if(It=jt[ft],x.format!==di)if(Ct!==null)if(re){if(z)if(x.layerUpdates.size>0){let zt=mu(It.width,It.height,x.format,x.type);for(let gt of x.layerUpdates){let Zt=It.data.subarray(gt*zt/It.data.BYTES_PER_ELEMENT,(gt+1)*zt/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,gt,It.width,It.height,1,Ct,Zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,It.width,It.height,dt.depth,Ct,It.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Ot,It.width,It.height,dt.depth,0,It.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,It.width,It.height,dt.depth,Ct,Yt,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Ot,It.width,It.height,dt.depth,0,Ct,Yt,It.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{re&&se&&e.texStorage2D(i.TEXTURE_2D,Tt,Ot,jt[0].width,jt[0].height);for(let ft=0,Lt=jt.length;ft<Lt;ft++)It=jt[ft],x.format!==di?Ct!==null?re?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,It.width,It.height,Ct,It.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Ot,It.width,It.height,0,It.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?z&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,It.width,It.height,Ct,Yt,It.data):e.texImage2D(i.TEXTURE_2D,ft,Ot,It.width,It.height,0,Ct,Yt,It.data)}else if(x.isDataArrayTexture)if(re){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Ot,dt.width,dt.height,dt.depth),z)if(x.layerUpdates.size>0){let ft=mu(dt.width,dt.height,x.format,x.type);for(let Lt of x.layerUpdates){let zt=dt.data.subarray(Lt*ft/dt.data.BYTES_PER_ELEMENT,(Lt+1)*ft/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Lt,dt.width,dt.height,1,Ct,Yt,zt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Ct,Yt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,dt.width,dt.height,dt.depth,0,Ct,Yt,dt.data);else if(x.isData3DTexture)re?(se&&e.texStorage3D(i.TEXTURE_3D,Tt,Ot,dt.width,dt.height,dt.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Ct,Yt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,dt.width,dt.height,dt.depth,0,Ct,Yt,dt.data);else if(x.isFramebufferTexture){if(se)if(re)e.texStorage2D(i.TEXTURE_2D,Tt,Ot,dt.width,dt.height);else{let ft=dt.width,Lt=dt.height;for(let zt=0;zt<Tt;zt++)e.texImage2D(i.TEXTURE_2D,zt,Ot,ft,Lt,0,Ct,Yt,null),ft>>=1,Lt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),dt.parentNode!==ft){ft.appendChild(dt),p.add(x),ft.onpaint=Lt=>{let zt=Lt.changedElements;for(let gt of p)zt.includes(gt.image)&&(gt.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,dt);else{let zt=i.RGBA,gt=i.RGBA,Zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,zt,gt,Zt,dt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(jt.length>0){if(re&&se){let ft=_e(jt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Ot,ft.width,ft.height)}for(let ft=0,Lt=jt.length;ft<Lt;ft++)It=jt[ft],re?z&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Ct,Yt,It):e.texImage2D(i.TEXTURE_2D,ft,Ot,Ct,Yt,It);x.generateMipmaps=!1}else if(re){if(se){let ft=_e(dt);e.texStorage2D(i.TEXTURE_2D,Tt,Ot,ft.width,ft.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Yt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Ct,Yt,dt);d(x)&&I(j),At.__version=Et.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ie(T,x,$){if(x.image.length!==6)return;let j=Ae(T,x),ot=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+$);let Et=n.get(ot);if(ot.version!==Et.__version||j===!0){e.activeTexture(i.TEXTURE0+$);let At=Ie.getPrimaries(Ie.workingColorSpace),lt=x.colorSpace===es?null:Ie.getPrimaries(x.colorSpace),dt=x.colorSpace===es||At===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Ct=x.isCompressedTexture||x.image[0].isCompressedTexture,Yt=x.image[0]&&x.image[0].isDataTexture,Ot=[];for(let gt=0;gt<6;gt++)!Ct&&!Yt?Ot[gt]=f(x.image[gt],!0,s.maxCubemapSize):Ot[gt]=Yt?x.image[gt].image:x.image[gt],Ot[gt]=Ue(x,Ot[gt]);let It=Ot[0],jt=r.convert(x.format,x.colorSpace),re=r.convert(x.type),se=b(x.internalFormat,jt,re,x.normalized,x.colorSpace),z=x.isVideoTexture!==!0,Tt=Et.__version===void 0||j===!0,ft=ot.dataReady,Lt=R(x,It);ye(i.TEXTURE_CUBE_MAP,x);let zt;if(Ct){z&&Tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,se,It.width,It.height);for(let gt=0;gt<6;gt++){zt=Ot[gt].mipmaps;for(let Zt=0;Zt<zt.length;Zt++){let Jt=zt[Zt];x.format!==di?jt!==null?z?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,0,0,Jt.width,Jt.height,jt,Jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,se,Jt.width,Jt.height,0,Jt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,0,0,Jt.width,Jt.height,jt,re,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,se,Jt.width,Jt.height,0,jt,re,Jt.data)}}}else{if(zt=x.mipmaps,z&&Tt){zt.length>0&&Lt++;let gt=_e(Ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,se,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Yt){z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ot[gt].width,Ot[gt].height,jt,re,Ot[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,Ot[gt].width,Ot[gt].height,0,jt,re,Ot[gt].data);for(let Zt=0;Zt<zt.length;Zt++){let Be=zt[Zt].image[gt].image;z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,0,0,Be.width,Be.height,jt,re,Be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,se,Be.width,Be.height,0,jt,re,Be.data)}}else{z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,jt,re,Ot[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,jt,re,Ot[gt]);for(let Zt=0;Zt<zt.length;Zt++){let Jt=zt[Zt];z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,0,0,jt,re,Jt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,se,jt,re,Jt.image[gt])}}}d(x)&&I(i.TEXTURE_CUBE_MAP),Et.__version=ot.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Rt(T,x,$,j,ot,Et){let At=r.convert($.format,$.colorSpace),lt=r.convert($.type),dt=b($.internalFormat,At,lt,$.normalized,$.colorSpace),Ct=n.get(x),Yt=n.get($);if(Yt.__renderTarget=x,!Ct.__hasExternalTextures){let Ot=Math.max(1,x.width>>Et),It=Math.max(1,x.height>>Et);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,Et,dt,Ot,It,x.depth,0,At,lt,null):e.texImage2D(ot,Et,dt,Ot,It,0,At,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ot,Yt.__webglTexture,0,kt(x)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ot,Yt.__webglTexture,Et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(T,x,$){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let j=x.depthTexture,ot=j&&j.isDepthTexture?j.type:null,Et=M(x.stencilBuffer,ot),At=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;he(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt(x),Et,x.width,x.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt(x),Et,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Et,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,T)}else{let j=x.textures;for(let ot=0;ot<j.length;ot++){let Et=j[ot],At=r.convert(Et.format,Et.colorSpace),lt=r.convert(Et.type),dt=b(Et.internalFormat,At,lt,Et.normalized,Et.colorSpace);he(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt(x),dt,x.width,x.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt(x),dt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,dt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(T,x,$){let j=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=n.get(x.depthTexture);if(ot.__renderTarget=x,(!ot.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j){if(ot.__webglInit===void 0&&(ot.__webglInit=!0,x.depthTexture.addEventListener("dispose",F)),ot.__webglTexture===void 0){ot.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),ye(i.TEXTURE_CUBE_MAP,x.depthTexture);let Ct=r.convert(x.depthTexture.format),Yt=r.convert(x.depthTexture.type),Ot;x.depthTexture.format===Di?Ot=i.DEPTH_COMPONENT24:x.depthTexture.format===ys&&(Ot=i.DEPTH24_STENCIL8);for(let It=0;It<6;It++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Ot,x.width,x.height,0,Ct,Yt,null)}}else vt(x.depthTexture,0);let Et=ot.__webglTexture,At=kt(x),lt=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,dt=x.depthTexture.format===ys?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Di)he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,lt,Et,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,dt,lt,Et,0);else if(x.depthTexture.format===ys)he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,lt,Et,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,dt,lt,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function U(T){let x=n.get(T),$=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let j=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){let ot=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",ot)};j.addEventListener("dispose",ot),x.__depthDisposeCallback=ot}x.__boundDepthTexture=j}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if($)for(let j=0;j<6;j++)De(x.__webglFramebuffer[j],T,j);else{let j=T.texture.mipmaps;j&&j.length>0?De(x.__webglFramebuffer[0],T,0):De(x.__webglFramebuffer,T,0)}else if($){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=i.createRenderbuffer(),Wt(x.__webglDepthbuffer[j],T,!1);else{let ot=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=x.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Et),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,Et)}}else{let j=T.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Wt(x.__webglDepthbuffer,T,!1);else{let ot=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Et),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,Et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(T,x,$){let j=n.get(T);x!==void 0&&Rt(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&U(T)}function bt(T){let x=T.texture,$=n.get(T),j=n.get(x);T.addEventListener("dispose",v);let ot=T.textures,Et=T.isWebGLCubeRenderTarget===!0,At=ot.length>1;if(At||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,a.memory.textures++),Et){$.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer[lt]=[];for(let dt=0;dt<x.mipmaps.length;dt++)$.__webglFramebuffer[lt][dt]=i.createFramebuffer()}else $.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer=[];for(let lt=0;lt<x.mipmaps.length;lt++)$.__webglFramebuffer[lt]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(At)for(let lt=0,dt=ot.length;lt<dt;lt++){let Ct=n.get(ot[lt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&he(T)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let lt=0;lt<ot.length;lt++){let dt=ot[lt];$.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[lt]);let Ct=r.convert(dt.format,dt.colorSpace),Yt=r.convert(dt.type),Ot=b(dt.internalFormat,Ct,Yt,dt.normalized,dt.colorSpace,T.isXRRenderTarget===!0),It=kt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Ot,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,$.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),Wt($.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Et){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ye(i.TEXTURE_CUBE_MAP,x);for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)Rt($.__webglFramebuffer[lt][dt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,dt);else Rt($.__webglFramebuffer[lt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);d(x)&&I(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let lt=0,dt=ot.length;lt<dt;lt++){let Ct=ot[lt],Yt=n.get(Ct),Ot=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Ot=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ot,Yt.__webglTexture),ye(Ot,Ct),Rt($.__webglFramebuffer,T,Ct,i.COLOR_ATTACHMENT0+lt,Ot,0),d(Ct)&&I(Ot)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(lt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,j.__webglTexture),ye(lt,x),x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)Rt($.__webglFramebuffer[dt],T,x,i.COLOR_ATTACHMENT0,lt,dt);else Rt($.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,lt,0);d(x)&&I(lt),e.unbindTexture()}T.depthBuffer&&U(T)}function Mt(T){let x=T.textures;for(let $=0,j=x.length;$<j;$++){let ot=x[$];if(d(ot)){let Et=D(T),At=n.get(ot).__webglTexture;e.bindTexture(Et,At),I(Et),e.unbindTexture()}}}let wt=[],ne=[];function te(T){if(T.samples>0){if(he(T)===!1){let x=T.textures,$=T.width,j=T.height,ot=i.COLOR_BUFFER_BIT,Et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(T),lt=x.length>1;if(lt)for(let Ct=0;Ct<x.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);let dt=T.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Ct=0;Ct<x.length;Ct++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Ct]);let Yt=n.get(x[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,$,j,0,0,$,j,ot,i.NEAREST),l===!0&&(wt.length=0,ne.length=0,wt.push(i.COLOR_ATTACHMENT0+Ct),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(wt.push(Et),ne.push(Et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Ct=0;Ct<x.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,At.__webglColorRenderbuffer[Ct]);let Yt=n.get(x[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function kt(T){return Math.min(s.maxSamples,T.samples)}function he(T){let x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function B(T){let x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Ue(T,x){let $=T.colorSpace,j=T.format,ot=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||$!==ha&&$!==es&&(Ie.getTransfer($)===ze?(j!==di||ot!==Xn)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",$)),x}function _e(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=ct,this.resetTextureUnits=et,this.getTextureUnits=H,this.setTextureUnits=K,this.setTexture2D=vt,this.setTexture2DArray=rt,this.setTexture3D=ht,this.setTextureCube=pt,this.rebindTextures=mt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function yy(i,t){function e(n,s=es){let r,a=Ie.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ol)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===iu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===tu)return i.BYTE;if(n===eu)return i.SHORT;if(n===Dr)return i.UNSIGNED_SHORT;if(n===Ul)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===wi)return i.FLOAT;if(n===Ei)return i.HALF_FLOAT;if(n===su)return i.ALPHA;if(n===ru)return i.RGB;if(n===di)return i.RGBA;if(n===Di)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===au)return i.RED;if(n===Bl)return i.RED_INTEGER;if(n===Ss)return i.RG;if(n===zl)return i.RG_INTEGER;if(n===kl)return i.RGBA_INTEGER;if(n===Ga||n===Wa||n===$a||n===Xa)if(a===ze)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vl||n===Hl||n===Gl||n===Wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$l||n===Xl||n===ql||n===Yl||n===Zl||n===qa||n===Jl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$l||n===Xl)return a===ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ql)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yl)return r.COMPRESSED_R11_EAC;if(n===Zl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===qa)return r.COMPRESSED_RG11_EAC;if(n===Jl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ec)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ic)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uc||n===dc||n===fc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===uc)return a===ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pc||n===mc||n===Ya||n===gc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===pc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,My=`
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

}`,Ru=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Sa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new vn({vertexShader:Sy,fragmentShader:My,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nn(new Ia(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Iu=class extends Ni{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,m=null,_=null,w=typeof XRWebGLBinding<"u",f=new Ru,d={},I=e.getContextAttributes(),D=null,b=null,M=[],R=[],F=new Nt,v=null,C=null,V=new Dn;V.viewport=new ke;let G=new Dn;G.viewport=new ke;let tt=[V,G],et=new Il,H=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ut=M[nt];return ut===void 0&&(ut=new wr,M[nt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(nt){let ut=M[nt];return ut===void 0&&(ut=new wr,M[nt]=ut),ut.getGripSpace()},this.getHand=function(nt){let ut=M[nt];return ut===void 0&&(ut=new wr,M[nt]=ut),ut.getHandSpace()};function ct(nt){let ut=R.indexOf(nt.inputSource);if(ut===-1)return;let Dt=M[ut];Dt!==void 0&&(Dt.update(nt.inputSource,nt.frame,c||a),Dt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function st(){s.removeEventListener("select",ct),s.removeEventListener("selectstart",ct),s.removeEventListener("selectend",ct),s.removeEventListener("squeeze",ct),s.removeEventListener("squeezestart",ct),s.removeEventListener("squeezeend",ct),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",vt);for(let nt=0;nt<M.length;nt++){let ut=R[nt];ut!==null&&(R[nt]=null,M[nt].disconnect(ut))}H=null,K=null,f.reset();for(let nt in d)delete d[nt];if(t.setRenderTarget(D),m=null,u=null,p=null,s=null,b=null,Ae.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(F.width,F.height,!1),C!==null){let nt=C.camera;nt.fov=C.fov,nt.zoom=C.zoom,nt.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,n.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&w&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(D=t.getRenderTarget(),s.addEventListener("select",ct),s.addEventListener("selectstart",ct),s.addEventListener("selectend",ct),s.addEventListener("squeeze",ct),s.addEventListener("squeezestart",ct),s.addEventListener("squeezeend",ct),s.addEventListener("end",st),s.addEventListener("inputsourceschange",vt),I.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(F),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,ie=null,Rt=null;I.depth&&(Rt=I.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Dt=I.stencil?ys:Di,ie=I.stencil?Nr:bi);let Wt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Wt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new $n(u.textureWidth,u.textureHeight,{format:di,type:Xn,depthTexture:new ds(u.textureWidth,u.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Dt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Dt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new $n(m.framebufferWidth,m.framebufferHeight,{format:di,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ae.setContext(s),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function vt(nt){for(let ut=0;ut<nt.removed.length;ut++){let Dt=nt.removed[ut],ie=R.indexOf(Dt);ie>=0&&(R[ie]=null,M[ie].disconnect(Dt))}for(let ut=0;ut<nt.added.length;ut++){let Dt=nt.added[ut],ie=R.indexOf(Dt);if(ie===-1){for(let Wt=0;Wt<M.length;Wt++)if(Wt>=R.length){R.push(Dt),ie=Wt;break}else if(R[Wt]===null){R[Wt]=Dt,ie=Wt;break}if(ie===-1)break}let Rt=M[ie];Rt&&Rt.connect(Dt)}}let rt=new O,ht=new O;function pt(nt,ut,Dt){rt.setFromMatrixPosition(ut.matrixWorld),ht.setFromMatrixPosition(Dt.matrixWorld);let ie=rt.distanceTo(ht),Rt=ut.projectionMatrix.elements,Wt=Dt.projectionMatrix.elements,De=Rt[14]/(Rt[10]-1),U=Rt[14]/(Rt[10]+1),mt=(Rt[9]+1)/Rt[5],bt=(Rt[9]-1)/Rt[5],Mt=(Rt[8]-1)/Rt[0],wt=(Wt[8]+1)/Wt[0],ne=De*Mt,te=De*wt,kt=ie/(-Mt+wt),he=kt*-Mt;if(ut.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(he),nt.translateZ(kt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Rt[10]===-1)nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{let B=De+kt,Ue=U+kt,_e=ne-he,T=te+(ie-he),x=mt*U/Ue*B,$=bt*U/Ue*B;nt.projectionMatrix.makePerspective(_e,T,x,$,B,Ue),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function Kt(nt,ut){ut===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ut.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let ut=nt.near,Dt=nt.far;f.texture!==null&&(f.depthNear>0&&(ut=f.depthNear),f.depthFar>0&&(Dt=f.depthFar)),et.near=G.near=V.near=ut,et.far=G.far=V.far=Dt,(H!==et.near||K!==et.far)&&(s.updateRenderState({depthNear:et.near,depthFar:et.far}),H=et.near,K=et.far),et.layers.mask=nt.layers.mask|6,V.layers.mask=et.layers.mask&-5,G.layers.mask=et.layers.mask&-3;let ie=nt.parent,Rt=et.cameras;Kt(et,ie);for(let Wt=0;Wt<Rt.length;Wt++)Kt(Rt[Wt],ie);Rt.length===2?pt(et,V,G):et.projectionMatrix.copy(V.projectionMatrix),C===null&&nt.isPerspectiveCamera&&(C={camera:nt,fov:nt.fov,zoom:nt.zoom}),Ht(nt,et,ie)};function Ht(nt,ut,Dt){Dt===null?nt.matrix.copy(ut.matrixWorld):(nt.matrix.copy(Dt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ut.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Sr*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(nt){l=nt,u!==null&&(u.fixedFoveation=nt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=nt)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(et)},this.getCameraTexture=function(nt){return d[nt]};let Le=null;function ye(nt,ut){if(h=ut.getViewerPose(c||a),_=ut,h!==null){let Dt=h.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let ie=!1;Dt.length!==et.cameras.length&&(et.cameras.length=0,ie=!0);for(let U=0;U<Dt.length;U++){let mt=Dt[U],bt=null;if(m!==null)bt=m.getViewport(mt);else{let wt=p.getViewSubImage(u,mt);bt=wt.viewport,U===0&&(t.setRenderTargetTextures(b,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(b))}let Mt=tt[U];Mt===void 0&&(Mt=new Dn,Mt.layers.enable(U),Mt.viewport=new ke,tt[U]=Mt),Mt.matrix.fromArray(mt.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(mt.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(bt.x,bt.y,bt.width,bt.height),U===0&&(et.matrix.copy(Mt.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),ie===!0&&et.cameras.push(Mt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){p=n.getBinding();let U=p.getDepthInformation(Dt[0]);U&&U.isValid&&U.texture&&f.init(U,s.renderState)}if(Rt&&Rt.includes("camera-access")&&w){t.state.unbindTexture(),p=n.getBinding();for(let U=0;U<Dt.length;U++){let mt=Dt[U].camera;if(mt){let bt=d[mt];bt||(bt=new Sa,d[mt]=bt);let Mt=p.getCameraImage(mt);bt.sourceTexture=Mt}}}}for(let Dt=0;Dt<M.length;Dt++){let ie=R[Dt],Rt=M[Dt];ie!==null&&Rt!==void 0&&Rt.update(ie,ut,c||a)}Le&&Le(nt,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),_=null}let Ae=new hp;Ae.setAnimationLoop(ye),this.setAnimationLoop=function(nt){Le=nt},this.dispose=function(){}}},by=new He,gp=new de;gp.set(-1,0,0,0,1,0,0,0,1);function wy(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,du(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,I,D,b){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(f,d):d.isMeshLambertMaterial?(r(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(f,d),p(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(f,d),u(f,d),d.isMeshPhysicalMaterial&&m(f,d,b)):d.isMeshMatcapMaterial?(r(f,d),_(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),w(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,I,D):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===kn&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===kn&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let I=t.get(d),D=I.envMap,b=I.envMapRotation;D&&(f.envMap.value=D,f.envMapRotation.value.setFromMatrix4(by.makeRotationFromEuler(b)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(gp),f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,I,D){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*I,f.scale.value=D*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function p(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function u(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,I){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===kn&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.retroreflectivity>0&&(f.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=I.texture,f.transmissionSamplerSize.value.set(I.width,I.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,d){d.matcap&&(f.matcap.value=d.matcap)}function w(f,d){let I=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(I.matrixWorld),f.nearDistance.value=I.shadow.camera.near,f.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ey(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let R=M.program;n.uniformBlockBinding(b,R)}function c(b,M){let R=s[b.id];R===void 0&&(f(b),R=h(b),s[b.id]=R,b.addEventListener("dispose",I));let F=M.program;n.updateUBOMapping(b,F);let v=t.render.frame;r[b.id]!==v&&(u(b),r[b.id]=v)}function h(b){let M=p();b.__bindingPointIndex=M;let R=i.createBuffer(),F=b.__size,v=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,F,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,R),R}function p(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let M=s[b.id],R=b.uniforms,F=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,C=R.length;v<C;v++){let V=R[v];if(Array.isArray(V))for(let G=0,tt=V.length;G<tt;G++)m(V[G],v,G,F);else m(V,v,0,F)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,M,R,F){if(w(b,M,R,F)===!0){let v=b.__offset,C=b.value;if(Array.isArray(C)){let V=0;for(let G=0;G<C.length;G++){let tt=C[G],et=d(tt);_(tt,b.__data,V),typeof tt!="number"&&typeof tt!="boolean"&&!tt.isMatrix3&&!ArrayBuffer.isView(tt)&&(V+=et.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(C,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,b.__data)}}function _(b,M,R){typeof b=="number"||typeof b=="boolean"?M[0]=b:b.isMatrix3?(M[0]=b.elements[0],M[1]=b.elements[1],M[2]=b.elements[2],M[3]=0,M[4]=b.elements[3],M[5]=b.elements[4],M[6]=b.elements[5],M[7]=0,M[8]=b.elements[6],M[9]=b.elements[7],M[10]=b.elements[8],M[11]=0):ArrayBuffer.isView(b)?M.set(new b.constructor(b.buffer,b.byteOffset,M.length)):b.toArray(M,R)}function w(b,M,R,F){let v=b.value,C=M+"_"+R;if(F[C]===void 0)return typeof v=="number"||typeof v=="boolean"?F[C]=v:ArrayBuffer.isView(v)?F[C]=v.slice():F[C]=v.clone(),!0;{let V=F[C];if(typeof v=="number"||typeof v=="boolean"){if(V!==v)return F[C]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(V.equals(v)===!1)return V.copy(v),!0}}return!1}function f(b){let M=b.uniforms,R=0,F=16;for(let C=0,V=M.length;C<V;C++){let G=Array.isArray(M[C])?M[C]:[M[C]];for(let tt=0,et=G.length;tt<et;tt++){let H=G[tt],K=Array.isArray(H.value)?H.value:[H.value];for(let ct=0,st=K.length;ct<st;ct++){let vt=K[ct],rt=d(vt),ht=R%F,pt=ht%rt.boundary,Kt=ht+pt;R+=pt,Kt!==0&&F-Kt<rt.storage&&(R+=F-Kt),H.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=R,R+=rt.storage}}}let v=R%F;return v>0&&(R+=F-v),b.__size=R,b.__cache={},this}function d(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(M.boundary=16,M.storage=b.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",b),M}function I(b){let M=b.target;M.removeEventListener("dispose",I);let R=a.indexOf(M.__bindingPointIndex);a.splice(R,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function D(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:D}}var Ty=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zi=null;function Ay(){return zi===null&&(zi=new il(Ty,16,16,Ss,Ei),zi.name="DFG_LUT",zi.minFilter=Sn,zi.magFilter=Sn,zi.wrapS=Pi,zi.wrapT=Pi,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}var wc=class{constructor(t={}){let{canvas:e=Lf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Xn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let w=m,f=new Set([kl,zl,Bl]),d=new Set([Xn,bi,Dr,Nr,Fl,Ol]),I=new Uint32Array(4),D=new Int32Array(4),b=new O,M=null,R=null,F=[],v=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,G=!1,tt=null,et=null,H=null,K=null;this._outputColorSpace=ti;let ct=0,st=0,vt=null,rt=-1,ht=null,pt=new ke,Kt=new ke,Ht=null,Le=new le(0),ye=0,Ae=e.width,nt=e.height,ut=1,Dt=null,ie=null,Rt=new ke(0,0,Ae,nt),Wt=new ke(0,0,Ae,nt),De=!1,U=new Er,mt=!1,bt=!1,Mt=new He,wt=new O,ne=new ke,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function he(){return vt===null?ut:1}let B=n;function Ue(y,k){return e.getContext(y,k)}let _e,T,x,$,j,ot,Et,At,lt,dt,Ct,Yt,Ot,It,jt,re,se,z,Tt,ft,Lt,zt,gt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Be,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",Tn,!1),B===null){let k="webgl2";if(B=Ue(k,y),B===null)throw Ue(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(y){throw e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),ce("WebGLRenderer: "+y.message),y}function Zt(){_e=new Nx(B),_e.init(),Lt=new yy(B,_e),T=new wx(B,_e,t,Lt),x=new xy(B,_e),T.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),et=B.createFramebuffer(),H=B.createFramebuffer(),K=B.createFramebuffer(),$=new Ox(B),j=new sy,ot=new vy(B,_e,x,j,T,Lt,$),Et=new Dx(V),At=new zg(B),zt=new Mx(B,At),lt=new Ux(B,At,$,zt),dt=new zx(B,lt,At,zt,$),z=new Bx(B,T,ot),jt=new Ex(j),Ct=new iy(V,Et,_e,T,zt,jt),Yt=new wy(V,j),Ot=new ay,It=new dy(_e),se=new Sx(V,Et,x,dt,_,l),re=new _y(V,dt,T),gt=new Ey(B,$,T,x),Tt=new bx(B,_e,$),ft=new Fx(B,_e,$),$.programs=Ct.programs,V.capabilities=T,V.extensions=_e,V.properties=j,V.renderLists=Ot,V.shadowMap=re,V.state=x,V.info=$}w!==Xn&&(C=new Vx(w,e.width,e.height,o,s,r));let Jt=new Iu(V,B);this.xr=Jt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let y=_e.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=_e.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(y){y!==void 0&&(ut=y,this.setSize(Ae,nt,!1))},this.getSize=function(y){return y.set(Ae,nt)},this.setSize=function(y,k,it=!0){if(Jt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=y,nt=k,e.width=Math.floor(y*ut),e.height=Math.floor(k*ut),it===!0&&(e.style.width=y+"px",e.style.height=k+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,y,k)},this.getDrawingBufferSize=function(y){return y.set(Ae*ut,nt*ut).floor()},this.setDrawingBufferSize=function(y,k,it){Ae=y,nt=k,ut=it,e.width=Math.floor(y*it),e.height=Math.floor(k*it),this.setViewport(0,0,y,k)},this.setEffects=function(y){if(w===Xn){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let k=0;k<y.length;k++)if(y[k].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(pt)},this.getViewport=function(y){return y.copy(Rt)},this.setViewport=function(y,k,it,Y){y.isVector4?Rt.set(y.x,y.y,y.z,y.w):Rt.set(y,k,it,Y),x.viewport(pt.copy(Rt).multiplyScalar(ut).round())},this.getScissor=function(y){return y.copy(Wt)},this.setScissor=function(y,k,it,Y){y.isVector4?Wt.set(y.x,y.y,y.z,y.w):Wt.set(y,k,it,Y),x.scissor(Kt.copy(Wt).multiplyScalar(ut).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(y){x.setScissorTest(De=y)},this.setOpaqueSort=function(y){Dt=y},this.setTransparentSort=function(y){ie=y},this.getClearColor=function(y){return y.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(y=!0,k=!0,it=!0){let Y=0;if(y){let Z=!1;if(vt!==null){let Pt=vt.texture.format;Z=f.has(Pt)}if(Z){let Pt=vt.texture.type,Gt=d.has(Pt),Bt=se.getClearColor(),Xt=se.getClearAlpha(),Qt=Bt.r,ge=Bt.g,Se=Bt.b;Gt?(I[0]=Qt,I[1]=ge,I[2]=Se,I[3]=Xt,B.clearBufferuiv(B.COLOR,0,I)):(D[0]=Qt,D[1]=ge,D[2]=Se,D[3]=Xt,B.clearBufferiv(B.COLOR,0,D))}else Y|=B.COLOR_BUFFER_BIT}k&&(Y|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),tt=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),se.dispose(),Ot.dispose(),It.dispose(),j.dispose(),Et.dispose(),dt.dispose(),zt.dispose(),gt.dispose(),Ct.dispose(),Jt.dispose(),Jt.removeEventListener("sessionstart",Es),Jt.removeEventListener("sessionend",Hr),qi.stop()};function Be(y){y.preventDefault(),fa("WebGLRenderer: Context Lost."),G=!0}function be(){fa("WebGLRenderer: Context Restored."),G=!1;let y=$.autoReset,k=re.enabled,it=re.autoUpdate,Y=re.needsUpdate,Z=re.type;Zt(),$.autoReset=y,re.enabled=k,re.autoUpdate=it,re.needsUpdate=Y,re.type=Z}function Tn(y){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Yn(y){let k=y.target;k.removeEventListener("dispose",Yn),ao(k)}function ao(y){oo(y),j.remove(y)}function oo(y){let k=j.get(y).programs;k!==void 0&&(k.forEach(function(it){Ct.releaseProgram(it)}),y.isShaderMaterial&&Ct.releaseShaderCache(y))}this.renderBufferDirect=function(y,k,it,Y,Z,Pt){k===null&&(k=te);let Gt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Bt=xe(y,k,it,Y,Z);x.setMaterial(Y,Gt);let Xt=it.index,Qt=1;if(Y.wireframe===!0){if(Xt=lt.getWireframeAttribute(it),Xt===void 0)return;Qt=2}let ge=it.drawRange,Se=it.attributes.position,$t=ge.start*Qt,Me=(ge.start+ge.count)*Qt;Pt!==null&&($t=Math.max($t,Pt.start*Qt),Me=Math.min(Me,(Pt.start+Pt.count)*Qt)),Xt!==null?($t=Math.max($t,0),Me=Math.min(Me,Xt.count)):Se!=null&&($t=Math.max($t,0),Me=Math.min(Me,Se.count));let tn=Me-$t;if(tn<0||tn===1/0)return;zt.setup(Z,Y,Bt,it,Xt);let $e,Fe=Tt;if(Xt!==null&&($e=At.get(Xt),Fe=ft,Fe.setIndex($e)),Z.isMesh)Y.wireframe===!0?(x.setLineWidth(Y.wireframeLinewidth*he()),Fe.setMode(B.LINES)):Fe.setMode(B.TRIANGLES);else if(Z.isLine){let Je=Y.linewidth;Je===void 0&&(Je=1),x.setLineWidth(Je*he()),Z.isLineSegments?Fe.setMode(B.LINES):Z.isLineLoop?Fe.setMode(B.LINE_LOOP):Fe.setMode(B.LINE_STRIP)}else Z.isPoints?Fe.setMode(B.POINTS):Z.isSprite&&Fe.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))Fe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Je=Z._multiDrawStarts,Vt=Z._multiDrawCounts,je=Z._multiDrawCount,we=Xt?At.get(Xt).bytesPerElement:1,Gn=j.get(Y).currentProgram.getUniforms();for(let ai=0;ai<je;ai++)Gn.setValue(B,"_gl_DrawID",ai),Fe.render(Je[ai]/we,Vt[ai])}else if(Z.isInstancedMesh)Fe.renderInstances($t,tn,Z.count);else if(it.isInstancedBufferGeometry){let Je=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Vt=Math.min(it.instanceCount,Je);Fe.renderInstances($t,tn,Vt)}else Fe.render($t,tn)};function Ks(y,k,it,Y){tt!==null&&y.isNodeMaterial&&tt.setObject(Y,y),mt===!0&&jt.setState(y,it,!1),y.transparent===!0&&y.side===Oi&&y.forceSinglePass===!1?(y.side=kn,y.needsUpdate=!0,sn(y,k,Y),y.side=_s,y.needsUpdate=!0,sn(y,k,Y),y.side=Oi):sn(y,k,Y)}this.compile=function(y,k,it=null){it===null&&(it=y),tt!==null&&tt.renderStart(y,k,it),R=It.get(it),R.init(k),v.push(R),it.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(R.pushLight(Z),Z.castShadow&&R.pushShadow(Z))}),y!==it&&y.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(R.pushLight(Z),Z.castShadow&&R.pushShadow(Z))}),R.setupLights(),tt!==null&&tt.updateLights(R.state.lightsArray),bt=this.localClippingEnabled,mt=jt.init(this.clippingPlanes,bt),mt===!0&&jt.setGlobalState(this.clippingPlanes,k),tt!==null&&re.render(R.state.shadowsArray,it,k);let Y=new Set;return y.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Pt=Z.material;if(Pt)if(Array.isArray(Pt))for(let Gt=0;Gt<Pt.length;Gt++){let Bt=Pt[Gt];Ks(Bt,it,k,Z),Y.add(Bt)}else Ks(Pt,it,k,Z),Y.add(Pt)}),R=v.pop(),tt!==null&&tt.renderEnd(),Y},this.compileAsync=function(y,k,it=null){let Y=this.compile(y,k,it);return new Promise(Z=>{function Pt(){if(Y.forEach(function(Gt){let Xt=j.get(Gt).currentProgram;(Xt===void 0||Xt.isReady())&&Y.delete(Gt)}),Y.size===0){Z(y);return}setTimeout(Pt,10)}_e.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let js=null;function lo(y){js&&js(y)}function Es(){qi.stop()}function Hr(){qi.start()}let qi=new hp;qi.setAnimationLoop(lo),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(y){js=y,Jt.setAnimationLoop(y),y===null?qi.stop():qi.start()},Jt.addEventListener("sessionstart",Es),Jt.addEventListener("sessionend",Hr),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;tt!==null&&tt.renderStart(y,k);let it=Jt.enabled===!0&&Jt.isPresenting===!0,Y=C!==null&&(vt===null||it)&&C.begin(V,vt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Jt.enabled===!0&&Jt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Jt.cameraAutoUpdate===!0&&Jt.updateCamera(k),k=Jt.getCamera()),y.isScene===!0&&y.onBeforeRender(V,y,k,vt),R=It.get(y,v.length),R.init(k),R.state.textureUnits=ot.getTextureUnits(),v.push(R),Mt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),U.setFromProjectionMatrix(Mt,vi,k.reversedDepth),bt=this.localClippingEnabled,mt=jt.init(this.clippingPlanes,bt),M=Ot.get(y,F.length),M.init(),F.push(M),Jt.enabled===!0&&Jt.isPresenting===!0){let Gt=V.xr.getDepthSensingMesh();Gt!==null&&Gr(Gt,k,-1/0,V.sortObjects)}Gr(y,k,0,V.sortObjects),M.finish(),tt!==null&&tt.updateLights(R.state.lightsArray),V.sortObjects===!0&&M.sort(Dt,ie),kt=Jt.enabled===!1||Jt.isPresenting===!1||Jt.hasDepthSensing()===!1,kt&&se.addToRenderList(M,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&jt.beginShadows();let Z=R.state.shadowsArray;if(re.render(Z,y,k),mt===!0&&jt.endShadows(),(Y&&C.hasRenderPass())===!1){let Gt=M.opaque,Bt=M.transmissive;if(R.setupLights(),k.isArrayCamera){let Xt=k.cameras;if(Bt.length>0)for(let Qt=0,ge=Xt.length;Qt<ge;Qt++){let Se=Xt[Qt];co(Gt,Bt,y,Se)}kt&&se.render(y);for(let Qt=0,ge=Xt.length;Qt<ge;Qt++){let Se=Xt[Qt];Wr(M,y,Se,Se.viewport)}}else Bt.length>0&&co(Gt,Bt,y,k),kt&&se.render(y),Wr(M,y,k)}vt!==null&&st===0&&(ot.updateMultisampleRenderTarget(vt),ot.updateRenderTargetMipmap(vt)),Y&&C.end(V),y.isScene===!0&&y.onAfterRender(V,y,k),zt.resetDefaultState(),rt=-1,ht=null,v.pop(),v.length>0?(R=v[v.length-1],ot.setTextureUnits(R.state.textureUnits),mt===!0&&jt.setGlobalState(V.clippingPlanes,R.state.camera)):R=null,F.pop(),F.length>0?M=F[F.length-1]:M=null,tt!==null&&tt.renderEnd()};function Gr(y,k,it,Y){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)it=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(k);else if(y.isLightProbeGrid)R.pushLightProbeGrid(y);else if(y.isLight)R.pushLight(y),y.castShadow&&R.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(U)){Y&&ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Mt);let Gt=dt.update(y),Bt=y.material;Bt.visible&&M.push(y,Gt,Bt,it,ne.z,null,k)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(U))){let Gt=dt.update(y),Bt=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ne.copy(y.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),ne.copy(Gt.boundingSphere.center)),ne.applyMatrix4(y.matrixWorld).applyMatrix4(Mt)),Array.isArray(Bt)){let Xt=Gt.groups;for(let Qt=0,ge=Xt.length;Qt<ge;Qt++){let Se=Xt[Qt],$t=Bt[Se.materialIndex];$t&&$t.visible&&M.push(y,Gt,$t,it,ne.z,Se,k)}}else Bt.visible&&M.push(y,Gt,Bt,it,ne.z,null,k)}}let Pt=y.children;for(let Gt=0,Bt=Pt.length;Gt<Bt;Gt++)Gr(Pt[Gt],k,it,Y)}function Wr(y,k,it,Y){let{opaque:Z,transmissive:Pt,transparent:Gt}=y;R.setupLightsView(it),mt===!0&&jt.setGlobalState(V.clippingPlanes,it),Y&&x.viewport(pt.copy(Y)),Z.length>0&&An(Z,k,it),Pt.length>0&&An(Pt,k,it),Gt.length>0&&An(Gt,k,it),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function co(y,k,it,Y){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[Y.id]===void 0){let $t=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[Y.id]=new $n(1,1,{generateMipmaps:!0,type:$t?Ei:Xn,minFilter:vs,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ie.workingColorSpace})}let Pt=R.state.transmissionRenderTarget[Y.id],Gt=Y.viewport||pt;Pt.setSize(Gt.z*V.transmissionResolutionScale,Gt.w*V.transmissionResolutionScale);let Bt=V.getRenderTarget(),Xt=V.getActiveCubeFace(),Qt=V.getActiveMipmapLevel();V.setRenderTarget(Pt),V.getClearColor(Le),ye=V.getClearAlpha(),ye<1&&V.setClearColor(16777215,.5),V.clear(),kt&&se.render(it);let ge=V.toneMapping;V.toneMapping=Mi;let Se=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),R.setupLightsView(Y),mt===!0&&jt.setGlobalState(V.clippingPlanes,Y),An(y,it,Y),ot.updateMultisampleRenderTarget(Pt),ot.updateRenderTargetMipmap(Pt),_e.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Me=0,tn=k.length;Me<tn;Me++){let $e=k[Me],{object:Fe,geometry:Je,material:Vt,group:je}=$e;if(Vt.side===Oi&&Fe.layers.test(Y.layers)){let we=Vt.side;Vt.side=kn,Vt.needsUpdate=!0,pn(Fe,it,Y,Je,Vt,je),Vt.side=we,Vt.needsUpdate=!0,$t=!0}}$t===!0&&(ot.updateMultisampleRenderTarget(Pt),ot.updateRenderTargetMipmap(Pt))}V.setRenderTarget(Bt,Xt,Qt),V.setClearColor(Le,ye),Se!==void 0&&(Y.viewport=Se),V.toneMapping=ge}function An(y,k,it){let Y=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,Pt=y.length;Z<Pt;Z++){let Gt=y[Z],{object:Bt,geometry:Xt,group:Qt}=Gt,ge=Gt.material;ge.allowOverride===!0&&Y!==null&&(ge=Y),Bt.layers.test(it.layers)&&pn(Bt,k,it,Xt,ge,Qt)}}function pn(y,k,it,Y,Z,Pt){tt!==null&&Z.isNodeMaterial&&tt.setObject(y,Z),y.onBeforeRender(V,k,it,Y,Z,Pt),y.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Z.onBeforeRender(V,k,it,Y,y,Pt),Z.transparent===!0&&Z.side===Oi&&Z.forceSinglePass===!1?(Z.side=kn,Z.needsUpdate=!0,V.renderBufferDirect(it,k,Y,Z,y,Pt),Z.side=_s,Z.needsUpdate=!0,V.renderBufferDirect(it,k,Y,Z,y,Pt),Z.side=Oi):V.renderBufferDirect(it,k,Y,Z,y,Pt),y.onAfterRender(V,k,it,Y,Z,Pt)}function sn(y,k,it){k.isScene!==!0&&(k=te);let Y=j.get(y),Z=R.state.lights,Pt=R.state.shadowsArray,Gt=Z.state.version,Bt=Ct.getParameters(y,Z.state,Pt,k,it,R.state.lightProbeGridArray),Xt=Ct.getProgramCacheKey(Bt),Qt=Y.programs;Y.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;let ge=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;Y.envMap=Et.get(y.envMap||Y.environment,ge),Y.envMapRotation=Y.environment!==null&&y.envMap===null?k.environmentRotation:y.envMapRotation,Qt===void 0&&(y.addEventListener("dispose",Yn),Qt=new Map,Y.programs=Qt);let Se=Qt.get(Xt);if(Se!==void 0){if(Y.currentProgram===Se&&Y.lightsStateVersion===Gt)return ri(y,Bt),Se}else Bt.uniforms=Ct.getUniforms(y),tt!==null&&y.isNodeMaterial&&tt.build(y,it,Bt),y.onBeforeCompile(Bt,V),Se=Ct.acquireProgram(Bt,Xt),Qt.set(Xt,Se),Y.uniforms=Bt.uniforms;let $t=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&($t.clippingPlanes=jt.uniform),ri(y,Bt),Y.needsLights=mn(y),Y.lightsStateVersion=Gt,Y.needsLights&&($t.ambientLightColor.value=Z.state.ambient,$t.lightProbe.value=Z.state.probe,$t.sunLights.value=Z.state.sun,$t.sunLightShadows.value=Z.state.sunShadow,$t.directionalLights.value=Z.state.directional,$t.directionalLightShadows.value=Z.state.directionalShadow,$t.spotLights.value=Z.state.spot,$t.spotLightShadows.value=Z.state.spotShadow,$t.rectAreaLights.value=Z.state.rectArea,$t.ltc_1.value=Z.state.rectAreaLTC1,$t.ltc_2.value=Z.state.rectAreaLTC2,$t.pointLights.value=Z.state.point,$t.pointLightShadows.value=Z.state.pointShadow,$t.hemisphereLights.value=Z.state.hemi,$t.sunShadowMatrix.value=Z.state.sunShadowMatrix,$t.sunShadowCascade.value=Z.state.sunShadowCascade,$t.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,$t.spotLightMatrix.value=Z.state.spotLightMatrix,$t.spotLightMap.value=Z.state.spotLightMap,$t.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=R.state.lightProbeGridArray.length>0,Y.currentProgram=Se,Y.uniformsList=null,Se}function Zn(y){if(y.uniformsList===null){let k=y.currentProgram.getUniforms();y.uniformsList=Or.seqWithValue(k.seq,y.uniforms)}return y.uniformsList}function ri(y,k){let it=j.get(y);it.outputColorSpace=k.outputColorSpace,it.batching=k.batching,it.batchingColor=k.batchingColor,it.instancing=k.instancing,it.instancingColor=k.instancingColor,it.instancingMorph=k.instancingMorph,it.skinning=k.skinning,it.morphTargets=k.morphTargets,it.morphNormals=k.morphNormals,it.morphColors=k.morphColors,it.morphTargetsCount=k.morphTargetsCount,it.numClippingPlanes=k.numClippingPlanes,it.numIntersection=k.numClipIntersection,it.vertexAlphas=k.vertexAlphas,it.vertexTangents=k.vertexTangents,it.toneMapping=k.toneMapping}function cn(y,k){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;b.setFromMatrixPosition(k.matrixWorld);for(let it=0,Y=y.length;it<Y;it++){let Z=y[it];if(Z.texture!==null&&Z.boundingBox.containsPoint(b))return Z}return null}function xe(y,k,it,Y,Z){k.isScene!==!0&&(k=te),ot.resetTextureUnits();let Pt=k.fog,Gt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,Bt=vt===null?V.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Ie.workingColorSpace,Xt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Qt=Et.get(Y.envMap||Gt,Xt),ge=Y.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Se=!!it.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),$t=!!it.morphAttributes.position,Me=!!it.morphAttributes.normal,tn=!!it.morphAttributes.color,$e=Mi;Y.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&($e=V.toneMapping);let Fe=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Je=Fe!==void 0?Fe.length:0,Vt=j.get(Y),je=R.state.lights;if(mt===!0&&(bt===!0||y!==ht)){let Oe=y===ht&&Y.id===rt;jt.setState(Y,y,Oe)}let we=!1;Y.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==je.state.version||Vt.outputColorSpace!==Bt||Z.isBatchedMesh&&Vt.batching===!1||!Z.isBatchedMesh&&Vt.batching===!0||Z.isBatchedMesh&&Vt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Vt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Vt.instancing===!1||!Z.isInstancedMesh&&Vt.instancing===!0||Z.isSkinnedMesh&&Vt.skinning===!1||!Z.isSkinnedMesh&&Vt.skinning===!0||Z.isInstancedMesh&&Vt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Vt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Vt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Vt.instancingMorph===!1&&Z.morphTexture!==null||Vt.envMap!==Qt||Y.fog===!0&&Vt.fog!==Pt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==jt.numPlanes||Vt.numIntersection!==jt.numIntersection)||Vt.vertexAlphas!==ge||Vt.vertexTangents!==Se||Vt.morphTargets!==$t||Vt.morphNormals!==Me||Vt.morphColors!==tn||Vt.toneMapping!==$e||Vt.morphTargetsCount!==Je||!!Vt.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,Vt.__version=Y.version);let Gn=Vt.currentProgram;we===!0&&(Gn=sn(Y,k,Z),tt&&Y.isNodeMaterial&&tt.onUpdateProgram(Y,Gn,Vt));let ai=!1,On=!1,rs=!1,Ne=Gn.getUniforms(),Ee=Vt.uniforms;if(x.useProgram(Gn.program)&&(ai=!0,On=!0,rs=!0),Y.id!==rt&&(rt=Y.id,On=!0),Vt.needsLights){let Oe=cn(R.state.lightProbeGridArray,Z);Vt.lightProbeGrid!==Oe&&(Vt.lightProbeGrid=Oe,On=!0)}if(ai||ht!==y){x.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ne.setValue(B,"projectionMatrix",y.projectionMatrix),Ne.setValue(B,"viewMatrix",y.matrixWorldInverse);let fi=Ne.map.cameraPosition;fi!==void 0&&fi.setValue(B,wt.setFromMatrixPosition(y.matrixWorld)),T.logarithmicDepthBuffer&&Ne.setValue(B,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ne.setValue(B,"isOrthographic",y.isOrthographicCamera===!0),ht!==y&&(ht=y,On=!0,rs=!0)}if(Vt.needsLights&&(je.state.sunShadowMap.length>0&&Ne.setValue(B,"sunShadowMap",je.state.sunShadowMap,ot),je.state.directionalShadowMap.length>0&&Ne.setValue(B,"directionalShadowMap",je.state.directionalShadowMap,ot),je.state.spotShadowMap.length>0&&Ne.setValue(B,"spotShadowMap",je.state.spotShadowMap,ot),je.state.pointShadowMap.length>0&&Ne.setValue(B,"pointShadowMap",je.state.pointShadowMap,ot)),Z.isSkinnedMesh){Ne.setOptional(B,Z,"bindMatrix"),Ne.setOptional(B,Z,"bindMatrixInverse");let Oe=Z.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Ne.setValue(B,"boneTexture",Oe.boneTexture,ot))}Z.isBatchedMesh&&(Ne.setOptional(B,Z,"batchingTexture"),Ne.setValue(B,"batchingTexture",Z._matricesTexture,ot),Ne.setOptional(B,Z,"batchingIdTexture"),Ne.setValue(B,"batchingIdTexture",Z._indirectTexture,ot),Ne.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ne.setValue(B,"batchingColorTexture",Z._colorsTexture,ot));let Ti=it.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&z.update(Z,it,Gn),(On||Vt.receiveShadow!==Z.receiveShadow)&&(Vt.receiveShadow=Z.receiveShadow,Ne.setValue(B,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(Ee.envMapIntensity.value=k.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=Ay()),On){if(Ne.setValue(B,"toneMappingExposure",V.toneMappingExposure),Vt.needsLights&&Ye(Ee,rs),Pt&&Y.fog===!0&&Yt.refreshFogUniforms(Ee,Pt),Yt.refreshMaterialUniforms(Ee,Y,ut,nt,R.state.transmissionRenderTarget[y.id]),Vt.needsLights&&Vt.lightProbeGrid){let Oe=Vt.lightProbeGrid;Ee.probesSH.value=Oe.texture,Ee.probesMin.value.copy(Oe.boundingBox.min),Ee.probesMax.value.copy(Oe.boundingBox.max),Ee.probesResolution.value.copy(Oe.resolution)}Or.upload(B,Zn(Vt),Ee,ot)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Or.upload(B,Zn(Vt),Ee,ot),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ne.setValue(B,"center",Z.center),Ne.setValue(B,"modelViewMatrix",Z.modelViewMatrix),Ne.setValue(B,"normalMatrix",Z.normalMatrix),Ne.setValue(B,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Oe=Y.uniformsGroups;for(let fi=0,hn=Oe.length;fi<hn;fi++){let Xr=Oe[fi];gt.update(Xr,Gn),gt.bind(Xr,Gn)}}return Gn}function Ye(y,k){y.ambientLightColor.needsUpdate=k,y.lightProbe.needsUpdate=k,y.sunLights.needsUpdate=k,y.sunLightShadows.needsUpdate=k,y.directionalLights.needsUpdate=k,y.directionalLightShadows.needsUpdate=k,y.pointLights.needsUpdate=k,y.pointLightShadows.needsUpdate=k,y.spotLights.needsUpdate=k,y.spotLightShadows.needsUpdate=k,y.rectAreaLights.needsUpdate=k,y.hemisphereLights.needsUpdate=k}function mn(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return ct},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return vt},this.setRenderTargetTextures=function(y,k,it){let Y=j.get(y);Y.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),j.get(y.texture).__webglTexture=k,j.get(y.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:it,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,k){let it=j.get(y);it.__webglFramebuffer=k,it.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(y,k=0,it=0){vt=y,ct=k,st=it;let Y=null,Z=!1,Pt=!1;if(y){let Bt=j.get(y);if(Bt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(B.FRAMEBUFFER,Bt.__webglFramebuffer),pt.copy(y.viewport),Kt.copy(y.scissor),Ht=y.scissorTest,x.viewport(pt),x.scissor(Kt),x.setScissorTest(Ht),rt=-1;return}else if(Bt.__webglFramebuffer===void 0)ot.setupRenderTarget(y);else if(Bt.__hasExternalTextures)ot.rebindTextures(y,j.get(y.texture).__webglTexture,j.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let ge=y.depthTexture;if(Bt.__boundDepthTexture!==ge){if(ge!==null&&j.has(ge)&&(y.width!==ge.image.width||y.height!==ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(y)}}let Xt=y.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Pt=!0);let Qt=j.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Qt[k])?Y=Qt[k][it]:Y=Qt[k],Z=!0):y.samples>0&&ot.useMultisampledRTT(y)===!1?Y=j.get(y).__webglMultisampledFramebuffer:Array.isArray(Qt)?Y=Qt[it]:Y=Qt,pt.copy(y.viewport),Kt.copy(y.scissor),Ht=y.scissorTest}else pt.copy(Rt).multiplyScalar(ut).floor(),Kt.copy(Wt).multiplyScalar(ut).floor(),Ht=De;if(it!==0&&(Y=et),x.bindFramebuffer(B.FRAMEBUFFER,Y)&&x.drawBuffers(y,Y),x.viewport(pt),x.scissor(Kt),x.setScissorTest(Ht),Z){let Bt=j.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Bt.__webglTexture,it)}else if(Pt){let Bt=k;for(let Xt=0;Xt<y.textures.length;Xt++){let Qt=j.get(y.textures[Xt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Xt,Qt.__webglTexture,it,Bt)}}else if(y!==null&&it!==0){let Bt=j.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Bt.__webglTexture,it)}rt=-1};function $r(y){let k=j.get(y);return(k.__readFormat!==y.format||k.__readType!==y.type)&&(k.__readFormat=y.format,k.__readType=y.type,k.__formatReadable=T.textureFormatReadable(y.format),k.__typeReadable=T.textureTypeReadable(y.type)),k}this.readRenderTargetPixels=function(y,k,it,Y,Z,Pt,Gt,Bt=0){if(!(y&&y.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=j.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Gt!==void 0&&(Xt=Xt[Gt]),Xt){x.bindFramebuffer(B.FRAMEBUFFER,Xt);try{let Qt=y.textures[Bt],ge=Qt.format,Se=Qt.type;y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Bt);let $t=$r(Qt);if($t.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($t.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=y.width-Y&&it>=0&&it<=y.height-Z&&B.readPixels(k,it,Y,Z,Lt.convert(ge),Lt.convert(Se),Pt)}finally{let Qt=vt!==null?j.get(vt).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(y,k,it,Y,Z,Pt,Gt,Bt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=j.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Gt!==void 0&&(Xt=Xt[Gt]),Xt)if(k>=0&&k<=y.width-Y&&it>=0&&it<=y.height-Z){x.bindFramebuffer(B.FRAMEBUFFER,Xt);let Qt=y.textures[Bt],ge=Qt.format,Se=Qt.type;y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Bt);let $t=$r(Qt);if($t.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($t.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Me),B.bufferData(B.PIXEL_PACK_BUFFER,Pt.byteLength,B.STREAM_READ),B.readPixels(k,it,Y,Z,Lt.convert(ge),Lt.convert(Se),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let tn=vt!==null?j.get(vt).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,tn);let $e=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Nf(B,$e,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Me),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Pt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Me),B.deleteSync($e),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,k=null,it=0){let Y=Math.pow(2,-it),Z=Math.floor(y.image.width*Y),Pt=Math.floor(y.image.height*Y),Gt=k!==null?k.x:0,Bt=k!==null?k.y:0;ot.setTexture2D(y,0),B.copyTexSubImage2D(B.TEXTURE_2D,it,0,0,Gt,Bt,Z,Pt),x.unbindTexture()},this.copyTextureToTexture=function(y,k,it=null,Y=null,Z=0,Pt=0){let Gt,Bt,Xt,Qt,ge,Se,$t,Me,tn,$e=y.isCompressedTexture?y.mipmaps[Pt]:y.image;if(it!==null)Gt=it.max.x-it.min.x,Bt=it.max.y-it.min.y,Xt=it.isBox3?it.max.z-it.min.z:1,Qt=it.min.x,ge=it.min.y,Se=it.isBox3?it.min.z:0;else{let Ee=Math.pow(2,-Z);Gt=Math.floor($e.width*Ee),Bt=Math.floor($e.height*Ee),y.isDataArrayTexture?Xt=$e.depth:y.isData3DTexture?Xt=Math.floor($e.depth*Ee):Xt=1,Qt=0,ge=0,Se=0}Y!==null?($t=Y.x,Me=Y.y,tn=Y.z):($t=0,Me=0,tn=0);let Fe=Lt.convert(k.format),Je=Lt.convert(k.type),Vt;k.isData3DTexture?(ot.setTexture3D(k,0),Vt=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ot.setTexture2DArray(k,0),Vt=B.TEXTURE_2D_ARRAY):(ot.setTexture2D(k,0),Vt=B.TEXTURE_2D),x.activeTexture(B.TEXTURE0),x.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),x.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),x.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);let je=x.getParameter(B.UNPACK_ROW_LENGTH),we=x.getParameter(B.UNPACK_IMAGE_HEIGHT),Gn=x.getParameter(B.UNPACK_SKIP_PIXELS),ai=x.getParameter(B.UNPACK_SKIP_ROWS),On=x.getParameter(B.UNPACK_SKIP_IMAGES);x.pixelStorei(B.UNPACK_ROW_LENGTH,$e.width),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,$e.height),x.pixelStorei(B.UNPACK_SKIP_PIXELS,Qt),x.pixelStorei(B.UNPACK_SKIP_ROWS,ge),x.pixelStorei(B.UNPACK_SKIP_IMAGES,Se);let rs=y.isDataArrayTexture||y.isData3DTexture,Ne=k.isDataArrayTexture||k.isData3DTexture;if(y.isDepthTexture){let Ee=j.get(y),Ti=j.get(k),Oe=j.get(Ee.__renderTarget),fi=j.get(Ti.__renderTarget);x.bindFramebuffer(B.READ_FRAMEBUFFER,Oe.__webglFramebuffer),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let hn=0;hn<Xt;hn++)rs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,j.get(y).__webglTexture,Z,Se+hn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,j.get(k).__webglTexture,Pt,tn+hn)),B.blitFramebuffer(Qt,ge,Gt,Bt,$t,Me,Gt,Bt,B.DEPTH_BUFFER_BIT,B.NEAREST);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||y.isRenderTargetTexture||j.has(y)){let Ee=j.get(y),Ti=j.get(k);x.bindFramebuffer(B.READ_FRAMEBUFFER,H),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,K);for(let Oe=0;Oe<Xt;Oe++)rs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ee.__webglTexture,Z,Se+Oe):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ee.__webglTexture,Z),Ne?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ti.__webglTexture,Pt,tn+Oe):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ti.__webglTexture,Pt),Z!==0?B.blitFramebuffer(Qt,ge,Gt,Bt,$t,Me,Gt,Bt,B.COLOR_BUFFER_BIT,B.NEAREST):Ne?B.copyTexSubImage3D(Vt,Pt,$t,Me,tn+Oe,Qt,ge,Gt,Bt):B.copyTexSubImage2D(Vt,Pt,$t,Me,Qt,ge,Gt,Bt);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ne?y.isDataTexture||y.isData3DTexture?B.texSubImage3D(Vt,Pt,$t,Me,tn,Gt,Bt,Xt,Fe,Je,$e.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(Vt,Pt,$t,Me,tn,Gt,Bt,Xt,Fe,$e.data):B.texSubImage3D(Vt,Pt,$t,Me,tn,Gt,Bt,Xt,Fe,Je,$e):y.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Pt,$t,Me,Gt,Bt,Fe,Je,$e.data):y.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Pt,$t,Me,$e.width,$e.height,Fe,$e.data):B.texSubImage2D(B.TEXTURE_2D,Pt,$t,Me,Gt,Bt,Fe,Je,$e);x.pixelStorei(B.UNPACK_ROW_LENGTH,je),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,we),x.pixelStorei(B.UNPACK_SKIP_PIXELS,Gn),x.pixelStorei(B.UNPACK_SKIP_ROWS,ai),x.pixelStorei(B.UNPACK_SKIP_IMAGES,On),Pt===0&&k.generateMipmaps&&B.generateMipmap(Vt),x.unbindTexture()},this.initRenderTarget=function(y){j.get(y).__webglFramebuffer===void 0&&ot.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?ot.setTextureCube(y,0):y.isData3DTexture?ot.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ot.setTexture2DArray(y,0):ot.setTexture2D(y,0),x.unbindTexture()},this.resetState=function(){ct=0,st=0,vt=null,x.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ie._getUnpackColorSpace()}};var xp=new ei,Ac=new O,ns=class extends Ba{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new un(t,3)),this.setAttribute("uv",new un(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new gs(e,6,1);return this.setAttribute("instanceStart",new Si(n,3,0)),this.setAttribute("instanceEnd",new Si(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new gs(e,6,1);return this.setAttribute("instanceColorStart",new Si(n,3,0)),this.setAttribute("instanceColorEnd",new Si(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Pa(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),xp.setFromBufferAttribute(e),this.boundingBox.union(xp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ac.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ac)),Ac.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ac));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ut.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Nt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Vn.line={uniforms:Za.merge([Ut.common,Ut.fog,Ut.line]),vertexShader:`
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
		`};var ki=class extends vn{constructor(t){super({type:"LineMaterial",uniforms:Za.clone(Vn.line.uniforms),vertexShader:Vn.line.vertexShader,fragmentShader:Vn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Pu=new ke,vp=new O,yp=new O,Mn=new ke,bn=new ke,Vi=new ke,Lu=new O,Du=new He,wn=new za,Sp=new O,Cc=new ei,Rc=new ui,Hi=new ke,Gi,Ws;function Mp(i,t,e){return Hi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Hi.multiplyScalar(1/Hi.w),Hi.x=Ws/e.width,Hi.y=Ws/e.height,Hi.applyMatrix4(i.projectionMatrixInverse),Hi.multiplyScalar(1/Hi.w),Math.abs(Math.max(Hi.x,Hi.y))}function Cy(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){wn.start.fromBufferAttribute(s,o),wn.end.fromBufferAttribute(r,o),wn.applyMatrix4(e);let c=new O,h=new O;Gi.distanceSqToSegment(wn.start,wn.end,h,c),h.distanceTo(c)<Ws*.5&&t.push({point:h,pointOnLine:c,distance:Gi.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function Ry(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),p=-t.near;Gi.at(1,Vi),Vi.w=1,Vi.applyMatrix4(t.matrixWorldInverse),Vi.applyMatrix4(n),Vi.multiplyScalar(1/Vi.w),Vi.x*=r.x/2,Vi.y*=r.y/2,Vi.z=0,Lu.copy(Vi),Du.multiplyMatrices(t.matrixWorldInverse,a);for(let u=0,m=h;u<m;u++){if(Mn.fromBufferAttribute(l,u),bn.fromBufferAttribute(c,u),Mn.w=1,bn.w=1,Mn.applyMatrix4(Du),bn.applyMatrix4(Du),Mn.z>p&&bn.z>p)continue;if(Mn.z>p){let D=Mn.z-bn.z,b=(Mn.z-p)/D;Mn.lerp(bn,b)}else if(bn.z>p){let D=bn.z-Mn.z,b=(bn.z-p)/D;bn.lerp(Mn,b)}Mn.applyMatrix4(n),bn.applyMatrix4(n),Mn.multiplyScalar(1/Mn.w),bn.multiplyScalar(1/bn.w),Mn.x*=r.x/2,Mn.y*=r.y/2,bn.x*=r.x/2,bn.y*=r.y/2,wn.start.copy(Mn),wn.start.z=0,wn.end.copy(bn),wn.end.z=0;let w=wn.closestPointToPointParameter(Lu,!0);wn.at(w,Sp);let f=hu.lerp(Mn.z,bn.z,w),d=f>=-1&&f<=1,I=Lu.distanceTo(Sp)<Ws*.5;if(d&&I){wn.start.fromBufferAttribute(l,u),wn.end.fromBufferAttribute(c,u),wn.start.applyMatrix4(a),wn.end.applyMatrix4(a);let D=new O,b=new O;Gi.distanceSqToSegment(wn.start,wn.end,b,D),e.push({point:b,pointOnLine:D,distance:Gi.origin.distanceTo(b),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}}var $s=class extends Nn{constructor(t=new ns,e=new ki({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)vp.fromBufferAttribute(e,a),yp.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+vp.distanceTo(yp);let r=new gs(s,2,1);return t.setAttribute("instanceDistanceStart",new Si(r,1,0)),t.setAttribute("instanceDistanceEnd",new Si(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Gi=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;Ws=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Rc.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=Ws*.5;else{let p=Math.max(s.near,Rc.distanceToPoint(Gi.origin));c=Mp(s,p,l.resolution)}if(Rc.radius+=c,Gi.intersectsSphere(Rc)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Cc.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=Ws*.5;else{let p=Math.max(s.near,Cc.distanceToPoint(Gi.origin));h=Mp(s,p,l.resolution)}Cc.expandByScalar(h),Gi.intersectsBox(Cc)!==!1&&(n?Cy(this,e):Ry(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Pu),this.material.uniforms.resolution.value.set(Pu.z,Pu.w))}};function bp(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:l,CY:c,mcs:h,q:p,list:u,clamp:m,norm:_,munis:w}=i,f=g=>document.querySelector(g),d=g=>String(g).replace(/[<>&"]/g,S=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[S]),I=(g,S)=>[(g-l)*o,(S-c)*o],D=.06,b=t.segs.map(g=>{let S=[],A=[0];for(let P=0;P<g.length;P+=2){let L=I(g[P],g[P+1]);S.length&&A.push(A[A.length-1]+Math.hypot(L[0]-S[S.length-1][0],L[1]-S[S.length-1][1])),S.push(L)}return{p:S,c:A,L:A[A.length-1]}}),M=t.stops.map(([g,S,A,P])=>({n:g,id:P,w:I(S,A),fams:new Set})),R=t.routes.map(([g,S,A])=>({s:g,l:S,c:A})),F=(g,S)=>{let A=g.match(/^R([A-Z]*)(\d*)(.*)$/),P=S.match(/^R([A-Z]*)(\d*)(.*)$/);return(A[1]||"").localeCompare(P[1]||"")||(+A[2]||0)-(+P[2]||0)||A[3].localeCompare(P[3])},v=[...new Set(R.map(g=>g.s))].sort(F),C={};R.forEach(g=>{C[g.s]||(C[g.s]=g.c)});let V=t.pats.map(([g,S,A])=>({stops:g,t:S,segs:A})),G=t.trips.map(([g,S,A,P,L],N)=>({day:g,pat:V[S],fam:R[A].s,c:R[A].c,t0:P,num:L,tid:t.tids[N]})),tt={};v.forEach(g=>tt[g]=new Set),G.forEach(g=>{g.pat.segs.forEach(S=>tt[g.fam].add(S)),g.pat.stops.forEach(S=>M[S].fams.add(g.fam))});let et=t.days.map((g,S)=>G.filter(A=>A.day===S)),H=new Map(G.map(g=>[g.tid,g])),K=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],ct=Math.PI/180,st=3.922*ct,vt=-39.705*ct;function rt(g,S){let A=g*ct+st,P=S*ct,L=Math.cos(vt),N=Math.sin(vt),X=Math.cos(P),W=Math.cos(A)*X,Q=Math.sin(A)*X,J=Math.sin(P),at=Math.atan2(Q,W*L-J*N),E=Math.asin(J*L+W*N),q=Math.sqrt(2/(1+Math.cos(at)*Math.cos(E))),_t=q*Math.cos(E)*Math.sin(at),St=q*Math.sin(E),[qt,ae,Ce,xt,yt,ee,fe]=K;return I((ae+qt*_t-yt)*fe,(ee-(xt-Ce*St))*fe)}let ht=new Map(M.map((g,S)=>[g.id,S]));function pt(g){if(g.g)return g.g;let S=[],A=[],P=[0],L=0;return g.segs.forEach((N,X)=>{let W=b[N];W.p.forEach((Q,J)=>{X&&!J||(S.push(Q),A.push(L+W.c[J]))}),L+=W.L,P.push(L)}),g.g={pts:S,cum:A,stopD:P}}function Kt(g,S,A,P){let L=1e18,N=0;for(let X=0;X+1<g.pts.length;X++){if(g.cum[X+1]<A||g.cum[X]>P)continue;let W=g.pts[X],Q=g.pts[X+1],J=Q[0]-W[0],at=Q[1]-W[1],E=J*J+at*at||1e-9,q=Math.max(0,Math.min(1,((S[0]-W[0])*J+(S[1]-W[1])*at)/E)),_t=W[0]+J*q-S[0],St=W[1]+at*q-S[1],qt=_t*_t+St*St;qt<L&&(L=qt,N=g.cum[X]+q*(g.cum[X+1]-g.cum[X]))}return{d:N,err:Math.sqrt(L)}}function Ht(g,S){let A=0,P=g.cum.length-1;if(S<=0)return g.pts[0];if(S>=g.cum[P])return g.pts[P];for(;P-A>1;){let W=A+P>>1;g.cum[W]<=S?A=W:P=W}let L=(S-g.cum[A])/(g.cum[P]-g.cum[A]||1),N=g.pts[A],X=g.pts[P];return[N[0]+(X[0]-N[0])*L,N[1]+(X[1]-N[1])*L]}let Le=g=>`${g.slice(6,8)}/${g.slice(4,6)}`,ye=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Ae(g){let S={};return ye.formatToParts(g).forEach(A=>S[A.type]=A.value),{ymd:S.year+S.month+S.day,min:+S.hour*60+ +S.minute+ +S.second/60}}let nt=0,ut=null,Dt=0,ie=0;function Rt(){let g=Ae(new Date);if(nt===0&&ut==null)return{...g,live:!0};let S=ut==null?g.min:Dt+(nt?(performance.now()-ie)/6e4*nt:0);return{ymd:g.ymd,min:S,live:!1}}let Wt=g=>(g=(Math.round(g)%1440+1440)%1440,String(Math.floor(g/60)).padStart(2,"0")+":"+String(g%60).padStart(2,"0")),De="https://rodalies.erathegameoftime.com",U={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let g=new URLSearchParams(location.search).get("rt");g&&localStorage.setItem("rod_rt",g);let S=localStorage.getItem("rod_rt");S&&/jhmuyo\.workers\.dev/.test(S)&&(S=De,localStorage.setItem("rod_rt",S)),U.url=S||De}catch{U.url=De}let mt=(g,S)=>fetch(g+S,{cache:"no-store"}).then(A=>{if(!A.ok)throw new Error("HTTP "+A.status);return A.json()}),bt=g=>/^51/.test(g||"");async function Mt(){if(!U.url){ne();return}let g=U.url.replace(/\/+$/,"");(!U.repFail||Date.now()-U.repFail>15*6e4)&&mt(g,"/reports.json").then(Q=>{Q&&Array.isArray(Q.items)?(U.rep=Q.items,U.repSkew=(Q.now||Date.now())-Date.now(),Q.tipos&&(U.tipos=Q.tipos),U.repOk=Date.now(),U.repFail=0):U.repFail=Date.now()}).catch(()=>{U.repFail=Date.now(),U.repOk=0});let S=!U.adifAt||Date.now()-U.adifAt>11e4,[A,P,L,N,X]=await Promise.allSettled([mt(g,"/trip_updates.json"),mt(g,"/vehicle_positions.json"),mt(g,"/alerts.json"),mt(g,"/notices.json"),S?mt(g,"/adif.json"):Promise.reject(0)]);if(X.status==="fulfilled"&&X.value&&X.value.ok?(U.adif=X.value,U.adifAt=Date.now()):S&&(U.adifAt=Date.now()-6e4),A.status==="fulfilled"){let Q=new Map,J=new Map;for(let at of A.value.entity||[]){let E=at.tripUpdate;if(!E||!E.trip||!bt(E.trip.tripId))continue;let q=E.trip.tripId,_t=(E.stopTimeUpdate||[])[0],St=E.delay;St==null&&_t&&(St=(_t.arrival||_t.departure||{}).delay),E.trip.scheduleRelationship==="CANCELED"&&(St="X"),St!=null&&Q.set(q,St),J.set(q,{next:_t?{sid:_t.stopId,t:+((_t.arrival||_t.departure||{}).time||0)}:null})}U.delays=Q,U.tu=J,U.ok=Date.now(),U.feedTs=+((A.value.header||{}).timestamp||0)*1e3,U.err=""}else U.err=A.reason&&A.reason.message||"sin respuesta";if(P.status==="fulfilled"){let Q=new Map,J=Date.now()/1e3;for(let at of P.value.entity||[]){let E=at.vehicle;if(!E||!E.trip||!bt(E.trip.tripId)||!E.position)continue;let q=E.vehicle&&E.vehicle.label||"",_t=q.match(/PLATF\.\(([^)]+)\)/),St=U.vp.get(E.trip.tripId),qt={tid:E.trip.tripId,w:rt(+E.position.longitude,+E.position.latitude),st:E.currentStatus||"",sid:E.stopId||"",ts:+E.timestamp||J,label:q,plat:_t?_t[1]:"",fam:(q.split("-")[0]||"").trim(),num:E.vehicle&&E.vehicle.id||""};qt.disp=St?St.disp:null,Q.set(qt.tid,qt)}U.vp=Q,U.okVP=Date.now()}let W=[];if(N.status==="fulfilled"&&Array.isArray(N.value.included)){U.okNotices=Date.now();for(let Q of N.value.included){let J=new Set((Q.lines||[]).map(q=>q.id).filter(q=>C[q])),at=q=>((q||{}).es||(q||{}).ca||"").trim(),E=[at(Q.description),at(Q.title)].sort((q,_t)=>_t.length-q.length)[0];E&&W.push({id:"N"+Q.externalId,fams:J,stops:new Set,txt:E,when:(Q.date||"")+"T"+(Q.time||""),src:"Rodalies",core:Q.core||""})}}if(L.status==="fulfilled"){let Q=+((L.value.header||{}).timestamp||0);if(U.alertsTs=Q,Date.now()/1e3-Q<6*3600)for(let J of L.value.entity||[]){let at=J.alert;if(!at)continue;let E=new Set,q=new Set;for(let ae of at.informedEntity||[])(ae.routeId||"").startsWith("51")&&E.add(ae.routeId.replace(/^51T\d+/,"")),ae.stopId&&ht.has(ae.stopId)&&q.add(ht.get(ae.stopId));if(!E.size&&!q.size)continue;let _t=(at.descriptionText||at.headerText||{translation:[]}).translation||[],St=((_t.find(ae=>ae.language==="es")||_t[0]||{}).text||"").trim(),qt=+((at.activePeriod||[])[0]||{}).start||0;W.some(ae=>ae.txt===St)||W.push({id:J.id,fams:E,stops:q,txt:St,when:qt?new Date(qt*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(U.adif&&Date.now()-U.adifAt<15*6e4)for(let[Q,J]of(U.adif.items||[]).entries()){let at=(J.t?J.t+". ":"")+J.txt,E=new Set,q=new Set,_t=_(at);for(let St of at.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))C[St[1]]&&E.add(St[1]);M.forEach((St,qt)=>{St.fams.size&&St.n.length>4&&_t.includes(_(St.n))&&(q.add(qt),E.size||St.fams.forEach(ae=>E.add(ae)))}),W.some(St=>St.txt===at)||W.push({id:"A"+Q,fams:E,stops:q,txt:at,when:U.adif.upd||"",src:"Adif",lvl:J.lvl})}if(N.status==="fulfilled"||L.status==="fulfilled"||U.adif){U.alerts=W.sort((Q,J)=>J.when>Q.when?1:-1);try{hm()}catch{}}ne(),Xc(),ri=0,a()}let wt=()=>U.okVP&&Date.now()-U.okVP<9e4;function ne(){let g=f("#rtst"),S=f("#mode");if(S){let P=!!wt()&&Rt().live;S.classList.toggle("on",P),S.classList.toggle("pre",!P),S.textContent=P?"En directo":"Previsi\xF3n"}if(!g)return;U.url?U.err?g.textContent="No se pudo conectar con el puente ("+U.err+"). Se usa el horario.":wt()?g.innerHTML=`Conectado \xB7 ${U.vp.size} trenes con posici\xF3n real y ${U.delays.size} con retraso \xB7 actualizado a las ${new Date(U.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:g.textContent="Conectando\u2026":g.textContent=U.err||"Sin puente: trenes seg\xFAn horario oficial.";let A=f("#rturl");A&&A._shown!==U.url&&(A.value=U.url,A._shown=U.url)}f("#rtsave").onclick=()=>{let g=f("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(g&&!/^https?:\/\//.test(g)&&(g="https://"+g),!g){U.err="pega la direcci\xF3n de tu puente",ne();return}U.url=g;try{localStorage.setItem("rod_rt",g)}catch{}U.ok=0,U.err="",ne(),Mt()},f("#rtoff").onclick=()=>{U.url=De;try{localStorage.removeItem("rod_rt")}catch{}h._h="",Mt()},setInterval(Mt,2e4),setTimeout(Mt,50);let te=g=>{if(!wt())return null;let S=U.delays.get(g.tid),A=U.vp.get(g.tid);return S==="X"?S:A&&A.pre&&A.preDl>=1?Math.max(typeof S=="number"?S:0,A.preDl*60):S??null},kt=new Set(v),he=new ns,B=new ns,Ue=new ki({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),_e=new ki({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),T=new $s(he,Ue),x=new $s(B,_e);x.renderOrder=20,T.renderOrder=21,T.frustumCulled=x.frustumCulled=!1,e.add(x,T);let $=!1;function j(){if($||!w.length)return;$=!0,e.updateMatrixWorld(!0);let g=new zs,S=w.map(L=>L.mesh),A=new O(0,0,-1);M.forEach(L=>{g.set(new O(L.w[0],L.w[1],50),A),L.ext=!g.intersectObjects(S,!1).length});let P=(L,N)=>M.findIndex(X=>Math.hypot(X.w[0]-L[0],X.w[1]-L[1])<.05);b.forEach(L=>{let N=P(L.p[0]),X=P(L.p[L.p.length-1]),W=Q=>(g.set(new O(Q[0],Q[1],50),A),!g.intersectObjects(S,!1).length);L.ext=(N>=0?M[N].ext:W(L.p[0]))&&(X>=0?M[X].ext:W(L.p[L.p.length-1]))})}let ot=()=>{let g=new Set(kt.size<=2?kt:[]);try{xe&&xe.fam&&g.add(xe.fam)}catch{}return g},Et="";function At(){j();let g=[],S=[],A=new Set,P=new le,L=new le("#d2d0d0"),N=ot();Et=[...N].join();for(let X of v)if(kt.has(X))for(let W of tt[X]){if(A.has(W))continue;A.add(W);let Q=b[W].p;P.set(C[X]),b[W].ext&&!N.has(X)&&P.lerp(L,.72);for(let J=0;J+1<Q.length;J++)g.push(Q[J][0],Q[J][1],D,Q[J+1][0],Q[J+1][1],D),S.push(P.r,P.g,P.b,P.r,P.g,P.b)}g.length||(g.push(0,0,-50,0,0,-50),S.push(0,0,0,0,0,0)),he.setPositions(g),he.setColors(S),B.setPositions(g),a()}At();let lt=g=>new vn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new le(g)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),dt=new rn,Ct=M.length,Yt=new Float32Array(Ct*3),Ot=new Float32Array(Ct*3),It=new Float32Array(Ct),jt=new Float32Array(Ct);M.forEach((g,S)=>{Yt[S*3]=g.w[0],Yt[S*3+1]=g.w[1],Yt[S*3+2]=D,Ot.set([1,1,1],S*3),It[S]=6,jt[S]=1.6}),dt.setAttribute("position",new Xe(Yt,3)),dt.setAttribute("fill",new Xe(Ot,3)),dt.setAttribute("size",new Xe(It,1)),dt.setAttribute("bw",new Xe(jt,1));let re=new Fs(dt,lt("#1d2330"));re.renderOrder=22,re.frustumCulled=!1,e.add(re);function se(){let g=r.dist<45,S=ot();M.forEach((A,P)=>{let L=[...A.fams].some(X=>kt.has(X)),N=A.ext&&![...A.fams].some(X=>S.has(X))&&P!==Ye;It[P]=L?P===Ye?13:N?3:g?8:5:0,jt[P]=P===Ye?3:1.6}),dt.attributes.size.needsUpdate=!0,dt.attributes.bw.needsUpdate=!0}let z=600,Tt=new rn,ft=new Float32Array(z*3),Lt=new Float32Array(z*3),zt=new Float32Array(z),gt=new Float32Array(z);Tt.setAttribute("position",new Xe(ft,3)),Tt.setAttribute("fill",new Xe(Lt,3)),Tt.setAttribute("size",new Xe(zt,1)),Tt.setAttribute("bw",new Xe(gt,1));let Zt=new Float32Array(z);Tt.setAttribute("ang",new Xe(Zt,1));let Jt=new vn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new le("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Be=new Fs(Tt,Jt);Be.renderOrder=24,Be.frustumCulled=!1,e.add(Be);let be=new rn,Tn=new Float32Array(z*3),Yn=new Float32Array(z*3),ao=new Float32Array(z),oo=new Float32Array(z);be.setAttribute("position",new Xe(Tn,3)),be.setAttribute("fill",new Xe(Yn,3)),be.setAttribute("size",new Xe(ao,1)),be.setAttribute("bw",new Xe(oo,1));let Ks=new Fs(be,lt("#ffffff"));Ks.renderOrder=23,Ks.frustumCulled=!1,e.add(Ks);function js(g,S){let A=b[g],P=S*A.L,L=0,N=A.c.length-1;for(;N-L>1;){let at=L+N>>1;A.c[at]<=P?L=at:N=at}let X=A.c[N]-A.c[L]||1,W=(P-A.c[L])/X,Q=A.p[L],J=A.p[N];return[Q[0]+(J[0]-Q[0])*W,Q[1]+(J[1]-Q[1])*W]}let lo=g=>g*g*(3-2*g)*.35+g*.65;function Es(g,S){let A=g.pat.t,P=g.pat.stops.length,L=A[2*P-2];if(S<A[1]-2||S>L+1)return null;if(S<=A[1])return{w:M[g.pat.stops[0]].w,at:0,next:0,moving:!1};for(let N=0;N<P-1;N++){let X=A[2*N+1],W=A[2*N+2],Q=A[2*N+3];if(S<=W){let J=W>X?(S-X)/(W-X):1;return{w:js(g.pat.segs[N],lo(m(J,0,1))),at:-1,next:N+1,prev:N,moving:!0}}if(S<=Q)return{w:M[g.pat.stops[N+1]].w,at:N+1,next:N+1,moving:!1}}return{w:M[g.pat.stops[P-1]].w,at:P-1,next:P-1,moving:!1}}function Hr(g){let S=t.days.indexOf(g.ymd),A=[];if(S<0)return{k:S,out:A};let P=(L,N)=>{for(let X of L){if(!kt.has(X.fam))continue;let W=te(X);if(W==="X")continue;let Q=(W||0)/60,J=g.min+N-X.t0-Q;if(J<-2||J>X.pat.t[X.pat.t.length-2]+1)continue;let at=Es(X,J);at&&A.push({tr:X,p:at,rel:J,dl:Q,live:W!=null})}};return P(et[S],0),S>0&&P(et[S-1],1440),{k:S,out:A}}function qi(g,S,A,P){let L=g.pat.stops[0],N=S.dep0,X=null,W=(J,at)=>{for(let E of J||[]){let q=E.pat.stops,_t=q.length;if(q[_t-1]!==L||E===g)continue;let St=E.t0+E.pat.t[2*(_t-1)]-at;if(St>N+5||St<N-120)continue;let qt=pt(E.pat),ae=Kt(qt,S.w,-1,1e9);if(ae.err>.6)continue;let Ce=qt.stopD,xt=E.pat.t,yt=Ce.findIndex(Re=>Re>ae.d);yt<0&&(yt=_t-1);let ee=yt===0?xt[1]:xt[2*yt-1]+(Ce[yt]>Ce[yt-1]?(ae.d-Ce[yt-1])/(Ce[yt]-Ce[yt-1]):1)*(xt[2*yt]-xt[2*yt-1]),fe=A-(E.t0+ee-at);fe<-5||fe>120||(!X||Math.abs(fe)<Math.abs(X.prevDl))&&(X={prevTr:E,dPrev:ae.d,prevDl:fe,arrO:St+Math.max(0,fe)})}};if(W(et[P],0),P>0&&W(et[P-1],1440),!X)return{prevTr:null,preDl:0};let Q=Math.max(N,X.arrO+3);return{...X,depEst:Q,preDl:Math.max(0,Q-N)}}function Gr(g,S,A){let P=g.pat.t,L=S.length;if(!(A>=0))return A<0?S[0]:null;for(let N=0;N<L;N++)if(A<=P[2*N+1]){if(A>=P[2*N]||N===0)return S[N];let X=P[2*N-1],W=P[2*N];return S[N-1]+(S[N]-S[N-1])*(W>X?(A-X)/(W-X):1)}return S[L-1]}let Wr=performance.now();function co(){let g=[],S=Date.now()/1e3,A=performance.now(),P=Math.min(1,(A-Wr)/1e3);Wr=A;for(let L of U.vp.values()){let N=H.get(L.tid),X=N?N.fam:L.fam;if(X&&C[X]&&!kt.has(X))continue;let W=U.delays.get(L.tid),Q=typeof W=="number"?W/60:0,J=Math.max(0,S-L.ts);L.mvTs!==L.ts&&((!L.mvW||Math.hypot(L.w[0]-L.mvW[0],L.w[1]-L.mvW[1])>.025)&&(L.mvW=L.w,L.mvAt=L.ts),L.mvTs=L.ts),L.still=L.ts-(L.mvAt||L.ts);let at=L.w,E=-1;if(N){let _t=pt(N.pat),St=_t.stopD;if(L.dObs==null||L.obsAt!==L.ts){let yt=Kt(_t,L.w,-1,1e9);L.dObs=yt.d,L.err=yt.err,L.obsAt=L.ts}let qt=Rt(),ae=t.days.indexOf(qt.ymd),Ce=N.day===ae-1?1440:0,xt=N.t0+N.pat.t[1]-Ce;if(L.pre=qt.min+Q<xt-1&&(L.dObs>St[0]+.35||L.err>.6)&&!(L.st==="STOPPED_AT"&&L.sid===M[N.pat.stops[0]].id),L.dep0=xt,L.pre){if(L.atStop=-1,L.next=0,E=0,L.disp=null,L.prevAt!==L.ts&&(L.prevAt=L.ts,Object.assign(L,qi(N,L,qt.min,ae))),L.prevTr){let yt=pt(L.prevTr.pat);at=Ht(yt,L.dPrev)}}else if(L.err<=.6){let yt=St.findIndex(Re=>Re>L.dObs+.08);yt<0&&(yt=St.length-1);let ee=St.reduce((Re,yn,en)=>Math.abs(yn-L.dObs)<Math.abs(St[Re]-L.dObs)?en:Re,0);L.atStop=Math.abs(St[ee]-L.dObs)<.16?ee:-1,L.next=yt,E=yt;let fe=L.dObs;if(L.st==="STOPPED_AT"&&L.atStop>=0)fe=St[L.atStop];else if(yt>0){let Re=(N.pat.t[2*yt]-N.pat.t[2*yt-1])*60,yn=Re>0?(St[yt]-St[yt-1])/Re:0,en=Rt(),Ge=t.days.indexOf(en.ymd),Ri=N.day===Ge-1?1440:0,er=Gr(N,St,en.min+Ri-N.t0-Q),In=L.dObs+yn*Math.min(J,60);er!=null&&(In=Math.min(In,Math.max(L.dObs,er))),fe=Math.max(L.dObs,Math.min(St[yt]-.03,In))}L.disp==null||Math.abs(L.disp-fe)>1.2?L.disp=fe:fe>L.disp&&(L.disp+=(fe-L.disp)*Math.min(1,P*1.5)),at=Ht(_t,L.disp)}else if(L.err>2){let yt=Rt(),ee=t.days.indexOf(yt.ymd),fe=N.day===ee-1?1440:0,Re=Es(N,yt.min+fe-N.t0-Q);Re&&(at=Re.w,L.est=!0,E=Re.next),L.atStop=-1,L.next=Re?Re.next:-1}else L.atStop=-1,L.next=-1}let q=L.pre?"":L.st==="STOPPED_AT"&&L.atStop>=0||L.atStop>=0&&L.still>30?"st":L.still>=90?"via":"";g.push({tr:N,v:L,w:at,stop:q,p:{w:at},fam:X||"?",c:N?N.c:C[X]||"#6b7385",dl:Q,live:!0,real:!0,idx:E,age:J,cancel:W==="X"})}return g}let An=new Map,pn=!1,sn=!1,Zn=[],ri=0,cn=null,xe=null,Ye=-1,mn=!1,$r=0,y="";function k(g){let S=nt>0||wt()&&ut==null||!!xe,A=S?50:250;if(g-ri<A)return!1;ri=g,[...ot()].join()!==Et&&(At(),se());let P=Rt(),L=wt()&&P.live,N=L?{k:t.days.indexOf(P.ymd),out:co()}:Hr(P);Zn=N.out;let X=new le,W=0,Q=0;for(let E of Zn){if(W>=z)break;ft[W*3]=E.p.w[0],ft[W*3+1]=E.p.w[1],ft[W*3+2]=D+.02;let q=null;if(E.real&&E.v.pre&&E.v.prevTr)q=Ht(pt(E.v.prevTr.pat),E.v.dPrev+.35);else if(E.real&&E.tr&&!E.v.pre&&E.v.err<=.6&&E.v.disp!=null&&!(E.v.st==="STOPPED_AT"&&E.v.atStop>=0))q=Ht(pt(E.tr.pat),E.v.disp+.35);else if(!E.real&&E.p.moving){let Ce=E.tr.pat.t,xt=E.p.prev,yt=Ce[2*xt+1],ee=Ce[2*xt+2],fe=ee>yt?(E.rel-yt)/(ee-yt):1;q=js(E.tr.pat.segs[xt],Math.min(1,lo(m(fe,0,1))+.04))}let _t=E.real?!!E.stop:!E.p.moving;if(E.broke=Ku(E),E.broke)Zt[W]=85;else if(_t)Zt[W]=75;else if(q){let Ce=Oe(E.p.w),xt=Oe(q),yt=xt[0]-Ce[0],ee=xt[1]-Ce[1];Zt[W]=Math.hypot(yt,ee)>.05?Math.atan2(yt,-ee):99}else Zt[W]=99;X.set(E.c||E.tr.c),Lt[W*3]=X.r,Lt[W*3+1]=X.g,Lt[W*3+2]=X.b;let St=E.tr?E.tr===xe:xe&&xe.vtid===E.v.tid;zt[W]=St?22:r.dist<45?17:14,gt[W]=St?3.5:2.2;let qt=E.real&&E.stop==="via"||!!E.broke,ae=E.cancel||E.broke?[.86,.15,.15]:E.dl>10?[.86,.15,.15]:E.dl>5?[.92,.48,.05]:E.dl>=1?[.98,.8,.08]:[.09,.64,.29];(E.live&&E.dl>=5||St||qt)&&(Tn[Q*3]=E.p.w[0],Tn[Q*3+1]=E.p.w[1],Tn[Q*3+2]=D+.01,Yn.set(St?ae:qt?[.86,.15,.15]:[.98,.45,.09],Q*3),ao[Q]=zt[W]+(St?16+5*Math.sin(g/220):qt?10+3*Math.sin(g/400):8),oo[Q]=St?2:3,Q++),W++}if(Tt.setDrawRange(0,W),be.setDrawRange(0,Q),["position","fill","size","bw"].forEach(E=>{Tt.attributes[E].needsUpdate=!0,be.attributes[E].needsUpdate=!0}),Tt.attributes.ang.needsUpdate=!0,cn){let E=Zn.find(q=>q.tr===cn);if(E){let q=0,_t=innerHeight,St=h.style.display!=="none"&&!h.classList.contains("min")?h.getBoundingClientRect():null,qt=f("#rc").getBoundingClientRect();innerWidth<=640&&(St&&(q=St.bottom),_t=Math.min(_t,qt.top));let ae=q+(_t-q)/2,Ce=ae-innerHeight/2,xt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=E.p.w[0]-Math.sin(r.yaw)*Ce*xt,s.ty=E.p.w[1]+Math.cos(r.yaw)*Ce*xt}else wt()&&Rt().live&&(cn=null)}let J=Wt(P.min);J!==y&&(y=J,f("#ctime").textContent=J),f("#ntr").textContent=String(Zn.length),f("#ntrl").textContent=L?"trenes de Rodalies con posici\xF3n real":"trenes previstos seg\xFAn el horario";{let E=kt.size<v.length?[...kt].sort(F).join(", "):"",q=f("#ccount"),_t=`\u{1F686} ${Zn.length} ${L?"trenes con posici\xF3n real":"trenes previstos"}${E?` <small>\xB7 ${d(E)}</small>`:""}`;q&&q._t!==_t&&(q.innerHTML=_t,q._t=_t)}let at=new Date;if(f("#cdate").textContent=P.live?"hora actual":nt?"simulaci\xF3n \xD7"+nt:oi?"en pausa":"hora elegida",N.k<0?f("#src").innerHTML=`<b style="color:#c2410c">Sin horarios para hoy.</b> Los datos guardados van del ${Le(t.days[0])} al ${Le(t.days[t.days.length-1])}: actualiza la app.`:L?f("#src").textContent=`En directo \xB7 posiciones de Renfe de hace ${Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...U.vp.values()].map(E=>E.ts),0)))} s`:f("#src").innerHTML='<b style="color:#c2410c">No es tiempo real:</b> '+(U.url?"sin conexi\xF3n con el puente, ":"conecta el puente para ver los trenes reales; ")+"posiciones calculadas con el horario",P.live){let E=Math.round(P.min),q=f("#tsl");document.activeElement!==q&&(q.value=E<240?E+1440:E)}return Rn(),g-$r>3e3&&(xe||Ye>=0||mn||sn)&&($r=g,Ke()),ne(),!0}let it=-1,Y=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Z=[],Pt=document.createElement("button");Pt.type="button",Pt.id="mbtn",Pt.title="Ver los nombres de los municipios",Pt.innerHTML="\u{1F3D8}\uFE0F<span>Municipios</span>",Pt.onclick=()=>{Y=!Y;try{localStorage.setItem("rod_mun",Y?"1":"")}catch{}Pt.classList.toggle("on",Y),a(),$t()},Pt.classList.toggle("on",Y),document.body.appendChild(Pt);let Gt=w.slice().sort((g,S)=>S.pop-g.pop);function Bt(g){if(g._a)return g._a;let S=null,A=0;for(let P of g.rings||[]){let L=P[0];if(!L)continue;let N=0,X=0,W=0;for(let Q=0,J=L.length;Q<J;Q+=2){let at=L[Q],E=L[Q+1],q=L[(Q+2)%J],_t=L[(Q+3)%J],St=at*_t-q*E;N+=St,X+=(at+q)*St,W+=(E+_t)*St}Math.abs(N)>A&&(A=Math.abs(N),S=[X/(3*N),W/(3*N)])}return g._a=S?[(S[0]-l)*o,(S[1]-c)*o]:[g.cx,g.cy]}let Xt=g=>g>=1e5?1:g>=2e4?2:g>=5e3?3:4,Qt=[0,7.6,6.7,6,5.4],ge=[0,17,15,13,12],Se=g=>g.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function $t(){let g=s.tilt<.06&&r.tilt<.08;Pt.classList.toggle("show",g);let S=0;if(Y&&g){let A=[...document.querySelectorAll(".plab, .slab")].filter(N=>N.offsetParent!==null||N.style.display==="block").map(N=>{let X=N.getBoundingClientRect();return[X.left-2,X.top-2,X.right+2,X.bottom+2]}).filter(N=>N[2]>N[0]),P=r.dist,L=P>160?5e4:P>130?2e4:P>105?8e3:P>80?3e3:P>62?800:0;for(let N of Gt){let X=Xt(N.pop);if(N.pop<L)break;let W=Bt(N);if(Ee.set(W[0],W[1],D).project(n),Math.abs(Ee.x)>1.02||Math.abs(Ee.y)>1.02)continue;let Q=(Ee.x*.5+.5)*innerWidth,J=(-Ee.y*.5+.5)*innerHeight,at=Se(N.name),E=at.length*Qt[X]+8,q=ge[X],_t=[Q-E/2,J-q/2,Q+E/2,J+q/2];if(A.some(qt=>_t[0]<qt[2]&&qt[0]<_t[2]&&_t[1]<qt[3]&&qt[1]<_t[3]))continue;A.push(_t);let St=Z[S]||(Z[S]=Object.assign(document.createElement("div"),{className:"mlab"}));St.isConnected||document.body.appendChild(St),St._n!==at&&(St.textContent=at,St._n=at),St._t!==X&&(St.className="mlab t"+X,St._t=X),St.style.transform=`translate(${Math.round(Q)}px,${Math.round(J)}px) translate(-50%,-50%)`,St.style.display="block",S++}}for(;S<Z.length;S++)Z[S].style.display="none"}let Me={at:0,hoy:null,ayer:null,err:""},tn="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function $e(){Date.now()-Me.at<5*6e4||(Me.at=Date.now(),Promise.all(["hoy","ayer"].map(g=>fetch(tn+g+".json",{cache:"no-store"}).then(S=>S.ok?S.json():null).catch(()=>null))).then(([g,S])=>{Me.hoy=g,Me.ayer=S,Me.err=g?"":"sin datos",sn&&(h._h="",Ke())}))}let Fe=g=>g>=90?"g":g>=80?"y":g>=65?"w":"b",Je={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},Vt=g=>g>10?Je.b:g>5?Je.w:g>=1?Je.y:Je.g,je=g=>(g>=.05?"+":"")+(Math.round(g*10)/10).toString().replace(".",",")+" min";function we(g,S,A){return`<div class="sbars">${g.map(P=>`<div class="sbar" title="${d(P.tip||"")}"><span class="sl">${P.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(P.w*100))}%;background:${P.c}"></i></span><b class="sv" style="color:${P.c===Je.y?"#a16207":P.c}">${P.val}</b></div>`).join("")}</div>`}function Gn(g){if(!g||g.length<2){let W=g&&g[0];return W?`<p class="snote">Primera foto del d\xEDa a las ${W.t}: ${Math.round(W.ok/W.n*100)} % puntuales de ${W.n} trenes. El gr\xE1fico aparece con la segunda foto.</p>`:'<p class="snote">A\xFAn no hay fotos de hoy.</p>'}let S=300,A=92,P=22,L=W=>P+W*(S-P-6)/(g.length-1),N=W=>6+(100-W)/100*(A-22),X=g.map((W,Q)=>[L(Q),N(W.n?W.ok/W.n*100:100),W]);return`<svg class="schart" viewBox="0 0 ${S} ${A}" role="img" aria-label="Porcentaje de trenes puntuales a lo largo del d\xEDa">
      ${[100,75,50].map(W=>`<line x1="${P}" x2="${S-4}" y1="${N(W)}" y2="${N(W)}" class="gl"/><text x="2" y="${N(W)+3}" class="ax">${W}%</text>`).join("")}
      <polyline points="${X.map(W=>W[0].toFixed(1)+","+W[1].toFixed(1)).join(" ")}" class="ln"/>
      ${X.map(([W,Q,J])=>`<circle cx="${W.toFixed(1)}" cy="${Q.toFixed(1)}" r="5" class="pt"><title>${J.t} \xB7 ${J.n?Math.round(J.ok/J.n*100):100}% puntuales \xB7 ${J.n} trenes \xB7 ${J.d5} con +5 min \xB7 retraso medio ${je(J.avg)}${J.nd?` \xB7 ${J.nd} sin dato`:""}</title></circle>`).join("")}
      <text x="${P}" y="${A-3}" class="ax">${g[0].t}</text><text x="${S-4}" y="${A-3}" class="ax" text-anchor="end">${g[g.length-1].t}</text></svg>`}function ai(){$e();let g=Rt(),S=Zn.filter(W=>W.real&&wt()&&g.live),A=S.filter(W=>U.delays.has(W.v.tid)),P=A.length,L=S.length-P,N='<div class="tc sts" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>\u{1F4CA} Estad\xEDsticas</h3>';if(P){let W=A.filter(xt=>xt.dl<3).length,Q=A.filter(xt=>xt.dl>=5).length,J=A.filter(xt=>xt.stop==="via").length,at=Math.round(W/P*100);N+=`<small>Ahora mismo \xB7 ${P} trenes con retraso publicado por Renfe${L?` \xB7 ${L} sin dato (no se cuentan)`:""}</small><div class="kpis">
        <div class="kpi ${Fe(at)}"><b>${at}%</b><span>puntuales</span></div>
        <div class="kpi ${Fe(100-Q/P*100*2)}" title="${Math.round(Q/P*100)} % de los trenes"><b>${Q}</b><span>con 5 min<br>o m\xE1s</span></div>
        <div class="kpi ${J===0?"g":J<=2?"w":"b"}"><b>${J}</b><span>detenidos<br>en la v\xEDa</span></div></div>`;let E=new Map;A.forEach(xt=>{let yt=xt.fam,ee=E.get(yt)||{n:0,ok:0,sum:0};ee.n++,ee.ok+=xt.dl<3,ee.sum+=Math.max(0,xt.dl),E.set(yt,ee)});let q=[...E].filter(([xt])=>C[xt]).sort((xt,yt)=>xt[1].ok/xt[1].n-yt[1].ok/yt[1].n||yt[1].sum/yt[1].n-xt[1].sum/xt[1].n),_t=q.filter(([,xt])=>xt.ok<xt.n),St=q.filter(([,xt])=>xt.ok===xt.n);N+="<h4>Puntualidad por l\xEDnea ahora</h4>"+(_t.length?"":'<p class="snote">\u2713 Todas las l\xEDneas van puntuales.</p>')+we(_t.map(([xt,yt])=>({lab:Ai(xt),w:yt.ok/yt.n,c:Je[Fe(yt.ok/yt.n*100)],val:`${Math.round(yt.ok/yt.n*100)}% <small>${je(yt.sum/yt.n)}</small>`,tip:`${xt}: ${yt.ok} de ${yt.n} trenes puntuales \xB7 retraso medio ${je(yt.sum/yt.n)}`})))+(St.length?`<p class="snote">Puntuales al 100 %: ${St.map(([xt])=>Ai(xt)).join(" ")}</p>`:"");let qt=new Map;A.forEach(xt=>{if(!xt.tr||xt.v.next==null||xt.v.next<0||xt.v.pre)return;let yt=xt.tr.pat.stops[xt.v.next],ee=qt.get(yt)||{n:0,sum:0};ee.n++,ee.sum+=Math.max(0,xt.dl),qt.set(yt,ee)});let ae=[...qt].filter(([,xt])=>xt.sum/xt.n>=1).sort((xt,yt)=>yt[1].sum/yt[1].n-xt[1].sum/xt[1].n).slice(0,8),Ce=ae.length?ae[0][1].sum/ae[0][1].n:1;N+='<h4>Estaciones con m\xE1s retraso ahora</h4><small class="snote">Retraso medio de los trenes que van a llegar a cada estaci\xF3n</small>'+(ae.length?we(ae.map(([xt,yt])=>({lab:`<span class="sn" data-gs="${xt}">${d(M[xt].n)}</span>`,w:yt.sum/yt.n/Ce,c:Vt(yt.sum/yt.n),val:`${je(yt.sum/yt.n)} <small>${yt.n} ${yt.n===1?"tren":"trenes"}</small>`,tip:`${M[xt].n}: ${yt.n} trenes llegando con ${je(yt.sum/yt.n)} de media`}))):'<p class="snote">\u2713 Ning\xFAn tren llega con retraso ahora mismo.</p>')}else N+='<p class="snote">Las estad\xEDsticas en directo necesitan el puente de tiempo real conectado.</p>';let X=Me.hoy;if(N+="<h4>Hoy, a lo largo del d\xEDa</h4>",X&&X.snaps){N+=Gn(X.snaps);let W=Object.entries(X.st||{}).map(([at,E])=>[ht.get(at),E]).filter(([at,E])=>at!=null&&E.n>=3).map(([at,E])=>[at,E.sum/E.n/60,E]).filter(at=>at[1]>=1).sort((at,E)=>E[1]-at[1]).slice(0,8);if(W.length){let at=W[0][1];N+='<h4>Estaciones con m\xE1s retraso hoy</h4><small class="snote">Retraso medio de los trenes al llegar \xB7 al menos 3 trenes medidos</small>'+we(W.map(([E,q,_t])=>({lab:`<span class="sn" data-gs="${E}">${d(M[E].n)}</span>`,w:q/at,c:Vt(q),val:`${je(q)} <small>m\xE1x +${Math.round(_t.max/60)}</small>`,tip:`${M[E].n}: ${_t.n} trenes medidos hoy \xB7 ${_t.d5} con 5 min o m\xE1s \xB7 peor +${Math.round(_t.max/60)} min`})))}let Q=Object.entries(X.lines||{}).filter(([at,E])=>C[at]&&E.n>=3).sort((at,E)=>at[1].ok/at[1].n-E[1].ok/E[1].n);Q.length&&(N+="<h4>L\xEDneas hoy</h4>"+we(Q.map(([at,E])=>({lab:Ai(at),w:E.ok/E.n,c:Je[Fe(E.ok/E.n*100)],val:`${Math.round(E.ok/E.n*100)}% <small>${je(E.sum/E.n/60)}</small>`,tip:`${at} hoy: ${Math.round(E.ok/E.n*100)}% de las mediciones puntuales \xB7 peor retraso +${Math.round(E.max/60)} min`}))));let J=X.upd?(Date.now()-Date.parse(X.upd))/6e4:0;N+=`<small class="snote">${J>40?`<b>\xDAltima foto hace ${Math.round(J)} min</b> (GitHub a veces retrasa las tareas autom\xE1ticas) \xB7 `:""}Foto cada 15 min del tiempo real de Renfe \xB7 actualizado ${d((X.upd||"").slice(11,16))} \xB7 ${(X.note||"").includes("Solo cuentan")?"solo cuentan los trenes con dato de retraso":"las fotos anteriores a las 12:20 contaban como puntuales los trenes sin dato"}</small>`}else N+=`<p class="snote">${Me.at?"El hist\xF3rico de hoy a\xFAn no est\xE1 disponible: se va reuniendo cada 15 min.":"Cargando\u2026"}</p>`;return N+"</div>"}let On=document.createElement("button");On.type="button",On.id="sbtn",On.title="Estad\xEDsticas de puntualidad",On.innerHTML="\u{1F4CA}<span>Estad\xEDsticas</span>",On.onclick=()=>{sn=!sn,sn&&(pn=mn=!1,xe=null,Ye=-1,cn=null,Me.at=0,se()),h._h="",Ke(),a()},document.body.appendChild(On);function rs(){r.dist<45!=it<45&&(it=r.dist,se()),Ti(),$t()}let Ne=[],Ee=new O;function Ti(){let g=r.dist<30,S=0;if(g){let A=[];for(let P=0;P<Ct;P++)It[P]<4||(Ee.set(M[P].w[0],M[P].w[1],D).project(n),!(Ee.z>1||Math.abs(Ee.x)>1.05||Math.abs(Ee.y)>1.05)&&A.push([P,(Ee.x*.5+.5)*innerWidth,(-Ee.y*.5+.5)*innerHeight]));if(A.length<=70)for(let[P,L,N]of A){let X=Ne[S]||(Ne[S]=Object.assign(document.createElement("div"),{className:"slab"}));X.isConnected||document.body.appendChild(X),X.textContent=M[P].n,X.dataset.i=P,X.style.display="block",X.style.transform=`translate(${Math.round(L+8)}px,${Math.round(N-7)}px)`,S++}}for(;S<Ne.length;S++)Ne[S].style.display="none"}function Oe(g){return Ee.set(g[0],g[1],D).project(n),[(Ee.x*.5+.5)*innerWidth,(-Ee.y*.5+.5)*innerHeight,Ee.z]}function fi(g,S,A,P){let L=null,N=A*A;for(let X of Zn){let[W,Q,J]=Oe(X.p.w);if(J>1)continue;let at=(W-g)**2+(Q-S)**2;at<N&&(N=at,L={a:X})}if(L)return L;N=P*P;for(let X=0;X<Ct;X++){if(!It[X])continue;let[W,Q,J]=Oe(M[X].w);if(J>1)continue;let at=(W-g)**2+(Q-S)**2;at<N&&(N=at,L={s:X})}return L}window.__rodTap=(g,S)=>{let A=null,P=1e9;for(let N of Ne){if(N.style.display==="none")continue;let X=N.getBoundingClientRect();if(g>=X.left-4&&g<=X.right+4&&S>=X.top-4&&S<=X.bottom+4){let W=Math.abs(S-(X.top+X.bottom)/2)*4+(g-X.left);W<P&&(P=W,A=N)}}if(A)return window.__rodPickStation(+A.dataset.i),!0;let L=fi(g,S,24,18);return L&&L.a?(pn=!1,mn=!1,sn=!1,xe=L.a.tr||{vtid:L.a.v.tid},Ye=-1,cn=null,tr(),se(),Ke(),ri=0,a(),!0):L&&L.s!=null?(pn=!1,mn=!1,sn=!1,Ye=L.s,xe=null,cn=null,tr(),se(),Ke(),a(),!0):!1},window.__rodHover=(g,S)=>{let A=fi(g,S,14,10);if(A&&A.a){let P=A.a,L=P.tr?M[P.tr.pat.stops[P.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${P.c}">\u25A0</span> ${d(P.fam||P.tr&&P.tr.fam||"?")} \xB7 tren ${d(P.tr?P.tr.num:P.v.num)}</b><small>${L?"hacia "+d(L):""}${P.real?(P.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(P.dl)} min</b>`:" \xB7 puntual")+" \xB7 en directo":" \xB7 previsto"}</small>`}return A&&A.s!=null?`<b>${d(M[A.s].n)}</b><small>${[...M[A.s].fams].sort(F).join(" \xB7 ")}</small>`:null},window.__rodPickStation=g=>{pn=mn=sn=!1,xe=null,cn=null,Ye=g,tr(),se(),h._h="",Ke(),a()};{let g=f("#rc"),S=()=>{let A=g.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,A-64-10)+"px")};try{new ResizeObserver(S).observe(g)}catch{}addEventListener("resize",S),setTimeout(S,300)}window.__rodTick=k,window.__rodFrame=rs,window.__rodResize=()=>{Ue.resolution.set(innerWidth,innerHeight),_e.resolution.set(innerWidth,innerHeight)},window.__rodResize();let hn={st:-1,f:new Set},Xr=g=>{let S=[...M[g].fams].sort(F);return`<div class="sfc">${S.length>1?`<button type="button" data-sf="" class="${hn.f.size?"":"on"}">Todas</button>`:""}${S.map(A=>`<button type="button" data-sf="${d(A)}" class="ln ${hn.f.size&&!hn.f.has(A)?"off":""}${kt.has(A)?"":" hid"}" style="--c:${C[A]}">${d(A)}</button>`).join("")}</div>${S.some(A=>!kt.has(A))?"<small>Las l\xEDneas apagadas en el filtro general no se muestran</small>":""}`},Zp=g=>{let S=(g||"#6b7385").replace("#",""),A=parseInt(S.slice(0,2),16),P=parseInt(S.slice(2,4),16),L=parseInt(S.slice(4,6),16);return(.299*A+.587*P+.114*L)/255>.62?"#1d2330":"#fff"},Ts=(g,S)=>{let A=C[S]||"#6b7385";return`<span class="dst" style="background:${A};color:${Zp(A)}" title="${d(S||"")}">${d(g)}</span>`},ho=g=>{let S=M[g]&&M[g].id;return Kn.st.includes(S)?"\u{1F3E0} ":Cn.st.includes(S)?"\u{1F4BC} ":""},Qs=g=>g>10?"d-hi":g>5?"d-md":"d-lo",Jp=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,qr={ref:null,m:new Map};function Ku(g){let S=String(g.tr?g.tr.num:g.v&&g.v.num||"");if(!S)return null;if(qr.ref!==U.alerts){qr.ref=U.alerts,qr.m=new Map;for(let P of U.alerts)if(P.src==="Rodalies"&&Jp.test(P.txt))for(let L of P.txt.matchAll(/\b(\d{4,6})\b/g))qr.m.set(L[1],P)}let A=qr.m.get(S);return A?{why:"aviso",txt:A.txt}:g.real&&g.stop==="via"&&g.v.still>=300?{why:"via",min:Math.round(g.v.still/60)}:null}let Ai=g=>`<span class="ln" style="--c:${C[g]}">${d(g)}</span>`;function ju(g,S){return S?g==="X"?'<span class="st late">Cancelado</span>':g>=60?`<span class="st late ${Qs(g/60)}">Retraso de ${Math.round(g/60)} min</span>`:'<span class="st ok">Puntual</span>':'<span class="st sch">Seg\xFAn horario \xB7 sin dato en directo</span>'}function Ke(){if(!xe&&Ye<0&&!mn&&!pn&&!sn){h.innerHTML="",h._h="",h.style.display="none",h.classList.remove("peek"),Kc();return}let g=Rt(),S="",A=wt()&&g.live,P=(E,q)=>U.alerts.filter(_t=>[..._t.fams].some(St=>E.has(St))||q!=null&&_t.stops.has(q)),L=E=>E.length?`<div class="al">${E.slice(0,4).map(q=>`<p>\u26A0\uFE0F ${Wc(q)} ${[...q.fams].sort(F).slice(0,6).map(Ai).join(" ")} ${d(q.txt)} <small>${$c(q)}</small></p>`).join("")}${E.length>4?`<small>y ${E.length-4} avisos m\xE1s</small>`:""}</div>`:"",N=xe&&A?Zn.find(E=>E.real&&(xe.vtid?E.v.tid===xe.vtid:E.tr===xe)):null;if(sn)S=ai();else if(pn)S=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>Novedades</h3><small>${d(f("#ver").textContent.replace(" \xB7 novedades y fuentes",""))}</small><ul class="chg">${f("#chg").innerHTML||"<li>Versi\xF3n de prueba</li>"}</ul>
        <h3 style="margin-top:14px">Fuentes</h3><ul class="fts">
        <li><b>Renfe Operadora</b> \xB7 horarios (GTFS), posici\xF3n de los trenes y retrasos (GTFS-RT) \xB7 <a href="https://data.renfe.com" target="_blank" rel="noopener">data.renfe.com</a> \xB7 licencia CC BY 4.0</li>
        <li><b>Rodalies de Catalunya</b> (Generalitat) \xB7 salidas con v\xEDa, cancelaciones y avisos \xB7 <a href="https://rodalies.gencat.cat" target="_blank" rel="noopener">rodalies.gencat.cat</a></li>
        <li><b>Adif</b> \xB7 incidencias en la infraestructura de Catalu\xF1a \xB7 <a href="https://www.adif.es/viajeros/estado-de-la-red" target="_blank" rel="noopener">estado de la red</a> \xB7 \xA9 Adif</li>
        <li><b>OpenStreetMap</b> \xB7 trazado de las v\xEDas \xB7 <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">\xA9 colaboradores de OpenStreetMap</a>, licencia ODbL</li>
        </ul><small>Los datos se muestran tal como los publican sus fuentes. Ante cualquier duda, manda lo que diga el operador en la estaci\xF3n.</small></div>`;else if(mn){let E=U.alerts.filter(q=>[...q.fams].some(_t=>kt.has(_t))||!q.fams.size);S=`<div class="tc" style="--c:#c2410c"><button class="x" data-cx>\xD7</button><h3>Avisos e incidencias</h3><small>${E.length} avisos activos para las l\xEDneas que tienes visibles</small>${E.map(q=>`<div class="al"><p>${Wc(q)} ${[...q.fams].sort(F).map(Ai).join(" ")} <small>${$c(q)}</small></p><p>${d(q.txt)}</p></div>`).join("")||"<p>Sin avisos activos.</p>"}<small>Fuente: avisos oficiales de Rodalies de Catalunya, incidencias en la v\xEDa de Adif (gestor de la infraestructura)${U.alertsTs&&Date.now()/1e3-U.alertsTs<6*3600?" y de Renfe":` \xB7 los avisos GTFS de Renfe no se muestran: Renfe no los actualiza desde el ${U.alertsTs?new Date(U.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(N){let E=N.v,q=N.tr,_t=Ge=>d(M[q.pat.stops[Ge]].n),St=q?q.pat.stops.length:0,qt=ht.get(E.sid),ae=qt!=null?d(M[qt].n):d(E.sid),Ce=q&&E.atStop>=0?_t(E.atStop):"",xt=q&&E.next>=0?_t(E.next):ae,yt=q&&E.next>0?_t(E.next-1):"",ee=N.broke||Ku(N),fe=ee?`<b class="stopv">\u26A0\uFE0F ${ee.why==="aviso"?"Tren averiado seg\xFAn Rodalies":`Posible aver\xEDa: detenido en la v\xEDa desde hace ${ee.min} min`}</b>${q&&yt?` \xB7 entre ${yt} y <b>${xt}</b>`:""}`:N.stop==="via"&&q?`<b class="stopv">\u23F8 Detenido</b> ${yt?`entre ${yt} y <b>${xt}</b>`:`antes de <b>${xt}</b>`} desde hace ${Math.max(1,Math.round(E.still/60))} min`:E.pre&&q?E.prevTr?`A\xFAn no ha empezado este viaje. Est\xE1 terminando el tren <b>${d(E.prevTr.num)}</b> hacia <b>${_t(0)}</b>${E.prevDl>=1?` con <b>+${Math.round(E.prevDl)} min</b>`:""}: llega hacia las <b>${Wt(E.arrO)}</b> y saldr\xEDa hacia las <b>${Wt(E.depEst)}</b>${E.preDl>=1?` (horario ${Wt(E.dep0)})`:""}`:`A\xFAn no ha empezado este viaje: va hacia <b>${_t(0)}</b>, de donde sale a las <b>${Wt(E.dep0+N.dl)}</b>`:E.st==="STOPPED_AT"&&Ce?`Parado en <b>${Ce}</b>`:Ce&&E.next>=0&&E.atStop!==E.next?`Saliendo de <b>${Ce}</b> hacia <b>${xt}</b>`:yt?`Entre ${yt} y <b>${xt}</b>`:`Hacia <b>${xt}</b>`,Re=U.tu.get(E.tid),yn=Re&&Re.next&&q&&E.next>=0&&Re.next.sid===M[q.pat.stops[E.next]].id&&Re.next.t?new Date(Re.next.t*1e3).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"",en=[];if(q){let Ge=N.idx>=0?N.idx:0,Ri=E.pre?Math.max(N.dl,E.preDl||0):N.dl,er=In=>q.t0+q.pat.t[In]+Ri;for(let In=Ge;In<St;In++)en.push(`<li${ho(q.pat.stops[In])?' class="mine"':""}><b>${Wt(er(In===0?1:2*In))}</b><span title="${_t(In)}">${ho(q.pat.stops[In])}${_t(In)}</span>${Ri>=1?`<em class="dl ${Qs(Ri)}">${E.pre?"\u2248":""}+${Math.round(Ri)}</em>`:""}</li>`)}S=`<div class="tc" style="--c:${N.c}"><button class="x" data-cx>\xD7</button><div>${Ai(N.fam)}<b>Tren ${d(q?q.num:E.num)}</b> <span class="lv">\u25CF en directo</span></div>${q?`<h3 class="rt"><span class="o" title="${_t(0)}">${_t(0)}</span><span class="ar">\u2192</span>${Ts(M[q.pat.stops[St-1]].n,q.fam)}</h3>`:""}
        <p>${fe}${yn?` \xB7 prevista ${yn}`:""}${E.plat?` \xB7 <b>and\xE9n ${d(E.plat)}</b>`:""}</p><p>${E.pre&&E.prevTr?E.preDl>=1?`<span class="st late">Saldr\xE1 con unos ${Math.round(E.preDl)} min de retraso (estimado)</span>`:'<span class="st ok">Le da tiempo a salir a su hora (estimado)</span>':ju(U.delays.get(E.tid),U.delays.has(E.tid))}</p>
        <small>${E.pre?`Renfe ya le pone el n\xFAmero de su pr\xF3ximo viaje. Posici\xF3n real enviada hace ${Math.round(N.age)} s`:E.est?"Renfe da una posici\xF3n que no encaja con su recorrido: se muestra donde deber\xEDa estar seg\xFAn el horario y su retraso":`Posici\xF3n enviada por Renfe hace ${Math.round(N.age)} s${N.age>120?" \xB7 <b>sin actualizar</b>":""}`}</small>
        ${en.length?`${N.dl>=1||E.pre&&E.preDl>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${en.join("")}</ol>`:""}${L(P(new Set([N.fam])))}
        ${po(q?q.num:E.num,"",N.fam)}${q?`<div class="rtb"><button type="button" data-follow>${cn===q?"Dejar de seguir":"Seguir este tren"}</button></div>`:""}</div>`}else if(xe&&A)S=`<div class="tc" style="--c:#6b7385"><button class="x" data-cx>\xD7</button><h3>Tren ${d(xe.num||xe.vtid||"")}</h3><p>Renfe no da ahora la posici\xF3n de este tren: puede haber terminado su viaje, no haber salido o no estar circulando.</p></div>`;else if(xe){let E=xe,q=E.pat,_t=q.stops.length,St=te(E),qt=typeof St=="number"?St/60:0,ae=t.days.indexOf(g.ymd),Ce=E.day===ae-1?1440:0,xt=g.min+Ce-E.t0-qt,yt=Es(E,xt),ee=Ge=>E.t0+q.t[Ge]+qt,fe=Ge=>d(M[q.stops[Ge]].n),Re="Fuera de servicio ahora";yt&&(Re=yt.moving?`Circulando hacia <b>${fe(yt.next)}</b> \xB7 llega ${Wt(ee(2*yt.next))}`:yt.at===_t-1?`Ha llegado a <b>${fe(_t-1)}</b>`:`Parado en <b>${fe(yt.at)}</b> \xB7 sale ${Wt(ee(2*yt.at+1))}`);let yn=yt?yt.next:0,en=[];for(let Ge=yn;Ge<_t;Ge++)en.push(`<li${ho(q.stops[Ge])?' class="mine"':""}><b>${Wt(ee(2*Ge))}</b><span title="${fe(Ge)}">${ho(q.stops[Ge])}${fe(Ge)}</span>${qt>=1?`<em class="dl ${Qs(qt)}">+${Math.round(qt)}</em>`:""}</li>`);S=`<div class="tc" style="--c:${E.c}"><button class="x" data-cx>\xD7</button><div>${Ai(E.fam)}<b>Tren ${d(E.num)}</b> <span class="pv">previsi\xF3n</span></div><h3 class="rt"><span class="o" title="${fe(0)}">${fe(0)}</span><span class="ar">\u2192</span>${Ts(M[E.pat.stops[_t-1]].n,E.fam)}</h3>
        <p>${Re}</p><p>${ju(St,St!=null)}</p><small>Sale ${Wt(E.t0+q.t[1])} \xB7 llega ${Wt(E.t0+q.t[2*_t-2])} (horario)</small>
        ${qt>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${en.join("")}</ol>${po(E.num,"",E.fam)}<div class="rtb"><button type="button" data-follow>${cn===E?"Dejar de seguir":"Seguir este tren"}</button></div></div>`}else{let E=Ye,q=t.days.indexOf(g.ymd),_t=[];hn.st!==E&&(hn.st=E,hn.f.clear());let St=xt=>(!C[xt]||kt.has(xt))&&(!hn.f.size||hn.f.has(xt));if(q>=0){let xt=(yt,ee)=>{for(let fe of yt){if(!St(fe.fam))continue;let Re=fe.pat.stops.indexOf(E);if(Re<0||Re===fe.pat.stops.length-1)continue;let yn=te(fe),en=typeof yn=="number"?yn/60:0,Ge=fe.t0+fe.pat.t[2*Re+1]-ee;Ge+en<g.min-1||Ge>g.min+360||_t.push({tr:fe,t:Ge,dl:en,d:yn,on:U.vp.has(fe.tid),past:g.min>fe.t0+fe.pat.t[1]-ee+2})}};xt(et[q],0),q>0&&xt(et[q-1],1440)}_t.sort((xt,yt)=>xt.t+xt.dl-yt.t-yt.dl);let qt=M[E].id,ae=An.get(qt);A&&U.url&&(!ae||Date.now()-ae.at>3e4)&&!ae?.loading&&(An.set(qt,{...ae||{},loading:!0,at:ae?ae.at:0}),mt(U.url.replace(/\/+$/,""),"/departures.json?stationId="+qt).then(xt=>{An.set(qt,{at:Date.now(),d:xt}),Ye===E&&(h._h="",Ke())}).catch(()=>An.set(qt,{at:Date.now(),err:1})));let Ce=A&&ae&&ae.d&&Array.isArray(ae.d.trains)?ae.d.trains:null;if(Ce){let xt=new Map([...U.vp.values()].map(ee=>[String((H.get(ee.tid)||{}).num||ee.num),ee])),yt=Ce.filter(ee=>St((ee.line||{}).id||"")).slice(0,40).map(ee=>{let fe=(ee.departureDateHourSelectedStation||"").slice(11,16),Re=(ee.line||{}).id||"",yn=String(ee.commercialNumber||ee.technicalNumber||""),en=xt.get(yn),Ge=en?U.delays.get(en.tid):null;return`<li class="go" data-gt="${d(yn)}|${en?d(en.tid):""}"><b>${d(fe)}</b>${C[Re]?Ai(Re):`<span class="ln" style="--c:#6b7385">${d(Re||"?")}</span>`}<span>${Ts((ee.destinationStation||{}).name||"",Re)}${ee.trainObservations?` \xB7 <i>${d(ee.trainObservations)}</i>`:""}</span>${ee.trainCancelled?"<em>cancelado</em>":typeof Ge=="number"&&Ge>=60?`<em class="dl ${Qs(Ge/60)}">+${Math.round(Ge/60)}</em>`:""}${ee.platformSelectedStation?`<i class="via">v\xEDa ${d(ee.platformSelectedStation)}</i>`:""}${en?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");S=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(M[E].n)}</h3>${Xr(E)}${po("",M[E].id,"")}
          <small style="margin-top:6px">Pr\xF3ximas salidas oficiales de Rodalies \xB7 hora prevista \xB7 \u25CF tren circulando</small>
          <ol>${yt||"<li><span>Rodalies no anuncia salidas ahora mismo</span></li>"}</ol>${L(P(M[E].fams,E))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}else S=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(M[E].n)}</h3>${Xr(E)}${po("",M[E].id,"")}
        <small style="margin-top:6px">${A&&U.url?"Cargando salidas oficiales\u2026 mientras, ":""}Pr\xF3ximas salidas${A?" \xB7 hora prevista con el retraso actual \xB7 \u25CF tren circulando":" \xB7 previsi\xF3n seg\xFAn horario (sin tiempo real)"}</small>
        <ol>${_t.slice(0,40).map(xt=>`<li class="go" data-gt="${d(xt.tr.num)}|${d(xt.tr.tid)}"><b>${Wt(xt.t+xt.dl)}</b>${Ai(xt.tr.fam)}<span>${Ts(M[xt.tr.pat.stops[xt.tr.pat.stops.length-1]].n,xt.tr.fam)}</span>${xt.d==="X"?"<em>cancelado</em>":xt.dl>=1?`<em class="dl ${Qs(xt.dl)}">+${Math.round(xt.dl)}</em>`:""}${A?xt.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':xt.past?'<i class="nos" title="deber\xEDa haber salido y Renfe no da su posici\xF3n">sin se\xF1al</i>':'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||"<li><span>No hay salidas en las pr\xF3ximas 6 horas</span></li>"}</ol>${L(P(M[E].fams,E))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}let X=h.scrollTop;if(h._h!==S&&(h.innerHTML=S,h._h=S,h.scrollTop=X),h.style.display="flex",h.classList.remove("min"),Kc(),innerWidth<=640){let E=h.querySelector(".tc");if(E&&!E.querySelector(".mn")){let q=document.createElement("button");q.type="button",q.className="mn",q.setAttribute("aria-label","Encoger o ampliar la ficha"),q.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",q.onclick=_t=>{_t.stopPropagation(),h.classList.toggle("peek"),q.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",h.scrollTop=0},E.appendChild(q)}}else h.classList.remove("peek");let W=f("#rc");if(innerWidth<=640&&!W.classList.contains("min")&&!Ke.done&&(Ke.done=1,f("#rcgrab").click()),innerWidth<=640){let E=f("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(E+8)+"px",h.style.width="calc(100vw - 76px)",h.style.maxHeight=Math.max(140,f("#rc").getBoundingClientRect().top-E-16)+"px"}else if(innerHeight<=500){let E=f("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(E+8)+"px",h.style.width="min(290px, 40vw)",h.style.maxHeight=innerHeight-E-20+"px"}else h.style.top="",h.style.width=sn?"390px":"300px",h.style.maxHeight="";let J=h.querySelector("[data-cx]");J&&(J.onclick=E=>{E.stopPropagation(),Ke.done=0,mn=!1,pn=!1,sn=!1,xe=null,Ye=-1,cn=null,se(),Ke(),ri=0,a()}),ed(h),h.querySelectorAll("[data-gs]").forEach(E=>E.onclick=()=>{let q=+E.dataset.gs;sn=!1,window.__rodPickStation(q),Object.assign(s,{tx:M[q].w[0],ty:M[q].w[1],dist:Math.min(s.dist,20)}),a()}),h.querySelectorAll("[data-sf]").forEach(E=>E.onclick=q=>{q.stopPropagation();let _t=E.dataset.sf;_t?hn.f.has(_t)?hn.f.delete(_t):hn.f.add(_t):hn.f.clear(),h._h="",Ke()}),h.querySelectorAll("[data-gt]").forEach(E=>E.onclick=()=>{let[q,_t]=E.dataset.gt.split("|"),St=H.get(_t);fd({num:q,tid:U.vp.has(_t)?_t:"",tr:St||null})}),h.querySelectorAll("[data-sethome]").forEach(E=>E.onclick=()=>jc(Ye,E.dataset.sethome));let at=h.querySelector("[data-follow]");at&&(at.onclick=()=>{cn=cn===xe?null:xe,cn?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(h.classList.add("peek"),h.scrollTop=0,f("#rc").classList.contains("min")||f("#rcgrab").click())):h.classList.remove("peek"),h._h="",Ke(),a()})}window.__rodCard=Ke;try{localStorage.getItem("rod_inf")==="mini"&&f("#inf").classList.add("mini")}catch{}f("#inft").onclick=()=>{let g=f("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",g?"mini":"")}catch{}(xe||Ye>=0||mn||pn)&&(h._h="",Ke())},f("#ver").onclick=()=>{pn=!0,xe=null,Ye=-1,mn=!1,h._h="",Ke()};let uo={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},Kp=["vacio","lleno","petado","parado","calor","abordo"],jp=["gente","retraso","cancel","ascensor","via"],Qp={vacio:"Va con sitio",lleno:"Va lleno",petado:"Muy lleno, cuesta subir",parado:"Parado sin moverse",calor:"Sin aire acondicionado",abordo:"Incidencia a bordo",gente:"Mucha gente esperando",retraso:"Anuncian retraso por megafon\xEDa",cancel:"Anuncian tren cancelado",ascensor:"Ascensor o escalera averiados",via:"Incidencia en la estaci\xF3n"},fo=g=>(U.tipos||Qp)[g]||g,Gc=(g,S)=>(U.rep||[]).filter(A=>g&&A.num===String(g)&&!A.sid||S&&A.sid===String(S)&&!A.num||g&&S&&A.num===String(g)&&A.sid===String(S)),Qu=g=>{let S=Math.round((Date.now()+(U.repSkew||0)-g.at)/6e4);return S<1?"ahora":`hace ${S} min`},Yr=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function po(g,S,A){if(!U.url||!U.repOk)return"";let P=Gc(g,S),L=g?Kp:jp;return`<div class="crowd"><small>\u{1F465} Lo que dicen los viajeros${P.length?"":" \xB7 nadie ha avisado todav\xEDa"}</small>${P.map(N=>`<p><span>${uo[N.kind]||"\u2022"} <b>${d(fo(N.kind))}</b> <small>${N.up>1?N.up+" viajeros \xB7 ":""}${Qu(N)}</small></span>${Yr.has(N.id)?"<small>\u2713</small>":`<button type="button" data-rv="${N.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${N.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${g?"\xBFVas en este tren? Avisa a los dem\xE1s":"\xBFEst\xE1s en la estaci\xF3n? Avisa a los dem\xE1s"}</summary><div class="ckb">${L.map(N=>`<button type="button" data-rk="${N}" data-rn="${d(g||"")}" data-rs="${d(S||"")}" data-rl="${d(A||"")}">${uo[N]} ${d(fo(N))}</button>`).join("")}</div><small>An\xF3nimo \xB7 se borra solo en 90 min \xB7 sin texto libre</small></details></div>`}async function td(g,S){try{let P=await(await fetch(U.url.replace(/\/+$/,"")+S,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)})).json();if(!P.ok){Jn(P.err||"No se ha podido enviar");return}if(P.id){Yr.add(P.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Yr].slice(-300)))}catch{}}Jn(S==="/vote"?"Gracias, voto guardado":P.n>1?`Gracias \xB7 ya sois ${P.n} avisando de lo mismo`:"Gracias, aviso enviado");let L=await mt(U.url.replace(/\/+$/,""),"/reports.json");L&&L.items&&(U.rep=L.items),h._h="",Ke(),Rn(!0)}catch{Jn("Sin conexi\xF3n con el puente")}}function ed(g){g.querySelectorAll("[data-rk]").forEach(S=>S.onclick=A=>{A.stopPropagation(),S.disabled=!0,td({kind:S.dataset.rk,num:S.dataset.rn,sid:S.dataset.rs,line:S.dataset.rl},"/report")}),g.querySelectorAll("[data-rv]").forEach(S=>S.onclick=A=>{A.stopPropagation();let[P,L]=S.dataset.rv.split(":");Yr.add(+P);try{localStorage.setItem("rod_votes",JSON.stringify([...Yr].slice(-300)))}catch{}td({id:+P,v:+L},"/vote")})}let nd=0;function Jn(g){let S=f("#toast");S||(S=document.createElement("div"),S.id="toast",document.body.appendChild(S)),S.textContent=g,S.className="on",clearTimeout(nd),nd=setTimeout(()=>{S.className=""},2600)}function Wc(g){return g.src?`<b class="asrc ${g.src==="Adif"?"adif":""}">${g.src==="Adif"?"Adif \xB7 v\xEDa":d(g.src)}</b>`:""}function $c(g){if(!g.when)return"";let[S,A]=g.when.split("T"),P=Ae(new Date),L=P.ymd.slice(0,4)+"-"+P.ymd.slice(4,6)+"-"+P.ymd.slice(6,8);if(S===L&&A){let N=Math.round(P.min-(+A.slice(0,2)*60+ +A.slice(3,5)));return N<1?"ahora":N<60?`hace ${N} min`:`hoy a las ${A.slice(0,5)}`}return`${S.slice(8,10)}/${S.slice(5,7)}${A?" "+A.slice(0,5):""}`}function Xc(){let g=f("#alr");if(!g)return;let S=U.alerts.filter(A=>[...A.fams].some(P=>kt.has(P))).length;g.hidden=!S,g.textContent=`\u26A0\uFE0F ${S} aviso${S===1?"":"s"}`}{let g=f("#alrslot");g&&g.appendChild(f("#alr"))}f("#alr").onclick=()=>{pn=!1,mn=!0,xe=null,Ye=-1,Ke()},f("#wcopy").onclick=async()=>{let g=f("#wcode").textContent;try{await navigator.clipboard.writeText(g),f("#wcopy").textContent="Copiado \u2713"}catch{let A=document.createRange();A.selectNodeContents(f("#wcode"));let P=getSelection();P.removeAllRanges(),P.addRange(A),f("#wcopy").textContent="Selecciona y copia"}setTimeout(()=>f("#wcopy").textContent="Copiar c\xF3digo",2500)};let tm=ht.get("71801");function em(g,S){let A=M[g].id,P=An.get(A);!(wt()&&U.url)||P&&(P.loading||Date.now()-P.at<3e4)||(An.set(A,{...P||{},loading:!0,at:P?P.at:0}),mt(U.url.replace(/\/+$/,""),"/departures.json?stationId="+A).then(L=>{An.set(A,{at:Date.now(),d:L}),S&&S()}).catch(()=>An.set(A,{at:Date.now(),err:1})))}let nm=g=>+g.slice(0,2)*60+ +g.slice(3,5),Zr={k:-2,m:null};function im(g){let S=t.days.indexOf(Rt().ymd);if(Zr.k!==S){Zr.k=S,Zr.m=new Map;for(let A of et[S]||[])Zr.m.set(String(A.num),A)}return Zr.m.get(String(g))||null}function qc(g,S){let A=Rt(),P=wt()&&A.live&&!S,L=An.get(M[g].id),N=[],X=new Map([...U.vp.values()].map(Q=>[String((H.get(Q.tid)||{}).num||Q.num),Q]));if(P&&L&&L.d&&Array.isArray(L.d.trains))for(let Q of L.d.trains){let J=(Q.departureDateHourSelectedStation||"").slice(11,16);if(!J)continue;let at=String(Q.commercialNumber||Q.technicalNumber||""),E=X.get(at),q=E?U.delays.get(E.tid):null,_t=Math.max(typeof q=="number"?Math.max(0,q/60):0,E&&E.pre&&E.preDl||0),St=nm(J);St<A.min-720&&(St+=1440),N.push({sm:St,est:St+_t,dl:_t,fam:(Q.line||{}).id||"",dest:(Q.destinationStation||{}).name||"",destId:(Q.destinationStation||{}).id||"",plat:Q.platformSelectedStation||"",cancel:!!Q.trainCancelled,obs:Q.trainObservations||"",live:!!E,num:at,tid:E?E.tid:"",tr:E&&H.get(E.tid)||im(at),src:"oficial"})}else{let Q=t.days.indexOf(A.ymd);if(Q<0)return N;let J=(at,E)=>{for(let q of at){let _t=q.pat.stops.indexOf(g);if(_t<0||_t===q.pat.stops.length-1)continue;let St=te(q),qt=typeof St=="number"?Math.max(0,St/60):0,ae=q.t0+q.pat.t[2*_t+1]-E;if(ae+qt<A.min-1||ae>A.min+360)continue;let Ce=q.pat.stops[q.pat.stops.length-1];N.push({sm:ae,est:ae+qt,dl:qt,fam:q.fam,dest:M[Ce].n,destId:M[Ce].id,plat:"",cancel:St==="X",obs:"",live:U.vp.has(q.tid),num:q.num,tid:q.tid,tr:q,src:"horario"})}};J(et[Q],0),Q>0&&J(et[Q-1],1440)}let W=N.filter(Q=>Q.est>=A.min-.5).sort((Q,J)=>Q.est-J.est);if(!W.length&&N.length&&N[0].src==="oficial"&&!S)return qc(g,!0);if(W.length&&W[0].src==="oficial"){let Q=Math.max(...W.map(at=>at.sm)),J=new Set(W.map(at=>at.num));W=W.concat(qc(g,!0).filter(at=>at.sm>Q&&!J.has(String(at.num))))}return W}let id=(g,S,A,P)=>{let L={key:g,ico:S,name:A,st:[],i:0,walk:10,open:!1};try{let N=JSON.parse(localStorage.getItem("rod_"+g)||"null");N&&Object.assign(L,N)}catch{}return!L.st.length&&P&&(L.st=P),L},Kn=id("home","\u{1F3E0}","Casa",["79410","79412"]),Cn=id("work","\u{1F4BC}","Trabajo",null),Pe={key:"near",ico:"\u{1F4CD}",name:"Cerca de ti",st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},Jr=[Pe,Kn,Cn];Kn.open=!1,Cn.open=!1;function sm(g,S){let A=rt(g,S),P=rt(g,S+.009);return 1/Math.hypot(P[0]-A[0],P[1]-A[1])}function Yc(g){if(!navigator.geolocation){Pe.err="Este navegador no da la ubicaci\xF3n",Rn(!0);return}navigator.geolocation.getCurrentPosition(S=>{let{longitude:A,latitude:P}=S.coords,L=rt(A,P),N=sm(A,P),X=M.map((at,E)=>[E,Math.hypot(at.w[0]-L[0],at.w[1]-L[1])*N]).filter(([at])=>M[at].fams.size).sort((at,E)=>at[1]-E[1]),W=X.filter(([,at],E)=>E===0||at<Math.max(2.5,X[0][1]*1.6)).slice(0,3),Q=Pe.st[0]!==M[W[0][0]].id;Pe.st=W.map(([at])=>M[at].id),Pe.dist=Object.fromEntries(W.map(([at,E])=>[M[at].id,E])),Pe.fix=Date.now(),Pe.err="",Q&&(Pe.i=0);let J=[Kn,Cn].find(at=>at.st.includes(Pe.st[0])&&Pe.dist[Pe.st[0]]<1.5);g&&(J?J.open=!0:Pe.open=!0),Rn(!0)},S=>{Pe.err=S.code===1?"Sin permiso de ubicaci\xF3n":"No se ha podido obtener la ubicaci\xF3n",g&&(Kn.open=!!Kn.st.length),Rn(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let rm=g=>Math.max(1,Math.round(g*1.3/.08));setTimeout(()=>Yc(!0),400),setInterval(()=>{document.hidden||Yc(!1)},12e4);let Kr=g=>{try{localStorage.setItem("rod_"+g.key,JSON.stringify({st:g.st,i:g.i,walk:g.walk,open:g.open}))}catch{}},sd=g=>g.st.length?ht.get(g.st[g.i]||g.st[0]):null;function am(g,S,A,P){if(P&&S.tr){let X=S.tr.pat.stops,W=X.indexOf(g);if(W>=0&&X.slice(W+1).some(Q=>P.has(Q)))return"to"}if(P&&S.tr)return"out";let L=ht.get(S.destId)??M.findIndex(X=>X.n===S.dest);if(L<0||L==null||A==null)return"otros";let N=X=>Math.hypot(M[X].w[0]-M[A].w[0],M[X].w[1]-M[A].w[1]);return N(L)<N(g)?"to":"out"}let Zc=g=>g<1?"ahora":g<60?Math.round(g)+" min":Math.floor(g/60)+" h "+String(Math.round(g%60)).padStart(2,"0"),rd=0,om=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i;function lm(g,S,A){let P=sd(g);if(g===Pe){if(P==null)return`<div class="hplace"><button type="button" class="hhead hnew" data-hloc><span class="hico">\u{1F4CD}</span><span class="htit"><b>Cerca de ti</b><small>${Pe.err?d(Pe.err)+" \xB7 toca para reintentar":"Buscando tu ubicaci\xF3n\u2026"}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Kn,Cn].find(pe=>pe.st.includes(Pe.st[0])&&Pe.dist[Pe.st[0]]<1.5))return"";g.walk=rm(Pe.dist[g.st[g.i]]||0)}if(P==null){let Ft=Pe.st.length?ht.get(Pe.st[0]):null,pe=g===Cn?Kn:Cn,on=Ft!=null&&!pe.st.includes(Pe.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${g.ico}</span><span class="htit"><b>${g.name}</b><small>${on?`Est\xE1s en <b>${d(M[Ft].n)}</b>`:"Elige tu estaci\xF3n"}</small></span>${on?`<button type="button" class="hpick" data-hnear="${g.key}">Usar esta</button>`:""}<button type="button" class="hpick alt" data-hset="${g.key}">${on?"Otra\u2026":"Elegir"}</button></div></div>`}em(P,()=>Rn(!0));let L=g===Pe?null:g===Kn?Cn:Kn,N=L?sd(L):null,X=N!=null&&N!==P?N:tm,W=N!=null&&N!==P?L===Cn?"el trabajo":"casa":"Barcelona",Q=M[P].fams,J=new Set([...Q].filter(Ft=>kt.has(Ft))),at=J.size<Q.size,E=qc(P).filter(Ft=>!C[Ft.fam]||kt.has(Ft.fam)),q=g.walk,_t=U.alerts.filter(Ft=>[...Ft.fams].some(pe=>J.has(pe))||Ft.stops&&Ft.stops.has(P)),St=_t.some(Ft=>om.test(Ft.txt)),qt={to:[],out:[],otros:[],all:E},ae=W!=="Barcelona"?new Set(L.st.map(Ft=>ht.get(Ft)).filter(Ft=>Ft!=null)):null;E.forEach(Ft=>qt[am(P,Ft,X,ae)].push(Ft));let Ce=Ft=>{if(Ft==="all")return"Pr\xF3ximas salidas \xB7 todas las direcciones";let pe=li=>(li.find(ci=>ci.fam)||{}).fam;if(Ft==="to")return"Hacia "+Ts(W==="Barcelona"?"Barcelona":M[X].n,pe(qt.to)||[...J][0])+(W!=="Barcelona"?` <small>${W}</small>`:"");let on=[];for(let li of qt[Ft])on.some(ci=>ci[0]===li.dest)||on.push([li.dest,li.fam]);return on.length?"Hacia "+on.slice(0,2).map(([li,ci])=>Ts(li,ci)).join(" "):"Otros"},xt=Ft=>{let pe=qt[Ft].find(ci=>!ci.cancel&&ci.est-S.min>=q);if(!pe){let ci=qt[Ft].find(fm=>!fm.cancel);return ci?{cls:"v-no",big:"No llegas",small:`El pr\xF3ximo (${Wt(ci.est)}) sale en ${Zc(ci.est-S.min)}: no da tiempo a pie`}:{cls:"v-no",big:"Sin trenes",small:"No hay salidas pr\xF3ximas en este sentido"}}let on=pe.est-S.min-q;return{cls:on<1.5?"v-bad":on<5?"v-warn":"v-ok",big:on<1.5?"\xA1Sal ya!":"Sal en "+Zc(on),small:`${St?"\u26A0\uFE0F servicio afectado \xB7 ":""}${Wt(pe.est)} \xB7 ${pe.fam} a ${pe.dest}${pe.plat?" \xB7 v\xEDa "+pe.plat:""}${pe.dl>=1?` \xB7 +${Math.round(pe.dl)} min`:""}`,x:pe}},yt=qt.out.length?"out":"otros",ee=xt("to"),fe=xt(yt),Re=wt()&&S.live,yn=J.size===1,en=Ft=>{let pe=Ft.est-S.min;return Ft.cancel?"cx":pe<q?"u-miss":pe<q+1.5?"u-now":pe<q+5?"u-soon":"u-ok"},Ge=Ft=>{let pe=!Ft.cancel&&Ft.est-S.min<q,on=Gc(Ft.num,"");return`<li class="hr ${en(Ft)}${Ft.live?" on":""} go" style="--lc:${C[Ft.fam]||"#6b7385"}" data-dk="${A.push(Ft)-1}" title="${Ft.cancel?"Cancelado":pe?"No llegas a pie":"Ver este tren en el mapa"}"><span class="hrt"><b>${Ft.cancel?"\u2715":pe?Wt(Ft.est):Zc(Ft.est-S.min)}</b><small>${Ft.cancel?"cancelado":pe?"no llegas":Wt(Ft.est)}</small></span><span class="hrd">${Ts((yn?"":Ft.fam+" \xB7 ")+Ft.dest,Ft.fam)}${on.length?`<i class="cr" title="${d(on.map(li=>fo(li.kind)).join(" \xB7 "))}">${on.slice(0,2).map(li=>uo[li.kind]).join("")}</i>`:""}${Ft.obs?`<small class="hro">${d(Ft.obs)}</small>`:""}</span><span class="hrm">${!Ft.cancel&&Ft.dl>=1?`<em class="dl ${Qs(Ft.dl)}">+${Math.round(Ft.dl)}</em>`:""}${Ft.plat?`<i class="via">v\xEDa ${d(Ft.plat)}</i>`:""}</span></li>`},Ri=(Ft,pe)=>`<div class="hcol"><div class="hdir">${Ce(Ft)}</div><div class="hv ${pe.cls}${pe.x?" go":""}"${pe.x?` data-dk="${A.push(pe.x)-1}"`:""}><b>${pe.big}</b><small>${d(pe.small)}</small></div><ol>${qt[Ft].slice(0,g.more?Ft==="all"?20:10:Ft==="all"?7:4).map(Ge).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(g===Pe){let Ft=xt("all");var er=Ft.x?`${Ft.big} \xB7 <b>${Wt(Ft.x.est)}</b> ${d(Ft.x.fam)} a ${d(Ft.x.dest)}${Ft.x.plat?" \xB7 v\xEDa "+d(Ft.x.plat):""}`:Ft.big}let In=g===Pe?er:ee.x?`${ee.big} \xB7 <b>${Wt(ee.x.est)}</b> hacia ${d(W)}${ee.x.plat?" \xB7 v\xEDa "+d(ee.x.plat):""}`:"Sin trenes hacia "+d(W);return`<div class="hplace ${g.open?"open":""}"><button type="button" class="hhead" data-ht="${g.key}"><span class="hico">${g.ico}</span><span class="htit"><b>${d(M[P].n)}</b><small class="c${St?"bad":ee.cls.slice(2)}">${In}</small></span><span class="hchev">\u25BE</span></button>`+(g.open?`
      <div class="hbody">
        ${g.st.length>1?`<div class="hst">${g.st.map((Ft,pe)=>{let on=ht.get(Ft);return on==null?"":`<button type="button" data-hs="${g.key}:${pe}" class="${pe===g.i?"on":""}">${d(M[on].n)}</button>`}).join("")}</div>`:""}
        ${g===Pe?`<div class="hwalk">\u{1F4CD} A ${(()=>{let Ft=Pe.dist[g.st[g.i]]||0;return Ft<1?Math.round(Ft*100)*10+" m":Ft.toFixed(1).replace(".",",")+" km"})()} \xB7 unos <b>${g.walk} min</b> a pie</div>`:""}
        <div class="hwalk"${g===Pe?" hidden":""}>\u{1F6B6} Tardo <button type="button" data-hw="${g.key}:-1">\u2212</button><b>${q} min</b><button type="button" data-hw="${g.key}:1">+</button> a pie hasta la estaci\xF3n</div>
        ${at?`<div class="hflt">Solo ${[...J].sort(F).map(Ai).join(" ")||"ninguna l\xEDnea"} \xB7 filtro de l\xEDneas activo</div>`:""}
        ${_t.length?`<div class="hal ${St?"bad":""}">\u26A0\uFE0F ${Wc(_t[0])} ${d(_t[0].txt)} <small>${$c(_t[0])}</small>${_t.length>1?` <a data-hal>+${_t.length-1} avisos</a>`:""}</div>`:`<div class="hok">\u2713 Sin avisos para ${[...J].sort(F).join(", ")}</div>`}
        ${(()=>{let Ft=g.st.flatMap(pe=>Gc("",pe));return Ft.length?`<div class="hcr">${Ft.slice(0,3).map(pe=>`${uo[pe.kind]} <b>${d(fo(pe.kind))}</b> <small>${pe.up>1?pe.up+" viajeros \xB7 ":""}${Qu(pe)}</small>`).join("<br>")}</div>`:""})()}
        ${g===Pe?`<div class="hcols one">${Ri("all",xt("all"))}</div>`:`<div class="hcols">${Ri("to",ee)}${Ri(yt,fe)}</div>`}
        ${E.length>(g===Pe?7:8)?`<button type="button" class="hmore" data-hmore="${g.key}">${g.more?"\u25B4 Menos trenes":"\u25BE M\xE1s trenes \xB7 pr\xF3ximas horas"}</button>`:""}
        <div class="hsrc"><span class="hsrcT" title="${Re?An.get(M[P].id)?.d?"Salidas oficiales de Rodalies en directo":"Horario + retrasos mientras cargan las salidas oficiales":"Previsi\xF3n seg\xFAn horario (sin tiempo real)"} \xB7 \u25CF = tren circulando">${Re?An.get(M[P].id)?.d?"\u25CF oficial en directo":"\u25CF horario + retrasos":"seg\xFAn horario"}</span><a data-hmap="${P}">\u{1F5FA}\uFE0F mapa</a>${g===Pe?"<a data-hloc>\u{1F4CD} actualizar</a>":`<a data-hset="${g.key}">\u270E cambiar</a>`}${g===Cn?'<a data-hdel="work">\u2715 quitar</a>':""}</div>
      </div>`:"")+"</div>"}let Ci={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},ad=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,od=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,jr=()=>{let g=[...Kn.st,...Cn.st],S=new Set;return g.forEach(A=>{let P=ht.get(A);P!=null&&M[P].fams.forEach(L=>S.add(L))}),{stations:g,lines:[...S].sort(F)}},cm=g=>Uint8Array.from(atob(g.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((g.length+3)%4)),S=>S.charCodeAt(0));async function ld(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function cd(g){let A=await(await fetch(U.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:g.toJSON(),...jr()})})).json();if(!A.ok)throw new Error(A.err||"error")}let Bn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function hm(){let{lines:g,stations:S}=jr(),A=new Set(g),P=new Set(S.map(X=>ht.get(X))),L=U.alerts.filter(X=>[...X.fams].some(W=>A.has(W))||[...X.stops||[]].some(W=>P.has(W)));if(!Bn.seen){try{Bn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Bn.seen=new Set}if(!Bn.seen.size){L.forEach(X=>Bn.seen.add(X.id+"|"+X.txt.length)),hd();return}}let N=L.filter(X=>!Bn.seen.has(X.id+"|"+X.txt.length));if(N.length&&(N.forEach(X=>Bn.seen.add(X.id+"|"+X.txt.length)),hd(),!(!Bn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let X of N.slice(0,3)){let W=(X.src==="Adif"?"Adif \xB7 v\xEDa":"Rodalies")+(X.fams.size?" \xB7 "+[...X.fams].sort(F).slice(0,4).join(" "):""),Q={body:X.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+X.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(J=>J?J.showNotification(W,Q):new Notification(W,Q)).catch(()=>{try{new Notification(W,Q)}catch{}})}}function hd(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Bn.seen].slice(-400)))}catch{}}async function um(){if(Bn.on)Bn.on=!1,Jn("Avisos desactivados");else{if(!("Notification"in window)){Jn(ad&&!od()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio y activa los avisos desde la app":"Este navegador no permite avisos");return}if(await Notification.requestPermission()!=="granted"){Jn("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}Bn.on=!0,Jn("Listo: te aviso de incidencias en "+jr().lines.join(", ")+" mientras la app est\xE9 abierta")}try{localStorage.setItem("rod_ln",Bn.on?"1":"")}catch{}Rn(!0)}async function dm(){if(!U.repOk)return um();if(!Ci.busy){Ci.busy=!0;try{let g=await ld();if(!g){Jn(ad&&!od()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio, abre la app desde ah\xED y activa los avisos":"Este navegador no permite avisos (hace falta abrir la web publicada, no el archivo)");return}if(await navigator.serviceWorker.ready,Ci.on){let S=await g.pushManager.getSubscription();S&&(fetch(U.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:S.endpoint})}).catch(()=>{}),await S.unsubscribe().catch(()=>{})),Ci.on=!1,Jn("Avisos desactivados")}else{if(!U.url){Jn("Hace falta el puente en directo");return}if(await Notification.requestPermission()!=="granted"){Jn("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}let A=(await mt(U.url.replace(/\/+$/,""),"/push/key")).key,P=await g.pushManager.getSubscription()||await g.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:cm(A)});await cd(P),Ci.on=!0,Jn("Listo: te avisaremos de incidencias en "+jr().lines.join(", "))}try{localStorage.setItem("rod_push",Ci.on?"1":"")}catch{}}catch(g){Jn("No se han podido activar los avisos: "+(g.message||g))}finally{Ci.busy=!1,Rn(!0)}}}async function ud(){if(Ci.on)try{let g=await ld(),S=g&&await g.pushManager.getSubscription();S&&await cd(S)}catch{}}let Jc=!1,dd="";function Kc(){let g=xe?"t"+(xe.tid||xe.vtid):Ye>=0?"s"+Ye:mn?"a":pn?"n":"";g!==dd&&(Jc=!1,dd=g);let S=innerWidth<=640&&!!g&&!Jc,A=f("#inf");A.classList.contains("compact")!==S&&(A.classList.toggle("compact",S),requestAnimationFrame(()=>{if(h.style.display!=="none"){let P=A.getBoundingClientRect().bottom;h.style.top=Math.round(P+8)+"px",h.style.maxHeight=Math.max(140,f("#rc").getBoundingClientRect().top-P-16)+"px"}}))}function Rn(g){let S=f("#home");if(!S)return;let A=performance.now();if(!g&&A-rd<4e3)return;rd=A;let P=Rt(),L=[],N=jr(),X=Jr.map(J=>lm(J,P,L)).join("")+(Jr.some(J=>J.open)&&N.lines.length,"");if(S.className=Jr.some(J=>J.open)?"open":"",S._h===X)return;S._h=X,S.innerHTML=X;{let J=[...S.children].find(at=>at.classList.contains("hplace")&&!at.querySelector(".hnew"));J&&J.classList.add("lead")}let W=J=>J==="work"?Cn:J==="near"?Pe:Kn;S.querySelectorAll("[data-hloc]").forEach(J=>J.onclick=()=>{Pe.err="",Yc(!0)}),S.querySelectorAll("[data-ht]").forEach(J=>J.onclick=()=>{if(f("#inf").classList.contains("compact")){Jc=!0,Kc();return}let at=W(J.dataset.ht);at.open=!at.open,Kr(at),Rn(!0),(xe||Ye>=0||mn||pn)&&(h._h="",Ke())}),S.querySelectorAll("[data-hs]").forEach(J=>J.onclick=()=>{let[at,E]=J.dataset.hs.split(":"),q=W(at);q.i=+E,Kr(q),Rn(!0)}),S.querySelectorAll("[data-hw]").forEach(J=>J.onclick=()=>{let[at,E]=J.dataset.hw.split(":"),q=W(at);q.walk=m(q.walk+ +E,0,60),Kr(q),Rn(!0)}),S.querySelectorAll("[data-hmap]").forEach(J=>J.onclick=()=>{let at=+J.dataset.hmap;pn=mn=sn=!1,xe=null,Ye=at,tr(),se(),Object.assign(s,{tx:M[at].w[0],ty:M[at].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),h._h="",Ke(),a()}),S.querySelectorAll("[data-hset]").forEach(J=>J.onclick=()=>{As=J.dataset.hset,p.value="",p.placeholder=As==="work"?"Escribe la estaci\xF3n del trabajo\u2026":"Escribe la estaci\xF3n de casa\u2026",p.focus()}),S.querySelectorAll("[data-hnear]").forEach(J=>J.onclick=()=>{let at=ht.get(Pe.st[0]);at!=null&&jc(at,J.dataset.hnear)}),S.querySelectorAll("[data-hmore]").forEach(J=>J.onclick=()=>{let at=W(J.dataset.hmore);at.more=!at.more,Rn(!0)}),S.querySelectorAll("[data-hdel]").forEach(J=>J.onclick=()=>{Cn.st=[],Cn.open=!1,Kr(Cn),Rn(!0),ud()}),S.querySelectorAll("[data-dk]").forEach(J=>J.onclick=()=>fd(L[+J.dataset.dk])),S.querySelectorAll("[data-hal]").forEach(J=>J.onclick=()=>f("#alr").click());let Q=f("#bell");Q||(Q=document.createElement("button"),Q.type="button",Q.id="bell",Q.onclick=dm,f("#inf .more").prepend(Q));{let J=U.repOk?Ci.on:Bn.on;Q.hidden=!N.lines.length,Q.className=J?"on":"",Q.textContent=(J?"\u{1F514} Avisos activados \xB7 ":"\u{1F515} Activar avisos de ")+N.lines.join(", "),Q.title=(J?"Avisos activados":"Activar avisos")+" de "+N.lines.join(", ")+(U.repOk?"":" (mientras la app est\xE9 abierta)")}ed(S)}function fd(g){if(!g)return;let S=t.days.indexOf(Rt().ymd),A=Zn.find(N=>N.real?g.tid&&N.v.tid===g.tid||g.num&&String(N.tr?N.tr.num:N.v.num)===String(g.num):g.tr&&N.tr===g.tr||g.num&&N.tr&&String(N.tr.num)===String(g.num)),P=g.tr||A&&A.tr||(et[S]||[]).find(N=>String(N.num)===String(g.num));if(pn=mn=sn=!1,Ye=-1,tr(),xe=A?A.tr||{vtid:A.v.tid}:P||null,!xe)return;cn=A&&A.tr?A.tr:null,cn&&innerWidth<=640&&(h.classList.add("peek"),f("#rc").classList.contains("min")||f("#rcgrab").click());let L=A?A.p.w:null;L&&Object.assign(s,{tx:L[0],ty:L[1],dist:Math.min(s.dist,22)}),se(),h._h="",Ke(),ri=0,a()}let As=!1;p.addEventListener("blur",()=>setTimeout(()=>{As&&!p.value.trim()&&(As=!1,p.placeholder="Buscar estaci\xF3n o municipio\u2026")},600));function tr(){Jr.some(g=>g.open)&&(Jr.forEach(g=>{g.open=!1}),Rn(!0))}function jc(g,S){let A=S==="work"?Cn:Kn,P=M[g].id,L=M.filter(N=>N.fams.size&&N!==M[g]&&Math.hypot(N.w[0]-M[g].w[0],N.w[1]-M[g].w[1])<.6).map(N=>N.id);A.st=[P,...L].slice(0,3),A.i=0,A.open=!0,Kr(A),Rn(!0),ud()}let Qc=f("#lines");Qc.innerHTML='<button type="button" class="all" data-f="*">Todas</button>'+v.map(g=>`<button type="button" style="--c:${C[g]}" data-f="${g}">${g}</button>`).join("");function pd(){try{Rn(!0)}catch{}Qc.querySelectorAll("[data-f]").forEach(g=>{g.dataset.f!=="*"&&g.classList.toggle("off",!kt.has(g.dataset.f))})}Qc.querySelectorAll("[data-f]").forEach(g=>g.onclick=()=>{let S=g.dataset.f;S==="*"?v.forEach(A=>kt.add(A)):kt.size===v.length?(kt.clear(),kt.add(S)):kt.has(S)?(kt.delete(S),kt.size||v.forEach(A=>kt.add(A))):kt.add(S),pd(),At(),se(),Xc(),ri=0,a()});let th=[...document.querySelectorAll("[data-sp]")],oi=0;function md(g){let S=Rt();g&&(nt===g||oi===g)?nt?(Dt=S.min,ut=S.min,nt=0,oi=g):(ie=performance.now(),nt=g,oi=0):g===0?(nt=0,ut=null,oi=0):(Dt=S.min,ie=performance.now(),ut=S.min,nt=g,oi=0),th.forEach(A=>{let P=+A.dataset.sp;A.classList.toggle("on",P===(nt||oi)||!nt&&!oi&&ut==null&&P===0),A.classList.toggle("pz",!!oi&&P===oi),A.textContent=P===0?"Ahora":oi===P?"\u25B6 \xD7"+P:nt===P?"\u23F8 \xD7"+P:"\xD7"+P}),ri=0,a()}th.forEach(g=>g.onclick=()=>md(+g.dataset.sp)),f("#tsl").oninput=g=>{let S=+g.target.value;Dt=S,ut=S,ie=performance.now(),nt===0&&!oi&&th.forEach(A=>A.classList.remove("on")),ri=0,a()},setInterval(()=>{ut!=null&&nt&&Dt+(performance.now()-ie)/6e4*nt>1560&&(Dt=240,ie=performance.now())},1e3),window.__rodSearch=g=>{let S=_(g.trim());if(!S){u.style.display="none",u._pick=null;return}let A=[],P=[];M.forEach((W,Q)=>{if(!W.fams.size)return;let J=_(W.n);J.startsWith(S)||J.includes(" "+S)||J.includes("-"+S)?A.push(Q):J.includes(S)&&P.push(Q)});let L=A.concat(P).slice(0,7),N=w.filter(W=>_(W.name).startsWith(S)).sort((W,Q)=>Q.pop-W.pop).slice(0,3),X=L.map(W=>({h:`\u{1F689} ${d(M[W].n)}<em>${[...M[W].fams].sort(F).slice(0,3).map(Q=>`<em class="ls" style="background:${C[Q]}">${Q}</em>`).join(" ")}</em>`,go:()=>{if(As){let Q=As;As=!1,p.placeholder="Buscar estaci\xF3n o municipio\u2026",jc(W,Q);return}pn=!1,mn=!1,sn=!1,Ye=W,xe=null,cn=null,tr(),se(),Object.assign(s,{tx:M[W].w[0],ty:M[W].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Ke(),a()}})).concat(N.map(W=>({h:`${d(W.name)}<em>municipio</em>`,go:()=>{Object.assign(s,{tx:W.cx,ty:W.cy,dist:m(W.size*3+14,14,60)}),a()}})));u.innerHTML=X.map((W,Q)=>`<li data-i="${Q}">${W.h}</li>`).join("")||'<li class="no">Sin resultados</li>',u.style.display="block",u._pick=W=>{X[W]&&(X[W].go(),u.style.display="none",p.value="",p.blur())},u.querySelectorAll("li[data-i]").forEach(W=>W.onclick=()=>u._pick(+W.dataset.i))},pd(),se();try{let g=new URLSearchParams(location.search).get("st");if(g){let S=_(g),A=-1,P=0;M.forEach((L,N)=>{if(!L.fams.size)return;let X=_(L.n),W=X===S?3:X.startsWith(S)||S.startsWith(X)?2:X.includes(S)||S.includes(X)?1:0;W>P&&(P=W,A=N)}),A>=0&&setTimeout(()=>{Ye=A,se(),Object.assign(s,{tx:M[A].w[0],ty:M[A].w[1],dist:18,tilt:.5}),Ke(),a()},300)}}catch{}window.__rod={get dist(){return r.dist},get follow(){return cn},get selTrip(){return xe},ST:M,TR:G,FAM:v,act:()=>Zn,setSpeed:md,RT:U,pollRT:Mt,nowState:Rt,posAt:Es,activeTrips:Hr,select:g=>{xe=g,Ke()}}}var Vr=window.__DATA__;var Te=i=>document.querySelector(i),ss=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Fn=(i,t,e)=>Math.min(e,Math.max(t,i)),Fu=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Hn=Te("#c"),so=new wc({canvas:Hn,antialias:!0});so.setPixelRatio(Math.min(devicePixelRatio||1,2));var bs=new ma;bs.background=new le(15659509);var zc=35,Xi=new Dn(zc,1,2,1500);bs.add(new Ua(16777215,9080992,1));var Pp=new Oa(16777215,.9);Pp.position.set(-40,-70,90);bs.add(Pp);var Wi=100/Vr.w,to=Vr.w/2,eo=Vr.h/2,nn=[],Ou=new yi;bs.add(Ou);var Lp=new Us({color:16777215,transparent:!0,opacity:.55});for(let i of Vr.m){let t=new yi,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let m of i.g){let _=m.map(f=>{let d=[];for(let I=0;I<f.length;I+=2)d.push(new Nt((f[I]-to)*Wi,(f[I+1]-eo)*Wi));return d.length>1&&d[0].equals(d[d.length-1])&&d.pop(),d}).filter(f=>f.length>=3);if(!_.length)continue;let w=new Cr(_[0]);for(let f=1;f<_.length;f++)w.holes.push(new Os(_[f]));e.push(w);for(let f of _[0])s=Math.min(s,f.x),r=Math.max(r,f.x),a=Math.min(a,f.y),o=Math.max(o,f.y);for(let f of _)n.push(new va(new rn().setFromPoints(f.map(d=>new O(d.x,d.y,0))),Lp))}if(!e.length)continue;let l;try{l=new Ra(e,{depth:1,bevelEnabled:!1})}catch{continue}let c=new La({color:13421772}),h=new Nn(l,c);t.add(h);let p=new yi;n.forEach(m=>p.add(m)),p.position.z=.04,Ou.add(p),t.scale.z=.01,Ou.add(t);let u={og:p,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:h,mat:c,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};h.userData.m=u,nn.push(u)}var Sw=nn.map(i=>i.mesh),wp=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},Dp=0,Np=0;for(let i of nn){for(let t of i.rings)Dp+=wp(t[0])-t.slice(1).reduce((e,n)=>e+wp(n),0);Np+=i.area}var Iy=Math.sqrt(Np/Dp),Pc={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},Up={"08":"provincia de Barcelona",17:"provincia de Girona",25:"provincia de Lleida",43:"provincia de Tarragona"},Wu="sqrt",$u="pop",Nu=0,Bu=0,zr=1,Qa=1,Py={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},zu=i=>$u==="pop"?i.pop:i.pop/i.area,Ic=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new le(i));function Ly(i){i=Fn(i,0,1)*(Ic.length-1);let t=Math.min(Math.floor(i),Ic.length-2);return Ic[t].clone().lerp(Ic[t+1],i-t)}var kr=i=>i>=100?ss(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function Dy(){Bu=0;for(let i of nn)Bu+=i.pop;[...nn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...nn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),Fp()}var Ny=new le("#d3d8e2"),Uy=new le("#eceff3");function Xu(i){i.mat.color.copy(i.base).lerp(Uy,.86),i.inF||i.mat.color.lerp(Ny,.8)}function Fp(){zr=1,Qa=1e12;for(let e of nn){let n=zu(e);zr=Math.max(zr,n),Qa=Math.min(Qa,n)}let i=Math.log10(Math.max(Qa,.01)),t=Math.log10(zr);for(let e of nn)e.base=Ly((Math.log10(Math.max(zu(e),.01))-i)/(t-i)),Xu(e);Te("#lmin").textContent=kr(Qa),Te("#lmax").textContent=kr(zr),Te("#lname").textContent=$u==="pop"?"habitantes":"hab./km\xB2",kc()}function kc(){let i=Py[Wu],t=i(zr),e=24*Nu;for(let n of nn)n.zt=Nu<=.001?.01:Math.max(.12*Math.min(1,Nu),e*i(zu(n))/t)*(n.inF?1:.1);En()}var Ep=Object.fromEntries(nn.map(i=>[i.code,i])),Lc=[],Op=[];for(let i of Vr.bd){let t=Ep[i.a],e=Ep[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)Op.push((i.p[n]-to)*Wi,(i.p[n+1]-eo)*Wi,0,(i.p[n+2]-to)*Wi,(i.p[n+3]-eo)*Wi,0),Lc.push(t,e)}var Uc=new ns;Uc.setPositions(Op);var Bp=new ki({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),zp=new ki({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[Bp,zp].forEach((i,t)=>{let e=new $s(Uc,i);e.frustumCulled=!1,e.renderOrder=10+t,bs.add(e)});function Fy(){let i=Uc.attributes.instanceStart.data.array;for(let t=0;t<Lc.length;t+=2){let e=Math.max(Lc[t].z,Lc[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}Uc.attributes.instanceStart.data.needsUpdate=!0}var Fc={};for(let i of Object.keys(Pc)){let t=nn.filter(h=>h.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,l=-1e9;for(let h of t)e+=h.area,n+=h.cx*h.area,s+=h.cy*h.area,r=Math.min(r,h.cx),a=Math.max(a,h.cx),o=Math.min(o,h.cy),l=Math.max(l,h.cy);let c=document.createElement("div");c.className="plab",c.textContent=Pc[i],c.title="Ver solo "+Up[i],c.onclick=()=>qy("pr:"+i),document.body.appendChild(c),Fc[i]={el:c,p:new O(n/e,s/e,0),cx:(r+a)/2,cy:(o+l)/2,ext:Math.max(a-r,l-o),ext2:[a-r,l-o],area:e,name:Pc[i]}}var Uu=new O;function Oy(){for(let i in Fc){let t=Fc[i];Uu.copy(t.p).project(Xi),t.el.style.transform=`translate(-50%,-50%) translate(${(Uu.x*.5+.5)*innerWidth}px,${(-Uu.y*.5+.5)*innerHeight}px)`}}var an={tilt:0,yaw:0,dist:150,tx:0,ty:0},ue={...an};function By(){let i=innerWidth/innerHeight,t=Math.tan(zc*Math.PI/360);return Math.max(Vr.h*Wi*1.1,100*1.1/i)/(2*t)}var zy=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{ue.yaw=Math.round(ue.yaw/(2*Math.PI))*2*Math.PI,ue.tilt=0,En()});function qu(){Object.assign(ue,{tilt:0,yaw:0,dist:By(),tx:0,ty:0}),En()}function ky(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=an;Xi.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),Xi.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),Xi.lookAt(n,s,0)}var Dc=!0,Tp=performance.now(),no=new Map;function En(){Dc=!0}function kp(i){requestAnimationFrame(kp);let t=Fn((i-Tp)/1e3,0,.05);Tp=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(an)){let r=ue[s]-an[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(an[s]+=r*e,n=!0):an[s]=ue[s]}for(let s of nn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of no){let a=(i-r)/1800;a>=1?(no.delete(s),Js(s)):Js(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(Dc=!0),n||Dc){zy.style.transform=`rotate(${an.yaw}rad) scaleY(${(.55+.45*Math.cos(an.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(ue.yaw/2))<.02&&ue.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?"El norte ya est\xE1 arriba":"Poner el norte arriba y el mapa plano")}ky(),Fy(),Oy(),window.__rodFrame&&window.__rodFrame(),so.render(bs,Xi),Dc=n,Te("#tilt").value=Math.round(ue.tilt*180/Math.PI),Te("#yaw").value=Math.round(((ue.yaw*180/Math.PI+180)%360+360)%360-180)}}function Vp(){so.setSize(innerWidth,innerHeight,!1),Xi.aspect=innerWidth/innerHeight,Xi.updateProjectionMatrix(),Bp.resolution.set(innerWidth,innerHeight),zp.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),En()}addEventListener("resize",()=>{Vp(),qe.length&&ws()});Hn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;ue.yaw+=n*.0035}else i.ctrlKey?ue.dist=Fn(ue.dist*Math.exp(e*.01),6,400):ue.tilt=Fn(ue.tilt+e*.002,0,1.32);En()},{passive:!1});Hn.addEventListener("contextmenu",i=>i.preventDefault());var $i=new Map,qn=null,qs=0,ku=0,Vu=0;var Oc=null;Hn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),qe.length&&setTimeout(ws,50)),Hn.setPointerCapture(i.pointerId),$i.set(i.pointerId,{x:i.clientX,y:i.clientY}),$i.size===1&&(qn={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),$i.size===2){let[t,e]=[...$i.values()];qs=Math.hypot(t.x-e.x,t.y-e.y),ku=Math.atan2(e.y-t.y,e.x-t.x),Vu=(t.y+e.y)/2,Oc={mode:null,rot:0,sc:0,tl:0},qn&&(qn.multi=!0)}Yu()});Hn.addEventListener("pointermove",i=>{let t=$i.get(i.pointerId);if(!t){is={x:i.clientX,y:i.clientY},Hu||(Hu=requestAnimationFrame(Hy));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,$i.size===2){let[s,r]=[...$i.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),l=(s.y+r.y)/2,c=o-ku;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI);let h=qs?a-qs:0,p=l-Vu,u=Oc||(Oc={mode:null,rot:0,sc:0,tl:0});u.rot+=c,u.sc+=h,u.tl+=p,u.mode?u.mode==="zoom"&&Math.abs(u.rot)>.45&&(u.mode="rotate"):Math.abs(u.rot)>.3?u.mode="rotate":Math.abs(u.tl)>30&&Math.abs(u.sc)<18?u.mode="tilt":Math.abs(u.sc)>12&&(u.mode="zoom"),(u.mode==="zoom"||u.mode==="rotate")&&qs&&(ue.dist=Fn(ue.dist*qs/a,6,400)),u.mode==="rotate"&&(ue.yaw+=c,an.yaw=ue.yaw),u.mode==="tilt"&&(ue.tilt=Fn(ue.tilt-p*.006,0,1.32),an.tilt=ue.tilt),qs=a,ku=o,Vu=l,En();return}if(qn.moved+=Math.abs(e)+Math.abs(n),qn.rot||i.altKey)ue.yaw+=e*.005,ue.tilt=Fn(ue.tilt+n*.004,0,1.32),an.yaw=ue.yaw,an.tilt=ue.tilt;else{let s=2*an.dist*Math.tan(zc*Math.PI/360)/innerHeight,r=Math.sin(an.yaw),a=Math.cos(an.yaw),o=1/Math.max(Math.cos(an.tilt),.3);ue.tx=Fn(ue.tx-a*e*s+-r*n*s*o,-70,70),ue.ty=Fn(ue.ty-r*e*s+a*n*s*o,-70,70),an.tx=ue.tx,an.ty=ue.ty}En()});var Hp=i=>{let t=qn&&!qn.rot&&!qn.multi&&qn.moved<(qn.touch?12:6)&&i.type==="pointerup"&&$i.size===1,e=qn&&qn.touch;$i.delete(i.pointerId),qs=0,Oc=null,$i.size||(qn=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};Hn.addEventListener("pointerup",Hp);Hn.addEventListener("pointercancel",Hp);Hn.addEventListener("dblclick",qu);addEventListener("keydown",i=>{i.key==="Alt"&&(Hn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(Hn.style.cursor="")});addEventListener("blur",()=>{Hn.style.cursor=""});var Vy=new zs,Ap=new Nt,is=null,Hu=0,Ys=null;function Hy(){if(Hu=0,!is||qn)return;Ap.set(is.x/innerWidth*2-1,-(is.y/innerHeight)*2+1),Vy.setFromCamera(Ap,Xi);let i=null;if(i!==Ys){let e=Ys;Ys=i,e&&Js(e),i&&Js(i),En()}let t=window.__rodHover&&window.__rodHover(is.x,is.y);if(t){Xs.innerHTML=t,Xs.style.display="block";let e=Xs.offsetWidth,n=Xs.offsetHeight;Xs.style.left=Fn(is.x+14,6,innerWidth-e-6)+"px",Xs.style.top=Fn(is.y+14,6,innerHeight-n-6)+"px",Hn.style.cursor="pointer"}else Yu(),Hn.style.cursor=""}Hn.addEventListener("pointerleave",()=>{if(is=null,Ys){let i=Ys;Ys=null,Js(i),En()}Yu()});var Xs=Te("#tip");function Yu(){Xs.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{$u=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),Fp()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{Wu=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),kc()});Te("#yaw").oninput=i=>{ue.yaw=+i.target.value*Math.PI/180,En()};Te("#tilt").oninput=i=>{ue.tilt=+i.target.value*Math.PI/180,En()};Te("#zin").onclick=()=>{ue.dist=Fn(ue.dist*.75,6,400),En()};Te("#zout").onclick=()=>{ue.dist=Fn(ue.dist/.75,6,400),En()};Te("#rst").onclick=qu;var Cp=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],qe=[],Rp={},Gy=i=>Rp[i]||(Rp[i]=new Us({color:i}));function Gp(i,t){i.og.children.forEach(e=>e.material=t?Gy(t):Lp)}function Js(i,t=0){let e=i.mat.emissive;i===Ys?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function Zu(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let c of i)e=Math.min(e,c.cx-c.size/2),n=Math.max(n,c.cx+c.size/2),s=Math.min(s,c.cy-c.size/2),r=Math.max(r,c.cy+c.size/2);let a=innerWidth/innerHeight,o=Math.tan(zc*Math.PI/360),l=i.length===1?Fn(i[0].size*3.2+14,14,120):Fn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(ue,{tx:(e+n)/2,ty:(s+r)/2,dist:l,tilt:t,yaw:0}),En()}var Ms=Te("#q"),si=Te("#list"),We=Te("#mcs");function Vc(i,t=!0){if(si.style.display="none",Ms.value="",!i.sel){qe.length>=6&&Wp(qe[0].o,!0);let e=new Set(qe.map(s=>s.color)),n=Cp.find(s=>!e.has(s))||Cp[0];i.sel={o:i,color:n,tint:new le(n).multiplyScalar(.12)},qe.push(i.sel),Gp(i,n)}We.classList.contains("min")&&ro(!1),no.set(i,performance.now()),Js(i),t&&Zu([i],Math.max(ue.tilt,.9)),ws()}function Wp(i,t){let e=qe.indexOf(i.sel);e>=0&&qe.splice(e,1),i.sel=null,Gp(i,null),Js(i),En(),t||ws()}function $p(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=qe.map(h=>{let p=1e9,u=-1e9,m=1e9,_=-1e9;for(let w of h.o.rings)for(let f=0;f<w[0].length;f+=2)p=Math.min(p,w[0][f]),u=Math.max(u,w[0][f]),m=Math.min(m,w[0][f+1]),_=Math.max(_,w[0][f+1]);return{x0:p,x1:u,y0:m,y1:_}}),a=Math.max(...r.map(h=>Math.max(h.x1-h.x0,h.y1-h.y0))),o=(Math.min(e,n)-22)/a;qe.forEach((h,p)=>{let u=r[p],m=(u.x0+u.x1)/2,_=(u.y0+u.y1)/2;s.beginPath();for(let w of h.o.rings)for(let f of w)for(let d=0;d<f.length;d+=2){let I=e/2+(f[d]-m)*o,D=n/2-(f[d+1]-_)*o;d?s.lineTo(I,D):s.moveTo(I,D),d===f.length-2&&s.closePath()}s.fillStyle=h.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=h.color,s.stroke()});let l=o/Iy,c=[.5,1,2,5,10,20,50,100].find(h=>h*l>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,c*l,2),s.font="10px system-ui",s.fillText(c+" km",12+c*l,n-8)}function ws(){if(!qe.length){We.innerHTML="",We.style.display="none",ro(!1);return}if(We.style.display="flex",innerWidth<=640){let e=Te("#inf").getBoundingClientRect().bottom;We.style.top=Math.round(e+8)+"px",We.style.maxHeight=Math.max(110,Math.min(innerHeight*(Te("#rc").classList.contains("min")?.7:.4),Te("#rc").getBoundingClientRect().top-e-16))+"px",We.style.width=""}else if(innerHeight<=500){let e=Te("#inf").getBoundingClientRect().bottom;We.style.top=Math.round(e+8)+"px",We.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",We.style.width="min(290px, 40vw)"}else We.style.top="",We.style.maxHeight="",We.style.width="";let i=qe.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${Pc[s.pr]}</em></div><div class="mb">${ss(s.pop)} hab.</div><small>${kr(s.area)} km\xB2 \xB7 ${kr(s.pop/s.area)} hab./km\xB2 \xB7 n\xBA ${s.rankP} en poblaci\xF3n</small></div>`}).join("");if(qe.length>1){let e=s=>Math.max(...qe.map(s));if(i+='<div class="cmp"><div class="ct">Comparar <small>arrastra una ficha sobre otra para reordenar</small></div><canvas id="sil"></canvas><small class="sc">Siluetas superpuestas a la misma escala</small>'+[["Habitantes",s=>s.o.pop,ss],["Superficie (km\xB2)",s=>s.o.area,kr],["Densidad (hab./km\xB2)",s=>s.o.pop/s.o.area,kr]].map(([s,r,a])=>`<div class="cr"><span>${s}</span>${qe.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),qe.length===2){let[s,r]=qe.map(c=>c.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],l=(c,h)=>(c>=h?c/h:h/c).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}</b> tiene ${l(a.pop,o.pop)}\xD7 los habitantes de <b>${o.name}</b> y ocupa ${l(a.area,o.area)}\xD7 ${a.area>=o.area?"su superficie":"menos superficie"}.</small>`}i+="</div>"}We.innerHTML=i,We.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),Wp(qe[+e.dataset.x].o)}),We.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>Zu([qe[+e.dataset.i].o],Math.max(ue.tilt,.9)),e.onmouseenter=()=>{let n=qe[+e.dataset.i].o;no.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=qe.splice(s,1);qe.splice(r,0,a),ws();let o=Te("#sil");o&&o.classList.add("flash")}}});let t=Te("#sil");t&&$p(t)}Ms.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(Ms.value);return}let i=Fu(Ms.value.trim());if(!i){si.style.display="none";return}let t=[],e=[];for(let s of nn){let r=Fu(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);si.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${ss(s.pop)}</em></li>`).join("")||'<li class="no">Sin resultados</li>',si.style.display="block",si.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>Vc(n[+s.dataset.i])),si._r=n});Ms.addEventListener("keydown",i=>{i.key==="Enter"&&si._pick?si._pick(0):i.key==="Enter"&&si._r&&si._r[0]&&Vc(si._r[0]),i.key==="Escape"&&(Ms.value="",si.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==Ms&&Xp()});var Ip=0;addEventListener("resize",()=>{clearTimeout(Ip),Ip=setTimeout(()=>{let i=Te("#sil");i&&$p(i)},120)});var Bc=null,Gu=Te("#chip");function Wy(i,t,e=.8){Bc={codes:new Set(i.map(n=>n.code)),label:t},nn.forEach(n=>{n.inF=Bc.codes.has(n.code),Xu(n)}),Gu.innerHTML=`<span>Mostrando: <b>${t}</b> \xB7 ${i.length} municipio${i.length===1?"":"s"}</span><button id="chx" title="Quitar filtro">\xD7</button>`,Gu.style.display="flex",Te("#chx").onclick=Xp,kc(),Zu(i,e),i.slice(0,40).forEach(n=>no.set(n,performance.now()))}function Xp(){Bc&&(Bc=null,nn.forEach(i=>{i.inF=!0,Xu(i)}),Gu.style.display="none",kc())}var $y="prov";function Xy(i){let t=[...nn].sort((a,o)=>o.pop-a.pop),e=[...nn].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[nn.filter(a=>a.pr===s),Up[s]];if(n==="top")return s==="pop"?[t.slice(0,10),"10 con m\xE1s habitantes"]:[e.slice(0,10),"10 m\xE1s densos"];if(n==="low")return s==="pop"?[t.slice(-10),"10 con menos habitantes"]:[e.slice(-10),"10 menos densos"];if(n==="size")return[nn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${ss(+s)} o m\xE1s habitantes`:+s==0?`menos de ${ss(+r)} habitantes`:`${ss(+s)} \u2013 ${ss(+r-1)} habitantes`];if(n==="n50"){let a=0,o=0;for(let l of t)if(a+=l.pop,o++,a>=Bu/2)break;return[t.slice(0,o),"la mitad de la poblaci\xF3n"]}return[[],""]}function qy(i){let[t,e]=Xy(i);t.length&&Wy(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{$y=i.dataset.tab,Te("#dbody").scrollTop=0});var Zs=Te("#rc"),Nc=Te("#mcstab");function io(i){Zs.classList.toggle("min",i),Te("#rcgrab span").textContent=i?"Mostrar controles":"Ocultar controles",qe.length&&ws()}function ro(i){We.classList.toggle("min",i),We.style.transform="",We.style.opacity="",Nc.classList.toggle("on",i&&qe.length>0),i&&(Nc.textContent=`\u25B8 ${qe.length} ${qe.length===1?"ficha":"fichas"}`,Nc.style.top=We.style.top||"124px")}function Ju(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!Hc.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y;!s.lock&&Math.hypot(o,l)>10&&(s.lock=Math.abs(o)>Math.abs(l)?"x":"y"),s.lock===n&&t&&t(o,l)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y,c=s.lock;s=null,e(c===n?o:0,c===n?l:0,c)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Te("#rcgrab").onclick=()=>io(!Zs.classList.contains("min"));var qp=()=>innerWidth>640;Ju(Zs,{axis:"y",onEnd:(i,t)=>{if(!qp())if(t>40&&!Zs.classList.contains("min")){let e=Te("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&io(!0)}else t<-30&&Zs.classList.contains("min")&&io(!1)}});Ju(Zs,{axis:"x",onEnd:i=>{qp()&&(i>50?io(!0):i<-30&&Zs.classList.contains("min")&&io(!1))}});Ju(We,{axis:"x",onMove:i=>{i<0&&(We.classList.add("sw"),We.style.transform=`translateX(${i}px)`,We.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{We.classList.remove("sw"),i<-60?ro(!0):(We.style.transform="",We.style.opacity="")}});Nc.onclick=()=>{ro(!1),ws()};Te("#dtoggle").onclick=()=>{let i=Te("#dp").classList.toggle("open");Te("#rc").classList.toggle("dopen",i),Te("#dtoggle").textContent=i?Hc.matches&&innerWidth<=640?"\u2190 Controles":"En directo \u25B4":"En directo: conectar datos de Renfe \u25BE",window.__rodCard&&window.__rodCard()};var Hc=matchMedia("(max-width:640px), (max-height:500px)");function Yp(){let i=Te("#leg");Hc.matches?Te("#rc").insertBefore(i,Te("#dtoggle")):document.body.appendChild(i),qe.length&&ws()}Hc.addEventListener("change",Yp);Yp();Vp();Dy();qu();Object.assign(an,ue);for(let i of nn)i.z=.01;requestAnimationFrame(kp);bp({scene:bs,camera:Xi,renderer:so,goal:ue,cur:an,invalidate:En,flyTo:(i,t,e,n)=>{Object.assign(ue,{tx:(i-to)*Wi,ty:(t-eo)*Wi,dist:e,tilt:n}),En()},K:Wi,CX:to,CY:eo,mcs:We,q:Ms,list:si,munis:nn,select:Vc,norm:Fu,fmt:ss,clamp:Fn,mcsMin:ro});window.__app={scene:bs,renderer:so,camera:Xi,munis:nn,labs:Fc,goal:ue,cur:an,select:Vc,get mode(){return Wu}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
