(()=>{var Df=0,uu=1,Nf=2;var ro=1,Uf=2,kr=3,ws=0,Hn=1,Hi=2,Gi=0,zr=1,du=2,fu=3,pu=4,Ff=5;var Ys=100,Of=101,Bf=102,kf=103,zf=104,Vf=200,Hf=201,Gf=202,Wf=203,mu=204,gu=205,$f=206,Xf=207,qf=208,Yf=209,Zf=210,Jf=211,Kf=212,jf=213,Qf=214,fl=0,pl=1,ml=2,Tr=3,gl=4,_l=5,xl=6,vl=7,tc=0,tp=1,ep=2,Ti=0,_u=1,xu=2,vu=3,yu=4,Su=5,Mu=6,bu=7;var wu=300,Es=301,Zs=302,ec=303,nc=304,ao=306,yl=1e3,Fi=1001,Sl=1002,_n=1003,np=1004;var oo=1005;var wn=1006,ic=1007;var Ts=1008;var Kn=1009,Eu=1010,Tu=1011,Vr=1012,sc=1013,Ai=1014,pi=1015,Ci=1016,rc=1017,ac=1018,Hr=1020,Au=35902,Cu=35899,Ru=1021,Iu=1022,mi=1023,Bi=1026,As=1027,oc=1028,lc=1029,Cs=1030,cc=1031;var hc=1033,lo=33776,co=33777,ho=33778,uo=33779,uc=35840,dc=35841,fc=35842,pc=35843,mc=36196,gc=37492,_c=37496,xc=37488,vc=37489,fo=37490,yc=37491,Sc=37808,Mc=37809,bc=37810,wc=37811,Ec=37812,Tc=37813,Ac=37814,Cc=37815,Rc=37816,Ic=37817,Pc=37818,Lc=37819,Dc=37820,Nc=37821,Uc=36492,Fc=36494,Oc=36495,Bc=36283,kc=36284,po=36285,zc=36286;var wa=2300,Ml=2301,ul=2302,jh=2303,Qh=2400,tu=2401,eu=2402;var ip=3200;var Vc=0,sp=1,as="",ii="srgb",Ea="srgb-linear",Ta="linear",Ve="srgb";var dl=7680;var rp=519,ap=512,op=513,lp=514,Hc=515,cp=516,hp=517,Gc=518,up=519,Pu=35044;var Lu="300 es",bi=2e3,Ar=2001;function ig(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function sg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dp(){let i=Aa("canvas");return i.style.display="block",i}var Yd={},Cr=null;function Ca(...i){let t="THREE."+i.shift();Cr?Cr("log",t,...i):console.log(t,...i)}function fp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function de(...i){i=fp(i);let t="THREE."+i.shift();if(Cr)Cr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ge(...i){i=fp(i);let t="THREE."+i.shift();if(Cr)Cr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Vs(...i){let t=i.join(" ");t in Yd||(Yd[t]=!0,de(...i))}function pp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var mp={[fl]:pl,[ml]:xl,[gl]:vl,[Tr]:_l,[pl]:fl,[xl]:ml,[vl]:gl,[_l]:Tr},ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zd=1234567,ya=Math.PI/180,Rr=180/Math.PI;function Oi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[e&63|128]+Ln[e>>8&255]+"-"+Ln[e>>16&255]+Ln[e>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function Du(i,t){return(i%t+t)%t}function rg(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ag(i,t,e){return i!==t?(e-i)/(t-i):0}function Sa(i,t,e){return(1-e)*i+e*t}function og(i,t,e,n){return Sa(i,t,1-Math.exp(-e*n))}function lg(i,t=1){return t-Math.abs(Du(i,t*2)-t)}function cg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function hg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ug(i,t){return i+Math.floor(Math.random()*(t-i+1))}function dg(i,t){return i+Math.random()*(t-i)}function fg(i){return i*(.5-Math.random())}function pg(i){i!==void 0&&(Zd=i);let t=Zd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mg(i){return i*ya}function gg(i){return i*Rr}function _g(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function xg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yg(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),m=r((t-n)/2),d=a((t-n)/2),g=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*m,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*m,o*c);break;case"ZXZ":i.set(l*m,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*g,o*c);break;case"YXY":i.set(l*g,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*g,o*h,o*c);break;default:de("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Nu={DEG2RAD:ya,RAD2DEG:Rr,generateUUID:Oi,clamp:be,euclideanModulo:Du,mapLinear:rg,inverseLerp:ag,lerp:Sa,damp:og,pingpong:lg,smoothstep:cg,smootherstep:hg,randInt:ug,randFloat:dg,randFloatSpread:fg,seededRandom:pg,degToRad:mg,radToDeg:gg,isPowerOfTwo:_g,ceilPowerOfTwo:xg,floorPowerOfTwo:vg,setQuaternionFromProperEuler:yg,normalize:$e,denormalize:Mi},Lt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],m=n[s+3],d=r[a+0],g=r[a+1],x=r[a+2],T=r[a+3];if(m!==T||l!==d||c!==g||h!==x){let p=l*d+c*g+h*x+m*T;p<0&&(d=-d,g=-g,x=-x,T=-T,p=-p);let f=1-o;if(p<.9995){let N=Math.acos(p),U=Math.sin(N);f=Math.sin(f*N)/U,o=Math.sin(o*N)/U,l=l*f+d*o,c=c*f+g*o,h=h*f+x*o,m=m*f+T*o}else{l=l*f+d*o,c=c*f+g*o,h=h*f+x*o,m=m*f+T*o;let N=1/Math.sqrt(l*l+c*c+h*h+m*m);l*=N,c*=N,h*=N,m*=N}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],m=r[a],d=r[a+1],g=r[a+2],x=r[a+3];return t[e]=o*x+h*m+l*g-c*d,t[e+1]=l*x+h*d+c*m-o*g,t[e+2]=c*x+h*g+o*d-l*m,t[e+3]=h*x-o*m-l*d-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),m=o(r/2),d=l(n/2),g=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*h*m+c*g*x,this._y=c*g*m-d*h*x,this._z=c*h*x+d*g*m,this._w=c*h*m-d*g*x;break;case"YXZ":this._x=d*h*m+c*g*x,this._y=c*g*m-d*h*x,this._z=c*h*x-d*g*m,this._w=c*h*m+d*g*x;break;case"ZXY":this._x=d*h*m-c*g*x,this._y=c*g*m+d*h*x,this._z=c*h*x+d*g*m,this._w=c*h*m-d*g*x;break;case"ZYX":this._x=d*h*m-c*g*x,this._y=c*g*m+d*h*x,this._z=c*h*x-d*g*m,this._w=c*h*m+d*g*x;break;case"YZX":this._x=d*h*m+c*g*x,this._y=c*g*m+d*h*x,this._z=c*h*x-d*g*m,this._w=c*h*m-d*g*x;break;case"XZY":this._x=d*h*m-c*g*x,this._y=c*g*m-d*h*x,this._z=c*h*x+d*g*m,this._w=c*h*m+d*g*x;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],m=e[10],d=n+o+m;if(d>0){let g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>m){let g=2*Math.sqrt(1+n-o-m);this._w=(h-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>m){let g=2*Math.sqrt(1+o-n-m);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+m-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),m=2*(r*n-a*e);return this.x=e+l*c+a*m-o*h,this.y=n+l*h+o*c-r*m,this.z=s+l*m+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Th.copy(this).projectOnVector(t),this.sub(Th)}reflect(t){return this.sub(Th.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Th=new H,Jd=new zi,Me=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],m=n[7],d=n[2],g=n[5],x=n[8],T=s[0],p=s[3],f=s[6],N=s[1],U=s[4],E=s[7],b=s[2],P=s[5],k=s[8];return r[0]=a*T+o*N+l*b,r[3]=a*p+o*U+l*P,r[6]=a*f+o*E+l*k,r[1]=c*T+h*N+m*b,r[4]=c*p+h*U+m*P,r[7]=c*f+h*E+m*k,r[2]=d*T+g*N+x*b,r[5]=d*p+g*U+x*P,r[8]=d*f+g*E+x*k,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],m=h*a-o*c,d=o*l-h*r,g=c*r-a*l,x=e*m+n*d+s*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/x;return t[0]=m*T,t[1]=(s*c-h*n)*T,t[2]=(o*n-s*a)*T,t[3]=d*T,t[4]=(h*e-s*l)*T,t[5]=(s*r-o*e)*T,t[6]=g*T,t[7]=(n*l-c*e)*T,t[8]=(a*e-n*r)*T,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ah.makeScale(t,e)),this}rotate(t){return Vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ah.makeRotation(-t)),this}translate(t,e){return Vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ah.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ah=new Me,Kd=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jd=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sg(){let i={enabled:!0,workingColorSpace:Ea,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ve&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ve&&(s.r=Er(s.r),s.g=Er(s.g),s.b=Er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===as?Ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ea]:{primaries:t,whitePoint:n,transfer:Ta,toXYZ:Kd,fromXYZ:jd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:t,whitePoint:n,transfer:Ve,toXYZ:Kd,fromXYZ:jd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),i}var Ie=Sg();function ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var cr,bl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{cr===void 0&&(cr=Aa("canvas")),cr.width=t.width,cr.height=t.height;let s=cr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=cr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Aa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ss(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ss(e[n]/255)*255):e[n]=ss(e[n]);return{data:e,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mg=0,Ir=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ch(s[a].image)):r.push(Ch(s[a]))}else r=Ch(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ch(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}var bg=0,Rh=new H,Yn=class i extends ki{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Fi,s=Fi,r=wn,a=Ts,o=mi,l=Kn,c=i.DEFAULT_ANISOTROPY,h=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Oi(),this.name="",this.source=new Ir(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rh).x}get height(){return this.source.getSize(Rh).y}get depth(){return this.source.getSize(Rh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){de(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){de(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yl:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case Sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yl:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case Sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=wu;Yn.DEFAULT_ANISOTROPY=1;var He=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],m=l[8],d=l[1],g=l[5],x=l[9],T=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(m-T)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(m+T)<.1&&Math.abs(x+p)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let U=(c+1)/2,E=(g+1)/2,b=(f+1)/2,P=(h+d)/4,k=(m+T)/4,S=(x+p)/4;return U>E&&U>b?U<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(U),s=P/n,r=k/n):E>b?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=P/s,r=S/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=k/r,s=S/r),this.set(n,s,r,e),this}let N=Math.sqrt((p-x)*(p-x)+(m-T)*(m-T)+(d-h)*(d-h));return Math.abs(N)<.001&&(N=1),this.x=(p-x)/N,this.y=(m-T)/N,this.z=(d-h)/N,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this.w=be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this.w=be(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wl=class extends ki{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Yn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ir(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends wl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ra=class extends Yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var El=class extends Yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Fe=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,m,d,g,x,T,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,m,d,g,x,T,p)}set(t,e,n,s,r,a,o,l,c,h,m,d,g,x,T,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=m,f[14]=d,f[3]=g,f[7]=x,f[11]=T,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/hr.setFromMatrixColumn(t,0).length(),r=1/hr.setFromMatrixColumn(t,1).length(),a=1/hr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let d=a*h,g=a*m,x=o*h,T=o*m;e[0]=l*h,e[4]=-l*m,e[8]=c,e[1]=g+x*c,e[5]=d-T*c,e[9]=-o*l,e[2]=T-d*c,e[6]=x+g*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,g=l*m,x=c*h,T=c*m;e[0]=d+T*o,e[4]=x*o-g,e[8]=a*c,e[1]=a*m,e[5]=a*h,e[9]=-o,e[2]=g*o-x,e[6]=T+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,g=l*m,x=c*h,T=c*m;e[0]=d-T*o,e[4]=-a*m,e[8]=x+g*o,e[1]=g+x*o,e[5]=a*h,e[9]=T-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,g=a*m,x=o*h,T=o*m;e[0]=l*h,e[4]=x*c-g,e[8]=d*c+T,e[1]=l*m,e[5]=T*c+d,e[9]=g*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,g=a*c,x=o*l,T=o*c;e[0]=l*h,e[4]=T-d*m,e[8]=x*m+g,e[1]=m,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=g*m+x,e[10]=d-T*m}else if(t.order==="XZY"){let d=a*l,g=a*c,x=o*l,T=o*c;e[0]=l*h,e[4]=-m,e[8]=c*h,e[1]=d*m+T,e[5]=a*h,e[9]=g*m-x,e[2]=x*m-g,e[6]=o*h,e[10]=T*m+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wg,t,Eg)}lookAt(t,e,n){let s=this.elements;return ei.subVectors(t,e),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),fs.crossVectors(n,ei),fs.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),fs.crossVectors(n,ei)),fs.normalize(),Bo.crossVectors(ei,fs),s[0]=fs.x,s[4]=Bo.x,s[8]=ei.x,s[1]=fs.y,s[5]=Bo.y,s[9]=ei.y,s[2]=fs.z,s[6]=Bo.z,s[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],m=n[5],d=n[9],g=n[13],x=n[2],T=n[6],p=n[10],f=n[14],N=n[3],U=n[7],E=n[11],b=n[15],P=s[0],k=s[4],S=s[8],I=s[12],B=s[1],$=s[5],tt=s[9],it=s[13],X=s[2],j=s[6],ot=s[10],lt=s[14],Mt=s[3],ht=s[7],_t=s[11],mt=s[15];return r[0]=a*P+o*B+l*X+c*Mt,r[4]=a*k+o*$+l*j+c*ht,r[8]=a*S+o*tt+l*ot+c*_t,r[12]=a*I+o*it+l*lt+c*mt,r[1]=h*P+m*B+d*X+g*Mt,r[5]=h*k+m*$+d*j+g*ht,r[9]=h*S+m*tt+d*ot+g*_t,r[13]=h*I+m*it+d*lt+g*mt,r[2]=x*P+T*B+p*X+f*Mt,r[6]=x*k+T*$+p*j+f*ht,r[10]=x*S+T*tt+p*ot+f*_t,r[14]=x*I+T*it+p*lt+f*mt,r[3]=N*P+U*B+E*X+b*Mt,r[7]=N*k+U*$+E*j+b*ht,r[11]=N*S+U*tt+E*ot+b*_t,r[15]=N*I+U*it+E*lt+b*mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],m=t[6],d=t[10],g=t[14],x=t[3],T=t[7],p=t[11],f=t[15],N=l*g-c*d,U=o*g-c*m,E=o*d-l*m,b=a*g-c*h,P=a*d-l*h,k=a*m-o*h;return e*(T*N-p*U+f*E)-n*(x*N-p*b+f*P)+s*(x*U-T*b+f*k)-r*(x*E-T*P+p*k)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],m=t[9],d=t[10],g=t[11],x=t[12],T=t[13],p=t[14],f=t[15],N=e*o-n*a,U=e*l-s*a,E=e*c-r*a,b=n*l-s*o,P=n*c-r*o,k=s*c-r*l,S=h*T-m*x,I=h*p-d*x,B=h*f-g*x,$=m*p-d*T,tt=m*f-g*T,it=d*f-g*p,X=N*it-U*tt+E*$+b*B-P*I+k*S;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let j=1/X;return t[0]=(o*it-l*tt+c*$)*j,t[1]=(s*tt-n*it-r*$)*j,t[2]=(T*k-p*P+f*b)*j,t[3]=(d*P-m*k-g*b)*j,t[4]=(l*B-a*it-c*I)*j,t[5]=(e*it-s*B+r*I)*j,t[6]=(p*E-x*k-f*U)*j,t[7]=(h*k-d*E+g*U)*j,t[8]=(a*tt-o*B+c*S)*j,t[9]=(n*B-e*tt-r*S)*j,t[10]=(x*P-T*E+f*N)*j,t[11]=(m*E-h*P-g*N)*j,t[12]=(o*I-a*$-l*S)*j,t[13]=(e*$-n*I+s*S)*j,t[14]=(T*U-x*b-p*N)*j,t[15]=(h*b-m*U+d*N)*j,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,m=o+o,d=r*c,g=r*h,x=r*m,T=a*h,p=a*m,f=o*m,N=l*c,U=l*h,E=l*m,b=n.x,P=n.y,k=n.z;return s[0]=(1-(T+f))*b,s[1]=(g+E)*b,s[2]=(x-U)*b,s[3]=0,s[4]=(g-E)*P,s[5]=(1-(d+f))*P,s[6]=(p+N)*P,s[7]=0,s[8]=(x+U)*k,s[9]=(p-N)*k,s[10]=(1-(d+T))*k,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=hr.set(s[0],s[1],s[2]).length(),o=hr.set(s[4],s[5],s[6]).length(),l=hr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),xi.copy(this);let c=1/a,h=1/o,m=1/l;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=h,xi.elements[5]*=h,xi.elements[6]*=h,xi.elements[8]*=m,xi.elements[9]*=m,xi.elements[10]*=m,e.setFromRotationMatrix(xi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=bi,l=!1){let c=this.elements,h=2*r/(e-t),m=2*r/(n-s),d=(e+t)/(e-t),g=(n+s)/(n-s),x,T;if(l)x=r/(a-r),T=a*r/(a-r);else if(o===bi)x=-(a+r)/(a-r),T=-2*a*r/(a-r);else if(o===Ar)x=-a/(a-r),T=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=m,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=bi,l=!1){let c=this.elements,h=2/(e-t),m=2/(n-s),d=-(e+t)/(e-t),g=-(n+s)/(n-s),x,T;if(l)x=1/(a-r),T=a/(a-r);else if(o===bi)x=-2/(a-r),T=-(a+r)/(a-r);else if(o===Ar)x=-1/(a-r),T=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=m,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=x,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},hr=new H,xi=new Fe,wg=new H(0,0,0),Eg=new H(1,1,1),fs=new H,Bo=new H,ei=new H,Qd=new Fe,tf=new zi,rs=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],m=s[2],d=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tf.setFromEuler(this),this.setFromQuaternion(tf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rs.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tg=0,ef=new H,ur=new zi,Qi=new Fe,ko=new H,da=new H,Ag=new H,Cg=new zi,nf=new H(1,0,0),sf=new H(0,1,0),rf=new H(0,0,1),af={type:"added"},Rg={type:"removed"},dr={type:"childadded",child:null},Ih={type:"childremoved",child:null},xn=class i extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new rs,n=new zi,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Me}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.multiply(ur),this}rotateOnWorldAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.premultiply(ur),this}rotateX(t){return this.rotateOnAxis(nf,t)}rotateY(t){return this.rotateOnAxis(sf,t)}rotateZ(t){return this.rotateOnAxis(rf,t)}translateOnAxis(t,e){return ef.copy(t).applyQuaternion(this.quaternion),this.position.add(ef.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nf,t)}translateY(t){return this.translateOnAxis(sf,t)}translateZ(t){return this.translateOnAxis(rf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ko.copy(t):ko.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(da,ko,this.up):Qi.lookAt(ko,da,this.up),this.quaternion.setFromRotationMatrix(Qi),s&&(Qi.extractRotation(s.matrixWorld),ur.setFromRotationMatrix(Qi),this.quaternion.premultiply(ur.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(af),dr.child=t,this.dispatchEvent(dr),dr.child=null):ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rg),Ih.child=t,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(af),dr.child=t,this.dispatchEvent(dr),dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,t,Ag),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,Cg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),m=a(t.shapes),d=a(t.skeletons),g=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xn.DEFAULT_UP=new H(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wi=class extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ig={type:"move"},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let T of t.hand.values()){let p=e.getJointPose(T,n),f=this._getHandJoint(c,T);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],d=h.position.distanceTo(m.position),g=.02,x=.005;c.inputState.pinching&&d>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ig)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new wi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},zo={h:0,s:0,l:0};function Ph(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var fe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ie.workingColorSpace){if(t=Du(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ph(a,r,t+1/3),this.g=Ph(a,r,t),this.b=Ph(a,r,t-1/3)}return Ie.colorSpaceToWorking(this,s),this}setStyle(t,e=ii){function n(r){r!==void 0&&parseFloat(r)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:de("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ii){let n=gp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}copyLinearToSRGB(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ii){return Ie.workingToColorSpace(Dn.copy(this),t),Math.round(be(Dn.r*255,0,255))*65536+Math.round(be(Dn.g*255,0,255))*256+Math.round(be(Dn.b*255,0,255))}getHexString(t=ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.workingToColorSpace(Dn.copy(this),e);let n=Dn.r,s=Dn.g,r=Dn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=h<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ie.workingColorSpace){return Ie.workingToColorSpace(Dn.copy(this),e),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=ii){Ie.workingToColorSpace(Dn.copy(this),t);let e=Dn.r,n=Dn.g,s=Dn.b;return t!==ii?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ps),this.setHSL(ps.h+t,ps.s+e,ps.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ps),t.getHSL(zo);let n=Sa(ps.h,zo.h,e),s=Sa(ps.s,zo.s,e),r=Sa(ps.l,zo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new fe;fe.NAMES=gp;var Ia=class extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rs,this.environmentIntensity=1,this.environmentRotation=new rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},vi=new H,ts=new H,Lh=new H,es=new H,fr=new H,pr=new H,of=new H,Dh=new H,Nh=new H,Uh=new H,Fh=new He,Oh=new He,Bh=new He,xs=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vi.subVectors(t,e),s.cross(vi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vi.subVectors(s,e),ts.subVectors(n,e),Lh.subVectors(t,e);let a=vi.dot(vi),o=vi.dot(ts),l=vi.dot(Lh),c=ts.dot(ts),h=ts.dot(Lh),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let d=1/m,g=(c*l-o*h)*d,x=(a*h-o*l)*d;return r.set(1-g-x,x,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,es)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,es.x),l.addScaledVector(a,es.y),l.addScaledVector(o,es.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Fh.setScalar(0),Oh.setScalar(0),Bh.setScalar(0),Fh.fromBufferAttribute(t,e),Oh.fromBufferAttribute(t,n),Bh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Fh,r.x),a.addScaledVector(Oh,r.y),a.addScaledVector(Bh,r.z),a}static isFrontFacing(t,e,n,s){return vi.subVectors(n,e),ts.subVectors(t,e),vi.cross(ts).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),ts.subVectors(this.a,this.b),vi.cross(ts).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;fr.subVectors(s,n),pr.subVectors(r,n),Dh.subVectors(t,n);let l=fr.dot(Dh),c=pr.dot(Dh);if(l<=0&&c<=0)return e.copy(n);Nh.subVectors(t,s);let h=fr.dot(Nh),m=pr.dot(Nh);if(h>=0&&m<=h)return e.copy(s);let d=l*m-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(fr,a);Uh.subVectors(t,r);let g=fr.dot(Uh),x=pr.dot(Uh);if(x>=0&&g<=x)return e.copy(r);let T=g*c-l*x;if(T<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(pr,o);let p=h*x-g*m;if(p<=0&&m-h>=0&&g-x>=0)return of.subVectors(r,s),o=(m-h)/(m-h+(g-x)),e.copy(s).addScaledVector(of,o);let f=1/(p+T+d);return a=T*f,o=d*f,e.copy(n).addScaledVector(fr,a).addScaledVector(pr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vn=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yi):yi.fromBufferAttribute(r,a),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vo.copy(n.boundingBox)),Vo.applyMatrix4(t.matrixWorld),this.union(Vo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fa),Ho.subVectors(this.max,fa),mr.subVectors(t.a,fa),gr.subVectors(t.b,fa),_r.subVectors(t.c,fa),ms.subVectors(gr,mr),gs.subVectors(_r,gr),Fs.subVectors(mr,_r);let e=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Fs.z,Fs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Fs.z,0,-Fs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Fs.y,Fs.x,0];return!kh(e,mr,gr,_r,Ho)||(e=[1,0,0,0,1,0,0,0,1],!kh(e,mr,gr,_r,Ho))?!1:(Go.crossVectors(ms,gs),e=[Go.x,Go.y,Go.z],kh(e,mr,gr,_r,Ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ns),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ns=[new H,new H,new H,new H,new H,new H,new H,new H],yi=new H,Vo=new Vn,mr=new H,gr=new H,_r=new H,ms=new H,gs=new H,Fs=new H,fa=new H,Ho=new H,Go=new H,Os=new H;function kh(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Os.fromArray(i,r);let o=s.x*Math.abs(Os.x)+s.y*Math.abs(Os.y)+s.z*Math.abs(Os.z),l=t.dot(Os),c=e.dot(Os),h=n.dot(Os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var hn=new H,Wo=new Lt,Pg=0,Xe=class extends ki{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pu,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wo.fromBufferAttribute(this,e),Wo.applyMatrix3(t),this.setXY(e,Wo.x,Wo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix3(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Pa=class extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var La=class extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var sn=class extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Lg=new Vn,pa=new H,zh=new H,Jn=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Lg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pa.subVectors(t,this.center);let e=pa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(pa,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pa.copy(t.center).add(zh)),this.expandByPoint(pa.copy(t.center).sub(zh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Dg=0,fi=new Fe,Vh=new xn,xr=new H,ni=new Vn,ma=new Vn,gn=new H,rn=class i extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ig(t)?La:Pa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Me().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,e,n){return fi.makeTranslation(t,e,n),this.applyMatrix4(fi),this}scale(t,e,n){return fi.makeScale(t,e,n),this.applyMatrix4(fi),this}lookAt(t){return Vh.lookAt(t),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new sn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ma.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(ni.min,ma.min),ni.expandByPoint(gn),gn.addVectors(ni.max,ma.max),ni.expandByPoint(gn)):(ni.expandByPoint(ma.min),ni.expandByPoint(ma.max))}ni.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)gn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(gn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)gn.fromBufferAttribute(o,c),l&&(xr.fromBufferAttribute(t,c),gn.add(xr)),s=Math.max(s,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Xe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let S=0;S<n.count;S++)o[S]=new H,l[S]=new H;let c=new H,h=new H,m=new H,d=new Lt,g=new Lt,x=new Lt,T=new H,p=new H;function f(S,I,B){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,I),m.fromBufferAttribute(n,B),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,I),x.fromBufferAttribute(r,B),h.sub(c),m.sub(c),g.sub(d),x.sub(d);let $=1/(g.x*x.y-x.x*g.y);isFinite($)&&(T.copy(h).multiplyScalar(x.y).addScaledVector(m,-g.y).multiplyScalar($),p.copy(m).multiplyScalar(g.x).addScaledVector(h,-x.x).multiplyScalar($),o[S].add(T),o[I].add(T),o[B].add(T),l[S].add(p),l[I].add(p),l[B].add(p))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let S=0,I=N.length;S<I;++S){let B=N[S],$=B.start,tt=B.count;for(let it=$,X=$+tt;it<X;it+=3)f(t.getX(it+0),t.getX(it+1),t.getX(it+2))}let U=new H,E=new H,b=new H,P=new H;function k(S){b.fromBufferAttribute(s,S),P.copy(b);let I=o[S];U.copy(I),U.sub(b.multiplyScalar(b.dot(I))).normalize(),E.crossVectors(P,I);let $=E.dot(l[S])<0?-1:1;a.setXYZW(S,U.x,U.y,U.z,$)}for(let S=0,I=N.length;S<I;++S){let B=N[S],$=B.start,tt=B.count;for(let it=$,X=$+tt;it<X;it+=3)k(t.getX(it+0)),k(t.getX(it+1)),k(t.getX(it+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);let s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,h=new H,m=new H;if(t)for(let d=0,g=t.count;d<g;d+=3){let x=t.getX(d+0),T=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,T),a.fromBufferAttribute(e,p),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(T,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,g=e.count;d<g;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)gn.fromBufferAttribute(t,e),gn.normalize(),t.setXYZ(e,gn.x,gn.y,gn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,m=o.normalized,d=new c.constructor(l.length*h),g=0,x=0;for(let T=0,p=l.length;T<p;T++){o.isInterleavedBufferAttribute?g=l[T]*o.data.stride+o.offset:g=l[T]*h;for(let f=0;f<h;f++)d[x++]=c[g++]}return new Xe(d,h,m)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,m=c.length;h<m;h++){let d=c[h],g=t(d,n);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let m=0,d=c.length;m<d;m++){let g=c[m];h.push(g.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],m=r[c];for(let d=0,g=m.length;d<g;d++)h.push(m[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Pu,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},zn=new H,Ei=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.applyMatrix4(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.applyNormalMatrix(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.transformDirection(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hh=new H,Ng=new H,Ug=new Me,Si=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Hh.subVectors(n,e).cross(Ng.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Hh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ug.getNormalMatrix(t),s=this.coplanarPoint(Hh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Fg=0,Vi=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=zr,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mu,this.blendDst=gu,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dl,this.stencilZFail=dl,this.stencilZPass=dl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){de(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){de(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new fe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Si().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var is=new H,Gh=new H,$o=new H,Xo=new H,Hs=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,is)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=is.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(is.copy(this.origin).addScaledVector(this.direction,e),is.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Gh.copy(t).add(e).multiplyScalar(.5),$o.copy(e).sub(t).normalize(),Xo.copy(this.origin).sub(Gh);let r=t.distanceTo(e)*.5,a=-this.direction.dot($o),o=Xo.dot(this.direction),l=-Xo.dot($o),c=Xo.lengthSq(),h=Math.abs(1-a*a),m,d,g,x;if(h>0)if(m=a*l-o,d=a*o-l,x=r*h,m>=0)if(d>=-x)if(d<=x){let T=1/h;m*=T,d*=T,g=m*(m+a*d+2*o)+d*(a*m+d+2*l)+c}else d=r,m=Math.max(0,-(a*d+o)),g=-m*m+d*(d+2*l)+c;else d=-r,m=Math.max(0,-(a*d+o)),g=-m*m+d*(d+2*l)+c;else d<=-x?(m=Math.max(0,-(-a*r+o)),d=m>0?-r:Math.min(Math.max(-r,-l),r),g=-m*m+d*(d+2*l)+c):d<=x?(m=0,d=Math.min(Math.max(-r,-l),r),g=d*(d+2*l)+c):(m=Math.max(0,-(a*r+o)),d=m>0?r:Math.min(Math.max(-r,-l),r),g=-m*m+d*(d+2*l)+c);else d=a>0?-r:r,m=Math.max(0,-(a*d+o)),g=-m*m+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Gh).addScaledVector($o,d),g}intersectSphere(t,e){if(t.radius<0)return null;is.subVectors(t.center,this.origin);let n=is.dot(this.direction),s=is.dot(is)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-d.z)*m,l=(t.max.z-d.z)*m):(o=(t.max.z-d.z)*m,l=(t.min.z-d.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,is)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,m=t.x-a.x,d=t.y-a.y,g=t.z-a.z,x=e.x-a.x,T=e.y-a.y,p=e.z-a.z,f=n.x-a.x,N=n.y-a.y,U=n.z-a.z,E=Math.abs(l),b=Math.abs(c),P=Math.abs(h),k,S,I,B,$,tt,it,X,j,ot,lt,Mt;if(E>=b&&E>=P?(I=l,tt=m,j=x,Mt=f,l>=0?(k=c,S=h,B=d,$=g,it=T,X=p,ot=N,lt=U):(k=h,S=c,B=g,$=d,it=p,X=T,ot=U,lt=N)):b>=P?(I=c,tt=d,j=T,Mt=N,c>=0?(k=h,S=l,B=g,$=m,it=p,X=x,ot=U,lt=f):(k=l,S=h,B=m,$=g,it=x,X=p,ot=f,lt=U)):(I=h,tt=g,j=p,Mt=U,h>=0?(k=l,S=c,B=m,$=d,it=x,X=T,ot=f,lt=N):(k=c,S=l,B=d,$=m,it=T,X=x,ot=N,lt=f)),I===0)return null;let ht=k/I,_t=S/I,mt=1/I,Vt=B-ht*tt,Ht=$-_t*tt,Ne=it-ht*j,we=X-_t*j,Re=ot-ht*Mt,dt=lt-_t*Mt,pt=Re*we-dt*Ne,Et=Vt*dt-Ht*Re,ne=Ne*Ht-we*Vt;if(s){if(pt<0||Et<0||ne<0)return null}else if((pt<0||Et<0||ne<0)&&(pt>0||Et>0||ne>0))return null;let zt=pt+Et+ne;if(zt===0)return null;let ce=mt*(pt*tt+Et*j+ne*Mt);return(zt>0?ce<0:ce>0)?null:this.at(ce/zt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gs=class extends Vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},lf=new Fe,Bs=new Hs,qo=new Jn,cf=new H,Yo=new H,Zo=new H,Jo=new H,Wh=new H,Ko=new H,hf=new H,jo=new H,vn=class extends xn{constructor(t=new rn,e=new Gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],m=r[l];h!==0&&(Wh.fromBufferAttribute(m,t),a?Ko.addScaledVector(Wh,h):Ko.addScaledVector(Wh.sub(e),h))}e.add(Ko)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(r),Bs.copy(t.ray).recast(t.near),!(qo.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(qo,cf)===null||Bs.origin.distanceToSquared(cf)>(t.far-t.near)**2))&&(lf.copy(r).invert(),Bs.copy(t.ray).applyMatrix4(lf),!(n.boundingBox!==null&&Bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,d=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,T=d.length;x<T;x++){let p=d[x],f=a[p.materialIndex],N=Math.max(p.start,g.start),U=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let E=N,b=U;E<b;E+=3){let P=o.getX(E),k=o.getX(E+1),S=o.getX(E+2);s=Qo(this,f,t,n,c,h,m,P,k,S),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,g.start),T=Math.min(o.count,g.start+g.count);for(let p=x,f=T;p<f;p+=3){let N=o.getX(p),U=o.getX(p+1),E=o.getX(p+2);s=Qo(this,a,t,n,c,h,m,N,U,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,T=d.length;x<T;x++){let p=d[x],f=a[p.materialIndex],N=Math.max(p.start,g.start),U=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let E=N,b=U;E<b;E+=3){let P=E,k=E+1,S=E+2;s=Qo(this,f,t,n,c,h,m,P,k,S),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,g.start),T=Math.min(l.count,g.start+g.count);for(let p=x,f=T;p<f;p+=3){let N=p,U=p+1,E=p+2;s=Qo(this,a,t,n,c,h,m,N,U,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Og(i,t,e,n,s,r,a,o){let l;if(t.side===Hn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ws,o),l===null)return null;jo.copy(o),jo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(jo);return c<e.near||c>e.far?null:{distance:c,point:jo.clone(),object:i}}function Qo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Yo),i.getVertexPosition(l,Zo),i.getVertexPosition(c,Jo);let h=Og(i,t,e,n,Yo,Zo,Jo,hf);if(h){let m=new H;xs.getBarycoord(hf,Yo,Zo,Jo,m),s&&(h.uv=xs.getInterpolatedAttribute(s,o,l,c,m,new Lt)),r&&(h.uv1=xs.getInterpolatedAttribute(r,o,l,c,m,new Lt)),a&&(h.normal=xs.getInterpolatedAttribute(a,o,l,c,m,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new H,materialIndex:0};xs.getNormal(Yo,Zo,Jo,d.normal),h.face=d,h.barycoord=m}return h}var Da=class extends Yn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=_n,h=_n,m,d){super(null,a,o,l,c,h,s,r,m,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Na=class extends Xe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vr=new Fe,uf=new Fe,tl=[],df=new Vn,Bg=new Fe,ga=new vn,_a=new Jn,Ua=class extends vn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Na(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Bg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vr),df.copy(t.boundingBox).applyMatrix4(vr),this.boundingBox.union(df)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vr),_a.copy(t.boundingSphere).applyMatrix4(vr),this.boundingSphere.union(_a)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ga.geometry=this.geometry,ga.material=this.material,ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_a.copy(this.boundingSphere),_a.applyMatrix4(n),t.ray.intersectsSphere(_a)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vr),uf.multiplyMatrices(n,vr),ga.matrixWorld=uf,ga.raycast(t,tl);for(let a=0,o=tl.length;a<o;a++){let l=tl[a];l.instanceId=r,l.object=this,e.push(l)}tl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Na(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Da(new Float32Array(s*this.count),s,this.count,oc,pi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ks=new Jn,kg=new Lt(.5,.5),el=new H,Dr=class{constructor(t=new Si,e=new Si,n=new Si,s=new Si,r=new Si,a=new Si){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bi,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],m=r[5],d=r[6],g=r[7],x=r[8],T=r[9],p=r[10],f=r[11],N=r[12],U=r[13],E=r[14],b=r[15];if(s[0].setComponents(c-a,g-h,f-x,b-N).normalize(),s[1].setComponents(c+a,g+h,f+x,b+N).normalize(),s[2].setComponents(c+o,g+m,f+T,b+U).normalize(),s[3].setComponents(c-o,g-m,f-T,b-U).normalize(),n)s[4].setComponents(l,d,p,E).normalize(),s[5].setComponents(c-l,g-d,f-p,b-E).normalize();else if(s[4].setComponents(c-l,g-d,f-p,b-E).normalize(),e===bi)s[5].setComponents(c+l,g+d,f+p,b+E).normalize();else if(e===Ar)s[5].setComponents(l,d,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(t){ks.center.set(0,0,0);let e=kg.distanceTo(t.center);return ks.radius=.7071067811865476+e,ks.applyMatrix4(t.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(el.x=s.normal.x>0?t.max.x:t.min.x,el.y=s.normal.y>0?t.max.y:t.min.y,el.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(el)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ws=class extends Vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Al=new H,Cl=new H,ff=new Fe,xa=new Hs,nl=new Jn,$h=new H,pf=new H,Rl=class extends xn{constructor(t=new rn,e=new Ws){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Al.fromBufferAttribute(e,s-1),Cl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Al.distanceTo(Cl);t.setAttribute("lineDistance",new sn(n,1))}else de("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(s),nl.radius+=r,t.ray.intersectsSphere(nl)===!1)return;ff.copy(s).invert(),xa.copy(t.ray).applyMatrix4(ff);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let g=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let T=g,p=x-1;T<p;T+=c){let f=h.getX(T),N=h.getX(T+1),U=il(this,t,xa,l,f,N,T);U&&e.push(U)}if(this.isLineLoop){let T=h.getX(x-1),p=h.getX(g),f=il(this,t,xa,l,T,p,x-1);f&&e.push(f)}}else{let g=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let T=g,p=x-1;T<p;T+=c){let f=il(this,t,xa,l,T,T+1,T);f&&e.push(f)}if(this.isLineLoop){let T=il(this,t,xa,l,x-1,g,x-1);T&&e.push(T)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function il(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Al.fromBufferAttribute(o,s),Cl.fromBufferAttribute(o,r),e.distanceSqToSegment(Al,Cl,$h,pf)>n)return;$h.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo($h);if(!(c<t.near||c>t.far))return{distance:c,point:pf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Fa=class extends Rl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Il=class extends Vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},mf=new Fe,nu=new Hs,sl=new Jn,rl=new H,$s=class extends xn{constructor(t=new rn,e=new Il){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sl.copy(n.boundingSphere),sl.applyMatrix4(s),sl.radius+=r,t.ray.intersectsSphere(sl)===!1)return;mf.copy(s).invert(),nu.copy(t.ray).applyMatrix4(mf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,m=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let x=d,T=g;x<T;x++){let p=c.getX(x);rl.fromBufferAttribute(m,p),gf(rl,p,l,s,t,e,this)}}else{let d=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count);for(let x=d,T=g;x<T;x++)rl.fromBufferAttribute(m,x),gf(rl,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function gf(i,t,e,n,s,r,a){let o=nu.distanceSqToPoint(i);if(o<e){let l=new H;nu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Oa=class extends Yn{constructor(t=[],e=Es,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var vs=class extends Yn{constructor(t,e,n=Ai,s,r,a,o=_n,l=_n,c,h=Bi,m=1){if(h!==Bi&&h!==As)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:m};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ir(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Pl=class extends vs{constructor(t,e=Ai,n=Es,s,r,a=_n,o=_n,l,c=Bi){let h={width:t,height:t,depth:1},m=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ba=class extends Yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Nr=class i extends rn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],m=[],d=0,g=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(m,2));function x(T,p,f,N,U,E,b,P,k,S,I){let B=E/k,$=b/S,tt=E/2,it=b/2,X=P/2,j=k+1,ot=S+1,lt=0,Mt=0,ht=new H;for(let _t=0;_t<ot;_t++){let mt=_t*$-it;for(let Vt=0;Vt<j;Vt++){let Ht=Vt*B-tt;ht[T]=Ht*N,ht[p]=mt*U,ht[f]=X,c.push(ht.x,ht.y,ht.z),ht[T]=0,ht[p]=0,ht[f]=P>0?1:-1,h.push(ht.x,ht.y,ht.z),m.push(Vt/k),m.push(1-_t/S),lt+=1}}for(let _t=0;_t<S;_t++)for(let mt=0;mt<k;mt++){let Vt=d+mt+j*_t,Ht=d+mt+j*(_t+1),Ne=d+(mt+1)+j*(_t+1),we=d+(mt+1)+j*_t;l.push(Vt,Ht,we),l.push(Ht,Ne,we),Mt+=6}o.addGroup(g,Mt,I),g+=Mt,d+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ka=class i extends rn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],m=[],d=[],g=[],x=0,T=[],p=n/2,f=0;N(),a===!1&&(t>0&&U(!0),e>0&&U(!1)),this.setIndex(h),this.setAttribute("position",new sn(m,3)),this.setAttribute("normal",new sn(d,3)),this.setAttribute("uv",new sn(g,2));function N(){let E=new H,b=new H,P=0,k=(e-t)/n;for(let S=0;S<=r;S++){let I=[],B=S/r,$=B*(e-t)+t;for(let tt=0;tt<=s;tt++){let it=tt/s,X=it*l+o,j=Math.sin(X),ot=Math.cos(X);b.x=$*j,b.y=-B*n+p,b.z=$*ot,m.push(b.x,b.y,b.z),E.set(j,k,ot).normalize(),d.push(E.x,E.y,E.z),g.push(it,1-B),I.push(x++)}T.push(I)}for(let S=0;S<s;S++)for(let I=0;I<r;I++){let B=T[I][S],$=T[I+1][S],tt=T[I+1][S+1],it=T[I][S+1];(t>0||I!==0)&&(h.push(B,$,it),P+=3),(e>0||I!==r-1)&&(h.push($,tt,it),P+=3)}c.addGroup(f,P,0),f+=P}function U(E){let b=x,P=new Lt,k=new H,S=0,I=E===!0?t:e,B=E===!0?1:-1;for(let tt=1;tt<=s;tt++)m.push(0,p*B,0),d.push(0,B,0),g.push(.5,.5),x++;let $=x;for(let tt=0;tt<=s;tt++){let X=tt/s*l+o,j=Math.cos(X),ot=Math.sin(X);k.x=I*ot,k.y=p*B,k.z=I*j,m.push(k.x,k.y,k.z),d.push(0,B,0),P.x=j*.5+.5,P.y=ot*.5*B+.5,g.push(P.x,P.y),x++}for(let tt=0;tt<s;tt++){let it=b+tt,X=$+tt;E===!0?h.push(X,X+1,it):h.push(X+1,X,it),S+=3}c.addGroup(f,S,E===!0?1:2),f+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){de("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,g=(a-h)/d;return(s+g)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Lt:new H);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new H,s=[],r=[],a=[],o=new H,l=new Fe;for(let g=0;g<=t;g++){let x=g/t;s[g]=this.getTangentAt(x,new H)}r[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),m=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(s[g-1],s[g]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(be(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(o,x))}a[g].crossVectors(s[g],r[g])}if(e===!0){let g=Math.acos(be(r[0].dot(r[t]),-1,1));g/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(g=-g);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],g*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ur=class extends si{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),d=l-this.aX,g=c-this.aY;l=d*h-g*m+this.aX,c=d*m+g*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ll=class extends Ur{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Uu(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,m){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,g=(o-a)/h-(l-a)/(h+m)+(l-o)/m;d*=h,g*=h,s(a,o,d,g)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var _f=new H,xf=new H,Xh=new Uu,qh=new Uu,Yh=new Uu,Dl=class extends si{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new H){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(xf.subVectors(s[0],s[1]).add(s[0]),c=xf);let m=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(_f.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_f),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(m),g),T=Math.pow(m.distanceToSquared(d),g),p=Math.pow(d.distanceToSquared(h),g);T<1e-4&&(T=1),x<1e-4&&(x=T),p<1e-4&&(p=T),Xh.initNonuniformCatmullRom(c.x,m.x,d.x,h.x,x,T,p),qh.initNonuniformCatmullRom(c.y,m.y,d.y,h.y,x,T,p),Yh.initNonuniformCatmullRom(c.z,m.z,d.z,h.z,x,T,p)}else this.curveType==="catmullrom"&&(Xh.initCatmullRom(c.x,m.x,d.x,h.x,this.tension),qh.initCatmullRom(c.y,m.y,d.y,h.y,this.tension),Yh.initCatmullRom(c.z,m.z,d.z,h.z,this.tension));return n.set(Xh.calc(l),qh.calc(l),Yh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new H().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vf(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function zg(i,t){let e=1-i;return e*e*t}function Vg(i,t){return 2*(1-i)*i*t}function Hg(i,t){return i*i*t}function Ma(i,t,e,n){return zg(i,t)+Vg(i,e)+Hg(i,n)}function Gg(i,t){let e=1-i;return e*e*e*t}function Wg(i,t){let e=1-i;return 3*e*e*i*t}function $g(i,t){return 3*(1-i)*i*i*t}function Xg(i,t){return i*i*i*t}function ba(i,t,e,n,s){return Gg(i,t)+Wg(i,e)+$g(i,n)+Xg(i,s)}var za=class extends si{constructor(t=new Lt,e=new Lt,n=new Lt,s=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Lt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ba(t,s.x,r.x,a.x,o.x),ba(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Nl=class extends si{constructor(t=new H,e=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new H){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ba(t,s.x,r.x,a.x,o.x),ba(t,s.y,r.y,a.y,o.y),ba(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Va=class extends si{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ul=class extends si{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ha=class extends si{constructor(t=new Lt,e=new Lt,n=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Lt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ma(t,s.x,r.x,a.x),Ma(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fl=class extends si{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ma(t,s.x,r.x,a.x),Ma(t,s.y,r.y,a.y),Ma(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ga=class extends si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return n.set(vf(o,l.x,c.x,h.x,m.x),vf(o,l.y,c.y,h.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Lt().fromArray(s))}return this}},iu=Object.freeze({__proto__:null,ArcCurve:Ll,CatmullRomCurve3:Dl,CubicBezierCurve:za,CubicBezierCurve3:Nl,EllipseCurve:Ur,LineCurve:Va,LineCurve3:Ul,QuadraticBezierCurve:Ha,QuadraticBezierCurve3:Fl,SplineCurve:Ga}),Ol=class extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new iu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new iu[s.type]().fromJSON(s))}return this}},Xs=class extends Ol{constructor(t){super(),this.type="Path",this.currentPoint=new Lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Va(this.currentPoint.clone(),new Lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ha(this.currentPoint.clone(),new Lt(t,e),new Lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new za(this.currentPoint.clone(),new Lt(t,e),new Lt(n,s),new Lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ga(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Ur(t,e,n,s,r,a,o,l);if(this.curves.length>0){let m=c.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Fr=class extends Xs{constructor(t){super(t),this.uuid=Oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Xs().fromJSON(s))}return this}};function qg(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=_p(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=jg(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,m=l;for(let d=e;d<s;d+=e){let g=i[d],x=i[d+1];g<o&&(o=g),x<l&&(l=x),g>h&&(h=g),x>m&&(m=x)}c=Math.max(h-o,m-l),c=c!==0?32767/c:0}return Wa(r,a,e,o,l,c,0),a}function _p(i,t,e,n,s){let r;if(s===c0(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=yf(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=yf(a/n|0,i[a],i[a+1],r);return r&&Or(r,r.next)&&(Xa(r),r=r.next),r}function qs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Or(e,e.next)||tn(e.prev,e,e.next)===0)){if(Xa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Wa(i,t,e,n,s,r,a){if(!i)return;!a&&r&&i0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Zg(i,n,s,r):Yg(i)){t.push(l.i,i.i,c.i),Xa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Jg(qs(i),t),Wa(i,t,e,n,s,r,2)):a===2&&Kg(i,t,e,n,s,r):Wa(qs(i),t,e,n,s,r,1);break}}}function Yg(i){let t=i.prev,e=i,n=i.next;if(tn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),m=Math.min(o,l,c),d=Math.max(s,r,a),g=Math.max(o,l,c),x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=d&&x.y>=m&&x.y<=g&&va(s,o,r,l,a,c,x.x,x.y)&&tn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Zg(i,t,e,n){let s=i.prev,r=i,a=i.next;if(tn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,m=r.y,d=a.y,g=Math.min(o,l,c),x=Math.min(h,m,d),T=Math.max(o,l,c),p=Math.max(h,m,d),f=su(g,x,t,e,n),N=su(T,p,t,e,n),U=i.prevZ,E=i.nextZ;for(;U&&U.z>=f&&E&&E.z<=N;){if(U.x>=g&&U.x<=T&&U.y>=x&&U.y<=p&&U!==s&&U!==a&&va(o,h,l,m,c,d,U.x,U.y)&&tn(U.prev,U,U.next)>=0||(U=U.prevZ,E.x>=g&&E.x<=T&&E.y>=x&&E.y<=p&&E!==s&&E!==a&&va(o,h,l,m,c,d,E.x,E.y)&&tn(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;U&&U.z>=f;){if(U.x>=g&&U.x<=T&&U.y>=x&&U.y<=p&&U!==s&&U!==a&&va(o,h,l,m,c,d,U.x,U.y)&&tn(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;E&&E.z<=N;){if(E.x>=g&&E.x<=T&&E.y>=x&&E.y<=p&&E!==s&&E!==a&&va(o,h,l,m,c,d,E.x,E.y)&&tn(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Jg(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Or(n,s)&&vp(n,e,e.next,s)&&$a(n,s)&&$a(s,n)&&(t.push(n.i,e.i,s.i),Xa(e),Xa(e.next),e=i=s),e=e.next}while(e!==i);return qs(e)}function Kg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&a0(a,o)){let l=yp(a,o);a=qs(a,a.next),l=qs(l,l.next),Wa(a,t,e,n,s,r,0),Wa(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function jg(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=_p(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(r0(c))}s.sort(Qg);for(let r=0;r<s.length;r++)e=t0(s[r],e);return e}function Qg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function t0(i,t){let e=e0(i,t);if(!e)return t;let n=yp(e,i);return qs(n,n.next),qs(e,e.next)}function e0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Or(i,e))return e;do{if(Or(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let m=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=n&&m>r&&(r=m,a=e.x<e.next.x?e:e.next,m===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&xp(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let m=Math.abs(s-e.y)/(n-e.x);$a(e,i)&&(m<h||m===h&&(e.x>a.x||e.x===a.x&&n0(a,e)))&&(a=e,h=m)}e=e.next}while(e!==o);return a}function n0(i,t){return tn(i.prev,i,t.prev)<0&&tn(t.next,i,i.next)<0}function i0(i,t,e,n){let s=i;do s.z===0&&(s.z=su(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,s0(s)}function s0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function su(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function r0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function xp(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function va(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&xp(i,t,e,n,s,r,a,o)}function a0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!o0(i,t)&&($a(i,t)&&$a(t,i)&&l0(i,t)&&(tn(i.prev,i,t.prev)||tn(i,t.prev,t))||Or(i,t)&&tn(i.prev,i,i.next)>0&&tn(t.prev,t,t.next)>0)}function tn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Or(i,t){return i.x===t.x&&i.y===t.y}function vp(i,t,e,n){let s=ol(tn(i,t,e)),r=ol(tn(i,t,n)),a=ol(tn(e,n,i)),o=ol(tn(e,n,t));return!!(s!==r&&a!==o||s===0&&al(i,e,t)||r===0&&al(i,n,t)||a===0&&al(e,i,n)||o===0&&al(e,t,n))}function al(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ol(i){return i>0?1:i<0?-1:0}function o0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&vp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function $a(i,t){return tn(i.prev,i,i.next)<0?tn(i,t,i.next)>=0&&tn(i,i.prev,t)>=0:tn(i,t,i.prev)<0||tn(i,i.next,t)<0}function l0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function yp(i,t){let e=ru(i.i,i.x,i.y),n=ru(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function yf(i,t,e,n){let s=ru(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Xa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ru(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function c0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var au=class{static triangulate(t,e,n=2){return qg(t,e,n)}},zs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Sf(t),Mf(n,t);let a=t.length;e.forEach(Sf);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Mf(n,e[l]);let o=au.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Sf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Mf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var qa=class i extends rn{constructor(t=new Fr([new Lt(.5,.5),new Lt(-.5,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new sn(s,3)),this.setAttribute("uv",new sn(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,m=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:g-.1,T=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,N=e.UVGenerator!==void 0?e.UVGenerator:h0,U,E=!1,b,P,k,S;if(f){U=f.getSpacedPoints(h),E=!0,d=!1;let rt=f.isCatmullRomCurve3?f.closed:!1;b=f.computeFrenetFrames(h,rt),P=new H,k=new H,S=new H}d||(p=0,g=0,x=0,T=0);let I=o.extractPoints(c),B=I.shape,$=I.holes;if(!zs.isClockWise(B)){B=B.reverse();for(let rt=0,bt=$.length;rt<bt;rt++){let G=$[rt];zs.isClockWise(G)&&($[rt]=G.reverse())}}function it(rt){let G=10000000000000001e-36,wt=rt[0];for(let It=1;It<=rt.length;It++){let re=It%rt.length,Xt=rt[re],le=Xt.x-wt.x,ae=Xt.y-wt.y,W=le*le+ae*ae,Pe=Math.max(Math.abs(Xt.x),Math.abs(Xt.y),Math.abs(wt.x),Math.abs(wt.y)),Gt=G*Pe*Pe;if(W<=Gt){rt.splice(re,1),It--;continue}wt=Xt}}it(B),$.forEach(it);let X=$.length,j=B;for(let rt=0;rt<X;rt++){let bt=$[rt];B=B.concat(bt)}function ot(rt,bt,G){return bt||ge("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(bt,G)}let lt=B.length;function Mt(rt,bt,G){let wt,It,re,Xt=rt.x-bt.x,le=rt.y-bt.y,ae=G.x-rt.x,W=G.y-rt.y,Pe=Xt*Xt+le*le,Gt=Xt*W-le*ae;if(Math.abs(Gt)>Number.EPSILON){let R=Math.sqrt(Pe),v=Math.sqrt(ae*ae+W*W),Q=bt.x-le/R,st=bt.y+Xt/R,ct=G.x-W/v,Tt=G.y+ae/v,Ct=((ct-Q)*W-(Tt-st)*ae)/(Xt*W-le*ae);wt=Q+Xt*Ct-rt.x,It=st+le*Ct-rt.y;let ut=wt*wt+It*It;if(ut<=2)return new Lt(wt,It);re=Math.sqrt(ut/2)}else{let R=!1;Xt>Number.EPSILON?ae>Number.EPSILON&&(R=!0):Xt<-Number.EPSILON?ae<-Number.EPSILON&&(R=!0):Math.sign(le)===Math.sign(W)&&(R=!0),R?(wt=-le,It=Xt,re=Math.sqrt(Pe)):(wt=Xt,It=le,re=Math.sqrt(Pe/2))}return new Lt(wt/re,It/re)}let ht=[];for(let rt=0,bt=j.length,G=bt-1,wt=rt+1;rt<bt;rt++,G++,wt++)G===bt&&(G=0),wt===bt&&(wt=0),ht[rt]=Mt(j[rt],j[G],j[wt]);let _t=[],mt,Vt=ht.concat();for(let rt=0,bt=X;rt<bt;rt++){let G=$[rt];mt=[];for(let wt=0,It=G.length,re=It-1,Xt=wt+1;wt<It;wt++,re++,Xt++)re===It&&(re=0),Xt===It&&(Xt=0),mt[wt]=Mt(G[wt],G[re],G[Xt]);_t.push(mt),Vt=Vt.concat(mt)}let Ht;if(p===0)Ht=zs.triangulateShape(j,$);else{let rt=[],bt=[];for(let G=0;G<p;G++){let wt=G/p,It=g*Math.cos(wt*Math.PI/2),re=x*Math.sin(wt*Math.PI/2)+T;for(let Xt=0,le=j.length;Xt<le;Xt++){let ae=ot(j[Xt],ht[Xt],re);Et(ae.x,ae.y,-It),wt===0&&rt.push(ae)}for(let Xt=0,le=X;Xt<le;Xt++){let ae=$[Xt];mt=_t[Xt];let W=[];for(let Pe=0,Gt=ae.length;Pe<Gt;Pe++){let R=ot(ae[Pe],mt[Pe],re);Et(R.x,R.y,-It),wt===0&&W.push(R)}wt===0&&bt.push(W)}}Ht=zs.triangulateShape(rt,bt)}let Ne=Ht.length,we=x+T;for(let rt=0;rt<lt;rt++){let bt=d?ot(B[rt],Vt[rt],we):B[rt];E?(k.copy(b.normals[0]).multiplyScalar(bt.x),P.copy(b.binormals[0]).multiplyScalar(bt.y),S.copy(U[0]).add(k).add(P),Et(S.x,S.y,S.z)):Et(bt.x,bt.y,0)}for(let rt=1;rt<=h;rt++)for(let bt=0;bt<lt;bt++){let G=d?ot(B[bt],Vt[bt],we):B[bt];E?(k.copy(b.normals[rt]).multiplyScalar(G.x),P.copy(b.binormals[rt]).multiplyScalar(G.y),S.copy(U[rt]).add(k).add(P),Et(S.x,S.y,S.z)):Et(G.x,G.y,m/h*rt)}for(let rt=p-1;rt>=0;rt--){let bt=rt/p,G=g*Math.cos(bt*Math.PI/2),wt=x*Math.sin(bt*Math.PI/2)+T;for(let It=0,re=j.length;It<re;It++){let Xt=ot(j[It],ht[It],wt);Et(Xt.x,Xt.y,m+G)}for(let It=0,re=$.length;It<re;It++){let Xt=$[It];mt=_t[It];for(let le=0,ae=Xt.length;le<ae;le++){let W=ot(Xt[le],mt[le],wt);E?Et(W.x,W.y+U[h-1].y,U[h-1].x+G):Et(W.x,W.y,m+G)}}}Re(),dt();function Re(){let rt=s.length/3;if(d){let bt=0,G=lt*bt;for(let wt=0;wt<Ne;wt++){let It=Ht[wt];ne(It[2]+G,It[1]+G,It[0]+G)}bt=h+p*2,G=lt*bt;for(let wt=0;wt<Ne;wt++){let It=Ht[wt];ne(It[0]+G,It[1]+G,It[2]+G)}}else{for(let bt=0;bt<Ne;bt++){let G=Ht[bt];ne(G[2],G[1],G[0])}for(let bt=0;bt<Ne;bt++){let G=Ht[bt];ne(G[0]+lt*h,G[1]+lt*h,G[2]+lt*h)}}n.addGroup(rt,s.length/3-rt,0)}function dt(){let rt=s.length/3,bt=0;pt(j,bt),bt+=j.length;for(let G=0,wt=$.length;G<wt;G++){let It=$[G];pt(It,bt),bt+=It.length}n.addGroup(rt,s.length/3-rt,1)}function pt(rt,bt){let G=rt.length;for(;--G>=0;){let wt=G,It=G-1;It<0&&(It=rt.length-1);for(let re=0,Xt=h+p*2;re<Xt;re++){let le=lt*re,ae=lt*(re+1),W=bt+wt+le,Pe=bt+It+le,Gt=bt+It+ae,R=bt+wt+ae;zt(W,Pe,Gt,R)}}}function Et(rt,bt,G){l.push(rt),l.push(bt),l.push(G)}function ne(rt,bt,G){ce(rt),ce(bt),ce(G);let wt=s.length/3,It=N.generateTopUV(n,s,wt-3,wt-2,wt-1);ue(It[0]),ue(It[1]),ue(It[2])}function zt(rt,bt,G,wt){ce(rt),ce(bt),ce(wt),ce(bt),ce(G),ce(wt);let It=s.length/3,re=N.generateSideWallUV(n,s,It-6,It-3,It-2,It-1);ue(re[0]),ue(re[1]),ue(re[3]),ue(re[1]),ue(re[2]),ue(re[3])}function ce(rt){s.push(l[rt*3+0]),s.push(l[rt*3+1]),s.push(l[rt*3+2])}function ue(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return u0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new iu[s.type]().fromJSON(s)),new i(n,t.options)}},h0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Lt(r,a),new Lt(o,l),new Lt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],m=t[n*3+2],d=t[s*3],g=t[s*3+1],x=t[s*3+2],T=t[r*3],p=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Lt(a,1-l),new Lt(c,1-m),new Lt(d,1-x),new Lt(T,1-f)]:[new Lt(o,1-l),new Lt(h,1-m),new Lt(g,1-x),new Lt(p,1-f)]}};function u0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ya=class i extends rn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,m=t/o,d=e/l,g=[],x=[],T=[],p=[];for(let f=0;f<h;f++){let N=f*d-a;for(let U=0;U<c;U++){let E=U*m-r;x.push(E,-N,0),T.push(0,0,1),p.push(U/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let N=0;N<o;N++){let U=N+c*f,E=N+c*(f+1),b=N+1+c*(f+1),P=N+1+c*f;g.push(U,E,P),g.push(E,b,P)}this.setIndex(g),this.setAttribute("position",new sn(x,3)),this.setAttribute("normal",new sn(T,3)),this.setAttribute("uv",new sn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Za=class extends rn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new H,r=new H;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let m=l[c],d=m.start,g=m.count;for(let x=d,T=d+g;x<T;x+=3)for(let p=0;p<3;p++){let f=o.getX(x+p),N=o.getX(x+(p+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,N),bf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,m=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,m),bf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new sn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function bf(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Js(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(wf(s))s.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(wf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Un(i){let t={};for(let e=0;e<i.length;e++){let n=Js(i[e]);for(let s in n)t[s]=n[s]}return t}function wf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function d0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}var mo={clone:Js,merge:Un},f0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends Vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Js(t.uniforms),this.uniformsGroups=d0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new He().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Fe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Bl=class extends yn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ja=class extends Vi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.combine=tc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},kl=class extends Vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zl=class extends Vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function yr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Zh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ys=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vl=class extends ys{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qh,endingEnd:Qh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case tu:r=t,o=2*e-n;break;case eu:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case tu:a=t,l=2*n-e;break;case eu:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,m=this._offsetNext,d=this._weightPrev,g=this._weightNext,x=(n-e)/(s-e),T=x*x,p=T*x,f=-d*p+2*d*T-d*x,N=(1+d)*p+(-1.5-2*d)*T+(-.5+d)*x+1,U=(-1-g)*p+(1.5+g)*T+.5*x,E=g*p-g*T;for(let b=0;b!==o;++b)r[b]=f*a[h+b]+N*a[c+b]+U*a[l+b]+E*a[m+b];return r}},Hl=class extends ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),m=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*m+a[l+d]*h;return r}},Gl=class extends ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Wl=class extends ys{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,m=this.outTangents;if(!h||!m){let x=(n-e)/(s-e),T=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*T+a[l+p]*x;return r}let d=o*2,g=t-1;for(let x=0;x!==o;++x){let T=a[c+x],p=a[l+x],f=g*d+x*2,N=m[f],U=m[f+1],E=t*d+x*2,b=h[E],P=h[E+1],k=g0(n,e,N,b,s);r[x]=Sp(k,T,U,P,p)}return r}};function Sp(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function m0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function g0(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Sp(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=m0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ri=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yr(e,this.TimeBufferType),this.values=yr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:yr(t.times,Array),values:yr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Zh(t.settings)&&(n.settings={inTangents:yr(t.settings.inTangents,Array),outTangents:yr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Gl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Wl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case wa:e=this.InterpolantFactoryMethodDiscrete;break;case Ml:e=this.InterpolantFactoryMethodLinear;break;case ul:e=this.InterpolantFactoryMethodSmooth;break;case jh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return de("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wa;case this.InterpolantFactoryMethodLinear:return Ml;case this.InterpolantFactoryMethodSmooth:return ul;case this.InterpolantFactoryMethodBezier:return jh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Zh(this.settings)&&(Ef(this.settings.inTangents,t),Ef(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ge("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ge("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ge("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ge("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&sg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ge("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ul,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let m=o*n,d=m-n,g=m+n;for(let x=0;x!==n;++x){let T=e[m+x];if(T!==e[d+x]||T!==e[g+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let m=o*n,d=a*n;for(let g=0;g!==n;++g)e[d+g]=e[m+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Zh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ef(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}ri.prototype.ValueTypeName="";ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=Ml;var Ss=class extends ri{constructor(t,e,n){super(t,e,n)}};Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=wa;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var $l=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}};$l.prototype.ValueTypeName="color";var Xl=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}};Xl.prototype.ValueTypeName="number";var ql=class extends ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)zi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ka=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ql(this.times,this.values,this.getValueSize(),t)}};Ka.prototype.ValueTypeName="quaternion";Ka.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends ri{constructor(t,e,n){super(t,e,n)}};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=wa;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}};Yl.prototype.ValueTypeName="vector";var Zl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,m){return c.push(h,m),this},this.removeHandler=function(h){let m=c.indexOf(h);return m!==-1&&c.splice(m,2),this},this.getHandler=function(h){for(let m=0,d=c.length;m<d;m+=2){let g=c[m],x=c[m+1];if(g.global&&(g.lastIndex=0),g.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Mp=new Zl,Jl=class{constructor(t){this.manager=t!==void 0?t:Mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Jl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ja=class extends xn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Qa=class extends ja{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Jh=new Fe,Tf=new H,Af=new H,Kl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Tf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tf),Af.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Af),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Jh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Jh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ar||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Jh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ll=new H,cl=new zi,Ui=new H,to=class extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ll,cl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ll,cl,Ui.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ll,cl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ll,cl,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_s=new H,Cf=new Lt,Rf=new Lt,Nn=class extends to{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_s.x,_s.y).multiplyScalar(-t/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_s.x,_s.y).multiplyScalar(-t/_s.z)}getViewSize(t,e){return this.getViewBounds(t,Cf,Rf),e.subVectors(Rf,Cf)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ya*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Br=class extends to{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ou=class extends Kl{constructor(){super(new Br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},eo=class extends ja{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new ou}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var no=class extends rn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Sr=-90,Mr=1,jl=class extends xn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nn(Sr,Mr,t,e);s.layers=this.layers,this.add(s);let r=new Nn(Sr,Mr,t,e);r.layers=this.layers,this.add(r);let a=new Nn(Sr,Mr,t,e);a.layers=this.layers,this.add(a);let o=new Nn(Sr,Mr,t,e);o.layers=this.layers,this.add(o);let l=new Nn(Sr,Mr,t,e);l.layers=this.layers,this.add(l);let c=new Nn(Sr,Mr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,m=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=T,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(m,d,g),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ql=class extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ou="\\[\\]\\.:\\/",_0=new RegExp("["+Ou+"]","g"),Bu="[^"+Ou+"]",x0="[^"+Ou.replace("\\.","")+"]",v0=/((?:WC+[\/:])*)/.source.replace("WC",Bu),y0=/(WCOD+)?/.source.replace("WCOD",x0),S0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bu),M0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bu),b0=new RegExp("^"+v0+y0+S0+M0+"$"),w0=["material","materials","bones","map"],lu=class{constructor(t,e,n){let s=n||je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},je=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_0,"")}static parseTrackName(t){let e=b0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);w0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){de("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=lu;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kS=new Float32Array(1);var bs=class extends Tl{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var If=new Fe,io=class{constructor(t,e,n=0,s=1/0){this.ray=new Hs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ge("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return If.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(If),this}intersectObject(t,e=!0,n=[]){return cu(t,this,n,e),n.sort(Pf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)cu(t[s],this,n,e);return n.sort(Pf),n}};function Pf(i,t){return i.distance-t.distance}function cu(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)cu(r[a],t,e,!0)}}var hu=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Lf=new H,hl=new H,br=new H,wr=new H,Kh=new H,E0=new H,T0=new H,so=class{constructor(t=new H,e=new H){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Lf.subVectors(t,this.start),hl.subVectors(this.end,this.start);let n=hl.dot(hl);if(n===0)return 0;let r=hl.dot(Lf)/n;return e&&(r=be(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=E0,n=T0){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;br.subVectors(c,o),wr.subVectors(h,l),Kh.subVectors(o,l);let m=br.dot(br),d=wr.dot(wr),g=wr.dot(Kh);if(m<=s&&d<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(m<=s)r=0,a=g/d,a=be(a,0,1);else{let x=br.dot(Kh);if(d<=s)a=0,r=be(-x/m,0,1);else{let T=br.dot(wr),p=m*d-T*T;p!==0?r=be((T*g-x*d)/p,0,1):r=0,a=(T*r+g)/d,a<0?(a=0,r=be(-x/m,0,1)):a>1&&(a=1,r=be((T-x)/m,0,1))}}return e.copy(o).addScaledVector(br,r),n.copy(l).addScaledVector(wr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function ku(i,t,e,n){let s=A0(n);switch(e){case Ru:return i*t;case oc:return i*t/s.components*s.byteLength;case lc:return i*t/s.components*s.byteLength;case Cs:return i*t*2/s.components*s.byteLength;case cc:return i*t*2/s.components*s.byteLength;case Iu:return i*t*3/s.components*s.byteLength;case mi:return i*t*4/s.components*s.byteLength;case hc:return i*t*4/s.components*s.byteLength;case lo:case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dc:case pc:return Math.max(i,16)*Math.max(t,8)/4;case uc:case fc:return Math.max(i,8)*Math.max(t,8)/2;case mc:case gc:case xc:case vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _c:case fo:case yc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Nc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Uc:case Fc:case Oc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bc:case kc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case po:case zc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function A0(i){switch(i){case Kn:case Eu:return{byteLength:1,components:1};case Vr:case Tu:case Ci:return{byteLength:2,components:1};case rc:case ac:return{byteLength:2,components:4};case Ai:case sc:case pi:return{byteLength:4,components:1};case Au:case Cu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Wp(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function R0(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,m=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let h=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,h);else{m.sort((g,x)=>g.start-x.start);let d=0;for(let g=1;g<m.length;g++){let x=m[d],T=m[g];T.start<=x.start+x.count+1?x.count=Math.max(x.count,T.start+T.count-x.start):(++d,m[d]=T)}m.length=d+1;for(let g=0,x=m.length;g<x;g++){let T=m[g];i.bufferSubData(c,T.start*h.BYTES_PER_ELEMENT,h,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var I0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P0=`#ifdef USE_ALPHAHASH
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
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F0=`#ifdef USE_AOMAP
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
#endif`,O0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B0=`#ifdef USE_BATCHING
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
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G0=`#ifdef USE_IRIDESCENCE
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
#endif`,W0=`#ifdef USE_BUMPMAP
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
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Q0=`#define PI 3.141592653589793
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
} // validated`,t_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e_=`vec3 transformedNormal = objectNormal;
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
#endif`,n_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a_="gl_FragColor = linearToOutputTexel( gl_FragColor );",o_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l_=`#ifdef USE_ENVMAP
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
#endif`,c_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
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
#endif`,u_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
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
#endif`,f_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,__=`#ifdef USE_GRADIENTMAP
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
}`,x_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,M_=`#ifdef USE_ENVMAP
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
#endif`,b_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A_=`PhysicalMaterial material;
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
#endif`,C_=`uniform sampler2D dfgLUT;
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
}`,R_=`
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
#endif`,I_=`#if defined( RE_IndirectDiffuse )
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
#endif`,P_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,D_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z_=`#if defined( USE_POINTS_UV )
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
#endif`,V_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X_=`#ifdef USE_MORPHTARGETS
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
#endif`,q_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Z_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,J_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Q_=`#ifdef USE_NORMALMAP
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
#endif`,tx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ex=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mx=`float getShadowMask() {
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
}`,gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_x=`#ifdef USE_SKINNING
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
#endif`,xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vx=`#ifdef USE_SKINNING
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
#endif`,yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wx=`#ifdef USE_TRANSMISSION
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
#endif`,Ex=`#ifdef USE_TRANSMISSION
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
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Px=`uniform sampler2D t2D;
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
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`#include <common>
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
}`,Ox=`#if DEPTH_PACKING == 3200
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
}`,Bx=`#define DISTANCE
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
}`,kx=`#define DISTANCE
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
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`uniform float scale;
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
}`,Gx=`uniform vec3 diffuse;
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
}`,Wx=`#include <common>
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
}`,$x=`uniform vec3 diffuse;
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
}`,Xx=`#define LAMBERT
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
}`,qx=`#define LAMBERT
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
}`,Yx=`#define MATCAP
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
}`,Zx=`#define MATCAP
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
}`,Jx=`#define NORMAL
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
}`,Kx=`#define NORMAL
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
}`,jx=`#define PHONG
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
}`,Qx=`#define PHONG
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
}`,tv=`#define STANDARD
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
}`,ev=`#define STANDARD
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
}`,nv=`#define TOON
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
}`,iv=`#define TOON
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
}`,sv=`uniform float size;
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
}`,rv=`uniform vec3 diffuse;
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
}`,av=`#include <common>
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
}`,ov=`uniform vec3 color;
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
}`,lv=`uniform float rotation;
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
}`,cv=`uniform vec3 diffuse;
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
}`,Te={alphahash_fragment:I0,alphahash_pars_fragment:P0,alphamap_fragment:L0,alphamap_pars_fragment:D0,alphatest_fragment:N0,alphatest_pars_fragment:U0,aomap_fragment:F0,aomap_pars_fragment:O0,batching_pars_vertex:B0,batching_vertex:k0,begin_vertex:z0,beginnormal_vertex:V0,bsdfs:H0,iridescence_fragment:G0,bumpmap_pars_fragment:W0,clipping_planes_fragment:$0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:q0,clipping_planes_vertex:Y0,color_fragment:Z0,color_pars_fragment:J0,color_pars_vertex:K0,color_vertex:j0,common:Q0,cube_uv_reflection_fragment:t_,defaultnormal_vertex:e_,displacementmap_pars_vertex:n_,displacementmap_vertex:i_,emissivemap_fragment:s_,emissivemap_pars_fragment:r_,colorspace_fragment:a_,colorspace_pars_fragment:o_,envmap_fragment:l_,envmap_common_pars_fragment:c_,envmap_pars_fragment:h_,envmap_pars_vertex:u_,envmap_physical_pars_fragment:M_,envmap_vertex:d_,fog_vertex:f_,fog_pars_vertex:p_,fog_fragment:m_,fog_pars_fragment:g_,gradientmap_pars_fragment:__,lightmap_pars_fragment:x_,lights_lambert_fragment:v_,lights_lambert_pars_fragment:y_,lights_pars_begin:S_,lights_toon_fragment:b_,lights_toon_pars_fragment:w_,lights_phong_fragment:E_,lights_phong_pars_fragment:T_,lights_physical_fragment:A_,lights_physical_pars_fragment:C_,lights_fragment_begin:R_,lights_fragment_maps:I_,lights_fragment_end:P_,lightprobes_pars_fragment:L_,logdepthbuf_fragment:D_,logdepthbuf_pars_fragment:N_,logdepthbuf_pars_vertex:U_,logdepthbuf_vertex:F_,map_fragment:O_,map_pars_fragment:B_,map_particle_fragment:k_,map_particle_pars_fragment:z_,metalnessmap_fragment:V_,metalnessmap_pars_fragment:H_,morphinstance_vertex:G_,morphcolor_vertex:W_,morphnormal_vertex:$_,morphtarget_pars_vertex:X_,morphtarget_vertex:q_,normal_fragment_begin:Y_,normal_fragment_maps:Z_,normal_pars_fragment:J_,normal_pars_vertex:K_,normal_vertex:j_,normalmap_pars_fragment:Q_,clearcoat_normal_fragment_begin:tx,clearcoat_normal_fragment_maps:ex,clearcoat_pars_fragment:nx,iridescence_pars_fragment:ix,opaque_fragment:sx,packing:rx,premultiplied_alpha_fragment:ax,project_vertex:ox,dithering_fragment:lx,dithering_pars_fragment:cx,roughnessmap_fragment:hx,roughnessmap_pars_fragment:ux,shadowmap_pars_fragment:dx,shadowmap_pars_vertex:fx,shadowmap_vertex:px,shadowmask_pars_fragment:mx,skinbase_vertex:gx,skinning_pars_vertex:_x,skinning_vertex:xx,skinnormal_vertex:vx,specularmap_fragment:yx,specularmap_pars_fragment:Sx,tonemapping_fragment:Mx,tonemapping_pars_fragment:bx,transmission_fragment:wx,transmission_pars_fragment:Ex,uv_pars_fragment:Tx,uv_pars_vertex:Ax,uv_vertex:Cx,worldpos_vertex:Rx,background_vert:Ix,background_frag:Px,backgroundCube_vert:Lx,backgroundCube_frag:Dx,cube_vert:Nx,cube_frag:Ux,depth_vert:Fx,depth_frag:Ox,distance_vert:Bx,distance_frag:kx,equirect_vert:zx,equirect_frag:Vx,linedashed_vert:Hx,linedashed_frag:Gx,meshbasic_vert:Wx,meshbasic_frag:$x,meshlambert_vert:Xx,meshlambert_frag:qx,meshmatcap_vert:Yx,meshmatcap_frag:Zx,meshnormal_vert:Jx,meshnormal_frag:Kx,meshphong_vert:jx,meshphong_frag:Qx,meshphysical_vert:tv,meshphysical_frag:ev,meshtoon_vert:nv,meshtoon_frag:iv,points_vert:sv,points_frag:rv,shadow_vert:av,shadow_frag:ov,sprite_vert:lv,sprite_frag:cv},Ft={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},Gn={basic:{uniforms:Un([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Un([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Un([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Un([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:Un([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new fe(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:Un([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Un([Ft.points,Ft.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Un([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Un([Ft.common,Ft.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Un([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:Un([Ft.sprite,Ft.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distance:{uniforms:Un([Ft.common,Ft.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distance_vert,fragmentShader:Te.distance_frag},shadow:{uniforms:Un([Ft.lights,Ft.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Gn.physical={uniforms:Un([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};var Wc={r:0,b:0,g:0},hv=new Fe,$p=new Me;$p.set(-1,0,0,0,1,0,0,0,1);function uv(i,t,e,n,s,r){let a=new fe(0),o=s===!0?0:1,l,c,h=null,m=0,d=null;function g(N){let U=N.isScene===!0?N.background:null;if(U&&U.isTexture){let E=N.backgroundBlurriness>0;U=t.get(U,E)}return U}function x(N){let U=!1,E=g(N);E===null?p(a,o):E&&E.isColor&&(p(E,1),U=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||U)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(N,U){let E=g(U);E&&(E.isCubeTexture||E.mapping===ao)?(c===void 0&&(c=new vn(new Nr(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Js(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hv.makeRotationFromEuler(U.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($p),c.material.toneMapped=Ie.getTransfer(E.colorSpace)!==Ve,(h!==E||m!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,m=E.version,d=i.toneMapping),c.layers.enableAll(),N.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new vn(new Ya(2,2),new yn({name:"BackgroundMaterial",uniforms:Js(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,l.material.toneMapped=Ie.getTransfer(E.colorSpace)!==Ve,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||m!==E.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,m=E.version,d=i.toneMapping),l.layers.enableAll(),N.unshift(l,l.geometry,l.material,0,0,null))}function p(N,U){N.getRGB(Wc,Fu(i)),e.buffers.color.setClear(Wc.r,Wc.g,Wc.b,U,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(N,U=1){a.set(N),o=U,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(N){o=N,p(a,o)},render:x,addToRenderList:T,dispose:f}}function dv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o($,tt,it,X,j){let ot=!1,lt=m($,X,it,tt);r!==lt&&(r=lt,c(r.object)),ot=g($,X,it,j),ot&&x($,X,it,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(ot||a)&&(a=!1,E($,tt,it,X),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return i.createVertexArray()}function c($){return i.bindVertexArray($)}function h($){return i.deleteVertexArray($)}function m($,tt,it,X){let j=X.wireframe===!0,ot=n[tt.id];ot===void 0&&(ot={},n[tt.id]=ot);let lt=$.isInstancedMesh===!0?$.id:0,Mt=ot[lt];Mt===void 0&&(Mt={},ot[lt]=Mt);let ht=Mt[it.id];ht===void 0&&(ht={},Mt[it.id]=ht);let _t=ht[j];return _t===void 0&&(_t=d(l()),ht[j]=_t),_t}function d($){let tt=[],it=[],X=[];for(let j=0;j<e;j++)tt[j]=0,it[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:tt,enabledAttributes:it,attributeDivisors:X,object:$,attributes:{},index:null}}function g($,tt,it,X){let j=r.attributes,ot=tt.attributes,lt=0,Mt=it.getAttributes();for(let ht in Mt)if(Mt[ht].location>=0){let mt=j[ht],Vt=ot[ht];if(Vt===void 0&&(ht==="instanceMatrix"&&$.instanceMatrix&&(Vt=$.instanceMatrix),ht==="instanceColor"&&$.instanceColor&&(Vt=$.instanceColor)),mt===void 0||mt.attribute!==Vt||Vt&&mt.data!==Vt.data)return!0;lt++}return r.attributesNum!==lt||r.index!==X}function x($,tt,it,X){let j={},ot=tt.attributes,lt=0,Mt=it.getAttributes();for(let ht in Mt)if(Mt[ht].location>=0){let mt=ot[ht];mt===void 0&&(ht==="instanceMatrix"&&$.instanceMatrix&&(mt=$.instanceMatrix),ht==="instanceColor"&&$.instanceColor&&(mt=$.instanceColor));let Vt={};Vt.attribute=mt,mt&&mt.data&&(Vt.data=mt.data),j[ht]=Vt,lt++}r.attributes=j,r.attributesNum=lt,r.index=X}function T(){let $=r.newAttributes;for(let tt=0,it=$.length;tt<it;tt++)$[tt]=0}function p($){f($,0)}function f($,tt){let it=r.newAttributes,X=r.enabledAttributes,j=r.attributeDivisors;it[$]=1,X[$]===0&&(i.enableVertexAttribArray($),X[$]=1),j[$]!==tt&&(i.vertexAttribDivisor($,tt),j[$]=tt)}function N(){let $=r.newAttributes,tt=r.enabledAttributes;for(let it=0,X=tt.length;it<X;it++)tt[it]!==$[it]&&(i.disableVertexAttribArray(it),tt[it]=0)}function U($,tt,it,X,j,ot,lt){lt===!0?i.vertexAttribIPointer($,tt,it,j,ot):i.vertexAttribPointer($,tt,it,X,j,ot)}function E($,tt,it,X){T();let j=X.attributes,ot=it.getAttributes(),lt=tt.defaultAttributeValues;for(let Mt in ot){let ht=ot[Mt];if(ht.location>=0){let _t=j[Mt];if(_t===void 0&&(Mt==="instanceMatrix"&&$.instanceMatrix&&(_t=$.instanceMatrix),Mt==="instanceColor"&&$.instanceColor&&(_t=$.instanceColor)),_t!==void 0){let mt=_t.normalized,Vt=_t.itemSize,Ht=t.get(_t);if(Ht===void 0)continue;let Ne=Ht.buffer,we=Ht.type,Re=Ht.bytesPerElement,dt=we===i.INT||we===i.UNSIGNED_INT||_t.gpuType===sc;if(_t.isInterleavedBufferAttribute){let pt=_t.data,Et=pt.stride,ne=_t.offset;if(pt.isInstancedInterleavedBuffer){for(let zt=0;zt<ht.locationSize;zt++)f(ht.location+zt,pt.meshPerAttribute);$.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let zt=0;zt<ht.locationSize;zt++)p(ht.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let zt=0;zt<ht.locationSize;zt++)U(ht.location+zt,Vt/ht.locationSize,we,mt,Et*Re,(ne+Vt/ht.locationSize*zt)*Re,dt)}else{if(_t.isInstancedBufferAttribute){for(let pt=0;pt<ht.locationSize;pt++)f(ht.location+pt,_t.meshPerAttribute);$.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let pt=0;pt<ht.locationSize;pt++)p(ht.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let pt=0;pt<ht.locationSize;pt++)U(ht.location+pt,Vt/ht.locationSize,we,mt,Vt*Re,Vt/ht.locationSize*pt*Re,dt)}}else if(lt!==void 0){let mt=lt[Mt];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(ht.location,mt);break;case 3:i.vertexAttrib3fv(ht.location,mt);break;case 4:i.vertexAttrib4fv(ht.location,mt);break;default:i.vertexAttrib1fv(ht.location,mt)}}}}N()}function b(){I();for(let $ in n){let tt=n[$];for(let it in tt){let X=tt[it];for(let j in X){let ot=X[j];for(let lt in ot)h(ot[lt].object),delete ot[lt];delete X[j]}}delete n[$]}}function P($){if(n[$.id]===void 0)return;let tt=n[$.id];for(let it in tt){let X=tt[it];for(let j in X){let ot=X[j];for(let lt in ot)h(ot[lt].object),delete ot[lt];delete X[j]}}delete n[$.id]}function k($){for(let tt in n){let it=n[tt];for(let X in it){let j=it[X];if(j[$.id]===void 0)continue;let ot=j[$.id];for(let lt in ot)h(ot[lt].object),delete ot[lt];delete j[$.id]}}}function S($){for(let tt in n){let it=n[tt],X=$.isInstancedMesh===!0?$.id:0,j=it[X];if(j!==void 0){for(let ot in j){let lt=j[ot];for(let Mt in lt)h(lt[Mt].object),delete lt[Mt];delete j[ot]}delete it[X],Object.keys(it).length===0&&delete n[tt]}}}function I(){B(),a=!0,r!==s&&(r=s,c(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:B,dispose:b,releaseStatesOfGeometry:P,releaseStatesOfObject:S,releaseStatesOfProgram:k,initAttributes:T,enableAttribute:p,disableUnusedAttributes:N}}function fv(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let g=0;g<h;g++)d+=c[g];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function pv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let k=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(k){return!(k!==mi&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(k){let S=k===Ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(k!==Kn&&k!==pi&&!S&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(k){if(k==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(de("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let m=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&de("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),U=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:x,maxTextureSize:T,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:E,maxSamples:b,samples:P}}function mv(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Si,o=new Me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){let g=m.length!==0||d||n!==0||s;return s=d,n=m.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,d){e=h(m,d,0)},this.setState=function(m,d,g){let x=m.clippingPlanes,T=m.clipIntersection,p=m.clipShadows,f=i.get(m);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{let N=r?0:n,U=N*4,E=f.clippingState||null;l.value=E,E=h(x,d,U,g);for(let b=0;b!==U;++b)E[b]=e[b];f.clippingState=E,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(m,d,g,x){let T=m!==null?m.length:0,p=null;if(T!==0){if(p=l.value,x!==!0||p===null){let f=g+T*4,N=d.matrixWorldInverse;o.getNormalMatrix(N),(p===null||p.length<f)&&(p=new Float32Array(f));for(let U=0,E=g;U!==T;++U,E+=4)a.copy(m[U]).applyMatrix4(N,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,p}}var Wr=4,gv=6,_v=20,xv=256,go=new Br,bp=new fe,zu=null,Vu=0,Hu=0,Gu=!1,vv=new H,Ks=new H,Xc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=vv}=r;zu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zu,Vu,Hu),this._renderer.xr.enabled=Gu,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Es||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Ci,format:mi,colorSpace:Ea,depthBuffer:!1},s=wp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wp(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=yv(r)),this._blurMaterial=Mv(r,t,e),this._ggxMaterial=Sv(r,t,e)}return s}_compileMaterial(t){let e=new vn(new rn,t);this._renderer.compile(e,go)}_sceneToCubeUV(t,e,n,s,r){let l=new Nn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,d=m.autoClear,g=m.toneMapping;m.getClearColor(bp),m.toneMapping=Ti,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vn(new Nr,new Gs({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));let T=this._backgroundBox,p=T.material,f=!1,N=t.background;N?N.isColor&&(p.color.copy(N),t.background=null,f=!0):(p.color.copy(bp),f=!0);for(let U=0;U<6;U++){let E=U%3;E===0?(l.up.set(0,c[U],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[U],r.y,r.z)):E===1?(l.up.set(0,0,c[U]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[U],r.z)):(l.up.set(0,c[U],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[U]));let b=this._cubeSize;Gr(s,E*b,U>2?b:0,b,b),m.setRenderTarget(s),f&&m.render(T,l),m.render(t,l)}m.toneMapping=g,m.autoClear=d,t.background=N}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Es||t.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ep());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Gr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,go)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),m=Math.sqrt(c*c-h*h),d=c*1.25,g=m*d,{_lodMax:x}=this,T=this._sizeLods[n],p=3*T*(n>x-Wr?n-x+Wr:0),f=4*(this._cubeSize-T);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=x-e,Gr(r,p,f,3*T,2*T),s.setRenderTarget(r),s.render(o,go),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Gr(t,p,f,3*T,2*T),s.setRenderTarget(t),s.render(o,go)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],m=3*h*(s>this._lodMax-Wr?s-this._lodMax+Wr:0),d=4*(this._cubeSize-h);Gr(e,m,d,3*h,2*h),a.setRenderTarget(e),a.render(l,go)}};function yv(i){let t=[],e=[],n=i,s=i-Wr+1+gv;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],m=6,d=6,g=3,x=new Float32Array(g*d*m),T=new Float32Array(g*d*m);for(let f=0;f<m;f++){let N=f%3*2/3-1,U=f>2?0:-1,E=[N,U,0,N+2/3,U,0,N+2/3,U+1,0,N,U,0,N+2/3,U+1,0,N,U+1,0];x.set(E,g*d*f);for(let b=0;b<d;b++){let P=h[b*2]*2-1,k=h[b*2+1]*2-1;f===0?Ks.set(1,k,P):f===1?Ks.set(-P,1,-k):f===2?Ks.set(-P,k,1):f===3?Ks.set(-1,k,-P):f===4?Ks.set(-P,-1,k):Ks.set(P,k,-1),Ks.toArray(T,(f*d+b)*g)}}let p=new rn;p.setAttribute("position",new Xe(x,g)),p.setAttribute("outputDirection",new Xe(T,g)),e.push(new vn(p,null)),n>Wr&&n--}return{lodMeshes:e,sizeLods:t}}function wp(i,t,e){let n=new Zn(i,t,e);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Sv(i,t,e){return new yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Mv(i,t,e){return new yn({name:"SphericalGaussianBlur",defines:{SAMPLES:_v,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Ep(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Tp(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var qc=class extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Oa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nr(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:Gi});r.uniforms.tEquirect.value=e;let a=new vn(s,r),o=e.minFilter;return e.minFilter===Ts&&(e.minFilter=wn),new jl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function bv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,g=!1){return d==null?null:g?a(d):r(d)}function r(d){if(d&&d.isTexture){let g=d.mapping;if(g===ec||g===nc)if(t.has(d)){let x=t.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let T=new qc(x.height);return T.fromEquirectangularTexture(i,d),t.set(d,T),d.addEventListener("dispose",c),o(T.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let g=d.mapping,x=g===ec||g===nc,T=g===Es||g===Zs;if(x||T){let p=e.get(d),f=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Xc(i)),p=x?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let N=d.image;return x&&N&&N.height>0||T&&N&&l(N)?(n===null&&(n=new Xc(i)),p=x?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,g){return g===ec?d.mapping=Es:g===nc&&(d.mapping=Zs),d}function l(d){let g=0,x=6;for(let T=0;T<x;T++)d[T]!==void 0&&g++;return g===x}function c(d){let g=d.target;g.removeEventListener("dispose",c);let x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function h(d){let g=d.target;g.removeEventListener("dispose",h);let x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function wv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Vs("WebGLRenderer: "+n+" extension not supported."),s}}}function Ev(i,t,e,n){let s={},r=new WeakMap;function a(m){let d=m.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete s[d.id];let g=r.get(d);g&&(t.remove(g),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(m,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(m){let d=m.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER)}function c(m){let d=[],g=m.index,x=m.attributes.position,T=0;if(x===void 0)return;if(g!==null){let N=g.array;T=g.version;for(let U=0,E=N.length;U<E;U+=3){let b=N[U+0],P=N[U+1],k=N[U+2];d.push(b,P,P,k,k,b)}}else{let N=x.array;T=x.version;for(let U=0,E=N.length/3-1;U<E;U+=3){let b=U+0,P=U+1,k=U+2;d.push(b,P,P,k,k,b)}}let p=new(x.count>=65535?La:Pa)(d,1);p.version=T;let f=r.get(m);f&&t.remove(f),r.set(m,p)}function h(m){let d=r.get(m);if(d){let g=m.index;g!==null&&d.version<g.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:h}}function Tv(i,t,e){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,d){i.drawElements(n,d,r,m*a),e.update(d,n,1)}function c(m,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,m*a,g),e.update(d,n,g))}function h(m,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,m,0,g);let T=0;for(let p=0;p<g;p++)T+=d[p];e.update(T,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Av(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cv(i,t,e){let n=new WeakMap,s=new He;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==m){let I=function(){k.dispose(),n.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,T=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],N=o.morphAttributes.color||[],U=0;g===!0&&(U=1),x===!0&&(U=2),T===!0&&(U=3);let E=o.attributes.position.count*U,b=1;E>t.maxTextureSize&&(b=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let P=new Float32Array(E*b*4*m),k=new Ra(P,E,b,m);k.type=pi,k.needsUpdate=!0;let S=U*4;for(let B=0;B<m;B++){let $=p[B],tt=f[B],it=N[B],X=E*b*4*B;for(let j=0;j<$.count;j++){let ot=j*S;g===!0&&(s.fromBufferAttribute($,j),P[X+ot+0]=s.x,P[X+ot+1]=s.y,P[X+ot+2]=s.z,P[X+ot+3]=0),x===!0&&(s.fromBufferAttribute(tt,j),P[X+ot+4]=s.x,P[X+ot+5]=s.y,P[X+ot+6]=s.z,P[X+ot+7]=0),T===!0&&(s.fromBufferAttribute(it,j),P[X+ot+8]=s.x,P[X+ot+9]=s.y,P[X+ot+10]=s.z,P[X+ot+11]=it.itemSize===4?s.w:1)}}d={count:m,texture:k,size:new Lt(E,b)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let T=0;T<c.length;T++)g+=c[T];let x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Rv(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,m=c.geometry,d=t.get(c,m);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let g=c.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Iv={[_u]:"LINEAR_TONE_MAPPING",[xu]:"REINHARD_TONE_MAPPING",[vu]:"CINEON_TONE_MAPPING",[yu]:"ACES_FILMIC_TONE_MAPPING",[Mu]:"AGX_TONE_MAPPING",[bu]:"NEUTRAL_TONE_MAPPING",[Su]:"CUSTOM_TONE_MAPPING"};function Pv(i,t,e,n,s,r){let a=new Zn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new rn;c.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new sn([0,2,0,0,2,0],2));let h=new Bl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new vn(c,h),d=new Br(-1,1,1,-1,0,1),g=null,x=null,T=!1,p,f=null,N=[],U=!1;this.setSize=function(E,b){a.setSize(E,b),o!==null&&o.setSize(E,b),l!==null&&l.setSize(E,b);for(let P=0;P<N.length;P++){let k=N[P];k.setSize&&k.setSize(E,b)}},this.setEffects=function(E){N=E,U=N.length>0&&N[0].isRenderPass===!0;let b=a.width,P=a.height;N.length>0&&o===null&&(o=new Zn(b,P,{type:Ci,depthBuffer:!1,stencilBuffer:!1}),l=new Zn(b,P,{type:Ci,depthBuffer:!1,stencilBuffer:!1}));for(let k=0;k<N.length;k++){let S=N[k];S.setSize&&S.setSize(b,P)}},this.begin=function(E,b){if(T||E.toneMapping===Ti&&N.length===0)return!1;if(f=b,b!==null){let P=b.width,k=b.height;(a.width!==P||a.height!==k)&&this.setSize(P,k)}return U===!1&&E.setRenderTarget(a),p=E.toneMapping,E.toneMapping=Ti,!0},this.hasRenderPass=function(){return U},this.end=function(E,b){E.toneMapping=p,T=!0;let P=a,k=o;for(let S=0;S<N.length;S++){let I=N[S];I.enabled!==!1&&(I.render(E,k,P,b),I.needsSwap!==!1&&(P=k,k=k===o?l:o))}if(g!==E.outputColorSpace||x!==E.toneMapping){g=E.outputColorSpace,x=E.toneMapping,h.defines={},Ie.getTransfer(g)===Ve&&(h.defines.SRGB_TRANSFER="");let S=Iv[x];S&&(h.defines[S]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,E.setRenderTarget(f),E.render(m,d),f=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Xp=new Yn,Xu=new vs(1,1),qp=new Ra,Yp=new El,Zp=new Oa,Ap=[],Cp=[],Rp=new Float32Array(16),Ip=new Float32Array(9),Pp=new Float32Array(4);function Xr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ap[s];if(r===void 0&&(r=new Float32Array(s),Ap[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function dn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jc(i,t){let e=Cp[t];e===void 0&&(e=new Int32Array(t),Cp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Dv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2fv(this.addr,t),fn(e,t)}}function Nv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(dn(e,t))return;i.uniform3fv(this.addr,t),fn(e,t)}}function Uv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4fv(this.addr,t),fn(e,t)}}function Fv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;Pp.set(n),i.uniformMatrix2fv(this.addr,!1,Pp),fn(e,n)}}function Ov(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;Ip.set(n),i.uniformMatrix3fv(this.addr,!1,Ip),fn(e,n)}}function Bv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;Rp.set(n),i.uniformMatrix4fv(this.addr,!1,Rp),fn(e,n)}}function kv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2iv(this.addr,t),fn(e,t)}}function Vv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;i.uniform3iv(this.addr,t),fn(e,t)}}function Hv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4iv(this.addr,t),fn(e,t)}}function Gv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2uiv(this.addr,t),fn(e,t)}}function $v(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;i.uniform3uiv(this.addr,t),fn(e,t)}}function Xv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4uiv(this.addr,t),fn(e,t)}}function qv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xu.compareFunction=e.isReversedDepthBuffer()?Gc:Hc,r=Xu):r=Xp,e.setTexture2D(t||r,s)}function Yv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yp,s)}function Zv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zp,s)}function Jv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qp,s)}function Kv(i){switch(i){case 5126:return Lv;case 35664:return Dv;case 35665:return Nv;case 35666:return Uv;case 35674:return Fv;case 35675:return Ov;case 35676:return Bv;case 5124:case 35670:return kv;case 35667:case 35671:return zv;case 35668:case 35672:return Vv;case 35669:case 35673:return Hv;case 5125:return Gv;case 36294:return Wv;case 36295:return $v;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Yv;case 35680:case 36300:case 36308:case 36293:return Zv;case 36289:case 36303:case 36311:case 36292:return Jv}}function jv(i,t){i.uniform1fv(this.addr,t)}function Qv(i,t){let e=Xr(t,this.size,2);i.uniform2fv(this.addr,e)}function ty(i,t){let e=Xr(t,this.size,3);i.uniform3fv(this.addr,e)}function ey(i,t){let e=Xr(t,this.size,4);i.uniform4fv(this.addr,e)}function ny(i,t){let e=Xr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function iy(i,t){let e=Xr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sy(i,t){let e=Xr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ry(i,t){i.uniform1iv(this.addr,t)}function ay(i,t){i.uniform2iv(this.addr,t)}function oy(i,t){i.uniform3iv(this.addr,t)}function ly(i,t){i.uniform4iv(this.addr,t)}function cy(i,t){i.uniform1uiv(this.addr,t)}function hy(i,t){i.uniform2uiv(this.addr,t)}function uy(i,t){i.uniform3uiv(this.addr,t)}function dy(i,t){i.uniform4uiv(this.addr,t)}function fy(i,t,e){let n=this.cache,s=t.length,r=Jc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Xu:a=Xp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function py(i,t,e){let n=this.cache,s=t.length,r=Jc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Yp,r[a])}function my(i,t,e){let n=this.cache,s=t.length,r=Jc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Zp,r[a])}function gy(i,t,e){let n=this.cache,s=t.length,r=Jc(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||qp,r[a])}function _y(i){switch(i){case 5126:return jv;case 35664:return Qv;case 35665:return ty;case 35666:return ey;case 35674:return ny;case 35675:return iy;case 35676:return sy;case 5124:case 35670:return ry;case 35667:case 35671:return ay;case 35668:case 35672:return oy;case 35669:case 35673:return ly;case 5125:return cy;case 36294:return hy;case 36295:return uy;case 36296:return dy;case 35678:case 36198:case 36298:case 36306:case 35682:return fy;case 35679:case 36299:case 36307:return py;case 35680:case 36300:case 36308:case 36293:return my;case 36289:case 36303:case 36311:case 36292:return gy}}var qu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kv(e.type)}},Yu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_y(e.type)}},Zu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Wu=/(\w+)(\])?(\[|\.)?/g;function Lp(i,t){i.seq.push(t),i.map[t.id]=t}function xy(i,t,e){let n=i.name,s=n.length;for(Wu.lastIndex=0;;){let r=Wu.exec(n),a=Wu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lp(e,c===void 0?new qu(o,i,t):new Yu(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new Zu(o),Lp(e,m)),e=m}}}var $r=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);xy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Dp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var vy=37297,yy=0;function Sy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Np=new Me;function My(i){Ie._getMatrix(Np,Ie.workingColorSpace,i);let t=`mat3( ${Np.elements.map(e=>e.toFixed(4))} )`;switch(Ie.getTransfer(i)){case Ta:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Up(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Sy(i.getShaderSource(t),o)}else return r}function by(i,t){let e=My(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var wy={[_u]:"Linear",[xu]:"Reinhard",[vu]:"Cineon",[yu]:"ACESFilmic",[Mu]:"AgX",[bu]:"Neutral",[Su]:"Custom"};function Ey(i,t){let e=wy[t];return e===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $c=new H;function Ty(){Ie.getLuminanceCoefficients($c);let i=$c.x.toFixed(4),t=$c.y.toFixed(4),e=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ay(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function Cy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ry(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function xo(i){return i!==""}function Fp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Op(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Iy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(i){return i.replace(Iy,Ly)}var Py=new Map;function Ly(i,t){let e=Te[t];if(e===void 0){let n=Py.get(t);if(n!==void 0)e=Te[n],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ju(e)}var Dy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(i){return i.replace(Dy,Ny)}function Ny(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Uy={[ro]:"SHADOWMAP_TYPE_PCF",[kr]:"SHADOWMAP_TYPE_VSM"};function Fy(i){return Uy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Oy={[Es]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE_UV"};function By(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Oy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ky={[Zs]:"ENVMAP_MODE_REFRACTION"};function zy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ky[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Vy={[tc]:"ENVMAP_BLENDING_MULTIPLY",[tp]:"ENVMAP_BLENDING_MIX",[ep]:"ENVMAP_BLENDING_ADD"};function Hy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Vy[i.combine]||"ENVMAP_BLENDING_NONE"}function Gy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Wy(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Fy(e),c=By(e),h=zy(e),m=Hy(e),d=Gy(e),g=Ay(e),x=Cy(r),T=s.createProgram(),p,f,N=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(xo).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(xo).join(`
`),f.length>0&&(f+=`
`)):(p=[kp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),f=[kp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?Te.tonemapping_pars_fragment:"",e.toneMapping!==Ti?Ey("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,by("linearToOutputTexel",e.outputColorSpace),Ty(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xo).join(`
`)),a=Ju(a),a=Fp(a,e),a=Op(a,e),o=Ju(o),o=Fp(o,e),o=Op(o,e),a=Bp(a),o=Bp(o),e.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let U=N+p+a,E=N+f+o,b=Dp(s,s.VERTEX_SHADER,U),P=Dp(s,s.FRAGMENT_SHADER,E);s.attachShader(T,b),s.attachShader(T,P),e.index0AttributeName!==void 0?s.bindAttribLocation(T,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function k($){if(i.debug.checkShaderErrors){let tt=s.getProgramInfoLog(T)||"",it=s.getShaderInfoLog(b)||"",X=s.getShaderInfoLog(P)||"",j=tt.trim(),ot=it.trim(),lt=X.trim(),Mt=!0,ht=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(Mt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,T,b,P);else{let _t=Up(s,b,"vertex"),mt=Up(s,P,"fragment");ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+j+`
`+_t+`
`+mt)}else j!==""?de("WebGLProgram: Program Info Log:",j):(ot===""||lt==="")&&(ht=!1);ht&&($.diagnostics={runnable:Mt,programLog:j,vertexShader:{log:ot,prefix:p},fragmentShader:{log:lt,prefix:f}})}s.deleteShader(b),s.deleteShader(P),S=new $r(s,T),I=Ry(s,T)}let S;this.getUniforms=function(){return S===void 0&&k(this),S};let I;this.getAttributes=function(){return I===void 0&&k(this),I};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(T,vy)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yy++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=b,this.fragmentShader=P,this}var $y=0,Ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ju(t),e.set(t,n)),n}},ju=class{constructor(t){this.id=$y++,this.code=t,this.usedTimes=0}};function Xy(i){return i===Cs||i===fo||i===po}function qy(i,t,e,n,s,r){let a=new Pr,o=new Ku,l=new Set,c=[],h=new Map,m=n.logarithmicDepthBuffer,d=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function T(S,I,B,$,tt,it){let X=$.fog,j=tt.geometry,ot=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?$.environment:null,lt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,Mt=t.get(S.envMap||ot,lt),ht=Mt&&Mt.mapping===ao?Mt.image.height:null,_t=g[S.type];S.precision!==null&&(d=n.getMaxPrecision(S.precision),d!==S.precision&&de("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let mt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Vt=mt!==void 0?mt.length:0,Ht=0;j.morphAttributes.position!==void 0&&(Ht=1),j.morphAttributes.normal!==void 0&&(Ht=2),j.morphAttributes.color!==void 0&&(Ht=3);let Ne,we,Re,dt;if(_t){let ze=Gn[_t];Ne=ze.vertexShader,we=ze.fragmentShader}else{Ne=S.vertexShader,we=S.fragmentShader;let ze=o.getVertexShaderStage(S),Ue=o.getFragmentShaderStage(S);o.update(S,ze,Ue),Re=ze.id,dt=Ue.id}let pt=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),ne=tt.isInstancedMesh===!0,zt=tt.isBatchedMesh===!0,ce=!!S.map,ue=!!S.matcap,rt=!!Mt,bt=!!S.aoMap,G=!!S.lightMap,wt=!!S.bumpMap&&S.wireframe===!1,It=!!S.normalMap,re=!!S.displacementMap,Xt=!!S.emissiveMap,le=!!S.metalnessMap,ae=!!S.roughnessMap,W=S.anisotropy>0,Pe=S.clearcoat>0,Gt=S.dispersion>0,R=S.retroreflectivity>0,v=S.iridescence>0,Q=S.sheen>0,st=S.transmission>0,ct=W&&!!S.anisotropyMap,Tt=Pe&&!!S.clearcoatMap,Ct=Pe&&!!S.clearcoatNormalMap,ut=Pe&&!!S.clearcoatRoughnessMap,gt=v&&!!S.iridescenceMap,Dt=v&&!!S.iridescenceThicknessMap,ie=Q&&!!S.sheenColorMap,Ot=Q&&!!S.sheenRoughnessMap,Ut=!!S.specularMap,Zt=!!S.specularColorMap,se=!!S.specularIntensityMap,_e=st&&!!S.transmissionMap,q=st&&!!S.thicknessMap,Pt=!!S.gradientMap,ft=!!S.alphaMap,Nt=S.alphaTest>0,Rt=!!S.alphaHash,xt=!!S.extensions,qt=Ti;S.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(qt=i.toneMapping);let Jt={shaderID:_t,shaderType:S.type,shaderName:S.name,vertexShader:Ne,fragmentShader:we,defines:S.defines,customVertexShaderID:Re,customFragmentShaderID:dt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:zt,batchingColor:zt&&tt._colorsTexture!==null,instancing:ne,instancingColor:ne&&tt.instanceColor!==null,instancingMorph:ne&&tt.morphTexture!==null,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Ie.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:ce,matcap:ue,envMap:rt,envMapMode:rt&&Mt.mapping,envMapCubeUVHeight:ht,aoMap:bt,lightMap:G,bumpMap:wt,normalMap:It,displacementMap:re,emissiveMap:Xt,normalMapObjectSpace:It&&S.normalMapType===sp,normalMapTangentSpace:It&&S.normalMapType===Vc,packedNormalMap:It&&S.normalMapType===Vc&&Xy(S.normalMap.format),metalnessMap:le,roughnessMap:ae,anisotropy:W,anisotropyMap:ct,clearcoat:Pe,clearcoatMap:Tt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:ut,dispersion:Gt,retroreflection:R,iridescence:v,iridescenceMap:gt,iridescenceThicknessMap:Dt,sheen:Q,sheenColorMap:ie,sheenRoughnessMap:Ot,specularMap:Ut,specularColorMap:Zt,specularIntensityMap:se,transmission:st,transmissionMap:_e,thicknessMap:q,gradientMap:Pt,opaque:S.transparent===!1&&S.blending===zr&&S.alphaToCoverage===!1,alphaMap:ft,alphaTest:Nt,alphaHash:Rt,combine:S.combine,mapUv:ce&&x(S.map.channel),aoMapUv:bt&&x(S.aoMap.channel),lightMapUv:G&&x(S.lightMap.channel),bumpMapUv:wt&&x(S.bumpMap.channel),normalMapUv:It&&x(S.normalMap.channel),displacementMapUv:re&&x(S.displacementMap.channel),emissiveMapUv:Xt&&x(S.emissiveMap.channel),metalnessMapUv:le&&x(S.metalnessMap.channel),roughnessMapUv:ae&&x(S.roughnessMap.channel),anisotropyMapUv:ct&&x(S.anisotropyMap.channel),clearcoatMapUv:Tt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&x(S.sheenRoughnessMap.channel),specularMapUv:Ut&&x(S.specularMap.channel),specularColorMapUv:Zt&&x(S.specularColorMap.channel),specularIntensityMapUv:se&&x(S.specularIntensityMap.channel),transmissionMapUv:_e&&x(S.transmissionMap.channel),thicknessMapUv:q&&x(S.thicknessMap.channel),alphaMapUv:ft&&x(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(It||W),vertexNormals:!!j.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!j.attributes.uv&&(ce||ft),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||j.attributes.normal===void 0&&It===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Et,skinning:tt.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:Ht,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:it.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:ce&&S.map.isVideoTexture===!0&&Ie.getTransfer(S.map.colorSpace)===Ve,decodeVideoTextureEmissive:Xt&&S.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(S.emissiveMap.colorSpace)===Ve,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Hi,flipSided:S.side===Hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:xt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&S.extensions.multiDraw===!0||zt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Jt.vertexUv1s=l.has(1),Jt.vertexUv2s=l.has(2),Jt.vertexUv3s=l.has(3),l.clear(),Jt}function p(S){let I=[];if(S.shaderID?I.push(S.shaderID):(I.push(S.customVertexShaderID),I.push(S.customFragmentShaderID)),S.defines!==void 0)for(let B in S.defines)I.push(B),I.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(f(I,S),N(I,S),I.push(i.outputColorSpace)),I.push(S.customProgramCacheKey),I.join()}function f(S,I){S.push(I.precision),S.push(I.outputColorSpace),S.push(I.envMapMode),S.push(I.envMapCubeUVHeight),S.push(I.mapUv),S.push(I.alphaMapUv),S.push(I.lightMapUv),S.push(I.aoMapUv),S.push(I.bumpMapUv),S.push(I.normalMapUv),S.push(I.displacementMapUv),S.push(I.emissiveMapUv),S.push(I.metalnessMapUv),S.push(I.roughnessMapUv),S.push(I.anisotropyMapUv),S.push(I.clearcoatMapUv),S.push(I.clearcoatNormalMapUv),S.push(I.clearcoatRoughnessMapUv),S.push(I.iridescenceMapUv),S.push(I.iridescenceThicknessMapUv),S.push(I.sheenColorMapUv),S.push(I.sheenRoughnessMapUv),S.push(I.specularMapUv),S.push(I.specularColorMapUv),S.push(I.specularIntensityMapUv),S.push(I.transmissionMapUv),S.push(I.thicknessMapUv),S.push(I.combine),S.push(I.fogExp2),S.push(I.sizeAttenuation),S.push(I.morphTargetsCount),S.push(I.morphAttributeCount),S.push(I.numSunLights),S.push(I.numDirLights),S.push(I.numPointLights),S.push(I.numSpotLights),S.push(I.numSpotLightMaps),S.push(I.numHemiLights),S.push(I.numRectAreaLights),S.push(I.numSunLightShadows),S.push(I.numDirLightShadows),S.push(I.numPointLightShadows),S.push(I.numSpotLightShadows),S.push(I.numSpotLightShadowsWithMaps),S.push(I.numLightProbes),S.push(I.shadowMapType),S.push(I.toneMapping),S.push(I.numClippingPlanes),S.push(I.numClipIntersection),S.push(I.depthPacking)}function N(S,I){a.disableAll(),I.instancing&&a.enable(0),I.instancingColor&&a.enable(1),I.instancingMorph&&a.enable(2),I.matcap&&a.enable(3),I.envMap&&a.enable(4),I.normalMapObjectSpace&&a.enable(5),I.normalMapTangentSpace&&a.enable(6),I.clearcoat&&a.enable(7),I.iridescence&&a.enable(8),I.alphaTest&&a.enable(9),I.vertexColors&&a.enable(10),I.vertexAlphas&&a.enable(11),I.vertexUv1s&&a.enable(12),I.vertexUv2s&&a.enable(13),I.vertexUv3s&&a.enable(14),I.vertexTangents&&a.enable(15),I.anisotropy&&a.enable(16),I.alphaHash&&a.enable(17),I.batching&&a.enable(18),I.dispersion&&a.enable(19),I.retroreflection&&a.enable(24),I.batchingColor&&a.enable(20),I.gradientMap&&a.enable(21),I.packedNormalMap&&a.enable(22),I.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),I.fog&&a.enable(0),I.useFog&&a.enable(1),I.flatShading&&a.enable(2),I.logarithmicDepthBuffer&&a.enable(3),I.reversedDepthBuffer&&a.enable(4),I.skinning&&a.enable(5),I.morphTargets&&a.enable(6),I.morphNormals&&a.enable(7),I.morphColors&&a.enable(8),I.premultipliedAlpha&&a.enable(9),I.shadowMapEnabled&&a.enable(10),I.doubleSided&&a.enable(11),I.flipSided&&a.enable(12),I.useDepthPacking&&a.enable(13),I.dithering&&a.enable(14),I.transmission&&a.enable(15),I.sheen&&a.enable(16),I.opaque&&a.enable(17),I.pointsUvs&&a.enable(18),I.decodeVideoTexture&&a.enable(19),I.decodeVideoTextureEmissive&&a.enable(20),I.alphaToCoverage&&a.enable(21),I.numLightProbeGrids>0&&a.enable(22),I.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function U(S){let I=g[S.type],B;if(I){let $=Gn[I];B=mo.clone($.uniforms)}else B=S.uniforms;return B}function E(S,I){let B=h.get(I);return B!==void 0?++B.usedTimes:(B=new Wy(i,I,S,s),c.push(B),h.set(I,B)),B}function b(S){if(--S.usedTimes===0){let I=c.indexOf(S);c[I]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function P(S){o.remove(S)}function k(){o.dispose()}return{getParameters:T,getProgramCacheKey:p,getUniforms:U,acquireProgram:E,releaseProgram:b,releaseShaderCache:P,programs:c,dispose:k}}function Yy(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Zy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function zp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function o(d,g,x,T,p,f){let N=i[t];return N===void 0?(N={id:d.id,object:d,geometry:g,material:x,materialVariant:a(d),groupOrder:T,renderOrder:d.renderOrder,z:p,group:f},i[t]=N):(N.id=d.id,N.object=d,N.geometry=g,N.material=x,N.materialVariant=a(d),N.groupOrder=T,N.renderOrder=d.renderOrder,N.z=p,N.group=f),t++,N}function l(d,g,x,T,p,f,N){N.reversedDepth===!0&&(p=-p);let U=o(d,g,x,T,p,f);x.transmission>0?n.push(U):x.transparent===!0?s.push(U):e.push(U)}function c(d,g,x,T,p,f){let N=o(d,g,x,T,p,f);x.transmission>0?n.unshift(N):x.transparent===!0?s.unshift(N):e.unshift(N)}function h(d,g){e.length>1&&e.sort(d||Zy),n.length>1&&n.sort(g||zp),s.length>1&&s.sort(g||zp)}function m(){for(let d=t,g=i.length;d<g;d++){let x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:h}}function Jy(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Vp,i.set(n,[a])):s>=r.length?(a=new Vp,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ky(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new fe};break;case"SpotLight":e={position:new H,direction:new H,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function jy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Qy=0;function tS(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function eS(i){let t=new Ky,e=jy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let s=new H,r=new Fe,a=new Fe;function o(c){let h=0,m=0,d=0;for(let tt=0;tt<9;tt++)n.probe[tt].set(0,0,0);let g=0,x=0,T=0,p=0,f=0,N=0,U=0,E=0,b=0,P=0,k=0,S=0,I=0,B=0;c.sort(tS);for(let tt=0,it=c.length;tt<it;tt++){let X=c[tt],j=X.color,ot=X.intensity,lt=X.distance,Mt=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Cs?Mt=X.shadow.map.texture:Mt=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)h+=j.r*ot,m+=j.g*ot,d+=j.b*ot;else if(X.isLightProbe){for(let ht=0;ht<9;ht++)n.probe[ht].addScaledVector(X.sh.coefficients[ht],ot);B++}else if(X.isSunLight){let ht=t.get(X);if(ht.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let _t=X.shadow,mt=e.get(X);mt.shadowIntensity=_t.intensity,mt.shadowBias=_t.bias,mt.shadowNormalBias=_t.normalBias,mt.shadowRadius=_t.radius,mt.shadowMapSize.copy(_t.mapSize).multiply(_t.getFrameExtents()),n.sunShadow[x]=mt,n.sunShadowMap[x]=Mt;let Vt=_t.getViewportCount();for(let Ht=0;Ht<Vt;Ht++)n.sunShadowMatrix[T+Ht]=_t.getMatrix(Ht),n.sunShadowCascade[T+Ht]=_t._cascadeData[Ht];T+=Vt,x++}n.sun[g]=ht,g++}else if(X.isDirectionalLight){let ht=t.get(X);if(ht.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let _t=X.shadow,mt=e.get(X);mt.shadowIntensity=_t.intensity,mt.shadowBias=_t.bias,mt.shadowNormalBias=_t.normalBias,mt.shadowRadius=_t.radius,mt.shadowMapSize=_t.mapSize,n.directionalShadow[p]=mt,n.directionalShadowMap[p]=Mt,n.directionalShadowMatrix[p]=X.shadow.matrix,b++}n.directional[p]=ht,p++}else if(X.isSpotLight){let ht=t.get(X);ht.position.setFromMatrixPosition(X.matrixWorld),ht.color.copy(j).multiplyScalar(ot),ht.distance=lt,ht.coneCos=Math.cos(X.angle),ht.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),ht.decay=X.decay,n.spot[N]=ht;let _t=X.shadow;if(X.map&&(n.spotLightMap[S]=X.map,S++,_t.updateMatrices(X),X.castShadow&&I++),n.spotLightMatrix[N]=_t.matrix,X.castShadow){let mt=e.get(X);mt.shadowIntensity=_t.intensity,mt.shadowBias=_t.bias,mt.shadowNormalBias=_t.normalBias,mt.shadowRadius=_t.radius,mt.shadowMapSize=_t.mapSize,n.spotShadow[N]=mt,n.spotShadowMap[N]=Mt,k++}N++}else if(X.isRectAreaLight){let ht=t.get(X);ht.color.copy(j).multiplyScalar(ot),ht.halfWidth.set(X.width*.5,0,0),ht.halfHeight.set(0,X.height*.5,0),n.rectArea[U]=ht,U++}else if(X.isPointLight){let ht=t.get(X);if(ht.color.copy(X.color).multiplyScalar(X.intensity),ht.distance=X.distance,ht.decay=X.decay,X.castShadow){let _t=X.shadow,mt=e.get(X);mt.shadowIntensity=_t.intensity,mt.shadowBias=_t.bias,mt.shadowNormalBias=_t.normalBias,mt.shadowRadius=_t.radius,mt.shadowMapSize=_t.mapSize,mt.shadowCameraNear=_t.camera.near,mt.shadowCameraFar=_t.camera.far,n.pointShadow[f]=mt,n.pointShadowMap[f]=Mt,n.pointShadowMatrix[f]=X.shadow.matrix,P++}n.point[f]=ht,f++}else if(X.isHemisphereLight){let ht=t.get(X);ht.skyColor.copy(X.color).multiplyScalar(ot),ht.groundColor.copy(X.groundColor).multiplyScalar(ot),n.hemi[E]=ht,E++}}U>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=d;let $=n.hash;($.sunLength!==g||$.directionalLength!==p||$.pointLength!==f||$.spotLength!==N||$.rectAreaLength!==U||$.hemiLength!==E||$.numSunShadows!==x||$.numDirectionalShadows!==b||$.numPointShadows!==P||$.numSpotShadows!==k||$.numSpotMaps!==S||$.numLightProbes!==B)&&(n.sun.length=g,n.directional.length=p,n.spot.length=N,n.rectArea.length=U,n.point.length=f,n.hemi.length=E,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=T,n.sunShadowCascade.length=T,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=P,n.pointShadowMap.length=P,n.pointShadowMatrix.length=P,n.spotShadow.length=k,n.spotShadowMap.length=k,n.spotLightMatrix.length=k+S-I,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=B,$.sunLength=g,$.directionalLength=p,$.pointLength=f,$.spotLength=N,$.rectAreaLength=U,$.hemiLength=E,$.numSunShadows=x,$.numDirectionalShadows=b,$.numPointShadows=P,$.numSpotShadows=k,$.numSpotMaps=S,$.numLightProbes=B,n.version=Qy++)}function l(c,h){let m=0,d=0,g=0,x=0,T=0,p=0,f=h.matrixWorldInverse;for(let N=0,U=c.length;N<U;N++){let E=c[N];if(E.isSunLight){let b=n.sun[m];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(f),m++}else if(E.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),d++}else if(E.isSpotLight){let b=n.spot[x];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),x++}else if(E.isRectAreaLight){let b=n.rectArea[T];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(E.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),T++}else if(E.isPointLight){let b=n.point[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(f),g++}else if(E.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:n}}function Hp(i){let t=new eS(i),e=[],n=[],s=[];function r(d){m.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let m={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function nS(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Hp(i),t.set(s,[o])):r>=a.length?(o=new Hp(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var iS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sS=`uniform sampler2D shadow_pass;
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
}`,rS=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],aS=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Gp=new Fe,_o=new H,$u=new H;function oS(i,t,e){let n=new Dr,s=new Lt,r=new Lt,a=new He,o=new kl,l=new zl,c={},h=e.maxTextureSize,m={[ws]:Hn,[Hn]:ws,[Hi]:Hi},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:iS,fragmentShader:sS}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let x=new rn;x.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new vn(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ro;let f=this.type;this.render=function(P,k,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;this.type===Uf&&(de("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ro);let I=i.getRenderTarget(),B=i.getActiveCubeFace(),$=i.getActiveMipmapLevel(),tt=i.state;tt.setBlending(Gi),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);let it=f!==this.type;it&&k.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(j=>j.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,j=P.length;X<j;X++){let ot=P[X],lt=ot.shadow;if(lt===void 0){de("WebGLShadowMap:",ot,"has no shadow.");continue}if(lt.autoUpdate===!1&&lt.needsUpdate===!1)continue;s.copy(lt.mapSize);let Mt=lt.getFrameExtents();s.multiply(Mt),r.copy(lt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Mt.x),s.x=r.x*Mt.x,lt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Mt.y),s.y=r.y*Mt.y,lt.mapSize.y=r.y));let ht=i.state.buffers.depth.getReversed();if(lt.camera._reversedDepth=ht,lt.map===null||it===!0){if(lt.map!==null&&(lt.map.depthTexture!==null&&(lt.map.depthTexture.dispose(),lt.map.depthTexture=null),lt.map.dispose()),this.type===kr){if(ot.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}lt.map=new Zn(s.x,s.y,{format:Cs,type:Ci,minFilter:wn,magFilter:wn,generateMipmaps:!1}),lt.map.texture.name=ot.name+".shadowMap",lt.map.depthTexture=new vs(s.x,s.y,pi),lt.map.depthTexture.name=ot.name+".shadowMapDepth",lt.map.depthTexture.format=Bi,lt.map.depthTexture.compareFunction=null,lt.map.depthTexture.minFilter=_n,lt.map.depthTexture.magFilter=_n}else ot.isPointLight?(lt.map=new qc(s.x),lt.map.depthTexture=new Pl(s.x,Ai)):(lt.map=new Zn(s.x,s.y),lt.map.depthTexture=new vs(s.x,s.y,Ai)),lt.map.depthTexture.name=ot.name+".shadowMap",lt.map.depthTexture.format=Bi,this.type===ro?(lt.map.depthTexture.compareFunction=ht?Gc:Hc,lt.map.depthTexture.minFilter=wn,lt.map.depthTexture.magFilter=wn):(lt.map.depthTexture.compareFunction=null,lt.map.depthTexture.minFilter=_n,lt.map.depthTexture.magFilter=_n);lt.camera.updateProjectionMatrix()}lt.map.isWebGLCubeRenderTarget!==!0&&(lt.map.width!==s.x||lt.map.height!==s.y)&&lt.map.setSize(s.x,s.y);let _t=lt.map.isWebGLCubeRenderTarget?6:lt.getViewportCount();ot.isPointLight!==!0&&lt.updateMatrices(ot,S);for(let mt=0;mt<_t;mt++){let Vt=lt.getCamera(mt);if(ot.isPointLight){let Ht=lt.camera,Ne=lt.matrix,we=ot.distance||Ht.far;we!==Ht.far&&(Ht.far=we,Ht.updateProjectionMatrix()),_o.setFromMatrixPosition(ot.matrixWorld),Ht.position.copy(_o),$u.copy(Ht.position),$u.add(rS[mt]),Ht.up.copy(aS[mt]),Ht.lookAt($u),Ht.updateMatrixWorld(),Ne.makeTranslation(-_o.x,-_o.y,-_o.z),Gp.multiplyMatrices(Ht.projectionMatrix,Ht.matrixWorldInverse),lt._frustum.setFromProjectionMatrix(Gp,Ht.coordinateSystem,Ht.reversedDepth)}if(lt.map.isWebGLCubeRenderTarget)i.setRenderTarget(lt.map,mt),i.clear();else{mt===0&&(i.setRenderTarget(lt.map),i.clear());let Ht=lt.getViewport(mt);a.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),tt.viewport(a)}n=lt.getFrustum(mt),E(k,S,Vt,ot,this.type)}lt.isPointLightShadow!==!0&&this.type===kr&&N(lt,S),lt.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(I,B,$)};function N(P,k){let S=t.update(T);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null?P.mapPass=new Zn(s.x,s.y,{format:Cs,type:Ci}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),d.uniforms.shadow_pass.value=P.map.depthTexture,d.uniforms.resolution.value.set(P.map.width,P.map.height),d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(k,null,S,d,T,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value.set(P.map.width,P.map.height),g.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(k,null,S,g,T,null)}function U(P,k,S,I){let B=null,$=S.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if($!==void 0)B=$;else if(B=S.isPointLight===!0?l:o,i.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){let tt=B.uuid,it=k.uuid,X=c[tt];X===void 0&&(X={},c[tt]=X);let j=X[it];j===void 0&&(j=B.clone(),X[it]=j,k.addEventListener("dispose",b)),B=j}if(B.visible=k.visible,B.wireframe=k.wireframe,I===kr?B.side=k.shadowSide!==null?k.shadowSide:k.side:B.side=k.shadowSide!==null?k.shadowSide:m[k.side],B.alphaMap=k.alphaMap,B.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,B.map=k.map,B.clipShadows=k.clipShadows,B.clippingPlanes=k.clippingPlanes,B.clipIntersection=k.clipIntersection,B.displacementMap=k.displacementMap,B.displacementScale=k.displacementScale,B.displacementBias=k.displacementBias,B.wireframeLinewidth=k.wireframeLinewidth,B.linewidth=k.linewidth,S.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let tt=i.properties.get(B);tt.light=S}return B}function E(P,k,S,I,B){if(P.visible===!1)return;if(P.layers.test(k.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&B===kr)&&(!P.frustumCulled||P.intersectsFrustum(n))){P.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,P.matrixWorld);let it=t.update(P),X=P.material;if(Array.isArray(X)){let j=it.groups;for(let ot=0,lt=j.length;ot<lt;ot++){let Mt=j[ot],ht=X[Mt.materialIndex];if(ht&&ht.visible){let _t=U(P,ht,I,B);P.onBeforeShadow(i,P,k,S,it,_t,Mt),i.renderBufferDirect(S,null,it,_t,P,Mt),P.onAfterShadow(i,P,k,S,it,_t,Mt)}}}else if(X.visible){let j=U(P,X,I,B);P.onBeforeShadow(i,P,k,S,it,j,null),i.renderBufferDirect(S,null,it,j,P,null),P.onAfterShadow(i,P,k,S,it,j,null)}}let tt=P.children;for(let it=0,X=tt.length;it<X;it++)E(tt[it],k,S,I,B)}function b(P){P.target.removeEventListener("dispose",b);for(let S in c){let I=c[S],B=P.target.uuid;B in I&&(I[B].dispose(),delete I[B])}}}function lS(i,t){function e(){let q=!1,Pt=new He,ft=null,Nt=new He(0,0,0,0);return{setMask:function(Rt){ft!==Rt&&!q&&(i.colorMask(Rt,Rt,Rt,Rt),ft=Rt)},setLocked:function(Rt){q=Rt},setClear:function(Rt,xt,qt,Jt,ze){ze===!0&&(Rt*=Jt,xt*=Jt,qt*=Jt),Pt.set(Rt,xt,qt,Jt),Nt.equals(Pt)===!1&&(i.clearColor(Rt,xt,qt,Jt),Nt.copy(Pt))},reset:function(){q=!1,ft=null,Nt.set(-1,0,0,0)}}}function n(){let q=!1,Pt=!1,ft=null,Nt=null,Rt=null;return{setReversed:function(xt){if(Pt!==xt){let qt=t.get("EXT_clip_control");xt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),Pt=xt;let Jt=Rt;Rt=null,this.setClear(Jt)}},getReversed:function(){return Pt},setTest:function(xt){xt?pt(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(xt){ft!==xt&&!q&&(i.depthMask(xt),ft=xt)},setFunc:function(xt){if(Pt&&(xt=mp[xt]),Nt!==xt){switch(xt){case fl:i.depthFunc(i.NEVER);break;case pl:i.depthFunc(i.ALWAYS);break;case ml:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case gl:i.depthFunc(i.EQUAL);break;case _l:i.depthFunc(i.GEQUAL);break;case xl:i.depthFunc(i.GREATER);break;case vl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Nt=xt}},setLocked:function(xt){q=xt},setClear:function(xt){Rt!==xt&&(Rt=xt,Pt&&(xt=1-xt),i.clearDepth(xt))},reset:function(){q=!1,ft=null,Nt=null,Rt=null,Pt=!1}}}function s(){let q=!1,Pt=null,ft=null,Nt=null,Rt=null,xt=null,qt=null,Jt=null,ze=null;return{setTest:function(Ue){q||(Ue?pt(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(Ue){Pt!==Ue&&!q&&(i.stencilMask(Ue),Pt=Ue)},setFunc:function(Ue,$n,Rn){(ft!==Ue||Nt!==$n||Rt!==Rn)&&(i.stencilFunc(Ue,$n,Rn),ft=Ue,Nt=$n,Rt=Rn)},setOp:function(Ue,$n,Rn){(xt!==Ue||qt!==$n||Jt!==Rn)&&(i.stencilOp(Ue,$n,Rn),xt=Ue,qt=$n,Jt=Rn)},setLocked:function(Ue){q=Ue},setClear:function(Ue){ze!==Ue&&(i.clearStencil(Ue),ze=Ue)},reset:function(){q=!1,Pt=null,ft=null,Nt=null,Rt=null,xt=null,qt=null,Jt=null,ze=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},m={},d={},g=new WeakMap,x=[],T=null,p=!1,f=null,N=null,U=null,E=null,b=null,P=null,k=null,S=new fe(0,0,0),I=0,B=!1,$=null,tt=null,it=null,X=null,j=null,ot=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),lt=!1,Mt=0,ht=i.getParameter(i.VERSION);ht.indexOf("WebGL")!==-1?(Mt=parseFloat(/^WebGL (\d)/.exec(ht)[1]),lt=Mt>=1):ht.indexOf("OpenGL ES")!==-1&&(Mt=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),lt=Mt>=2);let _t=null,mt={},Vt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),Ne=new He().fromArray(Vt),we=new He().fromArray(Ht);function Re(q,Pt,ft,Nt){let Rt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(q,xt),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<ft;qt++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,Nt,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(Pt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return xt}let dt={};dt[i.TEXTURE_2D]=Re(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=Re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=Re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=Re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pt(i.DEPTH_TEST),a.setFunc(Tr),wt(!1),It(uu),pt(i.CULL_FACE),bt(Gi);function pt(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function Et(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function ne(q,Pt){return d[q]!==Pt?(i.bindFramebuffer(q,Pt),d[q]=Pt,q===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Pt),q===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function zt(q,Pt){let ft=x,Nt=!1;if(q){ft=g.get(Pt),ft===void 0&&(ft=[],g.set(Pt,ft));let Rt=q.textures;if(ft.length!==Rt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,qt=Rt.length;xt<qt;xt++)ft[xt]=i.COLOR_ATTACHMENT0+xt;ft.length=Rt.length,Nt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,Nt=!0);Nt&&i.drawBuffers(ft)}function ce(q){return T!==q?(i.useProgram(q),T=q,!0):!1}let ue={[Ys]:i.FUNC_ADD,[Of]:i.FUNC_SUBTRACT,[Bf]:i.FUNC_REVERSE_SUBTRACT};ue[kf]=i.MIN,ue[zf]=i.MAX;let rt={[Vf]:i.ZERO,[Hf]:i.ONE,[Gf]:i.SRC_COLOR,[mu]:i.SRC_ALPHA,[Zf]:i.SRC_ALPHA_SATURATE,[qf]:i.DST_COLOR,[$f]:i.DST_ALPHA,[Wf]:i.ONE_MINUS_SRC_COLOR,[gu]:i.ONE_MINUS_SRC_ALPHA,[Yf]:i.ONE_MINUS_DST_COLOR,[Xf]:i.ONE_MINUS_DST_ALPHA,[Jf]:i.CONSTANT_COLOR,[Kf]:i.ONE_MINUS_CONSTANT_COLOR,[jf]:i.CONSTANT_ALPHA,[Qf]:i.ONE_MINUS_CONSTANT_ALPHA};function bt(q,Pt,ft,Nt,Rt,xt,qt,Jt,ze,Ue){if(q===Gi){p===!0&&(Et(i.BLEND),p=!1);return}if(p===!1&&(pt(i.BLEND),p=!0),q!==Ff){if(q!==f||Ue!==B){if((N!==Ys||b!==Ys)&&(i.blendEquation(i.FUNC_ADD),N=Ys,b=Ys),Ue)switch(q){case zr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case du:i.blendFunc(i.ONE,i.ONE);break;case fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ge("WebGLState: Invalid blending: ",q);break}else switch(q){case zr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case du:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fu:ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pu:ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ge("WebGLState: Invalid blending: ",q);break}U=null,E=null,P=null,k=null,S.set(0,0,0),I=0,f=q,B=Ue}return}Rt=Rt||Pt,xt=xt||ft,qt=qt||Nt,(Pt!==N||Rt!==b)&&(i.blendEquationSeparate(ue[Pt],ue[Rt]),N=Pt,b=Rt),(ft!==U||Nt!==E||xt!==P||qt!==k)&&(i.blendFuncSeparate(rt[ft],rt[Nt],rt[xt],rt[qt]),U=ft,E=Nt,P=xt,k=qt),(Jt.equals(S)===!1||ze!==I)&&(i.blendColor(Jt.r,Jt.g,Jt.b,ze),S.copy(Jt),I=ze),f=q,B=!1}function G(q,Pt){q.side===Hi?Et(i.CULL_FACE):pt(i.CULL_FACE);let ft=q.side===Hn;Pt&&(ft=!ft),wt(ft),q.blending===zr&&q.transparent===!1?bt(Gi):bt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);let Nt=q.stencilWrite;o.setTest(Nt),Nt&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Xt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(q){$!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),$=q)}function It(q){q!==Df?(pt(i.CULL_FACE),q!==tt&&(q===uu?i.cullFace(i.BACK):q===Nf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),tt=q}function re(q){q!==it&&(lt&&i.lineWidth(q),it=q)}function Xt(q,Pt,ft){q?(pt(i.POLYGON_OFFSET_FILL),(X!==Pt||j!==ft)&&(X=Pt,j=ft,a.getReversed()&&(Pt=-Pt),i.polygonOffset(Pt,ft))):Et(i.POLYGON_OFFSET_FILL)}function le(q){q?pt(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function ae(q){q===void 0&&(q=i.TEXTURE0+ot-1),_t!==q&&(i.activeTexture(q),_t=q)}function W(q,Pt,ft){ft===void 0&&(_t===null?ft=i.TEXTURE0+ot-1:ft=_t);let Nt=mt[ft];Nt===void 0&&(Nt={type:void 0,texture:void 0},mt[ft]=Nt),(Nt.type!==q||Nt.texture!==Pt)&&(_t!==ft&&(i.activeTexture(ft),_t=ft),i.bindTexture(q,Pt||dt[q]),Nt.type=q,Nt.texture=Pt)}function Pe(){let q=mt[_t];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Gt(){try{i.compressedTexImage2D(...arguments)}catch(q){ge("WebGLState:",q)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(q){ge("WebGLState:",q)}}function v(){try{i.texSubImage2D(...arguments)}catch(q){ge("WebGLState:",q)}}function Q(){try{i.texSubImage3D(...arguments)}catch(q){ge("WebGLState:",q)}}function st(){try{i.compressedTexSubImage2D(...arguments)}catch(q){ge("WebGLState:",q)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(q){ge("WebGLState:",q)}}function Tt(){try{i.texStorage2D(...arguments)}catch(q){ge("WebGLState:",q)}}function Ct(){try{i.texStorage3D(...arguments)}catch(q){ge("WebGLState:",q)}}function ut(){try{i.texImage2D(...arguments)}catch(q){ge("WebGLState:",q)}}function gt(){try{i.texImage3D(...arguments)}catch(q){ge("WebGLState:",q)}}function Dt(q){return m[q]!==void 0?m[q]:i.getParameter(q)}function ie(q,Pt){m[q]!==Pt&&(i.pixelStorei(q,Pt),m[q]=Pt)}function Ot(q){Ne.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),Ne.copy(q))}function Ut(q){we.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),we.copy(q))}function Zt(q,Pt){let ft=c.get(Pt);ft===void 0&&(ft=new WeakMap,c.set(Pt,ft));let Nt=ft.get(q);Nt===void 0&&(Nt=i.getUniformBlockIndex(Pt,q.name),ft.set(q,Nt))}function se(q,Pt){let Nt=c.get(Pt).get(q);l.get(Pt)!==Nt&&(i.uniformBlockBinding(Pt,Nt,q.__bindingPointIndex),l.set(Pt,Nt))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},m={},_t=null,mt={},d={},g=new WeakMap,x=[],T=null,p=!1,f=null,N=null,U=null,E=null,b=null,P=null,k=null,S=new fe(0,0,0),I=0,B=!1,$=null,tt=null,it=null,X=null,j=null,Ne.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:pt,disable:Et,bindFramebuffer:ne,drawBuffers:zt,useProgram:ce,setBlending:bt,setMaterial:G,setFlipSided:wt,setCullFace:It,setLineWidth:re,setPolygonOffset:Xt,setScissorTest:le,activeTexture:ae,bindTexture:W,unbindTexture:Pe,compressedTexImage2D:Gt,compressedTexImage3D:R,texImage2D:ut,texImage3D:gt,pixelStorei:ie,getParameter:Dt,updateUBOMapping:Zt,uniformBlockBinding:se,texStorage2D:Tt,texStorage3D:Ct,texSubImage2D:v,texSubImage3D:Q,compressedTexSubImage2D:st,compressedTexSubImage3D:ct,scissor:Ot,viewport:Ut,reset:_e}}function cS(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,m=new Set,d,g=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(R,v){return x?new OffscreenCanvas(R,v):Aa("canvas")}function p(R,v,Q){let st=1,ct=Gt(R);if((ct.width>Q||ct.height>Q)&&(st=Q/Math.max(ct.width,ct.height)),st<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Tt=Math.floor(st*ct.width),Ct=Math.floor(st*ct.height);d===void 0&&(d=T(Tt,Ct));let ut=v?T(Tt,Ct):d;return ut.width=Tt,ut.height=Ct,ut.getContext("2d").drawImage(R,0,0,Tt,Ct),de("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+Tt+"x"+Ct+")."),ut}else return"data"in R&&de("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),R;return R}function f(R){return R.generateMipmaps}function N(R){i.generateMipmap(R)}function U(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(R,v,Q,st,ct,Tt=!1){if(R!==null){if(i[R]!==void 0)return i[R];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Ct;st&&(Ct=t.get("EXT_texture_norm16"),Ct||de("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=v;if(v===i.RED&&(Q===i.FLOAT&&(ut=i.R32F),Q===i.HALF_FLOAT&&(ut=i.R16F),Q===i.UNSIGNED_BYTE&&(ut=i.R8),Q===i.UNSIGNED_SHORT&&Ct&&(ut=Ct.R16_EXT),Q===i.SHORT&&Ct&&(ut=Ct.R16_SNORM_EXT)),v===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.R8UI),Q===i.UNSIGNED_SHORT&&(ut=i.R16UI),Q===i.UNSIGNED_INT&&(ut=i.R32UI),Q===i.BYTE&&(ut=i.R8I),Q===i.SHORT&&(ut=i.R16I),Q===i.INT&&(ut=i.R32I)),v===i.RG&&(Q===i.FLOAT&&(ut=i.RG32F),Q===i.HALF_FLOAT&&(ut=i.RG16F),Q===i.UNSIGNED_BYTE&&(ut=i.RG8),Q===i.UNSIGNED_SHORT&&Ct&&(ut=Ct.RG16_EXT),Q===i.SHORT&&Ct&&(ut=Ct.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.RG8UI),Q===i.UNSIGNED_SHORT&&(ut=i.RG16UI),Q===i.UNSIGNED_INT&&(ut=i.RG32UI),Q===i.BYTE&&(ut=i.RG8I),Q===i.SHORT&&(ut=i.RG16I),Q===i.INT&&(ut=i.RG32I)),v===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),Q===i.UNSIGNED_INT&&(ut=i.RGB32UI),Q===i.BYTE&&(ut=i.RGB8I),Q===i.SHORT&&(ut=i.RGB16I),Q===i.INT&&(ut=i.RGB32I)),v===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),Q===i.UNSIGNED_INT&&(ut=i.RGBA32UI),Q===i.BYTE&&(ut=i.RGBA8I),Q===i.SHORT&&(ut=i.RGBA16I),Q===i.INT&&(ut=i.RGBA32I)),v===i.RGB&&(Q===i.UNSIGNED_SHORT&&Ct&&(ut=Ct.RGB16_EXT),Q===i.SHORT&&Ct&&(ut=Ct.RGB16_SNORM_EXT),Q===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ut=i.R11F_G11F_B10F)),v===i.RGBA){let gt=Tt?Ta:Ie.getTransfer(ct);Q===i.FLOAT&&(ut=i.RGBA32F),Q===i.HALF_FLOAT&&(ut=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(ut=gt===Ve?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT&&Ct&&(ut=Ct.RGBA16_EXT),Q===i.SHORT&&Ct&&(ut=Ct.RGBA16_SNORM_EXT),Q===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function b(R,v){let Q;return R?v===null||v===Ai||v===Hr?Q=i.DEPTH24_STENCIL8:v===pi?Q=i.DEPTH32F_STENCIL8:v===Vr&&(Q=i.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ai||v===Hr?Q=i.DEPTH_COMPONENT24:v===pi?Q=i.DEPTH_COMPONENT32F:v===Vr&&(Q=i.DEPTH_COMPONENT16),Q}function P(R,v){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==_n&&R.minFilter!==wn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function k(R){let v=R.target;v.removeEventListener("dispose",k),I(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&m.delete(v)}function S(R){let v=R.target;v.removeEventListener("dispose",S),$(v)}function I(R){let v=n.get(R);if(v.__webglInit===void 0)return;let Q=R.source,st=g.get(Q);if(st){let ct=st[v.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&B(R),Object.keys(st).length===0&&g.delete(Q)}n.remove(R)}function B(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let Q=R.source,st=g.get(Q);delete st[v.__cacheKey],a.memory.textures--}function $(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(v.__webglFramebuffer[st]))for(let ct=0;ct<v.__webglFramebuffer[st].length;ct++)i.deleteFramebuffer(v.__webglFramebuffer[st][ct]);else i.deleteFramebuffer(v.__webglFramebuffer[st]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[st])}else{if(Array.isArray(v.__webglFramebuffer))for(let st=0;st<v.__webglFramebuffer.length;st++)i.deleteFramebuffer(v.__webglFramebuffer[st]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let st=0;st<v.__webglColorRenderbuffer.length;st++)v.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[st]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Q=R.textures;for(let st=0,ct=Q.length;st<ct;st++){let Tt=n.get(Q[st]);Tt.__webglTexture&&(i.deleteTexture(Tt.__webglTexture),a.memory.textures--),n.remove(Q[st])}n.remove(R)}let tt=0;function it(){tt=0}function X(){return tt}function j(R){tt=R}function ot(){let R=tt;return R>=s.maxTextures&&de("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),tt+=1,R}function lt(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function Mt(R,v){let Q=n.get(R);if(R.isVideoTexture&&W(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Q.__version!==R.version){let st=R.image;if(st===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(Q,R,v);return}}else R.isExternalTexture&&(Q.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+v)}function ht(R,v){let Q=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Q.__version!==R.version){Et(Q,R,v);return}else R.isExternalTexture&&(Q.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+v)}function _t(R,v){let Q=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Q.__version!==R.version){Et(Q,R,v);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+v)}function mt(R,v){let Q=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&Q.__version!==R.version){ne(Q,R,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+v)}let Vt={[yl]:i.REPEAT,[Fi]:i.CLAMP_TO_EDGE,[Sl]:i.MIRRORED_REPEAT},Ht={[_n]:i.NEAREST,[np]:i.NEAREST_MIPMAP_NEAREST,[oo]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[ic]:i.LINEAR_MIPMAP_NEAREST,[Ts]:i.LINEAR_MIPMAP_LINEAR},Ne={[ap]:i.NEVER,[up]:i.ALWAYS,[op]:i.LESS,[Hc]:i.LEQUAL,[lp]:i.EQUAL,[Gc]:i.GEQUAL,[cp]:i.GREATER,[hp]:i.NOTEQUAL};function we(R,v){if(v.type===pi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===wn||v.magFilter===ic||v.magFilter===oo||v.magFilter===Ts||v.minFilter===wn||v.minFilter===ic||v.minFilter===oo||v.minFilter===Ts)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Vt[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Vt[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Vt[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ht[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ht[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ne[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===_n||v.minFilter!==oo&&v.minFilter!==Ts||v.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Re(R,v){let Q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",k));let st=v.source,ct=g.get(st);ct===void 0&&(ct={},g.set(st,ct));let Tt=lt(v);if(Tt!==R.__cacheKey){ct[Tt]===void 0&&(ct[Tt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),ct[Tt].usedTimes++;let Ct=ct[R.__cacheKey];Ct!==void 0&&(ct[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&B(v)),R.__cacheKey=Tt,R.__webglTexture=ct[Tt].texture}return Q}function dt(R,v,Q){return Math.floor(Math.floor(R/Q)/v)}function pt(R,v,Q,st){let Tt=R.updateRanges;if(Tt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,Q,st,v.data);else{Tt.sort((ie,Ot)=>ie.start-Ot.start);let Ct=0;for(let ie=1;ie<Tt.length;ie++){let Ot=Tt[Ct],Ut=Tt[ie],Zt=Ot.start+Ot.count,se=dt(Ut.start,v.width,4),_e=dt(Ot.start,v.width,4);Ut.start<=Zt+1&&se===_e&&dt(Ut.start+Ut.count-1,v.width,4)===se?Ot.count=Math.max(Ot.count,Ut.start+Ut.count-Ot.start):(++Ct,Tt[Ct]=Ut)}Tt.length=Ct+1;let ut=e.getParameter(i.UNPACK_ROW_LENGTH),gt=e.getParameter(i.UNPACK_SKIP_PIXELS),Dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ie=0,Ot=Tt.length;ie<Ot;ie++){let Ut=Tt[ie],Zt=Math.floor(Ut.start/4),se=Math.ceil(Ut.count/4),_e=Zt%v.width,q=Math.floor(Zt/v.width),Pt=se,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),e.pixelStorei(i.UNPACK_SKIP_ROWS,q),e.texSubImage2D(i.TEXTURE_2D,0,_e,q,Pt,ft,Q,st,v.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ut),e.pixelStorei(i.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Dt)}}function Et(R,v,Q){let st=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(st=i.TEXTURE_3D);let ct=Re(R,v),Tt=v.source;e.bindTexture(st,R.__webglTexture,i.TEXTURE0+Q);let Ct=n.get(Tt);if(Tt.version!==Ct.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+Q),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ft=Ie.getPrimaries(Ie.workingColorSpace),Nt=v.colorSpace===as?null:Ie.getPrimaries(v.colorSpace),Rt=v.colorSpace===as||ft===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let gt=p(v.image,!1,s.maxTextureSize);gt=Pe(v,gt);let Dt=r.convert(v.format,v.colorSpace),ie=r.convert(v.type),Ot=E(v.internalFormat,Dt,ie,v.normalized,v.colorSpace,v.isVideoTexture);we(st,v);let Ut,Zt=v.mipmaps,se=v.isVideoTexture!==!0,_e=Ct.__version===void 0||ct===!0,q=Tt.dataReady,Pt=P(v,gt);if(v.isDepthTexture)Ot=b(v.format===As,v.type),_e&&(se?e.texStorage2D(i.TEXTURE_2D,1,Ot,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,gt.width,gt.height,0,Dt,ie,null));else if(v.isDataTexture)if(Zt.length>0){se&&_e&&e.texStorage2D(i.TEXTURE_2D,Pt,Ot,Zt[0].width,Zt[0].height);for(let ft=0,Nt=Zt.length;ft<Nt;ft++)Ut=Zt[ft],se?q&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Ut.width,Ut.height,Dt,ie,Ut.data):e.texImage2D(i.TEXTURE_2D,ft,Ot,Ut.width,Ut.height,0,Dt,ie,Ut.data);v.generateMipmaps=!1}else se?(_e&&e.texStorage2D(i.TEXTURE_2D,Pt,Ot,gt.width,gt.height),q&&pt(v,gt,Dt,ie)):e.texImage2D(i.TEXTURE_2D,0,Ot,gt.width,gt.height,0,Dt,ie,gt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){se&&_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Ot,Zt[0].width,Zt[0].height,gt.depth);for(let ft=0,Nt=Zt.length;ft<Nt;ft++)if(Ut=Zt[ft],v.format!==mi)if(Dt!==null)if(se){if(q)if(v.layerUpdates.size>0){let Rt=ku(Ut.width,Ut.height,v.format,v.type);for(let xt of v.layerUpdates){let qt=Ut.data.subarray(xt*Rt/Ut.data.BYTES_PER_ELEMENT,(xt+1)*Rt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,xt,Ut.width,Ut.height,1,Dt,qt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Ut.width,Ut.height,gt.depth,Dt,Ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Ot,Ut.width,Ut.height,gt.depth,0,Ut.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Ut.width,Ut.height,gt.depth,Dt,ie,Ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Ot,Ut.width,Ut.height,gt.depth,0,Dt,ie,Ut.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{se&&_e&&e.texStorage2D(i.TEXTURE_2D,Pt,Ot,Zt[0].width,Zt[0].height);for(let ft=0,Nt=Zt.length;ft<Nt;ft++)Ut=Zt[ft],v.format!==mi?Dt!==null?se?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,Ut.width,Ut.height,Dt,Ut.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Ot,Ut.width,Ut.height,0,Ut.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?q&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Ut.width,Ut.height,Dt,ie,Ut.data):e.texImage2D(i.TEXTURE_2D,ft,Ot,Ut.width,Ut.height,0,Dt,ie,Ut.data)}else if(v.isDataArrayTexture)if(se){if(_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Ot,gt.width,gt.height,gt.depth),q)if(v.layerUpdates.size>0){let ft=ku(gt.width,gt.height,v.format,v.type);for(let Nt of v.layerUpdates){let Rt=gt.data.subarray(Nt*ft/gt.data.BYTES_PER_ELEMENT,(Nt+1)*ft/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Nt,gt.width,gt.height,1,Dt,ie,Rt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Dt,ie,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,gt.width,gt.height,gt.depth,0,Dt,ie,gt.data);else if(v.isData3DTexture)se?(_e&&e.texStorage3D(i.TEXTURE_3D,Pt,Ot,gt.width,gt.height,gt.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Dt,ie,gt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,gt.width,gt.height,gt.depth,0,Dt,ie,gt.data);else if(v.isFramebufferTexture){if(_e)if(se)e.texStorage2D(i.TEXTURE_2D,Pt,Ot,gt.width,gt.height);else{let ft=gt.width,Nt=gt.height;for(let Rt=0;Rt<Pt;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,Ot,ft,Nt,0,Dt,ie,null),ft>>=1,Nt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),gt.parentNode!==ft){ft.appendChild(gt),m.add(v),ft.onpaint=Nt=>{let Rt=Nt.changedElements;for(let xt of m)Rt.includes(xt.image)&&(xt.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,gt);else{let Rt=i.RGBA,xt=i.RGBA,qt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Rt,xt,qt,gt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Zt.length>0){if(se&&_e){let ft=Gt(Zt[0]);e.texStorage2D(i.TEXTURE_2D,Pt,Ot,ft.width,ft.height)}for(let ft=0,Nt=Zt.length;ft<Nt;ft++)Ut=Zt[ft],se?q&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Dt,ie,Ut):e.texImage2D(i.TEXTURE_2D,ft,Ot,Dt,ie,Ut);v.generateMipmaps=!1}else if(se){if(_e){let ft=Gt(gt);e.texStorage2D(i.TEXTURE_2D,Pt,Ot,ft.width,ft.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,ie,gt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Dt,ie,gt);f(v)&&N(st),Ct.__version=Tt.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ne(R,v,Q){if(v.image.length!==6)return;let st=Re(R,v),ct=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+Q);let Tt=n.get(ct);if(ct.version!==Tt.__version||st===!0){e.activeTexture(i.TEXTURE0+Q);let Ct=Ie.getPrimaries(Ie.workingColorSpace),ut=v.colorSpace===as?null:Ie.getPrimaries(v.colorSpace),gt=v.colorSpace===as||Ct===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Dt=v.isCompressedTexture||v.image[0].isCompressedTexture,ie=v.image[0]&&v.image[0].isDataTexture,Ot=[];for(let xt=0;xt<6;xt++)!Dt&&!ie?Ot[xt]=p(v.image[xt],!0,s.maxCubemapSize):Ot[xt]=ie?v.image[xt].image:v.image[xt],Ot[xt]=Pe(v,Ot[xt]);let Ut=Ot[0],Zt=r.convert(v.format,v.colorSpace),se=r.convert(v.type),_e=E(v.internalFormat,Zt,se,v.normalized,v.colorSpace),q=v.isVideoTexture!==!0,Pt=Tt.__version===void 0||st===!0,ft=ct.dataReady,Nt=P(v,Ut);we(i.TEXTURE_CUBE_MAP,v);let Rt;if(Dt){q&&Pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,_e,Ut.width,Ut.height);for(let xt=0;xt<6;xt++){Rt=Ot[xt].mipmaps;for(let qt=0;qt<Rt.length;qt++){let Jt=Rt[qt];v.format!==mi?Zt!==null?q?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt,0,0,Jt.width,Jt.height,Zt,Jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt,_e,Jt.width,Jt.height,0,Jt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt,0,0,Jt.width,Jt.height,Zt,se,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt,_e,Jt.width,Jt.height,0,Zt,se,Jt.data)}}}else{if(Rt=v.mipmaps,q&&Pt){Rt.length>0&&Nt++;let xt=Gt(Ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,_e,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(ie){q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ot[xt].width,Ot[xt].height,Zt,se,Ot[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,_e,Ot[xt].width,Ot[xt].height,0,Zt,se,Ot[xt].data);for(let qt=0;qt<Rt.length;qt++){let ze=Rt[qt].image[xt].image;q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt+1,0,0,ze.width,ze.height,Zt,se,ze.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt+1,_e,ze.width,ze.height,0,Zt,se,ze.data)}}else{q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Zt,se,Ot[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,_e,Zt,se,Ot[xt]);for(let qt=0;qt<Rt.length;qt++){let Jt=Rt[qt];q?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt+1,0,0,Zt,se,Jt.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt+1,_e,Zt,se,Jt.image[xt])}}}f(v)&&N(i.TEXTURE_CUBE_MAP),Tt.__version=ct.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function zt(R,v,Q,st,ct,Tt){let Ct=r.convert(Q.format,Q.colorSpace),ut=r.convert(Q.type),gt=E(Q.internalFormat,Ct,ut,Q.normalized,Q.colorSpace),Dt=n.get(v),ie=n.get(Q);if(ie.__renderTarget=v,!Dt.__hasExternalTextures){let Ot=Math.max(1,v.width>>Tt),Ut=Math.max(1,v.height>>Tt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,Tt,gt,Ot,Ut,v.depth,0,Ct,ut,null):e.texImage2D(ct,Tt,gt,Ot,Ut,0,Ct,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),ae(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,ct,ie.__webglTexture,0,le(v)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,ct,ie.__webglTexture,Tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(R,v,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let st=v.depthTexture,ct=st&&st.isDepthTexture?st.type:null,Tt=b(v.stencilBuffer,ct),Ct=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ae(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(v),Tt,v.width,v.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(v),Tt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,R)}else{let st=v.textures;for(let ct=0;ct<st.length;ct++){let Tt=st[ct],Ct=r.convert(Tt.format,Tt.colorSpace),ut=r.convert(Tt.type),gt=E(Tt.internalFormat,Ct,ut,Tt.normalized,Tt.colorSpace);ae(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(v),gt,v.width,v.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(v),gt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,gt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(R,v,Q){let st=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(v.depthTexture);if(ct.__renderTarget=v,(!ct.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),st){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,v.depthTexture.addEventListener("dispose",k)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),we(i.TEXTURE_CUBE_MAP,v.depthTexture);let Dt=r.convert(v.depthTexture.format),ie=r.convert(v.depthTexture.type),Ot;v.depthTexture.format===Bi?Ot=i.DEPTH_COMPONENT24:v.depthTexture.format===As&&(Ot=i.DEPTH24_STENCIL8);for(let Ut=0;Ut<6;Ut++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,Ot,v.width,v.height,0,Dt,ie,null)}}else Mt(v.depthTexture,0);let Tt=ct.__webglTexture,Ct=le(v),ut=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+Q:i.TEXTURE_2D,gt=v.depthTexture.format===As?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Bi)ae(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,ut,Tt,0,Ct):i.framebufferTexture2D(i.FRAMEBUFFER,gt,ut,Tt,0);else if(v.depthTexture.format===As)ae(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,ut,Tt,0,Ct):i.framebufferTexture2D(i.FRAMEBUFFER,gt,ut,Tt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(R){let v=n.get(R),Q=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let st=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),st){let ct=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,st.removeEventListener("dispose",ct)};st.addEventListener("dispose",ct),v.__depthDisposeCallback=ct}v.__boundDepthTexture=st}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(Q)for(let st=0;st<6;st++)ue(v.__webglFramebuffer[st],R,st);else{let st=R.texture.mipmaps;st&&st.length>0?ue(v.__webglFramebuffer[0],R,0):ue(v.__webglFramebuffer,R,0)}else if(Q){v.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[st]),v.__webglDepthbuffer[st]===void 0)v.__webglDepthbuffer[st]=i.createRenderbuffer(),ce(v.__webglDepthbuffer[st],R,!1);else{let ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=v.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,Tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,Tt)}}else{let st=R.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ce(v.__webglDepthbuffer,R,!1);else{let ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,Tt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(R,v,Q){let st=n.get(R);v!==void 0&&zt(st.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&rt(R)}function G(R){let v=R.texture,Q=n.get(R),st=n.get(v);R.addEventListener("dispose",S);let ct=R.textures,Tt=R.isWebGLCubeRenderTarget===!0,Ct=ct.length>1;if(Ct||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=v.version,a.memory.textures++),Tt){Q.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0){Q.__webglFramebuffer[ut]=[];for(let gt=0;gt<v.mipmaps.length;gt++)Q.__webglFramebuffer[ut][gt]=i.createFramebuffer()}else Q.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)Q.__webglFramebuffer[ut]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let ut=0,gt=ct.length;ut<gt;ut++){let Dt=n.get(ct[ut]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&ae(R)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ut=0;ut<ct.length;ut++){let gt=ct[ut];Q.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[ut]);let Dt=r.convert(gt.format,gt.colorSpace),ie=r.convert(gt.type),Ot=E(gt.internalFormat,Dt,ie,gt.normalized,gt.colorSpace,R.isXRRenderTarget===!0),Ut=le(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,Ot,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(Q.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Tt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),we(i.TEXTURE_CUBE_MAP,v);for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)zt(Q.__webglFramebuffer[ut][gt],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt);else zt(Q.__webglFramebuffer[ut],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);f(v)&&N(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ut=0,gt=ct.length;ut<gt;ut++){let Dt=ct[ut],ie=n.get(Dt),Ot=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ot=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ot,ie.__webglTexture),we(Ot,Dt),zt(Q.__webglFramebuffer,R,Dt,i.COLOR_ATTACHMENT0+ut,Ot,0),f(Dt)&&N(Ot)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,st.__webglTexture),we(ut,v),v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)zt(Q.__webglFramebuffer[gt],R,v,i.COLOR_ATTACHMENT0,ut,gt);else zt(Q.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,ut,0);f(v)&&N(ut),e.unbindTexture()}R.depthBuffer&&rt(R)}function wt(R){let v=R.textures;for(let Q=0,st=v.length;Q<st;Q++){let ct=v[Q];if(f(ct)){let Tt=U(R),Ct=n.get(ct).__webglTexture;e.bindTexture(Tt,Ct),N(Tt),e.unbindTexture()}}}let It=[],re=[];function Xt(R){if(R.samples>0){if(ae(R)===!1){let v=R.textures,Q=R.width,st=R.height,ct=i.COLOR_BUFFER_BIT,Tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(R),ut=v.length>1;if(ut)for(let Dt=0;Dt<v.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);let gt=R.texture.mipmaps;gt&&gt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Dt=0;Dt<v.length;Dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Dt]);let ie=n.get(v[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,Q,st,0,0,Q,st,ct,i.NEAREST),l===!0&&(It.length=0,re.length=0,It.push(i.COLOR_ATTACHMENT0+Dt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(It.push(Tt),re.push(Tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Dt=0;Dt<v.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Dt]);let ie=n.get(v[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,ie,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function le(R){return Math.min(s.maxSamples,R.samples)}function ae(R){let v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function W(R){let v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function Pe(R,v){let Q=R.colorSpace,st=R.format,ct=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Q!==Ea&&Q!==as&&(Ie.getTransfer(Q)===Ve?(st!==mi||ct!==Kn)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ge("WebGLTextures: Unsupported texture color space:",Q)),v}function Gt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=ot,this.resetTextureUnits=it,this.getTextureUnits=X,this.setTextureUnits=j,this.setTexture2D=Mt,this.setTexture2DArray=ht,this.setTexture3D=_t,this.setTextureCube=mt,this.rebindTextures=bt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function hS(i,t){function e(n,s=as){let r,a=Ie.getTransfer(s);if(n===Kn)return i.UNSIGNED_BYTE;if(n===rc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ac)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Au)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eu)return i.BYTE;if(n===Tu)return i.SHORT;if(n===Vr)return i.UNSIGNED_SHORT;if(n===sc)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===pi)return i.FLOAT;if(n===Ci)return i.HALF_FLOAT;if(n===Ru)return i.ALPHA;if(n===Iu)return i.RGB;if(n===mi)return i.RGBA;if(n===Bi)return i.DEPTH_COMPONENT;if(n===As)return i.DEPTH_STENCIL;if(n===oc)return i.RED;if(n===lc)return i.RED_INTEGER;if(n===Cs)return i.RG;if(n===cc)return i.RG_INTEGER;if(n===hc)return i.RGBA_INTEGER;if(n===lo||n===co||n===ho||n===uo)if(a===Ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uc||n===dc||n===fc||n===pc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mc||n===gc||n===_c||n===xc||n===vc||n===fo||n===yc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===mc||n===gc)return a===Ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_c)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xc)return r.COMPRESSED_R11_EAC;if(n===vc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fo)return r.COMPRESSED_RG11_EAC;if(n===yc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Sc||n===Mc||n===bc||n===wc||n===Ec||n===Tc||n===Ac||n===Cc||n===Rc||n===Ic||n===Pc||n===Lc||n===Dc||n===Nc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ec)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ac)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ic)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uc||n===Fc||n===Oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Uc)return a===Ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===kc||n===po||n===zc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var uS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dS=`
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

}`,Qu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ba(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new yn({vertexShader:uS,fragmentShader:dS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new vn(new Ya(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},td=class extends ki{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,m=null,d=null,g=null,x=null,T=typeof XRWebGLBinding<"u",p=new Qu,f={},N=e.getContextAttributes(),U=null,E=null,b=[],P=[],k=new Lt,S=null,I=null,B=new Nn;B.viewport=new He;let $=new Nn;$.viewport=new He;let tt=[B,$],it=new Ql,X=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(dt){let pt=b[dt];return pt===void 0&&(pt=new Lr,b[dt]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(dt){let pt=b[dt];return pt===void 0&&(pt=new Lr,b[dt]=pt),pt.getGripSpace()},this.getHand=function(dt){let pt=b[dt];return pt===void 0&&(pt=new Lr,b[dt]=pt),pt.getHandSpace()};function ot(dt){let pt=P.indexOf(dt.inputSource);if(pt===-1)return;let Et=b[pt];Et!==void 0&&(Et.update(dt.inputSource,dt.frame,c||a),Et.dispatchEvent({type:dt.type,data:dt.inputSource}))}function lt(){s.removeEventListener("select",ot),s.removeEventListener("selectstart",ot),s.removeEventListener("selectend",ot),s.removeEventListener("squeeze",ot),s.removeEventListener("squeezestart",ot),s.removeEventListener("squeezeend",ot),s.removeEventListener("end",lt),s.removeEventListener("inputsourceschange",Mt);for(let dt=0;dt<b.length;dt++){let pt=P[dt];pt!==null&&(P[dt]=null,b[dt].disconnect(pt))}X=null,j=null,p.reset();for(let dt in f)delete f[dt];if(t.setRenderTarget(U),g=null,d=null,m=null,s=null,E=null,Re.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(k.width,k.height,!1),I!==null){let dt=I.camera;dt.fov=I.fov,dt.zoom=I.zoom,dt.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(dt){r=dt,n.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(dt){o=dt,n.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(dt){c=dt},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return m===null&&T&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(dt){if(s=dt,s!==null){if(U=t.getRenderTarget(),s.addEventListener("select",ot),s.addEventListener("selectstart",ot),s.addEventListener("selectend",ot),s.addEventListener("squeeze",ot),s.addEventListener("squeezestart",ot),s.addEventListener("squeezeend",ot),s.addEventListener("end",lt),s.addEventListener("inputsourceschange",Mt),N.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(k),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,ne=null,zt=null;N.depth&&(zt=N.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=N.stencil?As:Bi,ne=N.stencil?Hr:Ai);let ce={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:r};m=this.getBinding(),d=m.createProjectionLayer(ce),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Zn(d.textureWidth,d.textureHeight,{format:mi,type:Kn,depthTexture:new vs(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Et={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new Zn(g.framebufferWidth,g.framebufferHeight,{format:mi,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Mt(dt){for(let pt=0;pt<dt.removed.length;pt++){let Et=dt.removed[pt],ne=P.indexOf(Et);ne>=0&&(P[ne]=null,b[ne].disconnect(Et))}for(let pt=0;pt<dt.added.length;pt++){let Et=dt.added[pt],ne=P.indexOf(Et);if(ne===-1){for(let ce=0;ce<b.length;ce++)if(ce>=P.length){P.push(Et),ne=ce;break}else if(P[ce]===null){P[ce]=Et,ne=ce;break}if(ne===-1)break}let zt=b[ne];zt&&zt.connect(Et)}}let ht=new H,_t=new H;function mt(dt,pt,Et){ht.setFromMatrixPosition(pt.matrixWorld),_t.setFromMatrixPosition(Et.matrixWorld);let ne=ht.distanceTo(_t),zt=pt.projectionMatrix.elements,ce=Et.projectionMatrix.elements,ue=zt[14]/(zt[10]-1),rt=zt[14]/(zt[10]+1),bt=(zt[9]+1)/zt[5],G=(zt[9]-1)/zt[5],wt=(zt[8]-1)/zt[0],It=(ce[8]+1)/ce[0],re=ue*wt,Xt=ue*It,le=ne/(-wt+It),ae=le*-wt;if(pt.matrixWorld.decompose(dt.position,dt.quaternion,dt.scale),dt.translateX(ae),dt.translateZ(le),dt.matrixWorld.compose(dt.position,dt.quaternion,dt.scale),dt.matrixWorldInverse.copy(dt.matrixWorld).invert(),zt[10]===-1)dt.projectionMatrix.copy(pt.projectionMatrix),dt.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{let W=ue+le,Pe=rt+le,Gt=re-ae,R=Xt+(ne-ae),v=bt*rt/Pe*W,Q=G*rt/Pe*W;dt.projectionMatrix.makePerspective(Gt,R,v,Q,W,Pe),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert()}}function Vt(dt,pt){pt===null?dt.matrixWorld.copy(dt.matrix):dt.matrixWorld.multiplyMatrices(pt.matrixWorld,dt.matrix),dt.matrixWorldInverse.copy(dt.matrixWorld).invert()}this.updateCamera=function(dt){if(s===null)return;let pt=dt.near,Et=dt.far;p.texture!==null&&(p.depthNear>0&&(pt=p.depthNear),p.depthFar>0&&(Et=p.depthFar)),it.near=$.near=B.near=pt,it.far=$.far=B.far=Et,(X!==it.near||j!==it.far)&&(s.updateRenderState({depthNear:it.near,depthFar:it.far}),X=it.near,j=it.far),it.layers.mask=dt.layers.mask|6,B.layers.mask=it.layers.mask&-5,$.layers.mask=it.layers.mask&-3;let ne=dt.parent,zt=it.cameras;Vt(it,ne);for(let ce=0;ce<zt.length;ce++)Vt(zt[ce],ne);zt.length===2?mt(it,B,$):it.projectionMatrix.copy(B.projectionMatrix),I===null&&dt.isPerspectiveCamera&&(I={camera:dt,fov:dt.fov,zoom:dt.zoom}),Ht(dt,it,ne)};function Ht(dt,pt,Et){Et===null?dt.matrix.copy(pt.matrixWorld):(dt.matrix.copy(Et.matrixWorld),dt.matrix.invert(),dt.matrix.multiply(pt.matrixWorld)),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.updateMatrixWorld(!0),dt.projectionMatrix.copy(pt.projectionMatrix),dt.projectionMatrixInverse.copy(pt.projectionMatrixInverse),dt.isPerspectiveCamera&&(dt.fov=Rr*2*Math.atan(1/dt.projectionMatrix.elements[5]),dt.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(dt){l=dt,d!==null&&(d.fixedFoveation=dt),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=dt)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(it)},this.getCameraTexture=function(dt){return f[dt]};let Ne=null;function we(dt,pt){if(h=pt.getViewerPose(c||a),x=pt,h!==null){let Et=h.views;g!==null&&(t.setRenderTargetFramebuffer(E,g.framebuffer),t.setRenderTarget(E));let ne=!1;Et.length!==it.cameras.length&&(it.cameras.length=0,ne=!0);for(let rt=0;rt<Et.length;rt++){let bt=Et[rt],G=null;if(g!==null)G=g.getViewport(bt);else{let It=m.getViewSubImage(d,bt);G=It.viewport,rt===0&&(t.setRenderTargetTextures(E,It.colorTexture,It.depthStencilTexture),t.setRenderTarget(E))}let wt=tt[rt];wt===void 0&&(wt=new Nn,wt.layers.enable(rt),wt.viewport=new He,tt[rt]=wt),wt.matrix.fromArray(bt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(bt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(G.x,G.y,G.width,G.height),rt===0&&(it.matrix.copy(wt.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),ne===!0&&it.cameras.push(wt)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){m=n.getBinding();let rt=m.getDepthInformation(Et[0]);rt&&rt.isValid&&rt.texture&&p.init(rt,s.renderState)}if(zt&&zt.includes("camera-access")&&T){t.state.unbindTexture(),m=n.getBinding();for(let rt=0;rt<Et.length;rt++){let bt=Et[rt].camera;if(bt){let G=f[bt];G||(G=new Ba,f[bt]=G);let wt=m.getCameraImage(bt);G.sourceTexture=wt}}}}for(let Et=0;Et<b.length;Et++){let ne=P[Et],zt=b[Et];ne!==null&&zt!==void 0&&zt.update(ne,pt,c||a)}Ne&&Ne(dt,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),x=null}let Re=new Wp;Re.setAnimationLoop(we),this.setAnimationLoop=function(dt){Ne=dt},this.dispose=function(){}}},fS=new Fe,Jp=new Me;Jp.set(-1,0,0,0,1,0,0,0,1);function pS(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Fu(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,N,U,E){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),m(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&g(p,f,E)):f.isMeshMatcapMaterial?(r(p,f),x(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),T(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,N,U):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Hn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Hn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let N=t.get(f),U=N.envMap,E=N.envMapRotation;U&&(p.envMap.value=U,p.envMapRotation.value.setFromMatrix4(fS.makeRotationFromEuler(E)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Jp),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,N,U){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*N,p.scale.value=U*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function m(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,N){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Hn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=N.texture,p.transmissionSamplerSize.value.set(N.width,N.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function T(p,f){let N=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(N.matrixWorld),p.nearDistance.value=N.shadow.camera.near,p.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mS(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){let P=b.program;n.uniformBlockBinding(E,P)}function c(E,b){let P=s[E.id];P===void 0&&(p(E),P=h(E),s[E.id]=P,E.addEventListener("dispose",N));let k=b.program;n.updateUBOMapping(E,k);let S=t.render.frame;r[E.id]!==S&&(d(E),r[E.id]=S)}function h(E){let b=m();E.__bindingPointIndex=b;let P=i.createBuffer(),k=E.__size,S=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,k,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,P),P}function m(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let b=s[E.id],P=E.uniforms,k=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let S=0,I=P.length;S<I;S++){let B=P[S];if(Array.isArray(B))for(let $=0,tt=B.length;$<tt;$++)g(B[$],S,$,k);else g(B,S,0,k)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(E,b,P,k){if(T(E,b,P,k)===!0){let S=E.__offset,I=E.value;if(Array.isArray(I)){let B=0;for(let $=0;$<I.length;$++){let tt=I[$],it=f(tt);x(tt,E.__data,B),typeof tt!="number"&&typeof tt!="boolean"&&!tt.isMatrix3&&!ArrayBuffer.isView(tt)&&(B+=it.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(I,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,E.__data)}}function x(E,b,P){typeof E=="number"||typeof E=="boolean"?b[0]=E:E.isMatrix3?(b[0]=E.elements[0],b[1]=E.elements[1],b[2]=E.elements[2],b[3]=0,b[4]=E.elements[3],b[5]=E.elements[4],b[6]=E.elements[5],b[7]=0,b[8]=E.elements[6],b[9]=E.elements[7],b[10]=E.elements[8],b[11]=0):ArrayBuffer.isView(E)?b.set(new E.constructor(E.buffer,E.byteOffset,b.length)):E.toArray(b,P)}function T(E,b,P,k){let S=E.value,I=b+"_"+P;if(k[I]===void 0)return typeof S=="number"||typeof S=="boolean"?k[I]=S:ArrayBuffer.isView(S)?k[I]=S.slice():k[I]=S.clone(),!0;{let B=k[I];if(typeof S=="number"||typeof S=="boolean"){if(B!==S)return k[I]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(B.equals(S)===!1)return B.copy(S),!0}}return!1}function p(E){let b=E.uniforms,P=0,k=16;for(let I=0,B=b.length;I<B;I++){let $=Array.isArray(b[I])?b[I]:[b[I]];for(let tt=0,it=$.length;tt<it;tt++){let X=$[tt],j=Array.isArray(X.value)?X.value:[X.value];for(let ot=0,lt=j.length;ot<lt;ot++){let Mt=j[ot],ht=f(Mt),_t=P%k,mt=_t%ht.boundary,Vt=_t+mt;P+=mt,Vt!==0&&k-Vt<ht.storage&&(P+=k-Vt),X.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=P,P+=ht.storage}}}let S=P%k;return S>0&&(P+=k-S),E.__size=P,E.__cache={},this}function f(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(b.boundary=16,b.storage=E.byteLength):de("WebGLRenderer: Unsupported uniform value type.",E),b}function N(E){let b=E.target;b.removeEventListener("dispose",N);let P=a.indexOf(b.__bindingPointIndex);a.splice(P,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function U(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:U}}var gS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wi=null;function _S(){return Wi===null&&(Wi=new Da(gS,16,16,Cs,Ci),Wi.name="DFG_LUT",Wi.minFilter=wn,Wi.magFilter=wn,Wi.wrapS=Fi,Wi.wrapT=Fi,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}var Yc=class{constructor(t={}){let{canvas:e=dp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:d=!1,outputBufferType:g=Kn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let T=g,p=new Set([hc,cc,lc]),f=new Set([Kn,Ai,Vr,Hr,rc,ac]),N=new Uint32Array(4),U=new Int32Array(4),E=new H,b=null,P=null,k=[],S=[],I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,$=!1,tt=null,it=null,X=null,j=null;this._outputColorSpace=ii;let ot=0,lt=0,Mt=null,ht=-1,_t=null,mt=new He,Vt=new He,Ht=null,Ne=new fe(0),we=0,Re=e.width,dt=e.height,pt=1,Et=null,ne=null,zt=new He(0,0,Re,dt),ce=new He(0,0,Re,dt),ue=!1,rt=new Dr,bt=!1,G=!1,wt=new Fe,It=new H,re=new He,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function ae(){return Mt===null?pt:1}let W=n;function Pe(M,z){return e.getContext(M,z)}let Gt,R,v,Q,st,ct,Tt,Ct,ut,gt,Dt,ie,Ot,Ut,Zt,se,_e,q,Pt,ft,Nt,Rt,xt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ze,!1),e.addEventListener("webglcontextrestored",Ue,!1),e.addEventListener("webglcontextcreationerror",$n,!1),W===null){let z="webgl2";if(W=Pe(z,M),W===null)throw Pe(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qt()}catch(M){throw e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",Ue,!1),e.removeEventListener("webglcontextcreationerror",$n,!1),ge("WebGLRenderer: "+M.message),M}function qt(){Gt=new wv(W),Gt.init(),Nt=new hS(W,Gt),R=new pv(W,Gt,t,Nt),v=new lS(W,Gt),R.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),it=W.createFramebuffer(),X=W.createFramebuffer(),j=W.createFramebuffer(),Q=new Av(W),st=new Yy,ct=new cS(W,Gt,v,st,R,Nt,Q),Tt=new bv(B),Ct=new R0(W),Rt=new dv(W,Ct),ut=new Ev(W,Ct,Q,Rt),gt=new Rv(W,ut,Ct,Rt,Q),q=new Cv(W,R,ct),Zt=new mv(st),Dt=new qy(B,Tt,Gt,R,Rt,Zt),ie=new pS(B,st),Ot=new Jy,Ut=new nS(Gt),_e=new uv(B,Tt,v,gt,x,l),se=new oS(B,gt,R),xt=new mS(W,Q,R,v),Pt=new fv(W,Gt,Q),ft=new Tv(W,Gt,Q),Q.programs=Dt.programs,B.capabilities=R,B.extensions=Gt,B.properties=st,B.renderLists=Ot,B.shadowMap=se,B.state=v,B.info=Q}T!==Kn&&(I=new Pv(T,e.width,e.height,o,s,r));let Jt=new td(B,W);this.xr=Jt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let M=Gt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Gt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(M){M!==void 0&&(pt=M,this.setSize(Re,dt,!1))},this.getSize=function(M){return M.set(Re,dt)},this.setSize=function(M,z,Y=!0){if(Jt.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=M,dt=z,e.width=Math.floor(M*pt),e.height=Math.floor(z*pt),Y===!0&&(e.style.width=M+"px",e.style.height=z+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(Re*pt,dt*pt).floor()},this.setDrawingBufferSize=function(M,z,Y){Re=M,dt=z,pt=Y,e.width=Math.floor(M*Y),e.height=Math.floor(z*Y),this.setViewport(0,0,M,z)},this.setEffects=function(M){if(T===Kn){ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let z=0;z<M.length;z++)if(M[z].isOutputPass===!0){de("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(mt)},this.getViewport=function(M){return M.copy(zt)},this.setViewport=function(M,z,Y,J){M.isVector4?zt.set(M.x,M.y,M.z,M.w):zt.set(M,z,Y,J),v.viewport(mt.copy(zt).multiplyScalar(pt).round())},this.getScissor=function(M){return M.copy(ce)},this.setScissor=function(M,z,Y,J){M.isVector4?ce.set(M.x,M.y,M.z,M.w):ce.set(M,z,Y,J),v.scissor(Vt.copy(ce).multiplyScalar(pt).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(M){v.setScissorTest(ue=M)},this.setOpaqueSort=function(M){Et=M},this.setTransparentSort=function(M){ne=M},this.getClearColor=function(M){return M.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(M=!0,z=!0,Y=!0){let J=0;if(M){let K=!1;if(Mt!==null){let kt=Mt.texture.format;K=p.has(kt)}if(K){let kt=Mt.texture.type,$t=f.has(kt),Bt=_e.getClearColor(),Kt=_e.getClearAlpha(),Yt=Bt.r,Se=Bt.g,xe=Bt.b;$t?(N[0]=Yt,N[1]=Se,N[2]=xe,N[3]=Kt,W.clearBufferuiv(W.COLOR,0,N)):(U[0]=Yt,U[1]=Se,U[2]=xe,U[3]=Kt,W.clearBufferiv(W.COLOR,0,U))}else J|=W.COLOR_BUFFER_BIT}z&&(J|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(J|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&W.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),tt=M},this.dispose=function(){e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",Ue,!1),e.removeEventListener("webglcontextcreationerror",$n,!1),_e.dispose(),Ot.dispose(),Ut.dispose(),st.dispose(),Tt.dispose(),gt.dispose(),Rt.dispose(),xt.dispose(),Dt.dispose(),Jt.dispose(),Jt.removeEventListener("sessionstart",jr),Jt.removeEventListener("sessionend",Qr),gi.stop()};function ze(M){M.preventDefault(),Ca("WebGLRenderer: Context Lost."),$=!0}function Ue(){Ca("WebGLRenderer: Context Restored."),$=!1;let M=Q.autoReset,z=se.enabled,Y=se.autoUpdate,J=se.needsUpdate,K=se.type;qt(),Q.autoReset=M,se.enabled=z,se.autoUpdate=Y,se.needsUpdate=J,se.type=K}function $n(M){ge("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Rn(M){let z=M.target;z.removeEventListener("dispose",Rn),fh(z)}function fh(M){Kr(M),st.remove(M)}function Kr(M){let z=st.get(M).programs;z!==void 0&&(z.forEach(function(Y){Dt.releaseProgram(Y)}),M.isShaderMaterial&&Dt.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,Y,J,K,kt){z===null&&(z=Xt);let $t=K.isMesh&&K.matrixWorld.determinantAffine()<0,Bt=en(M,z,Y,J,K);v.setMaterial(J,$t);let Kt=Y.index,Yt=1;if(J.wireframe===!0){if(Kt=ut.getWireframeAttribute(Y),Kt===void 0)return;Yt=2}let Se=Y.drawRange,xe=Y.attributes.position,Qt=Se.start*Yt,Oe=(Se.start+Se.count)*Yt;kt!==null&&(Qt=Math.max(Qt,kt.start*Yt),Oe=Math.min(Oe,(kt.start+kt.count)*Yt)),Kt!==null?(Qt=Math.max(Qt,0),Oe=Math.min(Oe,Kt.count)):xe!=null&&(Qt=Math.max(Qt,0),Oe=Math.min(Oe,xe.count));let nn=Oe-Qt;if(nn<0||nn===1/0)return;Rt.setup(K,J,Bt,Y,Kt);let Ye,Ge=Pt;if(Kt!==null&&(Ye=Ct.get(Kt),Ge=ft,Ge.setIndex(Ye)),K.isMesh)J.wireframe===!0?(v.setLineWidth(J.wireframeLinewidth*ae()),Ge.setMode(W.LINES)):Ge.setMode(W.TRIANGLES);else if(K.isLine){let mn=J.linewidth;mn===void 0&&(mn=1),v.setLineWidth(mn*ae()),K.isLineSegments?Ge.setMode(W.LINES):K.isLineLoop?Ge.setMode(W.LINE_LOOP):Ge.setMode(W.LINE_STRIP)}else K.isPoints?Ge.setMode(W.POINTS):K.isSprite&&Ge.setMode(W.TRIANGLES);if(K.isBatchedMesh)if(Gt.get("WEBGL_multi_draw"))Ge.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let mn=K._multiDrawStarts,Wt=K._multiDrawCounts,ve=K._multiDrawCount,Le=Kt?Ct.get(Kt).bytesPerElement:1,Sn=st.get(J).currentProgram.getUniforms();for(let oi=0;oi<ve;oi++)Sn.setValue(W,"_gl_DrawID",oi),Ge.render(mn[oi]/Le,Wt[oi])}else if(K.isInstancedMesh)Ge.renderInstances(Qt,nn,K.count);else if(Y.isInstancedBufferGeometry){let mn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Wt=Math.min(Y.instanceCount,mn);Ge.renderInstances(Qt,nn,Wt)}else Ge.render(Qt,nn)};function Ri(M,z,Y,J){tt!==null&&M.isNodeMaterial&&tt.setObject(J,M),bt===!0&&Zt.setState(M,Y,!1),M.transparent===!0&&M.side===Hi&&M.forceSinglePass===!1?(M.side=Hn,M.needsUpdate=!0,ar(M,z,J),M.side=ws,M.needsUpdate=!0,ar(M,z,J),M.side=Hi):ar(M,z,J)}this.compile=function(M,z,Y=null){Y===null&&(Y=M),tt!==null&&tt.renderStart(M,z,Y),P=Ut.get(Y),P.init(z),S.push(P),Y.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(P.pushLight(K),K.castShadow&&P.pushShadow(K))}),M!==Y&&M.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(P.pushLight(K),K.castShadow&&P.pushShadow(K))}),P.setupLights(),tt!==null&&tt.updateLights(P.state.lightsArray),G=this.localClippingEnabled,bt=Zt.init(this.clippingPlanes,G),bt===!0&&Zt.setGlobalState(this.clippingPlanes,z),tt!==null&&se.render(P.state.shadowsArray,Y,z);let J=new Set;return M.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let kt=K.material;if(kt)if(Array.isArray(kt))for(let $t=0;$t<kt.length;$t++){let Bt=kt[$t];Ri(Bt,Y,z,K),J.add(Bt)}else Ri(kt,Y,z,K),J.add(kt)}),P=S.pop(),tt!==null&&tt.renderEnd(),J},this.compileAsync=function(M,z,Y=null){let J=this.compile(M,z,Y);return new Promise(K=>{function kt(){if(J.forEach(function($t){let Kt=st.get($t).currentProgram;(Kt===void 0||Kt.isReady())&&J.delete($t)}),J.size===0){K(M);return}setTimeout(kt,10)}Gt.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let hs=null;function Eo(M){hs&&hs(M)}function jr(){gi.stop()}function Qr(){gi.start()}let gi=new Wp;gi.setAnimationLoop(Eo),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(M){hs=M,Jt.setAnimationLoop(M),M===null?gi.stop():gi.start()},Jt.addEventListener("sessionstart",jr),Jt.addEventListener("sessionend",Qr),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;tt!==null&&tt.renderStart(M,z);let Y=Jt.enabled===!0&&Jt.isPresenting===!0,J=I!==null&&(Mt===null||Y)&&I.begin(B,Mt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Jt.enabled===!0&&Jt.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Jt.cameraAutoUpdate===!0&&Jt.updateCamera(z),z=Jt.getCamera()),M.isScene===!0&&M.onBeforeRender(B,M,z,Mt),P=Ut.get(M,S.length),P.init(z),P.state.textureUnits=ct.getTextureUnits(),S.push(P),wt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),rt.setFromProjectionMatrix(wt,bi,z.reversedDepth),G=this.localClippingEnabled,bt=Zt.init(this.clippingPlanes,G),b=Ot.get(M,k.length),b.init(),k.push(b),Jt.enabled===!0&&Jt.isPresenting===!0){let $t=B.xr.getDepthSensingMesh();$t!==null&&rr($t,z,-1/0,B.sortObjects)}rr(M,z,0,B.sortObjects),b.finish(),tt!==null&&tt.updateLights(P.state.lightsArray),B.sortObjects===!0&&b.sort(Et,ne),le=Jt.enabled===!1||Jt.isPresenting===!1||Jt.hasDepthSensing()===!1,le&&_e.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),bt===!0&&Zt.beginShadows();let K=P.state.shadowsArray;if(se.render(K,M,z),bt===!0&&Zt.endShadows(),(J&&I.hasRenderPass())===!1){let $t=b.opaque,Bt=b.transmissive;if(P.setupLights(),z.isArrayCamera){let Kt=z.cameras;if(Bt.length>0)for(let Yt=0,Se=Kt.length;Yt<Se;Yt++){let xe=Kt[Yt];Ls($t,Bt,M,xe)}le&&_e.render(M);for(let Yt=0,Se=Kt.length;Yt<Se;Yt++){let xe=Kt[Yt];ta(b,M,xe,xe.viewport)}}else Bt.length>0&&Ls($t,Bt,M,z),le&&_e.render(M),ta(b,M,z)}Mt!==null&&lt===0&&(ct.updateMultisampleRenderTarget(Mt),ct.updateRenderTargetMipmap(Mt)),J&&I.end(B),M.isScene===!0&&M.onAfterRender(B,M,z),Rt.resetDefaultState(),ht=-1,_t=null,S.pop(),S.length>0?(P=S[S.length-1],ct.setTextureUnits(P.state.textureUnits),bt===!0&&Zt.setGlobalState(B.clippingPlanes,P.state.camera)):P=null,k.pop(),k.length>0?b=k[k.length-1]:b=null,tt!==null&&tt.renderEnd()};function rr(M,z,Y,J){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLightProbeGrid)P.pushLightProbeGrid(M);else if(M.isLight)P.pushLight(M),M.castShadow&&P.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(rt)){J&&re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(wt);let $t=gt.update(M),Bt=M.material;Bt.visible&&b.push(M,$t,Bt,Y,re.z,null,z)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(rt))){let $t=gt.update(M),Bt=M.material;if(J&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),re.copy(M.boundingSphere.center)):($t.boundingSphere===null&&$t.computeBoundingSphere(),re.copy($t.boundingSphere.center)),re.applyMatrix4(M.matrixWorld).applyMatrix4(wt)),Array.isArray(Bt)){let Kt=$t.groups;for(let Yt=0,Se=Kt.length;Yt<Se;Yt++){let xe=Kt[Yt],Qt=Bt[xe.materialIndex];Qt&&Qt.visible&&b.push(M,$t,Qt,Y,re.z,xe,z)}}else Bt.visible&&b.push(M,$t,Bt,Y,re.z,null,z)}}let kt=M.children;for(let $t=0,Bt=kt.length;$t<Bt;$t++)rr(kt[$t],z,Y,J)}function ta(M,z,Y,J){let{opaque:K,transmissive:kt,transparent:$t}=M;P.setupLightsView(Y),bt===!0&&Zt.setGlobalState(B.clippingPlanes,Y),J&&v.viewport(mt.copy(J)),K.length>0&&Ds(K,z,Y),kt.length>0&&Ds(kt,z,Y),$t.length>0&&Ds($t,z,Y),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Ls(M,z,Y,J){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[J.id]===void 0){let Qt=Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[J.id]=new Zn(1,1,{generateMipmaps:!0,type:Qt?Ci:Kn,minFilter:Ts,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ie.workingColorSpace})}let kt=P.state.transmissionRenderTarget[J.id],$t=J.viewport||mt;kt.setSize($t.z*B.transmissionResolutionScale,$t.w*B.transmissionResolutionScale);let Bt=B.getRenderTarget(),Kt=B.getActiveCubeFace(),Yt=B.getActiveMipmapLevel();B.setRenderTarget(kt),B.getClearColor(Ne),we=B.getClearAlpha(),we<1&&B.setClearColor(16777215,.5),B.clear(),le&&_e.render(Y);let Se=B.toneMapping;B.toneMapping=Ti;let xe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),P.setupLightsView(J),bt===!0&&Zt.setGlobalState(B.clippingPlanes,J),Ds(M,Y,J),ct.updateMultisampleRenderTarget(kt),ct.updateRenderTargetMipmap(kt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Oe=0,nn=z.length;Oe<nn;Oe++){let Ye=z[Oe],{object:Ge,geometry:mn,material:Wt,group:ve}=Ye;if(Wt.side===Hi&&Ge.layers.test(J.layers)){let Le=Wt.side;Wt.side=Hn,Wt.needsUpdate=!0,To(Ge,Y,J,mn,Wt,ve),Wt.side=Le,Wt.needsUpdate=!0,Qt=!0}}Qt===!0&&(ct.updateMultisampleRenderTarget(kt),ct.updateRenderTargetMipmap(kt))}B.setRenderTarget(Bt,Kt,Yt),B.setClearColor(Ne,we),xe!==void 0&&(J.viewport=xe),B.toneMapping=Se}function Ds(M,z,Y){let J=z.isScene===!0?z.overrideMaterial:null;for(let K=0,kt=M.length;K<kt;K++){let $t=M[K],{object:Bt,geometry:Kt,group:Yt}=$t,Se=$t.material;Se.allowOverride===!0&&J!==null&&(Se=J),Bt.layers.test(Y.layers)&&To(Bt,z,Y,Kt,Se,Yt)}}function To(M,z,Y,J,K,kt){tt!==null&&K.isNodeMaterial&&tt.setObject(M,K),M.onBeforeRender(B,z,Y,J,K,kt),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),K.onBeforeRender(B,z,Y,J,M,kt),K.transparent===!0&&K.side===Hi&&K.forceSinglePass===!1?(K.side=Hn,K.needsUpdate=!0,B.renderBufferDirect(Y,z,J,K,M,kt),K.side=ws,K.needsUpdate=!0,B.renderBufferDirect(Y,z,J,K,M,kt),K.side=Hi):B.renderBufferDirect(Y,z,J,K,M,kt),M.onAfterRender(B,z,Y,J,K,kt)}function ar(M,z,Y){z.isScene!==!0&&(z=Xt);let J=st.get(M),K=P.state.lights,kt=P.state.shadowsArray,$t=K.state.version,Bt=Dt.getParameters(M,K.state,kt,z,Y,P.state.lightProbeGridArray),Kt=Dt.getProgramCacheKey(Bt),Yt=J.programs;J.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?z.environment:null,J.fog=z.fog;let Se=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;J.envMap=Tt.get(M.envMap||J.environment,Se),J.envMapRotation=J.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,Yt===void 0&&(M.addEventListener("dispose",Rn),Yt=new Map,J.programs=Yt);let xe=Yt.get(Kt);if(xe!==void 0){if(J.currentProgram===xe&&J.lightsStateVersion===$t)return Ao(M,Bt),xe}else Bt.uniforms=Dt.getUniforms(M),tt!==null&&M.isNodeMaterial&&tt.build(M,Y,Bt),M.onBeforeCompile(Bt,B),xe=Dt.acquireProgram(Bt,Kt),Yt.set(Kt,xe),J.uniforms=Bt.uniforms;let Qt=J.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Qt.clippingPlanes=Zt.uniform),Ao(M,Bt),J.needsLights=Ii(M),J.lightsStateVersion=$t,J.needsLights&&(Qt.ambientLightColor.value=K.state.ambient,Qt.lightProbe.value=K.state.probe,Qt.sunLights.value=K.state.sun,Qt.sunLightShadows.value=K.state.sunShadow,Qt.directionalLights.value=K.state.directional,Qt.directionalLightShadows.value=K.state.directionalShadow,Qt.spotLights.value=K.state.spot,Qt.spotLightShadows.value=K.state.spotShadow,Qt.rectAreaLights.value=K.state.rectArea,Qt.ltc_1.value=K.state.rectAreaLTC1,Qt.ltc_2.value=K.state.rectAreaLTC2,Qt.pointLights.value=K.state.point,Qt.pointLightShadows.value=K.state.pointShadow,Qt.hemisphereLights.value=K.state.hemi,Qt.sunShadowMatrix.value=K.state.sunShadowMatrix,Qt.sunShadowCascade.value=K.state.sunShadowCascade,Qt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Qt.spotLightMatrix.value=K.state.spotLightMatrix,Qt.spotLightMap.value=K.state.spotLightMap,Qt.pointShadowMatrix.value=K.state.pointShadowMatrix),J.lightProbeGrid=P.state.lightProbeGridArray.length>0,J.currentProgram=xe,J.uniformsList=null,xe}function ea(M){if(M.uniformsList===null){let z=M.currentProgram.getUniforms();M.uniformsList=$r.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function Ao(M,z){let Y=st.get(M);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function Qn(M,z){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;E.setFromMatrixPosition(z.matrixWorld);for(let Y=0,J=M.length;Y<J;Y++){let K=M[Y];if(K.texture!==null&&K.boundingBox.containsPoint(E))return K}return null}function en(M,z,Y,J,K){z.isScene!==!0&&(z=Xt),ct.resetTextureUnits();let kt=z.fog,$t=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?z.environment:null,Bt=Mt===null?B.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Ie.workingColorSpace,Kt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Yt=Tt.get(J.envMap||$t,Kt),Se=J.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,xe=!!Y.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Qt=!!Y.morphAttributes.position,Oe=!!Y.morphAttributes.normal,nn=!!Y.morphAttributes.color,Ye=Ti;J.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Ye=B.toneMapping);let Ge=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,mn=Ge!==void 0?Ge.length:0,Wt=st.get(J),ve=P.state.lights;if(bt===!0&&(G===!0||M!==_t)){let Be=M===_t&&J.id===ht;Zt.setState(J,M,Be)}let Le=!1;J.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==ve.state.version||Wt.outputColorSpace!==Bt||K.isBatchedMesh&&Wt.batching===!1||!K.isBatchedMesh&&Wt.batching===!0||K.isBatchedMesh&&Wt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Wt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Wt.instancing===!1||!K.isInstancedMesh&&Wt.instancing===!0||K.isSkinnedMesh&&Wt.skinning===!1||!K.isSkinnedMesh&&Wt.skinning===!0||K.isInstancedMesh&&Wt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Wt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Wt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Wt.instancingMorph===!1&&K.morphTexture!==null||Wt.envMap!==Yt||J.fog===!0&&Wt.fog!==kt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Zt.numPlanes||Wt.numIntersection!==Zt.numIntersection)||Wt.vertexAlphas!==Se||Wt.vertexTangents!==xe||Wt.morphTargets!==Qt||Wt.morphNormals!==Oe||Wt.morphColors!==nn||Wt.toneMapping!==Ye||Wt.morphTargetsCount!==mn||!!Wt.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Le=!0):(Le=!0,Wt.__version=J.version);let Sn=Wt.currentProgram;Le===!0&&(Sn=ar(J,z,K),tt&&J.isNodeMaterial&&tt.onUpdateProgram(J,Sn,Wt));let oi=!1,li=!1,On=!1,Ae=Sn.getUniforms(),Qe=Wt.uniforms;if(v.useProgram(Sn.program)&&(oi=!0,li=!0,On=!0),J.id!==ht&&(ht=J.id,li=!0),Wt.needsLights){let Be=Qn(P.state.lightProbeGridArray,K);Wt.lightProbeGrid!==Be&&(Wt.lightProbeGrid=Be,li=!0)}if(oi||_t!==M){v.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ae.setValue(W,"projectionMatrix",M.projectionMatrix),Ae.setValue(W,"viewMatrix",M.matrixWorldInverse);let Pi=Ae.map.cameraPosition;Pi!==void 0&&Pi.setValue(W,It.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&Ae.setValue(W,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ae.setValue(W,"isOrthographic",M.isOrthographicCamera===!0),_t!==M&&(_t=M,li=!0,On=!0)}if(Wt.needsLights&&(ve.state.sunShadowMap.length>0&&Ae.setValue(W,"sunShadowMap",ve.state.sunShadowMap,ct),ve.state.directionalShadowMap.length>0&&Ae.setValue(W,"directionalShadowMap",ve.state.directionalShadowMap,ct),ve.state.spotShadowMap.length>0&&Ae.setValue(W,"spotShadowMap",ve.state.spotShadowMap,ct),ve.state.pointShadowMap.length>0&&Ae.setValue(W,"pointShadowMap",ve.state.pointShadowMap,ct)),K.isSkinnedMesh){Ae.setOptional(W,K,"bindMatrix"),Ae.setOptional(W,K,"bindMatrixInverse");let Be=K.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),Ae.setValue(W,"boneTexture",Be.boneTexture,ct))}K.isBatchedMesh&&(Ae.setOptional(W,K,"batchingTexture"),Ae.setValue(W,"batchingTexture",K._matricesTexture,ct),Ae.setOptional(W,K,"batchingIdTexture"),Ae.setValue(W,"batchingIdTexture",K._indirectTexture,ct),Ae.setOptional(W,K,"batchingColorTexture"),K._colorsTexture!==null&&Ae.setValue(W,"batchingColorTexture",K._colorsTexture,ct));let In=Y.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&q.update(K,Y,Sn),(li||Wt.receiveShadow!==K.receiveShadow)&&(Wt.receiveShadow=K.receiveShadow,Ae.setValue(W,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&z.environment!==null&&(Qe.envMapIntensity.value=z.environmentIntensity),Qe.dfgLUT!==void 0&&(Qe.dfgLUT.value=_S()),li){if(Ae.setValue(W,"toneMappingExposure",B.toneMappingExposure),Wt.needsLights&&Ke(Qe,On),kt&&J.fog===!0&&ie.refreshFogUniforms(Qe,kt),ie.refreshMaterialUniforms(Qe,J,pt,dt,P.state.transmissionRenderTarget[M.id]),Wt.needsLights&&Wt.lightProbeGrid){let Be=Wt.lightProbeGrid;Qe.probesSH.value=Be.texture,Qe.probesMin.value.copy(Be.boundingBox.min),Qe.probesMax.value.copy(Be.boundingBox.max),Qe.probesResolution.value.copy(Be.resolution)}$r.upload(W,ea(Wt),Qe,ct)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&($r.upload(W,ea(Wt),Qe,ct),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ae.setValue(W,"center",K.center),Ae.setValue(W,"modelViewMatrix",K.modelViewMatrix),Ae.setValue(W,"normalMatrix",K.normalMatrix),Ae.setValue(W,"modelMatrix",K.matrixWorld),J.uniformsGroups!==void 0){let Be=J.uniformsGroups;for(let Pi=0,us=Be.length;Pi<us;Pi++){let Co=Be[Pi];xt.update(Co,Sn),xt.bind(Co,Sn)}}return Sn}function Ke(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.sunLights.needsUpdate=z,M.sunLightShadows.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function Ii(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return ot},this.getActiveMipmapLevel=function(){return lt},this.getRenderTarget=function(){return Mt},this.setRenderTargetTextures=function(M,z,Y){let J=st.get(M);J.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),st.get(M.texture).__webglTexture=z,st.get(M.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Y,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,z){let Y=st.get(M);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(M,z=0,Y=0){Mt=M,ot=z,lt=Y;let J=null,K=!1,kt=!1;if(M){let Bt=st.get(M);if(Bt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(W.FRAMEBUFFER,Bt.__webglFramebuffer),mt.copy(M.viewport),Vt.copy(M.scissor),Ht=M.scissorTest,v.viewport(mt),v.scissor(Vt),v.setScissorTest(Ht),ht=-1;return}else if(Bt.__webglFramebuffer===void 0)ct.setupRenderTarget(M);else if(Bt.__hasExternalTextures)ct.rebindTextures(M,st.get(M.texture).__webglTexture,st.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Se=M.depthTexture;if(Bt.__boundDepthTexture!==Se){if(Se!==null&&st.has(Se)&&(M.width!==Se.image.width||M.height!==Se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(M)}}let Kt=M.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(kt=!0);let Yt=st.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Yt[z])?J=Yt[z][Y]:J=Yt[z],K=!0):M.samples>0&&ct.useMultisampledRTT(M)===!1?J=st.get(M).__webglMultisampledFramebuffer:Array.isArray(Yt)?J=Yt[Y]:J=Yt,mt.copy(M.viewport),Vt.copy(M.scissor),Ht=M.scissorTest}else mt.copy(zt).multiplyScalar(pt).floor(),Vt.copy(ce).multiplyScalar(pt).floor(),Ht=ue;if(Y!==0&&(J=it),v.bindFramebuffer(W.FRAMEBUFFER,J)&&v.drawBuffers(M,J),v.viewport(mt),v.scissor(Vt),v.setScissorTest(Ht),K){let Bt=st.get(M.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+z,Bt.__webglTexture,Y)}else if(kt){let Bt=z;for(let Kt=0;Kt<M.textures.length;Kt++){let Yt=st.get(M.textures[Kt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Kt,Yt.__webglTexture,Y,Bt)}}else if(M!==null&&Y!==0){let Bt=st.get(M.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Bt.__webglTexture,Y)}ht=-1};function pn(M){let z=st.get(M);return(z.__readFormat!==M.format||z.__readType!==M.type)&&(z.__readFormat=M.format,z.__readType=M.type,z.__formatReadable=R.textureFormatReadable(M.format),z.__typeReadable=R.textureTypeReadable(M.type)),z}this.readRenderTargetPixels=function(M,z,Y,J,K,kt,$t,Bt=0){if(!(M&&M.isWebGLRenderTarget)){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=st.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&$t!==void 0&&(Kt=Kt[$t]),Kt){v.bindFramebuffer(W.FRAMEBUFFER,Kt);try{let Yt=M.textures[Bt],Se=Yt.format,xe=Yt.type;M.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Bt);let Qt=pn(Yt);if(Qt.__formatReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qt.__typeReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-J&&Y>=0&&Y<=M.height-K&&W.readPixels(z,Y,J,K,Nt.convert(Se),Nt.convert(xe),kt)}finally{let Yt=Mt!==null?st.get(Mt).__webglFramebuffer:null;v.bindFramebuffer(W.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(M,z,Y,J,K,kt,$t,Bt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=st.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&$t!==void 0&&(Kt=Kt[$t]),Kt)if(z>=0&&z<=M.width-J&&Y>=0&&Y<=M.height-K){v.bindFramebuffer(W.FRAMEBUFFER,Kt);let Yt=M.textures[Bt],Se=Yt.format,xe=Yt.type;M.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Bt);let Qt=pn(Yt);if(Qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Oe=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Oe),W.bufferData(W.PIXEL_PACK_BUFFER,kt.byteLength,W.STREAM_READ),W.readPixels(z,Y,J,K,Nt.convert(Se),Nt.convert(xe),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let nn=Mt!==null?st.get(Mt).__webglFramebuffer:null;v.bindFramebuffer(W.FRAMEBUFFER,nn);let Ye=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await pp(W,Ye,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Oe),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,kt),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Oe),W.deleteSync(Ye),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,z=null,Y=0){let J=Math.pow(2,-Y),K=Math.floor(M.image.width*J),kt=Math.floor(M.image.height*J),$t=z!==null?z.x:0,Bt=z!==null?z.y:0;ct.setTexture2D(M,0),W.copyTexSubImage2D(W.TEXTURE_2D,Y,0,0,$t,Bt,K,kt),v.unbindTexture()},this.copyTextureToTexture=function(M,z,Y=null,J=null,K=0,kt=0){let $t,Bt,Kt,Yt,Se,xe,Qt,Oe,nn,Ye=M.isCompressedTexture?M.mipmaps[kt]:M.image;if(Y!==null)$t=Y.max.x-Y.min.x,Bt=Y.max.y-Y.min.y,Kt=Y.isBox3?Y.max.z-Y.min.z:1,Yt=Y.min.x,Se=Y.min.y,xe=Y.isBox3?Y.min.z:0;else{let Qe=Math.pow(2,-K);$t=Math.floor(Ye.width*Qe),Bt=Math.floor(Ye.height*Qe),M.isDataArrayTexture?Kt=Ye.depth:M.isData3DTexture?Kt=Math.floor(Ye.depth*Qe):Kt=1,Yt=0,Se=0,xe=0}J!==null?(Qt=J.x,Oe=J.y,nn=J.z):(Qt=0,Oe=0,nn=0);let Ge=Nt.convert(z.format),mn=Nt.convert(z.type),Wt;z.isData3DTexture?(ct.setTexture3D(z,0),Wt=W.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ct.setTexture2DArray(z,0),Wt=W.TEXTURE_2D_ARRAY):(ct.setTexture2D(z,0),Wt=W.TEXTURE_2D),v.activeTexture(W.TEXTURE0),v.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,z.flipY),v.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),v.pixelStorei(W.UNPACK_ALIGNMENT,z.unpackAlignment);let ve=v.getParameter(W.UNPACK_ROW_LENGTH),Le=v.getParameter(W.UNPACK_IMAGE_HEIGHT),Sn=v.getParameter(W.UNPACK_SKIP_PIXELS),oi=v.getParameter(W.UNPACK_SKIP_ROWS),li=v.getParameter(W.UNPACK_SKIP_IMAGES);v.pixelStorei(W.UNPACK_ROW_LENGTH,Ye.width),v.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ye.height),v.pixelStorei(W.UNPACK_SKIP_PIXELS,Yt),v.pixelStorei(W.UNPACK_SKIP_ROWS,Se),v.pixelStorei(W.UNPACK_SKIP_IMAGES,xe);let On=M.isDataArrayTexture||M.isData3DTexture,Ae=z.isDataArrayTexture||z.isData3DTexture;if(M.isDepthTexture){let Qe=st.get(M),In=st.get(z),Be=st.get(Qe.__renderTarget),Pi=st.get(In.__renderTarget);v.bindFramebuffer(W.READ_FRAMEBUFFER,Be.__webglFramebuffer),v.bindFramebuffer(W.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let us=0;us<Kt;us++)On&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,st.get(M).__webglTexture,K,xe+us),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,st.get(z).__webglTexture,kt,nn+us)),W.blitFramebuffer(Yt,Se,$t,Bt,Qt,Oe,$t,Bt,W.DEPTH_BUFFER_BIT,W.NEAREST);v.bindFramebuffer(W.READ_FRAMEBUFFER,null),v.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(K!==0||M.isRenderTargetTexture||st.has(M)){let Qe=st.get(M),In=st.get(z);v.bindFramebuffer(W.READ_FRAMEBUFFER,X),v.bindFramebuffer(W.DRAW_FRAMEBUFFER,j);for(let Be=0;Be<Kt;Be++)On?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Qe.__webglTexture,K,xe+Be):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Qe.__webglTexture,K),Ae?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,In.__webglTexture,kt,nn+Be):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,In.__webglTexture,kt),K!==0?W.blitFramebuffer(Yt,Se,$t,Bt,Qt,Oe,$t,Bt,W.COLOR_BUFFER_BIT,W.NEAREST):Ae?W.copyTexSubImage3D(Wt,kt,Qt,Oe,nn+Be,Yt,Se,$t,Bt):W.copyTexSubImage2D(Wt,kt,Qt,Oe,Yt,Se,$t,Bt);v.bindFramebuffer(W.READ_FRAMEBUFFER,null),v.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Ae?M.isDataTexture||M.isData3DTexture?W.texSubImage3D(Wt,kt,Qt,Oe,nn,$t,Bt,Kt,Ge,mn,Ye.data):z.isCompressedArrayTexture?W.compressedTexSubImage3D(Wt,kt,Qt,Oe,nn,$t,Bt,Kt,Ge,Ye.data):W.texSubImage3D(Wt,kt,Qt,Oe,nn,$t,Bt,Kt,Ge,mn,Ye):M.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,kt,Qt,Oe,$t,Bt,Ge,mn,Ye.data):M.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,kt,Qt,Oe,Ye.width,Ye.height,Ge,Ye.data):W.texSubImage2D(W.TEXTURE_2D,kt,Qt,Oe,$t,Bt,Ge,mn,Ye);v.pixelStorei(W.UNPACK_ROW_LENGTH,ve),v.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Le),v.pixelStorei(W.UNPACK_SKIP_PIXELS,Sn),v.pixelStorei(W.UNPACK_SKIP_ROWS,oi),v.pixelStorei(W.UNPACK_SKIP_IMAGES,li),kt===0&&z.generateMipmaps&&W.generateMipmap(Wt),v.unbindTexture()},this.initRenderTarget=function(M){st.get(M).__webglFramebuffer===void 0&&ct.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ct.setTextureCube(M,0):M.isData3DTexture?ct.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ct.setTexture2DArray(M,0):ct.setTexture2D(M,0),v.unbindTexture()},this.resetState=function(){ot=0,lt=0,Mt=null,v.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ie._getUnpackColorSpace()}};var jp=new Vn,Kc=new H,os=class extends no{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new sn(t,3)),this.setAttribute("uv",new sn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new bs(e,6,1);return this.setAttribute("instanceStart",new Ei(n,3,0)),this.setAttribute("instanceEnd",new Ei(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new bs(e,6,1);return this.setAttribute("instanceColorStart",new Ei(n,3,0)),this.setAttribute("instanceColorEnd",new Ei(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Za(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),jp.setFromBufferAttribute(e),this.boundingBox.union(jp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Kc.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Kc)),Kc.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Kc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ft.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Lt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Gn.line={uniforms:mo.merge([Ft.common,Ft.fog,Ft.line]),vertexShader:`
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
		`};var $i=class extends yn{constructor(t){super({type:"LineMaterial",uniforms:mo.clone(Gn.line.uniforms),vertexShader:Gn.line.vertexShader,fragmentShader:Gn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var ed=new He,Qp=new H,tm=new H,En=new He,Tn=new He,Xi=new He,nd=new H,id=new Fe,An=new so,em=new H,jc=new Vn,Qc=new Jn,qi=new He,Yi,js;function nm(i,t,e){return qi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),qi.multiplyScalar(1/qi.w),qi.x=js/e.width,qi.y=js/e.height,qi.applyMatrix4(i.projectionMatrixInverse),qi.multiplyScalar(1/qi.w),Math.abs(Math.max(qi.x,qi.y))}function xS(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){An.start.fromBufferAttribute(s,o),An.end.fromBufferAttribute(r,o),An.applyMatrix4(e);let c=new H,h=new H;Yi.distanceSqToSegment(An.start,An.end,h,c),h.distanceTo(c)<js*.5&&t.push({point:h,pointOnLine:c,distance:Yi.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function vS(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),m=-t.near;Yi.at(1,Xi),Xi.w=1,Xi.applyMatrix4(t.matrixWorldInverse),Xi.applyMatrix4(n),Xi.multiplyScalar(1/Xi.w),Xi.x*=r.x/2,Xi.y*=r.y/2,Xi.z=0,nd.copy(Xi),id.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,g=h;d<g;d++){if(En.fromBufferAttribute(l,d),Tn.fromBufferAttribute(c,d),En.w=1,Tn.w=1,En.applyMatrix4(id),Tn.applyMatrix4(id),En.z>m&&Tn.z>m)continue;if(En.z>m){let U=En.z-Tn.z,E=(En.z-m)/U;En.lerp(Tn,E)}else if(Tn.z>m){let U=Tn.z-En.z,E=(Tn.z-m)/U;Tn.lerp(En,E)}En.applyMatrix4(n),Tn.applyMatrix4(n),En.multiplyScalar(1/En.w),Tn.multiplyScalar(1/Tn.w),En.x*=r.x/2,En.y*=r.y/2,Tn.x*=r.x/2,Tn.y*=r.y/2,An.start.copy(En),An.start.z=0,An.end.copy(Tn),An.end.z=0;let T=An.closestPointToPointParameter(nd,!0);An.at(T,em);let p=Nu.lerp(En.z,Tn.z,T),f=p>=-1&&p<=1,N=nd.distanceTo(em)<js*.5;if(f&&N){An.start.fromBufferAttribute(l,d),An.end.fromBufferAttribute(c,d),An.start.applyMatrix4(a),An.end.applyMatrix4(a);let U=new H,E=new H;Yi.distanceSqToSegment(An.start,An.end,E,U),e.push({point:E,pointOnLine:U,distance:Yi.origin.distanceTo(E),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}var Qs=class extends vn{constructor(t=new os,e=new $i({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)Qp.fromBufferAttribute(e,a),tm.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Qp.distanceTo(tm);let r=new bs(s,2,1);return t.setAttribute("instanceDistanceStart",new Ei(r,1,0)),t.setAttribute("instanceDistanceEnd",new Ei(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Yi=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;js=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Qc.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=js*.5;else{let m=Math.max(s.near,Qc.distanceToPoint(Yi.origin));c=nm(s,m,l.resolution)}if(Qc.radius+=c,Yi.intersectsSphere(Qc)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),jc.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=js*.5;else{let m=Math.max(s.near,jc.distanceToPoint(Yi.origin));h=nm(s,m,l.resolution)}jc.expandByScalar(h),Yi.intersectsBox(jc)!==!1&&(n?xS(this,e):vS(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(ed),this.material.uniforms.resolution.value.set(ed.z,ed.w))}};function im(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:l,CY:c,mcs:h,q:m,list:d,clamp:g,norm:x,munis:T}=i,p=u=>document.querySelector(u),f=u=>String(u).replace(/[<>&"]/g,_=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[_]),N=(u,_)=>[(u-l)*o,(_-c)*o],U=.06,E=t.segs.map(u=>{let _=[],w=[0];for(let A=0;A<u.length;A+=2){let C=N(u[A],u[A+1]);_.length&&w.push(w[w.length-1]+Math.hypot(C[0]-_[_.length-1][0],C[1]-_[_.length-1][1])),_.push(C)}return{p:_,c:w,L:w[w.length-1]}}),b=t.stops.map(([u,_,w,A])=>({n:u,id:A,w:N(_,w),fams:new Set})),P=t.routes.map(([u,_,w])=>({s:u,l:_,c:w})),k=new Map;(t.bus||[]).forEach(([u,_,w,A])=>{let C={days:new Set(u),name:_,stops:w,times:A};w.forEach((D,O)=>{if(O<w.length-1){let F=k.get(D)||[];F.push([C,O]),k.set(D,F)}})});function S(u,_,w){let A=ue(),C=t.days.indexOf(A.ymd),D=[];for(let[O,F]of k.get(u)||[]){if(!O.days.has(C))continue;let V=O.times[F];if(V<_||V>w)continue;let Z=O.stops[O.stops.length-1];D.push({sm:V,est:V,dl:0,fam:O.name,dest:b[Z].n,destId:b[Z].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:O.stops.slice(F)})}return D}let I=(u,_)=>{let w=u.match(/^R([A-Z]*)(\d*)(.*)$/),A=_.match(/^R([A-Z]*)(\d*)(.*)$/);return(w[1]||"").localeCompare(A[1]||"")||(+w[2]||0)-(+A[2]||0)||w[3].localeCompare(A[3])},B=[...new Set(P.map(u=>u.s))].sort(I),$={};P.forEach(u=>{$[u.s]||($[u.s]=u.c)});let tt=t.pats.map(([u,_,w])=>({stops:u,t:_,segs:w})),it=t.trips.map(([u,_,w,A,C],D)=>({day:u,pat:tt[_],fam:P[w].s,c:P[w].c,t0:A,num:C,tid:t.tids[D]})),X={};B.forEach(u=>X[u]=new Set),it.forEach(u=>{u.pat.segs.forEach(_=>X[u.fam].add(_)),u.pat.stops.forEach(_=>b[_].fams.add(u.fam))});let j=t.days.map((u,_)=>it.filter(w=>w.day===_)),ot=new Map(it.map(u=>[u.tid,u])),lt=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],Mt=Math.PI/180,ht=3.922*Mt,_t=-39.705*Mt;function mt(u,_){let w=u*Mt+ht,A=_*Mt,C=Math.cos(_t),D=Math.sin(_t),O=Math.cos(A),F=Math.cos(w)*O,V=Math.sin(w)*O,Z=Math.sin(A),et=Math.atan2(V,F*C-Z*D),y=Math.asin(Z*C+F*D),L=Math.sqrt(2/(1+Math.cos(et)*Math.cos(y))),nt=L*Math.cos(y)*Math.sin(et),at=L*Math.sin(y),[At,te,ee,yt,St,oe,pe]=lt;return N((te+At*nt-St)*pe,(oe-(yt-ee*at))*pe)}let Vt=new Map(b.map((u,_)=>[u.id,_]));function Ht(u){if(u.g)return u.g;let _=[],w=[],A=[0],C=0;return u.segs.forEach((D,O)=>{let F=E[D];F.p.forEach((V,Z)=>{O&&!Z||(_.push(V),w.push(C+F.c[Z]))}),C+=F.L,A.push(C)}),u.g={pts:_,cum:w,stopD:A}}function Ne(u,_,w,A){let C=1e18,D=0;for(let O=0;O+1<u.pts.length;O++){if(u.cum[O+1]<w||u.cum[O]>A)continue;let F=u.pts[O],V=u.pts[O+1],Z=V[0]-F[0],et=V[1]-F[1],y=Z*Z+et*et||1e-9,L=Math.max(0,Math.min(1,((_[0]-F[0])*Z+(_[1]-F[1])*et)/y)),nt=F[0]+Z*L-_[0],at=F[1]+et*L-_[1],At=nt*nt+at*at;At<C&&(C=At,D=u.cum[O]+L*(u.cum[O+1]-u.cum[O]))}return{d:D,err:Math.sqrt(C)}}function we(u,_){let w=0,A=u.cum.length-1;if(_<=0)return u.pts[0];if(_>=u.cum[A])return u.pts[A];for(;A-w>1;){let F=w+A>>1;u.cum[F]<=_?w=F:A=F}let C=(_-u.cum[w])/(u.cum[A]-u.cum[w]||1),D=u.pts[w],O=u.pts[A];return[D[0]+(O[0]-D[0])*C,D[1]+(O[1]-D[1])*C]}let Re=u=>`${u.slice(6,8)}/${u.slice(4,6)}`,dt=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function pt(u){let _={};return dt.formatToParts(u).forEach(w=>_[w.type]=w.value),{ymd:_.year+_.month+_.day,min:+_.hour*60+ +_.minute+ +_.second/60}}let Et=0,ne=null,zt=0,ce=0;function ue(){let u=pt(new Date);if(Et===0&&ne==null)return{...u,live:!0};let _=ne==null?u.min:zt+(Et?(performance.now()-ce)/6e4*Et:0);return{ymd:u.ymd,min:_,live:!1}}let rt=u=>(u=(Math.round(u)%1440+1440)%1440,String(Math.floor(u/60)).padStart(2,"0")+":"+String(u%60).padStart(2,"0")),bt="https://rodalies.erathegameoftime.com",G={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let u=new URLSearchParams(location.search).get("rt");u&&localStorage.setItem("rod_rt",u);let _=localStorage.getItem("rod_rt");_&&/jhmuyo\.workers\.dev/.test(_)&&(_=bt,localStorage.setItem("rod_rt",_)),G.url=_||bt}catch{G.url=bt}let wt=(u,_)=>fetch(u+_,{cache:"no-store"}).then(w=>{if(!w.ok)throw new Error("HTTP "+w.status);return w.json()}),It=u=>/^51/.test(u||"");async function re(){if(!G.url){le();return}let u=G.url.replace(/\/+$/,"");(!G.repFail||Date.now()-G.repFail>15*6e4)&&wt(u,"/reports.json").then(V=>{V&&Array.isArray(V.items)?(G.rep=V.items,G.repSkew=(V.now||Date.now())-Date.now(),V.tipos&&(G.tipos=V.tipos),G.repOk=Date.now(),G.repFail=0):G.repFail=Date.now()}).catch(()=>{G.repFail=Date.now(),G.repOk=0});let _=!G.adifAt||Date.now()-G.adifAt>11e4,[w,A,C,D,O]=await Promise.allSettled([wt(u,"/trip_updates.json"),wt(u,"/vehicle_positions.json"),wt(u,"/alerts.json"),wt(u,"/notices.json"),_?wt(u,"/adif.json"):Promise.reject(0)]);if(O.status==="fulfilled"&&O.value&&O.value.ok?(G.adif=O.value,G.adifAt=Date.now()):_&&(G.adifAt=Date.now()-6e4),w.status==="fulfilled"){let V=new Map,Z=new Map;for(let et of w.value.entity||[]){let y=et.tripUpdate;if(!y||!y.trip||!It(y.trip.tripId))continue;let L=y.trip.tripId,nt=(y.stopTimeUpdate||[])[0],at=y.delay;at==null&&nt&&(at=(nt.arrival||nt.departure||{}).delay),y.trip.scheduleRelationship==="CANCELED"&&(at="X"),at!=null&&V.set(L,at),Z.set(L,{next:nt?{sid:nt.stopId,t:+((nt.arrival||nt.departure||{}).time||0)}:null})}G.delays=V,G.tu=Z,G.ok=Date.now(),G.feedTs=+((w.value.header||{}).timestamp||0)*1e3,G.err=""}else G.err=w.reason&&w.reason.message||"sin respuesta";if(A.status==="fulfilled"){let V=new Map,Z=Date.now()/1e3;for(let et of A.value.entity||[]){let y=et.vehicle;if(!y||!y.trip||!It(y.trip.tripId)||!y.position)continue;let L=y.vehicle&&y.vehicle.label||"",nt=L.match(/PLATF\.\(([^)]+)\)/),at=G.vp.get(y.trip.tripId),At={tid:y.trip.tripId,w:mt(+y.position.longitude,+y.position.latitude),st:y.currentStatus||"",sid:y.stopId||"",ts:+y.timestamp||Z,label:L,plat:nt?nt[1]:"",fam:(L.split("-")[0]||"").trim(),num:y.vehicle&&y.vehicle.id||""};At.disp=at?at.disp:null,V.set(At.tid,At)}G.vp=V,G.okVP=Date.now()}let F=[];if(D.status==="fulfilled"&&Array.isArray(D.value.included)){G.okNotices=Date.now();for(let V of D.value.included){let Z=new Set((V.lines||[]).map(L=>L.id).filter(L=>$[L])),et=L=>((L||{}).es||(L||{}).ca||"").trim(),y=[et(V.description),et(V.title)].sort((L,nt)=>nt.length-L.length)[0];y&&F.push({id:"N"+V.externalId,fams:Z,stops:new Set,txt:y,when:(V.date||"")+"T"+(V.time||""),src:"Rodalies",core:V.core||""})}}if(C.status==="fulfilled"){let V=+((C.value.header||{}).timestamp||0);if(G.alertsTs=V,Date.now()/1e3-V<6*3600)for(let Z of C.value.entity||[]){let et=Z.alert;if(!et)continue;let y=new Set,L=new Set;for(let te of et.informedEntity||[])(te.routeId||"").startsWith("51")&&y.add(te.routeId.replace(/^51T\d+/,"")),te.stopId&&Vt.has(te.stopId)&&L.add(Vt.get(te.stopId));if(!y.size&&!L.size)continue;let nt=(et.descriptionText||et.headerText||{translation:[]}).translation||[],at=((nt.find(te=>te.language==="es")||nt[0]||{}).text||"").trim(),At=+((et.activePeriod||[])[0]||{}).start||0;F.some(te=>te.txt===at)||F.push({id:Z.id,fams:y,stops:L,txt:at,when:At?new Date(At*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(G.adif&&Date.now()-G.adifAt<15*6e4)for(let[V,Z]of(G.adif.items||[]).entries()){let et=(Z.t?Z.t+". ":"")+Z.txt,y=new Set,L=new Set,nt=x(et);for(let at of et.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))$[at[1]]&&y.add(at[1]);b.forEach((at,At)=>{at.fams.size&&at.n.length>4&&nt.includes(x(at.n))&&(L.add(At),y.size||at.fams.forEach(te=>y.add(te)))}),F.some(at=>at.txt===et)||F.push({id:"A"+V,fams:y,stops:L,txt:et,when:G.adif.upd||"",src:"Adif",lvl:Z.lvl})}if(D.status==="fulfilled"||C.status==="fulfilled"||G.adif){G.alerts=F.sort((V,Z)=>Z.when>V.when?1:-1);try{Xm()}catch{}}le(),gh(),M=0,a()}let Xt=()=>G.okVP&&Date.now()-G.okVP<9e4;function le(){let u=p("#rtst"),_=p("#mode");if(_){let A=!!Xt()&&ue().live;_.classList.toggle("on",A),_.classList.toggle("pre",!A),_.textContent=A?"En directo":ae.cur?"Repaso real":"Previsi\xF3n",_.classList.toggle("past",!!ae.cur),_.title=ae.cur?`Retrasos reales de la foto de las ${ae.cur.sn.t} (se toma una cada 15 min)`:""}if(!u)return;G.url?G.err?u.textContent="No se pudo conectar con el puente ("+G.err+"). Se usa el horario.":Xt()?u.innerHTML=`Conectado \xB7 ${G.vp.size} trenes con posici\xF3n real y ${G.delays.size} con retraso \xB7 actualizado a las ${new Date(G.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:u.textContent="Conectando\u2026":u.textContent=G.err||"Sin puente: trenes seg\xFAn horario oficial.";let w=p("#rturl");w&&w._shown!==G.url&&(w.value=G.url,w._shown=G.url)}p("#rtsave").onclick=()=>{let u=p("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(u&&!/^https?:\/\//.test(u)&&(u="https://"+u),!u){G.err="pega la direcci\xF3n de tu puente",le();return}G.url=u;try{localStorage.setItem("rod_rt",u)}catch{}G.ok=0,G.err="",le(),re()},p("#rtoff").onclick=()=>{G.url=bt;try{localStorage.removeItem("rod_rt")}catch{}h._h="",re()},setInterval(re,2e4),setTimeout(re,50);let ae={snap:null,key:""};function W(){let u=ue();if(u.live||!ve.hoy||!ve.hoy.snaps||Et&&ne==null)return null;let _=pt(new Date).min;if(u.min>_+1)return null;let w=null;for(let A of ve.hoy.snaps){if(!A.d)continue;let C=Id(A.t);C<=u.min+1&&(!w||C>w.m)&&(w={m:C,sn:A})}return w&&u.min-w.m<=25?w:null}let Pe=u=>{{let C=ph(u.num);if(C&&C.cx&&ue().live)return"X"}let _=ae.cur;if(_){if(_.sn.x&&_.sn.x.includes(u.tid))return"X";let C=_.sn.d[u.tid];return C??0}if(!Xt())return null;let w=G.delays.get(u.tid),A=G.vp.get(u.tid);return w==="X"?w:A&&A.pre&&A.preDl>=1?Math.max(typeof w=="number"?w:0,A.preDl*60):w??null},Gt=new Set(B);try{let u=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(u)&&u.some(_=>B.includes(_))&&(Gt.clear(),u.forEach(_=>B.includes(_)&&Gt.add(_)))}catch{}let R=new os,v=new os,Q=new $i({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),st=new $i({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),ct=new Qs(R,Q),Tt=new Qs(v,st);Tt.renderOrder=20,ct.renderOrder=21,ct.frustumCulled=Tt.frustumCulled=!1,e.add(Tt,ct);function Ct(u){let _=u[0]/o+l,w=u[1]/o+c;for(let A of T){if(A._bb===void 0){let D=1e9,O=1e9,F=-1e9,V=-1e9;for(let Z of A.rings||[]){let et=Z[0]||[];for(let y=0;y<et.length;y+=2)et[y]<D&&(D=et[y]),et[y]>F&&(F=et[y]),et[y+1]<O&&(O=et[y+1]),et[y+1]>V&&(V=et[y+1])}A._bb=[D,O,F,V]}let C=A._bb;if(!(_<C[0]||_>C[2]||w<C[1]||w>C[3]))for(let D of A.rings||[]){let O=D[0]||[],F=!1;for(let V=0,Z=O.length,et=Z-2;V<Z;et=V,V+=2){let y=O[V+1],L=O[et+1];y>w!=L>w&&_<(O[et]-O[V])*(w-y)/(L-y)+O[V]&&(F=!F)}if(F)return!0}}return!1}let ut=!1;function gt(){ut||!T.length||(ut=!0,b.forEach(u=>{u.ext=!Ct(u.w)}),E.forEach(u=>{u.ext=!Ct(u.p[0])&&!Ct(u.p[u.p.length-1])&&!Ct(u.p[u.p.length>>1])}))}let Dt=()=>{let u=new Set(Gt.size<=2?Gt:[]);try{Y&&Y.fam&&u.add(Y.fam)}catch{}return u},ie="";function Ot(){gt();let u=[],_=[],w=new Set,A=new fe,C=new fe("#d2d0d0"),D=Dt();ie=[...D].join();for(let O of B)if(Gt.has(O))for(let F of X[O]){if(w.has(F))continue;w.add(F);let V=E[F].p;A.set($[O]),E[F].ext&&!D.has(O)&&A.lerp(C,.55);for(let Z=0;Z+1<V.length;Z++)u.push(V[Z][0],V[Z][1],U,V[Z+1][0],V[Z+1][1],U),_.push(A.r,A.g,A.b,A.r,A.g,A.b)}u.length||(u.push(0,0,-50,0,0,-50),_.push(0,0,0,0,0,0)),R.setPositions(u),R.setColors(_),v.setPositions(u),a()}Ot();let Ut=u=>new yn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new fe(u)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Zt=new rn,se=b.length,_e=new Float32Array(se*3),q=new Float32Array(se*3),Pt=new Float32Array(se),ft=new Float32Array(se);b.forEach((u,_)=>{_e[_*3]=u.w[0],_e[_*3+1]=u.w[1],_e[_*3+2]=U,q.set([1,1,1],_*3),Pt[_]=6,ft[_]=1.6}),Zt.setAttribute("position",new Xe(_e,3)),Zt.setAttribute("fill",new Xe(q,3)),Zt.setAttribute("size",new Xe(Pt,1)),Zt.setAttribute("bw",new Xe(ft,1));let Nt=new $s(Zt,Ut("#1d2330"));Nt.renderOrder=22,Nt.frustumCulled=!1,e.add(Nt);function Rt(){let u=r.dist<45,_=Dt();b.forEach((w,A)=>{let C=[...w.fams].some(O=>Gt.has(O)),D=w.ext&&![...w.fams].some(O=>_.has(O))&&A!==J;Pt[A]=C?A===J?13:D?3:u?8:5:0,ft[A]=A===J?3:1.6}),Zt.attributes.size.needsUpdate=!0,Zt.attributes.bw.needsUpdate=!0}let xt=600,qt=new rn,Jt=new Float32Array(xt*3),ze=new Float32Array(xt*3),Ue=new Float32Array(xt),$n=new Float32Array(xt);qt.setAttribute("position",new Xe(Jt,3)),qt.setAttribute("fill",new Xe(ze,3)),qt.setAttribute("size",new Xe(Ue,1)),qt.setAttribute("bw",new Xe($n,1));let Rn=new Float32Array(xt);qt.setAttribute("ang",new Xe(Rn,1));let fh=new yn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new fe("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Kr=new $s(qt,fh);Kr.renderOrder=24,Kr.frustumCulled=!1,e.add(Kr);let Ri=new rn,hs=new Float32Array(xt*3),Eo=new Float32Array(xt*3),jr=new Float32Array(xt),Qr=new Float32Array(xt);Ri.setAttribute("position",new Xe(hs,3)),Ri.setAttribute("fill",new Xe(Eo,3)),Ri.setAttribute("size",new Xe(jr,1)),Ri.setAttribute("bw",new Xe(Qr,1));let gi=new $s(Ri,Ut("#ffffff"));gi.renderOrder=23,gi.frustumCulled=!1,e.add(gi);function rr(u,_){let w=E[u],A=_*w.L,C=0,D=w.c.length-1;for(;D-C>1;){let et=C+D>>1;w.c[et]<=A?C=et:D=et}let O=w.c[D]-w.c[C]||1,F=(A-w.c[C])/O,V=w.p[C],Z=w.p[D];return[V[0]+(Z[0]-V[0])*F,V[1]+(Z[1]-V[1])*F]}let ta=u=>u*u*(3-2*u)*.35+u*.65;function Ls(u,_){let w=u.pat.t,A=u.pat.stops.length,C=w[2*A-2];if(_<w[1]-2||_>C+1)return null;if(_<=w[1])return{w:b[u.pat.stops[0]].w,at:0,next:0,moving:!1};for(let D=0;D<A-1;D++){let O=w[2*D+1],F=w[2*D+2],V=w[2*D+3];if(_<=F){let Z=F>O?(_-O)/(F-O):1;return{w:rr(u.pat.segs[D],ta(g(Z,0,1))),at:-1,next:D+1,prev:D,moving:!0}}if(_<=V)return{w:b[u.pat.stops[D+1]].w,at:D+1,next:D+1,moving:!1}}return{w:b[u.pat.stops[A-1]].w,at:A-1,next:A-1,moving:!1}}function Ds(u){let _=t.days.indexOf(u.ymd),w=[];if(_<0)return{k:_,out:w};let A=(C,D)=>{for(let O of C){if(!Gt.has(O.fam))continue;let F=Pe(O);if(F==="X")continue;let V=(F||0)/60,Z=u.min+D-O.t0-V;if(Z<-2||Z>O.pat.t[O.pat.t.length-2]+1)continue;let et=Ls(O,Z);et&&w.push({tr:O,p:et,rel:Z,dl:V,live:F!=null})}};return A(j[_],0),_>0&&A(j[_-1],1440),{k:_,out:w}}function To(u,_,w,A){let C=u.pat.stops[0],D=_.dep0,O=null,F=(Z,et)=>{for(let y of Z||[]){let L=y.pat.stops,nt=L.length;if(L[nt-1]!==C||y===u)continue;let at=y.t0+y.pat.t[2*(nt-1)]-et;if(at>D+5||at<D-120)continue;let At=Ht(y.pat),te=Ne(At,_.w,-1,1e9);if(te.err>.6)continue;let ee=At.stopD,yt=y.pat.t,St=ee.findIndex(Ee=>Ee>te.d);St<0&&(St=nt-1);let oe=St===0?yt[1]:yt[2*St-1]+(ee[St]>ee[St-1]?(te.d-ee[St-1])/(ee[St]-ee[St-1]):1)*(yt[2*St]-yt[2*St-1]),pe=w-(y.t0+oe-et);pe<-5||pe>120||(!O||Math.abs(pe)<Math.abs(O.prevDl))&&(O={prevTr:y,dPrev:te.d,prevDl:pe,arrO:at+Math.max(0,pe)})}};if(F(j[A],0),A>0&&F(j[A-1],1440),!O)return{prevTr:null,preDl:0};let V=Math.max(D,O.arrO+3);return{...O,depEst:V,preDl:Math.max(0,V-D)}}function ar(u,_,w){let A=u.pat.t,C=_.length;if(!(w>=0))return w<0?_[0]:null;for(let D=0;D<C;D++)if(w<=A[2*D+1]){if(w>=A[2*D]||D===0)return _[D];let O=A[2*D-1],F=A[2*D];return _[D-1]+(_[D]-_[D-1])*(F>O?(w-O)/(F-O):1)}return _[C-1]}let ea=performance.now();function Ao(){let u=[],_=Date.now()/1e3,w=performance.now(),A=Math.min(1,(w-ea)/1e3);ea=w;for(let C of G.vp.values()){let D=ot.get(C.tid),O=D?D.fam:C.fam;if(O&&$[O]&&!Gt.has(O))continue;let F=G.delays.get(C.tid),V=typeof F=="number"?F/60:0,Z=Math.max(0,_-C.ts);C.mvTs!==C.ts&&((!C.mvW||Math.hypot(C.w[0]-C.mvW[0],C.w[1]-C.mvW[1])>.025)&&(C.mvW=C.w,C.mvAt=C.ts),C.mvTs=C.ts),C.still=C.ts-(C.mvAt||C.ts);let et=C.w,y=-1;if(D){let nt=Ht(D.pat),at=nt.stopD;if(C.dObs==null||C.obsAt!==C.ts){let St=Ne(nt,C.w,-1,1e9);C.dObs=St.d,C.err=St.err,C.obsAt=C.ts}let At=ue(),te=t.days.indexOf(At.ymd),ee=D.day===te-1?1440:0,yt=D.t0+D.pat.t[1]-ee;if(C.pre=At.min+V<yt-1&&(C.dObs>at[0]+.35||C.err>.6)&&!(C.st==="STOPPED_AT"&&C.sid===b[D.pat.stops[0]].id),C.dep0=yt,C.pre){if(C.atStop=-1,C.next=0,y=0,C.disp=null,C.prevAt!==C.ts&&(C.prevAt=C.ts,Object.assign(C,To(D,C,At.min,te))),C.prevTr){let St=Ht(C.prevTr.pat);et=we(St,C.dPrev)}}else if(C.err<=.6){let St=at.findIndex(Ee=>Ee>C.dObs+.08);St<0&&(St=at.length-1);let oe=at.reduce((Ee,cn,De)=>Math.abs(cn-C.dObs)<Math.abs(at[Ee]-C.dObs)?De:Ee,0);C.atStop=Math.abs(at[oe]-C.dObs)<.16?oe:-1,C.next=St,y=St;let pe=C.dObs;if(C.st==="STOPPED_AT"&&C.atStop>=0)pe=at[C.atStop];else if(St>0){let Ee=(D.pat.t[2*St]-D.pat.t[2*St-1])*60,cn=Ee>0?(at[St]-at[St-1])/Ee:0,De=ue(),he=t.days.indexOf(De.ymd),Ni=D.day===he-1?1440:0,lr=ar(D,at,De.min+Ni-D.t0-V),un=C.dObs+cn*Math.min(Z,60);lr!=null&&(un=Math.min(un,Math.max(C.dObs,lr))),pe=Math.max(C.dObs,Math.min(at[St]-.03,un))}C.disp==null||Math.abs(C.disp-pe)>1.2?C.disp=pe:pe>C.disp&&(C.disp+=(pe-C.disp)*Math.min(1,A*1.5)),et=we(nt,C.disp)}else if(C.err>2){let St=ue(),oe=t.days.indexOf(St.ymd),pe=D.day===oe-1?1440:0,Ee=Ls(D,St.min+pe-D.t0-V);Ee&&(et=Ee.w,C.est=!0,y=Ee.next),C.atStop=-1,C.next=Ee?Ee.next:-1}else C.atStop=-1,C.next=-1}let L=C.pre?"":C.st==="STOPPED_AT"&&C.atStop>=0||C.atStop>=0&&C.still>30?"st":C.still>=90?"via":"";u.push({tr:D,v:C,w:et,stop:L,p:{w:et},fam:O||"?",c:D?D.c:$[O]||"#6b7385",dl:V,live:!0,real:!0,idx:y,age:Z,cancel:F==="X"})}return u}let Qn=new Map,en=!1,Ke=!1,Ii="",pn=[],M=0,z=null,Y=null,J=-1,K=!1,kt=0,$t="";function Bt(u){let _=Et>0||Xt()&&ne==null||!!Y,w=_?50:250;if(u-M<w)return!1;M=u,[...Dt()].join()!==ie&&(Ot(),Rt());{let y=W(),L=y?y.sn.t:"";ae.cur=y,L!==ae.key&&(ae.key=L,le()),!y&&!ue().live&&!ve.at&&Sn()}let A=ue(),C=Xt()&&A.live,D=C?{k:t.days.indexOf(A.ymd),out:Ao()}:Ds(A);pn=D.out;let O=new fe,F=0,V=0;for(let y of pn){if(F>=xt)break;Jt[F*3]=y.p.w[0],Jt[F*3+1]=y.p.w[1],Jt[F*3+2]=U+.02;let L=null;if(y.real&&y.v.pre&&y.v.prevTr)L=we(Ht(y.v.prevTr.pat),y.v.dPrev+.35);else if(y.real&&y.tr&&!y.v.pre&&y.v.err<=.6&&y.v.disp!=null&&!(y.v.st==="STOPPED_AT"&&y.v.atStop>=0))L=we(Ht(y.tr.pat),y.v.disp+.35);else if(!y.real&&y.p.moving){let ee=y.tr.pat.t,yt=y.p.prev,St=ee[2*yt+1],oe=ee[2*yt+2],pe=oe>St?(y.rel-St)/(oe-St):1;L=rr(y.tr.pat.segs[yt],Math.min(1,ta(g(pe,0,1))+.04))}let nt=y.real?!!y.stop:!y.p.moving;if(y.broke=bd(y),y.broke)Rn[F]=85;else if(nt)Rn[F]=75;else if(L){let ee=Ro(y.p.w),yt=Ro(L),St=yt[0]-ee[0],oe=yt[1]-ee[1];Rn[F]=Math.hypot(St,oe)>.05?Math.atan2(St,-oe):99}else Rn[F]=99;O.set(y.c||y.tr.c),ze[F*3]=O.r,ze[F*3+1]=O.g,ze[F*3+2]=O.b;let at=y.tr?y.tr===Y:Y&&Y.vtid===y.v.tid;Ue[F]=at?22:r.dist<45?17:14,$n[F]=at?3.5:2.2;let At=y.real&&y.stop==="via"||!!y.broke,te=y.cancel||y.broke?[.86,.15,.15]:y.dl>10?[.86,.15,.15]:y.dl>5?[.92,.48,.05]:y.dl>=1?[.98,.8,.08]:[.09,.64,.29];(y.live&&y.dl>=5||at||At)&&(hs[V*3]=y.p.w[0],hs[V*3+1]=y.p.w[1],hs[V*3+2]=U+.01,Eo.set(at?te:At?[.86,.15,.15]:[.98,.45,.09],V*3),jr[V]=Ue[F]+(at?16+5*Math.sin(u/220):At?10+3*Math.sin(u/400):8),Qr[V]=at?2:3,V++),F++}if(qt.setDrawRange(0,F),Ri.setDrawRange(0,V),["position","fill","size","bw"].forEach(y=>{qt.attributes[y].needsUpdate=!0,Ri.attributes[y].needsUpdate=!0}),qt.attributes.ang.needsUpdate=!0,z){let y=pn.find(L=>L.tr===z);if(y){let L=0,nt=innerHeight,at=h.style.display!=="none"&&!h.classList.contains("min")?h.getBoundingClientRect():null,At=p("#rc").getBoundingClientRect();innerWidth<=640&&(at&&(L=at.bottom),nt=Math.min(nt,At.top));let te=L+(nt-L)/2,ee=te-innerHeight/2,yt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=y.p.w[0]-Math.sin(r.yaw)*ee*yt,s.ty=y.p.w[1]+Math.cos(r.yaw)*ee*yt}else Xt()&&ue().live&&(z=null)}let Z=rt(Math.floor(A.min+1e-6));Z!==$t&&($t=Z,p("#ctime").textContent=Z),p("#ntr").textContent=String(pn.length),p("#ntrl").textContent=C?"trenes de Rodalies con posici\xF3n real":"trenes previstos seg\xFAn el horario";{let y=Gt.size<B.length?[...Gt].sort(I).join(", "):"",L=p("#ccount"),nt=ae.cur?`\u23EA ${pn.length} trenes con los retrasos reales de las ${ae.cur.sn.t} \xB7 ${Object.values(ae.cur.sn.d).filter(at=>at>=60).length} iban con retraso`:!A.live&&A.min<pt(new Date).min-1&&!Et?`\u23EA Hora pasada seg\xFAn horario${ve.hoy&&ve.hoy.snaps&&ve.hoy.snaps.some(at=>at.d)?` \xB7 hay retrasos reales desde las ${ve.hoy.snaps.find(at=>at.d).t}`:" \xB7 a\xFAn no hay fotos con retrasos reales de hoy"}`:`\u{1F686} ${pn.length} ${C?"trenes con posici\xF3n real":"trenes previstos"}${y?` <small>\xB7 ${f(y)}</small>`:""}`;L&&L._t!==nt&&(L.innerHTML=nt,L._t=nt)}let et=new Date;if(p("#cdate").textContent=A.live?"hora actual":Et?"simulaci\xF3n \xD7"+Et:hi?"en pausa":"hora elegida",D.k<0?p("#src").innerHTML=`<b style="color:#c2410c">Sin horarios para hoy.</b> Los datos guardados van del ${Re(t.days[0])} al ${Re(t.days[t.days.length-1])}: actualiza la app.`:C?p("#src").textContent=`En directo \xB7 posiciones de Renfe de hace ${Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...G.vp.values()].map(y=>y.ts),0)))} s`:p("#src").innerHTML='<b style="color:#c2410c">No es tiempo real:</b> '+(G.url?"sin conexi\xF3n con el puente, ":"conecta el puente para ver los trenes reales; ")+"posiciones calculadas con el horario",A.live){let y=Math.round(A.min),L=p("#tsl");document.activeElement!==L&&(L.value=y<240?y+1440:y)}{let y=Y?String(Y.num||Y.vtid||""):"";y!==Bt._sk&&(Bt._sk=y,on(!0))}return on(),u-kt>3e3&&(Y||J>=0||K||Ke||Ii)&&(kt=u,We()),le(),!0}let Kt=-1,Yt=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Se=[],xe=document.createElement("button");xe.type="button",xe.id="mbtn",xe.title="Ver los nombres de los municipios",xe.innerHTML="\u{1F3D8}\uFE0F<span>Municipios</span>",xe.onclick=()=>{Yt=!Yt;try{localStorage.setItem("rod_mun",Yt?"1":"")}catch{}xe.classList.toggle("on",Yt),a(),Wt()},xe.classList.toggle("on",Yt),document.body.appendChild(xe);let Qt=T.slice().sort((u,_)=>_.pop-u.pop);function Oe(u){if(u._a)return u._a;let _=null,w=0;for(let A of u.rings||[]){let C=A[0];if(!C)continue;let D=0,O=0,F=0;for(let V=0,Z=C.length;V<Z;V+=2){let et=C[V],y=C[V+1],L=C[(V+2)%Z],nt=C[(V+3)%Z],at=et*nt-L*y;D+=at,O+=(et+L)*at,F+=(y+nt)*at}Math.abs(D)>w&&(w=Math.abs(D),_=[O/(3*D),F/(3*D)])}return u._a=_?[(_[0]-l)*o,(_[1]-c)*o]:[u.cx,u.cy]}let nn=u=>u>=1e5?1:u>=2e4?2:u>=5e3?3:4,Ye=[0,7.6,6.7,6,5.4],Ge=[0,17,15,13,12],mn=u=>u.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function Wt(){let u=s.tilt<.06&&r.tilt<.08;xe.classList.toggle("show",u);let _=0;if(Yt&&u){let w=[...document.querySelectorAll(".plab, .slab")].filter(D=>D.offsetParent!==null||D.style.display==="block").map(D=>{let O=D.getBoundingClientRect();return[O.left-2,O.top-2,O.right+2,O.bottom+2]}).filter(D=>D[2]>D[0]),A=r.dist,C=A>160?5e4:A>130?2e4:A>105?8e3:A>80?3e3:A>62?800:0;for(let D of Qt){let O=nn(D.pop);if(D.pop<C)break;let F=Oe(D);if(Bn.set(F[0],F[1],U).project(n),Math.abs(Bn.x)>1.02||Math.abs(Bn.y)>1.02)continue;let V=(Bn.x*.5+.5)*innerWidth,Z=(-Bn.y*.5+.5)*innerHeight,et=mn(D.name),y=et.length*Ye[O]+8,L=Ge[O],nt=[V-y/2,Z-L/2,V+y/2,Z+L/2];if(w.some(At=>nt[0]<At[2]&&At[0]<nt[2]&&nt[1]<At[3]&&At[1]<nt[3]))continue;w.push(nt);let at=Se[_]||(Se[_]=Object.assign(document.createElement("div"),{className:"mlab"}));at.isConnected||document.body.appendChild(at),at._n!==et&&(at.textContent=et,at._n=et),at._t!==O&&(at.className="mlab t"+O,at._t=O),at.style.transform=`translate(${Math.round(V)}px,${Math.round(Z)}px) translate(-50%,-50%)`,at.style.display="block",_++}}for(;_<Se.length;_++)Se[_].style.display="none"}let ve={at:0,hoy:null,ayer:null,err:""},Le="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function Sn(){Date.now()-ve.at<5*6e4||(ve.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(u=>fetch(Le+u+".json",{cache:"no-store"}).then(_=>_.ok?_.json():null).catch(()=>null))).then(([u,_,w])=>{ve.hoy=u,ve.ayer=_,ve.hist=w,ve.tr=null,ve.err=u?"":"sin datos",Ke&&(h._h="",We()),on(!0)}))}function oi(u){let _={};for(let A of u&&u.snaps||[])for(let C of A.r||[]){let D=/^\d+[A-Z](\d+)/.exec(C);D&&(_[D[1]]=_[D[1]]||[]).push(Math.max(0,A.d&&A.d[C]||0)/60)}let w={};for(let A in _){let C=_[A].sort((D,O)=>D-O);w[A]=Math.round(C[C.length>>1])}return w}function li(u){if(!ve.tr){let w=new Map;for(let A of ve.hist&&ve.hist.days||[])w.set(A.day,A.tr);for(let A of[ve.ayer,ve.hoy])if(A&&A.day&&!w.has(A.day)){let C=oi(A);Object.keys(C).length&&w.set(A.day,C)}ve.tr=w}let _=[...ve.tr.values()].map(w=>w[String(u)]).filter(w=>w!=null);return _.length?{n:_.length,late:_.filter(w=>w>=5).length,avg:_.reduce((w,A)=>w+A,0)/_.length}:null}let On=u=>u>=90?"g":u>=80?"y":u>=65?"w":"b",Ae={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},Qe=u=>u>10?Ae.b:u>5?Ae.w:u>=1?Ae.y:Ae.g,In=u=>(u>=.05?"+":"")+(Math.round(u*10)/10).toString().replace(".",",")+" min";function Be(u,_,w){return`<div class="sbars">${u.map(A=>`<div class="sbar" title="${f(A.tip||"")}"><span class="sl">${A.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(A.w*100))}%;background:${A.c}"></i></span><b class="sv" style="color:${A.c===Ae.y?"#a16207":A.c}">${A.val}</b></div>`).join("")}</div>`}function Pi(u){if(u=(u||[]).filter(F=>F.n>=10),!u||u.length<2){let F=u&&u[0];return F?`<p class="snote">Primera foto del d\xEDa a las ${F.t}: ${Math.round(F.ok/F.n*100)} % puntuales de ${F.n} trenes. El gr\xE1fico aparece con la segunda foto.</p>`:'<p class="snote">A\xFAn no hay fotos de hoy.</p>'}let _=300,w=92,A=22,C=F=>A+F*(_-A-6)/(u.length-1),D=F=>6+(100-F)/100*(w-22),O=u.map((F,V)=>[C(V),D(F.n?F.ok/F.n*100:100),F]);return`<svg class="schart" viewBox="0 0 ${_} ${w}" role="img" aria-label="Porcentaje de trenes puntuales a lo largo del d\xEDa">
      ${[100,75,50].map(F=>`<line x1="${A}" x2="${_-4}" y1="${D(F)}" y2="${D(F)}" class="gl"/><text x="2" y="${D(F)+3}" class="ax">${F}%</text>`).join("")}
      <polyline points="${O.map(F=>F[0].toFixed(1)+","+F[1].toFixed(1)).join(" ")}" class="ln"/>
      ${O.map(([F,V,Z])=>`<circle cx="${F.toFixed(1)}" cy="${V.toFixed(1)}" r="5" class="pt"><title>${Z.t} \xB7 ${Z.n?Math.round(Z.ok/Z.n*100):100}% puntuales \xB7 ${Z.n} trenes \xB7 ${Z.d5} con +5 min \xB7 retraso medio ${In(Z.avg)}${Z.nd?` \xB7 ${Z.nd} sin dato`:""}</title></circle>`).join("")}
      <text x="${A}" y="${w-3}" class="ax">${u[0].t}</text><text x="${_-4}" y="${w-3}" class="ax" text-anchor="end">${u[u.length-1].t}</text></svg>`}function us(){Sn();let u=ue(),_=pn.filter(F=>F.real&&Xt()&&u.live),w=_.filter(F=>G.delays.has(F.v.tid)),A=w.length,C=_.length-A,D='<div class="tc sts" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>\u{1F4CA} Estad\xEDsticas</h3>';if(A){let F=w.filter(yt=>yt.dl<3).length,V=w.filter(yt=>yt.dl>=5).length,Z=w.filter(yt=>yt.stop==="via").length,et=Math.round(F/A*100);D+=`<small>Ahora mismo \xB7 ${A} trenes con retraso publicado por Renfe${C?` \xB7 ${C} sin dato (no se cuentan)`:""}</small><div class="kpis">
        <div class="kpi ${On(et)}"><b>${et}%</b><span>puntuales</span></div>
        <div class="kpi ${On(100-V/A*100*2)}" title="${Math.round(V/A*100)} % de los trenes"><b>${V}</b><span>con 5 min<br>o m\xE1s</span></div>
        <div class="kpi ${Z===0?"g":Z<=2?"w":"b"}"><b>${Z}</b><span>detenidos<br>en la v\xEDa</span></div></div>`;let y=new Map;w.forEach(yt=>{let St=yt.fam,oe=y.get(St)||{n:0,ok:0,sum:0};oe.n++,oe.ok+=yt.dl<3,oe.sum+=Math.max(0,yt.dl),y.set(St,oe)});let L=[...y].filter(([yt])=>$[yt]).sort((yt,St)=>yt[1].ok/yt[1].n-St[1].ok/St[1].n||St[1].sum/St[1].n-yt[1].sum/yt[1].n),nt=L.filter(([,yt])=>yt.ok<yt.n),at=L.filter(([,yt])=>yt.ok===yt.n);D+="<h4>Puntualidad por l\xEDnea ahora</h4>"+(nt.length?"":'<p class="snote">\u2713 Todas las l\xEDneas van puntuales.</p>')+Be(nt.map(([yt,St])=>({lab:Xn(yt),w:St.ok/St.n,c:Ae[On(St.ok/St.n*100)],val:`${Math.round(St.ok/St.n*100)}% <small>${In(St.sum/St.n)}</small>`,tip:`${yt}: ${St.ok} de ${St.n} trenes puntuales \xB7 retraso medio ${In(St.sum/St.n)}`})))+(at.length?`<p class="snote">Puntuales al 100 %: ${at.map(([yt])=>Xn(yt)).join(" ")}</p>`:"");let At=new Map;w.forEach(yt=>{if(!yt.tr||yt.v.next==null||yt.v.next<0||yt.v.pre)return;let St=yt.tr.pat.stops[yt.v.next],oe=At.get(St)||{n:0,sum:0};oe.n++,oe.sum+=Math.max(0,yt.dl),At.set(St,oe)});let te=[...At].filter(([,yt])=>yt.sum/yt.n>=1).sort((yt,St)=>St[1].sum/St[1].n-yt[1].sum/yt[1].n).slice(0,8),ee=te.length?te[0][1].sum/te[0][1].n:1;D+='<h4>Estaciones con m\xE1s retraso ahora</h4><small class="snote">Retraso medio de los trenes que van a llegar a cada estaci\xF3n</small>'+(te.length?Be(te.map(([yt,St])=>({lab:`<span class="sn" data-gs="${yt}">${f(b[yt].n)}</span>`,w:St.sum/St.n/ee,c:Qe(St.sum/St.n),val:`${In(St.sum/St.n)} <small>${St.n} ${St.n===1?"tren":"trenes"}</small>`,tip:`${b[yt].n}: ${St.n} trenes llegando con ${In(St.sum/St.n)} de media`}))):'<p class="snote">\u2713 Ning\xFAn tren llega con retraso ahora mismo.</p>')}else D+='<p class="snote">Las estad\xEDsticas en directo necesitan el puente de tiempo real conectado.</p>';let O=ve.hoy;D+=`<button type="button" class="hmore" data-cols>${ti.on?"\u25BE Quitar columnas del mapa":"\u{1F3D9}\uFE0F Ver el retraso de cada estaci\xF3n en 3D"}</button>`;{_h("");let F=[...Ns.m].filter(([V,Z])=>$[V]&&Z[0]>=3).map(([V,Z])=>[V,Z[1]/Z[0]]).sort((V,Z)=>V[1]-Z[1]);F.length&&(D+='<h4>\xBFDe qu\xE9 trenes da posici\xF3n Renfe?</h4><small class="snote">De los trenes que seg\xFAn horario circulan ahora, cu\xE1ntos se ven en directo. Si es bajo, en esa l\xEDnea el mapa usa el horario y no avisamos de \xABsin se\xF1al\xBB.</small>'+Be(F.slice(0,8).map(([V,Z])=>({lab:Xn(V),w:Z,c:Ae[On(Z*100)],val:`${Math.round(Z*100)}%`,tip:`${V}: ${Math.round(Z*100)} % de los trenes en circulaci\xF3n con posici\xF3n de Renfe`}))))}{let F=et=>{let y=(et&&et.snaps||[]).filter(at=>at.n),L=y.reduce((at,At)=>at+At.n,0),nt=y.reduce((at,At)=>at+At.ok,0);return L?nt/L*100:null},V=F(ve.hoy),Z=F(ve.ayer);V!=null&&(D+=`<div class="cmp"><span>Hoy <b class="${On(V)}">${Math.round(V)} %</b> puntuales</span>${Z!=null?`<span>Ayer <b class="${On(Z)}">${Math.round(Z)} %</b></span><span>${V>=Z?"\u25B2 mejor":"\u25BC peor"} que ayer</span>`:""}</div>`)}if(D+="<h4>Hoy, a lo largo del d\xEDa</h4>",O&&O.snaps){D+=Pi(O.snaps);let F=Object.entries(O.st||{}).map(([et,y])=>[Vt.get(et),y]).filter(([et,y])=>et!=null&&y.n>=3).map(([et,y])=>[et,y.sum/y.n/60,y]).filter(et=>et[1]>=1).sort((et,y)=>y[1]-et[1]).slice(0,8);if(F.length){let et=F[0][1];D+='<h4>Estaciones con m\xE1s retraso hoy</h4><small class="snote">Retraso medio de los trenes al llegar \xB7 al menos 3 mediciones</small>'+Be(F.map(([y,L,nt])=>({lab:`<span class="sn" data-gs="${y}">${f(b[y].n)}</span>`,w:L/et,c:Qe(L),val:`${In(L)} <small>m\xE1x +${Math.round(nt.max/60)}</small>`,tip:`${b[y].n}: ${nt.n} mediciones hoy (foto cada 15 min) \xB7 ${nt.d5} con 5 min o m\xE1s \xB7 peor +${Math.round(nt.max/60)} min`})))}let V=Object.entries(O.lines||{}).filter(([et,y])=>$[et]&&y.n>=3).sort((et,y)=>et[1].ok/et[1].n-y[1].ok/y[1].n);V.length&&(D+="<h4>L\xEDneas hoy</h4>"+Be(V.map(([et,y])=>({lab:Xn(et),w:y.ok/y.n,c:Ae[On(y.ok/y.n*100)],val:`${Math.round(y.ok/y.n*100)}% <small>${In(y.sum/y.n/60)}</small>`,tip:`${et} hoy: ${Math.round(y.ok/y.n*100)}% de las mediciones puntuales \xB7 peor retraso +${Math.round(y.max/60)} min`}))));let Z=O.upd?(Date.now()-Date.parse(O.upd))/6e4:0;D+=`<small class="snote">${Z>40?`<b>\xDAltima foto hace ${Math.round(Z)} min</b> (GitHub a veces retrasa las tareas autom\xE1ticas) \xB7 `:""}Foto cada 15 min del tiempo real de Renfe \xB7 actualizado ${f((O.upd||"").slice(11,16))} \xB7 ${(O.note||"").includes("Solo cuentan")?"solo cuentan los trenes con dato de retraso":"las fotos anteriores a las 12:20 contaban como puntuales los trenes sin dato"}</small>`}else D+=`<p class="snote">${ve.at?"El hist\xF3rico de hoy a\xFAn no est\xE1 disponible: se va reuniendo cada 15 min.":"Cargando\u2026"}</p>`;return D+"</div>"}function Co(u){let _=ue(),w=pn.filter(L=>(L.fam||L.tr&&L.tr.fam)===u),A=w.filter(L=>L.real),C=w.length,D=w.filter(L=>L.dl>=5).length,O=w.filter(L=>L.dl<3).length,F=w.filter(L=>L.stop==="via"||L.broke).length,V=G.alerts.filter(L=>L.fams.has(u)),Z=L=>{let nt=L.tr;if(!nt)return"";let at=L.v;if(L.real&&at){let te=at.next>=0?b[nt.pat.stops[at.next]].n:"";return at.atStop>=0?`en ${b[nt.pat.stops[at.atStop]].n}`:te?`hacia ${te}`:""}let At=L.p;return At&&At.next!=null&&At.next>=0?`hacia ${b[nt.pat.stops[At.next]].n}`:""},et=w.slice().sort((L,nt)=>nt.dl-L.dl).slice(0,40).map(L=>{let nt=L.tr;return`<li class="go${ra({num:nt?nt.num:L.v.num,tid:nt?nt.tid:L.v.tid})?" sel":""}" data-gt="${f(nt?nt.num:L.v.num)}|${f(L.real?L.v.tid:nt?nt.tid:"")}"><b>${f(nt?nt.num:L.v.num)}</b><span>${nt?Li(b[nt.pat.stops[nt.pat.stops.length-1]].n,u):""} <small>${f(Z(L))}</small></span>${L.dl>=1?`<em class="dl ${ds(L.dl)}">+${Math.round(L.dl)}</em>`:'<i class="via">en hora</i>'}</li>`}).join(""),y=_h(u);return`<div class="tc sts" style="--c:${$[u]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${Xn(u)} Estado de la l\xEDnea</h3><small>${_.live?`Ahora \xB7 ${C} trenes${A.length<C?` (${A.length} con posici\xF3n de Renfe)`:""}`:`Seg\xFAn horario a las ${rt(_.min)}`}</small>
      <div class="kpis"><div class="kpi ${On(C?O/C*100:100)}"><b>${C?Math.round(O/C*100):100}%</b><span>puntuales</span></div><div class="kpi ${D?D/Math.max(1,C)>.2?"b":"w":"g"}"><b>${D}</b><span>con 5 min<br>o m\xE1s</span></div><div class="kpi ${F?"b":"g"}"><b>${F}</b><span>detenidos</span></div></div>
      ${V.length?Rm(V):'<p class="snote">\u2713 Sin avisos de Rodalies para esta l\xEDnea</p>'}${y<.7?`<p class="snote">Renfe solo da posici\xF3n de ${Math.round(y*100)} % de los trenes de esta l\xEDnea: el resto se muestra seg\xFAn horario.</p>`:""}
      <small style="margin-top:6px">Trenes de m\xE1s a menos retraso \xB7 toca uno para verlo</small><ol>${et||"<li><span>No hay trenes de esta l\xEDnea ahora</span></li>"}</ol>
      <div class="rtb"><button type="button" data-share>\u{1F4E4} Compartir estado</button></div></div>`}let Rm=u=>`<div class="al">${u.slice(0,3).map(_=>`<p>\u26A0\uFE0F ${No(_)} ${f(_.txt)} <small>${Uo(_)}</small></p>`).join("")}</div>`,ti={on:!1,mesh:null};function Im(){let u=ve.hoy,_=[];if(u&&u.st)for(let[w,A]of Object.entries(u.st)){let C=Vt.get(w);C!=null&&A.n>=2&&_.push([C,A.sum/A.n/60,A.n])}if(!_.length){let w=new Map;pn.forEach(A=>{if(!A.real||!A.tr||A.v.next==null||A.v.next<0||A.v.pre||!G.delays.has(A.v.tid))return;let C=A.tr.pat.stops[A.v.next],D=w.get(C)||[0,0];D[0]+=Math.max(0,A.dl),D[1]++,w.set(C,D)}),w.forEach((A,C)=>_.push([C,A[0]/A[1],A[1]]))}return _}function Pm(){if(ti.mesh&&(e.remove(ti.mesh),ti.mesh.geometry.dispose(),ti.mesh.material.dispose(),ti.mesh=null),!ti.on){a();return}let u=Im();if(!u.length){kn("A\xFAn no hay datos de retraso por estaci\xF3n"),ti.on=!1;return}let _=new ka(.32,.32,1,16);_.rotateX(Math.PI/2),_.translate(0,0,.5);let w=new Gs({fog:!1}),A=new Ua(_,w,u.length),C=new Fe,D=new fe;u.forEach(([O,F],V)=>{let Z=.3+Math.min(F,40)*.3;C.makeScale(1,1,Z),C.setPosition(b[O].w[0],b[O].w[1],U),A.setMatrixAt(V,C),D.set(F>10?"#dc2626":F>5?"#ea7a0c":F>=1?"#eab308":"#16a34a"),A.setColorAt(V,D)}),A.renderOrder=25,A.frustumCulled=!1,e.add(A),ti.mesh=A,s.tilt<.5&&(s.tilt=.85),a()}let or=document.createElement("button");or.type="button",or.id="sbtn",or.title="Estad\xEDsticas de puntualidad",or.innerHTML="\u{1F4CA}<span>Estad\xEDsticas</span>",or.onclick=()=>{Ke=!Ke,Ke&&(en=K=!1,ve.at=0),h._h="",We(),a()},document.body.appendChild(or);function Lm(){r.dist<45!=Kt<45&&(Kt=r.dist,Rt()),Dm(),Wt()}let na=[],Bn=new H;function Dm(){let u=r.dist<30,_=0;if(u){let w=[];for(let A=0;A<se;A++)Pt[A]<4||(Bn.set(b[A].w[0],b[A].w[1],U).project(n),!(Bn.z>1||Math.abs(Bn.x)>1.05||Math.abs(Bn.y)>1.05)&&w.push([A,(Bn.x*.5+.5)*innerWidth,(-Bn.y*.5+.5)*innerHeight]));if(w.length<=70)for(let[A,C,D]of w){let O=na[_]||(na[_]=Object.assign(document.createElement("div"),{className:"slab"}));O.isConnected||document.body.appendChild(O),O.textContent=b[A].n,O.dataset.i=A,O.style.display="block",O.style.transform=`translate(${Math.round(C+8)}px,${Math.round(D-7)}px)`,_++}}for(;_<na.length;_++)na[_].style.display="none"}function Ro(u){return Bn.set(u[0],u[1],U).project(n),[(Bn.x*.5+.5)*innerWidth,(-Bn.y*.5+.5)*innerHeight,Bn.z]}function Sd(u,_,w,A){let C=null,D=w*w;for(let O of pn){let[F,V,Z]=Ro(O.p.w);if(Z>1)continue;let et=(F-u)**2+(V-_)**2;et<D&&(D=et,C={a:O})}if(C)return C;D=A*A;for(let O=0;O<se;O++){if(!Pt[O])continue;let[F,V,Z]=Ro(b[O].w);if(Z>1)continue;let et=(F-u)**2+(V-_)**2;et<D&&(D=et,C={s:O})}return C}window.__rodTap=(u,_)=>{let w=null,A=1e9;for(let D of na){if(D.style.display==="none")continue;let O=D.getBoundingClientRect();if(u>=O.left-4&&u<=O.right+4&&_>=O.top-4&&_<=O.bottom+4){let F=Math.abs(_-(O.top+O.bottom)/2)*4+(u-O.left);F<A&&(A=F,w=D)}}if(w)return window.__rodPickStation(+w.dataset.i),!0;let C=Sd(u,_,24,18);return C&&C.a?(en=!1,K=!1,Ke=!1,Y=C.a.tr||{vtid:C.a.v.tid},J=-1,z=null,Rt(),We(),M=0,a(),!0):C&&C.s!=null?(en=!1,K=!1,Ke=!1,J=C.s,Y=null,z=null,Rt(),We(),a(),!0):!1},window.__rodHover=(u,_)=>{let w=Sd(u,_,14,10);if(w&&w.a){let A=w.a,C=A.tr?b[A.tr.pat.stops[A.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${A.c}">\u25A0</span> ${f(A.fam||A.tr&&A.tr.fam||"?")} \xB7 tren ${f(A.tr?A.tr.num:A.v.num)}</b><small>${C?"hacia "+f(C):""}${A.real?(A.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(A.dl)} min</b>`:" \xB7 puntual")+" \xB7 en directo":" \xB7 previsto"}</small>`}return w&&w.s!=null?`<b>${f(b[w.s].n)}</b><small>${[...b[w.s].fams].sort(I).join(" \xB7 ")}</small>`:null},window.__rodPickStation=u=>{en=K=Ke=!1,Y=null,z=null,J=u,Rt(),h._h="",We(),a()};{let u=p("#rc"),_=()=>{let w=u.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,w-64-10)+"px")};try{new ResizeObserver(_).observe(u)}catch{}addEventListener("resize",_),setTimeout(_,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let u=!1,_=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{_&&!u&&(u=!0,location.reload())}),navigator.serviceWorker.register("./sw.js").then(w=>{w.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||w.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{Sn()}catch{}},2500),setInterval(()=>{try{ve.at=0,Sn()}catch{}},15*6e4),window.__rodTick=Bt,window.__rodFrame=Lm,window.__rodResize=()=>{Q.resolution.set(innerWidth,innerHeight),st.resolution.set(innerWidth,innerHeight)},window.__rodResize();let ci={st:-1,f:new Set},Md=u=>{let _=[...b[u].fams].sort(I);return`<div class="sfc">${_.length>1?`<button type="button" data-sf="" class="${ci.f.size?"":"on"}">Todas</button>`:""}${_.map(w=>`<button type="button" data-sf="${f(w)}" class="ln ${ci.f.size&&!ci.f.has(w)?"off":""}${Gt.has(w)?"":" hid"}" style="--c:${$[w]}">${f(w)}</button>`).join("")}</div>${_.some(w=>!Gt.has(w))?"<small>Las l\xEDneas apagadas en el filtro general no se muestran</small>":""}`},Nm=u=>{let _=(u||"#6b7385").replace("#",""),w=parseInt(_.slice(0,2),16),A=parseInt(_.slice(2,4),16),C=parseInt(_.slice(4,6),16);return(.299*w+.587*A+.114*C)/255>.62?"#1d2330":"#fff"},Li=(u,_)=>{let w=$[_]||"#6b7385";return`<span class="dst" style="background:${w};color:${Nm(w)}" title="${f(_||"")}">${f(u)}</span>`},Io=u=>{let _=b[u]&&b[u].id;return qn.st.includes(_)?"\u{1F3E0} ":Mn.st.includes(_)?"\u{1F4BC} ":""},ds=u=>u>10?"d-hi":u>5?"d-md":"d-lo",Um=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,ia={ref:null,m:new Map};function ph(u){if(ia.ref!==G.alerts){ia.ref=G.alerts,ia.m=new Map;for(let _ of G.alerts){if(_.src!=="Rodalies")continue;let w=_.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a)\s+([^.]{4,140})/i);for(let A of _.txt.matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))ia.m.set(A[1],{why:w?w[1].trim().replace(/\s+/g," "):"",txt:_.txt,when:_.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(_.txt)})}}return ia.m.get(String(u))||null}let sa={ref:null,m:new Map};function bd(u){let _=String(u.tr?u.tr.num:u.v&&u.v.num||"");if(!_)return null;if(sa.ref!==G.alerts){sa.ref=G.alerts,sa.m=new Map;for(let A of G.alerts)if(A.src==="Rodalies"&&Um.test(A.txt))for(let C of A.txt.matchAll(/\b(\d{4,6})\b/g))sa.m.set(C[1],A)}let w=sa.m.get(_);return w?{why:"aviso",txt:w.txt}:u.real&&u.stop==="via"&&u.v.still>=300?{why:"via",min:Math.round(u.v.still/60)}:null}let ra=u=>{try{let _=Y;return _?_.num!=null&&String(_.num)===String(u.num)||u.tid&&(_.tid===u.tid||_.vtid===u.tid):!1}catch{return!1}},wd=(u,_)=>{let w=S(u,_.min-1,_.min+240).sort((A,C)=>A.est-C.est).slice(0,6);return w.length?`<small style="margin-top:6px">\u{1F68C} Servicio por carretera (obras): autobuses que sustituyen al tren</small><ol>${w.map(A=>`<li><b>${rt(A.est)}</b>${Xn(A.fam)}<span>${Li(A.dest,A.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},Xn=u=>`<span class="ln" style="--c:${$[u]}">${f(u)}</span>`;function Ed(u,_){return _?u==="X"?'<span class="st late">Cancelado</span>':u>=60?`<span class="st late ${ds(u/60)}">Retraso de ${Math.round(u/60)} min</span>`:'<span class="st ok">Puntual</span>':'<span class="st sch">Seg\xFAn horario \xB7 sin dato en directo</span>'}function We(){if(!Y&&J<0&&!K&&!en&&!Ke&&!Ii){h.innerHTML="",h._h="",h.style.display="none",h.classList.remove("peek"),Mh();return}let u=ue(),_="",w=Xt()&&u.live,A=(y,L)=>G.alerts.filter(nt=>[...nt.fams].some(at=>y.has(at))||L!=null&&nt.stops.has(L)),C=y=>y.length?`<div class="al">${y.slice(0,4).map(L=>`<p>\u26A0\uFE0F ${No(L)} ${[...L.fams].sort(I).slice(0,6).map(Xn).join(" ")} ${f(L.txt)} <small>${Uo(L)}</small></p>`).join("")}${y.length>4?`<small>y ${y.length-4} avisos m\xE1s</small>`:""}</div>`:"",D=Y&&w?pn.find(y=>y.real&&(Y.vtid?y.v.tid===Y.vtid:y.tr===Y)):null;if(Ii&&!Ke&&!en&&!K&&!Y&&J<0)_=Co(Ii);else if(Ke)_=us();else if(en)_=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>Novedades</h3><small>${f(p("#ver").textContent.replace(" \xB7 novedades y fuentes",""))}</small><ul class="chg">${p("#chg").innerHTML||"<li>Versi\xF3n de prueba</li>"}</ul>
        <h3 style="margin-top:14px">Fuentes</h3><ul class="fts">
        <li><b>Renfe Operadora</b> \xB7 horarios (GTFS), posici\xF3n de los trenes y retrasos (GTFS-RT) \xB7 <a href="https://data.renfe.com" target="_blank" rel="noopener">data.renfe.com</a> \xB7 licencia CC BY 4.0</li>
        <li><b>Rodalies de Catalunya</b> (Generalitat) \xB7 salidas con v\xEDa, cancelaciones y avisos \xB7 <a href="https://rodalies.gencat.cat" target="_blank" rel="noopener">rodalies.gencat.cat</a></li>
        <li><b>Adif</b> \xB7 incidencias en la infraestructura de Catalu\xF1a \xB7 <a href="https://www.adif.es/viajeros/estado-de-la-red" target="_blank" rel="noopener">estado de la red</a> \xB7 \xA9 Adif</li>
        <li><b>OpenStreetMap</b> \xB7 trazado de las v\xEDas \xB7 <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">\xA9 colaboradores de OpenStreetMap</a>, licencia ODbL</li>
        </ul><small>Los datos se muestran tal como los publican sus fuentes. Ante cualquier duda, manda lo que diga el operador en la estaci\xF3n.</small></div>`;else if(K){let y=G.alerts.filter(L=>[...L.fams].some(nt=>Gt.has(nt))||!L.fams.size);_=`<div class="tc" style="--c:#c2410c"><button class="x" data-cx>\xD7</button><h3>Avisos e incidencias</h3><small>${y.length} avisos activos para las l\xEDneas que tienes visibles</small>${y.map(L=>`<div class="al"><p>${No(L)} ${[...L.fams].sort(I).map(Xn).join(" ")} <small>${Uo(L)}</small></p><p>${f(L.txt)}</p></div>`).join("")||"<p>Sin avisos activos.</p>"}<small>Fuente: avisos oficiales de Rodalies de Catalunya, incidencias en la v\xEDa de Adif (gestor de la infraestructura)${G.alertsTs&&Date.now()/1e3-G.alertsTs<6*3600?" y de Renfe":` \xB7 los avisos GTFS de Renfe no se muestran: Renfe no los actualiza desde el ${G.alertsTs?new Date(G.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(D){let y=D.v,L=D.tr,nt=he=>f(b[L.pat.stops[he]].n),at=L?L.pat.stops.length:0,At=Vt.get(y.sid),te=At!=null?f(b[At].n):f(y.sid),ee=L&&y.atStop>=0?nt(y.atStop):"",yt=L&&y.next>=0?nt(y.next):te,St=L&&y.next>0?nt(y.next-1):"",oe=D.broke||bd(D),pe=oe?`<b class="stopv">\u26A0\uFE0F ${oe.why==="aviso"?"Tren averiado seg\xFAn Rodalies":`Posible aver\xEDa: detenido en la v\xEDa desde hace ${oe.min} min`}</b>${L&&St?` \xB7 entre ${St} y <b>${yt}</b>`:""}`:D.stop==="via"&&L?`<b class="stopv">\u23F8 Detenido</b> ${St?`entre ${St} y <b>${yt}</b>`:`antes de <b>${yt}</b>`} desde hace ${Math.max(1,Math.round(y.still/60))} min`:y.pre&&L?y.prevTr?`A\xFAn no ha empezado este viaje. Est\xE1 terminando el tren <b>${f(y.prevTr.num)}</b> hacia <b>${nt(0)}</b>${y.prevDl>=1?` con <b>+${Math.round(y.prevDl)} min</b>`:""}: llega hacia las <b>${rt(y.arrO)}</b> y saldr\xEDa hacia las <b>${rt(y.depEst)}</b>${y.preDl>=1?` (horario ${rt(y.dep0)})`:""}`:`A\xFAn no ha empezado este viaje: va hacia <b>${nt(0)}</b>, de donde sale a las <b>${rt(y.dep0+D.dl)}</b>`:y.st==="STOPPED_AT"&&ee?`Parado en <b>${ee}</b>`:ee&&y.next>=0&&y.atStop!==y.next?`Saliendo de <b>${ee}</b> hacia <b>${yt}</b>`:St?`Entre ${St} y <b>${yt}</b>`:`Hacia <b>${yt}</b>`,Ee=G.tu.get(y.tid),cn=Ee&&Ee.next&&L&&y.next>=0&&Ee.next.sid===b[L.pat.stops[y.next]].id&&Ee.next.t?new Date(Ee.next.t*1e3).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"",De=[];if(L){let he=D.idx>=0?D.idx:0,Ni=y.pre?Math.max(D.dl,y.preDl||0):D.dl,lr=un=>L.t0+L.pat.t[un]+Ni;for(let un=he;un<at;un++)De.push(`<li${Io(L.pat.stops[un])?' class="mine"':""}><b>${rt(lr(un===0?1:2*un))}</b><span title="${nt(un)}">${Io(L.pat.stops[un])}${nt(un)}</span>${Ni>=1?`<em class="dl ${ds(Ni)}">${y.pre?"\u2248":""}+${Math.round(Ni)}</em>`:""}</li>`)}_=`<div class="tc" style="--c:${D.c}"><button class="x" data-cx>\xD7</button><div>${Xn(D.fam)}<b>Tren ${f(L?L.num:y.num)}</b> <span class="lv">\u25CF en directo</span></div>${L?`<h3 class="rt"><span class="o" title="${nt(0)}">${nt(0)}</span><span class="ar">\u2192</span>${Li(b[L.pat.stops[at-1]].n,L.fam)}</h3>`:""}
        <p>${pe}${cn?` \xB7 prevista ${cn}`:""}${y.plat&&y.st==="STOPPED_AT"&&ee?` \xB7 <b>v\xEDa ${f(y.plat)}</b>`:""}</p><p>${y.pre&&y.prevTr?y.preDl>=1?`<span class="st late">Saldr\xE1 con unos ${Math.round(y.preDl)} min de retraso (estimado)</span>`:'<span class="st ok">Le da tiempo a salir a su hora (estimado)</span>':Ed(G.delays.get(y.tid),G.delays.has(y.tid))}${(()=>{let he=L&&li(L.num);return he&&he.n>=2?`<span class="thist">\u{1F4CA} \xDAltimos ${he.n} d\xEDas: ${he.late?`lleg\xF3 con 5 min o m\xE1s <b>${he.late} de ${he.n}</b>`:"<b>siempre puntual</b>"} \xB7 retraso t\xEDpico ${he.avg<.5?"0":"+"+Math.round(he.avg)} min</span>`:""})()}${(()=>{let he=L&&ph(L.num);return he?`<span class="why" title="${f(he.txt)}">${he.why?"Motivo: "+f(he.why):"Rodalies ha publicado un aviso de este tren"}</span>`:""})()}</p>
        <small>${y.pre?`Renfe ya le pone el n\xFAmero de su pr\xF3ximo viaje. Posici\xF3n real enviada hace ${Math.round(D.age)} s`:y.est?"Renfe da una posici\xF3n que no encaja con su recorrido: se muestra donde deber\xEDa estar seg\xFAn el horario y su retraso":`Posici\xF3n enviada por Renfe hace ${Math.round(D.age)} s${D.age>120?" \xB7 <b>sin actualizar</b>":""}`}</small>
        ${De.length?`${D.dl>=1||y.pre&&y.preDl>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${De.join("")}</ol>`:""}${C(A(new Set([D.fam])))}
        ${Do(L?L.num:y.num,"",D.fam)}${L?`<div class="rtb"><button type="button" data-follow>${z===L?"Dejar de seguir":"Seguir este tren"}</button></div>`:""}</div>`}else if(Y&&w)_=`<div class="tc" style="--c:#6b7385"><button class="x" data-cx>\xD7</button><h3>Tren ${f(Y.num||Y.vtid||"")}</h3><p>Renfe no da ahora la posici\xF3n de este tren: puede haber terminado su viaje, no haber salido o no estar circulando.</p></div>`;else if(Y){let y=Y,L=y.pat,nt=L.stops.length,at=Pe(y),At=typeof at=="number"?at/60:0,te=t.days.indexOf(u.ymd),ee=y.day===te-1?1440:0,yt=u.min+ee-y.t0-At,St=Ls(y,yt),oe=he=>y.t0+L.t[he]+At,pe=he=>f(b[L.stops[he]].n),Ee="Fuera de servicio ahora";St&&(Ee=St.moving?`Circulando hacia <b>${pe(St.next)}</b> \xB7 llega ${rt(oe(2*St.next))}`:St.at===nt-1?`Ha llegado a <b>${pe(nt-1)}</b>`:`Parado en <b>${pe(St.at)}</b> \xB7 sale ${rt(oe(2*St.at+1))}`);let cn=St?St.next:0,De=[];for(let he=cn;he<nt;he++)De.push(`<li${Io(L.stops[he])?' class="mine"':""}><b>${rt(oe(2*he))}</b><span title="${pe(he)}">${Io(L.stops[he])}${pe(he)}</span>${At>=1?`<em class="dl ${ds(At)}">+${Math.round(At)}</em>`:""}</li>`);_=`<div class="tc" style="--c:${y.c}"><button class="x" data-cx>\xD7</button><div>${Xn(y.fam)}<b>Tren ${f(y.num)}</b> <span class="pv">previsi\xF3n</span></div><h3 class="rt"><span class="o" title="${pe(0)}">${pe(0)}</span><span class="ar">\u2192</span>${Li(b[y.pat.stops[nt-1]].n,y.fam)}</h3>
        <p>${Ee}</p><p>${Ed(at,at!=null)}${(()=>{let he=li(y.num);return he&&he.n>=2?`<span class="thist">\u{1F4CA} \xDAltimos ${he.n} d\xEDas: ${he.late?`lleg\xF3 con 5 min o m\xE1s <b>${he.late} de ${he.n}</b>`:"<b>siempre puntual</b>"} \xB7 retraso t\xEDpico ${he.avg<.5?"0":"+"+Math.round(he.avg)} min</span>`:""})()}</p><small>Sale ${rt(y.t0+L.t[1])} \xB7 llega ${rt(y.t0+L.t[2*nt-2])} (horario)</small>
        ${At>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${De.join("")}</ol>${Do(y.num,"",y.fam)}<div class="rtb"><button type="button" data-follow>${z===y?"Dejar de seguir":"Seguir este tren"}</button></div></div>`}else{let y=J,L=t.days.indexOf(u.ymd),nt=[];ci.st!==y&&(ci.st=y,ci.f.clear());let at=yt=>(!$[yt]||Gt.has(yt))&&(!ci.f.size||ci.f.has(yt));if(L>=0){let yt=(St,oe)=>{for(let pe of St){if(!at(pe.fam))continue;let Ee=pe.pat.stops.indexOf(y);if(Ee<0||Ee===pe.pat.stops.length-1)continue;let cn=Pe(pe),De=typeof cn=="number"?cn/60:0,he=pe.t0+pe.pat.t[2*Ee+1]-oe;he+De<u.min-1||he>u.min+360||nt.push({tr:pe,t:he,dl:De,d:cn,on:G.vp.has(pe.tid),past:u.min>pe.t0+pe.pat.t[1]-oe+2})}};yt(j[L],0),L>0&&yt(j[L-1],1440)}nt.sort((yt,St)=>yt.t+yt.dl-St.t-St.dl);let At=b[y].id,te=Qn.get(At);w&&G.url&&(!te||Date.now()-te.at>3e4)&&!te?.loading&&(Qn.set(At,{...te||{},loading:!0,at:te?te.at:0}),wt(G.url.replace(/\/+$/,""),"/departures.json?stationId="+At).then(yt=>{Qn.set(At,{at:Date.now(),d:yt}),J===y&&(h._h="",We())}).catch(()=>Qn.set(At,{at:Date.now(),err:1})));let ee=w&&te&&te.d&&Array.isArray(te.d.trains)?te.d.trains:null;if(ee){let yt=new Map([...G.vp.values()].map(oe=>[String((ot.get(oe.tid)||{}).num||oe.num),oe])),St=ee.filter(oe=>at((oe.line||{}).id||"")).slice(0,40).map(oe=>{let pe=(oe.departureDateHourSelectedStation||"").slice(11,16),Ee=(oe.line||{}).id||"",cn=String(oe.commercialNumber||oe.technicalNumber||""),De=yt.get(cn),he=De?G.delays.get(De.tid):null;return`<li class="go${ra({num:cn,tid:De?De.tid:""})?" sel":""}" data-gt="${f(cn)}|${De?f(De.tid):""}"><b>${f(pe)}</b>${$[Ee]?Xn(Ee):`<span class="ln" style="--c:#6b7385">${f(Ee||"?")}</span>`}<span>${Li((oe.destinationStation||{}).name||"",Ee)}${oe.trainObservations?` \xB7 <i>${f(oe.trainObservations)}</i>`:""}</span>${oe.trainCancelled?"<em>cancelado</em>":typeof he=="number"&&he>=60?`<em class="dl ${ds(he/60)}">+${Math.round(he/60)}</em>`:""}${oe.platformSelectedStation?`<i class="via">v\xEDa ${f(oe.platformSelectedStation)}</i>`:""}${De?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");_=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${f(b[y].n)}</h3>${Md(y)}${Do("",b[y].id,"")}
          <small style="margin-top:6px">Pr\xF3ximas salidas oficiales de Rodalies \xB7 hora prevista \xB7 <span class="lvk">\u25CF</span> tren circulando</small>
          <ol>${St||"<li><span>Rodalies no anuncia salidas ahora mismo</span></li>"}</ol>${wd(y,u)}${C(A(b[y].fams,y))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}else _=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${f(b[y].n)}</h3>${Md(y)}${Do("",b[y].id,"")}
        <small style="margin-top:6px">${w&&G.url?"Cargando salidas oficiales\u2026 mientras, ":""}Pr\xF3ximas salidas${w?' \xB7 hora prevista con el retraso actual \xB7 <span class="lvk">\u25CF</span> tren circulando':" \xB7 previsi\xF3n seg\xFAn horario (sin tiempo real)"}</small>
        <ol>${nt.slice(0,40).map(yt=>`<li class="go${ra({num:yt.tr.num,tid:yt.tr.tid})?" sel":""}" data-gt="${f(yt.tr.num)}|${f(yt.tr.tid)}"><b>${rt(yt.t+yt.dl)}</b>${Xn(yt.tr.fam)}<span>${Li(b[yt.tr.pat.stops[yt.tr.pat.stops.length-1]].n,yt.tr.fam)}</span>${yt.d==="X"?"<em>cancelado</em>":yt.dl>=1?`<em class="dl ${ds(yt.dl)}">+${Math.round(yt.dl)}</em>`:""}${w?yt.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':yt.past?'<i class="nos" title="deber\xEDa haber salido y Renfe no da su posici\xF3n">sin se\xF1al</i>':'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||"<li><span>No hay salidas en las pr\xF3ximas 6 horas</span></li>"}</ol>${wd(y,u)}${C(A(b[y].fams,y))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}let O=h.scrollTop;if(h._h!==_&&(h.innerHTML=_,h._h=_,h.scrollTop=O),h.style.display="flex",h.classList.remove("min"),Mh(),innerWidth<=640){let y=h.querySelector(".tc");if(y&&!y.querySelector(".mn")){let L=document.createElement("button");L.type="button",L.className="mn",L.setAttribute("aria-label","Encoger o ampliar la ficha"),L.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",L.onclick=nt=>{nt.stopPropagation(),h.classList.toggle("peek"),L.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",h.scrollTop=0},y.appendChild(L)}}else h.classList.remove("peek");let F=p("#rc");if(innerWidth<=640&&!F.classList.contains("min")&&!We.done&&(We.done=1,p("#rcgrab").click()),innerWidth<=640){let y=p("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(y+8)+"px",h.style.width="calc(100vw - 76px)",h.style.maxHeight=Math.max(140,p("#rc").getBoundingClientRect().top-y-16)+"px"}else if(innerHeight<=500){let y=p("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(y+8)+"px",h.style.width="min(290px, 40vw)",h.style.maxHeight=innerHeight-y-20+"px"}else h.style.top="",h.style.width=Ke?"390px":"300px",h.style.maxHeight="";let Z=h.querySelector("[data-cx]");Z&&(Z.onclick=y=>{if(y.stopPropagation(),We.done=0,Ke||en||K||Ii&&!Y&&J<0){Ke=en=K=!1,Y||J>=0||(Ii=""),h._h="",We(),a();return}K=!1,en=!1,Ke=!1,Y=null,J=-1,z=null,Rt(),We(),M=0,a()}),Cd(h);{let y=h.querySelector("[data-share]");y&&(y.onclick=()=>{let L=Ii,nt=pn.filter(ee=>(ee.fam||ee.tr&&ee.tr.fam)===L),at=nt.filter(ee=>ee.dl>=5).sort((ee,yt)=>yt.dl-ee.dl),At=G.alerts.filter(ee=>ee.fams.has(L)),te=`${L} a las ${rt(ue().min)}: ${nt.length} trenes, ${at.length} con 5 min o m\xE1s${at.length?" ("+at.slice(0,4).map(ee=>`${ee.tr?ee.tr.num:ee.v.num} +${Math.round(ee.dl)}`).join(", ")+")":""}.${At.length?" Aviso: "+At[0].txt:" Sin avisos."}`;navigator.share?navigator.share({text:te}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(te),kn("Copiado: "+te.slice(0,60)+"\u2026"))})}{let y=h.querySelector("[data-cols]");y&&(y.onclick=()=>{ti.on=!ti.on,Pm(),h._h="",We()})}h.querySelectorAll("[data-gs]").forEach(y=>y.onclick=()=>{let L=+y.dataset.gs;Ke=!1,window.__rodPickStation(L),Object.assign(s,{tx:b[L].w[0],ty:b[L].w[1],dist:Math.min(s.dist,20)}),a()}),h.querySelectorAll("[data-sf]").forEach(y=>y.onclick=L=>{L.stopPropagation();let nt=y.dataset.sf;nt?ci.f.has(nt)?ci.f.delete(nt):ci.f.add(nt):ci.f.clear(),h._h="",We()}),h.querySelectorAll("[data-gt]").forEach(y=>y.onclick=()=>{let[L,nt]=y.dataset.gt.split("|"),at=ot.get(nt);Gd({num:L,tid:G.vp.has(nt)?nt:"",tr:at||null})}),h.querySelectorAll("[data-sethome]").forEach(y=>y.onclick=()=>bh(J,y.dataset.sethome));let et=h.querySelector("[data-follow]");et&&(et.onclick=()=>{z=z===Y?null:Y,z?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(h.classList.add("peek"),h.scrollTop=0,p("#rc").classList.contains("min")||p("#rcgrab").click())):h.classList.remove("peek"),h._h="",We(),a()})}window.__rodCard=We;try{let u=localStorage.getItem("rod_inf");(u==="mini"||u==null)&&p("#inf").classList.add("mini")}catch{}p("#inft").onclick=()=>{let u=p("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",u?"mini":"")}catch{}(Y||J>=0||K||en)&&(h._h="",We())},p("#ver").onclick=()=>{en=!0,Ke=!1,K=!1,h._h="",We()};let Po={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},Fm=["vacio","lleno","petado","parado","calor","abordo"],Om=["gente","retraso","cancel","ascensor","via"],Bm={vacio:"Va con sitio",lleno:"Va lleno",petado:"Muy lleno, cuesta subir",parado:"Parado sin moverse",calor:"Sin aire acondicionado",abordo:"Incidencia a bordo",gente:"Mucha gente esperando",retraso:"Anuncian retraso por megafon\xEDa",cancel:"Anuncian tren cancelado",ascensor:"Ascensor o escalera averiados",via:"Incidencia en la estaci\xF3n"},Lo=u=>(G.tipos||Bm)[u]||u,mh=(u,_)=>(G.rep||[]).filter(w=>u&&w.num===String(u)&&!w.sid||_&&w.sid===String(_)&&!w.num||u&&_&&w.num===String(u)&&w.sid===String(_)),Td=u=>{let _=Math.round((Date.now()+(G.repSkew||0)-u.at)/6e4);return _<1?"ahora":`hace ${_} min`},aa=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function Do(u,_,w){if(!G.url||!G.repOk)return"";let A=mh(u,_),C=u?Fm:Om;return`<div class="crowd"><small>\u{1F465} Lo que dicen los viajeros${A.length?"":" \xB7 nadie ha avisado todav\xEDa"}</small>${A.map(D=>`<p><span>${Po[D.kind]||"\u2022"} <b>${f(Lo(D.kind))}</b> <small>${D.up>1?D.up+" viajeros \xB7 ":""}${Td(D)}</small></span>${aa.has(D.id)?"<small>\u2713</small>":`<button type="button" data-rv="${D.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${D.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${u?"\xBFVas en este tren? Avisa a los dem\xE1s":"\xBFEst\xE1s en la estaci\xF3n? Avisa a los dem\xE1s"}</summary><div class="ckb">${C.map(D=>`<button type="button" data-rk="${D}" data-rn="${f(u||"")}" data-rs="${f(_||"")}" data-rl="${f(w||"")}">${Po[D]} ${f(Lo(D))}</button>`).join("")}</div><small>An\xF3nimo \xB7 se borra solo en 90 min \xB7 sin texto libre</small></details></div>`}async function Ad(u,_){try{let A=await(await fetch(G.url.replace(/\/+$/,"")+_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)})).json();if(!A.ok){kn(A.err||"No se ha podido enviar");return}if(A.id){aa.add(A.id);try{localStorage.setItem("rod_votes",JSON.stringify([...aa].slice(-300)))}catch{}}kn(_==="/vote"?"Gracias, voto guardado":A.n>1?`Gracias \xB7 ya sois ${A.n} avisando de lo mismo`:"Gracias, aviso enviado");let C=await wt(G.url.replace(/\/+$/,""),"/reports.json");C&&C.items&&(G.rep=C.items),h._h="",We(),on(!0)}catch{kn("Sin conexi\xF3n con el puente")}}function Cd(u){u.querySelectorAll("[data-rk]").forEach(_=>_.onclick=w=>{w.stopPropagation(),_.disabled=!0,Ad({kind:_.dataset.rk,num:_.dataset.rn,sid:_.dataset.rs,line:_.dataset.rl},"/report")}),u.querySelectorAll("[data-rv]").forEach(_=>_.onclick=w=>{w.stopPropagation();let[A,C]=_.dataset.rv.split(":");aa.add(+A);try{localStorage.setItem("rod_votes",JSON.stringify([...aa].slice(-300)))}catch{}Ad({id:+A,v:+C},"/vote")})}let Rd=0;function kn(u){let _=p("#toast");_||(_=document.createElement("div"),_.id="toast",document.body.appendChild(_)),_.textContent=u,_.className="on",clearTimeout(Rd),Rd=setTimeout(()=>{_.className=""},2600)}function No(u){return u.src?`<b class="asrc ${u.src==="Adif"?"adif":""}">${u.src==="Adif"?"Adif \xB7 v\xEDa":f(u.src)}</b>`:""}function Uo(u){if(!u.when)return"";let[_,w]=u.when.split("T"),A=pt(new Date),C=A.ymd.slice(0,4)+"-"+A.ymd.slice(4,6)+"-"+A.ymd.slice(6,8);if(_===C&&w){let D=Math.round(A.min-(+w.slice(0,2)*60+ +w.slice(3,5)));return D<1?"ahora":D<60?`hace ${D} min`:`hoy a las ${w.slice(0,5)}`}return`${_.slice(8,10)}/${_.slice(5,7)}${w?" "+w.slice(0,5):""}`}function gh(){let u=p("#alr");if(!u)return;let _=G.alerts.filter(w=>[...w.fams].some(A=>Gt.has(A))).length;u.hidden=!_,u.textContent=`\u26A0\uFE0F ${_} aviso${_===1?"":"s"}`}{let u=p("#alrslot");u&&u.appendChild(p("#alr"))}p("#alr").onclick=()=>{en=!1,Ke=!1,K=!0,We()},p("#wcopy").onclick=async()=>{let u=p("#wcode").textContent;try{await navigator.clipboard.writeText(u),p("#wcopy").textContent="Copiado \u2713"}catch{let w=document.createRange();w.selectNodeContents(p("#wcode"));let A=getSelection();A.removeAllRanges(),A.addRange(w),p("#wcopy").textContent="Selecciona y copia"}setTimeout(()=>p("#wcopy").textContent="Copiar c\xF3digo",2500)};let km=Vt.get("71801");function zm(u,_){let w=b[u].id,A=Qn.get(w);!(Xt()&&G.url)||A&&(A.loading||Date.now()-A.at<3e4)||(Qn.set(w,{...A||{},loading:!0,at:A?A.at:0}),wt(G.url.replace(/\/+$/,""),"/departures.json?stationId="+w).then(C=>{Qn.set(w,{at:Date.now(),d:C}),_&&_()}).catch(()=>Qn.set(w,{at:Date.now(),err:1})))}let Id=u=>+u.slice(0,2)*60+ +u.slice(3,5),oa={k:-2,m:null};function Vm(u){let _=t.days.indexOf(ue().ymd);if(oa.k!==_){oa.k=_,oa.m=new Map;for(let w of j[_]||[])oa.m.set(String(w.num),w)}return oa.m.get(String(u))||null}let Ns={at:0,m:new Map};function _h(u){if(Date.now()-Ns.at>6e4){Ns.at=Date.now(),Ns.m=new Map;let w=ue(),A=t.days.indexOf(w.ymd);if(A>=0)for(let C of j[A]){let D=w.min-C.t0;if(D<C.pat.t[1]+3||D>C.pat.t[C.pat.t.length-2]-3)continue;let O=Ns.m.get(C.fam)||[0,0];O[0]++,G.vp.has(C.tid)&&O[1]++,Ns.m.set(C.fam,O)}}let _=Ns.m.get(u);return _&&_[0]>=3?_[1]/_[0]:1}function xh(u,_){let w=ue(),A=Xt()&&w.live&&!_,C=Qn.get(b[u].id),D=[],O=new Map([...G.vp.values()].map(V=>[String((ot.get(V.tid)||{}).num||V.num),V]));if(A&&C&&C.d&&Array.isArray(C.d.trains))for(let V of C.d.trains){let Z=(V.departureDateHourSelectedStation||"").slice(11,16);if(!Z)continue;let et=String(V.commercialNumber||V.technicalNumber||""),y=O.get(et),L=y?G.delays.get(y.tid):null,nt=Math.max(typeof L=="number"?Math.max(0,L/60):0,y&&y.pre&&y.preDl||0),at=Id(Z);at<w.min-720&&(at+=1440),D.push({sm:at,est:at+nt,dl:nt,fam:(V.line||{}).id||"",dest:(V.destinationStation||{}).name||"",destId:(V.destinationStation||{}).id||"",plat:V.platformSelectedStation||"",cancel:!!V.trainCancelled,obs:V.trainObservations||"",live:!!y,num:et,tid:y?y.tid:"",tr:y&&ot.get(y.tid)||Vm(et),src:"oficial"})}else{let V=t.days.indexOf(w.ymd);if(V<0)return D;let Z=(et,y)=>{for(let L of et){let nt=L.pat.stops.indexOf(u);if(nt<0||nt===L.pat.stops.length-1)continue;let at=Pe(L),At=typeof at=="number"?Math.max(0,at/60):0,te=L.t0+L.pat.t[2*nt+1]-y;if(te+At<w.min-1||te>w.min+360)continue;let ee=L.pat.stops[L.pat.stops.length-1];D.push({sm:te,est:te+At,dl:At,fam:L.fam,dest:b[ee].n,destId:b[ee].id,plat:"",cancel:at==="X",obs:"",live:G.vp.has(L.tid),num:L.num,tid:L.tid,tr:L,src:"horario"})}};Z(j[V],0),V>0&&Z(j[V-1],1440),V+1<t.days.length&&w.min>1080&&Z(j[V+1],-1440)}if(A){let V=new Set(D.map(y=>y.num)),Z=t.days.indexOf(w.ymd),et=(y,L)=>{for(let nt of y||[]){if(V.has(String(nt.num)))continue;let at=nt.pat.stops.indexOf(u);if(at<0||at===nt.pat.stops.length-1)continue;let At=nt.t0+nt.pat.t[2*at+1]-L;if(At<w.min-45||At>w.min+1||!G.vp.get(nt.tid))continue;let ee=G.delays.get(nt.tid),yt=typeof ee=="number"?Math.max(0,ee/60):0,St=nt.pat.stops[nt.pat.stops.length-1];D.push({sm:At,est:At+yt,dl:yt,fam:nt.fam,dest:b[St].n,destId:b[St].id,plat:"",cancel:!1,obs:"",live:!0,num:nt.num,tid:nt.tid,tr:nt,src:"horario"})}};Z>=0&&(et(j[Z],0),Z>0&&et(j[Z-1],1440));for(let y of D){let L=y.tid&&G.vp.get(y.tid),nt=y.tr?y.tr.pat.stops.indexOf(u):-1;y.passed=!!(L&&nt>=0&&!L.pre&&L.next!=null&&L.next>=0&&L.next>nt&&L.atStop!==nt),!y.passed&&y.live&&y.est<w.min&&(y.est=w.min,y.late=!0),y.passed&&(y.gone=!0)}}let F=D.filter(V=>V.gone?w.min-V.est<20:V.est>=w.min-.5).sort((V,Z)=>V.est-Z.est);{let V=F.filter(Z=>Z.gone);if(V.length>2){let Z=new Set(V.slice(0,V.length-2));F=F.filter(et=>!Z.has(et))}}if(!F.filter(V=>!V.gone).length&&D.length&&D[0].src==="oficial"&&!_)return xh(u,!0);for(let V of F){let Z=V.num&&ph(V.num);Z&&Z.cx&&(V.cancel=!0,V.cxWhy=Z.txt)}if(Xt()&&w.live){let V=t.days.indexOf(w.ymd);for(let Z of F){if(Z.live||Z.cancel||!Z.tr)continue;let et=Z.tr.day===V-1?1440:Z.tr.day===V+1?-1440:0,y=Z.tr.t0+Z.tr.pat.t[1]-et+(Z.dl||0);Z.ghost=w.min>y+3&&_h(Z.fam)>=.7}}if(_||(F=F.concat(S(u,w.min-.5,w.min+360)).sort((V,Z)=>V.est-Z.est)),F.some(V=>V.src==="oficial")){let V=Math.max(...F.map(et=>et.sm)),Z=new Set(F.map(et=>et.num));F=F.concat(xh(u,!0).filter(et=>et.sm>V&&!Z.has(String(et.num))))}return F}let Pd=(u,_,w,A)=>{let C={key:u,ico:_,name:w,st:[],i:0,walk:10,open:!1};try{let D=JSON.parse(localStorage.getItem("rod_"+u)||"null");D&&Object.assign(C,D)}catch{}return!C.st.length&&A&&(C.st=A),C},qn=Pd("home","\u{1F3E0}","Casa",["79410","79412"]),Mn=Pd("work","\u{1F4BC}","Trabajo",null),me={key:"near",ico:"\u{1F4CD}",name:"Cerca de ti",st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},la=[me,qn,Mn];qn.open=!1,Mn.open=!1;function Ld(u,_){let w=mt(u,_),A=mt(u,_+.009);return 1/Math.hypot(A[0]-w[0],A[1]-w[1])}function vh(u){if(!navigator.geolocation){me.err="Este navegador no da la ubicaci\xF3n",on(!0);return}navigator.geolocation.getCurrentPosition(_=>{let{longitude:w,latitude:A}=_.coords,C=mt(w,A),D=Ld(w,A),O=b.map((et,y)=>[y,Math.hypot(et.w[0]-C[0],et.w[1]-C[1])*D]).filter(([et])=>b[et].fams.size).sort((et,y)=>et[1]-y[1]),F=O.filter(([,et],y)=>y===0||et<Math.max(2.5,O[0][1]*1.6)).slice(0,3),V=me.st[0]!==b[F[0][0]].id;me.w=C,me.k=D,me.st=F.map(([et])=>b[et].id),me.dist=Object.fromEntries(F.map(([et,y])=>[b[et].id,y])),me.fix=Date.now(),me.err="",V&&(me.i=0);let Z=[qn,Mn].find(et=>et.st.includes(me.st[0])&&me.dist[me.st[0]]<1.5);on(!0)},_=>{me.err=_.code===1?"Sin permiso de ubicaci\xF3n":"No se ha podido obtener la ubicaci\xF3n",u&&(qn.open=!!qn.st.length),on(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let Fo=u=>Math.max(1,Math.round(u*1.3/.08));setTimeout(()=>vh(!0),400);let Di={fixes:[],tid:"",no:new Map,shown:""};function Hm(){let u=Di.fixes;if(u.length<2)return;let _=u[u.length-1],w=u.slice().reverse().find(et=>_.t-et.t>=8e3&&_.t-et.t<=9e4);if(!w)return;let A=Math.hypot(_.w[0]-w.w[0],_.w[1]-w.w[1])*_.k,C=_.spd!=null&&_.spd>0?_.spd*3.6:A/((_.t-w.t)/36e5);if(C<22||C>200)return;let D=[_.w[0]-w.w[0],_.w[1]-w.w[1]],O=null,F=1.2;for(let et of pn){if(!et.tr)continue;let y=Math.hypot(et.p.w[0]-_.w[0],et.p.w[1]-_.w[1])*_.k;if(y>F)continue;let L=et.real?et.v.next:et.p.next;if(L==null||L<0)continue;let nt=b[et.tr.pat.stops[L]].w,at=[nt[0]-et.p.w[0],nt[1]-et.p.w[1]];if(at[0]*D[0]+at[1]*D[1]<=0)continue;let At=String(et.tr.num);(Di.no.get(At)||0)>Date.now()||(F=y,O=et)}if(!O)return;let V=String(O.tr.num);if(Di.tid===V)return;Di.tid=V,en=K=Ke=!1,J=-1,Y=O.tr,z=O.tr,Object.assign(s,{tx:O.p.w[0],ty:O.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(h.classList.add("peek"),p("#rc").classList.contains("min")||p("#rcgrab").click()),Rt(),h._h="",We(),M=0,a();let Z=p("#onb");Z||(Z=document.createElement("div"),Z.id="onb",document.body.appendChild(Z)),Z.innerHTML=`\u{1F686} Parece que vas en el <b>${f(O.tr.fam)} ${f(O.tr.num)}</b> hacia ${f(b[O.tr.pat.stops[O.tr.pat.stops.length-1]].n)} \xB7 lo sigo <button type="button" data-onb-no>No es este</button><button type="button" data-onb-x>\u2715</button>`,Z.className="on",Z.querySelector("[data-onb-no]").onclick=()=>{Di.no.set(V,Date.now()+20*6e4),Di.tid="",z=null,Y=null,h._h="",We(),Z.className=""},Z.querySelector("[data-onb-x]").onclick=()=>{Z.className=""},setTimeout(()=>{Z.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let u=null,_=()=>{u==null&&(u=navigator.geolocation.watchPosition(A=>{let{longitude:C,latitude:D}=A.coords,O={t:A.timestamp||Date.now(),w:mt(C,D),k:Ld(C,D),spd:A.coords.speed};Di.fixes.push(O),Di.fixes=Di.fixes.filter(F=>O.t-F.t<12e4);try{Xt()&&ue().live&&Hm()}catch{}},()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4}))},w=()=>{u!=null&&(navigator.geolocation.clearWatch(u),u=null)};setTimeout(_,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?w():(Di.fixes=[],_())})}setInterval(()=>{!document.hidden&&(Date.now()-me.fix>11e4||la.some(u=>u.goAt))&&vh(!1)},3e4);let ji=u=>{try{localStorage.setItem("rod_"+u.key,JSON.stringify({st:u.st,i:u.i,walk:u.walk,open:u.open,hide:u.hide||"",goAt:u.goAt||0}))}catch{}},yh=u=>u.st.length?Vt.get(u.st[u.i]||u.st[0]):null;function Dd(u,_,w,A){if(A&&_.bus)return _.bstops.slice(1).some(O=>A.has(O))?"to":"out";if(A&&_.tr){let O=_.tr.pat.stops,F=O.indexOf(u);if(F>=0&&O.slice(F+1).some(V=>A.has(V)))return"to"}if(A&&_.tr)return"out";let C=Vt.get(_.destId)??b.findIndex(O=>O.n===_.dest);if(C<0||C==null||w==null)return"otros";let D=O=>Math.hypot(b[O].w[0]-b[w].w[0],b[O].w[1]-b[w].w[1]);return D(C)<D(u)?"to":"out"}let ca=u=>u<1?"ahora":u<60?Math.round(u)+" min":Math.floor(u/60)+" h "+String(Math.round(u%60)).padStart(2,"0"),Nd=0,Gm=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i;function Wm(u,_,w){let A=yh(u);if(u===me){if(A==null)return`<div class="hplace"><button type="button" class="hhead hnew" data-hloc><span class="hico">\u{1F4CD}</span><span class="htit"><b>Cerca de ti</b><small>${me.err?f(me.err)+" \xB7 toca para reintentar":"Buscando tu ubicaci\xF3n\u2026"}</small></span><span class="hchev">\u27F3</span></button></div>`;if([qn,Mn].find(jt=>jt.st.includes(me.st[0])&&me.dist[me.st[0]]<1.5))return"";u.walk=Fo(me.dist[u.st[u.i]]||0)}if(A==null){let vt=me.st.length?Vt.get(me.st[0]):null,jt=u===Mn?qn:Mn,ke=vt!=null&&!jt.st.includes(me.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${u.ico}</span><span class="htit"><b>${u.name}</b><small>${ke?`Est\xE1s en <b>${f(b[vt].n)}</b>`:"Elige tu estaci\xF3n"}</small></span>${ke?`<button type="button" class="hpick" data-hnear="${u.key}">Usar esta</button>`:""}<button type="button" class="hpick alt" data-hset="${u.key}">${ke?"Otra\u2026":"Elegir"}</button></div></div>`}zm(A,()=>on(!0));let C=u===me?null:u===qn?Mn:qn,D=C?yh(C):null,O=D!=null&&D!==A?D:km,F=D!=null&&D!==A?C===Mn?"el trabajo":"casa":"Barcelona",V=b[A].fams,Z=new Set([...V].filter(vt=>Gt.has(vt))),et=Z.size<V.size,y=!1;Z.size||(Z=new Set(V),et=!1,y=!0);let L=me.w?Math.hypot(b[A].w[0]-me.w[0],b[A].w[1]-me.w[1])*me.k:null,nt=L!=null&&Date.now()-me.fix<10*6e4,at=u===me||nt&&L>3&&!u.goAt,At=u!==me&&nt&&L<.25,te=u.goAt?(Date.now()-u.goAt)/6e4:null;te!=null&&(te>60||At)&&(u.goAt=0,ji(u));let ee=!At&&u!==me&&!!u.goAt,yt=ee?nt&&L<=3?Fo(L):Math.max(0,u.walk-te):0,St=xh(A),oe=St.filter(vt=>!$[vt.fam]||Gt.has(vt.fam)||y),pe=at||At?0:ee?yt:nt&&L<=3&&L>=.25?Fo(L):u.walk,Ee=G.alerts.filter(vt=>[...vt.fams].some(jt=>Z.has(jt))||vt.stops&&vt.stops.has(A)),cn=Ee.some(vt=>Gm.test(vt.txt)),De={to:[],out:[],otros:[],all:oe},he=F!=="Barcelona"?new Set(C.st.map(vt=>Vt.get(vt)).filter(vt=>vt!=null)):null;oe.forEach(vt=>De[Dd(A,vt,O,he)].push(vt));let Ni="";if(he&&!De.to.length&&oe.length<St.length){let vt=St.filter(jt=>!oe.includes(jt)&&Dd(A,jt,O,he)==="to");vt.length&&(De.to=vt,Ni=[...new Set(vt.map(jt=>jt.fam))].sort(I).join(", "))}let lr=vt=>{if(vt==="all")return"Pr\xF3ximas salidas \xB7 todas las direcciones";let jt=Je=>(Je.find(di=>di.fam)||{}).fam;if(vt==="to")return"Hacia "+Li(F==="Barcelona"?"Barcelona":b[O].n,jt(De.to)||[...Z][0])+(F!=="Barcelona"?` <small>${F}</small>`:"");let ke=[];for(let Je of De[vt])ke.some(di=>di[0]===Je.dest)||ke.push([Je.dest,Je.fam]);return ke.length?"Hacia "+ke.slice(0,2).map(([Je,di])=>Li(Je,di)).join(" "):"Otros"},un=vt=>{let jt=De[vt].find(bn=>!bn.cancel&&!bn.gone&&bn.est-_.min>=pe);if(!jt){let bn=De[vt].find(ng=>!ng.cancel);return bn&&!at?{cls:"v-no",big:"No llegas",small:`El pr\xF3ximo (${rt(bn.est)}) sale en ${ca(bn.est-_.min)}: no da tiempo a pie`}:{cls:"v-no",big:"Sin trenes",small:"No hay salidas pr\xF3ximas en este sentido"}}let ke=jt.est-_.min-pe,Je=at||At?"v-info":ee?ke<1.5?"v-warn":"v-ok":ke<1.5?"v-bad":ke<5?"v-warn":"v-ok",di=jt.ghost?De[vt].find(bn=>!bn.cancel&&!bn.ghost&&bn.live&&bn.est>jt.est):null;return{cls:Je,ghost:!!jt.ghost,big:at||At?ke<1?"Sale ahora":"Sale en "+ca(ke):ee?ke<1.5?"\xA1Date prisa!":"Llegas con "+ca(ke)+" de margen":ke<1.5?"\xA1Sal ya!":"Sal en "+ca(ke),warn:jt.ghost?`\u26A0\uFE0F Sin se\xF1al de Renfe: puede no pasar${di?` \xB7 el siguiente en marcha sale a las ${rt(di.est)}`:""}`:cn?"\u26A0\uFE0F Servicio afectado por una incidencia":"",small:`${jt.bus?"\u{1F68C} autob\xFAs \xB7 ":""}${rt(jt.est)} \xB7 ${jt.fam} a ${jt.dest}${jt.plat?" \xB7 v\xEDa "+jt.plat:""}${jt.dl>=1?` \xB7 +${Math.round(jt.dl)} min`:""}${jt.arr!=null?` \xB7 llegas a las ${rt(jt.arr)}`:""}`,x:jt}},Jm=he||new Set([O]),Km=vt=>{let jt=vt.tr;if(!jt)return null;let ke=jt.pat.stops,Je=ke.indexOf(A);if(Je<0)return null;let di=-1;for(let bn=Je+1;bn<ke.length;bn++)if(Jm.has(ke[bn])){di=bn;break}return di<0?null:vt.est+(jt.pat.t[2*di]-jt.pat.t[2*Je+1])};De.to.forEach(vt=>{vt.arr=Km(vt)});let Eh=De.out.length?"out":"otros",ui=un("to"),Xd=un(Eh);!at&&u!==me&&ui.x&&(Zm(u,ui.x,b[A].n,pe),useLive=Xt()&&_.live);let qd=Z.size===1,jm=vt=>{let jt=vt.est-_.min;return at?vt.cancel?"cx":jt<0?"u-miss":"u-info":vt.cancel?"cx":jt<pe?"u-miss":jt<pe+1.5?"u-now":jt<pe+5?"u-soon":"u-ok"},Qm=vt=>{if(vt.gone)return`<li class="hr u-gone${vt.live?" on":""}${ra(vt)?" sel":""} go" data-dk="${w.push(vt)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${rt(vt.est)}</b><small>sali\xF3 hace ${Math.max(1,Math.round(_.min-vt.est))} min</small></span><span class="hrd">${Li((qd?"":vt.fam+" \xB7 ")+vt.dest,vt.fam)}<small class="hro">tren ${f(vt.num)}</small></span><span class="hrm">${vt.dl>=1?`<em class="dl ${ds(vt.dl)}">+${Math.round(vt.dl)}</em>`:""}</span></li>`;let jt=!vt.cancel&&vt.est-_.min<pe,ke=mh(vt.num,"");return`<li class="hr ${jm(vt)}${vt.live?" on":""}${vt.ghost?" gh":""}${ra(vt)?" sel":""} go" style="--lc:${$[vt.fam]||"#6b7385"}" data-dk="${w.push(vt)-1}" title="${vt.cancel?"Cancelado":jt?"No llegas a pie":"Ver este tren en el mapa"}"><span class="hrt"><b>${vt.cancel?"\u2715":jt?rt(vt.est):ca(vt.est-_.min)}</b><small>${vt.cancel?"cancelado":vt.late?"a\xFAn no ha salido":jt?"no llegas":vt.ghost?'<i class="ghs" title="Deber\xEDa estar circulando y Renfe no da su posici\xF3n">sin se\xF1al</i>':rt(vt.est)}</small></span><span class="hrd">${vt.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Li((qd?"":vt.fam+" \xB7 ")+vt.dest,vt.fam)}${ke.length?`<i class="cr" title="${f(ke.map(Je=>Lo(Je.kind)).join(" \xB7 "))}">${ke.slice(0,2).map(Je=>Po[Je.kind]).join("")}</i>`:""}${vt.arr!=null?`<small class="hro">llegas a las ${rt(vt.arr)}${(()=>{let Je=vt.num&&li(vt.num);return Je&&Je.n>=3&&Je.late/Je.n>=.5?` \xB7 <b class="slate">suele ir tarde (${Je.late}/${Je.n})</b>`:""})()}</small>`:""}${vt.obs?`<small class="hro">${f(vt.obs)}</small>`:""}</span><span class="hrm">${!vt.cancel&&vt.dl>=1?`<em class="dl ${ds(vt.dl)}">+${Math.round(vt.dl)}</em>`:""}${vt.plat?`<i class="via">v\xEDa ${f(vt.plat)}</i>`:""}</span></li>`},ua=(vt,jt,ke)=>`<div class="hcol"><div class="hdir">${lr(vt)}${ke?`<button type="button" class="hhide" data-hhide="${u.key}:${ke}" title="Ocultar esta direcci\xF3n">\u2715</button>`:""}</div><div class="hv ${jt.cls}${jt.ghost?" gh":""}${jt.x?" go":""}"${jt.x?` data-dk="${w.push(jt.x)-1}"`:""}><b>${jt.big}</b><small>${f(jt.small)}</small>${jt.warn?`<span class="hvw">${f(jt.warn)}</span>`:""}</div><ol>${De[vt].slice(0,(u.more?vt==="all"||u.hide?20:10:vt==="all"?7:u.hide?8:4)+De[vt].filter(Je=>Je.gone).length).map(Qm).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(u===me){let vt=un("all");var tg=vt.x?`${vt.big} \xB7 <b>${rt(vt.x.est)}</b> ${f(vt.x.fam)} a ${f(vt.x.dest)}${vt.x.plat?" \xB7 v\xEDa "+f(vt.x.plat):""}`:vt.big}let eg=u===me?tg:ui.x?`${ui.big} \xB7 <b>${rt(ui.x.est)}</b>${ui.x.arr!=null?` \u2192 llegas a las <b>${rt(ui.x.arr)}</b>`:""} hacia ${f(F)}${ui.x.plat?" \xB7 v\xEDa "+f(ui.x.plat):""}`:"Sin trenes hacia "+f(F);return`<div class="hplace ${u.open?"open":""}"><button type="button" class="hhead" data-ht="${u.key}"><span class="hico">${u.ico}</span><span class="htit"><b>${f(b[A].n)}</b><small class="c${cn?"bad":ui.cls.slice(2)}">${eg}</small></span><span class="hchev">\u25BE</span></button>`+(u.open?`
      <div class="hbody">
        ${u.st.length>1?`<div class="hst">${u.st.map((vt,jt)=>{let ke=Vt.get(vt);return ke==null?"":`<button type="button" data-hs="${u.key}:${jt}" class="${jt===u.i?"on":""}">${f(b[ke].n)}</button>`}).join("")}</div>`:""}
        ${u===me?`<div class="hwalk">\u{1F4CD} A ${(()=>{let vt=me.dist[u.st[u.i]]||0;return vt<1?Math.round(vt*100)*10+" m":vt.toFixed(1).replace(".",",")+" km"})()} \xB7 unos <b>${u.walk} min</b> a pie</div>`:""}
        ${At?'<div class="hwalk away">\u{1F689} Est\xE1s en la estaci\xF3n: horas de salida del tren</div>':!ee&&!at&&nt&&L<=3?`<div class="hwalk away">\u{1F4CD} Est\xE1s a ${L<1?Math.round(L*100)*10+" m":L.toFixed(1).replace(".",",")+" km"}: unos <b>${Fo(L)} min</b> a pie seg\xFAn tu ubicaci\xF3n</div>`:ee?`<div class="hwalk away">\u{1F6B6} De camino \xB7 te quedan unos <b>${Math.round(yt)} min</b>${nt&&L<=3?" (seg\xFAn tu ubicaci\xF3n)":""} \xB7 <a data-hgo="${u.key}:0">cancelar</a></div>`:""}${at&&u!==me?`<div class="hwalk away">\u{1F4CD} Est\xE1s a ${L<10?L.toFixed(1).replace(".",","):Math.round(L)} km: horas de salida del tren, sin contar el camino</div>`:""}<div class="hwalk"${at||At||ee?" hidden":""}><button type="button" class="hgo" data-hgo="${u.key}:1">\u{1F6B6} Ya he salido</button> Tardo <button type="button" data-hw="${u.key}:-1">\u2212</button><b>${pe} min</b><button type="button" data-hw="${u.key}:1">+</button> a pie hasta la estaci\xF3n</div>
        ${et?`<div class="hflt">Solo ${[...Z].sort(I).map(Xn).join(" ")} \xB7 filtro de l\xEDneas activo${Ni?` \xB7 hacia ${F} se muestran ${Ni} (tu filtro no va hasta all\xED)`:""}</div>`:y?`<div class="hflt">El filtro (${[...Gt].sort(I).slice(0,3).map(Xn).join(" ")}) no pasa por aqu\xED: se ven todas tus l\xEDneas</div>`:""}
        ${Ee.length?`<div class="hal ${cn?"bad":""}">\u26A0\uFE0F ${No(Ee[0])} ${f(Ee[0].txt)} <small>${Uo(Ee[0])}</small>${Ee.length>1?` <a data-hal>+${Ee.length-1} avisos</a>`:""}</div>`:`<div class="hok">\u2713 Sin avisos para ${[...Z].sort(I).join(", ")}</div>`}
        ${(()=>{let vt=u.st.flatMap(jt=>mh("",jt));return vt.length?`<div class="hcr">${vt.slice(0,3).map(jt=>`${Po[jt.kind]} <b>${f(Lo(jt.kind))}</b> <small>${jt.up>1?jt.up+" viajeros \xB7 ":""}${Td(jt)}</small>`).join("<br>")}</div>`:""})()}
        ${u===me?`<div class="hcols one">${ua("all",un("all"))}</div>`:u.hide==="out"?`<div class="hcols one">${ua("to",ui)}</div><a class="hshow" data-hshow="${u.key}">\u21BA Mostrar la otra direcci\xF3n</a>`:u.hide==="to"?`<div class="hcols one">${ua(Eh,Xd)}</div><a class="hshow" data-hshow="${u.key}">\u21BA Mostrar la otra direcci\xF3n</a>`:`<div class="hcols">${ua("to",ui,"to")}${ua(Eh,Xd,"out")}</div>`}
        ${oe.length>(u===me?7:8)?`<button type="button" class="hmore" data-hmore="${u.key}">${u.more?"\u25B4 Menos trenes":"\u25BE M\xE1s trenes \xB7 pr\xF3ximas horas"}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${useLive?Qn.get(b[A].id)?.d?"Salidas oficiales de Rodalies en directo":"Horario + retrasos mientras cargan las salidas oficiales":"Previsi\xF3n seg\xFAn horario (sin tiempo real)"} \xB7 \u25CF = tren circulando">${useLive?Qn.get(b[A].id)?.d?"\u25CF oficial en directo":"\u25CF horario + retrasos":"seg\xFAn horario"}</span><a data-hmap="${A}">\u{1F5FA}\uFE0F mapa</a>${u===me?"<a data-hloc>\u{1F4CD} actualizar</a>":`<a data-hset="${u.key}">\u270E cambiar</a>`}${u===Mn?'<a data-hdel="work">\u2715 quitar</a>':""}</div>
      </div>`:"")+"</div>"}let _i={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},Ud=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Fd=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,ha=()=>{let u=[...qn.st,...Mn.st],_=new Set;return u.forEach(w=>{let A=Vt.get(w);A!=null&&b[A].fams.forEach(C=>_.add(C))}),{stations:u,lines:[..._].sort(I)}},$m=u=>Uint8Array.from(atob(u.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((u.length+3)%4)),_=>_.charCodeAt(0));async function Od(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function Bd(u){let w=await(await fetch(G.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:u.toJSON(),...ha()})})).json();if(!w.ok)throw new Error(w.err||"error")}let Pn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function Xm(){let{lines:u,stations:_}=ha(),w=new Set(u),A=new Set(_.map(O=>Vt.get(O))),C=G.alerts.filter(O=>[...O.fams].some(F=>w.has(F))||[...O.stops||[]].some(F=>A.has(F)));if(!Pn.seen){try{Pn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Pn.seen=new Set}if(!Pn.seen.size){C.forEach(O=>Pn.seen.add(O.id+"|"+O.txt.length)),kd();return}}let D=C.filter(O=>!Pn.seen.has(O.id+"|"+O.txt.length));if(D.length&&(D.forEach(O=>Pn.seen.add(O.id+"|"+O.txt.length)),kd(),!(!Pn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let O of D.slice(0,3)){let F=(O.src==="Adif"?"Adif \xB7 v\xEDa":"Rodalies")+(O.fams.size?" \xB7 "+[...O.fams].sort(I).slice(0,4).join(" "):""),V={body:O.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+O.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(Z=>Z?Z.showNotification(F,V):new Notification(F,V)).catch(()=>{try{new Notification(F,V)}catch{}})}}function kd(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Pn.seen].slice(-400)))}catch{}}async function qm(){if(Pn.on)Pn.on=!1,kn("Avisos desactivados");else{if(!("Notification"in window)){kn(Ud&&!Fd()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio y activa los avisos desde la app":"Este navegador no permite avisos");return}if(await Notification.requestPermission()!=="granted"){kn("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}Pn.on=!0,kn("Listo: te aviso de incidencias en "+ha().lines.join(", ")+" mientras la app est\xE9 abierta")}try{localStorage.setItem("rod_ln",Pn.on?"1":"")}catch{}on(!0)}async function Ym(){if(!G.repOk)return qm();if(!_i.busy){_i.busy=!0;try{let u=await Od();if(!u){kn(Ud&&!Fd()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio, abre la app desde ah\xED y activa los avisos":"Este navegador no permite avisos (hace falta abrir la web publicada, no el archivo)");return}if(await navigator.serviceWorker.ready,_i.on){let _=await u.pushManager.getSubscription();_&&(fetch(G.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:_.endpoint})}).catch(()=>{}),await _.unsubscribe().catch(()=>{})),_i.on=!1,kn("Avisos desactivados")}else{if(!G.url){kn("Hace falta el puente en directo");return}if(await Notification.requestPermission()!=="granted"){kn("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}let w=(await wt(G.url.replace(/\/+$/,""),"/push/key")).key,A=await u.pushManager.getSubscription()||await u.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:$m(w)});await Bd(A),_i.on=!0,kn("Listo: te avisaremos de incidencias en "+ha().lines.join(", "))}try{localStorage.setItem("rod_push",_i.on?"1":"")}catch{}}catch(u){kn("No se han podido activar los avisos: "+(u.message||u))}finally{_i.busy=!1,on(!0)}}}async function zd(){if(_i.on)try{let u=await Od(),_=u&&await u.pushManager.getSubscription();_&&await Bd(_)}catch{}}let Sh=!1,Vd="";function Mh(){let u=Y?"t"+(Y.tid||Y.vtid):J>=0?"s"+J:K?"a":en?"n":"";u!==Vd&&(Sh=!1,Vd=u);let _=innerWidth<=640&&!!u&&!Sh,w=p("#inf");w.classList.contains("compact")!==_&&(w.classList.toggle("compact",_),requestAnimationFrame(()=>{if(h.style.display!=="none"){let A=w.getBoundingClientRect().bottom;h.style.top=Math.round(A+8)+"px",h.style.maxHeight=Math.max(140,p("#rc").getBoundingClientRect().top-A-16)+"px"}}))}let Hd=new Set;function Zm(u,_,w,A){if(!(Pn.on||_i.on)||!("Notification"in window)||Notification.permission!=="granted")return;let C=ue(),D=_.sm-C.min-A;if(!C.live||_.dl<10||D>40||Hd.has(_.num+"|"+_.sm))return;Hd.add(_.num+"|"+_.sm);let O=`${u.ico} Tu tren de las ${rt(_.sm)} va con +${Math.round(_.dl)} min`,F=`${_.fam} a ${_.dest} desde ${w}: saldr\xE1 hacia las ${rt(_.est)}. Puedes salir ${Math.round(_.dl)} min m\xE1s tarde.`;(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(V=>V?V.showNotification(O,{body:F,tag:"rd-"+_.num,icon:"icons/icon-192.png"}):new Notification(O,{body:F})).catch(()=>{try{new Notification(O,{body:F})}catch{}})}function on(u){let _=p("#home");if(!_)return;let w=performance.now();if(!u&&w-Nd<4e3)return;Nd=w;let A=ue(),C=[],D=ha(),O=y=>{let L=yh(y);return L==null||!me.w?1:Math.hypot(b[L].w[0]-me.w[0],b[L].w[1]-me.w[1])},F=[me,...[qn,Mn].sort((y,L)=>O(y)-O(L))],V=F.map(y=>Wm(y,A,C)).join("")+(la.some(y=>y.open)&&D.lines.length,"");if(_.className=la.some(y=>y.open)?"open":"",_._h===V)return;_._h=V,_.innerHTML=V;{let y=[..._.children].find(L=>L.classList.contains("hplace")&&!L.querySelector(".hnew"));y&&y.classList.add("lead")}let Z=y=>y==="work"?Mn:y==="near"?me:qn;_.querySelectorAll("[data-hloc]").forEach(y=>y.onclick=()=>{me.err="",vh(!0)}),_.querySelectorAll("[data-ht]").forEach(y=>y.onclick=()=>{if(p("#inf").classList.contains("compact")){Sh=!0,Mh();return}let L=Z(y.dataset.ht);L.open=!L.open,ji(L),on(!0),(Y||J>=0||K||en)&&(h._h="",We())}),_.querySelectorAll("[data-hs]").forEach(y=>y.onclick=()=>{let[L,nt]=y.dataset.hs.split(":"),at=Z(L);at.i=+nt,ji(at),on(!0)}),_.querySelectorAll("[data-hw]").forEach(y=>y.onclick=()=>{let[L,nt]=y.dataset.hw.split(":"),at=Z(L);at.walk=g(at.walk+ +nt,0,60),ji(at),on(!0)}),_.querySelectorAll("[data-hmap]").forEach(y=>y.onclick=()=>{let L=+y.dataset.hmap;en=K=Ke=!1,Y=null,J=L,Rt(),Object.assign(s,{tx:b[L].w[0],ty:b[L].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),h._h="",We(),a()}),_.querySelectorAll("[data-hset]").forEach(y=>y.onclick=()=>{Us=y.dataset.hset,m.value="",m.placeholder=Us==="work"?"Escribe la estaci\xF3n del trabajo\u2026":"Escribe la estaci\xF3n de casa\u2026",m.focus()}),_.querySelectorAll("[data-hnear]").forEach(y=>y.onclick=()=>{let L=Vt.get(me.st[0]);L!=null&&bh(L,y.dataset.hnear)}),_.querySelectorAll("[data-hmore]").forEach(y=>y.onclick=()=>{let L=Z(y.dataset.hmore);L.more=!L.more,on(!0)}),_.querySelectorAll("[data-hhide]").forEach(y=>y.onclick=L=>{L.stopPropagation();let[nt,at]=y.dataset.hhide.split(":"),At=Z(nt);At.hide=at,ji(At),on(!0)}),_.querySelectorAll("[data-hshow]").forEach(y=>y.onclick=()=>{let L=Z(y.dataset.hshow);L.hide="",ji(L),on(!0)}),_.querySelectorAll("[data-hgo]").forEach(y=>y.onclick=L=>{L.stopPropagation();let[nt,at]=y.dataset.hgo.split(":"),At=Z(nt);At.goAt=at==="1"?Date.now():0,ji(At),on(!0)}),_.querySelectorAll("[data-hdel]").forEach(y=>y.onclick=()=>{Mn.st=[],Mn.open=!1,ji(Mn),on(!0),zd()}),_.querySelectorAll("[data-dk]").forEach(y=>y.onclick=()=>Gd(C[+y.dataset.dk])),_.querySelectorAll("[data-hal]").forEach(y=>y.onclick=()=>p("#alr").click());let et=p("#bell");et||(et=document.createElement("button"),et.type="button",et.id="bell",et.onclick=Ym,p("#inf .more").prepend(et));{let y=G.repOk?_i.on:Pn.on;et.hidden=!D.lines.length,et.className=y?"on":"",et.textContent=(y?"\u{1F514} Avisos activados \xB7 ":"\u{1F515} Activar avisos de ")+D.lines.join(", "),et.title=(y?"Avisos activados":"Activar avisos")+" de "+D.lines.join(", ")+(G.repOk?"":" (mientras la app est\xE9 abierta)")}Cd(_)}function Gd(u){if(!u)return;let _=t.days.indexOf(ue().ymd),w=pn.find(D=>D.real?u.tid&&D.v.tid===u.tid||u.num&&String(D.tr?D.tr.num:D.v.num)===String(u.num):u.tr&&D.tr===u.tr||u.num&&D.tr&&String(D.tr.num)===String(u.num)),A=u.tr||w&&w.tr||(j[_]||[]).find(D=>String(D.num)===String(u.num));if(en=K=Ke=!1,J=-1,Y=w?w.tr||{vtid:w.v.tid}:A||null,!Y)return;z=w&&w.tr?w.tr:null,z&&innerWidth<=640&&(h.classList.add("peek"),p("#rc").classList.contains("min")||p("#rcgrab").click());let C=w?w.p.w:null;C&&Object.assign(s,{tx:C[0],ty:C[1],dist:Math.min(s.dist,22)}),Rt(),h._h="",We(),M=0,a()}let Us=!1;m.addEventListener("blur",()=>setTimeout(()=>{Us&&!m.value.trim()&&(Us=!1,m.placeholder="Buscar estaci\xF3n o municipio\u2026")},600));function BS(){}function bh(u,_){let w=_==="work"?Mn:qn,A=b[u].id,C=b.filter(D=>D.fams.size&&D!==b[u]&&Math.hypot(D.w[0]-b[u].w[0],D.w[1]-b[u].w[1])<.6).map(D=>D.id);w.st=[A,...C].slice(0,3),w.i=0,w.open=!0,ji(w),on(!0),zd()}let Oo=p("#lines");Oo.innerHTML='<button type="button" class="all" data-f="*">Todas</button>'+B.map(u=>`<button type="button" style="--c:${$[u]}" data-f="${u}">${u}</button>`).join("");function Wd(){try{on(!0)}catch{}{let u=p("#linebtn");u||(u=document.createElement("button"),u.type="button",u.id="linebtn",Oo.after(u),u.onclick=()=>{Ii=[...Gt][0],Ke=en=K=!1,h._h="",We()});let _=Gt.size===1?[...Gt][0]:"";u.hidden=!_,_&&(u.innerHTML=`\u{1F4CB} Estado de la ${f(_)} ahora`)}Oo.querySelectorAll("[data-f]").forEach(u=>{u.dataset.f!=="*"&&u.classList.toggle("off",!Gt.has(u.dataset.f))})}Oo.querySelectorAll("[data-f]").forEach(u=>u.onclick=()=>{let _=u.dataset.f;_==="*"?B.forEach(w=>Gt.add(w)):Gt.size===B.length?(Gt.clear(),Gt.add(_)):Gt.has(_)?(Gt.delete(_),Gt.size||B.forEach(w=>Gt.add(w))):Gt.add(_);try{localStorage.setItem("rod_lines",JSON.stringify([...Gt]))}catch{}Wd(),Ot(),Rt(),gh(),M=0,a()});let wh=[...document.querySelectorAll("[data-sp]")],hi=0;function $d(u){let _=ue();u&&(Et===u||hi===u)?Et?(zt=_.min,ne=_.min,Et=0,hi=u):(ce=performance.now(),Et=u,hi=0):u===0?(Et=0,ne=null,hi=0):(zt=_.min,ce=performance.now(),ne=_.min,Et=u,hi=0),wh.forEach(w=>{let A=+w.dataset.sp;w.classList.toggle("on",A===(Et||hi)||!Et&&!hi&&ne==null&&A===0),w.classList.toggle("pz",!!hi&&A===hi),w.textContent=A===0?"Ahora":hi===A?"\u25B6 \xD7"+A:Et===A?"\u23F8 \xD7"+A:"\xD7"+A}),M=0,a()}wh.forEach(u=>u.onclick=()=>$d(+u.dataset.sp)),p("#tsl").oninput=u=>{let _=+u.target.value;zt=_,ne=_,ce=performance.now(),Et===0&&!hi&&wh.forEach(w=>w.classList.remove("on")),M=0,a()},setInterval(()=>{ne!=null&&Et&&zt+(performance.now()-ce)/6e4*Et>1560&&(zt=240,ce=performance.now())},1e3),window.__rodSearch=u=>{let _=x(u.trim());if(!_){d.style.display="none",d._pick=null;return}let w=[],A=[];b.forEach((F,V)=>{if(!F.fams.size)return;let Z=x(F.n);Z.startsWith(_)||Z.includes(" "+_)||Z.includes("-"+_)?w.push(V):Z.includes(_)&&A.push(V)});let C=w.concat(A).slice(0,7),D=T.filter(F=>x(F.name).startsWith(_)).sort((F,V)=>V.pop-F.pop).slice(0,3),O=C.map(F=>({h:`\u{1F689} ${f(b[F].n)}<em>${[...b[F].fams].sort(I).slice(0,3).map(V=>`<em class="ls" style="background:${$[V]}">${V}</em>`).join(" ")}</em>`,go:()=>{if(Us){let V=Us;Us=!1,m.placeholder="Buscar estaci\xF3n o municipio\u2026",bh(F,V);return}en=!1,K=!1,Ke=!1,J=F,Y=null,z=null,Rt(),Object.assign(s,{tx:b[F].w[0],ty:b[F].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),We(),a()}})).concat(D.map(F=>({h:`${f(F.name)}<em>municipio</em>`,go:()=>{Object.assign(s,{tx:F.cx,ty:F.cy,dist:g(F.size*3+14,14,60)}),a()}})));d.innerHTML=O.map((F,V)=>`<li data-i="${V}">${F.h}</li>`).join("")||'<li class="no">Sin resultados</li>',d.style.display="block",d._pick=F=>{O[F]&&(O[F].go(),d.style.display="none",m.value="",m.blur())},d.querySelectorAll("li[data-i]").forEach(F=>F.onclick=()=>d._pick(+F.dataset.i))},Wd(),Rt();try{let u=new URLSearchParams(location.search).get("st");if(u){let _=x(u),w=-1,A=0;b.forEach((C,D)=>{if(!C.fams.size)return;let O=x(C.n),F=O===_?3:O.startsWith(_)||_.startsWith(O)?2:O.includes(_)||_.includes(O)?1:0;F>A&&(A=F,w=D)}),w>=0&&setTimeout(()=>{J=w,Rt(),Object.assign(s,{tx:b[w].w[0],ty:b[w].w[1],dist:18,tilt:.5}),We(),a()},300)}}catch{}window.__rod={TID:ot,SID:Vt,byDay:j,get days(){return t.days},get hist(){return ve},get past(){return ae.cur},get cols(){return ti.mesh?ti.mesh.count:-1},get dist(){return r.dist},get follow(){return z},get selTrip(){return Y},ST:b,TR:it,FAM:B,act:()=>pn,setSpeed:$d,RT:G,pollRT:re,nowState:ue,posAt:Ls,activeTrips:Ds,select:u=>{Y=u,We()}}}var Jr=window.__DATA__;var Ce=i=>document.querySelector(i),cs=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Fn=(i,t,e)=>Math.min(e,Math.max(t,i)),ad=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Wn=Ce("#c"),bo=new Yc({canvas:Wn,antialias:!0});bo.setPixelRatio(Math.min(devicePixelRatio||1,2));var Is=new Ia;Is.background=new fe(15659509);var ch=35,Ki=new Nn(ch,1,2,1500);Is.add(new Qa(16777215,9080992,1));var um=new eo(16777215,.9);um.position.set(-40,-70,90);Is.add(um);var Zi=100/Jr.w,yo=Jr.w/2,So=Jr.h/2,an=[],od=new wi;Is.add(od);var dm=new Ws({color:16777215,transparent:!0,opacity:.55});for(let i of Jr.m){let t=new wi,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let g of i.g){let x=g.map(p=>{let f=[];for(let N=0;N<p.length;N+=2)f.push(new Lt((p[N]-yo)*Zi,(p[N+1]-So)*Zi));return f.length>1&&f[0].equals(f[f.length-1])&&f.pop(),f}).filter(p=>p.length>=3);if(!x.length)continue;let T=new Fr(x[0]);for(let p=1;p<x.length;p++)T.holes.push(new Xs(x[p]));e.push(T);for(let p of x[0])s=Math.min(s,p.x),r=Math.max(r,p.x),a=Math.min(a,p.y),o=Math.max(o,p.y);for(let p of x)n.push(new Fa(new rn().setFromPoints(p.map(f=>new H(f.x,f.y,0))),dm))}if(!e.length)continue;let l;try{l=new qa(e,{depth:1,bevelEnabled:!1})}catch{continue}let c=new Ja({color:13421772}),h=new vn(l,c);t.add(h);let m=new wi;n.forEach(g=>m.add(g)),m.position.z=.04,od.add(m),t.scale.z=.01,od.add(t);let d={og:m,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:h,mat:c,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};h.userData.m=d,an.push(d)}var c1=an.map(i=>i.mesh),sm=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},fm=0,pm=0;for(let i of an){for(let t of i.rings)fm+=sm(t[0])-t.slice(1).reduce((e,n)=>e+sm(n),0);pm+=i.area}var yS=Math.sqrt(pm/fm),eh={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},mm={"08":"provincia de Barcelona",17:"provincia de Girona",25:"provincia de Lleida",43:"provincia de Tarragona"},pd="sqrt",md="pop",sd=0,ld=0,qr=1,vo=1,SS={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},cd=i=>md==="pop"?i.pop:i.pop/i.area,th=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new fe(i));function MS(i){i=Fn(i,0,1)*(th.length-1);let t=Math.min(Math.floor(i),th.length-2);return th[t].clone().lerp(th[t+1],i-t)}var Yr=i=>i>=100?cs(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function bS(){ld=0;for(let i of an)ld+=i.pop;[...an].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...an].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),gm()}var wS=new fe("#d3d8e2"),ES=new fe("#eceff3");function gd(i){i.mat.color.copy(i.base).lerp(ES,.86),i.inF||i.mat.color.lerp(wS,.8)}function gm(){qr=1,vo=1e12;for(let e of an){let n=cd(e);qr=Math.max(qr,n),vo=Math.min(vo,n)}let i=Math.log10(Math.max(vo,.01)),t=Math.log10(qr);for(let e of an)e.base=MS((Math.log10(Math.max(cd(e),.01))-i)/(t-i)),gd(e);Ce("#lmin").textContent=Yr(vo),Ce("#lmax").textContent=Yr(qr),Ce("#lname").textContent=md==="pop"?"habitantes":"hab./km\xB2",hh()}function hh(){let i=SS[pd],t=i(qr),e=24*sd;for(let n of an)n.zt=sd<=.001?.01:Math.max(.12*Math.min(1,sd),e*i(cd(n))/t)*(n.inF?1:.1);Cn()}var rm=Object.fromEntries(an.map(i=>[i.code,i])),nh=[],_m=[];for(let i of Jr.bd){let t=rm[i.a],e=rm[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)_m.push((i.p[n]-yo)*Zi,(i.p[n+1]-So)*Zi,0,(i.p[n+2]-yo)*Zi,(i.p[n+3]-So)*Zi,0),nh.push(t,e)}var rh=new os;rh.setPositions(_m);var xm=new $i({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),vm=new $i({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[xm,vm].forEach((i,t)=>{let e=new Qs(rh,i);e.frustumCulled=!1,e.renderOrder=10+t,Is.add(e)});function TS(){let i=rh.attributes.instanceStart.data.array;for(let t=0;t<nh.length;t+=2){let e=Math.max(nh[t].z,nh[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}rh.attributes.instanceStart.data.needsUpdate=!0}var ah={};for(let i of Object.keys(eh)){let t=an.filter(h=>h.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,l=-1e9;for(let h of t)e+=h.area,n+=h.cx*h.area,s+=h.cy*h.area,r=Math.min(r,h.cx),a=Math.max(a,h.cx),o=Math.min(o,h.cy),l=Math.max(l,h.cy);let c=document.createElement("div");c.className="plab",c.textContent=eh[i],c.title="Ver solo "+mm[i],c.onclick=()=>OS("pr:"+i),document.body.appendChild(c),ah[i]={el:c,p:new H(n/e,s/e,0),cx:(r+a)/2,cy:(o+l)/2,ext:Math.max(a-r,l-o),ext2:[a-r,l-o],area:e,name:eh[i]}}var rd=new H;function AS(){for(let i in ah){let t=ah[i];rd.copy(t.p).project(Ki),t.el.style.transform=`translate(-50%,-50%) translate(${(rd.x*.5+.5)*innerWidth}px,${(-rd.y*.5+.5)*innerHeight}px)`}}var ln={tilt:0,yaw:0,dist:150,tx:0,ty:0},ye={...ln};function CS(){let i=innerWidth/innerHeight,t=Math.tan(ch*Math.PI/360);return Math.max(Jr.h*Zi*1.1,100*1.1/i)/(2*t)}var RS=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{ye.yaw=Math.round(ye.yaw/(2*Math.PI))*2*Math.PI,ye.tilt=0,Cn()});function _d(){Object.assign(ye,{tilt:0,yaw:0,dist:CS(),tx:0,ty:0}),Cn()}function IS(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=ln;Ki.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),Ki.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),Ki.lookAt(n,s,0)}var ih=!0,am=performance.now(),Mo=new Map;function Cn(){ih=!0}function ym(i){requestAnimationFrame(ym);let t=Fn((i-am)/1e3,0,.05);am=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(ln)){let r=ye[s]-ln[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(ln[s]+=r*e,n=!0):ln[s]=ye[s]}for(let s of an){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of Mo){let a=(i-r)/1800;a>=1?(Mo.delete(s),sr(s)):sr(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(ih=!0),n||ih){RS.style.transform=`rotate(${ln.yaw}rad) scaleY(${(.55+.45*Math.cos(ln.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(ye.yaw/2))<.02&&ye.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?"El norte ya est\xE1 arriba":"Poner el norte arriba y el mapa plano")}IS(),TS(),AS(),window.__rodFrame&&window.__rodFrame(),bo.render(Is,Ki),ih=n,Ce("#tilt").value=Math.round(ye.tilt*180/Math.PI),Ce("#yaw").value=Math.round(((ye.yaw*180/Math.PI+180)%360+360)%360-180)}}function Sm(){bo.setSize(innerWidth,innerHeight,!1),Ki.aspect=innerWidth/innerHeight,Ki.updateProjectionMatrix(),xm.resolution.set(innerWidth,innerHeight),vm.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),Cn()}addEventListener("resize",()=>{Sm(),Ze.length&&Ps()});Wn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;ye.yaw+=n*.0035}else i.ctrlKey?ye.dist=Fn(ye.dist*Math.exp(e*.01),6,400):ye.tilt=Fn(ye.tilt+e*.002,0,1.32);Cn()},{passive:!1});Wn.addEventListener("contextmenu",i=>i.preventDefault());var Ji=new Map,jn=null,er=0,hd=0,ud=0;var oh=null;Wn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),Ze.length&&setTimeout(Ps,50)),Wn.setPointerCapture(i.pointerId),Ji.set(i.pointerId,{x:i.clientX,y:i.clientY}),Ji.size===1&&(jn={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),Ji.size===2){let[t,e]=[...Ji.values()];er=Math.hypot(t.x-e.x,t.y-e.y),hd=Math.atan2(e.y-t.y,e.x-t.x),ud=(t.y+e.y)/2,oh={mode:null,rot:0,sc:0,tl:0},jn&&(jn.multi=!0)}xd()});Wn.addEventListener("pointermove",i=>{let t=Ji.get(i.pointerId);if(!t){ls={x:i.clientX,y:i.clientY},dd||(dd=requestAnimationFrame(LS));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,Ji.size===2){let[s,r]=[...Ji.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),l=(s.y+r.y)/2,c=o-hd;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI);let h=er?a-er:0,m=l-ud,d=oh||(oh={mode:null,rot:0,sc:0,tl:0});d.rot+=c,d.sc+=h,d.tl+=m,d.mode?d.mode==="zoom"&&Math.abs(d.rot)>.45&&(d.mode="rotate"):Math.abs(d.rot)>.3?d.mode="rotate":Math.abs(d.tl)>30&&Math.abs(d.sc)<18?d.mode="tilt":Math.abs(d.sc)>12&&(d.mode="zoom"),(d.mode==="zoom"||d.mode==="rotate")&&er&&(ye.dist=Fn(ye.dist*er/a,6,400)),d.mode==="rotate"&&(ye.yaw+=c,ln.yaw=ye.yaw),d.mode==="tilt"&&(ye.tilt=Fn(ye.tilt-m*.006,0,1.32),ln.tilt=ye.tilt),er=a,hd=o,ud=l,Cn();return}if(jn.moved+=Math.abs(e)+Math.abs(n),jn.rot||i.altKey)ye.yaw+=e*.005,ye.tilt=Fn(ye.tilt+n*.004,0,1.32),ln.yaw=ye.yaw,ln.tilt=ye.tilt;else{let s=2*ln.dist*Math.tan(ch*Math.PI/360)/innerHeight,r=Math.sin(ln.yaw),a=Math.cos(ln.yaw),o=1/Math.max(Math.cos(ln.tilt),.3);ye.tx=Fn(ye.tx-a*e*s+-r*n*s*o,-70,70),ye.ty=Fn(ye.ty-r*e*s+a*n*s*o,-70,70),ln.tx=ye.tx,ln.ty=ye.ty}Cn()});var Mm=i=>{let t=jn&&!jn.rot&&!jn.multi&&jn.moved<(jn.touch?12:6)&&i.type==="pointerup"&&Ji.size===1,e=jn&&jn.touch;Ji.delete(i.pointerId),er=0,oh=null,Ji.size||(jn=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};Wn.addEventListener("pointerup",Mm);Wn.addEventListener("pointercancel",Mm);Wn.addEventListener("dblclick",_d);addEventListener("keydown",i=>{i.key==="Alt"&&(Wn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(Wn.style.cursor="")});addEventListener("blur",()=>{Wn.style.cursor=""});var PS=new io,om=new Lt,ls=null,dd=0,nr=null;function LS(){if(dd=0,!ls||jn)return;om.set(ls.x/innerWidth*2-1,-(ls.y/innerHeight)*2+1),PS.setFromCamera(om,Ki);let i=null;if(i!==nr){let e=nr;nr=i,e&&sr(e),i&&sr(i),Cn()}let t=window.__rodHover&&window.__rodHover(ls.x,ls.y);if(t){tr.innerHTML=t,tr.style.display="block";let e=tr.offsetWidth,n=tr.offsetHeight;tr.style.left=Fn(ls.x+14,6,innerWidth-e-6)+"px",tr.style.top=Fn(ls.y+14,6,innerHeight-n-6)+"px",Wn.style.cursor="pointer"}else xd(),Wn.style.cursor=""}Wn.addEventListener("pointerleave",()=>{if(ls=null,nr){let i=nr;nr=null,sr(i),Cn()}xd()});var tr=Ce("#tip");function xd(){tr.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{md=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),gm()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{pd=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),hh()});Ce("#yaw").oninput=i=>{ye.yaw=+i.target.value*Math.PI/180,Cn()};Ce("#tilt").oninput=i=>{ye.tilt=+i.target.value*Math.PI/180,Cn()};Ce("#zin").onclick=()=>{ye.dist=Fn(ye.dist*.75,6,400),Cn()};Ce("#zout").onclick=()=>{ye.dist=Fn(ye.dist/.75,6,400),Cn()};Ce("#rst").onclick=_d;var lm=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],Ze=[],cm={},DS=i=>cm[i]||(cm[i]=new Ws({color:i}));function bm(i,t){i.og.children.forEach(e=>e.material=t?DS(t):dm)}function sr(i,t=0){let e=i.mat.emissive;i===nr?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function vd(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let c of i)e=Math.min(e,c.cx-c.size/2),n=Math.max(n,c.cx+c.size/2),s=Math.min(s,c.cy-c.size/2),r=Math.max(r,c.cy+c.size/2);let a=innerWidth/innerHeight,o=Math.tan(ch*Math.PI/360),l=i.length===1?Fn(i[0].size*3.2+14,14,120):Fn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(ye,{tx:(e+n)/2,ty:(s+r)/2,dist:l,tilt:t,yaw:0}),Cn()}var Rs=Ce("#q"),ai=Ce("#list"),qe=Ce("#mcs");function uh(i,t=!0){if(ai.style.display="none",Rs.value="",!i.sel){Ze.length>=6&&wm(Ze[0].o,!0);let e=new Set(Ze.map(s=>s.color)),n=lm.find(s=>!e.has(s))||lm[0];i.sel={o:i,color:n,tint:new fe(n).multiplyScalar(.12)},Ze.push(i.sel),bm(i,n)}qe.classList.contains("min")&&wo(!1),Mo.set(i,performance.now()),sr(i),t&&vd([i],Math.max(ye.tilt,.9)),Ps()}function wm(i,t){let e=Ze.indexOf(i.sel);e>=0&&Ze.splice(e,1),i.sel=null,bm(i,null),sr(i),Cn(),t||Ps()}function Em(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=Ze.map(h=>{let m=1e9,d=-1e9,g=1e9,x=-1e9;for(let T of h.o.rings)for(let p=0;p<T[0].length;p+=2)m=Math.min(m,T[0][p]),d=Math.max(d,T[0][p]),g=Math.min(g,T[0][p+1]),x=Math.max(x,T[0][p+1]);return{x0:m,x1:d,y0:g,y1:x}}),a=Math.max(...r.map(h=>Math.max(h.x1-h.x0,h.y1-h.y0))),o=(Math.min(e,n)-22)/a;Ze.forEach((h,m)=>{let d=r[m],g=(d.x0+d.x1)/2,x=(d.y0+d.y1)/2;s.beginPath();for(let T of h.o.rings)for(let p of T)for(let f=0;f<p.length;f+=2){let N=e/2+(p[f]-g)*o,U=n/2-(p[f+1]-x)*o;f?s.lineTo(N,U):s.moveTo(N,U),f===p.length-2&&s.closePath()}s.fillStyle=h.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=h.color,s.stroke()});let l=o/yS,c=[.5,1,2,5,10,20,50,100].find(h=>h*l>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,c*l,2),s.font="10px system-ui",s.fillText(c+" km",12+c*l,n-8)}function Ps(){if(!Ze.length){qe.innerHTML="",qe.style.display="none",wo(!1);return}if(qe.style.display="flex",innerWidth<=640){let e=Ce("#inf").getBoundingClientRect().bottom;qe.style.top=Math.round(e+8)+"px",qe.style.maxHeight=Math.max(110,Math.min(innerHeight*(Ce("#rc").classList.contains("min")?.7:.4),Ce("#rc").getBoundingClientRect().top-e-16))+"px",qe.style.width=""}else if(innerHeight<=500){let e=Ce("#inf").getBoundingClientRect().bottom;qe.style.top=Math.round(e+8)+"px",qe.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",qe.style.width="min(290px, 40vw)"}else qe.style.top="",qe.style.maxHeight="",qe.style.width="";let i=Ze.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${eh[s.pr]}</em></div><div class="mb">${cs(s.pop)} hab.</div><small>${Yr(s.area)} km\xB2 \xB7 ${Yr(s.pop/s.area)} hab./km\xB2 \xB7 n\xBA ${s.rankP} en poblaci\xF3n</small></div>`}).join("");if(Ze.length>1){let e=s=>Math.max(...Ze.map(s));if(i+='<div class="cmp"><div class="ct">Comparar <small>arrastra una ficha sobre otra para reordenar</small></div><canvas id="sil"></canvas><small class="sc">Siluetas superpuestas a la misma escala</small>'+[["Habitantes",s=>s.o.pop,cs],["Superficie (km\xB2)",s=>s.o.area,Yr],["Densidad (hab./km\xB2)",s=>s.o.pop/s.o.area,Yr]].map(([s,r,a])=>`<div class="cr"><span>${s}</span>${Ze.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),Ze.length===2){let[s,r]=Ze.map(c=>c.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],l=(c,h)=>(c>=h?c/h:h/c).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}</b> tiene ${l(a.pop,o.pop)}\xD7 los habitantes de <b>${o.name}</b> y ocupa ${l(a.area,o.area)}\xD7 ${a.area>=o.area?"su superficie":"menos superficie"}.</small>`}i+="</div>"}qe.innerHTML=i,qe.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),wm(Ze[+e.dataset.x].o)}),qe.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>vd([Ze[+e.dataset.i].o],Math.max(ye.tilt,.9)),e.onmouseenter=()=>{let n=Ze[+e.dataset.i].o;Mo.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=Ze.splice(s,1);Ze.splice(r,0,a),Ps();let o=Ce("#sil");o&&o.classList.add("flash")}}});let t=Ce("#sil");t&&Em(t)}Rs.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(Rs.value);return}let i=ad(Rs.value.trim());if(!i){ai.style.display="none";return}let t=[],e=[];for(let s of an){let r=ad(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);ai.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${cs(s.pop)}</em></li>`).join("")||'<li class="no">Sin resultados</li>',ai.style.display="block",ai.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>uh(n[+s.dataset.i])),ai._r=n});Rs.addEventListener("keydown",i=>{i.key==="Enter"&&ai._pick?ai._pick(0):i.key==="Enter"&&ai._r&&ai._r[0]&&uh(ai._r[0]),i.key==="Escape"&&(Rs.value="",ai.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==Rs&&Tm()});var hm=0;addEventListener("resize",()=>{clearTimeout(hm),hm=setTimeout(()=>{let i=Ce("#sil");i&&Em(i)},120)});var lh=null,fd=Ce("#chip");function NS(i,t,e=.8){lh={codes:new Set(i.map(n=>n.code)),label:t},an.forEach(n=>{n.inF=lh.codes.has(n.code),gd(n)}),fd.innerHTML=`<span>Mostrando: <b>${t}</b> \xB7 ${i.length} municipio${i.length===1?"":"s"}</span><button id="chx" title="Quitar filtro">\xD7</button>`,fd.style.display="flex",Ce("#chx").onclick=Tm,hh(),vd(i,e),i.slice(0,40).forEach(n=>Mo.set(n,performance.now()))}function Tm(){lh&&(lh=null,an.forEach(i=>{i.inF=!0,gd(i)}),fd.style.display="none",hh())}var US="prov";function FS(i){let t=[...an].sort((a,o)=>o.pop-a.pop),e=[...an].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[an.filter(a=>a.pr===s),mm[s]];if(n==="top")return s==="pop"?[t.slice(0,10),"10 con m\xE1s habitantes"]:[e.slice(0,10),"10 m\xE1s densos"];if(n==="low")return s==="pop"?[t.slice(-10),"10 con menos habitantes"]:[e.slice(-10),"10 menos densos"];if(n==="size")return[an.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${cs(+s)} o m\xE1s habitantes`:+s==0?`menos de ${cs(+r)} habitantes`:`${cs(+s)} \u2013 ${cs(+r-1)} habitantes`];if(n==="n50"){let a=0,o=0;for(let l of t)if(a+=l.pop,o++,a>=ld/2)break;return[t.slice(0,o),"la mitad de la poblaci\xF3n"]}return[[],""]}function OS(i){let[t,e]=FS(i);t.length&&NS(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{US=i.dataset.tab,Ce("#dbody").scrollTop=0});var ir=Ce("#rc"),sh=Ce("#mcstab");function Zr(i){ir.classList.toggle("min",i),Ce("#rcgrab span").textContent=i?"Mostrar controles":"Ocultar controles",Ze.length&&Ps()}function wo(i){qe.classList.toggle("min",i),qe.style.transform="",qe.style.opacity="",sh.classList.toggle("on",i&&Ze.length>0),i&&(sh.textContent=`\u25B8 ${Ze.length} ${Ze.length===1?"ficha":"fichas"}`,sh.style.top=qe.style.top||"124px")}function yd(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!dh.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y;!s.lock&&Math.hypot(o,l)>10&&(s.lock=Math.abs(o)>Math.abs(l)?"x":"y"),s.lock===n&&t&&t(o,l)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y,c=s.lock;s=null,e(c===n?o:0,c===n?l:0,c)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Ce("#rcgrab").onclick=()=>Zr(!ir.classList.contains("min"));innerWidth<=640&&Zr(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var Am=()=>innerWidth>640;yd(ir,{axis:"y",onEnd:(i,t)=>{if(!Am())if(t>40&&!ir.classList.contains("min")){let e=Ce("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&Zr(!0)}else t<-30&&ir.classList.contains("min")&&Zr(!1)}});yd(ir,{axis:"x",onEnd:i=>{Am()&&(i>50?Zr(!0):i<-30&&ir.classList.contains("min")&&Zr(!1))}});yd(qe,{axis:"x",onMove:i=>{i<0&&(qe.classList.add("sw"),qe.style.transform=`translateX(${i}px)`,qe.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{qe.classList.remove("sw"),i<-60?wo(!0):(qe.style.transform="",qe.style.opacity="")}});sh.onclick=()=>{wo(!1),Ps()};Ce("#dtoggle").onclick=()=>{let i=Ce("#dp").classList.toggle("open");Ce("#rc").classList.toggle("dopen",i),Ce("#dtoggle").textContent=i?dh.matches&&innerWidth<=640?"\u2190 Controles":"En directo \u25B4":"En directo: conectar datos de Renfe \u25BE",window.__rodCard&&window.__rodCard()};var dh=matchMedia("(max-width:640px), (max-height:500px)");function Cm(){let i=Ce("#leg");dh.matches?Ce("#rc").insertBefore(i,Ce("#dtoggle")):document.body.appendChild(i),Ze.length&&Ps()}dh.addEventListener("change",Cm);Cm();Sm();bS();_d();Object.assign(ln,ye);for(let i of an)i.z=.01;requestAnimationFrame(ym);im({scene:Is,camera:Ki,renderer:bo,goal:ye,cur:ln,invalidate:Cn,flyTo:(i,t,e,n)=>{Object.assign(ye,{tx:(i-yo)*Zi,ty:(t-So)*Zi,dist:e,tilt:n}),Cn()},K:Zi,CX:yo,CY:So,mcs:qe,q:Rs,list:ai,munis:an,select:uh,norm:ad,fmt:cs,clamp:Fn,mcsMin:wo});window.__app={scene:Is,renderer:bo,camera:Ki,munis:an,labs:ah,goal:ye,cur:ln,select:uh,get mode(){return pd}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
