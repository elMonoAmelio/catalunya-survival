(()=>{var uf=0,Zh=1,df=2;var Ya=1,ff=2,Ur=3,xs=0,Vn=1,Oi=2,Bi=0,Fr=1,Jh=2,Kh=3,jh=4,pf=5;var Gs=100,mf=101,gf=102,_f=103,xf=104,vf=200,yf=201,Sf=202,Mf=203,Qh=204,tu=205,bf=206,wf=207,Ef=208,Tf=209,Af=210,Cf=211,Rf=212,If=213,Pf=214,jo=0,Qo=1,tl=2,Mr=3,el=4,nl=5,il=6,sl=7,zl=0,Lf=1,Df=2,bi=0,eu=1,nu=2,iu=3,su=4,ru=5,au=6,ou=7;var lu=300,vs=301,Ws=302,kl=303,Vl=304,Za=306,rl=1e3,Pi=1001,al=1002,xn=1003,Nf=1004;var Ja=1005;var bn=1006,Hl=1007;var ys=1008;var Jn=1009,cu=1010,hu=1011,Or=1012,Gl=1013,wi=1014,fi=1015,Ei=1016,Wl=1017,$l=1018,Br=1020,uu=35902,du=35899,fu=1021,pu=1022,pi=1023,Di=1026,Ss=1027,Xl=1028,ql=1029,Ms=1030,Yl=1031;var Zl=1033,Ka=33776,ja=33777,Qa=33778,to=33779,Jl=35840,Kl=35841,jl=35842,Ql=35843,tc=36196,ec=37492,nc=37496,ic=37488,sc=37489,eo=37490,rc=37491,ac=37808,oc=37809,lc=37810,cc=37811,hc=37812,uc=37813,dc=37814,fc=37815,pc=37816,mc=37817,gc=37818,_c=37819,xc=37820,vc=37821,yc=36492,Sc=36494,Mc=36495,bc=36283,wc=36284,no=36285,Ec=36286;var pa=2300,ol=2301,Jo=2302,Fh=2303,Oh=2400,Bh=2401,zh=2402;var Uf=3200;var Tc=0,Ff=1,es="",ni="srgb",ma="srgb-linear",ga="linear",ze="srgb";var Ko=7680;var Of=519,Bf=512,zf=513,kf=514,Ac=515,Vf=516,Hf=517,Cc=518,Gf=519,mu=35044;var gu="300 es",yi=2e3,br=2001;function Tm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Am(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _a(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wf(){let i=_a("canvas");return i.style.display="block",i}var Td={},wr=null;function xa(...i){let t="THREE."+i.shift();wr?wr("log",t,...i):console.log(t,...i)}function $f(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function oe(...i){i=$f(i);let t="THREE."+i.shift();if(wr)wr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=$f(i);let t="THREE."+i.shift();if(wr)wr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Us(...i){let t=i.join(" ");t in Td||(Td[t]=!0,oe(...i))}function Xf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var qf={[jo]:Qo,[tl]:il,[el]:sl,[Mr]:nl,[Qo]:jo,[il]:tl,[sl]:el,[nl]:Mr},Ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ad=1234567,ha=Math.PI/180,Er=180/Math.PI;function Li(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[e&63|128]+Dn[e>>8&255]+"-"+Dn[e>>16&255]+Dn[e>>24&255]+Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function _u(i,t){return(i%t+t)%t}function Cm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Rm(i,t,e){return i!==t?(e-i)/(t-i):0}function ua(i,t,e){return(1-e)*i+e*t}function Im(i,t,e,n){return ua(i,t,1-Math.exp(-e*n))}function Pm(i,t=1){return t-Math.abs(_u(i,t*2)-t)}function Lm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Dm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Nm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Um(i,t){return i+Math.random()*(t-i)}function Fm(i){return i*(.5-Math.random())}function Om(i){i!==void 0&&(Ad=i);let t=Ad+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bm(i){return i*ha}function zm(i){return i*Er}function km(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Vm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gm(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),p=r((t-n)/2),u=a((t-n)/2),m=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*p,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*p,o*c);break;case"ZXZ":i.set(l*p,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*m,o*h,o*c);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var xu={DEG2RAD:ha,RAD2DEG:Er,generateUUID:Li,clamp:me,euclideanModulo:_u,mapLinear:Cm,inverseLerp:Rm,lerp:ua,damp:Im,pingpong:Pm,smoothstep:Lm,smootherstep:Dm,randInt:Nm,randFloat:Um,randFloatSpread:Fm,seededRandom:Om,degToRad:Bm,radToDeg:zm,isPowerOfTwo:km,ceilPowerOfTwo:Vm,floorPowerOfTwo:Hm,setQuaternionFromProperEuler:Gm,normalize:Ve,denormalize:vi},Dt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ui=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],u=r[a+0],m=r[a+1],_=r[a+2],w=r[a+3];if(p!==w||l!==u||c!==m||h!==_){let f=l*u+c*m+h*_+p*w;f<0&&(u=-u,m=-m,_=-_,w=-w,f=-f);let d=1-o;if(f<.9995){let L=Math.acos(f),D=Math.sin(L);d=Math.sin(d*L)/D,o=Math.sin(o*L)/D,l=l*d+u*o,c=c*d+m*o,h=h*d+_*o,p=p*d+w*o}else{l=l*d+u*o,c=c*d+m*o,h=h*d+_*o,p=p*d+w*o;let L=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=L,c*=L,h*=L,p*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],u=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+h*p+l*m-c*u,t[e+1]=l*_+h*u+c*p-o*m,t[e+2]=c*_+h*m+o*u-l*p,t[e+3]=h*_-o*p-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),u=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*p+c*m*_,this._y=c*m*p-u*h*_,this._z=c*h*_+u*m*p,this._w=c*h*p-u*m*_;break;case"YXZ":this._x=u*h*p+c*m*_,this._y=c*m*p-u*h*_,this._z=c*h*_-u*m*p,this._w=c*h*p+u*m*_;break;case"ZXY":this._x=u*h*p-c*m*_,this._y=c*m*p+u*h*_,this._z=c*h*_+u*m*p,this._w=c*h*p-u*m*_;break;case"ZYX":this._x=u*h*p-c*m*_,this._y=c*m*p+u*h*_,this._z=c*h*_-u*m*p,this._w=c*h*p+u*m*_;break;case"YZX":this._x=u*h*p+c*m*_,this._y=c*m*p+u*h*_,this._z=c*h*_-u*m*p,this._w=c*h*p-u*m*_;break;case"XZY":this._x=u*h*p-c*m*_,this._y=c*m*p-u*h*_,this._z=c*h*_+u*m*p,this._w=c*h*p+u*m*_;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],u=n+o+p;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return hh.copy(this).projectOnVector(t),this.sub(hh)}reflect(t){return this.sub(hh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hh=new O,Cd=new Ui,de=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],u=n[2],m=n[5],_=n[8],w=s[0],f=s[3],d=s[6],L=s[1],D=s[4],b=s[7],M=s[2],R=s[5],F=s[8];return r[0]=a*w+o*L+l*M,r[3]=a*f+o*D+l*R,r[6]=a*d+o*b+l*F,r[1]=c*w+h*L+p*M,r[4]=c*f+h*D+p*R,r[7]=c*d+h*b+p*F,r[2]=u*w+m*L+_*M,r[5]=u*f+m*D+_*R,r[8]=u*d+m*b+_*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*a-o*c,u=o*l-h*r,m=c*r-a*l,_=e*p+n*u+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/_;return t[0]=p*w,t[1]=(s*c-h*n)*w,t[2]=(o*n-s*a)*w,t[3]=u*w,t[4]=(h*e-s*l)*w,t[5]=(s*r-o*e)*w,t[6]=m*w,t[7]=(n*l-c*e)*w,t[8]=(a*e-n*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uh.makeScale(t,e)),this}rotate(t){return Us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uh.makeRotation(-t)),this}translate(t,e){return Us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},uh=new de,Rd=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Id=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wm(){let i={enabled:!0,workingColorSpace:ma,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ze&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ze&&(s.r=Sr(s.r),s.g=Sr(s.g),s.b=Sr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===es?ga:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ma]:{primaries:t,whitePoint:n,transfer:ga,toXYZ:Rd,fromXYZ:Id,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:t,whitePoint:n,transfer:ze,toXYZ:Rd,fromXYZ:Id,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),i}var Re=Wm();function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rr,ll=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rr===void 0&&(rr=_a("canvas")),rr.width=t.width,rr.height=t.height;let s=rr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=rr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_a("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qi(e[n]/255)*255):e[n]=Qi(e[n]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$m=0,Tr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(dh(s[a].image)):r.push(dh(s[a]))}else r=dh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function dh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ll.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}var Xm=0,fh=new O,qn=class i extends Ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Pi,s=Pi,r=bn,a=ys,o=pi,l=Jn,c=i.DEFAULT_ANISOTROPY,h=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Li(),this.name="",this.source=new Tr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fh).x}get height(){return this.source.getSize(fh).y}get depth(){return this.source.getSize(fh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rl:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case al:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rl:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case al:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=lu;qn.DEFAULT_ANISOTROPY=1;var ke=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],m=l[5],_=l[9],w=l[2],f=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-w)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+w)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let D=(c+1)/2,b=(m+1)/2,M=(d+1)/2,R=(h+u)/4,F=(p+w)/4,v=(_+f)/4;return D>b&&D>M?D<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(D),s=R/n,r=F/n):b>M?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=v/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=F/r,s=v/r),this.set(n,s,r,e),this}let L=Math.sqrt((f-_)*(f-_)+(p-w)*(p-w)+(u-h)*(u-h));return Math.abs(L)<.001&&(L=1),this.x=(f-_)/L,this.y=(p-w)/L,this.z=(u-h)/L,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cl=class extends Ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new qn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Tr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends cl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},va=class extends qn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var hl=class extends qn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var De=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,p,u,m,_,w,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,p,u,m,_,w,f)}set(t,e,n,s,r,a,o,l,c,h,p,u,m,_,w,f){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=m,d[7]=_,d[11]=w,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ar.setFromMatrixColumn(t,0).length(),r=1/ar.setFromMatrixColumn(t,1).length(),a=1/ar.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*p,_=o*h,w=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=m+_*c,e[5]=u-w*c,e[9]=-o*l,e[2]=w-u*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,m=l*p,_=c*h,w=c*p;e[0]=u+w*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=m*o-_,e[6]=w+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,m=l*p,_=c*h,w=c*p;e[0]=u-w*o,e[4]=-a*p,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*h,e[9]=w-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,m=a*p,_=o*h,w=o*p;e[0]=l*h,e[4]=_*c-m,e[8]=u*c+w,e[1]=l*p,e[5]=w*c+u,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*c,_=o*l,w=o*c;e[0]=l*h,e[4]=w-u*p,e[8]=_*p+m,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*p+_,e[10]=u-w*p}else if(t.order==="XZY"){let u=a*l,m=a*c,_=o*l,w=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=u*p+w,e[5]=a*h,e[9]=m*p-_,e[2]=_*p-m,e[6]=o*h,e[10]=w*p+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qm,t,Ym)}lookAt(t,e,n){let s=this.elements;return ti.subVectors(t,e),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),os.crossVectors(n,ti),os.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),os.crossVectors(n,ti)),os.normalize(),bo.crossVectors(ti,os),s[0]=os.x,s[4]=bo.x,s[8]=ti.x,s[1]=os.y,s[5]=bo.y,s[9]=ti.y,s[2]=os.z,s[6]=bo.z,s[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],u=n[9],m=n[13],_=n[2],w=n[6],f=n[10],d=n[14],L=n[3],D=n[7],b=n[11],M=n[15],R=s[0],F=s[4],v=s[8],C=s[12],z=s[1],G=s[5],q=s[9],J=s[13],V=s[2],K=s[6],st=s[10],rt=s[14],vt=s[3],at=s[7],ht=s[11],pt=s[15];return r[0]=a*R+o*z+l*V+c*vt,r[4]=a*F+o*G+l*K+c*at,r[8]=a*v+o*q+l*st+c*ht,r[12]=a*C+o*J+l*rt+c*pt,r[1]=h*R+p*z+u*V+m*vt,r[5]=h*F+p*G+u*K+m*at,r[9]=h*v+p*q+u*st+m*ht,r[13]=h*C+p*J+u*rt+m*pt,r[2]=_*R+w*z+f*V+d*vt,r[6]=_*F+w*G+f*K+d*at,r[10]=_*v+w*q+f*st+d*ht,r[14]=_*C+w*J+f*rt+d*pt,r[3]=L*R+D*z+b*V+M*vt,r[7]=L*F+D*G+b*K+M*at,r[11]=L*v+D*q+b*st+M*ht,r[15]=L*C+D*J+b*rt+M*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],m=t[14],_=t[3],w=t[7],f=t[11],d=t[15],L=l*m-c*u,D=o*m-c*p,b=o*u-l*p,M=a*m-c*h,R=a*u-l*h,F=a*p-o*h;return e*(w*L-f*D+d*b)-n*(_*L-f*M+d*R)+s*(_*D-w*M+d*F)-r*(_*b-w*R+f*F)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],m=t[11],_=t[12],w=t[13],f=t[14],d=t[15],L=e*o-n*a,D=e*l-s*a,b=e*c-r*a,M=n*l-s*o,R=n*c-r*o,F=s*c-r*l,v=h*w-p*_,C=h*f-u*_,z=h*d-m*_,G=p*f-u*w,q=p*d-m*w,J=u*d-m*f,V=L*J-D*q+b*G+M*z-R*C+F*v;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/V;return t[0]=(o*J-l*q+c*G)*K,t[1]=(s*q-n*J-r*G)*K,t[2]=(w*F-f*R+d*M)*K,t[3]=(u*R-p*F-m*M)*K,t[4]=(l*z-a*J-c*C)*K,t[5]=(e*J-s*z+r*C)*K,t[6]=(f*b-_*F-d*D)*K,t[7]=(h*F-u*b+m*D)*K,t[8]=(a*q-o*z+c*v)*K,t[9]=(n*z-e*q-r*v)*K,t[10]=(_*R-w*b+d*L)*K,t[11]=(p*b-h*R-m*L)*K,t[12]=(o*C-a*G-l*v)*K,t[13]=(e*G-n*C+s*v)*K,t[14]=(w*D-_*M-f*L)*K,t[15]=(h*M-p*D+u*L)*K,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,p=o+o,u=r*c,m=r*h,_=r*p,w=a*h,f=a*p,d=o*p,L=l*c,D=l*h,b=l*p,M=n.x,R=n.y,F=n.z;return s[0]=(1-(w+d))*M,s[1]=(m+b)*M,s[2]=(_-D)*M,s[3]=0,s[4]=(m-b)*R,s[5]=(1-(u+d))*R,s[6]=(f+L)*R,s[7]=0,s[8]=(_+D)*F,s[9]=(f-L)*F,s[10]=(1-(u+w))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ar.set(s[0],s[1],s[2]).length(),o=ar.set(s[4],s[5],s[6]).length(),l=ar.set(s[8],s[9],s[10]).length();r<0&&(a=-a),mi.copy(this);let c=1/a,h=1/o,p=1/l;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=h,mi.elements[5]*=h,mi.elements[6]*=h,mi.elements[8]*=p,mi.elements[9]*=p,mi.elements[10]*=p,e.setFromRotationMatrix(mi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=yi,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s),_,w;if(l)_=r/(a-r),w=a*r/(a-r);else if(o===yi)_=-(a+r)/(a-r),w=-2*a*r/(a-r);else if(o===br)_=-a/(a-r),w=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=yi,l=!1){let c=this.elements,h=2/(e-t),p=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s),_,w;if(l)_=1/(a-r),w=a/(a-r);else if(o===yi)_=-2/(a-r),w=-(a+r)/(a-r);else if(o===br)_=-1/(a-r),w=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ar=new O,mi=new De,qm=new O(0,0,0),Ym=new O(1,1,1),os=new O,bo=new O,ti=new O,Pd=new De,Ld=new Ui,ts=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ld.setFromEuler(this),this.setFromQuaternion(Ld,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ts.DEFAULT_ORDER="XYZ";var Ar=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zm=0,Dd=new O,or=new Ui,Yi=new De,wo=new O,na=new O,Jm=new O,Km=new Ui,Nd=new O(1,0,0),Ud=new O(0,1,0),Fd=new O(0,0,1),Od={type:"added"},jm={type:"removed"},lr={type:"childadded",child:null},ph={type:"childremoved",child:null},vn=class i extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new ts,n=new Ui,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new de}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(Nd,t)}rotateY(t){return this.rotateOnAxis(Ud,t)}rotateZ(t){return this.rotateOnAxis(Fd,t)}translateOnAxis(t,e){return Dd.copy(t).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nd,t)}translateY(t){return this.translateOnAxis(Ud,t)}translateZ(t){return this.translateOnAxis(Fd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wo.copy(t):wo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(na,wo,this.up):Yi.lookAt(wo,na,this.up),this.quaternion.setFromRotationMatrix(Yi),s&&(Yi.extractRotation(s.matrixWorld),or.setFromRotationMatrix(Yi),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Od),lr.child=t,this.dispatchEvent(lr),lr.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jm),ph.child=t,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Od),lr.child=t,this.dispatchEvent(lr),lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,t,Jm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,Km,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),p=a(t.shapes),u=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vn.DEFAULT_UP=new O(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Si=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qm={type:"move"},Cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let w of t.hand.values()){let f=e.getJointPose(w,n),d=this._getHandJoint(c,w);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Si;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function mh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var le=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Re.workingColorSpace){return this.r=t,this.g=e,this.b=n,Re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Re.workingColorSpace){if(t=_u(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=mh(a,r,t+1/3),this.g=mh(a,r,t),this.b=mh(a,r,t-1/3)}return Re.colorSpaceToWorking(this,s),this}setStyle(t,e=ni){function n(r){r!==void 0&&parseFloat(r)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ni){let n=Yf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=Sr(t.r),this.g=Sr(t.g),this.b=Sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ni){return Re.workingToColorSpace(Nn.copy(this),t),Math.round(me(Nn.r*255,0,255))*65536+Math.round(me(Nn.g*255,0,255))*256+Math.round(me(Nn.b*255,0,255))}getHexString(t=ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Re.workingColorSpace){Re.workingToColorSpace(Nn.copy(this),e);let n=Nn.r,s=Nn.g,r=Nn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Re.workingColorSpace){return Re.workingToColorSpace(Nn.copy(this),e),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=ni){Re.workingToColorSpace(Nn.copy(this),t);let e=Nn.r,n=Nn.g,s=Nn.b;return t!==ni?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ls),this.setHSL(ls.h+t,ls.s+e,ls.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ls),t.getHSL(Eo);let n=ua(ls.h,Eo.h,e),s=ua(ls.s,Eo.s,e),r=ua(ls.l,Eo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new le;le.NAMES=Yf;var ya=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ts,this.environmentIntensity=1,this.environmentRotation=new ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},gi=new O,Zi=new O,gh=new O,Ji=new O,cr=new O,hr=new O,Bd=new O,_h=new O,xh=new O,vh=new O,yh=new ke,Sh=new ke,Mh=new ke,ds=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gi.subVectors(t,e),s.cross(gi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gi.subVectors(s,e),Zi.subVectors(n,e),gh.subVectors(t,e);let a=gi.dot(gi),o=gi.dot(Zi),l=gi.dot(gh),c=Zi.dot(Zi),h=Zi.dot(gh),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,m=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ji.x),l.addScaledVector(a,Ji.y),l.addScaledVector(o,Ji.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return yh.setScalar(0),Sh.setScalar(0),Mh.setScalar(0),yh.fromBufferAttribute(t,e),Sh.fromBufferAttribute(t,n),Mh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(yh,r.x),a.addScaledVector(Sh,r.y),a.addScaledVector(Mh,r.z),a}static isFrontFacing(t,e,n,s){return gi.subVectors(n,e),Zi.subVectors(t,e),gi.cross(Zi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),gi.cross(Zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;cr.subVectors(s,n),hr.subVectors(r,n),_h.subVectors(t,n);let l=cr.dot(_h),c=hr.dot(_h);if(l<=0&&c<=0)return e.copy(n);xh.subVectors(t,s);let h=cr.dot(xh),p=hr.dot(xh);if(h>=0&&p<=h)return e.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(cr,a);vh.subVectors(t,r);let m=cr.dot(vh),_=hr.dot(vh);if(_>=0&&m<=_)return e.copy(r);let w=m*c-l*_;if(w<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(hr,o);let f=h*_-m*p;if(f<=0&&p-h>=0&&m-_>=0)return Bd.subVectors(r,s),o=(p-h)/(p-h+(m-_)),e.copy(s).addScaledVector(Bd,o);let d=1/(f+w+u);return a=w*d,o=u*d,e.copy(n).addScaledVector(cr,a).addScaledVector(hr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_i.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_i.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=_i.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_i):_i.fromBufferAttribute(r,a),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),To.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),To.copy(n.boundingBox)),To.applyMatrix4(t.matrixWorld),this.union(To)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ia),Ao.subVectors(this.max,ia),ur.subVectors(t.a,ia),dr.subVectors(t.b,ia),fr.subVectors(t.c,ia),cs.subVectors(dr,ur),hs.subVectors(fr,dr),Is.subVectors(ur,fr);let e=[0,-cs.z,cs.y,0,-hs.z,hs.y,0,-Is.z,Is.y,cs.z,0,-cs.x,hs.z,0,-hs.x,Is.z,0,-Is.x,-cs.y,cs.x,0,-hs.y,hs.x,0,-Is.y,Is.x,0];return!bh(e,ur,dr,fr,Ao)||(e=[1,0,0,0,1,0,0,0,1],!bh(e,ur,dr,fr,Ao))?!1:(Co.crossVectors(cs,hs),e=[Co.x,Co.y,Co.z],bh(e,ur,dr,fr,Ao))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ki=[new O,new O,new O,new O,new O,new O,new O,new O],_i=new O,To=new kn,ur=new O,dr=new O,fr=new O,cs=new O,hs=new O,Is=new O,ia=new O,Ao=new O,Co=new O,Ps=new O;function bh(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ps.fromArray(i,r);let o=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),l=t.dot(Ps),c=e.dot(Ps),h=n.dot(Ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var un=new O,Ro=new Dt,tg=0,We=class extends Ni{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mu,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ro.fromBufferAttribute(this,e),Ro.applyMatrix3(t),this.setXY(e,Ro.x,Ro.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix3(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Sa=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ma=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var rn=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},eg=new kn,sa=new O,wh=new O,Zn=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):eg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sa.subVectors(t,this.center);let e=sa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(sa,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sa.copy(t.center).add(wh)),this.expandByPoint(sa.copy(t.center).sub(wh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ng=0,di=new De,Eh=new vn,pr=new O,ei=new kn,ra=new kn,_n=new O,an=class i extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tm(t)?Ma:Sa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new de().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,e,n){return di.makeTranslation(t,e,n),this.applyMatrix4(di),this}scale(t,e,n){return di.makeScale(t,e,n),this.applyMatrix4(di),this}lookAt(t){return Eh.lookAt(t),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ra.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(ei.min,ra.min),ei.expandByPoint(_n),_n.addVectors(ei.max,ra.max),ei.expandByPoint(_n)):(ei.expandByPoint(ra.min),ei.expandByPoint(ra.max))}ei.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)_n.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_n));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_n.fromBufferAttribute(o,c),l&&(pr.fromBufferAttribute(t,c),_n.add(pr)),s=Math.max(s,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new O,l[v]=new O;let c=new O,h=new O,p=new O,u=new Dt,m=new Dt,_=new Dt,w=new O,f=new O;function d(v,C,z){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,C),p.fromBufferAttribute(n,z),u.fromBufferAttribute(r,v),m.fromBufferAttribute(r,C),_.fromBufferAttribute(r,z),h.sub(c),p.sub(c),m.sub(u),_.sub(u);let G=1/(m.x*_.y-_.x*m.y);isFinite(G)&&(w.copy(h).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(G),f.copy(p).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(G),o[v].add(w),o[C].add(w),o[z].add(w),l[v].add(f),l[C].add(f),l[z].add(f))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let v=0,C=L.length;v<C;++v){let z=L[v],G=z.start,q=z.count;for(let J=G,V=G+q;J<V;J+=3)d(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let D=new O,b=new O,M=new O,R=new O;function F(v){M.fromBufferAttribute(s,v),R.copy(M);let C=o[v];D.copy(C),D.sub(M.multiplyScalar(M.dot(C))).normalize(),b.crossVectors(R,C);let G=b.dot(l[v])<0?-1:1;a.setXYZW(v,D.x,D.y,D.z,G)}for(let v=0,C=L.length;v<C;++v){let z=L[v],G=z.start,q=z.count;for(let J=G,V=G+q;J<V;J+=3)F(t.getX(J+0)),F(t.getX(J+1)),F(t.getX(J+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,p=new O;if(t)for(let u=0,m=t.count;u<m;u+=3){let _=t.getX(u+0),w=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,w),a.fromBufferAttribute(e,f),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_n.fromBufferAttribute(t,e),_n.normalize(),t.setXYZ(e,_n.x,_n.y,_n.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),m=0,_=0;for(let w=0,f=l.length;w<f;w++){o.isInterleavedBufferAttribute?m=l[w]*o.data.stride+o.offset:m=l[w]*h;for(let d=0;d<h;d++)u[_++]=c[m++]}return new We(u,h,p)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let m=c[p];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let u=0,m=p.length;u<m;u++)h.push(p[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ul=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=mu,this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},zn=new O,Mi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.applyMatrix4(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.applyNormalMatrix(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.transformDirection(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){xa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){xa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Th=new O,ig=new O,sg=new de,xi=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Th.subVectors(n,e).cross(ig.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Th),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||sg.getNormalMatrix(t),s=this.coplanarPoint(Th).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},rg=0,Fi=class extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=Fr,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qh,this.blendDst=tu,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ko,this.stencilZFail=Ko,this.stencilZPass=Ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new le().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new xi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Dt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ji=new O,Ah=new O,Io=new O,Po=new O,Fs=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,e),ji.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ah.copy(t).add(e).multiplyScalar(.5),Io.copy(e).sub(t).normalize(),Po.copy(this.origin).sub(Ah);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Io),o=Po.dot(this.direction),l=-Po.dot(Io),c=Po.lengthSq(),h=Math.abs(1-a*a),p,u,m,_;if(h>0)if(p=a*l-o,u=a*o-l,_=r*h,p>=0)if(u>=-_)if(u<=_){let w=1/h;p*=w,u*=w,m=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Ah).addScaledVector(Io,u),m}intersectSphere(t,e){if(t.radius<0)return null;ji.subVectors(t.center,this.origin);let n=ji.dot(this.direction),s=ji.dot(ji)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-a.x,u=t.y-a.y,m=t.z-a.z,_=e.x-a.x,w=e.y-a.y,f=e.z-a.z,d=n.x-a.x,L=n.y-a.y,D=n.z-a.z,b=Math.abs(l),M=Math.abs(c),R=Math.abs(h),F,v,C,z,G,q,J,V,K,st,rt,vt;if(b>=M&&b>=R?(C=l,q=p,K=_,vt=d,l>=0?(F=c,v=h,z=u,G=m,J=w,V=f,st=L,rt=D):(F=h,v=c,z=m,G=u,J=f,V=w,st=D,rt=L)):M>=R?(C=c,q=u,K=w,vt=L,c>=0?(F=h,v=l,z=m,G=p,J=f,V=_,st=D,rt=d):(F=l,v=h,z=p,G=m,J=_,V=f,st=d,rt=D)):(C=h,q=m,K=f,vt=D,h>=0?(F=l,v=c,z=p,G=u,J=_,V=w,st=d,rt=L):(F=c,v=l,z=u,G=p,J=w,V=_,st=L,rt=d)),C===0)return null;let at=F/C,ht=v/C,pt=1/C,Kt=z-at*q,Ht=G-ht*q,Pe=J-at*K,Se=V-ht*K,Te=st-at*vt,nt=rt-ht*vt,ut=Te*Se-nt*Pe,Nt=Kt*nt-Ht*Te,ie=Pe*Ht-Se*Kt;if(s){if(ut<0||Nt<0||ie<0)return null}else if((ut<0||Nt<0||ie<0)&&(ut>0||Nt>0||ie>0))return null;let Rt=ut+Nt+ie;if(Rt===0)return null;let Wt=pt*(ut*q+Nt*K+ie*vt);return(Rt>0?Wt<0:Wt>0)?null:this.at(Wt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Os=class extends Fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},zd=new De,Ls=new Fs,Lo=new Zn,kd=new O,Do=new O,No=new O,Uo=new O,Ch=new O,Fo=new O,Vd=new O,Oo=new O,yn=class extends vn{constructor(t=new an,e=new Os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(Ch.fromBufferAttribute(p,t),a?Fo.addScaledVector(Ch,h):Fo.addScaledVector(Ch.sub(e),h))}e.add(Fo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(r),Ls.copy(t.ray).recast(t.near),!(Lo.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Lo,kd)===null||Ls.origin.distanceToSquared(kd)>(t.far-t.near)**2))&&(zd.copy(r).invert(),Ls.copy(t.ray).applyMatrix4(zd),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ls)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,w=u.length;_<w;_++){let f=u[_],d=a[f.materialIndex],L=Math.max(f.start,m.start),D=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let b=L,M=D;b<M;b+=3){let R=o.getX(b),F=o.getX(b+1),v=o.getX(b+2);s=Bo(this,d,t,n,c,h,p,R,F,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),w=Math.min(o.count,m.start+m.count);for(let f=_,d=w;f<d;f+=3){let L=o.getX(f),D=o.getX(f+1),b=o.getX(f+2);s=Bo(this,a,t,n,c,h,p,L,D,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,w=u.length;_<w;_++){let f=u[_],d=a[f.materialIndex],L=Math.max(f.start,m.start),D=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let b=L,M=D;b<M;b+=3){let R=b,F=b+1,v=b+2;s=Bo(this,d,t,n,c,h,p,R,F,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),w=Math.min(l.count,m.start+m.count);for(let f=_,d=w;f<d;f+=3){let L=f,D=f+1,b=f+2;s=Bo(this,a,t,n,c,h,p,L,D,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function ag(i,t,e,n,s,r,a,o){let l;if(t.side===Vn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===xs,o),l===null)return null;Oo.copy(o),Oo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Oo);return c<e.near||c>e.far?null:{distance:c,point:Oo.clone(),object:i}}function Bo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Do),i.getVertexPosition(l,No),i.getVertexPosition(c,Uo);let h=ag(i,t,e,n,Do,No,Uo,Vd);if(h){let p=new O;ds.getBarycoord(Vd,Do,No,Uo,p),s&&(h.uv=ds.getInterpolatedAttribute(s,o,l,c,p,new Dt)),r&&(h.uv1=ds.getInterpolatedAttribute(r,o,l,c,p,new Dt)),a&&(h.normal=ds.getInterpolatedAttribute(a,o,l,c,p,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new O,materialIndex:0};ds.getNormal(Do,No,Uo,u.normal),h.face=u,h.barycoord=p}return h}var ba=class extends qn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=xn,h=xn,p,u){super(null,a,o,l,c,h,s,r,p,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wa=class extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},mr=new De,Hd=new De,zo=[],Gd=new kn,og=new De,aa=new yn,oa=new Zn,Ea=class extends yn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,og)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mr),Gd.copy(t.boundingBox).applyMatrix4(mr),this.boundingBox.union(Gd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mr),oa.copy(t.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(oa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(n),t.ray.intersectsSphere(oa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,mr),Hd.multiplyMatrices(n,mr),aa.matrixWorld=Hd,aa.raycast(t,zo);for(let a=0,o=zo.length;a<o;a++){let l=zo[a];l.instanceId=r,l.object=this,e.push(l)}zo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new wa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ba(new Float32Array(s*this.count),s,this.count,Xl,fi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ds=new Zn,lg=new Dt(.5,.5),ko=new O,Rr=class{constructor(t=new xi,e=new xi,n=new xi,s=new xi,r=new xi,a=new xi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yi,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],u=r[6],m=r[7],_=r[8],w=r[9],f=r[10],d=r[11],L=r[12],D=r[13],b=r[14],M=r[15];if(s[0].setComponents(c-a,m-h,d-_,M-L).normalize(),s[1].setComponents(c+a,m+h,d+_,M+L).normalize(),s[2].setComponents(c+o,m+p,d+w,M+D).normalize(),s[3].setComponents(c-o,m-p,d-w,M-D).normalize(),n)s[4].setComponents(l,u,f,b).normalize(),s[5].setComponents(c-l,m-u,d-f,M-b).normalize();else if(s[4].setComponents(c-l,m-u,d-f,M-b).normalize(),e===yi)s[5].setComponents(c+l,m+u,d+f,M+b).normalize();else if(e===br)s[5].setComponents(l,u,f,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);let e=lg.distanceTo(t.center);return Ds.radius=.7071067811865476+e,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ko.x=s.normal.x>0?t.max.x:t.min.x,ko.y=s.normal.y>0?t.max.y:t.min.y,ko.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Bs=class extends Fi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},dl=new O,fl=new O,Wd=new De,la=new Fs,Vo=new Zn,Rh=new O,$d=new O,pl=class extends vn{constructor(t=new an,e=new Bs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)dl.fromBufferAttribute(e,s-1),fl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=dl.distanceTo(fl);t.setAttribute("lineDistance",new rn(n,1))}else oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(s),Vo.radius+=r,t.ray.intersectsSphere(Vo)===!1)return;Wd.copy(s).invert(),la.copy(t.ray).applyMatrix4(Wd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let w=m,f=_-1;w<f;w+=c){let d=h.getX(w),L=h.getX(w+1),D=Ho(this,t,la,l,d,L,w);D&&e.push(D)}if(this.isLineLoop){let w=h.getX(_-1),f=h.getX(m),d=Ho(this,t,la,l,w,f,_-1);d&&e.push(d)}}else{let m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let w=m,f=_-1;w<f;w+=c){let d=Ho(this,t,la,l,w,w+1,w);d&&e.push(d)}if(this.isLineLoop){let w=Ho(this,t,la,l,_-1,m,_-1);w&&e.push(w)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ho(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(dl.fromBufferAttribute(o,s),fl.fromBufferAttribute(o,r),e.distanceSqToSegment(dl,fl,Rh,$d)>n)return;Rh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Rh);if(!(c<t.near||c>t.far))return{distance:c,point:$d.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ta=class extends pl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},ml=class extends Fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xd=new De,kh=new Fs,Go=new Zn,Wo=new O,zs=class extends vn{constructor(t=new an,e=new ml){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(s),Go.radius+=r,t.ray.intersectsSphere(Go)===!1)return;Xd.copy(s).invert(),kh.copy(t.ray).applyMatrix4(Xd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=u,w=m;_<w;_++){let f=c.getX(_);Wo.fromBufferAttribute(p,f),qd(Wo,f,l,s,t,e,this)}}else{let u=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let _=u,w=m;_<w;_++)Wo.fromBufferAttribute(p,_),qd(Wo,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function qd(i,t,e,n,s,r,a){let o=kh.distanceSqToPoint(i);if(o<e){let l=new O;kh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Aa=class extends qn{constructor(t=[],e=vs,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var fs=class extends qn{constructor(t,e,n=wi,s,r,a,o=xn,l=xn,c,h=Di,p=1){if(h!==Di&&h!==Ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:p};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},gl=class extends fs{constructor(t,e=wi,n=vs,s,r,a=xn,o=xn,l,c=Di){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ca=class extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ir=class i extends an{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],u=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(h,3)),this.setAttribute("uv",new rn(p,2));function _(w,f,d,L,D,b,M,R,F,v,C){let z=b/F,G=M/v,q=b/2,J=M/2,V=R/2,K=F+1,st=v+1,rt=0,vt=0,at=new O;for(let ht=0;ht<st;ht++){let pt=ht*G-J;for(let Kt=0;Kt<K;Kt++){let Ht=Kt*z-q;at[w]=Ht*L,at[f]=pt*D,at[d]=V,c.push(at.x,at.y,at.z),at[w]=0,at[f]=0,at[d]=R>0?1:-1,h.push(at.x,at.y,at.z),p.push(Kt/F),p.push(1-ht/v),rt+=1}}for(let ht=0;ht<v;ht++)for(let pt=0;pt<F;pt++){let Kt=u+pt+K*ht,Ht=u+pt+K*(ht+1),Pe=u+(pt+1)+K*(ht+1),Se=u+(pt+1)+K*ht;l.push(Kt,Ht,Se),l.push(Ht,Pe,Se),vt+=6}o.addGroup(m,vt,C),m+=vt,u+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ra=class i extends an{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],u=[],m=[],_=0,w=[],f=n/2,d=0;L(),a===!1&&(t>0&&D(!0),e>0&&D(!1)),this.setIndex(h),this.setAttribute("position",new rn(p,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(m,2));function L(){let b=new O,M=new O,R=0,F=(e-t)/n;for(let v=0;v<=r;v++){let C=[],z=v/r,G=z*(e-t)+t;for(let q=0;q<=s;q++){let J=q/s,V=J*l+o,K=Math.sin(V),st=Math.cos(V);M.x=G*K,M.y=-z*n+f,M.z=G*st,p.push(M.x,M.y,M.z),b.set(K,F,st).normalize(),u.push(b.x,b.y,b.z),m.push(J,1-z),C.push(_++)}w.push(C)}for(let v=0;v<s;v++)for(let C=0;C<r;C++){let z=w[C][v],G=w[C+1][v],q=w[C+1][v+1],J=w[C][v+1];(t>0||C!==0)&&(h.push(z,G,J),R+=3),(e>0||C!==r-1)&&(h.push(G,q,J),R+=3)}c.addGroup(d,R,0),d+=R}function D(b){let M=_,R=new Dt,F=new O,v=0,C=b===!0?t:e,z=b===!0?1:-1;for(let q=1;q<=s;q++)p.push(0,f*z,0),u.push(0,z,0),m.push(.5,.5),_++;let G=_;for(let q=0;q<=s;q++){let V=q/s*l+o,K=Math.cos(V),st=Math.sin(V);F.x=C*st,F.y=f*z,F.z=C*K,p.push(F.x,F.y,F.z),u.push(0,z,0),R.x=K*.5+.5,R.y=st*.5*z+.5,m.push(R.x,R.y),_++}for(let q=0;q<s;q++){let J=M+q,V=G+q;b===!0?h.push(V,V+1,J):h.push(V+1,V,J),v+=3}c.addGroup(d,v,b===!0?1:2),d+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){oe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,m=(a-h)/u;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Dt:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new O,s=[],r=[],a=[],o=new O,l=new De;for(let m=0;m<=t;m++){let _=m/t;s[m]=this.getTangentAt(_,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(me(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(me(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],m*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Pr=class extends ii{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*h-m*p+this.aX,c=u*p+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},_l=class extends Pr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function vu(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+p)+(l-o)/p;u*=h,m*=h,s(a,o,u,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Yd=new O,Zd=new O,Ih=new vu,Ph=new vu,Lh=new vu,xl=class extends ii{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Zd.subVectors(s[0],s[1]).add(s[0]),c=Zd);let p=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Yd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yd),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(p),m),w=Math.pow(p.distanceToSquared(u),m),f=Math.pow(u.distanceToSquared(h),m);w<1e-4&&(w=1),_<1e-4&&(_=w),f<1e-4&&(f=w),Ih.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,_,w,f),Ph.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,_,w,f),Lh.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,_,w,f)}else this.curveType==="catmullrom"&&(Ih.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),Ph.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),Lh.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return n.set(Ih.calc(l),Ph.calc(l),Lh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Jd(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function cg(i,t){let e=1-i;return e*e*t}function hg(i,t){return 2*(1-i)*i*t}function ug(i,t){return i*i*t}function da(i,t,e,n){return cg(i,t)+hg(i,e)+ug(i,n)}function dg(i,t){let e=1-i;return e*e*e*t}function fg(i,t){let e=1-i;return 3*e*e*i*t}function pg(i,t){return 3*(1-i)*i*i*t}function mg(i,t){return i*i*i*t}function fa(i,t,e,n,s){return dg(i,t)+fg(i,e)+pg(i,n)+mg(i,s)}var Ia=class extends ii{constructor(t=new Dt,e=new Dt,n=new Dt,s=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Dt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fa(t,s.x,r.x,a.x,o.x),fa(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vl=class extends ii{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fa(t,s.x,r.x,a.x,o.x),fa(t,s.y,r.y,a.y,o.y),fa(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pa=class extends ii{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yl=class extends ii{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},La=class extends ii{constructor(t=new Dt,e=new Dt,n=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Dt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(da(t,s.x,r.x,a.x),da(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sl=class extends ii{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(da(t,s.x,r.x,a.x),da(t,s.y,r.y,a.y),da(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Da=class extends ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(Jd(o,l.x,c.x,h.x,p.x),Jd(o,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Dt().fromArray(s))}return this}},Vh=Object.freeze({__proto__:null,ArcCurve:_l,CatmullRomCurve3:xl,CubicBezierCurve:Ia,CubicBezierCurve3:vl,EllipseCurve:Pr,LineCurve:Pa,LineCurve3:yl,QuadraticBezierCurve:La,QuadraticBezierCurve3:Sl,SplineCurve:Da}),Ml=class extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Vh[s.type]().fromJSON(s))}return this}},ks=class extends Ml{constructor(t){super(),this.type="Path",this.currentPoint=new Dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Pa(this.currentPoint.clone(),new Dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new La(this.currentPoint.clone(),new Dt(t,e),new Dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ia(this.currentPoint.clone(),new Dt(t,e),new Dt(n,s),new Dt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Da(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Pr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Lr=class extends ks{constructor(t){super(t),this.uuid=Li(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ks().fromJSON(s))}return this}};function gg(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Zf(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Sg(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,p=l;for(let u=e;u<s;u+=e){let m=i[u],_=i[u+1];m<o&&(o=m),_<l&&(l=_),m>h&&(h=m),_>p&&(p=_)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return Na(r,a,e,o,l,c,0),a}function Zf(i,t,e,n,s){let r;if(s===Lg(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Kd(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Kd(a/n|0,i[a],i[a+1],r);return r&&Dr(r,r.next)&&(Fa(r),r=r.next),r}function Vs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Dr(e,e.next)||tn(e.prev,e,e.next)===0)){if(Fa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Na(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Tg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?xg(i,n,s,r):_g(i)){t.push(l.i,i.i,c.i),Fa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=vg(Vs(i),t),Na(i,t,e,n,s,r,2)):a===2&&yg(i,t,e,n,s,r):Na(Vs(i),t,e,n,s,r,1);break}}}function _g(i){let t=i.prev,e=i,n=i.next;if(tn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),p=Math.min(o,l,c),u=Math.max(s,r,a),m=Math.max(o,l,c),_=n.next;for(;_!==t;){if(_.x>=h&&_.x<=u&&_.y>=p&&_.y<=m&&ca(s,o,r,l,a,c,_.x,_.y)&&tn(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function xg(i,t,e,n){let s=i.prev,r=i,a=i.next;if(tn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,p=r.y,u=a.y,m=Math.min(o,l,c),_=Math.min(h,p,u),w=Math.max(o,l,c),f=Math.max(h,p,u),d=Hh(m,_,t,e,n),L=Hh(w,f,t,e,n),D=i.prevZ,b=i.nextZ;for(;D&&D.z>=d&&b&&b.z<=L;){if(D.x>=m&&D.x<=w&&D.y>=_&&D.y<=f&&D!==s&&D!==a&&ca(o,h,l,p,c,u,D.x,D.y)&&tn(D.prev,D,D.next)>=0||(D=D.prevZ,b.x>=m&&b.x<=w&&b.y>=_&&b.y<=f&&b!==s&&b!==a&&ca(o,h,l,p,c,u,b.x,b.y)&&tn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;D&&D.z>=d;){if(D.x>=m&&D.x<=w&&D.y>=_&&D.y<=f&&D!==s&&D!==a&&ca(o,h,l,p,c,u,D.x,D.y)&&tn(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;b&&b.z<=L;){if(b.x>=m&&b.x<=w&&b.y>=_&&b.y<=f&&b!==s&&b!==a&&ca(o,h,l,p,c,u,b.x,b.y)&&tn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function vg(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Dr(n,s)&&Kf(n,e,e.next,s)&&Ua(n,s)&&Ua(s,n)&&(t.push(n.i,e.i,s.i),Fa(e),Fa(e.next),e=i=s),e=e.next}while(e!==i);return Vs(e)}function yg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Rg(a,o)){let l=jf(a,o);a=Vs(a,a.next),l=Vs(l,l.next),Na(a,t,e,n,s,r,0),Na(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Sg(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Zf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Cg(c))}s.sort(Mg);for(let r=0;r<s.length;r++)e=bg(s[r],e);return e}function Mg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function bg(i,t){let e=wg(i,t);if(!e)return t;let n=jf(e,i);return Vs(n,n.next),Vs(e,e.next)}function wg(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Dr(i,e))return e;do{if(Dr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Jf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);Ua(e,i)&&(p<h||p===h&&(e.x>a.x||e.x===a.x&&Eg(a,e)))&&(a=e,h=p)}e=e.next}while(e!==o);return a}function Eg(i,t){return tn(i.prev,i,t.prev)<0&&tn(t.next,i,i.next)<0}function Tg(i,t,e,n){let s=i;do s.z===0&&(s.z=Hh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ag(s)}function Ag(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Hh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Cg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Jf(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ca(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Jf(i,t,e,n,s,r,a,o)}function Rg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ig(i,t)&&(Ua(i,t)&&Ua(t,i)&&Pg(i,t)&&(tn(i.prev,i,t.prev)||tn(i,t.prev,t))||Dr(i,t)&&tn(i.prev,i,i.next)>0&&tn(t.prev,t,t.next)>0)}function tn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Dr(i,t){return i.x===t.x&&i.y===t.y}function Kf(i,t,e,n){let s=Xo(tn(i,t,e)),r=Xo(tn(i,t,n)),a=Xo(tn(e,n,i)),o=Xo(tn(e,n,t));return!!(s!==r&&a!==o||s===0&&$o(i,e,t)||r===0&&$o(i,n,t)||a===0&&$o(e,i,n)||o===0&&$o(e,t,n))}function $o(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Xo(i){return i>0?1:i<0?-1:0}function Ig(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Kf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ua(i,t){return tn(i.prev,i,i.next)<0?tn(i,t,i.next)>=0&&tn(i,i.prev,t)>=0:tn(i,t,i.prev)<0||tn(i,i.next,t)<0}function Pg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function jf(i,t){let e=Gh(i.i,i.x,i.y),n=Gh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Kd(i,t,e,n){let s=Gh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Wh=class{static triangulate(t,e,n=2){return gg(t,e,n)}},Ns=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];jd(t),Qd(n,t);let a=t.length;e.forEach(jd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Qd(n,e[l]);let o=Wh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function jd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Qd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Oa=class i extends an{constructor(t=new Lr([new Dt(.5,.5),new Dt(-.5,.5),new Dt(-.5,-.5),new Dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new rn(s,3)),this.setAttribute("uv",new rn(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:m-.1,w=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,L=e.UVGenerator!==void 0?e.UVGenerator:Dg,D,b=!1,M,R,F,v;if(d){D=d.getSpacedPoints(h),b=!0,u=!1;let U=d.isCatmullRomCurve3?d.closed:!1;M=d.computeFrenetFrames(h,U),R=new O,F=new O,v=new O}u||(f=0,m=0,_=0,w=0);let C=o.extractPoints(c),z=C.shape,G=C.holes;if(!Ns.isClockWise(z)){z=z.reverse();for(let U=0,mt=G.length;U<mt;U++){let bt=G[U];Ns.isClockWise(bt)&&(G[U]=bt.reverse())}}function J(U){let bt=10000000000000001e-36,Mt=U[0];for(let wt=1;wt<=U.length;wt++){let ne=wt%U.length,te=U[ne],kt=te.x-Mt.x,he=te.y-Mt.y,B=kt*kt+he*he,Ne=Math.max(Math.abs(te.x),Math.abs(te.y),Math.abs(Mt.x),Math.abs(Mt.y)),_e=bt*Ne*Ne;if(B<=_e){U.splice(ne,1),wt--;continue}Mt=te}}J(z),G.forEach(J);let V=G.length,K=z;for(let U=0;U<V;U++){let mt=G[U];z=z.concat(mt)}function st(U,mt,bt){return mt||ce("ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(mt,bt)}let rt=z.length;function vt(U,mt,bt){let Mt,wt,ne,te=U.x-mt.x,kt=U.y-mt.y,he=bt.x-U.x,B=bt.y-U.y,Ne=te*te+kt*kt,_e=te*B-kt*he;if(Math.abs(_e)>Number.EPSILON){let A=Math.sqrt(Ne),x=Math.sqrt(he*he+B*B),X=mt.x-kt/A,et=mt.y+te/A,lt=bt.x-B/x,Et=bt.y+he/x,At=((lt-X)*B-(Et-et)*he)/(te*B-kt*he);Mt=X+te*At-U.x,wt=et+kt*At-U.y;let ct=Mt*Mt+wt*wt;if(ct<=2)return new Dt(Mt,wt);ne=Math.sqrt(ct/2)}else{let A=!1;te>Number.EPSILON?he>Number.EPSILON&&(A=!0):te<-Number.EPSILON?he<-Number.EPSILON&&(A=!0):Math.sign(kt)===Math.sign(B)&&(A=!0),A?(Mt=-kt,wt=te,ne=Math.sqrt(Ne)):(Mt=te,wt=kt,ne=Math.sqrt(Ne/2))}return new Dt(Mt/ne,wt/ne)}let at=[];for(let U=0,mt=K.length,bt=mt-1,Mt=U+1;U<mt;U++,bt++,Mt++)bt===mt&&(bt=0),Mt===mt&&(Mt=0),at[U]=vt(K[U],K[bt],K[Mt]);let ht=[],pt,Kt=at.concat();for(let U=0,mt=V;U<mt;U++){let bt=G[U];pt=[];for(let Mt=0,wt=bt.length,ne=wt-1,te=Mt+1;Mt<wt;Mt++,ne++,te++)ne===wt&&(ne=0),te===wt&&(te=0),pt[Mt]=vt(bt[Mt],bt[ne],bt[te]);ht.push(pt),Kt=Kt.concat(pt)}let Ht;if(f===0)Ht=Ns.triangulateShape(K,G);else{let U=[],mt=[];for(let bt=0;bt<f;bt++){let Mt=bt/f,wt=m*Math.cos(Mt*Math.PI/2),ne=_*Math.sin(Mt*Math.PI/2)+w;for(let te=0,kt=K.length;te<kt;te++){let he=st(K[te],at[te],ne);Nt(he.x,he.y,-wt),Mt===0&&U.push(he)}for(let te=0,kt=V;te<kt;te++){let he=G[te];pt=ht[te];let B=[];for(let Ne=0,_e=he.length;Ne<_e;Ne++){let A=st(he[Ne],pt[Ne],ne);Nt(A.x,A.y,-wt),Mt===0&&B.push(A)}Mt===0&&mt.push(B)}}Ht=Ns.triangulateShape(U,mt)}let Pe=Ht.length,Se=_+w;for(let U=0;U<rt;U++){let mt=u?st(z[U],Kt[U],Se):z[U];b?(F.copy(M.normals[0]).multiplyScalar(mt.x),R.copy(M.binormals[0]).multiplyScalar(mt.y),v.copy(D[0]).add(F).add(R),Nt(v.x,v.y,v.z)):Nt(mt.x,mt.y,0)}for(let U=1;U<=h;U++)for(let mt=0;mt<rt;mt++){let bt=u?st(z[mt],Kt[mt],Se):z[mt];b?(F.copy(M.normals[U]).multiplyScalar(bt.x),R.copy(M.binormals[U]).multiplyScalar(bt.y),v.copy(D[U]).add(F).add(R),Nt(v.x,v.y,v.z)):Nt(bt.x,bt.y,p/h*U)}for(let U=f-1;U>=0;U--){let mt=U/f,bt=m*Math.cos(mt*Math.PI/2),Mt=_*Math.sin(mt*Math.PI/2)+w;for(let wt=0,ne=K.length;wt<ne;wt++){let te=st(K[wt],at[wt],Mt);Nt(te.x,te.y,p+bt)}for(let wt=0,ne=G.length;wt<ne;wt++){let te=G[wt];pt=ht[wt];for(let kt=0,he=te.length;kt<he;kt++){let B=st(te[kt],pt[kt],Mt);b?Nt(B.x,B.y+D[h-1].y,D[h-1].x+bt):Nt(B.x,B.y,p+bt)}}}Te(),nt();function Te(){let U=s.length/3;if(u){let mt=0,bt=rt*mt;for(let Mt=0;Mt<Pe;Mt++){let wt=Ht[Mt];ie(wt[2]+bt,wt[1]+bt,wt[0]+bt)}mt=h+f*2,bt=rt*mt;for(let Mt=0;Mt<Pe;Mt++){let wt=Ht[Mt];ie(wt[0]+bt,wt[1]+bt,wt[2]+bt)}}else{for(let mt=0;mt<Pe;mt++){let bt=Ht[mt];ie(bt[2],bt[1],bt[0])}for(let mt=0;mt<Pe;mt++){let bt=Ht[mt];ie(bt[0]+rt*h,bt[1]+rt*h,bt[2]+rt*h)}}n.addGroup(U,s.length/3-U,0)}function nt(){let U=s.length/3,mt=0;ut(K,mt),mt+=K.length;for(let bt=0,Mt=G.length;bt<Mt;bt++){let wt=G[bt];ut(wt,mt),mt+=wt.length}n.addGroup(U,s.length/3-U,1)}function ut(U,mt){let bt=U.length;for(;--bt>=0;){let Mt=bt,wt=bt-1;wt<0&&(wt=U.length-1);for(let ne=0,te=h+f*2;ne<te;ne++){let kt=rt*ne,he=rt*(ne+1),B=mt+Mt+kt,Ne=mt+wt+kt,_e=mt+wt+he,A=mt+Mt+he;Rt(B,Ne,_e,A)}}}function Nt(U,mt,bt){l.push(U),l.push(mt),l.push(bt)}function ie(U,mt,bt){Wt(U),Wt(mt),Wt(bt);let Mt=s.length/3,wt=L.generateTopUV(n,s,Mt-3,Mt-2,Mt-1);Le(wt[0]),Le(wt[1]),Le(wt[2])}function Rt(U,mt,bt,Mt){Wt(U),Wt(mt),Wt(Mt),Wt(mt),Wt(bt),Wt(Mt);let wt=s.length/3,ne=L.generateSideWallUV(n,s,wt-6,wt-3,wt-2,wt-1);Le(ne[0]),Le(ne[1]),Le(ne[3]),Le(ne[1]),Le(ne[2]),Le(ne[3])}function Wt(U){s.push(l[U*3+0]),s.push(l[U*3+1]),s.push(l[U*3+2])}function Le(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ng(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Vh[s.type]().fromJSON(s)),new i(n,t.options)}},Dg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Dt(r,a),new Dt(o,l),new Dt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],u=t[s*3],m=t[s*3+1],_=t[s*3+2],w=t[r*3],f=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Dt(a,1-l),new Dt(c,1-p),new Dt(u,1-_),new Dt(w,1-d)]:[new Dt(o,1-l),new Dt(h,1-p),new Dt(m,1-_),new Dt(f,1-d)]}};function Ng(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ba=class i extends an{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=t/o,u=e/l,m=[],_=[],w=[],f=[];for(let d=0;d<h;d++){let L=d*u-a;for(let D=0;D<c;D++){let b=D*p-r;_.push(b,-L,0),w.push(0,0,1),f.push(D/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let L=0;L<o;L++){let D=L+c*d,b=L+c*(d+1),M=L+1+c*(d+1),R=L+1+c*d;m.push(D,b,R),m.push(b,M,R)}this.setIndex(m),this.setAttribute("position",new rn(_,3)),this.setAttribute("normal",new rn(w,3)),this.setAttribute("uv",new rn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var za=class extends an{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new O,r=new O;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let p=l[c],u=p.start,m=p.count;for(let _=u,w=u+m;_<w;_+=3)for(let f=0;f<3;f++){let d=o.getX(_+f),L=o.getX(_+(f+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,L),tf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,p=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,p),tf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new rn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function tf(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function $s(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ef(s))s.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ef(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Fn(i){let t={};for(let e=0;e<i.length;e++){let n=$s(i[e]);for(let s in n)t[s]=n[s]}return t}function ef(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ug(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}var io={clone:$s,merge:Fn},Fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends Fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fg,this.fragmentShader=Og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$s(t.uniforms),this.uniformsGroups=Ug(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new le().setHex(s.value);break;case"v2":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ke().fromArray(s.value);break;case"m3":this.uniforms[n].value=new de().fromArray(s.value);break;case"m4":this.uniforms[n].value=new De().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},bl=class extends Sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ka=class extends Fi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.combine=zl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wl=class extends Fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},El=class extends Fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function gr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Dh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ps=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Tl=class extends ps{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oh,endingEnd:Oh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bh:r=t,o=2*e-n;break;case zh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bh:a=t,l=2*n-e;break;case zh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,m=this._weightNext,_=(n-e)/(s-e),w=_*_,f=w*_,d=-u*f+2*u*w-u*_,L=(1+u)*f+(-1.5-2*u)*w+(-.5+u)*_+1,D=(-1-m)*f+(1.5+m)*w+.5*_,b=m*f-m*w;for(let M=0;M!==o;++M)r[M]=d*a[h+M]+L*a[c+M]+D*a[l+M]+b*a[p+M];return r}},Al=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),p=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*p+a[l+u]*h;return r}},Cl=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Rl=class extends ps{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let _=(n-e)/(s-e),w=1-_;for(let f=0;f!==o;++f)r[f]=a[c+f]*w+a[l+f]*_;return r}let u=o*2,m=t-1;for(let _=0;_!==o;++_){let w=a[c+_],f=a[l+_],d=m*u+_*2,L=p[d],D=p[d+1],b=t*u+_*2,M=h[b],R=h[b+1],F=zg(n,e,L,M,s);r[_]=Qf(F,w,D,R,f)}return r}};function Qf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Bg(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function zg(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Qf(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Bg(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var si=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gr(e,this.TimeBufferType),this.values=gr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:gr(t.times,Array),values:gr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Dh(t.settings)&&(n.settings={inTangents:gr(t.settings.inTangents,Array),outTangents:gr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Rl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case pa:e=this.InterpolantFactoryMethodDiscrete;break;case ol:e=this.InterpolantFactoryMethodLinear;break;case Jo:e=this.InterpolantFactoryMethodSmooth;break;case Fh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return oe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return ol;case this.InterpolantFactoryMethodSmooth:return Jo;case this.InterpolantFactoryMethodBezier:return Fh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Dh(this.settings)&&(nf(this.settings.inTangents,t),nf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ce("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ce("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ce("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ce("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Am(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ce("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,u=p-n,m=p+n;for(let _=0;_!==n;++_){let w=e[p+_];if(w!==e[u+_]||w!==e[m+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[p+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Dh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function nf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=ol;var ms=class extends si{constructor(t,e,n){super(t,e,n)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=pa;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends si{constructor(t,e,n,s){super(t,e,n,s)}};Il.prototype.ValueTypeName="color";var Pl=class extends si{constructor(t,e,n,s){super(t,e,n,s)}};Pl.prototype.ValueTypeName="number";var Ll=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ui.slerpFlat(r,0,a,c-o,a,c,l);return r}},Va=class extends si{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ll(this.times,this.values,this.getValueSize(),t)}};Va.prototype.ValueTypeName="quaternion";Va.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends si{constructor(t,e,n){super(t,e,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=pa;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends si{constructor(t,e,n,s){super(t,e,n,s)}};Dl.prototype.ValueTypeName="vector";var Nl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let m=c[p],_=c[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tp=new Nl,Ul=class{constructor(t){this.manager=t!==void 0?t:tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ul.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ha=class extends vn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ga=class extends Ha{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Nh=new De,sf=new O,rf=new O,Fl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rr,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;sf.setFromMatrixPosition(t.matrixWorld),e.position.copy(sf),rf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Nh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Nh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===br||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Nh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},qo=new O,Yo=new Ui,Ii=new O,Wa=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qo,Yo,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,Yo,Ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(qo,Yo,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,Yo,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},us=new O,af=new Dt,of=new Dt,Un=class extends Wa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(us.x,us.y).multiplyScalar(-t/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-t/us.z)}getViewSize(t,e){return this.getViewBounds(t,af,of),e.subVectors(of,af)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ha*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Nr=class extends Wa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},$h=class extends Fl{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$a=class extends Ha{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new $h}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Xa=class extends an{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var _r=-90,xr=1,Ol=class extends vn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Un(_r,xr,t,e);s.layers=this.layers,this.add(s);let r=new Un(_r,xr,t,e);r.layers=this.layers,this.add(r);let a=new Un(_r,xr,t,e);a.layers=this.layers,this.add(a);let o=new Un(_r,xr,t,e);o.layers=this.layers,this.add(o);let l=new Un(_r,xr,t,e);l.layers=this.layers,this.add(l);let c=new Un(_r,xr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=w,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,u,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Bl=class extends Un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Su="\\[\\]\\.:\\/",kg=new RegExp("["+Su+"]","g"),Mu="[^"+Su+"]",Vg="[^"+Su.replace("\\.","")+"]",Hg=/((?:WC+[\/:])*)/.source.replace("WC",Mu),Gg=/(WCOD+)?/.source.replace("WCOD",Vg),Wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mu),$g=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mu),Xg=new RegExp("^"+Hg+Gg+Wg+$g+"$"),qg=["material","materials","bones","map"],Xh=class{constructor(t,e,n){let s=n||Je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Je=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kg,"")}static parseTrackName(t){let e=Xg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);qg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ce("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Je.Composite=Xh;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var oS=new Float32Array(1);var _s=class extends ul{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var lf=new De,Hs=class{constructor(t,e,n=0,s=1/0){this.ray=new Fs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ar,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return lf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lf),this}intersectObject(t,e=!0,n=[]){return qh(t,this,n,e),n.sort(cf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)qh(t[s],this,n,e);return n.sort(cf),n}};function cf(i,t){return i.distance-t.distance}function qh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)qh(r[a],t,e,!0)}}var Yh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var hf=new O,Zo=new O,vr=new O,yr=new O,Uh=new O,Yg=new O,Zg=new O,qa=class{constructor(t=new O,e=new O){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){hf.subVectors(t,this.start),Zo.subVectors(this.end,this.start);let n=Zo.dot(Zo);if(n===0)return 0;let r=Zo.dot(hf)/n;return e&&(r=me(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Yg,n=Zg){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;vr.subVectors(c,o),yr.subVectors(h,l),Uh.subVectors(o,l);let p=vr.dot(vr),u=yr.dot(yr),m=yr.dot(Uh);if(p<=s&&u<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(p<=s)r=0,a=m/u,a=me(a,0,1);else{let _=vr.dot(Uh);if(u<=s)a=0,r=me(-_/p,0,1);else{let w=vr.dot(yr),f=p*u-w*w;f!==0?r=me((w*m-_*u)/f,0,1):r=0,a=(w*r+m)/u,a<0?(a=0,r=me(-_/p,0,1)):a>1&&(a=1,r=me((w-_)/p,0,1))}}return e.copy(o).addScaledVector(vr,r),n.copy(l).addScaledVector(yr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function bu(i,t,e,n){let s=Jg(n);switch(e){case fu:return i*t;case Xl:return i*t/s.components*s.byteLength;case ql:return i*t/s.components*s.byteLength;case Ms:return i*t*2/s.components*s.byteLength;case Yl:return i*t*2/s.components*s.byteLength;case pu:return i*t*3/s.components*s.byteLength;case pi:return i*t*4/s.components*s.byteLength;case Zl:return i*t*4/s.components*s.byteLength;case Ka:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kl:case Ql:return Math.max(i,16)*Math.max(t,8)/4;case Jl:case jl:return Math.max(i,8)*Math.max(t,8)/2;case tc:case ec:case ic:case sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case nc:case eo:case rc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case lc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case hc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case gc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case _c:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case xc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case vc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case yc:case Sc:case Mc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case bc:case wc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case no:case Ec:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jg(i){switch(i){case Jn:case cu:return{byteLength:1,components:1};case Or:case hu:case Ei:return{byteLength:2,components:1};case Wl:case $l:return{byteLength:2,components:4};case wi:case Gl:case fi:return{byteLength:4,components:1};case uu:case du:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Mp(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function jg(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,h);else{p.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<p.length;m++){let _=p[u],w=p[m];w.start<=_.start+_.count+1?_.count=Math.max(_.count,w.start+w.count-_.start):(++u,p[u]=w)}p.length=u+1;for(let m=0,_=p.length;m<_;m++){let w=p[m];i.bufferSubData(c,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t0=`#ifdef USE_ALPHAHASH
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
#endif`,e0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r0=`#ifdef USE_AOMAP
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
#endif`,a0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o0=`#ifdef USE_BATCHING
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
#endif`,l0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d0=`#ifdef USE_IRIDESCENCE
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
#endif`,f0=`#ifdef USE_BUMPMAP
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
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,v0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,M0=`#define PI 3.141592653589793
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
} // validated`,b0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,w0=`vec3 transformedNormal = objectNormal;
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
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P0=`#ifdef USE_ENVMAP
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
#endif`,L0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k0=`#ifdef USE_GRADIENTMAP
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
}`,V0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$0=`#ifdef USE_ENVMAP
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
#endif`,X0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J0=`PhysicalMaterial material;
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
#endif`,K0=`uniform sampler2D dfgLUT;
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
}`,j0=`
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
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
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
#endif`,t_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,n_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c_=`#if defined( USE_POINTS_UV )
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
#endif`,h_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m_=`#ifdef USE_MORPHTARGETS
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
#endif`,g_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,__=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,M_=`#ifdef USE_NORMALMAP
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
#endif`,b_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,R_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B_=`float getShadowMask() {
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
}`,z_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k_=`#ifdef USE_SKINNING
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
#endif`,V_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H_=`#ifdef USE_SKINNING
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
#endif`,G_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q_=`#ifdef USE_TRANSMISSION
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
#endif`,Y_=`#ifdef USE_TRANSMISSION
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
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Q_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tx=`uniform sampler2D t2D;
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`#include <common>
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
}`,ax=`#if DEPTH_PACKING == 3200
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
}`,ox=`#define DISTANCE
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
}`,lx=`#define DISTANCE
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`uniform float scale;
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
}`,dx=`uniform vec3 diffuse;
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
}`,fx=`#include <common>
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
}`,px=`uniform vec3 diffuse;
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
}`,mx=`#define LAMBERT
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
}`,gx=`#define LAMBERT
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
}`,_x=`#define MATCAP
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
}`,xx=`#define MATCAP
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
}`,vx=`#define NORMAL
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
}`,yx=`#define NORMAL
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
}`,Sx=`#define PHONG
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
}`,Mx=`#define PHONG
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
}`,bx=`#define STANDARD
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
}`,wx=`#define STANDARD
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
}`,Ex=`#define TOON
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
}`,Tx=`#define TOON
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
}`,Ax=`uniform float size;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Rx=`#include <common>
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
}`,Ix=`uniform vec3 color;
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
}`,Px=`uniform float rotation;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:Qg,alphahash_pars_fragment:t0,alphamap_fragment:e0,alphamap_pars_fragment:n0,alphatest_fragment:i0,alphatest_pars_fragment:s0,aomap_fragment:r0,aomap_pars_fragment:a0,batching_pars_vertex:o0,batching_vertex:l0,begin_vertex:c0,beginnormal_vertex:h0,bsdfs:u0,iridescence_fragment:d0,bumpmap_pars_fragment:f0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:m0,clipping_planes_pars_vertex:g0,clipping_planes_vertex:_0,color_fragment:x0,color_pars_fragment:v0,color_pars_vertex:y0,color_vertex:S0,common:M0,cube_uv_reflection_fragment:b0,defaultnormal_vertex:w0,displacementmap_pars_vertex:E0,displacementmap_vertex:T0,emissivemap_fragment:A0,emissivemap_pars_fragment:C0,colorspace_fragment:R0,colorspace_pars_fragment:I0,envmap_fragment:P0,envmap_common_pars_fragment:L0,envmap_pars_fragment:D0,envmap_pars_vertex:N0,envmap_physical_pars_fragment:$0,envmap_vertex:U0,fog_vertex:F0,fog_pars_vertex:O0,fog_fragment:B0,fog_pars_fragment:z0,gradientmap_pars_fragment:k0,lightmap_pars_fragment:V0,lights_lambert_fragment:H0,lights_lambert_pars_fragment:G0,lights_pars_begin:W0,lights_toon_fragment:X0,lights_toon_pars_fragment:q0,lights_phong_fragment:Y0,lights_phong_pars_fragment:Z0,lights_physical_fragment:J0,lights_physical_pars_fragment:K0,lights_fragment_begin:j0,lights_fragment_maps:Q0,lights_fragment_end:t_,lightprobes_pars_fragment:e_,logdepthbuf_fragment:n_,logdepthbuf_pars_fragment:i_,logdepthbuf_pars_vertex:s_,logdepthbuf_vertex:r_,map_fragment:a_,map_pars_fragment:o_,map_particle_fragment:l_,map_particle_pars_fragment:c_,metalnessmap_fragment:h_,metalnessmap_pars_fragment:u_,morphinstance_vertex:d_,morphcolor_vertex:f_,morphnormal_vertex:p_,morphtarget_pars_vertex:m_,morphtarget_vertex:g_,normal_fragment_begin:__,normal_fragment_maps:x_,normal_pars_fragment:v_,normal_pars_vertex:y_,normal_vertex:S_,normalmap_pars_fragment:M_,clearcoat_normal_fragment_begin:b_,clearcoat_normal_fragment_maps:w_,clearcoat_pars_fragment:E_,iridescence_pars_fragment:T_,opaque_fragment:A_,packing:C_,premultiplied_alpha_fragment:R_,project_vertex:I_,dithering_fragment:P_,dithering_pars_fragment:L_,roughnessmap_fragment:D_,roughnessmap_pars_fragment:N_,shadowmap_pars_fragment:U_,shadowmap_pars_vertex:F_,shadowmap_vertex:O_,shadowmask_pars_fragment:B_,skinbase_vertex:z_,skinning_pars_vertex:k_,skinning_vertex:V_,skinnormal_vertex:H_,specularmap_fragment:G_,specularmap_pars_fragment:W_,tonemapping_fragment:$_,tonemapping_pars_fragment:X_,transmission_fragment:q_,transmission_pars_fragment:Y_,uv_pars_fragment:Z_,uv_pars_vertex:J_,uv_vertex:K_,worldpos_vertex:j_,background_vert:Q_,background_frag:tx,backgroundCube_vert:ex,backgroundCube_frag:nx,cube_vert:ix,cube_frag:sx,depth_vert:rx,depth_frag:ax,distance_vert:ox,distance_frag:lx,equirect_vert:cx,equirect_frag:hx,linedashed_vert:ux,linedashed_frag:dx,meshbasic_vert:fx,meshbasic_frag:px,meshlambert_vert:mx,meshlambert_frag:gx,meshmatcap_vert:_x,meshmatcap_frag:xx,meshnormal_vert:vx,meshnormal_frag:yx,meshphong_vert:Sx,meshphong_frag:Mx,meshphysical_vert:bx,meshphysical_frag:wx,meshtoon_vert:Ex,meshtoon_frag:Tx,points_vert:Ax,points_frag:Cx,shadow_vert:Rx,shadow_frag:Ix,sprite_vert:Px,sprite_frag:Lx},Ut={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Hn={basic:{uniforms:Fn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Fn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Fn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Fn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Fn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Fn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Fn([Ut.points,Ut.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Fn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Fn([Ut.common,Ut.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Fn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Fn([Ut.sprite,Ut.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Fn([Ut.common,Ut.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Fn([Ut.lights,Ut.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Hn.physical={uniforms:Fn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};var Rc={r:0,b:0,g:0},Dx=new De,bp=new de;bp.set(-1,0,0,0,1,0,0,0,1);function Nx(i,t,e,n,s,r){let a=new le(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function m(L){let D=L.isScene===!0?L.background:null;if(D&&D.isTexture){let b=L.backgroundBlurriness>0;D=t.get(D,b)}return D}function _(L){let D=!1,b=m(L);b===null?f(a,o):b&&b.isColor&&(f(b,1),D=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||D)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function w(L,D){let b=m(D);b&&(b.isCubeTexture||b.mapping===Za)?(c===void 0&&(c=new yn(new Ir(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:$s(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(D.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bp),c.material.toneMapped=Re.getTransfer(b.colorSpace)!==ze,(h!==b||p!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,p=b.version,u=i.toneMapping),c.layers.enableAll(),L.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new yn(new Ba(2,2),new Sn({name:"BackgroundMaterial",uniforms:$s(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.toneMapped=Re.getTransfer(b.colorSpace)!==ze,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||p!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,p=b.version,u=i.toneMapping),l.layers.enableAll(),L.unshift(l,l.geometry,l.material,0,0,null))}function f(L,D){L.getRGB(Rc,yu(i)),e.buffers.color.setClear(Rc.r,Rc.g,Rc.b,D,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(L,D=1){a.set(L),o=D,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(L){o=L,f(a,o)},render:_,addToRenderList:w,dispose:d}}function Ux(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(G,q,J,V,K){let st=!1,rt=p(G,V,J,q);r!==rt&&(r=rt,c(r.object)),st=m(G,V,J,K),st&&_(G,V,J,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(st||a)&&(a=!1,b(G,q,J,V),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(G){return i.bindVertexArray(G)}function h(G){return i.deleteVertexArray(G)}function p(G,q,J,V){let K=V.wireframe===!0,st=n[q.id];st===void 0&&(st={},n[q.id]=st);let rt=G.isInstancedMesh===!0?G.id:0,vt=st[rt];vt===void 0&&(vt={},st[rt]=vt);let at=vt[J.id];at===void 0&&(at={},vt[J.id]=at);let ht=at[K];return ht===void 0&&(ht=u(l()),at[K]=ht),ht}function u(G){let q=[],J=[],V=[];for(let K=0;K<e;K++)q[K]=0,J[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:J,attributeDivisors:V,object:G,attributes:{},index:null}}function m(G,q,J,V){let K=r.attributes,st=q.attributes,rt=0,vt=J.getAttributes();for(let at in vt)if(vt[at].location>=0){let pt=K[at],Kt=st[at];if(Kt===void 0&&(at==="instanceMatrix"&&G.instanceMatrix&&(Kt=G.instanceMatrix),at==="instanceColor"&&G.instanceColor&&(Kt=G.instanceColor)),pt===void 0||pt.attribute!==Kt||Kt&&pt.data!==Kt.data)return!0;rt++}return r.attributesNum!==rt||r.index!==V}function _(G,q,J,V){let K={},st=q.attributes,rt=0,vt=J.getAttributes();for(let at in vt)if(vt[at].location>=0){let pt=st[at];pt===void 0&&(at==="instanceMatrix"&&G.instanceMatrix&&(pt=G.instanceMatrix),at==="instanceColor"&&G.instanceColor&&(pt=G.instanceColor));let Kt={};Kt.attribute=pt,pt&&pt.data&&(Kt.data=pt.data),K[at]=Kt,rt++}r.attributes=K,r.attributesNum=rt,r.index=V}function w(){let G=r.newAttributes;for(let q=0,J=G.length;q<J;q++)G[q]=0}function f(G){d(G,0)}function d(G,q){let J=r.newAttributes,V=r.enabledAttributes,K=r.attributeDivisors;J[G]=1,V[G]===0&&(i.enableVertexAttribArray(G),V[G]=1),K[G]!==q&&(i.vertexAttribDivisor(G,q),K[G]=q)}function L(){let G=r.newAttributes,q=r.enabledAttributes;for(let J=0,V=q.length;J<V;J++)q[J]!==G[J]&&(i.disableVertexAttribArray(J),q[J]=0)}function D(G,q,J,V,K,st,rt){rt===!0?i.vertexAttribIPointer(G,q,J,K,st):i.vertexAttribPointer(G,q,J,V,K,st)}function b(G,q,J,V){w();let K=V.attributes,st=J.getAttributes(),rt=q.defaultAttributeValues;for(let vt in st){let at=st[vt];if(at.location>=0){let ht=K[vt];if(ht===void 0&&(vt==="instanceMatrix"&&G.instanceMatrix&&(ht=G.instanceMatrix),vt==="instanceColor"&&G.instanceColor&&(ht=G.instanceColor)),ht!==void 0){let pt=ht.normalized,Kt=ht.itemSize,Ht=t.get(ht);if(Ht===void 0)continue;let Pe=Ht.buffer,Se=Ht.type,Te=Ht.bytesPerElement,nt=Se===i.INT||Se===i.UNSIGNED_INT||ht.gpuType===Gl;if(ht.isInterleavedBufferAttribute){let ut=ht.data,Nt=ut.stride,ie=ht.offset;if(ut.isInstancedInterleavedBuffer){for(let Rt=0;Rt<at.locationSize;Rt++)d(at.location+Rt,ut.meshPerAttribute);G.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Rt=0;Rt<at.locationSize;Rt++)f(at.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let Rt=0;Rt<at.locationSize;Rt++)D(at.location+Rt,Kt/at.locationSize,Se,pt,Nt*Te,(ie+Kt/at.locationSize*Rt)*Te,nt)}else{if(ht.isInstancedBufferAttribute){for(let ut=0;ut<at.locationSize;ut++)d(at.location+ut,ht.meshPerAttribute);G.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ut=0;ut<at.locationSize;ut++)f(at.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let ut=0;ut<at.locationSize;ut++)D(at.location+ut,Kt/at.locationSize,Se,pt,Kt*Te,Kt/at.locationSize*ut*Te,nt)}}else if(rt!==void 0){let pt=rt[vt];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(at.location,pt);break;case 3:i.vertexAttrib3fv(at.location,pt);break;case 4:i.vertexAttrib4fv(at.location,pt);break;default:i.vertexAttrib1fv(at.location,pt)}}}}L()}function M(){C();for(let G in n){let q=n[G];for(let J in q){let V=q[J];for(let K in V){let st=V[K];for(let rt in st)h(st[rt].object),delete st[rt];delete V[K]}}delete n[G]}}function R(G){if(n[G.id]===void 0)return;let q=n[G.id];for(let J in q){let V=q[J];for(let K in V){let st=V[K];for(let rt in st)h(st[rt].object),delete st[rt];delete V[K]}}delete n[G.id]}function F(G){for(let q in n){let J=n[q];for(let V in J){let K=J[V];if(K[G.id]===void 0)continue;let st=K[G.id];for(let rt in st)h(st[rt].object),delete st[rt];delete K[G.id]}}}function v(G){for(let q in n){let J=n[q],V=G.isInstancedMesh===!0?G.id:0,K=J[V];if(K!==void 0){for(let st in K){let rt=K[st];for(let vt in rt)h(rt[vt].object),delete rt[vt];delete K[st]}delete J[V],Object.keys(J).length===0&&delete n[q]}}}function C(){z(),a=!0,r!==s&&(r=s,c(r.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:z,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfObject:v,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:f,disableUnusedAttributes:L}}function Fx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ox(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(F){return!(F!==pi&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(F){let v=F===Ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Jn&&F!==fi&&!v&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:w,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:b,maxSamples:M,samples:R}}function Bx(i){let t=this,e=null,n=0,s=!1,r=!1,a=new xi,o=new de,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let m=p.length!==0||u||n!==0||s;return s=u,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){e=h(p,u,0)},this.setState=function(p,u,m){let _=p.clippingPlanes,w=p.clipIntersection,f=p.clipShadows,d=i.get(p);if(!s||_===null||_.length===0||r&&!f)r?h(null):c();else{let L=r?0:n,D=L*4,b=d.clippingState||null;l.value=b,b=h(_,u,D,m);for(let M=0;M!==D;++M)b[M]=e[M];d.clippingState=b,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,u,m,_){let w=p!==null?p.length:0,f=null;if(w!==0){if(f=l.value,_!==!0||f===null){let d=m+w*4,L=u.matrixWorldInverse;o.getNormalMatrix(L),(f===null||f.length<d)&&(f=new Float32Array(d));for(let D=0,b=m;D!==w;++D,b+=4)a.copy(p[D]).applyMatrix4(L,o),a.normal.toArray(f,b),f[b+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,f}}var kr=4,zx=6,kx=20,Vx=256,so=new Nr,ep=new le,wu=null,Eu=0,Tu=0,Au=!1,Hx=new O,Xs=new O,Pc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Hx}=r;wu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wu,Eu,Tu),this._renderer.xr.enabled=Au,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Ei,format:pi,colorSpace:ma,depthBuffer:!1},s=np(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=np(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gx(r)),this._blurMaterial=$x(r,t,e),this._ggxMaterial=Wx(r,t,e)}return s}_compileMaterial(t){let e=new yn(new an,t);this._renderer.compile(e,so)}_sceneToCubeUV(t,e,n,s,r){let l=new Un(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(ep),p.toneMapping=bi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yn(new Ir,new Os({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));let w=this._backgroundBox,f=w.material,d=!1,L=t.background;L?L.isColor&&(f.color.copy(L),t.background=null,d=!0):(f.color.copy(ep),d=!0);for(let D=0;D<6;D++){let b=D%3;b===0?(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[D],r.y,r.z)):b===1?(l.up.set(0,0,c[D]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[D],r.z)):(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[D]));let M=this._cubeSize;zr(s,b*M,D>2?M:0,M,M),p.setRenderTarget(s),d&&p.render(w,l),p.render(t,l)}p.toneMapping=m,p.autoClear=u,t.background=L}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===vs||t.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ip());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;zr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,so)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,m=p*u,{_lodMax:_}=this,w=this._sizeLods[n],f=3*w*(n>_-kr?n-_+kr:0),d=4*(this._cubeSize-w);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=_-e,zr(r,f,d,3*w,2*w),s.setRenderTarget(r),s.render(o,so),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,zr(t,f,d,3*w,2*w),s.setRenderTarget(t),s.render(o,so)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-kr?s-this._lodMax+kr:0),u=4*(this._cubeSize-h);zr(e,p,u,3*h,2*h),a.setRenderTarget(e),a.render(l,so)}};function Gx(i){let t=[],e=[],n=i,s=i-kr+1+zx;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,m=3,_=new Float32Array(m*u*p),w=new Float32Array(m*u*p);for(let d=0;d<p;d++){let L=d%3*2/3-1,D=d>2?0:-1,b=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];_.set(b,m*u*d);for(let M=0;M<u;M++){let R=h[M*2]*2-1,F=h[M*2+1]*2-1;d===0?Xs.set(1,F,R):d===1?Xs.set(-R,1,-F):d===2?Xs.set(-R,F,1):d===3?Xs.set(-1,F,-R):d===4?Xs.set(-R,-1,F):Xs.set(R,F,-1),Xs.toArray(w,(d*u+M)*m)}}let f=new an;f.setAttribute("position",new We(_,m)),f.setAttribute("outputDirection",new We(w,m)),e.push(new yn(f,null)),n>kr&&n--}return{lodMeshes:e,sizeLods:t}}function np(i,t,e){let n=new Yn(i,t,e);return n.texture.mapping=Za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wx(i,t,e){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function $x(i,t,e){return new Sn({name:"SphericalGaussianBlur",defines:{SAMPLES:kx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function ip(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function sp(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Nc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Lc=class extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Aa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ir(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:Bi});r.uniforms.tEquirect.value=e;let a=new yn(s,r),o=e.minFilter;return e.minFilter===ys&&(e.minFilter=bn),new Ol(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Xx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===kl||m===Vl)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let w=new Lc(_.height);return w.fromEquirectangularTexture(i,u),t.set(u,w),u.addEventListener("dispose",c),o(w.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let m=u.mapping,_=m===kl||m===Vl,w=m===vs||m===Ws;if(_||w){let f=e.get(u),d=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new Pc(i)),f=_?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{let L=u.image;return _&&L&&L.height>0||w&&L&&l(L)?(n===null&&(n=new Pc(i)),f=_?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,m){return m===kl?u.mapping=vs:m===Vl&&(u.mapping=Ws),u}function l(u){let m=0,_=6;for(let w=0;w<_;w++)u[w]!==void 0&&m++;return m===_}function c(u){let m=u.target;m.removeEventListener("dispose",c);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function qx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Us("WebGLRenderer: "+n+" extension not supported."),s}}}function Yx(i,t,e,n){let s={},r=new WeakMap;function a(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(p){let u=p.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER)}function c(p){let u=[],m=p.index,_=p.attributes.position,w=0;if(_===void 0)return;if(m!==null){let L=m.array;w=m.version;for(let D=0,b=L.length;D<b;D+=3){let M=L[D+0],R=L[D+1],F=L[D+2];u.push(M,R,R,F,F,M)}}else{let L=_.array;w=_.version;for(let D=0,b=L.length/3-1;D<b;D+=3){let M=D+0,R=D+1,F=D+2;u.push(M,R,R,F,F,M)}}let f=new(_.count>=65535?Ma:Sa)(u,1);f.version=w;let d=r.get(p);d&&t.remove(d),r.set(p,f)}function h(p){let u=r.get(p);if(u){let m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function Zx(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,u){i.drawElements(n,u,r,p*a),e.update(u,n,1)}function c(p,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,p*a,m),e.update(u,n,m))}function h(p,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,m);let w=0;for(let f=0;f<m;f++)w+=u[f];e.update(w,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Jx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ce("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Kx(i,t,e){let n=new WeakMap,s=new ke;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==p){let C=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],L=o.morphAttributes.color||[],D=0;m===!0&&(D=1),_===!0&&(D=2),w===!0&&(D=3);let b=o.attributes.position.count*D,M=1;b>t.maxTextureSize&&(M=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let R=new Float32Array(b*M*4*p),F=new va(R,b,M,p);F.type=fi,F.needsUpdate=!0;let v=D*4;for(let z=0;z<p;z++){let G=f[z],q=d[z],J=L[z],V=b*M*4*z;for(let K=0;K<G.count;K++){let st=K*v;m===!0&&(s.fromBufferAttribute(G,K),R[V+st+0]=s.x,R[V+st+1]=s.y,R[V+st+2]=s.z,R[V+st+3]=0),_===!0&&(s.fromBufferAttribute(q,K),R[V+st+4]=s.x,R[V+st+5]=s.y,R[V+st+6]=s.z,R[V+st+7]=0),w===!0&&(s.fromBufferAttribute(J,K),R[V+st+8]=s.x,R[V+st+9]=s.y,R[V+st+10]=s.z,R[V+st+11]=J.itemSize===4?s.w:1)}}u={count:p,texture:F,size:new Dt(b,M)},n.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let w=0;w<c.length;w++)m+=c[w];let _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function jx(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,u=t.get(c,p);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Qx={[eu]:"LINEAR_TONE_MAPPING",[nu]:"REINHARD_TONE_MAPPING",[iu]:"CINEON_TONE_MAPPING",[su]:"ACES_FILMIC_TONE_MAPPING",[au]:"AGX_TONE_MAPPING",[ou]:"NEUTRAL_TONE_MAPPING",[ru]:"CUSTOM_TONE_MAPPING"};function tv(i,t,e,n,s,r){let a=new Yn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new an;c.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new rn([0,2,0,0,2,0],2));let h=new bl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new yn(c,h),u=new Nr(-1,1,1,-1,0,1),m=null,_=null,w=!1,f,d=null,L=[],D=!1;this.setSize=function(b,M){a.setSize(b,M),o!==null&&o.setSize(b,M),l!==null&&l.setSize(b,M);for(let R=0;R<L.length;R++){let F=L[R];F.setSize&&F.setSize(b,M)}},this.setEffects=function(b){L=b,D=L.length>0&&L[0].isRenderPass===!0;let M=a.width,R=a.height;L.length>0&&o===null&&(o=new Yn(M,R,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),l=new Yn(M,R,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<L.length;F++){let v=L[F];v.setSize&&v.setSize(M,R)}},this.begin=function(b,M){if(w||b.toneMapping===bi&&L.length===0)return!1;if(d=M,M!==null){let R=M.width,F=M.height;(a.width!==R||a.height!==F)&&this.setSize(R,F)}return D===!1&&b.setRenderTarget(a),f=b.toneMapping,b.toneMapping=bi,!0},this.hasRenderPass=function(){return D},this.end=function(b,M){b.toneMapping=f,w=!0;let R=a,F=o;for(let v=0;v<L.length;v++){let C=L[v];C.enabled!==!1&&(C.render(b,F,R,M),C.needsSwap!==!1&&(R=F,F=F===o?l:o))}if(m!==b.outputColorSpace||_!==b.toneMapping){m=b.outputColorSpace,_=b.toneMapping,h.defines={},Re.getTransfer(m)===ze&&(h.defines.SRGB_TRANSFER="");let v=Qx[_];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=R.texture,b.setRenderTarget(d),b.render(p,u),d=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var wp=new qn,Iu=new fs(1,1),Ep=new va,Tp=new hl,Ap=new Aa,rp=[],ap=[],op=new Float32Array(16),lp=new Float32Array(9),cp=new Float32Array(4);function Hr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=rp[s];if(r===void 0&&(r=new Float32Array(s),rp[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function fn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Uc(i,t){let e=ap[t];e===void 0&&(e=new Int32Array(t),ap[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ev(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function nv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2fv(this.addr,t),pn(e,t)}}function iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fn(e,t))return;i.uniform3fv(this.addr,t),pn(e,t)}}function sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4fv(this.addr,t),pn(e,t)}}function rv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,n))return;cp.set(n),i.uniformMatrix2fv(this.addr,!1,cp),pn(e,n)}}function av(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,n))return;lp.set(n),i.uniformMatrix3fv(this.addr,!1,lp),pn(e,n)}}function ov(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,n))return;op.set(n),i.uniformMatrix4fv(this.addr,!1,op),pn(e,n)}}function lv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2iv(this.addr,t),pn(e,t)}}function hv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;i.uniform3iv(this.addr,t),pn(e,t)}}function uv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4iv(this.addr,t),pn(e,t)}}function dv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2uiv(this.addr,t),pn(e,t)}}function pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;i.uniform3uiv(this.addr,t),pn(e,t)}}function mv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4uiv(this.addr,t),pn(e,t)}}function gv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Iu.compareFunction=e.isReversedDepthBuffer()?Cc:Ac,r=Iu):r=wp,e.setTexture2D(t||r,s)}function _v(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Tp,s)}function xv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ap,s)}function vv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ep,s)}function yv(i){switch(i){case 5126:return ev;case 35664:return nv;case 35665:return iv;case 35666:return sv;case 35674:return rv;case 35675:return av;case 35676:return ov;case 5124:case 35670:return lv;case 35667:case 35671:return cv;case 35668:case 35672:return hv;case 35669:case 35673:return uv;case 5125:return dv;case 36294:return fv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return vv}}function Sv(i,t){i.uniform1fv(this.addr,t)}function Mv(i,t){let e=Hr(t,this.size,2);i.uniform2fv(this.addr,e)}function bv(i,t){let e=Hr(t,this.size,3);i.uniform3fv(this.addr,e)}function wv(i,t){let e=Hr(t,this.size,4);i.uniform4fv(this.addr,e)}function Ev(i,t){let e=Hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Tv(i,t){let e=Hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Av(i,t){let e=Hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Cv(i,t){i.uniform1iv(this.addr,t)}function Rv(i,t){i.uniform2iv(this.addr,t)}function Iv(i,t){i.uniform3iv(this.addr,t)}function Pv(i,t){i.uniform4iv(this.addr,t)}function Lv(i,t){i.uniform1uiv(this.addr,t)}function Dv(i,t){i.uniform2uiv(this.addr,t)}function Nv(i,t){i.uniform3uiv(this.addr,t)}function Uv(i,t){i.uniform4uiv(this.addr,t)}function Fv(i,t,e){let n=this.cache,s=t.length,r=Uc(e,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Iu:a=wp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Ov(i,t,e){let n=this.cache,s=t.length,r=Uc(e,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Tp,r[a])}function Bv(i,t,e){let n=this.cache,s=t.length,r=Uc(e,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ap,r[a])}function zv(i,t,e){let n=this.cache,s=t.length,r=Uc(e,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ep,r[a])}function kv(i){switch(i){case 5126:return Sv;case 35664:return Mv;case 35665:return bv;case 35666:return wv;case 35674:return Ev;case 35675:return Tv;case 35676:return Av;case 5124:case 35670:return Cv;case 35667:case 35671:return Rv;case 35668:case 35672:return Iv;case 35669:case 35673:return Pv;case 5125:return Lv;case 36294:return Dv;case 36295:return Nv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return zv}}var Pu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yv(e.type)}},Lu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kv(e.type)}},Du=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Cu=/(\w+)(\])?(\[|\.)?/g;function hp(i,t){i.seq.push(t),i.map[t.id]=t}function Vv(i,t,e){let n=i.name,s=n.length;for(Cu.lastIndex=0;;){let r=Cu.exec(n),a=Cu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){hp(e,c===void 0?new Pu(o,i,t):new Lu(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Du(o),hp(e,p)),e=p}}}var Vr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Vv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function up(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Hv=37297,Gv=0;function Wv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var dp=new de;function $v(i){Re._getMatrix(dp,Re.workingColorSpace,i);let t=`mat3( ${dp.elements.map(e=>e.toFixed(4))} )`;switch(Re.getTransfer(i)){case ga:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function fp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Wv(i.getShaderSource(t),o)}else return r}function Xv(i,t){let e=$v(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var qv={[eu]:"Linear",[nu]:"Reinhard",[iu]:"Cineon",[su]:"ACESFilmic",[au]:"AgX",[ou]:"Neutral",[ru]:"Custom"};function Yv(i,t){let e=qv[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ic=new O;function Zv(){Re.getLuminanceCoefficients(Ic);let i=Ic.x.toFixed(4),t=Ic.y.toFixed(4),e=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function Kv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ao(i){return i!==""}function pp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nu(i){return i.replace(Qv,ey)}var ty=new Map;function ey(i,t){let e=ye[t];if(e===void 0){let n=ty.get(t);if(n!==void 0)e=ye[n],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Nu(e)}var ny=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gp(i){return i.replace(ny,iy)}function iy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _p(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var sy={[Ya]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"};function ry(i){return sy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ay={[vs]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[Za]:"ENVMAP_TYPE_CUBE_UV"};function oy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ay[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ly={[Ws]:"ENVMAP_MODE_REFRACTION"};function cy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ly[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hy={[zl]:"ENVMAP_BLENDING_MULTIPLY",[Lf]:"ENVMAP_BLENDING_MIX",[Df]:"ENVMAP_BLENDING_ADD"};function uy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":hy[i.combine]||"ENVMAP_BLENDING_NONE"}function dy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function fy(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ry(e),c=oy(e),h=cy(e),p=uy(e),u=dy(e),m=Jv(e),_=Kv(r),w=s.createProgram(),f,d,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ao).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ao).join(`
`),d.length>0&&(d+=`
`)):(f=[_p(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),d=[_p(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?ye.tonemapping_pars_fragment:"",e.toneMapping!==bi?Yv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,Xv("linearToOutputTexel",e.outputColorSpace),Zv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ao).join(`
`)),a=Nu(a),a=pp(a,e),a=mp(a,e),o=Nu(o),o=pp(o,e),o=mp(o,e),a=gp(a),o=gp(o),e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let D=L+f+a,b=L+d+o,M=up(s,s.VERTEX_SHADER,D),R=up(s,s.FRAGMENT_SHADER,b);s.attachShader(w,M),s.attachShader(w,R),e.index0AttributeName!==void 0?s.bindAttribLocation(w,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function F(G){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(w)||"",J=s.getShaderInfoLog(M)||"",V=s.getShaderInfoLog(R)||"",K=q.trim(),st=J.trim(),rt=V.trim(),vt=!0,at=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(vt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,w,M,R);else{let ht=fp(s,M,"vertex"),pt=fp(s,R,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+K+`
`+ht+`
`+pt)}else K!==""?oe("WebGLProgram: Program Info Log:",K):(st===""||rt==="")&&(at=!1);at&&(G.diagnostics={runnable:vt,programLog:K,vertexShader:{log:st,prefix:f},fragmentShader:{log:rt,prefix:d}})}s.deleteShader(M),s.deleteShader(R),v=new Vr(s,w),C=jv(s,w)}let v;this.getUniforms=function(){return v===void 0&&F(this),v};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(w,Hv)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gv++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=M,this.fragmentShader=R,this}var py=0,Uu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Fu(t),e.set(t,n)),n}},Fu=class{constructor(t){this.id=py++,this.code=t,this.usedTimes=0}};function my(i){return i===Ms||i===eo||i===no}function gy(i,t,e,n,s,r){let a=new Ar,o=new Uu,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,u=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function w(v,C,z,G,q,J){let V=G.fog,K=q.geometry,st=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?G.environment:null,rt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,vt=t.get(v.envMap||st,rt),at=vt&&vt.mapping===Za?vt.image.height:null,ht=m[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&oe("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let pt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Kt=pt!==void 0?pt.length:0,Ht=0;K.morphAttributes.position!==void 0&&(Ht=1),K.morphAttributes.normal!==void 0&&(Ht=2),K.morphAttributes.color!==void 0&&(Ht=3);let Pe,Se,Te,nt;if(ht){let Oe=Hn[ht];Pe=Oe.vertexShader,Se=Oe.fragmentShader}else{Pe=v.vertexShader,Se=v.fragmentShader;let Oe=o.getVertexShaderStage(v),be=o.getFragmentShaderStage(v);o.update(v,Oe,be),Te=Oe.id,nt=be.id}let ut=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),ie=q.isInstancedMesh===!0,Rt=q.isBatchedMesh===!0,Wt=!!v.map,Le=!!v.matcap,U=!!vt,mt=!!v.aoMap,bt=!!v.lightMap,Mt=!!v.bumpMap&&v.wireframe===!1,wt=!!v.normalMap,ne=!!v.displacementMap,te=!!v.emissiveMap,kt=!!v.metalnessMap,he=!!v.roughnessMap,B=v.anisotropy>0,Ne=v.clearcoat>0,_e=v.dispersion>0,A=v.retroreflectivity>0,x=v.iridescence>0,X=v.sheen>0,et=v.transmission>0,lt=B&&!!v.anisotropyMap,Et=Ne&&!!v.clearcoatMap,At=Ne&&!!v.clearcoatNormalMap,ct=Ne&&!!v.clearcoatRoughnessMap,dt=x&&!!v.iridescenceMap,Ct=x&&!!v.iridescenceThicknessMap,Yt=X&&!!v.sheenColorMap,Ot=X&&!!v.sheenRoughnessMap,It=!!v.specularMap,jt=!!v.specularColorMap,re=!!v.specularIntensityMap,se=et&&!!v.transmissionMap,k=et&&!!v.thicknessMap,Tt=!!v.gradientMap,ft=!!v.alphaMap,Lt=v.alphaTest>0,zt=!!v.alphaHash,gt=!!v.extensions,Zt=bi;v.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Zt=i.toneMapping);let Jt={shaderID:ht,shaderType:v.type,shaderName:v.name,vertexShader:Pe,fragmentShader:Se,defines:v.defines,customVertexShaderID:Te,customFragmentShaderID:nt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Rt,batchingColor:Rt&&q._colorsTexture!==null,instancing:ie,instancingColor:ie&&q.instanceColor!==null,instancingMorph:ie&&q.morphTexture!==null,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Re.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Wt,matcap:Le,envMap:U,envMapMode:U&&vt.mapping,envMapCubeUVHeight:at,aoMap:mt,lightMap:bt,bumpMap:Mt,normalMap:wt,displacementMap:ne,emissiveMap:te,normalMapObjectSpace:wt&&v.normalMapType===Ff,normalMapTangentSpace:wt&&v.normalMapType===Tc,packedNormalMap:wt&&v.normalMapType===Tc&&my(v.normalMap.format),metalnessMap:kt,roughnessMap:he,anisotropy:B,anisotropyMap:lt,clearcoat:Ne,clearcoatMap:Et,clearcoatNormalMap:At,clearcoatRoughnessMap:ct,dispersion:_e,retroreflection:A,iridescence:x,iridescenceMap:dt,iridescenceThicknessMap:Ct,sheen:X,sheenColorMap:Yt,sheenRoughnessMap:Ot,specularMap:It,specularColorMap:jt,specularIntensityMap:re,transmission:et,transmissionMap:se,thicknessMap:k,gradientMap:Tt,opaque:v.transparent===!1&&v.blending===Fr&&v.alphaToCoverage===!1,alphaMap:ft,alphaTest:Lt,alphaHash:zt,combine:v.combine,mapUv:Wt&&_(v.map.channel),aoMapUv:mt&&_(v.aoMap.channel),lightMapUv:bt&&_(v.lightMap.channel),bumpMapUv:Mt&&_(v.bumpMap.channel),normalMapUv:wt&&_(v.normalMap.channel),displacementMapUv:ne&&_(v.displacementMap.channel),emissiveMapUv:te&&_(v.emissiveMap.channel),metalnessMapUv:kt&&_(v.metalnessMap.channel),roughnessMapUv:he&&_(v.roughnessMap.channel),anisotropyMapUv:lt&&_(v.anisotropyMap.channel),clearcoatMapUv:Et&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:At&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&_(v.sheenRoughnessMap.channel),specularMapUv:It&&_(v.specularMap.channel),specularColorMapUv:jt&&_(v.specularColorMap.channel),specularIntensityMapUv:re&&_(v.specularIntensityMap.channel),transmissionMapUv:se&&_(v.transmissionMap.channel),thicknessMapUv:k&&_(v.thicknessMap.channel),alphaMapUv:ft&&_(v.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(wt||B),vertexNormals:!!K.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!K.attributes.uv&&(Wt||ft),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||K.attributes.normal===void 0&&wt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Nt,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Kt,morphTextureStride:Ht,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Wt&&v.map.isVideoTexture===!0&&Re.getTransfer(v.map.colorSpace)===ze,decodeVideoTextureEmissive:te&&v.emissiveMap.isVideoTexture===!0&&Re.getTransfer(v.emissiveMap.colorSpace)===ze,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Oi,flipSided:v.side===Vn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:gt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&v.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Jt.vertexUv1s=l.has(1),Jt.vertexUv2s=l.has(2),Jt.vertexUv3s=l.has(3),l.clear(),Jt}function f(v){let C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(let z in v.defines)C.push(z),C.push(v.defines[z]);return v.isRawShaderMaterial===!1&&(d(C,v),L(C,v),C.push(i.outputColorSpace)),C.push(v.customProgramCacheKey),C.join()}function d(v,C){v.push(C.precision),v.push(C.outputColorSpace),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.mapUv),v.push(C.alphaMapUv),v.push(C.lightMapUv),v.push(C.aoMapUv),v.push(C.bumpMapUv),v.push(C.normalMapUv),v.push(C.displacementMapUv),v.push(C.emissiveMapUv),v.push(C.metalnessMapUv),v.push(C.roughnessMapUv),v.push(C.anisotropyMapUv),v.push(C.clearcoatMapUv),v.push(C.clearcoatNormalMapUv),v.push(C.clearcoatRoughnessMapUv),v.push(C.iridescenceMapUv),v.push(C.iridescenceThicknessMapUv),v.push(C.sheenColorMapUv),v.push(C.sheenRoughnessMapUv),v.push(C.specularMapUv),v.push(C.specularColorMapUv),v.push(C.specularIntensityMapUv),v.push(C.transmissionMapUv),v.push(C.thicknessMapUv),v.push(C.combine),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numSunLights),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numSunLightShadows),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.numLightProbes),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function L(v,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function D(v){let C=m[v.type],z;if(C){let G=Hn[C];z=io.clone(G.uniforms)}else z=v.uniforms;return z}function b(v,C){let z=h.get(C);return z!==void 0?++z.usedTimes:(z=new fy(i,C,v,s),c.push(z),h.set(C,z)),z}function M(v){if(--v.usedTimes===0){let C=c.indexOf(v);c[C]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function R(v){o.remove(v)}function F(){o.dispose()}return{getParameters:w,getProgramCacheKey:f,getUniforms:D,acquireProgram:b,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:F}}function _y(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function xy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function xp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,_,w,f,d){let L=i[t];return L===void 0?(L={id:u.id,object:u,geometry:m,material:_,materialVariant:a(u),groupOrder:w,renderOrder:u.renderOrder,z:f,group:d},i[t]=L):(L.id=u.id,L.object=u,L.geometry=m,L.material=_,L.materialVariant=a(u),L.groupOrder=w,L.renderOrder=u.renderOrder,L.z=f,L.group=d),t++,L}function l(u,m,_,w,f,d,L){L.reversedDepth===!0&&(f=-f);let D=o(u,m,_,w,f,d);_.transmission>0?n.push(D):_.transparent===!0?s.push(D):e.push(D)}function c(u,m,_,w,f,d){let L=o(u,m,_,w,f,d);_.transmission>0?n.unshift(L):_.transparent===!0?s.unshift(L):e.unshift(L)}function h(u,m){e.length>1&&e.sort(u||xy),n.length>1&&n.sort(m||xp),s.length>1&&s.sort(m||xp)}function p(){for(let u=t,m=i.length;u<m;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function vy(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new vp,i.set(n,[a])):s>=r.length?(a=new vp,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function yy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new le};break;case"SpotLight":e={position:new O,direction:new O,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Sy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var My=0;function by(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wy(i){let t=new yy,e=Sy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new De,a=new De;function o(c){let h=0,p=0,u=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let m=0,_=0,w=0,f=0,d=0,L=0,D=0,b=0,M=0,R=0,F=0,v=0,C=0,z=0;c.sort(by);for(let q=0,J=c.length;q<J;q++){let V=c[q],K=V.color,st=V.intensity,rt=V.distance,vt=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ms?vt=V.shadow.map.texture:vt=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)h+=K.r*st,p+=K.g*st,u+=K.b*st;else if(V.isLightProbe){for(let at=0;at<9;at++)n.probe[at].addScaledVector(V.sh.coefficients[at],st);z++}else if(V.isSunLight){let at=t.get(V);if(at.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let ht=V.shadow,pt=e.get(V);pt.shadowIntensity=ht.intensity,pt.shadowBias=ht.bias,pt.shadowNormalBias=ht.normalBias,pt.shadowRadius=ht.radius,pt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),n.sunShadow[_]=pt,n.sunShadowMap[_]=vt;let Kt=ht.getViewportCount();for(let Ht=0;Ht<Kt;Ht++)n.sunShadowMatrix[w+Ht]=ht.getMatrix(Ht),n.sunShadowCascade[w+Ht]=ht._cascadeData[Ht];w+=Kt,_++}n.sun[m]=at,m++}else if(V.isDirectionalLight){let at=t.get(V);if(at.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let ht=V.shadow,pt=e.get(V);pt.shadowIntensity=ht.intensity,pt.shadowBias=ht.bias,pt.shadowNormalBias=ht.normalBias,pt.shadowRadius=ht.radius,pt.shadowMapSize=ht.mapSize,n.directionalShadow[f]=pt,n.directionalShadowMap[f]=vt,n.directionalShadowMatrix[f]=V.shadow.matrix,M++}n.directional[f]=at,f++}else if(V.isSpotLight){let at=t.get(V);at.position.setFromMatrixPosition(V.matrixWorld),at.color.copy(K).multiplyScalar(st),at.distance=rt,at.coneCos=Math.cos(V.angle),at.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),at.decay=V.decay,n.spot[L]=at;let ht=V.shadow;if(V.map&&(n.spotLightMap[v]=V.map,v++,ht.updateMatrices(V),V.castShadow&&C++),n.spotLightMatrix[L]=ht.matrix,V.castShadow){let pt=e.get(V);pt.shadowIntensity=ht.intensity,pt.shadowBias=ht.bias,pt.shadowNormalBias=ht.normalBias,pt.shadowRadius=ht.radius,pt.shadowMapSize=ht.mapSize,n.spotShadow[L]=pt,n.spotShadowMap[L]=vt,F++}L++}else if(V.isRectAreaLight){let at=t.get(V);at.color.copy(K).multiplyScalar(st),at.halfWidth.set(V.width*.5,0,0),at.halfHeight.set(0,V.height*.5,0),n.rectArea[D]=at,D++}else if(V.isPointLight){let at=t.get(V);if(at.color.copy(V.color).multiplyScalar(V.intensity),at.distance=V.distance,at.decay=V.decay,V.castShadow){let ht=V.shadow,pt=e.get(V);pt.shadowIntensity=ht.intensity,pt.shadowBias=ht.bias,pt.shadowNormalBias=ht.normalBias,pt.shadowRadius=ht.radius,pt.shadowMapSize=ht.mapSize,pt.shadowCameraNear=ht.camera.near,pt.shadowCameraFar=ht.camera.far,n.pointShadow[d]=pt,n.pointShadowMap[d]=vt,n.pointShadowMatrix[d]=V.shadow.matrix,R++}n.point[d]=at,d++}else if(V.isHemisphereLight){let at=t.get(V);at.skyColor.copy(V.color).multiplyScalar(st),at.groundColor.copy(V.groundColor).multiplyScalar(st),n.hemi[b]=at,b++}}D>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;let G=n.hash;(G.sunLength!==m||G.directionalLength!==f||G.pointLength!==d||G.spotLength!==L||G.rectAreaLength!==D||G.hemiLength!==b||G.numSunShadows!==_||G.numDirectionalShadows!==M||G.numPointShadows!==R||G.numSpotShadows!==F||G.numSpotMaps!==v||G.numLightProbes!==z)&&(n.sun.length=m,n.directional.length=f,n.spot.length=L,n.rectArea.length=D,n.point.length=d,n.hemi.length=b,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=w,n.sunShadowCascade.length=w,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=F,n.spotShadowMap.length=F,n.spotLightMatrix.length=F+v-C,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=z,G.sunLength=m,G.directionalLength=f,G.pointLength=d,G.spotLength=L,G.rectAreaLength=D,G.hemiLength=b,G.numSunShadows=_,G.numDirectionalShadows=M,G.numPointShadows=R,G.numSpotShadows=F,G.numSpotMaps=v,G.numLightProbes=z,n.version=My++)}function l(c,h){let p=0,u=0,m=0,_=0,w=0,f=0,d=h.matrixWorldInverse;for(let L=0,D=c.length;L<D;L++){let b=c[L];if(b.isSunLight){let M=n.sun[p];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(d),p++}else if(b.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),u++}else if(b.isSpotLight){let M=n.spot[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),_++}else if(b.isRectAreaLight){let M=n.rectArea[w];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),a.identity(),r.copy(b.matrixWorld),r.premultiply(d),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),w++}else if(b.isPointLight){let M=n.point[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),m++}else if(b.isHemisphereLight){let M=n.hemi[f];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(d),f++}}}return{setup:o,setupView:l,state:n}}function yp(i){let t=new wy(i),e=[],n=[],s=[];function r(u){p.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Ey(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new yp(i),t.set(s,[o])):r>=a.length?(o=new yp(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ay=`uniform sampler2D shadow_pass;
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
}`,Cy=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Ry=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Sp=new De,ro=new O,Ru=new O;function Iy(i,t,e){let n=new Rr,s=new Dt,r=new Dt,a=new ke,o=new wl,l=new El,c={},h=e.maxTextureSize,p={[xs]:Vn,[Vn]:xs,[Oi]:Oi},u=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:Ty,fragmentShader:Ay}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let _=new an;_.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new yn(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let d=this.type;this.render=function(R,F,v){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;this.type===ff&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ya);let C=i.getRenderTarget(),z=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Bi),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let J=d!==this.type;J&&F.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(K=>K.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,K=R.length;V<K;V++){let st=R[V],rt=st.shadow;if(rt===void 0){oe("WebGLShadowMap:",st,"has no shadow.");continue}if(rt.autoUpdate===!1&&rt.needsUpdate===!1)continue;s.copy(rt.mapSize);let vt=rt.getFrameExtents();s.multiply(vt),r.copy(rt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/vt.x),s.x=r.x*vt.x,rt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/vt.y),s.y=r.y*vt.y,rt.mapSize.y=r.y));let at=i.state.buffers.depth.getReversed();if(rt.camera._reversedDepth=at,rt.map===null||J===!0){if(rt.map!==null&&(rt.map.depthTexture!==null&&(rt.map.depthTexture.dispose(),rt.map.depthTexture=null),rt.map.dispose()),this.type===Ur){if(st.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}rt.map=new Yn(s.x,s.y,{format:Ms,type:Ei,minFilter:bn,magFilter:bn,generateMipmaps:!1}),rt.map.texture.name=st.name+".shadowMap",rt.map.depthTexture=new fs(s.x,s.y,fi),rt.map.depthTexture.name=st.name+".shadowMapDepth",rt.map.depthTexture.format=Di,rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=xn,rt.map.depthTexture.magFilter=xn}else st.isPointLight?(rt.map=new Lc(s.x),rt.map.depthTexture=new gl(s.x,wi)):(rt.map=new Yn(s.x,s.y),rt.map.depthTexture=new fs(s.x,s.y,wi)),rt.map.depthTexture.name=st.name+".shadowMap",rt.map.depthTexture.format=Di,this.type===Ya?(rt.map.depthTexture.compareFunction=at?Cc:Ac,rt.map.depthTexture.minFilter=bn,rt.map.depthTexture.magFilter=bn):(rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=xn,rt.map.depthTexture.magFilter=xn);rt.camera.updateProjectionMatrix()}rt.map.isWebGLCubeRenderTarget!==!0&&(rt.map.width!==s.x||rt.map.height!==s.y)&&rt.map.setSize(s.x,s.y);let ht=rt.map.isWebGLCubeRenderTarget?6:rt.getViewportCount();st.isPointLight!==!0&&rt.updateMatrices(st,v);for(let pt=0;pt<ht;pt++){let Kt=rt.getCamera(pt);if(st.isPointLight){let Ht=rt.camera,Pe=rt.matrix,Se=st.distance||Ht.far;Se!==Ht.far&&(Ht.far=Se,Ht.updateProjectionMatrix()),ro.setFromMatrixPosition(st.matrixWorld),Ht.position.copy(ro),Ru.copy(Ht.position),Ru.add(Cy[pt]),Ht.up.copy(Ry[pt]),Ht.lookAt(Ru),Ht.updateMatrixWorld(),Pe.makeTranslation(-ro.x,-ro.y,-ro.z),Sp.multiplyMatrices(Ht.projectionMatrix,Ht.matrixWorldInverse),rt._frustum.setFromProjectionMatrix(Sp,Ht.coordinateSystem,Ht.reversedDepth)}if(rt.map.isWebGLCubeRenderTarget)i.setRenderTarget(rt.map,pt),i.clear();else{pt===0&&(i.setRenderTarget(rt.map),i.clear());let Ht=rt.getViewport(pt);a.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),q.viewport(a)}n=rt.getFrustum(pt),b(F,v,Kt,st,this.type)}rt.isPointLightShadow!==!0&&this.type===Ur&&L(rt,v),rt.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(C,z,G)};function L(R,F){let v=t.update(w);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null?R.mapPass=new Yn(s.x,s.y,{format:Ms,type:Ei}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(F,null,v,u,w,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value.set(R.map.width,R.map.height),m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(F,null,v,m,w,null)}function D(R,F,v,C){let z=null,G=v.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(G!==void 0)z=G;else if(z=v.isPointLight===!0?l:o,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){let q=z.uuid,J=F.uuid,V=c[q];V===void 0&&(V={},c[q]=V);let K=V[J];K===void 0&&(K=z.clone(),V[J]=K,F.addEventListener("dispose",M)),z=K}if(z.visible=F.visible,z.wireframe=F.wireframe,C===Ur?z.side=F.shadowSide!==null?F.shadowSide:F.side:z.side=F.shadowSide!==null?F.shadowSide:p[F.side],z.alphaMap=F.alphaMap,z.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,z.map=F.map,z.clipShadows=F.clipShadows,z.clippingPlanes=F.clippingPlanes,z.clipIntersection=F.clipIntersection,z.displacementMap=F.displacementMap,z.displacementScale=F.displacementScale,z.displacementBias=F.displacementBias,z.wireframeLinewidth=F.wireframeLinewidth,z.linewidth=F.linewidth,v.isPointLight===!0&&z.isMeshDistanceMaterial===!0){let q=i.properties.get(z);q.light=v}return z}function b(R,F,v,C,z){if(R.visible===!1)return;if(R.layers.test(F.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&z===Ur)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,R.matrixWorld);let J=t.update(R),V=R.material;if(Array.isArray(V)){let K=J.groups;for(let st=0,rt=K.length;st<rt;st++){let vt=K[st],at=V[vt.materialIndex];if(at&&at.visible){let ht=D(R,at,C,z);R.onBeforeShadow(i,R,F,v,J,ht,vt),i.renderBufferDirect(v,null,J,ht,R,vt),R.onAfterShadow(i,R,F,v,J,ht,vt)}}}else if(V.visible){let K=D(R,V,C,z);R.onBeforeShadow(i,R,F,v,J,K,null),i.renderBufferDirect(v,null,J,K,R,null),R.onAfterShadow(i,R,F,v,J,K,null)}}let q=R.children;for(let J=0,V=q.length;J<V;J++)b(q[J],F,v,C,z)}function M(R){R.target.removeEventListener("dispose",M);for(let v in c){let C=c[v],z=R.target.uuid;z in C&&(C[z].dispose(),delete C[z])}}}function Py(i,t){function e(){let k=!1,Tt=new ke,ft=null,Lt=new ke(0,0,0,0);return{setMask:function(zt){ft!==zt&&!k&&(i.colorMask(zt,zt,zt,zt),ft=zt)},setLocked:function(zt){k=zt},setClear:function(zt,gt,Zt,Jt,Oe){Oe===!0&&(zt*=Jt,gt*=Jt,Zt*=Jt),Tt.set(zt,gt,Zt,Jt),Lt.equals(Tt)===!1&&(i.clearColor(zt,gt,Zt,Jt),Lt.copy(Tt))},reset:function(){k=!1,ft=null,Lt.set(-1,0,0,0)}}}function n(){let k=!1,Tt=!1,ft=null,Lt=null,zt=null;return{setReversed:function(gt){if(Tt!==gt){let Zt=t.get("EXT_clip_control");gt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Tt=gt;let Jt=zt;zt=null,this.setClear(Jt)}},getReversed:function(){return Tt},setTest:function(gt){gt?ut(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(gt){ft!==gt&&!k&&(i.depthMask(gt),ft=gt)},setFunc:function(gt){if(Tt&&(gt=qf[gt]),Lt!==gt){switch(gt){case jo:i.depthFunc(i.NEVER);break;case Qo:i.depthFunc(i.ALWAYS);break;case tl:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case el:i.depthFunc(i.EQUAL);break;case nl:i.depthFunc(i.GEQUAL);break;case il:i.depthFunc(i.GREATER);break;case sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Lt=gt}},setLocked:function(gt){k=gt},setClear:function(gt){zt!==gt&&(zt=gt,Tt&&(gt=1-gt),i.clearDepth(gt))},reset:function(){k=!1,ft=null,Lt=null,zt=null,Tt=!1}}}function s(){let k=!1,Tt=null,ft=null,Lt=null,zt=null,gt=null,Zt=null,Jt=null,Oe=null;return{setTest:function(be){k||(be?ut(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(be){Tt!==be&&!k&&(i.stencilMask(be),Tt=be)},setFunc:function(be,Cn,jn){(ft!==be||Lt!==Cn||zt!==jn)&&(i.stencilFunc(be,Cn,jn),ft=be,Lt=Cn,zt=jn)},setOp:function(be,Cn,jn){(gt!==be||Zt!==Cn||Jt!==jn)&&(i.stencilOp(be,Cn,jn),gt=be,Zt=Cn,Jt=jn)},setLocked:function(be){k=be},setClear:function(be){Oe!==be&&(i.clearStencil(be),Oe=be)},reset:function(){k=!1,Tt=null,ft=null,Lt=null,zt=null,gt=null,Zt=null,Jt=null,Oe=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},p={},u={},m=new WeakMap,_=[],w=null,f=!1,d=null,L=null,D=null,b=null,M=null,R=null,F=null,v=new le(0,0,0),C=0,z=!1,G=null,q=null,J=null,V=null,K=null,st=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),rt=!1,vt=0,at=i.getParameter(i.VERSION);at.indexOf("WebGL")!==-1?(vt=parseFloat(/^WebGL (\d)/.exec(at)[1]),rt=vt>=1):at.indexOf("OpenGL ES")!==-1&&(vt=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),rt=vt>=2);let ht=null,pt={},Kt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),Pe=new ke().fromArray(Kt),Se=new ke().fromArray(Ht);function Te(k,Tt,ft,Lt){let zt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(k,gt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<ft;Zt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,zt):i.texImage2D(Tt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,zt);return gt}let nt={};nt[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(i.DEPTH_TEST),a.setFunc(Mr),Mt(!1),wt(Zh),ut(i.CULL_FACE),mt(Bi);function ut(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function Nt(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function ie(k,Tt){return u[k]!==Tt?(i.bindFramebuffer(k,Tt),u[k]=Tt,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Tt),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Rt(k,Tt){let ft=_,Lt=!1;if(k){ft=m.get(Tt),ft===void 0&&(ft=[],m.set(Tt,ft));let zt=k.textures;if(ft.length!==zt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Zt=zt.length;gt<Zt;gt++)ft[gt]=i.COLOR_ATTACHMENT0+gt;ft.length=zt.length,Lt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,Lt=!0);Lt&&i.drawBuffers(ft)}function Wt(k){return w!==k?(i.useProgram(k),w=k,!0):!1}let Le={[Gs]:i.FUNC_ADD,[mf]:i.FUNC_SUBTRACT,[gf]:i.FUNC_REVERSE_SUBTRACT};Le[_f]=i.MIN,Le[xf]=i.MAX;let U={[vf]:i.ZERO,[yf]:i.ONE,[Sf]:i.SRC_COLOR,[Qh]:i.SRC_ALPHA,[Af]:i.SRC_ALPHA_SATURATE,[Ef]:i.DST_COLOR,[bf]:i.DST_ALPHA,[Mf]:i.ONE_MINUS_SRC_COLOR,[tu]:i.ONE_MINUS_SRC_ALPHA,[Tf]:i.ONE_MINUS_DST_COLOR,[wf]:i.ONE_MINUS_DST_ALPHA,[Cf]:i.CONSTANT_COLOR,[Rf]:i.ONE_MINUS_CONSTANT_COLOR,[If]:i.CONSTANT_ALPHA,[Pf]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(k,Tt,ft,Lt,zt,gt,Zt,Jt,Oe,be){if(k===Bi){f===!0&&(Nt(i.BLEND),f=!1);return}if(f===!1&&(ut(i.BLEND),f=!0),k!==pf){if(k!==d||be!==z){if((L!==Gs||M!==Gs)&&(i.blendEquation(i.FUNC_ADD),L=Gs,M=Gs),be)switch(k){case Fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jh:i.blendFunc(i.ONE,i.ONE);break;case Kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",k);break}else switch(k){case Fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kh:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jh:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",k);break}D=null,b=null,R=null,F=null,v.set(0,0,0),C=0,d=k,z=be}return}zt=zt||Tt,gt=gt||ft,Zt=Zt||Lt,(Tt!==L||zt!==M)&&(i.blendEquationSeparate(Le[Tt],Le[zt]),L=Tt,M=zt),(ft!==D||Lt!==b||gt!==R||Zt!==F)&&(i.blendFuncSeparate(U[ft],U[Lt],U[gt],U[Zt]),D=ft,b=Lt,R=gt,F=Zt),(Jt.equals(v)===!1||Oe!==C)&&(i.blendColor(Jt.r,Jt.g,Jt.b,Oe),v.copy(Jt),C=Oe),d=k,z=!1}function bt(k,Tt){k.side===Oi?Nt(i.CULL_FACE):ut(i.CULL_FACE);let ft=k.side===Vn;Tt&&(ft=!ft),Mt(ft),k.blending===Fr&&k.transparent===!1?mt(Bi):mt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let Lt=k.stencilWrite;o.setTest(Lt),Lt&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),te(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(k){G!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),G=k)}function wt(k){k!==uf?(ut(i.CULL_FACE),k!==q&&(k===Zh?i.cullFace(i.BACK):k===df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),q=k}function ne(k){k!==J&&(rt&&i.lineWidth(k),J=k)}function te(k,Tt,ft){k?(ut(i.POLYGON_OFFSET_FILL),(V!==Tt||K!==ft)&&(V=Tt,K=ft,a.getReversed()&&(Tt=-Tt),i.polygonOffset(Tt,ft))):Nt(i.POLYGON_OFFSET_FILL)}function kt(k){k?ut(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function he(k){k===void 0&&(k=i.TEXTURE0+st-1),ht!==k&&(i.activeTexture(k),ht=k)}function B(k,Tt,ft){ft===void 0&&(ht===null?ft=i.TEXTURE0+st-1:ft=ht);let Lt=pt[ft];Lt===void 0&&(Lt={type:void 0,texture:void 0},pt[ft]=Lt),(Lt.type!==k||Lt.texture!==Tt)&&(ht!==ft&&(i.activeTexture(ft),ht=ft),i.bindTexture(k,Tt||nt[k]),Lt.type=k,Lt.texture=Tt)}function Ne(){let k=pt[ht];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function _e(){try{i.compressedTexImage2D(...arguments)}catch(k){ce("WebGLState:",k)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(k){ce("WebGLState:",k)}}function x(){try{i.texSubImage2D(...arguments)}catch(k){ce("WebGLState:",k)}}function X(){try{i.texSubImage3D(...arguments)}catch(k){ce("WebGLState:",k)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(k){ce("WebGLState:",k)}}function lt(){try{i.compressedTexSubImage3D(...arguments)}catch(k){ce("WebGLState:",k)}}function Et(){try{i.texStorage2D(...arguments)}catch(k){ce("WebGLState:",k)}}function At(){try{i.texStorage3D(...arguments)}catch(k){ce("WebGLState:",k)}}function ct(){try{i.texImage2D(...arguments)}catch(k){ce("WebGLState:",k)}}function dt(){try{i.texImage3D(...arguments)}catch(k){ce("WebGLState:",k)}}function Ct(k){return p[k]!==void 0?p[k]:i.getParameter(k)}function Yt(k,Tt){p[k]!==Tt&&(i.pixelStorei(k,Tt),p[k]=Tt)}function Ot(k){Pe.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Pe.copy(k))}function It(k){Se.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Se.copy(k))}function jt(k,Tt){let ft=c.get(Tt);ft===void 0&&(ft=new WeakMap,c.set(Tt,ft));let Lt=ft.get(k);Lt===void 0&&(Lt=i.getUniformBlockIndex(Tt,k.name),ft.set(k,Lt))}function re(k,Tt){let Lt=c.get(Tt).get(k);l.get(Tt)!==Lt&&(i.uniformBlockBinding(Tt,Lt,k.__bindingPointIndex),l.set(Tt,Lt))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},ht=null,pt={},u={},m=new WeakMap,_=[],w=null,f=!1,d=null,L=null,D=null,b=null,M=null,R=null,F=null,v=new le(0,0,0),C=0,z=!1,G=null,q=null,J=null,V=null,K=null,Pe.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ut,disable:Nt,bindFramebuffer:ie,drawBuffers:Rt,useProgram:Wt,setBlending:mt,setMaterial:bt,setFlipSided:Mt,setCullFace:wt,setLineWidth:ne,setPolygonOffset:te,setScissorTest:kt,activeTexture:he,bindTexture:B,unbindTexture:Ne,compressedTexImage2D:_e,compressedTexImage3D:A,texImage2D:ct,texImage3D:dt,pixelStorei:Yt,getParameter:Ct,updateUBOMapping:jt,uniformBlockBinding:re,texStorage2D:Et,texStorage3D:At,texSubImage2D:x,texSubImage3D:X,compressedTexSubImage2D:et,compressedTexSubImage3D:lt,scissor:Ot,viewport:It,reset:se}}function Ly(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,h=new WeakMap,p=new Set,u,m=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(A,x){return _?new OffscreenCanvas(A,x):_a("canvas")}function f(A,x,X){let et=1,lt=_e(A);if((lt.width>X||lt.height>X)&&(et=X/Math.max(lt.width,lt.height)),et<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Et=Math.floor(et*lt.width),At=Math.floor(et*lt.height);u===void 0&&(u=w(Et,At));let ct=x?w(Et,At):u;return ct.width=Et,ct.height=At,ct.getContext("2d").drawImage(A,0,0,Et,At),oe("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+Et+"x"+At+")."),ct}else return"data"in A&&oe("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),A;return A}function d(A){return A.generateMipmaps}function L(A){i.generateMipmap(A)}function D(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,x,X,et,lt,Et=!1){if(A!==null){if(i[A]!==void 0)return i[A];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let At;et&&(At=t.get("EXT_texture_norm16"),At||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=x;if(x===i.RED&&(X===i.FLOAT&&(ct=i.R32F),X===i.HALF_FLOAT&&(ct=i.R16F),X===i.UNSIGNED_BYTE&&(ct=i.R8),X===i.UNSIGNED_SHORT&&At&&(ct=At.R16_EXT),X===i.SHORT&&At&&(ct=At.R16_SNORM_EXT)),x===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ct=i.R8UI),X===i.UNSIGNED_SHORT&&(ct=i.R16UI),X===i.UNSIGNED_INT&&(ct=i.R32UI),X===i.BYTE&&(ct=i.R8I),X===i.SHORT&&(ct=i.R16I),X===i.INT&&(ct=i.R32I)),x===i.RG&&(X===i.FLOAT&&(ct=i.RG32F),X===i.HALF_FLOAT&&(ct=i.RG16F),X===i.UNSIGNED_BYTE&&(ct=i.RG8),X===i.UNSIGNED_SHORT&&At&&(ct=At.RG16_EXT),X===i.SHORT&&At&&(ct=At.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ct=i.RG8UI),X===i.UNSIGNED_SHORT&&(ct=i.RG16UI),X===i.UNSIGNED_INT&&(ct=i.RG32UI),X===i.BYTE&&(ct=i.RG8I),X===i.SHORT&&(ct=i.RG16I),X===i.INT&&(ct=i.RG32I)),x===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),X===i.UNSIGNED_INT&&(ct=i.RGB32UI),X===i.BYTE&&(ct=i.RGB8I),X===i.SHORT&&(ct=i.RGB16I),X===i.INT&&(ct=i.RGB32I)),x===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),X===i.UNSIGNED_INT&&(ct=i.RGBA32UI),X===i.BYTE&&(ct=i.RGBA8I),X===i.SHORT&&(ct=i.RGBA16I),X===i.INT&&(ct=i.RGBA32I)),x===i.RGB&&(X===i.UNSIGNED_SHORT&&At&&(ct=At.RGB16_EXT),X===i.SHORT&&At&&(ct=At.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(ct=i.R11F_G11F_B10F)),x===i.RGBA){let dt=Et?ga:Re.getTransfer(lt);X===i.FLOAT&&(ct=i.RGBA32F),X===i.HALF_FLOAT&&(ct=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ct=dt===ze?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&At&&(ct=At.RGBA16_EXT),X===i.SHORT&&At&&(ct=At.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function M(A,x){let X;return A?x===null||x===wi||x===Br?X=i.DEPTH24_STENCIL8:x===fi?X=i.DEPTH32F_STENCIL8:x===Or&&(X=i.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===wi||x===Br?X=i.DEPTH_COMPONENT24:x===fi?X=i.DEPTH_COMPONENT32F:x===Or&&(X=i.DEPTH_COMPONENT16),X}function R(A,x){return d(A)===!0||A.isFramebufferTexture&&A.minFilter!==xn&&A.minFilter!==bn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function F(A){let x=A.target;x.removeEventListener("dispose",F),C(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&p.delete(x)}function v(A){let x=A.target;x.removeEventListener("dispose",v),G(x)}function C(A){let x=n.get(A);if(x.__webglInit===void 0)return;let X=A.source,et=m.get(X);if(et){let lt=et[x.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&z(A),Object.keys(et).length===0&&m.delete(X)}n.remove(A)}function z(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let X=A.source,et=m.get(X);delete et[x.__cacheKey],a.memory.textures--}function G(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(x.__webglFramebuffer[et]))for(let lt=0;lt<x.__webglFramebuffer[et].length;lt++)i.deleteFramebuffer(x.__webglFramebuffer[et][lt]);else i.deleteFramebuffer(x.__webglFramebuffer[et]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[et])}else{if(Array.isArray(x.__webglFramebuffer))for(let et=0;et<x.__webglFramebuffer.length;et++)i.deleteFramebuffer(x.__webglFramebuffer[et]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let et=0;et<x.__webglColorRenderbuffer.length;et++)x.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[et]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let X=A.textures;for(let et=0,lt=X.length;et<lt;et++){let Et=n.get(X[et]);Et.__webglTexture&&(i.deleteTexture(Et.__webglTexture),a.memory.textures--),n.remove(X[et])}n.remove(A)}let q=0;function J(){q=0}function V(){return q}function K(A){q=A}function st(){let A=q;return A>=s.maxTextures&&oe("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,A}function rt(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function vt(A,x){let X=n.get(A);if(A.isVideoTexture&&B(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&X.__version!==A.version){let et=A.image;if(et===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(X,A,x);return}}else A.isExternalTexture&&(X.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+x)}function at(A,x){let X=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){Nt(X,A,x);return}else A.isExternalTexture&&(X.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+x)}function ht(A,x){let X=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){Nt(X,A,x);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+x)}function pt(A,x){let X=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&X.__version!==A.version){ie(X,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+x)}let Kt={[rl]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[al]:i.MIRRORED_REPEAT},Ht={[xn]:i.NEAREST,[Nf]:i.NEAREST_MIPMAP_NEAREST,[Ja]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[Hl]:i.LINEAR_MIPMAP_NEAREST,[ys]:i.LINEAR_MIPMAP_LINEAR},Pe={[Bf]:i.NEVER,[Gf]:i.ALWAYS,[zf]:i.LESS,[Ac]:i.LEQUAL,[kf]:i.EQUAL,[Cc]:i.GEQUAL,[Vf]:i.GREATER,[Hf]:i.NOTEQUAL};function Se(A,x){if(x.type===fi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===bn||x.magFilter===Hl||x.magFilter===Ja||x.magFilter===ys||x.minFilter===bn||x.minFilter===Hl||x.minFilter===Ja||x.minFilter===ys)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Kt[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Kt[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Kt[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ht[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ht[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Pe[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===xn||x.minFilter!==Ja&&x.minFilter!==ys||x.type===fi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Te(A,x){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",F));let et=x.source,lt=m.get(et);lt===void 0&&(lt={},m.set(et,lt));let Et=rt(x);if(Et!==A.__cacheKey){lt[Et]===void 0&&(lt[Et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),lt[Et].usedTimes++;let At=lt[A.__cacheKey];At!==void 0&&(lt[A.__cacheKey].usedTimes--,At.usedTimes===0&&z(x)),A.__cacheKey=Et,A.__webglTexture=lt[Et].texture}return X}function nt(A,x,X){return Math.floor(Math.floor(A/X)/x)}function ut(A,x,X,et){let Et=A.updateRanges;if(Et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,X,et,x.data);else{Et.sort((Yt,Ot)=>Yt.start-Ot.start);let At=0;for(let Yt=1;Yt<Et.length;Yt++){let Ot=Et[At],It=Et[Yt],jt=Ot.start+Ot.count,re=nt(It.start,x.width,4),se=nt(Ot.start,x.width,4);It.start<=jt+1&&re===se&&nt(It.start+It.count-1,x.width,4)===re?Ot.count=Math.max(Ot.count,It.start+It.count-Ot.start):(++At,Et[At]=It)}Et.length=At+1;let ct=e.getParameter(i.UNPACK_ROW_LENGTH),dt=e.getParameter(i.UNPACK_SKIP_PIXELS),Ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Yt=0,Ot=Et.length;Yt<Ot;Yt++){let It=Et[Yt],jt=Math.floor(It.start/4),re=Math.ceil(It.count/4),se=jt%x.width,k=Math.floor(jt/x.width),Tt=re,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,se),e.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,se,k,Tt,ft,X,et,x.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ct),e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function Nt(A,x,X){let et=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(et=i.TEXTURE_3D);let lt=Te(A,x),Et=x.source;e.bindTexture(et,A.__webglTexture,i.TEXTURE0+X);let At=n.get(Et);if(Et.version!==At.__version||lt===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ft=Re.getPrimaries(Re.workingColorSpace),Lt=x.colorSpace===es?null:Re.getPrimaries(x.colorSpace),zt=x.colorSpace===es||ft===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let dt=f(x.image,!1,s.maxTextureSize);dt=Ne(x,dt);let Ct=r.convert(x.format,x.colorSpace),Yt=r.convert(x.type),Ot=b(x.internalFormat,Ct,Yt,x.normalized,x.colorSpace,x.isVideoTexture);Se(et,x);let It,jt=x.mipmaps,re=x.isVideoTexture!==!0,se=At.__version===void 0||lt===!0,k=Et.dataReady,Tt=R(x,dt);if(x.isDepthTexture)Ot=M(x.format===Ss,x.type),se&&(re?e.texStorage2D(i.TEXTURE_2D,1,Ot,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,dt.width,dt.height,0,Ct,Yt,null));else if(x.isDataTexture)if(jt.length>0){re&&se&&e.texStorage2D(i.TEXTURE_2D,Tt,Ot,jt[0].width,jt[0].height);for(let ft=0,Lt=jt.length;ft<Lt;ft++)It=jt[ft],re?k&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,It.width,It.height,Ct,Yt,It.data):e.texImage2D(i.TEXTURE_2D,ft,Ot,It.width,It.height,0,Ct,Yt,It.data);x.generateMipmaps=!1}else re?(se&&e.texStorage2D(i.TEXTURE_2D,Tt,Ot,dt.width,dt.height),k&&ut(x,dt,Ct,Yt)):e.texImage2D(i.TEXTURE_2D,0,Ot,dt.width,dt.height,0,Ct,Yt,dt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){re&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Ot,jt[0].width,jt[0].height,dt.depth);for(let ft=0,Lt=jt.length;ft<Lt;ft++)if(It=jt[ft],x.format!==pi)if(Ct!==null)if(re){if(k)if(x.layerUpdates.size>0){let zt=bu(It.width,It.height,x.format,x.type);for(let gt of x.layerUpdates){let Zt=It.data.subarray(gt*zt/It.data.BYTES_PER_ELEMENT,(gt+1)*zt/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,gt,It.width,It.height,1,Ct,Zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,It.width,It.height,dt.depth,Ct,It.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Ot,It.width,It.height,dt.depth,0,It.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,It.width,It.height,dt.depth,Ct,Yt,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Ot,It.width,It.height,dt.depth,0,Ct,Yt,It.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{re&&se&&e.texStorage2D(i.TEXTURE_2D,Tt,Ot,jt[0].width,jt[0].height);for(let ft=0,Lt=jt.length;ft<Lt;ft++)It=jt[ft],x.format!==pi?Ct!==null?re?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,It.width,It.height,Ct,It.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Ot,It.width,It.height,0,It.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?k&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,It.width,It.height,Ct,Yt,It.data):e.texImage2D(i.TEXTURE_2D,ft,Ot,It.width,It.height,0,Ct,Yt,It.data)}else if(x.isDataArrayTexture)if(re){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Ot,dt.width,dt.height,dt.depth),k)if(x.layerUpdates.size>0){let ft=bu(dt.width,dt.height,x.format,x.type);for(let Lt of x.layerUpdates){let zt=dt.data.subarray(Lt*ft/dt.data.BYTES_PER_ELEMENT,(Lt+1)*ft/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Lt,dt.width,dt.height,1,Ct,Yt,zt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Ct,Yt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,dt.width,dt.height,dt.depth,0,Ct,Yt,dt.data);else if(x.isData3DTexture)re?(se&&e.texStorage3D(i.TEXTURE_3D,Tt,Ot,dt.width,dt.height,dt.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Ct,Yt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,dt.width,dt.height,dt.depth,0,Ct,Yt,dt.data);else if(x.isFramebufferTexture){if(se)if(re)e.texStorage2D(i.TEXTURE_2D,Tt,Ot,dt.width,dt.height);else{let ft=dt.width,Lt=dt.height;for(let zt=0;zt<Tt;zt++)e.texImage2D(i.TEXTURE_2D,zt,Ot,ft,Lt,0,Ct,Yt,null),ft>>=1,Lt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),dt.parentNode!==ft){ft.appendChild(dt),p.add(x),ft.onpaint=Lt=>{let zt=Lt.changedElements;for(let gt of p)zt.includes(gt.image)&&(gt.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,dt);else{let zt=i.RGBA,gt=i.RGBA,Zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,zt,gt,Zt,dt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(jt.length>0){if(re&&se){let ft=_e(jt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Ot,ft.width,ft.height)}for(let ft=0,Lt=jt.length;ft<Lt;ft++)It=jt[ft],re?k&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Ct,Yt,It):e.texImage2D(i.TEXTURE_2D,ft,Ot,Ct,Yt,It);x.generateMipmaps=!1}else if(re){if(se){let ft=_e(dt);e.texStorage2D(i.TEXTURE_2D,Tt,Ot,ft.width,ft.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Yt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Ct,Yt,dt);d(x)&&L(et),At.__version=Et.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ie(A,x,X){if(x.image.length!==6)return;let et=Te(A,x),lt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+X);let Et=n.get(lt);if(lt.version!==Et.__version||et===!0){e.activeTexture(i.TEXTURE0+X);let At=Re.getPrimaries(Re.workingColorSpace),ct=x.colorSpace===es?null:Re.getPrimaries(x.colorSpace),dt=x.colorSpace===es||At===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Ct=x.isCompressedTexture||x.image[0].isCompressedTexture,Yt=x.image[0]&&x.image[0].isDataTexture,Ot=[];for(let gt=0;gt<6;gt++)!Ct&&!Yt?Ot[gt]=f(x.image[gt],!0,s.maxCubemapSize):Ot[gt]=Yt?x.image[gt].image:x.image[gt],Ot[gt]=Ne(x,Ot[gt]);let It=Ot[0],jt=r.convert(x.format,x.colorSpace),re=r.convert(x.type),se=b(x.internalFormat,jt,re,x.normalized,x.colorSpace),k=x.isVideoTexture!==!0,Tt=Et.__version===void 0||et===!0,ft=lt.dataReady,Lt=R(x,It);Se(i.TEXTURE_CUBE_MAP,x);let zt;if(Ct){k&&Tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,se,It.width,It.height);for(let gt=0;gt<6;gt++){zt=Ot[gt].mipmaps;for(let Zt=0;Zt<zt.length;Zt++){let Jt=zt[Zt];x.format!==pi?jt!==null?k?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,0,0,Jt.width,Jt.height,jt,Jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,se,Jt.width,Jt.height,0,Jt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,0,0,Jt.width,Jt.height,jt,re,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,se,Jt.width,Jt.height,0,jt,re,Jt.data)}}}else{if(zt=x.mipmaps,k&&Tt){zt.length>0&&Lt++;let gt=_e(Ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,se,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Yt){k?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ot[gt].width,Ot[gt].height,jt,re,Ot[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,Ot[gt].width,Ot[gt].height,0,jt,re,Ot[gt].data);for(let Zt=0;Zt<zt.length;Zt++){let Oe=zt[Zt].image[gt].image;k?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,0,0,Oe.width,Oe.height,jt,re,Oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,se,Oe.width,Oe.height,0,jt,re,Oe.data)}}else{k?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,jt,re,Ot[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,jt,re,Ot[gt]);for(let Zt=0;Zt<zt.length;Zt++){let Jt=zt[Zt];k?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,0,0,jt,re,Jt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,se,jt,re,Jt.image[gt])}}}d(x)&&L(i.TEXTURE_CUBE_MAP),Et.__version=lt.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Rt(A,x,X,et,lt,Et){let At=r.convert(X.format,X.colorSpace),ct=r.convert(X.type),dt=b(X.internalFormat,At,ct,X.normalized,X.colorSpace),Ct=n.get(x),Yt=n.get(X);if(Yt.__renderTarget=x,!Ct.__hasExternalTextures){let Ot=Math.max(1,x.width>>Et),It=Math.max(1,x.height>>Et);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,Et,dt,Ot,It,x.depth,0,At,ct,null):e.texImage2D(lt,Et,dt,Ot,It,0,At,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,lt,Yt.__webglTexture,0,kt(x)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,lt,Yt.__webglTexture,Et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(A,x,X){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let et=x.depthTexture,lt=et&&et.isDepthTexture?et.type:null,Et=M(x.stencilBuffer,lt),At=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;he(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt(x),Et,x.width,x.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt(x),Et,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Et,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,A)}else{let et=x.textures;for(let lt=0;lt<et.length;lt++){let Et=et[lt],At=r.convert(Et.format,Et.colorSpace),ct=r.convert(Et.type),dt=b(Et.internalFormat,At,ct,Et.normalized,Et.colorSpace);he(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt(x),dt,x.width,x.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt(x),dt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,dt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(A,x,X){let et=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let lt=n.get(x.depthTexture);if(lt.__renderTarget=x,(!lt.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),et){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,x.depthTexture.addEventListener("dispose",F)),lt.__webglTexture===void 0){lt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),Se(i.TEXTURE_CUBE_MAP,x.depthTexture);let Ct=r.convert(x.depthTexture.format),Yt=r.convert(x.depthTexture.type),Ot;x.depthTexture.format===Di?Ot=i.DEPTH_COMPONENT24:x.depthTexture.format===Ss&&(Ot=i.DEPTH24_STENCIL8);for(let It=0;It<6;It++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Ot,x.width,x.height,0,Ct,Yt,null)}}else vt(x.depthTexture,0);let Et=lt.__webglTexture,At=kt(x),ct=et?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,dt=x.depthTexture.format===Ss?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Di)he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,ct,Et,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,dt,ct,Et,0);else if(x.depthTexture.format===Ss)he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,ct,Et,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,dt,ct,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function U(A){let x=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let et=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),et){let lt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,et.removeEventListener("dispose",lt)};et.addEventListener("dispose",lt),x.__depthDisposeCallback=lt}x.__boundDepthTexture=et}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(X)for(let et=0;et<6;et++)Le(x.__webglFramebuffer[et],A,et);else{let et=A.texture.mipmaps;et&&et.length>0?Le(x.__webglFramebuffer[0],A,0):Le(x.__webglFramebuffer,A,0)}else if(X){x.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[et]),x.__webglDepthbuffer[et]===void 0)x.__webglDepthbuffer[et]=i.createRenderbuffer(),Wt(x.__webglDepthbuffer[et],A,!1);else{let lt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=x.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,Et),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,Et)}}else{let et=A.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Wt(x.__webglDepthbuffer,A,!1);else{let lt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Et),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,Et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(A,x,X){let et=n.get(A);x!==void 0&&Rt(et.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&U(A)}function bt(A){let x=A.texture,X=n.get(A),et=n.get(x);A.addEventListener("dispose",v);let lt=A.textures,Et=A.isWebGLCubeRenderTarget===!0,At=lt.length>1;if(At||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=x.version,a.memory.textures++),Et){X.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer[ct]=[];for(let dt=0;dt<x.mipmaps.length;dt++)X.__webglFramebuffer[ct][dt]=i.createFramebuffer()}else X.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)X.__webglFramebuffer[ct]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(At)for(let ct=0,dt=lt.length;ct<dt;ct++){let Ct=n.get(lt[ct]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&he(A)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ct=0;ct<lt.length;ct++){let dt=lt[ct];X.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ct]);let Ct=r.convert(dt.format,dt.colorSpace),Yt=r.convert(dt.type),Ot=b(dt.internalFormat,Ct,Yt,dt.normalized,dt.colorSpace,A.isXRRenderTarget===!0),It=kt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Ot,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,X.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Wt(X.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Et){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Se(i.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)Rt(X.__webglFramebuffer[ct][dt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,dt);else Rt(X.__webglFramebuffer[ct],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);d(x)&&L(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ct=0,dt=lt.length;ct<dt;ct++){let Ct=lt[ct],Yt=n.get(Ct),Ot=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ot=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ot,Yt.__webglTexture),Se(Ot,Ct),Rt(X.__webglFramebuffer,A,Ct,i.COLOR_ATTACHMENT0+ct,Ot,0),d(Ct)&&L(Ot)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ct=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,et.__webglTexture),Se(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)Rt(X.__webglFramebuffer[dt],A,x,i.COLOR_ATTACHMENT0,ct,dt);else Rt(X.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,ct,0);d(x)&&L(ct),e.unbindTexture()}A.depthBuffer&&U(A)}function Mt(A){let x=A.textures;for(let X=0,et=x.length;X<et;X++){let lt=x[X];if(d(lt)){let Et=D(A),At=n.get(lt).__webglTexture;e.bindTexture(Et,At),L(Et),e.unbindTexture()}}}let wt=[],ne=[];function te(A){if(A.samples>0){if(he(A)===!1){let x=A.textures,X=A.width,et=A.height,lt=i.COLOR_BUFFER_BIT,Et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(A),ct=x.length>1;if(ct)for(let Ct=0;Ct<x.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);let dt=A.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Ct=0;Ct<x.length;Ct++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Ct]);let Yt=n.get(x[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,X,et,0,0,X,et,lt,i.NEAREST),l===!0&&(wt.length=0,ne.length=0,wt.push(i.COLOR_ATTACHMENT0+Ct),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(wt.push(Et),ne.push(Et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let Ct=0;Ct<x.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,At.__webglColorRenderbuffer[Ct]);let Yt=n.get(x[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function kt(A){return Math.min(s.maxSamples,A.samples)}function he(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function B(A){let x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Ne(A,x){let X=A.colorSpace,et=A.format,lt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||X!==ma&&X!==es&&(Re.getTransfer(X)===ze?(et!==pi||lt!==Jn)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",X)),x}function _e(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=st,this.resetTextureUnits=J,this.getTextureUnits=V,this.setTextureUnits=K,this.setTexture2D=vt,this.setTexture2DArray=at,this.setTexture3D=ht,this.setTextureCube=pt,this.rebindTextures=mt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Dy(i,t){function e(n,s=es){let r,a=Re.getTransfer(s);if(n===Jn)return i.UNSIGNED_BYTE;if(n===Wl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===du)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cu)return i.BYTE;if(n===hu)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===Gl)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===fi)return i.FLOAT;if(n===Ei)return i.HALF_FLOAT;if(n===fu)return i.ALPHA;if(n===pu)return i.RGB;if(n===pi)return i.RGBA;if(n===Di)return i.DEPTH_COMPONENT;if(n===Ss)return i.DEPTH_STENCIL;if(n===Xl)return i.RED;if(n===ql)return i.RED_INTEGER;if(n===Ms)return i.RG;if(n===Yl)return i.RG_INTEGER;if(n===Zl)return i.RGBA_INTEGER;if(n===Ka||n===ja||n===Qa||n===to)if(a===ze)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jl||n===Kl||n===jl||n===Ql)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tc||n===ec||n===nc||n===ic||n===sc||n===eo||n===rc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tc||n===ec)return a===ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ic)return r.COMPRESSED_R11_EAC;if(n===sc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===eo)return r.COMPRESSED_RG11_EAC;if(n===rc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc||n===vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ac)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_c)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vc)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yc||n===Sc||n===Mc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===yc)return a===ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bc||n===wc||n===no||n===Ec)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===bc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ny=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uy=`
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

}`,Ou=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ca(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Sn({vertexShader:Ny,fragmentShader:Uy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yn(new Ba(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bu=class extends Ni{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,m=null,_=null,w=typeof XRWebGLBinding<"u",f=new Ou,d={},L=e.getContextAttributes(),D=null,b=null,M=[],R=[],F=new Dt,v=null,C=null,z=new Un;z.viewport=new ke;let G=new Un;G.viewport=new ke;let q=[z,G],J=new Bl,V=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ut=M[nt];return ut===void 0&&(ut=new Cr,M[nt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(nt){let ut=M[nt];return ut===void 0&&(ut=new Cr,M[nt]=ut),ut.getGripSpace()},this.getHand=function(nt){let ut=M[nt];return ut===void 0&&(ut=new Cr,M[nt]=ut),ut.getHandSpace()};function st(nt){let ut=R.indexOf(nt.inputSource);if(ut===-1)return;let Nt=M[ut];Nt!==void 0&&(Nt.update(nt.inputSource,nt.frame,c||a),Nt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function rt(){s.removeEventListener("select",st),s.removeEventListener("selectstart",st),s.removeEventListener("selectend",st),s.removeEventListener("squeeze",st),s.removeEventListener("squeezestart",st),s.removeEventListener("squeezeend",st),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",vt);for(let nt=0;nt<M.length;nt++){let ut=R[nt];ut!==null&&(R[nt]=null,M[nt].disconnect(ut))}V=null,K=null,f.reset();for(let nt in d)delete d[nt];if(t.setRenderTarget(D),m=null,u=null,p=null,s=null,b=null,Te.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(F.width,F.height,!1),C!==null){let nt=C.camera;nt.fov=C.fov,nt.zoom=C.zoom,nt.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,n.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&w&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(D=t.getRenderTarget(),s.addEventListener("select",st),s.addEventListener("selectstart",st),s.addEventListener("selectend",st),s.addEventListener("squeeze",st),s.addEventListener("squeezestart",st),s.addEventListener("squeezeend",st),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",vt),L.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(F),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,ie=null,Rt=null;L.depth&&(Rt=L.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Nt=L.stencil?Ss:Di,ie=L.stencil?Br:wi);let Wt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Wt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new Yn(u.textureWidth,u.textureHeight,{format:pi,type:Jn,depthTexture:new fs(u.textureWidth,u.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Nt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Nt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Yn(m.framebufferWidth,m.framebufferHeight,{format:pi,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Te.setContext(s),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function vt(nt){for(let ut=0;ut<nt.removed.length;ut++){let Nt=nt.removed[ut],ie=R.indexOf(Nt);ie>=0&&(R[ie]=null,M[ie].disconnect(Nt))}for(let ut=0;ut<nt.added.length;ut++){let Nt=nt.added[ut],ie=R.indexOf(Nt);if(ie===-1){for(let Wt=0;Wt<M.length;Wt++)if(Wt>=R.length){R.push(Nt),ie=Wt;break}else if(R[Wt]===null){R[Wt]=Nt,ie=Wt;break}if(ie===-1)break}let Rt=M[ie];Rt&&Rt.connect(Nt)}}let at=new O,ht=new O;function pt(nt,ut,Nt){at.setFromMatrixPosition(ut.matrixWorld),ht.setFromMatrixPosition(Nt.matrixWorld);let ie=at.distanceTo(ht),Rt=ut.projectionMatrix.elements,Wt=Nt.projectionMatrix.elements,Le=Rt[14]/(Rt[10]-1),U=Rt[14]/(Rt[10]+1),mt=(Rt[9]+1)/Rt[5],bt=(Rt[9]-1)/Rt[5],Mt=(Rt[8]-1)/Rt[0],wt=(Wt[8]+1)/Wt[0],ne=Le*Mt,te=Le*wt,kt=ie/(-Mt+wt),he=kt*-Mt;if(ut.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(he),nt.translateZ(kt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Rt[10]===-1)nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{let B=Le+kt,Ne=U+kt,_e=ne-he,A=te+(ie-he),x=mt*U/Ne*B,X=bt*U/Ne*B;nt.projectionMatrix.makePerspective(_e,A,x,X,B,Ne),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function Kt(nt,ut){ut===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ut.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let ut=nt.near,Nt=nt.far;f.texture!==null&&(f.depthNear>0&&(ut=f.depthNear),f.depthFar>0&&(Nt=f.depthFar)),J.near=G.near=z.near=ut,J.far=G.far=z.far=Nt,(V!==J.near||K!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),V=J.near,K=J.far),J.layers.mask=nt.layers.mask|6,z.layers.mask=J.layers.mask&-5,G.layers.mask=J.layers.mask&-3;let ie=nt.parent,Rt=J.cameras;Kt(J,ie);for(let Wt=0;Wt<Rt.length;Wt++)Kt(Rt[Wt],ie);Rt.length===2?pt(J,z,G):J.projectionMatrix.copy(z.projectionMatrix),C===null&&nt.isPerspectiveCamera&&(C={camera:nt,fov:nt.fov,zoom:nt.zoom}),Ht(nt,J,ie)};function Ht(nt,ut,Nt){Nt===null?nt.matrix.copy(ut.matrixWorld):(nt.matrix.copy(Nt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ut.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Er*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(nt){l=nt,u!==null&&(u.fixedFoveation=nt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=nt)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(J)},this.getCameraTexture=function(nt){return d[nt]};let Pe=null;function Se(nt,ut){if(h=ut.getViewerPose(c||a),_=ut,h!==null){let Nt=h.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let ie=!1;Nt.length!==J.cameras.length&&(J.cameras.length=0,ie=!0);for(let U=0;U<Nt.length;U++){let mt=Nt[U],bt=null;if(m!==null)bt=m.getViewport(mt);else{let wt=p.getViewSubImage(u,mt);bt=wt.viewport,U===0&&(t.setRenderTargetTextures(b,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(b))}let Mt=q[U];Mt===void 0&&(Mt=new Un,Mt.layers.enable(U),Mt.viewport=new ke,q[U]=Mt),Mt.matrix.fromArray(mt.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(mt.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(bt.x,bt.y,bt.width,bt.height),U===0&&(J.matrix.copy(Mt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),ie===!0&&J.cameras.push(Mt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){p=n.getBinding();let U=p.getDepthInformation(Nt[0]);U&&U.isValid&&U.texture&&f.init(U,s.renderState)}if(Rt&&Rt.includes("camera-access")&&w){t.state.unbindTexture(),p=n.getBinding();for(let U=0;U<Nt.length;U++){let mt=Nt[U].camera;if(mt){let bt=d[mt];bt||(bt=new Ca,d[mt]=bt);let Mt=p.getCameraImage(mt);bt.sourceTexture=Mt}}}}for(let Nt=0;Nt<M.length;Nt++){let ie=R[Nt],Rt=M[Nt];ie!==null&&Rt!==void 0&&Rt.update(ie,ut,c||a)}Pe&&Pe(nt,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),_=null}let Te=new Mp;Te.setAnimationLoop(Se),this.setAnimationLoop=function(nt){Pe=nt},this.dispose=function(){}}},Fy=new De,Cp=new de;Cp.set(-1,0,0,0,1,0,0,0,1);function Oy(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,yu(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,L,D,b){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(f,d):d.isMeshLambertMaterial?(r(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(f,d),p(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(f,d),u(f,d),d.isMeshPhysicalMaterial&&m(f,d,b)):d.isMeshMatcapMaterial?(r(f,d),_(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),w(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,L,D):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Vn&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Vn&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let L=t.get(d),D=L.envMap,b=L.envMapRotation;D&&(f.envMap.value=D,f.envMapRotation.value.setFromMatrix4(Fy.makeRotationFromEuler(b)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Cp),f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,L,D){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*L,f.scale.value=D*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function p(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function u(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,L){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Vn&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.retroreflectivity>0&&(f.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=L.texture,f.transmissionSamplerSize.value.set(L.width,L.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,d){d.matcap&&(f.matcap.value=d.matcap)}function w(f,d){let L=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(L.matrixWorld),f.nearDistance.value=L.shadow.camera.near,f.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function By(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let R=M.program;n.uniformBlockBinding(b,R)}function c(b,M){let R=s[b.id];R===void 0&&(f(b),R=h(b),s[b.id]=R,b.addEventListener("dispose",L));let F=M.program;n.updateUBOMapping(b,F);let v=t.render.frame;r[b.id]!==v&&(u(b),r[b.id]=v)}function h(b){let M=p();b.__bindingPointIndex=M;let R=i.createBuffer(),F=b.__size,v=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,F,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,R),R}function p(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let M=s[b.id],R=b.uniforms,F=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,C=R.length;v<C;v++){let z=R[v];if(Array.isArray(z))for(let G=0,q=z.length;G<q;G++)m(z[G],v,G,F);else m(z,v,0,F)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,M,R,F){if(w(b,M,R,F)===!0){let v=b.__offset,C=b.value;if(Array.isArray(C)){let z=0;for(let G=0;G<C.length;G++){let q=C[G],J=d(q);_(q,b.__data,z),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(C,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,b.__data)}}function _(b,M,R){typeof b=="number"||typeof b=="boolean"?M[0]=b:b.isMatrix3?(M[0]=b.elements[0],M[1]=b.elements[1],M[2]=b.elements[2],M[3]=0,M[4]=b.elements[3],M[5]=b.elements[4],M[6]=b.elements[5],M[7]=0,M[8]=b.elements[6],M[9]=b.elements[7],M[10]=b.elements[8],M[11]=0):ArrayBuffer.isView(b)?M.set(new b.constructor(b.buffer,b.byteOffset,M.length)):b.toArray(M,R)}function w(b,M,R,F){let v=b.value,C=M+"_"+R;if(F[C]===void 0)return typeof v=="number"||typeof v=="boolean"?F[C]=v:ArrayBuffer.isView(v)?F[C]=v.slice():F[C]=v.clone(),!0;{let z=F[C];if(typeof v=="number"||typeof v=="boolean"){if(z!==v)return F[C]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(z.equals(v)===!1)return z.copy(v),!0}}return!1}function f(b){let M=b.uniforms,R=0,F=16;for(let C=0,z=M.length;C<z;C++){let G=Array.isArray(M[C])?M[C]:[M[C]];for(let q=0,J=G.length;q<J;q++){let V=G[q],K=Array.isArray(V.value)?V.value:[V.value];for(let st=0,rt=K.length;st<rt;st++){let vt=K[st],at=d(vt),ht=R%F,pt=ht%at.boundary,Kt=ht+pt;R+=pt,Kt!==0&&F-Kt<at.storage&&(R+=F-Kt),V.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=R,R+=at.storage}}}let v=R%F;return v>0&&(R+=F-v),b.__size=R,b.__cache={},this}function d(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(M.boundary=16,M.storage=b.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",b),M}function L(b){let M=b.target;M.removeEventListener("dispose",L);let R=a.indexOf(M.__bindingPointIndex);a.splice(R,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function D(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:D}}var zy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zi=null;function ky(){return zi===null&&(zi=new ba(zy,16,16,Ms,Ei),zi.name="DFG_LUT",zi.minFilter=bn,zi.magFilter=bn,zi.wrapS=Pi,zi.wrapT=Pi,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}var Dc=class{constructor(t={}){let{canvas:e=Wf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Jn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let w=m,f=new Set([Zl,Yl,ql]),d=new Set([Jn,wi,Or,Br,Wl,$l]),L=new Uint32Array(4),D=new Int32Array(4),b=new O,M=null,R=null,F=[],v=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let z=this,G=!1,q=null,J=null,V=null,K=null;this._outputColorSpace=ni;let st=0,rt=0,vt=null,at=-1,ht=null,pt=new ke,Kt=new ke,Ht=null,Pe=new le(0),Se=0,Te=e.width,nt=e.height,ut=1,Nt=null,ie=null,Rt=new ke(0,0,Te,nt),Wt=new ke(0,0,Te,nt),Le=!1,U=new Rr,mt=!1,bt=!1,Mt=new De,wt=new O,ne=new ke,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function he(){return vt===null?ut:1}let B=n;function Ne(y,H){return e.getContext(y,H)}let _e,A,x,X,et,lt,Et,At,ct,dt,Ct,Yt,Ot,It,jt,re,se,k,Tt,ft,Lt,zt,gt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Oe,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",Cn,!1),B===null){let H="webgl2";if(B=Ne(H,y),B===null)throw Ne(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(y){throw e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Cn,!1),ce("WebGLRenderer: "+y.message),y}function Zt(){_e=new qx(B),_e.init(),Lt=new Dy(B,_e),A=new Ox(B,_e,t,Lt),x=new Py(B,_e),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),J=B.createFramebuffer(),V=B.createFramebuffer(),K=B.createFramebuffer(),X=new Jx(B),et=new _y,lt=new Ly(B,_e,x,et,A,Lt,X),Et=new Xx(z),At=new jg(B),zt=new Ux(B,At),ct=new Yx(B,At,X,zt),dt=new jx(B,ct,At,zt,X),k=new Kx(B,A,lt),jt=new Bx(et),Ct=new gy(z,Et,_e,A,zt,jt),Yt=new Oy(z,et),Ot=new vy,It=new Ey(_e),se=new Nx(z,Et,x,dt,_,l),re=new Iy(z,dt,A),gt=new By(B,X,A,x),Tt=new Fx(B,_e,X),ft=new Zx(B,_e,X),X.programs=Ct.programs,z.capabilities=A,z.extensions=_e,z.properties=et,z.renderLists=Ot,z.shadowMap=re,z.state=x,z.info=X}w!==Jn&&(C=new tv(w,e.width,e.height,o,s,r));let Jt=new Bu(z,B);this.xr=Jt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let y=_e.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=_e.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(y){y!==void 0&&(ut=y,this.setSize(Te,nt,!1))},this.getSize=function(y){return y.set(Te,nt)},this.setSize=function(y,H,it=!0){if(Jt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=y,nt=H,e.width=Math.floor(y*ut),e.height=Math.floor(H*ut),it===!0&&(e.style.width=y+"px",e.style.height=H+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,y,H)},this.getDrawingBufferSize=function(y){return y.set(Te*ut,nt*ut).floor()},this.setDrawingBufferSize=function(y,H,it){Te=y,nt=H,ut=it,e.width=Math.floor(y*it),e.height=Math.floor(H*it),this.setViewport(0,0,y,H)},this.setEffects=function(y){if(w===Jn){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let H=0;H<y.length;H++)if(y[H].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(pt)},this.getViewport=function(y){return y.copy(Rt)},this.setViewport=function(y,H,it,Z){y.isVector4?Rt.set(y.x,y.y,y.z,y.w):Rt.set(y,H,it,Z),x.viewport(pt.copy(Rt).multiplyScalar(ut).round())},this.getScissor=function(y){return y.copy(Wt)},this.setScissor=function(y,H,it,Z){y.isVector4?Wt.set(y.x,y.y,y.z,y.w):Wt.set(y,H,it,Z),x.scissor(Kt.copy(Wt).multiplyScalar(ut).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(y){x.setScissorTest(Le=y)},this.setOpaqueSort=function(y){Nt=y},this.setTransparentSort=function(y){ie=y},this.getClearColor=function(y){return y.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(y=!0,H=!0,it=!0){let Z=0;if(y){let j=!1;if(vt!==null){let Pt=vt.texture.format;j=f.has(Pt)}if(j){let Pt=vt.texture.type,Gt=d.has(Pt),Bt=se.getClearColor(),Xt=se.getClearAlpha(),Qt=Bt.r,ge=Bt.g,Me=Bt.b;Gt?(L[0]=Qt,L[1]=ge,L[2]=Me,L[3]=Xt,B.clearBufferuiv(B.COLOR,0,L)):(D[0]=Qt,D[1]=ge,D[2]=Me,D[3]=Xt,B.clearBufferiv(B.COLOR,0,D))}else Z|=B.COLOR_BUFFER_BIT}H&&(Z|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(Z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&B.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),q=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Cn,!1),se.dispose(),Ot.dispose(),It.dispose(),et.dispose(),Et.dispose(),dt.dispose(),zt.dispose(),gt.dispose(),Ct.dispose(),Jt.dispose(),Jt.removeEventListener("sessionstart",Ts),Jt.removeEventListener("sessionend",Xr),qi.stop()};function Oe(y){y.preventDefault(),xa("WebGLRenderer: Context Lost."),G=!0}function be(){xa("WebGLRenderer: Context Restored."),G=!1;let y=X.autoReset,H=re.enabled,it=re.autoUpdate,Z=re.needsUpdate,j=re.type;Zt(),X.autoReset=y,re.enabled=H,re.autoUpdate=it,re.needsUpdate=Z,re.type=j}function Cn(y){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function jn(y){let H=y.target;H.removeEventListener("dispose",jn),mo(H)}function mo(y){go(y),et.remove(y)}function go(y){let H=et.get(y).programs;H!==void 0&&(H.forEach(function(it){Ct.releaseProgram(it)}),y.isShaderMaterial&&Ct.releaseShaderCache(y))}this.renderBufferDirect=function(y,H,it,Z,j,Pt){H===null&&(H=te);let Gt=j.isMesh&&j.matrixWorld.determinantAffine()<0,Bt=xe(y,H,it,Z,j);x.setMaterial(Z,Gt);let Xt=it.index,Qt=1;if(Z.wireframe===!0){if(Xt=ct.getWireframeAttribute(it),Xt===void 0)return;Qt=2}let ge=it.drawRange,Me=it.attributes.position,$t=ge.start*Qt,ve=(ge.start+ge.count)*Qt;Pt!==null&&($t=Math.max($t,Pt.start*Qt),ve=Math.min(ve,(Pt.start+Pt.count)*Qt)),Xt!==null?($t=Math.max($t,0),ve=Math.min(ve,Xt.count)):Me!=null&&($t=Math.max($t,0),ve=Math.min(ve,Me.count));let en=ve-$t;if(en<0||en===1/0)return;zt.setup(j,Z,Bt,it,Xt);let Xe,Ue=Tt;if(Xt!==null&&(Xe=At.get(Xt),Ue=ft,Ue.setIndex(Xe)),j.isMesh)Z.wireframe===!0?(x.setLineWidth(Z.wireframeLinewidth*he()),Ue.setMode(B.LINES)):Ue.setMode(B.TRIANGLES);else if(j.isLine){let Ke=Z.linewidth;Ke===void 0&&(Ke=1),x.setLineWidth(Ke*he()),j.isLineSegments?Ue.setMode(B.LINES):j.isLineLoop?Ue.setMode(B.LINE_LOOP):Ue.setMode(B.LINE_STRIP)}else j.isPoints?Ue.setMode(B.POINTS):j.isSprite&&Ue.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))Ue.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Ke=j._multiDrawStarts,Vt=j._multiDrawCounts,Qe=j._multiDrawCount,we=Xt?At.get(Xt).bytesPerElement:1,$n=et.get(Z).currentProgram.getUniforms();for(let oi=0;oi<Qe;oi++)$n.setValue(B,"_gl_DrawID",oi),Ue.render(Ke[oi]/we,Vt[oi])}else if(j.isInstancedMesh)Ue.renderInstances($t,en,j.count);else if(it.isInstancedBufferGeometry){let Ke=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Vt=Math.min(it.instanceCount,Ke);Ue.renderInstances($t,en,Vt)}else Ue.render($t,en)};function tr(y,H,it,Z){q!==null&&y.isNodeMaterial&&q.setObject(Z,y),mt===!0&&jt.setState(y,it,!1),y.transparent===!0&&y.side===Oi&&y.forceSinglePass===!1?(y.side=Vn,y.needsUpdate=!0,ln(y,H,Z),y.side=xs,y.needsUpdate=!0,ln(y,H,Z),y.side=Oi):ln(y,H,Z)}this.compile=function(y,H,it=null){it===null&&(it=y),q!==null&&q.renderStart(y,H,it),R=It.get(it),R.init(H),v.push(R),it.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(R.pushLight(j),j.castShadow&&R.pushShadow(j))}),y!==it&&y.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(R.pushLight(j),j.castShadow&&R.pushShadow(j))}),R.setupLights(),q!==null&&q.updateLights(R.state.lightsArray),bt=this.localClippingEnabled,mt=jt.init(this.clippingPlanes,bt),mt===!0&&jt.setGlobalState(this.clippingPlanes,H),q!==null&&re.render(R.state.shadowsArray,it,H);let Z=new Set;return y.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Pt=j.material;if(Pt)if(Array.isArray(Pt))for(let Gt=0;Gt<Pt.length;Gt++){let Bt=Pt[Gt];tr(Bt,it,H,j),Z.add(Bt)}else tr(Pt,it,H,j),Z.add(Pt)}),R=v.pop(),q!==null&&q.renderEnd(),Z},this.compileAsync=function(y,H,it=null){let Z=this.compile(y,H,it);return new Promise(j=>{function Pt(){if(Z.forEach(function(Gt){let Xt=et.get(Gt).currentProgram;(Xt===void 0||Xt.isReady())&&Z.delete(Gt)}),Z.size===0){j(y);return}setTimeout(Pt,10)}_e.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let er=null;function _o(y){er&&er(y)}function Ts(){qi.stop()}function Xr(){qi.start()}let qi=new Mp;qi.setAnimationLoop(_o),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(y){er=y,Jt.setAnimationLoop(y),y===null?qi.stop():qi.start()},Jt.addEventListener("sessionstart",Ts),Jt.addEventListener("sessionend",Xr),this.render=function(y,H){if(H!==void 0&&H.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;q!==null&&q.renderStart(y,H);let it=Jt.enabled===!0&&Jt.isPresenting===!0,Z=C!==null&&(vt===null||it)&&C.begin(z,vt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Jt.enabled===!0&&Jt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Jt.cameraAutoUpdate===!0&&Jt.updateCamera(H),H=Jt.getCamera()),y.isScene===!0&&y.onBeforeRender(z,y,H,vt),R=It.get(y,v.length),R.init(H),R.state.textureUnits=lt.getTextureUnits(),v.push(R),Mt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),U.setFromProjectionMatrix(Mt,yi,H.reversedDepth),bt=this.localClippingEnabled,mt=jt.init(this.clippingPlanes,bt),M=Ot.get(y,F.length),M.init(),F.push(M),Jt.enabled===!0&&Jt.isPresenting===!0){let Gt=z.xr.getDepthSensingMesh();Gt!==null&&qr(Gt,H,-1/0,z.sortObjects)}qr(y,H,0,z.sortObjects),M.finish(),q!==null&&q.updateLights(R.state.lightsArray),z.sortObjects===!0&&M.sort(Nt,ie),kt=Jt.enabled===!1||Jt.isPresenting===!1||Jt.hasDepthSensing()===!1,kt&&se.addToRenderList(M,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&jt.beginShadows();let j=R.state.shadowsArray;if(re.render(j,y,H),mt===!0&&jt.endShadows(),(Z&&C.hasRenderPass())===!1){let Gt=M.opaque,Bt=M.transmissive;if(R.setupLights(),H.isArrayCamera){let Xt=H.cameras;if(Bt.length>0)for(let Qt=0,ge=Xt.length;Qt<ge;Qt++){let Me=Xt[Qt];xo(Gt,Bt,y,Me)}kt&&se.render(y);for(let Qt=0,ge=Xt.length;Qt<ge;Qt++){let Me=Xt[Qt];Yr(M,y,Me,Me.viewport)}}else Bt.length>0&&xo(Gt,Bt,y,H),kt&&se.render(y),Yr(M,y,H)}vt!==null&&rt===0&&(lt.updateMultisampleRenderTarget(vt),lt.updateRenderTargetMipmap(vt)),Z&&C.end(z),y.isScene===!0&&y.onAfterRender(z,y,H),zt.resetDefaultState(),at=-1,ht=null,v.pop(),v.length>0?(R=v[v.length-1],lt.setTextureUnits(R.state.textureUnits),mt===!0&&jt.setGlobalState(z.clippingPlanes,R.state.camera)):R=null,F.pop(),F.length>0?M=F[F.length-1]:M=null,q!==null&&q.renderEnd()};function qr(y,H,it,Z){if(y.visible===!1)return;if(y.layers.test(H.layers)){if(y.isGroup)it=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(H);else if(y.isLightProbeGrid)R.pushLightProbeGrid(y);else if(y.isLight)R.pushLight(y),y.castShadow&&R.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(U)){Z&&ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Mt);let Gt=dt.update(y),Bt=y.material;Bt.visible&&M.push(y,Gt,Bt,it,ne.z,null,H)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(U))){let Gt=dt.update(y),Bt=y.material;if(Z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ne.copy(y.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),ne.copy(Gt.boundingSphere.center)),ne.applyMatrix4(y.matrixWorld).applyMatrix4(Mt)),Array.isArray(Bt)){let Xt=Gt.groups;for(let Qt=0,ge=Xt.length;Qt<ge;Qt++){let Me=Xt[Qt],$t=Bt[Me.materialIndex];$t&&$t.visible&&M.push(y,Gt,$t,it,ne.z,Me,H)}}else Bt.visible&&M.push(y,Gt,Bt,it,ne.z,null,H)}}let Pt=y.children;for(let Gt=0,Bt=Pt.length;Gt<Bt;Gt++)qr(Pt[Gt],H,it,Z)}function Yr(y,H,it,Z){let{opaque:j,transmissive:Pt,transparent:Gt}=y;R.setupLightsView(it),mt===!0&&jt.setGlobalState(z.clippingPlanes,it),Z&&x.viewport(pt.copy(Z)),j.length>0&&Rn(j,H,it),Pt.length>0&&Rn(Pt,H,it),Gt.length>0&&Rn(Gt,H,it),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function xo(y,H,it,Z){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[Z.id]===void 0){let $t=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[Z.id]=new Yn(1,1,{generateMipmaps:!0,type:$t?Ei:Jn,minFilter:ys,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Re.workingColorSpace})}let Pt=R.state.transmissionRenderTarget[Z.id],Gt=Z.viewport||pt;Pt.setSize(Gt.z*z.transmissionResolutionScale,Gt.w*z.transmissionResolutionScale);let Bt=z.getRenderTarget(),Xt=z.getActiveCubeFace(),Qt=z.getActiveMipmapLevel();z.setRenderTarget(Pt),z.getClearColor(Pe),Se=z.getClearAlpha(),Se<1&&z.setClearColor(16777215,.5),z.clear(),kt&&se.render(it);let ge=z.toneMapping;z.toneMapping=bi;let Me=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),R.setupLightsView(Z),mt===!0&&jt.setGlobalState(z.clippingPlanes,Z),Rn(y,it,Z),lt.updateMultisampleRenderTarget(Pt),lt.updateRenderTargetMipmap(Pt),_e.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let ve=0,en=H.length;ve<en;ve++){let Xe=H[ve],{object:Ue,geometry:Ke,material:Vt,group:Qe}=Xe;if(Vt.side===Oi&&Ue.layers.test(Z.layers)){let we=Vt.side;Vt.side=Vn,Vt.needsUpdate=!0,mn(Ue,it,Z,Ke,Vt,Qe),Vt.side=we,Vt.needsUpdate=!0,$t=!0}}$t===!0&&(lt.updateMultisampleRenderTarget(Pt),lt.updateRenderTargetMipmap(Pt))}z.setRenderTarget(Bt,Xt,Qt),z.setClearColor(Pe,Se),Me!==void 0&&(Z.viewport=Me),z.toneMapping=ge}function Rn(y,H,it){let Z=H.isScene===!0?H.overrideMaterial:null;for(let j=0,Pt=y.length;j<Pt;j++){let Gt=y[j],{object:Bt,geometry:Xt,group:Qt}=Gt,ge=Gt.material;ge.allowOverride===!0&&Z!==null&&(ge=Z),Bt.layers.test(it.layers)&&mn(Bt,H,it,Xt,ge,Qt)}}function mn(y,H,it,Z,j,Pt){q!==null&&j.isNodeMaterial&&q.setObject(y,j),y.onBeforeRender(z,H,it,Z,j,Pt),y.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),j.onBeforeRender(z,H,it,Z,y,Pt),j.transparent===!0&&j.side===Oi&&j.forceSinglePass===!1?(j.side=Vn,j.needsUpdate=!0,z.renderBufferDirect(it,H,Z,j,y,Pt),j.side=xs,j.needsUpdate=!0,z.renderBufferDirect(it,H,Z,j,y,Pt),j.side=Oi):z.renderBufferDirect(it,H,Z,j,y,Pt),y.onAfterRender(z,H,it,Z,j,Pt)}function ln(y,H,it){H.isScene!==!0&&(H=te);let Z=et.get(y),j=R.state.lights,Pt=R.state.shadowsArray,Gt=j.state.version,Bt=Ct.getParameters(y,j.state,Pt,H,it,R.state.lightProbeGridArray),Xt=Ct.getProgramCacheKey(Bt),Qt=Z.programs;Z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?H.environment:null,Z.fog=H.fog;let ge=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;Z.envMap=Et.get(y.envMap||Z.environment,ge),Z.envMapRotation=Z.environment!==null&&y.envMap===null?H.environmentRotation:y.envMapRotation,Qt===void 0&&(y.addEventListener("dispose",jn),Qt=new Map,Z.programs=Qt);let Me=Qt.get(Xt);if(Me!==void 0){if(Z.currentProgram===Me&&Z.lightsStateVersion===Gt)return ai(y,Bt),Me}else Bt.uniforms=Ct.getUniforms(y),q!==null&&y.isNodeMaterial&&q.build(y,it,Bt),y.onBeforeCompile(Bt,z),Me=Ct.acquireProgram(Bt,Xt),Qt.set(Xt,Me),Z.uniforms=Bt.uniforms;let $t=Z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&($t.clippingPlanes=jt.uniform),ai(y,Bt),Z.needsLights=gn(y),Z.lightsStateVersion=Gt,Z.needsLights&&($t.ambientLightColor.value=j.state.ambient,$t.lightProbe.value=j.state.probe,$t.sunLights.value=j.state.sun,$t.sunLightShadows.value=j.state.sunShadow,$t.directionalLights.value=j.state.directional,$t.directionalLightShadows.value=j.state.directionalShadow,$t.spotLights.value=j.state.spot,$t.spotLightShadows.value=j.state.spotShadow,$t.rectAreaLights.value=j.state.rectArea,$t.ltc_1.value=j.state.rectAreaLTC1,$t.ltc_2.value=j.state.rectAreaLTC2,$t.pointLights.value=j.state.point,$t.pointLightShadows.value=j.state.pointShadow,$t.hemisphereLights.value=j.state.hemi,$t.sunShadowMatrix.value=j.state.sunShadowMatrix,$t.sunShadowCascade.value=j.state.sunShadowCascade,$t.directionalShadowMatrix.value=j.state.directionalShadowMatrix,$t.spotLightMatrix.value=j.state.spotLightMatrix,$t.spotLightMap.value=j.state.spotLightMap,$t.pointShadowMatrix.value=j.state.pointShadowMatrix),Z.lightProbeGrid=R.state.lightProbeGridArray.length>0,Z.currentProgram=Me,Z.uniformsList=null,Me}function Wn(y){if(y.uniformsList===null){let H=y.currentProgram.getUniforms();y.uniformsList=Vr.seqWithValue(H.seq,y.uniforms)}return y.uniformsList}function ai(y,H){let it=et.get(y);it.outputColorSpace=H.outputColorSpace,it.batching=H.batching,it.batchingColor=H.batchingColor,it.instancing=H.instancing,it.instancingColor=H.instancingColor,it.instancingMorph=H.instancingMorph,it.skinning=H.skinning,it.morphTargets=H.morphTargets,it.morphNormals=H.morphNormals,it.morphColors=H.morphColors,it.morphTargetsCount=H.morphTargetsCount,it.numClippingPlanes=H.numClippingPlanes,it.numIntersection=H.numClipIntersection,it.vertexAlphas=H.vertexAlphas,it.vertexTangents=H.vertexTangents,it.toneMapping=H.toneMapping}function dn(y,H){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;b.setFromMatrixPosition(H.matrixWorld);for(let it=0,Z=y.length;it<Z;it++){let j=y[it];if(j.texture!==null&&j.boundingBox.containsPoint(b))return j}return null}function xe(y,H,it,Z,j){H.isScene!==!0&&(H=te),lt.resetTextureUnits();let Pt=H.fog,Gt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?H.environment:null,Bt=vt===null?z.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Re.workingColorSpace,Xt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Qt=Et.get(Z.envMap||Gt,Xt),ge=Z.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Me=!!it.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),$t=!!it.morphAttributes.position,ve=!!it.morphAttributes.normal,en=!!it.morphAttributes.color,Xe=bi;Z.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(Xe=z.toneMapping);let Ue=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Ke=Ue!==void 0?Ue.length:0,Vt=et.get(Z),Qe=R.state.lights;if(mt===!0&&(bt===!0||y!==ht)){let Fe=y===ht&&Z.id===at;jt.setState(Z,y,Fe)}let we=!1;Z.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Qe.state.version||Vt.outputColorSpace!==Bt||j.isBatchedMesh&&Vt.batching===!1||!j.isBatchedMesh&&Vt.batching===!0||j.isBatchedMesh&&Vt.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Vt.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Vt.instancing===!1||!j.isInstancedMesh&&Vt.instancing===!0||j.isSkinnedMesh&&Vt.skinning===!1||!j.isSkinnedMesh&&Vt.skinning===!0||j.isInstancedMesh&&Vt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Vt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Vt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Vt.instancingMorph===!1&&j.morphTexture!==null||Vt.envMap!==Qt||Z.fog===!0&&Vt.fog!==Pt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==jt.numPlanes||Vt.numIntersection!==jt.numIntersection)||Vt.vertexAlphas!==ge||Vt.vertexTangents!==Me||Vt.morphTargets!==$t||Vt.morphNormals!==ve||Vt.morphColors!==en||Vt.toneMapping!==Xe||Vt.morphTargetsCount!==Ke||!!Vt.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,Vt.__version=Z.version);let $n=Vt.currentProgram;we===!0&&($n=ln(Z,H,j),q&&Z.isNodeMaterial&&q.onUpdateProgram(Z,$n,Vt));let oi=!1,nn=!1,rs=!1,Be=$n.getUniforms(),He=Vt.uniforms;if(x.useProgram($n.program)&&(oi=!0,nn=!0,rs=!0),Z.id!==at&&(at=Z.id,nn=!0),Vt.needsLights){let Fe=dn(R.state.lightProbeGridArray,j);Vt.lightProbeGrid!==Fe&&(Vt.lightProbeGrid=Fe,nn=!0)}if(oi||ht!==y){x.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Be.setValue(B,"projectionMatrix",y.projectionMatrix),Be.setValue(B,"viewMatrix",y.matrixWorldInverse);let je=Be.map.cameraPosition;je!==void 0&&je.setValue(B,wt.setFromMatrixPosition(y.matrixWorld)),A.logarithmicDepthBuffer&&Be.setValue(B,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Be.setValue(B,"isOrthographic",y.isOrthographicCamera===!0),ht!==y&&(ht=y,nn=!0,rs=!0)}if(Vt.needsLights&&(Qe.state.sunShadowMap.length>0&&Be.setValue(B,"sunShadowMap",Qe.state.sunShadowMap,lt),Qe.state.directionalShadowMap.length>0&&Be.setValue(B,"directionalShadowMap",Qe.state.directionalShadowMap,lt),Qe.state.spotShadowMap.length>0&&Be.setValue(B,"spotShadowMap",Qe.state.spotShadowMap,lt),Qe.state.pointShadowMap.length>0&&Be.setValue(B,"pointShadowMap",Qe.state.pointShadowMap,lt)),j.isSkinnedMesh){Be.setOptional(B,j,"bindMatrix"),Be.setOptional(B,j,"bindMatrixInverse");let Fe=j.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),Be.setValue(B,"boneTexture",Fe.boneTexture,lt))}j.isBatchedMesh&&(Be.setOptional(B,j,"batchingTexture"),Be.setValue(B,"batchingTexture",j._matricesTexture,lt),Be.setOptional(B,j,"batchingIdTexture"),Be.setValue(B,"batchingIdTexture",j._indirectTexture,lt),Be.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&Be.setValue(B,"batchingColorTexture",j._colorsTexture,lt));let Ti=it.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&k.update(j,it,$n),(nn||Vt.receiveShadow!==j.receiveShadow)&&(Vt.receiveShadow=j.receiveShadow,Be.setValue(B,"receiveShadow",j.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&H.environment!==null&&(He.envMapIntensity.value=H.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=ky()),nn){if(Be.setValue(B,"toneMappingExposure",z.toneMappingExposure),Vt.needsLights&&Ye(He,rs),Pt&&Z.fog===!0&&Yt.refreshFogUniforms(He,Pt),Yt.refreshMaterialUniforms(He,Z,ut,nt,R.state.transmissionRenderTarget[y.id]),Vt.needsLights&&Vt.lightProbeGrid){let Fe=Vt.lightProbeGrid;He.probesSH.value=Fe.texture,He.probesMin.value.copy(Fe.boundingBox.min),He.probesMax.value.copy(Fe.boundingBox.max),He.probesResolution.value.copy(Fe.resolution)}Vr.upload(B,Wn(Vt),He,lt)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Vr.upload(B,Wn(Vt),He,lt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Be.setValue(B,"center",j.center),Be.setValue(B,"modelViewMatrix",j.modelViewMatrix),Be.setValue(B,"normalMatrix",j.normalMatrix),Be.setValue(B,"modelMatrix",j.matrixWorld),Z.uniformsGroups!==void 0){let Fe=Z.uniformsGroups;for(let je=0,as=Fe.length;je<as;je++){let As=Fe[je];gt.update(As,$n),gt.bind(As,$n)}}return $n}function Ye(y,H){y.ambientLightColor.needsUpdate=H,y.lightProbe.needsUpdate=H,y.sunLights.needsUpdate=H,y.sunLightShadows.needsUpdate=H,y.directionalLights.needsUpdate=H,y.directionalLightShadows.needsUpdate=H,y.pointLights.needsUpdate=H,y.pointLightShadows.needsUpdate=H,y.spotLights.needsUpdate=H,y.spotLightShadows.needsUpdate=H,y.rectAreaLights.needsUpdate=H,y.hemisphereLights.needsUpdate=H}function gn(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return st},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return vt},this.setRenderTargetTextures=function(y,H,it){let Z=et.get(y);Z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),et.get(y.texture).__webglTexture=H,et.get(y.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:it,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,H){let it=et.get(y);it.__webglFramebuffer=H,it.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(y,H=0,it=0){vt=y,st=H,rt=it;let Z=null,j=!1,Pt=!1;if(y){let Bt=et.get(y);if(Bt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(B.FRAMEBUFFER,Bt.__webglFramebuffer),pt.copy(y.viewport),Kt.copy(y.scissor),Ht=y.scissorTest,x.viewport(pt),x.scissor(Kt),x.setScissorTest(Ht),at=-1;return}else if(Bt.__webglFramebuffer===void 0)lt.setupRenderTarget(y);else if(Bt.__hasExternalTextures)lt.rebindTextures(y,et.get(y.texture).__webglTexture,et.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let ge=y.depthTexture;if(Bt.__boundDepthTexture!==ge){if(ge!==null&&et.has(ge)&&(y.width!==ge.image.width||y.height!==ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(y)}}let Xt=y.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Pt=!0);let Qt=et.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Qt[H])?Z=Qt[H][it]:Z=Qt[H],j=!0):y.samples>0&&lt.useMultisampledRTT(y)===!1?Z=et.get(y).__webglMultisampledFramebuffer:Array.isArray(Qt)?Z=Qt[it]:Z=Qt,pt.copy(y.viewport),Kt.copy(y.scissor),Ht=y.scissorTest}else pt.copy(Rt).multiplyScalar(ut).floor(),Kt.copy(Wt).multiplyScalar(ut).floor(),Ht=Le;if(it!==0&&(Z=J),x.bindFramebuffer(B.FRAMEBUFFER,Z)&&x.drawBuffers(y,Z),x.viewport(pt),x.scissor(Kt),x.setScissorTest(Ht),j){let Bt=et.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+H,Bt.__webglTexture,it)}else if(Pt){let Bt=H;for(let Xt=0;Xt<y.textures.length;Xt++){let Qt=et.get(y.textures[Xt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Xt,Qt.__webglTexture,it,Bt)}}else if(y!==null&&it!==0){let Bt=et.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Bt.__webglTexture,it)}at=-1};function Zr(y){let H=et.get(y);return(H.__readFormat!==y.format||H.__readType!==y.type)&&(H.__readFormat=y.format,H.__readType=y.type,H.__formatReadable=A.textureFormatReadable(y.format),H.__typeReadable=A.textureTypeReadable(y.type)),H}this.readRenderTargetPixels=function(y,H,it,Z,j,Pt,Gt,Bt=0){if(!(y&&y.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=et.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Gt!==void 0&&(Xt=Xt[Gt]),Xt){x.bindFramebuffer(B.FRAMEBUFFER,Xt);try{let Qt=y.textures[Bt],ge=Qt.format,Me=Qt.type;y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Bt);let $t=Zr(Qt);if($t.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($t.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=y.width-Z&&it>=0&&it<=y.height-j&&B.readPixels(H,it,Z,j,Lt.convert(ge),Lt.convert(Me),Pt)}finally{let Qt=vt!==null?et.get(vt).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(y,H,it,Z,j,Pt,Gt,Bt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=et.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Gt!==void 0&&(Xt=Xt[Gt]),Xt)if(H>=0&&H<=y.width-Z&&it>=0&&it<=y.height-j){x.bindFramebuffer(B.FRAMEBUFFER,Xt);let Qt=y.textures[Bt],ge=Qt.format,Me=Qt.type;y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Bt);let $t=Zr(Qt);if($t.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($t.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ve),B.bufferData(B.PIXEL_PACK_BUFFER,Pt.byteLength,B.STREAM_READ),B.readPixels(H,it,Z,j,Lt.convert(ge),Lt.convert(Me),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let en=vt!==null?et.get(vt).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,en);let Xe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Xf(B,Xe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ve),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Pt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ve),B.deleteSync(Xe),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,H=null,it=0){let Z=Math.pow(2,-it),j=Math.floor(y.image.width*Z),Pt=Math.floor(y.image.height*Z),Gt=H!==null?H.x:0,Bt=H!==null?H.y:0;lt.setTexture2D(y,0),B.copyTexSubImage2D(B.TEXTURE_2D,it,0,0,Gt,Bt,j,Pt),x.unbindTexture()},this.copyTextureToTexture=function(y,H,it=null,Z=null,j=0,Pt=0){let Gt,Bt,Xt,Qt,ge,Me,$t,ve,en,Xe=y.isCompressedTexture?y.mipmaps[Pt]:y.image;if(it!==null)Gt=it.max.x-it.min.x,Bt=it.max.y-it.min.y,Xt=it.isBox3?it.max.z-it.min.z:1,Qt=it.min.x,ge=it.min.y,Me=it.isBox3?it.min.z:0;else{let He=Math.pow(2,-j);Gt=Math.floor(Xe.width*He),Bt=Math.floor(Xe.height*He),y.isDataArrayTexture?Xt=Xe.depth:y.isData3DTexture?Xt=Math.floor(Xe.depth*He):Xt=1,Qt=0,ge=0,Me=0}Z!==null?($t=Z.x,ve=Z.y,en=Z.z):($t=0,ve=0,en=0);let Ue=Lt.convert(H.format),Ke=Lt.convert(H.type),Vt;H.isData3DTexture?(lt.setTexture3D(H,0),Vt=B.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(lt.setTexture2DArray(H,0),Vt=B.TEXTURE_2D_ARRAY):(lt.setTexture2D(H,0),Vt=B.TEXTURE_2D),x.activeTexture(B.TEXTURE0),x.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,H.flipY),x.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),x.pixelStorei(B.UNPACK_ALIGNMENT,H.unpackAlignment);let Qe=x.getParameter(B.UNPACK_ROW_LENGTH),we=x.getParameter(B.UNPACK_IMAGE_HEIGHT),$n=x.getParameter(B.UNPACK_SKIP_PIXELS),oi=x.getParameter(B.UNPACK_SKIP_ROWS),nn=x.getParameter(B.UNPACK_SKIP_IMAGES);x.pixelStorei(B.UNPACK_ROW_LENGTH,Xe.width),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Xe.height),x.pixelStorei(B.UNPACK_SKIP_PIXELS,Qt),x.pixelStorei(B.UNPACK_SKIP_ROWS,ge),x.pixelStorei(B.UNPACK_SKIP_IMAGES,Me);let rs=y.isDataArrayTexture||y.isData3DTexture,Be=H.isDataArrayTexture||H.isData3DTexture;if(y.isDepthTexture){let He=et.get(y),Ti=et.get(H),Fe=et.get(He.__renderTarget),je=et.get(Ti.__renderTarget);x.bindFramebuffer(B.READ_FRAMEBUFFER,Fe.__webglFramebuffer),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let as=0;as<Xt;as++)rs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,et.get(y).__webglTexture,j,Me+as),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,et.get(H).__webglTexture,Pt,en+as)),B.blitFramebuffer(Qt,ge,Gt,Bt,$t,ve,Gt,Bt,B.DEPTH_BUFFER_BIT,B.NEAREST);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||y.isRenderTargetTexture||et.has(y)){let He=et.get(y),Ti=et.get(H);x.bindFramebuffer(B.READ_FRAMEBUFFER,V),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,K);for(let Fe=0;Fe<Xt;Fe++)rs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,He.__webglTexture,j,Me+Fe):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,He.__webglTexture,j),Be?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ti.__webglTexture,Pt,en+Fe):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ti.__webglTexture,Pt),j!==0?B.blitFramebuffer(Qt,ge,Gt,Bt,$t,ve,Gt,Bt,B.COLOR_BUFFER_BIT,B.NEAREST):Be?B.copyTexSubImage3D(Vt,Pt,$t,ve,en+Fe,Qt,ge,Gt,Bt):B.copyTexSubImage2D(Vt,Pt,$t,ve,Qt,ge,Gt,Bt);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Be?y.isDataTexture||y.isData3DTexture?B.texSubImage3D(Vt,Pt,$t,ve,en,Gt,Bt,Xt,Ue,Ke,Xe.data):H.isCompressedArrayTexture?B.compressedTexSubImage3D(Vt,Pt,$t,ve,en,Gt,Bt,Xt,Ue,Xe.data):B.texSubImage3D(Vt,Pt,$t,ve,en,Gt,Bt,Xt,Ue,Ke,Xe):y.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Pt,$t,ve,Gt,Bt,Ue,Ke,Xe.data):y.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Pt,$t,ve,Xe.width,Xe.height,Ue,Xe.data):B.texSubImage2D(B.TEXTURE_2D,Pt,$t,ve,Gt,Bt,Ue,Ke,Xe);x.pixelStorei(B.UNPACK_ROW_LENGTH,Qe),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,we),x.pixelStorei(B.UNPACK_SKIP_PIXELS,$n),x.pixelStorei(B.UNPACK_SKIP_ROWS,oi),x.pixelStorei(B.UNPACK_SKIP_IMAGES,nn),Pt===0&&H.generateMipmaps&&B.generateMipmap(Vt),x.unbindTexture()},this.initRenderTarget=function(y){et.get(y).__webglFramebuffer===void 0&&lt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?lt.setTextureCube(y,0):y.isData3DTexture?lt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?lt.setTexture2DArray(y,0):lt.setTexture2D(y,0),x.unbindTexture()},this.resetState=function(){st=0,rt=0,vt=null,x.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),e.unpackColorSpace=Re._getUnpackColorSpace()}};var Ip=new kn,Fc=new O,ns=class extends Xa{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new rn(t,3)),this.setAttribute("uv",new rn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new _s(e,6,1);return this.setAttribute("instanceStart",new Mi(n,3,0)),this.setAttribute("instanceEnd",new Mi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new _s(e,6,1);return this.setAttribute("instanceColorStart",new Mi(n,3,0)),this.setAttribute("instanceColorEnd",new Mi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new za(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Ip.setFromBufferAttribute(e),this.boundingBox.union(Ip))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fc.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fc)),Fc.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Fc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ut.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Dt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Hn.line={uniforms:io.merge([Ut.common,Ut.fog,Ut.line]),vertexShader:`
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
		`};var ki=class extends Sn{constructor(t){super({type:"LineMaterial",uniforms:io.clone(Hn.line.uniforms),vertexShader:Hn.line.vertexShader,fragmentShader:Hn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var zu=new ke,Pp=new O,Lp=new O,wn=new ke,En=new ke,Vi=new ke,ku=new O,Vu=new De,Tn=new qa,Dp=new O,Oc=new kn,Bc=new Zn,Hi=new ke,Gi,qs;function Np(i,t,e){return Hi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Hi.multiplyScalar(1/Hi.w),Hi.x=qs/e.width,Hi.y=qs/e.height,Hi.applyMatrix4(i.projectionMatrixInverse),Hi.multiplyScalar(1/Hi.w),Math.abs(Math.max(Hi.x,Hi.y))}function Vy(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Tn.start.fromBufferAttribute(s,o),Tn.end.fromBufferAttribute(r,o),Tn.applyMatrix4(e);let c=new O,h=new O;Gi.distanceSqToSegment(Tn.start,Tn.end,h,c),h.distanceTo(c)<qs*.5&&t.push({point:h,pointOnLine:c,distance:Gi.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function Hy(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),p=-t.near;Gi.at(1,Vi),Vi.w=1,Vi.applyMatrix4(t.matrixWorldInverse),Vi.applyMatrix4(n),Vi.multiplyScalar(1/Vi.w),Vi.x*=r.x/2,Vi.y*=r.y/2,Vi.z=0,ku.copy(Vi),Vu.multiplyMatrices(t.matrixWorldInverse,a);for(let u=0,m=h;u<m;u++){if(wn.fromBufferAttribute(l,u),En.fromBufferAttribute(c,u),wn.w=1,En.w=1,wn.applyMatrix4(Vu),En.applyMatrix4(Vu),wn.z>p&&En.z>p)continue;if(wn.z>p){let D=wn.z-En.z,b=(wn.z-p)/D;wn.lerp(En,b)}else if(En.z>p){let D=En.z-wn.z,b=(En.z-p)/D;En.lerp(wn,b)}wn.applyMatrix4(n),En.applyMatrix4(n),wn.multiplyScalar(1/wn.w),En.multiplyScalar(1/En.w),wn.x*=r.x/2,wn.y*=r.y/2,En.x*=r.x/2,En.y*=r.y/2,Tn.start.copy(wn),Tn.start.z=0,Tn.end.copy(En),Tn.end.z=0;let w=Tn.closestPointToPointParameter(ku,!0);Tn.at(w,Dp);let f=xu.lerp(wn.z,En.z,w),d=f>=-1&&f<=1,L=ku.distanceTo(Dp)<qs*.5;if(d&&L){Tn.start.fromBufferAttribute(l,u),Tn.end.fromBufferAttribute(c,u),Tn.start.applyMatrix4(a),Tn.end.applyMatrix4(a);let D=new O,b=new O;Gi.distanceSqToSegment(Tn.start,Tn.end,b,D),e.push({point:b,pointOnLine:D,distance:Gi.origin.distanceTo(b),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}}var Ys=class extends yn{constructor(t=new ns,e=new ki({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)Pp.fromBufferAttribute(e,a),Lp.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Pp.distanceTo(Lp);let r=new _s(s,2,1);return t.setAttribute("instanceDistanceStart",new Mi(r,1,0)),t.setAttribute("instanceDistanceEnd",new Mi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Gi=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;qs=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Bc.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=qs*.5;else{let p=Math.max(s.near,Bc.distanceToPoint(Gi.origin));c=Np(s,p,l.resolution)}if(Bc.radius+=c,Gi.intersectsSphere(Bc)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Oc.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=qs*.5;else{let p=Math.max(s.near,Oc.distanceToPoint(Gi.origin));h=Np(s,p,l.resolution)}Oc.expandByScalar(h),Gi.intersectsBox(Oc)!==!1&&(n?Vy(this,e):Hy(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(zu),this.material.uniforms.resolution.value.set(zu.z,zu.w))}};function Up(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:l,CY:c,mcs:h,q:p,list:u,clamp:m,norm:_,munis:w}=i,f=g=>document.querySelector(g),d=g=>String(g).replace(/[<>&"]/g,S=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[S]),L=(g,S)=>[(g-l)*o,(S-c)*o],D=.06,b=t.segs.map(g=>{let S=[],T=[0];for(let I=0;I<g.length;I+=2){let P=L(g[I],g[I+1]);S.length&&T.push(T[T.length-1]+Math.hypot(P[0]-S[S.length-1][0],P[1]-S[S.length-1][1])),S.push(P)}return{p:S,c:T,L:T[T.length-1]}}),M=t.stops.map(([g,S,T,I])=>({n:g,id:I,w:L(S,T),fams:new Set})),R=t.routes.map(([g,S,T])=>({s:g,l:S,c:T})),F=(g,S)=>{let T=g.match(/^R([A-Z]*)(\d*)(.*)$/),I=S.match(/^R([A-Z]*)(\d*)(.*)$/);return(T[1]||"").localeCompare(I[1]||"")||(+T[2]||0)-(+I[2]||0)||T[3].localeCompare(I[3])},v=[...new Set(R.map(g=>g.s))].sort(F),C={};R.forEach(g=>{C[g.s]||(C[g.s]=g.c)});let z=t.pats.map(([g,S,T])=>({stops:g,t:S,segs:T})),G=t.trips.map(([g,S,T,I,P],N)=>({day:g,pat:z[S],fam:R[T].s,c:R[T].c,t0:I,num:P,tid:t.tids[N]})),q={};v.forEach(g=>q[g]=new Set),G.forEach(g=>{g.pat.segs.forEach(S=>q[g.fam].add(S)),g.pat.stops.forEach(S=>M[S].fams.add(g.fam))});let J=t.days.map((g,S)=>G.filter(T=>T.day===S)),V=new Map(G.map(g=>[g.tid,g])),K=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],st=Math.PI/180,rt=3.922*st,vt=-39.705*st;function at(g,S){let T=g*st+rt,I=S*st,P=Math.cos(vt),N=Math.sin(vt),$=Math.cos(I),W=Math.cos(T)*$,tt=Math.sin(T)*$,Q=Math.sin(I),ot=Math.atan2(tt,W*P-Q*N),E=Math.asin(Q*P+W*N),Y=Math.sqrt(2/(1+Math.cos(ot)*Math.cos(E))),_t=Y*Math.cos(E)*Math.sin(ot),St=Y*Math.sin(E),[qt,ae,Ae,xt,yt,ee,fe]=K;return L((ae+qt*_t-yt)*fe,(ee-(xt-Ae*St))*fe)}let ht=new Map(M.map((g,S)=>[g.id,S]));function pt(g){if(g.g)return g.g;let S=[],T=[],I=[0],P=0;return g.segs.forEach((N,$)=>{let W=b[N];W.p.forEach((tt,Q)=>{$&&!Q||(S.push(tt),T.push(P+W.c[Q]))}),P+=W.L,I.push(P)}),g.g={pts:S,cum:T,stopD:I}}function Kt(g,S,T,I){let P=1e18,N=0;for(let $=0;$+1<g.pts.length;$++){if(g.cum[$+1]<T||g.cum[$]>I)continue;let W=g.pts[$],tt=g.pts[$+1],Q=tt[0]-W[0],ot=tt[1]-W[1],E=Q*Q+ot*ot||1e-9,Y=Math.max(0,Math.min(1,((S[0]-W[0])*Q+(S[1]-W[1])*ot)/E)),_t=W[0]+Q*Y-S[0],St=W[1]+ot*Y-S[1],qt=_t*_t+St*St;qt<P&&(P=qt,N=g.cum[$]+Y*(g.cum[$+1]-g.cum[$]))}return{d:N,err:Math.sqrt(P)}}function Ht(g,S){let T=0,I=g.cum.length-1;if(S<=0)return g.pts[0];if(S>=g.cum[I])return g.pts[I];for(;I-T>1;){let W=T+I>>1;g.cum[W]<=S?T=W:I=W}let P=(S-g.cum[T])/(g.cum[I]-g.cum[T]||1),N=g.pts[T],$=g.pts[I];return[N[0]+($[0]-N[0])*P,N[1]+($[1]-N[1])*P]}let Pe=g=>`${g.slice(6,8)}/${g.slice(4,6)}`,Se=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Te(g){let S={};return Se.formatToParts(g).forEach(T=>S[T.type]=T.value),{ymd:S.year+S.month+S.day,min:+S.hour*60+ +S.minute+ +S.second/60}}let nt=0,ut=null,Nt=0,ie=0;function Rt(){let g=Te(new Date);if(nt===0&&ut==null)return{...g,live:!0};let S=ut==null?g.min:Nt+(nt?(performance.now()-ie)/6e4*nt:0);return{ymd:g.ymd,min:S,live:!1}}let Wt=g=>(g=(Math.round(g)%1440+1440)%1440,String(Math.floor(g/60)).padStart(2,"0")+":"+String(g%60).padStart(2,"0")),Le="https://rodalies.erathegameoftime.com",U={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let g=new URLSearchParams(location.search).get("rt");g&&localStorage.setItem("rod_rt",g);let S=localStorage.getItem("rod_rt");S&&/jhmuyo\.workers\.dev/.test(S)&&(S=Le,localStorage.setItem("rod_rt",S)),U.url=S||Le}catch{U.url=Le}let mt=(g,S)=>fetch(g+S,{cache:"no-store"}).then(T=>{if(!T.ok)throw new Error("HTTP "+T.status);return T.json()}),bt=g=>/^51/.test(g||"");async function Mt(){if(!U.url){ne();return}let g=U.url.replace(/\/+$/,"");(!U.repFail||Date.now()-U.repFail>15*6e4)&&mt(g,"/reports.json").then(tt=>{tt&&Array.isArray(tt.items)?(U.rep=tt.items,U.repSkew=(tt.now||Date.now())-Date.now(),tt.tipos&&(U.tipos=tt.tipos),U.repOk=Date.now(),U.repFail=0):U.repFail=Date.now()}).catch(()=>{U.repFail=Date.now(),U.repOk=0});let S=!U.adifAt||Date.now()-U.adifAt>11e4,[T,I,P,N,$]=await Promise.allSettled([mt(g,"/trip_updates.json"),mt(g,"/vehicle_positions.json"),mt(g,"/alerts.json"),mt(g,"/notices.json"),S?mt(g,"/adif.json"):Promise.reject(0)]);if($.status==="fulfilled"&&$.value&&$.value.ok?(U.adif=$.value,U.adifAt=Date.now()):S&&(U.adifAt=Date.now()-6e4),T.status==="fulfilled"){let tt=new Map,Q=new Map;for(let ot of T.value.entity||[]){let E=ot.tripUpdate;if(!E||!E.trip||!bt(E.trip.tripId))continue;let Y=E.trip.tripId,_t=(E.stopTimeUpdate||[])[0],St=E.delay;St==null&&_t&&(St=(_t.arrival||_t.departure||{}).delay),E.trip.scheduleRelationship==="CANCELED"&&(St="X"),St!=null&&tt.set(Y,St),Q.set(Y,{next:_t?{sid:_t.stopId,t:+((_t.arrival||_t.departure||{}).time||0)}:null})}U.delays=tt,U.tu=Q,U.ok=Date.now(),U.feedTs=+((T.value.header||{}).timestamp||0)*1e3,U.err=""}else U.err=T.reason&&T.reason.message||"sin respuesta";if(I.status==="fulfilled"){let tt=new Map,Q=Date.now()/1e3;for(let ot of I.value.entity||[]){let E=ot.vehicle;if(!E||!E.trip||!bt(E.trip.tripId)||!E.position)continue;let Y=E.vehicle&&E.vehicle.label||"",_t=Y.match(/PLATF\.\(([^)]+)\)/),St=U.vp.get(E.trip.tripId),qt={tid:E.trip.tripId,w:at(+E.position.longitude,+E.position.latitude),st:E.currentStatus||"",sid:E.stopId||"",ts:+E.timestamp||Q,label:Y,plat:_t?_t[1]:"",fam:(Y.split("-")[0]||"").trim(),num:E.vehicle&&E.vehicle.id||""};qt.disp=St?St.disp:null,tt.set(qt.tid,qt)}U.vp=tt,U.okVP=Date.now()}let W=[];if(N.status==="fulfilled"&&Array.isArray(N.value.included)){U.okNotices=Date.now();for(let tt of N.value.included){let Q=new Set((tt.lines||[]).map(Y=>Y.id).filter(Y=>C[Y])),ot=Y=>((Y||{}).es||(Y||{}).ca||"").trim(),E=[ot(tt.description),ot(tt.title)].sort((Y,_t)=>_t.length-Y.length)[0];E&&W.push({id:"N"+tt.externalId,fams:Q,stops:new Set,txt:E,when:(tt.date||"")+"T"+(tt.time||""),src:"Rodalies",core:tt.core||""})}}if(P.status==="fulfilled"){let tt=+((P.value.header||{}).timestamp||0);if(U.alertsTs=tt,Date.now()/1e3-tt<6*3600)for(let Q of P.value.entity||[]){let ot=Q.alert;if(!ot)continue;let E=new Set,Y=new Set;for(let ae of ot.informedEntity||[])(ae.routeId||"").startsWith("51")&&E.add(ae.routeId.replace(/^51T\d+/,"")),ae.stopId&&ht.has(ae.stopId)&&Y.add(ht.get(ae.stopId));if(!E.size&&!Y.size)continue;let _t=(ot.descriptionText||ot.headerText||{translation:[]}).translation||[],St=((_t.find(ae=>ae.language==="es")||_t[0]||{}).text||"").trim(),qt=+((ot.activePeriod||[])[0]||{}).start||0;W.some(ae=>ae.txt===St)||W.push({id:Q.id,fams:E,stops:Y,txt:St,when:qt?new Date(qt*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(U.adif&&Date.now()-U.adifAt<15*6e4)for(let[tt,Q]of(U.adif.items||[]).entries()){let ot=(Q.t?Q.t+". ":"")+Q.txt,E=new Set,Y=new Set,_t=_(ot);for(let St of ot.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))C[St[1]]&&E.add(St[1]);M.forEach((St,qt)=>{St.fams.size&&St.n.length>4&&_t.includes(_(St.n))&&(Y.add(qt),E.size||St.fams.forEach(ae=>E.add(ae)))}),W.some(St=>St.txt===ot)||W.push({id:"A"+tt,fams:E,stops:Y,txt:ot,when:U.adif.upd||"",src:"Adif",lvl:Q.lvl})}if(N.status==="fulfilled"||P.status==="fulfilled"||U.adif){U.alerts=W.sort((tt,Q)=>Q.when>tt.when?1:-1);try{Mm()}catch{}}ne(),eh(),ai=0,a()}let wt=()=>U.okVP&&Date.now()-U.okVP<9e4;function ne(){let g=f("#rtst"),S=f("#mode");if(S){let I=!!wt()&&Rt().live;S.classList.toggle("on",I),S.classList.toggle("pre",!I),S.textContent=I?"En directo":"Previsi\xF3n"}if(!g)return;U.url?U.err?g.textContent="No se pudo conectar con el puente ("+U.err+"). Se usa el horario.":wt()?g.innerHTML=`Conectado \xB7 ${U.vp.size} trenes con posici\xF3n real y ${U.delays.size} con retraso \xB7 actualizado a las ${new Date(U.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:g.textContent="Conectando\u2026":g.textContent=U.err||"Sin puente: trenes seg\xFAn horario oficial.";let T=f("#rturl");T&&T._shown!==U.url&&(T.value=U.url,T._shown=U.url)}f("#rtsave").onclick=()=>{let g=f("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(g&&!/^https?:\/\//.test(g)&&(g="https://"+g),!g){U.err="pega la direcci\xF3n de tu puente",ne();return}U.url=g;try{localStorage.setItem("rod_rt",g)}catch{}U.ok=0,U.err="",ne(),Mt()},f("#rtoff").onclick=()=>{U.url=Le;try{localStorage.removeItem("rod_rt")}catch{}h._h="",Mt()},setInterval(Mt,2e4),setTimeout(Mt,50);let te=g=>{if(!wt())return null;let S=U.delays.get(g.tid),T=U.vp.get(g.tid);return S==="X"?S:T&&T.pre&&T.preDl>=1?Math.max(typeof S=="number"?S:0,T.preDl*60):S??null},kt=new Set(v),he=new ns,B=new ns,Ne=new ki({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),_e=new ki({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),A=new Ys(he,Ne),x=new Ys(B,_e);x.renderOrder=20,A.renderOrder=21,A.frustumCulled=x.frustumCulled=!1,e.add(x,A);let X=!1;function et(){if(X||!w.length)return;X=!0,e.updateMatrixWorld(!0);let g=new Hs,S=w.map(P=>P.mesh),T=new O(0,0,-1);M.forEach(P=>{g.set(new O(P.w[0],P.w[1],50),T),P.ext=!g.intersectObjects(S,!1).length});let I=(P,N)=>M.findIndex($=>Math.hypot($.w[0]-P[0],$.w[1]-P[1])<.05);b.forEach(P=>{let N=I(P.p[0]),$=I(P.p[P.p.length-1]),W=tt=>(g.set(new O(tt[0],tt[1],50),T),!g.intersectObjects(S,!1).length);P.ext=(N>=0?M[N].ext:W(P.p[0]))&&($>=0?M[$].ext:W(P.p[P.p.length-1]))})}let lt=()=>{let g=new Set(kt.size<=2?kt:[]);try{xe&&xe.fam&&g.add(xe.fam)}catch{}return g},Et="";function At(){et();let g=[],S=[],T=new Set,I=new le,P=new le("#d2d0d0"),N=lt();Et=[...N].join();for(let $ of v)if(kt.has($))for(let W of q[$]){if(T.has(W))continue;T.add(W);let tt=b[W].p;I.set(C[$]),b[W].ext&&!N.has($)&&I.lerp(P,.72);for(let Q=0;Q+1<tt.length;Q++)g.push(tt[Q][0],tt[Q][1],D,tt[Q+1][0],tt[Q+1][1],D),S.push(I.r,I.g,I.b,I.r,I.g,I.b)}g.length||(g.push(0,0,-50,0,0,-50),S.push(0,0,0,0,0,0)),he.setPositions(g),he.setColors(S),B.setPositions(g),a()}At();let ct=g=>new Sn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new le(g)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),dt=new an,Ct=M.length,Yt=new Float32Array(Ct*3),Ot=new Float32Array(Ct*3),It=new Float32Array(Ct),jt=new Float32Array(Ct);M.forEach((g,S)=>{Yt[S*3]=g.w[0],Yt[S*3+1]=g.w[1],Yt[S*3+2]=D,Ot.set([1,1,1],S*3),It[S]=6,jt[S]=1.6}),dt.setAttribute("position",new We(Yt,3)),dt.setAttribute("fill",new We(Ot,3)),dt.setAttribute("size",new We(It,1)),dt.setAttribute("bw",new We(jt,1));let re=new zs(dt,ct("#1d2330"));re.renderOrder=22,re.frustumCulled=!1,e.add(re);function se(){let g=r.dist<45,S=lt();M.forEach((T,I)=>{let P=[...T.fams].some($=>kt.has($)),N=T.ext&&![...T.fams].some($=>S.has($))&&I!==Ye;It[I]=P?I===Ye?13:N?3:g?8:5:0,jt[I]=I===Ye?3:1.6}),dt.attributes.size.needsUpdate=!0,dt.attributes.bw.needsUpdate=!0}let k=600,Tt=new an,ft=new Float32Array(k*3),Lt=new Float32Array(k*3),zt=new Float32Array(k),gt=new Float32Array(k);Tt.setAttribute("position",new We(ft,3)),Tt.setAttribute("fill",new We(Lt,3)),Tt.setAttribute("size",new We(zt,1)),Tt.setAttribute("bw",new We(gt,1));let Zt=new Float32Array(k);Tt.setAttribute("ang",new We(Zt,1));let Jt=new Sn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new le("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Oe=new zs(Tt,Jt);Oe.renderOrder=24,Oe.frustumCulled=!1,e.add(Oe);let be=new an,Cn=new Float32Array(k*3),jn=new Float32Array(k*3),mo=new Float32Array(k),go=new Float32Array(k);be.setAttribute("position",new We(Cn,3)),be.setAttribute("fill",new We(jn,3)),be.setAttribute("size",new We(mo,1)),be.setAttribute("bw",new We(go,1));let tr=new zs(be,ct("#ffffff"));tr.renderOrder=23,tr.frustumCulled=!1,e.add(tr);function er(g,S){let T=b[g],I=S*T.L,P=0,N=T.c.length-1;for(;N-P>1;){let ot=P+N>>1;T.c[ot]<=I?P=ot:N=ot}let $=T.c[N]-T.c[P]||1,W=(I-T.c[P])/$,tt=T.p[P],Q=T.p[N];return[tt[0]+(Q[0]-tt[0])*W,tt[1]+(Q[1]-tt[1])*W]}let _o=g=>g*g*(3-2*g)*.35+g*.65;function Ts(g,S){let T=g.pat.t,I=g.pat.stops.length,P=T[2*I-2];if(S<T[1]-2||S>P+1)return null;if(S<=T[1])return{w:M[g.pat.stops[0]].w,at:0,next:0,moving:!1};for(let N=0;N<I-1;N++){let $=T[2*N+1],W=T[2*N+2],tt=T[2*N+3];if(S<=W){let Q=W>$?(S-$)/(W-$):1;return{w:er(g.pat.segs[N],_o(m(Q,0,1))),at:-1,next:N+1,prev:N,moving:!0}}if(S<=tt)return{w:M[g.pat.stops[N+1]].w,at:N+1,next:N+1,moving:!1}}return{w:M[g.pat.stops[I-1]].w,at:I-1,next:I-1,moving:!1}}function Xr(g){let S=t.days.indexOf(g.ymd),T=[];if(S<0)return{k:S,out:T};let I=(P,N)=>{for(let $ of P){if(!kt.has($.fam))continue;let W=te($);if(W==="X")continue;let tt=(W||0)/60,Q=g.min+N-$.t0-tt;if(Q<-2||Q>$.pat.t[$.pat.t.length-2]+1)continue;let ot=Ts($,Q);ot&&T.push({tr:$,p:ot,rel:Q,dl:tt,live:W!=null})}};return I(J[S],0),S>0&&I(J[S-1],1440),{k:S,out:T}}function qi(g,S,T,I){let P=g.pat.stops[0],N=S.dep0,$=null,W=(Q,ot)=>{for(let E of Q||[]){let Y=E.pat.stops,_t=Y.length;if(Y[_t-1]!==P||E===g)continue;let St=E.t0+E.pat.t[2*(_t-1)]-ot;if(St>N+5||St<N-120)continue;let qt=pt(E.pat),ae=Kt(qt,S.w,-1,1e9);if(ae.err>.6)continue;let Ae=qt.stopD,xt=E.pat.t,yt=Ae.findIndex(Ce=>Ce>ae.d);yt<0&&(yt=_t-1);let ee=yt===0?xt[1]:xt[2*yt-1]+(Ae[yt]>Ae[yt-1]?(ae.d-Ae[yt-1])/(Ae[yt]-Ae[yt-1]):1)*(xt[2*yt]-xt[2*yt-1]),fe=T-(E.t0+ee-ot);fe<-5||fe>120||(!$||Math.abs(fe)<Math.abs($.prevDl))&&($={prevTr:E,dPrev:ae.d,prevDl:fe,arrO:St+Math.max(0,fe)})}};if(W(J[I],0),I>0&&W(J[I-1],1440),!$)return{prevTr:null,preDl:0};let tt=Math.max(N,$.arrO+3);return{...$,depEst:tt,preDl:Math.max(0,tt-N)}}function qr(g,S,T){let I=g.pat.t,P=S.length;if(!(T>=0))return T<0?S[0]:null;for(let N=0;N<P;N++)if(T<=I[2*N+1]){if(T>=I[2*N]||N===0)return S[N];let $=I[2*N-1],W=I[2*N];return S[N-1]+(S[N]-S[N-1])*(W>$?(T-$)/(W-$):1)}return S[P-1]}let Yr=performance.now();function xo(){let g=[],S=Date.now()/1e3,T=performance.now(),I=Math.min(1,(T-Yr)/1e3);Yr=T;for(let P of U.vp.values()){let N=V.get(P.tid),$=N?N.fam:P.fam;if($&&C[$]&&!kt.has($))continue;let W=U.delays.get(P.tid),tt=typeof W=="number"?W/60:0,Q=Math.max(0,S-P.ts);P.mvTs!==P.ts&&((!P.mvW||Math.hypot(P.w[0]-P.mvW[0],P.w[1]-P.mvW[1])>.025)&&(P.mvW=P.w,P.mvAt=P.ts),P.mvTs=P.ts),P.still=P.ts-(P.mvAt||P.ts);let ot=P.w,E=-1;if(N){let _t=pt(N.pat),St=_t.stopD;if(P.dObs==null||P.obsAt!==P.ts){let yt=Kt(_t,P.w,-1,1e9);P.dObs=yt.d,P.err=yt.err,P.obsAt=P.ts}let qt=Rt(),ae=t.days.indexOf(qt.ymd),Ae=N.day===ae-1?1440:0,xt=N.t0+N.pat.t[1]-Ae;if(P.pre=qt.min+tt<xt-1&&(P.dObs>St[0]+.35||P.err>.6)&&!(P.st==="STOPPED_AT"&&P.sid===M[N.pat.stops[0]].id),P.dep0=xt,P.pre){if(P.atStop=-1,P.next=0,E=0,P.disp=null,P.prevAt!==P.ts&&(P.prevAt=P.ts,Object.assign(P,qi(N,P,qt.min,ae))),P.prevTr){let yt=pt(P.prevTr.pat);ot=Ht(yt,P.dPrev)}}else if(P.err<=.6){let yt=St.findIndex(Ce=>Ce>P.dObs+.08);yt<0&&(yt=St.length-1);let ee=St.reduce((Ce,Mn,sn)=>Math.abs(Mn-P.dObs)<Math.abs(St[Ce]-P.dObs)?sn:Ce,0);P.atStop=Math.abs(St[ee]-P.dObs)<.16?ee:-1,P.next=yt,E=yt;let fe=P.dObs;if(P.st==="STOPPED_AT"&&P.atStop>=0)fe=St[P.atStop];else if(yt>0){let Ce=(N.pat.t[2*yt]-N.pat.t[2*yt-1])*60,Mn=Ce>0?(St[yt]-St[yt-1])/Ce:0,sn=Rt(),Ge=t.days.indexOf(sn.ymd),Ri=N.day===Ge-1?1440:0,sr=qr(N,St,sn.min+Ri-N.t0-tt),Ln=P.dObs+Mn*Math.min(Q,60);sr!=null&&(Ln=Math.min(Ln,Math.max(P.dObs,sr))),fe=Math.max(P.dObs,Math.min(St[yt]-.03,Ln))}P.disp==null||Math.abs(P.disp-fe)>1.2?P.disp=fe:fe>P.disp&&(P.disp+=(fe-P.disp)*Math.min(1,I*1.5)),ot=Ht(_t,P.disp)}else if(P.err>2){let yt=Rt(),ee=t.days.indexOf(yt.ymd),fe=N.day===ee-1?1440:0,Ce=Ts(N,yt.min+fe-N.t0-tt);Ce&&(ot=Ce.w,P.est=!0,E=Ce.next),P.atStop=-1,P.next=Ce?Ce.next:-1}else P.atStop=-1,P.next=-1}let Y=P.pre?"":P.st==="STOPPED_AT"&&P.atStop>=0||P.atStop>=0&&P.still>30?"st":P.still>=90?"via":"";g.push({tr:N,v:P,w:ot,stop:Y,p:{w:ot},fam:$||"?",c:N?N.c:C[$]||"#6b7385",dl:tt,live:!0,real:!0,idx:E,age:Q,cancel:W==="X"})}return g}let Rn=new Map,mn=!1,ln=!1,Wn=[],ai=0,dn=null,xe=null,Ye=-1,gn=!1,Zr=0,y="";function H(g){let S=nt>0||wt()&&ut==null||!!xe,T=S?50:250;if(g-ai<T)return!1;ai=g,[...lt()].join()!==Et&&(At(),se());let I=Rt(),P=wt()&&I.live,N=P?{k:t.days.indexOf(I.ymd),out:xo()}:Xr(I);Wn=N.out;let $=new le,W=0,tt=0;for(let E of Wn){if(W>=k)break;ft[W*3]=E.p.w[0],ft[W*3+1]=E.p.w[1],ft[W*3+2]=D+.02;let Y=null;if(E.real&&E.v.pre&&E.v.prevTr)Y=Ht(pt(E.v.prevTr.pat),E.v.dPrev+.35);else if(E.real&&E.tr&&!E.v.pre&&E.v.err<=.6&&E.v.disp!=null&&!(E.v.st==="STOPPED_AT"&&E.v.atStop>=0))Y=Ht(pt(E.tr.pat),E.v.disp+.35);else if(!E.real&&E.p.moving){let Ae=E.tr.pat.t,xt=E.p.prev,yt=Ae[2*xt+1],ee=Ae[2*xt+2],fe=ee>yt?(E.rel-yt)/(ee-yt):1;Y=er(E.tr.pat.segs[xt],Math.min(1,_o(m(fe,0,1))+.04))}let _t=E.real?!!E.stop:!E.p.moving;if(E.broke=od(E),E.broke)Zt[W]=85;else if(_t)Zt[W]=75;else if(Y){let Ae=As(E.p.w),xt=As(Y),yt=xt[0]-Ae[0],ee=xt[1]-Ae[1];Zt[W]=Math.hypot(yt,ee)>.05?Math.atan2(yt,-ee):99}else Zt[W]=99;$.set(E.c||E.tr.c),Lt[W*3]=$.r,Lt[W*3+1]=$.g,Lt[W*3+2]=$.b;let St=E.tr?E.tr===xe:xe&&xe.vtid===E.v.tid;zt[W]=St?22:r.dist<45?17:14,gt[W]=St?3.5:2.2;let qt=E.real&&E.stop==="via"||!!E.broke,ae=E.cancel||E.broke?[.86,.15,.15]:E.dl>10?[.86,.15,.15]:E.dl>5?[.92,.48,.05]:E.dl>=1?[.98,.8,.08]:[.09,.64,.29];(E.live&&E.dl>=5||St||qt)&&(Cn[tt*3]=E.p.w[0],Cn[tt*3+1]=E.p.w[1],Cn[tt*3+2]=D+.01,jn.set(St?ae:qt?[.86,.15,.15]:[.98,.45,.09],tt*3),mo[tt]=zt[W]+(St?16+5*Math.sin(g/220):qt?10+3*Math.sin(g/400):8),go[tt]=St?2:3,tt++),W++}if(Tt.setDrawRange(0,W),be.setDrawRange(0,tt),["position","fill","size","bw"].forEach(E=>{Tt.attributes[E].needsUpdate=!0,be.attributes[E].needsUpdate=!0}),Tt.attributes.ang.needsUpdate=!0,dn){let E=Wn.find(Y=>Y.tr===dn);if(E){let Y=0,_t=innerHeight,St=h.style.display!=="none"&&!h.classList.contains("min")?h.getBoundingClientRect():null,qt=f("#rc").getBoundingClientRect();innerWidth<=640&&(St&&(Y=St.bottom),_t=Math.min(_t,qt.top));let ae=Y+(_t-Y)/2,Ae=ae-innerHeight/2,xt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=E.p.w[0]-Math.sin(r.yaw)*Ae*xt,s.ty=E.p.w[1]+Math.cos(r.yaw)*Ae*xt}else wt()&&Rt().live&&(dn=null)}let Q=Wt(I.min);Q!==y&&(y=Q,f("#ctime").textContent=Q),f("#ntr").textContent=String(Wn.length),f("#ntrl").textContent=P?"trenes de Rodalies con posici\xF3n real":"trenes previstos seg\xFAn el horario";{let E=kt.size<v.length?[...kt].sort(F).join(", "):"",Y=f("#ccount"),_t=`\u{1F686} ${Wn.length} ${P?"trenes con posici\xF3n real":"trenes previstos"}${E?` <small>\xB7 ${d(E)}</small>`:""}`;Y&&Y._t!==_t&&(Y.innerHTML=_t,Y._t=_t)}let ot=new Date;if(f("#cdate").textContent=I.live?"hora actual":nt?"simulaci\xF3n \xD7"+nt:ci?"en pausa":"hora elegida",N.k<0?f("#src").innerHTML=`<b style="color:#c2410c">Sin horarios para hoy.</b> Los datos guardados van del ${Pe(t.days[0])} al ${Pe(t.days[t.days.length-1])}: actualiza la app.`:P?f("#src").textContent=`En directo \xB7 posiciones de Renfe de hace ${Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...U.vp.values()].map(E=>E.ts),0)))} s`:f("#src").innerHTML='<b style="color:#c2410c">No es tiempo real:</b> '+(U.url?"sin conexi\xF3n con el puente, ":"conecta el puente para ver los trenes reales; ")+"posiciones calculadas con el horario",I.live){let E=Math.round(I.min),Y=f("#tsl");document.activeElement!==Y&&(Y.value=E<240?E+1440:E)}return Pn(),g-Zr>3e3&&(xe||Ye>=0||gn||ln)&&(Zr=g,Ze()),ne(),!0}let it=-1,Z=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),j=[],Pt=document.createElement("button");Pt.type="button",Pt.id="mbtn",Pt.title="Ver los nombres de los municipios",Pt.innerHTML="\u{1F3D8}\uFE0F<span>Municipios</span>",Pt.onclick=()=>{Z=!Z;try{localStorage.setItem("rod_mun",Z?"1":"")}catch{}Pt.classList.toggle("on",Z),a(),$t()},Pt.classList.toggle("on",Z),document.body.appendChild(Pt);let Gt=w.slice().sort((g,S)=>S.pop-g.pop);function Bt(g){if(g._a)return g._a;let S=null,T=0;for(let I of g.rings||[]){let P=I[0];if(!P)continue;let N=0,$=0,W=0;for(let tt=0,Q=P.length;tt<Q;tt+=2){let ot=P[tt],E=P[tt+1],Y=P[(tt+2)%Q],_t=P[(tt+3)%Q],St=ot*_t-Y*E;N+=St,$+=(ot+Y)*St,W+=(E+_t)*St}Math.abs(N)>T&&(T=Math.abs(N),S=[$/(3*N),W/(3*N)])}return g._a=S?[(S[0]-l)*o,(S[1]-c)*o]:[g.cx,g.cy]}let Xt=g=>g>=1e5?1:g>=2e4?2:g>=5e3?3:4,Qt=[0,7.6,6.7,6,5.4],ge=[0,17,15,13,12],Me=g=>g.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function $t(){let g=s.tilt<.06&&r.tilt<.08;Pt.classList.toggle("show",g);let S=0;if(Z&&g){let T=[...document.querySelectorAll(".plab, .slab")].filter(N=>N.offsetParent!==null||N.style.display==="block").map(N=>{let $=N.getBoundingClientRect();return[$.left-2,$.top-2,$.right+2,$.bottom+2]}).filter(N=>N[2]>N[0]),I=r.dist,P=I>160?5e4:I>130?2e4:I>105?8e3:I>80?3e3:I>62?800:0;for(let N of Gt){let $=Xt(N.pop);if(N.pop<P)break;let W=Bt(N);if(je.set(W[0],W[1],D).project(n),Math.abs(je.x)>1.02||Math.abs(je.y)>1.02)continue;let tt=(je.x*.5+.5)*innerWidth,Q=(-je.y*.5+.5)*innerHeight,ot=Me(N.name),E=ot.length*Qt[$]+8,Y=ge[$],_t=[tt-E/2,Q-Y/2,tt+E/2,Q+Y/2];if(T.some(qt=>_t[0]<qt[2]&&qt[0]<_t[2]&&_t[1]<qt[3]&&qt[1]<_t[3]))continue;T.push(_t);let St=j[S]||(j[S]=Object.assign(document.createElement("div"),{className:"mlab"}));St.isConnected||document.body.appendChild(St),St._n!==ot&&(St.textContent=ot,St._n=ot),St._t!==$&&(St.className="mlab t"+$,St._t=$),St.style.transform=`translate(${Math.round(tt)}px,${Math.round(Q)}px) translate(-50%,-50%)`,St.style.display="block",S++}}for(;S<j.length;S++)j[S].style.display="none"}let ve={at:0,hoy:null,ayer:null,err:""},en="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function Xe(){Date.now()-ve.at<5*6e4||(ve.at=Date.now(),Promise.all(["hoy","ayer"].map(g=>fetch(en+g+".json",{cache:"no-store"}).then(S=>S.ok?S.json():null).catch(()=>null))).then(([g,S])=>{ve.hoy=g,ve.ayer=S,ve.err=g?"":"sin datos",ln&&(h._h="",Ze())}))}let Ue=g=>g>=90?"g":g>=80?"y":g>=65?"w":"b",Ke={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},Vt=g=>g>10?Ke.b:g>5?Ke.w:g>=1?Ke.y:Ke.g,Qe=g=>(g>=.05?"+":"")+(Math.round(g*10)/10).toString().replace(".",",")+" min";function we(g,S,T){return`<div class="sbars">${g.map(I=>`<div class="sbar" title="${d(I.tip||"")}"><span class="sl">${I.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(I.w*100))}%;background:${I.c}"></i></span><b class="sv" style="color:${I.c===Ke.y?"#a16207":I.c}">${I.val}</b></div>`).join("")}</div>`}function $n(g){if(!g||g.length<2){let W=g&&g[0];return W?`<p class="snote">Primera foto del d\xEDa a las ${W.t}: ${Math.round(W.ok/W.n*100)} % puntuales de ${W.n} trenes. El gr\xE1fico aparece con la segunda foto.</p>`:'<p class="snote">A\xFAn no hay fotos de hoy.</p>'}let S=300,T=92,I=22,P=W=>I+W*(S-I-6)/(g.length-1),N=W=>6+(100-W)/100*(T-22),$=g.map((W,tt)=>[P(tt),N(W.n?W.ok/W.n*100:100),W]);return`<svg class="schart" viewBox="0 0 ${S} ${T}" role="img" aria-label="Porcentaje de trenes puntuales a lo largo del d\xEDa">
      ${[100,75,50].map(W=>`<line x1="${I}" x2="${S-4}" y1="${N(W)}" y2="${N(W)}" class="gl"/><text x="2" y="${N(W)+3}" class="ax">${W}%</text>`).join("")}
      <polyline points="${$.map(W=>W[0].toFixed(1)+","+W[1].toFixed(1)).join(" ")}" class="ln"/>
      ${$.map(([W,tt,Q])=>`<circle cx="${W.toFixed(1)}" cy="${tt.toFixed(1)}" r="5" class="pt"><title>${Q.t} \xB7 ${Q.n?Math.round(Q.ok/Q.n*100):100}% puntuales \xB7 ${Q.n} trenes \xB7 ${Q.d5} con +5 min \xB7 retraso medio ${Qe(Q.avg)}${Q.nd?` \xB7 ${Q.nd} sin dato`:""}</title></circle>`).join("")}
      <text x="${I}" y="${T-3}" class="ax">${g[0].t}</text><text x="${S-4}" y="${T-3}" class="ax" text-anchor="end">${g[g.length-1].t}</text></svg>`}function oi(){Xe();let g=Rt(),S=Wn.filter(W=>W.real&&wt()&&g.live),T=S.filter(W=>U.delays.has(W.v.tid)),I=T.length,P=S.length-I,N='<div class="tc sts" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>\u{1F4CA} Estad\xEDsticas</h3>';if(I){let W=T.filter(xt=>xt.dl<3).length,tt=T.filter(xt=>xt.dl>=5).length,Q=T.filter(xt=>xt.stop==="via").length,ot=Math.round(W/I*100);N+=`<small>Ahora mismo \xB7 ${I} trenes con retraso publicado por Renfe${P?` \xB7 ${P} sin dato (no se cuentan)`:""}</small><div class="kpis">
        <div class="kpi ${Ue(ot)}"><b>${ot}%</b><span>puntuales</span></div>
        <div class="kpi ${Ue(100-tt/I*100*2)}" title="${Math.round(tt/I*100)} % de los trenes"><b>${tt}</b><span>con 5 min<br>o m\xE1s</span></div>
        <div class="kpi ${Q===0?"g":Q<=2?"w":"b"}"><b>${Q}</b><span>detenidos<br>en la v\xEDa</span></div></div>`;let E=new Map;T.forEach(xt=>{let yt=xt.fam,ee=E.get(yt)||{n:0,ok:0,sum:0};ee.n++,ee.ok+=xt.dl<3,ee.sum+=Math.max(0,xt.dl),E.set(yt,ee)});let Y=[...E].filter(([xt])=>C[xt]).sort((xt,yt)=>xt[1].ok/xt[1].n-yt[1].ok/yt[1].n||yt[1].sum/yt[1].n-xt[1].sum/xt[1].n),_t=Y.filter(([,xt])=>xt.ok<xt.n),St=Y.filter(([,xt])=>xt.ok===xt.n);N+="<h4>Puntualidad por l\xEDnea ahora</h4>"+(_t.length?"":'<p class="snote">\u2713 Todas las l\xEDneas van puntuales.</p>')+we(_t.map(([xt,yt])=>({lab:Ai(xt),w:yt.ok/yt.n,c:Ke[Ue(yt.ok/yt.n*100)],val:`${Math.round(yt.ok/yt.n*100)}% <small>${Qe(yt.sum/yt.n)}</small>`,tip:`${xt}: ${yt.ok} de ${yt.n} trenes puntuales \xB7 retraso medio ${Qe(yt.sum/yt.n)}`})))+(St.length?`<p class="snote">Puntuales al 100 %: ${St.map(([xt])=>Ai(xt)).join(" ")}</p>`:"");let qt=new Map;T.forEach(xt=>{if(!xt.tr||xt.v.next==null||xt.v.next<0||xt.v.pre)return;let yt=xt.tr.pat.stops[xt.v.next],ee=qt.get(yt)||{n:0,sum:0};ee.n++,ee.sum+=Math.max(0,xt.dl),qt.set(yt,ee)});let ae=[...qt].filter(([,xt])=>xt.sum/xt.n>=1).sort((xt,yt)=>yt[1].sum/yt[1].n-xt[1].sum/xt[1].n).slice(0,8),Ae=ae.length?ae[0][1].sum/ae[0][1].n:1;N+='<h4>Estaciones con m\xE1s retraso ahora</h4><small class="snote">Retraso medio de los trenes que van a llegar a cada estaci\xF3n</small>'+(ae.length?we(ae.map(([xt,yt])=>({lab:`<span class="sn" data-gs="${xt}">${d(M[xt].n)}</span>`,w:yt.sum/yt.n/Ae,c:Vt(yt.sum/yt.n),val:`${Qe(yt.sum/yt.n)} <small>${yt.n} ${yt.n===1?"tren":"trenes"}</small>`,tip:`${M[xt].n}: ${yt.n} trenes llegando con ${Qe(yt.sum/yt.n)} de media`}))):'<p class="snote">\u2713 Ning\xFAn tren llega con retraso ahora mismo.</p>')}else N+='<p class="snote">Las estad\xEDsticas en directo necesitan el puente de tiempo real conectado.</p>';let $=ve.hoy;if(N+=`<button type="button" class="hmore" data-cols>${nn.on?"\u25BE Quitar columnas del mapa":"\u{1F3D9}\uFE0F Ver el retraso de cada estaci\xF3n en 3D"}</button>`,N+="<h4>Hoy, a lo largo del d\xEDa</h4>",$&&$.snaps){N+=$n($.snaps);let W=Object.entries($.st||{}).map(([ot,E])=>[ht.get(ot),E]).filter(([ot,E])=>ot!=null&&E.n>=3).map(([ot,E])=>[ot,E.sum/E.n/60,E]).filter(ot=>ot[1]>=1).sort((ot,E)=>E[1]-ot[1]).slice(0,8);if(W.length){let ot=W[0][1];N+='<h4>Estaciones con m\xE1s retraso hoy</h4><small class="snote">Retraso medio de los trenes al llegar \xB7 al menos 3 trenes medidos</small>'+we(W.map(([E,Y,_t])=>({lab:`<span class="sn" data-gs="${E}">${d(M[E].n)}</span>`,w:Y/ot,c:Vt(Y),val:`${Qe(Y)} <small>m\xE1x +${Math.round(_t.max/60)}</small>`,tip:`${M[E].n}: ${_t.n} trenes medidos hoy \xB7 ${_t.d5} con 5 min o m\xE1s \xB7 peor +${Math.round(_t.max/60)} min`})))}let tt=Object.entries($.lines||{}).filter(([ot,E])=>C[ot]&&E.n>=3).sort((ot,E)=>ot[1].ok/ot[1].n-E[1].ok/E[1].n);tt.length&&(N+="<h4>L\xEDneas hoy</h4>"+we(tt.map(([ot,E])=>({lab:Ai(ot),w:E.ok/E.n,c:Ke[Ue(E.ok/E.n*100)],val:`${Math.round(E.ok/E.n*100)}% <small>${Qe(E.sum/E.n/60)}</small>`,tip:`${ot} hoy: ${Math.round(E.ok/E.n*100)}% de las mediciones puntuales \xB7 peor retraso +${Math.round(E.max/60)} min`}))));let Q=$.upd?(Date.now()-Date.parse($.upd))/6e4:0;N+=`<small class="snote">${Q>40?`<b>\xDAltima foto hace ${Math.round(Q)} min</b> (GitHub a veces retrasa las tareas autom\xE1ticas) \xB7 `:""}Foto cada 15 min del tiempo real de Renfe \xB7 actualizado ${d(($.upd||"").slice(11,16))} \xB7 ${($.note||"").includes("Solo cuentan")?"solo cuentan los trenes con dato de retraso":"las fotos anteriores a las 12:20 contaban como puntuales los trenes sin dato"}</small>`}else N+=`<p class="snote">${ve.at?"El hist\xF3rico de hoy a\xFAn no est\xE1 disponible: se va reuniendo cada 15 min.":"Cargando\u2026"}</p>`;return N+"</div>"}let nn={on:!1,mesh:null};function rs(){let g=ve.hoy,S=[];if(g&&g.st)for(let[T,I]of Object.entries(g.st)){let P=ht.get(T);P!=null&&I.n>=2&&S.push([P,I.sum/I.n/60,I.n])}if(!S.length){let T=new Map;Wn.forEach(I=>{if(!I.real||!I.tr||I.v.next==null||I.v.next<0||I.v.pre||!U.delays.has(I.v.tid))return;let P=I.tr.pat.stops[I.v.next],N=T.get(P)||[0,0];N[0]+=Math.max(0,I.dl),N[1]++,T.set(P,N)}),T.forEach((I,P)=>S.push([P,I[0]/I[1],I[1]]))}return S}function Be(){if(nn.mesh&&(e.remove(nn.mesh),nn.mesh.geometry.dispose(),nn.mesh.material.dispose(),nn.mesh=null),!nn.on){a();return}let g=rs();if(!g.length){Xn("A\xFAn no hay datos de retraso por estaci\xF3n"),nn.on=!1;return}let S=new Ra(.32,.32,1,16);S.rotateX(Math.PI/2),S.translate(0,0,.5);let T=new Os({fog:!1}),I=new Ea(S,T,g.length),P=new De,N=new le;g.forEach(([$,W],tt)=>{let Q=.3+Math.min(W,40)*.3;P.makeScale(1,1,Q),P.setPosition(M[$].w[0],M[$].w[1],D),I.setMatrixAt(tt,P),N.set(W>10?"#dc2626":W>5?"#ea7a0c":W>=1?"#eab308":"#16a34a"),I.setColorAt(tt,N)}),I.renderOrder=25,I.frustumCulled=!1,e.add(I),nn.mesh=I,s.tilt<.5&&(s.tilt=.85),a()}let He=document.createElement("button");He.type="button",He.id="sbtn",He.title="Estad\xEDsticas de puntualidad",He.innerHTML="\u{1F4CA}<span>Estad\xEDsticas</span>",He.onclick=()=>{ln=!ln,ln&&(mn=gn=!1,xe=null,Ye=-1,dn=null,ve.at=0,se()),h._h="",Ze(),a()},document.body.appendChild(He);function Ti(){r.dist<45!=it<45&&(it=r.dist,se()),as(),$t()}let Fe=[],je=new O;function as(){let g=r.dist<30,S=0;if(g){let T=[];for(let I=0;I<Ct;I++)It[I]<4||(je.set(M[I].w[0],M[I].w[1],D).project(n),!(je.z>1||Math.abs(je.x)>1.05||Math.abs(je.y)>1.05)&&T.push([I,(je.x*.5+.5)*innerWidth,(-je.y*.5+.5)*innerHeight]));if(T.length<=70)for(let[I,P,N]of T){let $=Fe[S]||(Fe[S]=Object.assign(document.createElement("div"),{className:"slab"}));$.isConnected||document.body.appendChild($),$.textContent=M[I].n,$.dataset.i=I,$.style.display="block",$.style.transform=`translate(${Math.round(P+8)}px,${Math.round(N-7)}px)`,S++}}for(;S<Fe.length;S++)Fe[S].style.display="none"}function As(g){return je.set(g[0],g[1],D).project(n),[(je.x*.5+.5)*innerWidth,(-je.y*.5+.5)*innerHeight,je.z]}function rd(g,S,T,I){let P=null,N=T*T;for(let $ of Wn){let[W,tt,Q]=As($.p.w);if(Q>1)continue;let ot=(W-g)**2+(tt-S)**2;ot<N&&(N=ot,P={a:$})}if(P)return P;N=I*I;for(let $=0;$<Ct;$++){if(!It[$])continue;let[W,tt,Q]=As(M[$].w);if(Q>1)continue;let ot=(W-g)**2+(tt-S)**2;ot<N&&(N=ot,P={s:$})}return P}window.__rodTap=(g,S)=>{let T=null,I=1e9;for(let N of Fe){if(N.style.display==="none")continue;let $=N.getBoundingClientRect();if(g>=$.left-4&&g<=$.right+4&&S>=$.top-4&&S<=$.bottom+4){let W=Math.abs(S-($.top+$.bottom)/2)*4+(g-$.left);W<I&&(I=W,T=N)}}if(T)return window.__rodPickStation(+T.dataset.i),!0;let P=rd(g,S,24,18);return P&&P.a?(mn=!1,gn=!1,ln=!1,xe=P.a.tr||{vtid:P.a.v.tid},Ye=-1,dn=null,ir(),se(),Ze(),ai=0,a(),!0):P&&P.s!=null?(mn=!1,gn=!1,ln=!1,Ye=P.s,xe=null,dn=null,ir(),se(),Ze(),a(),!0):!1},window.__rodHover=(g,S)=>{let T=rd(g,S,14,10);if(T&&T.a){let I=T.a,P=I.tr?M[I.tr.pat.stops[I.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${I.c}">\u25A0</span> ${d(I.fam||I.tr&&I.tr.fam||"?")} \xB7 tren ${d(I.tr?I.tr.num:I.v.num)}</b><small>${P?"hacia "+d(P):""}${I.real?(I.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(I.dl)} min</b>`:" \xB7 puntual")+" \xB7 en directo":" \xB7 previsto"}</small>`}return T&&T.s!=null?`<b>${d(M[T.s].n)}</b><small>${[...M[T.s].fams].sort(F).join(" \xB7 ")}</small>`:null},window.__rodPickStation=g=>{mn=gn=ln=!1,xe=null,dn=null,Ye=g,ir(),se(),h._h="",Ze(),a()};{let g=f("#rc"),S=()=>{let T=g.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,T-64-10)+"px")};try{new ResizeObserver(S).observe(g)}catch{}addEventListener("resize",S),setTimeout(S,300)}window.__rodTick=H,window.__rodFrame=Ti,window.__rodResize=()=>{Ne.resolution.set(innerWidth,innerHeight),_e.resolution.set(innerWidth,innerHeight)},window.__rodResize();let li={st:-1,f:new Set},ad=g=>{let S=[...M[g].fams].sort(F);return`<div class="sfc">${S.length>1?`<button type="button" data-sf="" class="${li.f.size?"":"on"}">Todas</button>`:""}${S.map(T=>`<button type="button" data-sf="${d(T)}" class="ln ${li.f.size&&!li.f.has(T)?"off":""}${kt.has(T)?"":" hid"}" style="--c:${C[T]}">${d(T)}</button>`).join("")}</div>${S.some(T=>!kt.has(T))?"<small>Las l\xEDneas apagadas en el filtro general no se muestran</small>":""}`},om=g=>{let S=(g||"#6b7385").replace("#",""),T=parseInt(S.slice(0,2),16),I=parseInt(S.slice(2,4),16),P=parseInt(S.slice(4,6),16);return(.299*T+.587*I+.114*P)/255>.62?"#1d2330":"#fff"},Cs=(g,S)=>{let T=C[S]||"#6b7385";return`<span class="dst" style="background:${T};color:${om(T)}" title="${d(S||"")}">${d(g)}</span>`},vo=g=>{let S=M[g]&&M[g].id;return Qn.st.includes(S)?"\u{1F3E0} ":In.st.includes(S)?"\u{1F4BC} ":""},nr=g=>g>10?"d-hi":g>5?"d-md":"d-lo",lm=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,Jr={ref:null,m:new Map};function od(g){let S=String(g.tr?g.tr.num:g.v&&g.v.num||"");if(!S)return null;if(Jr.ref!==U.alerts){Jr.ref=U.alerts,Jr.m=new Map;for(let I of U.alerts)if(I.src==="Rodalies"&&lm.test(I.txt))for(let P of I.txt.matchAll(/\b(\d{4,6})\b/g))Jr.m.set(P[1],I)}let T=Jr.m.get(S);return T?{why:"aviso",txt:T.txt}:g.real&&g.stop==="via"&&g.v.still>=300?{why:"via",min:Math.round(g.v.still/60)}:null}let Ai=g=>`<span class="ln" style="--c:${C[g]}">${d(g)}</span>`;function ld(g,S){return S?g==="X"?'<span class="st late">Cancelado</span>':g>=60?`<span class="st late ${nr(g/60)}">Retraso de ${Math.round(g/60)} min</span>`:'<span class="st ok">Puntual</span>':'<span class="st sch">Seg\xFAn horario \xB7 sin dato en directo</span>'}function Ze(){if(!xe&&Ye<0&&!gn&&!mn&&!ln){h.innerHTML="",h._h="",h.style.display="none",h.classList.remove("peek"),ah();return}let g=Rt(),S="",T=wt()&&g.live,I=(E,Y)=>U.alerts.filter(_t=>[..._t.fams].some(St=>E.has(St))||Y!=null&&_t.stops.has(Y)),P=E=>E.length?`<div class="al">${E.slice(0,4).map(Y=>`<p>\u26A0\uFE0F ${Qc(Y)} ${[...Y.fams].sort(F).slice(0,6).map(Ai).join(" ")} ${d(Y.txt)} <small>${th(Y)}</small></p>`).join("")}${E.length>4?`<small>y ${E.length-4} avisos m\xE1s</small>`:""}</div>`:"",N=xe&&T?Wn.find(E=>E.real&&(xe.vtid?E.v.tid===xe.vtid:E.tr===xe)):null;if(ln)S=oi();else if(mn)S=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>Novedades</h3><small>${d(f("#ver").textContent.replace(" \xB7 novedades y fuentes",""))}</small><ul class="chg">${f("#chg").innerHTML||"<li>Versi\xF3n de prueba</li>"}</ul>
        <h3 style="margin-top:14px">Fuentes</h3><ul class="fts">
        <li><b>Renfe Operadora</b> \xB7 horarios (GTFS), posici\xF3n de los trenes y retrasos (GTFS-RT) \xB7 <a href="https://data.renfe.com" target="_blank" rel="noopener">data.renfe.com</a> \xB7 licencia CC BY 4.0</li>
        <li><b>Rodalies de Catalunya</b> (Generalitat) \xB7 salidas con v\xEDa, cancelaciones y avisos \xB7 <a href="https://rodalies.gencat.cat" target="_blank" rel="noopener">rodalies.gencat.cat</a></li>
        <li><b>Adif</b> \xB7 incidencias en la infraestructura de Catalu\xF1a \xB7 <a href="https://www.adif.es/viajeros/estado-de-la-red" target="_blank" rel="noopener">estado de la red</a> \xB7 \xA9 Adif</li>
        <li><b>OpenStreetMap</b> \xB7 trazado de las v\xEDas \xB7 <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">\xA9 colaboradores de OpenStreetMap</a>, licencia ODbL</li>
        </ul><small>Los datos se muestran tal como los publican sus fuentes. Ante cualquier duda, manda lo que diga el operador en la estaci\xF3n.</small></div>`;else if(gn){let E=U.alerts.filter(Y=>[...Y.fams].some(_t=>kt.has(_t))||!Y.fams.size);S=`<div class="tc" style="--c:#c2410c"><button class="x" data-cx>\xD7</button><h3>Avisos e incidencias</h3><small>${E.length} avisos activos para las l\xEDneas que tienes visibles</small>${E.map(Y=>`<div class="al"><p>${Qc(Y)} ${[...Y.fams].sort(F).map(Ai).join(" ")} <small>${th(Y)}</small></p><p>${d(Y.txt)}</p></div>`).join("")||"<p>Sin avisos activos.</p>"}<small>Fuente: avisos oficiales de Rodalies de Catalunya, incidencias en la v\xEDa de Adif (gestor de la infraestructura)${U.alertsTs&&Date.now()/1e3-U.alertsTs<6*3600?" y de Renfe":` \xB7 los avisos GTFS de Renfe no se muestran: Renfe no los actualiza desde el ${U.alertsTs?new Date(U.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(N){let E=N.v,Y=N.tr,_t=Ge=>d(M[Y.pat.stops[Ge]].n),St=Y?Y.pat.stops.length:0,qt=ht.get(E.sid),ae=qt!=null?d(M[qt].n):d(E.sid),Ae=Y&&E.atStop>=0?_t(E.atStop):"",xt=Y&&E.next>=0?_t(E.next):ae,yt=Y&&E.next>0?_t(E.next-1):"",ee=N.broke||od(N),fe=ee?`<b class="stopv">\u26A0\uFE0F ${ee.why==="aviso"?"Tren averiado seg\xFAn Rodalies":`Posible aver\xEDa: detenido en la v\xEDa desde hace ${ee.min} min`}</b>${Y&&yt?` \xB7 entre ${yt} y <b>${xt}</b>`:""}`:N.stop==="via"&&Y?`<b class="stopv">\u23F8 Detenido</b> ${yt?`entre ${yt} y <b>${xt}</b>`:`antes de <b>${xt}</b>`} desde hace ${Math.max(1,Math.round(E.still/60))} min`:E.pre&&Y?E.prevTr?`A\xFAn no ha empezado este viaje. Est\xE1 terminando el tren <b>${d(E.prevTr.num)}</b> hacia <b>${_t(0)}</b>${E.prevDl>=1?` con <b>+${Math.round(E.prevDl)} min</b>`:""}: llega hacia las <b>${Wt(E.arrO)}</b> y saldr\xEDa hacia las <b>${Wt(E.depEst)}</b>${E.preDl>=1?` (horario ${Wt(E.dep0)})`:""}`:`A\xFAn no ha empezado este viaje: va hacia <b>${_t(0)}</b>, de donde sale a las <b>${Wt(E.dep0+N.dl)}</b>`:E.st==="STOPPED_AT"&&Ae?`Parado en <b>${Ae}</b>`:Ae&&E.next>=0&&E.atStop!==E.next?`Saliendo de <b>${Ae}</b> hacia <b>${xt}</b>`:yt?`Entre ${yt} y <b>${xt}</b>`:`Hacia <b>${xt}</b>`,Ce=U.tu.get(E.tid),Mn=Ce&&Ce.next&&Y&&E.next>=0&&Ce.next.sid===M[Y.pat.stops[E.next]].id&&Ce.next.t?new Date(Ce.next.t*1e3).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"",sn=[];if(Y){let Ge=N.idx>=0?N.idx:0,Ri=E.pre?Math.max(N.dl,E.preDl||0):N.dl,sr=Ln=>Y.t0+Y.pat.t[Ln]+Ri;for(let Ln=Ge;Ln<St;Ln++)sn.push(`<li${vo(Y.pat.stops[Ln])?' class="mine"':""}><b>${Wt(sr(Ln===0?1:2*Ln))}</b><span title="${_t(Ln)}">${vo(Y.pat.stops[Ln])}${_t(Ln)}</span>${Ri>=1?`<em class="dl ${nr(Ri)}">${E.pre?"\u2248":""}+${Math.round(Ri)}</em>`:""}</li>`)}S=`<div class="tc" style="--c:${N.c}"><button class="x" data-cx>\xD7</button><div>${Ai(N.fam)}<b>Tren ${d(Y?Y.num:E.num)}</b> <span class="lv">\u25CF en directo</span></div>${Y?`<h3 class="rt"><span class="o" title="${_t(0)}">${_t(0)}</span><span class="ar">\u2192</span>${Cs(M[Y.pat.stops[St-1]].n,Y.fam)}</h3>`:""}
        <p>${fe}${Mn?` \xB7 prevista ${Mn}`:""}${E.plat?` \xB7 <b>and\xE9n ${d(E.plat)}</b>`:""}</p><p>${E.pre&&E.prevTr?E.preDl>=1?`<span class="st late">Saldr\xE1 con unos ${Math.round(E.preDl)} min de retraso (estimado)</span>`:'<span class="st ok">Le da tiempo a salir a su hora (estimado)</span>':ld(U.delays.get(E.tid),U.delays.has(E.tid))}</p>
        <small>${E.pre?`Renfe ya le pone el n\xFAmero de su pr\xF3ximo viaje. Posici\xF3n real enviada hace ${Math.round(N.age)} s`:E.est?"Renfe da una posici\xF3n que no encaja con su recorrido: se muestra donde deber\xEDa estar seg\xFAn el horario y su retraso":`Posici\xF3n enviada por Renfe hace ${Math.round(N.age)} s${N.age>120?" \xB7 <b>sin actualizar</b>":""}`}</small>
        ${sn.length?`${N.dl>=1||E.pre&&E.preDl>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${sn.join("")}</ol>`:""}${P(I(new Set([N.fam])))}
        ${Mo(Y?Y.num:E.num,"",N.fam)}${Y?`<div class="rtb"><button type="button" data-follow>${dn===Y?"Dejar de seguir":"Seguir este tren"}</button></div>`:""}</div>`}else if(xe&&T)S=`<div class="tc" style="--c:#6b7385"><button class="x" data-cx>\xD7</button><h3>Tren ${d(xe.num||xe.vtid||"")}</h3><p>Renfe no da ahora la posici\xF3n de este tren: puede haber terminado su viaje, no haber salido o no estar circulando.</p></div>`;else if(xe){let E=xe,Y=E.pat,_t=Y.stops.length,St=te(E),qt=typeof St=="number"?St/60:0,ae=t.days.indexOf(g.ymd),Ae=E.day===ae-1?1440:0,xt=g.min+Ae-E.t0-qt,yt=Ts(E,xt),ee=Ge=>E.t0+Y.t[Ge]+qt,fe=Ge=>d(M[Y.stops[Ge]].n),Ce="Fuera de servicio ahora";yt&&(Ce=yt.moving?`Circulando hacia <b>${fe(yt.next)}</b> \xB7 llega ${Wt(ee(2*yt.next))}`:yt.at===_t-1?`Ha llegado a <b>${fe(_t-1)}</b>`:`Parado en <b>${fe(yt.at)}</b> \xB7 sale ${Wt(ee(2*yt.at+1))}`);let Mn=yt?yt.next:0,sn=[];for(let Ge=Mn;Ge<_t;Ge++)sn.push(`<li${vo(Y.stops[Ge])?' class="mine"':""}><b>${Wt(ee(2*Ge))}</b><span title="${fe(Ge)}">${vo(Y.stops[Ge])}${fe(Ge)}</span>${qt>=1?`<em class="dl ${nr(qt)}">+${Math.round(qt)}</em>`:""}</li>`);S=`<div class="tc" style="--c:${E.c}"><button class="x" data-cx>\xD7</button><div>${Ai(E.fam)}<b>Tren ${d(E.num)}</b> <span class="pv">previsi\xF3n</span></div><h3 class="rt"><span class="o" title="${fe(0)}">${fe(0)}</span><span class="ar">\u2192</span>${Cs(M[E.pat.stops[_t-1]].n,E.fam)}</h3>
        <p>${Ce}</p><p>${ld(St,St!=null)}</p><small>Sale ${Wt(E.t0+Y.t[1])} \xB7 llega ${Wt(E.t0+Y.t[2*_t-2])} (horario)</small>
        ${qt>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${sn.join("")}</ol>${Mo(E.num,"",E.fam)}<div class="rtb"><button type="button" data-follow>${dn===E?"Dejar de seguir":"Seguir este tren"}</button></div></div>`}else{let E=Ye,Y=t.days.indexOf(g.ymd),_t=[];li.st!==E&&(li.st=E,li.f.clear());let St=xt=>(!C[xt]||kt.has(xt))&&(!li.f.size||li.f.has(xt));if(Y>=0){let xt=(yt,ee)=>{for(let fe of yt){if(!St(fe.fam))continue;let Ce=fe.pat.stops.indexOf(E);if(Ce<0||Ce===fe.pat.stops.length-1)continue;let Mn=te(fe),sn=typeof Mn=="number"?Mn/60:0,Ge=fe.t0+fe.pat.t[2*Ce+1]-ee;Ge+sn<g.min-1||Ge>g.min+360||_t.push({tr:fe,t:Ge,dl:sn,d:Mn,on:U.vp.has(fe.tid),past:g.min>fe.t0+fe.pat.t[1]-ee+2})}};xt(J[Y],0),Y>0&&xt(J[Y-1],1440)}_t.sort((xt,yt)=>xt.t+xt.dl-yt.t-yt.dl);let qt=M[E].id,ae=Rn.get(qt);T&&U.url&&(!ae||Date.now()-ae.at>3e4)&&!ae?.loading&&(Rn.set(qt,{...ae||{},loading:!0,at:ae?ae.at:0}),mt(U.url.replace(/\/+$/,""),"/departures.json?stationId="+qt).then(xt=>{Rn.set(qt,{at:Date.now(),d:xt}),Ye===E&&(h._h="",Ze())}).catch(()=>Rn.set(qt,{at:Date.now(),err:1})));let Ae=T&&ae&&ae.d&&Array.isArray(ae.d.trains)?ae.d.trains:null;if(Ae){let xt=new Map([...U.vp.values()].map(ee=>[String((V.get(ee.tid)||{}).num||ee.num),ee])),yt=Ae.filter(ee=>St((ee.line||{}).id||"")).slice(0,40).map(ee=>{let fe=(ee.departureDateHourSelectedStation||"").slice(11,16),Ce=(ee.line||{}).id||"",Mn=String(ee.commercialNumber||ee.technicalNumber||""),sn=xt.get(Mn),Ge=sn?U.delays.get(sn.tid):null;return`<li class="go" data-gt="${d(Mn)}|${sn?d(sn.tid):""}"><b>${d(fe)}</b>${C[Ce]?Ai(Ce):`<span class="ln" style="--c:#6b7385">${d(Ce||"?")}</span>`}<span>${Cs((ee.destinationStation||{}).name||"",Ce)}${ee.trainObservations?` \xB7 <i>${d(ee.trainObservations)}</i>`:""}</span>${ee.trainCancelled?"<em>cancelado</em>":typeof Ge=="number"&&Ge>=60?`<em class="dl ${nr(Ge/60)}">+${Math.round(Ge/60)}</em>`:""}${ee.platformSelectedStation?`<i class="via">v\xEDa ${d(ee.platformSelectedStation)}</i>`:""}${sn?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");S=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(M[E].n)}</h3>${ad(E)}${Mo("",M[E].id,"")}
          <small style="margin-top:6px">Pr\xF3ximas salidas oficiales de Rodalies \xB7 hora prevista \xB7 \u25CF tren circulando</small>
          <ol>${yt||"<li><span>Rodalies no anuncia salidas ahora mismo</span></li>"}</ol>${P(I(M[E].fams,E))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}else S=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(M[E].n)}</h3>${ad(E)}${Mo("",M[E].id,"")}
        <small style="margin-top:6px">${T&&U.url?"Cargando salidas oficiales\u2026 mientras, ":""}Pr\xF3ximas salidas${T?" \xB7 hora prevista con el retraso actual \xB7 \u25CF tren circulando":" \xB7 previsi\xF3n seg\xFAn horario (sin tiempo real)"}</small>
        <ol>${_t.slice(0,40).map(xt=>`<li class="go" data-gt="${d(xt.tr.num)}|${d(xt.tr.tid)}"><b>${Wt(xt.t+xt.dl)}</b>${Ai(xt.tr.fam)}<span>${Cs(M[xt.tr.pat.stops[xt.tr.pat.stops.length-1]].n,xt.tr.fam)}</span>${xt.d==="X"?"<em>cancelado</em>":xt.dl>=1?`<em class="dl ${nr(xt.dl)}">+${Math.round(xt.dl)}</em>`:""}${T?xt.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':xt.past?'<i class="nos" title="deber\xEDa haber salido y Renfe no da su posici\xF3n">sin se\xF1al</i>':'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||"<li><span>No hay salidas en las pr\xF3ximas 6 horas</span></li>"}</ol>${P(I(M[E].fams,E))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}let $=h.scrollTop;if(h._h!==S&&(h.innerHTML=S,h._h=S,h.scrollTop=$),h.style.display="flex",h.classList.remove("min"),ah(),innerWidth<=640){let E=h.querySelector(".tc");if(E&&!E.querySelector(".mn")){let Y=document.createElement("button");Y.type="button",Y.className="mn",Y.setAttribute("aria-label","Encoger o ampliar la ficha"),Y.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",Y.onclick=_t=>{_t.stopPropagation(),h.classList.toggle("peek"),Y.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",h.scrollTop=0},E.appendChild(Y)}}else h.classList.remove("peek");let W=f("#rc");if(innerWidth<=640&&!W.classList.contains("min")&&!Ze.done&&(Ze.done=1,f("#rcgrab").click()),innerWidth<=640){let E=f("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(E+8)+"px",h.style.width="calc(100vw - 76px)",h.style.maxHeight=Math.max(140,f("#rc").getBoundingClientRect().top-E-16)+"px"}else if(innerHeight<=500){let E=f("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(E+8)+"px",h.style.width="min(290px, 40vw)",h.style.maxHeight=innerHeight-E-20+"px"}else h.style.top="",h.style.width=ln?"390px":"300px",h.style.maxHeight="";let Q=h.querySelector("[data-cx]");Q&&(Q.onclick=E=>{E.stopPropagation(),Ze.done=0,gn=!1,mn=!1,ln=!1,xe=null,Ye=-1,dn=null,se(),Ze(),ai=0,a()}),ud(h);{let E=h.querySelector("[data-cols]");E&&(E.onclick=()=>{nn.on=!nn.on,Be(),h._h="",Ze()})}h.querySelectorAll("[data-gs]").forEach(E=>E.onclick=()=>{let Y=+E.dataset.gs;ln=!1,window.__rodPickStation(Y),Object.assign(s,{tx:M[Y].w[0],ty:M[Y].w[1],dist:Math.min(s.dist,20)}),a()}),h.querySelectorAll("[data-sf]").forEach(E=>E.onclick=Y=>{Y.stopPropagation();let _t=E.dataset.sf;_t?li.f.has(_t)?li.f.delete(_t):li.f.add(_t):li.f.clear(),h._h="",Ze()}),h.querySelectorAll("[data-gt]").forEach(E=>E.onclick=()=>{let[Y,_t]=E.dataset.gt.split("|"),St=V.get(_t);bd({num:Y,tid:U.vp.has(_t)?_t:"",tr:St||null})}),h.querySelectorAll("[data-sethome]").forEach(E=>E.onclick=()=>oh(Ye,E.dataset.sethome));let ot=h.querySelector("[data-follow]");ot&&(ot.onclick=()=>{dn=dn===xe?null:xe,dn?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(h.classList.add("peek"),h.scrollTop=0,f("#rc").classList.contains("min")||f("#rcgrab").click())):h.classList.remove("peek"),h._h="",Ze(),a()})}window.__rodCard=Ze;try{localStorage.getItem("rod_inf")==="mini"&&f("#inf").classList.add("mini")}catch{}f("#inft").onclick=()=>{let g=f("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",g?"mini":"")}catch{}(xe||Ye>=0||gn||mn)&&(h._h="",Ze())},f("#ver").onclick=()=>{mn=!0,xe=null,Ye=-1,gn=!1,h._h="",Ze()};let yo={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},cm=["vacio","lleno","petado","parado","calor","abordo"],hm=["gente","retraso","cancel","ascensor","via"],um={vacio:"Va con sitio",lleno:"Va lleno",petado:"Muy lleno, cuesta subir",parado:"Parado sin moverse",calor:"Sin aire acondicionado",abordo:"Incidencia a bordo",gente:"Mucha gente esperando",retraso:"Anuncian retraso por megafon\xEDa",cancel:"Anuncian tren cancelado",ascensor:"Ascensor o escalera averiados",via:"Incidencia en la estaci\xF3n"},So=g=>(U.tipos||um)[g]||g,jc=(g,S)=>(U.rep||[]).filter(T=>g&&T.num===String(g)&&!T.sid||S&&T.sid===String(S)&&!T.num||g&&S&&T.num===String(g)&&T.sid===String(S)),cd=g=>{let S=Math.round((Date.now()+(U.repSkew||0)-g.at)/6e4);return S<1?"ahora":`hace ${S} min`},Kr=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function Mo(g,S,T){if(!U.url||!U.repOk)return"";let I=jc(g,S),P=g?cm:hm;return`<div class="crowd"><small>\u{1F465} Lo que dicen los viajeros${I.length?"":" \xB7 nadie ha avisado todav\xEDa"}</small>${I.map(N=>`<p><span>${yo[N.kind]||"\u2022"} <b>${d(So(N.kind))}</b> <small>${N.up>1?N.up+" viajeros \xB7 ":""}${cd(N)}</small></span>${Kr.has(N.id)?"<small>\u2713</small>":`<button type="button" data-rv="${N.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${N.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${g?"\xBFVas en este tren? Avisa a los dem\xE1s":"\xBFEst\xE1s en la estaci\xF3n? Avisa a los dem\xE1s"}</summary><div class="ckb">${P.map(N=>`<button type="button" data-rk="${N}" data-rn="${d(g||"")}" data-rs="${d(S||"")}" data-rl="${d(T||"")}">${yo[N]} ${d(So(N))}</button>`).join("")}</div><small>An\xF3nimo \xB7 se borra solo en 90 min \xB7 sin texto libre</small></details></div>`}async function hd(g,S){try{let I=await(await fetch(U.url.replace(/\/+$/,"")+S,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)})).json();if(!I.ok){Xn(I.err||"No se ha podido enviar");return}if(I.id){Kr.add(I.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Kr].slice(-300)))}catch{}}Xn(S==="/vote"?"Gracias, voto guardado":I.n>1?`Gracias \xB7 ya sois ${I.n} avisando de lo mismo`:"Gracias, aviso enviado");let P=await mt(U.url.replace(/\/+$/,""),"/reports.json");P&&P.items&&(U.rep=P.items),h._h="",Ze(),Pn(!0)}catch{Xn("Sin conexi\xF3n con el puente")}}function ud(g){g.querySelectorAll("[data-rk]").forEach(S=>S.onclick=T=>{T.stopPropagation(),S.disabled=!0,hd({kind:S.dataset.rk,num:S.dataset.rn,sid:S.dataset.rs,line:S.dataset.rl},"/report")}),g.querySelectorAll("[data-rv]").forEach(S=>S.onclick=T=>{T.stopPropagation();let[I,P]=S.dataset.rv.split(":");Kr.add(+I);try{localStorage.setItem("rod_votes",JSON.stringify([...Kr].slice(-300)))}catch{}hd({id:+I,v:+P},"/vote")})}let dd=0;function Xn(g){let S=f("#toast");S||(S=document.createElement("div"),S.id="toast",document.body.appendChild(S)),S.textContent=g,S.className="on",clearTimeout(dd),dd=setTimeout(()=>{S.className=""},2600)}function Qc(g){return g.src?`<b class="asrc ${g.src==="Adif"?"adif":""}">${g.src==="Adif"?"Adif \xB7 v\xEDa":d(g.src)}</b>`:""}function th(g){if(!g.when)return"";let[S,T]=g.when.split("T"),I=Te(new Date),P=I.ymd.slice(0,4)+"-"+I.ymd.slice(4,6)+"-"+I.ymd.slice(6,8);if(S===P&&T){let N=Math.round(I.min-(+T.slice(0,2)*60+ +T.slice(3,5)));return N<1?"ahora":N<60?`hace ${N} min`:`hoy a las ${T.slice(0,5)}`}return`${S.slice(8,10)}/${S.slice(5,7)}${T?" "+T.slice(0,5):""}`}function eh(){let g=f("#alr");if(!g)return;let S=U.alerts.filter(T=>[...T.fams].some(I=>kt.has(I))).length;g.hidden=!S,g.textContent=`\u26A0\uFE0F ${S} aviso${S===1?"":"s"}`}{let g=f("#alrslot");g&&g.appendChild(f("#alr"))}f("#alr").onclick=()=>{mn=!1,gn=!0,xe=null,Ye=-1,Ze()},f("#wcopy").onclick=async()=>{let g=f("#wcode").textContent;try{await navigator.clipboard.writeText(g),f("#wcopy").textContent="Copiado \u2713"}catch{let T=document.createRange();T.selectNodeContents(f("#wcode"));let I=getSelection();I.removeAllRanges(),I.addRange(T),f("#wcopy").textContent="Selecciona y copia"}setTimeout(()=>f("#wcopy").textContent="Copiar c\xF3digo",2500)};let dm=ht.get("71801");function fm(g,S){let T=M[g].id,I=Rn.get(T);!(wt()&&U.url)||I&&(I.loading||Date.now()-I.at<3e4)||(Rn.set(T,{...I||{},loading:!0,at:I?I.at:0}),mt(U.url.replace(/\/+$/,""),"/departures.json?stationId="+T).then(P=>{Rn.set(T,{at:Date.now(),d:P}),S&&S()}).catch(()=>Rn.set(T,{at:Date.now(),err:1})))}let pm=g=>+g.slice(0,2)*60+ +g.slice(3,5),jr={k:-2,m:null};function mm(g){let S=t.days.indexOf(Rt().ymd);if(jr.k!==S){jr.k=S,jr.m=new Map;for(let T of J[S]||[])jr.m.set(String(T.num),T)}return jr.m.get(String(g))||null}function nh(g,S){let T=Rt(),I=wt()&&T.live&&!S,P=Rn.get(M[g].id),N=[],$=new Map([...U.vp.values()].map(tt=>[String((V.get(tt.tid)||{}).num||tt.num),tt]));if(I&&P&&P.d&&Array.isArray(P.d.trains))for(let tt of P.d.trains){let Q=(tt.departureDateHourSelectedStation||"").slice(11,16);if(!Q)continue;let ot=String(tt.commercialNumber||tt.technicalNumber||""),E=$.get(ot),Y=E?U.delays.get(E.tid):null,_t=Math.max(typeof Y=="number"?Math.max(0,Y/60):0,E&&E.pre&&E.preDl||0),St=pm(Q);St<T.min-720&&(St+=1440),N.push({sm:St,est:St+_t,dl:_t,fam:(tt.line||{}).id||"",dest:(tt.destinationStation||{}).name||"",destId:(tt.destinationStation||{}).id||"",plat:tt.platformSelectedStation||"",cancel:!!tt.trainCancelled,obs:tt.trainObservations||"",live:!!E,num:ot,tid:E?E.tid:"",tr:E&&V.get(E.tid)||mm(ot),src:"oficial"})}else{let tt=t.days.indexOf(T.ymd);if(tt<0)return N;let Q=(ot,E)=>{for(let Y of ot){let _t=Y.pat.stops.indexOf(g);if(_t<0||_t===Y.pat.stops.length-1)continue;let St=te(Y),qt=typeof St=="number"?Math.max(0,St/60):0,ae=Y.t0+Y.pat.t[2*_t+1]-E;if(ae+qt<T.min-1||ae>T.min+360)continue;let Ae=Y.pat.stops[Y.pat.stops.length-1];N.push({sm:ae,est:ae+qt,dl:qt,fam:Y.fam,dest:M[Ae].n,destId:M[Ae].id,plat:"",cancel:St==="X",obs:"",live:U.vp.has(Y.tid),num:Y.num,tid:Y.tid,tr:Y,src:"horario"})}};Q(J[tt],0),tt>0&&Q(J[tt-1],1440)}let W=N.filter(tt=>tt.est>=T.min-.5).sort((tt,Q)=>tt.est-Q.est);if(!W.length&&N.length&&N[0].src==="oficial"&&!S)return nh(g,!0);if(W.length&&W[0].src==="oficial"){let tt=Math.max(...W.map(ot=>ot.sm)),Q=new Set(W.map(ot=>ot.num));W=W.concat(nh(g,!0).filter(ot=>ot.sm>tt&&!Q.has(String(ot.num))))}return W}let fd=(g,S,T,I)=>{let P={key:g,ico:S,name:T,st:[],i:0,walk:10,open:!1};try{let N=JSON.parse(localStorage.getItem("rod_"+g)||"null");N&&Object.assign(P,N)}catch{}return!P.st.length&&I&&(P.st=I),P},Qn=fd("home","\u{1F3E0}","Casa",["79410","79412"]),In=fd("work","\u{1F4BC}","Trabajo",null),Ie={key:"near",ico:"\u{1F4CD}",name:"Cerca de ti",st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},Qr=[Ie,Qn,In];Qn.open=!1,In.open=!1;function gm(g,S){let T=at(g,S),I=at(g,S+.009);return 1/Math.hypot(I[0]-T[0],I[1]-T[1])}function ih(g){if(!navigator.geolocation){Ie.err="Este navegador no da la ubicaci\xF3n",Pn(!0);return}navigator.geolocation.getCurrentPosition(S=>{let{longitude:T,latitude:I}=S.coords,P=at(T,I),N=gm(T,I),$=M.map((ot,E)=>[E,Math.hypot(ot.w[0]-P[0],ot.w[1]-P[1])*N]).filter(([ot])=>M[ot].fams.size).sort((ot,E)=>ot[1]-E[1]),W=$.filter(([,ot],E)=>E===0||ot<Math.max(2.5,$[0][1]*1.6)).slice(0,3),tt=Ie.st[0]!==M[W[0][0]].id;Ie.st=W.map(([ot])=>M[ot].id),Ie.dist=Object.fromEntries(W.map(([ot,E])=>[M[ot].id,E])),Ie.fix=Date.now(),Ie.err="",tt&&(Ie.i=0);let Q=[Qn,In].find(ot=>ot.st.includes(Ie.st[0])&&Ie.dist[Ie.st[0]]<1.5);g&&(Q?Q.open=!0:Ie.open=!0),Pn(!0)},S=>{Ie.err=S.code===1?"Sin permiso de ubicaci\xF3n":"No se ha podido obtener la ubicaci\xF3n",g&&(Qn.open=!!Qn.st.length),Pn(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let _m=g=>Math.max(1,Math.round(g*1.3/.08));setTimeout(()=>ih(!0),400),setInterval(()=>{document.hidden||ih(!1)},12e4);let ta=g=>{try{localStorage.setItem("rod_"+g.key,JSON.stringify({st:g.st,i:g.i,walk:g.walk,open:g.open}))}catch{}},pd=g=>g.st.length?ht.get(g.st[g.i]||g.st[0]):null;function xm(g,S,T,I){if(I&&S.tr){let $=S.tr.pat.stops,W=$.indexOf(g);if(W>=0&&$.slice(W+1).some(tt=>I.has(tt)))return"to"}if(I&&S.tr)return"out";let P=ht.get(S.destId)??M.findIndex($=>$.n===S.dest);if(P<0||P==null||T==null)return"otros";let N=$=>Math.hypot(M[$].w[0]-M[T].w[0],M[$].w[1]-M[T].w[1]);return N(P)<N(g)?"to":"out"}let sh=g=>g<1?"ahora":g<60?Math.round(g)+" min":Math.floor(g/60)+" h "+String(Math.round(g%60)).padStart(2,"0"),md=0,vm=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i;function ym(g,S,T){let I=pd(g);if(g===Ie){if(I==null)return`<div class="hplace"><button type="button" class="hhead hnew" data-hloc><span class="hico">\u{1F4CD}</span><span class="htit"><b>Cerca de ti</b><small>${Ie.err?d(Ie.err)+" \xB7 toca para reintentar":"Buscando tu ubicaci\xF3n\u2026"}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Qn,In].find(pe=>pe.st.includes(Ie.st[0])&&Ie.dist[Ie.st[0]]<1.5))return"";g.walk=_m(Ie.dist[g.st[g.i]]||0)}if(I==null){let Ft=Ie.st.length?ht.get(Ie.st[0]):null,pe=g===In?Qn:In,hn=Ft!=null&&!pe.st.includes(Ie.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${g.ico}</span><span class="htit"><b>${g.name}</b><small>${hn?`Est\xE1s en <b>${d(M[Ft].n)}</b>`:"Elige tu estaci\xF3n"}</small></span>${hn?`<button type="button" class="hpick" data-hnear="${g.key}">Usar esta</button>`:""}<button type="button" class="hpick alt" data-hset="${g.key}">${hn?"Otra\u2026":"Elegir"}</button></div></div>`}fm(I,()=>Pn(!0));let P=g===Ie?null:g===Qn?In:Qn,N=P?pd(P):null,$=N!=null&&N!==I?N:dm,W=N!=null&&N!==I?P===In?"el trabajo":"casa":"Barcelona",tt=M[I].fams,Q=new Set([...tt].filter(Ft=>kt.has(Ft))),ot=Q.size<tt.size,E=nh(I).filter(Ft=>!C[Ft.fam]||kt.has(Ft.fam)),Y=g.walk,_t=U.alerts.filter(Ft=>[...Ft.fams].some(pe=>Q.has(pe))||Ft.stops&&Ft.stops.has(I)),St=_t.some(Ft=>vm.test(Ft.txt)),qt={to:[],out:[],otros:[],all:E},ae=W!=="Barcelona"?new Set(P.st.map(Ft=>ht.get(Ft)).filter(Ft=>Ft!=null)):null;E.forEach(Ft=>qt[xm(I,Ft,$,ae)].push(Ft));let Ae=Ft=>{if(Ft==="all")return"Pr\xF3ximas salidas \xB7 todas las direcciones";let pe=hi=>(hi.find(ui=>ui.fam)||{}).fam;if(Ft==="to")return"Hacia "+Cs(W==="Barcelona"?"Barcelona":M[$].n,pe(qt.to)||[...Q][0])+(W!=="Barcelona"?` <small>${W}</small>`:"");let hn=[];for(let hi of qt[Ft])hn.some(ui=>ui[0]===hi.dest)||hn.push([hi.dest,hi.fam]);return hn.length?"Hacia "+hn.slice(0,2).map(([hi,ui])=>Cs(hi,ui)).join(" "):"Otros"},xt=Ft=>{let pe=qt[Ft].find(ui=>!ui.cancel&&ui.est-S.min>=Y);if(!pe){let ui=qt[Ft].find(Em=>!Em.cancel);return ui?{cls:"v-no",big:"No llegas",small:`El pr\xF3ximo (${Wt(ui.est)}) sale en ${sh(ui.est-S.min)}: no da tiempo a pie`}:{cls:"v-no",big:"Sin trenes",small:"No hay salidas pr\xF3ximas en este sentido"}}let hn=pe.est-S.min-Y;return{cls:hn<1.5?"v-bad":hn<5?"v-warn":"v-ok",big:hn<1.5?"\xA1Sal ya!":"Sal en "+sh(hn),small:`${St?"\u26A0\uFE0F servicio afectado \xB7 ":""}${Wt(pe.est)} \xB7 ${pe.fam} a ${pe.dest}${pe.plat?" \xB7 v\xEDa "+pe.plat:""}${pe.dl>=1?` \xB7 +${Math.round(pe.dl)} min`:""}`,x:pe}},yt=qt.out.length?"out":"otros",ee=xt("to"),fe=xt(yt),Ce=wt()&&S.live,Mn=Q.size===1,sn=Ft=>{let pe=Ft.est-S.min;return Ft.cancel?"cx":pe<Y?"u-miss":pe<Y+1.5?"u-now":pe<Y+5?"u-soon":"u-ok"},Ge=Ft=>{let pe=!Ft.cancel&&Ft.est-S.min<Y,hn=jc(Ft.num,"");return`<li class="hr ${sn(Ft)}${Ft.live?" on":""} go" style="--lc:${C[Ft.fam]||"#6b7385"}" data-dk="${T.push(Ft)-1}" title="${Ft.cancel?"Cancelado":pe?"No llegas a pie":"Ver este tren en el mapa"}"><span class="hrt"><b>${Ft.cancel?"\u2715":pe?Wt(Ft.est):sh(Ft.est-S.min)}</b><small>${Ft.cancel?"cancelado":pe?"no llegas":Wt(Ft.est)}</small></span><span class="hrd">${Cs((Mn?"":Ft.fam+" \xB7 ")+Ft.dest,Ft.fam)}${hn.length?`<i class="cr" title="${d(hn.map(hi=>So(hi.kind)).join(" \xB7 "))}">${hn.slice(0,2).map(hi=>yo[hi.kind]).join("")}</i>`:""}${Ft.obs?`<small class="hro">${d(Ft.obs)}</small>`:""}</span><span class="hrm">${!Ft.cancel&&Ft.dl>=1?`<em class="dl ${nr(Ft.dl)}">+${Math.round(Ft.dl)}</em>`:""}${Ft.plat?`<i class="via">v\xEDa ${d(Ft.plat)}</i>`:""}</span></li>`},Ri=(Ft,pe)=>`<div class="hcol"><div class="hdir">${Ae(Ft)}</div><div class="hv ${pe.cls}${pe.x?" go":""}"${pe.x?` data-dk="${T.push(pe.x)-1}"`:""}><b>${pe.big}</b><small>${d(pe.small)}</small></div><ol>${qt[Ft].slice(0,g.more?Ft==="all"?20:10:Ft==="all"?7:4).map(Ge).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(g===Ie){let Ft=xt("all");var sr=Ft.x?`${Ft.big} \xB7 <b>${Wt(Ft.x.est)}</b> ${d(Ft.x.fam)} a ${d(Ft.x.dest)}${Ft.x.plat?" \xB7 v\xEDa "+d(Ft.x.plat):""}`:Ft.big}let Ln=g===Ie?sr:ee.x?`${ee.big} \xB7 <b>${Wt(ee.x.est)}</b> hacia ${d(W)}${ee.x.plat?" \xB7 v\xEDa "+d(ee.x.plat):""}`:"Sin trenes hacia "+d(W);return`<div class="hplace ${g.open?"open":""}"><button type="button" class="hhead" data-ht="${g.key}"><span class="hico">${g.ico}</span><span class="htit"><b>${d(M[I].n)}</b><small class="c${St?"bad":ee.cls.slice(2)}">${Ln}</small></span><span class="hchev">\u25BE</span></button>`+(g.open?`
      <div class="hbody">
        ${g.st.length>1?`<div class="hst">${g.st.map((Ft,pe)=>{let hn=ht.get(Ft);return hn==null?"":`<button type="button" data-hs="${g.key}:${pe}" class="${pe===g.i?"on":""}">${d(M[hn].n)}</button>`}).join("")}</div>`:""}
        ${g===Ie?`<div class="hwalk">\u{1F4CD} A ${(()=>{let Ft=Ie.dist[g.st[g.i]]||0;return Ft<1?Math.round(Ft*100)*10+" m":Ft.toFixed(1).replace(".",",")+" km"})()} \xB7 unos <b>${g.walk} min</b> a pie</div>`:""}
        <div class="hwalk"${g===Ie?" hidden":""}>\u{1F6B6} Tardo <button type="button" data-hw="${g.key}:-1">\u2212</button><b>${Y} min</b><button type="button" data-hw="${g.key}:1">+</button> a pie hasta la estaci\xF3n</div>
        ${ot?`<div class="hflt">Solo ${[...Q].sort(F).map(Ai).join(" ")||"ninguna l\xEDnea"} \xB7 filtro de l\xEDneas activo</div>`:""}
        ${_t.length?`<div class="hal ${St?"bad":""}">\u26A0\uFE0F ${Qc(_t[0])} ${d(_t[0].txt)} <small>${th(_t[0])}</small>${_t.length>1?` <a data-hal>+${_t.length-1} avisos</a>`:""}</div>`:`<div class="hok">\u2713 Sin avisos para ${[...Q].sort(F).join(", ")}</div>`}
        ${(()=>{let Ft=g.st.flatMap(pe=>jc("",pe));return Ft.length?`<div class="hcr">${Ft.slice(0,3).map(pe=>`${yo[pe.kind]} <b>${d(So(pe.kind))}</b> <small>${pe.up>1?pe.up+" viajeros \xB7 ":""}${cd(pe)}</small>`).join("<br>")}</div>`:""})()}
        ${g===Ie?`<div class="hcols one">${Ri("all",xt("all"))}</div>`:`<div class="hcols">${Ri("to",ee)}${Ri(yt,fe)}</div>`}
        ${E.length>(g===Ie?7:8)?`<button type="button" class="hmore" data-hmore="${g.key}">${g.more?"\u25B4 Menos trenes":"\u25BE M\xE1s trenes \xB7 pr\xF3ximas horas"}</button>`:""}
        <div class="hsrc"><span class="hsrcT" title="${Ce?Rn.get(M[I].id)?.d?"Salidas oficiales de Rodalies en directo":"Horario + retrasos mientras cargan las salidas oficiales":"Previsi\xF3n seg\xFAn horario (sin tiempo real)"} \xB7 \u25CF = tren circulando">${Ce?Rn.get(M[I].id)?.d?"\u25CF oficial en directo":"\u25CF horario + retrasos":"seg\xFAn horario"}</span><a data-hmap="${I}">\u{1F5FA}\uFE0F mapa</a>${g===Ie?"<a data-hloc>\u{1F4CD} actualizar</a>":`<a data-hset="${g.key}">\u270E cambiar</a>`}${g===In?'<a data-hdel="work">\u2715 quitar</a>':""}</div>
      </div>`:"")+"</div>"}let Ci={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},gd=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,_d=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,ea=()=>{let g=[...Qn.st,...In.st],S=new Set;return g.forEach(T=>{let I=ht.get(T);I!=null&&M[I].fams.forEach(P=>S.add(P))}),{stations:g,lines:[...S].sort(F)}},Sm=g=>Uint8Array.from(atob(g.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((g.length+3)%4)),S=>S.charCodeAt(0));async function xd(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function vd(g){let T=await(await fetch(U.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:g.toJSON(),...ea()})})).json();if(!T.ok)throw new Error(T.err||"error")}let Bn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function Mm(){let{lines:g,stations:S}=ea(),T=new Set(g),I=new Set(S.map($=>ht.get($))),P=U.alerts.filter($=>[...$.fams].some(W=>T.has(W))||[...$.stops||[]].some(W=>I.has(W)));if(!Bn.seen){try{Bn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Bn.seen=new Set}if(!Bn.seen.size){P.forEach($=>Bn.seen.add($.id+"|"+$.txt.length)),yd();return}}let N=P.filter($=>!Bn.seen.has($.id+"|"+$.txt.length));if(N.length&&(N.forEach($=>Bn.seen.add($.id+"|"+$.txt.length)),yd(),!(!Bn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let $ of N.slice(0,3)){let W=($.src==="Adif"?"Adif \xB7 v\xEDa":"Rodalies")+($.fams.size?" \xB7 "+[...$.fams].sort(F).slice(0,4).join(" "):""),tt={body:$.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+$.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(Q=>Q?Q.showNotification(W,tt):new Notification(W,tt)).catch(()=>{try{new Notification(W,tt)}catch{}})}}function yd(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Bn.seen].slice(-400)))}catch{}}async function bm(){if(Bn.on)Bn.on=!1,Xn("Avisos desactivados");else{if(!("Notification"in window)){Xn(gd&&!_d()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio y activa los avisos desde la app":"Este navegador no permite avisos");return}if(await Notification.requestPermission()!=="granted"){Xn("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}Bn.on=!0,Xn("Listo: te aviso de incidencias en "+ea().lines.join(", ")+" mientras la app est\xE9 abierta")}try{localStorage.setItem("rod_ln",Bn.on?"1":"")}catch{}Pn(!0)}async function wm(){if(!U.repOk)return bm();if(!Ci.busy){Ci.busy=!0;try{let g=await xd();if(!g){Xn(gd&&!_d()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio, abre la app desde ah\xED y activa los avisos":"Este navegador no permite avisos (hace falta abrir la web publicada, no el archivo)");return}if(await navigator.serviceWorker.ready,Ci.on){let S=await g.pushManager.getSubscription();S&&(fetch(U.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:S.endpoint})}).catch(()=>{}),await S.unsubscribe().catch(()=>{})),Ci.on=!1,Xn("Avisos desactivados")}else{if(!U.url){Xn("Hace falta el puente en directo");return}if(await Notification.requestPermission()!=="granted"){Xn("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}let T=(await mt(U.url.replace(/\/+$/,""),"/push/key")).key,I=await g.pushManager.getSubscription()||await g.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Sm(T)});await vd(I),Ci.on=!0,Xn("Listo: te avisaremos de incidencias en "+ea().lines.join(", "))}try{localStorage.setItem("rod_push",Ci.on?"1":"")}catch{}}catch(g){Xn("No se han podido activar los avisos: "+(g.message||g))}finally{Ci.busy=!1,Pn(!0)}}}async function Sd(){if(Ci.on)try{let g=await xd(),S=g&&await g.pushManager.getSubscription();S&&await vd(S)}catch{}}let rh=!1,Md="";function ah(){let g=xe?"t"+(xe.tid||xe.vtid):Ye>=0?"s"+Ye:gn?"a":mn?"n":"";g!==Md&&(rh=!1,Md=g);let S=innerWidth<=640&&!!g&&!rh,T=f("#inf");T.classList.contains("compact")!==S&&(T.classList.toggle("compact",S),requestAnimationFrame(()=>{if(h.style.display!=="none"){let I=T.getBoundingClientRect().bottom;h.style.top=Math.round(I+8)+"px",h.style.maxHeight=Math.max(140,f("#rc").getBoundingClientRect().top-I-16)+"px"}}))}function Pn(g){let S=f("#home");if(!S)return;let T=performance.now();if(!g&&T-md<4e3)return;md=T;let I=Rt(),P=[],N=ea(),$=Qr.map(Q=>ym(Q,I,P)).join("")+(Qr.some(Q=>Q.open)&&N.lines.length,"");if(S.className=Qr.some(Q=>Q.open)?"open":"",S._h===$)return;S._h=$,S.innerHTML=$;{let Q=[...S.children].find(ot=>ot.classList.contains("hplace")&&!ot.querySelector(".hnew"));Q&&Q.classList.add("lead")}let W=Q=>Q==="work"?In:Q==="near"?Ie:Qn;S.querySelectorAll("[data-hloc]").forEach(Q=>Q.onclick=()=>{Ie.err="",ih(!0)}),S.querySelectorAll("[data-ht]").forEach(Q=>Q.onclick=()=>{if(f("#inf").classList.contains("compact")){rh=!0,ah();return}let ot=W(Q.dataset.ht);ot.open=!ot.open,ta(ot),Pn(!0),(xe||Ye>=0||gn||mn)&&(h._h="",Ze())}),S.querySelectorAll("[data-hs]").forEach(Q=>Q.onclick=()=>{let[ot,E]=Q.dataset.hs.split(":"),Y=W(ot);Y.i=+E,ta(Y),Pn(!0)}),S.querySelectorAll("[data-hw]").forEach(Q=>Q.onclick=()=>{let[ot,E]=Q.dataset.hw.split(":"),Y=W(ot);Y.walk=m(Y.walk+ +E,0,60),ta(Y),Pn(!0)}),S.querySelectorAll("[data-hmap]").forEach(Q=>Q.onclick=()=>{let ot=+Q.dataset.hmap;mn=gn=ln=!1,xe=null,Ye=ot,ir(),se(),Object.assign(s,{tx:M[ot].w[0],ty:M[ot].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),h._h="",Ze(),a()}),S.querySelectorAll("[data-hset]").forEach(Q=>Q.onclick=()=>{Rs=Q.dataset.hset,p.value="",p.placeholder=Rs==="work"?"Escribe la estaci\xF3n del trabajo\u2026":"Escribe la estaci\xF3n de casa\u2026",p.focus()}),S.querySelectorAll("[data-hnear]").forEach(Q=>Q.onclick=()=>{let ot=ht.get(Ie.st[0]);ot!=null&&oh(ot,Q.dataset.hnear)}),S.querySelectorAll("[data-hmore]").forEach(Q=>Q.onclick=()=>{let ot=W(Q.dataset.hmore);ot.more=!ot.more,Pn(!0)}),S.querySelectorAll("[data-hdel]").forEach(Q=>Q.onclick=()=>{In.st=[],In.open=!1,ta(In),Pn(!0),Sd()}),S.querySelectorAll("[data-dk]").forEach(Q=>Q.onclick=()=>bd(P[+Q.dataset.dk])),S.querySelectorAll("[data-hal]").forEach(Q=>Q.onclick=()=>f("#alr").click());let tt=f("#bell");tt||(tt=document.createElement("button"),tt.type="button",tt.id="bell",tt.onclick=wm,f("#inf .more").prepend(tt));{let Q=U.repOk?Ci.on:Bn.on;tt.hidden=!N.lines.length,tt.className=Q?"on":"",tt.textContent=(Q?"\u{1F514} Avisos activados \xB7 ":"\u{1F515} Activar avisos de ")+N.lines.join(", "),tt.title=(Q?"Avisos activados":"Activar avisos")+" de "+N.lines.join(", ")+(U.repOk?"":" (mientras la app est\xE9 abierta)")}ud(S)}function bd(g){if(!g)return;let S=t.days.indexOf(Rt().ymd),T=Wn.find(N=>N.real?g.tid&&N.v.tid===g.tid||g.num&&String(N.tr?N.tr.num:N.v.num)===String(g.num):g.tr&&N.tr===g.tr||g.num&&N.tr&&String(N.tr.num)===String(g.num)),I=g.tr||T&&T.tr||(J[S]||[]).find(N=>String(N.num)===String(g.num));if(mn=gn=ln=!1,Ye=-1,ir(),xe=T?T.tr||{vtid:T.v.tid}:I||null,!xe)return;dn=T&&T.tr?T.tr:null,dn&&innerWidth<=640&&(h.classList.add("peek"),f("#rc").classList.contains("min")||f("#rcgrab").click());let P=T?T.p.w:null;P&&Object.assign(s,{tx:P[0],ty:P[1],dist:Math.min(s.dist,22)}),se(),h._h="",Ze(),ai=0,a()}let Rs=!1;p.addEventListener("blur",()=>setTimeout(()=>{Rs&&!p.value.trim()&&(Rs=!1,p.placeholder="Buscar estaci\xF3n o municipio\u2026")},600));function ir(){Qr.some(g=>g.open)&&(Qr.forEach(g=>{g.open=!1}),Pn(!0))}function oh(g,S){let T=S==="work"?In:Qn,I=M[g].id,P=M.filter(N=>N.fams.size&&N!==M[g]&&Math.hypot(N.w[0]-M[g].w[0],N.w[1]-M[g].w[1])<.6).map(N=>N.id);T.st=[I,...P].slice(0,3),T.i=0,T.open=!0,ta(T),Pn(!0),Sd()}let lh=f("#lines");lh.innerHTML='<button type="button" class="all" data-f="*">Todas</button>'+v.map(g=>`<button type="button" style="--c:${C[g]}" data-f="${g}">${g}</button>`).join("");function wd(){try{Pn(!0)}catch{}lh.querySelectorAll("[data-f]").forEach(g=>{g.dataset.f!=="*"&&g.classList.toggle("off",!kt.has(g.dataset.f))})}lh.querySelectorAll("[data-f]").forEach(g=>g.onclick=()=>{let S=g.dataset.f;S==="*"?v.forEach(T=>kt.add(T)):kt.size===v.length?(kt.clear(),kt.add(S)):kt.has(S)?(kt.delete(S),kt.size||v.forEach(T=>kt.add(T))):kt.add(S),wd(),At(),se(),eh(),ai=0,a()});let ch=[...document.querySelectorAll("[data-sp]")],ci=0;function Ed(g){let S=Rt();g&&(nt===g||ci===g)?nt?(Nt=S.min,ut=S.min,nt=0,ci=g):(ie=performance.now(),nt=g,ci=0):g===0?(nt=0,ut=null,ci=0):(Nt=S.min,ie=performance.now(),ut=S.min,nt=g,ci=0),ch.forEach(T=>{let I=+T.dataset.sp;T.classList.toggle("on",I===(nt||ci)||!nt&&!ci&&ut==null&&I===0),T.classList.toggle("pz",!!ci&&I===ci),T.textContent=I===0?"Ahora":ci===I?"\u25B6 \xD7"+I:nt===I?"\u23F8 \xD7"+I:"\xD7"+I}),ai=0,a()}ch.forEach(g=>g.onclick=()=>Ed(+g.dataset.sp)),f("#tsl").oninput=g=>{let S=+g.target.value;Nt=S,ut=S,ie=performance.now(),nt===0&&!ci&&ch.forEach(T=>T.classList.remove("on")),ai=0,a()},setInterval(()=>{ut!=null&&nt&&Nt+(performance.now()-ie)/6e4*nt>1560&&(Nt=240,ie=performance.now())},1e3),window.__rodSearch=g=>{let S=_(g.trim());if(!S){u.style.display="none",u._pick=null;return}let T=[],I=[];M.forEach((W,tt)=>{if(!W.fams.size)return;let Q=_(W.n);Q.startsWith(S)||Q.includes(" "+S)||Q.includes("-"+S)?T.push(tt):Q.includes(S)&&I.push(tt)});let P=T.concat(I).slice(0,7),N=w.filter(W=>_(W.name).startsWith(S)).sort((W,tt)=>tt.pop-W.pop).slice(0,3),$=P.map(W=>({h:`\u{1F689} ${d(M[W].n)}<em>${[...M[W].fams].sort(F).slice(0,3).map(tt=>`<em class="ls" style="background:${C[tt]}">${tt}</em>`).join(" ")}</em>`,go:()=>{if(Rs){let tt=Rs;Rs=!1,p.placeholder="Buscar estaci\xF3n o municipio\u2026",oh(W,tt);return}mn=!1,gn=!1,ln=!1,Ye=W,xe=null,dn=null,ir(),se(),Object.assign(s,{tx:M[W].w[0],ty:M[W].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Ze(),a()}})).concat(N.map(W=>({h:`${d(W.name)}<em>municipio</em>`,go:()=>{Object.assign(s,{tx:W.cx,ty:W.cy,dist:m(W.size*3+14,14,60)}),a()}})));u.innerHTML=$.map((W,tt)=>`<li data-i="${tt}">${W.h}</li>`).join("")||'<li class="no">Sin resultados</li>',u.style.display="block",u._pick=W=>{$[W]&&($[W].go(),u.style.display="none",p.value="",p.blur())},u.querySelectorAll("li[data-i]").forEach(W=>W.onclick=()=>u._pick(+W.dataset.i))},wd(),se();try{let g=new URLSearchParams(location.search).get("st");if(g){let S=_(g),T=-1,I=0;M.forEach((P,N)=>{if(!P.fams.size)return;let $=_(P.n),W=$===S?3:$.startsWith(S)||S.startsWith($)?2:$.includes(S)||S.includes($)?1:0;W>I&&(I=W,T=N)}),T>=0&&setTimeout(()=>{Ye=T,se(),Object.assign(s,{tx:M[T].w[0],ty:M[T].w[1],dist:18,tilt:.5}),Ze(),a()},300)}}catch{}window.__rod={get cols(){return nn.mesh?nn.mesh.count:-1},get dist(){return r.dist},get follow(){return dn},get selTrip(){return xe},ST:M,TR:G,FAM:v,act:()=>Wn,setSpeed:Ed,RT:U,pollRT:Mt,nowState:Rt,posAt:Ts,activeTrips:Xr,select:g=>{xe=g,Ze()}}}var $r=window.__DATA__;var Ee=i=>document.querySelector(i),ss=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),On=(i,t,e)=>Math.min(e,Math.max(t,i)),Wu=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Gn=Ee("#c"),fo=new Dc({canvas:Gn,antialias:!0});fo.setPixelRatio(Math.min(devicePixelRatio||1,2));var ws=new ya;ws.background=new le(15659509);var Yc=35,Xi=new Un(Yc,1,2,1500);ws.add(new Ga(16777215,9080992,1));var Gp=new $a(16777215,.9);Gp.position.set(-40,-70,90);ws.add(Gp);var Wi=100/$r.w,lo=$r.w/2,co=$r.h/2,on=[],$u=new Si;ws.add($u);var Wp=new Bs({color:16777215,transparent:!0,opacity:.55});for(let i of $r.m){let t=new Si,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let m of i.g){let _=m.map(f=>{let d=[];for(let L=0;L<f.length;L+=2)d.push(new Dt((f[L]-lo)*Wi,(f[L+1]-co)*Wi));return d.length>1&&d[0].equals(d[d.length-1])&&d.pop(),d}).filter(f=>f.length>=3);if(!_.length)continue;let w=new Lr(_[0]);for(let f=1;f<_.length;f++)w.holes.push(new ks(_[f]));e.push(w);for(let f of _[0])s=Math.min(s,f.x),r=Math.max(r,f.x),a=Math.min(a,f.y),o=Math.max(o,f.y);for(let f of _)n.push(new Ta(new an().setFromPoints(f.map(d=>new O(d.x,d.y,0))),Wp))}if(!e.length)continue;let l;try{l=new Oa(e,{depth:1,bevelEnabled:!1})}catch{continue}let c=new ka({color:13421772}),h=new yn(l,c);t.add(h);let p=new Si;n.forEach(m=>p.add(m)),p.position.z=.04,$u.add(p),t.scale.z=.01,$u.add(t);let u={og:p,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:h,mat:c,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};h.userData.m=u,on.push(u)}var Pw=on.map(i=>i.mesh),Fp=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},$p=0,Xp=0;for(let i of on){for(let t of i.rings)$p+=Fp(t[0])-t.slice(1).reduce((e,n)=>e+Fp(n),0);Xp+=i.area}var Gy=Math.sqrt(Xp/$p),kc={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},qp={"08":"provincia de Barcelona",17:"provincia de Girona",25:"provincia de Lleida",43:"provincia de Tarragona"},ju="sqrt",Qu="pop",Hu=0,Xu=0,Gr=1,oo=1,Wy={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},qu=i=>Qu==="pop"?i.pop:i.pop/i.area,zc=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new le(i));function $y(i){i=On(i,0,1)*(zc.length-1);let t=Math.min(Math.floor(i),zc.length-2);return zc[t].clone().lerp(zc[t+1],i-t)}var Wr=i=>i>=100?ss(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function Xy(){Xu=0;for(let i of on)Xu+=i.pop;[...on].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...on].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),Yp()}var qy=new le("#d3d8e2"),Yy=new le("#eceff3");function td(i){i.mat.color.copy(i.base).lerp(Yy,.86),i.inF||i.mat.color.lerp(qy,.8)}function Yp(){Gr=1,oo=1e12;for(let e of on){let n=qu(e);Gr=Math.max(Gr,n),oo=Math.min(oo,n)}let i=Math.log10(Math.max(oo,.01)),t=Math.log10(Gr);for(let e of on)e.base=$y((Math.log10(Math.max(qu(e),.01))-i)/(t-i)),td(e);Ee("#lmin").textContent=Wr(oo),Ee("#lmax").textContent=Wr(Gr),Ee("#lname").textContent=Qu==="pop"?"habitantes":"hab./km\xB2",Zc()}function Zc(){let i=Wy[ju],t=i(Gr),e=24*Hu;for(let n of on)n.zt=Hu<=.001?.01:Math.max(.12*Math.min(1,Hu),e*i(qu(n))/t)*(n.inF?1:.1);An()}var Op=Object.fromEntries(on.map(i=>[i.code,i])),Vc=[],Zp=[];for(let i of $r.bd){let t=Op[i.a],e=Op[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)Zp.push((i.p[n]-lo)*Wi,(i.p[n+1]-co)*Wi,0,(i.p[n+2]-lo)*Wi,(i.p[n+3]-co)*Wi,0),Vc.push(t,e)}var Wc=new ns;Wc.setPositions(Zp);var Jp=new ki({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Kp=new ki({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[Jp,Kp].forEach((i,t)=>{let e=new Ys(Wc,i);e.frustumCulled=!1,e.renderOrder=10+t,ws.add(e)});function Zy(){let i=Wc.attributes.instanceStart.data.array;for(let t=0;t<Vc.length;t+=2){let e=Math.max(Vc[t].z,Vc[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}Wc.attributes.instanceStart.data.needsUpdate=!0}var $c={};for(let i of Object.keys(kc)){let t=on.filter(h=>h.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,l=-1e9;for(let h of t)e+=h.area,n+=h.cx*h.area,s+=h.cy*h.area,r=Math.min(r,h.cx),a=Math.max(a,h.cx),o=Math.min(o,h.cy),l=Math.max(l,h.cy);let c=document.createElement("div");c.className="plab",c.textContent=kc[i],c.title="Ver solo "+qp[i],c.onclick=()=>aS("pr:"+i),document.body.appendChild(c),$c[i]={el:c,p:new O(n/e,s/e,0),cx:(r+a)/2,cy:(o+l)/2,ext:Math.max(a-r,l-o),ext2:[a-r,l-o],area:e,name:kc[i]}}var Gu=new O;function Jy(){for(let i in $c){let t=$c[i];Gu.copy(t.p).project(Xi),t.el.style.transform=`translate(-50%,-50%) translate(${(Gu.x*.5+.5)*innerWidth}px,${(-Gu.y*.5+.5)*innerHeight}px)`}}var cn={tilt:0,yaw:0,dist:150,tx:0,ty:0},ue={...cn};function Ky(){let i=innerWidth/innerHeight,t=Math.tan(Yc*Math.PI/360);return Math.max($r.h*Wi*1.1,100*1.1/i)/(2*t)}var jy=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{ue.yaw=Math.round(ue.yaw/(2*Math.PI))*2*Math.PI,ue.tilt=0,An()});function ed(){Object.assign(ue,{tilt:0,yaw:0,dist:Ky(),tx:0,ty:0}),An()}function Qy(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=cn;Xi.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),Xi.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),Xi.lookAt(n,s,0)}var Hc=!0,Bp=performance.now(),ho=new Map;function An(){Hc=!0}function jp(i){requestAnimationFrame(jp);let t=On((i-Bp)/1e3,0,.05);Bp=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(cn)){let r=ue[s]-cn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(cn[s]+=r*e,n=!0):cn[s]=ue[s]}for(let s of on){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of ho){let a=(i-r)/1800;a>=1?(ho.delete(s),Qs(s)):Qs(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(Hc=!0),n||Hc){jy.style.transform=`rotate(${cn.yaw}rad) scaleY(${(.55+.45*Math.cos(cn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(ue.yaw/2))<.02&&ue.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?"El norte ya est\xE1 arriba":"Poner el norte arriba y el mapa plano")}Qy(),Zy(),Jy(),window.__rodFrame&&window.__rodFrame(),fo.render(ws,Xi),Hc=n,Ee("#tilt").value=Math.round(ue.tilt*180/Math.PI),Ee("#yaw").value=Math.round(((ue.yaw*180/Math.PI+180)%360+360)%360-180)}}function Qp(){fo.setSize(innerWidth,innerHeight,!1),Xi.aspect=innerWidth/innerHeight,Xi.updateProjectionMatrix(),Jp.resolution.set(innerWidth,innerHeight),Kp.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),An()}addEventListener("resize",()=>{Qp(),qe.length&&Es()});Gn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;ue.yaw+=n*.0035}else i.ctrlKey?ue.dist=On(ue.dist*Math.exp(e*.01),6,400):ue.tilt=On(ue.tilt+e*.002,0,1.32);An()},{passive:!1});Gn.addEventListener("contextmenu",i=>i.preventDefault());var $i=new Map,Kn=null,Js=0,Yu=0,Zu=0;var Xc=null;Gn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),qe.length&&setTimeout(Es,50)),Gn.setPointerCapture(i.pointerId),$i.set(i.pointerId,{x:i.clientX,y:i.clientY}),$i.size===1&&(Kn={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),$i.size===2){let[t,e]=[...$i.values()];Js=Math.hypot(t.x-e.x,t.y-e.y),Yu=Math.atan2(e.y-t.y,e.x-t.x),Zu=(t.y+e.y)/2,Xc={mode:null,rot:0,sc:0,tl:0},Kn&&(Kn.multi=!0)}nd()});Gn.addEventListener("pointermove",i=>{let t=$i.get(i.pointerId);if(!t){is={x:i.clientX,y:i.clientY},Ju||(Ju=requestAnimationFrame(eS));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,$i.size===2){let[s,r]=[...$i.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),l=(s.y+r.y)/2,c=o-Yu;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI);let h=Js?a-Js:0,p=l-Zu,u=Xc||(Xc={mode:null,rot:0,sc:0,tl:0});u.rot+=c,u.sc+=h,u.tl+=p,u.mode?u.mode==="zoom"&&Math.abs(u.rot)>.45&&(u.mode="rotate"):Math.abs(u.rot)>.3?u.mode="rotate":Math.abs(u.tl)>30&&Math.abs(u.sc)<18?u.mode="tilt":Math.abs(u.sc)>12&&(u.mode="zoom"),(u.mode==="zoom"||u.mode==="rotate")&&Js&&(ue.dist=On(ue.dist*Js/a,6,400)),u.mode==="rotate"&&(ue.yaw+=c,cn.yaw=ue.yaw),u.mode==="tilt"&&(ue.tilt=On(ue.tilt-p*.006,0,1.32),cn.tilt=ue.tilt),Js=a,Yu=o,Zu=l,An();return}if(Kn.moved+=Math.abs(e)+Math.abs(n),Kn.rot||i.altKey)ue.yaw+=e*.005,ue.tilt=On(ue.tilt+n*.004,0,1.32),cn.yaw=ue.yaw,cn.tilt=ue.tilt;else{let s=2*cn.dist*Math.tan(Yc*Math.PI/360)/innerHeight,r=Math.sin(cn.yaw),a=Math.cos(cn.yaw),o=1/Math.max(Math.cos(cn.tilt),.3);ue.tx=On(ue.tx-a*e*s+-r*n*s*o,-70,70),ue.ty=On(ue.ty-r*e*s+a*n*s*o,-70,70),cn.tx=ue.tx,cn.ty=ue.ty}An()});var tm=i=>{let t=Kn&&!Kn.rot&&!Kn.multi&&Kn.moved<(Kn.touch?12:6)&&i.type==="pointerup"&&$i.size===1,e=Kn&&Kn.touch;$i.delete(i.pointerId),Js=0,Xc=null,$i.size||(Kn=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};Gn.addEventListener("pointerup",tm);Gn.addEventListener("pointercancel",tm);Gn.addEventListener("dblclick",ed);addEventListener("keydown",i=>{i.key==="Alt"&&(Gn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(Gn.style.cursor="")});addEventListener("blur",()=>{Gn.style.cursor=""});var tS=new Hs,zp=new Dt,is=null,Ju=0,Ks=null;function eS(){if(Ju=0,!is||Kn)return;zp.set(is.x/innerWidth*2-1,-(is.y/innerHeight)*2+1),tS.setFromCamera(zp,Xi);let i=null;if(i!==Ks){let e=Ks;Ks=i,e&&Qs(e),i&&Qs(i),An()}let t=window.__rodHover&&window.__rodHover(is.x,is.y);if(t){Zs.innerHTML=t,Zs.style.display="block";let e=Zs.offsetWidth,n=Zs.offsetHeight;Zs.style.left=On(is.x+14,6,innerWidth-e-6)+"px",Zs.style.top=On(is.y+14,6,innerHeight-n-6)+"px",Gn.style.cursor="pointer"}else nd(),Gn.style.cursor=""}Gn.addEventListener("pointerleave",()=>{if(is=null,Ks){let i=Ks;Ks=null,Qs(i),An()}nd()});var Zs=Ee("#tip");function nd(){Zs.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{Qu=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),Yp()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{ju=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),Zc()});Ee("#yaw").oninput=i=>{ue.yaw=+i.target.value*Math.PI/180,An()};Ee("#tilt").oninput=i=>{ue.tilt=+i.target.value*Math.PI/180,An()};Ee("#zin").onclick=()=>{ue.dist=On(ue.dist*.75,6,400),An()};Ee("#zout").onclick=()=>{ue.dist=On(ue.dist/.75,6,400),An()};Ee("#rst").onclick=ed;var kp=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],qe=[],Vp={},nS=i=>Vp[i]||(Vp[i]=new Bs({color:i}));function em(i,t){i.og.children.forEach(e=>e.material=t?nS(t):Wp)}function Qs(i,t=0){let e=i.mat.emissive;i===Ks?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function id(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let c of i)e=Math.min(e,c.cx-c.size/2),n=Math.max(n,c.cx+c.size/2),s=Math.min(s,c.cy-c.size/2),r=Math.max(r,c.cy+c.size/2);let a=innerWidth/innerHeight,o=Math.tan(Yc*Math.PI/360),l=i.length===1?On(i[0].size*3.2+14,14,120):On(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(ue,{tx:(e+n)/2,ty:(s+r)/2,dist:l,tilt:t,yaw:0}),An()}var bs=Ee("#q"),ri=Ee("#list"),$e=Ee("#mcs");function Jc(i,t=!0){if(ri.style.display="none",bs.value="",!i.sel){qe.length>=6&&nm(qe[0].o,!0);let e=new Set(qe.map(s=>s.color)),n=kp.find(s=>!e.has(s))||kp[0];i.sel={o:i,color:n,tint:new le(n).multiplyScalar(.12)},qe.push(i.sel),em(i,n)}$e.classList.contains("min")&&po(!1),ho.set(i,performance.now()),Qs(i),t&&id([i],Math.max(ue.tilt,.9)),Es()}function nm(i,t){let e=qe.indexOf(i.sel);e>=0&&qe.splice(e,1),i.sel=null,em(i,null),Qs(i),An(),t||Es()}function im(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=qe.map(h=>{let p=1e9,u=-1e9,m=1e9,_=-1e9;for(let w of h.o.rings)for(let f=0;f<w[0].length;f+=2)p=Math.min(p,w[0][f]),u=Math.max(u,w[0][f]),m=Math.min(m,w[0][f+1]),_=Math.max(_,w[0][f+1]);return{x0:p,x1:u,y0:m,y1:_}}),a=Math.max(...r.map(h=>Math.max(h.x1-h.x0,h.y1-h.y0))),o=(Math.min(e,n)-22)/a;qe.forEach((h,p)=>{let u=r[p],m=(u.x0+u.x1)/2,_=(u.y0+u.y1)/2;s.beginPath();for(let w of h.o.rings)for(let f of w)for(let d=0;d<f.length;d+=2){let L=e/2+(f[d]-m)*o,D=n/2-(f[d+1]-_)*o;d?s.lineTo(L,D):s.moveTo(L,D),d===f.length-2&&s.closePath()}s.fillStyle=h.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=h.color,s.stroke()});let l=o/Gy,c=[.5,1,2,5,10,20,50,100].find(h=>h*l>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,c*l,2),s.font="10px system-ui",s.fillText(c+" km",12+c*l,n-8)}function Es(){if(!qe.length){$e.innerHTML="",$e.style.display="none",po(!1);return}if($e.style.display="flex",innerWidth<=640){let e=Ee("#inf").getBoundingClientRect().bottom;$e.style.top=Math.round(e+8)+"px",$e.style.maxHeight=Math.max(110,Math.min(innerHeight*(Ee("#rc").classList.contains("min")?.7:.4),Ee("#rc").getBoundingClientRect().top-e-16))+"px",$e.style.width=""}else if(innerHeight<=500){let e=Ee("#inf").getBoundingClientRect().bottom;$e.style.top=Math.round(e+8)+"px",$e.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",$e.style.width="min(290px, 40vw)"}else $e.style.top="",$e.style.maxHeight="",$e.style.width="";let i=qe.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${kc[s.pr]}</em></div><div class="mb">${ss(s.pop)} hab.</div><small>${Wr(s.area)} km\xB2 \xB7 ${Wr(s.pop/s.area)} hab./km\xB2 \xB7 n\xBA ${s.rankP} en poblaci\xF3n</small></div>`}).join("");if(qe.length>1){let e=s=>Math.max(...qe.map(s));if(i+='<div class="cmp"><div class="ct">Comparar <small>arrastra una ficha sobre otra para reordenar</small></div><canvas id="sil"></canvas><small class="sc">Siluetas superpuestas a la misma escala</small>'+[["Habitantes",s=>s.o.pop,ss],["Superficie (km\xB2)",s=>s.o.area,Wr],["Densidad (hab./km\xB2)",s=>s.o.pop/s.o.area,Wr]].map(([s,r,a])=>`<div class="cr"><span>${s}</span>${qe.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),qe.length===2){let[s,r]=qe.map(c=>c.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],l=(c,h)=>(c>=h?c/h:h/c).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}</b> tiene ${l(a.pop,o.pop)}\xD7 los habitantes de <b>${o.name}</b> y ocupa ${l(a.area,o.area)}\xD7 ${a.area>=o.area?"su superficie":"menos superficie"}.</small>`}i+="</div>"}$e.innerHTML=i,$e.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),nm(qe[+e.dataset.x].o)}),$e.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>id([qe[+e.dataset.i].o],Math.max(ue.tilt,.9)),e.onmouseenter=()=>{let n=qe[+e.dataset.i].o;ho.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=qe.splice(s,1);qe.splice(r,0,a),Es();let o=Ee("#sil");o&&o.classList.add("flash")}}});let t=Ee("#sil");t&&im(t)}bs.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(bs.value);return}let i=Wu(bs.value.trim());if(!i){ri.style.display="none";return}let t=[],e=[];for(let s of on){let r=Wu(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);ri.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${ss(s.pop)}</em></li>`).join("")||'<li class="no">Sin resultados</li>',ri.style.display="block",ri.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>Jc(n[+s.dataset.i])),ri._r=n});bs.addEventListener("keydown",i=>{i.key==="Enter"&&ri._pick?ri._pick(0):i.key==="Enter"&&ri._r&&ri._r[0]&&Jc(ri._r[0]),i.key==="Escape"&&(bs.value="",ri.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==bs&&sm()});var Hp=0;addEventListener("resize",()=>{clearTimeout(Hp),Hp=setTimeout(()=>{let i=Ee("#sil");i&&im(i)},120)});var qc=null,Ku=Ee("#chip");function iS(i,t,e=.8){qc={codes:new Set(i.map(n=>n.code)),label:t},on.forEach(n=>{n.inF=qc.codes.has(n.code),td(n)}),Ku.innerHTML=`<span>Mostrando: <b>${t}</b> \xB7 ${i.length} municipio${i.length===1?"":"s"}</span><button id="chx" title="Quitar filtro">\xD7</button>`,Ku.style.display="flex",Ee("#chx").onclick=sm,Zc(),id(i,e),i.slice(0,40).forEach(n=>ho.set(n,performance.now()))}function sm(){qc&&(qc=null,on.forEach(i=>{i.inF=!0,td(i)}),Ku.style.display="none",Zc())}var sS="prov";function rS(i){let t=[...on].sort((a,o)=>o.pop-a.pop),e=[...on].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[on.filter(a=>a.pr===s),qp[s]];if(n==="top")return s==="pop"?[t.slice(0,10),"10 con m\xE1s habitantes"]:[e.slice(0,10),"10 m\xE1s densos"];if(n==="low")return s==="pop"?[t.slice(-10),"10 con menos habitantes"]:[e.slice(-10),"10 menos densos"];if(n==="size")return[on.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${ss(+s)} o m\xE1s habitantes`:+s==0?`menos de ${ss(+r)} habitantes`:`${ss(+s)} \u2013 ${ss(+r-1)} habitantes`];if(n==="n50"){let a=0,o=0;for(let l of t)if(a+=l.pop,o++,a>=Xu/2)break;return[t.slice(0,o),"la mitad de la poblaci\xF3n"]}return[[],""]}function aS(i){let[t,e]=rS(i);t.length&&iS(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{sS=i.dataset.tab,Ee("#dbody").scrollTop=0});var js=Ee("#rc"),Gc=Ee("#mcstab");function uo(i){js.classList.toggle("min",i),Ee("#rcgrab span").textContent=i?"Mostrar controles":"Ocultar controles",qe.length&&Es()}function po(i){$e.classList.toggle("min",i),$e.style.transform="",$e.style.opacity="",Gc.classList.toggle("on",i&&qe.length>0),i&&(Gc.textContent=`\u25B8 ${qe.length} ${qe.length===1?"ficha":"fichas"}`,Gc.style.top=$e.style.top||"124px")}function sd(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!Kc.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y;!s.lock&&Math.hypot(o,l)>10&&(s.lock=Math.abs(o)>Math.abs(l)?"x":"y"),s.lock===n&&t&&t(o,l)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y,c=s.lock;s=null,e(c===n?o:0,c===n?l:0,c)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Ee("#rcgrab").onclick=()=>uo(!js.classList.contains("min"));var rm=()=>innerWidth>640;sd(js,{axis:"y",onEnd:(i,t)=>{if(!rm())if(t>40&&!js.classList.contains("min")){let e=Ee("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&uo(!0)}else t<-30&&js.classList.contains("min")&&uo(!1)}});sd(js,{axis:"x",onEnd:i=>{rm()&&(i>50?uo(!0):i<-30&&js.classList.contains("min")&&uo(!1))}});sd($e,{axis:"x",onMove:i=>{i<0&&($e.classList.add("sw"),$e.style.transform=`translateX(${i}px)`,$e.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{$e.classList.remove("sw"),i<-60?po(!0):($e.style.transform="",$e.style.opacity="")}});Gc.onclick=()=>{po(!1),Es()};Ee("#dtoggle").onclick=()=>{let i=Ee("#dp").classList.toggle("open");Ee("#rc").classList.toggle("dopen",i),Ee("#dtoggle").textContent=i?Kc.matches&&innerWidth<=640?"\u2190 Controles":"En directo \u25B4":"En directo: conectar datos de Renfe \u25BE",window.__rodCard&&window.__rodCard()};var Kc=matchMedia("(max-width:640px), (max-height:500px)");function am(){let i=Ee("#leg");Kc.matches?Ee("#rc").insertBefore(i,Ee("#dtoggle")):document.body.appendChild(i),qe.length&&Es()}Kc.addEventListener("change",am);am();Qp();Xy();ed();Object.assign(cn,ue);for(let i of on)i.z=.01;requestAnimationFrame(jp);Up({scene:ws,camera:Xi,renderer:fo,goal:ue,cur:cn,invalidate:An,flyTo:(i,t,e,n)=>{Object.assign(ue,{tx:(i-lo)*Wi,ty:(t-co)*Wi,dist:e,tilt:n}),An()},K:Wi,CX:lo,CY:co,mcs:$e,q:bs,list:ri,munis:on,select:Jc,norm:Wu,fmt:ss,clamp:On,mcsMin:po});window.__app={scene:ws,renderer:fo,camera:Xi,munis:on,labs:$c,goal:ue,cur:cn,select:Jc,get mode(){return ju}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
