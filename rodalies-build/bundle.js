(()=>{var Wd=0,Dh=1,$d=2;var Ua=1,Xd=2,Ar=3,ms=0,Vn=1,Ni=2,Ui=0,Cr=1,Nh=2,Uh=3,Fh=4,qd=5;var Bs=100,Yd=101,Zd=102,Jd=103,Kd=104,jd=200,Qd=201,tf=202,ef=203,Oh=204,Bh=205,nf=206,sf=207,rf=208,af=209,of=210,lf=211,cf=212,hf=213,uf=214,Oo=0,Bo=1,zo=2,pr=3,ko=4,Vo=5,Ho=6,Go=7,El=0,df=1,ff=2,Mi=0,zh=1,kh=2,Vh=3,Hh=4,Gh=5,Wh=6,$h=7;var Xh=300,gs=301,zs=302,Tl=303,Al=304,Fa=306,Wo=1e3,Ci=1001,$o=1002,vn=1003,pf=1004;var Oa=1005;var bn=1006,Cl=1007;var _s=1008;var Xn=1009,qh=1010,Yh=1011,Rr=1012,Rl=1013,bi=1014,wi=1015,Ei=1016,Il=1017,Pl=1018,Ir=1020,Zh=35902,Jh=35899,Kh=1021,jh=1022,fi=1023,Ii=1026,xs=1027,Qh=1028,Ll=1029,vs=1030,Dl=1031;var Nl=1033,Ba=33776,za=33777,ka=33778,Va=33779,Ul=35840,Fl=35841,Ol=35842,Bl=35843,zl=36196,kl=37492,Vl=37496,Hl=37488,Gl=37489,Ha=37490,Wl=37491,$l=37808,Xl=37809,ql=37810,Yl=37811,Zl=37812,Jl=37813,Kl=37814,jl=37815,Ql=37816,tc=37817,ec=37818,nc=37819,ic=37820,sc=37821,rc=36492,ac=36494,oc=36495,lc=36283,cc=36284,Ga=36285,hc=36286;var sa=2300,Xo=2301,Uo=2302,yh=2303,Sh=2400,Mh=2401,bh=2402;var mf=3200;var uc=0,gf=1,ts="",ei="srgb",ra="srgb-linear",aa="linear",ze="srgb";var Fo=7680;var _f=519,xf=512,vf=513,yf=514,dc=515,Sf=516,Mf=517,fc=518,bf=519,tu=35044;var eu="300 es",vi=2e3,mr=2001;function sm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function oa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wf(){let i=oa("canvas");return i.style.display="block",i}var ld={},gr=null;function la(...i){let t="THREE."+i.shift();gr?gr("log",t,...i):console.log(t,...i)}function Ef(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function oe(...i){i=Ef(i);let t="THREE."+i.shift();if(gr)gr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=Ef(i);let t="THREE."+i.shift();if(gr)gr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ps(...i){let t=i.join(" ");t in ld||(ld[t]=!0,oe(...i))}function Tf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Af={[Oo]:Bo,[zo]:Ho,[ko]:Go,[pr]:Vo,[Bo]:Oo,[Ho]:zo,[Go]:ko,[Vo]:pr},Pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cd=1234567,ta=Math.PI/180,_r=180/Math.PI;function Ri(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[e&63|128]+Pn[e>>8&255]+"-"+Pn[e>>16&255]+Pn[e>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function nu(i,t){return(i%t+t)%t}function am(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function om(i,t,e){return i!==t?(e-i)/(t-i):0}function ea(i,t,e){return(1-e)*i+e*t}function lm(i,t,e,n){return ea(i,t,1-Math.exp(-e*n))}function cm(i,t=1){return t-Math.abs(nu(i,t*2)-t)}function hm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function um(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function dm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function fm(i,t){return i+Math.random()*(t-i)}function pm(i){return i*(.5-Math.random())}function mm(i){i!==void 0&&(cd=i);let t=cd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gm(i){return i*ta}function _m(i){return i*_r}function xm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function vm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ym(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sm(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),p=r((t-n)/2),u=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*p,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*p,o*c);break;case"ZXZ":i.set(l*p,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var iu={DEG2RAD:ta,RAD2DEG:_r,generateUUID:Ri,clamp:ge,euclideanModulo:nu,mapLinear:am,inverseLerp:om,lerp:ea,damp:lm,pingpong:cm,smoothstep:hm,smootherstep:um,randInt:dm,randFloat:fm,randFloatSpread:pm,seededRandom:mm,degToRad:gm,radToDeg:_m,isPowerOfTwo:xm,ceilPowerOfTwo:vm,floorPowerOfTwo:ym,setQuaternionFromProperEuler:Sm,normalize:Ge,denormalize:xi},Dt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Li=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],u=r[a+0],m=r[a+1],g=r[a+2],w=r[a+3];if(p!==w||l!==u||c!==m||h!==g){let f=l*u+c*m+h*g+p*w;f<0&&(u=-u,m=-m,g=-g,w=-w,f=-f);let d=1-o;if(f<.9995){let I=Math.acos(f),L=Math.sin(I);d=Math.sin(d*I)/L,o=Math.sin(o*I)/L,l=l*d+u*o,c=c*d+m*o,h=h*d+g*o,p=p*d+w*o}else{l=l*d+u*o,c=c*d+m*o,h=h*d+g*o,p=p*d+w*o;let I=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=I,c*=I,h*=I,p*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*p+l*m-c*u,t[e+1]=l*g+h*u+c*p-o*m,t[e+2]=c*g+h*m+o*u-l*p,t[e+3]=h*g-o*p-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),u=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*p+c*m*g,this._y=c*m*p-u*h*g,this._z=c*h*g+u*m*p,this._w=c*h*p-u*m*g;break;case"YXZ":this._x=u*h*p+c*m*g,this._y=c*m*p-u*h*g,this._z=c*h*g-u*m*p,this._w=c*h*p+u*m*g;break;case"ZXY":this._x=u*h*p-c*m*g,this._y=c*m*p+u*h*g,this._z=c*h*g+u*m*p,this._w=c*h*p-u*m*g;break;case"ZYX":this._x=u*h*p-c*m*g,this._y=c*m*p+u*h*g,this._z=c*h*g-u*m*p,this._w=c*h*p+u*m*g;break;case"YZX":this._x=u*h*p+c*m*g,this._y=c*m*p+u*h*g,this._z=c*h*g-u*m*p,this._w=c*h*p-u*m*g;break;case"XZY":this._x=u*h*p-c*m*g,this._y=c*m*p-u*h*g,this._z=c*h*g+u*m*p,this._w=c*h*p+u*m*g;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],u=n+o+p;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yc.copy(this).projectOnVector(t),this.sub(Yc)}reflect(t){return this.sub(Yc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yc=new F,hd=new Li,fe=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],u=n[2],m=n[5],g=n[8],w=s[0],f=s[3],d=s[6],I=s[1],L=s[4],b=s[7],M=s[2],C=s[5],U=s[8];return r[0]=a*w+o*I+l*M,r[3]=a*f+o*L+l*C,r[6]=a*d+o*b+l*U,r[1]=c*w+h*I+p*M,r[4]=c*f+h*L+p*C,r[7]=c*d+h*b+p*U,r[2]=u*w+m*I+g*M,r[5]=u*f+m*L+g*C,r[8]=u*d+m*b+g*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*a-o*c,u=o*l-h*r,m=c*r-a*l,g=e*p+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/g;return t[0]=p*w,t[1]=(s*c-h*n)*w,t[2]=(o*n-s*a)*w,t[3]=u*w,t[4]=(h*e-s*l)*w,t[5]=(s*r-o*e)*w,t[6]=m*w,t[7]=(n*l-c*e)*w,t[8]=(a*e-n*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zc.makeScale(t,e)),this}rotate(t){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zc.makeRotation(-t)),this}translate(t,e){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Zc=new fe,ud=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dd=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mm(){let i={enabled:!0,workingColorSpace:ra,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ze&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ze&&(s.r=fr(s.r),s.g=fr(s.g),s.b=fr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ts?aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ra]:{primaries:t,whitePoint:n,transfer:aa,toXYZ:ud,fromXYZ:dd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:t,whitePoint:n,transfer:ze,toXYZ:ud,fromXYZ:dd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),i}var Te=Mm();function ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var js,qo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{js===void 0&&(js=oa("canvas")),js.width=t.width,js.height=t.height;let s=js.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=js}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=oa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ji(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ji(e[n]/255)*255):e[n]=ji(e[n]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bm=0,xr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jc(s[a].image)):r.push(Jc(s[a]))}else r=Jc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Jc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}var wm=0,Kc=new F,Wn=class i extends Pi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ci,s=Ci,r=bn,a=_s,o=fi,l=Xn,c=i.DEFAULT_ANISOTROPY,h=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=Ri(),this.name="",this.source=new xr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kc).x}get height(){return this.source.getSize(Kc).y}get depth(){return this.source.getSize(Kc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wo:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case $o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wo:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case $o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Xh;Wn.DEFAULT_ANISOTROPY=1;var ke=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],m=l[5],g=l[9],w=l[2],f=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-w)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+w)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(c+1)/2,b=(m+1)/2,M=(d+1)/2,C=(h+u)/4,U=(p+w)/4,v=(g+f)/4;return L>b&&L>M?L<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(L),s=C/n,r=U/n):b>M?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=C/s,r=v/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=U/r,s=v/r),this.set(n,s,r,e),this}let I=Math.sqrt((f-g)*(f-g)+(p-w)*(p-w)+(u-h)*(u-h));return Math.abs(I)<.001&&(I=1),this.x=(f-g)/I,this.y=(p-w)/I,this.z=(u-h)/I,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this.w=ge(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this.w=ge(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yo=class extends Pi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Wn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new xr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends Yo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ca=class extends Wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zo=class extends Wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var We=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,p,u,m,g,w,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,p,u,m,g,w,f)}set(t,e,n,s,r,a,o,l,c,h,p,u,m,g,w,f){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=m,d[7]=g,d[11]=w,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Qs.setFromMatrixColumn(t,0).length(),r=1/Qs.setFromMatrixColumn(t,1).length(),a=1/Qs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*p,g=o*h,w=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=m+g*c,e[5]=u-w*c,e[9]=-o*l,e[2]=w-u*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,m=l*p,g=c*h,w=c*p;e[0]=u+w*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=w+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,m=l*p,g=c*h,w=c*p;e[0]=u-w*o,e[4]=-a*p,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=w-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,m=a*p,g=o*h,w=o*p;e[0]=l*h,e[4]=g*c-m,e[8]=u*c+w,e[1]=l*p,e[5]=w*c+u,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*c,g=o*l,w=o*c;e[0]=l*h,e[4]=w-u*p,e[8]=g*p+m,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*p+g,e[10]=u-w*p}else if(t.order==="XZY"){let u=a*l,m=a*c,g=o*l,w=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=u*p+w,e[5]=a*h,e[9]=m*p-g,e[2]=g*p-m,e[6]=o*h,e[10]=w*p+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Em,t,Tm)}lookAt(t,e,n){let s=this.elements;return Qn.subVectors(t,e),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),ss.crossVectors(n,Qn),ss.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),ss.crossVectors(n,Qn)),ss.normalize(),lo.crossVectors(Qn,ss),s[0]=ss.x,s[4]=lo.x,s[8]=Qn.x,s[1]=ss.y,s[5]=lo.y,s[9]=Qn.y,s[2]=ss.z,s[6]=lo.z,s[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],u=n[9],m=n[13],g=n[2],w=n[6],f=n[10],d=n[14],I=n[3],L=n[7],b=n[11],M=n[15],C=s[0],U=s[4],v=s[8],T=s[12],V=s[1],G=s[5],Q=s[9],tt=s[13],H=s[2],J=s[6],lt=s[10],st=s[14],_t=s[3],rt=s[7],ct=s[11],ft=s[15];return r[0]=a*C+o*V+l*H+c*_t,r[4]=a*U+o*G+l*J+c*rt,r[8]=a*v+o*Q+l*lt+c*ct,r[12]=a*T+o*tt+l*st+c*ft,r[1]=h*C+p*V+u*H+m*_t,r[5]=h*U+p*G+u*J+m*rt,r[9]=h*v+p*Q+u*lt+m*ct,r[13]=h*T+p*tt+u*st+m*ft,r[2]=g*C+w*V+f*H+d*_t,r[6]=g*U+w*G+f*J+d*rt,r[10]=g*v+w*Q+f*lt+d*ct,r[14]=g*T+w*tt+f*st+d*ft,r[3]=I*C+L*V+b*H+M*_t,r[7]=I*U+L*G+b*J+M*rt,r[11]=I*v+L*Q+b*lt+M*ct,r[15]=I*T+L*tt+b*st+M*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],m=t[14],g=t[3],w=t[7],f=t[11],d=t[15],I=l*m-c*u,L=o*m-c*p,b=o*u-l*p,M=a*m-c*h,C=a*u-l*h,U=a*p-o*h;return e*(w*I-f*L+d*b)-n*(g*I-f*M+d*C)+s*(g*L-w*M+d*U)-r*(g*b-w*C+f*U)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],m=t[11],g=t[12],w=t[13],f=t[14],d=t[15],I=e*o-n*a,L=e*l-s*a,b=e*c-r*a,M=n*l-s*o,C=n*c-r*o,U=s*c-r*l,v=h*w-p*g,T=h*f-u*g,V=h*d-m*g,G=p*f-u*w,Q=p*d-m*w,tt=u*d-m*f,H=I*tt-L*Q+b*G+M*V-C*T+U*v;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let J=1/H;return t[0]=(o*tt-l*Q+c*G)*J,t[1]=(s*Q-n*tt-r*G)*J,t[2]=(w*U-f*C+d*M)*J,t[3]=(u*C-p*U-m*M)*J,t[4]=(l*V-a*tt-c*T)*J,t[5]=(e*tt-s*V+r*T)*J,t[6]=(f*b-g*U-d*L)*J,t[7]=(h*U-u*b+m*L)*J,t[8]=(a*Q-o*V+c*v)*J,t[9]=(n*V-e*Q-r*v)*J,t[10]=(g*C-w*b+d*I)*J,t[11]=(p*b-h*C-m*I)*J,t[12]=(o*T-a*G-l*v)*J,t[13]=(e*G-n*T+s*v)*J,t[14]=(w*L-g*M-f*I)*J,t[15]=(h*M-p*L+u*I)*J,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,p=o+o,u=r*c,m=r*h,g=r*p,w=a*h,f=a*p,d=o*p,I=l*c,L=l*h,b=l*p,M=n.x,C=n.y,U=n.z;return s[0]=(1-(w+d))*M,s[1]=(m+b)*M,s[2]=(g-L)*M,s[3]=0,s[4]=(m-b)*C,s[5]=(1-(u+d))*C,s[6]=(f+I)*C,s[7]=0,s[8]=(g+L)*U,s[9]=(f-I)*U,s[10]=(1-(u+w))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Qs.set(s[0],s[1],s[2]).length(),o=Qs.set(s[4],s[5],s[6]).length(),l=Qs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pi.copy(this);let c=1/a,h=1/o,p=1/l;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=p,pi.elements[9]*=p,pi.elements[10]*=p,e.setFromRotationMatrix(pi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=vi,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s),g,w;if(l)g=r/(a-r),w=a*r/(a-r);else if(o===vi)g=-(a+r)/(a-r),w=-2*a*r/(a-r);else if(o===mr)g=-a/(a-r),w=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=vi,l=!1){let c=this.elements,h=2/(e-t),p=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s),g,w;if(l)g=1/(a-r),w=a/(a-r);else if(o===vi)g=-2/(a-r),w=-(a+r)/(a-r);else if(o===mr)g=-1/(a-r),w=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Qs=new F,pi=new We,Em=new F(0,0,0),Tm=new F(1,1,1),ss=new F,lo=new F,Qn=new F,fd=new We,pd=new Li,Qi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ge(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pd.setFromEuler(this),this.setFromQuaternion(pd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qi.DEFAULT_ORDER="XYZ";var vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Am=0,md=new F,tr=new Li,qi=new We,co=new F,Yr=new F,Cm=new F,Rm=new Li,gd=new F(1,0,0),_d=new F(0,1,0),xd=new F(0,0,1),vd={type:"added"},Im={type:"removed"},er={type:"childadded",child:null},jc={type:"childremoved",child:null},yn=class i extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new Qi,n=new Li,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new fe}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(gd,t)}rotateY(t){return this.rotateOnAxis(_d,t)}rotateZ(t){return this.rotateOnAxis(xd,t)}translateOnAxis(t,e){return md.copy(t).applyQuaternion(this.quaternion),this.position.add(md.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gd,t)}translateY(t){return this.translateOnAxis(_d,t)}translateZ(t){return this.translateOnAxis(xd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?co.copy(t):co.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Yr,co,this.up):qi.lookAt(co,Yr,this.up),this.quaternion.setFromRotationMatrix(qi),s&&(qi.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(qi),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vd),er.child=t,this.dispatchEvent(er),er.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Im),jc.child=t,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vd),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,t,Cm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,Rm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),p=a(t.shapes),u=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yn.DEFAULT_UP=new F(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yi=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pm={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let w of t.hand.values()){let f=e.getJointPose(w,n),d=this._getHandJoint(c,w);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new yi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Qc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var le=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=n,Te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Te.workingColorSpace){if(t=nu(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Qc(a,r,t+1/3),this.g=Qc(a,r,t),this.b=Qc(a,r,t-1/3)}return Te.colorSpaceToWorking(this,s),this}setStyle(t,e=ei){function n(r){r!==void 0&&parseFloat(r)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ei){let n=Cf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ei){return Te.workingToColorSpace(Ln.copy(this),t),Math.round(ge(Ln.r*255,0,255))*65536+Math.round(ge(Ln.g*255,0,255))*256+Math.round(ge(Ln.b*255,0,255))}getHexString(t=ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.workingToColorSpace(Ln.copy(this),e);let n=Ln.r,s=Ln.g,r=Ln.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Te.workingColorSpace){return Te.workingToColorSpace(Ln.copy(this),e),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=ei){Te.workingToColorSpace(Ln.copy(this),t);let e=Ln.r,n=Ln.g,s=Ln.b;return t!==ei?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(rs),this.setHSL(rs.h+t,rs.s+e,rs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(rs),t.getHSL(ho);let n=ea(rs.h,ho.h,e),s=ea(rs.s,ho.s,e),r=ea(rs.l,ho.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new le;le.NAMES=Cf;var ha=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},mi=new F,Yi=new F,th=new F,Zi=new F,nr=new F,ir=new F,yd=new F,eh=new F,nh=new F,ih=new F,sh=new ke,rh=new ke,ah=new ke,cs=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mi.subVectors(t,e),s.cross(mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mi.subVectors(s,e),Yi.subVectors(n,e),th.subVectors(t,e);let a=mi.dot(mi),o=mi.dot(Yi),l=mi.dot(th),c=Yi.dot(Yi),h=Yi.dot(th),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,m=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zi.x),l.addScaledVector(a,Zi.y),l.addScaledVector(o,Zi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return sh.setScalar(0),rh.setScalar(0),ah.setScalar(0),sh.fromBufferAttribute(t,e),rh.fromBufferAttribute(t,n),ah.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(sh,r.x),a.addScaledVector(rh,r.y),a.addScaledVector(ah,r.z),a}static isFrontFacing(t,e,n,s){return mi.subVectors(n,e),Yi.subVectors(t,e),mi.cross(Yi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),mi.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;nr.subVectors(s,n),ir.subVectors(r,n),eh.subVectors(t,n);let l=nr.dot(eh),c=ir.dot(eh);if(l<=0&&c<=0)return e.copy(n);nh.subVectors(t,s);let h=nr.dot(nh),p=ir.dot(nh);if(h>=0&&p<=h)return e.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(nr,a);ih.subVectors(t,r);let m=nr.dot(ih),g=ir.dot(ih);if(g>=0&&m<=g)return e.copy(r);let w=m*c-l*g;if(w<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ir,o);let f=h*g-m*p;if(f<=0&&p-h>=0&&m-g>=0)return yd.subVectors(r,s),o=(p-h)/(p-h+(m-g)),e.copy(s).addScaledVector(yd,o);let d=1/(f+w+u);return a=w*d,o=u*d,e.copy(n).addScaledVector(nr,a).addScaledVector(ir,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ni=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gi):gi.fromBufferAttribute(r,a),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),uo.copy(n.boundingBox)),uo.applyMatrix4(t.matrixWorld),this.union(uo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zr),fo.subVectors(this.max,Zr),sr.subVectors(t.a,Zr),rr.subVectors(t.b,Zr),ar.subVectors(t.c,Zr),as.subVectors(rr,sr),os.subVectors(ar,rr),Ts.subVectors(sr,ar);let e=[0,-as.z,as.y,0,-os.z,os.y,0,-Ts.z,Ts.y,as.z,0,-as.x,os.z,0,-os.x,Ts.z,0,-Ts.x,-as.y,as.x,0,-os.y,os.x,0,-Ts.y,Ts.x,0];return!oh(e,sr,rr,ar,fo)||(e=[1,0,0,0,1,0,0,0,1],!oh(e,sr,rr,ar,fo))?!1:(po.crossVectors(as,os),e=[po.x,po.y,po.z],oh(e,sr,rr,ar,fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ji=[new F,new F,new F,new F,new F,new F,new F,new F],gi=new F,uo=new ni,sr=new F,rr=new F,ar=new F,as=new F,os=new F,Ts=new F,Zr=new F,fo=new F,po=new F,As=new F;function oh(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){As.fromArray(i,r);let o=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),l=t.dot(As),c=e.dot(As),h=n.dot(As);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ln=new F,mo=new Dt,Lm=0,Ye=class extends Pi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tu,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mo.fromBufferAttribute(this,e),mo.applyMatrix3(t),this.setXY(e,mo.x,mo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix3(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ua=class extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var da=class extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var un=class extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},Dm=new ni,Jr=new F,lh=new F,di=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Dm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jr.subVectors(t,this.center);let e=Jr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Jr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jr.copy(t.center).add(lh)),this.expandByPoint(Jr.copy(t.center).sub(lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Nm=0,ui=new We,ch=new yn,or=new F,ti=new ni,Kr=new ni,xn=new F,rn=class i extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sm(t)?da:ua)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,e,n){return ui.makeTranslation(t,e,n),this.applyMatrix4(ui),this}scale(t,e,n){return ui.makeScale(t,e,n),this.applyMatrix4(ui),this}lookAt(t){return ch.lookAt(t),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new un(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ti.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Kr.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(ti.min,Kr.min),ti.expandByPoint(xn),xn.addVectors(ti.max,Kr.max),ti.expandByPoint(xn)):(ti.expandByPoint(Kr.min),ti.expandByPoint(Kr.max))}ti.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xn.fromBufferAttribute(o,c),l&&(or.fromBufferAttribute(t,c),xn.add(or)),s=Math.max(s,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ye(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new F,l[v]=new F;let c=new F,h=new F,p=new F,u=new Dt,m=new Dt,g=new Dt,w=new F,f=new F;function d(v,T,V){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),p.fromBufferAttribute(n,V),u.fromBufferAttribute(r,v),m.fromBufferAttribute(r,T),g.fromBufferAttribute(r,V),h.sub(c),p.sub(c),m.sub(u),g.sub(u);let G=1/(m.x*g.y-g.x*m.y);isFinite(G)&&(w.copy(h).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(G),f.copy(p).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(G),o[v].add(w),o[T].add(w),o[V].add(w),l[v].add(f),l[T].add(f),l[V].add(f))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let v=0,T=I.length;v<T;++v){let V=I[v],G=V.start,Q=V.count;for(let tt=G,H=G+Q;tt<H;tt+=3)d(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}let L=new F,b=new F,M=new F,C=new F;function U(v){M.fromBufferAttribute(s,v),C.copy(M);let T=o[v];L.copy(T),L.sub(M.multiplyScalar(M.dot(T))).normalize(),b.crossVectors(C,T);let G=b.dot(l[v])<0?-1:1;a.setXYZW(v,L.x,L.y,L.z,G)}for(let v=0,T=I.length;v<T;++v){let V=I[v],G=V.start,Q=V.count;for(let tt=G,H=G+Q;tt<H;tt+=3)U(t.getX(tt+0)),U(t.getX(tt+1)),U(t.getX(tt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,p=new F;if(t)for(let u=0,m=t.count;u<m;u+=3){let g=t.getX(u+0),w=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,w),a.fromBufferAttribute(e,f),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xn.fromBufferAttribute(t,e),xn.normalize(),t.setXYZ(e,xn.x,xn.y,xn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),m=0,g=0;for(let w=0,f=l.length;w<f;w++){o.isInterleavedBufferAttribute?m=l[w]*o.data.stride+o.offset:m=l[w]*h;for(let d=0;d<h;d++)u[g++]=c[m++]}return new Ye(u,h,p)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let m=c[p];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let u=0,m=p.length;u<m;u++)h.push(p[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tu,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},kn=new F,Si=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)kn.fromBufferAttribute(this,e),kn.applyMatrix4(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)kn.fromBufferAttribute(this,e),kn.applyNormalMatrix(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)kn.fromBufferAttribute(this,e),kn.transformDirection(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){la("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){la("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hh=new F,Um=new F,Fm=new fe,_i=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=hh.subVectors(n,e).cross(Um.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(hh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Fm.getNormalMatrix(t),s=this.coplanarPoint(hh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Om=0,Di=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Cr,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=Bh,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fo,this.stencilZFail=Fo,this.stencilZPass=Fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new le().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new _i().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Dt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ki=new F,uh=new F,go=new F,_o=new F,Ls=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,e),Ki.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){uh.copy(t).add(e).multiplyScalar(.5),go.copy(e).sub(t).normalize(),_o.copy(this.origin).sub(uh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(go),o=_o.dot(this.direction),l=-_o.dot(go),c=_o.lengthSq(),h=Math.abs(1-a*a),p,u,m,g;if(h>0)if(p=a*l-o,u=a*o-l,g=r*h,p>=0)if(u>=-g)if(u<=g){let w=1/h;p*=w,u*=w,m=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(uh).addScaledVector(go,u),m}intersectSphere(t,e){if(t.radius<0)return null;Ki.subVectors(t.center,this.origin);let n=Ki.dot(this.direction),s=Ki.dot(Ki)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-a.x,u=t.y-a.y,m=t.z-a.z,g=e.x-a.x,w=e.y-a.y,f=e.z-a.z,d=n.x-a.x,I=n.y-a.y,L=n.z-a.z,b=Math.abs(l),M=Math.abs(c),C=Math.abs(h),U,v,T,V,G,Q,tt,H,J,lt,st,_t;if(b>=M&&b>=C?(T=l,Q=p,J=g,_t=d,l>=0?(U=c,v=h,V=u,G=m,tt=w,H=f,lt=I,st=L):(U=h,v=c,V=m,G=u,tt=f,H=w,lt=L,st=I)):M>=C?(T=c,Q=u,J=w,_t=I,c>=0?(U=h,v=l,V=m,G=p,tt=f,H=g,lt=L,st=d):(U=l,v=h,V=p,G=m,tt=g,H=f,lt=d,st=L)):(T=h,Q=m,J=f,_t=L,h>=0?(U=l,v=c,V=p,G=u,tt=g,H=w,lt=d,st=I):(U=c,v=l,V=u,G=p,tt=w,H=g,lt=I,st=d)),T===0)return null;let rt=U/T,ct=v/T,ft=1/T,Kt=V-rt*Q,$t=G-ct*Q,Re=tt-rt*J,Se=H-ct*J,Ee=lt-rt*_t,nt=st-ct*_t,ht=Ee*Se-nt*Re,Lt=Kt*nt-$t*Ee,ie=Re*$t-Se*Kt;if(s){if(ht<0||Lt<0||ie<0)return null}else if((ht<0||Lt<0||ie<0)&&(ht>0||Lt>0||ie>0))return null;let Ct=ht+Lt+ie;if(Ct===0)return null;let qt=ft*(ht*Q+Lt*J+ie*_t);return(Ct>0?qt<0:qt>0)?null:this.at(qt/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fa=class extends Di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=El,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Sd=new We,Cs=new Ls,xo=new di,Md=new F,vo=new F,yo=new F,So=new F,dh=new F,Mo=new F,bd=new F,bo=new F,Nn=class extends yn{constructor(t=new rn,e=new fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(dh.fromBufferAttribute(p,t),a?Mo.addScaledVector(dh,h):Mo.addScaledVector(dh.sub(e),h))}e.add(Mo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(r),Cs.copy(t.ray).recast(t.near),!(xo.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(xo,Md)===null||Cs.origin.distanceToSquared(Md)>(t.far-t.near)**2))&&(Sd.copy(r).invert(),Cs.copy(t.ray).applyMatrix4(Sd),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,w=u.length;g<w;g++){let f=u[g],d=a[f.materialIndex],I=Math.max(f.start,m.start),L=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let b=I,M=L;b<M;b+=3){let C=o.getX(b),U=o.getX(b+1),v=o.getX(b+2);s=wo(this,d,t,n,c,h,p,C,U,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),w=Math.min(o.count,m.start+m.count);for(let f=g,d=w;f<d;f+=3){let I=o.getX(f),L=o.getX(f+1),b=o.getX(f+2);s=wo(this,a,t,n,c,h,p,I,L,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,w=u.length;g<w;g++){let f=u[g],d=a[f.materialIndex],I=Math.max(f.start,m.start),L=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let b=I,M=L;b<M;b+=3){let C=b,U=b+1,v=b+2;s=wo(this,d,t,n,c,h,p,C,U,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),w=Math.min(l.count,m.start+m.count);for(let f=g,d=w;f<d;f+=3){let I=f,L=f+1,b=f+2;s=wo(this,a,t,n,c,h,p,I,L,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function Bm(i,t,e,n,s,r,a,o){let l;if(t.side===Vn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ms,o),l===null)return null;bo.copy(o),bo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(bo);return c<e.near||c>e.far?null:{distance:c,point:bo.clone(),object:i}}function wo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,vo),i.getVertexPosition(l,yo),i.getVertexPosition(c,So);let h=Bm(i,t,e,n,vo,yo,So,bd);if(h){let p=new F;cs.getBarycoord(bd,vo,yo,So,p),s&&(h.uv=cs.getInterpolatedAttribute(s,o,l,c,p,new Dt)),r&&(h.uv1=cs.getInterpolatedAttribute(r,o,l,c,p,new Dt)),a&&(h.normal=cs.getInterpolatedAttribute(a,o,l,c,p,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};cs.getNormal(vo,yo,So,u.normal),h.face=u,h.barycoord=p}return h}var Ko=class extends Wn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=vn,h=vn,p,u){super(null,a,o,l,c,h,s,r,p,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rs=new di,zm=new Dt(.5,.5),Eo=new F,Sr=class{constructor(t=new _i,e=new _i,n=new _i,s=new _i,r=new _i,a=new _i){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vi,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],u=r[6],m=r[7],g=r[8],w=r[9],f=r[10],d=r[11],I=r[12],L=r[13],b=r[14],M=r[15];if(s[0].setComponents(c-a,m-h,d-g,M-I).normalize(),s[1].setComponents(c+a,m+h,d+g,M+I).normalize(),s[2].setComponents(c+o,m+p,d+w,M+L).normalize(),s[3].setComponents(c-o,m-p,d-w,M-L).normalize(),n)s[4].setComponents(l,u,f,b).normalize(),s[5].setComponents(c-l,m-u,d-f,M-b).normalize();else if(s[4].setComponents(c-l,m-u,d-f,M-b).normalize(),e===vi)s[5].setComponents(c+l,m+u,d+f,M+b).normalize();else if(e===mr)s[5].setComponents(l,u,f,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){Rs.center.set(0,0,0);let e=zm.distanceTo(t.center);return Rs.radius=.7071067811865476+e,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Eo.x=s.normal.x>0?t.max.x:t.min.x,Eo.y=s.normal.y>0?t.max.y:t.min.y,Eo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ds=class extends Di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},jo=new F,Qo=new F,wd=new We,jr=new Ls,To=new di,fh=new F,Ed=new F,tl=class extends yn{constructor(t=new rn,e=new Ds){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)jo.fromBufferAttribute(e,s-1),Qo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=jo.distanceTo(Qo);t.setAttribute("lineDistance",new un(n,1))}else oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(s),To.radius+=r,t.ray.intersectsSphere(To)===!1)return;wd.copy(s).invert(),jr.copy(t.ray).applyMatrix4(wd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let w=m,f=g-1;w<f;w+=c){let d=h.getX(w),I=h.getX(w+1),L=Ao(this,t,jr,l,d,I,w);L&&e.push(L)}if(this.isLineLoop){let w=h.getX(g-1),f=h.getX(m),d=Ao(this,t,jr,l,w,f,g-1);d&&e.push(d)}}else{let m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let w=m,f=g-1;w<f;w+=c){let d=Ao(this,t,jr,l,w,w+1,w);d&&e.push(d)}if(this.isLineLoop){let w=Ao(this,t,jr,l,g-1,m,g-1);w&&e.push(w)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ao(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(jo.fromBufferAttribute(o,s),Qo.fromBufferAttribute(o,r),e.distanceSqToSegment(jo,Qo,fh,Ed)>n)return;fh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(fh);if(!(c<t.near||c>t.far))return{distance:c,point:Ed.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var pa=class extends tl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},el=class extends Di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Td=new We,wh=new Ls,Co=new di,Ro=new F,Ns=class extends yn{constructor(t=new rn,e=new el){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(s),Co.radius+=r,t.ray.intersectsSphere(Co)===!1)return;Td.copy(s).invert(),wh.copy(t.ray).applyMatrix4(Td);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=u,w=m;g<w;g++){let f=c.getX(g);Ro.fromBufferAttribute(p,f),Ad(Ro,f,l,s,t,e,this)}}else{let u=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let g=u,w=m;g<w;g++)Ro.fromBufferAttribute(p,g),Ad(Ro,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ad(i,t,e,n,s,r,a){let o=wh.distanceSqToPoint(i);if(o<e){let l=new F;wh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ma=class extends Wn{constructor(t=[],e=gs,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var hs=class extends Wn{constructor(t,e,n=bi,s,r,a,o=vn,l=vn,c,h=Ii,p=1){if(h!==Ii&&h!==xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:p};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},nl=class extends hs{constructor(t,e=bi,n=gs,s,r,a=vn,o=vn,l,c=Ii){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ga=class extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Mr=class i extends rn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],u=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(h,3)),this.setAttribute("uv",new un(p,2));function g(w,f,d,I,L,b,M,C,U,v,T){let V=b/U,G=M/v,Q=b/2,tt=M/2,H=C/2,J=U+1,lt=v+1,st=0,_t=0,rt=new F;for(let ct=0;ct<lt;ct++){let ft=ct*G-tt;for(let Kt=0;Kt<J;Kt++){let $t=Kt*V-Q;rt[w]=$t*I,rt[f]=ft*L,rt[d]=H,c.push(rt.x,rt.y,rt.z),rt[w]=0,rt[f]=0,rt[d]=C>0?1:-1,h.push(rt.x,rt.y,rt.z),p.push(Kt/U),p.push(1-ct/v),st+=1}}for(let ct=0;ct<v;ct++)for(let ft=0;ft<U;ft++){let Kt=u+ft+J*ct,$t=u+ft+J*(ct+1),Re=u+(ft+1)+J*(ct+1),Se=u+(ft+1)+J*ct;l.push(Kt,$t,Se),l.push($t,Re,Se),_t+=6}o.addGroup(m,_t,T),m+=_t,u+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){oe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,m=(a-h)/u;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Dt:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new F,s=[],r=[],a=[],o=new F,l=new We;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ge(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(ge(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},br=class extends ii{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*h-m*p+this.aX,c=u*p+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},il=class extends br{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function su(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+p)+(l-o)/p;u*=h,m*=h,s(a,o,u,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Cd=new F,Rd=new F,ph=new su,mh=new su,gh=new su,sl=class extends ii{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Rd.subVectors(s[0],s[1]).add(s[0]),c=Rd);let p=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Cd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Cd),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),m),w=Math.pow(p.distanceToSquared(u),m),f=Math.pow(u.distanceToSquared(h),m);w<1e-4&&(w=1),g<1e-4&&(g=w),f<1e-4&&(f=w),ph.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,g,w,f),mh.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,g,w,f),gh.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,g,w,f)}else this.curveType==="catmullrom"&&(ph.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),mh.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),gh.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return n.set(ph.calc(l),mh.calc(l),gh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Id(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function km(i,t){let e=1-i;return e*e*t}function Vm(i,t){return 2*(1-i)*i*t}function Hm(i,t){return i*i*t}function na(i,t,e,n){return km(i,t)+Vm(i,e)+Hm(i,n)}function Gm(i,t){let e=1-i;return e*e*e*t}function Wm(i,t){let e=1-i;return 3*e*e*i*t}function $m(i,t){return 3*(1-i)*i*i*t}function Xm(i,t){return i*i*i*t}function ia(i,t,e,n,s){return Gm(i,t)+Wm(i,e)+$m(i,n)+Xm(i,s)}var _a=class extends ii{constructor(t=new Dt,e=new Dt,n=new Dt,s=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Dt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ia(t,s.x,r.x,a.x,o.x),ia(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},rl=class extends ii{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ia(t,s.x,r.x,a.x,o.x),ia(t,s.y,r.y,a.y,o.y),ia(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xa=class extends ii{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},al=class extends ii{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},va=class extends ii{constructor(t=new Dt,e=new Dt,n=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Dt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(na(t,s.x,r.x,a.x),na(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ol=class extends ii{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(na(t,s.x,r.x,a.x),na(t,s.y,r.y,a.y),na(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ya=class extends ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(Id(o,l.x,c.x,h.x,p.x),Id(o,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Dt().fromArray(s))}return this}},Eh=Object.freeze({__proto__:null,ArcCurve:il,CatmullRomCurve3:sl,CubicBezierCurve:_a,CubicBezierCurve3:rl,EllipseCurve:br,LineCurve:xa,LineCurve3:al,QuadraticBezierCurve:va,QuadraticBezierCurve3:ol,SplineCurve:ya}),ll=class extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Eh[s.type]().fromJSON(s))}return this}},Us=class extends ll{constructor(t){super(),this.type="Path",this.currentPoint=new Dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new xa(this.currentPoint.clone(),new Dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new va(this.currentPoint.clone(),new Dt(t,e),new Dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new _a(this.currentPoint.clone(),new Dt(t,e),new Dt(n,s),new Dt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ya(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new br(t,e,n,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},wr=class extends Us{constructor(t){super(t),this.uuid=Ri(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Us().fromJSON(s))}return this}};function qm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Rf(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=jm(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,p=l;for(let u=e;u<s;u+=e){let m=i[u],g=i[u+1];m<o&&(o=m),g<l&&(l=g),m>h&&(h=m),g>p&&(p=g)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return Sa(r,a,e,o,l,c,0),a}function Rf(i,t,e,n,s){let r;if(s===cg(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Pd(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Pd(a/n|0,i[a],i[a+1],r);return r&&Er(r,r.next)&&(ba(r),r=r.next),r}function Fs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Er(e,e.next)||je(e.prev,e,e.next)===0)){if(ba(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Sa(i,t,e,n,s,r,a){if(!i)return;!a&&r&&ig(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Zm(i,n,s,r):Ym(i)){t.push(l.i,i.i,c.i),ba(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Jm(Fs(i),t),Sa(i,t,e,n,s,r,2)):a===2&&Km(i,t,e,n,s,r):Sa(Fs(i),t,e,n,s,r,1);break}}}function Ym(i){let t=i.prev,e=i,n=i.next;if(je(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),p=Math.min(o,l,c),u=Math.max(s,r,a),m=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=p&&g.y<=m&&Qr(s,o,r,l,a,c,g.x,g.y)&&je(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Zm(i,t,e,n){let s=i.prev,r=i,a=i.next;if(je(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,p=r.y,u=a.y,m=Math.min(o,l,c),g=Math.min(h,p,u),w=Math.max(o,l,c),f=Math.max(h,p,u),d=Th(m,g,t,e,n),I=Th(w,f,t,e,n),L=i.prevZ,b=i.nextZ;for(;L&&L.z>=d&&b&&b.z<=I;){if(L.x>=m&&L.x<=w&&L.y>=g&&L.y<=f&&L!==s&&L!==a&&Qr(o,h,l,p,c,u,L.x,L.y)&&je(L.prev,L,L.next)>=0||(L=L.prevZ,b.x>=m&&b.x<=w&&b.y>=g&&b.y<=f&&b!==s&&b!==a&&Qr(o,h,l,p,c,u,b.x,b.y)&&je(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;L&&L.z>=d;){if(L.x>=m&&L.x<=w&&L.y>=g&&L.y<=f&&L!==s&&L!==a&&Qr(o,h,l,p,c,u,L.x,L.y)&&je(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;b&&b.z<=I;){if(b.x>=m&&b.x<=w&&b.y>=g&&b.y<=f&&b!==s&&b!==a&&Qr(o,h,l,p,c,u,b.x,b.y)&&je(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Jm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Er(n,s)&&Pf(n,e,e.next,s)&&Ma(n,s)&&Ma(s,n)&&(t.push(n.i,e.i,s.i),ba(e),ba(e.next),e=i=s),e=e.next}while(e!==i);return Fs(e)}function Km(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ag(a,o)){let l=Lf(a,o);a=Fs(a,a.next),l=Fs(l,l.next),Sa(a,t,e,n,s,r,0),Sa(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function jm(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Rf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(rg(c))}s.sort(Qm);for(let r=0;r<s.length;r++)e=tg(s[r],e);return e}function Qm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function tg(i,t){let e=eg(i,t);if(!e)return t;let n=Lf(e,i);return Fs(n,n.next),Fs(e,e.next)}function eg(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Er(i,e))return e;do{if(Er(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&If(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);Ma(e,i)&&(p<h||p===h&&(e.x>a.x||e.x===a.x&&ng(a,e)))&&(a=e,h=p)}e=e.next}while(e!==o);return a}function ng(i,t){return je(i.prev,i,t.prev)<0&&je(t.next,i,i.next)<0}function ig(i,t,e,n){let s=i;do s.z===0&&(s.z=Th(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,sg(s)}function sg(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Th(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function rg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function If(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Qr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&If(i,t,e,n,s,r,a,o)}function ag(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!og(i,t)&&(Ma(i,t)&&Ma(t,i)&&lg(i,t)&&(je(i.prev,i,t.prev)||je(i,t.prev,t))||Er(i,t)&&je(i.prev,i,i.next)>0&&je(t.prev,t,t.next)>0)}function je(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Er(i,t){return i.x===t.x&&i.y===t.y}function Pf(i,t,e,n){let s=Po(je(i,t,e)),r=Po(je(i,t,n)),a=Po(je(e,n,i)),o=Po(je(e,n,t));return!!(s!==r&&a!==o||s===0&&Io(i,e,t)||r===0&&Io(i,n,t)||a===0&&Io(e,i,n)||o===0&&Io(e,t,n))}function Io(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Po(i){return i>0?1:i<0?-1:0}function og(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Pf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ma(i,t){return je(i.prev,i,i.next)<0?je(i,t,i.next)>=0&&je(i,i.prev,t)>=0:je(i,t,i.prev)<0||je(i,i.next,t)<0}function lg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Lf(i,t){let e=Ah(i.i,i.x,i.y),n=Ah(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Pd(i,t,e,n){let s=Ah(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ba(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ah(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function cg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ch=class{static triangulate(t,e,n=2){return qm(t,e,n)}},Is=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ld(t),Dd(n,t);let a=t.length;e.forEach(Ld);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Dd(n,e[l]);let o=Ch.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ld(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Dd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var wa=class i extends rn{constructor(t=new wr([new Dt(.5,.5),new Dt(-.5,.5),new Dt(-.5,-.5),new Dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new un(s,3)),this.setAttribute("uv",new un(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,w=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,I=e.UVGenerator!==void 0?e.UVGenerator:hg,L,b=!1,M,C,U,v;if(d){L=d.getSpacedPoints(h),b=!0,u=!1;let N=d.isCatmullRomCurve3?d.closed:!1;M=d.computeFrenetFrames(h,N),C=new F,U=new F,v=new F}u||(f=0,m=0,g=0,w=0);let T=o.extractPoints(c),V=T.shape,G=T.holes;if(!Is.isClockWise(V)){V=V.reverse();for(let N=0,mt=G.length;N<mt;N++){let yt=G[N];Is.isClockWise(yt)&&(G[N]=yt.reverse())}}function tt(N){let yt=10000000000000001e-36,vt=N[0];for(let St=1;St<=N.length;St++){let ne=St%N.length,ee=N[ne],kt=ee.x-vt.x,he=ee.y-vt.y,O=kt*kt+he*he,De=Math.max(Math.abs(ee.x),Math.abs(ee.y),Math.abs(vt.x),Math.abs(vt.y)),xe=yt*De*De;if(O<=xe){N.splice(ne,1),St--;continue}vt=ee}}tt(V),G.forEach(tt);let H=G.length,J=V;for(let N=0;N<H;N++){let mt=G[N];V=V.concat(mt)}function lt(N,mt,yt){return mt||ce("ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(mt,yt)}let st=V.length;function _t(N,mt,yt){let vt,St,ne,ee=N.x-mt.x,kt=N.y-mt.y,he=yt.x-N.x,O=yt.y-N.y,De=ee*ee+kt*kt,xe=ee*O-kt*he;if(Math.abs(xe)>Number.EPSILON){let E=Math.sqrt(De),x=Math.sqrt(he*he+O*O),$=mt.x-kt/E,j=mt.y+ee/E,at=yt.x-O/x,Mt=yt.y+he/x,Tt=((at-$)*O-(Mt-j)*he)/(ee*O-kt*he);vt=$+ee*Tt-N.x,St=j+kt*Tt-N.y;let ot=vt*vt+St*St;if(ot<=2)return new Dt(vt,St);ne=Math.sqrt(ot/2)}else{let E=!1;ee>Number.EPSILON?he>Number.EPSILON&&(E=!0):ee<-Number.EPSILON?he<-Number.EPSILON&&(E=!0):Math.sign(kt)===Math.sign(O)&&(E=!0),E?(vt=-kt,St=ee,ne=Math.sqrt(De)):(vt=ee,St=kt,ne=Math.sqrt(De/2))}return new Dt(vt/ne,St/ne)}let rt=[];for(let N=0,mt=J.length,yt=mt-1,vt=N+1;N<mt;N++,yt++,vt++)yt===mt&&(yt=0),vt===mt&&(vt=0),rt[N]=_t(J[N],J[yt],J[vt]);let ct=[],ft,Kt=rt.concat();for(let N=0,mt=H;N<mt;N++){let yt=G[N];ft=[];for(let vt=0,St=yt.length,ne=St-1,ee=vt+1;vt<St;vt++,ne++,ee++)ne===St&&(ne=0),ee===St&&(ee=0),ft[vt]=_t(yt[vt],yt[ne],yt[ee]);ct.push(ft),Kt=Kt.concat(ft)}let $t;if(f===0)$t=Is.triangulateShape(J,G);else{let N=[],mt=[];for(let yt=0;yt<f;yt++){let vt=yt/f,St=m*Math.cos(vt*Math.PI/2),ne=g*Math.sin(vt*Math.PI/2)+w;for(let ee=0,kt=J.length;ee<kt;ee++){let he=lt(J[ee],rt[ee],ne);Lt(he.x,he.y,-St),vt===0&&N.push(he)}for(let ee=0,kt=H;ee<kt;ee++){let he=G[ee];ft=ct[ee];let O=[];for(let De=0,xe=he.length;De<xe;De++){let E=lt(he[De],ft[De],ne);Lt(E.x,E.y,-St),vt===0&&O.push(E)}vt===0&&mt.push(O)}}$t=Is.triangulateShape(N,mt)}let Re=$t.length,Se=g+w;for(let N=0;N<st;N++){let mt=u?lt(V[N],Kt[N],Se):V[N];b?(U.copy(M.normals[0]).multiplyScalar(mt.x),C.copy(M.binormals[0]).multiplyScalar(mt.y),v.copy(L[0]).add(U).add(C),Lt(v.x,v.y,v.z)):Lt(mt.x,mt.y,0)}for(let N=1;N<=h;N++)for(let mt=0;mt<st;mt++){let yt=u?lt(V[mt],Kt[mt],Se):V[mt];b?(U.copy(M.normals[N]).multiplyScalar(yt.x),C.copy(M.binormals[N]).multiplyScalar(yt.y),v.copy(L[N]).add(U).add(C),Lt(v.x,v.y,v.z)):Lt(yt.x,yt.y,p/h*N)}for(let N=f-1;N>=0;N--){let mt=N/f,yt=m*Math.cos(mt*Math.PI/2),vt=g*Math.sin(mt*Math.PI/2)+w;for(let St=0,ne=J.length;St<ne;St++){let ee=lt(J[St],rt[St],vt);Lt(ee.x,ee.y,p+yt)}for(let St=0,ne=G.length;St<ne;St++){let ee=G[St];ft=ct[St];for(let kt=0,he=ee.length;kt<he;kt++){let O=lt(ee[kt],ft[kt],vt);b?Lt(O.x,O.y+L[h-1].y,L[h-1].x+yt):Lt(O.x,O.y,p+yt)}}}Ee(),nt();function Ee(){let N=s.length/3;if(u){let mt=0,yt=st*mt;for(let vt=0;vt<Re;vt++){let St=$t[vt];ie(St[2]+yt,St[1]+yt,St[0]+yt)}mt=h+f*2,yt=st*mt;for(let vt=0;vt<Re;vt++){let St=$t[vt];ie(St[0]+yt,St[1]+yt,St[2]+yt)}}else{for(let mt=0;mt<Re;mt++){let yt=$t[mt];ie(yt[2],yt[1],yt[0])}for(let mt=0;mt<Re;mt++){let yt=$t[mt];ie(yt[0]+st*h,yt[1]+st*h,yt[2]+st*h)}}n.addGroup(N,s.length/3-N,0)}function nt(){let N=s.length/3,mt=0;ht(J,mt),mt+=J.length;for(let yt=0,vt=G.length;yt<vt;yt++){let St=G[yt];ht(St,mt),mt+=St.length}n.addGroup(N,s.length/3-N,1)}function ht(N,mt){let yt=N.length;for(;--yt>=0;){let vt=yt,St=yt-1;St<0&&(St=N.length-1);for(let ne=0,ee=h+f*2;ne<ee;ne++){let kt=st*ne,he=st*(ne+1),O=mt+vt+kt,De=mt+St+kt,xe=mt+St+he,E=mt+vt+he;Ct(O,De,xe,E)}}}function Lt(N,mt,yt){l.push(N),l.push(mt),l.push(yt)}function ie(N,mt,yt){qt(N),qt(mt),qt(yt);let vt=s.length/3,St=I.generateTopUV(n,s,vt-3,vt-2,vt-1);Ie(St[0]),Ie(St[1]),Ie(St[2])}function Ct(N,mt,yt,vt){qt(N),qt(mt),qt(vt),qt(mt),qt(yt),qt(vt);let St=s.length/3,ne=I.generateSideWallUV(n,s,St-6,St-3,St-2,St-1);Ie(ne[0]),Ie(ne[1]),Ie(ne[3]),Ie(ne[1]),Ie(ne[2]),Ie(ne[3])}function qt(N){s.push(l[N*3+0]),s.push(l[N*3+1]),s.push(l[N*3+2])}function Ie(N){r.push(N.x),r.push(N.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ug(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Eh[s.type]().fromJSON(s)),new i(n,t.options)}},hg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Dt(r,a),new Dt(o,l),new Dt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],u=t[s*3],m=t[s*3+1],g=t[s*3+2],w=t[r*3],f=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Dt(a,1-l),new Dt(c,1-p),new Dt(u,1-g),new Dt(w,1-d)]:[new Dt(o,1-l),new Dt(h,1-p),new Dt(m,1-g),new Dt(f,1-d)]}};function ug(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ea=class i extends rn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=t/o,u=e/l,m=[],g=[],w=[],f=[];for(let d=0;d<h;d++){let I=d*u-a;for(let L=0;L<c;L++){let b=L*p-r;g.push(b,-I,0),w.push(0,0,1),f.push(L/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let I=0;I<o;I++){let L=I+c*d,b=I+c*(d+1),M=I+1+c*(d+1),C=I+1+c*d;m.push(L,b,C),m.push(b,M,C)}this.setIndex(m),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(w,3)),this.setAttribute("uv",new un(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ta=class extends rn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new F,r=new F;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let p=l[c],u=p.start,m=p.count;for(let g=u,w=u+m;g<w;g+=3)for(let f=0;f<3;f++){let d=o.getX(g+f),I=o.getX(g+(f+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,I),Nd(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,p=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,p),Nd(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new un(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Nd(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function ks(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Ud(s))s.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ud(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Un(i){let t={};for(let e=0;e<i.length;e++){let n=ks(i[e]);for(let s in n)t[s]=n[s]}return t}function Ud(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function dg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ru(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}var Wa={clone:ks,merge:Un},fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends Di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fg,this.fragmentShader=pg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=dg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new le().setHex(s.value);break;case"v2":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ke().fromArray(s.value);break;case"m3":this.uniforms[n].value=new fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new We().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},cl=class extends Sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Aa=class extends Di{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=El,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},hl=class extends Di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ul=class extends Di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function lr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function _h(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var us=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dl=class extends us{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sh,endingEnd:Sh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mh:r=t,o=2*e-n;break;case bh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mh:a=t,l=2*n-e;break;case bh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),w=g*g,f=w*g,d=-u*f+2*u*w-u*g,I=(1+u)*f+(-1.5-2*u)*w+(-.5+u)*g+1,L=(-1-m)*f+(1.5+m)*w+.5*g,b=m*f-m*w;for(let M=0;M!==o;++M)r[M]=d*a[h+M]+I*a[c+M]+L*a[l+M]+b*a[p+M];return r}},fl=class extends us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),p=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*p+a[l+u]*h;return r}},pl=class extends us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ml=class extends us{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(n-e)/(s-e),w=1-g;for(let f=0;f!==o;++f)r[f]=a[c+f]*w+a[l+f]*g;return r}let u=o*2,m=t-1;for(let g=0;g!==o;++g){let w=a[c+g],f=a[l+g],d=m*u+g*2,I=p[d],L=p[d+1],b=t*u+g*2,M=h[b],C=h[b+1],U=gg(n,e,I,M,s);r[g]=Df(U,w,L,C,f)}return r}};function Df(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function mg(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function gg(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Df(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=mg(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var si=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lr(e,this.TimeBufferType),this.values=lr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:lr(t.times,Array),values:lr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),_h(t.settings)&&(n.settings={inTangents:lr(t.settings.inTangents,Array),outTangents:lr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ml(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case sa:e=this.InterpolantFactoryMethodDiscrete;break;case Xo:e=this.InterpolantFactoryMethodLinear;break;case Uo:e=this.InterpolantFactoryMethodSmooth;break;case yh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return oe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sa;case this.InterpolantFactoryMethodLinear:return Xo;case this.InterpolantFactoryMethodSmooth:return Uo;case this.InterpolantFactoryMethodBezier:return yh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;_h(this.settings)&&(Fd(this.settings.inTangents,t),Fd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ce("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ce("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ce("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ce("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&rm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ce("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Uo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,u=p-n,m=p+n;for(let g=0;g!==n;++g){let w=e[p+g];if(w!==e[u+g]||w!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[p+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,_h(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Fd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Xo;var ds=class extends si{constructor(t,e,n){super(t,e,n)}};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=sa;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends si{constructor(t,e,n,s){super(t,e,n,s)}};gl.prototype.ValueTypeName="color";var _l=class extends si{constructor(t,e,n,s){super(t,e,n,s)}};_l.prototype.ValueTypeName="number";var xl=class extends us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Li.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ca=class extends si{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new xl(this.times,this.values,this.getValueSize(),t)}};Ca.prototype.ValueTypeName="quaternion";Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends si{constructor(t,e,n){super(t,e,n)}};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=sa;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends si{constructor(t,e,n,s){super(t,e,n,s)}};vl.prototype.ValueTypeName="vector";var yl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let m=c[p],g=c[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Nf=new yl,Sl=class{constructor(t){this.manager=t!==void 0?t:Nf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Sl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ra=class extends yn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ia=class extends Ra{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},xh=new We,Od=new F,Bd=new F,Ml=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sr,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Od.setFromMatrixPosition(t.matrixWorld),e.position.copy(Od),Bd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){xh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(xh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===mr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(xh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Lo=new F,Do=new Li,Ai=new F,Pa=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Lo,Do,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,Do,Ai.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Lo,Do,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,Do,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ls=new F,zd=new Dt,kd=new Dt,Dn=class extends Pa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,e){return this.getViewBounds(t,zd,kd),e.subVectors(kd,zd)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ta*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Tr=class extends Pa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rh=class extends Ml{constructor(){super(new Tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},La=class extends Ra{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new Rh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Da=class extends rn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var cr=-90,hr=1,bl=class extends yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dn(cr,hr,t,e);s.layers=this.layers,this.add(s);let r=new Dn(cr,hr,t,e);r.layers=this.layers,this.add(r);let a=new Dn(cr,hr,t,e);a.layers=this.layers,this.add(a);let o=new Dn(cr,hr,t,e);o.layers=this.layers,this.add(o);let l=new Dn(cr,hr,t,e);l.layers=this.layers,this.add(l);let c=new Dn(cr,hr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=w,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,u,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},wl=class extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var au="\\[\\]\\.:\\/",_g=new RegExp("["+au+"]","g"),ou="[^"+au+"]",xg="[^"+au.replace("\\.","")+"]",vg=/((?:WC+[\/:])*)/.source.replace("WC",ou),yg=/(WCOD+)?/.source.replace("WCOD",xg),Sg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ou),Mg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ou),bg=new RegExp("^"+vg+yg+Sg+Mg+"$"),wg=["material","materials","bones","map"],Ih=class{constructor(t,e,n){let s=n||Ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ke=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_g,"")}static parseTrackName(t){let e=bg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);wg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ce("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ke.Composite=Ih;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var By=new Float32Array(1);var ps=class extends Jo{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Vd=new We,Os=class{constructor(t,e,n=0,s=1/0){this.ray=new Ls(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vd),this}intersectObject(t,e=!0,n=[]){return Ph(t,this,n,e),n.sort(Hd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ph(t[s],this,n,e);return n.sort(Hd),n}};function Hd(i,t){return i.distance-t.distance}function Ph(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ph(r[a],t,e,!0)}}var Lh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Gd=new F,No=new F,ur=new F,dr=new F,vh=new F,Eg=new F,Tg=new F,Na=class{constructor(t=new F,e=new F){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Gd.subVectors(t,this.start),No.subVectors(this.end,this.start);let n=No.dot(No);if(n===0)return 0;let r=No.dot(Gd)/n;return e&&(r=ge(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Eg,n=Tg){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;ur.subVectors(c,o),dr.subVectors(h,l),vh.subVectors(o,l);let p=ur.dot(ur),u=dr.dot(dr),m=dr.dot(vh);if(p<=s&&u<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(p<=s)r=0,a=m/u,a=ge(a,0,1);else{let g=ur.dot(vh);if(u<=s)a=0,r=ge(-g/p,0,1);else{let w=ur.dot(dr),f=p*u-w*w;f!==0?r=ge((w*m-g*u)/f,0,1):r=0,a=(w*r+m)/u,a<0?(a=0,r=ge(-g/p,0,1)):a>1&&(a=1,r=ge((w-g)/p,0,1))}}return e.copy(o).addScaledVector(ur,r),n.copy(l).addScaledVector(dr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function lu(i,t,e,n){let s=Ag(n);switch(e){case Kh:return i*t;case Qh:return i*t/s.components*s.byteLength;case Ll:return i*t/s.components*s.byteLength;case vs:return i*t*2/s.components*s.byteLength;case Dl:return i*t*2/s.components*s.byteLength;case jh:return i*t*3/s.components*s.byteLength;case fi:return i*t*4/s.components*s.byteLength;case Nl:return i*t*4/s.components*s.byteLength;case Ba:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ka:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fl:case Bl:return Math.max(i,16)*Math.max(t,8)/4;case Ul:case Ol:return Math.max(i,8)*Math.max(t,8)/2;case zl:case kl:case Hl:case Gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vl:case Ha:case Wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rc:case ac:case oc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lc:case cc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ga:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ag(i){switch(i){case Xn:case qh:return{byteLength:1,components:1};case Rr:case Yh:case Ei:return{byteLength:2,components:1};case Il:case Pl:return{byteLength:2,components:4};case bi:case Rl:case wi:return{byteLength:4,components:1};case Zh:case Jh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function np(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Rg(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,h);else{p.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<p.length;m++){let g=p[u],w=p[m];w.start<=g.start+g.count+1?g.count=Math.max(g.count,w.start+w.count-g.start):(++u,p[u]=w)}p.length=u+1;for(let m=0,g=p.length;m<g;m++){let w=p[m];i.bufferSubData(c,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ig=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pg=`#ifdef USE_ALPHAHASH
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
#endif`,Lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fg=`#ifdef USE_AOMAP
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
#endif`,Og=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bg=`#ifdef USE_BATCHING
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
#endif`,zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gg=`#ifdef USE_IRIDESCENCE
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
#endif`,Wg=`#ifdef USE_BUMPMAP
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
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qg=`#define PI 3.141592653589793
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
} // validated`,t0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e0=`vec3 transformedNormal = objectNormal;
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
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a0="gl_FragColor = linearToOutputTexel( gl_FragColor );",o0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_0=`#ifdef USE_GRADIENTMAP
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
}`,x0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,M0=`#ifdef USE_ENVMAP
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
#endif`,b0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A0=`PhysicalMaterial material;
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
#endif`,C0=`uniform sampler2D dfgLUT;
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
}`,R0=`
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
#endif`,I0=`#if defined( RE_IndirectDiffuse )
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
#endif`,P0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,D0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k0=`#if defined( USE_POINTS_UV )
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
#endif`,V0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`#ifdef USE_MORPHTARGETS
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
#endif`,q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,J0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Q0=`#ifdef USE_NORMALMAP
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
#endif`,t_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,m_=`float getShadowMask() {
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
}`,g_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,__=`#ifdef USE_SKINNING
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
#endif`,x_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v_=`#ifdef USE_SKINNING
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
#endif`,y_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w_=`#ifdef USE_TRANSMISSION
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
#endif`,E_=`#ifdef USE_TRANSMISSION
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
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,I_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P_=`uniform sampler2D t2D;
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
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F_=`#include <common>
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
}`,O_=`#if DEPTH_PACKING == 3200
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
}`,B_=`#define DISTANCE
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
}`,z_=`#define DISTANCE
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`uniform float scale;
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
}`,G_=`uniform vec3 diffuse;
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
}`,W_=`#include <common>
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
}`,$_=`uniform vec3 diffuse;
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
}`,X_=`#define LAMBERT
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
}`,q_=`#define LAMBERT
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
}`,Y_=`#define MATCAP
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
}`,Z_=`#define MATCAP
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
}`,J_=`#define NORMAL
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
}`,K_=`#define NORMAL
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
}`,j_=`#define PHONG
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
}`,Q_=`#define PHONG
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
}`,tx=`#define STANDARD
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
}`,ex=`#define STANDARD
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
}`,nx=`#define TOON
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
}`,ix=`#define TOON
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
}`,sx=`uniform float size;
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
}`,rx=`uniform vec3 diffuse;
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
}`,ax=`#include <common>
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
}`,ox=`uniform vec3 color;
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
}`,lx=`uniform float rotation;
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
}`,cx=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:Ig,alphahash_pars_fragment:Pg,alphamap_fragment:Lg,alphamap_pars_fragment:Dg,alphatest_fragment:Ng,alphatest_pars_fragment:Ug,aomap_fragment:Fg,aomap_pars_fragment:Og,batching_pars_vertex:Bg,batching_vertex:zg,begin_vertex:kg,beginnormal_vertex:Vg,bsdfs:Hg,iridescence_fragment:Gg,bumpmap_pars_fragment:Wg,clipping_planes_fragment:$g,clipping_planes_pars_fragment:Xg,clipping_planes_pars_vertex:qg,clipping_planes_vertex:Yg,color_fragment:Zg,color_pars_fragment:Jg,color_pars_vertex:Kg,color_vertex:jg,common:Qg,cube_uv_reflection_fragment:t0,defaultnormal_vertex:e0,displacementmap_pars_vertex:n0,displacementmap_vertex:i0,emissivemap_fragment:s0,emissivemap_pars_fragment:r0,colorspace_fragment:a0,colorspace_pars_fragment:o0,envmap_fragment:l0,envmap_common_pars_fragment:c0,envmap_pars_fragment:h0,envmap_pars_vertex:u0,envmap_physical_pars_fragment:M0,envmap_vertex:d0,fog_vertex:f0,fog_pars_vertex:p0,fog_fragment:m0,fog_pars_fragment:g0,gradientmap_pars_fragment:_0,lightmap_pars_fragment:x0,lights_lambert_fragment:v0,lights_lambert_pars_fragment:y0,lights_pars_begin:S0,lights_toon_fragment:b0,lights_toon_pars_fragment:w0,lights_phong_fragment:E0,lights_phong_pars_fragment:T0,lights_physical_fragment:A0,lights_physical_pars_fragment:C0,lights_fragment_begin:R0,lights_fragment_maps:I0,lights_fragment_end:P0,lightprobes_pars_fragment:L0,logdepthbuf_fragment:D0,logdepthbuf_pars_fragment:N0,logdepthbuf_pars_vertex:U0,logdepthbuf_vertex:F0,map_fragment:O0,map_pars_fragment:B0,map_particle_fragment:z0,map_particle_pars_fragment:k0,metalnessmap_fragment:V0,metalnessmap_pars_fragment:H0,morphinstance_vertex:G0,morphcolor_vertex:W0,morphnormal_vertex:$0,morphtarget_pars_vertex:X0,morphtarget_vertex:q0,normal_fragment_begin:Y0,normal_fragment_maps:Z0,normal_pars_fragment:J0,normal_pars_vertex:K0,normal_vertex:j0,normalmap_pars_fragment:Q0,clearcoat_normal_fragment_begin:t_,clearcoat_normal_fragment_maps:e_,clearcoat_pars_fragment:n_,iridescence_pars_fragment:i_,opaque_fragment:s_,packing:r_,premultiplied_alpha_fragment:a_,project_vertex:o_,dithering_fragment:l_,dithering_pars_fragment:c_,roughnessmap_fragment:h_,roughnessmap_pars_fragment:u_,shadowmap_pars_fragment:d_,shadowmap_pars_vertex:f_,shadowmap_vertex:p_,shadowmask_pars_fragment:m_,skinbase_vertex:g_,skinning_pars_vertex:__,skinning_vertex:x_,skinnormal_vertex:v_,specularmap_fragment:y_,specularmap_pars_fragment:S_,tonemapping_fragment:M_,tonemapping_pars_fragment:b_,transmission_fragment:w_,transmission_pars_fragment:E_,uv_pars_fragment:T_,uv_pars_vertex:A_,uv_vertex:C_,worldpos_vertex:R_,background_vert:I_,background_frag:P_,backgroundCube_vert:L_,backgroundCube_frag:D_,cube_vert:N_,cube_frag:U_,depth_vert:F_,depth_frag:O_,distance_vert:B_,distance_frag:z_,equirect_vert:k_,equirect_frag:V_,linedashed_vert:H_,linedashed_frag:G_,meshbasic_vert:W_,meshbasic_frag:$_,meshlambert_vert:X_,meshlambert_frag:q_,meshmatcap_vert:Y_,meshmatcap_frag:Z_,meshnormal_vert:J_,meshnormal_frag:K_,meshphong_vert:j_,meshphong_frag:Q_,meshphysical_vert:tx,meshphysical_frag:ex,meshtoon_vert:nx,meshtoon_frag:ix,points_vert:sx,points_frag:rx,shadow_vert:ax,shadow_frag:ox,sprite_vert:lx,sprite_frag:cx},Nt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Hn={basic:{uniforms:Un([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Un([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Un([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Un([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Un([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new le(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Un([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Un([Nt.points,Nt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Un([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Un([Nt.common,Nt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Un([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Un([Nt.sprite,Nt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Un([Nt.common,Nt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Un([Nt.lights,Nt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Hn.physical={uniforms:Un([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};var pc={r:0,b:0,g:0},hx=new We,ip=new fe;ip.set(-1,0,0,0,1,0,0,0,1);function ux(i,t,e,n,s,r){let a=new le(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function m(I){let L=I.isScene===!0?I.background:null;if(L&&L.isTexture){let b=I.backgroundBlurriness>0;L=t.get(L,b)}return L}function g(I){let L=!1,b=m(I);b===null?f(a,o):b&&b.isColor&&(f(b,1),L=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function w(I,L){let b=m(L);b&&(b.isCubeTexture||b.mapping===Fa)?(c===void 0&&(c=new Nn(new Mr(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:ks(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hx.makeRotationFromEuler(L.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ip),c.material.toneMapped=Te.getTransfer(b.colorSpace)!==ze,(h!==b||p!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,p=b.version,u=i.toneMapping),c.layers.enableAll(),I.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Nn(new Ea(2,2),new Sn({name:"BackgroundMaterial",uniforms:ks(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=Te.getTransfer(b.colorSpace)!==ze,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||p!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,p=b.version,u=i.toneMapping),l.layers.enableAll(),I.unshift(l,l.geometry,l.material,0,0,null))}function f(I,L){I.getRGB(pc,ru(i)),e.buffers.color.setClear(pc.r,pc.g,pc.b,L,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(I,L=1){a.set(I),o=L,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(I){o=I,f(a,o)},render:g,addToRenderList:w,dispose:d}}function dx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(G,Q,tt,H,J){let lt=!1,st=p(G,H,tt,Q);r!==st&&(r=st,c(r.object)),lt=m(G,H,tt,J),lt&&g(G,H,tt,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(lt||a)&&(a=!1,b(G,Q,tt,H),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return i.createVertexArray()}function c(G){return i.bindVertexArray(G)}function h(G){return i.deleteVertexArray(G)}function p(G,Q,tt,H){let J=H.wireframe===!0,lt=n[Q.id];lt===void 0&&(lt={},n[Q.id]=lt);let st=G.isInstancedMesh===!0?G.id:0,_t=lt[st];_t===void 0&&(_t={},lt[st]=_t);let rt=_t[tt.id];rt===void 0&&(rt={},_t[tt.id]=rt);let ct=rt[J];return ct===void 0&&(ct=u(l()),rt[J]=ct),ct}function u(G){let Q=[],tt=[],H=[];for(let J=0;J<e;J++)Q[J]=0,tt[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:tt,attributeDivisors:H,object:G,attributes:{},index:null}}function m(G,Q,tt,H){let J=r.attributes,lt=Q.attributes,st=0,_t=tt.getAttributes();for(let rt in _t)if(_t[rt].location>=0){let ft=J[rt],Kt=lt[rt];if(Kt===void 0&&(rt==="instanceMatrix"&&G.instanceMatrix&&(Kt=G.instanceMatrix),rt==="instanceColor"&&G.instanceColor&&(Kt=G.instanceColor)),ft===void 0||ft.attribute!==Kt||Kt&&ft.data!==Kt.data)return!0;st++}return r.attributesNum!==st||r.index!==H}function g(G,Q,tt,H){let J={},lt=Q.attributes,st=0,_t=tt.getAttributes();for(let rt in _t)if(_t[rt].location>=0){let ft=lt[rt];ft===void 0&&(rt==="instanceMatrix"&&G.instanceMatrix&&(ft=G.instanceMatrix),rt==="instanceColor"&&G.instanceColor&&(ft=G.instanceColor));let Kt={};Kt.attribute=ft,ft&&ft.data&&(Kt.data=ft.data),J[rt]=Kt,st++}r.attributes=J,r.attributesNum=st,r.index=H}function w(){let G=r.newAttributes;for(let Q=0,tt=G.length;Q<tt;Q++)G[Q]=0}function f(G){d(G,0)}function d(G,Q){let tt=r.newAttributes,H=r.enabledAttributes,J=r.attributeDivisors;tt[G]=1,H[G]===0&&(i.enableVertexAttribArray(G),H[G]=1),J[G]!==Q&&(i.vertexAttribDivisor(G,Q),J[G]=Q)}function I(){let G=r.newAttributes,Q=r.enabledAttributes;for(let tt=0,H=Q.length;tt<H;tt++)Q[tt]!==G[tt]&&(i.disableVertexAttribArray(tt),Q[tt]=0)}function L(G,Q,tt,H,J,lt,st){st===!0?i.vertexAttribIPointer(G,Q,tt,J,lt):i.vertexAttribPointer(G,Q,tt,H,J,lt)}function b(G,Q,tt,H){w();let J=H.attributes,lt=tt.getAttributes(),st=Q.defaultAttributeValues;for(let _t in lt){let rt=lt[_t];if(rt.location>=0){let ct=J[_t];if(ct===void 0&&(_t==="instanceMatrix"&&G.instanceMatrix&&(ct=G.instanceMatrix),_t==="instanceColor"&&G.instanceColor&&(ct=G.instanceColor)),ct!==void 0){let ft=ct.normalized,Kt=ct.itemSize,$t=t.get(ct);if($t===void 0)continue;let Re=$t.buffer,Se=$t.type,Ee=$t.bytesPerElement,nt=Se===i.INT||Se===i.UNSIGNED_INT||ct.gpuType===Rl;if(ct.isInterleavedBufferAttribute){let ht=ct.data,Lt=ht.stride,ie=ct.offset;if(ht.isInstancedInterleavedBuffer){for(let Ct=0;Ct<rt.locationSize;Ct++)d(rt.location+Ct,ht.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ct=0;Ct<rt.locationSize;Ct++)f(rt.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let Ct=0;Ct<rt.locationSize;Ct++)L(rt.location+Ct,Kt/rt.locationSize,Se,ft,Lt*Ee,(ie+Kt/rt.locationSize*Ct)*Ee,nt)}else{if(ct.isInstancedBufferAttribute){for(let ht=0;ht<rt.locationSize;ht++)d(rt.location+ht,ct.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ht=0;ht<rt.locationSize;ht++)f(rt.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let ht=0;ht<rt.locationSize;ht++)L(rt.location+ht,Kt/rt.locationSize,Se,ft,Kt*Ee,Kt/rt.locationSize*ht*Ee,nt)}}else if(st!==void 0){let ft=st[_t];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(rt.location,ft);break;case 3:i.vertexAttrib3fv(rt.location,ft);break;case 4:i.vertexAttrib4fv(rt.location,ft);break;default:i.vertexAttrib1fv(rt.location,ft)}}}}I()}function M(){T();for(let G in n){let Q=n[G];for(let tt in Q){let H=Q[tt];for(let J in H){let lt=H[J];for(let st in lt)h(lt[st].object),delete lt[st];delete H[J]}}delete n[G]}}function C(G){if(n[G.id]===void 0)return;let Q=n[G.id];for(let tt in Q){let H=Q[tt];for(let J in H){let lt=H[J];for(let st in lt)h(lt[st].object),delete lt[st];delete H[J]}}delete n[G.id]}function U(G){for(let Q in n){let tt=n[Q];for(let H in tt){let J=tt[H];if(J[G.id]===void 0)continue;let lt=J[G.id];for(let st in lt)h(lt[st].object),delete lt[st];delete J[G.id]}}}function v(G){for(let Q in n){let tt=n[Q],H=G.isInstancedMesh===!0?G.id:0,J=tt[H];if(J!==void 0){for(let lt in J){let st=J[lt];for(let _t in st)h(st[_t].object),delete st[_t];delete J[lt]}delete tt[H],Object.keys(tt).length===0&&delete n[Q]}}}function T(){V(),a=!0,r!==s&&(r=s,c(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:V,dispose:M,releaseStatesOfGeometry:C,releaseStatesOfObject:v,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:f,disableUnusedAttributes:I}}function fx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function px(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(U){return!(U!==fi&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){let v=U===Ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Xn&&U!==wi&&!v&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:w,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:b,maxSamples:M,samples:C}}function mx(i){let t=this,e=null,n=0,s=!1,r=!1,a=new _i,o=new fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let m=p.length!==0||u||n!==0||s;return s=u,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){e=h(p,u,0)},this.setState=function(p,u,m){let g=p.clippingPlanes,w=p.clipIntersection,f=p.clipShadows,d=i.get(p);if(!s||g===null||g.length===0||r&&!f)r?h(null):c();else{let I=r?0:n,L=I*4,b=d.clippingState||null;l.value=b,b=h(g,u,L,m);for(let M=0;M!==L;++M)b[M]=e[M];d.clippingState=b,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,u,m,g){let w=p!==null?p.length:0,f=null;if(w!==0){if(f=l.value,g!==!0||f===null){let d=m+w*4,I=u.matrixWorldInverse;o.getNormalMatrix(I),(f===null||f.length<d)&&(f=new Float32Array(d));for(let L=0,b=m;L!==w;++L,b+=4)a.copy(p[L]).applyMatrix4(I,o),a.normal.toArray(f,b),f[b+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,f}}var Lr=4,gx=6,_x=20,xx=256,$a=new Tr,Uf=new le,cu=null,hu=0,uu=0,du=!1,vx=new F,Vs=new F,gc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=vx}=r;cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(cu,hu,uu),this._renderer.xr.enabled=du,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Ei,format:fi,colorSpace:ra,depthBuffer:!1},s=Ff(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ff(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=yx(r)),this._blurMaterial=Mx(r,t,e),this._ggxMaterial=Sx(r,t,e)}return s}_compileMaterial(t){let e=new Nn(new rn,t);this._renderer.compile(e,$a)}_sceneToCubeUV(t,e,n,s,r){let l=new Dn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(Uf),p.toneMapping=Mi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nn(new Mr,new fa({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));let w=this._backgroundBox,f=w.material,d=!1,I=t.background;I?I.isColor&&(f.color.copy(I),t.background=null,d=!0):(f.color.copy(Uf),d=!0);for(let L=0;L<6;L++){let b=L%3;b===0?(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[L],r.y,r.z)):b===1?(l.up.set(0,0,c[L]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[L],r.z)):(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[L]));let M=this._cubeSize;Pr(s,b*M,L>2?M:0,M,M),p.setRenderTarget(s),d&&p.render(w,l),p.render(t,l)}p.toneMapping=m,p.autoClear=u,t.background=I}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===gs||t.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,$a)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,m=p*u,{_lodMax:g}=this,w=this._sizeLods[n],f=3*w*(n>g-Lr?n-g+Lr:0),d=4*(this._cubeSize-w);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=g-e,Pr(r,f,d,3*w,2*w),s.setRenderTarget(r),s.render(o,$a),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Pr(t,f,d,3*w,2*w),s.setRenderTarget(t),s.render(o,$a)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-Lr?s-this._lodMax+Lr:0),u=4*(this._cubeSize-h);Pr(e,p,u,3*h,2*h),a.setRenderTarget(e),a.render(l,$a)}};function yx(i){let t=[],e=[],n=i,s=i-Lr+1+gx;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,m=3,g=new Float32Array(m*u*p),w=new Float32Array(m*u*p);for(let d=0;d<p;d++){let I=d%3*2/3-1,L=d>2?0:-1,b=[I,L,0,I+2/3,L,0,I+2/3,L+1,0,I,L,0,I+2/3,L+1,0,I,L+1,0];g.set(b,m*u*d);for(let M=0;M<u;M++){let C=h[M*2]*2-1,U=h[M*2+1]*2-1;d===0?Vs.set(1,U,C):d===1?Vs.set(-C,1,-U):d===2?Vs.set(-C,U,1):d===3?Vs.set(-1,U,-C):d===4?Vs.set(-C,-1,U):Vs.set(C,U,-1),Vs.toArray(w,(d*u+M)*m)}}let f=new rn;f.setAttribute("position",new Ye(g,m)),f.setAttribute("outputDirection",new Ye(w,m)),e.push(new Nn(f,null)),n>Lr&&n--}return{lodMeshes:e,sizeLods:t}}function Ff(i,t,e){let n=new $n(i,t,e);return n.texture.mapping=Fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Sx(i,t,e){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Mx(i,t,e){return new Sn({name:"SphericalGaussianBlur",defines:{SAMPLES:_x,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Of(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Bf(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var _c=class extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ma(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mr(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:Ui});r.uniforms.tEquirect.value=e;let a=new Nn(s,r),o=e.minFilter;return e.minFilter===_s&&(e.minFilter=bn),new bl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function bx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Tl||m===Al)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let w=new _c(g.height);return w.fromEquirectangularTexture(i,u),t.set(u,w),u.addEventListener("dispose",c),o(w.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let m=u.mapping,g=m===Tl||m===Al,w=m===gs||m===zs;if(g||w){let f=e.get(u),d=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new gc(i)),f=g?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{let I=u.image;return g&&I&&I.height>0||w&&I&&l(I)?(n===null&&(n=new gc(i)),f=g?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,m){return m===Tl?u.mapping=gs:m===Al&&(u.mapping=zs),u}function l(u){let m=0,g=6;for(let w=0;w<g;w++)u[w]!==void 0&&m++;return m===g}function c(u){let m=u.target;m.removeEventListener("dispose",c);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function wx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ps("WebGLRenderer: "+n+" extension not supported."),s}}}function Ex(i,t,e,n){let s={},r=new WeakMap;function a(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(p){let u=p.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER)}function c(p){let u=[],m=p.index,g=p.attributes.position,w=0;if(g===void 0)return;if(m!==null){let I=m.array;w=m.version;for(let L=0,b=I.length;L<b;L+=3){let M=I[L+0],C=I[L+1],U=I[L+2];u.push(M,C,C,U,U,M)}}else{let I=g.array;w=g.version;for(let L=0,b=I.length/3-1;L<b;L+=3){let M=L+0,C=L+1,U=L+2;u.push(M,C,C,U,U,M)}}let f=new(g.count>=65535?da:ua)(u,1);f.version=w;let d=r.get(p);d&&t.remove(d),r.set(p,f)}function h(p){let u=r.get(p);if(u){let m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function Tx(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,u){i.drawElements(n,u,r,p*a),e.update(u,n,1)}function c(p,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,p*a,m),e.update(u,n,m))}function h(p,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,m);let w=0;for(let f=0;f<m;f++)w+=u[f];e.update(w,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ax(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ce("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cx(i,t,e){let n=new WeakMap,s=new ke;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==p){let T=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],I=o.morphAttributes.color||[],L=0;m===!0&&(L=1),g===!0&&(L=2),w===!0&&(L=3);let b=o.attributes.position.count*L,M=1;b>t.maxTextureSize&&(M=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let C=new Float32Array(b*M*4*p),U=new ca(C,b,M,p);U.type=wi,U.needsUpdate=!0;let v=L*4;for(let V=0;V<p;V++){let G=f[V],Q=d[V],tt=I[V],H=b*M*4*V;for(let J=0;J<G.count;J++){let lt=J*v;m===!0&&(s.fromBufferAttribute(G,J),C[H+lt+0]=s.x,C[H+lt+1]=s.y,C[H+lt+2]=s.z,C[H+lt+3]=0),g===!0&&(s.fromBufferAttribute(Q,J),C[H+lt+4]=s.x,C[H+lt+5]=s.y,C[H+lt+6]=s.z,C[H+lt+7]=0),w===!0&&(s.fromBufferAttribute(tt,J),C[H+lt+8]=s.x,C[H+lt+9]=s.y,C[H+lt+10]=s.z,C[H+lt+11]=tt.itemSize===4?s.w:1)}}u={count:p,texture:U,size:new Dt(b,M)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let w=0;w<c.length;w++)m+=c[w];let g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Rx(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,u=t.get(c,p);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ix={[zh]:"LINEAR_TONE_MAPPING",[kh]:"REINHARD_TONE_MAPPING",[Vh]:"CINEON_TONE_MAPPING",[Hh]:"ACES_FILMIC_TONE_MAPPING",[Wh]:"AGX_TONE_MAPPING",[$h]:"NEUTRAL_TONE_MAPPING",[Gh]:"CUSTOM_TONE_MAPPING"};function Px(i,t,e,n,s,r){let a=new $n(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new rn;c.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new un([0,2,0,0,2,0],2));let h=new cl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Nn(c,h),u=new Tr(-1,1,1,-1,0,1),m=null,g=null,w=!1,f,d=null,I=[],L=!1;this.setSize=function(b,M){a.setSize(b,M),o!==null&&o.setSize(b,M),l!==null&&l.setSize(b,M);for(let C=0;C<I.length;C++){let U=I[C];U.setSize&&U.setSize(b,M)}},this.setEffects=function(b){I=b,L=I.length>0&&I[0].isRenderPass===!0;let M=a.width,C=a.height;I.length>0&&o===null&&(o=new $n(M,C,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),l=new $n(M,C,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<I.length;U++){let v=I[U];v.setSize&&v.setSize(M,C)}},this.begin=function(b,M){if(w||b.toneMapping===Mi&&I.length===0)return!1;if(d=M,M!==null){let C=M.width,U=M.height;(a.width!==C||a.height!==U)&&this.setSize(C,U)}return L===!1&&b.setRenderTarget(a),f=b.toneMapping,b.toneMapping=Mi,!0},this.hasRenderPass=function(){return L},this.end=function(b,M){b.toneMapping=f,w=!0;let C=a,U=o;for(let v=0;v<I.length;v++){let T=I[v];T.enabled!==!1&&(T.render(b,U,C,M),T.needsSwap!==!1&&(C=U,U=U===o?l:o))}if(m!==b.outputColorSpace||g!==b.toneMapping){m=b.outputColorSpace,g=b.toneMapping,h.defines={},Te.getTransfer(m)===ze&&(h.defines.SRGB_TRANSFER="");let v=Ix[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=C.texture,b.setRenderTarget(d),b.render(p,u),d=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var sp=new Wn,mu=new hs(1,1),rp=new ca,ap=new Zo,op=new ma,zf=[],kf=[],Vf=new Float32Array(16),Hf=new Float32Array(9),Gf=new Float32Array(4);function Nr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=zf[s];if(r===void 0&&(r=new Float32Array(s),zf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function dn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yc(i,t){let e=kf[t];e===void 0&&(e=new Int32Array(t),kf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2fv(this.addr,t),fn(e,t)}}function Nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(dn(e,t))return;i.uniform3fv(this.addr,t),fn(e,t)}}function Ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4fv(this.addr,t),fn(e,t)}}function Fx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;Gf.set(n),i.uniformMatrix2fv(this.addr,!1,Gf),fn(e,n)}}function Ox(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;Hf.set(n),i.uniformMatrix3fv(this.addr,!1,Hf),fn(e,n)}}function Bx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;Vf.set(n),i.uniformMatrix4fv(this.addr,!1,Vf),fn(e,n)}}function zx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function kx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2iv(this.addr,t),fn(e,t)}}function Vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;i.uniform3iv(this.addr,t),fn(e,t)}}function Hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4iv(this.addr,t),fn(e,t)}}function Gx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2uiv(this.addr,t),fn(e,t)}}function $x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;i.uniform3uiv(this.addr,t),fn(e,t)}}function Xx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4uiv(this.addr,t),fn(e,t)}}function qx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mu.compareFunction=e.isReversedDepthBuffer()?fc:dc,r=mu):r=sp,e.setTexture2D(t||r,s)}function Yx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ap,s)}function Zx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||op,s)}function Jx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||rp,s)}function Kx(i){switch(i){case 5126:return Lx;case 35664:return Dx;case 35665:return Nx;case 35666:return Ux;case 35674:return Fx;case 35675:return Ox;case 35676:return Bx;case 5124:case 35670:return zx;case 35667:case 35671:return kx;case 35668:case 35672:return Vx;case 35669:case 35673:return Hx;case 5125:return Gx;case 36294:return Wx;case 36295:return $x;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Jx}}function jx(i,t){i.uniform1fv(this.addr,t)}function Qx(i,t){let e=Nr(t,this.size,2);i.uniform2fv(this.addr,e)}function tv(i,t){let e=Nr(t,this.size,3);i.uniform3fv(this.addr,e)}function ev(i,t){let e=Nr(t,this.size,4);i.uniform4fv(this.addr,e)}function nv(i,t){let e=Nr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function iv(i,t){let e=Nr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sv(i,t){let e=Nr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function rv(i,t){i.uniform1iv(this.addr,t)}function av(i,t){i.uniform2iv(this.addr,t)}function ov(i,t){i.uniform3iv(this.addr,t)}function lv(i,t){i.uniform4iv(this.addr,t)}function cv(i,t){i.uniform1uiv(this.addr,t)}function hv(i,t){i.uniform2uiv(this.addr,t)}function uv(i,t){i.uniform3uiv(this.addr,t)}function dv(i,t){i.uniform4uiv(this.addr,t)}function fv(i,t,e){let n=this.cache,s=t.length,r=yc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=mu:a=sp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function pv(i,t,e){let n=this.cache,s=t.length,r=yc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ap,r[a])}function mv(i,t,e){let n=this.cache,s=t.length,r=yc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||op,r[a])}function gv(i,t,e){let n=this.cache,s=t.length,r=yc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||rp,r[a])}function _v(i){switch(i){case 5126:return jx;case 35664:return Qx;case 35665:return tv;case 35666:return ev;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return av;case 35668:case 35672:return ov;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return hv;case 36295:return uv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}var gu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kx(e.type)}},_u=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_v(e.type)}},xu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},fu=/(\w+)(\])?(\[|\.)?/g;function Wf(i,t){i.seq.push(t),i.map[t.id]=t}function xv(i,t,e){let n=i.name,s=n.length;for(fu.lastIndex=0;;){let r=fu.exec(n),a=fu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wf(e,c===void 0?new gu(o,i,t):new _u(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new xu(o),Wf(e,p)),e=p}}}var Dr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);xv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function $f(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var vv=37297,yv=0;function Sv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Xf=new fe;function Mv(i){Te._getMatrix(Xf,Te.workingColorSpace,i);let t=`mat3( ${Xf.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(i)){case aa:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Sv(i.getShaderSource(t),o)}else return r}function bv(i,t){let e=Mv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var wv={[zh]:"Linear",[kh]:"Reinhard",[Vh]:"Cineon",[Hh]:"ACESFilmic",[Wh]:"AgX",[$h]:"Neutral",[Gh]:"Custom"};function Ev(i,t){let e=wv[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mc=new F;function Tv(){Te.getLuminanceCoefficients(mc);let i=mc.x.toFixed(4),t=mc.y.toFixed(4),e=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Av(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function Cv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function qa(i){return i!==""}function Yf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function vu(i){return i.replace(Iv,Lv)}var Pv=new Map;function Lv(i,t){let e=ye[t];if(e===void 0){let n=Pv.get(t);if(n!==void 0)e=ye[n],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return vu(e)}var Dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jf(i){return i.replace(Dv,Nv)}function Nv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Uv={[Ua]:"SHADOWMAP_TYPE_PCF",[Ar]:"SHADOWMAP_TYPE_VSM"};function Fv(i){return Uv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ov={[gs]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[Fa]:"ENVMAP_TYPE_CUBE_UV"};function Bv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ov[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var zv={[zs]:"ENVMAP_MODE_REFRACTION"};function kv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":zv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Vv={[El]:"ENVMAP_BLENDING_MULTIPLY",[df]:"ENVMAP_BLENDING_MIX",[ff]:"ENVMAP_BLENDING_ADD"};function Hv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Vv[i.combine]||"ENVMAP_BLENDING_NONE"}function Gv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Wv(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Fv(e),c=Bv(e),h=kv(e),p=Hv(e),u=Gv(e),m=Av(e),g=Cv(r),w=s.createProgram(),f,d,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qa).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qa).join(`
`),d.length>0&&(d+=`
`)):(f=[Kf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),d=[Kf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?ye.tonemapping_pars_fragment:"",e.toneMapping!==Mi?Ev("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,bv("linearToOutputTexel",e.outputColorSpace),Tv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qa).join(`
`)),a=vu(a),a=Yf(a,e),a=Zf(a,e),o=vu(o),o=Yf(o,e),o=Zf(o,e),a=Jf(a),o=Jf(o),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let L=I+f+a,b=I+d+o,M=$f(s,s.VERTEX_SHADER,L),C=$f(s,s.FRAGMENT_SHADER,b);s.attachShader(w,M),s.attachShader(w,C),e.index0AttributeName!==void 0?s.bindAttribLocation(w,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function U(G){if(i.debug.checkShaderErrors){let Q=s.getProgramInfoLog(w)||"",tt=s.getShaderInfoLog(M)||"",H=s.getShaderInfoLog(C)||"",J=Q.trim(),lt=tt.trim(),st=H.trim(),_t=!0,rt=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(_t=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,w,M,C);else{let ct=qf(s,M,"vertex"),ft=qf(s,C,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+ct+`
`+ft)}else J!==""?oe("WebGLProgram: Program Info Log:",J):(lt===""||st==="")&&(rt=!1);rt&&(G.diagnostics={runnable:_t,programLog:J,vertexShader:{log:lt,prefix:f},fragmentShader:{log:st,prefix:d}})}s.deleteShader(M),s.deleteShader(C),v=new Dr(s,w),T=Rv(s,w)}let v;this.getUniforms=function(){return v===void 0&&U(this),v};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(w,vv)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yv++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=M,this.fragmentShader=C,this}var $v=0,yu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Su(t),e.set(t,n)),n}},Su=class{constructor(t){this.id=$v++,this.code=t,this.usedTimes=0}};function Xv(i){return i===vs||i===Ha||i===Ga}function qv(i,t,e,n,s,r){let a=new vr,o=new yu,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,u=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function w(v,T,V,G,Q,tt){let H=G.fog,J=Q.geometry,lt=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?G.environment:null,st=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,_t=t.get(v.envMap||lt,st),rt=_t&&_t.mapping===Fa?_t.image.height:null,ct=m[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&oe("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let ft=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Kt=ft!==void 0?ft.length:0,$t=0;J.morphAttributes.position!==void 0&&($t=1),J.morphAttributes.normal!==void 0&&($t=2),J.morphAttributes.color!==void 0&&($t=3);let Re,Se,Ee,nt;if(ct){let Oe=Hn[ct];Re=Oe.vertexShader,Se=Oe.fragmentShader}else{Re=v.vertexShader,Se=v.fragmentShader;let Oe=o.getVertexShaderStage(v),be=o.getFragmentShaderStage(v);o.update(v,Oe,be),Ee=Oe.id,nt=be.id}let ht=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),ie=Q.isInstancedMesh===!0,Ct=Q.isBatchedMesh===!0,qt=!!v.map,Ie=!!v.matcap,N=!!_t,mt=!!v.aoMap,yt=!!v.lightMap,vt=!!v.bumpMap&&v.wireframe===!1,St=!!v.normalMap,ne=!!v.displacementMap,ee=!!v.emissiveMap,kt=!!v.metalnessMap,he=!!v.roughnessMap,O=v.anisotropy>0,De=v.clearcoat>0,xe=v.dispersion>0,E=v.retroreflectivity>0,x=v.iridescence>0,$=v.sheen>0,j=v.transmission>0,at=O&&!!v.anisotropyMap,Mt=De&&!!v.clearcoatMap,Tt=De&&!!v.clearcoatNormalMap,ot=De&&!!v.clearcoatRoughnessMap,ut=x&&!!v.iridescenceMap,At=x&&!!v.iridescenceThicknessMap,Zt=$&&!!v.sheenColorMap,Ut=$&&!!v.sheenRoughnessMap,Rt=!!v.specularMap,jt=!!v.specularColorMap,ae=!!v.specularIntensityMap,se=j&&!!v.transmissionMap,z=j&&!!v.thicknessMap,wt=!!v.gradientMap,dt=!!v.alphaMap,Pt=v.alphaTest>0,Bt=!!v.alphaHash,gt=!!v.extensions,Qt=Mi;v.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Qt=i.toneMapping);let Jt={shaderID:ct,shaderType:v.type,shaderName:v.name,vertexShader:Re,fragmentShader:Se,defines:v.defines,customVertexShaderID:Ee,customFragmentShaderID:nt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ct,batchingColor:Ct&&Q._colorsTexture!==null,instancing:ie,instancingColor:ie&&Q.instanceColor!==null,instancingMorph:ie&&Q.morphTexture!==null,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Te.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:qt,matcap:Ie,envMap:N,envMapMode:N&&_t.mapping,envMapCubeUVHeight:rt,aoMap:mt,lightMap:yt,bumpMap:vt,normalMap:St,displacementMap:ne,emissiveMap:ee,normalMapObjectSpace:St&&v.normalMapType===gf,normalMapTangentSpace:St&&v.normalMapType===uc,packedNormalMap:St&&v.normalMapType===uc&&Xv(v.normalMap.format),metalnessMap:kt,roughnessMap:he,anisotropy:O,anisotropyMap:at,clearcoat:De,clearcoatMap:Mt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:ot,dispersion:xe,retroreflection:E,iridescence:x,iridescenceMap:ut,iridescenceThicknessMap:At,sheen:$,sheenColorMap:Zt,sheenRoughnessMap:Ut,specularMap:Rt,specularColorMap:jt,specularIntensityMap:ae,transmission:j,transmissionMap:se,thicknessMap:z,gradientMap:wt,opaque:v.transparent===!1&&v.blending===Cr&&v.alphaToCoverage===!1,alphaMap:dt,alphaTest:Pt,alphaHash:Bt,combine:v.combine,mapUv:qt&&g(v.map.channel),aoMapUv:mt&&g(v.aoMap.channel),lightMapUv:yt&&g(v.lightMap.channel),bumpMapUv:vt&&g(v.bumpMap.channel),normalMapUv:St&&g(v.normalMap.channel),displacementMapUv:ne&&g(v.displacementMap.channel),emissiveMapUv:ee&&g(v.emissiveMap.channel),metalnessMapUv:kt&&g(v.metalnessMap.channel),roughnessMapUv:he&&g(v.roughnessMap.channel),anisotropyMapUv:at&&g(v.anisotropyMap.channel),clearcoatMapUv:Mt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:At&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&g(v.sheenRoughnessMap.channel),specularMapUv:Rt&&g(v.specularMap.channel),specularColorMapUv:jt&&g(v.specularColorMap.channel),specularIntensityMapUv:ae&&g(v.specularIntensityMap.channel),transmissionMapUv:se&&g(v.transmissionMap.channel),thicknessMapUv:z&&g(v.thicknessMap.channel),alphaMapUv:dt&&g(v.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(St||O),vertexNormals:!!J.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!J.attributes.uv&&(qt||dt),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||J.attributes.normal===void 0&&St===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Lt,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Kt,morphTextureStride:$t,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:tt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,decodeVideoTexture:qt&&v.map.isVideoTexture===!0&&Te.getTransfer(v.map.colorSpace)===ze,decodeVideoTextureEmissive:ee&&v.emissiveMap.isVideoTexture===!0&&Te.getTransfer(v.emissiveMap.colorSpace)===ze,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ni,flipSided:v.side===Vn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:gt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&v.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Jt.vertexUv1s=l.has(1),Jt.vertexUv2s=l.has(2),Jt.vertexUv3s=l.has(3),l.clear(),Jt}function f(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let V in v.defines)T.push(V),T.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(d(T,v),I(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function d(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function I(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function L(v){let T=m[v.type],V;if(T){let G=Hn[T];V=Wa.clone(G.uniforms)}else V=v.uniforms;return V}function b(v,T){let V=h.get(T);return V!==void 0?++V.usedTimes:(V=new Wv(i,T,v,s),c.push(V),h.set(T,V)),V}function M(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function C(v){o.remove(v)}function U(){o.dispose()}return{getParameters:w,getProgramCacheKey:f,getUniforms:L,acquireProgram:b,releaseProgram:M,releaseShaderCache:C,programs:c,dispose:U}}function Yv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Zv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function jf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,g,w,f,d){let I=i[t];return I===void 0?(I={id:u.id,object:u,geometry:m,material:g,materialVariant:a(u),groupOrder:w,renderOrder:u.renderOrder,z:f,group:d},i[t]=I):(I.id=u.id,I.object=u,I.geometry=m,I.material=g,I.materialVariant=a(u),I.groupOrder=w,I.renderOrder=u.renderOrder,I.z=f,I.group=d),t++,I}function l(u,m,g,w,f,d,I){I.reversedDepth===!0&&(f=-f);let L=o(u,m,g,w,f,d);g.transmission>0?n.push(L):g.transparent===!0?s.push(L):e.push(L)}function c(u,m,g,w,f,d){let I=o(u,m,g,w,f,d);g.transmission>0?n.unshift(I):g.transparent===!0?s.unshift(I):e.unshift(I)}function h(u,m){e.length>1&&e.sort(u||Zv),n.length>1&&n.sort(m||jf),s.length>1&&s.sort(m||jf)}function p(){for(let u=t,m=i.length;u<m;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function Jv(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Qf,i.set(n,[a])):s>=r.length?(a=new Qf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Kv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new le};break;case"SpotLight":e={position:new F,direction:new F,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function jv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Qv=0;function ty(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ey(i){let t=new Kv,e=jv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new We,a=new We;function o(c){let h=0,p=0,u=0;for(let Q=0;Q<9;Q++)n.probe[Q].set(0,0,0);let m=0,g=0,w=0,f=0,d=0,I=0,L=0,b=0,M=0,C=0,U=0,v=0,T=0,V=0;c.sort(ty);for(let Q=0,tt=c.length;Q<tt;Q++){let H=c[Q],J=H.color,lt=H.intensity,st=H.distance,_t=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===vs?_t=H.shadow.map.texture:_t=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)h+=J.r*lt,p+=J.g*lt,u+=J.b*lt;else if(H.isLightProbe){for(let rt=0;rt<9;rt++)n.probe[rt].addScaledVector(H.sh.coefficients[rt],lt);V++}else if(H.isSunLight){let rt=t.get(H);if(rt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let ct=H.shadow,ft=e.get(H);ft.shadowIntensity=ct.intensity,ft.shadowBias=ct.bias,ft.shadowNormalBias=ct.normalBias,ft.shadowRadius=ct.radius,ft.shadowMapSize.copy(ct.mapSize).multiply(ct.getFrameExtents()),n.sunShadow[g]=ft,n.sunShadowMap[g]=_t;let Kt=ct.getViewportCount();for(let $t=0;$t<Kt;$t++)n.sunShadowMatrix[w+$t]=ct.getMatrix($t),n.sunShadowCascade[w+$t]=ct._cascadeData[$t];w+=Kt,g++}n.sun[m]=rt,m++}else if(H.isDirectionalLight){let rt=t.get(H);if(rt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let ct=H.shadow,ft=e.get(H);ft.shadowIntensity=ct.intensity,ft.shadowBias=ct.bias,ft.shadowNormalBias=ct.normalBias,ft.shadowRadius=ct.radius,ft.shadowMapSize=ct.mapSize,n.directionalShadow[f]=ft,n.directionalShadowMap[f]=_t,n.directionalShadowMatrix[f]=H.shadow.matrix,M++}n.directional[f]=rt,f++}else if(H.isSpotLight){let rt=t.get(H);rt.position.setFromMatrixPosition(H.matrixWorld),rt.color.copy(J).multiplyScalar(lt),rt.distance=st,rt.coneCos=Math.cos(H.angle),rt.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),rt.decay=H.decay,n.spot[I]=rt;let ct=H.shadow;if(H.map&&(n.spotLightMap[v]=H.map,v++,ct.updateMatrices(H),H.castShadow&&T++),n.spotLightMatrix[I]=ct.matrix,H.castShadow){let ft=e.get(H);ft.shadowIntensity=ct.intensity,ft.shadowBias=ct.bias,ft.shadowNormalBias=ct.normalBias,ft.shadowRadius=ct.radius,ft.shadowMapSize=ct.mapSize,n.spotShadow[I]=ft,n.spotShadowMap[I]=_t,U++}I++}else if(H.isRectAreaLight){let rt=t.get(H);rt.color.copy(J).multiplyScalar(lt),rt.halfWidth.set(H.width*.5,0,0),rt.halfHeight.set(0,H.height*.5,0),n.rectArea[L]=rt,L++}else if(H.isPointLight){let rt=t.get(H);if(rt.color.copy(H.color).multiplyScalar(H.intensity),rt.distance=H.distance,rt.decay=H.decay,H.castShadow){let ct=H.shadow,ft=e.get(H);ft.shadowIntensity=ct.intensity,ft.shadowBias=ct.bias,ft.shadowNormalBias=ct.normalBias,ft.shadowRadius=ct.radius,ft.shadowMapSize=ct.mapSize,ft.shadowCameraNear=ct.camera.near,ft.shadowCameraFar=ct.camera.far,n.pointShadow[d]=ft,n.pointShadowMap[d]=_t,n.pointShadowMatrix[d]=H.shadow.matrix,C++}n.point[d]=rt,d++}else if(H.isHemisphereLight){let rt=t.get(H);rt.skyColor.copy(H.color).multiplyScalar(lt),rt.groundColor.copy(H.groundColor).multiplyScalar(lt),n.hemi[b]=rt,b++}}L>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;let G=n.hash;(G.sunLength!==m||G.directionalLength!==f||G.pointLength!==d||G.spotLength!==I||G.rectAreaLength!==L||G.hemiLength!==b||G.numSunShadows!==g||G.numDirectionalShadows!==M||G.numPointShadows!==C||G.numSpotShadows!==U||G.numSpotMaps!==v||G.numLightProbes!==V)&&(n.sun.length=m,n.directional.length=f,n.spot.length=I,n.rectArea.length=L,n.point.length=d,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=w,n.sunShadowCascade.length=w,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=U,n.spotShadowMap.length=U,n.spotLightMatrix.length=U+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=V,G.sunLength=m,G.directionalLength=f,G.pointLength=d,G.spotLength=I,G.rectAreaLength=L,G.hemiLength=b,G.numSunShadows=g,G.numDirectionalShadows=M,G.numPointShadows=C,G.numSpotShadows=U,G.numSpotMaps=v,G.numLightProbes=V,n.version=Qv++)}function l(c,h){let p=0,u=0,m=0,g=0,w=0,f=0,d=h.matrixWorldInverse;for(let I=0,L=c.length;I<L;I++){let b=c[I];if(b.isSunLight){let M=n.sun[p];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(d),p++}else if(b.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),u++}else if(b.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),g++}else if(b.isRectAreaLight){let M=n.rectArea[w];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),a.identity(),r.copy(b.matrixWorld),r.premultiply(d),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),w++}else if(b.isPointLight){let M=n.point[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),m++}else if(b.isHemisphereLight){let M=n.hemi[f];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(d),f++}}}return{setup:o,setupView:l,state:n}}function tp(i){let t=new ey(i),e=[],n=[],s=[];function r(u){p.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ny(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new tp(i),t.set(s,[o])):r>=a.length?(o=new tp(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sy=`uniform sampler2D shadow_pass;
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
}`,ry=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],ay=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],ep=new We,Xa=new F,pu=new F;function oy(i,t,e){let n=new Sr,s=new Dt,r=new Dt,a=new ke,o=new hl,l=new ul,c={},h=e.maxTextureSize,p={[ms]:Vn,[Vn]:ms,[Ni]:Ni},u=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:iy,fragmentShader:sy}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new rn;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Nn(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ua;let d=this.type;this.render=function(C,U,v){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;this.type===Xd&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ua);let T=i.getRenderTarget(),V=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(Ui),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);let tt=d!==this.type;tt&&U.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(J=>J.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,J=C.length;H<J;H++){let lt=C[H],st=lt.shadow;if(st===void 0){oe("WebGLShadowMap:",lt,"has no shadow.");continue}if(st.autoUpdate===!1&&st.needsUpdate===!1)continue;s.copy(st.mapSize);let _t=st.getFrameExtents();s.multiply(_t),r.copy(st.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/_t.x),s.x=r.x*_t.x,st.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/_t.y),s.y=r.y*_t.y,st.mapSize.y=r.y));let rt=i.state.buffers.depth.getReversed();if(st.camera._reversedDepth=rt,st.map===null||tt===!0){if(st.map!==null&&(st.map.depthTexture!==null&&(st.map.depthTexture.dispose(),st.map.depthTexture=null),st.map.dispose()),this.type===Ar){if(lt.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}st.map=new $n(s.x,s.y,{format:vs,type:Ei,minFilter:bn,magFilter:bn,generateMipmaps:!1}),st.map.texture.name=lt.name+".shadowMap",st.map.depthTexture=new hs(s.x,s.y,wi),st.map.depthTexture.name=lt.name+".shadowMapDepth",st.map.depthTexture.format=Ii,st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=vn,st.map.depthTexture.magFilter=vn}else lt.isPointLight?(st.map=new _c(s.x),st.map.depthTexture=new nl(s.x,bi)):(st.map=new $n(s.x,s.y),st.map.depthTexture=new hs(s.x,s.y,bi)),st.map.depthTexture.name=lt.name+".shadowMap",st.map.depthTexture.format=Ii,this.type===Ua?(st.map.depthTexture.compareFunction=rt?fc:dc,st.map.depthTexture.minFilter=bn,st.map.depthTexture.magFilter=bn):(st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=vn,st.map.depthTexture.magFilter=vn);st.camera.updateProjectionMatrix()}st.map.isWebGLCubeRenderTarget!==!0&&(st.map.width!==s.x||st.map.height!==s.y)&&st.map.setSize(s.x,s.y);let ct=st.map.isWebGLCubeRenderTarget?6:st.getViewportCount();lt.isPointLight!==!0&&st.updateMatrices(lt,v);for(let ft=0;ft<ct;ft++){let Kt=st.getCamera(ft);if(lt.isPointLight){let $t=st.camera,Re=st.matrix,Se=lt.distance||$t.far;Se!==$t.far&&($t.far=Se,$t.updateProjectionMatrix()),Xa.setFromMatrixPosition(lt.matrixWorld),$t.position.copy(Xa),pu.copy($t.position),pu.add(ry[ft]),$t.up.copy(ay[ft]),$t.lookAt(pu),$t.updateMatrixWorld(),Re.makeTranslation(-Xa.x,-Xa.y,-Xa.z),ep.multiplyMatrices($t.projectionMatrix,$t.matrixWorldInverse),st._frustum.setFromProjectionMatrix(ep,$t.coordinateSystem,$t.reversedDepth)}if(st.map.isWebGLCubeRenderTarget)i.setRenderTarget(st.map,ft),i.clear();else{ft===0&&(i.setRenderTarget(st.map),i.clear());let $t=st.getViewport(ft);a.set(r.x*$t.x,r.y*$t.y,r.x*$t.z,r.y*$t.w),Q.viewport(a)}n=st.getFrustum(ft),b(U,v,Kt,lt,this.type)}st.isPointLightShadow!==!0&&this.type===Ar&&I(st,v),st.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(T,V,G)};function I(C,U){let v=t.update(w);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null?C.mapPass=new $n(s.x,s.y,{format:vs,type:Ei}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),u.uniforms.shadow_pass.value=C.map.depthTexture,u.uniforms.resolution.value.set(C.map.width,C.map.height),u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(U,null,v,u,w,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value.set(C.map.width,C.map.height),m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(U,null,v,m,w,null)}function L(C,U,v,T){let V=null,G=v.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(G!==void 0)V=G;else if(V=v.isPointLight===!0?l:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let Q=V.uuid,tt=U.uuid,H=c[Q];H===void 0&&(H={},c[Q]=H);let J=H[tt];J===void 0&&(J=V.clone(),H[tt]=J,U.addEventListener("dispose",M)),V=J}if(V.visible=U.visible,V.wireframe=U.wireframe,T===Ar?V.side=U.shadowSide!==null?U.shadowSide:U.side:V.side=U.shadowSide!==null?U.shadowSide:p[U.side],V.alphaMap=U.alphaMap,V.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,V.map=U.map,V.clipShadows=U.clipShadows,V.clippingPlanes=U.clippingPlanes,V.clipIntersection=U.clipIntersection,V.displacementMap=U.displacementMap,V.displacementScale=U.displacementScale,V.displacementBias=U.displacementBias,V.wireframeLinewidth=U.wireframeLinewidth,V.linewidth=U.linewidth,v.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let Q=i.properties.get(V);Q.light=v}return V}function b(C,U,v,T,V){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&V===Ar)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,C.matrixWorld);let tt=t.update(C),H=C.material;if(Array.isArray(H)){let J=tt.groups;for(let lt=0,st=J.length;lt<st;lt++){let _t=J[lt],rt=H[_t.materialIndex];if(rt&&rt.visible){let ct=L(C,rt,T,V);C.onBeforeShadow(i,C,U,v,tt,ct,_t),i.renderBufferDirect(v,null,tt,ct,C,_t),C.onAfterShadow(i,C,U,v,tt,ct,_t)}}}else if(H.visible){let J=L(C,H,T,V);C.onBeforeShadow(i,C,U,v,tt,J,null),i.renderBufferDirect(v,null,tt,J,C,null),C.onAfterShadow(i,C,U,v,tt,J,null)}}let Q=C.children;for(let tt=0,H=Q.length;tt<H;tt++)b(Q[tt],U,v,T,V)}function M(C){C.target.removeEventListener("dispose",M);for(let v in c){let T=c[v],V=C.target.uuid;V in T&&(T[V].dispose(),delete T[V])}}}function ly(i,t){function e(){let z=!1,wt=new ke,dt=null,Pt=new ke(0,0,0,0);return{setMask:function(Bt){dt!==Bt&&!z&&(i.colorMask(Bt,Bt,Bt,Bt),dt=Bt)},setLocked:function(Bt){z=Bt},setClear:function(Bt,gt,Qt,Jt,Oe){Oe===!0&&(Bt*=Jt,gt*=Jt,Qt*=Jt),wt.set(Bt,gt,Qt,Jt),Pt.equals(wt)===!1&&(i.clearColor(Bt,gt,Qt,Jt),Pt.copy(wt))},reset:function(){z=!1,dt=null,Pt.set(-1,0,0,0)}}}function n(){let z=!1,wt=!1,dt=null,Pt=null,Bt=null;return{setReversed:function(gt){if(wt!==gt){let Qt=t.get("EXT_clip_control");gt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),wt=gt;let Jt=Bt;Bt=null,this.setClear(Jt)}},getReversed:function(){return wt},setTest:function(gt){gt?ht(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(gt){dt!==gt&&!z&&(i.depthMask(gt),dt=gt)},setFunc:function(gt){if(wt&&(gt=Af[gt]),Pt!==gt){switch(gt){case Oo:i.depthFunc(i.NEVER);break;case Bo:i.depthFunc(i.ALWAYS);break;case zo:i.depthFunc(i.LESS);break;case pr:i.depthFunc(i.LEQUAL);break;case ko:i.depthFunc(i.EQUAL);break;case Vo:i.depthFunc(i.GEQUAL);break;case Ho:i.depthFunc(i.GREATER);break;case Go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=gt}},setLocked:function(gt){z=gt},setClear:function(gt){Bt!==gt&&(Bt=gt,wt&&(gt=1-gt),i.clearDepth(gt))},reset:function(){z=!1,dt=null,Pt=null,Bt=null,wt=!1}}}function s(){let z=!1,wt=null,dt=null,Pt=null,Bt=null,gt=null,Qt=null,Jt=null,Oe=null;return{setTest:function(be){z||(be?ht(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(be){wt!==be&&!z&&(i.stencilMask(be),wt=be)},setFunc:function(be,Cn,Yn){(dt!==be||Pt!==Cn||Bt!==Yn)&&(i.stencilFunc(be,Cn,Yn),dt=be,Pt=Cn,Bt=Yn)},setOp:function(be,Cn,Yn){(gt!==be||Qt!==Cn||Jt!==Yn)&&(i.stencilOp(be,Cn,Yn),gt=be,Qt=Cn,Jt=Yn)},setLocked:function(be){z=be},setClear:function(be){Oe!==be&&(i.clearStencil(be),Oe=be)},reset:function(){z=!1,wt=null,dt=null,Pt=null,Bt=null,gt=null,Qt=null,Jt=null,Oe=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},p={},u={},m=new WeakMap,g=[],w=null,f=!1,d=null,I=null,L=null,b=null,M=null,C=null,U=null,v=new le(0,0,0),T=0,V=!1,G=null,Q=null,tt=null,H=null,J=null,lt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),st=!1,_t=0,rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(_t=parseFloat(/^WebGL (\d)/.exec(rt)[1]),st=_t>=1):rt.indexOf("OpenGL ES")!==-1&&(_t=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),st=_t>=2);let ct=null,ft={},Kt=i.getParameter(i.SCISSOR_BOX),$t=i.getParameter(i.VIEWPORT),Re=new ke().fromArray(Kt),Se=new ke().fromArray($t);function Ee(z,wt,dt,Pt){let Bt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(z,gt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<dt;Qt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,Bt):i.texImage2D(wt+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Bt);return gt}let nt={};nt[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(i.DEPTH_TEST),a.setFunc(pr),vt(!1),St(Dh),ht(i.CULL_FACE),mt(Ui);function ht(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Lt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function ie(z,wt){return u[z]!==wt?(i.bindFramebuffer(z,wt),u[z]=wt,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=wt),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function Ct(z,wt){let dt=g,Pt=!1;if(z){dt=m.get(wt),dt===void 0&&(dt=[],m.set(wt,dt));let Bt=z.textures;if(dt.length!==Bt.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Qt=Bt.length;gt<Qt;gt++)dt[gt]=i.COLOR_ATTACHMENT0+gt;dt.length=Bt.length,Pt=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(dt)}function qt(z){return w!==z?(i.useProgram(z),w=z,!0):!1}let Ie={[Bs]:i.FUNC_ADD,[Yd]:i.FUNC_SUBTRACT,[Zd]:i.FUNC_REVERSE_SUBTRACT};Ie[Jd]=i.MIN,Ie[Kd]=i.MAX;let N={[jd]:i.ZERO,[Qd]:i.ONE,[tf]:i.SRC_COLOR,[Oh]:i.SRC_ALPHA,[of]:i.SRC_ALPHA_SATURATE,[rf]:i.DST_COLOR,[nf]:i.DST_ALPHA,[ef]:i.ONE_MINUS_SRC_COLOR,[Bh]:i.ONE_MINUS_SRC_ALPHA,[af]:i.ONE_MINUS_DST_COLOR,[sf]:i.ONE_MINUS_DST_ALPHA,[lf]:i.CONSTANT_COLOR,[cf]:i.ONE_MINUS_CONSTANT_COLOR,[hf]:i.CONSTANT_ALPHA,[uf]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(z,wt,dt,Pt,Bt,gt,Qt,Jt,Oe,be){if(z===Ui){f===!0&&(Lt(i.BLEND),f=!1);return}if(f===!1&&(ht(i.BLEND),f=!0),z!==qd){if(z!==d||be!==V){if((I!==Bs||M!==Bs)&&(i.blendEquation(i.FUNC_ADD),I=Bs,M=Bs),be)switch(z){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nh:i.blendFunc(i.ONE,i.ONE);break;case Uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",z);break}else switch(z){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uh:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fh:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",z);break}L=null,b=null,C=null,U=null,v.set(0,0,0),T=0,d=z,V=be}return}Bt=Bt||wt,gt=gt||dt,Qt=Qt||Pt,(wt!==I||Bt!==M)&&(i.blendEquationSeparate(Ie[wt],Ie[Bt]),I=wt,M=Bt),(dt!==L||Pt!==b||gt!==C||Qt!==U)&&(i.blendFuncSeparate(N[dt],N[Pt],N[gt],N[Qt]),L=dt,b=Pt,C=gt,U=Qt),(Jt.equals(v)===!1||Oe!==T)&&(i.blendColor(Jt.r,Jt.g,Jt.b,Oe),v.copy(Jt),T=Oe),d=z,V=!1}function yt(z,wt){z.side===Ni?Lt(i.CULL_FACE):ht(i.CULL_FACE);let dt=z.side===Vn;wt&&(dt=!dt),vt(dt),z.blending===Cr&&z.transparent===!1?mt(Ui):mt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let Pt=z.stencilWrite;o.setTest(Pt),Pt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ee(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt(z){G!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),G=z)}function St(z){z!==Wd?(ht(i.CULL_FACE),z!==Q&&(z===Dh?i.cullFace(i.BACK):z===$d?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),Q=z}function ne(z){z!==tt&&(st&&i.lineWidth(z),tt=z)}function ee(z,wt,dt){z?(ht(i.POLYGON_OFFSET_FILL),(H!==wt||J!==dt)&&(H=wt,J=dt,a.getReversed()&&(wt=-wt),i.polygonOffset(wt,dt))):Lt(i.POLYGON_OFFSET_FILL)}function kt(z){z?ht(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function he(z){z===void 0&&(z=i.TEXTURE0+lt-1),ct!==z&&(i.activeTexture(z),ct=z)}function O(z,wt,dt){dt===void 0&&(ct===null?dt=i.TEXTURE0+lt-1:dt=ct);let Pt=ft[dt];Pt===void 0&&(Pt={type:void 0,texture:void 0},ft[dt]=Pt),(Pt.type!==z||Pt.texture!==wt)&&(ct!==dt&&(i.activeTexture(dt),ct=dt),i.bindTexture(z,wt||nt[z]),Pt.type=z,Pt.texture=wt)}function De(){let z=ft[ct];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function xe(){try{i.compressedTexImage2D(...arguments)}catch(z){ce("WebGLState:",z)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(z){ce("WebGLState:",z)}}function x(){try{i.texSubImage2D(...arguments)}catch(z){ce("WebGLState:",z)}}function $(){try{i.texSubImage3D(...arguments)}catch(z){ce("WebGLState:",z)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(z){ce("WebGLState:",z)}}function at(){try{i.compressedTexSubImage3D(...arguments)}catch(z){ce("WebGLState:",z)}}function Mt(){try{i.texStorage2D(...arguments)}catch(z){ce("WebGLState:",z)}}function Tt(){try{i.texStorage3D(...arguments)}catch(z){ce("WebGLState:",z)}}function ot(){try{i.texImage2D(...arguments)}catch(z){ce("WebGLState:",z)}}function ut(){try{i.texImage3D(...arguments)}catch(z){ce("WebGLState:",z)}}function At(z){return p[z]!==void 0?p[z]:i.getParameter(z)}function Zt(z,wt){p[z]!==wt&&(i.pixelStorei(z,wt),p[z]=wt)}function Ut(z){Re.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Re.copy(z))}function Rt(z){Se.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Se.copy(z))}function jt(z,wt){let dt=c.get(wt);dt===void 0&&(dt=new WeakMap,c.set(wt,dt));let Pt=dt.get(z);Pt===void 0&&(Pt=i.getUniformBlockIndex(wt,z.name),dt.set(z,Pt))}function ae(z,wt){let Pt=c.get(wt).get(z);l.get(wt)!==Pt&&(i.uniformBlockBinding(wt,Pt,z.__bindingPointIndex),l.set(wt,Pt))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},ct=null,ft={},u={},m=new WeakMap,g=[],w=null,f=!1,d=null,I=null,L=null,b=null,M=null,C=null,U=null,v=new le(0,0,0),T=0,V=!1,G=null,Q=null,tt=null,H=null,J=null,Re.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ht,disable:Lt,bindFramebuffer:ie,drawBuffers:Ct,useProgram:qt,setBlending:mt,setMaterial:yt,setFlipSided:vt,setCullFace:St,setLineWidth:ne,setPolygonOffset:ee,setScissorTest:kt,activeTexture:he,bindTexture:O,unbindTexture:De,compressedTexImage2D:xe,compressedTexImage3D:E,texImage2D:ot,texImage3D:ut,pixelStorei:Zt,getParameter:At,updateUBOMapping:jt,uniformBlockBinding:ae,texStorage2D:Mt,texStorage3D:Tt,texSubImage2D:x,texSubImage3D:$,compressedTexSubImage2D:j,compressedTexSubImage3D:at,scissor:Ut,viewport:Rt,reset:se}}function cy(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,h=new WeakMap,p=new Set,u,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(E,x){return g?new OffscreenCanvas(E,x):oa("canvas")}function f(E,x,$){let j=1,at=xe(E);if((at.width>$||at.height>$)&&(j=$/Math.max(at.width,at.height)),j<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Mt=Math.floor(j*at.width),Tt=Math.floor(j*at.height);u===void 0&&(u=w(Mt,Tt));let ot=x?w(Mt,Tt):u;return ot.width=Mt,ot.height=Tt,ot.getContext("2d").drawImage(E,0,0,Mt,Tt),oe("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+Mt+"x"+Tt+")."),ot}else return"data"in E&&oe("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),E;return E}function d(E){return E.generateMipmaps}function I(E){i.generateMipmap(E)}function L(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,x,$,j,at,Mt=!1){if(E!==null){if(i[E]!==void 0)return i[E];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Tt;j&&(Tt=t.get("EXT_texture_norm16"),Tt||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=x;if(x===i.RED&&($===i.FLOAT&&(ot=i.R32F),$===i.HALF_FLOAT&&(ot=i.R16F),$===i.UNSIGNED_BYTE&&(ot=i.R8),$===i.UNSIGNED_SHORT&&Tt&&(ot=Tt.R16_EXT),$===i.SHORT&&Tt&&(ot=Tt.R16_SNORM_EXT)),x===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ot=i.R8UI),$===i.UNSIGNED_SHORT&&(ot=i.R16UI),$===i.UNSIGNED_INT&&(ot=i.R32UI),$===i.BYTE&&(ot=i.R8I),$===i.SHORT&&(ot=i.R16I),$===i.INT&&(ot=i.R32I)),x===i.RG&&($===i.FLOAT&&(ot=i.RG32F),$===i.HALF_FLOAT&&(ot=i.RG16F),$===i.UNSIGNED_BYTE&&(ot=i.RG8),$===i.UNSIGNED_SHORT&&Tt&&(ot=Tt.RG16_EXT),$===i.SHORT&&Tt&&(ot=Tt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(ot=i.RG8UI),$===i.UNSIGNED_SHORT&&(ot=i.RG16UI),$===i.UNSIGNED_INT&&(ot=i.RG32UI),$===i.BYTE&&(ot=i.RG8I),$===i.SHORT&&(ot=i.RG16I),$===i.INT&&(ot=i.RG32I)),x===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),$===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),$===i.UNSIGNED_INT&&(ot=i.RGB32UI),$===i.BYTE&&(ot=i.RGB8I),$===i.SHORT&&(ot=i.RGB16I),$===i.INT&&(ot=i.RGB32I)),x===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),$===i.UNSIGNED_INT&&(ot=i.RGBA32UI),$===i.BYTE&&(ot=i.RGBA8I),$===i.SHORT&&(ot=i.RGBA16I),$===i.INT&&(ot=i.RGBA32I)),x===i.RGB&&($===i.UNSIGNED_SHORT&&Tt&&(ot=Tt.RGB16_EXT),$===i.SHORT&&Tt&&(ot=Tt.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(ot=i.R11F_G11F_B10F)),x===i.RGBA){let ut=Mt?aa:Te.getTransfer(at);$===i.FLOAT&&(ot=i.RGBA32F),$===i.HALF_FLOAT&&(ot=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ot=ut===ze?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&Tt&&(ot=Tt.RGBA16_EXT),$===i.SHORT&&Tt&&(ot=Tt.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function M(E,x){let $;return E?x===null||x===bi||x===Ir?$=i.DEPTH24_STENCIL8:x===wi?$=i.DEPTH32F_STENCIL8:x===Rr&&($=i.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===bi||x===Ir?$=i.DEPTH_COMPONENT24:x===wi?$=i.DEPTH_COMPONENT32F:x===Rr&&($=i.DEPTH_COMPONENT16),$}function C(E,x){return d(E)===!0||E.isFramebufferTexture&&E.minFilter!==vn&&E.minFilter!==bn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function U(E){let x=E.target;x.removeEventListener("dispose",U),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&p.delete(x)}function v(E){let x=E.target;x.removeEventListener("dispose",v),G(x)}function T(E){let x=n.get(E);if(x.__webglInit===void 0)return;let $=E.source,j=m.get($);if(j){let at=j[x.__cacheKey];at.usedTimes--,at.usedTimes===0&&V(E),Object.keys(j).length===0&&m.delete($)}n.remove(E)}function V(E){let x=n.get(E);i.deleteTexture(x.__webglTexture);let $=E.source,j=m.get($);delete j[x.__cacheKey],a.memory.textures--}function G(E){let x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let at=0;at<x.__webglFramebuffer[j].length;at++)i.deleteFramebuffer(x.__webglFramebuffer[j][at]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let $=E.textures;for(let j=0,at=$.length;j<at;j++){let Mt=n.get($[j]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),a.memory.textures--),n.remove($[j])}n.remove(E)}let Q=0;function tt(){Q=0}function H(){return Q}function J(E){Q=E}function lt(){let E=Q;return E>=s.maxTextures&&oe("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),Q+=1,E}function st(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function _t(E,x){let $=n.get(E);if(E.isVideoTexture&&O(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&$.__version!==E.version){let j=E.image;if(j===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt($,E,x);return}}else E.isExternalTexture&&($.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+x)}function rt(E,x){let $=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&$.__version!==E.version){Lt($,E,x);return}else E.isExternalTexture&&($.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+x)}function ct(E,x){let $=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&$.__version!==E.version){Lt($,E,x);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+x)}function ft(E,x){let $=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&$.__version!==E.version){ie($,E,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+x)}let Kt={[Wo]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[$o]:i.MIRRORED_REPEAT},$t={[vn]:i.NEAREST,[pf]:i.NEAREST_MIPMAP_NEAREST,[Oa]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[Cl]:i.LINEAR_MIPMAP_NEAREST,[_s]:i.LINEAR_MIPMAP_LINEAR},Re={[xf]:i.NEVER,[bf]:i.ALWAYS,[vf]:i.LESS,[dc]:i.LEQUAL,[yf]:i.EQUAL,[fc]:i.GEQUAL,[Sf]:i.GREATER,[Mf]:i.NOTEQUAL};function Se(E,x){if(x.type===wi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===bn||x.magFilter===Cl||x.magFilter===Oa||x.magFilter===_s||x.minFilter===bn||x.minFilter===Cl||x.minFilter===Oa||x.minFilter===_s)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Kt[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Kt[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Kt[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,$t[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,$t[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Re[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===vn||x.minFilter!==Oa&&x.minFilter!==_s||x.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ee(E,x){let $=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",U));let j=x.source,at=m.get(j);at===void 0&&(at={},m.set(j,at));let Mt=st(x);if(Mt!==E.__cacheKey){at[Mt]===void 0&&(at[Mt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,$=!0),at[Mt].usedTimes++;let Tt=at[E.__cacheKey];Tt!==void 0&&(at[E.__cacheKey].usedTimes--,Tt.usedTimes===0&&V(x)),E.__cacheKey=Mt,E.__webglTexture=at[Mt].texture}return $}function nt(E,x,$){return Math.floor(Math.floor(E/$)/x)}function ht(E,x,$,j){let Mt=E.updateRanges;if(Mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,$,j,x.data);else{Mt.sort((Zt,Ut)=>Zt.start-Ut.start);let Tt=0;for(let Zt=1;Zt<Mt.length;Zt++){let Ut=Mt[Tt],Rt=Mt[Zt],jt=Ut.start+Ut.count,ae=nt(Rt.start,x.width,4),se=nt(Ut.start,x.width,4);Rt.start<=jt+1&&ae===se&&nt(Rt.start+Rt.count-1,x.width,4)===ae?Ut.count=Math.max(Ut.count,Rt.start+Rt.count-Ut.start):(++Tt,Mt[Tt]=Rt)}Mt.length=Tt+1;let ot=e.getParameter(i.UNPACK_ROW_LENGTH),ut=e.getParameter(i.UNPACK_SKIP_PIXELS),At=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Zt=0,Ut=Mt.length;Zt<Ut;Zt++){let Rt=Mt[Zt],jt=Math.floor(Rt.start/4),ae=Math.ceil(Rt.count/4),se=jt%x.width,z=Math.floor(jt/x.width),wt=ae,dt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,se),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,se,z,wt,dt,$,j,x.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ot),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function Lt(E,x,$){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);let at=Ee(E,x),Mt=x.source;e.bindTexture(j,E.__webglTexture,i.TEXTURE0+$);let Tt=n.get(Mt);if(Mt.version!==Tt.__version||at===!0){if(e.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let dt=Te.getPrimaries(Te.workingColorSpace),Pt=x.colorSpace===ts?null:Te.getPrimaries(x.colorSpace),Bt=x.colorSpace===ts||dt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let ut=f(x.image,!1,s.maxTextureSize);ut=De(x,ut);let At=r.convert(x.format,x.colorSpace),Zt=r.convert(x.type),Ut=b(x.internalFormat,At,Zt,x.normalized,x.colorSpace,x.isVideoTexture);Se(j,x);let Rt,jt=x.mipmaps,ae=x.isVideoTexture!==!0,se=Tt.__version===void 0||at===!0,z=Mt.dataReady,wt=C(x,ut);if(x.isDepthTexture)Ut=M(x.format===xs,x.type),se&&(ae?e.texStorage2D(i.TEXTURE_2D,1,Ut,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Ut,ut.width,ut.height,0,At,Zt,null));else if(x.isDataTexture)if(jt.length>0){ae&&se&&e.texStorage2D(i.TEXTURE_2D,wt,Ut,jt[0].width,jt[0].height);for(let dt=0,Pt=jt.length;dt<Pt;dt++)Rt=jt[dt],ae?z&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Rt.width,Rt.height,At,Zt,Rt.data):e.texImage2D(i.TEXTURE_2D,dt,Ut,Rt.width,Rt.height,0,At,Zt,Rt.data);x.generateMipmaps=!1}else ae?(se&&e.texStorage2D(i.TEXTURE_2D,wt,Ut,ut.width,ut.height),z&&ht(x,ut,At,Zt)):e.texImage2D(i.TEXTURE_2D,0,Ut,ut.width,ut.height,0,At,Zt,ut.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ae&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Ut,jt[0].width,jt[0].height,ut.depth);for(let dt=0,Pt=jt.length;dt<Pt;dt++)if(Rt=jt[dt],x.format!==fi)if(At!==null)if(ae){if(z)if(x.layerUpdates.size>0){let Bt=lu(Rt.width,Rt.height,x.format,x.type);for(let gt of x.layerUpdates){let Qt=Rt.data.subarray(gt*Bt/Rt.data.BYTES_PER_ELEMENT,(gt+1)*Bt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,gt,Rt.width,Rt.height,1,At,Qt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Rt.width,Rt.height,ut.depth,At,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,Ut,Rt.width,Rt.height,ut.depth,0,Rt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Rt.width,Rt.height,ut.depth,At,Zt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,Ut,Rt.width,Rt.height,ut.depth,0,At,Zt,Rt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ae&&se&&e.texStorage2D(i.TEXTURE_2D,wt,Ut,jt[0].width,jt[0].height);for(let dt=0,Pt=jt.length;dt<Pt;dt++)Rt=jt[dt],x.format!==fi?At!==null?ae?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,Rt.width,Rt.height,At,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,Ut,Rt.width,Rt.height,0,Rt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?z&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Rt.width,Rt.height,At,Zt,Rt.data):e.texImage2D(i.TEXTURE_2D,dt,Ut,Rt.width,Rt.height,0,At,Zt,Rt.data)}else if(x.isDataArrayTexture)if(ae){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Ut,ut.width,ut.height,ut.depth),z)if(x.layerUpdates.size>0){let dt=lu(ut.width,ut.height,x.format,x.type);for(let Pt of x.layerUpdates){let Bt=ut.data.subarray(Pt*dt/ut.data.BYTES_PER_ELEMENT,(Pt+1)*dt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pt,ut.width,ut.height,1,At,Zt,Bt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,At,Zt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,ut.width,ut.height,ut.depth,0,At,Zt,ut.data);else if(x.isData3DTexture)ae?(se&&e.texStorage3D(i.TEXTURE_3D,wt,Ut,ut.width,ut.height,ut.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,At,Zt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,ut.width,ut.height,ut.depth,0,At,Zt,ut.data);else if(x.isFramebufferTexture){if(se)if(ae)e.texStorage2D(i.TEXTURE_2D,wt,Ut,ut.width,ut.height);else{let dt=ut.width,Pt=ut.height;for(let Bt=0;Bt<wt;Bt++)e.texImage2D(i.TEXTURE_2D,Bt,Ut,dt,Pt,0,At,Zt,null),dt>>=1,Pt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let dt=i.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),ut.parentNode!==dt){dt.appendChild(ut),p.add(x),dt.onpaint=Pt=>{let Bt=Pt.changedElements;for(let gt of p)Bt.includes(gt.image)&&(gt.needsUpdate=!0)},dt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ut);else{let Bt=i.RGBA,gt=i.RGBA,Qt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Bt,gt,Qt,ut)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(jt.length>0){if(ae&&se){let dt=xe(jt[0]);e.texStorage2D(i.TEXTURE_2D,wt,Ut,dt.width,dt.height)}for(let dt=0,Pt=jt.length;dt<Pt;dt++)Rt=jt[dt],ae?z&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,At,Zt,Rt):e.texImage2D(i.TEXTURE_2D,dt,Ut,At,Zt,Rt);x.generateMipmaps=!1}else if(ae){if(se){let dt=xe(ut);e.texStorage2D(i.TEXTURE_2D,wt,Ut,dt.width,dt.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Zt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Ut,At,Zt,ut);d(x)&&I(j),Tt.__version=Mt.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ie(E,x,$){if(x.image.length!==6)return;let j=Ee(E,x),at=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+$);let Mt=n.get(at);if(at.version!==Mt.__version||j===!0){e.activeTexture(i.TEXTURE0+$);let Tt=Te.getPrimaries(Te.workingColorSpace),ot=x.colorSpace===ts?null:Te.getPrimaries(x.colorSpace),ut=x.colorSpace===ts||Tt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let At=x.isCompressedTexture||x.image[0].isCompressedTexture,Zt=x.image[0]&&x.image[0].isDataTexture,Ut=[];for(let gt=0;gt<6;gt++)!At&&!Zt?Ut[gt]=f(x.image[gt],!0,s.maxCubemapSize):Ut[gt]=Zt?x.image[gt].image:x.image[gt],Ut[gt]=De(x,Ut[gt]);let Rt=Ut[0],jt=r.convert(x.format,x.colorSpace),ae=r.convert(x.type),se=b(x.internalFormat,jt,ae,x.normalized,x.colorSpace),z=x.isVideoTexture!==!0,wt=Mt.__version===void 0||j===!0,dt=at.dataReady,Pt=C(x,Rt);Se(i.TEXTURE_CUBE_MAP,x);let Bt;if(At){z&&wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,se,Rt.width,Rt.height);for(let gt=0;gt<6;gt++){Bt=Ut[gt].mipmaps;for(let Qt=0;Qt<Bt.length;Qt++){let Jt=Bt[Qt];x.format!==fi?jt!==null?z?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Qt,0,0,Jt.width,Jt.height,jt,Jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Qt,se,Jt.width,Jt.height,0,Jt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Qt,0,0,Jt.width,Jt.height,jt,ae,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Qt,se,Jt.width,Jt.height,0,jt,ae,Jt.data)}}}else{if(Bt=x.mipmaps,z&&wt){Bt.length>0&&Pt++;let gt=xe(Ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,se,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Zt){z?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ut[gt].width,Ut[gt].height,jt,ae,Ut[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,Ut[gt].width,Ut[gt].height,0,jt,ae,Ut[gt].data);for(let Qt=0;Qt<Bt.length;Qt++){let Oe=Bt[Qt].image[gt].image;z?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Qt+1,0,0,Oe.width,Oe.height,jt,ae,Oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Qt+1,se,Oe.width,Oe.height,0,jt,ae,Oe.data)}}else{z?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,jt,ae,Ut[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,jt,ae,Ut[gt]);for(let Qt=0;Qt<Bt.length;Qt++){let Jt=Bt[Qt];z?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Qt+1,0,0,jt,ae,Jt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Qt+1,se,jt,ae,Jt.image[gt])}}}d(x)&&I(i.TEXTURE_CUBE_MAP),Mt.__version=at.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Ct(E,x,$,j,at,Mt){let Tt=r.convert($.format,$.colorSpace),ot=r.convert($.type),ut=b($.internalFormat,Tt,ot,$.normalized,$.colorSpace),At=n.get(x),Zt=n.get($);if(Zt.__renderTarget=x,!At.__hasExternalTextures){let Ut=Math.max(1,x.width>>Mt),Rt=Math.max(1,x.height>>Mt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,Mt,ut,Ut,Rt,x.depth,0,Tt,ot,null):e.texImage2D(at,Mt,ut,Ut,Rt,0,Tt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,at,Zt.__webglTexture,0,kt(x)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,at,Zt.__webglTexture,Mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(E,x,$){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){let j=x.depthTexture,at=j&&j.isDepthTexture?j.type:null,Mt=M(x.stencilBuffer,at),Tt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;he(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt(x),Mt,x.width,x.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt(x),Mt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,E)}else{let j=x.textures;for(let at=0;at<j.length;at++){let Mt=j[at],Tt=r.convert(Mt.format,Mt.colorSpace),ot=r.convert(Mt.type),ut=b(Mt.internalFormat,Tt,ot,Mt.normalized,Mt.colorSpace);he(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt(x),ut,x.width,x.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt(x),ut,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ut,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(E,x,$){let j=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=n.get(x.depthTexture);if(at.__renderTarget=x,(!at.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j){if(at.__webglInit===void 0&&(at.__webglInit=!0,x.depthTexture.addEventListener("dispose",U)),at.__webglTexture===void 0){at.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),Se(i.TEXTURE_CUBE_MAP,x.depthTexture);let At=r.convert(x.depthTexture.format),Zt=r.convert(x.depthTexture.type),Ut;x.depthTexture.format===Ii?Ut=i.DEPTH_COMPONENT24:x.depthTexture.format===xs&&(Ut=i.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Ut,x.width,x.height,0,At,Zt,null)}}else _t(x.depthTexture,0);let Mt=at.__webglTexture,Tt=kt(x),ot=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,ut=x.depthTexture.format===xs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ii)he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,ot,Mt,0,Tt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,ot,Mt,0);else if(x.depthTexture.format===xs)he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,ot,Mt,0,Tt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,ot,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function N(E){let x=n.get(E),$=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let j=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){let at=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",at)};j.addEventListener("dispose",at),x.__depthDisposeCallback=at}x.__boundDepthTexture=j}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if($)for(let j=0;j<6;j++)Ie(x.__webglFramebuffer[j],E,j);else{let j=E.texture.mipmaps;j&&j.length>0?Ie(x.__webglFramebuffer[0],E,0):Ie(x.__webglFramebuffer,E,0)}else if($){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=i.createRenderbuffer(),qt(x.__webglDepthbuffer[j],E,!1);else{let at=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=x.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,Mt)}}else{let j=E.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),qt(x.__webglDepthbuffer,E,!1);else{let at=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,Mt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(E,x,$){let j=n.get(E);x!==void 0&&Ct(j.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&N(E)}function yt(E){let x=E.texture,$=n.get(E),j=n.get(x);E.addEventListener("dispose",v);let at=E.textures,Mt=E.isWebGLCubeRenderTarget===!0,Tt=at.length>1;if(Tt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,a.memory.textures++),Mt){$.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer[ot]=[];for(let ut=0;ut<x.mipmaps.length;ut++)$.__webglFramebuffer[ot][ut]=i.createFramebuffer()}else $.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)$.__webglFramebuffer[ot]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let ot=0,ut=at.length;ot<ut;ot++){let At=n.get(at[ot]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&he(E)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ot=0;ot<at.length;ot++){let ut=at[ot];$.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[ot]);let At=r.convert(ut.format,ut.colorSpace),Zt=r.convert(ut.type),Ut=b(ut.internalFormat,At,Zt,ut.normalized,ut.colorSpace,E.isXRRenderTarget===!0),Rt=kt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,Ut,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,$.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),qt($.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Se(i.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)Ct($.__webglFramebuffer[ot][ut],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else Ct($.__webglFramebuffer[ot],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);d(x)&&I(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ot=0,ut=at.length;ot<ut;ot++){let At=at[ot],Zt=n.get(At),Ut=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Ut=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ut,Zt.__webglTexture),Se(Ut,At),Ct($.__webglFramebuffer,E,At,i.COLOR_ATTACHMENT0+ot,Ut,0),d(At)&&I(Ut)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ot=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,j.__webglTexture),Se(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)Ct($.__webglFramebuffer[ut],E,x,i.COLOR_ATTACHMENT0,ot,ut);else Ct($.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,ot,0);d(x)&&I(ot),e.unbindTexture()}E.depthBuffer&&N(E)}function vt(E){let x=E.textures;for(let $=0,j=x.length;$<j;$++){let at=x[$];if(d(at)){let Mt=L(E),Tt=n.get(at).__webglTexture;e.bindTexture(Mt,Tt),I(Mt),e.unbindTexture()}}}let St=[],ne=[];function ee(E){if(E.samples>0){if(he(E)===!1){let x=E.textures,$=E.width,j=E.height,at=i.COLOR_BUFFER_BIT,Mt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(E),ot=x.length>1;if(ot)for(let At=0;At<x.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);let ut=E.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let At=0;At<x.length;At++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[At]);let Zt=n.get(x[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,$,j,0,0,$,j,at,i.NEAREST),l===!0&&(St.length=0,ne.length=0,St.push(i.COLOR_ATTACHMENT0+At),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(St.push(Mt),ne.push(Mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,St))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let At=0;At<x.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[At]);let Zt=n.get(x[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function kt(E){return Math.min(s.maxSamples,E.samples)}function he(E){let x=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function O(E){let x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function De(E,x){let $=E.colorSpace,j=E.format,at=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||$!==ra&&$!==ts&&(Te.getTransfer($)===ze?(j!==fi||at!==Xn)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",$)),x}function xe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=lt,this.resetTextureUnits=tt,this.getTextureUnits=H,this.setTextureUnits=J,this.setTexture2D=_t,this.setTexture2DArray=rt,this.setTexture3D=ct,this.setTextureCube=ft,this.rebindTextures=mt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=N,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function hy(i,t){function e(n,s=ts){let r,a=Te.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qh)return i.BYTE;if(n===Yh)return i.SHORT;if(n===Rr)return i.UNSIGNED_SHORT;if(n===Rl)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===wi)return i.FLOAT;if(n===Ei)return i.HALF_FLOAT;if(n===Kh)return i.ALPHA;if(n===jh)return i.RGB;if(n===fi)return i.RGBA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===Qh)return i.RED;if(n===Ll)return i.RED_INTEGER;if(n===vs)return i.RG;if(n===Dl)return i.RG_INTEGER;if(n===Nl)return i.RGBA_INTEGER;if(n===Ba||n===za||n===ka||n===Va)if(a===ze)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ul||n===Fl||n===Ol||n===Bl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zl||n===kl||n===Vl||n===Hl||n===Gl||n===Ha||n===Wl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zl||n===kl)return a===ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Hl)return r.COMPRESSED_R11_EAC;if(n===Gl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ha)return r.COMPRESSED_RG11_EAC;if(n===Wl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$l||n===Xl||n===ql||n===Yl||n===Zl||n===Jl||n===Kl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$l)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ql)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ql)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ic)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rc||n===ac||n===oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===rc)return a===ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lc||n===cc||n===Ga||n===hc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===lc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dy=`
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

}`,Mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ga(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Sn({vertexShader:uy,fragmentShader:dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nn(new Ea(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bu=class extends Pi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,m=null,g=null,w=typeof XRWebGLBinding<"u",f=new Mu,d={},I=e.getContextAttributes(),L=null,b=null,M=[],C=[],U=new Dt,v=null,T=null,V=new Dn;V.viewport=new ke;let G=new Dn;G.viewport=new ke;let Q=[V,G],tt=new wl,H=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ht=M[nt];return ht===void 0&&(ht=new yr,M[nt]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(nt){let ht=M[nt];return ht===void 0&&(ht=new yr,M[nt]=ht),ht.getGripSpace()},this.getHand=function(nt){let ht=M[nt];return ht===void 0&&(ht=new yr,M[nt]=ht),ht.getHandSpace()};function lt(nt){let ht=C.indexOf(nt.inputSource);if(ht===-1)return;let Lt=M[ht];Lt!==void 0&&(Lt.update(nt.inputSource,nt.frame,c||a),Lt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function st(){s.removeEventListener("select",lt),s.removeEventListener("selectstart",lt),s.removeEventListener("selectend",lt),s.removeEventListener("squeeze",lt),s.removeEventListener("squeezestart",lt),s.removeEventListener("squeezeend",lt),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",_t);for(let nt=0;nt<M.length;nt++){let ht=C[nt];ht!==null&&(C[nt]=null,M[nt].disconnect(ht))}H=null,J=null,f.reset();for(let nt in d)delete d[nt];if(t.setRenderTarget(L),m=null,u=null,p=null,s=null,b=null,Ee.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(U.width,U.height,!1),T!==null){let nt=T.camera;nt.fov=T.fov,nt.zoom=T.zoom,nt.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,n.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&w&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",lt),s.addEventListener("selectstart",lt),s.addEventListener("selectend",lt),s.addEventListener("squeeze",lt),s.addEventListener("squeezestart",lt),s.addEventListener("squeezeend",lt),s.addEventListener("end",st),s.addEventListener("inputsourceschange",_t),I.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(U),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,ie=null,Ct=null;I.depth&&(Ct=I.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=I.stencil?xs:Ii,ie=I.stencil?Ir:bi);let qt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(qt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new $n(u.textureWidth,u.textureHeight,{format:fi,type:Xn,depthTexture:new hs(u.textureWidth,u.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Lt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Lt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new $n(m.framebufferWidth,m.framebufferHeight,{format:fi,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ee.setContext(s),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function _t(nt){for(let ht=0;ht<nt.removed.length;ht++){let Lt=nt.removed[ht],ie=C.indexOf(Lt);ie>=0&&(C[ie]=null,M[ie].disconnect(Lt))}for(let ht=0;ht<nt.added.length;ht++){let Lt=nt.added[ht],ie=C.indexOf(Lt);if(ie===-1){for(let qt=0;qt<M.length;qt++)if(qt>=C.length){C.push(Lt),ie=qt;break}else if(C[qt]===null){C[qt]=Lt,ie=qt;break}if(ie===-1)break}let Ct=M[ie];Ct&&Ct.connect(Lt)}}let rt=new F,ct=new F;function ft(nt,ht,Lt){rt.setFromMatrixPosition(ht.matrixWorld),ct.setFromMatrixPosition(Lt.matrixWorld);let ie=rt.distanceTo(ct),Ct=ht.projectionMatrix.elements,qt=Lt.projectionMatrix.elements,Ie=Ct[14]/(Ct[10]-1),N=Ct[14]/(Ct[10]+1),mt=(Ct[9]+1)/Ct[5],yt=(Ct[9]-1)/Ct[5],vt=(Ct[8]-1)/Ct[0],St=(qt[8]+1)/qt[0],ne=Ie*vt,ee=Ie*St,kt=ie/(-vt+St),he=kt*-vt;if(ht.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(he),nt.translateZ(kt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Ct[10]===-1)nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let O=Ie+kt,De=N+kt,xe=ne-he,E=ee+(ie-he),x=mt*N/De*O,$=yt*N/De*O;nt.projectionMatrix.makePerspective(xe,E,x,$,O,De),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function Kt(nt,ht){ht===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ht.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let ht=nt.near,Lt=nt.far;f.texture!==null&&(f.depthNear>0&&(ht=f.depthNear),f.depthFar>0&&(Lt=f.depthFar)),tt.near=G.near=V.near=ht,tt.far=G.far=V.far=Lt,(H!==tt.near||J!==tt.far)&&(s.updateRenderState({depthNear:tt.near,depthFar:tt.far}),H=tt.near,J=tt.far),tt.layers.mask=nt.layers.mask|6,V.layers.mask=tt.layers.mask&-5,G.layers.mask=tt.layers.mask&-3;let ie=nt.parent,Ct=tt.cameras;Kt(tt,ie);for(let qt=0;qt<Ct.length;qt++)Kt(Ct[qt],ie);Ct.length===2?ft(tt,V,G):tt.projectionMatrix.copy(V.projectionMatrix),T===null&&nt.isPerspectiveCamera&&(T={camera:nt,fov:nt.fov,zoom:nt.zoom}),$t(nt,tt,ie)};function $t(nt,ht,Lt){Lt===null?nt.matrix.copy(ht.matrixWorld):(nt.matrix.copy(Lt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ht.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=_r*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(nt){l=nt,u!==null&&(u.fixedFoveation=nt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=nt)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(tt)},this.getCameraTexture=function(nt){return d[nt]};let Re=null;function Se(nt,ht){if(h=ht.getViewerPose(c||a),g=ht,h!==null){let Lt=h.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let ie=!1;Lt.length!==tt.cameras.length&&(tt.cameras.length=0,ie=!0);for(let N=0;N<Lt.length;N++){let mt=Lt[N],yt=null;if(m!==null)yt=m.getViewport(mt);else{let St=p.getViewSubImage(u,mt);yt=St.viewport,N===0&&(t.setRenderTargetTextures(b,St.colorTexture,St.depthStencilTexture),t.setRenderTarget(b))}let vt=Q[N];vt===void 0&&(vt=new Dn,vt.layers.enable(N),vt.viewport=new ke,Q[N]=vt),vt.matrix.fromArray(mt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(mt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(yt.x,yt.y,yt.width,yt.height),N===0&&(tt.matrix.copy(vt.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),ie===!0&&tt.cameras.push(vt)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){p=n.getBinding();let N=p.getDepthInformation(Lt[0]);N&&N.isValid&&N.texture&&f.init(N,s.renderState)}if(Ct&&Ct.includes("camera-access")&&w){t.state.unbindTexture(),p=n.getBinding();for(let N=0;N<Lt.length;N++){let mt=Lt[N].camera;if(mt){let yt=d[mt];yt||(yt=new ga,d[mt]=yt);let vt=p.getCameraImage(mt);yt.sourceTexture=vt}}}}for(let Lt=0;Lt<M.length;Lt++){let ie=C[Lt],Ct=M[Lt];ie!==null&&Ct!==void 0&&Ct.update(ie,ht,c||a)}Re&&Re(nt,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}let Ee=new np;Ee.setAnimationLoop(Se),this.setAnimationLoop=function(nt){Re=nt},this.dispose=function(){}}},fy=new We,lp=new fe;lp.set(-1,0,0,0,1,0,0,0,1);function py(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,ru(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,I,L,b){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(f,d):d.isMeshLambertMaterial?(r(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(f,d),p(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(f,d),u(f,d),d.isMeshPhysicalMaterial&&m(f,d,b)):d.isMeshMatcapMaterial?(r(f,d),g(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),w(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,I,L):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Vn&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Vn&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let I=t.get(d),L=I.envMap,b=I.envMapRotation;L&&(f.envMap.value=L,f.envMapRotation.value.setFromMatrix4(fy.makeRotationFromEuler(b)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(lp),f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,I,L){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*I,f.scale.value=L*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function p(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function u(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,I){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Vn&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.retroreflectivity>0&&(f.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=I.texture,f.transmissionSamplerSize.value.set(I.width,I.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function w(f,d){let I=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(I.matrixWorld),f.nearDistance.value=I.shadow.camera.near,f.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function my(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let C=M.program;n.uniformBlockBinding(b,C)}function c(b,M){let C=s[b.id];C===void 0&&(f(b),C=h(b),s[b.id]=C,b.addEventListener("dispose",I));let U=M.program;n.updateUBOMapping(b,U);let v=t.render.frame;r[b.id]!==v&&(u(b),r[b.id]=v)}function h(b){let M=p();b.__bindingPointIndex=M;let C=i.createBuffer(),U=b.__size,v=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,U,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,C),C}function p(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let M=s[b.id],C=b.uniforms,U=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,T=C.length;v<T;v++){let V=C[v];if(Array.isArray(V))for(let G=0,Q=V.length;G<Q;G++)m(V[G],v,G,U);else m(V,v,0,U)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,M,C,U){if(w(b,M,C,U)===!0){let v=b.__offset,T=b.value;if(Array.isArray(T)){let V=0;for(let G=0;G<T.length;G++){let Q=T[G],tt=d(Q);g(Q,b.__data,V),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(V+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,b.__data)}}function g(b,M,C){typeof b=="number"||typeof b=="boolean"?M[0]=b:b.isMatrix3?(M[0]=b.elements[0],M[1]=b.elements[1],M[2]=b.elements[2],M[3]=0,M[4]=b.elements[3],M[5]=b.elements[4],M[6]=b.elements[5],M[7]=0,M[8]=b.elements[6],M[9]=b.elements[7],M[10]=b.elements[8],M[11]=0):ArrayBuffer.isView(b)?M.set(new b.constructor(b.buffer,b.byteOffset,M.length)):b.toArray(M,C)}function w(b,M,C,U){let v=b.value,T=M+"_"+C;if(U[T]===void 0)return typeof v=="number"||typeof v=="boolean"?U[T]=v:ArrayBuffer.isView(v)?U[T]=v.slice():U[T]=v.clone(),!0;{let V=U[T];if(typeof v=="number"||typeof v=="boolean"){if(V!==v)return U[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(V.equals(v)===!1)return V.copy(v),!0}}return!1}function f(b){let M=b.uniforms,C=0,U=16;for(let T=0,V=M.length;T<V;T++){let G=Array.isArray(M[T])?M[T]:[M[T]];for(let Q=0,tt=G.length;Q<tt;Q++){let H=G[Q],J=Array.isArray(H.value)?H.value:[H.value];for(let lt=0,st=J.length;lt<st;lt++){let _t=J[lt],rt=d(_t),ct=C%U,ft=ct%rt.boundary,Kt=ct+ft;C+=ft,Kt!==0&&U-Kt<rt.storage&&(C+=U-Kt),H.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=C,C+=rt.storage}}}let v=C%U;return v>0&&(C+=U-v),b.__size=C,b.__cache={},this}function d(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(M.boundary=16,M.storage=b.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",b),M}function I(b){let M=b.target;M.removeEventListener("dispose",I);let C=a.indexOf(M.__bindingPointIndex);a.splice(C,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function L(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:L}}var gy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fi=null;function _y(){return Fi===null&&(Fi=new Ko(gy,16,16,vs,Ei),Fi.name="DFG_LUT",Fi.minFilter=bn,Fi.magFilter=bn,Fi.wrapS=Ci,Fi.wrapT=Ci,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}var xc=class{constructor(t={}){let{canvas:e=wf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Xn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let w=m,f=new Set([Nl,Dl,Ll]),d=new Set([Xn,bi,Rr,Ir,Il,Pl]),I=new Uint32Array(4),L=new Int32Array(4),b=new F,M=null,C=null,U=[],v=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,G=!1,Q=null,tt=null,H=null,J=null;this._outputColorSpace=ei;let lt=0,st=0,_t=null,rt=-1,ct=null,ft=new ke,Kt=new ke,$t=null,Re=new le(0),Se=0,Ee=e.width,nt=e.height,ht=1,Lt=null,ie=null,Ct=new ke(0,0,Ee,nt),qt=new ke(0,0,Ee,nt),Ie=!1,N=new Sr,mt=!1,yt=!1,vt=new We,St=new F,ne=new ke,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function he(){return _t===null?ht:1}let O=n;function De(y,k){return e.getContext(y,k)}let xe,E,x,$,j,at,Mt,Tt,ot,ut,At,Zt,Ut,Rt,jt,ae,se,z,wt,dt,Pt,Bt,gt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Oe,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",Cn,!1),O===null){let k="webgl2";if(O=De(k,y),O===null)throw De(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(y){throw e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Cn,!1),ce("WebGLRenderer: "+y.message),y}function Qt(){xe=new wx(O),xe.init(),Pt=new hy(O,xe),E=new px(O,xe,t,Pt),x=new ly(O,xe),E.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),tt=O.createFramebuffer(),H=O.createFramebuffer(),J=O.createFramebuffer(),$=new Ax(O),j=new Yv,at=new cy(O,xe,x,j,E,Pt,$),Mt=new bx(V),Tt=new Rg(O),Bt=new dx(O,Tt),ot=new Ex(O,Tt,$,Bt),ut=new Rx(O,ot,Tt,Bt,$),z=new Cx(O,E,at),jt=new mx(j),At=new qv(V,Mt,xe,E,Bt,jt),Zt=new py(V,j),Ut=new Jv,Rt=new ny(xe),se=new ux(V,Mt,x,ut,g,l),ae=new oy(V,ut,E),gt=new my(O,$,E,x),wt=new fx(O,xe,$),dt=new Tx(O,xe,$),$.programs=At.programs,V.capabilities=E,V.extensions=xe,V.properties=j,V.renderLists=Ut,V.shadowMap=ae,V.state=x,V.info=$}w!==Xn&&(T=new Px(w,e.width,e.height,o,s,r));let Jt=new bu(V,O);this.xr=Jt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let y=xe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=xe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(y){y!==void 0&&(ht=y,this.setSize(Ee,nt,!1))},this.getSize=function(y){return y.set(Ee,nt)},this.setSize=function(y,k,it=!0){if(Jt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=y,nt=k,e.width=Math.floor(y*ht),e.height=Math.floor(k*ht),it===!0&&(e.style.width=y+"px",e.style.height=k+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,y,k)},this.getDrawingBufferSize=function(y){return y.set(Ee*ht,nt*ht).floor()},this.setDrawingBufferSize=function(y,k,it){Ee=y,nt=k,ht=it,e.width=Math.floor(y*it),e.height=Math.floor(k*it),this.setViewport(0,0,y,k)},this.setEffects=function(y){if(w===Xn){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let k=0;k<y.length;k++)if(y[k].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ft)},this.getViewport=function(y){return y.copy(Ct)},this.setViewport=function(y,k,it,q){y.isVector4?Ct.set(y.x,y.y,y.z,y.w):Ct.set(y,k,it,q),x.viewport(ft.copy(Ct).multiplyScalar(ht).round())},this.getScissor=function(y){return y.copy(qt)},this.setScissor=function(y,k,it,q){y.isVector4?qt.set(y.x,y.y,y.z,y.w):qt.set(y,k,it,q),x.scissor(Kt.copy(qt).multiplyScalar(ht).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(y){x.setScissorTest(Ie=y)},this.setOpaqueSort=function(y){Lt=y},this.setTransparentSort=function(y){ie=y},this.getClearColor=function(y){return y.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(y=!0,k=!0,it=!0){let q=0;if(y){let Y=!1;if(_t!==null){let It=_t.texture.format;Y=f.has(It)}if(Y){let It=_t.texture.type,Xt=d.has(It),Ot=se.getClearColor(),Vt=se.getClearAlpha(),te=Ot.r,_e=Ot.g,Me=Ot.b;Xt?(I[0]=te,I[1]=_e,I[2]=Me,I[3]=Vt,O.clearBufferuiv(O.COLOR,0,I)):(L[0]=te,L[1]=_e,L[2]=Me,L[3]=Vt,O.clearBufferiv(O.COLOR,0,L))}else q|=O.COLOR_BUFFER_BIT}k&&(q|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),Q=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Cn,!1),se.dispose(),Ut.dispose(),Rt.dispose(),j.dispose(),Mt.dispose(),ut.dispose(),Bt.dispose(),gt.dispose(),At.dispose(),Jt.dispose(),Jt.removeEventListener("sessionstart",bs),Jt.removeEventListener("sessionend",Br),Wi.stop()};function Oe(y){y.preventDefault(),la("WebGLRenderer: Context Lost."),G=!0}function be(){la("WebGLRenderer: Context Restored."),G=!1;let y=$.autoReset,k=ae.enabled,it=ae.autoUpdate,q=ae.needsUpdate,Y=ae.type;Qt(),$.autoReset=y,ae.enabled=k,ae.autoUpdate=it,ae.needsUpdate=q,ae.type=Y}function Cn(y){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Yn(y){let k=y.target;k.removeEventListener("dispose",Yn),eo(k)}function eo(y){no(y),j.remove(y)}function no(y){let k=j.get(y).programs;k!==void 0&&(k.forEach(function(it){At.releaseProgram(it)}),y.isShaderMaterial&&At.releaseShaderCache(y))}this.renderBufferDirect=function(y,k,it,q,Y,It){k===null&&(k=ee);let Xt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Ot=ve(y,k,it,q,Y);x.setMaterial(q,Xt);let Vt=it.index,te=1;if(q.wireframe===!0){if(Vt=ot.getWireframeAttribute(it),Vt===void 0)return;te=2}let _e=it.drawRange,Me=it.attributes.position,Ht=_e.start*te,Ae=(_e.start+_e.count)*te;It!==null&&(Ht=Math.max(Ht,It.start*te),Ae=Math.min(Ae,(It.start+It.count)*te)),Vt!==null?(Ht=Math.max(Ht,0),Ae=Math.min(Ae,Vt.count)):Me!=null&&(Ht=Math.max(Ht,0),Ae=Math.min(Ae,Me.count));let Qe=Ae-Ht;if(Qe<0||Qe===1/0)return;Bt.setup(Y,q,Ot,it,Vt);let Xe,Pe=wt;if(Vt!==null&&(Xe=Tt.get(Vt),Pe=dt,Pe.setIndex(Xe)),Y.isMesh)q.wireframe===!0?(x.setLineWidth(q.wireframeLinewidth*he()),Pe.setMode(O.LINES)):Pe.setMode(O.TRIANGLES);else if(Y.isLine){let gn=q.linewidth;gn===void 0&&(gn=1),x.setLineWidth(gn*he()),Y.isLineSegments?Pe.setMode(O.LINES):Y.isLineLoop?Pe.setMode(O.LINE_LOOP):Pe.setMode(O.LINE_STRIP)}else Y.isPoints?Pe.setMode(O.POINTS):Y.isSprite&&Pe.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(xe.get("WEBGL_multi_draw"))Pe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let gn=Y._multiDrawStarts,zt=Y._multiDrawCounts,Fe=Y._multiDrawCount,Ce=Vt?Tt.get(Vt).bytesPerElement:1,Mn=j.get(q).currentProgram.getUniforms();for(let Zn=0;Zn<Fe;Zn++)Mn.setValue(O,"_gl_DrawID",Zn),Pe.render(gn[Zn]/Ce,zt[Zn])}else if(Y.isInstancedMesh)Pe.renderInstances(Ht,Qe,Y.count);else if(it.isInstancedBufferGeometry){let gn=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,zt=Math.min(it.instanceCount,gn);Pe.renderInstances(Ht,Qe,zt)}else Pe.render(Ht,Qe)};function Zs(y,k,it,q){Q!==null&&y.isNodeMaterial&&Q.setObject(q,y),mt===!0&&jt.setState(y,it,!1),y.transparent===!0&&y.side===Ni&&y.forceSinglePass===!1?(y.side=Vn,y.needsUpdate=!0,nn(y,k,q),y.side=ms,y.needsUpdate=!0,nn(y,k,q),y.side=Ni):nn(y,k,q)}this.compile=function(y,k,it=null){it===null&&(it=y),Q!==null&&Q.renderStart(y,k,it),C=Rt.get(it),C.init(k),v.push(C),it.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(C.pushLight(Y),Y.castShadow&&C.pushShadow(Y))}),y!==it&&y.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(C.pushLight(Y),Y.castShadow&&C.pushShadow(Y))}),C.setupLights(),Q!==null&&Q.updateLights(C.state.lightsArray),yt=this.localClippingEnabled,mt=jt.init(this.clippingPlanes,yt),mt===!0&&jt.setGlobalState(this.clippingPlanes,k),Q!==null&&ae.render(C.state.shadowsArray,it,k);let q=new Set;return y.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let It=Y.material;if(It)if(Array.isArray(It))for(let Xt=0;Xt<It.length;Xt++){let Ot=It[Xt];Zs(Ot,it,k,Y),q.add(Ot)}else Zs(It,it,k,Y),q.add(It)}),C=v.pop(),Q!==null&&Q.renderEnd(),q},this.compileAsync=function(y,k,it=null){let q=this.compile(y,k,it);return new Promise(Y=>{function It(){if(q.forEach(function(Xt){let Vt=j.get(Xt).currentProgram;(Vt===void 0||Vt.isReady())&&q.delete(Xt)}),q.size===0){Y(y);return}setTimeout(It,10)}xe.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Js=null;function io(y){Js&&Js(y)}function bs(){Wi.stop()}function Br(){Wi.start()}let Wi=new np;Wi.setAnimationLoop(io),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(y){Js=y,Jt.setAnimationLoop(y),y===null?Wi.stop():Wi.start()},Jt.addEventListener("sessionstart",bs),Jt.addEventListener("sessionend",Br),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Q!==null&&Q.renderStart(y,k);let it=Jt.enabled===!0&&Jt.isPresenting===!0,q=T!==null&&(_t===null||it)&&T.begin(V,_t);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Jt.enabled===!0&&Jt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Jt.cameraAutoUpdate===!0&&Jt.updateCamera(k),k=Jt.getCamera()),y.isScene===!0&&y.onBeforeRender(V,y,k,_t),C=Rt.get(y,v.length),C.init(k),C.state.textureUnits=at.getTextureUnits(),v.push(C),vt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),N.setFromProjectionMatrix(vt,vi,k.reversedDepth),yt=this.localClippingEnabled,mt=jt.init(this.clippingPlanes,yt),M=Ut.get(y,U.length),M.init(),U.push(M),Jt.enabled===!0&&Jt.isPresenting===!0){let Xt=V.xr.getDepthSensingMesh();Xt!==null&&zr(Xt,k,-1/0,V.sortObjects)}zr(y,k,0,V.sortObjects),M.finish(),Q!==null&&Q.updateLights(C.state.lightsArray),V.sortObjects===!0&&M.sort(Lt,ie),kt=Jt.enabled===!1||Jt.isPresenting===!1||Jt.hasDepthSensing()===!1,kt&&se.addToRenderList(M,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&jt.beginShadows();let Y=C.state.shadowsArray;if(ae.render(Y,y,k),mt===!0&&jt.endShadows(),(q&&T.hasRenderPass())===!1){let Xt=M.opaque,Ot=M.transmissive;if(C.setupLights(),k.isArrayCamera){let Vt=k.cameras;if(Ot.length>0)for(let te=0,_e=Vt.length;te<_e;te++){let Me=Vt[te];so(Xt,Ot,y,Me)}kt&&se.render(y);for(let te=0,_e=Vt.length;te<_e;te++){let Me=Vt[te];kr(M,y,Me,Me.viewport)}}else Ot.length>0&&so(Xt,Ot,y,k),kt&&se.render(y),kr(M,y,k)}_t!==null&&st===0&&(at.updateMultisampleRenderTarget(_t),at.updateRenderTargetMipmap(_t)),q&&T.end(V),y.isScene===!0&&y.onAfterRender(V,y,k),Bt.resetDefaultState(),rt=-1,ct=null,v.pop(),v.length>0?(C=v[v.length-1],at.setTextureUnits(C.state.textureUnits),mt===!0&&jt.setGlobalState(V.clippingPlanes,C.state.camera)):C=null,U.pop(),U.length>0?M=U[U.length-1]:M=null,Q!==null&&Q.renderEnd()};function zr(y,k,it,q){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)it=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(k);else if(y.isLightProbeGrid)C.pushLightProbeGrid(y);else if(y.isLight)C.pushLight(y),y.castShadow&&C.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(N)){q&&ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(vt);let Xt=ut.update(y),Ot=y.material;Ot.visible&&M.push(y,Xt,Ot,it,ne.z,null,k)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(N))){let Xt=ut.update(y),Ot=y.material;if(q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ne.copy(y.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),ne.copy(Xt.boundingSphere.center)),ne.applyMatrix4(y.matrixWorld).applyMatrix4(vt)),Array.isArray(Ot)){let Vt=Xt.groups;for(let te=0,_e=Vt.length;te<_e;te++){let Me=Vt[te],Ht=Ot[Me.materialIndex];Ht&&Ht.visible&&M.push(y,Xt,Ht,it,ne.z,Me,k)}}else Ot.visible&&M.push(y,Xt,Ot,it,ne.z,null,k)}}let It=y.children;for(let Xt=0,Ot=It.length;Xt<Ot;Xt++)zr(It[Xt],k,it,q)}function kr(y,k,it,q){let{opaque:Y,transmissive:It,transparent:Xt}=y;C.setupLightsView(it),mt===!0&&jt.setGlobalState(V.clippingPlanes,it),q&&x.viewport(ft.copy(q)),Y.length>0&&Rn(Y,k,it),It.length>0&&Rn(It,k,it),Xt.length>0&&Rn(Xt,k,it),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function so(y,k,it,q){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[q.id]===void 0){let Ht=xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[q.id]=new $n(1,1,{generateMipmaps:!0,type:Ht?Ei:Xn,minFilter:_s,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Te.workingColorSpace})}let It=C.state.transmissionRenderTarget[q.id],Xt=q.viewport||ft;It.setSize(Xt.z*V.transmissionResolutionScale,Xt.w*V.transmissionResolutionScale);let Ot=V.getRenderTarget(),Vt=V.getActiveCubeFace(),te=V.getActiveMipmapLevel();V.setRenderTarget(It),V.getClearColor(Re),Se=V.getClearAlpha(),Se<1&&V.setClearColor(16777215,.5),V.clear(),kt&&se.render(it);let _e=V.toneMapping;V.toneMapping=Mi;let Me=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),C.setupLightsView(q),mt===!0&&jt.setGlobalState(V.clippingPlanes,q),Rn(y,it,q),at.updateMultisampleRenderTarget(It),at.updateRenderTargetMipmap(It),xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Ae=0,Qe=k.length;Ae<Qe;Ae++){let Xe=k[Ae],{object:Pe,geometry:gn,material:zt,group:Fe}=Xe;if(zt.side===Ni&&Pe.layers.test(q.layers)){let Ce=zt.side;zt.side=Vn,zt.needsUpdate=!0,pn(Pe,it,q,gn,zt,Fe),zt.side=Ce,zt.needsUpdate=!0,Ht=!0}}Ht===!0&&(at.updateMultisampleRenderTarget(It),at.updateRenderTargetMipmap(It))}V.setRenderTarget(Ot,Vt,te),V.setClearColor(Re,Se),Me!==void 0&&(q.viewport=Me),V.toneMapping=_e}function Rn(y,k,it){let q=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,It=y.length;Y<It;Y++){let Xt=y[Y],{object:Ot,geometry:Vt,group:te}=Xt,_e=Xt.material;_e.allowOverride===!0&&q!==null&&(_e=q),Ot.layers.test(it.layers)&&pn(Ot,k,it,Vt,_e,te)}}function pn(y,k,it,q,Y,It){Q!==null&&Y.isNodeMaterial&&Q.setObject(y,Y),y.onBeforeRender(V,k,it,q,Y,It),y.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Y.onBeforeRender(V,k,it,q,y,It),Y.transparent===!0&&Y.side===Ni&&Y.forceSinglePass===!1?(Y.side=Vn,Y.needsUpdate=!0,V.renderBufferDirect(it,k,q,Y,y,It),Y.side=ms,Y.needsUpdate=!0,V.renderBufferDirect(it,k,q,Y,y,It),Y.side=Ni):V.renderBufferDirect(it,k,q,Y,y,It),y.onAfterRender(V,k,it,q,Y,It)}function nn(y,k,it){k.isScene!==!0&&(k=ee);let q=j.get(y),Y=C.state.lights,It=C.state.shadowsArray,Xt=Y.state.version,Ot=At.getParameters(y,Y.state,It,k,it,C.state.lightProbeGridArray),Vt=At.getProgramCacheKey(Ot),te=q.programs;q.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?k.environment:null,q.fog=k.fog;let _e=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;q.envMap=Mt.get(y.envMap||q.environment,_e),q.envMapRotation=q.environment!==null&&y.envMap===null?k.environmentRotation:y.envMapRotation,te===void 0&&(y.addEventListener("dispose",Yn),te=new Map,q.programs=te);let Me=te.get(Vt);if(Me!==void 0){if(q.currentProgram===Me&&q.lightsStateVersion===Xt)return oi(y,Ot),Me}else Ot.uniforms=At.getUniforms(y),Q!==null&&y.isNodeMaterial&&Q.build(y,it,Ot),y.onBeforeCompile(Ot,V),Me=At.acquireProgram(Ot,Vt),te.set(Vt,Me),q.uniforms=Ot.uniforms;let Ht=q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ht.clippingPlanes=jt.uniform),oi(y,Ot),q.needsLights=mn(y),q.lightsStateVersion=Xt,q.needsLights&&(Ht.ambientLightColor.value=Y.state.ambient,Ht.lightProbe.value=Y.state.probe,Ht.sunLights.value=Y.state.sun,Ht.sunLightShadows.value=Y.state.sunShadow,Ht.directionalLights.value=Y.state.directional,Ht.directionalLightShadows.value=Y.state.directionalShadow,Ht.spotLights.value=Y.state.spot,Ht.spotLightShadows.value=Y.state.spotShadow,Ht.rectAreaLights.value=Y.state.rectArea,Ht.ltc_1.value=Y.state.rectAreaLTC1,Ht.ltc_2.value=Y.state.rectAreaLTC2,Ht.pointLights.value=Y.state.point,Ht.pointLightShadows.value=Y.state.pointShadow,Ht.hemisphereLights.value=Y.state.hemi,Ht.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ht.sunShadowCascade.value=Y.state.sunShadowCascade,Ht.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ht.spotLightMatrix.value=Y.state.spotLightMatrix,Ht.spotLightMap.value=Y.state.spotLightMap,Ht.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=C.state.lightProbeGridArray.length>0,q.currentProgram=Me,q.uniformsList=null,Me}function ai(y){if(y.uniformsList===null){let k=y.currentProgram.getUniforms();y.uniformsList=Dr.seqWithValue(k.seq,y.uniforms)}return y.uniformsList}function oi(y,k){let it=j.get(y);it.outputColorSpace=k.outputColorSpace,it.batching=k.batching,it.batchingColor=k.batchingColor,it.instancing=k.instancing,it.instancingColor=k.instancingColor,it.instancingMorph=k.instancingMorph,it.skinning=k.skinning,it.morphTargets=k.morphTargets,it.morphNormals=k.morphNormals,it.morphColors=k.morphColors,it.morphTargetsCount=k.morphTargetsCount,it.numClippingPlanes=k.numClippingPlanes,it.numIntersection=k.numClipIntersection,it.vertexAlphas=k.vertexAlphas,it.vertexTangents=k.vertexTangents,it.toneMapping=k.toneMapping}function cn(y,k){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;b.setFromMatrixPosition(k.matrixWorld);for(let it=0,q=y.length;it<q;it++){let Y=y[it];if(Y.texture!==null&&Y.boundingBox.containsPoint(b))return Y}return null}function ve(y,k,it,q,Y){k.isScene!==!0&&(k=ee),at.resetTextureUnits();let It=k.fog,Xt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?k.environment:null,Ot=_t===null?V.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Te.workingColorSpace,Vt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,te=Mt.get(q.envMap||Xt,Vt),_e=q.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Me=!!it.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ht=!!it.morphAttributes.position,Ae=!!it.morphAttributes.normal,Qe=!!it.morphAttributes.color,Xe=Mi;q.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Xe=V.toneMapping);let Pe=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,gn=Pe!==void 0?Pe.length:0,zt=j.get(q),Fe=C.state.lights;if(mt===!0&&(yt===!0||y!==ct)){let Ne=y===ct&&q.id===rt;jt.setState(q,y,Ne)}let Ce=!1;q.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Fe.state.version||zt.outputColorSpace!==Ot||Y.isBatchedMesh&&zt.batching===!1||!Y.isBatchedMesh&&zt.batching===!0||Y.isBatchedMesh&&zt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&zt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&zt.instancing===!1||!Y.isInstancedMesh&&zt.instancing===!0||Y.isSkinnedMesh&&zt.skinning===!1||!Y.isSkinnedMesh&&zt.skinning===!0||Y.isInstancedMesh&&zt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&zt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&zt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&zt.instancingMorph===!1&&Y.morphTexture!==null||zt.envMap!==te||q.fog===!0&&zt.fog!==It||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==jt.numPlanes||zt.numIntersection!==jt.numIntersection)||zt.vertexAlphas!==_e||zt.vertexTangents!==Me||zt.morphTargets!==Ht||zt.morphNormals!==Ae||zt.morphColors!==Qe||zt.toneMapping!==Xe||zt.morphTargetsCount!==gn||!!zt.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(Ce=!0):(Ce=!0,zt.__version=q.version);let Mn=zt.currentProgram;Ce===!0&&(Mn=nn(q,k,Y),Q&&q.isNodeMaterial&&Q.onUpdateProgram(q,Mn,zt));let Zn=!1,sn=!1,$i=!1,Be=Mn.getUniforms(),Ve=zt.uniforms;if(x.useProgram(Mn.program)&&(Zn=!0,sn=!0,$i=!0),q.id!==rt&&(rt=q.id,sn=!0),zt.needsLights){let Ne=cn(C.state.lightProbeGridArray,Y);zt.lightProbeGrid!==Ne&&(zt.lightProbeGrid=Ne,sn=!0)}if(Zn||ct!==y){x.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Be.setValue(O,"projectionMatrix",y.projectionMatrix),Be.setValue(O,"viewMatrix",y.matrixWorldInverse);let hn=Be.map.cameraPosition;hn!==void 0&&hn.setValue(O,St.setFromMatrixPosition(y.matrixWorld)),E.logarithmicDepthBuffer&&Be.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Be.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),ct!==y&&(ct=y,sn=!0,$i=!0)}if(zt.needsLights&&(Fe.state.sunShadowMap.length>0&&Be.setValue(O,"sunShadowMap",Fe.state.sunShadowMap,at),Fe.state.directionalShadowMap.length>0&&Be.setValue(O,"directionalShadowMap",Fe.state.directionalShadowMap,at),Fe.state.spotShadowMap.length>0&&Be.setValue(O,"spotShadowMap",Fe.state.spotShadowMap,at),Fe.state.pointShadowMap.length>0&&Be.setValue(O,"pointShadowMap",Fe.state.pointShadowMap,at)),Y.isSkinnedMesh){Be.setOptional(O,Y,"bindMatrix"),Be.setOptional(O,Y,"bindMatrixInverse");let Ne=Y.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),Be.setValue(O,"boneTexture",Ne.boneTexture,at))}Y.isBatchedMesh&&(Be.setOptional(O,Y,"batchingTexture"),Be.setValue(O,"batchingTexture",Y._matricesTexture,at),Be.setOptional(O,Y,"batchingIdTexture"),Be.setValue(O,"batchingIdTexture",Y._indirectTexture,at),Be.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Be.setValue(O,"batchingColorTexture",Y._colorsTexture,at));let Jn=it.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&z.update(Y,it,Mn),(sn||zt.receiveShadow!==Y.receiveShadow)&&(zt.receiveShadow=Y.receiveShadow,Be.setValue(O,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&k.environment!==null&&(Ve.envMapIntensity.value=k.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=_y()),sn){if(Be.setValue(O,"toneMappingExposure",V.toneMappingExposure),zt.needsLights&&Je(Ve,$i),It&&q.fog===!0&&Zt.refreshFogUniforms(Ve,It),Zt.refreshMaterialUniforms(Ve,q,ht,nt,C.state.transmissionRenderTarget[y.id]),zt.needsLights&&zt.lightProbeGrid){let Ne=zt.lightProbeGrid;Ve.probesSH.value=Ne.texture,Ve.probesMin.value.copy(Ne.boundingBox.min),Ve.probesMax.value.copy(Ne.boundingBox.max),Ve.probesResolution.value.copy(Ne.resolution)}Dr.upload(O,ai(zt),Ve,at)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Dr.upload(O,ai(zt),Ve,at),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Be.setValue(O,"center",Y.center),Be.setValue(O,"modelViewMatrix",Y.modelViewMatrix),Be.setValue(O,"normalMatrix",Y.normalMatrix),Be.setValue(O,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let Ne=q.uniformsGroups;for(let hn=0,Xi=Ne.length;hn<Xi;hn++){let qe=Ne[hn];gt.update(qe,Mn),gt.bind(qe,Mn)}}return Mn}function Je(y,k){y.ambientLightColor.needsUpdate=k,y.lightProbe.needsUpdate=k,y.sunLights.needsUpdate=k,y.sunLightShadows.needsUpdate=k,y.directionalLights.needsUpdate=k,y.directionalLightShadows.needsUpdate=k,y.pointLights.needsUpdate=k,y.pointLightShadows.needsUpdate=k,y.spotLights.needsUpdate=k,y.spotLightShadows.needsUpdate=k,y.rectAreaLights.needsUpdate=k,y.hemisphereLights.needsUpdate=k}function mn(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return lt},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return _t},this.setRenderTargetTextures=function(y,k,it){let q=j.get(y);q.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),j.get(y.texture).__webglTexture=k,j.get(y.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:it,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,k){let it=j.get(y);it.__webglFramebuffer=k,it.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(y,k=0,it=0){_t=y,lt=k,st=it;let q=null,Y=!1,It=!1;if(y){let Ot=j.get(y);if(Ot.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(O.FRAMEBUFFER,Ot.__webglFramebuffer),ft.copy(y.viewport),Kt.copy(y.scissor),$t=y.scissorTest,x.viewport(ft),x.scissor(Kt),x.setScissorTest($t),rt=-1;return}else if(Ot.__webglFramebuffer===void 0)at.setupRenderTarget(y);else if(Ot.__hasExternalTextures)at.rebindTextures(y,j.get(y.texture).__webglTexture,j.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let _e=y.depthTexture;if(Ot.__boundDepthTexture!==_e){if(_e!==null&&j.has(_e)&&(y.width!==_e.image.width||y.height!==_e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(y)}}let Vt=y.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(It=!0);let te=j.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(te[k])?q=te[k][it]:q=te[k],Y=!0):y.samples>0&&at.useMultisampledRTT(y)===!1?q=j.get(y).__webglMultisampledFramebuffer:Array.isArray(te)?q=te[it]:q=te,ft.copy(y.viewport),Kt.copy(y.scissor),$t=y.scissorTest}else ft.copy(Ct).multiplyScalar(ht).floor(),Kt.copy(qt).multiplyScalar(ht).floor(),$t=Ie;if(it!==0&&(q=tt),x.bindFramebuffer(O.FRAMEBUFFER,q)&&x.drawBuffers(y,q),x.viewport(ft),x.scissor(Kt),x.setScissorTest($t),Y){let Ot=j.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ot.__webglTexture,it)}else if(It){let Ot=k;for(let Vt=0;Vt<y.textures.length;Vt++){let te=j.get(y.textures[Vt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Vt,te.__webglTexture,it,Ot)}}else if(y!==null&&it!==0){let Ot=j.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ot.__webglTexture,it)}rt=-1};function Vr(y){let k=j.get(y);return(k.__readFormat!==y.format||k.__readType!==y.type)&&(k.__readFormat=y.format,k.__readType=y.type,k.__formatReadable=E.textureFormatReadable(y.format),k.__typeReadable=E.textureTypeReadable(y.type)),k}this.readRenderTargetPixels=function(y,k,it,q,Y,It,Xt,Ot=0){if(!(y&&y.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=j.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Xt!==void 0&&(Vt=Vt[Xt]),Vt){x.bindFramebuffer(O.FRAMEBUFFER,Vt);try{let te=y.textures[Ot],_e=te.format,Me=te.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ot);let Ht=Vr(te);if(Ht.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=y.width-q&&it>=0&&it<=y.height-Y&&O.readPixels(k,it,q,Y,Pt.convert(_e),Pt.convert(Me),It)}finally{let te=_t!==null?j.get(_t).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(y,k,it,q,Y,It,Xt,Ot=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=j.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Xt!==void 0&&(Vt=Vt[Xt]),Vt)if(k>=0&&k<=y.width-q&&it>=0&&it<=y.height-Y){x.bindFramebuffer(O.FRAMEBUFFER,Vt);let te=y.textures[Ot],_e=te.format,Me=te.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ot);let Ht=Vr(te);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ae=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ae),O.bufferData(O.PIXEL_PACK_BUFFER,It.byteLength,O.STREAM_READ),O.readPixels(k,it,q,Y,Pt.convert(_e),Pt.convert(Me),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Qe=_t!==null?j.get(_t).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,Qe);let Xe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Tf(O,Xe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ae),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,It),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Ae),O.deleteSync(Xe),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,k=null,it=0){let q=Math.pow(2,-it),Y=Math.floor(y.image.width*q),It=Math.floor(y.image.height*q),Xt=k!==null?k.x:0,Ot=k!==null?k.y:0;at.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,it,0,0,Xt,Ot,Y,It),x.unbindTexture()},this.copyTextureToTexture=function(y,k,it=null,q=null,Y=0,It=0){let Xt,Ot,Vt,te,_e,Me,Ht,Ae,Qe,Xe=y.isCompressedTexture?y.mipmaps[It]:y.image;if(it!==null)Xt=it.max.x-it.min.x,Ot=it.max.y-it.min.y,Vt=it.isBox3?it.max.z-it.min.z:1,te=it.min.x,_e=it.min.y,Me=it.isBox3?it.min.z:0;else{let Ve=Math.pow(2,-Y);Xt=Math.floor(Xe.width*Ve),Ot=Math.floor(Xe.height*Ve),y.isDataArrayTexture?Vt=Xe.depth:y.isData3DTexture?Vt=Math.floor(Xe.depth*Ve):Vt=1,te=0,_e=0,Me=0}q!==null?(Ht=q.x,Ae=q.y,Qe=q.z):(Ht=0,Ae=0,Qe=0);let Pe=Pt.convert(k.format),gn=Pt.convert(k.type),zt;k.isData3DTexture?(at.setTexture3D(k,0),zt=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(at.setTexture2DArray(k,0),zt=O.TEXTURE_2D_ARRAY):(at.setTexture2D(k,0),zt=O.TEXTURE_2D),x.activeTexture(O.TEXTURE0),x.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),x.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),x.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let Fe=x.getParameter(O.UNPACK_ROW_LENGTH),Ce=x.getParameter(O.UNPACK_IMAGE_HEIGHT),Mn=x.getParameter(O.UNPACK_SKIP_PIXELS),Zn=x.getParameter(O.UNPACK_SKIP_ROWS),sn=x.getParameter(O.UNPACK_SKIP_IMAGES);x.pixelStorei(O.UNPACK_ROW_LENGTH,Xe.width),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Xe.height),x.pixelStorei(O.UNPACK_SKIP_PIXELS,te),x.pixelStorei(O.UNPACK_SKIP_ROWS,_e),x.pixelStorei(O.UNPACK_SKIP_IMAGES,Me);let $i=y.isDataArrayTexture||y.isData3DTexture,Be=k.isDataArrayTexture||k.isData3DTexture;if(y.isDepthTexture){let Ve=j.get(y),Jn=j.get(k),Ne=j.get(Ve.__renderTarget),hn=j.get(Jn.__renderTarget);x.bindFramebuffer(O.READ_FRAMEBUFFER,Ne.__webglFramebuffer),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,hn.__webglFramebuffer);for(let Xi=0;Xi<Vt;Xi++)$i&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,j.get(y).__webglTexture,Y,Me+Xi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,j.get(k).__webglTexture,It,Qe+Xi)),O.blitFramebuffer(te,_e,Xt,Ot,Ht,Ae,Xt,Ot,O.DEPTH_BUFFER_BIT,O.NEAREST);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Y!==0||y.isRenderTargetTexture||j.has(y)){let Ve=j.get(y),Jn=j.get(k);x.bindFramebuffer(O.READ_FRAMEBUFFER,H),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,J);for(let Ne=0;Ne<Vt;Ne++)$i?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ve.__webglTexture,Y,Me+Ne):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ve.__webglTexture,Y),Be?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Jn.__webglTexture,It,Qe+Ne):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Jn.__webglTexture,It),Y!==0?O.blitFramebuffer(te,_e,Xt,Ot,Ht,Ae,Xt,Ot,O.COLOR_BUFFER_BIT,O.NEAREST):Be?O.copyTexSubImage3D(zt,It,Ht,Ae,Qe+Ne,te,_e,Xt,Ot):O.copyTexSubImage2D(zt,It,Ht,Ae,te,_e,Xt,Ot);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Be?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(zt,It,Ht,Ae,Qe,Xt,Ot,Vt,Pe,gn,Xe.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(zt,It,Ht,Ae,Qe,Xt,Ot,Vt,Pe,Xe.data):O.texSubImage3D(zt,It,Ht,Ae,Qe,Xt,Ot,Vt,Pe,gn,Xe):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,It,Ht,Ae,Xt,Ot,Pe,gn,Xe.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,It,Ht,Ae,Xe.width,Xe.height,Pe,Xe.data):O.texSubImage2D(O.TEXTURE_2D,It,Ht,Ae,Xt,Ot,Pe,gn,Xe);x.pixelStorei(O.UNPACK_ROW_LENGTH,Fe),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ce),x.pixelStorei(O.UNPACK_SKIP_PIXELS,Mn),x.pixelStorei(O.UNPACK_SKIP_ROWS,Zn),x.pixelStorei(O.UNPACK_SKIP_IMAGES,sn),It===0&&k.generateMipmaps&&O.generateMipmap(zt),x.unbindTexture()},this.initRenderTarget=function(y){j.get(y).__webglFramebuffer===void 0&&at.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?at.setTextureCube(y,0):y.isData3DTexture?at.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?at.setTexture2DArray(y,0):at.setTexture2D(y,0),x.unbindTexture()},this.resetState=function(){lt=0,st=0,_t=null,x.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}};var hp=new ni,Sc=new F,es=class extends Da{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new un(t,3)),this.setAttribute("uv",new un(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new ps(e,6,1);return this.setAttribute("instanceStart",new Si(n,3,0)),this.setAttribute("instanceEnd",new Si(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new ps(e,6,1);return this.setAttribute("instanceColorStart",new Si(n,3,0)),this.setAttribute("instanceColorEnd",new Si(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Ta(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),hp.setFromBufferAttribute(e),this.boundingBox.union(hp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Sc.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Sc)),Sc.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Sc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Nt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Dt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Hn.line={uniforms:Wa.merge([Nt.common,Nt.fog,Nt.line]),vertexShader:`
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
		`};var Oi=class extends Sn{constructor(t){super({type:"LineMaterial",uniforms:Wa.clone(Hn.line.uniforms),vertexShader:Hn.line.vertexShader,fragmentShader:Hn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var wu=new ke,up=new F,dp=new F,wn=new ke,En=new ke,Bi=new ke,Eu=new F,Tu=new We,Tn=new Na,fp=new F,Mc=new ni,bc=new di,zi=new ke,ki,Hs;function pp(i,t,e){return zi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),zi.multiplyScalar(1/zi.w),zi.x=Hs/e.width,zi.y=Hs/e.height,zi.applyMatrix4(i.projectionMatrixInverse),zi.multiplyScalar(1/zi.w),Math.abs(Math.max(zi.x,zi.y))}function xy(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Tn.start.fromBufferAttribute(s,o),Tn.end.fromBufferAttribute(r,o),Tn.applyMatrix4(e);let c=new F,h=new F;ki.distanceSqToSegment(Tn.start,Tn.end,h,c),h.distanceTo(c)<Hs*.5&&t.push({point:h,pointOnLine:c,distance:ki.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function vy(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),p=-t.near;ki.at(1,Bi),Bi.w=1,Bi.applyMatrix4(t.matrixWorldInverse),Bi.applyMatrix4(n),Bi.multiplyScalar(1/Bi.w),Bi.x*=r.x/2,Bi.y*=r.y/2,Bi.z=0,Eu.copy(Bi),Tu.multiplyMatrices(t.matrixWorldInverse,a);for(let u=0,m=h;u<m;u++){if(wn.fromBufferAttribute(l,u),En.fromBufferAttribute(c,u),wn.w=1,En.w=1,wn.applyMatrix4(Tu),En.applyMatrix4(Tu),wn.z>p&&En.z>p)continue;if(wn.z>p){let L=wn.z-En.z,b=(wn.z-p)/L;wn.lerp(En,b)}else if(En.z>p){let L=En.z-wn.z,b=(En.z-p)/L;En.lerp(wn,b)}wn.applyMatrix4(n),En.applyMatrix4(n),wn.multiplyScalar(1/wn.w),En.multiplyScalar(1/En.w),wn.x*=r.x/2,wn.y*=r.y/2,En.x*=r.x/2,En.y*=r.y/2,Tn.start.copy(wn),Tn.start.z=0,Tn.end.copy(En),Tn.end.z=0;let w=Tn.closestPointToPointParameter(Eu,!0);Tn.at(w,fp);let f=iu.lerp(wn.z,En.z,w),d=f>=-1&&f<=1,I=Eu.distanceTo(fp)<Hs*.5;if(d&&I){Tn.start.fromBufferAttribute(l,u),Tn.end.fromBufferAttribute(c,u),Tn.start.applyMatrix4(a),Tn.end.applyMatrix4(a);let L=new F,b=new F;ki.distanceSqToSegment(Tn.start,Tn.end,b,L),e.push({point:b,pointOnLine:L,distance:ki.origin.distanceTo(b),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}}var Gs=class extends Nn{constructor(t=new es,e=new Oi({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)up.fromBufferAttribute(e,a),dp.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+up.distanceTo(dp);let r=new ps(s,2,1);return t.setAttribute("instanceDistanceStart",new Si(r,1,0)),t.setAttribute("instanceDistanceEnd",new Si(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;ki=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;Hs=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),bc.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=Hs*.5;else{let p=Math.max(s.near,bc.distanceToPoint(ki.origin));c=pp(s,p,l.resolution)}if(bc.radius+=c,ki.intersectsSphere(bc)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Mc.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=Hs*.5;else{let p=Math.max(s.near,Mc.distanceToPoint(ki.origin));h=pp(s,p,l.resolution)}Mc.expandByScalar(h),ki.intersectsBox(Mc)!==!1&&(n?xy(this,e):vy(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(wu),this.material.uniforms.resolution.value.set(wu.z,wu.w))}};function mp(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:l,CY:c,mcs:h,q:p,list:u,clamp:m,norm:g,munis:w}=i,f=_=>document.querySelector(_),d=_=>String(_).replace(/[<>&"]/g,S=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[S]),I=(_,S)=>[(_-l)*o,(S-c)*o],L=.06,b=t.segs.map(_=>{let S=[],A=[0];for(let D=0;D<_.length;D+=2){let P=I(_[D],_[D+1]);S.length&&A.push(A[A.length-1]+Math.hypot(P[0]-S[S.length-1][0],P[1]-S[S.length-1][1])),S.push(P)}return{p:S,c:A,L:A[A.length-1]}}),M=t.stops.map(([_,S,A,D])=>({n:_,id:D,w:I(S,A),fams:new Set})),C=t.routes.map(([_,S,A])=>({s:_,l:S,c:A})),U=(_,S)=>{let A=_.match(/^R([A-Z]*)(\d*)(.*)$/),D=S.match(/^R([A-Z]*)(\d*)(.*)$/);return(A[1]||"").localeCompare(D[1]||"")||(+A[2]||0)-(+D[2]||0)||A[3].localeCompare(D[3])},v=[...new Set(C.map(_=>_.s))].sort(U),T={};C.forEach(_=>{T[_.s]||(T[_.s]=_.c)});let V=t.pats.map(([_,S,A])=>({stops:_,t:S,segs:A})),G=t.trips.map(([_,S,A,D,P],B)=>({day:_,pat:V[S],fam:C[A].s,c:C[A].c,t0:D,num:P,tid:t.tids[B]})),Q={};v.forEach(_=>Q[_]=new Set),G.forEach(_=>{_.pat.segs.forEach(S=>Q[_.fam].add(S)),_.pat.stops.forEach(S=>M[S].fams.add(_.fam))});let tt=t.days.map((_,S)=>G.filter(A=>A.day===S)),H=new Map(G.map(_=>[_.tid,_])),J=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],lt=Math.PI/180,st=3.922*lt,_t=-39.705*lt;function rt(_,S){let A=_*lt+st,D=S*lt,P=Math.cos(_t),B=Math.sin(_t),Z=Math.cos(D),W=Math.cos(A)*Z,X=Math.sin(A)*Z,et=Math.sin(D),pt=Math.atan2(X,W*P-et*B),R=Math.asin(et*P+W*B),K=Math.sqrt(2/(1+Math.cos(pt)*Math.cos(R))),bt=K*Math.cos(R)*Math.sin(pt),Et=K*Math.sin(R),[re,xt,Gt,Wt,Yt,pe,ue]=J;return I((xt+re*bt-Yt)*ue,(pe-(Wt-Gt*Et))*ue)}let ct=new Map(M.map((_,S)=>[_.id,S]));function ft(_){if(_.g)return _.g;let S=[],A=[],D=[0],P=0;return _.segs.forEach((B,Z)=>{let W=b[B];W.p.forEach((X,et)=>{Z&&!et||(S.push(X),A.push(P+W.c[et]))}),P+=W.L,D.push(P)}),_.g={pts:S,cum:A,stopD:D}}function Kt(_,S,A,D){let P=1e18,B=0;for(let Z=0;Z+1<_.pts.length;Z++){if(_.cum[Z+1]<A||_.cum[Z]>D)continue;let W=_.pts[Z],X=_.pts[Z+1],et=X[0]-W[0],pt=X[1]-W[1],R=et*et+pt*pt||1e-9,K=Math.max(0,Math.min(1,((S[0]-W[0])*et+(S[1]-W[1])*pt)/R)),bt=W[0]+et*K-S[0],Et=W[1]+pt*K-S[1],re=bt*bt+Et*Et;re<P&&(P=re,B=_.cum[Z]+K*(_.cum[Z+1]-_.cum[Z]))}return{d:B,err:Math.sqrt(P)}}function $t(_,S){let A=0,D=_.cum.length-1;if(S<=0)return _.pts[0];if(S>=_.cum[D])return _.pts[D];for(;D-A>1;){let W=A+D>>1;_.cum[W]<=S?A=W:D=W}let P=(S-_.cum[A])/(_.cum[D]-_.cum[A]||1),B=_.pts[A],Z=_.pts[D];return[B[0]+(Z[0]-B[0])*P,B[1]+(Z[1]-B[1])*P]}let Re=_=>`${_.slice(6,8)}/${_.slice(4,6)}`,Se=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Ee(_){let S={};return Se.formatToParts(_).forEach(A=>S[A.type]=A.value),{ymd:S.year+S.month+S.day,min:+S.hour*60+ +S.minute+ +S.second/60}}let nt=0,ht=null,Lt=0,ie=0;function Ct(){let _=Ee(new Date);if(nt===0&&ht==null)return{..._,live:!0};let S=ht==null?_.min:Lt+(nt?(performance.now()-ie)/6e4*nt:0);return{ymd:_.ymd,min:S,live:!1}}let qt=_=>(_=(Math.round(_)%1440+1440)%1440,String(Math.floor(_/60)).padStart(2,"0")+":"+String(_%60).padStart(2,"0")),Ie="https://rodalies.erathegameoftime.com",N={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let _=new URLSearchParams(location.search).get("rt");_&&localStorage.setItem("rod_rt",_);let S=localStorage.getItem("rod_rt");S&&/jhmuyo\.workers\.dev/.test(S)&&(S=Ie,localStorage.setItem("rod_rt",S)),N.url=S||Ie}catch{N.url=Ie}let mt=(_,S)=>fetch(_+S,{cache:"no-store"}).then(A=>{if(!A.ok)throw new Error("HTTP "+A.status);return A.json()}),yt=_=>/^51/.test(_||"");async function vt(){if(!N.url){ne();return}let _=N.url.replace(/\/+$/,"");(!N.repFail||Date.now()-N.repFail>15*6e4)&&mt(_,"/reports.json").then(X=>{X&&Array.isArray(X.items)?(N.rep=X.items,N.repSkew=(X.now||Date.now())-Date.now(),X.tipos&&(N.tipos=X.tipos),N.repOk=Date.now(),N.repFail=0):N.repFail=Date.now()}).catch(()=>{N.repFail=Date.now(),N.repOk=0});let S=!N.adifAt||Date.now()-N.adifAt>11e4,[A,D,P,B,Z]=await Promise.allSettled([mt(_,"/trip_updates.json"),mt(_,"/vehicle_positions.json"),mt(_,"/alerts.json"),mt(_,"/notices.json"),S?mt(_,"/adif.json"):Promise.reject(0)]);if(Z.status==="fulfilled"&&Z.value&&Z.value.ok?(N.adif=Z.value,N.adifAt=Date.now()):S&&(N.adifAt=Date.now()-6e4),A.status==="fulfilled"){let X=new Map,et=new Map;for(let pt of A.value.entity||[]){let R=pt.tripUpdate;if(!R||!R.trip||!yt(R.trip.tripId))continue;let K=R.trip.tripId,bt=(R.stopTimeUpdate||[])[0],Et=R.delay;Et==null&&bt&&(Et=(bt.arrival||bt.departure||{}).delay),R.trip.scheduleRelationship==="CANCELED"&&(Et="X"),Et!=null&&X.set(K,Et),et.set(K,{next:bt?{sid:bt.stopId,t:+((bt.arrival||bt.departure||{}).time||0)}:null})}N.delays=X,N.tu=et,N.ok=Date.now(),N.feedTs=+((A.value.header||{}).timestamp||0)*1e3,N.err=""}else N.err=A.reason&&A.reason.message||"sin respuesta";if(D.status==="fulfilled"){let X=new Map,et=Date.now()/1e3;for(let pt of D.value.entity||[]){let R=pt.vehicle;if(!R||!R.trip||!yt(R.trip.tripId)||!R.position)continue;let K=R.vehicle&&R.vehicle.label||"",bt=K.match(/PLATF\.\(([^)]+)\)/),Et=N.vp.get(R.trip.tripId),re={tid:R.trip.tripId,w:rt(+R.position.longitude,+R.position.latitude),st:R.currentStatus||"",sid:R.stopId||"",ts:+R.timestamp||et,label:K,plat:bt?bt[1]:"",fam:(K.split("-")[0]||"").trim(),num:R.vehicle&&R.vehicle.id||""};re.disp=Et?Et.disp:null,X.set(re.tid,re)}N.vp=X,N.okVP=Date.now()}let W=[];if(B.status==="fulfilled"&&Array.isArray(B.value.included)){N.okNotices=Date.now();for(let X of B.value.included){let et=new Set((X.lines||[]).map(K=>K.id).filter(K=>T[K])),pt=K=>((K||{}).es||(K||{}).ca||"").trim(),R=[pt(X.description),pt(X.title)].sort((K,bt)=>bt.length-K.length)[0];R&&W.push({id:"N"+X.externalId,fams:et,stops:new Set,txt:R,when:(X.date||"")+"T"+(X.time||""),src:"Rodalies",core:X.core||""})}}if(P.status==="fulfilled"){let X=+((P.value.header||{}).timestamp||0);if(N.alertsTs=X,Date.now()/1e3-X<6*3600)for(let et of P.value.entity||[]){let pt=et.alert;if(!pt)continue;let R=new Set,K=new Set;for(let xt of pt.informedEntity||[])(xt.routeId||"").startsWith("51")&&R.add(xt.routeId.replace(/^51T\d+/,"")),xt.stopId&&ct.has(xt.stopId)&&K.add(ct.get(xt.stopId));if(!R.size&&!K.size)continue;let bt=(pt.descriptionText||pt.headerText||{translation:[]}).translation||[],Et=((bt.find(xt=>xt.language==="es")||bt[0]||{}).text||"").trim(),re=+((pt.activePeriod||[])[0]||{}).start||0;W.some(xt=>xt.txt===Et)||W.push({id:et.id,fams:R,stops:K,txt:Et,when:re?new Date(re*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(N.adif&&Date.now()-N.adifAt<15*6e4)for(let[X,et]of(N.adif.items||[]).entries()){let pt=(et.t?et.t+". ":"")+et.txt,R=new Set,K=new Set,bt=g(pt);for(let Et of pt.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))T[Et[1]]&&R.add(Et[1]);M.forEach((Et,re)=>{Et.fams.size&&Et.n.length>4&&bt.includes(g(Et.n))&&(K.add(re),R.size||Et.fams.forEach(xt=>R.add(xt)))}),W.some(Et=>Et.txt===pt)||W.push({id:"A"+X,fams:R,stops:K,txt:pt,when:N.adif.upd||"",src:"Adif",lvl:et.lvl})}if(B.status==="fulfilled"||P.status==="fulfilled"||N.adif){N.alerts=W.sort((X,et)=>et.when>X.when?1:-1);try{tm()}catch{}}ne(),kc(),oi=0,a()}let St=()=>N.okVP&&Date.now()-N.okVP<9e4;function ne(){let _=f("#rtst"),S=f("#mode");if(S){let D=!!St()&&Ct().live;S.classList.toggle("on",D),S.classList.toggle("pre",!D),S.textContent=D?"En directo":"Previsi\xF3n"}if(!_)return;N.url?N.err?_.textContent="No se pudo conectar con el puente ("+N.err+"). Se usa el horario.":St()?_.innerHTML=`Conectado \xB7 ${N.vp.size} trenes con posici\xF3n real y ${N.delays.size} con retraso \xB7 actualizado a las ${new Date(N.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:_.textContent="Conectando\u2026":_.textContent=N.err||"Sin puente: trenes seg\xFAn horario oficial.";let A=f("#rturl");A&&A._shown!==N.url&&(A.value=N.url,A._shown=N.url)}f("#rtsave").onclick=()=>{let _=f("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(_&&!/^https?:\/\//.test(_)&&(_="https://"+_),!_){N.err="pega la direcci\xF3n de tu puente",ne();return}N.url=_;try{localStorage.setItem("rod_rt",_)}catch{}N.ok=0,N.err="",ne(),vt()},f("#rtoff").onclick=()=>{N.url=Ie;try{localStorage.removeItem("rod_rt")}catch{}h._h="",vt()},setInterval(vt,2e4),setTimeout(vt,50);let ee=_=>{if(!St())return null;let S=N.delays.get(_.tid),A=N.vp.get(_.tid);return S==="X"?S:A&&A.pre&&A.preDl>=1?Math.max(typeof S=="number"?S:0,A.preDl*60):S??null},kt=new Set(v),he=new es,O=new es,De=new Oi({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),xe=new Oi({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),E=new Gs(he,De),x=new Gs(O,xe);x.renderOrder=20,E.renderOrder=21,E.frustumCulled=x.frustumCulled=!1,e.add(x,E);let $=!1;function j(){if($||!w.length)return;$=!0,e.updateMatrixWorld(!0);let _=new Os,S=w.map(P=>P.mesh),A=new F(0,0,-1);M.forEach(P=>{_.set(new F(P.w[0],P.w[1],50),A),P.ext=!_.intersectObjects(S,!1).length});let D=(P,B)=>M.findIndex(Z=>Math.hypot(Z.w[0]-P[0],Z.w[1]-P[1])<.05);b.forEach(P=>{let B=D(P.p[0]),Z=D(P.p[P.p.length-1]),W=X=>(_.set(new F(X[0],X[1],50),A),!_.intersectObjects(S,!1).length);P.ext=(B>=0?M[B].ext:W(P.p[0]))&&(Z>=0?M[Z].ext:W(P.p[P.p.length-1]))})}let at=()=>{let _=new Set(kt.size<=2?kt:[]);try{ve&&ve.fam&&_.add(ve.fam)}catch{}return _},Mt="";function Tt(){j();let _=[],S=[],A=new Set,D=new le,P=new le("#d2d0d0"),B=at();Mt=[...B].join();for(let Z of v)if(kt.has(Z))for(let W of Q[Z]){if(A.has(W))continue;A.add(W);let X=b[W].p;D.set(T[Z]),b[W].ext&&!B.has(Z)&&D.lerp(P,.72);for(let et=0;et+1<X.length;et++)_.push(X[et][0],X[et][1],L,X[et+1][0],X[et+1][1],L),S.push(D.r,D.g,D.b,D.r,D.g,D.b)}_.length||(_.push(0,0,-50,0,0,-50),S.push(0,0,0,0,0,0)),he.setPositions(_),he.setColors(S),O.setPositions(_),a()}Tt();let ot=_=>new Sn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new le(_)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),ut=new rn,At=M.length,Zt=new Float32Array(At*3),Ut=new Float32Array(At*3),Rt=new Float32Array(At),jt=new Float32Array(At);M.forEach((_,S)=>{Zt[S*3]=_.w[0],Zt[S*3+1]=_.w[1],Zt[S*3+2]=L,Ut.set([1,1,1],S*3),Rt[S]=6,jt[S]=1.6}),ut.setAttribute("position",new Ye(Zt,3)),ut.setAttribute("fill",new Ye(Ut,3)),ut.setAttribute("size",new Ye(Rt,1)),ut.setAttribute("bw",new Ye(jt,1));let ae=new Ns(ut,ot("#1d2330"));ae.renderOrder=22,ae.frustumCulled=!1,e.add(ae);function se(){let _=r.dist<45,S=at();M.forEach((A,D)=>{let P=[...A.fams].some(Z=>kt.has(Z)),B=A.ext&&![...A.fams].some(Z=>S.has(Z))&&D!==Je;Rt[D]=P?D===Je?13:B?3:_?8:5:0,jt[D]=D===Je?3:1.6}),ut.attributes.size.needsUpdate=!0,ut.attributes.bw.needsUpdate=!0}let z=600,wt=new rn,dt=new Float32Array(z*3),Pt=new Float32Array(z*3),Bt=new Float32Array(z),gt=new Float32Array(z);wt.setAttribute("position",new Ye(dt,3)),wt.setAttribute("fill",new Ye(Pt,3)),wt.setAttribute("size",new Ye(Bt,1)),wt.setAttribute("bw",new Ye(gt,1));let Qt=new Float32Array(z);wt.setAttribute("ang",new Ye(Qt,1));let Jt=new Sn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new le("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Oe=new Ns(wt,Jt);Oe.renderOrder=24,Oe.frustumCulled=!1,e.add(Oe);let be=new rn,Cn=new Float32Array(z*3),Yn=new Float32Array(z*3),eo=new Float32Array(z),no=new Float32Array(z);be.setAttribute("position",new Ye(Cn,3)),be.setAttribute("fill",new Ye(Yn,3)),be.setAttribute("size",new Ye(eo,1)),be.setAttribute("bw",new Ye(no,1));let Zs=new Ns(be,ot("#ffffff"));Zs.renderOrder=23,Zs.frustumCulled=!1,e.add(Zs);function Js(_,S){let A=b[_],D=S*A.L,P=0,B=A.c.length-1;for(;B-P>1;){let pt=P+B>>1;A.c[pt]<=D?P=pt:B=pt}let Z=A.c[B]-A.c[P]||1,W=(D-A.c[P])/Z,X=A.p[P],et=A.p[B];return[X[0]+(et[0]-X[0])*W,X[1]+(et[1]-X[1])*W]}let io=_=>_*_*(3-2*_)*.35+_*.65;function bs(_,S){let A=_.pat.t,D=_.pat.stops.length,P=A[2*D-2];if(S<A[1]-2||S>P+1)return null;if(S<=A[1])return{w:M[_.pat.stops[0]].w,at:0,next:0,moving:!1};for(let B=0;B<D-1;B++){let Z=A[2*B+1],W=A[2*B+2],X=A[2*B+3];if(S<=W){let et=W>Z?(S-Z)/(W-Z):1;return{w:Js(_.pat.segs[B],io(m(et,0,1))),at:-1,next:B+1,prev:B,moving:!0}}if(S<=X)return{w:M[_.pat.stops[B+1]].w,at:B+1,next:B+1,moving:!1}}return{w:M[_.pat.stops[D-1]].w,at:D-1,next:D-1,moving:!1}}function Br(_){let S=t.days.indexOf(_.ymd),A=[];if(S<0)return{k:S,out:A};let D=(P,B)=>{for(let Z of P){if(!kt.has(Z.fam))continue;let W=ee(Z);if(W==="X")continue;let X=(W||0)/60,et=_.min+B-Z.t0-X;if(et<-2||et>Z.pat.t[Z.pat.t.length-2]+1)continue;let pt=bs(Z,et);pt&&A.push({tr:Z,p:pt,rel:et,dl:X,live:W!=null})}};return D(tt[S],0),S>0&&D(tt[S-1],1440),{k:S,out:A}}function Wi(_,S,A,D){let P=_.pat.stops[0],B=S.dep0,Z=null,W=(et,pt)=>{for(let R of et||[]){let K=R.pat.stops,bt=K.length;if(K[bt-1]!==P||R===_)continue;let Et=R.t0+R.pat.t[2*(bt-1)]-pt;if(Et>B+5||Et<B-120)continue;let re=ft(R.pat),xt=Kt(re,S.w,-1,1e9);if(xt.err>.6)continue;let Gt=re.stopD,Wt=R.pat.t,Yt=Gt.findIndex(Ue=>Ue>xt.d);Yt<0&&(Yt=bt-1);let pe=Yt===0?Wt[1]:Wt[2*Yt-1]+(Gt[Yt]>Gt[Yt-1]?(xt.d-Gt[Yt-1])/(Gt[Yt]-Gt[Yt-1]):1)*(Wt[2*Yt]-Wt[2*Yt-1]),ue=A-(R.t0+pe-pt);ue<-5||ue>120||(!Z||Math.abs(ue)<Math.abs(Z.prevDl))&&(Z={prevTr:R,dPrev:xt.d,prevDl:ue,arrO:Et+Math.max(0,ue)})}};if(W(tt[D],0),D>0&&W(tt[D-1],1440),!Z)return{prevTr:null,preDl:0};let X=Math.max(B,Z.arrO+3);return{...Z,depEst:X,preDl:Math.max(0,X-B)}}function zr(_,S,A){let D=_.pat.t,P=S.length;if(!(A>=0))return A<0?S[0]:null;for(let B=0;B<P;B++)if(A<=D[2*B+1]){if(A>=D[2*B]||B===0)return S[B];let Z=D[2*B-1],W=D[2*B];return S[B-1]+(S[B]-S[B-1])*(W>Z?(A-Z)/(W-Z):1)}return S[P-1]}let kr=performance.now();function so(){let _=[],S=Date.now()/1e3,A=performance.now(),D=Math.min(1,(A-kr)/1e3);kr=A;for(let P of N.vp.values()){let B=H.get(P.tid),Z=B?B.fam:P.fam;if(Z&&T[Z]&&!kt.has(Z))continue;let W=N.delays.get(P.tid),X=typeof W=="number"?W/60:0,et=Math.max(0,S-P.ts);P.mvTs!==P.ts&&((!P.mvW||Math.hypot(P.w[0]-P.mvW[0],P.w[1]-P.mvW[1])>.025)&&(P.mvW=P.w,P.mvAt=P.ts),P.mvTs=P.ts),P.still=P.ts-(P.mvAt||P.ts);let pt=P.w,R=-1;if(B){let bt=ft(B.pat),Et=bt.stopD;if(P.dObs==null||P.obsAt!==P.ts){let Yt=Kt(bt,P.w,-1,1e9);P.dObs=Yt.d,P.err=Yt.err,P.obsAt=P.ts}let re=Ct(),xt=t.days.indexOf(re.ymd),Gt=B.day===xt-1?1440:0,Wt=B.t0+B.pat.t[1]-Gt;if(P.pre=re.min+X<Wt-1&&(P.dObs>Et[0]+.35||P.err>.6)&&!(P.st==="STOPPED_AT"&&P.sid===M[B.pat.stops[0]].id),P.dep0=Wt,P.pre){if(P.atStop=-1,P.next=0,R=0,P.disp=null,P.prevAt!==P.ts&&(P.prevAt=P.ts,Object.assign(P,Wi(B,P,re.min,xt))),P.prevTr){let Yt=ft(P.prevTr.pat);pt=$t(Yt,P.dPrev)}}else if(P.err<=.6){let Yt=Et.findIndex(Ue=>Ue>P.dObs+.08);Yt<0&&(Yt=Et.length-1);let pe=Et.reduce((Ue,_n,tn)=>Math.abs(_n-P.dObs)<Math.abs(Et[Ue]-P.dObs)?tn:Ue,0);P.atStop=Math.abs(Et[pe]-P.dObs)<.16?pe:-1,P.next=Yt,R=Yt;let ue=P.dObs;if(P.st==="STOPPED_AT"&&P.atStop>=0)ue=Et[P.atStop];else if(Yt>0){let Ue=(B.pat.t[2*Yt]-B.pat.t[2*Yt-1])*60,_n=Ue>0?(Et[Yt]-Et[Yt-1])/Ue:0,tn=Ct(),He=t.days.indexOf(tn.ymd),Es=B.day===He-1?1440:0,zn=zr(B,Et,tn.min+Es-B.t0-X),qr=P.dObs+_n*Math.min(et,60);zn!=null&&(qr=Math.min(qr,Math.max(P.dObs,zn))),ue=Math.max(P.dObs,Math.min(Et[Yt]-.03,qr))}P.disp==null||Math.abs(P.disp-ue)>1.2?P.disp=ue:ue>P.disp&&(P.disp+=(ue-P.disp)*Math.min(1,D*1.5)),pt=$t(bt,P.disp)}else if(P.err>2){let Yt=Ct(),pe=t.days.indexOf(Yt.ymd),ue=B.day===pe-1?1440:0,Ue=bs(B,Yt.min+ue-B.t0-X);Ue&&(pt=Ue.w,P.est=!0,R=Ue.next),P.atStop=-1,P.next=Ue?Ue.next:-1}else P.atStop=-1,P.next=-1}let K=P.pre?"":P.st==="STOPPED_AT"&&P.atStop>=0||P.atStop>=0&&P.still>30?"st":P.still>=90?"via":"";_.push({tr:B,v:P,w:pt,stop:K,p:{w:pt},fam:Z||"?",c:B?B.c:T[Z]||"#6b7385",dl:X,live:!0,real:!0,idx:R,age:et,cancel:W==="X"})}return _}let Rn=new Map,pn=!1,nn=!1,ai=[],oi=0,cn=null,ve=null,Je=-1,mn=!1,Vr=0,y="";function k(_){let S=nt>0||St()&&ht==null||!!ve,A=S?50:250;if(_-oi<A)return!1;oi=_,[...at()].join()!==Mt&&(Tt(),se());let D=Ct(),P=St()&&D.live,B=P?{k:t.days.indexOf(D.ymd),out:so()}:Br(D);ai=B.out;let Z=new le,W=0,X=0;for(let R of ai){if(W>=z)break;dt[W*3]=R.p.w[0],dt[W*3+1]=R.p.w[1],dt[W*3+2]=L+.02;let K=null;if(R.real&&R.v.pre&&R.v.prevTr)K=$t(ft(R.v.prevTr.pat),R.v.dPrev+.35);else if(R.real&&R.tr&&!R.v.pre&&R.v.err<=.6&&R.v.disp!=null&&!(R.v.st==="STOPPED_AT"&&R.v.atStop>=0))K=$t(ft(R.tr.pat),R.v.disp+.35);else if(!R.real&&R.p.moving){let xt=R.tr.pat.t,Gt=R.p.prev,Wt=xt[2*Gt+1],Yt=xt[2*Gt+2],pe=Yt>Wt?(R.rel-Wt)/(Yt-Wt):1;K=Js(R.tr.pat.segs[Gt],Math.min(1,io(m(pe,0,1))+.04))}if(R.real?!!R.stop:!R.p.moving)Qt[W]=75;else if(K){let xt=Mn(R.p.w),Gt=Mn(K),Wt=Gt[0]-xt[0],Yt=Gt[1]-xt[1];Qt[W]=Math.hypot(Wt,Yt)>.05?Math.atan2(Wt,-Yt):99}else Qt[W]=99;Z.set(R.c||R.tr.c),Pt[W*3]=Z.r,Pt[W*3+1]=Z.g,Pt[W*3+2]=Z.b;let Et=R.tr?R.tr===ve:ve&&ve.vtid===R.v.tid;Bt[W]=Et?22:r.dist<45?17:14,gt[W]=Et?3.5:2.2;let re=R.real&&R.stop==="via";(R.live&&R.dl>=5||Et||re)&&(Cn[X*3]=R.p.w[0],Cn[X*3+1]=R.p.w[1],Cn[X*3+2]=L+.01,Yn.set(Et?[1,.84,.1]:re?[.86,.15,.15]:[.98,.45,.09],X*3),eo[X]=Bt[W]+(Et?16+5*Math.sin(_/220):re?10+3*Math.sin(_/400):8),no[X]=Et?2:3,X++),W++}if(wt.setDrawRange(0,W),be.setDrawRange(0,X),["position","fill","size","bw"].forEach(R=>{wt.attributes[R].needsUpdate=!0,be.attributes[R].needsUpdate=!0}),wt.attributes.ang.needsUpdate=!0,cn){let R=ai.find(K=>K.tr===cn);if(R){let K=0,bt=innerHeight,Et=h.style.display!=="none"&&!h.classList.contains("min")?h.getBoundingClientRect():null,re=f("#rc").getBoundingClientRect();innerWidth<=640&&(Et&&(K=Et.bottom),bt=Math.min(bt,re.top));let xt=K+(bt-K)/2,Gt=xt-innerHeight/2,Wt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=R.p.w[0]-Math.sin(r.yaw)*Gt*Wt,s.ty=R.p.w[1]+Math.cos(r.yaw)*Gt*Wt}else St()&&Ct().live&&(cn=null)}let et=qt(D.min);et!==y&&(y=et,f("#ctime").textContent=et),f("#ntr").textContent=String(ai.length),f("#ntrl").textContent=P?"trenes de Rodalies con posici\xF3n real":"trenes previstos seg\xFAn el horario";let pt=new Date;if(f("#cdate").textContent=D.live?"hora actual":nt?"simulaci\xF3n \xD7"+nt:li?"en pausa":"hora elegida",B.k<0?f("#src").innerHTML=`<b style="color:#c2410c">Sin horarios para hoy.</b> Los datos guardados van del ${Re(t.days[0])} al ${Re(t.days[t.days.length-1])}: actualiza la app.`:P?f("#src").textContent=`En directo \xB7 posiciones de Renfe de hace ${Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...N.vp.values()].map(R=>R.ts),0)))} s`:f("#src").innerHTML='<b style="color:#c2410c">No es tiempo real:</b> '+(N.url?"sin conexi\xF3n con el puente, ":"conecta el puente para ver los trenes reales; ")+"posiciones calculadas con el horario",D.live){let R=Math.round(D.min),K=f("#tsl");document.activeElement!==K&&(K.value=R<240?R+1440:R)}return Bn(),_-Vr>3e3&&(ve||Je>=0||mn||nn)&&(Vr=_,qe()),ne(),!0}let it=-1,q=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Y=[],It=document.createElement("button");It.type="button",It.id="mbtn",It.title="Ver los nombres de los municipios",It.innerHTML="\u{1F3D8}\uFE0F<span>Municipios</span>",It.onclick=()=>{q=!q;try{localStorage.setItem("rod_mun",q?"1":"")}catch{}It.classList.toggle("on",q),a(),Ot()},It.classList.toggle("on",q),document.body.appendChild(It);let Xt=w.slice().sort((_,S)=>S.pop-_.pop);function Ot(){let _=s.tilt<.06&&r.tilt<.08;It.classList.toggle("show",_);let S=0;if(q&&_){let A=[],D=r.dist<12?260:r.dist<30?160:r.dist<60?90:45;for(let P of Xt){if(S>=D)break;if(Fe.set(P.cx,P.cy,L).project(n),Math.abs(Fe.x)>1||Math.abs(Fe.y)>1)continue;let B=(Fe.x*.5+.5)*innerWidth,Z=(-Fe.y*.5+.5)*innerHeight,W=P.pop>=5e4,X=P.name.length*(W?6.6:5.8)+6,et=W?15:13,pt=[B-X/2,Z-et/2,B+X/2,Z+et/2];if(A.some(K=>pt[0]<K[2]&&K[0]<pt[2]&&pt[1]<K[3]&&K[1]<pt[3]))continue;A.push(pt);let R=Y[S]||(Y[S]=Object.assign(document.createElement("div"),{className:"mlab"}));R.isConnected||document.body.appendChild(R),R._n!==P.name&&(R.textContent=P.name.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1"),R._n=P.name),R.classList.toggle("big",W),R.style.transform=`translate(${Math.round(pt[0])}px,${Math.round(pt[1])}px)`,R.style.display="block",S++}}for(;S<Y.length;S++)Y[S].style.display="none"}let Vt={at:0,hoy:null,ayer:null,err:""},te="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function _e(){Date.now()-Vt.at<5*6e4||(Vt.at=Date.now(),Promise.all(["hoy","ayer"].map(_=>fetch(te+_+".json",{cache:"no-store"}).then(S=>S.ok?S.json():null).catch(()=>null))).then(([_,S])=>{Vt.hoy=_,Vt.ayer=S,Vt.err=_?"":"sin datos",nn&&(h._h="",qe())}))}let Me=_=>_>=90?"g":_>=75?"w":"b",Ht=_=>(_>=.05?"+":"")+(Math.round(_*10)/10).toString().replace(".",",")+" min";function Ae(_,S,A){return`<div class="sbars">${_.map(D=>`<div class="sbar" title="${d(D.tip||"")}"><span class="sl">${D.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(D.w*100))}%;background:${D.c}"></i></span><b class="sv">${D.val}</b></div>`).join("")}</div>`}function Qe(_){if(!_||_.length<2)return'<p class="snote">A\xFAn hay pocas fotos hoy: el gr\xE1fico aparece con la segunda (cada 15 min).</p>';let S=300,A=92,D=22,P=W=>D+W*(S-D-6)/(_.length-1),B=W=>6+(100-W)/100*(A-22),Z=_.map((W,X)=>[P(X),B(W.n?W.ok/W.n*100:100),W]);return`<svg class="schart" viewBox="0 0 ${S} ${A}" role="img" aria-label="Porcentaje de trenes puntuales a lo largo del d\xEDa">
      ${[100,75,50].map(W=>`<line x1="${D}" x2="${S-4}" y1="${B(W)}" y2="${B(W)}" class="gl"/><text x="2" y="${B(W)+3}" class="ax">${W}%</text>`).join("")}
      <polyline points="${Z.map(W=>W[0].toFixed(1)+","+W[1].toFixed(1)).join(" ")}" class="ln"/>
      ${Z.map(([W,X,et])=>`<circle cx="${W.toFixed(1)}" cy="${X.toFixed(1)}" r="5" class="pt"><title>${et.t} \xB7 ${et.n?Math.round(et.ok/et.n*100):100}% puntuales \xB7 ${et.n} trenes \xB7 ${et.d5} con +5 min \xB7 retraso medio ${Ht(et.avg)}</title></circle>`).join("")}
      <text x="${D}" y="${A-3}" class="ax">${_[0].t}</text><text x="${S-4}" y="${A-3}" class="ax" text-anchor="end">${_[_.length-1].t}</text></svg>`}function Xe(){_e();let _=Ct(),S=ai.filter(B=>B.real&&St()&&_.live),A=S.length,D='<div class="tc sts" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>\u{1F4CA} Estad\xEDsticas</h3>';if(A){let B=S.filter(xt=>xt.dl<3).length,Z=S.filter(xt=>xt.dl>=5).length,W=S.filter(xt=>xt.stop==="via").length,X=Math.round(B/A*100);D+=`<small>Ahora mismo \xB7 ${A} trenes con posici\xF3n real de Renfe</small><div class="kpis">
        <div class="kpi ${Me(X)}"><b>${X}%</b><span>puntuales</span></div>
        <div class="kpi ${Z?"b":"g"}"><b>${Z}</b><span>con 5 min<br>o m\xE1s</span></div>
        <div class="kpi ${W?"b":"g"}"><b>${W}</b><span>detenidos<br>en la v\xEDa</span></div></div>`;let et=new Map;S.forEach(xt=>{let Gt=xt.fam,Wt=et.get(Gt)||{n:0,ok:0,sum:0};Wt.n++,Wt.ok+=xt.dl<3,Wt.sum+=Math.max(0,xt.dl),et.set(Gt,Wt)});let pt=[...et].filter(([xt])=>T[xt]).sort((xt,Gt)=>xt[1].ok/xt[1].n-Gt[1].ok/Gt[1].n||Gt[1].sum/Gt[1].n-xt[1].sum/xt[1].n),R=pt.filter(([,xt])=>xt.ok<xt.n),K=pt.filter(([,xt])=>xt.ok===xt.n);D+="<h4>Puntualidad por l\xEDnea ahora</h4>"+(R.length?"":'<p class="snote">\u2713 Todas las l\xEDneas van puntuales.</p>')+Ae(R.map(([xt,Gt])=>({lab:hn(xt),w:Gt.ok/Gt.n,c:T[xt],val:`${Math.round(Gt.ok/Gt.n*100)}% <small>${Ht(Gt.sum/Gt.n)}</small>`,tip:`${xt}: ${Gt.ok} de ${Gt.n} trenes puntuales \xB7 retraso medio ${Ht(Gt.sum/Gt.n)}`})))+(K.length?`<p class="snote">Puntuales al 100 %: ${K.map(([xt])=>hn(xt)).join(" ")}</p>`:"");let bt=new Map;S.forEach(xt=>{if(!xt.tr||xt.v.next==null||xt.v.next<0||xt.v.pre)return;let Gt=xt.tr.pat.stops[xt.v.next],Wt=bt.get(Gt)||{n:0,sum:0};Wt.n++,Wt.sum+=Math.max(0,xt.dl),bt.set(Gt,Wt)});let Et=[...bt].filter(([,xt])=>xt.sum/xt.n>=1).sort((xt,Gt)=>Gt[1].sum/Gt[1].n-xt[1].sum/xt[1].n).slice(0,8),re=Et.length?Et[0][1].sum/Et[0][1].n:1;D+='<h4>Estaciones con m\xE1s retraso ahora</h4><small class="snote">Retraso medio de los trenes que van a llegar a cada estaci\xF3n</small>'+(Et.length?Ae(Et.map(([xt,Gt])=>({lab:`<span class="sn" data-gs="${xt}">${d(M[xt].n)}</span>`,w:Gt.sum/Gt.n/re,c:"#dc2626",val:`${Ht(Gt.sum/Gt.n)} <small>${Gt.n} ${Gt.n===1?"tren":"trenes"}</small>`,tip:`${M[xt].n}: ${Gt.n} trenes llegando con ${Ht(Gt.sum/Gt.n)} de media`}))):'<p class="snote">\u2713 Ning\xFAn tren llega con retraso ahora mismo.</p>')}else D+='<p class="snote">Las estad\xEDsticas en directo necesitan el puente de tiempo real conectado.</p>';let P=Vt.hoy;if(D+="<h4>Hoy, a lo largo del d\xEDa</h4>",P&&P.snaps){D+=Qe(P.snaps);let B=Object.entries(P.st||{}).map(([W,X])=>[ct.get(W),X]).filter(([W,X])=>W!=null&&X.n>=3).map(([W,X])=>[W,X.sum/X.n/60,X]).filter(W=>W[1]>=1).sort((W,X)=>X[1]-W[1]).slice(0,8);if(B.length){let W=B[0][1];D+='<h4>Estaciones con m\xE1s retraso hoy</h4><small class="snote">Retraso medio de los trenes al llegar \xB7 al menos 3 trenes medidos</small>'+Ae(B.map(([X,et,pt])=>({lab:`<span class="sn" data-gs="${X}">${d(M[X].n)}</span>`,w:et/W,c:"#b91c1c",val:`${Ht(et)} <small>m\xE1x +${Math.round(pt.max/60)}</small>`,tip:`${M[X].n}: ${pt.n} trenes medidos hoy \xB7 ${pt.d5} con 5 min o m\xE1s \xB7 peor +${Math.round(pt.max/60)} min`})))}let Z=Object.entries(P.lines||{}).filter(([W,X])=>T[W]&&X.n>=3).sort((W,X)=>W[1].ok/W[1].n-X[1].ok/X[1].n);Z.length&&(D+="<h4>L\xEDneas hoy</h4>"+Ae(Z.map(([W,X])=>({lab:hn(W),w:X.ok/X.n,c:T[W],val:`${Math.round(X.ok/X.n*100)}% <small>${Ht(X.sum/X.n/60)}</small>`,tip:`${W} hoy: ${Math.round(X.ok/X.n*100)}% de las mediciones puntuales \xB7 peor retraso +${Math.round(X.max/60)} min`})))),D+=`<small class="snote">Foto cada 15 min del tiempo real de Renfe \xB7 actualizado ${d((P.upd||"").slice(11,16))} \xB7 los trenes sin dato de retraso cuentan como puntuales</small>`}else D+=`<p class="snote">${Vt.at?"El hist\xF3rico de hoy a\xFAn no est\xE1 disponible: se va reuniendo cada 15 min.":"Cargando\u2026"}</p>`;return D+"</div>"}let Pe=document.createElement("button");Pe.type="button",Pe.id="sbtn",Pe.title="Estad\xEDsticas de puntualidad",Pe.innerHTML="\u{1F4CA}<span>Estad\xEDsticas</span>",Pe.onclick=()=>{nn=!nn,nn&&(pn=mn=!1,ve=null,Je=-1,cn=null,Vt.at=0,se()),h._h="",qe(),a()},document.body.appendChild(Pe);function gn(){Ot(),r.dist<45!=it<45&&(it=r.dist,se()),Ce()}let zt=[],Fe=new F;function Ce(){let _=r.dist<30,S=0;if(_){let A=[];for(let D=0;D<At;D++)Rt[D]<4||(Fe.set(M[D].w[0],M[D].w[1],L).project(n),!(Fe.z>1||Math.abs(Fe.x)>1.05||Math.abs(Fe.y)>1.05)&&A.push([D,(Fe.x*.5+.5)*innerWidth,(-Fe.y*.5+.5)*innerHeight]));if(A.length<=70)for(let[D,P,B]of A){let Z=zt[S]||(zt[S]=Object.assign(document.createElement("div"),{className:"slab"}));Z.isConnected||document.body.appendChild(Z),Z.textContent=M[D].n,Z.dataset.i=D,Z.style.display="block",Z.style.transform=`translate(${Math.round(P+8)}px,${Math.round(B-7)}px)`,S++}}for(;S<zt.length;S++)zt[S].style.display="none"}function Mn(_){return Fe.set(_[0],_[1],L).project(n),[(Fe.x*.5+.5)*innerWidth,(-Fe.y*.5+.5)*innerHeight,Fe.z]}function Zn(_,S,A,D){let P=null,B=A*A;for(let Z of ai){let[W,X,et]=Mn(Z.p.w);if(et>1)continue;let pt=(W-_)**2+(X-S)**2;pt<B&&(B=pt,P={a:Z})}if(P)return P;B=D*D;for(let Z=0;Z<At;Z++){if(!Rt[Z])continue;let[W,X,et]=Mn(M[Z].w);if(et>1)continue;let pt=(W-_)**2+(X-S)**2;pt<B&&(B=pt,P={s:Z})}return P}window.__rodTap=(_,S)=>{let A=null,D=1e9;for(let B of zt){if(B.style.display==="none")continue;let Z=B.getBoundingClientRect();if(_>=Z.left-4&&_<=Z.right+4&&S>=Z.top-4&&S<=Z.bottom+4){let W=Math.abs(S-(Z.top+Z.bottom)/2)*4+(_-Z.left);W<D&&(D=W,A=B)}}if(A)return window.__rodPickStation(+A.dataset.i),!0;let P=Zn(_,S,24,18);return P&&P.a?(pn=!1,mn=!1,nn=!1,ve=P.a.tr||{vtid:P.a.v.tid},Je=-1,cn=null,Ks(),se(),qe(),oi=0,a(),!0):P&&P.s!=null?(pn=!1,mn=!1,nn=!1,Je=P.s,ve=null,cn=null,Ks(),se(),qe(),a(),!0):!1},window.__rodHover=(_,S)=>{let A=Zn(_,S,14,10);if(A&&A.a){let D=A.a,P=D.tr?M[D.tr.pat.stops[D.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${D.c}">\u25A0</span> ${d(D.fam)} \xB7 tren ${d(D.tr?D.tr.num:D.v.num)}</b><small>${P?"hacia "+d(P):""}${D.real?(D.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(D.dl)} min</b>`:" \xB7 puntual")+" \xB7 en directo":" \xB7 previsto"}</small>`}return A&&A.s!=null?`<b>${d(M[A.s].n)}</b><small>${[...M[A.s].fams].sort(U).join(" \xB7 ")}</small>`:null},window.__rodPickStation=_=>{pn=mn=nn=!1,ve=null,cn=null,Je=_,Ks(),se(),h._h="",qe(),a()};{let _=f("#rc"),S=()=>{let A=_.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,A-64-10)+"px")};try{new ResizeObserver(S).observe(_)}catch{}addEventListener("resize",S),setTimeout(S,300)}window.__rodTick=k,window.__rodFrame=gn,window.__rodResize=()=>{De.resolution.set(innerWidth,innerHeight),xe.resolution.set(innerWidth,innerHeight)},window.__rodResize();let sn={st:-1,f:new Set},$i=_=>{let S=[...M[_].fams].sort(U);return`<div class="sfc">${S.length>1?`<button type="button" data-sf="" class="${sn.f.size?"":"on"}">Todas</button>`:""}${S.map(A=>`<button type="button" data-sf="${d(A)}" class="ln ${sn.f.size&&!sn.f.has(A)?"off":""}${kt.has(A)?"":" hid"}" style="--c:${T[A]}">${d(A)}</button>`).join("")}</div>${S.some(A=>!kt.has(A))?"<small>Las l\xEDneas apagadas en el filtro general no se muestran</small>":""}`},Be=_=>{let S=(_||"#6b7385").replace("#",""),A=parseInt(S.slice(0,2),16),D=parseInt(S.slice(2,4),16),P=parseInt(S.slice(4,6),16);return(.299*A+.587*D+.114*P)/255>.62?"#1d2330":"#fff"},Ve=(_,S)=>{let A=T[S]||"#6b7385";return`<span class="dst" style="background:${A};color:${Be(A)}" title="${d(S||"")}">${d(_)}</span>`},Jn=_=>{let S=M[_]&&M[_].id;return jn.st.includes(S)?"\u{1F3E0} ":In.st.includes(S)?"\u{1F4BC} ":""},Ne=_=>_>10?"d-hi":_>5?"d-md":"d-lo",hn=_=>`<span class="ln" style="--c:${T[_]}">${d(_)}</span>`;function Xi(_,S){return S?_==="X"?'<span class="st late">Cancelado</span>':_>=60?`<span class="st late ${Ne(_/60)}">Retraso de ${Math.round(_/60)} min</span>`:'<span class="st ok">Puntual</span>':'<span class="st sch">Seg\xFAn horario \xB7 sin dato en directo</span>'}function qe(){if(!ve&&Je<0&&!mn&&!pn&&!nn){h.innerHTML="",h._h="",h.style.display="none",h.classList.remove("peek"),Wc();return}let _=Ct(),S="",A=St()&&_.live,D=(R,K)=>N.alerts.filter(bt=>[...bt.fams].some(Et=>R.has(Et))||K!=null&&bt.stops.has(K)),P=R=>R.length?`<div class="al">${R.slice(0,4).map(K=>`<p>\u26A0\uFE0F ${Bc(K)} ${[...K.fams].sort(U).slice(0,6).map(hn).join(" ")} ${d(K.txt)} <small>${zc(K)}</small></p>`).join("")}${R.length>4?`<small>y ${R.length-4} avisos m\xE1s</small>`:""}</div>`:"",B=ve&&A?ai.find(R=>R.real&&(ve.vtid?R.v.tid===ve.vtid:R.tr===ve)):null;if(nn)S=Xe();else if(pn)S=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>Novedades</h3><small>${d(f("#ver").textContent.replace(" \xB7 novedades y fuentes",""))}</small><ul class="chg">${f("#chg").innerHTML||"<li>Versi\xF3n de prueba</li>"}</ul>
        <h3 style="margin-top:14px">Fuentes</h3><ul class="fts">
        <li><b>Renfe Operadora</b> \xB7 horarios (GTFS), posici\xF3n de los trenes y retrasos (GTFS-RT) \xB7 <a href="https://data.renfe.com" target="_blank" rel="noopener">data.renfe.com</a> \xB7 licencia CC BY 4.0</li>
        <li><b>Rodalies de Catalunya</b> (Generalitat) \xB7 salidas con v\xEDa, cancelaciones y avisos \xB7 <a href="https://rodalies.gencat.cat" target="_blank" rel="noopener">rodalies.gencat.cat</a></li>
        <li><b>Adif</b> \xB7 incidencias en la infraestructura de Catalu\xF1a \xB7 <a href="https://www.adif.es/viajeros/estado-de-la-red" target="_blank" rel="noopener">estado de la red</a> \xB7 \xA9 Adif</li>
        <li><b>OpenStreetMap</b> \xB7 trazado de las v\xEDas \xB7 <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">\xA9 colaboradores de OpenStreetMap</a>, licencia ODbL</li>
        </ul><small>Los datos se muestran tal como los publican sus fuentes. Ante cualquier duda, manda lo que diga el operador en la estaci\xF3n.</small></div>`;else if(mn){let R=N.alerts.filter(K=>[...K.fams].some(bt=>kt.has(bt))||!K.fams.size);S=`<div class="tc" style="--c:#c2410c"><button class="x" data-cx>\xD7</button><h3>Avisos e incidencias</h3><small>${R.length} avisos activos para las l\xEDneas que tienes visibles</small>${R.map(K=>`<div class="al"><p>${Bc(K)} ${[...K.fams].sort(U).map(hn).join(" ")} <small>${zc(K)}</small></p><p>${d(K.txt)}</p></div>`).join("")||"<p>Sin avisos activos.</p>"}<small>Fuente: avisos oficiales de Rodalies de Catalunya, incidencias en la v\xEDa de Adif (gestor de la infraestructura)${N.alertsTs&&Date.now()/1e3-N.alertsTs<6*3600?" y de Renfe":` \xB7 los avisos GTFS de Renfe no se muestran: Renfe no los actualiza desde el ${N.alertsTs?new Date(N.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(B){let R=B.v,K=B.tr,bt=tn=>d(M[K.pat.stops[tn]].n),Et=K?K.pat.stops.length:0,re=ct.get(R.sid),xt=re!=null?d(M[re].n):d(R.sid),Gt=K&&R.atStop>=0?bt(R.atStop):"",Wt=K&&R.next>=0?bt(R.next):xt,Yt=K&&R.next>0?bt(R.next-1):"",pe=B.stop==="via"&&K?`<b class="stopv">\u23F8 Detenido</b> ${Yt?`entre ${Yt} y <b>${Wt}</b>`:`antes de <b>${Wt}</b>`} desde hace ${Math.max(1,Math.round(R.still/60))} min`:R.pre&&K?R.prevTr?`A\xFAn no ha empezado este viaje. Est\xE1 terminando el tren <b>${d(R.prevTr.num)}</b> hacia <b>${bt(0)}</b>${R.prevDl>=1?` con <b>+${Math.round(R.prevDl)} min</b>`:""}: llega hacia las <b>${qt(R.arrO)}</b> y saldr\xEDa hacia las <b>${qt(R.depEst)}</b>${R.preDl>=1?` (horario ${qt(R.dep0)})`:""}`:`A\xFAn no ha empezado este viaje: va hacia <b>${bt(0)}</b>, de donde sale a las <b>${qt(R.dep0+B.dl)}</b>`:R.st==="STOPPED_AT"&&Gt?`Parado en <b>${Gt}</b>`:Gt&&R.next>=0&&R.atStop!==R.next?`Saliendo de <b>${Gt}</b> hacia <b>${Wt}</b>`:Yt?`Entre ${Yt} y <b>${Wt}</b>`:`Hacia <b>${Wt}</b>`,ue=N.tu.get(R.tid),Ue=ue&&ue.next&&K&&R.next>=0&&ue.next.sid===M[K.pat.stops[R.next]].id&&ue.next.t?new Date(ue.next.t*1e3).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"",_n=[];if(K){let tn=B.idx>=0?B.idx:0,He=R.pre?Math.max(B.dl,R.preDl||0):B.dl,Es=zn=>K.t0+K.pat.t[zn]+He;for(let zn=tn;zn<Et;zn++)_n.push(`<li${Jn(K.pat.stops[zn])?' class="mine"':""}><b>${qt(Es(zn===0?1:2*zn))}</b><span title="${bt(zn)}">${Jn(K.pat.stops[zn])}${bt(zn)}</span>${He>=1?`<em class="dl ${Ne(He)}">${R.pre?"\u2248":""}+${Math.round(He)}</em>`:""}</li>`)}S=`<div class="tc" style="--c:${B.c}"><button class="x" data-cx>\xD7</button><div>${hn(B.fam)}<b>Tren ${d(K?K.num:R.num)}</b> <span class="lv">\u25CF en directo</span></div>${K?`<h3 class="rt"><span class="o" title="${bt(0)}">${bt(0)}</span><span class="ar">\u2192</span>${Ve(M[K.pat.stops[Et-1]].n,K.fam)}</h3>`:""}
        <p>${pe}${Ue?` \xB7 prevista ${Ue}`:""}${R.plat?` \xB7 <b>and\xE9n ${d(R.plat)}</b>`:""}</p><p>${R.pre&&R.prevTr?R.preDl>=1?`<span class="st late">Saldr\xE1 con unos ${Math.round(R.preDl)} min de retraso (estimado)</span>`:'<span class="st ok">Le da tiempo a salir a su hora (estimado)</span>':Xi(N.delays.get(R.tid),N.delays.has(R.tid))}</p>
        <small>${R.pre?`Renfe ya le pone el n\xFAmero de su pr\xF3ximo viaje. Posici\xF3n real enviada hace ${Math.round(B.age)} s`:R.est?"Renfe da una posici\xF3n que no encaja con su recorrido: se muestra donde deber\xEDa estar seg\xFAn el horario y su retraso":`Posici\xF3n enviada por Renfe hace ${Math.round(B.age)} s${B.age>120?" \xB7 <b>sin actualizar</b>":""}`}</small>
        ${_n.length?`${B.dl>=1||R.pre&&R.preDl>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${_n.join("")}</ol>`:""}${P(D(new Set([B.fam])))}
        ${oo(K?K.num:R.num,"",B.fam)}${K?`<div class="rtb"><button type="button" data-follow>${cn===K?"Dejar de seguir":"Seguir este tren"}</button></div>`:""}</div>`}else if(ve&&A)S=`<div class="tc" style="--c:#6b7385"><button class="x" data-cx>\xD7</button><h3>Tren ${d(ve.num||ve.vtid||"")}</h3><p>Renfe no da ahora la posici\xF3n de este tren: puede haber terminado su viaje, no haber salido o no estar circulando.</p></div>`;else if(ve){let R=ve,K=R.pat,bt=K.stops.length,Et=ee(R),re=typeof Et=="number"?Et/60:0,xt=t.days.indexOf(_.ymd),Gt=R.day===xt-1?1440:0,Wt=_.min+Gt-R.t0-re,Yt=bs(R,Wt),pe=He=>R.t0+K.t[He]+re,ue=He=>d(M[K.stops[He]].n),Ue="Fuera de servicio ahora";Yt&&(Ue=Yt.moving?`Circulando hacia <b>${ue(Yt.next)}</b> \xB7 llega ${qt(pe(2*Yt.next))}`:Yt.at===bt-1?`Ha llegado a <b>${ue(bt-1)}</b>`:`Parado en <b>${ue(Yt.at)}</b> \xB7 sale ${qt(pe(2*Yt.at+1))}`);let _n=Yt?Yt.next:0,tn=[];for(let He=_n;He<bt;He++)tn.push(`<li${Jn(K.stops[He])?' class="mine"':""}><b>${qt(pe(2*He))}</b><span title="${ue(He)}">${Jn(K.stops[He])}${ue(He)}</span>${re>=1?`<em class="dl ${Ne(re)}">+${Math.round(re)}</em>`:""}</li>`);S=`<div class="tc" style="--c:${R.c}"><button class="x" data-cx>\xD7</button><div>${hn(R.fam)}<b>Tren ${d(R.num)}</b> <span class="pv">previsi\xF3n</span></div><h3 class="rt"><span class="o" title="${ue(0)}">${ue(0)}</span><span class="ar">\u2192</span>${Ve(M[R.pat.stops[bt-1]].n,R.fam)}</h3>
        <p>${Ue}</p><p>${Xi(Et,Et!=null)}</p><small>Sale ${qt(R.t0+K.t[1])} \xB7 llega ${qt(R.t0+K.t[2*bt-2])} (horario)</small>
        ${re>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${tn.join("")}</ol>${oo(R.num,"",R.fam)}<div class="rtb"><button type="button" data-follow>${cn===R?"Dejar de seguir":"Seguir este tren"}</button></div></div>`}else{let R=Je,K=t.days.indexOf(_.ymd),bt=[];sn.st!==R&&(sn.st=R,sn.f.clear());let Et=Wt=>(!T[Wt]||kt.has(Wt))&&(!sn.f.size||sn.f.has(Wt));if(K>=0){let Wt=(Yt,pe)=>{for(let ue of Yt){if(!Et(ue.fam))continue;let Ue=ue.pat.stops.indexOf(R);if(Ue<0||Ue===ue.pat.stops.length-1)continue;let _n=ee(ue),tn=typeof _n=="number"?_n/60:0,He=ue.t0+ue.pat.t[2*Ue+1]-pe;He+tn<_.min-1||He>_.min+360||bt.push({tr:ue,t:He,dl:tn,d:_n,on:N.vp.has(ue.tid),past:_.min>ue.t0+ue.pat.t[1]-pe+2})}};Wt(tt[K],0),K>0&&Wt(tt[K-1],1440)}bt.sort((Wt,Yt)=>Wt.t+Wt.dl-Yt.t-Yt.dl);let re=M[R].id,xt=Rn.get(re);A&&N.url&&(!xt||Date.now()-xt.at>3e4)&&!xt?.loading&&(Rn.set(re,{...xt||{},loading:!0,at:xt?xt.at:0}),mt(N.url.replace(/\/+$/,""),"/departures.json?stationId="+re).then(Wt=>{Rn.set(re,{at:Date.now(),d:Wt}),Je===R&&(h._h="",qe())}).catch(()=>Rn.set(re,{at:Date.now(),err:1})));let Gt=A&&xt&&xt.d&&Array.isArray(xt.d.trains)?xt.d.trains:null;if(Gt){let Wt=new Map([...N.vp.values()].map(pe=>[String((H.get(pe.tid)||{}).num||pe.num),pe])),Yt=Gt.filter(pe=>Et((pe.line||{}).id||"")).slice(0,40).map(pe=>{let ue=(pe.departureDateHourSelectedStation||"").slice(11,16),Ue=(pe.line||{}).id||"",_n=String(pe.commercialNumber||pe.technicalNumber||""),tn=Wt.get(_n),He=tn?N.delays.get(tn.tid):null;return`<li class="go" data-gt="${d(_n)}|${tn?d(tn.tid):""}"><b>${d(ue)}</b>${T[Ue]?hn(Ue):`<span class="ln" style="--c:#6b7385">${d(Ue||"?")}</span>`}<span>${Ve((pe.destinationStation||{}).name||"",Ue)}${pe.trainObservations?` \xB7 <i>${d(pe.trainObservations)}</i>`:""}</span>${pe.trainCancelled?"<em>cancelado</em>":typeof He=="number"&&He>=60?`<em class="dl ${Ne(He/60)}">+${Math.round(He/60)}</em>`:""}${pe.platformSelectedStation?`<i class="via">v\xEDa ${d(pe.platformSelectedStation)}</i>`:""}${tn?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");S=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(M[R].n)}</h3>${$i(R)}${oo("",M[R].id,"")}
          <small style="margin-top:6px">Pr\xF3ximas salidas oficiales de Rodalies \xB7 hora prevista \xB7 \u25CF tren circulando</small>
          <ol>${Yt||"<li><span>Rodalies no anuncia salidas ahora mismo</span></li>"}</ol>${P(D(M[R].fams,R))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}else S=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(M[R].n)}</h3>${$i(R)}${oo("",M[R].id,"")}
        <small style="margin-top:6px">${A&&N.url?"Cargando salidas oficiales\u2026 mientras, ":""}Pr\xF3ximas salidas${A?" \xB7 hora prevista con el retraso actual \xB7 \u25CF tren circulando":" \xB7 previsi\xF3n seg\xFAn horario (sin tiempo real)"}</small>
        <ol>${bt.slice(0,40).map(Wt=>`<li class="go" data-gt="${d(Wt.tr.num)}|${d(Wt.tr.tid)}"><b>${qt(Wt.t+Wt.dl)}</b>${hn(Wt.tr.fam)}<span>${Ve(M[Wt.tr.pat.stops[Wt.tr.pat.stops.length-1]].n,Wt.tr.fam)}</span>${Wt.d==="X"?"<em>cancelado</em>":Wt.dl>=1?`<em class="dl ${Ne(Wt.dl)}">+${Math.round(Wt.dl)}</em>`:""}${A?Wt.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':Wt.past?'<i class="nos" title="deber\xEDa haber salido y Renfe no da su posici\xF3n">sin se\xF1al</i>':'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||"<li><span>No hay salidas en las pr\xF3ximas 6 horas</span></li>"}</ol>${P(D(M[R].fams,R))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}let Z=h.scrollTop;if(h._h!==S&&(h.innerHTML=S,h._h=S,h.scrollTop=Z),h.style.display="flex",h.classList.remove("min"),Wc(),innerWidth<=640){let R=h.querySelector(".tc");if(R&&!R.querySelector(".mn")){let K=document.createElement("button");K.type="button",K.className="mn",K.setAttribute("aria-label","Encoger o ampliar la ficha"),K.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",K.onclick=bt=>{bt.stopPropagation(),h.classList.toggle("peek"),K.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",h.scrollTop=0},R.appendChild(K)}}else h.classList.remove("peek");let W=f("#rc");if(innerWidth<=640&&!W.classList.contains("min")&&!qe.done&&(qe.done=1,f("#rcgrab").click()),innerWidth<=640){let R=f("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(R+8)+"px",h.style.width="calc(100vw - 76px)",h.style.maxHeight=Math.max(140,f("#rc").getBoundingClientRect().top-R-16)+"px"}else if(innerHeight<=500){let R=f("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(R+8)+"px",h.style.width="min(290px, 40vw)",h.style.maxHeight=innerHeight-R-20+"px"}else h.style.top="",h.style.width=nn?"390px":"300px",h.style.maxHeight="";let et=h.querySelector("[data-cx]");et&&(et.onclick=R=>{R.stopPropagation(),qe.done=0,mn=!1,pn=!1,nn=!1,ve=null,Je=-1,cn=null,se(),qe(),oi=0,a()}),Xu(h),h.querySelectorAll("[data-gs]").forEach(R=>R.onclick=()=>{let K=+R.dataset.gs;nn=!1,window.__rodPickStation(K),Object.assign(s,{tx:M[K].w[0],ty:M[K].w[1],dist:Math.min(s.dist,20)}),a()}),h.querySelectorAll("[data-sf]").forEach(R=>R.onclick=K=>{K.stopPropagation();let bt=R.dataset.sf;bt?sn.f.has(bt)?sn.f.delete(bt):sn.f.add(bt):sn.f.clear(),h._h="",qe()}),h.querySelectorAll("[data-gt]").forEach(R=>R.onclick=()=>{let[K,bt]=R.dataset.gt.split("|"),Et=H.get(bt);rd({num:K,tid:N.vp.has(bt)?bt:"",tr:Et||null})}),h.querySelectorAll("[data-sethome]").forEach(R=>R.onclick=()=>$c(Je,R.dataset.sethome));let pt=h.querySelector("[data-follow]");pt&&(pt.onclick=()=>{cn=cn===ve?null:ve,cn?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(h.classList.add("peek"),h.scrollTop=0,f("#rc").classList.contains("min")||f("#rcgrab").click())):h.classList.remove("peek"),h._h="",qe(),a()})}window.__rodCard=qe;try{localStorage.getItem("rod_inf")==="mini"&&f("#inf").classList.add("mini")}catch{}f("#inft").onclick=()=>{let _=f("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",_?"mini":"")}catch{}(ve||Je>=0||mn||pn)&&(h._h="",qe())},f("#ver").onclick=()=>{pn=!0,ve=null,Je=-1,mn=!1,h._h="",qe()};let ro={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},Vp=["vacio","lleno","petado","parado","calor","abordo"],Hp=["gente","retraso","cancel","ascensor","via"],Gp={vacio:"Va con sitio",lleno:"Va lleno",petado:"Muy lleno, cuesta subir",parado:"Parado sin moverse",calor:"Sin aire acondicionado",abordo:"Incidencia a bordo",gente:"Mucha gente esperando",retraso:"Anuncian retraso por megafon\xEDa",cancel:"Anuncian tren cancelado",ascensor:"Ascensor o escalera averiados",via:"Incidencia en la estaci\xF3n"},ao=_=>(N.tipos||Gp)[_]||_,Oc=(_,S)=>(N.rep||[]).filter(A=>_&&A.num===String(_)&&!A.sid||S&&A.sid===String(S)&&!A.num||_&&S&&A.num===String(_)&&A.sid===String(S)),Wu=_=>{let S=Math.round((Date.now()+(N.repSkew||0)-_.at)/6e4);return S<1?"ahora":`hace ${S} min`},Hr=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function oo(_,S,A){if(!N.url||!N.repOk)return"";let D=Oc(_,S),P=_?Vp:Hp;return`<div class="crowd"><small>\u{1F465} Lo que dicen los viajeros${D.length?"":" \xB7 nadie ha avisado todav\xEDa"}</small>${D.map(B=>`<p><span>${ro[B.kind]||"\u2022"} <b>${d(ao(B.kind))}</b> <small>${B.up>1?B.up+" viajeros \xB7 ":""}${Wu(B)}</small></span>${Hr.has(B.id)?"<small>\u2713</small>":`<button type="button" data-rv="${B.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${B.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${_?"\xBFVas en este tren? Avisa a los dem\xE1s":"\xBFEst\xE1s en la estaci\xF3n? Avisa a los dem\xE1s"}</summary><div class="ckb">${P.map(B=>`<button type="button" data-rk="${B}" data-rn="${d(_||"")}" data-rs="${d(S||"")}" data-rl="${d(A||"")}">${ro[B]} ${d(ao(B))}</button>`).join("")}</div><small>An\xF3nimo \xB7 se borra solo en 90 min \xB7 sin texto libre</small></details></div>`}async function $u(_,S){try{let D=await(await fetch(N.url.replace(/\/+$/,"")+S,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)})).json();if(!D.ok){Kn(D.err||"No se ha podido enviar");return}if(D.id){Hr.add(D.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Hr].slice(-300)))}catch{}}Kn(S==="/vote"?"Gracias, voto guardado":D.n>1?`Gracias \xB7 ya sois ${D.n} avisando de lo mismo`:"Gracias, aviso enviado");let P=await mt(N.url.replace(/\/+$/,""),"/reports.json");P&&P.items&&(N.rep=P.items),h._h="",qe(),Bn(!0)}catch{Kn("Sin conexi\xF3n con el puente")}}function Xu(_){_.querySelectorAll("[data-rk]").forEach(S=>S.onclick=A=>{A.stopPropagation(),S.disabled=!0,$u({kind:S.dataset.rk,num:S.dataset.rn,sid:S.dataset.rs,line:S.dataset.rl},"/report")}),_.querySelectorAll("[data-rv]").forEach(S=>S.onclick=A=>{A.stopPropagation();let[D,P]=S.dataset.rv.split(":");Hr.add(+D);try{localStorage.setItem("rod_votes",JSON.stringify([...Hr].slice(-300)))}catch{}$u({id:+D,v:+P},"/vote")})}let qu=0;function Kn(_){let S=f("#toast");S||(S=document.createElement("div"),S.id="toast",document.body.appendChild(S)),S.textContent=_,S.className="on",clearTimeout(qu),qu=setTimeout(()=>{S.className=""},2600)}function Bc(_){return _.src?`<b class="asrc ${_.src==="Adif"?"adif":""}">${_.src==="Adif"?"Adif \xB7 v\xEDa":d(_.src)}</b>`:""}function zc(_){if(!_.when)return"";let[S,A]=_.when.split("T"),D=Ee(new Date),P=D.ymd.slice(0,4)+"-"+D.ymd.slice(4,6)+"-"+D.ymd.slice(6,8);if(S===P&&A){let B=Math.round(D.min-(+A.slice(0,2)*60+ +A.slice(3,5)));return B<1?"ahora":B<60?`hace ${B} min`:`hoy a las ${A.slice(0,5)}`}return`${S.slice(8,10)}/${S.slice(5,7)}${A?" "+A.slice(0,5):""}`}function kc(){let _=f("#alr");if(!_)return;let S=N.alerts.filter(A=>[...A.fams].some(D=>kt.has(D))).length;_.hidden=!S,_.textContent=`\u26A0\uFE0F ${S} aviso${S===1?"":"s"}`}f("#alr").onclick=()=>{pn=!1,mn=!0,ve=null,Je=-1,qe()},f("#wcopy").onclick=async()=>{let _=f("#wcode").textContent;try{await navigator.clipboard.writeText(_),f("#wcopy").textContent="Copiado \u2713"}catch{let A=document.createRange();A.selectNodeContents(f("#wcode"));let D=getSelection();D.removeAllRanges(),D.addRange(A),f("#wcopy").textContent="Selecciona y copia"}setTimeout(()=>f("#wcopy").textContent="Copiar c\xF3digo",2500)};let Wp=ct.get("71801");function $p(_,S){let A=M[_].id,D=Rn.get(A);!(St()&&N.url)||D&&(D.loading||Date.now()-D.at<3e4)||(Rn.set(A,{...D||{},loading:!0,at:D?D.at:0}),mt(N.url.replace(/\/+$/,""),"/departures.json?stationId="+A).then(P=>{Rn.set(A,{at:Date.now(),d:P}),S&&S()}).catch(()=>Rn.set(A,{at:Date.now(),err:1})))}let Xp=_=>+_.slice(0,2)*60+ +_.slice(3,5),Gr={k:-2,m:null};function qp(_){let S=t.days.indexOf(Ct().ymd);if(Gr.k!==S){Gr.k=S,Gr.m=new Map;for(let A of tt[S]||[])Gr.m.set(String(A.num),A)}return Gr.m.get(String(_))||null}function Yu(_,S){let A=Ct(),D=St()&&A.live&&!S,P=Rn.get(M[_].id),B=[],Z=new Map([...N.vp.values()].map(X=>[String((H.get(X.tid)||{}).num||X.num),X]));if(D&&P&&P.d&&Array.isArray(P.d.trains))for(let X of P.d.trains){let et=(X.departureDateHourSelectedStation||"").slice(11,16);if(!et)continue;let pt=String(X.commercialNumber||X.technicalNumber||""),R=Z.get(pt),K=R?N.delays.get(R.tid):null,bt=Math.max(typeof K=="number"?Math.max(0,K/60):0,R&&R.pre&&R.preDl||0),Et=Xp(et);Et<A.min-720&&(Et+=1440),B.push({sm:Et,est:Et+bt,dl:bt,fam:(X.line||{}).id||"",dest:(X.destinationStation||{}).name||"",destId:(X.destinationStation||{}).id||"",plat:X.platformSelectedStation||"",cancel:!!X.trainCancelled,obs:X.trainObservations||"",live:!!R,num:pt,tid:R?R.tid:"",tr:R&&H.get(R.tid)||qp(pt),src:"oficial"})}else{let X=t.days.indexOf(A.ymd);if(X<0)return B;let et=(pt,R)=>{for(let K of pt){let bt=K.pat.stops.indexOf(_);if(bt<0||bt===K.pat.stops.length-1)continue;let Et=ee(K),re=typeof Et=="number"?Math.max(0,Et/60):0,xt=K.t0+K.pat.t[2*bt+1]-R;if(xt+re<A.min-1||xt>A.min+240)continue;let Gt=K.pat.stops[K.pat.stops.length-1];B.push({sm:xt,est:xt+re,dl:re,fam:K.fam,dest:M[Gt].n,destId:M[Gt].id,plat:"",cancel:Et==="X",obs:"",live:N.vp.has(K.tid),num:K.num,tid:K.tid,tr:K,src:"horario"})}};et(tt[X],0),X>0&&et(tt[X-1],1440)}let W=B.filter(X=>X.est>=A.min-.5).sort((X,et)=>X.est-et.est);return!W.length&&B.length&&B[0].src==="oficial"&&!S?Yu(_,!0):W}let Zu=(_,S,A,D)=>{let P={key:_,ico:S,name:A,st:[],i:0,walk:10,open:!1};try{let B=JSON.parse(localStorage.getItem("rod_"+_)||"null");B&&Object.assign(P,B)}catch{}return!P.st.length&&D&&(P.st=D),P},jn=Zu("home","\u{1F3E0}","Casa",["79410","79412"]),In=Zu("work","\u{1F4BC}","Trabajo",null),Le={key:"near",ico:"\u{1F4CD}",name:"Cerca de ti",st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},Wr=[Le,jn,In];jn.open=!1,In.open=!1;function Yp(_,S){let A=rt(_,S),D=rt(_,S+.009);return 1/Math.hypot(D[0]-A[0],D[1]-A[1])}function Vc(_){if(!navigator.geolocation){Le.err="Este navegador no da la ubicaci\xF3n",Bn(!0);return}navigator.geolocation.getCurrentPosition(S=>{let{longitude:A,latitude:D}=S.coords,P=rt(A,D),B=Yp(A,D),Z=M.map((pt,R)=>[R,Math.hypot(pt.w[0]-P[0],pt.w[1]-P[1])*B]).filter(([pt])=>M[pt].fams.size).sort((pt,R)=>pt[1]-R[1]),W=Z.filter(([,pt],R)=>R===0||pt<Math.max(2.5,Z[0][1]*1.6)).slice(0,3),X=Le.st[0]!==M[W[0][0]].id;Le.st=W.map(([pt])=>M[pt].id),Le.dist=Object.fromEntries(W.map(([pt,R])=>[M[pt].id,R])),Le.fix=Date.now(),Le.err="",X&&(Le.i=0);let et=[jn,In].find(pt=>pt.st.includes(Le.st[0])&&Le.dist[Le.st[0]]<1.5);_&&(et?et.open=!0:Le.open=!0),Bn(!0)},S=>{Le.err=S.code===1?"Sin permiso de ubicaci\xF3n":"No se ha podido obtener la ubicaci\xF3n",_&&(jn.open=!!jn.st.length),Bn(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let Zp=_=>Math.max(1,Math.round(_*1.3/.08));setTimeout(()=>Vc(!0),400),setInterval(()=>{document.hidden||Vc(!1)},12e4);let $r=_=>{try{localStorage.setItem("rod_"+_.key,JSON.stringify({st:_.st,i:_.i,walk:_.walk,open:_.open}))}catch{}},Ju=_=>_.st.length?ct.get(_.st[_.i]||_.st[0]):null;function Jp(_,S,A,D){if(D&&S.tr){let Z=S.tr.pat.stops,W=Z.indexOf(_);if(W>=0&&Z.slice(W+1).some(X=>D.has(X)))return"to"}if(D&&S.tr)return"out";let P=ct.get(S.destId)??M.findIndex(Z=>Z.n===S.dest);if(P<0||P==null||A==null)return"otros";let B=Z=>Math.hypot(M[Z].w[0]-M[A].w[0],M[Z].w[1]-M[A].w[1]);return B(P)<B(_)?"to":"out"}let Hc=_=>_<1?"ahora":_<60?Math.round(_)+" min":Math.floor(_/60)+" h "+String(Math.round(_%60)).padStart(2,"0"),Ku=0,Kp=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i;function jp(_,S,A){let D=Ju(_);if(_===Le){if(D==null)return`<div class="hplace"><button type="button" class="hhead hnew" data-hloc><span class="hico">\u{1F4CD}</span><span class="htit"><b>Cerca de ti</b><small>${Le.err?d(Le.err)+" \xB7 toca para reintentar":"Buscando tu ubicaci\xF3n\u2026"}</small></span><span class="hchev">\u27F3</span></button></div>`;if([jn,In].find(me=>me.st.includes(Le.st[0])&&Le.dist[Le.st[0]]<1.5))return"";_.walk=Zp(Le.dist[_.st[_.i]]||0)}if(D==null){let Ft=Le.st.length?ct.get(Le.st[0]):null,me=_===In?jn:In,on=Ft!=null&&!me.st.includes(Le.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${_.ico}</span><span class="htit"><b>${_.name}</b><small>${on?`Est\xE1s en <b>${d(M[Ft].n)}</b>`:"Elige tu estaci\xF3n"}</small></span>${on?`<button type="button" class="hpick" data-hnear="${_.key}">Usar esta</button>`:""}<button type="button" class="hpick alt" data-hset="${_.key}">${on?"Otra\u2026":"Elegir"}</button></div></div>`}$p(D,()=>Bn(!0));let P=_===Le?null:_===jn?In:jn,B=P?Ju(P):null,Z=B!=null&&B!==D?B:Wp,W=B!=null&&B!==D?P===In?"el trabajo":"casa":"Barcelona",X=M[D].fams,et=new Set([...X].filter(Ft=>kt.has(Ft))),pt=et.size<X.size,R=Yu(D).filter(Ft=>!T[Ft.fam]||kt.has(Ft.fam)),K=_.walk,bt=N.alerts.filter(Ft=>[...Ft.fams].some(me=>et.has(me))||Ft.stops&&Ft.stops.has(D)),Et=bt.some(Ft=>Kp.test(Ft.txt)),re={to:[],out:[],otros:[],all:R},xt=W!=="Barcelona"?new Set(P.st.map(Ft=>ct.get(Ft)).filter(Ft=>Ft!=null)):null;R.forEach(Ft=>re[Jp(D,Ft,Z,xt)].push(Ft));let Gt=Ft=>{if(Ft==="all")return"Pr\xF3ximas salidas \xB7 todas las direcciones";let me=ci=>(ci.find(hi=>hi.fam)||{}).fam;if(Ft==="to")return"Hacia "+Ve(W==="Barcelona"?"Barcelona":M[Z].n,me(re.to)||[...et][0])+(W!=="Barcelona"?` <small>${W}</small>`:"");let on=[];for(let ci of re[Ft])on.some(hi=>hi[0]===ci.dest)||on.push([ci.dest,ci.fam]);return on.length?"Hacia "+on.slice(0,2).map(([ci,hi])=>Ve(ci,hi)).join(" "):"Otros"},Wt=Ft=>{let me=re[Ft].find(hi=>!hi.cancel&&hi.est-S.min>=K);if(!me){let hi=re[Ft].find(im=>!im.cancel);return hi?{cls:"v-no",big:"No llegas",small:`El pr\xF3ximo (${qt(hi.est)}) sale en ${Hc(hi.est-S.min)}: no da tiempo a pie`}:{cls:"v-no",big:"Sin trenes",small:"No hay salidas pr\xF3ximas en este sentido"}}let on=me.est-S.min-K;return{cls:on<1.5?"v-bad":on<5?"v-warn":"v-ok",big:on<1.5?"\xA1Sal ya!":"Sal en "+Hc(on),small:`${Et?"\u26A0\uFE0F servicio afectado \xB7 ":""}${qt(me.est)} \xB7 ${me.fam} a ${me.dest}${me.plat?" \xB7 v\xEDa "+me.plat:""}${me.dl>=1?` \xB7 +${Math.round(me.dl)} min`:""}`,x:me}},Yt=re.out.length?"out":"otros",pe=Wt("to"),ue=Wt(Yt),Ue=St()&&S.live,_n=et.size===1,tn=Ft=>{let me=Ft.est-S.min;return Ft.cancel?"cx":me<K?"u-miss":me<K+1.5?"u-now":me<K+5?"u-soon":"u-ok"},He=Ft=>{let me=!Ft.cancel&&Ft.est-S.min<K,on=Oc(Ft.num,"");return`<li class="hr ${tn(Ft)} go" style="--lc:${T[Ft.fam]||"#6b7385"}" data-dk="${A.push(Ft)-1}" title="${Ft.cancel?"Cancelado":me?"No llegas a pie":"Ver este tren en el mapa"}"><span class="hrt"><b>${Ft.cancel?"\u2715":me?qt(Ft.est):Hc(Ft.est-S.min)}</b><small>${Ft.cancel?"cancelado":me?"no llegas":qt(Ft.est)}</small></span><span class="hrd">${Ft.live?'<i class="lvd" title="circulando">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}${Ve((_n?"":Ft.fam+" \xB7 ")+Ft.dest,Ft.fam)}${on.length?`<i class="cr" title="${d(on.map(ci=>ao(ci.kind)).join(" \xB7 "))}">${on.slice(0,2).map(ci=>ro[ci.kind]).join("")}</i>`:""}${Ft.obs?`<small class="hro">${d(Ft.obs)}</small>`:""}</span><span class="hrm">${!Ft.cancel&&Ft.dl>=1?`<em class="dl ${Ne(Ft.dl)}">+${Math.round(Ft.dl)}</em>`:""}${Ft.plat?`<i class="via">v\xEDa ${d(Ft.plat)}</i>`:""}</span></li>`},Es=(Ft,me)=>`<div class="hcol"><div class="hdir">${Gt(Ft)}</div><div class="hv ${me.cls}${me.x?" go":""}"${me.x?` data-dk="${A.push(me.x)-1}"`:""}><b>${me.big}</b><small>${d(me.small)}</small></div><ol>${re[Ft].slice(0,Ft==="all"?7:4).map(He).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(_===Le){let Ft=Wt("all");var zn=Ft.x?`${Ft.big} \xB7 <b>${qt(Ft.x.est)}</b> ${d(Ft.x.fam)} a ${d(Ft.x.dest)}${Ft.x.plat?" \xB7 v\xEDa "+d(Ft.x.plat):""}`:Ft.big}let qr=_===Le?zn:pe.x?`${pe.big} \xB7 <b>${qt(pe.x.est)}</b> hacia ${d(W)}${pe.x.plat?" \xB7 v\xEDa "+d(pe.x.plat):""}`:"Sin trenes hacia "+d(W);return`<div class="hplace ${_.open?"open":""}"><button type="button" class="hhead" data-ht="${_.key}"><span class="hico">${_.ico}</span><span class="htit"><b>${d(M[D].n)}</b><small class="c${Et?"bad":pe.cls.slice(2)}">${qr}</small></span><span class="hchev">\u25BE</span></button>`+(_.open?`
      <div class="hbody">
        ${_.st.length>1?`<div class="hst">${_.st.map((Ft,me)=>{let on=ct.get(Ft);return on==null?"":`<button type="button" data-hs="${_.key}:${me}" class="${me===_.i?"on":""}">${d(M[on].n)}</button>`}).join("")}</div>`:""}
        ${_===Le?`<div class="hwalk">\u{1F4CD} A ${(()=>{let Ft=Le.dist[_.st[_.i]]||0;return Ft<1?Math.round(Ft*100)*10+" m":Ft.toFixed(1).replace(".",",")+" km"})()} \xB7 unos <b>${_.walk} min</b> a pie</div>`:""}
        <div class="hwalk"${_===Le?" hidden":""}>\u{1F6B6} Tardo <button type="button" data-hw="${_.key}:-1">\u2212</button><b>${K} min</b><button type="button" data-hw="${_.key}:1">+</button> a pie hasta la estaci\xF3n</div>
        ${pt?`<div class="hflt">Solo ${[...et].sort(U).map(hn).join(" ")||"ninguna l\xEDnea"} \xB7 filtro de l\xEDneas activo</div>`:""}
        ${bt.length?`<div class="hal ${Et?"bad":""}">\u26A0\uFE0F ${Bc(bt[0])} ${d(bt[0].txt)} <small>${zc(bt[0])}</small>${bt.length>1?` <a data-hal>+${bt.length-1} avisos</a>`:""}</div>`:`<div class="hok">\u2713 Sin avisos para ${[...et].sort(U).join(", ")}</div>`}
        ${(()=>{let Ft=_.st.flatMap(me=>Oc("",me));return Ft.length?`<div class="hcr">${Ft.slice(0,3).map(me=>`${ro[me.kind]} <b>${d(ao(me.kind))}</b> <small>${me.up>1?me.up+" viajeros \xB7 ":""}${Wu(me)}</small>`).join("<br>")}</div>`:""})()}
        ${_===Le?`<div class="hcols one">${Es("all",Wt("all"))}</div>`:`<div class="hcols">${Es("to",pe)}${Es(Yt,ue)}</div>`}
        <div class="hsrc"><span class="hsrcT" title="${Ue?Rn.get(M[D].id)?.d?"Salidas oficiales de Rodalies en directo":"Horario + retrasos mientras cargan las salidas oficiales":"Previsi\xF3n seg\xFAn horario (sin tiempo real)"} \xB7 \u25CF = tren circulando">${Ue?Rn.get(M[D].id)?.d?"\u25CF oficial en directo":"\u25CF horario + retrasos":"seg\xFAn horario"}</span><a data-hmap="${D}">\u{1F5FA}\uFE0F mapa</a>${_===Le?"<a data-hloc>\u{1F4CD} actualizar</a>":`<a data-hset="${_.key}">\u270E cambiar</a>`}${_===In?'<a data-hdel="work">\u2715 quitar</a>':""}</div>
      </div>`:"")+"</div>"}let Ti={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},ju=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Qu=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,Xr=()=>{let _=[...jn.st,...In.st],S=new Set;return _.forEach(A=>{let D=ct.get(A);D!=null&&M[D].fams.forEach(P=>S.add(P))}),{stations:_,lines:[...S].sort(U)}},Qp=_=>Uint8Array.from(atob(_.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((_.length+3)%4)),S=>S.charCodeAt(0));async function td(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function ed(_){let A=await(await fetch(N.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:_.toJSON(),...Xr()})})).json();if(!A.ok)throw new Error(A.err||"error")}let On={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function tm(){let{lines:_,stations:S}=Xr(),A=new Set(_),D=new Set(S.map(Z=>ct.get(Z))),P=N.alerts.filter(Z=>[...Z.fams].some(W=>A.has(W))||[...Z.stops||[]].some(W=>D.has(W)));if(!On.seen){try{On.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{On.seen=new Set}if(!On.seen.size){P.forEach(Z=>On.seen.add(Z.id+"|"+Z.txt.length)),nd();return}}let B=P.filter(Z=>!On.seen.has(Z.id+"|"+Z.txt.length));if(B.length&&(B.forEach(Z=>On.seen.add(Z.id+"|"+Z.txt.length)),nd(),!(!On.on||!("Notification"in window)||Notification.permission!=="granted")))for(let Z of B.slice(0,3)){let W=(Z.src==="Adif"?"Adif \xB7 v\xEDa":"Rodalies")+(Z.fams.size?" \xB7 "+[...Z.fams].sort(U).slice(0,4).join(" "):""),X={body:Z.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+Z.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(et=>et?et.showNotification(W,X):new Notification(W,X)).catch(()=>{try{new Notification(W,X)}catch{}})}}function nd(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...On.seen].slice(-400)))}catch{}}async function em(){if(On.on)On.on=!1,Kn("Avisos desactivados");else{if(!("Notification"in window)){Kn(ju&&!Qu()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio y activa los avisos desde la app":"Este navegador no permite avisos");return}if(await Notification.requestPermission()!=="granted"){Kn("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}On.on=!0,Kn("Listo: te aviso de incidencias en "+Xr().lines.join(", ")+" mientras la app est\xE9 abierta")}try{localStorage.setItem("rod_ln",On.on?"1":"")}catch{}Bn(!0)}async function nm(){if(!N.repOk)return em();if(!Ti.busy){Ti.busy=!0;try{let _=await td();if(!_){Kn(ju&&!Qu()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio, abre la app desde ah\xED y activa los avisos":"Este navegador no permite avisos (hace falta abrir la web publicada, no el archivo)");return}if(await navigator.serviceWorker.ready,Ti.on){let S=await _.pushManager.getSubscription();S&&(fetch(N.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:S.endpoint})}).catch(()=>{}),await S.unsubscribe().catch(()=>{})),Ti.on=!1,Kn("Avisos desactivados")}else{if(!N.url){Kn("Hace falta el puente en directo");return}if(await Notification.requestPermission()!=="granted"){Kn("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}let A=(await mt(N.url.replace(/\/+$/,""),"/push/key")).key,D=await _.pushManager.getSubscription()||await _.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Qp(A)});await ed(D),Ti.on=!0,Kn("Listo: te avisaremos de incidencias en "+Xr().lines.join(", "))}try{localStorage.setItem("rod_push",Ti.on?"1":"")}catch{}}catch(_){Kn("No se han podido activar los avisos: "+(_.message||_))}finally{Ti.busy=!1,Bn(!0)}}}async function id(){if(Ti.on)try{let _=await td(),S=_&&await _.pushManager.getSubscription();S&&await ed(S)}catch{}}let Gc=!1,sd="";function Wc(){let _=ve?"t"+(ve.tid||ve.vtid):Je>=0?"s"+Je:mn?"a":pn?"n":"";_!==sd&&(Gc=!1,sd=_);let S=innerWidth<=640&&!!_&&!Gc,A=f("#inf");A.classList.contains("compact")!==S&&(A.classList.toggle("compact",S),requestAnimationFrame(()=>{if(h.style.display!=="none"){let D=A.getBoundingClientRect().bottom;h.style.top=Math.round(D+8)+"px",h.style.maxHeight=Math.max(140,f("#rc").getBoundingClientRect().top-D-16)+"px"}}))}function Bn(_){let S=f("#home");if(!S)return;let A=performance.now();if(!_&&A-Ku<4e3)return;Ku=A;let D=Ct(),P=[],B=Xr(),Z=Wr.map(et=>jp(et,D,P)).join("")+(Wr.some(et=>et.open)&&B.lines.length,"");if(S.className=Wr.some(et=>et.open)?"open":"",S._h===Z)return;S._h=Z,S.innerHTML=Z;{let et=[...S.children].find(pt=>pt.classList.contains("hplace")&&!pt.querySelector(".hnew"));et&&et.classList.add("lead")}let W=et=>et==="work"?In:et==="near"?Le:jn;S.querySelectorAll("[data-hloc]").forEach(et=>et.onclick=()=>{Le.err="",Vc(!0)}),S.querySelectorAll("[data-ht]").forEach(et=>et.onclick=()=>{if(f("#inf").classList.contains("compact")){Gc=!0,Wc();return}let pt=W(et.dataset.ht);pt.open=!pt.open,$r(pt),Bn(!0),(ve||Je>=0||mn||pn)&&(h._h="",qe())}),S.querySelectorAll("[data-hs]").forEach(et=>et.onclick=()=>{let[pt,R]=et.dataset.hs.split(":"),K=W(pt);K.i=+R,$r(K),Bn(!0)}),S.querySelectorAll("[data-hw]").forEach(et=>et.onclick=()=>{let[pt,R]=et.dataset.hw.split(":"),K=W(pt);K.walk=m(K.walk+ +R,0,60),$r(K),Bn(!0)}),S.querySelectorAll("[data-hmap]").forEach(et=>et.onclick=()=>{let pt=+et.dataset.hmap;pn=mn=nn=!1,ve=null,Je=pt,Ks(),se(),Object.assign(s,{tx:M[pt].w[0],ty:M[pt].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),h._h="",qe(),a()}),S.querySelectorAll("[data-hset]").forEach(et=>et.onclick=()=>{ws=et.dataset.hset,p.value="",p.placeholder=ws==="work"?"Escribe la estaci\xF3n del trabajo\u2026":"Escribe la estaci\xF3n de casa\u2026",p.focus()}),S.querySelectorAll("[data-hnear]").forEach(et=>et.onclick=()=>{let pt=ct.get(Le.st[0]);pt!=null&&$c(pt,et.dataset.hnear)}),S.querySelectorAll("[data-hdel]").forEach(et=>et.onclick=()=>{In.st=[],In.open=!1,$r(In),Bn(!0),id()}),S.querySelectorAll("[data-dk]").forEach(et=>et.onclick=()=>rd(P[+et.dataset.dk])),S.querySelectorAll("[data-hal]").forEach(et=>et.onclick=()=>f("#alr").click());let X=f("#bell");X||(X=document.createElement("button"),X.type="button",X.id="bell",X.onclick=nm,f("#inft").before(X));{let et=N.repOk?Ti.on:On.on;X.hidden=!B.lines.length,X.className=et?"on":"",X.textContent=et?"\u{1F514}":"\u{1F515}",X.title=(et?"Avisos activados":"Activar avisos")+" de "+B.lines.join(", ")+(N.repOk?"":" (mientras la app est\xE9 abierta)")}Xu(S)}function rd(_){if(!_)return;let S=t.days.indexOf(Ct().ymd),A=ai.find(B=>B.real?_.tid&&B.v.tid===_.tid||_.num&&String(B.tr?B.tr.num:B.v.num)===String(_.num):_.tr&&B.tr===_.tr||_.num&&B.tr&&String(B.tr.num)===String(_.num)),D=_.tr||A&&A.tr||(tt[S]||[]).find(B=>String(B.num)===String(_.num));if(pn=mn=nn=!1,Je=-1,Ks(),ve=A?A.tr||{vtid:A.v.tid}:D||null,!ve)return;cn=A&&A.tr?A.tr:null,cn&&innerWidth<=640&&(h.classList.add("peek"),f("#rc").classList.contains("min")||f("#rcgrab").click());let P=A?A.p.w:null;P&&Object.assign(s,{tx:P[0],ty:P[1],dist:Math.min(s.dist,22)}),se(),h._h="",qe(),oi=0,a()}let ws=!1;p.addEventListener("blur",()=>setTimeout(()=>{ws&&!p.value.trim()&&(ws=!1,p.placeholder="Buscar estaci\xF3n o municipio\u2026")},600));function Ks(){Wr.some(_=>_.open)&&(Wr.forEach(_=>{_.open=!1}),Bn(!0))}function $c(_,S){let A=S==="work"?In:jn,D=M[_].id,P=M.filter(B=>B.fams.size&&B!==M[_]&&Math.hypot(B.w[0]-M[_].w[0],B.w[1]-M[_].w[1])<.6).map(B=>B.id);A.st=[D,...P].slice(0,3),A.i=0,A.open=!0,$r(A),Bn(!0),id()}let Xc=f("#lines");Xc.innerHTML='<button type="button" class="all" data-f="*">Todas</button>'+v.map(_=>`<button type="button" style="--c:${T[_]}" data-f="${_}">${_}</button>`).join("");function ad(){try{Bn(!0)}catch{}Xc.querySelectorAll("[data-f]").forEach(_=>{_.dataset.f!=="*"&&_.classList.toggle("off",!kt.has(_.dataset.f))})}Xc.querySelectorAll("[data-f]").forEach(_=>_.onclick=()=>{let S=_.dataset.f;S==="*"?v.forEach(A=>kt.add(A)):kt.size===v.length?(kt.clear(),kt.add(S)):kt.has(S)?(kt.delete(S),kt.size||v.forEach(A=>kt.add(A))):kt.add(S),ad(),Tt(),se(),kc(),oi=0,a()});let qc=[...document.querySelectorAll("[data-sp]")],li=0;function od(_){let S=Ct();_&&(nt===_||li===_)?nt?(Lt=S.min,ht=S.min,nt=0,li=_):(ie=performance.now(),nt=_,li=0):_===0?(nt=0,ht=null,li=0):(Lt=S.min,ie=performance.now(),ht=S.min,nt=_,li=0),qc.forEach(A=>{let D=+A.dataset.sp;A.classList.toggle("on",D===(nt||li)||!nt&&!li&&ht==null&&D===0),A.classList.toggle("pz",!!li&&D===li),A.textContent=D===0?"Ahora":li===D?"\u25B6 \xD7"+D:nt===D?"\u23F8 \xD7"+D:"\xD7"+D}),oi=0,a()}qc.forEach(_=>_.onclick=()=>od(+_.dataset.sp)),f("#tsl").oninput=_=>{let S=+_.target.value;Lt=S,ht=S,ie=performance.now(),nt===0&&!li&&qc.forEach(A=>A.classList.remove("on")),oi=0,a()},setInterval(()=>{ht!=null&&nt&&Lt+(performance.now()-ie)/6e4*nt>1560&&(Lt=240,ie=performance.now())},1e3),window.__rodSearch=_=>{let S=g(_.trim());if(!S){u.style.display="none",u._pick=null;return}let A=[],D=[];M.forEach((W,X)=>{if(!W.fams.size)return;let et=g(W.n);et.startsWith(S)||et.includes(" "+S)||et.includes("-"+S)?A.push(X):et.includes(S)&&D.push(X)});let P=A.concat(D).slice(0,7),B=w.filter(W=>g(W.name).startsWith(S)).sort((W,X)=>X.pop-W.pop).slice(0,3),Z=P.map(W=>({h:`\u{1F689} ${d(M[W].n)}<em>${[...M[W].fams].sort(U).slice(0,3).map(X=>`<em class="ls" style="background:${T[X]}">${X}</em>`).join(" ")}</em>`,go:()=>{if(ws){let X=ws;ws=!1,p.placeholder="Buscar estaci\xF3n o municipio\u2026",$c(W,X);return}pn=!1,mn=!1,nn=!1,Je=W,ve=null,cn=null,Ks(),se(),Object.assign(s,{tx:M[W].w[0],ty:M[W].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),qe(),a()}})).concat(B.map(W=>({h:`${d(W.name)}<em>municipio</em>`,go:()=>{Object.assign(s,{tx:W.cx,ty:W.cy,dist:m(W.size*3+14,14,60)}),a()}})));u.innerHTML=Z.map((W,X)=>`<li data-i="${X}">${W.h}</li>`).join("")||'<li class="no">Sin resultados</li>',u.style.display="block",u._pick=W=>{Z[W]&&(Z[W].go(),u.style.display="none",p.value="",p.blur())},u.querySelectorAll("li[data-i]").forEach(W=>W.onclick=()=>u._pick(+W.dataset.i))},ad(),se();try{let _=new URLSearchParams(location.search).get("st");if(_){let S=g(_),A=-1,D=0;M.forEach((P,B)=>{if(!P.fams.size)return;let Z=g(P.n),W=Z===S?3:Z.startsWith(S)||S.startsWith(Z)?2:Z.includes(S)||S.includes(Z)?1:0;W>D&&(D=W,A=B)}),A>=0&&setTimeout(()=>{Je=A,se(),Object.assign(s,{tx:M[A].w[0],ty:M[A].w[1],dist:18,tilt:.5}),qe(),a()},300)}}catch{}window.__rod={get follow(){return cn},get selTrip(){return ve},ST:M,TR:G,FAM:v,act:()=>ai,setSpeed:od,RT:N,pollRT:vt,nowState:Ct,posAt:bs,activeTrips:Br,select:_=>{ve=_,qe()}}}var Or=window.__DATA__;var we=i=>document.querySelector(i),is=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Fn=(i,t,e)=>Math.min(e,Math.max(t,i)),Ru=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Gn=we("#c"),Qa=new xc({canvas:Gn,antialias:!0});Qa.setPixelRatio(Math.min(devicePixelRatio||1,2));var Ss=new ha;Ss.background=new le(15659509);var Dc=35,Gi=new Dn(Dc,1,2,1500);Ss.add(new Ia(16777215,9080992,1));var bp=new La(16777215,.9);bp.position.set(-40,-70,90);Ss.add(bp);var Vi=100/Or.w,Za=Or.w/2,Ja=Or.h/2,en=[],Iu=new yi;Ss.add(Iu);var wp=new Ds({color:16777215,transparent:!0,opacity:.55});for(let i of Or.m){let t=new yi,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let m of i.g){let g=m.map(f=>{let d=[];for(let I=0;I<f.length;I+=2)d.push(new Dt((f[I]-Za)*Vi,(f[I+1]-Ja)*Vi));return d.length>1&&d[0].equals(d[d.length-1])&&d.pop(),d}).filter(f=>f.length>=3);if(!g.length)continue;let w=new wr(g[0]);for(let f=1;f<g.length;f++)w.holes.push(new Us(g[f]));e.push(w);for(let f of g[0])s=Math.min(s,f.x),r=Math.max(r,f.x),a=Math.min(a,f.y),o=Math.max(o,f.y);for(let f of g)n.push(new pa(new rn().setFromPoints(f.map(d=>new F(d.x,d.y,0))),wp))}if(!e.length)continue;let l;try{l=new wa(e,{depth:1,bevelEnabled:!1})}catch{continue}let c=new Aa({color:13421772}),h=new Nn(l,c);t.add(h);let p=new yi;n.forEach(m=>p.add(m)),p.position.z=.04,Iu.add(p),t.scale.z=.01,Iu.add(t);let u={og:p,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:h,mat:c,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};h.userData.m=u,en.push(u)}var uw=en.map(i=>i.mesh),gp=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},Ep=0,Tp=0;for(let i of en){for(let t of i.rings)Ep+=gp(t[0])-t.slice(1).reduce((e,n)=>e+gp(n),0);Tp+=i.area}var yy=Math.sqrt(Tp/Ep),Ec={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},Ap={"08":"provincia de Barcelona",17:"provincia de Girona",25:"provincia de Lleida",43:"provincia de Tarragona"},Ou="sqrt",Bu="pop",Au=0,Pu=0,Ur=1,Ya=1,Sy={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},Lu=i=>Bu==="pop"?i.pop:i.pop/i.area,wc=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new le(i));function My(i){i=Fn(i,0,1)*(wc.length-1);let t=Math.min(Math.floor(i),wc.length-2);return wc[t].clone().lerp(wc[t+1],i-t)}var Fr=i=>i>=100?is(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function by(){Pu=0;for(let i of en)Pu+=i.pop;[...en].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...en].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),Cp()}var wy=new le("#d3d8e2"),Ey=new le("#eceff3");function zu(i){i.mat.color.copy(i.base).lerp(Ey,.86),i.inF||i.mat.color.lerp(wy,.8)}function Cp(){Ur=1,Ya=1e12;for(let e of en){let n=Lu(e);Ur=Math.max(Ur,n),Ya=Math.min(Ya,n)}let i=Math.log10(Math.max(Ya,.01)),t=Math.log10(Ur);for(let e of en)e.base=My((Math.log10(Math.max(Lu(e),.01))-i)/(t-i)),zu(e);we("#lmin").textContent=Fr(Ya),we("#lmax").textContent=Fr(Ur),we("#lname").textContent=Bu==="pop"?"habitantes":"hab./km\xB2",Nc()}function Nc(){let i=Sy[Ou],t=i(Ur),e=24*Au;for(let n of en)n.zt=Au<=.001?.01:Math.max(.12*Math.min(1,Au),e*i(Lu(n))/t)*(n.inF?1:.1);An()}var _p=Object.fromEntries(en.map(i=>[i.code,i])),Tc=[],Rp=[];for(let i of Or.bd){let t=_p[i.a],e=_p[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)Rp.push((i.p[n]-Za)*Vi,(i.p[n+1]-Ja)*Vi,0,(i.p[n+2]-Za)*Vi,(i.p[n+3]-Ja)*Vi,0),Tc.push(t,e)}var Rc=new es;Rc.setPositions(Rp);var Ip=new Oi({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Pp=new Oi({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[Ip,Pp].forEach((i,t)=>{let e=new Gs(Rc,i);e.frustumCulled=!1,e.renderOrder=10+t,Ss.add(e)});function Ty(){let i=Rc.attributes.instanceStart.data.array;for(let t=0;t<Tc.length;t+=2){let e=Math.max(Tc[t].z,Tc[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}Rc.attributes.instanceStart.data.needsUpdate=!0}var Ic={};for(let i of Object.keys(Ec)){let t=en.filter(h=>h.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,l=-1e9;for(let h of t)e+=h.area,n+=h.cx*h.area,s+=h.cy*h.area,r=Math.min(r,h.cx),a=Math.max(a,h.cx),o=Math.min(o,h.cy),l=Math.max(l,h.cy);let c=document.createElement("div");c.className="plab",c.textContent=Ec[i],c.title="Ver solo "+Ap[i],c.onclick=()=>Oy("pr:"+i),document.body.appendChild(c),Ic[i]={el:c,p:new F(n/e,s/e,0),cx:(r+a)/2,cy:(o+l)/2,ext:Math.max(a-r,l-o),ext2:[a-r,l-o],area:e,name:Ec[i]}}var Cu=new F;function Ay(){for(let i in Ic){let t=Ic[i];Cu.copy(t.p).project(Gi),t.el.style.transform=`translate(-50%,-50%) translate(${(Cu.x*.5+.5)*innerWidth}px,${(-Cu.y*.5+.5)*innerHeight}px)`}}var an={tilt:0,yaw:0,dist:150,tx:0,ty:0},de={...an};function Cy(){let i=innerWidth/innerHeight,t=Math.tan(Dc*Math.PI/360);return Math.max(Or.h*Vi*1.1,100*1.1/i)/(2*t)}var Ry=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{de.yaw=Math.round(de.yaw/(2*Math.PI))*2*Math.PI,de.tilt=0,An()});function ku(){Object.assign(de,{tilt:0,yaw:0,dist:Cy(),tx:0,ty:0}),An()}function Iy(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=an;Gi.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),Gi.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),Gi.lookAt(n,s,0)}var Ac=!0,xp=performance.now(),Ka=new Map;function An(){Ac=!0}function Lp(i){requestAnimationFrame(Lp);let t=Fn((i-xp)/1e3,0,.05);xp=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(an)){let r=de[s]-an[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(an[s]+=r*e,n=!0):an[s]=de[s]}for(let s of en){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of Ka){let a=(i-r)/1800;a>=1?(Ka.delete(s),Ys(s)):Ys(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(Ac=!0),n||Ac){Ry.style.transform=`rotate(${an.yaw}rad) scaleY(${(.55+.45*Math.cos(an.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(de.yaw/2))<.02&&de.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?"El norte ya est\xE1 arriba":"Poner el norte arriba y el mapa plano")}Iy(),Ty(),Ay(),window.__rodFrame&&window.__rodFrame(),Qa.render(Ss,Gi),Ac=n,we("#tilt").value=Math.round(de.tilt*180/Math.PI),we("#yaw").value=Math.round(((de.yaw*180/Math.PI+180)%360+360)%360-180)}}function Dp(){Qa.setSize(innerWidth,innerHeight,!1),Gi.aspect=innerWidth/innerHeight,Gi.updateProjectionMatrix(),Ip.resolution.set(innerWidth,innerHeight),Pp.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),An()}addEventListener("resize",()=>{Dp(),Ze.length&&Ms()});Gn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;de.yaw+=n*.0035}else i.ctrlKey?de.dist=Fn(de.dist*Math.exp(e*.01),6,400):de.tilt=Fn(de.tilt+e*.002,0,1.32);An()},{passive:!1});Gn.addEventListener("contextmenu",i=>i.preventDefault());var Hi=new Map,qn=null,$s=0,Du=0,Nu=0;var Pc=null;Gn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),Ze.length&&setTimeout(Ms,50)),Gn.setPointerCapture(i.pointerId),Hi.set(i.pointerId,{x:i.clientX,y:i.clientY}),Hi.size===1&&(qn={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),Hi.size===2){let[t,e]=[...Hi.values()];$s=Math.hypot(t.x-e.x,t.y-e.y),Du=Math.atan2(e.y-t.y,e.x-t.x),Nu=(t.y+e.y)/2,Pc={mode:null,rot:0,sc:0,tl:0},qn&&(qn.multi=!0)}Vu()});Gn.addEventListener("pointermove",i=>{let t=Hi.get(i.pointerId);if(!t){ns={x:i.clientX,y:i.clientY},Uu||(Uu=requestAnimationFrame(Ly));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,Hi.size===2){let[s,r]=[...Hi.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),l=(s.y+r.y)/2,c=o-Du;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI);let h=$s?a-$s:0,p=l-Nu,u=Pc||(Pc={mode:null,rot:0,sc:0,tl:0});u.rot+=c,u.sc+=h,u.tl+=p,u.mode?u.mode==="zoom"&&Math.abs(u.rot)>.45&&(u.mode="rotate"):Math.abs(u.rot)>.3?u.mode="rotate":Math.abs(u.tl)>30&&Math.abs(u.sc)<18?u.mode="tilt":Math.abs(u.sc)>12&&(u.mode="zoom"),(u.mode==="zoom"||u.mode==="rotate")&&$s&&(de.dist=Fn(de.dist*$s/a,6,400)),u.mode==="rotate"&&(de.yaw+=c,an.yaw=de.yaw),u.mode==="tilt"&&(de.tilt=Fn(de.tilt-p*.006,0,1.32),an.tilt=de.tilt),$s=a,Du=o,Nu=l,An();return}if(qn.moved+=Math.abs(e)+Math.abs(n),qn.rot||i.altKey)de.yaw+=e*.005,de.tilt=Fn(de.tilt+n*.004,0,1.32),an.yaw=de.yaw,an.tilt=de.tilt;else{let s=2*an.dist*Math.tan(Dc*Math.PI/360)/innerHeight,r=Math.sin(an.yaw),a=Math.cos(an.yaw),o=1/Math.max(Math.cos(an.tilt),.3);de.tx=Fn(de.tx-a*e*s+-r*n*s*o,-70,70),de.ty=Fn(de.ty-r*e*s+a*n*s*o,-70,70),an.tx=de.tx,an.ty=de.ty}An()});var Np=i=>{let t=qn&&!qn.rot&&!qn.multi&&qn.moved<(qn.touch?12:6)&&i.type==="pointerup"&&Hi.size===1,e=qn&&qn.touch;Hi.delete(i.pointerId),$s=0,Pc=null,Hi.size||(qn=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};Gn.addEventListener("pointerup",Np);Gn.addEventListener("pointercancel",Np);Gn.addEventListener("dblclick",ku);addEventListener("keydown",i=>{i.key==="Alt"&&(Gn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(Gn.style.cursor="")});addEventListener("blur",()=>{Gn.style.cursor=""});var Py=new Os,vp=new Dt,ns=null,Uu=0,Xs=null;function Ly(){if(Uu=0,!ns||qn)return;vp.set(ns.x/innerWidth*2-1,-(ns.y/innerHeight)*2+1),Py.setFromCamera(vp,Gi);let i=null;if(i!==Xs){let e=Xs;Xs=i,e&&Ys(e),i&&Ys(i),An()}let t=window.__rodHover&&window.__rodHover(ns.x,ns.y);if(t){Ws.innerHTML=t,Ws.style.display="block";let e=Ws.offsetWidth,n=Ws.offsetHeight;Ws.style.left=Fn(ns.x+14,6,innerWidth-e-6)+"px",Ws.style.top=Fn(ns.y+14,6,innerHeight-n-6)+"px",Gn.style.cursor="pointer"}else Vu(),Gn.style.cursor=""}Gn.addEventListener("pointerleave",()=>{if(ns=null,Xs){let i=Xs;Xs=null,Ys(i),An()}Vu()});var Ws=we("#tip");function Vu(){Ws.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{Bu=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),Cp()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{Ou=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),Nc()});we("#yaw").oninput=i=>{de.yaw=+i.target.value*Math.PI/180,An()};we("#tilt").oninput=i=>{de.tilt=+i.target.value*Math.PI/180,An()};we("#zin").onclick=()=>{de.dist=Fn(de.dist*.75,6,400),An()};we("#zout").onclick=()=>{de.dist=Fn(de.dist/.75,6,400),An()};we("#rst").onclick=ku;var yp=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],Ze=[],Sp={},Dy=i=>Sp[i]||(Sp[i]=new Ds({color:i}));function Up(i,t){i.og.children.forEach(e=>e.material=t?Dy(t):wp)}function Ys(i,t=0){let e=i.mat.emissive;i===Xs?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function Hu(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let c of i)e=Math.min(e,c.cx-c.size/2),n=Math.max(n,c.cx+c.size/2),s=Math.min(s,c.cy-c.size/2),r=Math.max(r,c.cy+c.size/2);let a=innerWidth/innerHeight,o=Math.tan(Dc*Math.PI/360),l=i.length===1?Fn(i[0].size*3.2+14,14,120):Fn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(de,{tx:(e+n)/2,ty:(s+r)/2,dist:l,tilt:t,yaw:0}),An()}var ys=we("#q"),ri=we("#list"),$e=we("#mcs");function Uc(i,t=!0){if(ri.style.display="none",ys.value="",!i.sel){Ze.length>=6&&Fp(Ze[0].o,!0);let e=new Set(Ze.map(s=>s.color)),n=yp.find(s=>!e.has(s))||yp[0];i.sel={o:i,color:n,tint:new le(n).multiplyScalar(.12)},Ze.push(i.sel),Up(i,n)}$e.classList.contains("min")&&to(!1),Ka.set(i,performance.now()),Ys(i),t&&Hu([i],Math.max(de.tilt,.9)),Ms()}function Fp(i,t){let e=Ze.indexOf(i.sel);e>=0&&Ze.splice(e,1),i.sel=null,Up(i,null),Ys(i),An(),t||Ms()}function Op(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=Ze.map(h=>{let p=1e9,u=-1e9,m=1e9,g=-1e9;for(let w of h.o.rings)for(let f=0;f<w[0].length;f+=2)p=Math.min(p,w[0][f]),u=Math.max(u,w[0][f]),m=Math.min(m,w[0][f+1]),g=Math.max(g,w[0][f+1]);return{x0:p,x1:u,y0:m,y1:g}}),a=Math.max(...r.map(h=>Math.max(h.x1-h.x0,h.y1-h.y0))),o=(Math.min(e,n)-22)/a;Ze.forEach((h,p)=>{let u=r[p],m=(u.x0+u.x1)/2,g=(u.y0+u.y1)/2;s.beginPath();for(let w of h.o.rings)for(let f of w)for(let d=0;d<f.length;d+=2){let I=e/2+(f[d]-m)*o,L=n/2-(f[d+1]-g)*o;d?s.lineTo(I,L):s.moveTo(I,L),d===f.length-2&&s.closePath()}s.fillStyle=h.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=h.color,s.stroke()});let l=o/yy,c=[.5,1,2,5,10,20,50,100].find(h=>h*l>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,c*l,2),s.font="10px system-ui",s.fillText(c+" km",12+c*l,n-8)}function Ms(){if(!Ze.length){$e.innerHTML="",$e.style.display="none",to(!1);return}if($e.style.display="flex",innerWidth<=640){let e=we("#inf").getBoundingClientRect().bottom;$e.style.top=Math.round(e+8)+"px",$e.style.maxHeight=Math.max(110,Math.min(innerHeight*(we("#rc").classList.contains("min")?.7:.4),we("#rc").getBoundingClientRect().top-e-16))+"px",$e.style.width=""}else if(innerHeight<=500){let e=we("#inf").getBoundingClientRect().bottom;$e.style.top=Math.round(e+8)+"px",$e.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",$e.style.width="min(290px, 40vw)"}else $e.style.top="",$e.style.maxHeight="",$e.style.width="";let i=Ze.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${Ec[s.pr]}</em></div><div class="mb">${is(s.pop)} hab.</div><small>${Fr(s.area)} km\xB2 \xB7 ${Fr(s.pop/s.area)} hab./km\xB2 \xB7 n\xBA ${s.rankP} en poblaci\xF3n</small></div>`}).join("");if(Ze.length>1){let e=s=>Math.max(...Ze.map(s));if(i+='<div class="cmp"><div class="ct">Comparar <small>arrastra una ficha sobre otra para reordenar</small></div><canvas id="sil"></canvas><small class="sc">Siluetas superpuestas a la misma escala</small>'+[["Habitantes",s=>s.o.pop,is],["Superficie (km\xB2)",s=>s.o.area,Fr],["Densidad (hab./km\xB2)",s=>s.o.pop/s.o.area,Fr]].map(([s,r,a])=>`<div class="cr"><span>${s}</span>${Ze.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),Ze.length===2){let[s,r]=Ze.map(c=>c.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],l=(c,h)=>(c>=h?c/h:h/c).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}</b> tiene ${l(a.pop,o.pop)}\xD7 los habitantes de <b>${o.name}</b> y ocupa ${l(a.area,o.area)}\xD7 ${a.area>=o.area?"su superficie":"menos superficie"}.</small>`}i+="</div>"}$e.innerHTML=i,$e.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),Fp(Ze[+e.dataset.x].o)}),$e.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>Hu([Ze[+e.dataset.i].o],Math.max(de.tilt,.9)),e.onmouseenter=()=>{let n=Ze[+e.dataset.i].o;Ka.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=Ze.splice(s,1);Ze.splice(r,0,a),Ms();let o=we("#sil");o&&o.classList.add("flash")}}});let t=we("#sil");t&&Op(t)}ys.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(ys.value);return}let i=Ru(ys.value.trim());if(!i){ri.style.display="none";return}let t=[],e=[];for(let s of en){let r=Ru(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);ri.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${is(s.pop)}</em></li>`).join("")||'<li class="no">Sin resultados</li>',ri.style.display="block",ri.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>Uc(n[+s.dataset.i])),ri._r=n});ys.addEventListener("keydown",i=>{i.key==="Enter"&&ri._pick?ri._pick(0):i.key==="Enter"&&ri._r&&ri._r[0]&&Uc(ri._r[0]),i.key==="Escape"&&(ys.value="",ri.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==ys&&Bp()});var Mp=0;addEventListener("resize",()=>{clearTimeout(Mp),Mp=setTimeout(()=>{let i=we("#sil");i&&Op(i)},120)});var Lc=null,Fu=we("#chip");function Ny(i,t,e=.8){Lc={codes:new Set(i.map(n=>n.code)),label:t},en.forEach(n=>{n.inF=Lc.codes.has(n.code),zu(n)}),Fu.innerHTML=`<span>Mostrando: <b>${t}</b> \xB7 ${i.length} municipio${i.length===1?"":"s"}</span><button id="chx" title="Quitar filtro">\xD7</button>`,Fu.style.display="flex",we("#chx").onclick=Bp,Nc(),Hu(i,e),i.slice(0,40).forEach(n=>Ka.set(n,performance.now()))}function Bp(){Lc&&(Lc=null,en.forEach(i=>{i.inF=!0,zu(i)}),Fu.style.display="none",Nc())}var Uy="prov";function Fy(i){let t=[...en].sort((a,o)=>o.pop-a.pop),e=[...en].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[en.filter(a=>a.pr===s),Ap[s]];if(n==="top")return s==="pop"?[t.slice(0,10),"10 con m\xE1s habitantes"]:[e.slice(0,10),"10 m\xE1s densos"];if(n==="low")return s==="pop"?[t.slice(-10),"10 con menos habitantes"]:[e.slice(-10),"10 menos densos"];if(n==="size")return[en.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${is(+s)} o m\xE1s habitantes`:+s==0?`menos de ${is(+r)} habitantes`:`${is(+s)} \u2013 ${is(+r-1)} habitantes`];if(n==="n50"){let a=0,o=0;for(let l of t)if(a+=l.pop,o++,a>=Pu/2)break;return[t.slice(0,o),"la mitad de la poblaci\xF3n"]}return[[],""]}function Oy(i){let[t,e]=Fy(i);t.length&&Ny(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{Uy=i.dataset.tab,we("#dbody").scrollTop=0});var qs=we("#rc"),Cc=we("#mcstab");function ja(i){qs.classList.toggle("min",i),we("#rcgrab span").textContent=i?"Mostrar controles":"Ocultar controles",Ze.length&&Ms()}function to(i){$e.classList.toggle("min",i),$e.style.transform="",$e.style.opacity="",Cc.classList.toggle("on",i&&Ze.length>0),i&&(Cc.textContent=`\u25B8 ${Ze.length} ${Ze.length===1?"ficha":"fichas"}`,Cc.style.top=$e.style.top||"124px")}function Gu(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!Fc.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y;!s.lock&&Math.hypot(o,l)>10&&(s.lock=Math.abs(o)>Math.abs(l)?"x":"y"),s.lock===n&&t&&t(o,l)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y,c=s.lock;s=null,e(c===n?o:0,c===n?l:0,c)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}we("#rcgrab").onclick=()=>ja(!qs.classList.contains("min"));var zp=()=>innerWidth>640;Gu(qs,{axis:"y",onEnd:(i,t)=>{if(!zp())if(t>40&&!qs.classList.contains("min")){let e=we("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&ja(!0)}else t<-30&&qs.classList.contains("min")&&ja(!1)}});Gu(qs,{axis:"x",onEnd:i=>{zp()&&(i>50?ja(!0):i<-30&&qs.classList.contains("min")&&ja(!1))}});Gu($e,{axis:"x",onMove:i=>{i<0&&($e.classList.add("sw"),$e.style.transform=`translateX(${i}px)`,$e.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{$e.classList.remove("sw"),i<-60?to(!0):($e.style.transform="",$e.style.opacity="")}});Cc.onclick=()=>{to(!1),Ms()};we("#dtoggle").onclick=()=>{let i=we("#dp").classList.toggle("open");we("#rc").classList.toggle("dopen",i),we("#dtoggle").textContent=i?Fc.matches&&innerWidth<=640?"\u2190 Controles":"En directo \u25B4":"En directo: conectar datos de Renfe \u25BE",window.__rodCard&&window.__rodCard()};var Fc=matchMedia("(max-width:640px), (max-height:500px)");function kp(){let i=we("#leg");Fc.matches?we("#rc").insertBefore(i,we("#dtoggle")):document.body.appendChild(i),Ze.length&&Ms()}Fc.addEventListener("change",kp);kp();Dp();by();ku();Object.assign(an,de);for(let i of en)i.z=.01;requestAnimationFrame(Lp);mp({scene:Ss,camera:Gi,renderer:Qa,goal:de,cur:an,invalidate:An,flyTo:(i,t,e,n)=>{Object.assign(de,{tx:(i-Za)*Vi,ty:(t-Ja)*Vi,dist:e,tilt:n}),An()},K:Vi,CX:Za,CY:Ja,mcs:$e,q:ys,list:ri,munis:en,select:Uc,norm:Ru,fmt:is,clamp:Fn,mcsMin:to});window.__app={scene:Ss,renderer:Qa,camera:Gi,munis:en,labs:Ic,goal:de,cur:an,select:Uc,get mode(){return Ou}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
