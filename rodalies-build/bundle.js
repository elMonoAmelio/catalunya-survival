(()=>{var Ef=0,ou=1,Tf=2;var no=1,Af=2,Vr=3,Ss=0,Vn=1,zi=2,ki=0,Hr=1,lu=2,cu=3,hu=4,Cf=5;var Zs=100,Rf=101,If=102,Pf=103,Lf=104,Df=200,Nf=201,Uf=202,Ff=203,uu=204,du=205,Of=206,Bf=207,zf=208,kf=209,Vf=210,Hf=211,Gf=212,Wf=213,$f=214,ul=0,dl=1,fl=2,Cr=3,pl=4,ml=5,gl=6,_l=7,jl=0,Xf=1,qf=2,Ei=0,fu=1,pu=2,mu=3,gu=4,_u=5,xu=6,vu=7;var yu=300,Ms=301,Js=302,Ql=303,tc=304,io=306,xl=1e3,Di=1001,vl=1002,pn=1003,Yf=1004;var so=1005;var bn=1006,ec=1007;var bs=1008;var Qn=1009,Su=1010,Mu=1011,Gr=1012,nc=1013,Ti=1014,pi=1015,Ai=1016,ic=1017,sc=1018,Wr=1020,bu=35902,wu=35899,Eu=1021,Tu=1022,mi=1023,Ui=1026,ws=1027,rc=1028,ac=1029,Es=1030,oc=1031;var lc=1033,ro=33776,ao=33777,oo=33778,lo=33779,cc=35840,hc=35841,uc=35842,dc=35843,fc=36196,pc=37492,mc=37496,gc=37488,_c=37489,co=37490,xc=37491,vc=37808,yc=37809,Sc=37810,Mc=37811,bc=37812,wc=37813,Ec=37814,Tc=37815,Ac=37816,Cc=37817,Rc=37818,Ic=37819,Pc=37820,Lc=37821,Dc=36492,Nc=36494,Uc=36495,Fc=36283,Oc=36284,ho=36285,Bc=36286;var Ma=2300,yl=2301,cl=2302,Yh=2303,Zh=2400,Jh=2401,Kh=2402;var Zf=3200;var zc=0,Jf=1,ss="",si="srgb",ba="srgb-linear",wa="linear",Oe="srgb";var hl=7680;var Kf=519,jf=512,Qf=513,tp=514,kc=515,ep=516,np=517,Vc=518,ip=519,Au=35044;var Cu="300 es",Mi=2e3,Rr=2001;function qm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ym(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sp(){let i=Ea("canvas");return i.style.display="block",i}var kd={},Ir=null;function Ta(...i){let t="THREE."+i.shift();Ir?Ir("log",t,...i):console.log(t,...i)}function rp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function de(...i){i=rp(i);let t="THREE."+i.shift();if(Ir)Ir("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function me(...i){i=rp(i);let t="THREE."+i.shift();if(Ir)Ir("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Vs(...i){let t=i.join(" ");t in kd||(kd[t]=!0,de(...i))}function ap(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var op={[ul]:dl,[fl]:gl,[pl]:_l,[Cr]:ml,[dl]:ul,[gl]:fl,[_l]:pl,[ml]:Cr},Fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vd=1234567,xa=Math.PI/180,Pr=180/Math.PI;function Ni(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[e&63|128]+Pn[e>>8&255]+"-"+Pn[e>>16&255]+Pn[e>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function Ru(i,t){return(i%t+t)%t}function Zm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jm(i,t,e){return i!==t?(e-i)/(t-i):0}function va(i,t,e){return(1-e)*i+e*t}function Km(i,t,e,n){return va(i,t,1-Math.exp(-e*n))}function jm(i,t=1){return t-Math.abs(Ru(i,t*2)-t)}function Qm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function tg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function eg(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ng(i,t){return i+Math.random()*(t-i)}function ig(i){return i*(.5-Math.random())}function sg(i){i!==void 0&&(Vd=i);let t=Vd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rg(i){return i*xa}function ag(i){return i*Pr}function og(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function lg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hg(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),m=r((t-n)/2),u=a((t-n)/2),g=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*m,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*m,o*c);break;case"ZXZ":i.set(l*m,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*g,o*c);break;case"YXY":i.set(l*g,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*g,o*h,o*c);break;default:de("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Si(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Iu={DEG2RAD:xa,RAD2DEG:Pr,generateUUID:Ni,clamp:Se,euclideanModulo:Ru,mapLinear:Zm,inverseLerp:Jm,lerp:va,damp:Km,pingpong:jm,smoothstep:Qm,smootherstep:tg,randInt:eg,randFloat:ng,randFloatSpread:ig,seededRandom:sg,degToRad:rg,radToDeg:ag,isPowerOfTwo:og,ceilPowerOfTwo:lg,floorPowerOfTwo:cg,setQuaternionFromProperEuler:hg,normalize:He,denormalize:Si},Nt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Oi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],m=n[s+3],u=r[a+0],g=r[a+1],_=r[a+2],T=r[a+3];if(m!==T||l!==u||c!==g||h!==_){let p=l*u+c*g+h*_+m*T;p<0&&(u=-u,g=-g,_=-_,T=-T,p=-p);let f=1-o;if(p<.9995){let D=Math.acos(p),U=Math.sin(D);f=Math.sin(f*D)/U,o=Math.sin(o*D)/U,l=l*f+u*o,c=c*f+g*o,h=h*f+_*o,m=m*f+T*o}else{l=l*f+u*o,c=c*f+g*o,h=h*f+_*o,m=m*f+T*o;let D=1/Math.sqrt(l*l+c*c+h*h+m*m);l*=D,c*=D,h*=D,m*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],m=r[a],u=r[a+1],g=r[a+2],_=r[a+3];return t[e]=o*_+h*m+l*g-c*u,t[e+1]=l*_+h*u+c*m-o*g,t[e+2]=c*_+h*g+o*u-l*m,t[e+3]=h*_-o*m-l*u-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),m=o(r/2),u=l(n/2),g=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*m+c*g*_,this._y=c*g*m-u*h*_,this._z=c*h*_+u*g*m,this._w=c*h*m-u*g*_;break;case"YXZ":this._x=u*h*m+c*g*_,this._y=c*g*m-u*h*_,this._z=c*h*_-u*g*m,this._w=c*h*m+u*g*_;break;case"ZXY":this._x=u*h*m-c*g*_,this._y=c*g*m+u*h*_,this._z=c*h*_+u*g*m,this._w=c*h*m-u*g*_;break;case"ZYX":this._x=u*h*m-c*g*_,this._y=c*g*m+u*h*_,this._z=c*h*_-u*g*m,this._w=c*h*m+u*g*_;break;case"YZX":this._x=u*h*m+c*g*_,this._y=c*g*m+u*h*_,this._z=c*h*_-u*g*m,this._w=c*h*m-u*g*_;break;case"XZY":this._x=u*h*m-c*g*_,this._y=c*g*m-u*h*_,this._z=c*h*_+u*g*m,this._w=c*h*m+u*g*_;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],m=e[10],u=n+o+m;if(u>0){let g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>m){let g=2*Math.sqrt(1+n-o-m);this._w=(h-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>m){let g=2*Math.sqrt(1+o-n-m);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+m-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),m=2*(r*n-a*e);return this.x=e+l*c+a*m-o*h,this.y=n+l*h+o*c-r*m,this.z=s+l*m+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mh.copy(this).projectOnVector(t),this.sub(Mh)}reflect(t){return this.sub(Mh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mh=new z,Hd=new Oi,ye=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],m=n[7],u=n[2],g=n[5],_=n[8],T=s[0],p=s[3],f=s[6],D=s[1],U=s[4],E=s[7],b=s[2],I=s[5],B=s[8];return r[0]=a*T+o*D+l*b,r[3]=a*p+o*U+l*I,r[6]=a*f+o*E+l*B,r[1]=c*T+h*D+m*b,r[4]=c*p+h*U+m*I,r[7]=c*f+h*E+m*B,r[2]=u*T+g*D+_*b,r[5]=u*p+g*U+_*I,r[8]=u*f+g*E+_*B,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],m=h*a-o*c,u=o*l-h*r,g=c*r-a*l,_=e*m+n*u+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/_;return t[0]=m*T,t[1]=(s*c-h*n)*T,t[2]=(o*n-s*a)*T,t[3]=u*T,t[4]=(h*e-s*l)*T,t[5]=(s*r-o*e)*T,t[6]=g*T,t[7]=(n*l-c*e)*T,t[8]=(a*e-n*r)*T,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bh.makeScale(t,e)),this}rotate(t){return Vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bh.makeRotation(-t)),this}translate(t,e){return Vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},bh=new ye,Gd=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wd=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ug(){let i={enabled:!0,workingColorSpace:ba,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Oe&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Oe&&(s.r=Ar(s.r),s.g=Ar(s.g),s.b=Ar(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?wa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ba]:{primaries:t,whitePoint:n,transfer:wa,toXYZ:Gd,fromXYZ:Wd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:n,transfer:Oe,toXYZ:Gd,fromXYZ:Wd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),i}var Ce=ug();function ns(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ur,Sl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ur===void 0&&(ur=Ea("canvas")),ur.width=t.width,ur.height=t.height;let s=ur.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ur}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ea("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ns(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ns(e[n]/255)*255):e[n]=ns(e[n]);return{data:e,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dg=0,Lr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wh(s[a].image)):r.push(wh(s[a]))}else r=wh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function wh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}var fg=0,Eh=new z,Jn=class i extends Fi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Di,s=Di,r=bn,a=bs,o=mi,l=Qn,c=i.DEFAULT_ANISOTROPY,h=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=Ni(),this.name="",this.source=new Lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Eh).x}get height(){return this.source.getSize(Eh).y}get depth(){return this.source.getSize(Eh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){de(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){de(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xl:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case vl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xl:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case vl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=yu;Jn.DEFAULT_ANISOTROPY=1;var Be=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],m=l[8],u=l[1],g=l[5],_=l[9],T=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(m-T)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(m+T)<.1&&Math.abs(_+p)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let U=(c+1)/2,E=(g+1)/2,b=(f+1)/2,I=(h+u)/4,B=(m+T)/4,S=(_+p)/4;return U>E&&U>b?U<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(U),s=I/n,r=B/n):E>b?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=I/s,r=S/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=B/r,s=S/r),this.set(n,s,r,e),this}let D=Math.sqrt((p-_)*(p-_)+(m-T)*(m-T)+(u-h)*(u-h));return Math.abs(D)<.001&&(D=1),this.x=(p-_)/D,this.y=(m-T)/D,this.z=(u-h)/D,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ml=class extends Fi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Jn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Lr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends Ml{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Aa=class extends Jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var bl=class extends Jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Le=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,m,u,g,_,T,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,m,u,g,_,T,p)}set(t,e,n,s,r,a,o,l,c,h,m,u,g,_,T,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=m,f[14]=u,f[3]=g,f[7]=_,f[11]=T,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/dr.setFromMatrixColumn(t,0).length(),r=1/dr.setFromMatrixColumn(t,1).length(),a=1/dr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let u=a*h,g=a*m,_=o*h,T=o*m;e[0]=l*h,e[4]=-l*m,e[8]=c,e[1]=g+_*c,e[5]=u-T*c,e[9]=-o*l,e[2]=T-u*c,e[6]=_+g*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,g=l*m,_=c*h,T=c*m;e[0]=u+T*o,e[4]=_*o-g,e[8]=a*c,e[1]=a*m,e[5]=a*h,e[9]=-o,e[2]=g*o-_,e[6]=T+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,g=l*m,_=c*h,T=c*m;e[0]=u-T*o,e[4]=-a*m,e[8]=_+g*o,e[1]=g+_*o,e[5]=a*h,e[9]=T-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,g=a*m,_=o*h,T=o*m;e[0]=l*h,e[4]=_*c-g,e[8]=u*c+T,e[1]=l*m,e[5]=T*c+u,e[9]=g*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,g=a*c,_=o*l,T=o*c;e[0]=l*h,e[4]=T-u*m,e[8]=_*m+g,e[1]=m,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=g*m+_,e[10]=u-T*m}else if(t.order==="XZY"){let u=a*l,g=a*c,_=o*l,T=o*c;e[0]=l*h,e[4]=-m,e[8]=c*h,e[1]=u*m+T,e[5]=a*h,e[9]=g*m-_,e[2]=_*m-g,e[6]=o*h,e[10]=T*m+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pg,t,mg)}lookAt(t,e,n){let s=this.elements;return ni.subVectors(t,e),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),hs.crossVectors(n,ni),hs.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),hs.crossVectors(n,ni)),hs.normalize(),Fo.crossVectors(ni,hs),s[0]=hs.x,s[4]=Fo.x,s[8]=ni.x,s[1]=hs.y,s[5]=Fo.y,s[9]=ni.y,s[2]=hs.z,s[6]=Fo.z,s[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],m=n[5],u=n[9],g=n[13],_=n[2],T=n[6],p=n[10],f=n[14],D=n[3],U=n[7],E=n[11],b=n[15],I=s[0],B=s[4],S=s[8],P=s[12],O=s[1],G=s[5],j=s[9],et=s[13],X=s[2],Z=s[6],rt=s[10],at=s[14],Mt=s[3],ct=s[7],_t=s[11],xt=s[15];return r[0]=a*I+o*O+l*X+c*Mt,r[4]=a*B+o*G+l*Z+c*ct,r[8]=a*S+o*j+l*rt+c*_t,r[12]=a*P+o*et+l*at+c*xt,r[1]=h*I+m*O+u*X+g*Mt,r[5]=h*B+m*G+u*Z+g*ct,r[9]=h*S+m*j+u*rt+g*_t,r[13]=h*P+m*et+u*at+g*xt,r[2]=_*I+T*O+p*X+f*Mt,r[6]=_*B+T*G+p*Z+f*ct,r[10]=_*S+T*j+p*rt+f*_t,r[14]=_*P+T*et+p*at+f*xt,r[3]=D*I+U*O+E*X+b*Mt,r[7]=D*B+U*G+E*Z+b*ct,r[11]=D*S+U*j+E*rt+b*_t,r[15]=D*P+U*et+E*at+b*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],m=t[6],u=t[10],g=t[14],_=t[3],T=t[7],p=t[11],f=t[15],D=l*g-c*u,U=o*g-c*m,E=o*u-l*m,b=a*g-c*h,I=a*u-l*h,B=a*m-o*h;return e*(T*D-p*U+f*E)-n*(_*D-p*b+f*I)+s*(_*U-T*b+f*B)-r*(_*E-T*I+p*B)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],m=t[9],u=t[10],g=t[11],_=t[12],T=t[13],p=t[14],f=t[15],D=e*o-n*a,U=e*l-s*a,E=e*c-r*a,b=n*l-s*o,I=n*c-r*o,B=s*c-r*l,S=h*T-m*_,P=h*p-u*_,O=h*f-g*_,G=m*p-u*T,j=m*f-g*T,et=u*f-g*p,X=D*et-U*j+E*G+b*O-I*P+B*S;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/X;return t[0]=(o*et-l*j+c*G)*Z,t[1]=(s*j-n*et-r*G)*Z,t[2]=(T*B-p*I+f*b)*Z,t[3]=(u*I-m*B-g*b)*Z,t[4]=(l*O-a*et-c*P)*Z,t[5]=(e*et-s*O+r*P)*Z,t[6]=(p*E-_*B-f*U)*Z,t[7]=(h*B-u*E+g*U)*Z,t[8]=(a*j-o*O+c*S)*Z,t[9]=(n*O-e*j-r*S)*Z,t[10]=(_*I-T*E+f*D)*Z,t[11]=(m*E-h*I-g*D)*Z,t[12]=(o*P-a*G-l*S)*Z,t[13]=(e*G-n*P+s*S)*Z,t[14]=(T*U-_*b-p*D)*Z,t[15]=(h*b-m*U+u*D)*Z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,m=o+o,u=r*c,g=r*h,_=r*m,T=a*h,p=a*m,f=o*m,D=l*c,U=l*h,E=l*m,b=n.x,I=n.y,B=n.z;return s[0]=(1-(T+f))*b,s[1]=(g+E)*b,s[2]=(_-U)*b,s[3]=0,s[4]=(g-E)*I,s[5]=(1-(u+f))*I,s[6]=(p+D)*I,s[7]=0,s[8]=(_+U)*B,s[9]=(p-D)*B,s[10]=(1-(u+T))*B,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=dr.set(s[0],s[1],s[2]).length(),o=dr.set(s[4],s[5],s[6]).length(),l=dr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_i.copy(this);let c=1/a,h=1/o,m=1/l;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=m,_i.elements[9]*=m,_i.elements[10]*=m,e.setFromRotationMatrix(_i),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Mi,l=!1){let c=this.elements,h=2*r/(e-t),m=2*r/(n-s),u=(e+t)/(e-t),g=(n+s)/(n-s),_,T;if(l)_=r/(a-r),T=a*r/(a-r);else if(o===Mi)_=-(a+r)/(a-r),T=-2*a*r/(a-r);else if(o===Rr)_=-a/(a-r),T=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=m,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Mi,l=!1){let c=this.elements,h=2/(e-t),m=2/(n-s),u=-(e+t)/(e-t),g=-(n+s)/(n-s),_,T;if(l)_=1/(a-r),T=a/(a-r);else if(o===Mi)_=-2/(a-r),T=-(a+r)/(a-r);else if(o===Rr)_=-1/(a-r),T=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=m,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=_,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},dr=new z,_i=new Le,pg=new z(0,0,0),mg=new z(1,1,1),hs=new z,Fo=new z,ni=new z,$d=new Le,Xd=new Oi,is=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],m=s[2],u=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $d.makeRotationFromQuaternion(t),this.setFromRotationMatrix($d,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};is.DEFAULT_ORDER="XYZ";var Dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gg=0,qd=new z,fr=new Oi,Ki=new Le,Oo=new z,ha=new z,_g=new z,xg=new Oi,Yd=new z(1,0,0),Zd=new z(0,1,0),Jd=new z(0,0,1),Kd={type:"added"},vg={type:"removed"},pr={type:"childadded",child:null},Th={type:"childremoved",child:null},mn=class i extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new is,n=new Oi,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new ye}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fr.setFromAxisAngle(t,e),this.quaternion.multiply(fr),this}rotateOnWorldAxis(t,e){return fr.setFromAxisAngle(t,e),this.quaternion.premultiply(fr),this}rotateX(t){return this.rotateOnAxis(Yd,t)}rotateY(t){return this.rotateOnAxis(Zd,t)}rotateZ(t){return this.rotateOnAxis(Jd,t)}translateOnAxis(t,e){return qd.copy(t).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yd,t)}translateY(t){return this.translateOnAxis(Zd,t)}translateZ(t){return this.translateOnAxis(Jd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Oo.copy(t):Oo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(ha,Oo,this.up):Ki.lookAt(Oo,ha,this.up),this.quaternion.setFromRotationMatrix(Ki),s&&(Ki.extractRotation(s.matrixWorld),fr.setFromRotationMatrix(Ki),this.quaternion.premultiply(fr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(me("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kd),pr.child=t,this.dispatchEvent(pr),pr.child=null):me("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vg),Th.child=t,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kd),pr.child=t,this.dispatchEvent(pr),pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,t,_g),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,xg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),m=a(t.shapes),u=a(t.skeletons),g=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),u.length>0&&(n.skeletons=u),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};mn.DEFAULT_UP=new z(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bi=class extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},yg={type:"move"},Nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let T of t.hand.values()){let p=e.getJointPose(T,n),f=this._getHandJoint(c,T);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],u=h.position.distanceTo(m.position),g=.02,_=.005;c.inputState.pinching&&u>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new bi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function Ah(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var fe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ce.workingColorSpace){if(t=Ru(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ah(a,r,t+1/3),this.g=Ah(a,r,t),this.b=Ah(a,r,t-1/3)}return Ce.colorSpaceToWorking(this,s),this}setStyle(t,e=si){function n(r){r!==void 0&&parseFloat(r)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:de("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=si){let n=lp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Ce.workingToColorSpace(Ln.copy(this),t),Math.round(Se(Ln.r*255,0,255))*65536+Math.round(Se(Ln.g*255,0,255))*256+Math.round(Se(Ln.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ce.workingColorSpace){Ce.workingToColorSpace(Ln.copy(this),e);let n=Ln.r,s=Ln.g,r=Ln.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=h<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ce.workingColorSpace){return Ce.workingToColorSpace(Ln.copy(this),e),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=si){Ce.workingToColorSpace(Ln.copy(this),t);let e=Ln.r,n=Ln.g,s=Ln.b;return t!==si?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(us),this.setHSL(us.h+t,us.s+e,us.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(us),t.getHSL(Bo);let n=va(us.h,Bo.h,e),s=va(us.s,Bo.s,e),r=va(us.l,Bo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new fe;fe.NAMES=lp;var Ca=class extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},xi=new z,ji=new z,Ch=new z,Qi=new z,mr=new z,gr=new z,jd=new z,Rh=new z,Ih=new z,Ph=new z,Lh=new Be,Dh=new Be,Nh=new Be,ms=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xi.subVectors(t,e),s.cross(xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xi.subVectors(s,e),ji.subVectors(n,e),Ch.subVectors(t,e);let a=xi.dot(xi),o=xi.dot(ji),l=xi.dot(Ch),c=ji.dot(ji),h=ji.dot(Ch),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let u=1/m,g=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-g-_,_,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qi.x),l.addScaledVector(a,Qi.y),l.addScaledVector(o,Qi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Lh.setScalar(0),Dh.setScalar(0),Nh.setScalar(0),Lh.fromBufferAttribute(t,e),Dh.fromBufferAttribute(t,n),Nh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Lh,r.x),a.addScaledVector(Dh,r.y),a.addScaledVector(Nh,r.z),a}static isFrontFacing(t,e,n,s){return xi.subVectors(n,e),ji.subVectors(t,e),xi.cross(ji).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),xi.cross(ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;mr.subVectors(s,n),gr.subVectors(r,n),Rh.subVectors(t,n);let l=mr.dot(Rh),c=gr.dot(Rh);if(l<=0&&c<=0)return e.copy(n);Ih.subVectors(t,s);let h=mr.dot(Ih),m=gr.dot(Ih);if(h>=0&&m<=h)return e.copy(s);let u=l*m-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(mr,a);Ph.subVectors(t,r);let g=mr.dot(Ph),_=gr.dot(Ph);if(_>=0&&g<=_)return e.copy(r);let T=g*c-l*_;if(T<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(gr,o);let p=h*_-g*m;if(p<=0&&m-h>=0&&g-_>=0)return jd.subVectors(r,s),o=(m-h)/(m-h+(g-_)),e.copy(s).addScaledVector(jd,o);let f=1/(p+T+u);return a=T*f,o=u*f,e.copy(n).addScaledVector(mr,a).addScaledVector(gr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kn=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vi):vi.fromBufferAttribute(r,a),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zo.copy(n.boundingBox)),zo.applyMatrix4(t.matrixWorld),this.union(zo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ua),ko.subVectors(this.max,ua),_r.subVectors(t.a,ua),xr.subVectors(t.b,ua),vr.subVectors(t.c,ua),ds.subVectors(xr,_r),fs.subVectors(vr,xr),Fs.subVectors(_r,vr);let e=[0,-ds.z,ds.y,0,-fs.z,fs.y,0,-Fs.z,Fs.y,ds.z,0,-ds.x,fs.z,0,-fs.x,Fs.z,0,-Fs.x,-ds.y,ds.x,0,-fs.y,fs.x,0,-Fs.y,Fs.x,0];return!Uh(e,_r,xr,vr,ko)||(e=[1,0,0,0,1,0,0,0,1],!Uh(e,_r,xr,vr,ko))?!1:(Vo.crossVectors(ds,fs),e=[Vo.x,Vo.y,Vo.z],Uh(e,_r,xr,vr,ko))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ts),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ts=[new z,new z,new z,new z,new z,new z,new z,new z],vi=new z,zo=new kn,_r=new z,xr=new z,vr=new z,ds=new z,fs=new z,Fs=new z,ua=new z,ko=new z,Vo=new z,Os=new z;function Uh(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Os.fromArray(i,r);let o=s.x*Math.abs(Os.x)+s.y*Math.abs(Os.y)+s.z*Math.abs(Os.z),l=t.dot(Os),c=e.dot(Os),h=n.dot(Os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ln=new z,Ho=new Nt,Sg=0,We=class extends Fi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Au,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ho.fromBufferAttribute(this,e),Ho.applyMatrix3(t),this.setXY(e,Ho.x,Ho.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix3(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Si(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Si(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Si(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ra=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ia=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var en=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},Mg=new kn,da=new z,Fh=new z,jn=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Mg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;da.subVectors(t,this.center);let e=da.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(da,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(da.copy(t.center).add(Fh)),this.expandByPoint(da.copy(t.center).sub(Fh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},bg=0,fi=new Le,Oh=new mn,yr=new z,ii=new kn,fa=new kn,fn=new z,nn=class i extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qm(t)?Ia:Ra)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ye().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,e,n){return fi.makeTranslation(t,e,n),this.applyMatrix4(fi),this}scale(t,e,n){return fi.makeScale(t,e,n),this.applyMatrix4(fi),this}lookAt(t){return Oh.lookAt(t),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new en(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&me('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];fa.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(ii.min,fa.min),ii.expandByPoint(fn),fn.addVectors(ii.max,fa.max),ii.expandByPoint(fn)):(ii.expandByPoint(fa.min),ii.expandByPoint(fa.max))}ii.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)fn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(fn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)fn.fromBufferAttribute(o,c),l&&(yr.fromBufferAttribute(t,c),fn.add(yr)),s=Math.max(s,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&me('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){me("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let S=0;S<n.count;S++)o[S]=new z,l[S]=new z;let c=new z,h=new z,m=new z,u=new Nt,g=new Nt,_=new Nt,T=new z,p=new z;function f(S,P,O){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,P),m.fromBufferAttribute(n,O),u.fromBufferAttribute(r,S),g.fromBufferAttribute(r,P),_.fromBufferAttribute(r,O),h.sub(c),m.sub(c),g.sub(u),_.sub(u);let G=1/(g.x*_.y-_.x*g.y);isFinite(G)&&(T.copy(h).multiplyScalar(_.y).addScaledVector(m,-g.y).multiplyScalar(G),p.copy(m).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(G),o[S].add(T),o[P].add(T),o[O].add(T),l[S].add(p),l[P].add(p),l[O].add(p))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let S=0,P=D.length;S<P;++S){let O=D[S],G=O.start,j=O.count;for(let et=G,X=G+j;et<X;et+=3)f(t.getX(et+0),t.getX(et+1),t.getX(et+2))}let U=new z,E=new z,b=new z,I=new z;function B(S){b.fromBufferAttribute(s,S),I.copy(b);let P=o[S];U.copy(P),U.sub(b.multiplyScalar(b.dot(P))).normalize(),E.crossVectors(I,P);let G=E.dot(l[S])<0?-1:1;a.setXYZW(S,U.x,U.y,U.z,G)}for(let S=0,P=D.length;S<P;++S){let O=D[S],G=O.start,j=O.count;for(let et=G,X=G+j;et<X;et+=3)B(t.getX(et+0)),B(t.getX(et+1)),B(t.getX(et+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,g=n.count;u<g;u++)n.setXYZ(u,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,h=new z,m=new z;if(t)for(let u=0,g=t.count;u<g;u+=3){let _=t.getX(u+0),T=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,T),a.fromBufferAttribute(e,p),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(T,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,g=e.count;u<g;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,m=o.normalized,u=new c.constructor(l.length*h),g=0,_=0;for(let T=0,p=l.length;T<p;T++){o.isInterleavedBufferAttribute?g=l[T]*o.data.stride+o.offset:g=l[T]*h;for(let f=0;f<h;f++)u[_++]=c[g++]}return new We(u,h,m)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,m=c.length;h<m;h++){let u=c[h],g=t(u,n);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let m=0,u=c.length;m<u;m++){let g=c[m];h.push(g.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],m=r[c];for(let u=0,g=m.length;u<g;u++)h.push(m[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},wl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Au,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},zn=new z,wi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.applyMatrix4(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.applyNormalMatrix(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.transformDirection(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Si(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bh=new z,wg=new z,Eg=new ye,yi=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Bh.subVectors(n,e).cross(wg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Bh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Eg.getNormalMatrix(t),s=this.coplanarPoint(Bh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Tg=0,Bi=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Hr,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uu,this.blendDst=du,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hl,this.stencilZFail=hl,this.stencilZPass=hl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){de(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){de(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new fe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new yi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var es=new z,zh=new z,Go=new z,Wo=new z,Hs=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,es)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=es.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(es.copy(this.origin).addScaledVector(this.direction,e),es.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){zh.copy(t).add(e).multiplyScalar(.5),Go.copy(e).sub(t).normalize(),Wo.copy(this.origin).sub(zh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Go),o=Wo.dot(this.direction),l=-Wo.dot(Go),c=Wo.lengthSq(),h=Math.abs(1-a*a),m,u,g,_;if(h>0)if(m=a*l-o,u=a*o-l,_=r*h,m>=0)if(u>=-_)if(u<=_){let T=1/h;m*=T,u*=T,g=m*(m+a*u+2*o)+u*(a*m+u+2*l)+c}else u=r,m=Math.max(0,-(a*u+o)),g=-m*m+u*(u+2*l)+c;else u=-r,m=Math.max(0,-(a*u+o)),g=-m*m+u*(u+2*l)+c;else u<=-_?(m=Math.max(0,-(-a*r+o)),u=m>0?-r:Math.min(Math.max(-r,-l),r),g=-m*m+u*(u+2*l)+c):u<=_?(m=0,u=Math.min(Math.max(-r,-l),r),g=u*(u+2*l)+c):(m=Math.max(0,-(a*r+o)),u=m>0?r:Math.min(Math.max(-r,-l),r),g=-m*m+u*(u+2*l)+c);else u=a>0?-r:r,m=Math.max(0,-(a*u+o)),g=-m*m+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(zh).addScaledVector(Go,u),g}intersectSphere(t,e){if(t.radius<0)return null;es.subVectors(t.center,this.origin);let n=es.dot(this.direction),s=es.dot(es)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-u.z)*m,l=(t.max.z-u.z)*m):(o=(t.max.z-u.z)*m,l=(t.min.z-u.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,es)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,m=t.x-a.x,u=t.y-a.y,g=t.z-a.z,_=e.x-a.x,T=e.y-a.y,p=e.z-a.z,f=n.x-a.x,D=n.y-a.y,U=n.z-a.z,E=Math.abs(l),b=Math.abs(c),I=Math.abs(h),B,S,P,O,G,j,et,X,Z,rt,at,Mt;if(E>=b&&E>=I?(P=l,j=m,Z=_,Mt=f,l>=0?(B=c,S=h,O=u,G=g,et=T,X=p,rt=D,at=U):(B=h,S=c,O=g,G=u,et=p,X=T,rt=U,at=D)):b>=I?(P=c,j=u,Z=T,Mt=D,c>=0?(B=h,S=l,O=g,G=m,et=p,X=_,rt=U,at=f):(B=l,S=h,O=m,G=g,et=_,X=p,rt=f,at=U)):(P=h,j=g,Z=p,Mt=U,h>=0?(B=l,S=c,O=m,G=u,et=_,X=T,rt=f,at=D):(B=c,S=l,O=u,G=m,et=T,X=_,rt=D,at=f)),P===0)return null;let ct=B/P,_t=S/P,xt=1/P,Ht=O-ct*j,Gt=G-_t*j,Pe=et-ct*Z,Me=X-_t*Z,Ae=rt-ct*Mt,dt=at-_t*Mt,gt=Ae*Me-dt*Pe,Tt=Ht*dt-Gt*Ae,ne=Pe*Gt-Me*Ht;if(s){if(gt<0||Tt<0||ne<0)return null}else if((gt<0||Tt<0||ne<0)&&(gt>0||Tt>0||ne>0))return null;let Vt=gt+Tt+ne;if(Vt===0)return null;let ce=xt*(gt*j+Tt*Z+ne*Mt);return(Vt>0?ce<0:ce>0)?null:this.at(ce/Vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gs=class extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Qd=new Le,Bs=new Hs,$o=new jn,tf=new z,Xo=new z,qo=new z,Yo=new z,kh=new z,Zo=new z,ef=new z,Jo=new z,gn=class extends mn{constructor(t=new nn,e=new Gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],m=r[l];h!==0&&(kh.fromBufferAttribute(m,t),a?Zo.addScaledVector(kh,h):Zo.addScaledVector(kh.sub(e),h))}e.add(Zo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),Bs.copy(t.ray).recast(t.near),!($o.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere($o,tf)===null||Bs.origin.distanceToSquared(tf)>(t.far-t.near)**2))&&(Qd.copy(r).invert(),Bs.copy(t.ray).applyMatrix4(Qd),!(n.boundingBox!==null&&Bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,u=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,T=u.length;_<T;_++){let p=u[_],f=a[p.materialIndex],D=Math.max(p.start,g.start),U=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let E=D,b=U;E<b;E+=3){let I=o.getX(E),B=o.getX(E+1),S=o.getX(E+2);s=Ko(this,f,t,n,c,h,m,I,B,S),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),T=Math.min(o.count,g.start+g.count);for(let p=_,f=T;p<f;p+=3){let D=o.getX(p),U=o.getX(p+1),E=o.getX(p+2);s=Ko(this,a,t,n,c,h,m,D,U,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,T=u.length;_<T;_++){let p=u[_],f=a[p.materialIndex],D=Math.max(p.start,g.start),U=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let E=D,b=U;E<b;E+=3){let I=E,B=E+1,S=E+2;s=Ko(this,f,t,n,c,h,m,I,B,S),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),T=Math.min(l.count,g.start+g.count);for(let p=_,f=T;p<f;p+=3){let D=p,U=p+1,E=p+2;s=Ko(this,a,t,n,c,h,m,D,U,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Ag(i,t,e,n,s,r,a,o){let l;if(t.side===Vn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ss,o),l===null)return null;Jo.copy(o),Jo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Jo);return c<e.near||c>e.far?null:{distance:c,point:Jo.clone(),object:i}}function Ko(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Xo),i.getVertexPosition(l,qo),i.getVertexPosition(c,Yo);let h=Ag(i,t,e,n,Xo,qo,Yo,ef);if(h){let m=new z;ms.getBarycoord(ef,Xo,qo,Yo,m),s&&(h.uv=ms.getInterpolatedAttribute(s,o,l,c,m,new Nt)),r&&(h.uv1=ms.getInterpolatedAttribute(r,o,l,c,m,new Nt)),a&&(h.normal=ms.getInterpolatedAttribute(a,o,l,c,m,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new z,materialIndex:0};ms.getNormal(Xo,qo,Yo,u.normal),h.face=u,h.barycoord=m}return h}var Pa=class extends Jn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=pn,h=pn,m,u){super(null,a,o,l,c,h,s,r,m,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var La=class extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Sr=new Le,nf=new Le,jo=[],sf=new kn,Cg=new Le,pa=new gn,ma=new jn,Da=class extends gn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new La(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Sr),sf.copy(t.boundingBox).applyMatrix4(Sr),this.boundingBox.union(sf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Sr),ma.copy(t.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(ma)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(n),t.ray.intersectsSphere(ma)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Sr),nf.multiplyMatrices(n,Sr),pa.matrixWorld=nf,pa.raycast(t,jo);for(let a=0,o=jo.length;a<o;a++){let l=jo[a];l.instanceId=r,l.object=this,e.push(l)}jo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new La(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pa(new Float32Array(s*this.count),s,this.count,rc,pi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zs=new jn,Rg=new Nt(.5,.5),Qo=new z,Ur=class{constructor(t=new yi,e=new yi,n=new yi,s=new yi,r=new yi,a=new yi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mi,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],m=r[5],u=r[6],g=r[7],_=r[8],T=r[9],p=r[10],f=r[11],D=r[12],U=r[13],E=r[14],b=r[15];if(s[0].setComponents(c-a,g-h,f-_,b-D).normalize(),s[1].setComponents(c+a,g+h,f+_,b+D).normalize(),s[2].setComponents(c+o,g+m,f+T,b+U).normalize(),s[3].setComponents(c-o,g-m,f-T,b-U).normalize(),n)s[4].setComponents(l,u,p,E).normalize(),s[5].setComponents(c-l,g-u,f-p,b-E).normalize();else if(s[4].setComponents(c-l,g-u,f-p,b-E).normalize(),e===Mi)s[5].setComponents(c+l,g+u,f+p,b+E).normalize();else if(e===Rr)s[5].setComponents(l,u,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(t){zs.center.set(0,0,0);let e=Rg.distanceTo(t.center);return zs.radius=.7071067811865476+e,zs.applyMatrix4(t.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Qo.x=s.normal.x>0?t.max.x:t.min.x,Qo.y=s.normal.y>0?t.max.y:t.min.y,Qo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ws=class extends Bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},El=new z,Tl=new z,rf=new Le,ga=new Hs,tl=new jn,Vh=new z,af=new z,Al=class extends mn{constructor(t=new nn,e=new Ws){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)El.fromBufferAttribute(e,s-1),Tl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=El.distanceTo(Tl);t.setAttribute("lineDistance",new en(n,1))}else de("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(s),tl.radius+=r,t.ray.intersectsSphere(tl)===!1)return;rf.copy(s).invert(),ga.copy(t.ray).applyMatrix4(rf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let g=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let T=g,p=_-1;T<p;T+=c){let f=h.getX(T),D=h.getX(T+1),U=el(this,t,ga,l,f,D,T);U&&e.push(U)}if(this.isLineLoop){let T=h.getX(_-1),p=h.getX(g),f=el(this,t,ga,l,T,p,_-1);f&&e.push(f)}}else{let g=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let T=g,p=_-1;T<p;T+=c){let f=el(this,t,ga,l,T,T+1,T);f&&e.push(f)}if(this.isLineLoop){let T=el(this,t,ga,l,_-1,g,_-1);T&&e.push(T)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function el(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(El.fromBufferAttribute(o,s),Tl.fromBufferAttribute(o,r),e.distanceSqToSegment(El,Tl,Vh,af)>n)return;Vh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Vh);if(!(c<t.near||c>t.far))return{distance:c,point:af.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Na=class extends Al{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Cl=class extends Bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},of=new Le,jh=new Hs,nl=new jn,il=new z,$s=class extends mn{constructor(t=new nn,e=new Cl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(s),nl.radius+=r,t.ray.intersectsSphere(nl)===!1)return;of.copy(s).invert(),jh.copy(t.ray).applyMatrix4(of);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,m=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let _=u,T=g;_<T;_++){let p=c.getX(_);il.fromBufferAttribute(m,p),lf(il,p,l,s,t,e,this)}}else{let u=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count);for(let _=u,T=g;_<T;_++)il.fromBufferAttribute(m,_),lf(il,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function lf(i,t,e,n,s,r,a){let o=jh.distanceSqToPoint(i);if(o<e){let l=new z;jh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ua=class extends Jn{constructor(t=[],e=Ms,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var gs=class extends Jn{constructor(t,e,n=Ti,s,r,a,o=pn,l=pn,c,h=Ui,m=1){if(h!==Ui&&h!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:m};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Rl=class extends gs{constructor(t,e=Ti,n=Ms,s,r,a=pn,o=pn,l,c=Ui){let h={width:t,height:t,depth:1},m=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Fa=class extends Jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fr=class i extends nn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],m=[],u=0,g=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(m,2));function _(T,p,f,D,U,E,b,I,B,S,P){let O=E/B,G=b/S,j=E/2,et=b/2,X=I/2,Z=B+1,rt=S+1,at=0,Mt=0,ct=new z;for(let _t=0;_t<rt;_t++){let xt=_t*G-et;for(let Ht=0;Ht<Z;Ht++){let Gt=Ht*O-j;ct[T]=Gt*D,ct[p]=xt*U,ct[f]=X,c.push(ct.x,ct.y,ct.z),ct[T]=0,ct[p]=0,ct[f]=I>0?1:-1,h.push(ct.x,ct.y,ct.z),m.push(Ht/B),m.push(1-_t/S),at+=1}}for(let _t=0;_t<S;_t++)for(let xt=0;xt<B;xt++){let Ht=u+xt+Z*_t,Gt=u+xt+Z*(_t+1),Pe=u+(xt+1)+Z*(_t+1),Me=u+(xt+1)+Z*_t;l.push(Ht,Gt,Me),l.push(Gt,Pe,Me),Mt+=6}o.addGroup(g,Mt,P),g+=Mt,u+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Oa=class i extends nn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],m=[],u=[],g=[],_=0,T=[],p=n/2,f=0;D(),a===!1&&(t>0&&U(!0),e>0&&U(!1)),this.setIndex(h),this.setAttribute("position",new en(m,3)),this.setAttribute("normal",new en(u,3)),this.setAttribute("uv",new en(g,2));function D(){let E=new z,b=new z,I=0,B=(e-t)/n;for(let S=0;S<=r;S++){let P=[],O=S/r,G=O*(e-t)+t;for(let j=0;j<=s;j++){let et=j/s,X=et*l+o,Z=Math.sin(X),rt=Math.cos(X);b.x=G*Z,b.y=-O*n+p,b.z=G*rt,m.push(b.x,b.y,b.z),E.set(Z,B,rt).normalize(),u.push(E.x,E.y,E.z),g.push(et,1-O),P.push(_++)}T.push(P)}for(let S=0;S<s;S++)for(let P=0;P<r;P++){let O=T[P][S],G=T[P+1][S],j=T[P+1][S+1],et=T[P][S+1];(t>0||P!==0)&&(h.push(O,G,et),I+=3),(e>0||P!==r-1)&&(h.push(G,j,et),I+=3)}c.addGroup(f,I,0),f+=I}function U(E){let b=_,I=new Nt,B=new z,S=0,P=E===!0?t:e,O=E===!0?1:-1;for(let j=1;j<=s;j++)m.push(0,p*O,0),u.push(0,O,0),g.push(.5,.5),_++;let G=_;for(let j=0;j<=s;j++){let X=j/s*l+o,Z=Math.cos(X),rt=Math.sin(X);B.x=P*rt,B.y=p*O,B.z=P*Z,m.push(B.x,B.y,B.z),u.push(0,O,0),I.x=Z*.5+.5,I.y=rt*.5*O+.5,g.push(I.x,I.y),_++}for(let j=0;j<s;j++){let et=b+j,X=G+j;E===!0?h.push(X,X+1,et):h.push(X+1,X,et),S+=3}c.addGroup(f,S,E===!0?1:2),f+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ri=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){de("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,g=(a-h)/u;return(s+g)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Nt:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new z,s=[],r=[],a=[],o=new z,l=new Le;for(let g=0;g<=t;g++){let _=g/t;s[g]=this.getTangentAt(_,new z)}r[0]=new z,a[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),m=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(s[g-1],s[g]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(Se(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(o,_))}a[g].crossVectors(s[g],r[g])}if(e===!0){let g=Math.acos(Se(r[0].dot(r[t]),-1,1));g/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(g=-g);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],g*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Or=class extends ri{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),u=l-this.aX,g=c-this.aY;l=u*h-g*m+this.aX,c=u*m+g*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Il=class extends Or{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Pu(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,m){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,g=(o-a)/h-(l-a)/(h+m)+(l-o)/m;u*=h,g*=h,s(a,o,u,g)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var cf=new z,hf=new z,Hh=new Pu,Gh=new Pu,Wh=new Pu,Pl=class extends ri{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(hf.subVectors(s[0],s[1]).add(s[0]),c=hf);let m=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(cf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=cf),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(m),g),T=Math.pow(m.distanceToSquared(u),g),p=Math.pow(u.distanceToSquared(h),g);T<1e-4&&(T=1),_<1e-4&&(_=T),p<1e-4&&(p=T),Hh.initNonuniformCatmullRom(c.x,m.x,u.x,h.x,_,T,p),Gh.initNonuniformCatmullRom(c.y,m.y,u.y,h.y,_,T,p),Wh.initNonuniformCatmullRom(c.z,m.z,u.z,h.z,_,T,p)}else this.curveType==="catmullrom"&&(Hh.initCatmullRom(c.x,m.x,u.x,h.x,this.tension),Gh.initCatmullRom(c.y,m.y,u.y,h.y,this.tension),Wh.initCatmullRom(c.z,m.z,u.z,h.z,this.tension));return n.set(Hh.calc(l),Gh.calc(l),Wh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function uf(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Ig(i,t){let e=1-i;return e*e*t}function Pg(i,t){return 2*(1-i)*i*t}function Lg(i,t){return i*i*t}function ya(i,t,e,n){return Ig(i,t)+Pg(i,e)+Lg(i,n)}function Dg(i,t){let e=1-i;return e*e*e*t}function Ng(i,t){let e=1-i;return 3*e*e*i*t}function Ug(i,t){return 3*(1-i)*i*i*t}function Fg(i,t){return i*i*i*t}function Sa(i,t,e,n,s){return Dg(i,t)+Ng(i,e)+Ug(i,n)+Fg(i,s)}var Ba=class extends ri{constructor(t=new Nt,e=new Nt,n=new Nt,s=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Sa(t,s.x,r.x,a.x,o.x),Sa(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ll=class extends ri{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Sa(t,s.x,r.x,a.x,o.x),Sa(t,s.y,r.y,a.y,o.y),Sa(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},za=class extends ri{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dl=class extends ri{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ka=class extends ri{constructor(t=new Nt,e=new Nt,n=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ya(t,s.x,r.x,a.x),ya(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nl=class extends ri{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ya(t,s.x,r.x,a.x),ya(t,s.y,r.y,a.y),ya(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Va=class extends ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return n.set(uf(o,l.x,c.x,h.x,m.x),uf(o,l.y,c.y,h.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Nt().fromArray(s))}return this}},Qh=Object.freeze({__proto__:null,ArcCurve:Il,CatmullRomCurve3:Pl,CubicBezierCurve:Ba,CubicBezierCurve3:Ll,EllipseCurve:Or,LineCurve:za,LineCurve3:Dl,QuadraticBezierCurve:ka,QuadraticBezierCurve3:Nl,SplineCurve:Va}),Ul=class extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Qh[s.type]().fromJSON(s))}return this}},Xs=class extends Ul{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new za(this.currentPoint.clone(),new Nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ka(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ba(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s),new Nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Va(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Or(t,e,n,s,r,a,o,l);if(this.curves.length>0){let m=c.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Br=class extends Xs{constructor(t){super(t),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Xs().fromJSON(s))}return this}};function Og(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=cp(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Hg(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,m=l;for(let u=e;u<s;u+=e){let g=i[u],_=i[u+1];g<o&&(o=g),_<l&&(l=_),g>h&&(h=g),_>m&&(m=_)}c=Math.max(h-o,m-l),c=c!==0?32767/c:0}return Ha(r,a,e,o,l,c,0),a}function cp(i,t,e,n,s){let r;if(s===Qg(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=df(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=df(a/n|0,i[a],i[a+1],r);return r&&zr(r,r.next)&&(Wa(r),r=r.next),r}function qs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zr(e,e.next)||Qe(e.prev,e,e.next)===0)){if(Wa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ha(i,t,e,n,s,r,a){if(!i)return;!a&&r&&qg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?zg(i,n,s,r):Bg(i)){t.push(l.i,i.i,c.i),Wa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=kg(qs(i),t),Ha(i,t,e,n,s,r,2)):a===2&&Vg(i,t,e,n,s,r):Ha(qs(i),t,e,n,s,r,1);break}}}function Bg(i){let t=i.prev,e=i,n=i.next;if(Qe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),m=Math.min(o,l,c),u=Math.max(s,r,a),g=Math.max(o,l,c),_=n.next;for(;_!==t;){if(_.x>=h&&_.x<=u&&_.y>=m&&_.y<=g&&_a(s,o,r,l,a,c,_.x,_.y)&&Qe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function zg(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Qe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,m=r.y,u=a.y,g=Math.min(o,l,c),_=Math.min(h,m,u),T=Math.max(o,l,c),p=Math.max(h,m,u),f=tu(g,_,t,e,n),D=tu(T,p,t,e,n),U=i.prevZ,E=i.nextZ;for(;U&&U.z>=f&&E&&E.z<=D;){if(U.x>=g&&U.x<=T&&U.y>=_&&U.y<=p&&U!==s&&U!==a&&_a(o,h,l,m,c,u,U.x,U.y)&&Qe(U.prev,U,U.next)>=0||(U=U.prevZ,E.x>=g&&E.x<=T&&E.y>=_&&E.y<=p&&E!==s&&E!==a&&_a(o,h,l,m,c,u,E.x,E.y)&&Qe(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;U&&U.z>=f;){if(U.x>=g&&U.x<=T&&U.y>=_&&U.y<=p&&U!==s&&U!==a&&_a(o,h,l,m,c,u,U.x,U.y)&&Qe(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;E&&E.z<=D;){if(E.x>=g&&E.x<=T&&E.y>=_&&E.y<=p&&E!==s&&E!==a&&_a(o,h,l,m,c,u,E.x,E.y)&&Qe(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function kg(i,t){let e=i;do{let n=e.prev,s=e.next.next;!zr(n,s)&&up(n,e,e.next,s)&&Ga(n,s)&&Ga(s,n)&&(t.push(n.i,e.i,s.i),Wa(e),Wa(e.next),e=i=s),e=e.next}while(e!==i);return qs(e)}function Vg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Jg(a,o)){let l=dp(a,o);a=qs(a,a.next),l=qs(l,l.next),Ha(a,t,e,n,s,r,0),Ha(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Hg(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=cp(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Zg(c))}s.sort(Gg);for(let r=0;r<s.length;r++)e=Wg(s[r],e);return e}function Gg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Wg(i,t){let e=$g(i,t);if(!e)return t;let n=dp(e,i);return qs(n,n.next),qs(e,e.next)}function $g(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(zr(i,e))return e;do{if(zr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let m=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=n&&m>r&&(r=m,a=e.x<e.next.x?e:e.next,m===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&hp(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let m=Math.abs(s-e.y)/(n-e.x);Ga(e,i)&&(m<h||m===h&&(e.x>a.x||e.x===a.x&&Xg(a,e)))&&(a=e,h=m)}e=e.next}while(e!==o);return a}function Xg(i,t){return Qe(i.prev,i,t.prev)<0&&Qe(t.next,i,i.next)<0}function qg(i,t,e,n){let s=i;do s.z===0&&(s.z=tu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Yg(s)}function Yg(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function tu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Zg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function hp(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function _a(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&hp(i,t,e,n,s,r,a,o)}function Jg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Kg(i,t)&&(Ga(i,t)&&Ga(t,i)&&jg(i,t)&&(Qe(i.prev,i,t.prev)||Qe(i,t.prev,t))||zr(i,t)&&Qe(i.prev,i,i.next)>0&&Qe(t.prev,t,t.next)>0)}function Qe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zr(i,t){return i.x===t.x&&i.y===t.y}function up(i,t,e,n){let s=rl(Qe(i,t,e)),r=rl(Qe(i,t,n)),a=rl(Qe(e,n,i)),o=rl(Qe(e,n,t));return!!(s!==r&&a!==o||s===0&&sl(i,e,t)||r===0&&sl(i,n,t)||a===0&&sl(e,i,n)||o===0&&sl(e,t,n))}function sl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function rl(i){return i>0?1:i<0?-1:0}function Kg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&up(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ga(i,t){return Qe(i.prev,i,i.next)<0?Qe(i,t,i.next)>=0&&Qe(i,i.prev,t)>=0:Qe(i,t,i.prev)<0||Qe(i,i.next,t)<0}function jg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function dp(i,t){let e=eu(i.i,i.x,i.y),n=eu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function df(i,t,e,n){let s=eu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Wa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function eu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var nu=class{static triangulate(t,e,n=2){return Og(t,e,n)}},ks=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ff(t),pf(n,t);let a=t.length;e.forEach(ff);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,pf(n,e[l]);let o=nu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ff(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function pf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var $a=class i extends nn{constructor(t=new Br([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new en(s,3)),this.setAttribute("uv",new en(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,m=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:g-.1,T=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,D=e.UVGenerator!==void 0?e.UVGenerator:t0,U,E=!1,b,I,B,S;if(f){U=f.getSpacedPoints(h),E=!0,u=!1;let st=f.isCatmullRomCurve3?f.closed:!1;b=f.computeFrenetFrames(h,st),I=new z,B=new z,S=new z}u||(p=0,g=0,_=0,T=0);let P=o.extractPoints(c),O=P.shape,G=P.holes;if(!ks.isClockWise(O)){O=O.reverse();for(let st=0,bt=G.length;st<bt;st++){let V=G[st];ks.isClockWise(V)&&(G[st]=V.reverse())}}function et(st){let V=10000000000000001e-36,wt=st[0];for(let Lt=1;Lt<=st.length;Lt++){let se=Lt%st.length,qt=st[se],oe=qt.x-wt.x,re=qt.y-wt.y,H=oe*oe+re*re,Re=Math.max(Math.abs(qt.x),Math.abs(qt.y),Math.abs(wt.x),Math.abs(wt.y)),Wt=V*Re*Re;if(H<=Wt){st.splice(se,1),Lt--;continue}wt=qt}}et(O),G.forEach(et);let X=G.length,Z=O;for(let st=0;st<X;st++){let bt=G[st];O=O.concat(bt)}function rt(st,bt,V){return bt||me("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(bt,V)}let at=O.length;function Mt(st,bt,V){let wt,Lt,se,qt=st.x-bt.x,oe=st.y-bt.y,re=V.x-st.x,H=V.y-st.y,Re=qt*qt+oe*oe,Wt=qt*H-oe*re;if(Math.abs(Wt)>Number.EPSILON){let R=Math.sqrt(Re),v=Math.sqrt(re*re+H*H),J=bt.x-oe/R,it=bt.y+qt/R,ot=V.x-H/v,At=V.y+re/v,It=((ot-J)*H-(At-it)*re)/(qt*H-oe*re);wt=J+qt*It-st.x,Lt=it+oe*It-st.y;let ut=wt*wt+Lt*Lt;if(ut<=2)return new Nt(wt,Lt);se=Math.sqrt(ut/2)}else{let R=!1;qt>Number.EPSILON?re>Number.EPSILON&&(R=!0):qt<-Number.EPSILON?re<-Number.EPSILON&&(R=!0):Math.sign(oe)===Math.sign(H)&&(R=!0),R?(wt=-oe,Lt=qt,se=Math.sqrt(Re)):(wt=qt,Lt=oe,se=Math.sqrt(Re/2))}return new Nt(wt/se,Lt/se)}let ct=[];for(let st=0,bt=Z.length,V=bt-1,wt=st+1;st<bt;st++,V++,wt++)V===bt&&(V=0),wt===bt&&(wt=0),ct[st]=Mt(Z[st],Z[V],Z[wt]);let _t=[],xt,Ht=ct.concat();for(let st=0,bt=X;st<bt;st++){let V=G[st];xt=[];for(let wt=0,Lt=V.length,se=Lt-1,qt=wt+1;wt<Lt;wt++,se++,qt++)se===Lt&&(se=0),qt===Lt&&(qt=0),xt[wt]=Mt(V[wt],V[se],V[qt]);_t.push(xt),Ht=Ht.concat(xt)}let Gt;if(p===0)Gt=ks.triangulateShape(Z,G);else{let st=[],bt=[];for(let V=0;V<p;V++){let wt=V/p,Lt=g*Math.cos(wt*Math.PI/2),se=_*Math.sin(wt*Math.PI/2)+T;for(let qt=0,oe=Z.length;qt<oe;qt++){let re=rt(Z[qt],ct[qt],se);Tt(re.x,re.y,-Lt),wt===0&&st.push(re)}for(let qt=0,oe=X;qt<oe;qt++){let re=G[qt];xt=_t[qt];let H=[];for(let Re=0,Wt=re.length;Re<Wt;Re++){let R=rt(re[Re],xt[Re],se);Tt(R.x,R.y,-Lt),wt===0&&H.push(R)}wt===0&&bt.push(H)}}Gt=ks.triangulateShape(st,bt)}let Pe=Gt.length,Me=_+T;for(let st=0;st<at;st++){let bt=u?rt(O[st],Ht[st],Me):O[st];E?(B.copy(b.normals[0]).multiplyScalar(bt.x),I.copy(b.binormals[0]).multiplyScalar(bt.y),S.copy(U[0]).add(B).add(I),Tt(S.x,S.y,S.z)):Tt(bt.x,bt.y,0)}for(let st=1;st<=h;st++)for(let bt=0;bt<at;bt++){let V=u?rt(O[bt],Ht[bt],Me):O[bt];E?(B.copy(b.normals[st]).multiplyScalar(V.x),I.copy(b.binormals[st]).multiplyScalar(V.y),S.copy(U[st]).add(B).add(I),Tt(S.x,S.y,S.z)):Tt(V.x,V.y,m/h*st)}for(let st=p-1;st>=0;st--){let bt=st/p,V=g*Math.cos(bt*Math.PI/2),wt=_*Math.sin(bt*Math.PI/2)+T;for(let Lt=0,se=Z.length;Lt<se;Lt++){let qt=rt(Z[Lt],ct[Lt],wt);Tt(qt.x,qt.y,m+V)}for(let Lt=0,se=G.length;Lt<se;Lt++){let qt=G[Lt];xt=_t[Lt];for(let oe=0,re=qt.length;oe<re;oe++){let H=rt(qt[oe],xt[oe],wt);E?Tt(H.x,H.y+U[h-1].y,U[h-1].x+V):Tt(H.x,H.y,m+V)}}}Ae(),dt();function Ae(){let st=s.length/3;if(u){let bt=0,V=at*bt;for(let wt=0;wt<Pe;wt++){let Lt=Gt[wt];ne(Lt[2]+V,Lt[1]+V,Lt[0]+V)}bt=h+p*2,V=at*bt;for(let wt=0;wt<Pe;wt++){let Lt=Gt[wt];ne(Lt[0]+V,Lt[1]+V,Lt[2]+V)}}else{for(let bt=0;bt<Pe;bt++){let V=Gt[bt];ne(V[2],V[1],V[0])}for(let bt=0;bt<Pe;bt++){let V=Gt[bt];ne(V[0]+at*h,V[1]+at*h,V[2]+at*h)}}n.addGroup(st,s.length/3-st,0)}function dt(){let st=s.length/3,bt=0;gt(Z,bt),bt+=Z.length;for(let V=0,wt=G.length;V<wt;V++){let Lt=G[V];gt(Lt,bt),bt+=Lt.length}n.addGroup(st,s.length/3-st,1)}function gt(st,bt){let V=st.length;for(;--V>=0;){let wt=V,Lt=V-1;Lt<0&&(Lt=st.length-1);for(let se=0,qt=h+p*2;se<qt;se++){let oe=at*se,re=at*(se+1),H=bt+wt+oe,Re=bt+Lt+oe,Wt=bt+Lt+re,R=bt+wt+re;Vt(H,Re,Wt,R)}}}function Tt(st,bt,V){l.push(st),l.push(bt),l.push(V)}function ne(st,bt,V){ce(st),ce(bt),ce(V);let wt=s.length/3,Lt=D.generateTopUV(n,s,wt-3,wt-2,wt-1);ue(Lt[0]),ue(Lt[1]),ue(Lt[2])}function Vt(st,bt,V,wt){ce(st),ce(bt),ce(wt),ce(bt),ce(V),ce(wt);let Lt=s.length/3,se=D.generateSideWallUV(n,s,Lt-6,Lt-3,Lt-2,Lt-1);ue(se[0]),ue(se[1]),ue(se[3]),ue(se[1]),ue(se[2]),ue(se[3])}function ce(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function ue(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return e0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Qh[s.type]().fromJSON(s)),new i(n,t.options)}},t0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Nt(r,a),new Nt(o,l),new Nt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],m=t[n*3+2],u=t[s*3],g=t[s*3+1],_=t[s*3+2],T=t[r*3],p=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Nt(a,1-l),new Nt(c,1-m),new Nt(u,1-_),new Nt(T,1-f)]:[new Nt(o,1-l),new Nt(h,1-m),new Nt(g,1-_),new Nt(p,1-f)]}};function e0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Xa=class i extends nn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,m=t/o,u=e/l,g=[],_=[],T=[],p=[];for(let f=0;f<h;f++){let D=f*u-a;for(let U=0;U<c;U++){let E=U*m-r;_.push(E,-D,0),T.push(0,0,1),p.push(U/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let D=0;D<o;D++){let U=D+c*f,E=D+c*(f+1),b=D+1+c*(f+1),I=D+1+c*f;g.push(U,E,I),g.push(E,b,I)}this.setIndex(g),this.setAttribute("position",new en(_,3)),this.setAttribute("normal",new en(T,3)),this.setAttribute("uv",new en(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var qa=class extends nn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new z,r=new z;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let m=l[c],u=m.start,g=m.count;for(let _=u,T=u+g;_<T;_+=3)for(let p=0;p<3;p++){let f=o.getX(_+p),D=o.getX(_+(p+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,D),mf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,m=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,m),mf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new en(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function mf(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Ks(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(gf(s))s.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(gf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Nn(i){let t={};for(let e=0;e<i.length;e++){let n=Ks(i[e]);for(let s in n)t[s]=n[s]}return t}function gf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function n0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}var uo={clone:Ks,merge:Nn},i0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i0,this.fragmentShader=s0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ks(t.uniforms),this.uniformsGroups=n0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ye().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Fl=class extends _n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ya=class extends Bi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=jl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ol=class extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Bl=class extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Mr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function $h(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var _s=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},zl=class extends _s{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zh,endingEnd:Zh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Jh:r=t,o=2*e-n;break;case Kh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jh:a=t,l=2*n-e;break;case Kh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,m=this._offsetNext,u=this._weightPrev,g=this._weightNext,_=(n-e)/(s-e),T=_*_,p=T*_,f=-u*p+2*u*T-u*_,D=(1+u)*p+(-1.5-2*u)*T+(-.5+u)*_+1,U=(-1-g)*p+(1.5+g)*T+.5*_,E=g*p-g*T;for(let b=0;b!==o;++b)r[b]=f*a[h+b]+D*a[c+b]+U*a[l+b]+E*a[m+b];return r}},kl=class extends _s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),m=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*m+a[l+u]*h;return r}},Vl=class extends _s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Hl=class extends _s{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,m=this.outTangents;if(!h||!m){let _=(n-e)/(s-e),T=1-_;for(let p=0;p!==o;++p)r[p]=a[c+p]*T+a[l+p]*_;return r}let u=o*2,g=t-1;for(let _=0;_!==o;++_){let T=a[c+_],p=a[l+_],f=g*u+_*2,D=m[f],U=m[f+1],E=t*u+_*2,b=h[E],I=h[E+1],B=a0(n,e,D,b,s);r[_]=fp(B,T,U,I,p)}return r}};function fp(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function r0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function a0(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=fp(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=r0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ai=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mr(e,this.TimeBufferType),this.values=Mr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Mr(t.times,Array),values:Mr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),$h(t.settings)&&(n.settings={inTangents:Mr(t.settings.inTangents,Array),outTangents:Mr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Hl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ma:e=this.InterpolantFactoryMethodDiscrete;break;case yl:e=this.InterpolantFactoryMethodLinear;break;case cl:e=this.InterpolantFactoryMethodSmooth;break;case Yh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return de("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ma;case this.InterpolantFactoryMethodLinear:return yl;case this.InterpolantFactoryMethodSmooth:return cl;case this.InterpolantFactoryMethodBezier:return Yh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;$h(this.settings)&&(_f(this.settings.inTangents,t),_f(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(me("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(me("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){me("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){me("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Ym(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){me("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===cl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let m=o*n,u=m-n,g=m+n;for(let _=0;_!==n;++_){let T=e[m+_];if(T!==e[u+_]||T!==e[g+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let m=o*n,u=a*n;for(let g=0;g!==n;++g)e[u+g]=e[m+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,$h(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function _f(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}ai.prototype.ValueTypeName="";ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=yl;var xs=class extends ai{constructor(t,e,n){super(t,e,n)}};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Ma;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Gl=class extends ai{constructor(t,e,n,s){super(t,e,n,s)}};Gl.prototype.ValueTypeName="color";var Wl=class extends ai{constructor(t,e,n,s){super(t,e,n,s)}};Wl.prototype.ValueTypeName="number";var $l=class extends _s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Oi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Za=class extends ai{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new $l(this.times,this.values,this.getValueSize(),t)}};Za.prototype.ValueTypeName="quaternion";Za.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends ai{constructor(t,e,n){super(t,e,n)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Ma;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends ai{constructor(t,e,n,s){super(t,e,n,s)}};Xl.prototype.ValueTypeName="vector";var ql=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,m){return c.push(h,m),this},this.removeHandler=function(h){let m=c.indexOf(h);return m!==-1&&c.splice(m,2),this},this.getHandler=function(h){for(let m=0,u=c.length;m<u;m+=2){let g=c[m],_=c[m+1];if(g.global&&(g.lastIndex=0),g.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pp=new ql,Yl=class{constructor(t){this.manager=t!==void 0?t:pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Yl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ja=class extends mn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ka=class extends Ja{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Xh=new Le,xf=new z,vf=new z,Zl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;xf.setFromMatrixPosition(t.matrixWorld),e.position.copy(xf),vf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Xh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Xh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Rr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Xh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},al=new z,ol=new Oi,Li=new z,ja=class extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(al,ol,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ol,Li.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(al,ol,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ol,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ps=new z,yf=new Nt,Sf=new Nt,Dn=class extends ja{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ps.x,ps.y).multiplyScalar(-t/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ps.x,ps.y).multiplyScalar(-t/ps.z)}getViewSize(t,e){return this.getViewBounds(t,yf,Sf),e.subVectors(Sf,yf)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var kr=class extends ja{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},iu=class extends Zl{constructor(){super(new kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qa=class extends Ja{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new iu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var to=class extends nn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var br=-90,wr=1,Jl=class extends mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dn(br,wr,t,e);s.layers=this.layers,this.add(s);let r=new Dn(br,wr,t,e);r.layers=this.layers,this.add(r);let a=new Dn(br,wr,t,e);a.layers=this.layers,this.add(a);let o=new Dn(br,wr,t,e);o.layers=this.layers,this.add(o);let l=new Dn(br,wr,t,e);l.layers=this.layers,this.add(l);let c=new Dn(br,wr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,m=t.getRenderTarget(),u=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=T,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(m,u,g),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Kl=class extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Du="\\[\\]\\.:\\/",o0=new RegExp("["+Du+"]","g"),Nu="[^"+Du+"]",l0="[^"+Du.replace("\\.","")+"]",c0=/((?:WC+[\/:])*)/.source.replace("WC",Nu),h0=/(WCOD+)?/.source.replace("WCOD",l0),u0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nu),d0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nu),f0=new RegExp("^"+c0+h0+u0+d0+"$"),p0=["material","materials","bones","map"],su=class{constructor(t,e,n){let s=n||Ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ke=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(o0,"")}static parseTrackName(t){let e=f0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);p0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){de("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){me("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){me("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){me("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){me("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){me("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){me("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){me("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;me("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){me("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){me("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ke.Composite=su;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RS=new Float32Array(1);var ys=class extends wl{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Mf=new Le,Ys=class{constructor(t,e,n=0,s=1/0){this.ray=new Hs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):me("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Mf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mf),this}intersectObject(t,e=!0,n=[]){return ru(t,this,n,e),n.sort(bf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ru(t[s],this,n,e);return n.sort(bf),n}};function bf(i,t){return i.distance-t.distance}function ru(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ru(r[a],t,e,!0)}}var au=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var wf=new z,ll=new z,Er=new z,Tr=new z,qh=new z,m0=new z,g0=new z,eo=class{constructor(t=new z,e=new z){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){wf.subVectors(t,this.start),ll.subVectors(this.end,this.start);let n=ll.dot(ll);if(n===0)return 0;let r=ll.dot(wf)/n;return e&&(r=Se(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=m0,n=g0){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;Er.subVectors(c,o),Tr.subVectors(h,l),qh.subVectors(o,l);let m=Er.dot(Er),u=Tr.dot(Tr),g=Tr.dot(qh);if(m<=s&&u<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(m<=s)r=0,a=g/u,a=Se(a,0,1);else{let _=Er.dot(qh);if(u<=s)a=0,r=Se(-_/m,0,1);else{let T=Er.dot(Tr),p=m*u-T*T;p!==0?r=Se((T*g-_*u)/p,0,1):r=0,a=(T*r+g)/u,a<0?(a=0,r=Se(-_/m,0,1)):a>1&&(a=1,r=Se((T-_)/m,0,1))}}return e.copy(o).addScaledVector(Er,r),n.copy(l).addScaledVector(Tr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Uu(i,t,e,n){let s=_0(n);switch(e){case Eu:return i*t;case rc:return i*t/s.components*s.byteLength;case ac:return i*t/s.components*s.byteLength;case Es:return i*t*2/s.components*s.byteLength;case oc:return i*t*2/s.components*s.byteLength;case Tu:return i*t*3/s.components*s.byteLength;case mi:return i*t*4/s.components*s.byteLength;case lc:return i*t*4/s.components*s.byteLength;case ro:case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oo:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hc:case dc:return Math.max(i,16)*Math.max(t,8)/4;case cc:case uc:return Math.max(i,8)*Math.max(t,8)/2;case fc:case pc:case gc:case _c:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mc:case co:case xc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Pc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Lc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Dc:case Nc:case Uc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Fc:case Oc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ho:case Bc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _0(i){switch(i){case Qn:case Su:return{byteLength:1,components:1};case Gr:case Mu:case Ai:return{byteLength:2,components:1};case ic:case sc:return{byteLength:2,components:4};case Ti:case nc:case pi:return{byteLength:4,components:1};case bu:case wu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Fp(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function v0(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,m=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let h=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,h);else{m.sort((g,_)=>g.start-_.start);let u=0;for(let g=1;g<m.length;g++){let _=m[u],T=m[g];T.start<=_.start+_.count+1?_.count=Math.max(_.count,T.start+T.count-_.start):(++u,m[u]=T)}m.length=u+1;for(let g=0,_=m.length;g<_;g++){let T=m[g];i.bufferSubData(c,T.start*h.BYTES_PER_ELEMENT,h,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S0=`#ifdef USE_ALPHAHASH
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
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T0=`#ifdef USE_AOMAP
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
#endif`,A0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C0=`#ifdef USE_BATCHING
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
#endif`,R0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,D0=`#ifdef USE_IRIDESCENCE
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
#endif`,N0=`#ifdef USE_BUMPMAP
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,V0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,G0=`#define PI 3.141592653589793
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
} // validated`,W0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$0=`vec3 transformedNormal = objectNormal;
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
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",K0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,t_=`#ifdef USE_ENVMAP
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
#endif`,e_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n_=`#ifdef USE_ENVMAP
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
#endif`,i_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o_=`#ifdef USE_GRADIENTMAP
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
}`,l_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,d_=`#ifdef USE_ENVMAP
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
#endif`,f_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,__=`PhysicalMaterial material;
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
#endif`,x_=`uniform sampler2D dfgLUT;
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
}`,v_=`
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
#endif`,y_=`#if defined( RE_IndirectDiffuse )
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
#endif`,S_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,b_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I_=`#if defined( USE_POINTS_UV )
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
#endif`,P_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F_=`#ifdef USE_MORPHTARGETS
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
#endif`,O_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,G_=`#ifdef USE_NORMALMAP
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
#endif`,W_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,J_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rx=`float getShadowMask() {
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
}`,ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ox=`#ifdef USE_SKINNING
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
#endif`,lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cx=`#ifdef USE_SKINNING
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
#endif`,hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,px=`#ifdef USE_TRANSMISSION
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
#endif`,mx=`#ifdef USE_TRANSMISSION
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
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sx=`uniform sampler2D t2D;
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
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ex=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`#include <common>
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
}`,Ax=`#if DEPTH_PACKING == 3200
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
}`,Cx=`#define DISTANCE
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
}`,Rx=`#define DISTANCE
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`uniform float scale;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Nx=`#include <common>
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
}`,Ux=`uniform vec3 diffuse;
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
}`,Fx=`#define LAMBERT
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
}`,Ox=`#define LAMBERT
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
}`,Bx=`#define MATCAP
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
}`,zx=`#define MATCAP
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
}`,kx=`#define NORMAL
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
}`,Vx=`#define NORMAL
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
}`,Hx=`#define PHONG
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
}`,Gx=`#define PHONG
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
}`,Wx=`#define STANDARD
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
}`,$x=`#define STANDARD
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
}`,Xx=`#define TOON
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
}`,qx=`#define TOON
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
}`,Yx=`uniform float size;
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
}`,Zx=`uniform vec3 diffuse;
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
}`,Jx=`#include <common>
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
}`,Kx=`uniform vec3 color;
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
}`,jx=`uniform float rotation;
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
}`,Qx=`uniform vec3 diffuse;
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
}`,be={alphahash_fragment:y0,alphahash_pars_fragment:S0,alphamap_fragment:M0,alphamap_pars_fragment:b0,alphatest_fragment:w0,alphatest_pars_fragment:E0,aomap_fragment:T0,aomap_pars_fragment:A0,batching_pars_vertex:C0,batching_vertex:R0,begin_vertex:I0,beginnormal_vertex:P0,bsdfs:L0,iridescence_fragment:D0,bumpmap_pars_fragment:N0,clipping_planes_fragment:U0,clipping_planes_pars_fragment:F0,clipping_planes_pars_vertex:O0,clipping_planes_vertex:B0,color_fragment:z0,color_pars_fragment:k0,color_pars_vertex:V0,color_vertex:H0,common:G0,cube_uv_reflection_fragment:W0,defaultnormal_vertex:$0,displacementmap_pars_vertex:X0,displacementmap_vertex:q0,emissivemap_fragment:Y0,emissivemap_pars_fragment:Z0,colorspace_fragment:J0,colorspace_pars_fragment:K0,envmap_fragment:j0,envmap_common_pars_fragment:Q0,envmap_pars_fragment:t_,envmap_pars_vertex:e_,envmap_physical_pars_fragment:d_,envmap_vertex:n_,fog_vertex:i_,fog_pars_vertex:s_,fog_fragment:r_,fog_pars_fragment:a_,gradientmap_pars_fragment:o_,lightmap_pars_fragment:l_,lights_lambert_fragment:c_,lights_lambert_pars_fragment:h_,lights_pars_begin:u_,lights_toon_fragment:f_,lights_toon_pars_fragment:p_,lights_phong_fragment:m_,lights_phong_pars_fragment:g_,lights_physical_fragment:__,lights_physical_pars_fragment:x_,lights_fragment_begin:v_,lights_fragment_maps:y_,lights_fragment_end:S_,lightprobes_pars_fragment:M_,logdepthbuf_fragment:b_,logdepthbuf_pars_fragment:w_,logdepthbuf_pars_vertex:E_,logdepthbuf_vertex:T_,map_fragment:A_,map_pars_fragment:C_,map_particle_fragment:R_,map_particle_pars_fragment:I_,metalnessmap_fragment:P_,metalnessmap_pars_fragment:L_,morphinstance_vertex:D_,morphcolor_vertex:N_,morphnormal_vertex:U_,morphtarget_pars_vertex:F_,morphtarget_vertex:O_,normal_fragment_begin:B_,normal_fragment_maps:z_,normal_pars_fragment:k_,normal_pars_vertex:V_,normal_vertex:H_,normalmap_pars_fragment:G_,clearcoat_normal_fragment_begin:W_,clearcoat_normal_fragment_maps:$_,clearcoat_pars_fragment:X_,iridescence_pars_fragment:q_,opaque_fragment:Y_,packing:Z_,premultiplied_alpha_fragment:J_,project_vertex:K_,dithering_fragment:j_,dithering_pars_fragment:Q_,roughnessmap_fragment:tx,roughnessmap_pars_fragment:ex,shadowmap_pars_fragment:nx,shadowmap_pars_vertex:ix,shadowmap_vertex:sx,shadowmask_pars_fragment:rx,skinbase_vertex:ax,skinning_pars_vertex:ox,skinning_vertex:lx,skinnormal_vertex:cx,specularmap_fragment:hx,specularmap_pars_fragment:ux,tonemapping_fragment:dx,tonemapping_pars_fragment:fx,transmission_fragment:px,transmission_pars_fragment:mx,uv_pars_fragment:gx,uv_pars_vertex:_x,uv_vertex:xx,worldpos_vertex:vx,background_vert:yx,background_frag:Sx,backgroundCube_vert:Mx,backgroundCube_frag:bx,cube_vert:wx,cube_frag:Ex,depth_vert:Tx,depth_frag:Ax,distance_vert:Cx,distance_frag:Rx,equirect_vert:Ix,equirect_frag:Px,linedashed_vert:Lx,linedashed_frag:Dx,meshbasic_vert:Nx,meshbasic_frag:Ux,meshlambert_vert:Fx,meshlambert_frag:Ox,meshmatcap_vert:Bx,meshmatcap_frag:zx,meshnormal_vert:kx,meshnormal_frag:Vx,meshphong_vert:Hx,meshphong_frag:Gx,meshphysical_vert:Wx,meshphysical_frag:$x,meshtoon_vert:Xx,meshtoon_frag:qx,points_vert:Yx,points_frag:Zx,shadow_vert:Jx,shadow_frag:Kx,sprite_vert:jx,sprite_frag:Qx},Ot={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},Hn={basic:{uniforms:Nn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:Nn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:Nn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:Nn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:Nn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new fe(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:Nn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:Nn([Ot.points,Ot.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:Nn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:Nn([Ot.common,Ot.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:Nn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:Nn([Ot.sprite,Ot.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distance:{uniforms:Nn([Ot.common,Ot.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distance_vert,fragmentShader:be.distance_frag},shadow:{uniforms:Nn([Ot.lights,Ot.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};Hn.physical={uniforms:Nn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};var Hc={r:0,b:0,g:0},tv=new Le,Op=new ye;Op.set(-1,0,0,0,1,0,0,0,1);function ev(i,t,e,n,s,r){let a=new fe(0),o=s===!0?0:1,l,c,h=null,m=0,u=null;function g(D){let U=D.isScene===!0?D.background:null;if(U&&U.isTexture){let E=D.backgroundBlurriness>0;U=t.get(U,E)}return U}function _(D){let U=!1,E=g(D);E===null?p(a,o):E&&E.isColor&&(p(E,1),U=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||U)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(D,U){let E=g(U);E&&(E.isCubeTexture||E.mapping===io)?(c===void 0&&(c=new gn(new Fr(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Ks(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tv.makeRotationFromEuler(U.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Op),c.material.toneMapped=Ce.getTransfer(E.colorSpace)!==Oe,(h!==E||m!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,m=E.version,u=i.toneMapping),c.layers.enableAll(),D.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new gn(new Xa(2,2),new _n({name:"BackgroundMaterial",uniforms:Ks(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,l.material.toneMapped=Ce.getTransfer(E.colorSpace)!==Oe,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||m!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,m=E.version,u=i.toneMapping),l.layers.enableAll(),D.unshift(l,l.geometry,l.material,0,0,null))}function p(D,U){D.getRGB(Hc,Lu(i)),e.buffers.color.setClear(Hc.r,Hc.g,Hc.b,U,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(D,U=1){a.set(D),o=U,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(D){o=D,p(a,o)},render:_,addToRenderList:T,dispose:f}}function nv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(G,j,et,X,Z){let rt=!1,at=m(G,X,et,j);r!==at&&(r=at,c(r.object)),rt=g(G,X,et,Z),rt&&_(G,X,et,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(rt||a)&&(a=!1,E(G,j,et,X),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return i.createVertexArray()}function c(G){return i.bindVertexArray(G)}function h(G){return i.deleteVertexArray(G)}function m(G,j,et,X){let Z=X.wireframe===!0,rt=n[j.id];rt===void 0&&(rt={},n[j.id]=rt);let at=G.isInstancedMesh===!0?G.id:0,Mt=rt[at];Mt===void 0&&(Mt={},rt[at]=Mt);let ct=Mt[et.id];ct===void 0&&(ct={},Mt[et.id]=ct);let _t=ct[Z];return _t===void 0&&(_t=u(l()),ct[Z]=_t),_t}function u(G){let j=[],et=[],X=[];for(let Z=0;Z<e;Z++)j[Z]=0,et[Z]=0,X[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:et,attributeDivisors:X,object:G,attributes:{},index:null}}function g(G,j,et,X){let Z=r.attributes,rt=j.attributes,at=0,Mt=et.getAttributes();for(let ct in Mt)if(Mt[ct].location>=0){let xt=Z[ct],Ht=rt[ct];if(Ht===void 0&&(ct==="instanceMatrix"&&G.instanceMatrix&&(Ht=G.instanceMatrix),ct==="instanceColor"&&G.instanceColor&&(Ht=G.instanceColor)),xt===void 0||xt.attribute!==Ht||Ht&&xt.data!==Ht.data)return!0;at++}return r.attributesNum!==at||r.index!==X}function _(G,j,et,X){let Z={},rt=j.attributes,at=0,Mt=et.getAttributes();for(let ct in Mt)if(Mt[ct].location>=0){let xt=rt[ct];xt===void 0&&(ct==="instanceMatrix"&&G.instanceMatrix&&(xt=G.instanceMatrix),ct==="instanceColor"&&G.instanceColor&&(xt=G.instanceColor));let Ht={};Ht.attribute=xt,xt&&xt.data&&(Ht.data=xt.data),Z[ct]=Ht,at++}r.attributes=Z,r.attributesNum=at,r.index=X}function T(){let G=r.newAttributes;for(let j=0,et=G.length;j<et;j++)G[j]=0}function p(G){f(G,0)}function f(G,j){let et=r.newAttributes,X=r.enabledAttributes,Z=r.attributeDivisors;et[G]=1,X[G]===0&&(i.enableVertexAttribArray(G),X[G]=1),Z[G]!==j&&(i.vertexAttribDivisor(G,j),Z[G]=j)}function D(){let G=r.newAttributes,j=r.enabledAttributes;for(let et=0,X=j.length;et<X;et++)j[et]!==G[et]&&(i.disableVertexAttribArray(et),j[et]=0)}function U(G,j,et,X,Z,rt,at){at===!0?i.vertexAttribIPointer(G,j,et,Z,rt):i.vertexAttribPointer(G,j,et,X,Z,rt)}function E(G,j,et,X){T();let Z=X.attributes,rt=et.getAttributes(),at=j.defaultAttributeValues;for(let Mt in rt){let ct=rt[Mt];if(ct.location>=0){let _t=Z[Mt];if(_t===void 0&&(Mt==="instanceMatrix"&&G.instanceMatrix&&(_t=G.instanceMatrix),Mt==="instanceColor"&&G.instanceColor&&(_t=G.instanceColor)),_t!==void 0){let xt=_t.normalized,Ht=_t.itemSize,Gt=t.get(_t);if(Gt===void 0)continue;let Pe=Gt.buffer,Me=Gt.type,Ae=Gt.bytesPerElement,dt=Me===i.INT||Me===i.UNSIGNED_INT||_t.gpuType===nc;if(_t.isInterleavedBufferAttribute){let gt=_t.data,Tt=gt.stride,ne=_t.offset;if(gt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<ct.locationSize;Vt++)f(ct.location+Vt,gt.meshPerAttribute);G.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Vt=0;Vt<ct.locationSize;Vt++)p(ct.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let Vt=0;Vt<ct.locationSize;Vt++)U(ct.location+Vt,Ht/ct.locationSize,Me,xt,Tt*Ae,(ne+Ht/ct.locationSize*Vt)*Ae,dt)}else{if(_t.isInstancedBufferAttribute){for(let gt=0;gt<ct.locationSize;gt++)f(ct.location+gt,_t.meshPerAttribute);G.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let gt=0;gt<ct.locationSize;gt++)p(ct.location+gt);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let gt=0;gt<ct.locationSize;gt++)U(ct.location+gt,Ht/ct.locationSize,Me,xt,Ht*Ae,Ht/ct.locationSize*gt*Ae,dt)}}else if(at!==void 0){let xt=at[Mt];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(ct.location,xt);break;case 3:i.vertexAttrib3fv(ct.location,xt);break;case 4:i.vertexAttrib4fv(ct.location,xt);break;default:i.vertexAttrib1fv(ct.location,xt)}}}}D()}function b(){P();for(let G in n){let j=n[G];for(let et in j){let X=j[et];for(let Z in X){let rt=X[Z];for(let at in rt)h(rt[at].object),delete rt[at];delete X[Z]}}delete n[G]}}function I(G){if(n[G.id]===void 0)return;let j=n[G.id];for(let et in j){let X=j[et];for(let Z in X){let rt=X[Z];for(let at in rt)h(rt[at].object),delete rt[at];delete X[Z]}}delete n[G.id]}function B(G){for(let j in n){let et=n[j];for(let X in et){let Z=et[X];if(Z[G.id]===void 0)continue;let rt=Z[G.id];for(let at in rt)h(rt[at].object),delete rt[at];delete Z[G.id]}}}function S(G){for(let j in n){let et=n[j],X=G.isInstancedMesh===!0?G.id:0,Z=et[X];if(Z!==void 0){for(let rt in Z){let at=Z[rt];for(let Mt in at)h(at[Mt].object),delete at[Mt];delete Z[rt]}delete et[X],Object.keys(et).length===0&&delete n[j]}}}function P(){O(),a=!0,r!==s&&(r=s,c(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:O,dispose:b,releaseStatesOfGeometry:I,releaseStatesOfObject:S,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:p,disableUnusedAttributes:D}}function iv(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let g=0;g<h;g++)u+=c[g];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function sv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let B=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(B){return!(B!==mi&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(B){let S=B===Ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Qn&&B!==pi&&!S&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(de("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let m=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&de("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),U=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),I=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:u,maxTextures:g,maxVertexTextures:_,maxTextureSize:T,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:E,maxSamples:b,samples:I}}function rv(i){let t=this,e=null,n=0,s=!1,r=!1,a=new yi,o=new ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){let g=m.length!==0||u||n!==0||s;return s=u,n=m.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,u){e=h(m,u,0)},this.setState=function(m,u,g){let _=m.clippingPlanes,T=m.clipIntersection,p=m.clipShadows,f=i.get(m);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{let D=r?0:n,U=D*4,E=f.clippingState||null;l.value=E,E=h(_,u,U,g);for(let b=0;b!==U;++b)E[b]=e[b];f.clippingState=E,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(m,u,g,_){let T=m!==null?m.length:0,p=null;if(T!==0){if(p=l.value,_!==!0||p===null){let f=g+T*4,D=u.matrixWorldInverse;o.getNormalMatrix(D),(p===null||p.length<f)&&(p=new Float32Array(f));for(let U=0,E=g;U!==T;++U,E+=4)a.copy(m[U]).applyMatrix4(D,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,p}}var Xr=4,av=6,ov=20,lv=256,fo=new kr,mp=new fe,Fu=null,Ou=0,Bu=0,zu=!1,cv=new z,js=new z,Wc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=cv}=r;Fu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fu,Ou,Bu),this._renderer.xr.enabled=zu,t.scissorTest=!1,$r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===Js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Ai,format:mi,colorSpace:ba,depthBuffer:!1},s=gp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gp(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hv(r)),this._blurMaterial=dv(r,t,e),this._ggxMaterial=uv(r,t,e)}return s}_compileMaterial(t){let e=new gn(new nn,t);this._renderer.compile(e,fo)}_sceneToCubeUV(t,e,n,s,r){let l=new Dn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,u=m.autoClear,g=m.toneMapping;m.getClearColor(mp),m.toneMapping=Ei,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gn(new Fr,new Gs({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));let T=this._backgroundBox,p=T.material,f=!1,D=t.background;D?D.isColor&&(p.color.copy(D),t.background=null,f=!0):(p.color.copy(mp),f=!0);for(let U=0;U<6;U++){let E=U%3;E===0?(l.up.set(0,c[U],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[U],r.y,r.z)):E===1?(l.up.set(0,0,c[U]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[U],r.z)):(l.up.set(0,c[U],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[U]));let b=this._cubeSize;$r(s,E*b,U>2?b:0,b,b),m.setRenderTarget(s),f&&m.render(T,l),m.render(t,l)}m.toneMapping=g,m.autoClear=u,t.background=D}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ms||t.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_p());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;$r(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,fo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),m=Math.sqrt(c*c-h*h),u=c*1.25,g=m*u,{_lodMax:_}=this,T=this._sizeLods[n],p=3*T*(n>_-Xr?n-_+Xr:0),f=4*(this._cubeSize-T);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=_-e,$r(r,p,f,3*T,2*T),s.setRenderTarget(r),s.render(o,fo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,$r(t,p,f,3*T,2*T),s.setRenderTarget(t),s.render(o,fo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],m=3*h*(s>this._lodMax-Xr?s-this._lodMax+Xr:0),u=4*(this._cubeSize-h);$r(e,m,u,3*h,2*h),a.setRenderTarget(e),a.render(l,fo)}};function hv(i){let t=[],e=[],n=i,s=i-Xr+1+av;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],m=6,u=6,g=3,_=new Float32Array(g*u*m),T=new Float32Array(g*u*m);for(let f=0;f<m;f++){let D=f%3*2/3-1,U=f>2?0:-1,E=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];_.set(E,g*u*f);for(let b=0;b<u;b++){let I=h[b*2]*2-1,B=h[b*2+1]*2-1;f===0?js.set(1,B,I):f===1?js.set(-I,1,-B):f===2?js.set(-I,B,1):f===3?js.set(-1,B,-I):f===4?js.set(-I,-1,B):js.set(I,B,-1),js.toArray(T,(f*u+b)*g)}}let p=new nn;p.setAttribute("position",new We(_,g)),p.setAttribute("outputDirection",new We(T,g)),e.push(new gn(p,null)),n>Xr&&n--}return{lodMeshes:e,sizeLods:t}}function gp(i,t,e){let n=new Kn(i,t,e);return n.texture.mapping=io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function uv(i,t,e){return new _n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function dv(i,t,e){return new _n({name:"SphericalGaussianBlur",defines:{SAMPLES:ov,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function _p(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function xp(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function qc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var $c=class extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ua(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fr(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:ki});r.uniforms.tEquirect.value=e;let a=new gn(s,r),o=e.minFilter;return e.minFilter===bs&&(e.minFilter=bn),new Jl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function fv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,g=!1){return u==null?null:g?a(u):r(u)}function r(u){if(u&&u.isTexture){let g=u.mapping;if(g===Ql||g===tc)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let T=new $c(_.height);return T.fromEquirectangularTexture(i,u),t.set(u,T),u.addEventListener("dispose",c),o(T.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let g=u.mapping,_=g===Ql||g===tc,T=g===Ms||g===Js;if(_||T){let p=e.get(u),f=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Wc(i)),p=_?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let D=u.image;return _&&D&&D.height>0||T&&D&&l(D)?(n===null&&(n=new Wc(i)),p=_?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,g){return g===Ql?u.mapping=Ms:g===tc&&(u.mapping=Js),u}function l(u){let g=0,_=6;for(let T=0;T<_;T++)u[T]!==void 0&&g++;return g===_}function c(u){let g=u.target;g.removeEventListener("dispose",c);let _=t.get(g);_!==void 0&&(t.delete(g),_.dispose())}function h(u){let g=u.target;g.removeEventListener("dispose",h);let _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function pv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Vs("WebGLRenderer: "+n+" extension not supported."),s}}}function mv(i,t,e,n){let s={},r=new WeakMap;function a(m){let u=m.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];let g=r.get(u);g&&(t.remove(g),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(m,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(m){let u=m.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER)}function c(m){let u=[],g=m.index,_=m.attributes.position,T=0;if(_===void 0)return;if(g!==null){let D=g.array;T=g.version;for(let U=0,E=D.length;U<E;U+=3){let b=D[U+0],I=D[U+1],B=D[U+2];u.push(b,I,I,B,B,b)}}else{let D=_.array;T=_.version;for(let U=0,E=D.length/3-1;U<E;U+=3){let b=U+0,I=U+1,B=U+2;u.push(b,I,I,B,B,b)}}let p=new(_.count>=65535?Ia:Ra)(u,1);p.version=T;let f=r.get(m);f&&t.remove(f),r.set(m,p)}function h(m){let u=r.get(m);if(u){let g=m.index;g!==null&&u.version<g.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:h}}function gv(i,t,e){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,u){i.drawElements(n,u,r,m*a),e.update(u,n,1)}function c(m,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,m*a,g),e.update(u,n,g))}function h(m,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,m,0,g);let T=0;for(let p=0;p<g;p++)T+=u[p];e.update(T,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function _v(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:me("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function xv(i,t,e){let n=new WeakMap,s=new Be;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==m){let P=function(){B.dispose(),n.delete(o),o.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,T=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],D=o.morphAttributes.color||[],U=0;g===!0&&(U=1),_===!0&&(U=2),T===!0&&(U=3);let E=o.attributes.position.count*U,b=1;E>t.maxTextureSize&&(b=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let I=new Float32Array(E*b*4*m),B=new Aa(I,E,b,m);B.type=pi,B.needsUpdate=!0;let S=U*4;for(let O=0;O<m;O++){let G=p[O],j=f[O],et=D[O],X=E*b*4*O;for(let Z=0;Z<G.count;Z++){let rt=Z*S;g===!0&&(s.fromBufferAttribute(G,Z),I[X+rt+0]=s.x,I[X+rt+1]=s.y,I[X+rt+2]=s.z,I[X+rt+3]=0),_===!0&&(s.fromBufferAttribute(j,Z),I[X+rt+4]=s.x,I[X+rt+5]=s.y,I[X+rt+6]=s.z,I[X+rt+7]=0),T===!0&&(s.fromBufferAttribute(et,Z),I[X+rt+8]=s.x,I[X+rt+9]=s.y,I[X+rt+10]=s.z,I[X+rt+11]=et.itemSize===4?s.w:1)}}u={count:m,texture:B,size:new Nt(E,b)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let T=0;T<c.length;T++)g+=c[T];let _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function vv(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,m=c.geometry,u=t.get(c,m);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let g=c.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var yv={[fu]:"LINEAR_TONE_MAPPING",[pu]:"REINHARD_TONE_MAPPING",[mu]:"CINEON_TONE_MAPPING",[gu]:"ACES_FILMIC_TONE_MAPPING",[xu]:"AGX_TONE_MAPPING",[vu]:"NEUTRAL_TONE_MAPPING",[_u]:"CUSTOM_TONE_MAPPING"};function Sv(i,t,e,n,s,r){let a=new Kn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new nn;c.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new en([0,2,0,0,2,0],2));let h=new Fl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new gn(c,h),u=new kr(-1,1,1,-1,0,1),g=null,_=null,T=!1,p,f=null,D=[],U=!1;this.setSize=function(E,b){a.setSize(E,b),o!==null&&o.setSize(E,b),l!==null&&l.setSize(E,b);for(let I=0;I<D.length;I++){let B=D[I];B.setSize&&B.setSize(E,b)}},this.setEffects=function(E){D=E,U=D.length>0&&D[0].isRenderPass===!0;let b=a.width,I=a.height;D.length>0&&o===null&&(o=new Kn(b,I,{type:Ai,depthBuffer:!1,stencilBuffer:!1}),l=new Kn(b,I,{type:Ai,depthBuffer:!1,stencilBuffer:!1}));for(let B=0;B<D.length;B++){let S=D[B];S.setSize&&S.setSize(b,I)}},this.begin=function(E,b){if(T||E.toneMapping===Ei&&D.length===0)return!1;if(f=b,b!==null){let I=b.width,B=b.height;(a.width!==I||a.height!==B)&&this.setSize(I,B)}return U===!1&&E.setRenderTarget(a),p=E.toneMapping,E.toneMapping=Ei,!0},this.hasRenderPass=function(){return U},this.end=function(E,b){E.toneMapping=p,T=!0;let I=a,B=o;for(let S=0;S<D.length;S++){let P=D[S];P.enabled!==!1&&(P.render(E,B,I,b),P.needsSwap!==!1&&(I=B,B=B===o?l:o))}if(g!==E.outputColorSpace||_!==E.toneMapping){g=E.outputColorSpace,_=E.toneMapping,h.defines={},Ce.getTransfer(g)===Oe&&(h.defines.SRGB_TRANSFER="");let S=yv[_];S&&(h.defines[S]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=I.texture,E.setRenderTarget(f),E.render(m,u),f=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Bp=new Jn,Hu=new gs(1,1),zp=new Aa,kp=new bl,Vp=new Ua,vp=[],yp=[],Sp=new Float32Array(16),Mp=new Float32Array(9),bp=new Float32Array(4);function Yr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=vp[s];if(r===void 0&&(r=new Float32Array(s),vp[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function hn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function un(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yc(i,t){let e=yp[t];e===void 0&&(e=new Int32Array(t),yp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;i.uniform2fv(this.addr,t),un(e,t)}}function wv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(hn(e,t))return;i.uniform3fv(this.addr,t),un(e,t)}}function Ev(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;i.uniform4fv(this.addr,t),un(e,t)}}function Tv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;bp.set(n),i.uniformMatrix2fv(this.addr,!1,bp),un(e,n)}}function Av(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;Mp.set(n),i.uniformMatrix3fv(this.addr,!1,Mp),un(e,n)}}function Cv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;Sp.set(n),i.uniformMatrix4fv(this.addr,!1,Sp),un(e,n)}}function Rv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;i.uniform2iv(this.addr,t),un(e,t)}}function Pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;i.uniform3iv(this.addr,t),un(e,t)}}function Lv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;i.uniform4iv(this.addr,t),un(e,t)}}function Dv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Nv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;i.uniform2uiv(this.addr,t),un(e,t)}}function Uv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;i.uniform3uiv(this.addr,t),un(e,t)}}function Fv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;i.uniform4uiv(this.addr,t),un(e,t)}}function Ov(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hu.compareFunction=e.isReversedDepthBuffer()?Vc:kc,r=Hu):r=Bp,e.setTexture2D(t||r,s)}function Bv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kp,s)}function zv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vp,s)}function kv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||zp,s)}function Vv(i){switch(i){case 5126:return Mv;case 35664:return bv;case 35665:return wv;case 35666:return Ev;case 35674:return Tv;case 35675:return Av;case 35676:return Cv;case 5124:case 35670:return Rv;case 35667:case 35671:return Iv;case 35668:case 35672:return Pv;case 35669:case 35673:return Lv;case 5125:return Dv;case 36294:return Nv;case 36295:return Uv;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return kv}}function Hv(i,t){i.uniform1fv(this.addr,t)}function Gv(i,t){let e=Yr(t,this.size,2);i.uniform2fv(this.addr,e)}function Wv(i,t){let e=Yr(t,this.size,3);i.uniform3fv(this.addr,e)}function $v(i,t){let e=Yr(t,this.size,4);i.uniform4fv(this.addr,e)}function Xv(i,t){let e=Yr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qv(i,t){let e=Yr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yv(i,t){let e=Yr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zv(i,t){i.uniform1iv(this.addr,t)}function Jv(i,t){i.uniform2iv(this.addr,t)}function Kv(i,t){i.uniform3iv(this.addr,t)}function jv(i,t){i.uniform4iv(this.addr,t)}function Qv(i,t){i.uniform1uiv(this.addr,t)}function ty(i,t){i.uniform2uiv(this.addr,t)}function ey(i,t){i.uniform3uiv(this.addr,t)}function ny(i,t){i.uniform4uiv(this.addr,t)}function iy(i,t,e){let n=this.cache,s=t.length,r=Yc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Hu:a=Bp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function sy(i,t,e){let n=this.cache,s=t.length,r=Yc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||kp,r[a])}function ry(i,t,e){let n=this.cache,s=t.length,r=Yc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Vp,r[a])}function ay(i,t,e){let n=this.cache,s=t.length,r=Yc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||zp,r[a])}function oy(i){switch(i){case 5126:return Hv;case 35664:return Gv;case 35665:return Wv;case 35666:return $v;case 35674:return Xv;case 35675:return qv;case 35676:return Yv;case 5124:case 35670:return Zv;case 35667:case 35671:return Jv;case 35668:case 35672:return Kv;case 35669:case 35673:return jv;case 5125:return Qv;case 36294:return ty;case 36295:return ey;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return iy;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return ay}}var Gu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vv(e.type)}},Wu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=oy(e.type)}},$u=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ku=/(\w+)(\])?(\[|\.)?/g;function wp(i,t){i.seq.push(t),i.map[t.id]=t}function ly(i,t,e){let n=i.name,s=n.length;for(ku.lastIndex=0;;){let r=ku.exec(n),a=ku.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){wp(e,c===void 0?new Gu(o,i,t):new Wu(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new $u(o),wp(e,m)),e=m}}}var qr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);ly(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ep(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var cy=37297,hy=0;function uy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Tp=new ye;function dy(i){Ce._getMatrix(Tp,Ce.workingColorSpace,i);let t=`mat3( ${Tp.elements.map(e=>e.toFixed(4))} )`;switch(Ce.getTransfer(i)){case wa:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ap(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+uy(i.getShaderSource(t),o)}else return r}function fy(i,t){let e=dy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var py={[fu]:"Linear",[pu]:"Reinhard",[mu]:"Cineon",[gu]:"ACESFilmic",[xu]:"AgX",[vu]:"Neutral",[_u]:"Custom"};function my(i,t){let e=py[t];return e===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Gc=new z;function gy(){Ce.getLuminanceCoefficients(Gc);let i=Gc.x.toFixed(4),t=Gc.y.toFixed(4),e=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _y(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function xy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function mo(i){return i!==""}function Cp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var yy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xu(i){return i.replace(yy,My)}var Sy=new Map;function My(i,t){let e=be[t];if(e===void 0){let n=Sy.get(t);if(n!==void 0)e=be[n],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xu(e)}var by=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ip(i){return i.replace(by,wy)}function wy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Ey={[no]:"SHADOWMAP_TYPE_PCF",[Vr]:"SHADOWMAP_TYPE_VSM"};function Ty(i){return Ey[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ay={[Ms]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE_UV"};function Cy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ay[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ry={[Js]:"ENVMAP_MODE_REFRACTION"};function Iy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ry[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Py={[jl]:"ENVMAP_BLENDING_MULTIPLY",[Xf]:"ENVMAP_BLENDING_MIX",[qf]:"ENVMAP_BLENDING_ADD"};function Ly(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Py[i.combine]||"ENVMAP_BLENDING_NONE"}function Dy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ny(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ty(e),c=Cy(e),h=Iy(e),m=Ly(e),u=Dy(e),g=_y(e),_=xy(r),T=s.createProgram(),p,f,D=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(mo).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(mo).join(`
`),f.length>0&&(f+=`
`)):(p=[Pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),f=[Pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?be.tonemapping_pars_fragment:"",e.toneMapping!==Ei?my("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,fy("linearToOutputTexel",e.outputColorSpace),gy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mo).join(`
`)),a=Xu(a),a=Cp(a,e),a=Rp(a,e),o=Xu(o),o=Cp(o,e),o=Rp(o,e),a=Ip(a),o=Ip(o),e.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let U=D+p+a,E=D+f+o,b=Ep(s,s.VERTEX_SHADER,U),I=Ep(s,s.FRAGMENT_SHADER,E);s.attachShader(T,b),s.attachShader(T,I),e.index0AttributeName!==void 0?s.bindAttribLocation(T,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function B(G){if(i.debug.checkShaderErrors){let j=s.getProgramInfoLog(T)||"",et=s.getShaderInfoLog(b)||"",X=s.getShaderInfoLog(I)||"",Z=j.trim(),rt=et.trim(),at=X.trim(),Mt=!0,ct=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(Mt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,T,b,I);else{let _t=Ap(s,b,"vertex"),xt=Ap(s,I,"fragment");me("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Z+`
`+_t+`
`+xt)}else Z!==""?de("WebGLProgram: Program Info Log:",Z):(rt===""||at==="")&&(ct=!1);ct&&(G.diagnostics={runnable:Mt,programLog:Z,vertexShader:{log:rt,prefix:p},fragmentShader:{log:at,prefix:f}})}s.deleteShader(b),s.deleteShader(I),S=new qr(s,T),P=vy(s,T)}let S;this.getUniforms=function(){return S===void 0&&B(this),S};let P;this.getAttributes=function(){return P===void 0&&B(this),P};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(T,cy)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hy++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=b,this.fragmentShader=I,this}var Uy=0,qu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Yu(t),e.set(t,n)),n}},Yu=class{constructor(t){this.id=Uy++,this.code=t,this.usedTimes=0}};function Fy(i){return i===Es||i===co||i===ho}function Oy(i,t,e,n,s,r){let a=new Dr,o=new qu,l=new Set,c=[],h=new Map,m=n.logarithmicDepthBuffer,u=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function T(S,P,O,G,j,et){let X=G.fog,Z=j.geometry,rt=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?G.environment:null,at=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,Mt=t.get(S.envMap||rt,at),ct=Mt&&Mt.mapping===io?Mt.image.height:null,_t=g[S.type];S.precision!==null&&(u=n.getMaxPrecision(S.precision),u!==S.precision&&de("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));let xt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ht=xt!==void 0?xt.length:0,Gt=0;Z.morphAttributes.position!==void 0&&(Gt=1),Z.morphAttributes.normal!==void 0&&(Gt=2),Z.morphAttributes.color!==void 0&&(Gt=3);let Pe,Me,Ae,dt;if(_t){let Fe=Hn[_t];Pe=Fe.vertexShader,Me=Fe.fragmentShader}else{Pe=S.vertexShader,Me=S.fragmentShader;let Fe=o.getVertexShaderStage(S),De=o.getFragmentShaderStage(S);o.update(S,Fe,De),Ae=Fe.id,dt=De.id}let gt=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),ne=j.isInstancedMesh===!0,Vt=j.isBatchedMesh===!0,ce=!!S.map,ue=!!S.matcap,st=!!Mt,bt=!!S.aoMap,V=!!S.lightMap,wt=!!S.bumpMap&&S.wireframe===!1,Lt=!!S.normalMap,se=!!S.displacementMap,qt=!!S.emissiveMap,oe=!!S.metalnessMap,re=!!S.roughnessMap,H=S.anisotropy>0,Re=S.clearcoat>0,Wt=S.dispersion>0,R=S.retroreflectivity>0,v=S.iridescence>0,J=S.sheen>0,it=S.transmission>0,ot=H&&!!S.anisotropyMap,At=Re&&!!S.clearcoatMap,It=Re&&!!S.clearcoatNormalMap,ut=Re&&!!S.clearcoatRoughnessMap,pt=v&&!!S.iridescenceMap,Ft=v&&!!S.iridescenceThicknessMap,te=J&&!!S.sheenColorMap,Bt=J&&!!S.sheenRoughnessMap,Rt=!!S.specularMap,Jt=!!S.specularColorMap,le=!!S.specularIntensityMap,ve=it&&!!S.transmissionMap,q=it&&!!S.thicknessMap,Ut=!!S.gradientMap,ft=!!S.alphaMap,Ct=S.alphaTest>0,Dt=!!S.alphaHash,vt=!!S.extensions,ee=Ei;S.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ee=i.toneMapping);let Zt={shaderID:_t,shaderType:S.type,shaderName:S.name,vertexShader:Pe,fragmentShader:Me,defines:S.defines,customVertexShaderID:Ae,customFragmentShaderID:dt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Vt,batchingColor:Vt&&j._colorsTexture!==null,instancing:ne,instancingColor:ne&&j.instanceColor!==null,instancingMorph:ne&&j.morphTexture!==null,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Ce.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:ce,matcap:ue,envMap:st,envMapMode:st&&Mt.mapping,envMapCubeUVHeight:ct,aoMap:bt,lightMap:V,bumpMap:wt,normalMap:Lt,displacementMap:se,emissiveMap:qt,normalMapObjectSpace:Lt&&S.normalMapType===Jf,normalMapTangentSpace:Lt&&S.normalMapType===zc,packedNormalMap:Lt&&S.normalMapType===zc&&Fy(S.normalMap.format),metalnessMap:oe,roughnessMap:re,anisotropy:H,anisotropyMap:ot,clearcoat:Re,clearcoatMap:At,clearcoatNormalMap:It,clearcoatRoughnessMap:ut,dispersion:Wt,retroreflection:R,iridescence:v,iridescenceMap:pt,iridescenceThicknessMap:Ft,sheen:J,sheenColorMap:te,sheenRoughnessMap:Bt,specularMap:Rt,specularColorMap:Jt,specularIntensityMap:le,transmission:it,transmissionMap:ve,thicknessMap:q,gradientMap:Ut,opaque:S.transparent===!1&&S.blending===Hr&&S.alphaToCoverage===!1,alphaMap:ft,alphaTest:Ct,alphaHash:Dt,combine:S.combine,mapUv:ce&&_(S.map.channel),aoMapUv:bt&&_(S.aoMap.channel),lightMapUv:V&&_(S.lightMap.channel),bumpMapUv:wt&&_(S.bumpMap.channel),normalMapUv:Lt&&_(S.normalMap.channel),displacementMapUv:se&&_(S.displacementMap.channel),emissiveMapUv:qt&&_(S.emissiveMap.channel),metalnessMapUv:oe&&_(S.metalnessMap.channel),roughnessMapUv:re&&_(S.roughnessMap.channel),anisotropyMapUv:ot&&_(S.anisotropyMap.channel),clearcoatMapUv:At&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:It&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:te&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&_(S.sheenRoughnessMap.channel),specularMapUv:Rt&&_(S.specularMap.channel),specularColorMapUv:Jt&&_(S.specularColorMap.channel),specularIntensityMapUv:le&&_(S.specularIntensityMap.channel),transmissionMapUv:ve&&_(S.transmissionMap.channel),thicknessMapUv:q&&_(S.thicknessMap.channel),alphaMapUv:ft&&_(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Lt||H),vertexNormals:!!Z.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Z.attributes.uv&&(ce||ft),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||Z.attributes.normal===void 0&&Lt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Tt,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:Gt,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:et.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,decodeVideoTexture:ce&&S.map.isVideoTexture===!0&&Ce.getTransfer(S.map.colorSpace)===Oe,decodeVideoTextureEmissive:qt&&S.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(S.emissiveMap.colorSpace)===Oe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===zi,flipSided:S.side===Vn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:vt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&S.extensions.multiDraw===!0||Vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function p(S){let P=[];if(S.shaderID?P.push(S.shaderID):(P.push(S.customVertexShaderID),P.push(S.customFragmentShaderID)),S.defines!==void 0)for(let O in S.defines)P.push(O),P.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(f(P,S),D(P,S),P.push(i.outputColorSpace)),P.push(S.customProgramCacheKey),P.join()}function f(S,P){S.push(P.precision),S.push(P.outputColorSpace),S.push(P.envMapMode),S.push(P.envMapCubeUVHeight),S.push(P.mapUv),S.push(P.alphaMapUv),S.push(P.lightMapUv),S.push(P.aoMapUv),S.push(P.bumpMapUv),S.push(P.normalMapUv),S.push(P.displacementMapUv),S.push(P.emissiveMapUv),S.push(P.metalnessMapUv),S.push(P.roughnessMapUv),S.push(P.anisotropyMapUv),S.push(P.clearcoatMapUv),S.push(P.clearcoatNormalMapUv),S.push(P.clearcoatRoughnessMapUv),S.push(P.iridescenceMapUv),S.push(P.iridescenceThicknessMapUv),S.push(P.sheenColorMapUv),S.push(P.sheenRoughnessMapUv),S.push(P.specularMapUv),S.push(P.specularColorMapUv),S.push(P.specularIntensityMapUv),S.push(P.transmissionMapUv),S.push(P.thicknessMapUv),S.push(P.combine),S.push(P.fogExp2),S.push(P.sizeAttenuation),S.push(P.morphTargetsCount),S.push(P.morphAttributeCount),S.push(P.numSunLights),S.push(P.numDirLights),S.push(P.numPointLights),S.push(P.numSpotLights),S.push(P.numSpotLightMaps),S.push(P.numHemiLights),S.push(P.numRectAreaLights),S.push(P.numSunLightShadows),S.push(P.numDirLightShadows),S.push(P.numPointLightShadows),S.push(P.numSpotLightShadows),S.push(P.numSpotLightShadowsWithMaps),S.push(P.numLightProbes),S.push(P.shadowMapType),S.push(P.toneMapping),S.push(P.numClippingPlanes),S.push(P.numClipIntersection),S.push(P.depthPacking)}function D(S,P){a.disableAll(),P.instancing&&a.enable(0),P.instancingColor&&a.enable(1),P.instancingMorph&&a.enable(2),P.matcap&&a.enable(3),P.envMap&&a.enable(4),P.normalMapObjectSpace&&a.enable(5),P.normalMapTangentSpace&&a.enable(6),P.clearcoat&&a.enable(7),P.iridescence&&a.enable(8),P.alphaTest&&a.enable(9),P.vertexColors&&a.enable(10),P.vertexAlphas&&a.enable(11),P.vertexUv1s&&a.enable(12),P.vertexUv2s&&a.enable(13),P.vertexUv3s&&a.enable(14),P.vertexTangents&&a.enable(15),P.anisotropy&&a.enable(16),P.alphaHash&&a.enable(17),P.batching&&a.enable(18),P.dispersion&&a.enable(19),P.retroreflection&&a.enable(24),P.batchingColor&&a.enable(20),P.gradientMap&&a.enable(21),P.packedNormalMap&&a.enable(22),P.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.reversedDepthBuffer&&a.enable(4),P.skinning&&a.enable(5),P.morphTargets&&a.enable(6),P.morphNormals&&a.enable(7),P.morphColors&&a.enable(8),P.premultipliedAlpha&&a.enable(9),P.shadowMapEnabled&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),P.decodeVideoTextureEmissive&&a.enable(20),P.alphaToCoverage&&a.enable(21),P.numLightProbeGrids>0&&a.enable(22),P.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function U(S){let P=g[S.type],O;if(P){let G=Hn[P];O=uo.clone(G.uniforms)}else O=S.uniforms;return O}function E(S,P){let O=h.get(P);return O!==void 0?++O.usedTimes:(O=new Ny(i,P,S,s),c.push(O),h.set(P,O)),O}function b(S){if(--S.usedTimes===0){let P=c.indexOf(S);c[P]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function I(S){o.remove(S)}function B(){o.dispose()}return{getParameters:T,getProgramCacheKey:p,getUniforms:U,acquireProgram:E,releaseProgram:b,releaseShaderCache:I,programs:c,dispose:B}}function By(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function zy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Lp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Dp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let g=0;return u.isInstancedMesh&&(g+=2),u.isSkinnedMesh&&(g+=1),g}function o(u,g,_,T,p,f){let D=i[t];return D===void 0?(D={id:u.id,object:u,geometry:g,material:_,materialVariant:a(u),groupOrder:T,renderOrder:u.renderOrder,z:p,group:f},i[t]=D):(D.id=u.id,D.object=u,D.geometry=g,D.material=_,D.materialVariant=a(u),D.groupOrder=T,D.renderOrder=u.renderOrder,D.z=p,D.group=f),t++,D}function l(u,g,_,T,p,f,D){D.reversedDepth===!0&&(p=-p);let U=o(u,g,_,T,p,f);_.transmission>0?n.push(U):_.transparent===!0?s.push(U):e.push(U)}function c(u,g,_,T,p,f){let D=o(u,g,_,T,p,f);_.transmission>0?n.unshift(D):_.transparent===!0?s.unshift(D):e.unshift(D)}function h(u,g){e.length>1&&e.sort(u||zy),n.length>1&&n.sort(g||Lp),s.length>1&&s.sort(g||Lp)}function m(){for(let u=t,g=i.length;u<g;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:h}}function ky(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Dp,i.set(n,[a])):s>=r.length?(a=new Dp,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new fe};break;case"SpotLight":e={position:new z,direction:new z,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function Hy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Gy=0;function Wy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $y(i){let t=new Vy,e=Hy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new Le,a=new Le;function o(c){let h=0,m=0,u=0;for(let j=0;j<9;j++)n.probe[j].set(0,0,0);let g=0,_=0,T=0,p=0,f=0,D=0,U=0,E=0,b=0,I=0,B=0,S=0,P=0,O=0;c.sort(Wy);for(let j=0,et=c.length;j<et;j++){let X=c[j],Z=X.color,rt=X.intensity,at=X.distance,Mt=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Es?Mt=X.shadow.map.texture:Mt=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)h+=Z.r*rt,m+=Z.g*rt,u+=Z.b*rt;else if(X.isLightProbe){for(let ct=0;ct<9;ct++)n.probe[ct].addScaledVector(X.sh.coefficients[ct],rt);O++}else if(X.isSunLight){let ct=t.get(X);if(ct.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let _t=X.shadow,xt=e.get(X);xt.shadowIntensity=_t.intensity,xt.shadowBias=_t.bias,xt.shadowNormalBias=_t.normalBias,xt.shadowRadius=_t.radius,xt.shadowMapSize.copy(_t.mapSize).multiply(_t.getFrameExtents()),n.sunShadow[_]=xt,n.sunShadowMap[_]=Mt;let Ht=_t.getViewportCount();for(let Gt=0;Gt<Ht;Gt++)n.sunShadowMatrix[T+Gt]=_t.getMatrix(Gt),n.sunShadowCascade[T+Gt]=_t._cascadeData[Gt];T+=Ht,_++}n.sun[g]=ct,g++}else if(X.isDirectionalLight){let ct=t.get(X);if(ct.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let _t=X.shadow,xt=e.get(X);xt.shadowIntensity=_t.intensity,xt.shadowBias=_t.bias,xt.shadowNormalBias=_t.normalBias,xt.shadowRadius=_t.radius,xt.shadowMapSize=_t.mapSize,n.directionalShadow[p]=xt,n.directionalShadowMap[p]=Mt,n.directionalShadowMatrix[p]=X.shadow.matrix,b++}n.directional[p]=ct,p++}else if(X.isSpotLight){let ct=t.get(X);ct.position.setFromMatrixPosition(X.matrixWorld),ct.color.copy(Z).multiplyScalar(rt),ct.distance=at,ct.coneCos=Math.cos(X.angle),ct.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),ct.decay=X.decay,n.spot[D]=ct;let _t=X.shadow;if(X.map&&(n.spotLightMap[S]=X.map,S++,_t.updateMatrices(X),X.castShadow&&P++),n.spotLightMatrix[D]=_t.matrix,X.castShadow){let xt=e.get(X);xt.shadowIntensity=_t.intensity,xt.shadowBias=_t.bias,xt.shadowNormalBias=_t.normalBias,xt.shadowRadius=_t.radius,xt.shadowMapSize=_t.mapSize,n.spotShadow[D]=xt,n.spotShadowMap[D]=Mt,B++}D++}else if(X.isRectAreaLight){let ct=t.get(X);ct.color.copy(Z).multiplyScalar(rt),ct.halfWidth.set(X.width*.5,0,0),ct.halfHeight.set(0,X.height*.5,0),n.rectArea[U]=ct,U++}else if(X.isPointLight){let ct=t.get(X);if(ct.color.copy(X.color).multiplyScalar(X.intensity),ct.distance=X.distance,ct.decay=X.decay,X.castShadow){let _t=X.shadow,xt=e.get(X);xt.shadowIntensity=_t.intensity,xt.shadowBias=_t.bias,xt.shadowNormalBias=_t.normalBias,xt.shadowRadius=_t.radius,xt.shadowMapSize=_t.mapSize,xt.shadowCameraNear=_t.camera.near,xt.shadowCameraFar=_t.camera.far,n.pointShadow[f]=xt,n.pointShadowMap[f]=Mt,n.pointShadowMatrix[f]=X.shadow.matrix,I++}n.point[f]=ct,f++}else if(X.isHemisphereLight){let ct=t.get(X);ct.skyColor.copy(X.color).multiplyScalar(rt),ct.groundColor.copy(X.groundColor).multiplyScalar(rt),n.hemi[E]=ct,E++}}U>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=u;let G=n.hash;(G.sunLength!==g||G.directionalLength!==p||G.pointLength!==f||G.spotLength!==D||G.rectAreaLength!==U||G.hemiLength!==E||G.numSunShadows!==_||G.numDirectionalShadows!==b||G.numPointShadows!==I||G.numSpotShadows!==B||G.numSpotMaps!==S||G.numLightProbes!==O)&&(n.sun.length=g,n.directional.length=p,n.spot.length=D,n.rectArea.length=U,n.point.length=f,n.hemi.length=E,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=T,n.sunShadowCascade.length=T,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=I,n.pointShadowMap.length=I,n.pointShadowMatrix.length=I,n.spotShadow.length=B,n.spotShadowMap.length=B,n.spotLightMatrix.length=B+S-P,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=O,G.sunLength=g,G.directionalLength=p,G.pointLength=f,G.spotLength=D,G.rectAreaLength=U,G.hemiLength=E,G.numSunShadows=_,G.numDirectionalShadows=b,G.numPointShadows=I,G.numSpotShadows=B,G.numSpotMaps=S,G.numLightProbes=O,n.version=Gy++)}function l(c,h){let m=0,u=0,g=0,_=0,T=0,p=0,f=h.matrixWorldInverse;for(let D=0,U=c.length;D<U;D++){let E=c[D];if(E.isSunLight){let b=n.sun[m];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(f),m++}else if(E.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),u++}else if(E.isSpotLight){let b=n.spot[_];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),_++}else if(E.isRectAreaLight){let b=n.rectArea[T];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(E.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),T++}else if(E.isPointLight){let b=n.point[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(f),g++}else if(E.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:n}}function Np(i){let t=new $y(i),e=[],n=[],s=[];function r(u){m.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let m={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Xy(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Np(i),t.set(s,[o])):r>=a.length?(o=new Np(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var qy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yy=`uniform sampler2D shadow_pass;
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
}`,Zy=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Jy=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Up=new Le,po=new z,Vu=new z;function Ky(i,t,e){let n=new Ur,s=new Nt,r=new Nt,a=new Be,o=new Ol,l=new Bl,c={},h=e.maxTextureSize,m={[Ss]:Vn,[Vn]:Ss,[zi]:zi},u=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:qy,fragmentShader:Yy}),g=u.clone();g.defines.HORIZONTAL_PASS=1;let _=new nn;_.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new gn(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=no;let f=this.type;this.render=function(I,B,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;this.type===Af&&(de("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=no);let P=i.getRenderTarget(),O=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),j=i.state;j.setBlending(ki),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let et=f!==this.type;et&&B.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(Z=>Z.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,Z=I.length;X<Z;X++){let rt=I[X],at=rt.shadow;if(at===void 0){de("WebGLShadowMap:",rt,"has no shadow.");continue}if(at.autoUpdate===!1&&at.needsUpdate===!1)continue;s.copy(at.mapSize);let Mt=at.getFrameExtents();s.multiply(Mt),r.copy(at.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Mt.x),s.x=r.x*Mt.x,at.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Mt.y),s.y=r.y*Mt.y,at.mapSize.y=r.y));let ct=i.state.buffers.depth.getReversed();if(at.camera._reversedDepth=ct,at.map===null||et===!0){if(at.map!==null&&(at.map.depthTexture!==null&&(at.map.depthTexture.dispose(),at.map.depthTexture=null),at.map.dispose()),this.type===Vr){if(rt.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}at.map=new Kn(s.x,s.y,{format:Es,type:Ai,minFilter:bn,magFilter:bn,generateMipmaps:!1}),at.map.texture.name=rt.name+".shadowMap",at.map.depthTexture=new gs(s.x,s.y,pi),at.map.depthTexture.name=rt.name+".shadowMapDepth",at.map.depthTexture.format=Ui,at.map.depthTexture.compareFunction=null,at.map.depthTexture.minFilter=pn,at.map.depthTexture.magFilter=pn}else rt.isPointLight?(at.map=new $c(s.x),at.map.depthTexture=new Rl(s.x,Ti)):(at.map=new Kn(s.x,s.y),at.map.depthTexture=new gs(s.x,s.y,Ti)),at.map.depthTexture.name=rt.name+".shadowMap",at.map.depthTexture.format=Ui,this.type===no?(at.map.depthTexture.compareFunction=ct?Vc:kc,at.map.depthTexture.minFilter=bn,at.map.depthTexture.magFilter=bn):(at.map.depthTexture.compareFunction=null,at.map.depthTexture.minFilter=pn,at.map.depthTexture.magFilter=pn);at.camera.updateProjectionMatrix()}at.map.isWebGLCubeRenderTarget!==!0&&(at.map.width!==s.x||at.map.height!==s.y)&&at.map.setSize(s.x,s.y);let _t=at.map.isWebGLCubeRenderTarget?6:at.getViewportCount();rt.isPointLight!==!0&&at.updateMatrices(rt,S);for(let xt=0;xt<_t;xt++){let Ht=at.getCamera(xt);if(rt.isPointLight){let Gt=at.camera,Pe=at.matrix,Me=rt.distance||Gt.far;Me!==Gt.far&&(Gt.far=Me,Gt.updateProjectionMatrix()),po.setFromMatrixPosition(rt.matrixWorld),Gt.position.copy(po),Vu.copy(Gt.position),Vu.add(Zy[xt]),Gt.up.copy(Jy[xt]),Gt.lookAt(Vu),Gt.updateMatrixWorld(),Pe.makeTranslation(-po.x,-po.y,-po.z),Up.multiplyMatrices(Gt.projectionMatrix,Gt.matrixWorldInverse),at._frustum.setFromProjectionMatrix(Up,Gt.coordinateSystem,Gt.reversedDepth)}if(at.map.isWebGLCubeRenderTarget)i.setRenderTarget(at.map,xt),i.clear();else{xt===0&&(i.setRenderTarget(at.map),i.clear());let Gt=at.getViewport(xt);a.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),j.viewport(a)}n=at.getFrustum(xt),E(B,S,Ht,rt,this.type)}at.isPointLightShadow!==!0&&this.type===Vr&&D(at,S),at.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(P,O,G)};function D(I,B){let S=t.update(T);u.defines.VSM_SAMPLES!==I.blurSamples&&(u.defines.VSM_SAMPLES=I.blurSamples,g.defines.VSM_SAMPLES=I.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),I.mapPass===null?I.mapPass=new Kn(s.x,s.y,{format:Es,type:Ai}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),u.uniforms.shadow_pass.value=I.map.depthTexture,u.uniforms.resolution.value.set(I.map.width,I.map.height),u.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(B,null,S,u,T,null),g.uniforms.shadow_pass.value=I.mapPass.texture,g.uniforms.resolution.value.set(I.map.width,I.map.height),g.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(B,null,S,g,T,null)}function U(I,B,S,P){let O=null,G=S.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)O=G;else if(O=S.isPointLight===!0?l:o,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){let j=O.uuid,et=B.uuid,X=c[j];X===void 0&&(X={},c[j]=X);let Z=X[et];Z===void 0&&(Z=O.clone(),X[et]=Z,B.addEventListener("dispose",b)),O=Z}if(O.visible=B.visible,O.wireframe=B.wireframe,P===Vr?O.side=B.shadowSide!==null?B.shadowSide:B.side:O.side=B.shadowSide!==null?B.shadowSide:m[B.side],O.alphaMap=B.alphaMap,O.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,O.map=B.map,O.clipShadows=B.clipShadows,O.clippingPlanes=B.clippingPlanes,O.clipIntersection=B.clipIntersection,O.displacementMap=B.displacementMap,O.displacementScale=B.displacementScale,O.displacementBias=B.displacementBias,O.wireframeLinewidth=B.wireframeLinewidth,O.linewidth=B.linewidth,S.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let j=i.properties.get(O);j.light=S}return O}function E(I,B,S,P,O){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&O===Vr)&&(!I.frustumCulled||I.intersectsFrustum(n))){I.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,I.matrixWorld);let et=t.update(I),X=I.material;if(Array.isArray(X)){let Z=et.groups;for(let rt=0,at=Z.length;rt<at;rt++){let Mt=Z[rt],ct=X[Mt.materialIndex];if(ct&&ct.visible){let _t=U(I,ct,P,O);I.onBeforeShadow(i,I,B,S,et,_t,Mt),i.renderBufferDirect(S,null,et,_t,I,Mt),I.onAfterShadow(i,I,B,S,et,_t,Mt)}}}else if(X.visible){let Z=U(I,X,P,O);I.onBeforeShadow(i,I,B,S,et,Z,null),i.renderBufferDirect(S,null,et,Z,I,null),I.onAfterShadow(i,I,B,S,et,Z,null)}}let j=I.children;for(let et=0,X=j.length;et<X;et++)E(j[et],B,S,P,O)}function b(I){I.target.removeEventListener("dispose",b);for(let S in c){let P=c[S],O=I.target.uuid;O in P&&(P[O].dispose(),delete P[O])}}}function jy(i,t){function e(){let q=!1,Ut=new Be,ft=null,Ct=new Be(0,0,0,0);return{setMask:function(Dt){ft!==Dt&&!q&&(i.colorMask(Dt,Dt,Dt,Dt),ft=Dt)},setLocked:function(Dt){q=Dt},setClear:function(Dt,vt,ee,Zt,Fe){Fe===!0&&(Dt*=Zt,vt*=Zt,ee*=Zt),Ut.set(Dt,vt,ee,Zt),Ct.equals(Ut)===!1&&(i.clearColor(Dt,vt,ee,Zt),Ct.copy(Ut))},reset:function(){q=!1,ft=null,Ct.set(-1,0,0,0)}}}function n(){let q=!1,Ut=!1,ft=null,Ct=null,Dt=null;return{setReversed:function(vt){if(Ut!==vt){let ee=t.get("EXT_clip_control");vt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT),Ut=vt;let Zt=Dt;Dt=null,this.setClear(Zt)}},getReversed:function(){return Ut},setTest:function(vt){vt?gt(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(vt){ft!==vt&&!q&&(i.depthMask(vt),ft=vt)},setFunc:function(vt){if(Ut&&(vt=op[vt]),Ct!==vt){switch(vt){case ul:i.depthFunc(i.NEVER);break;case dl:i.depthFunc(i.ALWAYS);break;case fl:i.depthFunc(i.LESS);break;case Cr:i.depthFunc(i.LEQUAL);break;case pl:i.depthFunc(i.EQUAL);break;case ml:i.depthFunc(i.GEQUAL);break;case gl:i.depthFunc(i.GREATER);break;case _l:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ct=vt}},setLocked:function(vt){q=vt},setClear:function(vt){Dt!==vt&&(Dt=vt,Ut&&(vt=1-vt),i.clearDepth(vt))},reset:function(){q=!1,ft=null,Ct=null,Dt=null,Ut=!1}}}function s(){let q=!1,Ut=null,ft=null,Ct=null,Dt=null,vt=null,ee=null,Zt=null,Fe=null;return{setTest:function(De){q||(De?gt(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(De){Ut!==De&&!q&&(i.stencilMask(De),Ut=De)},setFunc:function(De,xn,li){(ft!==De||Ct!==xn||Dt!==li)&&(i.stencilFunc(De,xn,li),ft=De,Ct=xn,Dt=li)},setOp:function(De,xn,li){(vt!==De||ee!==xn||Zt!==li)&&(i.stencilOp(De,xn,li),vt=De,ee=xn,Zt=li)},setLocked:function(De){q=De},setClear:function(De){Fe!==De&&(i.clearStencil(De),Fe=De)},reset:function(){q=!1,Ut=null,ft=null,Ct=null,Dt=null,vt=null,ee=null,Zt=null,Fe=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},m={},u={},g=new WeakMap,_=[],T=null,p=!1,f=null,D=null,U=null,E=null,b=null,I=null,B=null,S=new fe(0,0,0),P=0,O=!1,G=null,j=null,et=null,X=null,Z=null,rt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),at=!1,Mt=0,ct=i.getParameter(i.VERSION);ct.indexOf("WebGL")!==-1?(Mt=parseFloat(/^WebGL (\d)/.exec(ct)[1]),at=Mt>=1):ct.indexOf("OpenGL ES")!==-1&&(Mt=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),at=Mt>=2);let _t=null,xt={},Ht=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),Pe=new Be().fromArray(Ht),Me=new Be().fromArray(Gt);function Ae(q,Ut,ft,Ct){let Dt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(q,vt),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<ft;ee++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Ut,0,i.RGBA,1,1,Ct,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(Ut+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return vt}let dt={};dt[i.TEXTURE_2D]=Ae(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=Ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=Ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=Ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),gt(i.DEPTH_TEST),a.setFunc(Cr),wt(!1),Lt(ou),gt(i.CULL_FACE),bt(ki);function gt(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function Tt(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function ne(q,Ut){return u[q]!==Ut?(i.bindFramebuffer(q,Ut),u[q]=Ut,q===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ut),q===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Vt(q,Ut){let ft=_,Ct=!1;if(q){ft=g.get(Ut),ft===void 0&&(ft=[],g.set(Ut,ft));let Dt=q.textures;if(ft.length!==Dt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,ee=Dt.length;vt<ee;vt++)ft[vt]=i.COLOR_ATTACHMENT0+vt;ft.length=Dt.length,Ct=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,Ct=!0);Ct&&i.drawBuffers(ft)}function ce(q){return T!==q?(i.useProgram(q),T=q,!0):!1}let ue={[Zs]:i.FUNC_ADD,[Rf]:i.FUNC_SUBTRACT,[If]:i.FUNC_REVERSE_SUBTRACT};ue[Pf]=i.MIN,ue[Lf]=i.MAX;let st={[Df]:i.ZERO,[Nf]:i.ONE,[Uf]:i.SRC_COLOR,[uu]:i.SRC_ALPHA,[Vf]:i.SRC_ALPHA_SATURATE,[zf]:i.DST_COLOR,[Of]:i.DST_ALPHA,[Ff]:i.ONE_MINUS_SRC_COLOR,[du]:i.ONE_MINUS_SRC_ALPHA,[kf]:i.ONE_MINUS_DST_COLOR,[Bf]:i.ONE_MINUS_DST_ALPHA,[Hf]:i.CONSTANT_COLOR,[Gf]:i.ONE_MINUS_CONSTANT_COLOR,[Wf]:i.CONSTANT_ALPHA,[$f]:i.ONE_MINUS_CONSTANT_ALPHA};function bt(q,Ut,ft,Ct,Dt,vt,ee,Zt,Fe,De){if(q===ki){p===!0&&(Tt(i.BLEND),p=!1);return}if(p===!1&&(gt(i.BLEND),p=!0),q!==Cf){if(q!==f||De!==O){if((D!==Zs||b!==Zs)&&(i.blendEquation(i.FUNC_ADD),D=Zs,b=Zs),De)switch(q){case Hr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lu:i.blendFunc(i.ONE,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:me("WebGLState: Invalid blending: ",q);break}else switch(q){case Hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cu:me("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hu:me("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:me("WebGLState: Invalid blending: ",q);break}U=null,E=null,I=null,B=null,S.set(0,0,0),P=0,f=q,O=De}return}Dt=Dt||Ut,vt=vt||ft,ee=ee||Ct,(Ut!==D||Dt!==b)&&(i.blendEquationSeparate(ue[Ut],ue[Dt]),D=Ut,b=Dt),(ft!==U||Ct!==E||vt!==I||ee!==B)&&(i.blendFuncSeparate(st[ft],st[Ct],st[vt],st[ee]),U=ft,E=Ct,I=vt,B=ee),(Zt.equals(S)===!1||Fe!==P)&&(i.blendColor(Zt.r,Zt.g,Zt.b,Fe),S.copy(Zt),P=Fe),f=q,O=!1}function V(q,Ut){q.side===zi?Tt(i.CULL_FACE):gt(i.CULL_FACE);let ft=q.side===Vn;Ut&&(ft=!ft),wt(ft),q.blending===Hr&&q.transparent===!1?bt(ki):bt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);let Ct=q.stencilWrite;o.setTest(Ct),Ct&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),qt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(q){G!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),G=q)}function Lt(q){q!==Ef?(gt(i.CULL_FACE),q!==j&&(q===ou?i.cullFace(i.BACK):q===Tf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),j=q}function se(q){q!==et&&(at&&i.lineWidth(q),et=q)}function qt(q,Ut,ft){q?(gt(i.POLYGON_OFFSET_FILL),(X!==Ut||Z!==ft)&&(X=Ut,Z=ft,a.getReversed()&&(Ut=-Ut),i.polygonOffset(Ut,ft))):Tt(i.POLYGON_OFFSET_FILL)}function oe(q){q?gt(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function re(q){q===void 0&&(q=i.TEXTURE0+rt-1),_t!==q&&(i.activeTexture(q),_t=q)}function H(q,Ut,ft){ft===void 0&&(_t===null?ft=i.TEXTURE0+rt-1:ft=_t);let Ct=xt[ft];Ct===void 0&&(Ct={type:void 0,texture:void 0},xt[ft]=Ct),(Ct.type!==q||Ct.texture!==Ut)&&(_t!==ft&&(i.activeTexture(ft),_t=ft),i.bindTexture(q,Ut||dt[q]),Ct.type=q,Ct.texture=Ut)}function Re(){let q=xt[_t];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Wt(){try{i.compressedTexImage2D(...arguments)}catch(q){me("WebGLState:",q)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(q){me("WebGLState:",q)}}function v(){try{i.texSubImage2D(...arguments)}catch(q){me("WebGLState:",q)}}function J(){try{i.texSubImage3D(...arguments)}catch(q){me("WebGLState:",q)}}function it(){try{i.compressedTexSubImage2D(...arguments)}catch(q){me("WebGLState:",q)}}function ot(){try{i.compressedTexSubImage3D(...arguments)}catch(q){me("WebGLState:",q)}}function At(){try{i.texStorage2D(...arguments)}catch(q){me("WebGLState:",q)}}function It(){try{i.texStorage3D(...arguments)}catch(q){me("WebGLState:",q)}}function ut(){try{i.texImage2D(...arguments)}catch(q){me("WebGLState:",q)}}function pt(){try{i.texImage3D(...arguments)}catch(q){me("WebGLState:",q)}}function Ft(q){return m[q]!==void 0?m[q]:i.getParameter(q)}function te(q,Ut){m[q]!==Ut&&(i.pixelStorei(q,Ut),m[q]=Ut)}function Bt(q){Pe.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),Pe.copy(q))}function Rt(q){Me.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),Me.copy(q))}function Jt(q,Ut){let ft=c.get(Ut);ft===void 0&&(ft=new WeakMap,c.set(Ut,ft));let Ct=ft.get(q);Ct===void 0&&(Ct=i.getUniformBlockIndex(Ut,q.name),ft.set(q,Ct))}function le(q,Ut){let Ct=c.get(Ut).get(q);l.get(Ut)!==Ct&&(i.uniformBlockBinding(Ut,Ct,q.__bindingPointIndex),l.set(Ut,Ct))}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},m={},_t=null,xt={},u={},g=new WeakMap,_=[],T=null,p=!1,f=null,D=null,U=null,E=null,b=null,I=null,B=null,S=new fe(0,0,0),P=0,O=!1,G=null,j=null,et=null,X=null,Z=null,Pe.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:gt,disable:Tt,bindFramebuffer:ne,drawBuffers:Vt,useProgram:ce,setBlending:bt,setMaterial:V,setFlipSided:wt,setCullFace:Lt,setLineWidth:se,setPolygonOffset:qt,setScissorTest:oe,activeTexture:re,bindTexture:H,unbindTexture:Re,compressedTexImage2D:Wt,compressedTexImage3D:R,texImage2D:ut,texImage3D:pt,pixelStorei:te,getParameter:Ft,updateUBOMapping:Jt,uniformBlockBinding:le,texStorage2D:At,texStorage3D:It,texSubImage2D:v,texSubImage3D:J,compressedTexSubImage2D:it,compressedTexSubImage3D:ot,scissor:Bt,viewport:Rt,reset:ve}}function Qy(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,h=new WeakMap,m=new Set,u,g=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(R,v){return _?new OffscreenCanvas(R,v):Ea("canvas")}function p(R,v,J){let it=1,ot=Wt(R);if((ot.width>J||ot.height>J)&&(it=J/Math.max(ot.width,ot.height)),it<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let At=Math.floor(it*ot.width),It=Math.floor(it*ot.height);u===void 0&&(u=T(At,It));let ut=v?T(At,It):u;return ut.width=At,ut.height=It,ut.getContext("2d").drawImage(R,0,0,At,It),de("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+At+"x"+It+")."),ut}else return"data"in R&&de("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),R;return R}function f(R){return R.generateMipmaps}function D(R){i.generateMipmap(R)}function U(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(R,v,J,it,ot,At=!1){if(R!==null){if(i[R]!==void 0)return i[R];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let It;it&&(It=t.get("EXT_texture_norm16"),It||de("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=v;if(v===i.RED&&(J===i.FLOAT&&(ut=i.R32F),J===i.HALF_FLOAT&&(ut=i.R16F),J===i.UNSIGNED_BYTE&&(ut=i.R8),J===i.UNSIGNED_SHORT&&It&&(ut=It.R16_EXT),J===i.SHORT&&It&&(ut=It.R16_SNORM_EXT)),v===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.R8UI),J===i.UNSIGNED_SHORT&&(ut=i.R16UI),J===i.UNSIGNED_INT&&(ut=i.R32UI),J===i.BYTE&&(ut=i.R8I),J===i.SHORT&&(ut=i.R16I),J===i.INT&&(ut=i.R32I)),v===i.RG&&(J===i.FLOAT&&(ut=i.RG32F),J===i.HALF_FLOAT&&(ut=i.RG16F),J===i.UNSIGNED_BYTE&&(ut=i.RG8),J===i.UNSIGNED_SHORT&&It&&(ut=It.RG16_EXT),J===i.SHORT&&It&&(ut=It.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.RG8UI),J===i.UNSIGNED_SHORT&&(ut=i.RG16UI),J===i.UNSIGNED_INT&&(ut=i.RG32UI),J===i.BYTE&&(ut=i.RG8I),J===i.SHORT&&(ut=i.RG16I),J===i.INT&&(ut=i.RG32I)),v===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),J===i.UNSIGNED_INT&&(ut=i.RGB32UI),J===i.BYTE&&(ut=i.RGB8I),J===i.SHORT&&(ut=i.RGB16I),J===i.INT&&(ut=i.RGB32I)),v===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),J===i.UNSIGNED_INT&&(ut=i.RGBA32UI),J===i.BYTE&&(ut=i.RGBA8I),J===i.SHORT&&(ut=i.RGBA16I),J===i.INT&&(ut=i.RGBA32I)),v===i.RGB&&(J===i.UNSIGNED_SHORT&&It&&(ut=It.RGB16_EXT),J===i.SHORT&&It&&(ut=It.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(ut=i.R11F_G11F_B10F)),v===i.RGBA){let pt=At?wa:Ce.getTransfer(ot);J===i.FLOAT&&(ut=i.RGBA32F),J===i.HALF_FLOAT&&(ut=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ut=pt===Oe?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&It&&(ut=It.RGBA16_EXT),J===i.SHORT&&It&&(ut=It.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function b(R,v){let J;return R?v===null||v===Ti||v===Wr?J=i.DEPTH24_STENCIL8:v===pi?J=i.DEPTH32F_STENCIL8:v===Gr&&(J=i.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ti||v===Wr?J=i.DEPTH_COMPONENT24:v===pi?J=i.DEPTH_COMPONENT32F:v===Gr&&(J=i.DEPTH_COMPONENT16),J}function I(R,v){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==pn&&R.minFilter!==bn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function B(R){let v=R.target;v.removeEventListener("dispose",B),P(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&m.delete(v)}function S(R){let v=R.target;v.removeEventListener("dispose",S),G(v)}function P(R){let v=n.get(R);if(v.__webglInit===void 0)return;let J=R.source,it=g.get(J);if(it){let ot=it[v.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&O(R),Object.keys(it).length===0&&g.delete(J)}n.remove(R)}function O(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let J=R.source,it=g.get(J);delete it[v.__cacheKey],a.memory.textures--}function G(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(v.__webglFramebuffer[it]))for(let ot=0;ot<v.__webglFramebuffer[it].length;ot++)i.deleteFramebuffer(v.__webglFramebuffer[it][ot]);else i.deleteFramebuffer(v.__webglFramebuffer[it]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[it])}else{if(Array.isArray(v.__webglFramebuffer))for(let it=0;it<v.__webglFramebuffer.length;it++)i.deleteFramebuffer(v.__webglFramebuffer[it]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let it=0;it<v.__webglColorRenderbuffer.length;it++)v.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[it]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let J=R.textures;for(let it=0,ot=J.length;it<ot;it++){let At=n.get(J[it]);At.__webglTexture&&(i.deleteTexture(At.__webglTexture),a.memory.textures--),n.remove(J[it])}n.remove(R)}let j=0;function et(){j=0}function X(){return j}function Z(R){j=R}function rt(){let R=j;return R>=s.maxTextures&&de("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),j+=1,R}function at(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function Mt(R,v){let J=n.get(R);if(R.isVideoTexture&&H(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&J.__version!==R.version){let it=R.image;if(it===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(J,R,v);return}}else R.isExternalTexture&&(J.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+v)}function ct(R,v){let J=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&J.__version!==R.version){Tt(J,R,v);return}else R.isExternalTexture&&(J.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+v)}function _t(R,v){let J=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&J.__version!==R.version){Tt(J,R,v);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+v)}function xt(R,v){let J=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&J.__version!==R.version){ne(J,R,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+v)}let Ht={[xl]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[vl]:i.MIRRORED_REPEAT},Gt={[pn]:i.NEAREST,[Yf]:i.NEAREST_MIPMAP_NEAREST,[so]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[ec]:i.LINEAR_MIPMAP_NEAREST,[bs]:i.LINEAR_MIPMAP_LINEAR},Pe={[jf]:i.NEVER,[ip]:i.ALWAYS,[Qf]:i.LESS,[kc]:i.LEQUAL,[tp]:i.EQUAL,[Vc]:i.GEQUAL,[ep]:i.GREATER,[np]:i.NOTEQUAL};function Me(R,v){if(v.type===pi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===bn||v.magFilter===ec||v.magFilter===so||v.magFilter===bs||v.minFilter===bn||v.minFilter===ec||v.minFilter===so||v.minFilter===bs)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Ht[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Ht[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Ht[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Gt[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Gt[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Pe[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===pn||v.minFilter!==so&&v.minFilter!==bs||v.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ae(R,v){let J=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",B));let it=v.source,ot=g.get(it);ot===void 0&&(ot={},g.set(it,ot));let At=at(v);if(At!==R.__cacheKey){ot[At]===void 0&&(ot[At]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),ot[At].usedTimes++;let It=ot[R.__cacheKey];It!==void 0&&(ot[R.__cacheKey].usedTimes--,It.usedTimes===0&&O(v)),R.__cacheKey=At,R.__webglTexture=ot[At].texture}return J}function dt(R,v,J){return Math.floor(Math.floor(R/J)/v)}function gt(R,v,J,it){let At=R.updateRanges;if(At.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,J,it,v.data);else{At.sort((te,Bt)=>te.start-Bt.start);let It=0;for(let te=1;te<At.length;te++){let Bt=At[It],Rt=At[te],Jt=Bt.start+Bt.count,le=dt(Rt.start,v.width,4),ve=dt(Bt.start,v.width,4);Rt.start<=Jt+1&&le===ve&&dt(Rt.start+Rt.count-1,v.width,4)===le?Bt.count=Math.max(Bt.count,Rt.start+Rt.count-Bt.start):(++It,At[It]=Rt)}At.length=It+1;let ut=e.getParameter(i.UNPACK_ROW_LENGTH),pt=e.getParameter(i.UNPACK_SKIP_PIXELS),Ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let te=0,Bt=At.length;te<Bt;te++){let Rt=At[te],Jt=Math.floor(Rt.start/4),le=Math.ceil(Rt.count/4),ve=Jt%v.width,q=Math.floor(Jt/v.width),Ut=le,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),e.pixelStorei(i.UNPACK_SKIP_ROWS,q),e.texSubImage2D(i.TEXTURE_2D,0,ve,q,Ut,ft,J,it,v.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ut),e.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ft)}}function Tt(R,v,J){let it=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(it=i.TEXTURE_3D);let ot=Ae(R,v),At=v.source;e.bindTexture(it,R.__webglTexture,i.TEXTURE0+J);let It=n.get(At);if(At.version!==It.__version||ot===!0){if(e.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ft=Ce.getPrimaries(Ce.workingColorSpace),Ct=v.colorSpace===ss?null:Ce.getPrimaries(v.colorSpace),Dt=v.colorSpace===ss||ft===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let pt=p(v.image,!1,s.maxTextureSize);pt=Re(v,pt);let Ft=r.convert(v.format,v.colorSpace),te=r.convert(v.type),Bt=E(v.internalFormat,Ft,te,v.normalized,v.colorSpace,v.isVideoTexture);Me(it,v);let Rt,Jt=v.mipmaps,le=v.isVideoTexture!==!0,ve=It.__version===void 0||ot===!0,q=At.dataReady,Ut=I(v,pt);if(v.isDepthTexture)Bt=b(v.format===ws,v.type),ve&&(le?e.texStorage2D(i.TEXTURE_2D,1,Bt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Bt,pt.width,pt.height,0,Ft,te,null));else if(v.isDataTexture)if(Jt.length>0){le&&ve&&e.texStorage2D(i.TEXTURE_2D,Ut,Bt,Jt[0].width,Jt[0].height);for(let ft=0,Ct=Jt.length;ft<Ct;ft++)Rt=Jt[ft],le?q&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Rt.width,Rt.height,Ft,te,Rt.data):e.texImage2D(i.TEXTURE_2D,ft,Bt,Rt.width,Rt.height,0,Ft,te,Rt.data);v.generateMipmaps=!1}else le?(ve&&e.texStorage2D(i.TEXTURE_2D,Ut,Bt,pt.width,pt.height),q&&gt(v,pt,Ft,te)):e.texImage2D(i.TEXTURE_2D,0,Bt,pt.width,pt.height,0,Ft,te,pt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){le&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Bt,Jt[0].width,Jt[0].height,pt.depth);for(let ft=0,Ct=Jt.length;ft<Ct;ft++)if(Rt=Jt[ft],v.format!==mi)if(Ft!==null)if(le){if(q)if(v.layerUpdates.size>0){let Dt=Uu(Rt.width,Rt.height,v.format,v.type);for(let vt of v.layerUpdates){let ee=Rt.data.subarray(vt*Dt/Rt.data.BYTES_PER_ELEMENT,(vt+1)*Dt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,vt,Rt.width,Rt.height,1,Ft,ee)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Rt.width,Rt.height,pt.depth,Ft,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Bt,Rt.width,Rt.height,pt.depth,0,Rt.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Rt.width,Rt.height,pt.depth,Ft,te,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Bt,Rt.width,Rt.height,pt.depth,0,Ft,te,Rt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{le&&ve&&e.texStorage2D(i.TEXTURE_2D,Ut,Bt,Jt[0].width,Jt[0].height);for(let ft=0,Ct=Jt.length;ft<Ct;ft++)Rt=Jt[ft],v.format!==mi?Ft!==null?le?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,Rt.width,Rt.height,Ft,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Bt,Rt.width,Rt.height,0,Rt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?q&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Rt.width,Rt.height,Ft,te,Rt.data):e.texImage2D(i.TEXTURE_2D,ft,Bt,Rt.width,Rt.height,0,Ft,te,Rt.data)}else if(v.isDataArrayTexture)if(le){if(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Bt,pt.width,pt.height,pt.depth),q)if(v.layerUpdates.size>0){let ft=Uu(pt.width,pt.height,v.format,v.type);for(let Ct of v.layerUpdates){let Dt=pt.data.subarray(Ct*ft/pt.data.BYTES_PER_ELEMENT,(Ct+1)*ft/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ct,pt.width,pt.height,1,Ft,te,Dt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Ft,te,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,pt.width,pt.height,pt.depth,0,Ft,te,pt.data);else if(v.isData3DTexture)le?(ve&&e.texStorage3D(i.TEXTURE_3D,Ut,Bt,pt.width,pt.height,pt.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Ft,te,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,pt.width,pt.height,pt.depth,0,Ft,te,pt.data);else if(v.isFramebufferTexture){if(ve)if(le)e.texStorage2D(i.TEXTURE_2D,Ut,Bt,pt.width,pt.height);else{let ft=pt.width,Ct=pt.height;for(let Dt=0;Dt<Ut;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,Bt,ft,Ct,0,Ft,te,null),ft>>=1,Ct>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),pt.parentNode!==ft){ft.appendChild(pt),m.add(v),ft.onpaint=Ct=>{let Dt=Ct.changedElements;for(let vt of m)Dt.includes(vt.image)&&(vt.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,pt);else{let Dt=i.RGBA,vt=i.RGBA,ee=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Dt,vt,ee,pt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Jt.length>0){if(le&&ve){let ft=Wt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,Ut,Bt,ft.width,ft.height)}for(let ft=0,Ct=Jt.length;ft<Ct;ft++)Rt=Jt[ft],le?q&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Ft,te,Rt):e.texImage2D(i.TEXTURE_2D,ft,Bt,Ft,te,Rt);v.generateMipmaps=!1}else if(le){if(ve){let ft=Wt(pt);e.texStorage2D(i.TEXTURE_2D,Ut,Bt,ft.width,ft.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ft,te,pt)}else e.texImage2D(i.TEXTURE_2D,0,Bt,Ft,te,pt);f(v)&&D(it),It.__version=At.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ne(R,v,J){if(v.image.length!==6)return;let it=Ae(R,v),ot=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+J);let At=n.get(ot);if(ot.version!==At.__version||it===!0){e.activeTexture(i.TEXTURE0+J);let It=Ce.getPrimaries(Ce.workingColorSpace),ut=v.colorSpace===ss?null:Ce.getPrimaries(v.colorSpace),pt=v.colorSpace===ss||It===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Ft=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,Bt=[];for(let vt=0;vt<6;vt++)!Ft&&!te?Bt[vt]=p(v.image[vt],!0,s.maxCubemapSize):Bt[vt]=te?v.image[vt].image:v.image[vt],Bt[vt]=Re(v,Bt[vt]);let Rt=Bt[0],Jt=r.convert(v.format,v.colorSpace),le=r.convert(v.type),ve=E(v.internalFormat,Jt,le,v.normalized,v.colorSpace),q=v.isVideoTexture!==!0,Ut=At.__version===void 0||it===!0,ft=ot.dataReady,Ct=I(v,Rt);Me(i.TEXTURE_CUBE_MAP,v);let Dt;if(Ft){q&&Ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,ve,Rt.width,Rt.height);for(let vt=0;vt<6;vt++){Dt=Bt[vt].mipmaps;for(let ee=0;ee<Dt.length;ee++){let Zt=Dt[ee];v.format!==mi?Jt!==null?q?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ee,0,0,Zt.width,Zt.height,Jt,Zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ee,ve,Zt.width,Zt.height,0,Zt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ee,0,0,Zt.width,Zt.height,Jt,le,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ee,ve,Zt.width,Zt.height,0,Jt,le,Zt.data)}}}else{if(Dt=v.mipmaps,q&&Ut){Dt.length>0&&Ct++;let vt=Wt(Bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,ve,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(te){q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Bt[vt].width,Bt[vt].height,Jt,le,Bt[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ve,Bt[vt].width,Bt[vt].height,0,Jt,le,Bt[vt].data);for(let ee=0;ee<Dt.length;ee++){let Fe=Dt[ee].image[vt].image;q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ee+1,0,0,Fe.width,Fe.height,Jt,le,Fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ee+1,ve,Fe.width,Fe.height,0,Jt,le,Fe.data)}}else{q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Jt,le,Bt[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ve,Jt,le,Bt[vt]);for(let ee=0;ee<Dt.length;ee++){let Zt=Dt[ee];q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ee+1,0,0,Jt,le,Zt.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ee+1,ve,Jt,le,Zt.image[vt])}}}f(v)&&D(i.TEXTURE_CUBE_MAP),At.__version=ot.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Vt(R,v,J,it,ot,At){let It=r.convert(J.format,J.colorSpace),ut=r.convert(J.type),pt=E(J.internalFormat,It,ut,J.normalized,J.colorSpace),Ft=n.get(v),te=n.get(J);if(te.__renderTarget=v,!Ft.__hasExternalTextures){let Bt=Math.max(1,v.width>>At),Rt=Math.max(1,v.height>>At);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,At,pt,Bt,Rt,v.depth,0,It,ut,null):e.texImage2D(ot,At,pt,Bt,Rt,0,It,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),re(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,ot,te.__webglTexture,0,oe(v)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,ot,te.__webglTexture,At),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(R,v,J){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let it=v.depthTexture,ot=it&&it.isDepthTexture?it.type:null,At=b(v.stencilBuffer,ot),It=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;re(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe(v),At,v.width,v.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe(v),At,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,At,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,R)}else{let it=v.textures;for(let ot=0;ot<it.length;ot++){let At=it[ot],It=r.convert(At.format,At.colorSpace),ut=r.convert(At.type),pt=E(At.internalFormat,It,ut,At.normalized,At.colorSpace);re(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe(v),pt,v.width,v.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe(v),pt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,pt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(R,v,J){let it=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=n.get(v.depthTexture);if(ot.__renderTarget=v,(!ot.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),it){if(ot.__webglInit===void 0&&(ot.__webglInit=!0,v.depthTexture.addEventListener("dispose",B)),ot.__webglTexture===void 0){ot.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Me(i.TEXTURE_CUBE_MAP,v.depthTexture);let Ft=r.convert(v.depthTexture.format),te=r.convert(v.depthTexture.type),Bt;v.depthTexture.format===Ui?Bt=i.DEPTH_COMPONENT24:v.depthTexture.format===ws&&(Bt=i.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Bt,v.width,v.height,0,Ft,te,null)}}else Mt(v.depthTexture,0);let At=ot.__webglTexture,It=oe(v),ut=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,pt=v.depthTexture.format===ws?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ui)re(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,ut,At,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,pt,ut,At,0);else if(v.depthTexture.format===ws)re(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,ut,At,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,pt,ut,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(R){let v=n.get(R),J=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let it=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),it){let ot=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,it.removeEventListener("dispose",ot)};it.addEventListener("dispose",ot),v.__depthDisposeCallback=ot}v.__boundDepthTexture=it}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(J)for(let it=0;it<6;it++)ue(v.__webglFramebuffer[it],R,it);else{let it=R.texture.mipmaps;it&&it.length>0?ue(v.__webglFramebuffer[0],R,0):ue(v.__webglFramebuffer,R,0)}else if(J){v.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[it]),v.__webglDepthbuffer[it]===void 0)v.__webglDepthbuffer[it]=i.createRenderbuffer(),ce(v.__webglDepthbuffer[it],R,!1);else{let ot=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=v.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,At),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,At)}}else{let it=R.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ce(v.__webglDepthbuffer,R,!1);else{let ot=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,At),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,At)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(R,v,J){let it=n.get(R);v!==void 0&&Vt(it.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&st(R)}function V(R){let v=R.texture,J=n.get(R),it=n.get(v);R.addEventListener("dispose",S);let ot=R.textures,At=R.isWebGLCubeRenderTarget===!0,It=ot.length>1;if(It||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=v.version,a.memory.textures++),At){J.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0){J.__webglFramebuffer[ut]=[];for(let pt=0;pt<v.mipmaps.length;pt++)J.__webglFramebuffer[ut][pt]=i.createFramebuffer()}else J.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){J.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)J.__webglFramebuffer[ut]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(It)for(let ut=0,pt=ot.length;ut<pt;ut++){let Ft=n.get(ot[ut]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&re(R)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ut=0;ut<ot.length;ut++){let pt=ot[ut];J.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[ut]);let Ft=r.convert(pt.format,pt.colorSpace),te=r.convert(pt.type),Bt=E(pt.internalFormat,Ft,te,pt.normalized,pt.colorSpace,R.isXRRenderTarget===!0),Rt=oe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,Bt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,J.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(J.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(At){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Me(i.TEXTURE_CUBE_MAP,v);for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)Vt(J.__webglFramebuffer[ut][pt],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,pt);else Vt(J.__webglFramebuffer[ut],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);f(v)&&D(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let ut=0,pt=ot.length;ut<pt;ut++){let Ft=ot[ut],te=n.get(Ft),Bt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Bt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Bt,te.__webglTexture),Me(Bt,Ft),Vt(J.__webglFramebuffer,R,Ft,i.COLOR_ATTACHMENT0+ut,Bt,0),f(Ft)&&D(Bt)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,it.__webglTexture),Me(ut,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)Vt(J.__webglFramebuffer[pt],R,v,i.COLOR_ATTACHMENT0,ut,pt);else Vt(J.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,ut,0);f(v)&&D(ut),e.unbindTexture()}R.depthBuffer&&st(R)}function wt(R){let v=R.textures;for(let J=0,it=v.length;J<it;J++){let ot=v[J];if(f(ot)){let At=U(R),It=n.get(ot).__webglTexture;e.bindTexture(At,It),D(At),e.unbindTexture()}}}let Lt=[],se=[];function qt(R){if(R.samples>0){if(re(R)===!1){let v=R.textures,J=R.width,it=R.height,ot=i.COLOR_BUFFER_BIT,At=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(R),ut=v.length>1;if(ut)for(let Ft=0;Ft<v.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);let pt=R.texture.mipmaps;pt&&pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Ft=0;Ft<v.length;Ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Ft]);let te=n.get(v[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,J,it,0,0,J,it,ot,i.NEAREST),l===!0&&(Lt.length=0,se.length=0,Lt.push(i.COLOR_ATTACHMENT0+Ft),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Lt.push(At),se.push(At),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Ft=0;Ft<v.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,It.__webglColorRenderbuffer[Ft]);let te=n.get(v[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function oe(R){return Math.min(s.maxSamples,R.samples)}function re(R){let v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function H(R){let v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function Re(R,v){let J=R.colorSpace,it=R.format,ot=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||J!==ba&&J!==ss&&(Ce.getTransfer(J)===Oe?(it!==mi||ot!==Qn)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):me("WebGLTextures: Unsupported texture color space:",J)),v}function Wt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=rt,this.resetTextureUnits=et,this.getTextureUnits=X,this.setTextureUnits=Z,this.setTexture2D=Mt,this.setTexture2DArray=ct,this.setTexture3D=_t,this.setTextureCube=xt,this.rebindTextures=bt,this.setupRenderTarget=V,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Vt,this.useMultisampledRTT=re,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function tS(i,t){function e(n,s=ss){let r,a=Ce.getTransfer(s);if(n===Qn)return i.UNSIGNED_BYTE;if(n===ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Su)return i.BYTE;if(n===Mu)return i.SHORT;if(n===Gr)return i.UNSIGNED_SHORT;if(n===nc)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===pi)return i.FLOAT;if(n===Ai)return i.HALF_FLOAT;if(n===Eu)return i.ALPHA;if(n===Tu)return i.RGB;if(n===mi)return i.RGBA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===rc)return i.RED;if(n===ac)return i.RED_INTEGER;if(n===Es)return i.RG;if(n===oc)return i.RG_INTEGER;if(n===lc)return i.RGBA_INTEGER;if(n===ro||n===ao||n===oo||n===lo)if(a===Oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cc||n===hc||n===uc||n===dc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fc||n===pc||n===mc||n===gc||n===_c||n===co||n===xc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fc||n===pc)return a===Oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mc)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===gc)return r.COMPRESSED_R11_EAC;if(n===_c)return r.COMPRESSED_SIGNED_R11_EAC;if(n===co)return r.COMPRESSED_RG11_EAC;if(n===xc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===vc||n===yc||n===Sc||n===Mc||n===bc||n===wc||n===Ec||n===Tc||n===Ac||n===Cc||n===Rc||n===Ic||n===Pc||n===Lc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vc)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yc)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sc)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mc)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bc)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wc)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ec)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tc)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ac)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cc)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rc)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ic)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pc)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lc)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dc||n===Nc||n===Uc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Dc)return a===Oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fc||n===Oc||n===ho||n===Bc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var eS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nS=`
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

}`,Zu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Fa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new _n({vertexShader:eS,fragmentShader:nS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gn(new Xa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ju=class extends Fi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,m=null,u=null,g=null,_=null,T=typeof XRWebGLBinding<"u",p=new Zu,f={},D=e.getContextAttributes(),U=null,E=null,b=[],I=[],B=new Nt,S=null,P=null,O=new Dn;O.viewport=new Be;let G=new Dn;G.viewport=new Be;let j=[O,G],et=new Kl,X=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(dt){let gt=b[dt];return gt===void 0&&(gt=new Nr,b[dt]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(dt){let gt=b[dt];return gt===void 0&&(gt=new Nr,b[dt]=gt),gt.getGripSpace()},this.getHand=function(dt){let gt=b[dt];return gt===void 0&&(gt=new Nr,b[dt]=gt),gt.getHandSpace()};function rt(dt){let gt=I.indexOf(dt.inputSource);if(gt===-1)return;let Tt=b[gt];Tt!==void 0&&(Tt.update(dt.inputSource,dt.frame,c||a),Tt.dispatchEvent({type:dt.type,data:dt.inputSource}))}function at(){s.removeEventListener("select",rt),s.removeEventListener("selectstart",rt),s.removeEventListener("selectend",rt),s.removeEventListener("squeeze",rt),s.removeEventListener("squeezestart",rt),s.removeEventListener("squeezeend",rt),s.removeEventListener("end",at),s.removeEventListener("inputsourceschange",Mt);for(let dt=0;dt<b.length;dt++){let gt=I[dt];gt!==null&&(I[dt]=null,b[dt].disconnect(gt))}X=null,Z=null,p.reset();for(let dt in f)delete f[dt];if(t.setRenderTarget(U),g=null,u=null,m=null,s=null,E=null,Ae.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(B.width,B.height,!1),P!==null){let dt=P.camera;dt.fov=P.fov,dt.zoom=P.zoom,dt.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(dt){r=dt,n.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(dt){o=dt,n.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(dt){c=dt},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return m===null&&T&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(dt){if(s=dt,s!==null){if(U=t.getRenderTarget(),s.addEventListener("select",rt),s.addEventListener("selectstart",rt),s.addEventListener("selectend",rt),s.addEventListener("squeeze",rt),s.addEventListener("squeezestart",rt),s.addEventListener("squeezeend",rt),s.addEventListener("end",at),s.addEventListener("inputsourceschange",Mt),D.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(B),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,ne=null,Vt=null;D.depth&&(Vt=D.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=D.stencil?ws:Ui,ne=D.stencil?Wr:Ti);let ce={colorFormat:e.RGBA8,depthFormat:Vt,scaleFactor:r};m=this.getBinding(),u=m.createProjectionLayer(ce),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new Kn(u.textureWidth,u.textureHeight,{format:mi,type:Qn,depthTexture:new gs(u.textureWidth,u.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Tt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new Kn(g.framebufferWidth,g.framebufferHeight,{format:mi,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ae.setContext(s),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Mt(dt){for(let gt=0;gt<dt.removed.length;gt++){let Tt=dt.removed[gt],ne=I.indexOf(Tt);ne>=0&&(I[ne]=null,b[ne].disconnect(Tt))}for(let gt=0;gt<dt.added.length;gt++){let Tt=dt.added[gt],ne=I.indexOf(Tt);if(ne===-1){for(let ce=0;ce<b.length;ce++)if(ce>=I.length){I.push(Tt),ne=ce;break}else if(I[ce]===null){I[ce]=Tt,ne=ce;break}if(ne===-1)break}let Vt=b[ne];Vt&&Vt.connect(Tt)}}let ct=new z,_t=new z;function xt(dt,gt,Tt){ct.setFromMatrixPosition(gt.matrixWorld),_t.setFromMatrixPosition(Tt.matrixWorld);let ne=ct.distanceTo(_t),Vt=gt.projectionMatrix.elements,ce=Tt.projectionMatrix.elements,ue=Vt[14]/(Vt[10]-1),st=Vt[14]/(Vt[10]+1),bt=(Vt[9]+1)/Vt[5],V=(Vt[9]-1)/Vt[5],wt=(Vt[8]-1)/Vt[0],Lt=(ce[8]+1)/ce[0],se=ue*wt,qt=ue*Lt,oe=ne/(-wt+Lt),re=oe*-wt;if(gt.matrixWorld.decompose(dt.position,dt.quaternion,dt.scale),dt.translateX(re),dt.translateZ(oe),dt.matrixWorld.compose(dt.position,dt.quaternion,dt.scale),dt.matrixWorldInverse.copy(dt.matrixWorld).invert(),Vt[10]===-1)dt.projectionMatrix.copy(gt.projectionMatrix),dt.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{let H=ue+oe,Re=st+oe,Wt=se-re,R=qt+(ne-re),v=bt*st/Re*H,J=V*st/Re*H;dt.projectionMatrix.makePerspective(Wt,R,v,J,H,Re),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert()}}function Ht(dt,gt){gt===null?dt.matrixWorld.copy(dt.matrix):dt.matrixWorld.multiplyMatrices(gt.matrixWorld,dt.matrix),dt.matrixWorldInverse.copy(dt.matrixWorld).invert()}this.updateCamera=function(dt){if(s===null)return;let gt=dt.near,Tt=dt.far;p.texture!==null&&(p.depthNear>0&&(gt=p.depthNear),p.depthFar>0&&(Tt=p.depthFar)),et.near=G.near=O.near=gt,et.far=G.far=O.far=Tt,(X!==et.near||Z!==et.far)&&(s.updateRenderState({depthNear:et.near,depthFar:et.far}),X=et.near,Z=et.far),et.layers.mask=dt.layers.mask|6,O.layers.mask=et.layers.mask&-5,G.layers.mask=et.layers.mask&-3;let ne=dt.parent,Vt=et.cameras;Ht(et,ne);for(let ce=0;ce<Vt.length;ce++)Ht(Vt[ce],ne);Vt.length===2?xt(et,O,G):et.projectionMatrix.copy(O.projectionMatrix),P===null&&dt.isPerspectiveCamera&&(P={camera:dt,fov:dt.fov,zoom:dt.zoom}),Gt(dt,et,ne)};function Gt(dt,gt,Tt){Tt===null?dt.matrix.copy(gt.matrixWorld):(dt.matrix.copy(Tt.matrixWorld),dt.matrix.invert(),dt.matrix.multiply(gt.matrixWorld)),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.updateMatrixWorld(!0),dt.projectionMatrix.copy(gt.projectionMatrix),dt.projectionMatrixInverse.copy(gt.projectionMatrixInverse),dt.isPerspectiveCamera&&(dt.fov=Pr*2*Math.atan(1/dt.projectionMatrix.elements[5]),dt.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(u===null&&g===null))return l},this.setFoveation=function(dt){l=dt,u!==null&&(u.fixedFoveation=dt),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=dt)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(et)},this.getCameraTexture=function(dt){return f[dt]};let Pe=null;function Me(dt,gt){if(h=gt.getViewerPose(c||a),_=gt,h!==null){let Tt=h.views;g!==null&&(t.setRenderTargetFramebuffer(E,g.framebuffer),t.setRenderTarget(E));let ne=!1;Tt.length!==et.cameras.length&&(et.cameras.length=0,ne=!0);for(let st=0;st<Tt.length;st++){let bt=Tt[st],V=null;if(g!==null)V=g.getViewport(bt);else{let Lt=m.getViewSubImage(u,bt);V=Lt.viewport,st===0&&(t.setRenderTargetTextures(E,Lt.colorTexture,Lt.depthStencilTexture),t.setRenderTarget(E))}let wt=j[st];wt===void 0&&(wt=new Dn,wt.layers.enable(st),wt.viewport=new Be,j[st]=wt),wt.matrix.fromArray(bt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(bt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(V.x,V.y,V.width,V.height),st===0&&(et.matrix.copy(wt.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),ne===!0&&et.cameras.push(wt)}let Vt=s.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){m=n.getBinding();let st=m.getDepthInformation(Tt[0]);st&&st.isValid&&st.texture&&p.init(st,s.renderState)}if(Vt&&Vt.includes("camera-access")&&T){t.state.unbindTexture(),m=n.getBinding();for(let st=0;st<Tt.length;st++){let bt=Tt[st].camera;if(bt){let V=f[bt];V||(V=new Fa,f[bt]=V);let wt=m.getCameraImage(bt);V.sourceTexture=wt}}}}for(let Tt=0;Tt<b.length;Tt++){let ne=I[Tt],Vt=b[Tt];ne!==null&&Vt!==void 0&&Vt.update(ne,gt,c||a)}Pe&&Pe(dt,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),_=null}let Ae=new Fp;Ae.setAnimationLoop(Me),this.setAnimationLoop=function(dt){Pe=dt},this.dispose=function(){}}},iS=new Le,Hp=new ye;Hp.set(-1,0,0,0,1,0,0,0,1);function sS(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Lu(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,D,U,E){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),m(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&g(p,f,E)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),T(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,D,U):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Vn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Vn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let D=t.get(f),U=D.envMap,E=D.envMapRotation;U&&(p.envMap.value=U,p.envMapRotation.value.setFromMatrix4(iS.makeRotationFromEuler(E)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Hp),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,D,U){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*D,p.scale.value=U*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function m(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,D){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=D.texture,p.transmissionSamplerSize.value.set(D.width,D.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function T(p,f){let D=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(D.matrixWorld),p.nearDistance.value=D.shadow.camera.near,p.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rS(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){let I=b.program;n.uniformBlockBinding(E,I)}function c(E,b){let I=s[E.id];I===void 0&&(p(E),I=h(E),s[E.id]=I,E.addEventListener("dispose",D));let B=b.program;n.updateUBOMapping(E,B);let S=t.render.frame;r[E.id]!==S&&(u(E),r[E.id]=S)}function h(E){let b=m();E.__bindingPointIndex=b;let I=i.createBuffer(),B=E.__size,S=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,B,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,I),I}function m(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return me("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){let b=s[E.id],I=E.uniforms,B=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let S=0,P=I.length;S<P;S++){let O=I[S];if(Array.isArray(O))for(let G=0,j=O.length;G<j;G++)g(O[G],S,G,B);else g(O,S,0,B)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(E,b,I,B){if(T(E,b,I,B)===!0){let S=E.__offset,P=E.value;if(Array.isArray(P)){let O=0;for(let G=0;G<P.length;G++){let j=P[G],et=f(j);_(j,E.__data,O),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(O+=et.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(P,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,E.__data)}}function _(E,b,I){typeof E=="number"||typeof E=="boolean"?b[0]=E:E.isMatrix3?(b[0]=E.elements[0],b[1]=E.elements[1],b[2]=E.elements[2],b[3]=0,b[4]=E.elements[3],b[5]=E.elements[4],b[6]=E.elements[5],b[7]=0,b[8]=E.elements[6],b[9]=E.elements[7],b[10]=E.elements[8],b[11]=0):ArrayBuffer.isView(E)?b.set(new E.constructor(E.buffer,E.byteOffset,b.length)):E.toArray(b,I)}function T(E,b,I,B){let S=E.value,P=b+"_"+I;if(B[P]===void 0)return typeof S=="number"||typeof S=="boolean"?B[P]=S:ArrayBuffer.isView(S)?B[P]=S.slice():B[P]=S.clone(),!0;{let O=B[P];if(typeof S=="number"||typeof S=="boolean"){if(O!==S)return B[P]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(O.equals(S)===!1)return O.copy(S),!0}}return!1}function p(E){let b=E.uniforms,I=0,B=16;for(let P=0,O=b.length;P<O;P++){let G=Array.isArray(b[P])?b[P]:[b[P]];for(let j=0,et=G.length;j<et;j++){let X=G[j],Z=Array.isArray(X.value)?X.value:[X.value];for(let rt=0,at=Z.length;rt<at;rt++){let Mt=Z[rt],ct=f(Mt),_t=I%B,xt=_t%ct.boundary,Ht=_t+xt;I+=xt,Ht!==0&&B-Ht<ct.storage&&(I+=B-Ht),X.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=I,I+=ct.storage}}}let S=I%B;return S>0&&(I+=B-S),E.__size=I,E.__cache={},this}function f(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(b.boundary=16,b.storage=E.byteLength):de("WebGLRenderer: Unsupported uniform value type.",E),b}function D(E){let b=E.target;b.removeEventListener("dispose",D);let I=a.indexOf(b.__bindingPointIndex);a.splice(I,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function U(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:U}}var aS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vi=null;function oS(){return Vi===null&&(Vi=new Pa(aS,16,16,Es,Ai),Vi.name="DFG_LUT",Vi.minFilter=bn,Vi.magFilter=bn,Vi.wrapS=Di,Vi.wrapT=Di,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}var Xc=class{constructor(t={}){let{canvas:e=sp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:u=!1,outputBufferType:g=Qn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let T=g,p=new Set([lc,oc,ac]),f=new Set([Qn,Ti,Gr,Wr,ic,sc]),D=new Uint32Array(4),U=new Int32Array(4),E=new z,b=null,I=null,B=[],S=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,G=!1,j=null,et=null,X=null,Z=null;this._outputColorSpace=si;let rt=0,at=0,Mt=null,ct=-1,_t=null,xt=new Be,Ht=new Be,Gt=null,Pe=new fe(0),Me=0,Ae=e.width,dt=e.height,gt=1,Tt=null,ne=null,Vt=new Be(0,0,Ae,dt),ce=new Be(0,0,Ae,dt),ue=!1,st=new Ur,bt=!1,V=!1,wt=new Le,Lt=new z,se=new Be,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function re(){return Mt===null?gt:1}let H=n;function Re(M,F){return e.getContext(M,F)}let Wt,R,v,J,it,ot,At,It,ut,pt,Ft,te,Bt,Rt,Jt,le,ve,q,Ut,ft,Ct,Dt,vt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",De,!1),e.addEventListener("webglcontextcreationerror",xn,!1),H===null){let F="webgl2";if(H=Re(F,M),H===null)throw Re(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ee()}catch(M){throw e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),me("WebGLRenderer: "+M.message),M}function ee(){Wt=new pv(H),Wt.init(),Ct=new tS(H,Wt),R=new sv(H,Wt,t,Ct),v=new jy(H,Wt),R.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),et=H.createFramebuffer(),X=H.createFramebuffer(),Z=H.createFramebuffer(),J=new _v(H),it=new By,ot=new Qy(H,Wt,v,it,R,Ct,J),At=new fv(O),It=new v0(H),Dt=new nv(H,It),ut=new mv(H,It,J,Dt),pt=new vv(H,ut,It,Dt,J),q=new xv(H,R,ot),Jt=new rv(it),Ft=new Oy(O,At,Wt,R,Dt,Jt),te=new sS(O,it),Bt=new ky,Rt=new Xy(Wt),ve=new ev(O,At,v,pt,_,l),le=new Ky(O,pt,R),vt=new rS(H,J,R,v),Ut=new iv(H,Wt,J),ft=new gv(H,Wt,J),J.programs=Ft.programs,O.capabilities=R,O.extensions=Wt,O.properties=it,O.renderLists=Bt,O.shadowMap=le,O.state=v,O.info=J}T!==Qn&&(P=new Sv(T,e.width,e.height,o,s,r));let Zt=new Ju(O,H);this.xr=Zt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let M=Wt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Wt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(M){M!==void 0&&(gt=M,this.setSize(Ae,dt,!1))},this.getSize=function(M){return M.set(Ae,dt)},this.setSize=function(M,F,Q=!0){if(Zt.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=M,dt=F,e.width=Math.floor(M*gt),e.height=Math.floor(F*gt),Q===!0&&(e.style.width=M+"px",e.style.height=F+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(Ae*gt,dt*gt).floor()},this.setDrawingBufferSize=function(M,F,Q){Ae=M,dt=F,gt=Q,e.width=Math.floor(M*Q),e.height=Math.floor(F*Q),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(T===Qn){me("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){de("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(xt)},this.getViewport=function(M){return M.copy(Vt)},this.setViewport=function(M,F,Q,Y){M.isVector4?Vt.set(M.x,M.y,M.z,M.w):Vt.set(M,F,Q,Y),v.viewport(xt.copy(Vt).multiplyScalar(gt).round())},this.getScissor=function(M){return M.copy(ce)},this.setScissor=function(M,F,Q,Y){M.isVector4?ce.set(M.x,M.y,M.z,M.w):ce.set(M,F,Q,Y),v.scissor(Ht.copy(ce).multiplyScalar(gt).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(M){v.setScissorTest(ue=M)},this.setOpaqueSort=function(M){Tt=M},this.setTransparentSort=function(M){ne=M},this.getClearColor=function(M){return M.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,Q=!0){let Y=0;if(M){let tt=!1;if(Mt!==null){let kt=Mt.texture.format;tt=p.has(kt)}if(tt){let kt=Mt.texture.type,$t=f.has(kt),zt=ve.getClearColor(),Xt=ve.getClearAlpha(),Kt=zt.r,pe=zt.g,we=zt.b;$t?(D[0]=Kt,D[1]=pe,D[2]=we,D[3]=Xt,H.clearBufferuiv(H.COLOR,0,D)):(U[0]=Kt,U[1]=pe,U[2]=we,U[3]=Xt,H.clearBufferiv(H.COLOR,0,U))}else Y|=H.COLOR_BUFFER_BIT}F&&(Y|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),j=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),ve.dispose(),Bt.dispose(),Rt.dispose(),it.dispose(),At.dispose(),pt.dispose(),Dt.dispose(),vt.dispose(),Ft.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",ta),Zt.removeEventListener("sessionend",or),Ci.stop()};function Fe(M){M.preventDefault(),Ta("WebGLRenderer: Context Lost."),G=!0}function De(){Ta("WebGLRenderer: Context Restored."),G=!1;let M=J.autoReset,F=le.enabled,Q=le.autoUpdate,Y=le.needsUpdate,tt=le.type;ee(),J.autoReset=M,le.enabled=F,le.autoUpdate=Q,le.needsUpdate=Y,le.type=tt}function xn(M){me("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function li(M){let F=M.target;F.removeEventListener("dispose",li),Qr(F)}function Qr(M){Zi(M),it.remove(M)}function Zi(M){let F=it.get(M).programs;F!==void 0&&(F.forEach(function(Q){Ft.releaseProgram(Q)}),M.isShaderMaterial&&Ft.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,Q,Y,tt,kt){F===null&&(F=qt);let $t=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,zt=je(M,F,Q,Y,tt);v.setMaterial(Y,$t);let Xt=Q.index,Kt=1;if(Y.wireframe===!0){if(Xt=ut.getWireframeAttribute(Q),Xt===void 0)return;Kt=2}let pe=Q.drawRange,we=Q.attributes.position,jt=pe.start*Kt,Ne=(pe.start+pe.count)*Kt;kt!==null&&(jt=Math.max(jt,kt.start*Kt),Ne=Math.min(Ne,(kt.start+kt.count)*Kt)),Xt!==null?(jt=Math.max(jt,0),Ne=Math.min(Ne,Xt.count)):we!=null&&(jt=Math.max(jt,0),Ne=Math.min(Ne,we.count));let tn=Ne-jt;if(tn<0||tn===1/0)return;Dt.setup(tt,Y,zt,Q,Xt);let Xe,ze=Ut;if(Xt!==null&&(Xe=It.get(Xt),ze=ft,ze.setIndex(Xe)),tt.isMesh)Y.wireframe===!0?(v.setLineWidth(Y.wireframeLinewidth*re()),ze.setMode(H.LINES)):ze.setMode(H.TRIANGLES);else if(tt.isLine){let cn=Y.linewidth;cn===void 0&&(cn=1),v.setLineWidth(cn*re()),tt.isLineSegments?ze.setMode(H.LINES):tt.isLineLoop?ze.setMode(H.LINE_LOOP):ze.setMode(H.LINE_STRIP)}else tt.isPoints?ze.setMode(H.POINTS):tt.isSprite&&ze.setMode(H.TRIANGLES);if(tt.isBatchedMesh)if(Wt.get("WEBGL_multi_draw"))ze.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let cn=tt._multiDrawStarts,Et=tt._multiDrawCounts,vn=tt._multiDrawCount,Ee=Xt?It.get(Xt).bytesPerElement:1,$n=it.get(Y).currentProgram.getUniforms();for(let Xn=0;Xn<vn;Xn++)$n.setValue(H,"_gl_DrawID",Xn),ze.render(cn[Xn]/Ee,Et[Xn])}else if(tt.isInstancedMesh)ze.renderInstances(jt,tn,tt.count);else if(Q.isInstancedBufferGeometry){let cn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Et=Math.min(Q.instanceCount,cn);ze.renderInstances(jt,tn,Et)}else ze.render(jt,tn)};function Rs(M,F,Q,Y){j!==null&&M.isNodeMaterial&&j.setObject(Y,M),bt===!0&&Jt.setState(M,Q,!1),M.transparent===!0&&M.side===zi&&M.forceSinglePass===!1?(M.side=Vn,M.needsUpdate=!0,Ps(M,F,Y),M.side=Ss,M.needsUpdate=!0,Ps(M,F,Y),M.side=zi):Ps(M,F,Y)}this.compile=function(M,F,Q=null){Q===null&&(Q=M),j!==null&&j.renderStart(M,F,Q),I=Rt.get(Q),I.init(F),S.push(I),Q.traverseVisible(function(tt){tt.isLight&&tt.layers.test(F.layers)&&(I.pushLight(tt),tt.castShadow&&I.pushShadow(tt))}),M!==Q&&M.traverseVisible(function(tt){tt.isLight&&tt.layers.test(F.layers)&&(I.pushLight(tt),tt.castShadow&&I.pushShadow(tt))}),I.setupLights(),j!==null&&j.updateLights(I.state.lightsArray),V=this.localClippingEnabled,bt=Jt.init(this.clippingPlanes,V),bt===!0&&Jt.setGlobalState(this.clippingPlanes,F),j!==null&&le.render(I.state.shadowsArray,Q,F);let Y=new Set;return M.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let kt=tt.material;if(kt)if(Array.isArray(kt))for(let $t=0;$t<kt.length;$t++){let zt=kt[$t];Rs(zt,Q,F,tt),Y.add(zt)}else Rs(kt,Q,F,tt),Y.add(kt)}),I=S.pop(),j!==null&&j.renderEnd(),Y},this.compileAsync=function(M,F,Q=null){let Y=this.compile(M,F,Q);return new Promise(tt=>{function kt(){if(Y.forEach(function($t){let Xt=it.get($t).currentProgram;(Xt===void 0||Xt.isReady())&&Y.delete($t)}),Y.size===0){tt(M);return}setTimeout(kt,10)}Wt.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let ar=null;function Mo(M){ar&&ar(M)}function ta(){Ci.stop()}function or(){Ci.start()}let Ci=new Fp;Ci.setAnimationLoop(Mo),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(M){ar=M,Zt.setAnimationLoop(M),M===null?Ci.stop():Ci.start()},Zt.addEventListener("sessionstart",ta),Zt.addEventListener("sessionend",or),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){me("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;j!==null&&j.renderStart(M,F);let Q=Zt.enabled===!0&&Zt.isPresenting===!0,Y=P!==null&&(Mt===null||Q)&&P.begin(O,Mt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(F),F=Zt.getCamera()),M.isScene===!0&&M.onBeforeRender(O,M,F,Mt),I=Rt.get(M,S.length),I.init(F),I.state.textureUnits=ot.getTextureUnits(),S.push(I),wt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),st.setFromProjectionMatrix(wt,Mi,F.reversedDepth),V=this.localClippingEnabled,bt=Jt.init(this.clippingPlanes,V),b=Bt.get(M,B.length),b.init(),B.push(b),Zt.enabled===!0&&Zt.isPresenting===!0){let $t=O.xr.getDepthSensingMesh();$t!==null&&lr($t,F,-1/0,O.sortObjects)}lr(M,F,0,O.sortObjects),b.finish(),j!==null&&j.updateLights(I.state.lightsArray),O.sortObjects===!0&&b.sort(Tt,ne),oe=Zt.enabled===!1||Zt.isPresenting===!1||Zt.hasDepthSensing()===!1,oe&&ve.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),bt===!0&&Jt.beginShadows();let tt=I.state.shadowsArray;if(le.render(tt,M,F),bt===!0&&Jt.endShadows(),(Y&&P.hasRenderPass())===!1){let $t=b.opaque,zt=b.transmissive;if(I.setupLights(),F.isArrayCamera){let Xt=F.cameras;if(zt.length>0)for(let Kt=0,pe=Xt.length;Kt<pe;Kt++){let we=Xt[Kt];ea($t,zt,M,we)}oe&&ve.render(M);for(let Kt=0,pe=Xt.length;Kt<pe;Kt++){let we=Xt[Kt];Is(b,M,we,we.viewport)}}else zt.length>0&&ea($t,zt,M,F),oe&&ve.render(M),Is(b,M,F)}Mt!==null&&at===0&&(ot.updateMultisampleRenderTarget(Mt),ot.updateRenderTargetMipmap(Mt)),Y&&P.end(O),M.isScene===!0&&M.onAfterRender(O,M,F),Dt.resetDefaultState(),ct=-1,_t=null,S.pop(),S.length>0?(I=S[S.length-1],ot.setTextureUnits(I.state.textureUnits),bt===!0&&Jt.setGlobalState(O.clippingPlanes,I.state.camera)):I=null,B.pop(),B.length>0?b=B[B.length-1]:b=null,j!==null&&j.renderEnd()};function lr(M,F,Q,Y){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)Q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)I.pushLightProbeGrid(M);else if(M.isLight)I.pushLight(M),M.castShadow&&I.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(st)){Y&&se.setFromMatrixPosition(M.matrixWorld).applyMatrix4(wt);let $t=pt.update(M),zt=M.material;zt.visible&&b.push(M,$t,zt,Q,se.z,null,F)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(st))){let $t=pt.update(M),zt=M.material;if(Y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),se.copy(M.boundingSphere.center)):($t.boundingSphere===null&&$t.computeBoundingSphere(),se.copy($t.boundingSphere.center)),se.applyMatrix4(M.matrixWorld).applyMatrix4(wt)),Array.isArray(zt)){let Xt=$t.groups;for(let Kt=0,pe=Xt.length;Kt<pe;Kt++){let we=Xt[Kt],jt=zt[we.materialIndex];jt&&jt.visible&&b.push(M,$t,jt,Q,se.z,we,F)}}else zt.visible&&b.push(M,$t,zt,Q,se.z,null,F)}}let kt=M.children;for(let $t=0,zt=kt.length;$t<zt;$t++)lr(kt[$t],F,Q,Y)}function Is(M,F,Q,Y){let{opaque:tt,transmissive:kt,transparent:$t}=M;I.setupLightsView(Q),bt===!0&&Jt.setGlobalState(O.clippingPlanes,Q),Y&&v.viewport(xt.copy(Y)),tt.length>0&&cr(tt,F,Q),kt.length>0&&cr(kt,F,Q),$t.length>0&&cr($t,F,Q),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function ea(M,F,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[Y.id]===void 0){let jt=Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[Y.id]=new Kn(1,1,{generateMipmaps:!0,type:jt?Ai:Qn,minFilter:bs,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}let kt=I.state.transmissionRenderTarget[Y.id],$t=Y.viewport||xt;kt.setSize($t.z*O.transmissionResolutionScale,$t.w*O.transmissionResolutionScale);let zt=O.getRenderTarget(),Xt=O.getActiveCubeFace(),Kt=O.getActiveMipmapLevel();O.setRenderTarget(kt),O.getClearColor(Pe),Me=O.getClearAlpha(),Me<1&&O.setClearColor(16777215,.5),O.clear(),oe&&ve.render(Q);let pe=O.toneMapping;O.toneMapping=Ei;let we=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),I.setupLightsView(Y),bt===!0&&Jt.setGlobalState(O.clippingPlanes,Y),cr(M,Q,Y),ot.updateMultisampleRenderTarget(kt),ot.updateRenderTargetMipmap(kt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Ne=0,tn=F.length;Ne<tn;Ne++){let Xe=F[Ne],{object:ze,geometry:cn,material:Et,group:vn}=Xe;if(Et.side===zi&&ze.layers.test(Y.layers)){let Ee=Et.side;Et.side=Vn,Et.needsUpdate=!0,bo(ze,Q,Y,cn,Et,vn),Et.side=Ee,Et.needsUpdate=!0,jt=!0}}jt===!0&&(ot.updateMultisampleRenderTarget(kt),ot.updateRenderTargetMipmap(kt))}O.setRenderTarget(zt,Xt,Kt),O.setClearColor(Pe,Me),we!==void 0&&(Y.viewport=we),O.toneMapping=pe}function cr(M,F,Q){let Y=F.isScene===!0?F.overrideMaterial:null;for(let tt=0,kt=M.length;tt<kt;tt++){let $t=M[tt],{object:zt,geometry:Xt,group:Kt}=$t,pe=$t.material;pe.allowOverride===!0&&Y!==null&&(pe=Y),zt.layers.test(Q.layers)&&bo(zt,F,Q,Xt,pe,Kt)}}function bo(M,F,Q,Y,tt,kt){j!==null&&tt.isNodeMaterial&&j.setObject(M,tt),M.onBeforeRender(O,F,Q,Y,tt,kt),M.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),tt.onBeforeRender(O,F,Q,Y,M,kt),tt.transparent===!0&&tt.side===zi&&tt.forceSinglePass===!1?(tt.side=Vn,tt.needsUpdate=!0,O.renderBufferDirect(Q,F,Y,tt,M,kt),tt.side=Ss,tt.needsUpdate=!0,O.renderBufferDirect(Q,F,Y,tt,M,kt),tt.side=zi):O.renderBufferDirect(Q,F,Y,tt,M,kt),M.onAfterRender(O,F,Q,Y,tt,kt)}function Ps(M,F,Q){F.isScene!==!0&&(F=qt);let Y=it.get(M),tt=I.state.lights,kt=I.state.shadowsArray,$t=tt.state.version,zt=Ft.getParameters(M,tt.state,kt,F,Q,I.state.lightProbeGridArray),Xt=Ft.getProgramCacheKey(zt),Kt=Y.programs;Y.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,Y.fog=F.fog;let pe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;Y.envMap=At.get(M.envMap||Y.environment,pe),Y.envMapRotation=Y.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Kt===void 0&&(M.addEventListener("dispose",li),Kt=new Map,Y.programs=Kt);let we=Kt.get(Xt);if(we!==void 0){if(Y.currentProgram===we&&Y.lightsStateVersion===$t)return Wn(M,zt),we}else zt.uniforms=Ft.getUniforms(M),j!==null&&M.isNodeMaterial&&j.build(M,Q,zt),M.onBeforeCompile(zt,O),we=Ft.acquireProgram(zt,Xt),Kt.set(Xt,we),Y.uniforms=zt.uniforms;let jt=Y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(jt.clippingPlanes=Jt.uniform),Wn(M,zt),Y.needsLights=Cn(M),Y.lightsStateVersion=$t,Y.needsLights&&(jt.ambientLightColor.value=tt.state.ambient,jt.lightProbe.value=tt.state.probe,jt.sunLights.value=tt.state.sun,jt.sunLightShadows.value=tt.state.sunShadow,jt.directionalLights.value=tt.state.directional,jt.directionalLightShadows.value=tt.state.directionalShadow,jt.spotLights.value=tt.state.spot,jt.spotLightShadows.value=tt.state.spotShadow,jt.rectAreaLights.value=tt.state.rectArea,jt.ltc_1.value=tt.state.rectAreaLTC1,jt.ltc_2.value=tt.state.rectAreaLTC2,jt.pointLights.value=tt.state.point,jt.pointLightShadows.value=tt.state.pointShadow,jt.hemisphereLights.value=tt.state.hemi,jt.sunShadowMatrix.value=tt.state.sunShadowMatrix,jt.sunShadowCascade.value=tt.state.sunShadowCascade,jt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,jt.spotLightMatrix.value=tt.state.spotLightMatrix,jt.spotLightMap.value=tt.state.spotLightMap,jt.pointShadowMatrix.value=tt.state.pointShadowMatrix),Y.lightProbeGrid=I.state.lightProbeGridArray.length>0,Y.currentProgram=we,Y.uniformsList=null,we}function wo(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=qr.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Wn(M,F){let Q=it.get(M);Q.outputColorSpace=F.outputColorSpace,Q.batching=F.batching,Q.batchingColor=F.batchingColor,Q.instancing=F.instancing,Q.instancingColor=F.instancingColor,Q.instancingMorph=F.instancingMorph,Q.skinning=F.skinning,Q.morphTargets=F.morphTargets,Q.morphNormals=F.morphNormals,Q.morphColors=F.morphColors,Q.morphTargetsCount=F.morphTargetsCount,Q.numClippingPlanes=F.numClippingPlanes,Q.numIntersection=F.numClipIntersection,Q.vertexAlphas=F.vertexAlphas,Q.vertexTangents=F.vertexTangents,Q.toneMapping=F.toneMapping}function rn(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;E.setFromMatrixPosition(F.matrixWorld);for(let Q=0,Y=M.length;Q<Y;Q++){let tt=M[Q];if(tt.texture!==null&&tt.boundingBox.containsPoint(E))return tt}return null}function je(M,F,Q,Y,tt){F.isScene!==!0&&(F=qt),ot.resetTextureUnits();let kt=F.fog,$t=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?F.environment:null,zt=Mt===null?O.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Ce.workingColorSpace,Xt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Kt=At.get(Y.envMap||$t,Xt),pe=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,we=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),jt=!!Q.morphAttributes.position,Ne=!!Q.morphAttributes.normal,tn=!!Q.morphAttributes.color,Xe=Ei;Y.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Xe=O.toneMapping);let ze=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,cn=ze!==void 0?ze.length:0,Et=it.get(Y),vn=I.state.lights;if(bt===!0&&(V===!0||M!==_t)){let Ge=M===_t&&Y.id===ct;Jt.setState(Y,M,Ge)}let Ee=!1;Y.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==vn.state.version||Et.outputColorSpace!==zt||tt.isBatchedMesh&&Et.batching===!1||!tt.isBatchedMesh&&Et.batching===!0||tt.isBatchedMesh&&Et.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&Et.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&Et.instancing===!1||!tt.isInstancedMesh&&Et.instancing===!0||tt.isSkinnedMesh&&Et.skinning===!1||!tt.isSkinnedMesh&&Et.skinning===!0||tt.isInstancedMesh&&Et.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Et.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Et.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Et.instancingMorph===!1&&tt.morphTexture!==null||Et.envMap!==Kt||Y.fog===!0&&Et.fog!==kt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Jt.numPlanes||Et.numIntersection!==Jt.numIntersection)||Et.vertexAlphas!==pe||Et.vertexTangents!==we||Et.morphTargets!==jt||Et.morphNormals!==Ne||Et.morphColors!==tn||Et.toneMapping!==Xe||Et.morphTargetsCount!==cn||!!Et.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Ee=!0):(Ee=!0,Et.__version=Y.version);let $n=Et.currentProgram;Ee===!0&&($n=Ps(Y,F,tt),j&&Y.isNodeMaterial&&j.onUpdateProgram(Y,$n,Et));let Xn=!1,yn=!1,Fn=!1,Ue=$n.getUniforms(),ke=Et.uniforms;if(v.useProgram($n.program)&&(Xn=!0,yn=!0,Fn=!0),Y.id!==ct&&(ct=Y.id,yn=!0),Et.needsLights){let Ge=rn(I.state.lightProbeGridArray,tt);Et.lightProbeGrid!==Ge&&(Et.lightProbeGrid=Ge,yn=!0)}if(Xn||_t!==M){v.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ue.setValue(H,"projectionMatrix",M.projectionMatrix),Ue.setValue(H,"viewMatrix",M.matrixWorldInverse);let Ii=Ue.map.cameraPosition;Ii!==void 0&&Ii.setValue(H,Lt.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&Ue.setValue(H,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ue.setValue(H,"isOrthographic",M.isOrthographicCamera===!0),_t!==M&&(_t=M,yn=!0,Fn=!0)}if(Et.needsLights&&(vn.state.sunShadowMap.length>0&&Ue.setValue(H,"sunShadowMap",vn.state.sunShadowMap,ot),vn.state.directionalShadowMap.length>0&&Ue.setValue(H,"directionalShadowMap",vn.state.directionalShadowMap,ot),vn.state.spotShadowMap.length>0&&Ue.setValue(H,"spotShadowMap",vn.state.spotShadowMap,ot),vn.state.pointShadowMap.length>0&&Ue.setValue(H,"pointShadowMap",vn.state.pointShadowMap,ot)),tt.isSkinnedMesh){Ue.setOptional(H,tt,"bindMatrix"),Ue.setOptional(H,tt,"bindMatrixInverse");let Ge=tt.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),Ue.setValue(H,"boneTexture",Ge.boneTexture,ot))}tt.isBatchedMesh&&(Ue.setOptional(H,tt,"batchingTexture"),Ue.setValue(H,"batchingTexture",tt._matricesTexture,ot),Ue.setOptional(H,tt,"batchingIdTexture"),Ue.setValue(H,"batchingIdTexture",tt._indirectTexture,ot),Ue.setOptional(H,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Ue.setValue(H,"batchingColorTexture",tt._colorsTexture,ot));let qn=Q.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&q.update(tt,Q,$n),(yn||Et.receiveShadow!==tt.receiveShadow)&&(Et.receiveShadow=tt.receiveShadow,Ue.setValue(H,"receiveShadow",tt.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&F.environment!==null&&(ke.envMapIntensity.value=F.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=oS()),yn){if(Ue.setValue(H,"toneMappingExposure",O.toneMappingExposure),Et.needsLights&&Ri(ke,Fn),kt&&Y.fog===!0&&te.refreshFogUniforms(ke,kt),te.refreshMaterialUniforms(ke,Y,gt,dt,I.state.transmissionRenderTarget[M.id]),Et.needsLights&&Et.lightProbeGrid){let Ge=Et.lightProbeGrid;ke.probesSH.value=Ge.texture,ke.probesMin.value.copy(Ge.boundingBox.min),ke.probesMax.value.copy(Ge.boundingBox.max),ke.probesResolution.value.copy(Ge.resolution)}qr.upload(H,wo(Et),ke,ot)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(qr.upload(H,wo(Et),ke,ot),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ue.setValue(H,"center",tt.center),Ue.setValue(H,"modelViewMatrix",tt.modelViewMatrix),Ue.setValue(H,"normalMatrix",tt.normalMatrix),Ue.setValue(H,"modelMatrix",tt.matrixWorld),Y.uniformsGroups!==void 0){let Ge=Y.uniformsGroups;for(let Ii=0,ls=Ge.length;Ii<ls;Ii++){let Eo=Ge[Ii];vt.update(Eo,$n),vt.bind(Eo,$n)}}return $n}function Ri(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.sunLights.needsUpdate=F,M.sunLightShadows.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Cn(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return rt},this.getActiveMipmapLevel=function(){return at},this.getRenderTarget=function(){return Mt},this.setRenderTargetTextures=function(M,F,Q){let Y=it.get(M);Y.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),it.get(M.texture).__webglTexture=F,it.get(M.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let Q=it.get(M);Q.__webglFramebuffer=F,Q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,Q=0){Mt=M,rt=F,at=Q;let Y=null,tt=!1,kt=!1;if(M){let zt=it.get(M);if(zt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(H.FRAMEBUFFER,zt.__webglFramebuffer),xt.copy(M.viewport),Ht.copy(M.scissor),Gt=M.scissorTest,v.viewport(xt),v.scissor(Ht),v.setScissorTest(Gt),ct=-1;return}else if(zt.__webglFramebuffer===void 0)ot.setupRenderTarget(M);else if(zt.__hasExternalTextures)ot.rebindTextures(M,it.get(M.texture).__webglTexture,it.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let pe=M.depthTexture;if(zt.__boundDepthTexture!==pe){if(pe!==null&&it.has(pe)&&(M.width!==pe.image.width||M.height!==pe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(M)}}let Xt=M.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(kt=!0);let Kt=it.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Kt[F])?Y=Kt[F][Q]:Y=Kt[F],tt=!0):M.samples>0&&ot.useMultisampledRTT(M)===!1?Y=it.get(M).__webglMultisampledFramebuffer:Array.isArray(Kt)?Y=Kt[Q]:Y=Kt,xt.copy(M.viewport),Ht.copy(M.scissor),Gt=M.scissorTest}else xt.copy(Vt).multiplyScalar(gt).floor(),Ht.copy(ce).multiplyScalar(gt).floor(),Gt=ue;if(Q!==0&&(Y=et),v.bindFramebuffer(H.FRAMEBUFFER,Y)&&v.drawBuffers(M,Y),v.viewport(xt),v.scissor(Ht),v.setScissorTest(Gt),tt){let zt=it.get(M.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+F,zt.__webglTexture,Q)}else if(kt){let zt=F;for(let Xt=0;Xt<M.textures.length;Xt++){let Kt=it.get(M.textures[Xt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Xt,Kt.__webglTexture,Q,zt)}}else if(M!==null&&Q!==0){let zt=it.get(M.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,zt.__webglTexture,Q)}ct=-1};function ci(M){let F=it.get(M);return(F.__readFormat!==M.format||F.__readType!==M.type)&&(F.__readFormat=M.format,F.__readType=M.type,F.__formatReadable=R.textureFormatReadable(M.format),F.__typeReadable=R.textureTypeReadable(M.type)),F}this.readRenderTargetPixels=function(M,F,Q,Y,tt,kt,$t,zt=0){if(!(M&&M.isWebGLRenderTarget)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=it.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&$t!==void 0&&(Xt=Xt[$t]),Xt){v.bindFramebuffer(H.FRAMEBUFFER,Xt);try{let Kt=M.textures[zt],pe=Kt.format,we=Kt.type;M.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+zt);let jt=ci(Kt);if(jt.__formatReadable===!1){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(jt.__typeReadable===!1){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-Y&&Q>=0&&Q<=M.height-tt&&H.readPixels(F,Q,Y,tt,Ct.convert(pe),Ct.convert(we),kt)}finally{let Kt=Mt!==null?it.get(Mt).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(M,F,Q,Y,tt,kt,$t,zt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=it.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&$t!==void 0&&(Xt=Xt[$t]),Xt)if(F>=0&&F<=M.width-Y&&Q>=0&&Q<=M.height-tt){v.bindFramebuffer(H.FRAMEBUFFER,Xt);let Kt=M.textures[zt],pe=Kt.format,we=Kt.type;M.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+zt);let jt=ci(Kt);if(jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ne=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ne),H.bufferData(H.PIXEL_PACK_BUFFER,kt.byteLength,H.STREAM_READ),H.readPixels(F,Q,Y,tt,Ct.convert(pe),Ct.convert(we),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let tn=Mt!==null?it.get(Mt).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,tn);let Xe=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await ap(H,Xe,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ne),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,kt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Ne),H.deleteSync(Xe),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,Q=0){let Y=Math.pow(2,-Q),tt=Math.floor(M.image.width*Y),kt=Math.floor(M.image.height*Y),$t=F!==null?F.x:0,zt=F!==null?F.y:0;ot.setTexture2D(M,0),H.copyTexSubImage2D(H.TEXTURE_2D,Q,0,0,$t,zt,tt,kt),v.unbindTexture()},this.copyTextureToTexture=function(M,F,Q=null,Y=null,tt=0,kt=0){let $t,zt,Xt,Kt,pe,we,jt,Ne,tn,Xe=M.isCompressedTexture?M.mipmaps[kt]:M.image;if(Q!==null)$t=Q.max.x-Q.min.x,zt=Q.max.y-Q.min.y,Xt=Q.isBox3?Q.max.z-Q.min.z:1,Kt=Q.min.x,pe=Q.min.y,we=Q.isBox3?Q.min.z:0;else{let ke=Math.pow(2,-tt);$t=Math.floor(Xe.width*ke),zt=Math.floor(Xe.height*ke),M.isDataArrayTexture?Xt=Xe.depth:M.isData3DTexture?Xt=Math.floor(Xe.depth*ke):Xt=1,Kt=0,pe=0,we=0}Y!==null?(jt=Y.x,Ne=Y.y,tn=Y.z):(jt=0,Ne=0,tn=0);let ze=Ct.convert(F.format),cn=Ct.convert(F.type),Et;F.isData3DTexture?(ot.setTexture3D(F,0),Et=H.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ot.setTexture2DArray(F,0),Et=H.TEXTURE_2D_ARRAY):(ot.setTexture2D(F,0),Et=H.TEXTURE_2D),v.activeTexture(H.TEXTURE0),v.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(H.UNPACK_ALIGNMENT,F.unpackAlignment);let vn=v.getParameter(H.UNPACK_ROW_LENGTH),Ee=v.getParameter(H.UNPACK_IMAGE_HEIGHT),$n=v.getParameter(H.UNPACK_SKIP_PIXELS),Xn=v.getParameter(H.UNPACK_SKIP_ROWS),yn=v.getParameter(H.UNPACK_SKIP_IMAGES);v.pixelStorei(H.UNPACK_ROW_LENGTH,Xe.width),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Xe.height),v.pixelStorei(H.UNPACK_SKIP_PIXELS,Kt),v.pixelStorei(H.UNPACK_SKIP_ROWS,pe),v.pixelStorei(H.UNPACK_SKIP_IMAGES,we);let Fn=M.isDataArrayTexture||M.isData3DTexture,Ue=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let ke=it.get(M),qn=it.get(F),Ge=it.get(ke.__renderTarget),Ii=it.get(qn.__renderTarget);v.bindFramebuffer(H.READ_FRAMEBUFFER,Ge.__webglFramebuffer),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let ls=0;ls<Xt;ls++)Fn&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,it.get(M).__webglTexture,tt,we+ls),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,it.get(F).__webglTexture,kt,tn+ls)),H.blitFramebuffer(Kt,pe,$t,zt,jt,Ne,$t,zt,H.DEPTH_BUFFER_BIT,H.NEAREST);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(tt!==0||M.isRenderTargetTexture||it.has(M)){let ke=it.get(M),qn=it.get(F);v.bindFramebuffer(H.READ_FRAMEBUFFER,X),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,Z);for(let Ge=0;Ge<Xt;Ge++)Fn?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ke.__webglTexture,tt,we+Ge):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ke.__webglTexture,tt),Ue?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qn.__webglTexture,kt,tn+Ge):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,qn.__webglTexture,kt),tt!==0?H.blitFramebuffer(Kt,pe,$t,zt,jt,Ne,$t,zt,H.COLOR_BUFFER_BIT,H.NEAREST):Ue?H.copyTexSubImage3D(Et,kt,jt,Ne,tn+Ge,Kt,pe,$t,zt):H.copyTexSubImage2D(Et,kt,jt,Ne,Kt,pe,$t,zt);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ue?M.isDataTexture||M.isData3DTexture?H.texSubImage3D(Et,kt,jt,Ne,tn,$t,zt,Xt,ze,cn,Xe.data):F.isCompressedArrayTexture?H.compressedTexSubImage3D(Et,kt,jt,Ne,tn,$t,zt,Xt,ze,Xe.data):H.texSubImage3D(Et,kt,jt,Ne,tn,$t,zt,Xt,ze,cn,Xe):M.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,kt,jt,Ne,$t,zt,ze,cn,Xe.data):M.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,kt,jt,Ne,Xe.width,Xe.height,ze,Xe.data):H.texSubImage2D(H.TEXTURE_2D,kt,jt,Ne,$t,zt,ze,cn,Xe);v.pixelStorei(H.UNPACK_ROW_LENGTH,vn),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ee),v.pixelStorei(H.UNPACK_SKIP_PIXELS,$n),v.pixelStorei(H.UNPACK_SKIP_ROWS,Xn),v.pixelStorei(H.UNPACK_SKIP_IMAGES,yn),kt===0&&F.generateMipmaps&&H.generateMipmap(Et),v.unbindTexture()},this.initRenderTarget=function(M){it.get(M).__webglFramebuffer===void 0&&ot.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ot.setTextureCube(M,0):M.isData3DTexture?ot.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ot.setTexture2DArray(M,0):ot.setTexture2D(M,0),v.unbindTexture()},this.resetState=function(){rt=0,at=0,Mt=null,v.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ce._getUnpackColorSpace()}};var Wp=new kn,Zc=new z,rs=class extends to{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new en(t,3)),this.setAttribute("uv",new en(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new ys(e,6,1);return this.setAttribute("instanceStart",new wi(n,3,0)),this.setAttribute("instanceEnd",new wi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new ys(e,6,1);return this.setAttribute("instanceColorStart",new wi(n,3,0)),this.setAttribute("instanceColorEnd",new wi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new qa(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Wp.setFromBufferAttribute(e),this.boundingBox.union(Wp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Zc.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Zc)),Zc.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ot.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Nt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Hn.line={uniforms:uo.merge([Ot.common,Ot.fog,Ot.line]),vertexShader:`
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
		`};var Hi=class extends _n{constructor(t){super({type:"LineMaterial",uniforms:uo.clone(Hn.line.uniforms),vertexShader:Hn.line.vertexShader,fragmentShader:Hn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Ku=new Be,$p=new z,Xp=new z,wn=new Be,En=new Be,Gi=new Be,ju=new z,Qu=new Le,Tn=new eo,qp=new z,Jc=new kn,Kc=new jn,Wi=new Be,$i,Qs;function Yp(i,t,e){return Wi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Wi.multiplyScalar(1/Wi.w),Wi.x=Qs/e.width,Wi.y=Qs/e.height,Wi.applyMatrix4(i.projectionMatrixInverse),Wi.multiplyScalar(1/Wi.w),Math.abs(Math.max(Wi.x,Wi.y))}function lS(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Tn.start.fromBufferAttribute(s,o),Tn.end.fromBufferAttribute(r,o),Tn.applyMatrix4(e);let c=new z,h=new z;$i.distanceSqToSegment(Tn.start,Tn.end,h,c),h.distanceTo(c)<Qs*.5&&t.push({point:h,pointOnLine:c,distance:$i.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function cS(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),m=-t.near;$i.at(1,Gi),Gi.w=1,Gi.applyMatrix4(t.matrixWorldInverse),Gi.applyMatrix4(n),Gi.multiplyScalar(1/Gi.w),Gi.x*=r.x/2,Gi.y*=r.y/2,Gi.z=0,ju.copy(Gi),Qu.multiplyMatrices(t.matrixWorldInverse,a);for(let u=0,g=h;u<g;u++){if(wn.fromBufferAttribute(l,u),En.fromBufferAttribute(c,u),wn.w=1,En.w=1,wn.applyMatrix4(Qu),En.applyMatrix4(Qu),wn.z>m&&En.z>m)continue;if(wn.z>m){let U=wn.z-En.z,E=(wn.z-m)/U;wn.lerp(En,E)}else if(En.z>m){let U=En.z-wn.z,E=(En.z-m)/U;En.lerp(wn,E)}wn.applyMatrix4(n),En.applyMatrix4(n),wn.multiplyScalar(1/wn.w),En.multiplyScalar(1/En.w),wn.x*=r.x/2,wn.y*=r.y/2,En.x*=r.x/2,En.y*=r.y/2,Tn.start.copy(wn),Tn.start.z=0,Tn.end.copy(En),Tn.end.z=0;let T=Tn.closestPointToPointParameter(ju,!0);Tn.at(T,qp);let p=Iu.lerp(wn.z,En.z,T),f=p>=-1&&p<=1,D=ju.distanceTo(qp)<Qs*.5;if(f&&D){Tn.start.fromBufferAttribute(l,u),Tn.end.fromBufferAttribute(c,u),Tn.start.applyMatrix4(a),Tn.end.applyMatrix4(a);let U=new z,E=new z;$i.distanceSqToSegment(Tn.start,Tn.end,E,U),e.push({point:E,pointOnLine:U,distance:$i.origin.distanceTo(E),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}}var tr=class extends gn{constructor(t=new rs,e=new Hi({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)$p.fromBufferAttribute(e,a),Xp.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+$p.distanceTo(Xp);let r=new ys(s,2,1);return t.setAttribute("instanceDistanceStart",new wi(r,1,0)),t.setAttribute("instanceDistanceEnd",new wi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;$i=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;Qs=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Kc.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=Qs*.5;else{let m=Math.max(s.near,Kc.distanceToPoint($i.origin));c=Yp(s,m,l.resolution)}if(Kc.radius+=c,$i.intersectsSphere(Kc)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Jc.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=Qs*.5;else{let m=Math.max(s.near,Jc.distanceToPoint($i.origin));h=Yp(s,m,l.resolution)}Jc.expandByScalar(h),$i.intersectsBox(Jc)!==!1&&(n?lS(this,e):cS(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Ku),this.material.uniforms.resolution.value.set(Ku.z,Ku.w))}};function Zp(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:l,CY:c,mcs:h,q:m,list:u,clamp:g,norm:_,munis:T}=i,p=d=>document.querySelector(d),f=d=>String(d).replace(/[<>&"]/g,x=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[x]),D=(d,x)=>[(d-l)*o,(x-c)*o],U=.06,E=t.segs.map(d=>{let x=[],w=[0];for(let A=0;A<d.length;A+=2){let C=D(d[A],d[A+1]);x.length&&w.push(w[w.length-1]+Math.hypot(C[0]-x[x.length-1][0],C[1]-x[x.length-1][1])),x.push(C)}return{p:x,c:w,L:w[w.length-1]}}),b=t.stops.map(([d,x,w,A])=>({n:d,id:A,w:D(x,w),fams:new Set})),I=t.routes.map(([d,x,w])=>({s:d,l:x,c:w})),B=new Map;(t.bus||[]).forEach(([d,x,w,A])=>{let C={days:new Set(d),name:x,stops:w,times:A};w.forEach((L,W)=>{if(W<w.length-1){let k=B.get(L)||[];k.push([C,W]),B.set(L,k)}})});function S(d,x,w){let A=ue(),C=t.days.indexOf(A.ymd),L=[];for(let[W,k]of B.get(d)||[]){if(!W.days.has(C))continue;let $=W.times[k];if($<x||$>w)continue;let K=W.stops[W.stops.length-1];L.push({sm:$,est:$,dl:0,fam:W.name,dest:b[K].n,destId:b[K].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:W.stops.slice(k)})}return L}let P=(d,x)=>{let w=d.match(/^R([A-Z]*)(\d*)(.*)$/),A=x.match(/^R([A-Z]*)(\d*)(.*)$/);return(w[1]||"").localeCompare(A[1]||"")||(+w[2]||0)-(+A[2]||0)||w[3].localeCompare(A[3])},O=[...new Set(I.map(d=>d.s))].sort(P),G={};I.forEach(d=>{G[d.s]||(G[d.s]=d.c)});let j=t.pats.map(([d,x,w])=>({stops:d,t:x,segs:w})),et=t.trips.map(([d,x,w,A,C],L)=>({day:d,pat:j[x],fam:I[w].s,c:I[w].c,t0:A,num:C,tid:t.tids[L]})),X={};O.forEach(d=>X[d]=new Set),et.forEach(d=>{d.pat.segs.forEach(x=>X[d.fam].add(x)),d.pat.stops.forEach(x=>b[x].fams.add(d.fam))});let Z=t.days.map((d,x)=>et.filter(w=>w.day===x)),rt=new Map(et.map(d=>[d.tid,d])),at=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],Mt=Math.PI/180,ct=3.922*Mt,_t=-39.705*Mt;function xt(d,x){let w=d*Mt+ct,A=x*Mt,C=Math.cos(_t),L=Math.sin(_t),W=Math.cos(A),k=Math.cos(w)*W,$=Math.sin(w)*W,K=Math.sin(A),lt=Math.atan2($,k*C-K*L),y=Math.asin(K*C+k*L),N=Math.sqrt(2/(1+Math.cos(lt)*Math.cos(y))),nt=N*Math.cos(y)*Math.sin(lt),ht=N*Math.sin(y),[Pt,Yt,ae,mt,St,he,_e]=at;return D((Yt+Pt*nt-St)*_e,(he-(mt-ae*ht))*_e)}let Ht=new Map(b.map((d,x)=>[d.id,x]));function Gt(d){if(d.g)return d.g;let x=[],w=[],A=[0],C=0;return d.segs.forEach((L,W)=>{let k=E[L];k.p.forEach(($,K)=>{W&&!K||(x.push($),w.push(C+k.c[K]))}),C+=k.L,A.push(C)}),d.g={pts:x,cum:w,stopD:A}}function Pe(d,x,w,A){let C=1e18,L=0;for(let W=0;W+1<d.pts.length;W++){if(d.cum[W+1]<w||d.cum[W]>A)continue;let k=d.pts[W],$=d.pts[W+1],K=$[0]-k[0],lt=$[1]-k[1],y=K*K+lt*lt||1e-9,N=Math.max(0,Math.min(1,((x[0]-k[0])*K+(x[1]-k[1])*lt)/y)),nt=k[0]+K*N-x[0],ht=k[1]+lt*N-x[1],Pt=nt*nt+ht*ht;Pt<C&&(C=Pt,L=d.cum[W]+N*(d.cum[W+1]-d.cum[W]))}return{d:L,err:Math.sqrt(C)}}function Me(d,x){let w=0,A=d.cum.length-1;if(x<=0)return d.pts[0];if(x>=d.cum[A])return d.pts[A];for(;A-w>1;){let k=w+A>>1;d.cum[k]<=x?w=k:A=k}let C=(x-d.cum[w])/(d.cum[A]-d.cum[w]||1),L=d.pts[w],W=d.pts[A];return[L[0]+(W[0]-L[0])*C,L[1]+(W[1]-L[1])*C]}let Ae=d=>`${d.slice(6,8)}/${d.slice(4,6)}`,dt=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function gt(d){let x={};return dt.formatToParts(d).forEach(w=>x[w.type]=w.value),{ymd:x.year+x.month+x.day,min:+x.hour*60+ +x.minute+ +x.second/60}}let Tt=0,ne=null,Vt=0,ce=0;function ue(){let d=gt(new Date);if(Tt===0&&ne==null)return{...d,live:!0};let x=ne==null?d.min:Vt+(Tt?(performance.now()-ce)/6e4*Tt:0);return{ymd:d.ymd,min:x,live:!1}}let st=d=>(d=(Math.round(d)%1440+1440)%1440,String(Math.floor(d/60)).padStart(2,"0")+":"+String(d%60).padStart(2,"0")),bt="https://rodalies.erathegameoftime.com",V={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let d=new URLSearchParams(location.search).get("rt");d&&localStorage.setItem("rod_rt",d);let x=localStorage.getItem("rod_rt");x&&/jhmuyo\.workers\.dev/.test(x)&&(x=bt,localStorage.setItem("rod_rt",x)),V.url=x||bt}catch{V.url=bt}let wt=(d,x)=>fetch(d+x,{cache:"no-store"}).then(w=>{if(!w.ok)throw new Error("HTTP "+w.status);return w.json()}),Lt=d=>/^51/.test(d||"");async function se(){if(!V.url){oe();return}let d=V.url.replace(/\/+$/,"");(!V.repFail||Date.now()-V.repFail>15*6e4)&&wt(d,"/reports.json").then($=>{$&&Array.isArray($.items)?(V.rep=$.items,V.repSkew=($.now||Date.now())-Date.now(),$.tipos&&(V.tipos=$.tipos),V.repOk=Date.now(),V.repFail=0):V.repFail=Date.now()}).catch(()=>{V.repFail=Date.now(),V.repOk=0});let x=!V.adifAt||Date.now()-V.adifAt>11e4,[w,A,C,L,W]=await Promise.allSettled([wt(d,"/trip_updates.json"),wt(d,"/vehicle_positions.json"),wt(d,"/alerts.json"),wt(d,"/notices.json"),x?wt(d,"/adif.json"):Promise.reject(0)]);if(W.status==="fulfilled"&&W.value&&W.value.ok?(V.adif=W.value,V.adifAt=Date.now()):x&&(V.adifAt=Date.now()-6e4),w.status==="fulfilled"){let $=new Map,K=new Map;for(let lt of w.value.entity||[]){let y=lt.tripUpdate;if(!y||!y.trip||!Lt(y.trip.tripId))continue;let N=y.trip.tripId,nt=(y.stopTimeUpdate||[])[0],ht=y.delay;ht==null&&nt&&(ht=(nt.arrival||nt.departure||{}).delay),y.trip.scheduleRelationship==="CANCELED"&&(ht="X"),ht!=null&&$.set(N,ht),K.set(N,{next:nt?{sid:nt.stopId,t:+((nt.arrival||nt.departure||{}).time||0)}:null})}V.delays=$,V.tu=K,V.ok=Date.now(),V.feedTs=+((w.value.header||{}).timestamp||0)*1e3,V.err=""}else V.err=w.reason&&w.reason.message||"sin respuesta";if(A.status==="fulfilled"){let $=new Map,K=Date.now()/1e3;for(let lt of A.value.entity||[]){let y=lt.vehicle;if(!y||!y.trip||!Lt(y.trip.tripId)||!y.position)continue;let N=y.vehicle&&y.vehicle.label||"",nt=N.match(/PLATF\.\(([^)]+)\)/),ht=V.vp.get(y.trip.tripId),Pt={tid:y.trip.tripId,w:xt(+y.position.longitude,+y.position.latitude),st:y.currentStatus||"",sid:y.stopId||"",ts:+y.timestamp||K,label:N,plat:nt?nt[1]:"",fam:(N.split("-")[0]||"").trim(),num:y.vehicle&&y.vehicle.id||""};Pt.disp=ht?ht.disp:null,$.set(Pt.tid,Pt)}V.vp=$,V.okVP=Date.now()}let k=[];if(L.status==="fulfilled"&&Array.isArray(L.value.included)){V.okNotices=Date.now();for(let $ of L.value.included){let K=new Set(($.lines||[]).map(N=>N.id).filter(N=>G[N])),lt=N=>((N||{}).es||(N||{}).ca||"").trim(),y=[lt($.description),lt($.title)].sort((N,nt)=>nt.length-N.length)[0];y&&k.push({id:"N"+$.externalId,fams:K,stops:new Set,txt:y,when:($.date||"")+"T"+($.time||""),src:"Rodalies",core:$.core||""})}}if(C.status==="fulfilled"){let $=+((C.value.header||{}).timestamp||0);if(V.alertsTs=$,Date.now()/1e3-$<6*3600)for(let K of C.value.entity||[]){let lt=K.alert;if(!lt)continue;let y=new Set,N=new Set;for(let Yt of lt.informedEntity||[])(Yt.routeId||"").startsWith("51")&&y.add(Yt.routeId.replace(/^51T\d+/,"")),Yt.stopId&&Ht.has(Yt.stopId)&&N.add(Ht.get(Yt.stopId));if(!y.size&&!N.size)continue;let nt=(lt.descriptionText||lt.headerText||{translation:[]}).translation||[],ht=((nt.find(Yt=>Yt.language==="es")||nt[0]||{}).text||"").trim(),Pt=+((lt.activePeriod||[])[0]||{}).start||0;k.some(Yt=>Yt.txt===ht)||k.push({id:K.id,fams:y,stops:N,txt:ht,when:Pt?new Date(Pt*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(V.adif&&Date.now()-V.adifAt<15*6e4)for(let[$,K]of(V.adif.items||[]).entries()){let lt=(K.t?K.t+". ":"")+K.txt,y=new Set,N=new Set,nt=_(lt);for(let ht of lt.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))G[ht[1]]&&y.add(ht[1]);b.forEach((ht,Pt)=>{ht.fams.size&&ht.n.length>4&&nt.includes(_(ht.n))&&(N.add(Pt),y.size||ht.fams.forEach(Yt=>y.add(Yt)))}),k.some(ht=>ht.txt===lt)||k.push({id:"A"+$,fams:y,stops:N,txt:lt,when:V.adif.upd||"",src:"Adif",lvl:K.lvl})}if(L.status==="fulfilled"||C.status==="fulfilled"||V.adif){V.alerts=k.sort(($,K)=>K.when>$.when?1:-1);try{zm()}catch{}}oe(),fh(),ci=0,a()}let qt=()=>V.okVP&&Date.now()-V.okVP<9e4;function oe(){let d=p("#rtst"),x=p("#mode");if(x){let A=!!qt()&&ue().live;x.classList.toggle("on",A),x.classList.toggle("pre",!A),x.textContent=A?"En directo":re.cur?"Repaso real":"Previsi\xF3n",x.classList.toggle("past",!!re.cur),x.title=re.cur?`Retrasos reales de la foto de las ${re.cur.sn.t} (se toma una cada 15 min)`:""}if(!d)return;V.url?V.err?d.textContent="No se pudo conectar con el puente ("+V.err+"). Se usa el horario.":qt()?d.innerHTML=`Conectado \xB7 ${V.vp.size} trenes con posici\xF3n real y ${V.delays.size} con retraso \xB7 actualizado a las ${new Date(V.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:d.textContent="Conectando\u2026":d.textContent=V.err||"Sin puente: trenes seg\xFAn horario oficial.";let w=p("#rturl");w&&w._shown!==V.url&&(w.value=V.url,w._shown=V.url)}p("#rtsave").onclick=()=>{let d=p("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(d&&!/^https?:\/\//.test(d)&&(d="https://"+d),!d){V.err="pega la direcci\xF3n de tu puente",oe();return}V.url=d;try{localStorage.setItem("rod_rt",d)}catch{}V.ok=0,V.err="",oe(),se()},p("#rtoff").onclick=()=>{V.url=bt;try{localStorage.removeItem("rod_rt")}catch{}h._h="",se()},setInterval(se,2e4),setTimeout(se,50);let re={snap:null,key:""};function H(){let d=ue();if(d.live||!Et.hoy||!Et.hoy.snaps||Tt&&ne==null)return null;let x=gt(new Date).min;if(d.min>x+1)return null;let w=null;for(let A of Et.hoy.snaps){if(!A.d)continue;let C=Td(A.t);C<=d.min+1&&(!w||C>w.m)&&(w={m:C,sn:A})}return w&&d.min-w.m<=25?w:null}let Re=d=>{{let C=uh(d.num);if(C&&C.cx&&ue().live)return"X"}let x=re.cur;if(x){if(x.sn.x&&x.sn.x.includes(d.tid))return"X";let C=x.sn.d[d.tid];return C??0}if(!qt())return null;let w=V.delays.get(d.tid),A=V.vp.get(d.tid);return w==="X"?w:A&&A.pre&&A.preDl>=1?Math.max(typeof w=="number"?w:0,A.preDl*60):w??null},Wt=new Set(O);try{let d=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(d)&&d.some(x=>O.includes(x))&&(Wt.clear(),d.forEach(x=>O.includes(x)&&Wt.add(x)))}catch{}let R=new rs,v=new rs,J=new Hi({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),it=new Hi({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),ot=new tr(R,J),At=new tr(v,it);At.renderOrder=20,ot.renderOrder=21,ot.frustumCulled=At.frustumCulled=!1,e.add(At,ot);let It=!1;function ut(){if(It||!T.length)return;It=!0,e.updateMatrixWorld(!0);let d=new Ys,x=T.map(C=>C.mesh),w=new z(0,0,-1);b.forEach(C=>{d.set(new z(C.w[0],C.w[1],50),w),C.ext=!d.intersectObjects(x,!1).length});let A=(C,L)=>b.findIndex(W=>Math.hypot(W.w[0]-C[0],W.w[1]-C[1])<.05);E.forEach(C=>{let L=A(C.p[0]),W=A(C.p[C.p.length-1]),k=$=>(d.set(new z($[0],$[1],50),w),!d.intersectObjects(x,!1).length);C.ext=(L>=0?b[L].ext:k(C.p[0]))&&(W>=0?b[W].ext:k(C.p[C.p.length-1]))})}let pt=()=>{let d=new Set(Wt.size<=2?Wt:[]);try{F&&F.fam&&d.add(F.fam)}catch{}return d},Ft="";function te(){ut();let d=[],x=[],w=new Set,A=new fe,C=new fe("#d2d0d0"),L=pt();Ft=[...L].join();for(let W of O)if(Wt.has(W))for(let k of X[W]){if(w.has(k))continue;w.add(k);let $=E[k].p;A.set(G[W]),E[k].ext&&!L.has(W)&&A.lerp(C,.72);for(let K=0;K+1<$.length;K++)d.push($[K][0],$[K][1],U,$[K+1][0],$[K+1][1],U),x.push(A.r,A.g,A.b,A.r,A.g,A.b)}d.length||(d.push(0,0,-50,0,0,-50),x.push(0,0,0,0,0,0)),R.setPositions(d),R.setColors(x),v.setPositions(d),a()}te();let Bt=d=>new _n({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new fe(d)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Rt=new nn,Jt=b.length,le=new Float32Array(Jt*3),ve=new Float32Array(Jt*3),q=new Float32Array(Jt),Ut=new Float32Array(Jt);b.forEach((d,x)=>{le[x*3]=d.w[0],le[x*3+1]=d.w[1],le[x*3+2]=U,ve.set([1,1,1],x*3),q[x]=6,Ut[x]=1.6}),Rt.setAttribute("position",new We(le,3)),Rt.setAttribute("fill",new We(ve,3)),Rt.setAttribute("size",new We(q,1)),Rt.setAttribute("bw",new We(Ut,1));let ft=new $s(Rt,Bt("#1d2330"));ft.renderOrder=22,ft.frustumCulled=!1,e.add(ft);function Ct(){let d=r.dist<45,x=pt();b.forEach((w,A)=>{let C=[...w.fams].some(W=>Wt.has(W)),L=w.ext&&![...w.fams].some(W=>x.has(W))&&A!==Q;q[A]=C?A===Q?13:L?3:d?8:5:0,Ut[A]=A===Q?3:1.6}),Rt.attributes.size.needsUpdate=!0,Rt.attributes.bw.needsUpdate=!0}let Dt=600,vt=new nn,ee=new Float32Array(Dt*3),Zt=new Float32Array(Dt*3),Fe=new Float32Array(Dt),De=new Float32Array(Dt);vt.setAttribute("position",new We(ee,3)),vt.setAttribute("fill",new We(Zt,3)),vt.setAttribute("size",new We(Fe,1)),vt.setAttribute("bw",new We(De,1));let xn=new Float32Array(Dt);vt.setAttribute("ang",new We(xn,1));let li=new _n({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new fe("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Qr=new $s(vt,li);Qr.renderOrder=24,Qr.frustumCulled=!1,e.add(Qr);let Zi=new nn,Rs=new Float32Array(Dt*3),ar=new Float32Array(Dt*3),Mo=new Float32Array(Dt),ta=new Float32Array(Dt);Zi.setAttribute("position",new We(Rs,3)),Zi.setAttribute("fill",new We(ar,3)),Zi.setAttribute("size",new We(Mo,1)),Zi.setAttribute("bw",new We(ta,1));let or=new $s(Zi,Bt("#ffffff"));or.renderOrder=23,or.frustumCulled=!1,e.add(or);function Ci(d,x){let w=E[d],A=x*w.L,C=0,L=w.c.length-1;for(;L-C>1;){let lt=C+L>>1;w.c[lt]<=A?C=lt:L=lt}let W=w.c[L]-w.c[C]||1,k=(A-w.c[C])/W,$=w.p[C],K=w.p[L];return[$[0]+(K[0]-$[0])*k,$[1]+(K[1]-$[1])*k]}let lr=d=>d*d*(3-2*d)*.35+d*.65;function Is(d,x){let w=d.pat.t,A=d.pat.stops.length,C=w[2*A-2];if(x<w[1]-2||x>C+1)return null;if(x<=w[1])return{w:b[d.pat.stops[0]].w,at:0,next:0,moving:!1};for(let L=0;L<A-1;L++){let W=w[2*L+1],k=w[2*L+2],$=w[2*L+3];if(x<=k){let K=k>W?(x-W)/(k-W):1;return{w:Ci(d.pat.segs[L],lr(g(K,0,1))),at:-1,next:L+1,prev:L,moving:!0}}if(x<=$)return{w:b[d.pat.stops[L+1]].w,at:L+1,next:L+1,moving:!1}}return{w:b[d.pat.stops[A-1]].w,at:A-1,next:A-1,moving:!1}}function ea(d){let x=t.days.indexOf(d.ymd),w=[];if(x<0)return{k:x,out:w};let A=(C,L)=>{for(let W of C){if(!Wt.has(W.fam))continue;let k=Re(W);if(k==="X")continue;let $=(k||0)/60,K=d.min+L-W.t0-$;if(K<-2||K>W.pat.t[W.pat.t.length-2]+1)continue;let lt=Is(W,K);lt&&w.push({tr:W,p:lt,rel:K,dl:$,live:k!=null})}};return A(Z[x],0),x>0&&A(Z[x-1],1440),{k:x,out:w}}function cr(d,x,w,A){let C=d.pat.stops[0],L=x.dep0,W=null,k=(K,lt)=>{for(let y of K||[]){let N=y.pat.stops,nt=N.length;if(N[nt-1]!==C||y===d)continue;let ht=y.t0+y.pat.t[2*(nt-1)]-lt;if(ht>L+5||ht<L-120)continue;let Pt=Gt(y.pat),Yt=Pe(Pt,x.w,-1,1e9);if(Yt.err>.6)continue;let ae=Pt.stopD,mt=y.pat.t,St=ae.findIndex(Ie=>Ie>Yt.d);St<0&&(St=nt-1);let he=St===0?mt[1]:mt[2*St-1]+(ae[St]>ae[St-1]?(Yt.d-ae[St-1])/(ae[St]-ae[St-1]):1)*(mt[2*St]-mt[2*St-1]),_e=w-(y.t0+he-lt);_e<-5||_e>120||(!W||Math.abs(_e)<Math.abs(W.prevDl))&&(W={prevTr:y,dPrev:Yt.d,prevDl:_e,arrO:ht+Math.max(0,_e)})}};if(k(Z[A],0),A>0&&k(Z[A-1],1440),!W)return{prevTr:null,preDl:0};let $=Math.max(L,W.arrO+3);return{...W,depEst:$,preDl:Math.max(0,$-L)}}function bo(d,x,w){let A=d.pat.t,C=x.length;if(!(w>=0))return w<0?x[0]:null;for(let L=0;L<C;L++)if(w<=A[2*L+1]){if(w>=A[2*L]||L===0)return x[L];let W=A[2*L-1],k=A[2*L];return x[L-1]+(x[L]-x[L-1])*(k>W?(w-W)/(k-W):1)}return x[C-1]}let Ps=performance.now();function wo(){let d=[],x=Date.now()/1e3,w=performance.now(),A=Math.min(1,(w-Ps)/1e3);Ps=w;for(let C of V.vp.values()){let L=rt.get(C.tid),W=L?L.fam:C.fam;if(W&&G[W]&&!Wt.has(W))continue;let k=V.delays.get(C.tid),$=typeof k=="number"?k/60:0,K=Math.max(0,x-C.ts);C.mvTs!==C.ts&&((!C.mvW||Math.hypot(C.w[0]-C.mvW[0],C.w[1]-C.mvW[1])>.025)&&(C.mvW=C.w,C.mvAt=C.ts),C.mvTs=C.ts),C.still=C.ts-(C.mvAt||C.ts);let lt=C.w,y=-1;if(L){let nt=Gt(L.pat),ht=nt.stopD;if(C.dObs==null||C.obsAt!==C.ts){let St=Pe(nt,C.w,-1,1e9);C.dObs=St.d,C.err=St.err,C.obsAt=C.ts}let Pt=ue(),Yt=t.days.indexOf(Pt.ymd),ae=L.day===Yt-1?1440:0,mt=L.t0+L.pat.t[1]-ae;if(C.pre=Pt.min+$<mt-1&&(C.dObs>ht[0]+.35||C.err>.6)&&!(C.st==="STOPPED_AT"&&C.sid===b[L.pat.stops[0]].id),C.dep0=mt,C.pre){if(C.atStop=-1,C.next=0,y=0,C.disp=null,C.prevAt!==C.ts&&(C.prevAt=C.ts,Object.assign(C,cr(L,C,Pt.min,Yt))),C.prevTr){let St=Gt(C.prevTr.pat);lt=Me(St,C.dPrev)}}else if(C.err<=.6){let St=ht.findIndex(Ie=>Ie>C.dObs+.08);St<0&&(St=ht.length-1);let he=ht.reduce((Ie,dn,Ze)=>Math.abs(dn-C.dObs)<Math.abs(ht[Ie]-C.dObs)?Ze:Ie,0);C.atStop=Math.abs(ht[he]-C.dObs)<.16?he:-1,C.next=St,y=St;let _e=C.dObs;if(C.st==="STOPPED_AT"&&C.atStop>=0)_e=ht[C.atStop];else if(St>0){let Ie=(L.pat.t[2*St]-L.pat.t[2*St-1])*60,dn=Ie>0?(ht[St]-ht[St-1])/Ie:0,Ze=ue(),Qt=t.days.indexOf(Ze.ymd),Ji=L.day===Qt-1?1440:0,Us=bo(L,ht,Ze.min+Ji-L.t0-$),In=C.dObs+dn*Math.min(K,60);Us!=null&&(In=Math.min(In,Math.max(C.dObs,Us))),_e=Math.max(C.dObs,Math.min(ht[St]-.03,In))}C.disp==null||Math.abs(C.disp-_e)>1.2?C.disp=_e:_e>C.disp&&(C.disp+=(_e-C.disp)*Math.min(1,A*1.5)),lt=Me(nt,C.disp)}else if(C.err>2){let St=ue(),he=t.days.indexOf(St.ymd),_e=L.day===he-1?1440:0,Ie=Is(L,St.min+_e-L.t0-$);Ie&&(lt=Ie.w,C.est=!0,y=Ie.next),C.atStop=-1,C.next=Ie?Ie.next:-1}else C.atStop=-1,C.next=-1}let N=C.pre?"":C.st==="STOPPED_AT"&&C.atStop>=0||C.atStop>=0&&C.still>30?"st":C.still>=90?"via":"";d.push({tr:L,v:C,w:lt,stop:N,p:{w:lt},fam:W||"?",c:L?L.c:G[W]||"#6b7385",dl:$,live:!0,real:!0,idx:y,age:K,cancel:k==="X"})}return d}let Wn=new Map,rn=!1,je=!1,Ri="",Cn=[],ci=0,M=null,F=null,Q=-1,Y=!1,tt=0,kt="";function $t(d){let x=Tt>0||qt()&&ne==null||!!F,w=x?50:250;if(d-ci<w)return!1;ci=d,[...pt()].join()!==Ft&&(te(),Ct());{let y=H(),N=y?y.sn.t:"";re.cur=y,N!==re.key&&(re.key=N,oe()),!y&&!ue().live&&!Et.at&&Ee()}let A=ue(),C=qt()&&A.live,L=C?{k:t.days.indexOf(A.ymd),out:wo()}:ea(A);Cn=L.out;let W=new fe,k=0,$=0;for(let y of Cn){if(k>=Dt)break;ee[k*3]=y.p.w[0],ee[k*3+1]=y.p.w[1],ee[k*3+2]=U+.02;let N=null;if(y.real&&y.v.pre&&y.v.prevTr)N=Me(Gt(y.v.prevTr.pat),y.v.dPrev+.35);else if(y.real&&y.tr&&!y.v.pre&&y.v.err<=.6&&y.v.disp!=null&&!(y.v.st==="STOPPED_AT"&&y.v.atStop>=0))N=Me(Gt(y.tr.pat),y.v.disp+.35);else if(!y.real&&y.p.moving){let ae=y.tr.pat.t,mt=y.p.prev,St=ae[2*mt+1],he=ae[2*mt+2],_e=he>St?(y.rel-St)/(he-St):1;N=Ci(y.tr.pat.segs[mt],Math.min(1,lr(g(_e,0,1))+.04))}let nt=y.real?!!y.stop:!y.p.moving;if(y.broke=vd(y),y.broke)xn[k]=85;else if(nt)xn[k]=75;else if(N){let ae=To(y.p.w),mt=To(N),St=mt[0]-ae[0],he=mt[1]-ae[1];xn[k]=Math.hypot(St,he)>.05?Math.atan2(St,-he):99}else xn[k]=99;W.set(y.c||y.tr.c),Zt[k*3]=W.r,Zt[k*3+1]=W.g,Zt[k*3+2]=W.b;let ht=y.tr?y.tr===F:F&&F.vtid===y.v.tid;Fe[k]=ht?22:r.dist<45?17:14,De[k]=ht?3.5:2.2;let Pt=y.real&&y.stop==="via"||!!y.broke,Yt=y.cancel||y.broke?[.86,.15,.15]:y.dl>10?[.86,.15,.15]:y.dl>5?[.92,.48,.05]:y.dl>=1?[.98,.8,.08]:[.09,.64,.29];(y.live&&y.dl>=5||ht||Pt)&&(Rs[$*3]=y.p.w[0],Rs[$*3+1]=y.p.w[1],Rs[$*3+2]=U+.01,ar.set(ht?Yt:Pt?[.86,.15,.15]:[.98,.45,.09],$*3),Mo[$]=Fe[k]+(ht?16+5*Math.sin(d/220):Pt?10+3*Math.sin(d/400):8),ta[$]=ht?2:3,$++),k++}if(vt.setDrawRange(0,k),Zi.setDrawRange(0,$),["position","fill","size","bw"].forEach(y=>{vt.attributes[y].needsUpdate=!0,Zi.attributes[y].needsUpdate=!0}),vt.attributes.ang.needsUpdate=!0,M){let y=Cn.find(N=>N.tr===M);if(y){let N=0,nt=innerHeight,ht=h.style.display!=="none"&&!h.classList.contains("min")?h.getBoundingClientRect():null,Pt=p("#rc").getBoundingClientRect();innerWidth<=640&&(ht&&(N=ht.bottom),nt=Math.min(nt,Pt.top));let Yt=N+(nt-N)/2,ae=Yt-innerHeight/2,mt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=y.p.w[0]-Math.sin(r.yaw)*ae*mt,s.ty=y.p.w[1]+Math.cos(r.yaw)*ae*mt}else qt()&&ue().live&&(M=null)}let K=st(A.min);K!==kt&&(kt=K,p("#ctime").textContent=K),p("#ntr").textContent=String(Cn.length),p("#ntrl").textContent=C?"trenes de Rodalies con posici\xF3n real":"trenes previstos seg\xFAn el horario";{let y=Wt.size<O.length?[...Wt].sort(P).join(", "):"",N=p("#ccount"),nt=re.cur?`\u23EA ${Cn.length} trenes con los retrasos reales de las ${re.cur.sn.t} \xB7 ${Object.values(re.cur.sn.d).filter(ht=>ht>=60).length} iban con retraso`:!A.live&&A.min<gt(new Date).min-1&&!Tt?`\u23EA Hora pasada seg\xFAn horario${Et.hoy&&Et.hoy.snaps&&Et.hoy.snaps.some(ht=>ht.d)?` \xB7 hay retrasos reales desde las ${Et.hoy.snaps.find(ht=>ht.d).t}`:" \xB7 a\xFAn no hay fotos con retrasos reales de hoy"}`:`\u{1F686} ${Cn.length} ${C?"trenes con posici\xF3n real":"trenes previstos"}${y?` <small>\xB7 ${f(y)}</small>`:""}`;N&&N._t!==nt&&(N.innerHTML=nt,N._t=nt)}let lt=new Date;if(p("#cdate").textContent=A.live?"hora actual":Tt?"simulaci\xF3n \xD7"+Tt:ui?"en pausa":"hora elegida",L.k<0?p("#src").innerHTML=`<b style="color:#c2410c">Sin horarios para hoy.</b> Los datos guardados van del ${Ae(t.days[0])} al ${Ae(t.days[t.days.length-1])}: actualiza la app.`:C?p("#src").textContent=`En directo \xB7 posiciones de Renfe de hace ${Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...V.vp.values()].map(y=>y.ts),0)))} s`:p("#src").innerHTML='<b style="color:#c2410c">No es tiempo real:</b> '+(V.url?"sin conexi\xF3n con el puente, ":"conecta el puente para ver los trenes reales; ")+"posiciones calculadas con el horario",A.live){let y=Math.round(A.min),N=p("#tsl");document.activeElement!==N&&(N.value=y<240?y+1440:y)}{let y=F?String(F.num||F.vtid||""):"";y!==$t._sk&&($t._sk=y,on(!0))}return on(),d-tt>3e3&&(F||Q>=0||Y||je||Ri)&&(tt=d,qe()),oe(),!0}let zt=-1,Xt=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Kt=[],pe=document.createElement("button");pe.type="button",pe.id="mbtn",pe.title="Ver los nombres de los municipios",pe.innerHTML="\u{1F3D8}\uFE0F<span>Municipios</span>",pe.onclick=()=>{Xt=!Xt;try{localStorage.setItem("rod_mun",Xt?"1":"")}catch{}pe.classList.toggle("on",Xt),a(),cn()},pe.classList.toggle("on",Xt),document.body.appendChild(pe);let we=T.slice().sort((d,x)=>x.pop-d.pop);function jt(d){if(d._a)return d._a;let x=null,w=0;for(let A of d.rings||[]){let C=A[0];if(!C)continue;let L=0,W=0,k=0;for(let $=0,K=C.length;$<K;$+=2){let lt=C[$],y=C[$+1],N=C[($+2)%K],nt=C[($+3)%K],ht=lt*nt-N*y;L+=ht,W+=(lt+N)*ht,k+=(y+nt)*ht}Math.abs(L)>w&&(w=Math.abs(L),x=[W/(3*L),k/(3*L)])}return d._a=x?[(x[0]-l)*o,(x[1]-c)*o]:[d.cx,d.cy]}let Ne=d=>d>=1e5?1:d>=2e4?2:d>=5e3?3:4,tn=[0,7.6,6.7,6,5.4],Xe=[0,17,15,13,12],ze=d=>d.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function cn(){let d=s.tilt<.06&&r.tilt<.08;pe.classList.toggle("show",d);let x=0;if(Xt&&d){let w=[...document.querySelectorAll(".plab, .slab")].filter(L=>L.offsetParent!==null||L.style.display==="block").map(L=>{let W=L.getBoundingClientRect();return[W.left-2,W.top-2,W.right+2,W.bottom+2]}).filter(L=>L[2]>L[0]),A=r.dist,C=A>160?5e4:A>130?2e4:A>105?8e3:A>80?3e3:A>62?800:0;for(let L of we){let W=Ne(L.pop);if(L.pop<C)break;let k=jt(L);if(On.set(k[0],k[1],U).project(n),Math.abs(On.x)>1.02||Math.abs(On.y)>1.02)continue;let $=(On.x*.5+.5)*innerWidth,K=(-On.y*.5+.5)*innerHeight,lt=ze(L.name),y=lt.length*tn[W]+8,N=Xe[W],nt=[$-y/2,K-N/2,$+y/2,K+N/2];if(w.some(Pt=>nt[0]<Pt[2]&&Pt[0]<nt[2]&&nt[1]<Pt[3]&&Pt[1]<nt[3]))continue;w.push(nt);let ht=Kt[x]||(Kt[x]=Object.assign(document.createElement("div"),{className:"mlab"}));ht.isConnected||document.body.appendChild(ht),ht._n!==lt&&(ht.textContent=lt,ht._n=lt),ht._t!==W&&(ht.className="mlab t"+W,ht._t=W),ht.style.transform=`translate(${Math.round($)}px,${Math.round(K)}px) translate(-50%,-50%)`,ht.style.display="block",x++}}for(;x<Kt.length;x++)Kt[x].style.display="none"}let Et={at:0,hoy:null,ayer:null,err:""},vn="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function Ee(){Date.now()-Et.at<5*6e4||(Et.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(d=>fetch(vn+d+".json",{cache:"no-store"}).then(x=>x.ok?x.json():null).catch(()=>null))).then(([d,x,w])=>{Et.hoy=d,Et.ayer=x,Et.hist=w,Et.tr=null,Et.err=d?"":"sin datos",je&&(h._h="",qe()),on(!0)}))}function $n(d){let x={};for(let A of d&&d.snaps||[])for(let C of A.r||[]){let L=/^\d+[A-Z](\d+)/.exec(C);L&&(x[L[1]]=x[L[1]]||[]).push(Math.max(0,A.d&&A.d[C]||0)/60)}let w={};for(let A in x){let C=x[A].sort((L,W)=>L-W);w[A]=Math.round(C[C.length>>1])}return w}function Xn(d){if(!Et.tr){let w=new Map;for(let A of Et.hist&&Et.hist.days||[])w.set(A.day,A.tr);for(let A of[Et.ayer,Et.hoy])if(A&&A.day&&!w.has(A.day)){let C=$n(A);Object.keys(C).length&&w.set(A.day,C)}Et.tr=w}let x=[...Et.tr.values()].map(w=>w[String(d)]).filter(w=>w!=null);return x.length?{n:x.length,late:x.filter(w=>w>=5).length,avg:x.reduce((w,A)=>w+A,0)/x.length}:null}let yn=d=>d>=90?"g":d>=80?"y":d>=65?"w":"b",Fn={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},Ue=d=>d>10?Fn.b:d>5?Fn.w:d>=1?Fn.y:Fn.g,ke=d=>(d>=.05?"+":"")+(Math.round(d*10)/10).toString().replace(".",",")+" min";function qn(d,x,w){return`<div class="sbars">${d.map(A=>`<div class="sbar" title="${f(A.tip||"")}"><span class="sl">${A.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(A.w*100))}%;background:${A.c}"></i></span><b class="sv" style="color:${A.c===Fn.y?"#a16207":A.c}">${A.val}</b></div>`).join("")}</div>`}function Ge(d){if(d=(d||[]).filter(k=>k.n>=10),!d||d.length<2){let k=d&&d[0];return k?`<p class="snote">Primera foto del d\xEDa a las ${k.t}: ${Math.round(k.ok/k.n*100)} % puntuales de ${k.n} trenes. El gr\xE1fico aparece con la segunda foto.</p>`:'<p class="snote">A\xFAn no hay fotos de hoy.</p>'}let x=300,w=92,A=22,C=k=>A+k*(x-A-6)/(d.length-1),L=k=>6+(100-k)/100*(w-22),W=d.map((k,$)=>[C($),L(k.n?k.ok/k.n*100:100),k]);return`<svg class="schart" viewBox="0 0 ${x} ${w}" role="img" aria-label="Porcentaje de trenes puntuales a lo largo del d\xEDa">
      ${[100,75,50].map(k=>`<line x1="${A}" x2="${x-4}" y1="${L(k)}" y2="${L(k)}" class="gl"/><text x="2" y="${L(k)+3}" class="ax">${k}%</text>`).join("")}
      <polyline points="${W.map(k=>k[0].toFixed(1)+","+k[1].toFixed(1)).join(" ")}" class="ln"/>
      ${W.map(([k,$,K])=>`<circle cx="${k.toFixed(1)}" cy="${$.toFixed(1)}" r="5" class="pt"><title>${K.t} \xB7 ${K.n?Math.round(K.ok/K.n*100):100}% puntuales \xB7 ${K.n} trenes \xB7 ${K.d5} con +5 min \xB7 retraso medio ${ke(K.avg)}${K.nd?` \xB7 ${K.nd} sin dato`:""}</title></circle>`).join("")}
      <text x="${A}" y="${w-3}" class="ax">${d[0].t}</text><text x="${x-4}" y="${w-3}" class="ax" text-anchor="end">${d[d.length-1].t}</text></svg>`}function Ii(){Ee();let d=ue(),x=Cn.filter(k=>k.real&&qt()&&d.live),w=x.filter(k=>V.delays.has(k.v.tid)),A=w.length,C=x.length-A,L='<div class="tc sts" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>\u{1F4CA} Estad\xEDsticas</h3>';if(A){let k=w.filter(mt=>mt.dl<3).length,$=w.filter(mt=>mt.dl>=5).length,K=w.filter(mt=>mt.stop==="via").length,lt=Math.round(k/A*100);L+=`<small>Ahora mismo \xB7 ${A} trenes con retraso publicado por Renfe${C?` \xB7 ${C} sin dato (no se cuentan)`:""}</small><div class="kpis">
        <div class="kpi ${yn(lt)}"><b>${lt}%</b><span>puntuales</span></div>
        <div class="kpi ${yn(100-$/A*100*2)}" title="${Math.round($/A*100)} % de los trenes"><b>${$}</b><span>con 5 min<br>o m\xE1s</span></div>
        <div class="kpi ${K===0?"g":K<=2?"w":"b"}"><b>${K}</b><span>detenidos<br>en la v\xEDa</span></div></div>`;let y=new Map;w.forEach(mt=>{let St=mt.fam,he=y.get(St)||{n:0,ok:0,sum:0};he.n++,he.ok+=mt.dl<3,he.sum+=Math.max(0,mt.dl),y.set(St,he)});let N=[...y].filter(([mt])=>G[mt]).sort((mt,St)=>mt[1].ok/mt[1].n-St[1].ok/St[1].n||St[1].sum/St[1].n-mt[1].sum/mt[1].n),nt=N.filter(([,mt])=>mt.ok<mt.n),ht=N.filter(([,mt])=>mt.ok===mt.n);L+="<h4>Puntualidad por l\xEDnea ahora</h4>"+(nt.length?"":'<p class="snote">\u2713 Todas las l\xEDneas van puntuales.</p>')+qn(nt.map(([mt,St])=>({lab:Yn(mt),w:St.ok/St.n,c:Fn[yn(St.ok/St.n*100)],val:`${Math.round(St.ok/St.n*100)}% <small>${ke(St.sum/St.n)}</small>`,tip:`${mt}: ${St.ok} de ${St.n} trenes puntuales \xB7 retraso medio ${ke(St.sum/St.n)}`})))+(ht.length?`<p class="snote">Puntuales al 100 %: ${ht.map(([mt])=>Yn(mt)).join(" ")}</p>`:"");let Pt=new Map;w.forEach(mt=>{if(!mt.tr||mt.v.next==null||mt.v.next<0||mt.v.pre)return;let St=mt.tr.pat.stops[mt.v.next],he=Pt.get(St)||{n:0,sum:0};he.n++,he.sum+=Math.max(0,mt.dl),Pt.set(St,he)});let Yt=[...Pt].filter(([,mt])=>mt.sum/mt.n>=1).sort((mt,St)=>St[1].sum/St[1].n-mt[1].sum/mt[1].n).slice(0,8),ae=Yt.length?Yt[0][1].sum/Yt[0][1].n:1;L+='<h4>Estaciones con m\xE1s retraso ahora</h4><small class="snote">Retraso medio de los trenes que van a llegar a cada estaci\xF3n</small>'+(Yt.length?qn(Yt.map(([mt,St])=>({lab:`<span class="sn" data-gs="${mt}">${f(b[mt].n)}</span>`,w:St.sum/St.n/ae,c:Ue(St.sum/St.n),val:`${ke(St.sum/St.n)} <small>${St.n} ${St.n===1?"tren":"trenes"}</small>`,tip:`${b[mt].n}: ${St.n} trenes llegando con ${ke(St.sum/St.n)} de media`}))):'<p class="snote">\u2713 Ning\xFAn tren llega con retraso ahora mismo.</p>')}else L+='<p class="snote">Las estad\xEDsticas en directo necesitan el puente de tiempo real conectado.</p>';let W=Et.hoy;L+=`<button type="button" class="hmore" data-cols>${ei.on?"\u25BE Quitar columnas del mapa":"\u{1F3D9}\uFE0F Ver el retraso de cada estaci\xF3n en 3D"}</button>`;{ph("");let k=[...Ls.m].filter(([$,K])=>G[$]&&K[0]>=3).map(([$,K])=>[$,K[1]/K[0]]).sort(($,K)=>$[1]-K[1]);k.length&&(L+='<h4>\xBFDe qu\xE9 trenes da posici\xF3n Renfe?</h4><small class="snote">De los trenes que seg\xFAn horario circulan ahora, cu\xE1ntos se ven en directo. Si es bajo, en esa l\xEDnea el mapa usa el horario y no avisamos de \xABsin se\xF1al\xBB.</small>'+qn(k.slice(0,8).map(([$,K])=>({lab:Yn($),w:K,c:Fn[yn(K*100)],val:`${Math.round(K*100)}%`,tip:`${$}: ${Math.round(K*100)} % de los trenes en circulaci\xF3n con posici\xF3n de Renfe`}))))}{let k=lt=>{let y=(lt&&lt.snaps||[]).filter(ht=>ht.n),N=y.reduce((ht,Pt)=>ht+Pt.n,0),nt=y.reduce((ht,Pt)=>ht+Pt.ok,0);return N?nt/N*100:null},$=k(Et.hoy),K=k(Et.ayer);$!=null&&(L+=`<div class="cmp"><span>Hoy <b class="${yn($)}">${Math.round($)} %</b> puntuales</span>${K!=null?`<span>Ayer <b class="${yn(K)}">${Math.round(K)} %</b></span><span>${$>=K?"\u25B2 mejor":"\u25BC peor"} que ayer</span>`:""}</div>`)}if(L+="<h4>Hoy, a lo largo del d\xEDa</h4>",W&&W.snaps){L+=Ge(W.snaps);let k=Object.entries(W.st||{}).map(([lt,y])=>[Ht.get(lt),y]).filter(([lt,y])=>lt!=null&&y.n>=3).map(([lt,y])=>[lt,y.sum/y.n/60,y]).filter(lt=>lt[1]>=1).sort((lt,y)=>y[1]-lt[1]).slice(0,8);if(k.length){let lt=k[0][1];L+='<h4>Estaciones con m\xE1s retraso hoy</h4><small class="snote">Retraso medio de los trenes al llegar \xB7 al menos 3 mediciones</small>'+qn(k.map(([y,N,nt])=>({lab:`<span class="sn" data-gs="${y}">${f(b[y].n)}</span>`,w:N/lt,c:Ue(N),val:`${ke(N)} <small>m\xE1x +${Math.round(nt.max/60)}</small>`,tip:`${b[y].n}: ${nt.n} mediciones hoy (foto cada 15 min) \xB7 ${nt.d5} con 5 min o m\xE1s \xB7 peor +${Math.round(nt.max/60)} min`})))}let $=Object.entries(W.lines||{}).filter(([lt,y])=>G[lt]&&y.n>=3).sort((lt,y)=>lt[1].ok/lt[1].n-y[1].ok/y[1].n);$.length&&(L+="<h4>L\xEDneas hoy</h4>"+qn($.map(([lt,y])=>({lab:Yn(lt),w:y.ok/y.n,c:Fn[yn(y.ok/y.n*100)],val:`${Math.round(y.ok/y.n*100)}% <small>${ke(y.sum/y.n/60)}</small>`,tip:`${lt} hoy: ${Math.round(y.ok/y.n*100)}% de las mediciones puntuales \xB7 peor retraso +${Math.round(y.max/60)} min`}))));let K=W.upd?(Date.now()-Date.parse(W.upd))/6e4:0;L+=`<small class="snote">${K>40?`<b>\xDAltima foto hace ${Math.round(K)} min</b> (GitHub a veces retrasa las tareas autom\xE1ticas) \xB7 `:""}Foto cada 15 min del tiempo real de Renfe \xB7 actualizado ${f((W.upd||"").slice(11,16))} \xB7 ${(W.note||"").includes("Solo cuentan")?"solo cuentan los trenes con dato de retraso":"las fotos anteriores a las 12:20 contaban como puntuales los trenes sin dato"}</small>`}else L+=`<p class="snote">${Et.at?"El hist\xF3rico de hoy a\xFAn no est\xE1 disponible: se va reuniendo cada 15 min.":"Cargando\u2026"}</p>`;return L+"</div>"}function ls(d){let x=ue(),w=Cn.filter(N=>(N.fam||N.tr&&N.tr.fam)===d),A=w.filter(N=>N.real),C=w.length,L=w.filter(N=>N.dl>=5).length,W=w.filter(N=>N.dl<3).length,k=w.filter(N=>N.stop==="via"||N.broke).length,$=V.alerts.filter(N=>N.fams.has(d)),K=N=>{let nt=N.tr;if(!nt)return"";let ht=N.v;if(N.real&&ht){let Yt=ht.next>=0?b[nt.pat.stops[ht.next]].n:"";return ht.atStop>=0?`en ${b[nt.pat.stops[ht.atStop]].n}`:Yt?`hacia ${Yt}`:""}let Pt=N.p;return Pt&&Pt.next!=null&&Pt.next>=0?`hacia ${b[nt.pat.stops[Pt.next]].n}`:""},lt=w.slice().sort((N,nt)=>nt.dl-N.dl).slice(0,40).map(N=>{let nt=N.tr;return`<li class="go${ra({num:nt?nt.num:N.v.num,tid:nt?nt.tid:N.v.tid})?" sel":""}" data-gt="${f(nt?nt.num:N.v.num)}|${f(N.real?N.v.tid:nt?nt.tid:"")}"><b>${f(nt?nt.num:N.v.num)}</b><span>${nt?Pi(b[nt.pat.stops[nt.pat.stops.length-1]].n,d):""} <small>${f(K(N))}</small></span>${N.dl>=1?`<em class="dl ${cs(N.dl)}">+${Math.round(N.dl)}</em>`:'<i class="via">en hora</i>'}</li>`}).join(""),y=ph(d);return`<div class="tc sts" style="--c:${G[d]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${Yn(d)} Estado de la l\xEDnea</h3><small>${x.live?`Ahora \xB7 ${C} trenes${A.length<C?` (${A.length} con posici\xF3n de Renfe)`:""}`:`Seg\xFAn horario a las ${st(x.min)}`}</small>
      <div class="kpis"><div class="kpi ${yn(C?W/C*100:100)}"><b>${C?Math.round(W/C*100):100}%</b><span>puntuales</span></div><div class="kpi ${L?L/Math.max(1,C)>.2?"b":"w":"g"}"><b>${L}</b><span>con 5 min<br>o m\xE1s</span></div><div class="kpi ${k?"b":"g"}"><b>${k}</b><span>detenidos</span></div></div>
      ${$.length?Eo($):'<p class="snote">\u2713 Sin avisos de Rodalies para esta l\xEDnea</p>'}${y<.7?`<p class="snote">Renfe solo da posici\xF3n de ${Math.round(y*100)} % de los trenes de esta l\xEDnea: el resto se muestra seg\xFAn horario.</p>`:""}
      <small style="margin-top:6px">Trenes de m\xE1s a menos retraso \xB7 toca uno para verlo</small><ol>${lt||"<li><span>No hay trenes de esta l\xEDnea ahora</span></li>"}</ol>
      <div class="rtb"><button type="button" data-share>\u{1F4E4} Compartir estado</button></div></div>`}let Eo=d=>`<div class="al">${d.slice(0,3).map(x=>`<p>\u26A0\uFE0F ${Po(x)} ${f(x.txt)} <small>${Lo(x)}</small></p>`).join("")}</div>`,ei={on:!1,mesh:null};function Sm(){let d=Et.hoy,x=[];if(d&&d.st)for(let[w,A]of Object.entries(d.st)){let C=Ht.get(w);C!=null&&A.n>=2&&x.push([C,A.sum/A.n/60,A.n])}if(!x.length){let w=new Map;Cn.forEach(A=>{if(!A.real||!A.tr||A.v.next==null||A.v.next<0||A.v.pre||!V.delays.has(A.v.tid))return;let C=A.tr.pat.stops[A.v.next],L=w.get(C)||[0,0];L[0]+=Math.max(0,A.dl),L[1]++,w.set(C,L)}),w.forEach((A,C)=>x.push([C,A[0]/A[1],A[1]]))}return x}function Mm(){if(ei.mesh&&(e.remove(ei.mesh),ei.mesh.geometry.dispose(),ei.mesh.material.dispose(),ei.mesh=null),!ei.on){a();return}let d=Sm();if(!d.length){Bn("A\xFAn no hay datos de retraso por estaci\xF3n"),ei.on=!1;return}let x=new Oa(.32,.32,1,16);x.rotateX(Math.PI/2),x.translate(0,0,.5);let w=new Gs({fog:!1}),A=new Da(x,w,d.length),C=new Le,L=new fe;d.forEach(([W,k],$)=>{let K=.3+Math.min(k,40)*.3;C.makeScale(1,1,K),C.setPosition(b[W].w[0],b[W].w[1],U),A.setMatrixAt($,C),L.set(k>10?"#dc2626":k>5?"#ea7a0c":k>=1?"#eab308":"#16a34a"),A.setColorAt($,L)}),A.renderOrder=25,A.frustumCulled=!1,e.add(A),ei.mesh=A,s.tilt<.5&&(s.tilt=.85),a()}let hr=document.createElement("button");hr.type="button",hr.id="sbtn",hr.title="Estad\xEDsticas de puntualidad",hr.innerHTML="\u{1F4CA}<span>Estad\xEDsticas</span>",hr.onclick=()=>{je=!je,je&&(rn=Y=!1,Et.at=0),h._h="",qe(),a()},document.body.appendChild(hr);function bm(){r.dist<45!=zt<45&&(zt=r.dist,Ct()),wm(),cn()}let na=[],On=new z;function wm(){let d=r.dist<30,x=0;if(d){let w=[];for(let A=0;A<Jt;A++)q[A]<4||(On.set(b[A].w[0],b[A].w[1],U).project(n),!(On.z>1||Math.abs(On.x)>1.05||Math.abs(On.y)>1.05)&&w.push([A,(On.x*.5+.5)*innerWidth,(-On.y*.5+.5)*innerHeight]));if(w.length<=70)for(let[A,C,L]of w){let W=na[x]||(na[x]=Object.assign(document.createElement("div"),{className:"slab"}));W.isConnected||document.body.appendChild(W),W.textContent=b[A].n,W.dataset.i=A,W.style.display="block",W.style.transform=`translate(${Math.round(C+8)}px,${Math.round(L-7)}px)`,x++}}for(;x<na.length;x++)na[x].style.display="none"}function To(d){return On.set(d[0],d[1],U).project(n),[(On.x*.5+.5)*innerWidth,(-On.y*.5+.5)*innerHeight,On.z]}function _d(d,x,w,A){let C=null,L=w*w;for(let W of Cn){let[k,$,K]=To(W.p.w);if(K>1)continue;let lt=(k-d)**2+($-x)**2;lt<L&&(L=lt,C={a:W})}if(C)return C;L=A*A;for(let W=0;W<Jt;W++){if(!q[W])continue;let[k,$,K]=To(b[W].w);if(K>1)continue;let lt=(k-d)**2+($-x)**2;lt<L&&(L=lt,C={s:W})}return C}window.__rodTap=(d,x)=>{let w=null,A=1e9;for(let L of na){if(L.style.display==="none")continue;let W=L.getBoundingClientRect();if(d>=W.left-4&&d<=W.right+4&&x>=W.top-4&&x<=W.bottom+4){let k=Math.abs(x-(W.top+W.bottom)/2)*4+(d-W.left);k<A&&(A=k,w=L)}}if(w)return window.__rodPickStation(+w.dataset.i),!0;let C=_d(d,x,24,18);return C&&C.a?(rn=!1,Y=!1,je=!1,F=C.a.tr||{vtid:C.a.v.tid},Q=-1,M=null,Ct(),qe(),ci=0,a(),!0):C&&C.s!=null?(rn=!1,Y=!1,je=!1,Q=C.s,F=null,M=null,Ct(),qe(),a(),!0):!1},window.__rodHover=(d,x)=>{let w=_d(d,x,14,10);if(w&&w.a){let A=w.a,C=A.tr?b[A.tr.pat.stops[A.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${A.c}">\u25A0</span> ${f(A.fam||A.tr&&A.tr.fam||"?")} \xB7 tren ${f(A.tr?A.tr.num:A.v.num)}</b><small>${C?"hacia "+f(C):""}${A.real?(A.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(A.dl)} min</b>`:" \xB7 puntual")+" \xB7 en directo":" \xB7 previsto"}</small>`}return w&&w.s!=null?`<b>${f(b[w.s].n)}</b><small>${[...b[w.s].fams].sort(P).join(" \xB7 ")}</small>`:null},window.__rodPickStation=d=>{rn=Y=je=!1,F=null,M=null,Q=d,Ct(),h._h="",qe(),a()};{let d=p("#rc"),x=()=>{let w=d.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,w-64-10)+"px")};try{new ResizeObserver(x).observe(d)}catch{}addEventListener("resize",x),setTimeout(x,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let d=!1,x=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{x&&!d&&(d=!0,location.reload())}),navigator.serviceWorker.register("./sw.js").then(w=>{w.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||w.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{Ee()}catch{}},2500),setInterval(()=>{try{Et.at=0,Ee()}catch{}},15*6e4),window.__rodTick=$t,window.__rodFrame=bm,window.__rodResize=()=>{J.resolution.set(innerWidth,innerHeight),it.resolution.set(innerWidth,innerHeight)},window.__rodResize();let hi={st:-1,f:new Set},xd=d=>{let x=[...b[d].fams].sort(P);return`<div class="sfc">${x.length>1?`<button type="button" data-sf="" class="${hi.f.size?"":"on"}">Todas</button>`:""}${x.map(w=>`<button type="button" data-sf="${f(w)}" class="ln ${hi.f.size&&!hi.f.has(w)?"off":""}${Wt.has(w)?"":" hid"}" style="--c:${G[w]}">${f(w)}</button>`).join("")}</div>${x.some(w=>!Wt.has(w))?"<small>Las l\xEDneas apagadas en el filtro general no se muestran</small>":""}`},Em=d=>{let x=(d||"#6b7385").replace("#",""),w=parseInt(x.slice(0,2),16),A=parseInt(x.slice(2,4),16),C=parseInt(x.slice(4,6),16);return(.299*w+.587*A+.114*C)/255>.62?"#1d2330":"#fff"},Pi=(d,x)=>{let w=G[x]||"#6b7385";return`<span class="dst" style="background:${w};color:${Em(w)}" title="${f(x||"")}">${f(d)}</span>`},Ao=d=>{let x=b[d]&&b[d].id;return Zn.st.includes(x)?"\u{1F3E0} ":Sn.st.includes(x)?"\u{1F4BC} ":""},cs=d=>d>10?"d-hi":d>5?"d-md":"d-lo",Tm=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,ia={ref:null,m:new Map};function uh(d){if(ia.ref!==V.alerts){ia.ref=V.alerts,ia.m=new Map;for(let x of V.alerts){if(x.src!=="Rodalies")continue;let w=x.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a)\s+([^.]{4,140})/i);for(let A of x.txt.matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))ia.m.set(A[1],{why:w?w[1].trim().replace(/\s+/g," "):"",txt:x.txt,when:x.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(x.txt)})}}return ia.m.get(String(d))||null}let sa={ref:null,m:new Map};function vd(d){let x=String(d.tr?d.tr.num:d.v&&d.v.num||"");if(!x)return null;if(sa.ref!==V.alerts){sa.ref=V.alerts,sa.m=new Map;for(let A of V.alerts)if(A.src==="Rodalies"&&Tm.test(A.txt))for(let C of A.txt.matchAll(/\b(\d{4,6})\b/g))sa.m.set(C[1],A)}let w=sa.m.get(x);return w?{why:"aviso",txt:w.txt}:d.real&&d.stop==="via"&&d.v.still>=300?{why:"via",min:Math.round(d.v.still/60)}:null}let ra=d=>{try{let x=F;return x?x.num!=null&&String(x.num)===String(d.num)||d.tid&&(x.tid===d.tid||x.vtid===d.tid):!1}catch{return!1}},yd=(d,x)=>{let w=S(d,x.min-1,x.min+240).sort((A,C)=>A.est-C.est).slice(0,6);return w.length?`<small style="margin-top:6px">\u{1F68C} Servicio por carretera (obras): autobuses que sustituyen al tren</small><ol>${w.map(A=>`<li><b>${st(A.est)}</b>${Yn(A.fam)}<span>${Pi(A.dest,A.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},Yn=d=>`<span class="ln" style="--c:${G[d]}">${f(d)}</span>`;function Sd(d,x){return x?d==="X"?'<span class="st late">Cancelado</span>':d>=60?`<span class="st late ${cs(d/60)}">Retraso de ${Math.round(d/60)} min</span>`:'<span class="st ok">Puntual</span>':'<span class="st sch">Seg\xFAn horario \xB7 sin dato en directo</span>'}function qe(){if(!F&&Q<0&&!Y&&!rn&&!je&&!Ri){h.innerHTML="",h._h="",h.style.display="none",h.classList.remove("peek"),vh();return}let d=ue(),x="",w=qt()&&d.live,A=(y,N)=>V.alerts.filter(nt=>[...nt.fams].some(ht=>y.has(ht))||N!=null&&nt.stops.has(N)),C=y=>y.length?`<div class="al">${y.slice(0,4).map(N=>`<p>\u26A0\uFE0F ${Po(N)} ${[...N.fams].sort(P).slice(0,6).map(Yn).join(" ")} ${f(N.txt)} <small>${Lo(N)}</small></p>`).join("")}${y.length>4?`<small>y ${y.length-4} avisos m\xE1s</small>`:""}</div>`:"",L=F&&w?Cn.find(y=>y.real&&(F.vtid?y.v.tid===F.vtid:y.tr===F)):null;if(Ri&&!je&&!rn&&!Y&&!F&&Q<0)x=ls(Ri);else if(je)x=Ii();else if(rn)x=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>Novedades</h3><small>${f(p("#ver").textContent.replace(" \xB7 novedades y fuentes",""))}</small><ul class="chg">${p("#chg").innerHTML||"<li>Versi\xF3n de prueba</li>"}</ul>
        <h3 style="margin-top:14px">Fuentes</h3><ul class="fts">
        <li><b>Renfe Operadora</b> \xB7 horarios (GTFS), posici\xF3n de los trenes y retrasos (GTFS-RT) \xB7 <a href="https://data.renfe.com" target="_blank" rel="noopener">data.renfe.com</a> \xB7 licencia CC BY 4.0</li>
        <li><b>Rodalies de Catalunya</b> (Generalitat) \xB7 salidas con v\xEDa, cancelaciones y avisos \xB7 <a href="https://rodalies.gencat.cat" target="_blank" rel="noopener">rodalies.gencat.cat</a></li>
        <li><b>Adif</b> \xB7 incidencias en la infraestructura de Catalu\xF1a \xB7 <a href="https://www.adif.es/viajeros/estado-de-la-red" target="_blank" rel="noopener">estado de la red</a> \xB7 \xA9 Adif</li>
        <li><b>OpenStreetMap</b> \xB7 trazado de las v\xEDas \xB7 <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">\xA9 colaboradores de OpenStreetMap</a>, licencia ODbL</li>
        </ul><small>Los datos se muestran tal como los publican sus fuentes. Ante cualquier duda, manda lo que diga el operador en la estaci\xF3n.</small></div>`;else if(Y){let y=V.alerts.filter(N=>[...N.fams].some(nt=>Wt.has(nt))||!N.fams.size);x=`<div class="tc" style="--c:#c2410c"><button class="x" data-cx>\xD7</button><h3>Avisos e incidencias</h3><small>${y.length} avisos activos para las l\xEDneas que tienes visibles</small>${y.map(N=>`<div class="al"><p>${Po(N)} ${[...N.fams].sort(P).map(Yn).join(" ")} <small>${Lo(N)}</small></p><p>${f(N.txt)}</p></div>`).join("")||"<p>Sin avisos activos.</p>"}<small>Fuente: avisos oficiales de Rodalies de Catalunya, incidencias en la v\xEDa de Adif (gestor de la infraestructura)${V.alertsTs&&Date.now()/1e3-V.alertsTs<6*3600?" y de Renfe":` \xB7 los avisos GTFS de Renfe no se muestran: Renfe no los actualiza desde el ${V.alertsTs?new Date(V.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(L){let y=L.v,N=L.tr,nt=Qt=>f(b[N.pat.stops[Qt]].n),ht=N?N.pat.stops.length:0,Pt=Ht.get(y.sid),Yt=Pt!=null?f(b[Pt].n):f(y.sid),ae=N&&y.atStop>=0?nt(y.atStop):"",mt=N&&y.next>=0?nt(y.next):Yt,St=N&&y.next>0?nt(y.next-1):"",he=L.broke||vd(L),_e=he?`<b class="stopv">\u26A0\uFE0F ${he.why==="aviso"?"Tren averiado seg\xFAn Rodalies":`Posible aver\xEDa: detenido en la v\xEDa desde hace ${he.min} min`}</b>${N&&St?` \xB7 entre ${St} y <b>${mt}</b>`:""}`:L.stop==="via"&&N?`<b class="stopv">\u23F8 Detenido</b> ${St?`entre ${St} y <b>${mt}</b>`:`antes de <b>${mt}</b>`} desde hace ${Math.max(1,Math.round(y.still/60))} min`:y.pre&&N?y.prevTr?`A\xFAn no ha empezado este viaje. Est\xE1 terminando el tren <b>${f(y.prevTr.num)}</b> hacia <b>${nt(0)}</b>${y.prevDl>=1?` con <b>+${Math.round(y.prevDl)} min</b>`:""}: llega hacia las <b>${st(y.arrO)}</b> y saldr\xEDa hacia las <b>${st(y.depEst)}</b>${y.preDl>=1?` (horario ${st(y.dep0)})`:""}`:`A\xFAn no ha empezado este viaje: va hacia <b>${nt(0)}</b>, de donde sale a las <b>${st(y.dep0+L.dl)}</b>`:y.st==="STOPPED_AT"&&ae?`Parado en <b>${ae}</b>`:ae&&y.next>=0&&y.atStop!==y.next?`Saliendo de <b>${ae}</b> hacia <b>${mt}</b>`:St?`Entre ${St} y <b>${mt}</b>`:`Hacia <b>${mt}</b>`,Ie=V.tu.get(y.tid),dn=Ie&&Ie.next&&N&&y.next>=0&&Ie.next.sid===b[N.pat.stops[y.next]].id&&Ie.next.t?new Date(Ie.next.t*1e3).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"",Ze=[];if(N){let Qt=L.idx>=0?L.idx:0,Ji=y.pre?Math.max(L.dl,y.preDl||0):L.dl,Us=In=>N.t0+N.pat.t[In]+Ji;for(let In=Qt;In<ht;In++)Ze.push(`<li${Ao(N.pat.stops[In])?' class="mine"':""}><b>${st(Us(In===0?1:2*In))}</b><span title="${nt(In)}">${Ao(N.pat.stops[In])}${nt(In)}</span>${Ji>=1?`<em class="dl ${cs(Ji)}">${y.pre?"\u2248":""}+${Math.round(Ji)}</em>`:""}</li>`)}x=`<div class="tc" style="--c:${L.c}"><button class="x" data-cx>\xD7</button><div>${Yn(L.fam)}<b>Tren ${f(N?N.num:y.num)}</b> <span class="lv">\u25CF en directo</span></div>${N?`<h3 class="rt"><span class="o" title="${nt(0)}">${nt(0)}</span><span class="ar">\u2192</span>${Pi(b[N.pat.stops[ht-1]].n,N.fam)}</h3>`:""}
        <p>${_e}${dn?` \xB7 prevista ${dn}`:""}${y.plat&&y.st==="STOPPED_AT"&&ae?` \xB7 <b>v\xEDa ${f(y.plat)}</b>`:""}</p><p>${y.pre&&y.prevTr?y.preDl>=1?`<span class="st late">Saldr\xE1 con unos ${Math.round(y.preDl)} min de retraso (estimado)</span>`:'<span class="st ok">Le da tiempo a salir a su hora (estimado)</span>':Sd(V.delays.get(y.tid),V.delays.has(y.tid))}${(()=>{let Qt=N&&Xn(N.num);return Qt&&Qt.n>=2?`<span class="thist">\u{1F4CA} \xDAltimos ${Qt.n} d\xEDas: ${Qt.late?`lleg\xF3 con 5 min o m\xE1s <b>${Qt.late} de ${Qt.n}</b>`:"<b>siempre puntual</b>"} \xB7 retraso t\xEDpico ${Qt.avg<.5?"0":"+"+Math.round(Qt.avg)} min</span>`:""})()}${(()=>{let Qt=N&&uh(N.num);return Qt?`<span class="why" title="${f(Qt.txt)}">${Qt.why?"Motivo: "+f(Qt.why):"Rodalies ha publicado un aviso de este tren"}</span>`:""})()}</p>
        <small>${y.pre?`Renfe ya le pone el n\xFAmero de su pr\xF3ximo viaje. Posici\xF3n real enviada hace ${Math.round(L.age)} s`:y.est?"Renfe da una posici\xF3n que no encaja con su recorrido: se muestra donde deber\xEDa estar seg\xFAn el horario y su retraso":`Posici\xF3n enviada por Renfe hace ${Math.round(L.age)} s${L.age>120?" \xB7 <b>sin actualizar</b>":""}`}</small>
        ${Ze.length?`${L.dl>=1||y.pre&&y.preDl>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${Ze.join("")}</ol>`:""}${C(A(new Set([L.fam])))}
        ${Io(N?N.num:y.num,"",L.fam)}${N?`<div class="rtb"><button type="button" data-follow>${M===N?"Dejar de seguir":"Seguir este tren"}</button></div>`:""}</div>`}else if(F&&w)x=`<div class="tc" style="--c:#6b7385"><button class="x" data-cx>\xD7</button><h3>Tren ${f(F.num||F.vtid||"")}</h3><p>Renfe no da ahora la posici\xF3n de este tren: puede haber terminado su viaje, no haber salido o no estar circulando.</p></div>`;else if(F){let y=F,N=y.pat,nt=N.stops.length,ht=Re(y),Pt=typeof ht=="number"?ht/60:0,Yt=t.days.indexOf(d.ymd),ae=y.day===Yt-1?1440:0,mt=d.min+ae-y.t0-Pt,St=Is(y,mt),he=Qt=>y.t0+N.t[Qt]+Pt,_e=Qt=>f(b[N.stops[Qt]].n),Ie="Fuera de servicio ahora";St&&(Ie=St.moving?`Circulando hacia <b>${_e(St.next)}</b> \xB7 llega ${st(he(2*St.next))}`:St.at===nt-1?`Ha llegado a <b>${_e(nt-1)}</b>`:`Parado en <b>${_e(St.at)}</b> \xB7 sale ${st(he(2*St.at+1))}`);let dn=St?St.next:0,Ze=[];for(let Qt=dn;Qt<nt;Qt++)Ze.push(`<li${Ao(N.stops[Qt])?' class="mine"':""}><b>${st(he(2*Qt))}</b><span title="${_e(Qt)}">${Ao(N.stops[Qt])}${_e(Qt)}</span>${Pt>=1?`<em class="dl ${cs(Pt)}">+${Math.round(Pt)}</em>`:""}</li>`);x=`<div class="tc" style="--c:${y.c}"><button class="x" data-cx>\xD7</button><div>${Yn(y.fam)}<b>Tren ${f(y.num)}</b> <span class="pv">previsi\xF3n</span></div><h3 class="rt"><span class="o" title="${_e(0)}">${_e(0)}</span><span class="ar">\u2192</span>${Pi(b[y.pat.stops[nt-1]].n,y.fam)}</h3>
        <p>${Ie}</p><p>${Sd(ht,ht!=null)}${(()=>{let Qt=Xn(y.num);return Qt&&Qt.n>=2?`<span class="thist">\u{1F4CA} \xDAltimos ${Qt.n} d\xEDas: ${Qt.late?`lleg\xF3 con 5 min o m\xE1s <b>${Qt.late} de ${Qt.n}</b>`:"<b>siempre puntual</b>"} \xB7 retraso t\xEDpico ${Qt.avg<.5?"0":"+"+Math.round(Qt.avg)} min</span>`:""})()}</p><small>Sale ${st(y.t0+N.t[1])} \xB7 llega ${st(y.t0+N.t[2*nt-2])} (horario)</small>
        ${Pt>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${Ze.join("")}</ol>${Io(y.num,"",y.fam)}<div class="rtb"><button type="button" data-follow>${M===y?"Dejar de seguir":"Seguir este tren"}</button></div></div>`}else{let y=Q,N=t.days.indexOf(d.ymd),nt=[];hi.st!==y&&(hi.st=y,hi.f.clear());let ht=mt=>(!G[mt]||Wt.has(mt))&&(!hi.f.size||hi.f.has(mt));if(N>=0){let mt=(St,he)=>{for(let _e of St){if(!ht(_e.fam))continue;let Ie=_e.pat.stops.indexOf(y);if(Ie<0||Ie===_e.pat.stops.length-1)continue;let dn=Re(_e),Ze=typeof dn=="number"?dn/60:0,Qt=_e.t0+_e.pat.t[2*Ie+1]-he;Qt+Ze<d.min-1||Qt>d.min+360||nt.push({tr:_e,t:Qt,dl:Ze,d:dn,on:V.vp.has(_e.tid),past:d.min>_e.t0+_e.pat.t[1]-he+2})}};mt(Z[N],0),N>0&&mt(Z[N-1],1440)}nt.sort((mt,St)=>mt.t+mt.dl-St.t-St.dl);let Pt=b[y].id,Yt=Wn.get(Pt);w&&V.url&&(!Yt||Date.now()-Yt.at>3e4)&&!Yt?.loading&&(Wn.set(Pt,{...Yt||{},loading:!0,at:Yt?Yt.at:0}),wt(V.url.replace(/\/+$/,""),"/departures.json?stationId="+Pt).then(mt=>{Wn.set(Pt,{at:Date.now(),d:mt}),Q===y&&(h._h="",qe())}).catch(()=>Wn.set(Pt,{at:Date.now(),err:1})));let ae=w&&Yt&&Yt.d&&Array.isArray(Yt.d.trains)?Yt.d.trains:null;if(ae){let mt=new Map([...V.vp.values()].map(he=>[String((rt.get(he.tid)||{}).num||he.num),he])),St=ae.filter(he=>ht((he.line||{}).id||"")).slice(0,40).map(he=>{let _e=(he.departureDateHourSelectedStation||"").slice(11,16),Ie=(he.line||{}).id||"",dn=String(he.commercialNumber||he.technicalNumber||""),Ze=mt.get(dn),Qt=Ze?V.delays.get(Ze.tid):null;return`<li class="go${ra({num:dn,tid:Ze?Ze.tid:""})?" sel":""}" data-gt="${f(dn)}|${Ze?f(Ze.tid):""}"><b>${f(_e)}</b>${G[Ie]?Yn(Ie):`<span class="ln" style="--c:#6b7385">${f(Ie||"?")}</span>`}<span>${Pi((he.destinationStation||{}).name||"",Ie)}${he.trainObservations?` \xB7 <i>${f(he.trainObservations)}</i>`:""}</span>${he.trainCancelled?"<em>cancelado</em>":typeof Qt=="number"&&Qt>=60?`<em class="dl ${cs(Qt/60)}">+${Math.round(Qt/60)}</em>`:""}${he.platformSelectedStation?`<i class="via">v\xEDa ${f(he.platformSelectedStation)}</i>`:""}${Ze?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");x=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${f(b[y].n)}</h3>${xd(y)}${Io("",b[y].id,"")}
          <small style="margin-top:6px">Pr\xF3ximas salidas oficiales de Rodalies \xB7 hora prevista \xB7 <span class="lvk">\u25CF</span> tren circulando</small>
          <ol>${St||"<li><span>Rodalies no anuncia salidas ahora mismo</span></li>"}</ol>${yd(y,d)}${C(A(b[y].fams,y))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}else x=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${f(b[y].n)}</h3>${xd(y)}${Io("",b[y].id,"")}
        <small style="margin-top:6px">${w&&V.url?"Cargando salidas oficiales\u2026 mientras, ":""}Pr\xF3ximas salidas${w?' \xB7 hora prevista con el retraso actual \xB7 <span class="lvk">\u25CF</span> tren circulando':" \xB7 previsi\xF3n seg\xFAn horario (sin tiempo real)"}</small>
        <ol>${nt.slice(0,40).map(mt=>`<li class="go${ra({num:mt.tr.num,tid:mt.tr.tid})?" sel":""}" data-gt="${f(mt.tr.num)}|${f(mt.tr.tid)}"><b>${st(mt.t+mt.dl)}</b>${Yn(mt.tr.fam)}<span>${Pi(b[mt.tr.pat.stops[mt.tr.pat.stops.length-1]].n,mt.tr.fam)}</span>${mt.d==="X"?"<em>cancelado</em>":mt.dl>=1?`<em class="dl ${cs(mt.dl)}">+${Math.round(mt.dl)}</em>`:""}${w?mt.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':mt.past?'<i class="nos" title="deber\xEDa haber salido y Renfe no da su posici\xF3n">sin se\xF1al</i>':'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||"<li><span>No hay salidas en las pr\xF3ximas 6 horas</span></li>"}</ol>${yd(y,d)}${C(A(b[y].fams,y))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}let W=h.scrollTop;if(h._h!==x&&(h.innerHTML=x,h._h=x,h.scrollTop=W),h.style.display="flex",h.classList.remove("min"),vh(),innerWidth<=640){let y=h.querySelector(".tc");if(y&&!y.querySelector(".mn")){let N=document.createElement("button");N.type="button",N.className="mn",N.setAttribute("aria-label","Encoger o ampliar la ficha"),N.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",N.onclick=nt=>{nt.stopPropagation(),h.classList.toggle("peek"),N.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",h.scrollTop=0},y.appendChild(N)}}else h.classList.remove("peek");let k=p("#rc");if(innerWidth<=640&&!k.classList.contains("min")&&!qe.done&&(qe.done=1,p("#rcgrab").click()),innerWidth<=640){let y=p("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(y+8)+"px",h.style.width="calc(100vw - 76px)",h.style.maxHeight=Math.max(140,p("#rc").getBoundingClientRect().top-y-16)+"px"}else if(innerHeight<=500){let y=p("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(y+8)+"px",h.style.width="min(290px, 40vw)",h.style.maxHeight=innerHeight-y-20+"px"}else h.style.top="",h.style.width=je?"390px":"300px",h.style.maxHeight="";let K=h.querySelector("[data-cx]");K&&(K.onclick=y=>{if(y.stopPropagation(),qe.done=0,je||rn||Y||Ri&&!F&&Q<0){je=rn=Y=!1,F||Q>=0||(Ri=""),h._h="",qe(),a();return}Y=!1,rn=!1,je=!1,F=null,Q=-1,M=null,Ct(),qe(),ci=0,a()}),wd(h);{let y=h.querySelector("[data-share]");y&&(y.onclick=()=>{let N=Ri,nt=Cn.filter(ae=>(ae.fam||ae.tr&&ae.tr.fam)===N),ht=nt.filter(ae=>ae.dl>=5).sort((ae,mt)=>mt.dl-ae.dl),Pt=V.alerts.filter(ae=>ae.fams.has(N)),Yt=`${N} a las ${st(ue().min)}: ${nt.length} trenes, ${ht.length} con 5 min o m\xE1s${ht.length?" ("+ht.slice(0,4).map(ae=>`${ae.tr?ae.tr.num:ae.v.num} +${Math.round(ae.dl)}`).join(", ")+")":""}.${Pt.length?" Aviso: "+Pt[0].txt:" Sin avisos."}`;navigator.share?navigator.share({text:Yt}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(Yt),Bn("Copiado: "+Yt.slice(0,60)+"\u2026"))})}{let y=h.querySelector("[data-cols]");y&&(y.onclick=()=>{ei.on=!ei.on,Mm(),h._h="",qe()})}h.querySelectorAll("[data-gs]").forEach(y=>y.onclick=()=>{let N=+y.dataset.gs;je=!1,window.__rodPickStation(N),Object.assign(s,{tx:b[N].w[0],ty:b[N].w[1],dist:Math.min(s.dist,20)}),a()}),h.querySelectorAll("[data-sf]").forEach(y=>y.onclick=N=>{N.stopPropagation();let nt=y.dataset.sf;nt?hi.f.has(nt)?hi.f.delete(nt):hi.f.add(nt):hi.f.clear(),h._h="",qe()}),h.querySelectorAll("[data-gt]").forEach(y=>y.onclick=()=>{let[N,nt]=y.dataset.gt.split("|"),ht=rt.get(nt);Od({num:N,tid:V.vp.has(nt)?nt:"",tr:ht||null})}),h.querySelectorAll("[data-sethome]").forEach(y=>y.onclick=()=>yh(Q,y.dataset.sethome));let lt=h.querySelector("[data-follow]");lt&&(lt.onclick=()=>{M=M===F?null:F,M?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(h.classList.add("peek"),h.scrollTop=0,p("#rc").classList.contains("min")||p("#rcgrab").click())):h.classList.remove("peek"),h._h="",qe(),a()})}window.__rodCard=qe;try{let d=localStorage.getItem("rod_inf");(d==="mini"||d==null)&&p("#inf").classList.add("mini")}catch{}p("#inft").onclick=()=>{let d=p("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",d?"mini":"")}catch{}(F||Q>=0||Y||rn)&&(h._h="",qe())},p("#ver").onclick=()=>{rn=!0,je=!1,Y=!1,h._h="",qe()};let Co={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},Am=["vacio","lleno","petado","parado","calor","abordo"],Cm=["gente","retraso","cancel","ascensor","via"],Rm={vacio:"Va con sitio",lleno:"Va lleno",petado:"Muy lleno, cuesta subir",parado:"Parado sin moverse",calor:"Sin aire acondicionado",abordo:"Incidencia a bordo",gente:"Mucha gente esperando",retraso:"Anuncian retraso por megafon\xEDa",cancel:"Anuncian tren cancelado",ascensor:"Ascensor o escalera averiados",via:"Incidencia en la estaci\xF3n"},Ro=d=>(V.tipos||Rm)[d]||d,dh=(d,x)=>(V.rep||[]).filter(w=>d&&w.num===String(d)&&!w.sid||x&&w.sid===String(x)&&!w.num||d&&x&&w.num===String(d)&&w.sid===String(x)),Md=d=>{let x=Math.round((Date.now()+(V.repSkew||0)-d.at)/6e4);return x<1?"ahora":`hace ${x} min`},aa=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function Io(d,x,w){if(!V.url||!V.repOk)return"";let A=dh(d,x),C=d?Am:Cm;return`<div class="crowd"><small>\u{1F465} Lo que dicen los viajeros${A.length?"":" \xB7 nadie ha avisado todav\xEDa"}</small>${A.map(L=>`<p><span>${Co[L.kind]||"\u2022"} <b>${f(Ro(L.kind))}</b> <small>${L.up>1?L.up+" viajeros \xB7 ":""}${Md(L)}</small></span>${aa.has(L.id)?"<small>\u2713</small>":`<button type="button" data-rv="${L.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${L.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${d?"\xBFVas en este tren? Avisa a los dem\xE1s":"\xBFEst\xE1s en la estaci\xF3n? Avisa a los dem\xE1s"}</summary><div class="ckb">${C.map(L=>`<button type="button" data-rk="${L}" data-rn="${f(d||"")}" data-rs="${f(x||"")}" data-rl="${f(w||"")}">${Co[L]} ${f(Ro(L))}</button>`).join("")}</div><small>An\xF3nimo \xB7 se borra solo en 90 min \xB7 sin texto libre</small></details></div>`}async function bd(d,x){try{let A=await(await fetch(V.url.replace(/\/+$/,"")+x,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})).json();if(!A.ok){Bn(A.err||"No se ha podido enviar");return}if(A.id){aa.add(A.id);try{localStorage.setItem("rod_votes",JSON.stringify([...aa].slice(-300)))}catch{}}Bn(x==="/vote"?"Gracias, voto guardado":A.n>1?`Gracias \xB7 ya sois ${A.n} avisando de lo mismo`:"Gracias, aviso enviado");let C=await wt(V.url.replace(/\/+$/,""),"/reports.json");C&&C.items&&(V.rep=C.items),h._h="",qe(),on(!0)}catch{Bn("Sin conexi\xF3n con el puente")}}function wd(d){d.querySelectorAll("[data-rk]").forEach(x=>x.onclick=w=>{w.stopPropagation(),x.disabled=!0,bd({kind:x.dataset.rk,num:x.dataset.rn,sid:x.dataset.rs,line:x.dataset.rl},"/report")}),d.querySelectorAll("[data-rv]").forEach(x=>x.onclick=w=>{w.stopPropagation();let[A,C]=x.dataset.rv.split(":");aa.add(+A);try{localStorage.setItem("rod_votes",JSON.stringify([...aa].slice(-300)))}catch{}bd({id:+A,v:+C},"/vote")})}let Ed=0;function Bn(d){let x=p("#toast");x||(x=document.createElement("div"),x.id="toast",document.body.appendChild(x)),x.textContent=d,x.className="on",clearTimeout(Ed),Ed=setTimeout(()=>{x.className=""},2600)}function Po(d){return d.src?`<b class="asrc ${d.src==="Adif"?"adif":""}">${d.src==="Adif"?"Adif \xB7 v\xEDa":f(d.src)}</b>`:""}function Lo(d){if(!d.when)return"";let[x,w]=d.when.split("T"),A=gt(new Date),C=A.ymd.slice(0,4)+"-"+A.ymd.slice(4,6)+"-"+A.ymd.slice(6,8);if(x===C&&w){let L=Math.round(A.min-(+w.slice(0,2)*60+ +w.slice(3,5)));return L<1?"ahora":L<60?`hace ${L} min`:`hoy a las ${w.slice(0,5)}`}return`${x.slice(8,10)}/${x.slice(5,7)}${w?" "+w.slice(0,5):""}`}function fh(){let d=p("#alr");if(!d)return;let x=V.alerts.filter(w=>[...w.fams].some(A=>Wt.has(A))).length;d.hidden=!x,d.textContent=`\u26A0\uFE0F ${x} aviso${x===1?"":"s"}`}{let d=p("#alrslot");d&&d.appendChild(p("#alr"))}p("#alr").onclick=()=>{rn=!1,je=!1,Y=!0,qe()},p("#wcopy").onclick=async()=>{let d=p("#wcode").textContent;try{await navigator.clipboard.writeText(d),p("#wcopy").textContent="Copiado \u2713"}catch{let w=document.createRange();w.selectNodeContents(p("#wcode"));let A=getSelection();A.removeAllRanges(),A.addRange(w),p("#wcopy").textContent="Selecciona y copia"}setTimeout(()=>p("#wcopy").textContent="Copiar c\xF3digo",2500)};let Im=Ht.get("71801");function Pm(d,x){let w=b[d].id,A=Wn.get(w);!(qt()&&V.url)||A&&(A.loading||Date.now()-A.at<3e4)||(Wn.set(w,{...A||{},loading:!0,at:A?A.at:0}),wt(V.url.replace(/\/+$/,""),"/departures.json?stationId="+w).then(C=>{Wn.set(w,{at:Date.now(),d:C}),x&&x()}).catch(()=>Wn.set(w,{at:Date.now(),err:1})))}let Td=d=>+d.slice(0,2)*60+ +d.slice(3,5),oa={k:-2,m:null};function Lm(d){let x=t.days.indexOf(ue().ymd);if(oa.k!==x){oa.k=x,oa.m=new Map;for(let w of Z[x]||[])oa.m.set(String(w.num),w)}return oa.m.get(String(d))||null}let Ls={at:0,m:new Map};function ph(d){if(Date.now()-Ls.at>6e4){Ls.at=Date.now(),Ls.m=new Map;let w=ue(),A=t.days.indexOf(w.ymd);if(A>=0)for(let C of Z[A]){let L=w.min-C.t0;if(L<C.pat.t[1]+3||L>C.pat.t[C.pat.t.length-2]-3)continue;let W=Ls.m.get(C.fam)||[0,0];W[0]++,V.vp.has(C.tid)&&W[1]++,Ls.m.set(C.fam,W)}}let x=Ls.m.get(d);return x&&x[0]>=3?x[1]/x[0]:1}function mh(d,x){let w=ue(),A=qt()&&w.live&&!x,C=Wn.get(b[d].id),L=[],W=new Map([...V.vp.values()].map($=>[String((rt.get($.tid)||{}).num||$.num),$]));if(A&&C&&C.d&&Array.isArray(C.d.trains))for(let $ of C.d.trains){let K=($.departureDateHourSelectedStation||"").slice(11,16);if(!K)continue;let lt=String($.commercialNumber||$.technicalNumber||""),y=W.get(lt),N=y?V.delays.get(y.tid):null,nt=Math.max(typeof N=="number"?Math.max(0,N/60):0,y&&y.pre&&y.preDl||0),ht=Td(K);ht<w.min-720&&(ht+=1440),L.push({sm:ht,est:ht+nt,dl:nt,fam:($.line||{}).id||"",dest:($.destinationStation||{}).name||"",destId:($.destinationStation||{}).id||"",plat:$.platformSelectedStation||"",cancel:!!$.trainCancelled,obs:$.trainObservations||"",live:!!y,num:lt,tid:y?y.tid:"",tr:y&&rt.get(y.tid)||Lm(lt),src:"oficial"})}else{let $=t.days.indexOf(w.ymd);if($<0)return L;let K=(lt,y)=>{for(let N of lt){let nt=N.pat.stops.indexOf(d);if(nt<0||nt===N.pat.stops.length-1)continue;let ht=Re(N),Pt=typeof ht=="number"?Math.max(0,ht/60):0,Yt=N.t0+N.pat.t[2*nt+1]-y;if(Yt+Pt<w.min-1||Yt>w.min+360)continue;let ae=N.pat.stops[N.pat.stops.length-1];L.push({sm:Yt,est:Yt+Pt,dl:Pt,fam:N.fam,dest:b[ae].n,destId:b[ae].id,plat:"",cancel:ht==="X",obs:"",live:V.vp.has(N.tid),num:N.num,tid:N.tid,tr:N,src:"horario"})}};K(Z[$],0),$>0&&K(Z[$-1],1440),$+1<t.days.length&&w.min>1080&&K(Z[$+1],-1440)}if(A){let $=new Set(L.map(y=>y.num)),K=t.days.indexOf(w.ymd),lt=(y,N)=>{for(let nt of y||[]){if($.has(String(nt.num)))continue;let ht=nt.pat.stops.indexOf(d);if(ht<0||ht===nt.pat.stops.length-1)continue;let Pt=nt.t0+nt.pat.t[2*ht+1]-N;if(Pt<w.min-45||Pt>w.min+1||!V.vp.get(nt.tid))continue;let ae=V.delays.get(nt.tid),mt=typeof ae=="number"?Math.max(0,ae/60):0,St=nt.pat.stops[nt.pat.stops.length-1];L.push({sm:Pt,est:Pt+mt,dl:mt,fam:nt.fam,dest:b[St].n,destId:b[St].id,plat:"",cancel:!1,obs:"",live:!0,num:nt.num,tid:nt.tid,tr:nt,src:"horario"})}};K>=0&&(lt(Z[K],0),K>0&&lt(Z[K-1],1440));for(let y of L){let N=y.tid&&V.vp.get(y.tid),nt=y.tr?y.tr.pat.stops.indexOf(d):-1;y.passed=!!(N&&nt>=0&&!N.pre&&N.next!=null&&N.next>=0&&N.next>nt&&N.atStop!==nt),!y.passed&&y.live&&y.est<w.min&&(y.est=w.min,y.late=!0),y.passed&&(y.gone=!0)}}let k=L.filter($=>$.gone?w.min-$.est<20:$.est>=w.min-.5).sort(($,K)=>$.est-K.est);{let $=k.filter(K=>K.gone);if($.length>2){let K=new Set($.slice(0,$.length-2));k=k.filter(lt=>!K.has(lt))}}if(!k.filter($=>!$.gone).length&&L.length&&L[0].src==="oficial"&&!x)return mh(d,!0);for(let $ of k){let K=$.num&&uh($.num);K&&K.cx&&($.cancel=!0,$.cxWhy=K.txt)}if(qt()&&w.live){let $=t.days.indexOf(w.ymd);for(let K of k){if(K.live||K.cancel||!K.tr)continue;let lt=K.tr.day===$-1?1440:K.tr.day===$+1?-1440:0,y=K.tr.t0+K.tr.pat.t[1]-lt+(K.dl||0);K.ghost=w.min>y+3&&ph(K.fam)>=.7}}if(x||(k=k.concat(S(d,w.min-.5,w.min+360)).sort(($,K)=>$.est-K.est)),k.some($=>$.src==="oficial")){let $=Math.max(...k.map(lt=>lt.sm)),K=new Set(k.map(lt=>lt.num));k=k.concat(mh(d,!0).filter(lt=>lt.sm>$&&!K.has(String(lt.num))))}return k}let Ad=(d,x,w,A)=>{let C={key:d,ico:x,name:w,st:[],i:0,walk:10,open:!1};try{let L=JSON.parse(localStorage.getItem("rod_"+d)||"null");L&&Object.assign(C,L)}catch{}return!C.st.length&&A&&(C.st=A),C},Zn=Ad("home","\u{1F3E0}","Casa",["79410","79412"]),Sn=Ad("work","\u{1F4BC}","Trabajo",null),ge={key:"near",ico:"\u{1F4CD}",name:"Cerca de ti",st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},Do=[ge,Zn,Sn];Zn.open=!1,Sn.open=!1;function Dm(d,x){let w=xt(d,x),A=xt(d,x+.009);return 1/Math.hypot(A[0]-w[0],A[1]-w[1])}function gh(d){if(!navigator.geolocation){ge.err="Este navegador no da la ubicaci\xF3n",on(!0);return}navigator.geolocation.getCurrentPosition(x=>{let{longitude:w,latitude:A}=x.coords,C=xt(w,A),L=Dm(w,A),W=b.map((lt,y)=>[y,Math.hypot(lt.w[0]-C[0],lt.w[1]-C[1])*L]).filter(([lt])=>b[lt].fams.size).sort((lt,y)=>lt[1]-y[1]),k=W.filter(([,lt],y)=>y===0||lt<Math.max(2.5,W[0][1]*1.6)).slice(0,3),$=ge.st[0]!==b[k[0][0]].id;ge.w=C,ge.k=L,ge.st=k.map(([lt])=>b[lt].id),ge.dist=Object.fromEntries(k.map(([lt,y])=>[b[lt].id,y])),ge.fix=Date.now(),ge.err="",$&&(ge.i=0);let K=[Zn,Sn].find(lt=>lt.st.includes(ge.st[0])&&ge.dist[ge.st[0]]<1.5);on(!0)},x=>{ge.err=x.code===1?"Sin permiso de ubicaci\xF3n":"No se ha podido obtener la ubicaci\xF3n",d&&(Zn.open=!!Zn.st.length),on(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let Nm=d=>Math.max(1,Math.round(d*1.3/.08));setTimeout(()=>gh(!0),400),setInterval(()=>{document.hidden||gh(!1)},12e4);let Ds=d=>{try{localStorage.setItem("rod_"+d.key,JSON.stringify({st:d.st,i:d.i,walk:d.walk,open:d.open,hide:d.hide||""}))}catch{}},_h=d=>d.st.length?Ht.get(d.st[d.i]||d.st[0]):null;function Um(d,x,w,A){if(A&&x.bus)return x.bstops.slice(1).some(W=>A.has(W))?"to":"out";if(A&&x.tr){let W=x.tr.pat.stops,k=W.indexOf(d);if(k>=0&&W.slice(k+1).some($=>A.has($)))return"to"}if(A&&x.tr)return"out";let C=Ht.get(x.destId)??b.findIndex(W=>W.n===x.dest);if(C<0||C==null||w==null)return"otros";let L=W=>Math.hypot(b[W].w[0]-b[w].w[0],b[W].w[1]-b[w].w[1]);return L(C)<L(d)?"to":"out"}let No=d=>d<1?"ahora":d<60?Math.round(d)+" min":Math.floor(d/60)+" h "+String(Math.round(d%60)).padStart(2,"0"),Cd=0,Fm=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i;function Om(d,x,w){let A=_h(d);if(d===ge){if(A==null)return`<div class="hplace"><button type="button" class="hhead hnew" data-hloc><span class="hico">\u{1F4CD}</span><span class="htit"><b>Cerca de ti</b><small>${ge.err?f(ge.err)+" \xB7 toca para reintentar":"Buscando tu ubicaci\xF3n\u2026"}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Zn,Sn].find(ie=>ie.st.includes(ge.st[0])&&ge.dist[ge.st[0]]<1.5))return"";d.walk=Nm(ge.dist[d.st[d.i]]||0)}if(A==null){let yt=ge.st.length?Ht.get(ge.st[0]):null,ie=d===Sn?Zn:Sn,Ve=yt!=null&&!ie.st.includes(ge.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${d.ico}</span><span class="htit"><b>${d.name}</b><small>${Ve?`Est\xE1s en <b>${f(b[yt].n)}</b>`:"Elige tu estaci\xF3n"}</small></span>${Ve?`<button type="button" class="hpick" data-hnear="${d.key}">Usar esta</button>`:""}<button type="button" class="hpick alt" data-hset="${d.key}">${Ve?"Otra\u2026":"Elegir"}</button></div></div>`}Pm(A,()=>on(!0));let C=d===ge?null:d===Zn?Sn:Zn,L=C?_h(C):null,W=L!=null&&L!==A?L:Im,k=L!=null&&L!==A?C===Sn?"el trabajo":"casa":"Barcelona",$=b[A].fams,K=new Set([...$].filter(yt=>Wt.has(yt))),lt=K.size<$.size,y=!1;K.size||(K=new Set($),lt=!1,y=!0);let N=ge.w?Math.hypot(b[A].w[0]-ge.w[0],b[A].w[1]-ge.w[1])*ge.k:null,nt=d===ge||N!=null&&N>3&&Date.now()-ge.fix<15*6e4,ht=mh(A).filter(yt=>!G[yt.fam]||Wt.has(yt.fam)||y),Pt=nt?0:d.walk,Yt=V.alerts.filter(yt=>[...yt.fams].some(ie=>K.has(ie))||yt.stops&&yt.stops.has(A)),ae=Yt.some(yt=>Fm.test(yt.txt)),mt={to:[],out:[],otros:[],all:ht},St=k!=="Barcelona"?new Set(C.st.map(yt=>Ht.get(yt)).filter(yt=>yt!=null)):null;ht.forEach(yt=>mt[Um(A,yt,W,St)].push(yt));let he=yt=>{if(yt==="all")return"Pr\xF3ximas salidas \xB7 todas las direcciones";let ie=Je=>(Je.find(di=>di.fam)||{}).fam;if(yt==="to")return"Hacia "+Pi(k==="Barcelona"?"Barcelona":b[W].n,ie(mt.to)||[...K][0])+(k!=="Barcelona"?` <small>${k}</small>`:"");let Ve=[];for(let Je of mt[yt])Ve.some(di=>di[0]===Je.dest)||Ve.push([Je.dest,Je.fam]);return Ve.length?"Hacia "+Ve.slice(0,2).map(([Je,di])=>Pi(Je,di)).join(" "):"Otros"},_e=yt=>{let ie=mt[yt].find(Mn=>!Mn.cancel&&!Mn.gone&&Mn.est-x.min>=Pt);if(!ie){let Mn=mt[yt].find(Xm=>!Xm.cancel);return Mn&&!nt?{cls:"v-no",big:"No llegas",small:`El pr\xF3ximo (${st(Mn.est)}) sale en ${No(Mn.est-x.min)}: no da tiempo a pie`}:{cls:"v-no",big:"Sin trenes",small:"No hay salidas pr\xF3ximas en este sentido"}}let Ve=ie.est-x.min-Pt,Je=nt?"v-info":Ve<1.5?"v-bad":Ve<5?"v-warn":"v-ok",di=ie.ghost?mt[yt].find(Mn=>!Mn.cancel&&!Mn.ghost&&Mn.live&&Mn.est>ie.est):null;return{cls:Je,ghost:!!ie.ghost,big:nt?Ve<1?"Sale ahora":"Sale en "+No(Ve):Ve<1.5?"\xA1Sal ya!":"Sal en "+No(Ve),warn:ie.ghost?`\u26A0\uFE0F Sin se\xF1al de Renfe: puede no pasar${di?` \xB7 el siguiente en marcha sale a las ${st(di.est)}`:""}`:ae?"\u26A0\uFE0F Servicio afectado por una incidencia":"",small:`${ie.bus?"\u{1F68C} autob\xFAs \xB7 ":""}${st(ie.est)} \xB7 ${ie.fam} a ${ie.dest}${ie.plat?" \xB7 v\xEDa "+ie.plat:""}${ie.dl>=1?` \xB7 +${Math.round(ie.dl)} min`:""}${ie.arr!=null?` \xB7 llegas a las ${st(ie.arr)}`:""}`,x:ie}},Ie=St||new Set([W]),dn=yt=>{let ie=yt.tr;if(!ie)return null;let Ve=ie.pat.stops,Je=Ve.indexOf(A);if(Je<0)return null;let di=-1;for(let Mn=Je+1;Mn<Ve.length;Mn++)if(Ie.has(Ve[Mn])){di=Mn;break}return di<0?null:yt.est+(ie.pat.t[2*di]-ie.pat.t[2*Je+1])};mt.to.forEach(yt=>{yt.arr=dn(yt)});let Ze=mt.out.length?"out":"otros",Qt=_e("to"),Ji=_e(Ze);!nt&&d!==ge&&Qt.x&&(Hm(d,Qt.x,b[A].n,Pt),useLive=qt()&&x.live);let Us=K.size===1,In=yt=>{let ie=yt.est-x.min;return nt?yt.cancel?"cx":ie<0?"u-miss":"u-info":yt.cancel?"cx":ie<Pt?"u-miss":ie<Pt+1.5?"u-now":ie<Pt+5?"u-soon":"u-ok"},Gm=yt=>{if(yt.gone)return`<li class="hr u-gone${yt.live?" on":""}${ra(yt)?" sel":""} go" data-dk="${w.push(yt)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${st(yt.est)}</b><small>sali\xF3 hace ${Math.max(1,Math.round(x.min-yt.est))} min</small></span><span class="hrd">${Pi((Us?"":yt.fam+" \xB7 ")+yt.dest,yt.fam)}<small class="hro">tren ${f(yt.num)}</small></span><span class="hrm">${yt.dl>=1?`<em class="dl ${cs(yt.dl)}">+${Math.round(yt.dl)}</em>`:""}</span></li>`;let ie=!yt.cancel&&yt.est-x.min<Pt,Ve=dh(yt.num,"");return`<li class="hr ${In(yt)}${yt.live?" on":""}${yt.ghost?" gh":""}${ra(yt)?" sel":""} go" style="--lc:${G[yt.fam]||"#6b7385"}" data-dk="${w.push(yt)-1}" title="${yt.cancel?"Cancelado":ie?"No llegas a pie":"Ver este tren en el mapa"}"><span class="hrt"><b>${yt.cancel?"\u2715":ie?st(yt.est):No(yt.est-x.min)}</b><small>${yt.cancel?"cancelado":yt.late?"a\xFAn no ha salido":ie?"no llegas":yt.ghost?'<i class="ghs" title="Deber\xEDa estar circulando y Renfe no da su posici\xF3n">sin se\xF1al</i>':st(yt.est)}</small></span><span class="hrd">${yt.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Pi((Us?"":yt.fam+" \xB7 ")+yt.dest,yt.fam)}${Ve.length?`<i class="cr" title="${f(Ve.map(Je=>Ro(Je.kind)).join(" \xB7 "))}">${Ve.slice(0,2).map(Je=>Co[Je.kind]).join("")}</i>`:""}${yt.arr!=null?`<small class="hro">llegas a las ${st(yt.arr)}${(()=>{let Je=yt.num&&Xn(yt.num);return Je&&Je.n>=3&&Je.late/Je.n>=.5?` \xB7 <b class="slate">suele ir tarde (${Je.late}/${Je.n})</b>`:""})()}</small>`:""}${yt.obs?`<small class="hro">${f(yt.obs)}</small>`:""}</span><span class="hrm">${!yt.cancel&&yt.dl>=1?`<em class="dl ${cs(yt.dl)}">+${Math.round(yt.dl)}</em>`:""}${yt.plat?`<i class="via">v\xEDa ${f(yt.plat)}</i>`:""}</span></li>`},ca=(yt,ie,Ve)=>`<div class="hcol"><div class="hdir">${he(yt)}${Ve?`<button type="button" class="hhide" data-hhide="${d.key}:${Ve}" title="Ocultar esta direcci\xF3n">\u2715</button>`:""}</div><div class="hv ${ie.cls}${ie.ghost?" gh":""}${ie.x?" go":""}"${ie.x?` data-dk="${w.push(ie.x)-1}"`:""}><b>${ie.big}</b><small>${f(ie.small)}</small>${ie.warn?`<span class="hvw">${f(ie.warn)}</span>`:""}</div><ol>${mt[yt].slice(0,(d.more?yt==="all"||d.hide?20:10:yt==="all"?7:d.hide?8:4)+mt[yt].filter(Je=>Je.gone).length).map(Gm).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(d===ge){let yt=_e("all");var Wm=yt.x?`${yt.big} \xB7 <b>${st(yt.x.est)}</b> ${f(yt.x.fam)} a ${f(yt.x.dest)}${yt.x.plat?" \xB7 v\xEDa "+f(yt.x.plat):""}`:yt.big}let $m=d===ge?Wm:Qt.x?`${Qt.big} \xB7 <b>${st(Qt.x.est)}</b>${Qt.x.arr!=null?` \u2192 llegas a las <b>${st(Qt.x.arr)}</b>`:""} hacia ${f(k)}${Qt.x.plat?" \xB7 v\xEDa "+f(Qt.x.plat):""}`:"Sin trenes hacia "+f(k);return`<div class="hplace ${d.open?"open":""}"><button type="button" class="hhead" data-ht="${d.key}"><span class="hico">${d.ico}</span><span class="htit"><b>${f(b[A].n)}</b><small class="c${ae?"bad":Qt.cls.slice(2)}">${$m}</small></span><span class="hchev">\u25BE</span></button>`+(d.open?`
      <div class="hbody">
        ${d.st.length>1?`<div class="hst">${d.st.map((yt,ie)=>{let Ve=Ht.get(yt);return Ve==null?"":`<button type="button" data-hs="${d.key}:${ie}" class="${ie===d.i?"on":""}">${f(b[Ve].n)}</button>`}).join("")}</div>`:""}
        ${d===ge?`<div class="hwalk">\u{1F4CD} A ${(()=>{let yt=ge.dist[d.st[d.i]]||0;return yt<1?Math.round(yt*100)*10+" m":yt.toFixed(1).replace(".",",")+" km"})()} \xB7 unos <b>${d.walk} min</b> a pie</div>`:""}
        ${nt&&d!==ge?`<div class="hwalk away">\u{1F4CD} Est\xE1s a ${N<10?N.toFixed(1).replace(".",","):Math.round(N)} km: horas de salida del tren, sin contar el camino</div>`:""}<div class="hwalk"${nt?" hidden":""}>\u{1F6B6} Tardo <button type="button" data-hw="${d.key}:-1">\u2212</button><b>${Pt} min</b><button type="button" data-hw="${d.key}:1">+</button> a pie hasta la estaci\xF3n</div>
        ${lt?`<div class="hflt">Solo ${[...K].sort(P).map(Yn).join(" ")} \xB7 filtro de l\xEDneas activo</div>`:y?`<div class="hflt">El filtro (${[...Wt].sort(P).slice(0,3).map(Yn).join(" ")}) no pasa por aqu\xED: se ven todas tus l\xEDneas</div>`:""}
        ${Yt.length?`<div class="hal ${ae?"bad":""}">\u26A0\uFE0F ${Po(Yt[0])} ${f(Yt[0].txt)} <small>${Lo(Yt[0])}</small>${Yt.length>1?` <a data-hal>+${Yt.length-1} avisos</a>`:""}</div>`:`<div class="hok">\u2713 Sin avisos para ${[...K].sort(P).join(", ")}</div>`}
        ${(()=>{let yt=d.st.flatMap(ie=>dh("",ie));return yt.length?`<div class="hcr">${yt.slice(0,3).map(ie=>`${Co[ie.kind]} <b>${f(Ro(ie.kind))}</b> <small>${ie.up>1?ie.up+" viajeros \xB7 ":""}${Md(ie)}</small>`).join("<br>")}</div>`:""})()}
        ${d===ge?`<div class="hcols one">${ca("all",_e("all"))}</div>`:d.hide==="out"?`<div class="hcols one">${ca("to",Qt)}</div><a class="hshow" data-hshow="${d.key}">\u21BA Mostrar la otra direcci\xF3n</a>`:d.hide==="to"?`<div class="hcols one">${ca(Ze,Ji)}</div><a class="hshow" data-hshow="${d.key}">\u21BA Mostrar la otra direcci\xF3n</a>`:`<div class="hcols">${ca("to",Qt,"to")}${ca(Ze,Ji,"out")}</div>`}
        ${ht.length>(d===ge?7:8)?`<button type="button" class="hmore" data-hmore="${d.key}">${d.more?"\u25B4 Menos trenes":"\u25BE M\xE1s trenes \xB7 pr\xF3ximas horas"}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${useLive?Wn.get(b[A].id)?.d?"Salidas oficiales de Rodalies en directo":"Horario + retrasos mientras cargan las salidas oficiales":"Previsi\xF3n seg\xFAn horario (sin tiempo real)"} \xB7 \u25CF = tren circulando">${useLive?Wn.get(b[A].id)?.d?"\u25CF oficial en directo":"\u25CF horario + retrasos":"seg\xFAn horario"}</span><a data-hmap="${A}">\u{1F5FA}\uFE0F mapa</a>${d===ge?"<a data-hloc>\u{1F4CD} actualizar</a>":`<a data-hset="${d.key}">\u270E cambiar</a>`}${d===Sn?'<a data-hdel="work">\u2715 quitar</a>':""}</div>
      </div>`:"")+"</div>"}let gi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},Rd=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Id=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,la=()=>{let d=[...Zn.st,...Sn.st],x=new Set;return d.forEach(w=>{let A=Ht.get(w);A!=null&&b[A].fams.forEach(C=>x.add(C))}),{stations:d,lines:[...x].sort(P)}},Bm=d=>Uint8Array.from(atob(d.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((d.length+3)%4)),x=>x.charCodeAt(0));async function Pd(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function Ld(d){let w=await(await fetch(V.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:d.toJSON(),...la()})})).json();if(!w.ok)throw new Error(w.err||"error")}let Rn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function zm(){let{lines:d,stations:x}=la(),w=new Set(d),A=new Set(x.map(W=>Ht.get(W))),C=V.alerts.filter(W=>[...W.fams].some(k=>w.has(k))||[...W.stops||[]].some(k=>A.has(k)));if(!Rn.seen){try{Rn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Rn.seen=new Set}if(!Rn.seen.size){C.forEach(W=>Rn.seen.add(W.id+"|"+W.txt.length)),Dd();return}}let L=C.filter(W=>!Rn.seen.has(W.id+"|"+W.txt.length));if(L.length&&(L.forEach(W=>Rn.seen.add(W.id+"|"+W.txt.length)),Dd(),!(!Rn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let W of L.slice(0,3)){let k=(W.src==="Adif"?"Adif \xB7 v\xEDa":"Rodalies")+(W.fams.size?" \xB7 "+[...W.fams].sort(P).slice(0,4).join(" "):""),$={body:W.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+W.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(K=>K?K.showNotification(k,$):new Notification(k,$)).catch(()=>{try{new Notification(k,$)}catch{}})}}function Dd(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Rn.seen].slice(-400)))}catch{}}async function km(){if(Rn.on)Rn.on=!1,Bn("Avisos desactivados");else{if(!("Notification"in window)){Bn(Rd&&!Id()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio y activa los avisos desde la app":"Este navegador no permite avisos");return}if(await Notification.requestPermission()!=="granted"){Bn("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}Rn.on=!0,Bn("Listo: te aviso de incidencias en "+la().lines.join(", ")+" mientras la app est\xE9 abierta")}try{localStorage.setItem("rod_ln",Rn.on?"1":"")}catch{}on(!0)}async function Vm(){if(!V.repOk)return km();if(!gi.busy){gi.busy=!0;try{let d=await Pd();if(!d){Bn(Rd&&!Id()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio, abre la app desde ah\xED y activa los avisos":"Este navegador no permite avisos (hace falta abrir la web publicada, no el archivo)");return}if(await navigator.serviceWorker.ready,gi.on){let x=await d.pushManager.getSubscription();x&&(fetch(V.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:x.endpoint})}).catch(()=>{}),await x.unsubscribe().catch(()=>{})),gi.on=!1,Bn("Avisos desactivados")}else{if(!V.url){Bn("Hace falta el puente en directo");return}if(await Notification.requestPermission()!=="granted"){Bn("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}let w=(await wt(V.url.replace(/\/+$/,""),"/push/key")).key,A=await d.pushManager.getSubscription()||await d.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Bm(w)});await Ld(A),gi.on=!0,Bn("Listo: te avisaremos de incidencias en "+la().lines.join(", "))}try{localStorage.setItem("rod_push",gi.on?"1":"")}catch{}}catch(d){Bn("No se han podido activar los avisos: "+(d.message||d))}finally{gi.busy=!1,on(!0)}}}async function Nd(){if(gi.on)try{let d=await Pd(),x=d&&await d.pushManager.getSubscription();x&&await Ld(x)}catch{}}let xh=!1,Ud="";function vh(){let d=F?"t"+(F.tid||F.vtid):Q>=0?"s"+Q:Y?"a":rn?"n":"";d!==Ud&&(xh=!1,Ud=d);let x=innerWidth<=640&&!!d&&!xh,w=p("#inf");w.classList.contains("compact")!==x&&(w.classList.toggle("compact",x),requestAnimationFrame(()=>{if(h.style.display!=="none"){let A=w.getBoundingClientRect().bottom;h.style.top=Math.round(A+8)+"px",h.style.maxHeight=Math.max(140,p("#rc").getBoundingClientRect().top-A-16)+"px"}}))}let Fd=new Set;function Hm(d,x,w,A){if(!(Rn.on||gi.on)||!("Notification"in window)||Notification.permission!=="granted")return;let C=ue(),L=x.sm-C.min-A;if(!C.live||x.dl<10||L>40||Fd.has(x.num+"|"+x.sm))return;Fd.add(x.num+"|"+x.sm);let W=`${d.ico} Tu tren de las ${st(x.sm)} va con +${Math.round(x.dl)} min`,k=`${x.fam} a ${x.dest} desde ${w}: saldr\xE1 hacia las ${st(x.est)}. Puedes salir ${Math.round(x.dl)} min m\xE1s tarde.`;(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then($=>$?$.showNotification(W,{body:k,tag:"rd-"+x.num,icon:"icons/icon-192.png"}):new Notification(W,{body:k})).catch(()=>{try{new Notification(W,{body:k})}catch{}})}function on(d){let x=p("#home");if(!x)return;let w=performance.now();if(!d&&w-Cd<4e3)return;Cd=w;let A=ue(),C=[],L=la(),W=y=>{let N=_h(y);return N==null||!ge.w?1:Math.hypot(b[N].w[0]-ge.w[0],b[N].w[1]-ge.w[1])},k=[ge,...[Zn,Sn].sort((y,N)=>W(y)-W(N))],$=k.map(y=>Om(y,A,C)).join("")+(Do.some(y=>y.open)&&L.lines.length,"");if(x.className=Do.some(y=>y.open)?"open":"",x._h===$)return;x._h=$,x.innerHTML=$;{let y=[...x.children].find(N=>N.classList.contains("hplace")&&!N.querySelector(".hnew"));y&&y.classList.add("lead")}let K=y=>y==="work"?Sn:y==="near"?ge:Zn;x.querySelectorAll("[data-hloc]").forEach(y=>y.onclick=()=>{ge.err="",gh(!0)}),x.querySelectorAll("[data-ht]").forEach(y=>y.onclick=()=>{if(p("#inf").classList.contains("compact")){xh=!0,vh();return}let N=K(y.dataset.ht);N.open=!N.open,Ds(N),on(!0),(F||Q>=0||Y||rn)&&(h._h="",qe())}),x.querySelectorAll("[data-hs]").forEach(y=>y.onclick=()=>{let[N,nt]=y.dataset.hs.split(":"),ht=K(N);ht.i=+nt,Ds(ht),on(!0)}),x.querySelectorAll("[data-hw]").forEach(y=>y.onclick=()=>{let[N,nt]=y.dataset.hw.split(":"),ht=K(N);ht.walk=g(ht.walk+ +nt,0,60),Ds(ht),on(!0)}),x.querySelectorAll("[data-hmap]").forEach(y=>y.onclick=()=>{let N=+y.dataset.hmap;rn=Y=je=!1,F=null,Q=N,Ct(),Object.assign(s,{tx:b[N].w[0],ty:b[N].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),h._h="",qe(),a()}),x.querySelectorAll("[data-hset]").forEach(y=>y.onclick=()=>{Ns=y.dataset.hset,m.value="",m.placeholder=Ns==="work"?"Escribe la estaci\xF3n del trabajo\u2026":"Escribe la estaci\xF3n de casa\u2026",m.focus()}),x.querySelectorAll("[data-hnear]").forEach(y=>y.onclick=()=>{let N=Ht.get(ge.st[0]);N!=null&&yh(N,y.dataset.hnear)}),x.querySelectorAll("[data-hmore]").forEach(y=>y.onclick=()=>{let N=K(y.dataset.hmore);N.more=!N.more,on(!0)}),x.querySelectorAll("[data-hhide]").forEach(y=>y.onclick=N=>{N.stopPropagation();let[nt,ht]=y.dataset.hhide.split(":"),Pt=K(nt);Pt.hide=ht,Ds(Pt),on(!0)}),x.querySelectorAll("[data-hshow]").forEach(y=>y.onclick=()=>{let N=K(y.dataset.hshow);N.hide="",Ds(N),on(!0)}),x.querySelectorAll("[data-hdel]").forEach(y=>y.onclick=()=>{Sn.st=[],Sn.open=!1,Ds(Sn),on(!0),Nd()}),x.querySelectorAll("[data-dk]").forEach(y=>y.onclick=()=>Od(C[+y.dataset.dk])),x.querySelectorAll("[data-hal]").forEach(y=>y.onclick=()=>p("#alr").click());let lt=p("#bell");lt||(lt=document.createElement("button"),lt.type="button",lt.id="bell",lt.onclick=Vm,p("#inf .more").prepend(lt));{let y=V.repOk?gi.on:Rn.on;lt.hidden=!L.lines.length,lt.className=y?"on":"",lt.textContent=(y?"\u{1F514} Avisos activados \xB7 ":"\u{1F515} Activar avisos de ")+L.lines.join(", "),lt.title=(y?"Avisos activados":"Activar avisos")+" de "+L.lines.join(", ")+(V.repOk?"":" (mientras la app est\xE9 abierta)")}wd(x)}function Od(d){if(!d)return;let x=t.days.indexOf(ue().ymd),w=Cn.find(L=>L.real?d.tid&&L.v.tid===d.tid||d.num&&String(L.tr?L.tr.num:L.v.num)===String(d.num):d.tr&&L.tr===d.tr||d.num&&L.tr&&String(L.tr.num)===String(d.num)),A=d.tr||w&&w.tr||(Z[x]||[]).find(L=>String(L.num)===String(d.num));if(rn=Y=je=!1,Q=-1,F=w?w.tr||{vtid:w.v.tid}:A||null,!F)return;M=w&&w.tr?w.tr:null,M&&innerWidth<=640&&(h.classList.add("peek"),p("#rc").classList.contains("min")||p("#rcgrab").click());let C=w?w.p.w:null;C&&Object.assign(s,{tx:C[0],ty:C[1],dist:Math.min(s.dist,22)}),Ct(),h._h="",qe(),ci=0,a()}let Ns=!1;m.addEventListener("blur",()=>setTimeout(()=>{Ns&&!m.value.trim()&&(Ns=!1,m.placeholder="Buscar estaci\xF3n o municipio\u2026")},600));function CS(){}function yh(d,x){let w=x==="work"?Sn:Zn,A=b[d].id,C=b.filter(L=>L.fams.size&&L!==b[d]&&Math.hypot(L.w[0]-b[d].w[0],L.w[1]-b[d].w[1])<.6).map(L=>L.id);w.st=[A,...C].slice(0,3),w.i=0,w.open=!0,Ds(w),on(!0),Nd()}let Uo=p("#lines");Uo.innerHTML='<button type="button" class="all" data-f="*">Todas</button>'+O.map(d=>`<button type="button" style="--c:${G[d]}" data-f="${d}">${d}</button>`).join("");function Bd(){try{on(!0)}catch{}{let d=p("#linebtn");d||(d=document.createElement("button"),d.type="button",d.id="linebtn",Uo.after(d),d.onclick=()=>{Ri=[...Wt][0],je=rn=Y=!1,h._h="",qe()});let x=Wt.size===1?[...Wt][0]:"";d.hidden=!x,x&&(d.innerHTML=`\u{1F4CB} Estado de la ${f(x)} ahora`)}Uo.querySelectorAll("[data-f]").forEach(d=>{d.dataset.f!=="*"&&d.classList.toggle("off",!Wt.has(d.dataset.f))})}Uo.querySelectorAll("[data-f]").forEach(d=>d.onclick=()=>{let x=d.dataset.f;x==="*"?O.forEach(w=>Wt.add(w)):Wt.size===O.length?(Wt.clear(),Wt.add(x)):Wt.has(x)?(Wt.delete(x),Wt.size||O.forEach(w=>Wt.add(w))):Wt.add(x);try{localStorage.setItem("rod_lines",JSON.stringify([...Wt]))}catch{}Bd(),te(),Ct(),fh(),ci=0,a()});let Sh=[...document.querySelectorAll("[data-sp]")],ui=0;function zd(d){let x=ue();d&&(Tt===d||ui===d)?Tt?(Vt=x.min,ne=x.min,Tt=0,ui=d):(ce=performance.now(),Tt=d,ui=0):d===0?(Tt=0,ne=null,ui=0):(Vt=x.min,ce=performance.now(),ne=x.min,Tt=d,ui=0),Sh.forEach(w=>{let A=+w.dataset.sp;w.classList.toggle("on",A===(Tt||ui)||!Tt&&!ui&&ne==null&&A===0),w.classList.toggle("pz",!!ui&&A===ui),w.textContent=A===0?"Ahora":ui===A?"\u25B6 \xD7"+A:Tt===A?"\u23F8 \xD7"+A:"\xD7"+A}),ci=0,a()}Sh.forEach(d=>d.onclick=()=>zd(+d.dataset.sp)),p("#tsl").oninput=d=>{let x=+d.target.value;Vt=x,ne=x,ce=performance.now(),Tt===0&&!ui&&Sh.forEach(w=>w.classList.remove("on")),ci=0,a()},setInterval(()=>{ne!=null&&Tt&&Vt+(performance.now()-ce)/6e4*Tt>1560&&(Vt=240,ce=performance.now())},1e3),window.__rodSearch=d=>{let x=_(d.trim());if(!x){u.style.display="none",u._pick=null;return}let w=[],A=[];b.forEach((k,$)=>{if(!k.fams.size)return;let K=_(k.n);K.startsWith(x)||K.includes(" "+x)||K.includes("-"+x)?w.push($):K.includes(x)&&A.push($)});let C=w.concat(A).slice(0,7),L=T.filter(k=>_(k.name).startsWith(x)).sort((k,$)=>$.pop-k.pop).slice(0,3),W=C.map(k=>({h:`\u{1F689} ${f(b[k].n)}<em>${[...b[k].fams].sort(P).slice(0,3).map($=>`<em class="ls" style="background:${G[$]}">${$}</em>`).join(" ")}</em>`,go:()=>{if(Ns){let $=Ns;Ns=!1,m.placeholder="Buscar estaci\xF3n o municipio\u2026",yh(k,$);return}rn=!1,Y=!1,je=!1,Q=k,F=null,M=null,Ct(),Object.assign(s,{tx:b[k].w[0],ty:b[k].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),qe(),a()}})).concat(L.map(k=>({h:`${f(k.name)}<em>municipio</em>`,go:()=>{Object.assign(s,{tx:k.cx,ty:k.cy,dist:g(k.size*3+14,14,60)}),a()}})));u.innerHTML=W.map((k,$)=>`<li data-i="${$}">${k.h}</li>`).join("")||'<li class="no">Sin resultados</li>',u.style.display="block",u._pick=k=>{W[k]&&(W[k].go(),u.style.display="none",m.value="",m.blur())},u.querySelectorAll("li[data-i]").forEach(k=>k.onclick=()=>u._pick(+k.dataset.i))},Bd(),Ct();try{let d=new URLSearchParams(location.search).get("st");if(d){let x=_(d),w=-1,A=0;b.forEach((C,L)=>{if(!C.fams.size)return;let W=_(C.n),k=W===x?3:W.startsWith(x)||x.startsWith(W)?2:W.includes(x)||x.includes(W)?1:0;k>A&&(A=k,w=L)}),w>=0&&setTimeout(()=>{Q=w,Ct(),Object.assign(s,{tx:b[w].w[0],ty:b[w].w[1],dist:18,tilt:.5}),qe(),a()},300)}}catch{}window.__rod={TID:rt,SID:Ht,byDay:Z,get days(){return t.days},get hist(){return Et},get past(){return re.cur},get cols(){return ei.mesh?ei.mesh.count:-1},get dist(){return r.dist},get follow(){return M},get selTrip(){return F},ST:b,TR:et,FAM:O,act:()=>Cn,setSpeed:zd,RT:V,pollRT:se,nowState:ue,posAt:Is,activeTrips:ea,select:d=>{F=d,qe()}}}var jr=window.__DATA__;var Te=i=>document.querySelector(i),os=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Un=(i,t,e)=>Math.min(e,Math.max(t,i)),nd=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Gn=Te("#c"),yo=new Xc({canvas:Gn,antialias:!0});yo.setPixelRatio(Math.min(devicePixelRatio||1,2));var As=new Ca;As.background=new fe(15659509);var oh=35,Yi=new Dn(oh,1,2,1500);As.add(new Ka(16777215,9080992,1));var im=new Qa(16777215,.9);im.position.set(-40,-70,90);As.add(im);var Xi=100/jr.w,_o=jr.w/2,xo=jr.h/2,sn=[],id=new bi;As.add(id);var sm=new Ws({color:16777215,transparent:!0,opacity:.55});for(let i of jr.m){let t=new bi,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let g of i.g){let _=g.map(p=>{let f=[];for(let D=0;D<p.length;D+=2)f.push(new Nt((p[D]-_o)*Xi,(p[D+1]-xo)*Xi));return f.length>1&&f[0].equals(f[f.length-1])&&f.pop(),f}).filter(p=>p.length>=3);if(!_.length)continue;let T=new Br(_[0]);for(let p=1;p<_.length;p++)T.holes.push(new Xs(_[p]));e.push(T);for(let p of _[0])s=Math.min(s,p.x),r=Math.max(r,p.x),a=Math.min(a,p.y),o=Math.max(o,p.y);for(let p of _)n.push(new Na(new nn().setFromPoints(p.map(f=>new z(f.x,f.y,0))),sm))}if(!e.length)continue;let l;try{l=new $a(e,{depth:1,bevelEnabled:!1})}catch{continue}let c=new Ya({color:13421772}),h=new gn(l,c);t.add(h);let m=new bi;n.forEach(g=>m.add(g)),m.position.z=.04,id.add(m),t.scale.z=.01,id.add(t);let u={og:m,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:h,mat:c,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};h.userData.m=u,sn.push(u)}var Qw=sn.map(i=>i.mesh),Jp=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},rm=0,am=0;for(let i of sn){for(let t of i.rings)rm+=Jp(t[0])-t.slice(1).reduce((e,n)=>e+Jp(n),0);am+=i.area}var hS=Math.sqrt(am/rm),Qc={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},om={"08":"provincia de Barcelona",17:"provincia de Girona",25:"provincia de Lleida",43:"provincia de Tarragona"},hd="sqrt",ud="pop",td=0,sd=0,Zr=1,go=1,uS={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},rd=i=>ud==="pop"?i.pop:i.pop/i.area,jc=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new fe(i));function dS(i){i=Un(i,0,1)*(jc.length-1);let t=Math.min(Math.floor(i),jc.length-2);return jc[t].clone().lerp(jc[t+1],i-t)}var Jr=i=>i>=100?os(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function fS(){sd=0;for(let i of sn)sd+=i.pop;[...sn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...sn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),lm()}var pS=new fe("#d3d8e2"),mS=new fe("#eceff3");function dd(i){i.mat.color.copy(i.base).lerp(mS,.86),i.inF||i.mat.color.lerp(pS,.8)}function lm(){Zr=1,go=1e12;for(let e of sn){let n=rd(e);Zr=Math.max(Zr,n),go=Math.min(go,n)}let i=Math.log10(Math.max(go,.01)),t=Math.log10(Zr);for(let e of sn)e.base=dS((Math.log10(Math.max(rd(e),.01))-i)/(t-i)),dd(e);Te("#lmin").textContent=Jr(go),Te("#lmax").textContent=Jr(Zr),Te("#lname").textContent=ud==="pop"?"habitantes":"hab./km\xB2",lh()}function lh(){let i=uS[hd],t=i(Zr),e=24*td;for(let n of sn)n.zt=td<=.001?.01:Math.max(.12*Math.min(1,td),e*i(rd(n))/t)*(n.inF?1:.1);An()}var Kp=Object.fromEntries(sn.map(i=>[i.code,i])),th=[],cm=[];for(let i of jr.bd){let t=Kp[i.a],e=Kp[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)cm.push((i.p[n]-_o)*Xi,(i.p[n+1]-xo)*Xi,0,(i.p[n+2]-_o)*Xi,(i.p[n+3]-xo)*Xi,0),th.push(t,e)}var ih=new rs;ih.setPositions(cm);var hm=new Hi({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),um=new Hi({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[hm,um].forEach((i,t)=>{let e=new tr(ih,i);e.frustumCulled=!1,e.renderOrder=10+t,As.add(e)});function gS(){let i=ih.attributes.instanceStart.data.array;for(let t=0;t<th.length;t+=2){let e=Math.max(th[t].z,th[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}ih.attributes.instanceStart.data.needsUpdate=!0}var sh={};for(let i of Object.keys(Qc)){let t=sn.filter(h=>h.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,l=-1e9;for(let h of t)e+=h.area,n+=h.cx*h.area,s+=h.cy*h.area,r=Math.min(r,h.cx),a=Math.max(a,h.cx),o=Math.min(o,h.cy),l=Math.max(l,h.cy);let c=document.createElement("div");c.className="plab",c.textContent=Qc[i],c.title="Ver solo "+om[i],c.onclick=()=>AS("pr:"+i),document.body.appendChild(c),sh[i]={el:c,p:new z(n/e,s/e,0),cx:(r+a)/2,cy:(o+l)/2,ext:Math.max(a-r,l-o),ext2:[a-r,l-o],area:e,name:Qc[i]}}var ed=new z;function _S(){for(let i in sh){let t=sh[i];ed.copy(t.p).project(Yi),t.el.style.transform=`translate(-50%,-50%) translate(${(ed.x*.5+.5)*innerWidth}px,${(-ed.y*.5+.5)*innerHeight}px)`}}var an={tilt:0,yaw:0,dist:150,tx:0,ty:0},xe={...an};function xS(){let i=innerWidth/innerHeight,t=Math.tan(oh*Math.PI/360);return Math.max(jr.h*Xi*1.1,100*1.1/i)/(2*t)}var vS=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{xe.yaw=Math.round(xe.yaw/(2*Math.PI))*2*Math.PI,xe.tilt=0,An()});function fd(){Object.assign(xe,{tilt:0,yaw:0,dist:xS(),tx:0,ty:0}),An()}function yS(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=an;Yi.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),Yi.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),Yi.lookAt(n,s,0)}var eh=!0,jp=performance.now(),vo=new Map;function An(){eh=!0}function dm(i){requestAnimationFrame(dm);let t=Un((i-jp)/1e3,0,.05);jp=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(an)){let r=xe[s]-an[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(an[s]+=r*e,n=!0):an[s]=xe[s]}for(let s of sn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of vo){let a=(i-r)/1800;a>=1?(vo.delete(s),rr(s)):rr(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(eh=!0),n||eh){vS.style.transform=`rotate(${an.yaw}rad) scaleY(${(.55+.45*Math.cos(an.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(xe.yaw/2))<.02&&xe.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?"El norte ya est\xE1 arriba":"Poner el norte arriba y el mapa plano")}yS(),gS(),_S(),window.__rodFrame&&window.__rodFrame(),yo.render(As,Yi),eh=n,Te("#tilt").value=Math.round(xe.tilt*180/Math.PI),Te("#yaw").value=Math.round(((xe.yaw*180/Math.PI+180)%360+360)%360-180)}}function fm(){yo.setSize(innerWidth,innerHeight,!1),Yi.aspect=innerWidth/innerHeight,Yi.updateProjectionMatrix(),hm.resolution.set(innerWidth,innerHeight),um.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),An()}addEventListener("resize",()=>{fm(),Ye.length&&Cs()});Gn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;xe.yaw+=n*.0035}else i.ctrlKey?xe.dist=Un(xe.dist*Math.exp(e*.01),6,400):xe.tilt=Un(xe.tilt+e*.002,0,1.32);An()},{passive:!1});Gn.addEventListener("contextmenu",i=>i.preventDefault());var qi=new Map,ti=null,nr=0,ad=0,od=0;var rh=null;Gn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),Ye.length&&setTimeout(Cs,50)),Gn.setPointerCapture(i.pointerId),qi.set(i.pointerId,{x:i.clientX,y:i.clientY}),qi.size===1&&(ti={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),qi.size===2){let[t,e]=[...qi.values()];nr=Math.hypot(t.x-e.x,t.y-e.y),ad=Math.atan2(e.y-t.y,e.x-t.x),od=(t.y+e.y)/2,rh={mode:null,rot:0,sc:0,tl:0},ti&&(ti.multi=!0)}pd()});Gn.addEventListener("pointermove",i=>{let t=qi.get(i.pointerId);if(!t){as={x:i.clientX,y:i.clientY},ld||(ld=requestAnimationFrame(MS));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,qi.size===2){let[s,r]=[...qi.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),l=(s.y+r.y)/2,c=o-ad;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI);let h=nr?a-nr:0,m=l-od,u=rh||(rh={mode:null,rot:0,sc:0,tl:0});u.rot+=c,u.sc+=h,u.tl+=m,u.mode?u.mode==="zoom"&&Math.abs(u.rot)>.45&&(u.mode="rotate"):Math.abs(u.rot)>.3?u.mode="rotate":Math.abs(u.tl)>30&&Math.abs(u.sc)<18?u.mode="tilt":Math.abs(u.sc)>12&&(u.mode="zoom"),(u.mode==="zoom"||u.mode==="rotate")&&nr&&(xe.dist=Un(xe.dist*nr/a,6,400)),u.mode==="rotate"&&(xe.yaw+=c,an.yaw=xe.yaw),u.mode==="tilt"&&(xe.tilt=Un(xe.tilt-m*.006,0,1.32),an.tilt=xe.tilt),nr=a,ad=o,od=l,An();return}if(ti.moved+=Math.abs(e)+Math.abs(n),ti.rot||i.altKey)xe.yaw+=e*.005,xe.tilt=Un(xe.tilt+n*.004,0,1.32),an.yaw=xe.yaw,an.tilt=xe.tilt;else{let s=2*an.dist*Math.tan(oh*Math.PI/360)/innerHeight,r=Math.sin(an.yaw),a=Math.cos(an.yaw),o=1/Math.max(Math.cos(an.tilt),.3);xe.tx=Un(xe.tx-a*e*s+-r*n*s*o,-70,70),xe.ty=Un(xe.ty-r*e*s+a*n*s*o,-70,70),an.tx=xe.tx,an.ty=xe.ty}An()});var pm=i=>{let t=ti&&!ti.rot&&!ti.multi&&ti.moved<(ti.touch?12:6)&&i.type==="pointerup"&&qi.size===1,e=ti&&ti.touch;qi.delete(i.pointerId),nr=0,rh=null,qi.size||(ti=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};Gn.addEventListener("pointerup",pm);Gn.addEventListener("pointercancel",pm);Gn.addEventListener("dblclick",fd);addEventListener("keydown",i=>{i.key==="Alt"&&(Gn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(Gn.style.cursor="")});addEventListener("blur",()=>{Gn.style.cursor=""});var SS=new Ys,Qp=new Nt,as=null,ld=0,ir=null;function MS(){if(ld=0,!as||ti)return;Qp.set(as.x/innerWidth*2-1,-(as.y/innerHeight)*2+1),SS.setFromCamera(Qp,Yi);let i=null;if(i!==ir){let e=ir;ir=i,e&&rr(e),i&&rr(i),An()}let t=window.__rodHover&&window.__rodHover(as.x,as.y);if(t){er.innerHTML=t,er.style.display="block";let e=er.offsetWidth,n=er.offsetHeight;er.style.left=Un(as.x+14,6,innerWidth-e-6)+"px",er.style.top=Un(as.y+14,6,innerHeight-n-6)+"px",Gn.style.cursor="pointer"}else pd(),Gn.style.cursor=""}Gn.addEventListener("pointerleave",()=>{if(as=null,ir){let i=ir;ir=null,rr(i),An()}pd()});var er=Te("#tip");function pd(){er.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{ud=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),lm()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{hd=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),lh()});Te("#yaw").oninput=i=>{xe.yaw=+i.target.value*Math.PI/180,An()};Te("#tilt").oninput=i=>{xe.tilt=+i.target.value*Math.PI/180,An()};Te("#zin").onclick=()=>{xe.dist=Un(xe.dist*.75,6,400),An()};Te("#zout").onclick=()=>{xe.dist=Un(xe.dist/.75,6,400),An()};Te("#rst").onclick=fd;var tm=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],Ye=[],em={},bS=i=>em[i]||(em[i]=new Ws({color:i}));function mm(i,t){i.og.children.forEach(e=>e.material=t?bS(t):sm)}function rr(i,t=0){let e=i.mat.emissive;i===ir?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function md(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let c of i)e=Math.min(e,c.cx-c.size/2),n=Math.max(n,c.cx+c.size/2),s=Math.min(s,c.cy-c.size/2),r=Math.max(r,c.cy+c.size/2);let a=innerWidth/innerHeight,o=Math.tan(oh*Math.PI/360),l=i.length===1?Un(i[0].size*3.2+14,14,120):Un(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(xe,{tx:(e+n)/2,ty:(s+r)/2,dist:l,tilt:t,yaw:0}),An()}var Ts=Te("#q"),oi=Te("#list"),$e=Te("#mcs");function ch(i,t=!0){if(oi.style.display="none",Ts.value="",!i.sel){Ye.length>=6&&gm(Ye[0].o,!0);let e=new Set(Ye.map(s=>s.color)),n=tm.find(s=>!e.has(s))||tm[0];i.sel={o:i,color:n,tint:new fe(n).multiplyScalar(.12)},Ye.push(i.sel),mm(i,n)}$e.classList.contains("min")&&So(!1),vo.set(i,performance.now()),rr(i),t&&md([i],Math.max(xe.tilt,.9)),Cs()}function gm(i,t){let e=Ye.indexOf(i.sel);e>=0&&Ye.splice(e,1),i.sel=null,mm(i,null),rr(i),An(),t||Cs()}function _m(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=Ye.map(h=>{let m=1e9,u=-1e9,g=1e9,_=-1e9;for(let T of h.o.rings)for(let p=0;p<T[0].length;p+=2)m=Math.min(m,T[0][p]),u=Math.max(u,T[0][p]),g=Math.min(g,T[0][p+1]),_=Math.max(_,T[0][p+1]);return{x0:m,x1:u,y0:g,y1:_}}),a=Math.max(...r.map(h=>Math.max(h.x1-h.x0,h.y1-h.y0))),o=(Math.min(e,n)-22)/a;Ye.forEach((h,m)=>{let u=r[m],g=(u.x0+u.x1)/2,_=(u.y0+u.y1)/2;s.beginPath();for(let T of h.o.rings)for(let p of T)for(let f=0;f<p.length;f+=2){let D=e/2+(p[f]-g)*o,U=n/2-(p[f+1]-_)*o;f?s.lineTo(D,U):s.moveTo(D,U),f===p.length-2&&s.closePath()}s.fillStyle=h.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=h.color,s.stroke()});let l=o/hS,c=[.5,1,2,5,10,20,50,100].find(h=>h*l>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,c*l,2),s.font="10px system-ui",s.fillText(c+" km",12+c*l,n-8)}function Cs(){if(!Ye.length){$e.innerHTML="",$e.style.display="none",So(!1);return}if($e.style.display="flex",innerWidth<=640){let e=Te("#inf").getBoundingClientRect().bottom;$e.style.top=Math.round(e+8)+"px",$e.style.maxHeight=Math.max(110,Math.min(innerHeight*(Te("#rc").classList.contains("min")?.7:.4),Te("#rc").getBoundingClientRect().top-e-16))+"px",$e.style.width=""}else if(innerHeight<=500){let e=Te("#inf").getBoundingClientRect().bottom;$e.style.top=Math.round(e+8)+"px",$e.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",$e.style.width="min(290px, 40vw)"}else $e.style.top="",$e.style.maxHeight="",$e.style.width="";let i=Ye.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${Qc[s.pr]}</em></div><div class="mb">${os(s.pop)} hab.</div><small>${Jr(s.area)} km\xB2 \xB7 ${Jr(s.pop/s.area)} hab./km\xB2 \xB7 n\xBA ${s.rankP} en poblaci\xF3n</small></div>`}).join("");if(Ye.length>1){let e=s=>Math.max(...Ye.map(s));if(i+='<div class="cmp"><div class="ct">Comparar <small>arrastra una ficha sobre otra para reordenar</small></div><canvas id="sil"></canvas><small class="sc">Siluetas superpuestas a la misma escala</small>'+[["Habitantes",s=>s.o.pop,os],["Superficie (km\xB2)",s=>s.o.area,Jr],["Densidad (hab./km\xB2)",s=>s.o.pop/s.o.area,Jr]].map(([s,r,a])=>`<div class="cr"><span>${s}</span>${Ye.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),Ye.length===2){let[s,r]=Ye.map(c=>c.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],l=(c,h)=>(c>=h?c/h:h/c).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}</b> tiene ${l(a.pop,o.pop)}\xD7 los habitantes de <b>${o.name}</b> y ocupa ${l(a.area,o.area)}\xD7 ${a.area>=o.area?"su superficie":"menos superficie"}.</small>`}i+="</div>"}$e.innerHTML=i,$e.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),gm(Ye[+e.dataset.x].o)}),$e.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>md([Ye[+e.dataset.i].o],Math.max(xe.tilt,.9)),e.onmouseenter=()=>{let n=Ye[+e.dataset.i].o;vo.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=Ye.splice(s,1);Ye.splice(r,0,a),Cs();let o=Te("#sil");o&&o.classList.add("flash")}}});let t=Te("#sil");t&&_m(t)}Ts.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(Ts.value);return}let i=nd(Ts.value.trim());if(!i){oi.style.display="none";return}let t=[],e=[];for(let s of sn){let r=nd(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);oi.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${os(s.pop)}</em></li>`).join("")||'<li class="no">Sin resultados</li>',oi.style.display="block",oi.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>ch(n[+s.dataset.i])),oi._r=n});Ts.addEventListener("keydown",i=>{i.key==="Enter"&&oi._pick?oi._pick(0):i.key==="Enter"&&oi._r&&oi._r[0]&&ch(oi._r[0]),i.key==="Escape"&&(Ts.value="",oi.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==Ts&&xm()});var nm=0;addEventListener("resize",()=>{clearTimeout(nm),nm=setTimeout(()=>{let i=Te("#sil");i&&_m(i)},120)});var ah=null,cd=Te("#chip");function wS(i,t,e=.8){ah={codes:new Set(i.map(n=>n.code)),label:t},sn.forEach(n=>{n.inF=ah.codes.has(n.code),dd(n)}),cd.innerHTML=`<span>Mostrando: <b>${t}</b> \xB7 ${i.length} municipio${i.length===1?"":"s"}</span><button id="chx" title="Quitar filtro">\xD7</button>`,cd.style.display="flex",Te("#chx").onclick=xm,lh(),md(i,e),i.slice(0,40).forEach(n=>vo.set(n,performance.now()))}function xm(){ah&&(ah=null,sn.forEach(i=>{i.inF=!0,dd(i)}),cd.style.display="none",lh())}var ES="prov";function TS(i){let t=[...sn].sort((a,o)=>o.pop-a.pop),e=[...sn].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[sn.filter(a=>a.pr===s),om[s]];if(n==="top")return s==="pop"?[t.slice(0,10),"10 con m\xE1s habitantes"]:[e.slice(0,10),"10 m\xE1s densos"];if(n==="low")return s==="pop"?[t.slice(-10),"10 con menos habitantes"]:[e.slice(-10),"10 menos densos"];if(n==="size")return[sn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${os(+s)} o m\xE1s habitantes`:+s==0?`menos de ${os(+r)} habitantes`:`${os(+s)} \u2013 ${os(+r-1)} habitantes`];if(n==="n50"){let a=0,o=0;for(let l of t)if(a+=l.pop,o++,a>=sd/2)break;return[t.slice(0,o),"la mitad de la poblaci\xF3n"]}return[[],""]}function AS(i){let[t,e]=TS(i);t.length&&wS(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{ES=i.dataset.tab,Te("#dbody").scrollTop=0});var sr=Te("#rc"),nh=Te("#mcstab");function Kr(i){sr.classList.toggle("min",i),Te("#rcgrab span").textContent=i?"Mostrar controles":"Ocultar controles",Ye.length&&Cs()}function So(i){$e.classList.toggle("min",i),$e.style.transform="",$e.style.opacity="",nh.classList.toggle("on",i&&Ye.length>0),i&&(nh.textContent=`\u25B8 ${Ye.length} ${Ye.length===1?"ficha":"fichas"}`,nh.style.top=$e.style.top||"124px")}function gd(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!hh.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y;!s.lock&&Math.hypot(o,l)>10&&(s.lock=Math.abs(o)>Math.abs(l)?"x":"y"),s.lock===n&&t&&t(o,l)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y,c=s.lock;s=null,e(c===n?o:0,c===n?l:0,c)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Te("#rcgrab").onclick=()=>Kr(!sr.classList.contains("min"));innerWidth<=640&&Kr(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var vm=()=>innerWidth>640;gd(sr,{axis:"y",onEnd:(i,t)=>{if(!vm())if(t>40&&!sr.classList.contains("min")){let e=Te("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&Kr(!0)}else t<-30&&sr.classList.contains("min")&&Kr(!1)}});gd(sr,{axis:"x",onEnd:i=>{vm()&&(i>50?Kr(!0):i<-30&&sr.classList.contains("min")&&Kr(!1))}});gd($e,{axis:"x",onMove:i=>{i<0&&($e.classList.add("sw"),$e.style.transform=`translateX(${i}px)`,$e.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{$e.classList.remove("sw"),i<-60?So(!0):($e.style.transform="",$e.style.opacity="")}});nh.onclick=()=>{So(!1),Cs()};Te("#dtoggle").onclick=()=>{let i=Te("#dp").classList.toggle("open");Te("#rc").classList.toggle("dopen",i),Te("#dtoggle").textContent=i?hh.matches&&innerWidth<=640?"\u2190 Controles":"En directo \u25B4":"En directo: conectar datos de Renfe \u25BE",window.__rodCard&&window.__rodCard()};var hh=matchMedia("(max-width:640px), (max-height:500px)");function ym(){let i=Te("#leg");hh.matches?Te("#rc").insertBefore(i,Te("#dtoggle")):document.body.appendChild(i),Ye.length&&Cs()}hh.addEventListener("change",ym);ym();fm();fS();fd();Object.assign(an,xe);for(let i of sn)i.z=.01;requestAnimationFrame(dm);Zp({scene:As,camera:Yi,renderer:yo,goal:xe,cur:an,invalidate:An,flyTo:(i,t,e,n)=>{Object.assign(xe,{tx:(i-_o)*Xi,ty:(t-xo)*Xi,dist:e,tilt:n}),An()},K:Xi,CX:_o,CY:xo,mcs:$e,q:Ts,list:oi,munis:sn,select:ch,norm:nd,fmt:os,clamp:Un,mcsMin:So});window.__app={scene:As,renderer:yo,camera:Yi,munis:sn,labs:sh,goal:xe,cur:an,select:ch,get mode(){return hd}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
