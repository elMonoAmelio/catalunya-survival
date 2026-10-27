(()=>{var dp=0,Bu=1,fp=2;var yo=1,pp=2,Yr=3,Cs=0,Xn=1,Hi=2,Gi=0,Zr=1,ku=2,zu=3,Vu=4,mp=5;var tr=100,gp=101,_p=102,xp=103,vp=104,yp=200,Sp=201,Mp=202,bp=203,Hu=204,Gu=205,wp=206,Ep=207,Tp=208,Ap=209,Cp=210,Rp=211,Ip=212,Pp=213,Lp=214,Rl=0,Il=1,Pl=2,Ur=3,Ll=4,Dl=5,Nl=6,Ul=7,gc=0,Dp=1,Np=2,Ri=0,$u=1,Wu=2,Xu=3,qu=4,Yu=5,Zu=6,Ju=7;var Ku=300,Rs=301,er=302,_c=303,xc=304,So=306,Fl=1e3,Fi=1001,Ol=1002,Mn=1003,Up=1004;var Mo=1005;var In=1006,vc=1007;var Is=1008;var ni=1009,ju=1010,Qu=1011,Jr=1012,yc=1013,Ii=1014,_i=1015,Pi=1016,Sc=1017,Mc=1018,Kr=1020,td=35902,ed=35899,nd=1021,id=1022,xi=1023,Bi=1026,Ps=1027,bc=1028,wc=1029,Ls=1030,Ec=1031;var Tc=1033,bo=33776,wo=33777,Eo=33778,To=33779,Ac=35840,Cc=35841,Rc=35842,Ic=35843,Pc=36196,Lc=37492,Dc=37496,Nc=37488,Uc=37489,Ao=37490,Fc=37491,Oc=37808,Bc=37809,kc=37810,zc=37811,Vc=37812,Hc=37813,Gc=37814,$c=37815,Wc=37816,Xc=37817,qc=37818,Yc=37819,Zc=37820,Jc=37821,Kc=36492,jc=36494,Qc=36495,th=36283,eh=36284,Co=36285,nh=36286;var Ba=2300,Bl=2301,Al=2302,Eu=2303,Tu=2400,Au=2401,Cu=2402;var Fp=3200;var ih=0,Op=1,hs="",li="srgb",ka="srgb-linear",za="linear",$e="srgb";var Cl=7680;var Bp=519,kp=512,zp=513,Vp=514,sh=515,Hp=516,Gp=517,rh=518,$p=519,sd=35044;var rd="300 es",Ti=2e3,Fr=2001;function Hg(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Va(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wp(){let i=Va("canvas");return i.style.display="block",i}var Cf={},Or=null;function Ha(...i){let t="THREE."+i.shift();Or?Or("log",t,...i):console.log(t,...i)}function Xp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function de(...i){i=Xp(i);let t="THREE."+i.shift();if(Or)Or("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function me(...i){i=Xp(i);let t="THREE."+i.shift();if(Or)Or("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function qs(...i){let t=i.join(" ");t in Cf||(Cf[t]=!0,de(...i))}function qp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Yp={[Rl]:Il,[Pl]:Nl,[Ll]:Ul,[Ur]:Dl,[Il]:Rl,[Nl]:Pl,[Ul]:Ll,[Dl]:Ur},ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rf=1234567,Na=Math.PI/180,Br=180/Math.PI;function Oi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fn[i&255]+Fn[i>>8&255]+Fn[i>>16&255]+Fn[i>>24&255]+"-"+Fn[t&255]+Fn[t>>8&255]+"-"+Fn[t>>16&15|64]+Fn[t>>24&255]+"-"+Fn[e&63|128]+Fn[e>>8&255]+"-"+Fn[e>>16&255]+Fn[e>>24&255]+Fn[n&255]+Fn[n>>8&255]+Fn[n>>16&255]+Fn[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function ad(i,t){return(i%t+t)%t}function $g(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Wg(i,t,e){return i!==t?(e-i)/(t-i):0}function Ua(i,t,e){return(1-e)*i+e*t}function Xg(i,t,e,n){return Ua(i,t,1-Math.exp(-e*n))}function qg(i,t=1){return t-Math.abs(ad(i,t*2)-t)}function Yg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Zg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Jg(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Kg(i,t){return i+Math.random()*(t-i)}function jg(i){return i*(.5-Math.random())}function Qg(i){i!==void 0&&(Rf=i);let t=Rf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function t0(i){return i*Na}function e0(i){return i*Br}function n0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function i0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function s0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function r0(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),m=r((t-n)/2),d=a((t-n)/2),_=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*m,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*m,o*c);break;case"ZXZ":i.set(l*m,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*x,l*_,o*c);break;case"YXY":i.set(l*_,o*u,l*x,o*c);break;case"ZYZ":i.set(l*x,l*_,o*u,o*c);break;default:de("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var od={DEG2RAD:Na,RAD2DEG:Br,generateUUID:Oi,clamp:Se,euclideanModulo:ad,mapLinear:$g,inverseLerp:Wg,lerp:Ua,damp:Xg,pingpong:qg,smoothstep:Yg,smootherstep:Zg,randInt:Jg,randFloat:Kg,randFloatSpread:jg,seededRandom:Qg,degToRad:t0,radToDeg:e0,isPowerOfTwo:n0,ceilPowerOfTwo:i0,floorPowerOfTwo:s0,setQuaternionFromProperEuler:r0,normalize:qe,denormalize:Ei},Ft=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],m=n[s+3],d=r[a+0],_=r[a+1],x=r[a+2],A=r[a+3];if(m!==A||l!==d||c!==_||u!==x){let p=l*d+c*_+u*x+m*A;p<0&&(d=-d,_=-_,x=-x,A=-A,p=-p);let f=1-o;if(p<.9995){let F=Math.acos(p),O=Math.sin(F);f=Math.sin(f*F)/O,o=Math.sin(o*F)/O,l=l*f+d*o,c=c*f+_*o,u=u*f+x*o,m=m*f+A*o}else{l=l*f+d*o,c=c*f+_*o,u=u*f+x*o,m=m*f+A*o;let F=1/Math.sqrt(l*l+c*c+u*u+m*m);l*=F,c*=F,u*=F,m*=F}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],m=r[a],d=r[a+1],_=r[a+2],x=r[a+3];return t[e]=o*x+u*m+l*_-c*d,t[e+1]=l*x+u*d+c*m-o*_,t[e+2]=c*x+u*_+o*d-l*m,t[e+3]=u*x-o*m-l*d-c*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),m=o(r/2),d=l(n/2),_=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*u*m+c*_*x,this._y=c*_*m-d*u*x,this._z=c*u*x+d*_*m,this._w=c*u*m-d*_*x;break;case"YXZ":this._x=d*u*m+c*_*x,this._y=c*_*m-d*u*x,this._z=c*u*x-d*_*m,this._w=c*u*m+d*_*x;break;case"ZXY":this._x=d*u*m-c*_*x,this._y=c*_*m+d*u*x,this._z=c*u*x+d*_*m,this._w=c*u*m-d*_*x;break;case"ZYX":this._x=d*u*m-c*_*x,this._y=c*_*m+d*u*x,this._z=c*u*x-d*_*m,this._w=c*u*m+d*_*x;break;case"YZX":this._x=d*u*m+c*_*x,this._y=c*_*m+d*u*x,this._z=c*u*x-d*_*m,this._w=c*u*m-d*_*x;break;case"XZY":this._x=d*u*m-c*_*x,this._y=c*_*m-d*u*x,this._z=c*u*x+d*_*m,this._w=c*u*m+d*_*x;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],m=e[10],d=n+o+m;if(d>0){let _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(u-l)*_,this._y=(r-c)*_,this._z=(a-s)*_}else if(n>o&&n>m){let _=2*Math.sqrt(1+n-o-m);this._w=(u-l)/_,this._x=.25*_,this._y=(s+a)/_,this._z=(r+c)/_}else if(o>m){let _=2*Math.sqrt(1+o-n-m);this._w=(r-c)/_,this._x=(s+a)/_,this._y=.25*_,this._z=(l+u)/_}else{let _=2*Math.sqrt(1+m-n-o);this._w=(a-s)/_,this._x=(r+c)/_,this._y=(l+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(If.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(If.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),m=2*(r*n-a*e);return this.x=e+l*c+a*m-o*u,this.y=n+l*u+o*c-r*m,this.z=s+l*m+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qh.copy(this).projectOnVector(t),this.sub(Qh)}reflect(t){return this.sub(Qh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qh=new $,If=new zi,ye=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],m=n[7],d=n[2],_=n[5],x=n[8],A=s[0],p=s[3],f=s[6],F=s[1],O=s[4],T=s[7],M=s[2],D=s[5],H=s[8];return r[0]=a*A+o*F+l*M,r[3]=a*p+o*O+l*D,r[6]=a*f+o*T+l*H,r[1]=c*A+u*F+m*M,r[4]=c*p+u*O+m*D,r[7]=c*f+u*T+m*H,r[2]=d*A+_*F+x*M,r[5]=d*p+_*O+x*D,r[8]=d*f+_*T+x*H,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],m=u*a-o*c,d=o*l-u*r,_=c*r-a*l,x=e*m+n*d+s*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/x;return t[0]=m*A,t[1]=(s*c-u*n)*A,t[2]=(o*n-s*a)*A,t[3]=d*A,t[4]=(u*e-s*l)*A,t[5]=(s*r-o*e)*A,t[6]=_*A,t[7]=(n*l-c*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tu.makeScale(t,e)),this}rotate(t){return qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tu.makeRotation(-t)),this}translate(t,e){return qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},tu=new ye,Pf=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lf=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a0(){let i={enabled:!0,workingColorSpace:ka,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===$e&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$e&&(s.r=Nr(s.r),s.g=Nr(s.g),s.b=Nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hs?za:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ka]:{primaries:t,whitePoint:n,transfer:za,toXYZ:Pf,fromXYZ:Lf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:n,transfer:$e,toXYZ:Pf,fromXYZ:Lf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),i}var Ne=a0();function ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xr,kl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{xr===void 0&&(xr=Va("canvas")),xr.width=t.width,xr.height=t.height;let s=xr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=xr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Va("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ls(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ls(e[n]/255)*255):e[n]=ls(e[n]);return{data:e,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},o0=0,kr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(eu(s[a].image)):r.push(eu(s[a]))}else r=eu(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function eu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}var l0=0,nu=new $,Qn=class i extends ki{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Fi,s=Fi,r=In,a=Is,o=xi,l=ni,c=i.DEFAULT_ANISOTROPY,u=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Oi(),this.name="",this.source=new kr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nu).x}get height(){return this.source.getSize(nu).y}get depth(){return this.source.getSize(nu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){de(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){de(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ku)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fl:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case Ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fl:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case Ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=Ku;Qn.DEFAULT_ANISOTROPY=1;var We=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],m=l[8],d=l[1],_=l[5],x=l[9],A=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(m-A)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(m+A)<.1&&Math.abs(x+p)<.1&&Math.abs(c+_+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let O=(c+1)/2,T=(_+1)/2,M=(f+1)/2,D=(u+d)/4,H=(m+A)/4,E=(x+p)/4;return O>T&&O>M?O<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(O),s=D/n,r=H/n):T>M?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=D/s,r=E/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=H/r,s=E/r),this.set(n,s,r,e),this}let F=Math.sqrt((p-x)*(p-x)+(m-A)*(m-A)+(d-u)*(d-u));return Math.abs(F)<.001&&(F=1),this.x=(p-x)/F,this.y=(m-A)/F,this.z=(d-u)/F,this.w=Math.acos((c+_+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zl=class extends ki{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Qn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new kr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends zl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ga=class extends Qn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vl=class extends Qn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ve=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,u,m,d,_,x,A,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,m,d,_,x,A,p)}set(t,e,n,s,r,a,o,l,c,u,m,d,_,x,A,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=m,f[14]=d,f[3]=_,f[7]=x,f[11]=A,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/vr.setFromMatrixColumn(t,0).length(),r=1/vr.setFromMatrixColumn(t,1).length(),a=1/vr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let d=a*u,_=a*m,x=o*u,A=o*m;e[0]=l*u,e[4]=-l*m,e[8]=c,e[1]=_+x*c,e[5]=d-A*c,e[9]=-o*l,e[2]=A-d*c,e[6]=x+_*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,_=l*m,x=c*u,A=c*m;e[0]=d+A*o,e[4]=x*o-_,e[8]=a*c,e[1]=a*m,e[5]=a*u,e[9]=-o,e[2]=_*o-x,e[6]=A+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,_=l*m,x=c*u,A=c*m;e[0]=d-A*o,e[4]=-a*m,e[8]=x+_*o,e[1]=_+x*o,e[5]=a*u,e[9]=A-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,_=a*m,x=o*u,A=o*m;e[0]=l*u,e[4]=x*c-_,e[8]=d*c+A,e[1]=l*m,e[5]=A*c+d,e[9]=_*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,_=a*c,x=o*l,A=o*c;e[0]=l*u,e[4]=A-d*m,e[8]=x*m+_,e[1]=m,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=_*m+x,e[10]=d-A*m}else if(t.order==="XZY"){let d=a*l,_=a*c,x=o*l,A=o*c;e[0]=l*u,e[4]=-m,e[8]=c*u,e[1]=d*m+A,e[5]=a*u,e[9]=_*m-x,e[2]=x*m-_,e[6]=o*u,e[10]=A*m+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(c0,t,h0)}lookAt(t,e,n){let s=this.elements;return ai.subVectors(t,e),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),_s.crossVectors(n,ai),_s.lengthSq()===0&&(Math.abs(n.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),_s.crossVectors(n,ai)),_s.normalize(),tl.crossVectors(ai,_s),s[0]=_s.x,s[4]=tl.x,s[8]=ai.x,s[1]=_s.y,s[5]=tl.y,s[9]=ai.y,s[2]=_s.z,s[6]=tl.z,s[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],m=n[5],d=n[9],_=n[13],x=n[2],A=n[6],p=n[10],f=n[14],F=n[3],O=n[7],T=n[11],M=n[15],D=s[0],H=s[4],E=s[8],L=s[12],V=s[1],W=s[5],tt=s[9],st=s[13],Y=s[2],K=s[6],ot=s[10],lt=s[14],Mt=s[3],ct=s[7],yt=s[11],vt=s[15];return r[0]=a*D+o*V+l*Y+c*Mt,r[4]=a*H+o*W+l*K+c*ct,r[8]=a*E+o*tt+l*ot+c*yt,r[12]=a*L+o*st+l*lt+c*vt,r[1]=u*D+m*V+d*Y+_*Mt,r[5]=u*H+m*W+d*K+_*ct,r[9]=u*E+m*tt+d*ot+_*yt,r[13]=u*L+m*st+d*lt+_*vt,r[2]=x*D+A*V+p*Y+f*Mt,r[6]=x*H+A*W+p*K+f*ct,r[10]=x*E+A*tt+p*ot+f*yt,r[14]=x*L+A*st+p*lt+f*vt,r[3]=F*D+O*V+T*Y+M*Mt,r[7]=F*H+O*W+T*K+M*ct,r[11]=F*E+O*tt+T*ot+M*yt,r[15]=F*L+O*st+T*lt+M*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],m=t[6],d=t[10],_=t[14],x=t[3],A=t[7],p=t[11],f=t[15],F=l*_-c*d,O=o*_-c*m,T=o*d-l*m,M=a*_-c*u,D=a*d-l*u,H=a*m-o*u;return e*(A*F-p*O+f*T)-n*(x*F-p*M+f*D)+s*(x*O-A*M+f*H)-r*(x*T-A*D+p*H)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],m=t[9],d=t[10],_=t[11],x=t[12],A=t[13],p=t[14],f=t[15],F=e*o-n*a,O=e*l-s*a,T=e*c-r*a,M=n*l-s*o,D=n*c-r*o,H=s*c-r*l,E=u*A-m*x,L=u*p-d*x,V=u*f-_*x,W=m*p-d*A,tt=m*f-_*A,st=d*f-_*p,Y=F*st-O*tt+T*W+M*V-D*L+H*E;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/Y;return t[0]=(o*st-l*tt+c*W)*K,t[1]=(s*tt-n*st-r*W)*K,t[2]=(A*H-p*D+f*M)*K,t[3]=(d*D-m*H-_*M)*K,t[4]=(l*V-a*st-c*L)*K,t[5]=(e*st-s*V+r*L)*K,t[6]=(p*T-x*H-f*O)*K,t[7]=(u*H-d*T+_*O)*K,t[8]=(a*tt-o*V+c*E)*K,t[9]=(n*V-e*tt-r*E)*K,t[10]=(x*D-A*T+f*F)*K,t[11]=(m*T-u*D-_*F)*K,t[12]=(o*L-a*W-l*E)*K,t[13]=(e*W-n*L+s*E)*K,t[14]=(A*O-x*M-p*F)*K,t[15]=(u*M-m*O+d*F)*K,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,m=o+o,d=r*c,_=r*u,x=r*m,A=a*u,p=a*m,f=o*m,F=l*c,O=l*u,T=l*m,M=n.x,D=n.y,H=n.z;return s[0]=(1-(A+f))*M,s[1]=(_+T)*M,s[2]=(x-O)*M,s[3]=0,s[4]=(_-T)*D,s[5]=(1-(d+f))*D,s[6]=(p+F)*D,s[7]=0,s[8]=(x+O)*H,s[9]=(p-F)*H,s[10]=(1-(d+A))*H,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=vr.set(s[0],s[1],s[2]).length(),o=vr.set(s[4],s[5],s[6]).length(),l=vr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Si.copy(this);let c=1/a,u=1/o,m=1/l;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=u,Si.elements[5]*=u,Si.elements[6]*=u,Si.elements[8]*=m,Si.elements[9]*=m,Si.elements[10]*=m,e.setFromRotationMatrix(Si),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Ti,l=!1){let c=this.elements,u=2*r/(e-t),m=2*r/(n-s),d=(e+t)/(e-t),_=(n+s)/(n-s),x,A;if(l)x=r/(a-r),A=a*r/(a-r);else if(o===Ti)x=-(a+r)/(a-r),A=-2*a*r/(a-r);else if(o===Fr)x=-a/(a-r),A=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=m,c[9]=_,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=A,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ti,l=!1){let c=this.elements,u=2/(e-t),m=2/(n-s),d=-(e+t)/(e-t),_=-(n+s)/(n-s),x,A;if(l)x=1/(a-r),A=a/(a-r);else if(o===Ti)x=-2/(a-r),A=-(a+r)/(a-r);else if(o===Fr)x=-1/(a-r),A=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=m,c[9]=0,c[13]=_,c[2]=0,c[6]=0,c[10]=x,c[14]=A,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},vr=new $,Si=new Ve,c0=new $(0,0,0),h0=new $(1,1,1),_s=new $,tl=new $,ai=new $,Df=new Ve,Nf=new zi,cs=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],m=s[2],d=s[6],_=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,_),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Df.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Df,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nf.setFromEuler(this),this.setFromQuaternion(Nf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cs.DEFAULT_ORDER="XYZ";var zr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},u0=0,Uf=new $,yr=new zi,is=new Ve,el=new $,Ta=new $,d0=new $,f0=new zi,Ff=new $(1,0,0),Of=new $(0,1,0),Bf=new $(0,0,1),kf={type:"added"},p0={type:"removed"},Sr={type:"childadded",child:null},iu={type:"childremoved",child:null},bn=class i extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new $,e=new cs,n=new zi,s=new $(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new ye}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yr.setFromAxisAngle(t,e),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,e){return yr.setFromAxisAngle(t,e),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(Ff,t)}rotateY(t){return this.rotateOnAxis(Of,t)}rotateZ(t){return this.rotateOnAxis(Bf,t)}translateOnAxis(t,e){return Uf.copy(t).applyQuaternion(this.quaternion),this.position.add(Uf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ff,t)}translateY(t){return this.translateOnAxis(Of,t)}translateZ(t){return this.translateOnAxis(Bf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?el.copy(t):el.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(Ta,el,this.up):is.lookAt(el,Ta,this.up),this.quaternion.setFromRotationMatrix(is),s&&(is.extractRotation(s.matrixWorld),yr.setFromRotationMatrix(is),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(me("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kf),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null):me("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(p0),iu.child=t,this.dispatchEvent(iu),iu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),is.multiply(t.parent.matrixWorld)),t.applyMatrix4(is),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kf),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,t,d0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,f0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),m=a(t.shapes),d=a(t.skeletons),_=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),m.length>0&&(n.shapes=m),d.length>0&&(n.skeletons=d),_.length>0&&(n.animations=_),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bn.DEFAULT_UP=new $(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ai=class extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},m0={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let A of t.hand.values()){let p=e.getJointPose(A,n),f=this._getHandJoint(c,A);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],d=u.position.distanceTo(m.position),_=.02,x=.005;c.inputState.pinching&&d>_+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=_-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(m0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ai;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},nl={h:0,s:0,l:0};function su(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ue=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ne.workingColorSpace){if(t=ad(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=su(a,r,t+1/3),this.g=su(a,r,t),this.b=su(a,r,t-1/3)}return Ne.colorSpaceToWorking(this,s),this}setStyle(t,e=li){function n(r){r!==void 0&&parseFloat(r)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:de("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=li){let n=Zp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return Ne.workingToColorSpace(On.copy(this),t),Math.round(Se(On.r*255,0,255))*65536+Math.round(Se(On.g*255,0,255))*256+Math.round(Se(On.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ne.workingColorSpace){Ne.workingToColorSpace(On.copy(this),e);let n=On.r,s=On.g,r=On.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=u<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Ne.workingColorSpace){return Ne.workingToColorSpace(On.copy(this),e),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=li){Ne.workingToColorSpace(On.copy(this),t);let e=On.r,n=On.g,s=On.b;return t!==li?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xs),this.setHSL(xs.h+t,xs.s+e,xs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xs),t.getHSL(nl);let n=Ua(xs.h,nl.h,e),s=Ua(xs.s,nl.s,e),r=Ua(xs.l,nl.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},On=new ue;ue.NAMES=Zp;var $a=class extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cs,this.environmentIntensity=1,this.environmentRotation=new cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Mi=new $,ss=new $,ru=new $,rs=new $,Mr=new $,br=new $,zf=new $,au=new $,ou=new $,lu=new $,cu=new We,hu=new We,uu=new We,Ms=class i{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mi.subVectors(t,e),s.cross(Mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mi.subVectors(s,e),ss.subVectors(n,e),ru.subVectors(t,e);let a=Mi.dot(Mi),o=Mi.dot(ss),l=Mi.dot(ru),c=ss.dot(ss),u=ss.dot(ru),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let d=1/m,_=(c*l-o*u)*d,x=(a*u-o*l)*d;return r.set(1-_-x,x,_)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,rs)===null?!1:rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,rs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,rs.x),l.addScaledVector(a,rs.y),l.addScaledVector(o,rs.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return cu.setScalar(0),hu.setScalar(0),uu.setScalar(0),cu.fromBufferAttribute(t,e),hu.fromBufferAttribute(t,n),uu.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(cu,r.x),a.addScaledVector(hu,r.y),a.addScaledVector(uu,r.z),a}static isFrontFacing(t,e,n,s){return Mi.subVectors(n,e),ss.subVectors(t,e),Mi.cross(ss).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),Mi.cross(ss).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Mr.subVectors(s,n),br.subVectors(r,n),au.subVectors(t,n);let l=Mr.dot(au),c=br.dot(au);if(l<=0&&c<=0)return e.copy(n);ou.subVectors(t,s);let u=Mr.dot(ou),m=br.dot(ou);if(u>=0&&m<=u)return e.copy(s);let d=l*m-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Mr,a);lu.subVectors(t,r);let _=Mr.dot(lu),x=br.dot(lu);if(x>=0&&_<=x)return e.copy(r);let A=_*c-l*x;if(A<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(br,o);let p=u*x-_*m;if(p<=0&&m-u>=0&&_-x>=0)return zf.subVectors(r,s),o=(m-u)/(m-u+(_-x)),e.copy(s).addScaledVector(zf,o);let f=1/(p+A+d);return a=A*f,o=d*f,e.copy(n).addScaledVector(Mr,a).addScaledVector(br,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wn=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bi):bi.fromBufferAttribute(r,a),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),il.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),il.copy(n.boundingBox)),il.applyMatrix4(t.matrixWorld),this.union(il)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Aa),sl.subVectors(this.max,Aa),wr.subVectors(t.a,Aa),Er.subVectors(t.b,Aa),Tr.subVectors(t.c,Aa),vs.subVectors(Er,wr),ys.subVectors(Tr,Er),Hs.subVectors(wr,Tr);let e=[0,-vs.z,vs.y,0,-ys.z,ys.y,0,-Hs.z,Hs.y,vs.z,0,-vs.x,ys.z,0,-ys.x,Hs.z,0,-Hs.x,-vs.y,vs.x,0,-ys.y,ys.x,0,-Hs.y,Hs.x,0];return!du(e,wr,Er,Tr,sl)||(e=[1,0,0,0,1,0,0,0,1],!du(e,wr,Er,Tr,sl))?!1:(rl.crossVectors(vs,ys),e=[rl.x,rl.y,rl.z],du(e,wr,Er,Tr,sl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(as[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),as[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),as[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),as[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),as[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),as[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),as[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),as[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(as),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},as=[new $,new $,new $,new $,new $,new $,new $,new $],bi=new $,il=new Wn,wr=new $,Er=new $,Tr=new $,vs=new $,ys=new $,Hs=new $,Aa=new $,sl=new $,rl=new $,Gs=new $;function du(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gs.fromArray(i,r);let o=s.x*Math.abs(Gs.x)+s.y*Math.abs(Gs.y)+s.z*Math.abs(Gs.z),l=t.dot(Gs),c=e.dot(Gs),u=n.dot(Gs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var pn=new $,al=new Ft,g0=0,Ye=class extends ki{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:g0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sd,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)al.fromBufferAttribute(this,e),al.applyMatrix3(t),this.setXY(e,al.x,al.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix3(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Wa=class extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xa=class extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var on=class extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},_0=new Wn,Ca=new $,fu=new $,ei=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ca.subVectors(t,this.center);let e=Ca.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ca,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ca.copy(t.center).add(fu)),this.expandByPoint(Ca.copy(t.center).sub(fu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},x0=0,gi=new Ve,pu=new bn,Ar=new $,oi=new Wn,Ra=new Wn,Sn=new $,ln=class i extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hg(t)?Xa:Wa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ye().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,e,n){return gi.makeTranslation(t,e,n),this.applyMatrix4(gi),this}scale(t,e,n){return gi.makeScale(t,e,n),this.applyMatrix4(gi),this}lookAt(t){return pu.lookAt(t),pu.updateMatrix(),this.applyMatrix4(pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new on(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];oi.setFromBufferAttribute(r),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&me('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let n=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ra.setFromBufferAttribute(o),this.morphTargetsRelative?(Sn.addVectors(oi.min,Ra.min),oi.expandByPoint(Sn),Sn.addVectors(oi.max,Ra.max),oi.expandByPoint(Sn)):(oi.expandByPoint(Ra.min),oi.expandByPoint(Ra.max))}oi.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Sn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Sn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Sn.fromBufferAttribute(o,c),l&&(Ar.fromBufferAttribute(t,c),Sn.add(Ar)),s=Math.max(s,n.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&me('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){me("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ye(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let E=0;E<n.count;E++)o[E]=new $,l[E]=new $;let c=new $,u=new $,m=new $,d=new Ft,_=new Ft,x=new Ft,A=new $,p=new $;function f(E,L,V){c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,L),m.fromBufferAttribute(n,V),d.fromBufferAttribute(r,E),_.fromBufferAttribute(r,L),x.fromBufferAttribute(r,V),u.sub(c),m.sub(c),_.sub(d),x.sub(d);let W=1/(_.x*x.y-x.x*_.y);isFinite(W)&&(A.copy(u).multiplyScalar(x.y).addScaledVector(m,-_.y).multiplyScalar(W),p.copy(m).multiplyScalar(_.x).addScaledVector(u,-x.x).multiplyScalar(W),o[E].add(A),o[L].add(A),o[V].add(A),l[E].add(p),l[L].add(p),l[V].add(p))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let E=0,L=F.length;E<L;++E){let V=F[E],W=V.start,tt=V.count;for(let st=W,Y=W+tt;st<Y;st+=3)f(t.getX(st+0),t.getX(st+1),t.getX(st+2))}let O=new $,T=new $,M=new $,D=new $;function H(E){M.fromBufferAttribute(s,E),D.copy(M);let L=o[E];O.copy(L),O.sub(M.multiplyScalar(M.dot(L))).normalize(),T.crossVectors(D,L);let W=T.dot(l[E])<0?-1:1;a.setXYZW(E,O.x,O.y,O.z,W)}for(let E=0,L=F.length;E<L;++E){let V=F[E],W=V.start,tt=V.count;for(let st=W,Y=W+tt;st<Y;st+=3)H(t.getX(st+0)),H(t.getX(st+1)),H(t.getX(st+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,_=n.count;d<_;d++)n.setXYZ(d,0,0,0);let s=new $,r=new $,a=new $,o=new $,l=new $,c=new $,u=new $,m=new $;if(t)for(let d=0,_=t.count;d<_;d+=3){let x=t.getX(d+0),A=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,p),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,_=e.count;d<_;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Sn.fromBufferAttribute(t,e),Sn.normalize(),t.setXYZ(e,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,m=o.normalized,d=new c.constructor(l.length*u),_=0,x=0;for(let A=0,p=l.length;A<p;A++){o.isInterleavedBufferAttribute?_=l[A]*o.data.stride+o.offset:_=l[A]*u;for(let f=0;f<u;f++)d[x++]=c[_++]}return new Ye(d,u,m)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,m=c.length;u<m;u++){let d=c[u],_=t(d,n);l.push(_)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let m=0,d=c.length;m<d;m++){let _=c[m];u.push(_.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],m=r[c];for(let d=0,_=m.length;d<_;d++)u.push(m[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sd,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},$n=new $,Ci=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$n.fromBufferAttribute(this,e),$n.applyMatrix4(t),this.setXYZ(e,$n.x,$n.y,$n.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$n.fromBufferAttribute(this,e),$n.applyNormalMatrix(t),this.setXYZ(e,$n.x,$n.y,$n.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$n.fromBufferAttribute(this,e),$n.transformDirection(t),this.setXYZ(e,$n.x,$n.y,$n.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ei(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ei(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ei(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ei(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ha("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ha("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},mu=new $,v0=new $,y0=new ye,wi=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=mu.subVectors(n,e).cross(v0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(mu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||y0.getNormalMatrix(t),s=this.coplanarPoint(mu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},S0=0,Vi=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=Zr,this.side=Cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hu,this.blendDst=Gu,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cl,this.stencilZFail=Cl,this.stencilZPass=Cl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){de(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){de(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ue().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new wi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ft().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var os=new $,gu=new $,ol=new $,ll=new $,Ys=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,os)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=os.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(os.copy(this.origin).addScaledVector(this.direction,e),os.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){gu.copy(t).add(e).multiplyScalar(.5),ol.copy(e).sub(t).normalize(),ll.copy(this.origin).sub(gu);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ol),o=ll.dot(this.direction),l=-ll.dot(ol),c=ll.lengthSq(),u=Math.abs(1-a*a),m,d,_,x;if(u>0)if(m=a*l-o,d=a*o-l,x=r*u,m>=0)if(d>=-x)if(d<=x){let A=1/u;m*=A,d*=A,_=m*(m+a*d+2*o)+d*(a*m+d+2*l)+c}else d=r,m=Math.max(0,-(a*d+o)),_=-m*m+d*(d+2*l)+c;else d=-r,m=Math.max(0,-(a*d+o)),_=-m*m+d*(d+2*l)+c;else d<=-x?(m=Math.max(0,-(-a*r+o)),d=m>0?-r:Math.min(Math.max(-r,-l),r),_=-m*m+d*(d+2*l)+c):d<=x?(m=0,d=Math.min(Math.max(-r,-l),r),_=d*(d+2*l)+c):(m=Math.max(0,-(a*r+o)),d=m>0?r:Math.min(Math.max(-r,-l),r),_=-m*m+d*(d+2*l)+c);else d=a>0?-r:r,m=Math.max(0,-(a*d+o)),_=-m*m+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(gu).addScaledVector(ol,d),_}intersectSphere(t,e){if(t.radius<0)return null;os.subVectors(t.center,this.origin);let n=os.dot(this.direction),s=os.dot(os)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-d.z)*m,l=(t.max.z-d.z)*m):(o=(t.max.z-d.z)*m,l=(t.min.z-d.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,os)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,m=t.x-a.x,d=t.y-a.y,_=t.z-a.z,x=e.x-a.x,A=e.y-a.y,p=e.z-a.z,f=n.x-a.x,F=n.y-a.y,O=n.z-a.z,T=Math.abs(l),M=Math.abs(c),D=Math.abs(u),H,E,L,V,W,tt,st,Y,K,ot,lt,Mt;if(T>=M&&T>=D?(L=l,tt=m,K=x,Mt=f,l>=0?(H=c,E=u,V=d,W=_,st=A,Y=p,ot=F,lt=O):(H=u,E=c,V=_,W=d,st=p,Y=A,ot=O,lt=F)):M>=D?(L=c,tt=d,K=A,Mt=F,c>=0?(H=u,E=l,V=_,W=m,st=p,Y=x,ot=O,lt=f):(H=l,E=u,V=m,W=_,st=x,Y=p,ot=f,lt=O)):(L=u,tt=_,K=p,Mt=O,u>=0?(H=l,E=c,V=m,W=d,st=x,Y=A,ot=f,lt=F):(H=c,E=l,V=d,W=m,st=A,Y=x,ot=F,lt=f)),L===0)return null;let ct=H/L,yt=E/L,vt=1/L,Ht=V-ct*tt,Xt=W-yt*tt,ke=st-ct*K,be=Y-yt*K,Le=ot-ct*Mt,ft=lt-yt*Mt,_t=Le*be-ft*ke,At=Ht*ft-Xt*Le,Qt=ke*Xt-be*Ht;if(s){if(_t<0||At<0||Qt<0)return null}else if((_t<0||At<0||Qt<0)&&(_t>0||At>0||Qt>0))return null;let Gt=_t+At+Qt;if(Gt===0)return null;let le=vt*(_t*tt+At*K+Qt*Mt);return(Gt>0?le<0:le>0)?null:this.at(le/Gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zs=class extends Vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Vf=new Ve,$s=new Ys,cl=new ei,Hf=new $,hl=new $,ul=new $,dl=new $,_u=new $,fl=new $,Gf=new $,pl=new $,wn=class extends bn{constructor(t=new ln,e=new Zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){fl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],m=r[l];u!==0&&(_u.fromBufferAttribute(m,t),a?fl.addScaledVector(_u,u):fl.addScaledVector(_u.sub(e),u))}e.add(fl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(r),$s.copy(t.ray).recast(t.near),!(cl.containsPoint($s.origin)===!1&&($s.intersectSphere(cl,Hf)===null||$s.origin.distanceToSquared(Hf)>(t.far-t.near)**2))&&(Vf.copy(r).invert(),$s.copy(t.ray).applyMatrix4(Vf),!(n.boundingBox!==null&&$s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$s)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,m=r.attributes.normal,d=r.groups,_=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,A=d.length;x<A;x++){let p=d[x],f=a[p.materialIndex],F=Math.max(p.start,_.start),O=Math.min(o.count,Math.min(p.start+p.count,_.start+_.count));for(let T=F,M=O;T<M;T+=3){let D=o.getX(T),H=o.getX(T+1),E=o.getX(T+2);s=ml(this,f,t,n,c,u,m,D,H,E),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,_.start),A=Math.min(o.count,_.start+_.count);for(let p=x,f=A;p<f;p+=3){let F=o.getX(p),O=o.getX(p+1),T=o.getX(p+2);s=ml(this,a,t,n,c,u,m,F,O,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,A=d.length;x<A;x++){let p=d[x],f=a[p.materialIndex],F=Math.max(p.start,_.start),O=Math.min(l.count,Math.min(p.start+p.count,_.start+_.count));for(let T=F,M=O;T<M;T+=3){let D=T,H=T+1,E=T+2;s=ml(this,f,t,n,c,u,m,D,H,E),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,_.start),A=Math.min(l.count,_.start+_.count);for(let p=x,f=A;p<f;p+=3){let F=p,O=p+1,T=p+2;s=ml(this,a,t,n,c,u,m,F,O,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function M0(i,t,e,n,s,r,a,o){let l;if(t.side===Xn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Cs,o),l===null)return null;pl.copy(o),pl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(pl);return c<e.near||c>e.far?null:{distance:c,point:pl.clone(),object:i}}function ml(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,hl),i.getVertexPosition(l,ul),i.getVertexPosition(c,dl);let u=M0(i,t,e,n,hl,ul,dl,Gf);if(u){let m=new $;Ms.getBarycoord(Gf,hl,ul,dl,m),s&&(u.uv=Ms.getInterpolatedAttribute(s,o,l,c,m,new Ft)),r&&(u.uv1=Ms.getInterpolatedAttribute(r,o,l,c,m,new Ft)),a&&(u.normal=Ms.getInterpolatedAttribute(a,o,l,c,m,new $),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new $,materialIndex:0};Ms.getNormal(hl,ul,dl,d.normal),u.face=d,u.barycoord=m}return u}var qa=class extends Qn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Mn,u=Mn,m,d){super(null,a,o,l,c,u,s,r,m,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ya=class extends Ye{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Cr=new Ve,$f=new Ve,gl=[],Wf=new Wn,b0=new Ve,Ia=new wn,Pa=new ei,Za=class extends wn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ya(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,b0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cr),Wf.copy(t.boundingBox).applyMatrix4(Cr),this.boundingBox.union(Wf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cr),Pa.copy(t.boundingSphere).applyMatrix4(Cr),this.boundingSphere.union(Pa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ia.geometry=this.geometry,Ia.material=this.material,Ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(n),t.ray.intersectsSphere(Pa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cr),$f.multiplyMatrices(n,Cr),Ia.matrixWorld=$f,Ia.raycast(t,gl);for(let a=0,o=gl.length;a<o;a++){let l=gl[a];l.instanceId=r,l.object=this,e.push(l)}gl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ya(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qa(new Float32Array(s*this.count),s,this.count,bc,_i));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ws=new ei,w0=new Ft(.5,.5),_l=new $,Hr=class{constructor(t=new wi,e=new wi,n=new wi,s=new wi,r=new wi,a=new wi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ti,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],m=r[5],d=r[6],_=r[7],x=r[8],A=r[9],p=r[10],f=r[11],F=r[12],O=r[13],T=r[14],M=r[15];if(s[0].setComponents(c-a,_-u,f-x,M-F).normalize(),s[1].setComponents(c+a,_+u,f+x,M+F).normalize(),s[2].setComponents(c+o,_+m,f+A,M+O).normalize(),s[3].setComponents(c-o,_-m,f-A,M-O).normalize(),n)s[4].setComponents(l,d,p,T).normalize(),s[5].setComponents(c-l,_-d,f-p,M-T).normalize();else if(s[4].setComponents(c-l,_-d,f-p,M-T).normalize(),e===Ti)s[5].setComponents(c+l,_+d,f+p,M+T).normalize();else if(e===Fr)s[5].setComponents(l,d,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(t){Ws.center.set(0,0,0);let e=w0.distanceTo(t.center);return Ws.radius=.7071067811865476+e,Ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(_l.x=s.normal.x>0?t.max.x:t.min.x,_l.y=s.normal.y>0?t.max.y:t.min.y,_l.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_l)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Js=class extends Vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Gl=new $,$l=new $,Xf=new Ve,La=new Ys,xl=new ei,xu=new $,qf=new $,Wl=class extends bn{constructor(t=new ln,e=new Js){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Gl.fromBufferAttribute(e,s-1),$l.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Gl.distanceTo($l);t.setAttribute("lineDistance",new on(n,1))}else de("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(s),xl.radius+=r,t.ray.intersectsSphere(xl)===!1)return;Xf.copy(s).invert(),La.copy(t.ray).applyMatrix4(Xf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let _=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let A=_,p=x-1;A<p;A+=c){let f=u.getX(A),F=u.getX(A+1),O=vl(this,t,La,l,f,F,A);O&&e.push(O)}if(this.isLineLoop){let A=u.getX(x-1),p=u.getX(_),f=vl(this,t,La,l,A,p,x-1);f&&e.push(f)}}else{let _=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let A=_,p=x-1;A<p;A+=c){let f=vl(this,t,La,l,A,A+1,A);f&&e.push(f)}if(this.isLineLoop){let A=vl(this,t,La,l,x-1,_,x-1);A&&e.push(A)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vl(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Gl.fromBufferAttribute(o,s),$l.fromBufferAttribute(o,r),e.distanceSqToSegment(Gl,$l,xu,qf)>n)return;xu.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(xu);if(!(c<t.near||c>t.far))return{distance:c,point:qf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ja=class extends Wl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Xl=class extends Vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Yf=new Ve,Ru=new Ys,yl=new ei,Sl=new $,Ks=class extends bn{constructor(t=new ln,e=new Xl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yl.copy(n.boundingSphere),yl.applyMatrix4(s),yl.radius+=r,t.ray.intersectsSphere(yl)===!1)return;Yf.copy(s).invert(),Ru.copy(t.ray).applyMatrix4(Yf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,m=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),_=Math.min(c.count,a.start+a.count);for(let x=d,A=_;x<A;x++){let p=c.getX(x);Sl.fromBufferAttribute(m,p),Zf(Sl,p,l,s,t,e,this)}}else{let d=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let x=d,A=_;x<A;x++)Sl.fromBufferAttribute(m,x),Zf(Sl,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zf(i,t,e,n,s,r,a){let o=Ru.distanceSqToPoint(i);if(o<e){let l=new $;Ru.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ka=class extends Qn{constructor(t=[],e=Rs,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var bs=class extends Qn{constructor(t,e,n=Ii,s,r,a,o=Mn,l=Mn,c,u=Bi,m=1){if(u!==Bi&&u!==Ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:m};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ql=class extends bs{constructor(t,e=Ii,n=Rs,s,r,a=Mn,o=Mn,l,c=Bi){let u={width:t,height:t,depth:1},m=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ja=class extends Qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Gr=class i extends ln{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],m=[],d=0,_=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(u,3)),this.setAttribute("uv",new on(m,2));function x(A,p,f,F,O,T,M,D,H,E,L){let V=T/H,W=M/E,tt=T/2,st=M/2,Y=D/2,K=H+1,ot=E+1,lt=0,Mt=0,ct=new $;for(let yt=0;yt<ot;yt++){let vt=yt*W-st;for(let Ht=0;Ht<K;Ht++){let Xt=Ht*V-tt;ct[A]=Xt*F,ct[p]=vt*O,ct[f]=Y,c.push(ct.x,ct.y,ct.z),ct[A]=0,ct[p]=0,ct[f]=D>0?1:-1,u.push(ct.x,ct.y,ct.z),m.push(Ht/H),m.push(1-yt/E),lt+=1}}for(let yt=0;yt<E;yt++)for(let vt=0;vt<H;vt++){let Ht=d+vt+K*yt,Xt=d+vt+K*(yt+1),ke=d+(vt+1)+K*(yt+1),be=d+(vt+1)+K*yt;l.push(Ht,Xt,be),l.push(Xt,ke,be),Mt+=6}o.addGroup(_,Mt,L),_+=Mt,d+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Qa=class i extends ln{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],m=[],d=[],_=[],x=0,A=[],p=n/2,f=0;F(),a===!1&&(t>0&&O(!0),e>0&&O(!1)),this.setIndex(u),this.setAttribute("position",new on(m,3)),this.setAttribute("normal",new on(d,3)),this.setAttribute("uv",new on(_,2));function F(){let T=new $,M=new $,D=0,H=(e-t)/n;for(let E=0;E<=r;E++){let L=[],V=E/r,W=V*(e-t)+t;for(let tt=0;tt<=s;tt++){let st=tt/s,Y=st*l+o,K=Math.sin(Y),ot=Math.cos(Y);M.x=W*K,M.y=-V*n+p,M.z=W*ot,m.push(M.x,M.y,M.z),T.set(K,H,ot).normalize(),d.push(T.x,T.y,T.z),_.push(st,1-V),L.push(x++)}A.push(L)}for(let E=0;E<s;E++)for(let L=0;L<r;L++){let V=A[L][E],W=A[L+1][E],tt=A[L+1][E+1],st=A[L][E+1];(t>0||L!==0)&&(u.push(V,W,st),D+=3),(e>0||L!==r-1)&&(u.push(W,tt,st),D+=3)}c.addGroup(f,D,0),f+=D}function O(T){let M=x,D=new Ft,H=new $,E=0,L=T===!0?t:e,V=T===!0?1:-1;for(let tt=1;tt<=s;tt++)m.push(0,p*V,0),d.push(0,V,0),_.push(.5,.5),x++;let W=x;for(let tt=0;tt<=s;tt++){let Y=tt/s*l+o,K=Math.cos(Y),ot=Math.sin(Y);H.x=L*ot,H.y=p*V,H.z=L*K,m.push(H.x,H.y,H.z),d.push(0,V,0),D.x=K*.5+.5,D.y=ot*.5*V+.5,_.push(D.x,D.y),x++}for(let tt=0;tt<s;tt++){let st=M+tt,Y=W+tt;T===!0?u.push(Y,Y+1,st):u.push(Y+1,Y,st),E+=3}c.addGroup(f,E,T===!0?1:2),f+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){de("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,_=(a-u)/d;return(s+_)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Ft:new $);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new $,s=[],r=[],a=[],o=new $,l=new Ve;for(let _=0;_<=t;_++){let x=_/t;s[_]=this.getTangentAt(x,new $)}r[0]=new $,a[0]=new $;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),m=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let _=1;_<=t;_++){if(r[_]=r[_-1].clone(),a[_]=a[_-1].clone(),o.crossVectors(s[_-1],s[_]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Se(s[_-1].dot(s[_]),-1,1));r[_].applyMatrix4(l.makeRotationAxis(o,x))}a[_].crossVectors(s[_],r[_])}if(e===!0){let _=Math.acos(Se(r[0].dot(r[t]),-1,1));_/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(_=-_);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],_*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},$r=class extends ci{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Ft){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),m=Math.sin(this.aRotation),d=l-this.aX,_=c-this.aY;l=d*u-_*m+this.aX,c=d*m+_*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Yl=class extends $r{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ld(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,m){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,_=(o-a)/u-(l-a)/(u+m)+(l-o)/m;d*=u,_*=u,s(a,o,d,_)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Jf=new $,Kf=new $,vu=new ld,yu=new ld,Su=new ld,Zl=class extends ci{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new $){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Kf.subVectors(s[0],s[1]).add(s[0]),c=Kf);let m=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Jf.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Jf),this.curveType==="centripetal"||this.curveType==="chordal"){let _=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(m),_),A=Math.pow(m.distanceToSquared(d),_),p=Math.pow(d.distanceToSquared(u),_);A<1e-4&&(A=1),x<1e-4&&(x=A),p<1e-4&&(p=A),vu.initNonuniformCatmullRom(c.x,m.x,d.x,u.x,x,A,p),yu.initNonuniformCatmullRom(c.y,m.y,d.y,u.y,x,A,p),Su.initNonuniformCatmullRom(c.z,m.z,d.z,u.z,x,A,p)}else this.curveType==="catmullrom"&&(vu.initCatmullRom(c.x,m.x,d.x,u.x,this.tension),yu.initCatmullRom(c.y,m.y,d.y,u.y,this.tension),Su.initCatmullRom(c.z,m.z,d.z,u.z,this.tension));return n.set(vu.calc(l),yu.calc(l),Su.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new $().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function jf(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function E0(i,t){let e=1-i;return e*e*t}function T0(i,t){return 2*(1-i)*i*t}function A0(i,t){return i*i*t}function Fa(i,t,e,n){return E0(i,t)+T0(i,e)+A0(i,n)}function C0(i,t){let e=1-i;return e*e*e*t}function R0(i,t){let e=1-i;return 3*e*e*i*t}function I0(i,t){return 3*(1-i)*i*i*t}function P0(i,t){return i*i*i*t}function Oa(i,t,e,n,s){return C0(i,t)+R0(i,e)+I0(i,n)+P0(i,s)}var to=class extends ci{constructor(t=new Ft,e=new Ft,n=new Ft,s=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ft){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Oa(t,s.x,r.x,a.x,o.x),Oa(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jl=class extends ci{constructor(t=new $,e=new $,n=new $,s=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new $){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Oa(t,s.x,r.x,a.x,o.x),Oa(t,s.y,r.y,a.y,o.y),Oa(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},eo=class extends ci{constructor(t=new Ft,e=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kl=class extends ci{constructor(t=new $,e=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new $){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},no=class extends ci{constructor(t=new Ft,e=new Ft,n=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ft){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Fa(t,s.x,r.x,a.x),Fa(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jl=class extends ci{constructor(t=new $,e=new $,n=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Fa(t,s.x,r.x,a.x),Fa(t,s.y,r.y,a.y),Fa(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},io=class extends ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ft){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return n.set(jf(o,l.x,c.x,u.x,m.x),jf(o,l.y,c.y,u.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ft().fromArray(s))}return this}},Iu=Object.freeze({__proto__:null,ArcCurve:Yl,CatmullRomCurve3:Zl,CubicBezierCurve:to,CubicBezierCurve3:Jl,EllipseCurve:$r,LineCurve:eo,LineCurve3:Kl,QuadraticBezierCurve:no,QuadraticBezierCurve3:jl,SplineCurve:io}),Ql=class extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Iu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Iu[s.type]().fromJSON(s))}return this}},js=class extends Ql{constructor(t){super(),this.type="Path",this.currentPoint=new Ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new eo(this.currentPoint.clone(),new Ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new no(this.currentPoint.clone(),new Ft(t,e),new Ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new to(this.currentPoint.clone(),new Ft(t,e),new Ft(n,s),new Ft(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new io(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new $r(t,e,n,s,r,a,o,l);if(this.curves.length>0){let m=c.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Wr=class extends js{constructor(t){super(t),this.uuid=Oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new js().fromJSON(s))}return this}};function L0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Jp(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=O0(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,m=l;for(let d=e;d<s;d+=e){let _=i[d],x=i[d+1];_<o&&(o=_),x<l&&(l=x),_>u&&(u=_),x>m&&(m=x)}c=Math.max(u-o,m-l),c=c!==0?32767/c:0}return so(r,a,e,o,l,c,0),a}function Jp(i,t,e,n,s){let r;if(s===Y0(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Qf(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Qf(a/n|0,i[a],i[a+1],r);return r&&Xr(r,r.next)&&(ao(r),r=r.next),r}function Qs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Xr(e,e.next)||nn(e.prev,e,e.next)===0)){if(ao(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function so(i,t,e,n,s,r,a){if(!i)return;!a&&r&&H0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?N0(i,n,s,r):D0(i)){t.push(l.i,i.i,c.i),ao(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=U0(Qs(i),t),so(i,t,e,n,s,r,2)):a===2&&F0(i,t,e,n,s,r):so(Qs(i),t,e,n,s,r,1);break}}}function D0(i){let t=i.prev,e=i,n=i.next;if(nn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),m=Math.min(o,l,c),d=Math.max(s,r,a),_=Math.max(o,l,c),x=n.next;for(;x!==t;){if(x.x>=u&&x.x<=d&&x.y>=m&&x.y<=_&&Da(s,o,r,l,a,c,x.x,x.y)&&nn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function N0(i,t,e,n){let s=i.prev,r=i,a=i.next;if(nn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,m=r.y,d=a.y,_=Math.min(o,l,c),x=Math.min(u,m,d),A=Math.max(o,l,c),p=Math.max(u,m,d),f=Pu(_,x,t,e,n),F=Pu(A,p,t,e,n),O=i.prevZ,T=i.nextZ;for(;O&&O.z>=f&&T&&T.z<=F;){if(O.x>=_&&O.x<=A&&O.y>=x&&O.y<=p&&O!==s&&O!==a&&Da(o,u,l,m,c,d,O.x,O.y)&&nn(O.prev,O,O.next)>=0||(O=O.prevZ,T.x>=_&&T.x<=A&&T.y>=x&&T.y<=p&&T!==s&&T!==a&&Da(o,u,l,m,c,d,T.x,T.y)&&nn(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;O&&O.z>=f;){if(O.x>=_&&O.x<=A&&O.y>=x&&O.y<=p&&O!==s&&O!==a&&Da(o,u,l,m,c,d,O.x,O.y)&&nn(O.prev,O,O.next)>=0)return!1;O=O.prevZ}for(;T&&T.z<=F;){if(T.x>=_&&T.x<=A&&T.y>=x&&T.y<=p&&T!==s&&T!==a&&Da(o,u,l,m,c,d,T.x,T.y)&&nn(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function U0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Xr(n,s)&&jp(n,e,e.next,s)&&ro(n,s)&&ro(s,n)&&(t.push(n.i,e.i,s.i),ao(e),ao(e.next),e=i=s),e=e.next}while(e!==i);return Qs(e)}function F0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&W0(a,o)){let l=Qp(a,o);a=Qs(a,a.next),l=Qs(l,l.next),so(a,t,e,n,s,r,0),so(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function O0(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Jp(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push($0(c))}s.sort(B0);for(let r=0;r<s.length;r++)e=k0(s[r],e);return e}function B0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function k0(i,t){let e=z0(i,t);if(!e)return t;let n=Qp(e,i);return Qs(n,n.next),Qs(e,e.next)}function z0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Xr(i,e))return e;do{if(Xr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let m=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=n&&m>r&&(r=m,a=e.x<e.next.x?e:e.next,m===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Kp(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let m=Math.abs(s-e.y)/(n-e.x);ro(e,i)&&(m<u||m===u&&(e.x>a.x||e.x===a.x&&V0(a,e)))&&(a=e,u=m)}e=e.next}while(e!==o);return a}function V0(i,t){return nn(i.prev,i,t.prev)<0&&nn(t.next,i,i.next)<0}function H0(i,t,e,n){let s=i;do s.z===0&&(s.z=Pu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,G0(s)}function G0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Pu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function $0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Kp(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Da(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Kp(i,t,e,n,s,r,a,o)}function W0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!X0(i,t)&&(ro(i,t)&&ro(t,i)&&q0(i,t)&&(nn(i.prev,i,t.prev)||nn(i,t.prev,t))||Xr(i,t)&&nn(i.prev,i,i.next)>0&&nn(t.prev,t,t.next)>0)}function nn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Xr(i,t){return i.x===t.x&&i.y===t.y}function jp(i,t,e,n){let s=bl(nn(i,t,e)),r=bl(nn(i,t,n)),a=bl(nn(e,n,i)),o=bl(nn(e,n,t));return!!(s!==r&&a!==o||s===0&&Ml(i,e,t)||r===0&&Ml(i,n,t)||a===0&&Ml(e,i,n)||o===0&&Ml(e,t,n))}function Ml(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function bl(i){return i>0?1:i<0?-1:0}function X0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&jp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ro(i,t){return nn(i.prev,i,i.next)<0?nn(i,t,i.next)>=0&&nn(i,i.prev,t)>=0:nn(i,t,i.prev)<0||nn(i,i.next,t)<0}function q0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Qp(i,t){let e=Lu(i.i,i.x,i.y),n=Lu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Qf(i,t,e,n){let s=Lu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ao(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Lu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Y0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Du=class{static triangulate(t,e,n=2){return L0(t,e,n)}},Xs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];tp(t),ep(n,t);let a=t.length;e.forEach(tp);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,ep(n,e[l]);let o=Du.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function tp(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ep(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var oo=class i extends ln{constructor(t=new Wr([new Ft(.5,.5),new Ft(-.5,.5),new Ft(-.5,-.5),new Ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new on(s,3)),this.setAttribute("uv",new on(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,m=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,_=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:_-.1,A=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,F=e.UVGenerator!==void 0?e.UVGenerator:Z0,O,T=!1,M,D,H,E;if(f){O=f.getSpacedPoints(u),T=!0,d=!1;let at=f.isCatmullRomCurve3?f.closed:!1;M=f.computeFrenetFrames(u,at),D=new $,H=new $,E=new $}d||(p=0,_=0,x=0,A=0);let L=o.extractPoints(c),V=L.shape,W=L.holes;if(!Xs.isClockWise(V)){V=V.reverse();for(let at=0,wt=W.length;at<wt;at++){let G=W[at];Xs.isClockWise(G)&&(W[at]=G.reverse())}}function st(at){let G=10000000000000001e-36,Tt=at[0];for(let Nt=1;Nt<=at.length;Nt++){let oe=Nt%at.length,se=at[oe],he=se.x-Tt.x,fe=se.y-Tt.y,z=he*he+fe*fe,Re=Math.max(Math.abs(se.x),Math.abs(se.y),Math.abs(Tt.x),Math.abs(Tt.y)),pe=G*Re*Re;if(z<=pe){at.splice(oe,1),Nt--;continue}Tt=se}}st(V),W.forEach(st);let Y=W.length,K=V;for(let at=0;at<Y;at++){let wt=W[at];V=V.concat(wt)}function ot(at,wt,G){return wt||me("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(wt,G)}let lt=V.length;function Mt(at,wt,G){let Tt,Nt,oe,se=at.x-wt.x,he=at.y-wt.y,fe=G.x-at.x,z=G.y-at.y,Re=se*se+he*he,pe=se*z-he*fe;if(Math.abs(pe)>Number.EPSILON){let P=Math.sqrt(Re),y=Math.sqrt(fe*fe+z*z),X=wt.x-he/P,rt=wt.y+se/P,ht=G.x-z/y,Rt=G.y+fe/y,Dt=((ht-X)*z-(Rt-rt)*fe)/(se*z-he*fe);Tt=X+se*Dt-at.x,Nt=rt+he*Dt-at.y;let ut=Tt*Tt+Nt*Nt;if(ut<=2)return new Ft(Tt,Nt);oe=Math.sqrt(ut/2)}else{let P=!1;se>Number.EPSILON?fe>Number.EPSILON&&(P=!0):se<-Number.EPSILON?fe<-Number.EPSILON&&(P=!0):Math.sign(he)===Math.sign(z)&&(P=!0),P?(Tt=-he,Nt=se,oe=Math.sqrt(Re)):(Tt=se,Nt=he,oe=Math.sqrt(Re/2))}return new Ft(Tt/oe,Nt/oe)}let ct=[];for(let at=0,wt=K.length,G=wt-1,Tt=at+1;at<wt;at++,G++,Tt++)G===wt&&(G=0),Tt===wt&&(Tt=0),ct[at]=Mt(K[at],K[G],K[Tt]);let yt=[],vt,Ht=ct.concat();for(let at=0,wt=Y;at<wt;at++){let G=W[at];vt=[];for(let Tt=0,Nt=G.length,oe=Nt-1,se=Tt+1;Tt<Nt;Tt++,oe++,se++)oe===Nt&&(oe=0),se===Nt&&(se=0),vt[Tt]=Mt(G[Tt],G[oe],G[se]);yt.push(vt),Ht=Ht.concat(vt)}let Xt;if(p===0)Xt=Xs.triangulateShape(K,W);else{let at=[],wt=[];for(let G=0;G<p;G++){let Tt=G/p,Nt=_*Math.cos(Tt*Math.PI/2),oe=x*Math.sin(Tt*Math.PI/2)+A;for(let se=0,he=K.length;se<he;se++){let fe=ot(K[se],ct[se],oe);At(fe.x,fe.y,-Nt),Tt===0&&at.push(fe)}for(let se=0,he=Y;se<he;se++){let fe=W[se];vt=yt[se];let z=[];for(let Re=0,pe=fe.length;Re<pe;Re++){let P=ot(fe[Re],vt[Re],oe);At(P.x,P.y,-Nt),Tt===0&&z.push(P)}Tt===0&&wt.push(z)}}Xt=Xs.triangulateShape(at,wt)}let ke=Xt.length,be=x+A;for(let at=0;at<lt;at++){let wt=d?ot(V[at],Ht[at],be):V[at];T?(H.copy(M.normals[0]).multiplyScalar(wt.x),D.copy(M.binormals[0]).multiplyScalar(wt.y),E.copy(O[0]).add(H).add(D),At(E.x,E.y,E.z)):At(wt.x,wt.y,0)}for(let at=1;at<=u;at++)for(let wt=0;wt<lt;wt++){let G=d?ot(V[wt],Ht[wt],be):V[wt];T?(H.copy(M.normals[at]).multiplyScalar(G.x),D.copy(M.binormals[at]).multiplyScalar(G.y),E.copy(O[at]).add(H).add(D),At(E.x,E.y,E.z)):At(G.x,G.y,m/u*at)}for(let at=p-1;at>=0;at--){let wt=at/p,G=_*Math.cos(wt*Math.PI/2),Tt=x*Math.sin(wt*Math.PI/2)+A;for(let Nt=0,oe=K.length;Nt<oe;Nt++){let se=ot(K[Nt],ct[Nt],Tt);At(se.x,se.y,m+G)}for(let Nt=0,oe=W.length;Nt<oe;Nt++){let se=W[Nt];vt=yt[Nt];for(let he=0,fe=se.length;he<fe;he++){let z=ot(se[he],vt[he],Tt);T?At(z.x,z.y+O[u-1].y,O[u-1].x+G):At(z.x,z.y,m+G)}}}Le(),ft();function Le(){let at=s.length/3;if(d){let wt=0,G=lt*wt;for(let Tt=0;Tt<ke;Tt++){let Nt=Xt[Tt];Qt(Nt[2]+G,Nt[1]+G,Nt[0]+G)}wt=u+p*2,G=lt*wt;for(let Tt=0;Tt<ke;Tt++){let Nt=Xt[Tt];Qt(Nt[0]+G,Nt[1]+G,Nt[2]+G)}}else{for(let wt=0;wt<ke;wt++){let G=Xt[wt];Qt(G[2],G[1],G[0])}for(let wt=0;wt<ke;wt++){let G=Xt[wt];Qt(G[0]+lt*u,G[1]+lt*u,G[2]+lt*u)}}n.addGroup(at,s.length/3-at,0)}function ft(){let at=s.length/3,wt=0;_t(K,wt),wt+=K.length;for(let G=0,Tt=W.length;G<Tt;G++){let Nt=W[G];_t(Nt,wt),wt+=Nt.length}n.addGroup(at,s.length/3-at,1)}function _t(at,wt){let G=at.length;for(;--G>=0;){let Tt=G,Nt=G-1;Nt<0&&(Nt=at.length-1);for(let oe=0,se=u+p*2;oe<se;oe++){let he=lt*oe,fe=lt*(oe+1),z=wt+Tt+he,Re=wt+Nt+he,pe=wt+Nt+fe,P=wt+Tt+fe;Gt(z,Re,pe,P)}}}function At(at,wt,G){l.push(at),l.push(wt),l.push(G)}function Qt(at,wt,G){le(at),le(wt),le(G);let Tt=s.length/3,Nt=F.generateTopUV(n,s,Tt-3,Tt-2,Tt-1);ae(Nt[0]),ae(Nt[1]),ae(Nt[2])}function Gt(at,wt,G,Tt){le(at),le(wt),le(Tt),le(wt),le(G),le(Tt);let Nt=s.length/3,oe=F.generateSideWallUV(n,s,Nt-6,Nt-3,Nt-2,Nt-1);ae(oe[0]),ae(oe[1]),ae(oe[3]),ae(oe[1]),ae(oe[2]),ae(oe[3])}function le(at){s.push(l[at*3+0]),s.push(l[at*3+1]),s.push(l[at*3+2])}function ae(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return J0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Iu[s.type]().fromJSON(s)),new i(n,t.options)}},Z0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new Ft(r,a),new Ft(o,l),new Ft(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],m=t[n*3+2],d=t[s*3],_=t[s*3+1],x=t[s*3+2],A=t[r*3],p=t[r*3+1],f=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Ft(a,1-l),new Ft(c,1-m),new Ft(d,1-x),new Ft(A,1-f)]:[new Ft(o,1-l),new Ft(u,1-m),new Ft(_,1-x),new Ft(p,1-f)]}};function J0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var lo=class i extends ln{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,m=t/o,d=e/l,_=[],x=[],A=[],p=[];for(let f=0;f<u;f++){let F=f*d-a;for(let O=0;O<c;O++){let T=O*m-r;x.push(T,-F,0),A.push(0,0,1),p.push(O/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let F=0;F<o;F++){let O=F+c*f,T=F+c*(f+1),M=F+1+c*(f+1),D=F+1+c*f;_.push(O,T,D),_.push(T,M,D)}this.setIndex(_),this.setAttribute("position",new on(x,3)),this.setAttribute("normal",new on(A,3)),this.setAttribute("uv",new on(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var co=class extends ln{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new $,r=new $;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let m=l[c],d=m.start,_=m.count;for(let x=d,A=d+_;x<A;x+=3)for(let p=0;p<3;p++){let f=o.getX(x+p),F=o.getX(x+(p+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,F),np(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let u=3*o+c,m=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,m),np(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new on(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function np(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function nr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ip(s))s.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ip(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function kn(i){let t={};for(let e=0;e<i.length;e++){let n=nr(i[e]);for(let s in n)t[s]=n[s]}return t}function ip(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function K0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}var Ro={clone:nr,merge:kn},j0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends Vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j0,this.fragmentShader=Q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=K0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"v3":this.uniforms[n].value=new $().fromArray(s.value);break;case"v4":this.uniforms[n].value=new We().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ye().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},tc=class extends En{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ho=class extends Vi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=gc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ec=class extends Vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},nc=class extends Vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Rr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Mu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ws=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ic=class extends ws{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tu,endingEnd:Tu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Au:r=t,o=2*e-n;break;case Cu:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Au:a=t,l=2*n-e;break;case Cu:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,m=this._offsetNext,d=this._weightPrev,_=this._weightNext,x=(n-e)/(s-e),A=x*x,p=A*x,f=-d*p+2*d*A-d*x,F=(1+d)*p+(-1.5-2*d)*A+(-.5+d)*x+1,O=(-1-_)*p+(1.5+_)*A+.5*x,T=_*p-_*A;for(let M=0;M!==o;++M)r[M]=f*a[u+M]+F*a[c+M]+O*a[l+M]+T*a[m+M];return r}},sc=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),m=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*m+a[l+d]*u;return r}},rc=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ac=class extends ws{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,m=this.outTangents;if(!u||!m){let x=(n-e)/(s-e),A=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*A+a[l+p]*x;return r}let d=o*2,_=t-1;for(let x=0;x!==o;++x){let A=a[c+x],p=a[l+x],f=_*d+x*2,F=m[f],O=m[f+1],T=t*d+x*2,M=u[T],D=u[T+1],H=e_(n,e,F,M,s);r[x]=tm(H,A,O,D,p)}return r}};function tm(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function t_(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function e_(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=tm(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=t_(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var hi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rr(e,this.TimeBufferType),this.values=Rr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Rr(t.times,Array),values:Rr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Mu(t.settings)&&(n.settings={inTangents:Rr(t.settings.inTangents,Array),outTangents:Rr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ac(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ba:e=this.InterpolantFactoryMethodDiscrete;break;case Bl:e=this.InterpolantFactoryMethodLinear;break;case Al:e=this.InterpolantFactoryMethodSmooth;break;case Eu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return de("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ba;case this.InterpolantFactoryMethodLinear:return Bl;case this.InterpolantFactoryMethodSmooth:return Al;case this.InterpolantFactoryMethodBezier:return Eu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Mu(this.settings)&&(sp(this.settings.inTangents,t),sp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(me("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(me("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){me("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){me("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Gg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){me("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Al,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let m=o*n,d=m-n,_=m+n;for(let x=0;x!==n;++x){let A=e[m+x];if(A!==e[d+x]||A!==e[_+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let m=o*n,d=a*n;for(let _=0;_!==n;++_)e[d+_]=e[m+_]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Mu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function sp(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}hi.prototype.ValueTypeName="";hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=Bl;var Es=class extends hi{constructor(t,e,n){super(t,e,n)}};Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Ba;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var oc=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}};oc.prototype.ValueTypeName="color";var lc=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}};lc.prototype.ValueTypeName="number";var cc=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)zi.slerpFlat(r,0,a,c-o,a,c,l);return r}},uo=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new cc(this.times,this.values,this.getValueSize(),t)}};uo.prototype.ValueTypeName="quaternion";uo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends hi{constructor(t,e,n){super(t,e,n)}};Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Ba;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var hc=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}};hc.prototype.ValueTypeName="vector";var uc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,m){return c.push(u,m),this},this.removeHandler=function(u){let m=c.indexOf(u);return m!==-1&&c.splice(m,2),this},this.getHandler=function(u){for(let m=0,d=c.length;m<d;m+=2){let _=c[m],x=c[m+1];if(_.global&&(_.lastIndex=0),_.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},em=new uc,dc=class{constructor(t){this.manager=t!==void 0?t:em,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};dc.DEFAULT_MATERIAL_NAME="__DEFAULT";var fo=class extends bn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},po=class extends fo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},bu=new Ve,rp=new $,ap=new $,fc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;rp.setFromMatrixPosition(t.matrixWorld),e.position.copy(rp),ap.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ap),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){bu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(bu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Fr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(bu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wl=new $,El=new zi,Ui=new $,mo=class extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wl,El,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wl,El,Ui.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(wl,El,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wl,El,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ss=new $,op=new Ft,lp=new Ft,Bn=class extends mo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ss.x,Ss.y).multiplyScalar(-t/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-t/Ss.z)}getViewSize(t,e){return this.getViewBounds(t,op,lp),e.subVectors(lp,op)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Na*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var qr=class extends mo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Nu=class extends fc{constructor(){super(new qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},go=class extends fo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new Nu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var _o=class extends ln{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Ir=-90,Pr=1,pc=class extends bn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bn(Ir,Pr,t,e);s.layers=this.layers,this.add(s);let r=new Bn(Ir,Pr,t,e);r.layers=this.layers,this.add(r);let a=new Bn(Ir,Pr,t,e);a.layers=this.layers,this.add(a);let o=new Bn(Ir,Pr,t,e);o.layers=this.layers,this.add(o);let l=new Bn(Ir,Pr,t,e);l.layers=this.layers,this.add(l);let c=new Bn(Ir,Pr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,m=t.getRenderTarget(),d=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(m,d,_),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},mc=class extends Bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var hd="\\[\\]\\.:\\/",n_=new RegExp("["+hd+"]","g"),ud="[^"+hd+"]",i_="[^"+hd.replace("\\.","")+"]",s_=/((?:WC+[\/:])*)/.source.replace("WC",ud),r_=/(WCOD+)?/.source.replace("WCOD",i_),a_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ud),o_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ud),l_=new RegExp("^"+s_+r_+a_+o_+"$"),c_=["material","materials","bones","map"],Uu=class{constructor(t,e,n){let s=n||Qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Qe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(n_,"")}static parseTrackName(t){let e=l_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);c_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){de("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){me("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){me("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){me("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){me("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){me("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){me("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){me("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;me("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){me("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){me("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qe.Composite=Uu;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var MM=new Float32Array(1);var As=class extends Hl{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var cp=new Ve,xo=class{constructor(t,e,n=0,s=1/0){this.ray=new Ys(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):me("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return cp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cp),this}intersectObject(t,e=!0,n=[]){return Fu(t,this,n,e),n.sort(hp),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Fu(t[s],this,n,e);return n.sort(hp),n}};function hp(i,t){return i.distance-t.distance}function Fu(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Fu(r[a],t,e,!0)}}var Ou=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var up=new $,Tl=new $,Lr=new $,Dr=new $,wu=new $,h_=new $,u_=new $,vo=class{constructor(t=new $,e=new $){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){up.subVectors(t,this.start),Tl.subVectors(this.end,this.start);let n=Tl.dot(Tl);if(n===0)return 0;let r=Tl.dot(up)/n;return e&&(r=Se(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=h_,n=u_){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,u=t.end;Lr.subVectors(c,o),Dr.subVectors(u,l),wu.subVectors(o,l);let m=Lr.dot(Lr),d=Dr.dot(Dr),_=Dr.dot(wu);if(m<=s&&d<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(m<=s)r=0,a=_/d,a=Se(a,0,1);else{let x=Lr.dot(wu);if(d<=s)a=0,r=Se(-x/m,0,1);else{let A=Lr.dot(Dr),p=m*d-A*A;p!==0?r=Se((A*_-x*d)/p,0,1):r=0,a=(A*r+_)/d,a<0?(a=0,r=Se(-x/m,0,1)):a>1&&(a=1,r=Se((A-x)/m,0,1))}}return e.copy(o).addScaledVector(Lr,r),n.copy(l).addScaledVector(Dr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function dd(i,t,e,n){let s=d_(n);switch(e){case nd:return i*t;case bc:return i*t/s.components*s.byteLength;case wc:return i*t/s.components*s.byteLength;case Ls:return i*t*2/s.components*s.byteLength;case Ec:return i*t*2/s.components*s.byteLength;case id:return i*t*3/s.components*s.byteLength;case xi:return i*t*4/s.components*s.byteLength;case Tc:return i*t*4/s.components*s.byteLength;case bo:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Eo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cc:case Ic:return Math.max(i,16)*Math.max(t,8)/4;case Ac:case Rc:return Math.max(i,8)*Math.max(t,8)/2;case Pc:case Lc:case Nc:case Uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Dc:case Ao:case Fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case zc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Vc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $c:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Kc:case jc:case Qc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case th:case eh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Co:case nh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function d_(i){switch(i){case ni:case ju:return{byteLength:1,components:1};case Jr:case Qu:case Pi:return{byteLength:2,components:1};case Sc:case Mc:return{byteLength:2,components:4};case Ii:case yc:case _i:return{byteLength:4,components:1};case td:case ed:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function bm(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function p_(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,m=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let _;if(c instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)_=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=i.SHORT;else if(c instanceof Uint32Array)_=i.UNSIGNED_INT;else if(c instanceof Int32Array)_=i.INT;else if(c instanceof Int8Array)_=i.BYTE;else if(c instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let u=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,u);else{m.sort((_,x)=>_.start-x.start);let d=0;for(let _=1;_<m.length;_++){let x=m[d],A=m[_];A.start<=x.start+x.count+1?x.count=Math.max(x.count,A.start+A.count-x.start):(++d,m[d]=A)}m.length=d+1;for(let _=0,x=m.length;_<x;_++){let A=m[_];i.bufferSubData(c,A.start*u.BYTES_PER_ELEMENT,u,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var m_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g_=`#ifdef USE_ALPHAHASH
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
#endif`,__=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S_=`#ifdef USE_AOMAP
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
#endif`,M_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b_=`#ifdef USE_BATCHING
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
#endif`,w_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,C_=`#ifdef USE_IRIDESCENCE
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
#endif`,R_=`#ifdef USE_BUMPMAP
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
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,U_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,F_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,O_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,B_=`#define PI 3.141592653589793
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
} // validated`,k_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,z_=`vec3 transformedNormal = objectNormal;
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
#endif`,V_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W_="gl_FragColor = linearToOutputTexel( gl_FragColor );",X_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
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
#endif`,J_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
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
#endif`,j_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nx=`#ifdef USE_GRADIENTMAP
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
}`,ix=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ax=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ox=`#ifdef USE_ENVMAP
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
#endif`,lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dx=`PhysicalMaterial material;
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
#endif`,fx=`uniform sampler2D dfgLUT;
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
}`,px=`
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
#endif`,mx=`#if defined( RE_IndirectDiffuse )
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
#endif`,gx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_x=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ex=`#if defined( USE_POINTS_UV )
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
#endif`,Tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ax=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ix=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Px=`#ifdef USE_MORPHTARGETS
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
#endif`,Lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bx=`#ifdef USE_NORMALMAP
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
#endif`,kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$x=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tv=`float getShadowMask() {
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
}`,ev=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nv=`#ifdef USE_SKINNING
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
#endif`,iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sv=`#ifdef USE_SKINNING
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
#endif`,rv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,av=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ov=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cv=`#ifdef USE_TRANSMISSION
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
#endif`,hv=`#ifdef USE_TRANSMISSION
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
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gv=`uniform sampler2D t2D;
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
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`#include <common>
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
}`,Mv=`#if DEPTH_PACKING == 3200
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
}`,bv=`#define DISTANCE
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
}`,wv=`#define DISTANCE
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
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`uniform float scale;
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
}`,Cv=`uniform vec3 diffuse;
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
}`,Rv=`#include <common>
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
}`,Iv=`uniform vec3 diffuse;
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
}`,Pv=`#define LAMBERT
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
}`,Lv=`#define LAMBERT
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
}`,Dv=`#define MATCAP
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
}`,Nv=`#define MATCAP
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
}`,Uv=`#define NORMAL
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
}`,Fv=`#define NORMAL
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
}`,Ov=`#define PHONG
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
}`,Bv=`#define PHONG
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
}`,kv=`#define STANDARD
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
}`,zv=`#define STANDARD
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
}`,Vv=`#define TOON
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
}`,Hv=`#define TOON
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
}`,Gv=`uniform float size;
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
}`,$v=`uniform vec3 diffuse;
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
}`,Wv=`#include <common>
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
}`,Xv=`uniform vec3 color;
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
}`,qv=`uniform float rotation;
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
}`,Yv=`uniform vec3 diffuse;
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
}`,Ce={alphahash_fragment:m_,alphahash_pars_fragment:g_,alphamap_fragment:__,alphamap_pars_fragment:x_,alphatest_fragment:v_,alphatest_pars_fragment:y_,aomap_fragment:S_,aomap_pars_fragment:M_,batching_pars_vertex:b_,batching_vertex:w_,begin_vertex:E_,beginnormal_vertex:T_,bsdfs:A_,iridescence_fragment:C_,bumpmap_pars_fragment:R_,clipping_planes_fragment:I_,clipping_planes_pars_fragment:P_,clipping_planes_pars_vertex:L_,clipping_planes_vertex:D_,color_fragment:N_,color_pars_fragment:U_,color_pars_vertex:F_,color_vertex:O_,common:B_,cube_uv_reflection_fragment:k_,defaultnormal_vertex:z_,displacementmap_pars_vertex:V_,displacementmap_vertex:H_,emissivemap_fragment:G_,emissivemap_pars_fragment:$_,colorspace_fragment:W_,colorspace_pars_fragment:X_,envmap_fragment:q_,envmap_common_pars_fragment:Y_,envmap_pars_fragment:Z_,envmap_pars_vertex:J_,envmap_physical_pars_fragment:ox,envmap_vertex:K_,fog_vertex:j_,fog_pars_vertex:Q_,fog_fragment:tx,fog_pars_fragment:ex,gradientmap_pars_fragment:nx,lightmap_pars_fragment:ix,lights_lambert_fragment:sx,lights_lambert_pars_fragment:rx,lights_pars_begin:ax,lights_toon_fragment:lx,lights_toon_pars_fragment:cx,lights_phong_fragment:hx,lights_phong_pars_fragment:ux,lights_physical_fragment:dx,lights_physical_pars_fragment:fx,lights_fragment_begin:px,lights_fragment_maps:mx,lights_fragment_end:gx,lightprobes_pars_fragment:_x,logdepthbuf_fragment:xx,logdepthbuf_pars_fragment:vx,logdepthbuf_pars_vertex:yx,logdepthbuf_vertex:Sx,map_fragment:Mx,map_pars_fragment:bx,map_particle_fragment:wx,map_particle_pars_fragment:Ex,metalnessmap_fragment:Tx,metalnessmap_pars_fragment:Ax,morphinstance_vertex:Cx,morphcolor_vertex:Rx,morphnormal_vertex:Ix,morphtarget_pars_vertex:Px,morphtarget_vertex:Lx,normal_fragment_begin:Dx,normal_fragment_maps:Nx,normal_pars_fragment:Ux,normal_pars_vertex:Fx,normal_vertex:Ox,normalmap_pars_fragment:Bx,clearcoat_normal_fragment_begin:kx,clearcoat_normal_fragment_maps:zx,clearcoat_pars_fragment:Vx,iridescence_pars_fragment:Hx,opaque_fragment:Gx,packing:$x,premultiplied_alpha_fragment:Wx,project_vertex:Xx,dithering_fragment:qx,dithering_pars_fragment:Yx,roughnessmap_fragment:Zx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:Kx,shadowmap_pars_vertex:jx,shadowmap_vertex:Qx,shadowmask_pars_fragment:tv,skinbase_vertex:ev,skinning_pars_vertex:nv,skinning_vertex:iv,skinnormal_vertex:sv,specularmap_fragment:rv,specularmap_pars_fragment:av,tonemapping_fragment:ov,tonemapping_pars_fragment:lv,transmission_fragment:cv,transmission_pars_fragment:hv,uv_pars_fragment:uv,uv_pars_vertex:dv,uv_vertex:fv,worldpos_vertex:pv,background_vert:mv,background_frag:gv,backgroundCube_vert:_v,backgroundCube_frag:xv,cube_vert:vv,cube_frag:yv,depth_vert:Sv,depth_frag:Mv,distance_vert:bv,distance_frag:wv,equirect_vert:Ev,equirect_frag:Tv,linedashed_vert:Av,linedashed_frag:Cv,meshbasic_vert:Rv,meshbasic_frag:Iv,meshlambert_vert:Pv,meshlambert_frag:Lv,meshmatcap_vert:Dv,meshmatcap_frag:Nv,meshnormal_vert:Uv,meshnormal_frag:Fv,meshphong_vert:Ov,meshphong_frag:Bv,meshphysical_vert:kv,meshphysical_frag:zv,meshtoon_vert:Vv,meshtoon_frag:Hv,points_vert:Gv,points_frag:$v,shadow_vert:Wv,shadow_frag:Xv,sprite_vert:qv,sprite_frag:Yv},kt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},qn={basic:{uniforms:kn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:kn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:kn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:kn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:kn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new ue(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:kn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:kn([kt.points,kt.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:kn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:kn([kt.common,kt.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:kn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:kn([kt.sprite,kt.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distance:{uniforms:kn([kt.common,kt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distance_vert,fragmentShader:Ce.distance_frag},shadow:{uniforms:kn([kt.lights,kt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};qn.physical={uniforms:kn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};var ah={r:0,b:0,g:0},Zv=new Ve,wm=new ye;wm.set(-1,0,0,0,1,0,0,0,1);function Jv(i,t,e,n,s,r){let a=new ue(0),o=s===!0?0:1,l,c,u=null,m=0,d=null;function _(F){let O=F.isScene===!0?F.background:null;if(O&&O.isTexture){let T=F.backgroundBlurriness>0;O=t.get(O,T)}return O}function x(F){let O=!1,T=_(F);T===null?p(a,o):T&&T.isColor&&(p(T,1),O=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||O)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(F,O){let T=_(O);T&&(T.isCubeTexture||T.mapping===So)?(c===void 0&&(c=new wn(new Gr(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:nr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,D,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zv.makeRotationFromEuler(O.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wm),c.material.toneMapped=Ne.getTransfer(T.colorSpace)!==$e,(u!==T||m!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,m=T.version,d=i.toneMapping),c.layers.enableAll(),F.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new wn(new lo(2,2),new En({name:"BackgroundMaterial",uniforms:nr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,l.material.toneMapped=Ne.getTransfer(T.colorSpace)!==$e,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||m!==T.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=T,m=T.version,d=i.toneMapping),l.layers.enableAll(),F.unshift(l,l.geometry,l.material,0,0,null))}function p(F,O){F.getRGB(ah,cd(i)),e.buffers.color.setClear(ah.r,ah.g,ah.b,O,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(F,O=1){a.set(F),o=O,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(F){o=F,p(a,o)},render:x,addToRenderList:A,dispose:f}}function Kv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(W,tt,st,Y,K){let ot=!1,lt=m(W,Y,st,tt);r!==lt&&(r=lt,c(r.object)),ot=_(W,Y,st,K),ot&&x(W,Y,st,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(ot||a)&&(a=!1,T(W,tt,st,Y),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(W){return i.bindVertexArray(W)}function u(W){return i.deleteVertexArray(W)}function m(W,tt,st,Y){let K=Y.wireframe===!0,ot=n[tt.id];ot===void 0&&(ot={},n[tt.id]=ot);let lt=W.isInstancedMesh===!0?W.id:0,Mt=ot[lt];Mt===void 0&&(Mt={},ot[lt]=Mt);let ct=Mt[st.id];ct===void 0&&(ct={},Mt[st.id]=ct);let yt=ct[K];return yt===void 0&&(yt=d(l()),ct[K]=yt),yt}function d(W){let tt=[],st=[],Y=[];for(let K=0;K<e;K++)tt[K]=0,st[K]=0,Y[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:tt,enabledAttributes:st,attributeDivisors:Y,object:W,attributes:{},index:null}}function _(W,tt,st,Y){let K=r.attributes,ot=tt.attributes,lt=0,Mt=st.getAttributes();for(let ct in Mt)if(Mt[ct].location>=0){let vt=K[ct],Ht=ot[ct];if(Ht===void 0&&(ct==="instanceMatrix"&&W.instanceMatrix&&(Ht=W.instanceMatrix),ct==="instanceColor"&&W.instanceColor&&(Ht=W.instanceColor)),vt===void 0||vt.attribute!==Ht||Ht&&vt.data!==Ht.data)return!0;lt++}return r.attributesNum!==lt||r.index!==Y}function x(W,tt,st,Y){let K={},ot=tt.attributes,lt=0,Mt=st.getAttributes();for(let ct in Mt)if(Mt[ct].location>=0){let vt=ot[ct];vt===void 0&&(ct==="instanceMatrix"&&W.instanceMatrix&&(vt=W.instanceMatrix),ct==="instanceColor"&&W.instanceColor&&(vt=W.instanceColor));let Ht={};Ht.attribute=vt,vt&&vt.data&&(Ht.data=vt.data),K[ct]=Ht,lt++}r.attributes=K,r.attributesNum=lt,r.index=Y}function A(){let W=r.newAttributes;for(let tt=0,st=W.length;tt<st;tt++)W[tt]=0}function p(W){f(W,0)}function f(W,tt){let st=r.newAttributes,Y=r.enabledAttributes,K=r.attributeDivisors;st[W]=1,Y[W]===0&&(i.enableVertexAttribArray(W),Y[W]=1),K[W]!==tt&&(i.vertexAttribDivisor(W,tt),K[W]=tt)}function F(){let W=r.newAttributes,tt=r.enabledAttributes;for(let st=0,Y=tt.length;st<Y;st++)tt[st]!==W[st]&&(i.disableVertexAttribArray(st),tt[st]=0)}function O(W,tt,st,Y,K,ot,lt){lt===!0?i.vertexAttribIPointer(W,tt,st,K,ot):i.vertexAttribPointer(W,tt,st,Y,K,ot)}function T(W,tt,st,Y){A();let K=Y.attributes,ot=st.getAttributes(),lt=tt.defaultAttributeValues;for(let Mt in ot){let ct=ot[Mt];if(ct.location>=0){let yt=K[Mt];if(yt===void 0&&(Mt==="instanceMatrix"&&W.instanceMatrix&&(yt=W.instanceMatrix),Mt==="instanceColor"&&W.instanceColor&&(yt=W.instanceColor)),yt!==void 0){let vt=yt.normalized,Ht=yt.itemSize,Xt=t.get(yt);if(Xt===void 0)continue;let ke=Xt.buffer,be=Xt.type,Le=Xt.bytesPerElement,ft=be===i.INT||be===i.UNSIGNED_INT||yt.gpuType===yc;if(yt.isInterleavedBufferAttribute){let _t=yt.data,At=_t.stride,Qt=yt.offset;if(_t.isInstancedInterleavedBuffer){for(let Gt=0;Gt<ct.locationSize;Gt++)f(ct.location+Gt,_t.meshPerAttribute);W.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Gt=0;Gt<ct.locationSize;Gt++)p(ct.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Gt=0;Gt<ct.locationSize;Gt++)O(ct.location+Gt,Ht/ct.locationSize,be,vt,At*Le,(Qt+Ht/ct.locationSize*Gt)*Le,ft)}else{if(yt.isInstancedBufferAttribute){for(let _t=0;_t<ct.locationSize;_t++)f(ct.location+_t,yt.meshPerAttribute);W.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let _t=0;_t<ct.locationSize;_t++)p(ct.location+_t);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let _t=0;_t<ct.locationSize;_t++)O(ct.location+_t,Ht/ct.locationSize,be,vt,Ht*Le,Ht/ct.locationSize*_t*Le,ft)}}else if(lt!==void 0){let vt=lt[Mt];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(ct.location,vt);break;case 3:i.vertexAttrib3fv(ct.location,vt);break;case 4:i.vertexAttrib4fv(ct.location,vt);break;default:i.vertexAttrib1fv(ct.location,vt)}}}}F()}function M(){L();for(let W in n){let tt=n[W];for(let st in tt){let Y=tt[st];for(let K in Y){let ot=Y[K];for(let lt in ot)u(ot[lt].object),delete ot[lt];delete Y[K]}}delete n[W]}}function D(W){if(n[W.id]===void 0)return;let tt=n[W.id];for(let st in tt){let Y=tt[st];for(let K in Y){let ot=Y[K];for(let lt in ot)u(ot[lt].object),delete ot[lt];delete Y[K]}}delete n[W.id]}function H(W){for(let tt in n){let st=n[tt];for(let Y in st){let K=st[Y];if(K[W.id]===void 0)continue;let ot=K[W.id];for(let lt in ot)u(ot[lt].object),delete ot[lt];delete K[W.id]}}}function E(W){for(let tt in n){let st=n[tt],Y=W.isInstancedMesh===!0?W.id:0,K=st[Y];if(K!==void 0){for(let ot in K){let lt=K[ot];for(let Mt in lt)u(lt[Mt].object),delete lt[Mt];delete K[ot]}delete st[Y],Object.keys(st).length===0&&delete n[tt]}}}function L(){V(),a=!0,r!==s&&(r=s,c(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:V,dispose:M,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:H,initAttributes:A,enableAttribute:p,disableUnusedAttributes:F}}function jv(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let _=0;_<u;_++)d+=c[_];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Qv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let H=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(H){return!(H!==xi&&n.convert(H)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(H){let E=H===Pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==ni&&H!==_i&&!E&&n.convert(H)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(H){if(H==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(de("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let m=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&de("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let _=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),F=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),O=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),D=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:d,maxTextures:_,maxVertexTextures:x,maxTextureSize:A,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:F,maxVaryings:O,maxFragmentUniforms:T,maxSamples:M,samples:D}}function ty(i){let t=this,e=null,n=0,s=!1,r=!1,a=new wi,o=new ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){let _=m.length!==0||d||n!==0||s;return s=d,n=m.length,_},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,d){e=u(m,d,0)},this.setState=function(m,d,_){let x=m.clippingPlanes,A=m.clipIntersection,p=m.clipShadows,f=i.get(m);if(!s||x===null||x.length===0||r&&!p)r?u(null):c();else{let F=r?0:n,O=F*4,T=f.clippingState||null;l.value=T,T=u(x,d,O,_);for(let M=0;M!==O;++M)T[M]=e[M];f.clippingState=T,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=F}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(m,d,_,x){let A=m!==null?m.length:0,p=null;if(A!==0){if(p=l.value,x!==!0||p===null){let f=_+A*4,F=d.matrixWorldInverse;o.getNormalMatrix(F),(p===null||p.length<f)&&(p=new Float32Array(f));for(let O=0,T=_;O!==A;++O,T+=4)a.copy(m[O]).applyMatrix4(F,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,p}}var Qr=4,ey=6,ny=20,iy=256,Io=new qr,nm=new ue,fd=null,pd=0,md=0,gd=!1,sy=new $,ir=new $,lh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=sy}=r;fd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(fd,pd,md),this._renderer.xr.enabled=gd,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rs||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:Pi,format:xi,colorSpace:ka,depthBuffer:!1},s=im(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=im(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ry(r)),this._blurMaterial=oy(r,t,e),this._ggxMaterial=ay(r,t,e)}return s}_compileMaterial(t){let e=new wn(new ln,t);this._renderer.compile(e,Io)}_sceneToCubeUV(t,e,n,s,r){let l=new Bn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],m=this._renderer,d=m.autoClear,_=m.toneMapping;m.getClearColor(nm),m.toneMapping=Ri,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wn(new Gr,new Zs({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));let A=this._backgroundBox,p=A.material,f=!1,F=t.background;F?F.isColor&&(p.color.copy(F),t.background=null,f=!0):(p.color.copy(nm),f=!0);for(let O=0;O<6;O++){let T=O%3;T===0?(l.up.set(0,c[O],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[O],r.y,r.z)):T===1?(l.up.set(0,0,c[O]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[O],r.z)):(l.up.set(0,c[O],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[O]));let M=this._cubeSize;jr(s,T*M,O>2?M:0,M,M),m.setRenderTarget(s),f&&m.render(A,l),m.render(t,l)}m.toneMapping=_,m.autoClear=d,t.background=F}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Rs||t.mapping===er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sm());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Io)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),m=Math.sqrt(c*c-u*u),d=c*1.25,_=m*d,{_lodMax:x}=this,A=this._sizeLods[n],p=3*A*(n>x-Qr?n-x+Qr:0),f=4*(this._cubeSize-A);l.envMap.value=t.texture,l.roughness.value=_,l.mipInt.value=x-e,jr(r,p,f,3*A,2*A),s.setRenderTarget(r),s.render(o,Io),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,jr(t,p,f,3*A,2*A),s.setRenderTarget(t),s.render(o,Io)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],m=3*u*(s>this._lodMax-Qr?s-this._lodMax+Qr:0),d=4*(this._cubeSize-u);jr(e,m,d,3*u,2*u),a.setRenderTarget(e),a.render(l,Io)}};function ry(i){let t=[],e=[],n=i,s=i-Qr+1+ey;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],m=6,d=6,_=3,x=new Float32Array(_*d*m),A=new Float32Array(_*d*m);for(let f=0;f<m;f++){let F=f%3*2/3-1,O=f>2?0:-1,T=[F,O,0,F+2/3,O,0,F+2/3,O+1,0,F,O,0,F+2/3,O+1,0,F,O+1,0];x.set(T,_*d*f);for(let M=0;M<d;M++){let D=u[M*2]*2-1,H=u[M*2+1]*2-1;f===0?ir.set(1,H,D):f===1?ir.set(-D,1,-H):f===2?ir.set(-D,H,1):f===3?ir.set(-1,H,-D):f===4?ir.set(-D,-1,H):ir.set(D,H,-1),ir.toArray(A,(f*d+M)*_)}}let p=new ln;p.setAttribute("position",new Ye(x,_)),p.setAttribute("outputDirection",new Ye(A,_)),e.push(new wn(p,null)),n>Qr&&n--}return{lodMeshes:e,sizeLods:t}}function im(i,t,e){let n=new ti(i,t,e);return n.texture.mapping=So,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ay(i,t,e){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uh(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function oy(i,t,e){return new En({name:"SphericalGaussianBlur",defines:{SAMPLES:ny,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:uh(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function sm(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function rm(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function uh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ch=class extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ka(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gr(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xn,blending:Gi});r.uniforms.tEquirect.value=e;let a=new wn(s,r),o=e.minFilter;return e.minFilter===Is&&(e.minFilter=In),new pc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function ly(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,_=!1){return d==null?null:_?a(d):r(d)}function r(d){if(d&&d.isTexture){let _=d.mapping;if(_===_c||_===xc)if(t.has(d)){let x=t.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let A=new ch(x.height);return A.fromEquirectangularTexture(i,d),t.set(d,A),d.addEventListener("dispose",c),o(A.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let _=d.mapping,x=_===_c||_===xc,A=_===Rs||_===er;if(x||A){let p=e.get(d),f=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new lh(i)),p=x?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let F=d.image;return x&&F&&F.height>0||A&&F&&l(F)?(n===null&&(n=new lh(i)),p=x?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,_){return _===_c?d.mapping=Rs:_===xc&&(d.mapping=er),d}function l(d){let _=0,x=6;for(let A=0;A<x;A++)d[A]!==void 0&&_++;return _===x}function c(d){let _=d.target;_.removeEventListener("dispose",c);let x=t.get(_);x!==void 0&&(t.delete(_),x.dispose())}function u(d){let _=d.target;_.removeEventListener("dispose",u);let x=e.get(_);x!==void 0&&(e.delete(_),x.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function cy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&qs("WebGLRenderer: "+n+" extension not supported."),s}}}function hy(i,t,e,n){let s={},r=new WeakMap;function a(m){let d=m.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete s[d.id];let _=r.get(d);_&&(t.remove(_),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(m,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(m){let d=m.attributes;for(let _ in d)t.update(d[_],i.ARRAY_BUFFER)}function c(m){let d=[],_=m.index,x=m.attributes.position,A=0;if(x===void 0)return;if(_!==null){let F=_.array;A=_.version;for(let O=0,T=F.length;O<T;O+=3){let M=F[O+0],D=F[O+1],H=F[O+2];d.push(M,D,D,H,H,M)}}else{let F=x.array;A=x.version;for(let O=0,T=F.length/3-1;O<T;O+=3){let M=O+0,D=O+1,H=O+2;d.push(M,D,D,H,H,M)}}let p=new(x.count>=65535?Xa:Wa)(d,1);p.version=A;let f=r.get(m);f&&t.remove(f),r.set(m,p)}function u(m){let d=r.get(m);if(d){let _=m.index;_!==null&&d.version<_.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:u}}function uy(i,t,e){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,d){i.drawElements(n,d,r,m*a),e.update(d,n,1)}function c(m,d,_){_!==0&&(i.drawElementsInstanced(n,d,r,m*a,_),e.update(d,n,_))}function u(m,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,m,0,_);let A=0;for(let p=0;p<_;p++)A+=d[p];e.update(A,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function dy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:me("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function fy(i,t,e){let n=new WeakMap,s=new We;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==m){let L=function(){H.dispose(),n.delete(o),o.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();let _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],F=o.morphAttributes.color||[],O=0;_===!0&&(O=1),x===!0&&(O=2),A===!0&&(O=3);let T=o.attributes.position.count*O,M=1;T>t.maxTextureSize&&(M=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let D=new Float32Array(T*M*4*m),H=new Ga(D,T,M,m);H.type=_i,H.needsUpdate=!0;let E=O*4;for(let V=0;V<m;V++){let W=p[V],tt=f[V],st=F[V],Y=T*M*4*V;for(let K=0;K<W.count;K++){let ot=K*E;_===!0&&(s.fromBufferAttribute(W,K),D[Y+ot+0]=s.x,D[Y+ot+1]=s.y,D[Y+ot+2]=s.z,D[Y+ot+3]=0),x===!0&&(s.fromBufferAttribute(tt,K),D[Y+ot+4]=s.x,D[Y+ot+5]=s.y,D[Y+ot+6]=s.z,D[Y+ot+7]=0),A===!0&&(s.fromBufferAttribute(st,K),D[Y+ot+8]=s.x,D[Y+ot+9]=s.y,D[Y+ot+10]=s.z,D[Y+ot+11]=st.itemSize===4?s.w:1)}}d={count:m,texture:H,size:new Ft(T,M)},n.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let A=0;A<c.length;A++)_+=c[A];let x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function py(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,m=c.geometry,d=t.get(c,m);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let _=c.skeleton;r.get(_)!==u&&(_.update(),r.set(_,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var my={[$u]:"LINEAR_TONE_MAPPING",[Wu]:"REINHARD_TONE_MAPPING",[Xu]:"CINEON_TONE_MAPPING",[qu]:"ACES_FILMIC_TONE_MAPPING",[Zu]:"AGX_TONE_MAPPING",[Ju]:"NEUTRAL_TONE_MAPPING",[Yu]:"CUSTOM_TONE_MAPPING"};function gy(i,t,e,n,s,r){let a=new ti(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ln;c.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new on([0,2,0,0,2,0],2));let u=new tc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new wn(c,u),d=new qr(-1,1,1,-1,0,1),_=null,x=null,A=!1,p,f=null,F=[],O=!1;this.setSize=function(T,M){a.setSize(T,M),o!==null&&o.setSize(T,M),l!==null&&l.setSize(T,M);for(let D=0;D<F.length;D++){let H=F[D];H.setSize&&H.setSize(T,M)}},this.setEffects=function(T){F=T,O=F.length>0&&F[0].isRenderPass===!0;let M=a.width,D=a.height;F.length>0&&o===null&&(o=new ti(M,D,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),l=new ti(M,D,{type:Pi,depthBuffer:!1,stencilBuffer:!1}));for(let H=0;H<F.length;H++){let E=F[H];E.setSize&&E.setSize(M,D)}},this.begin=function(T,M){if(A||T.toneMapping===Ri&&F.length===0)return!1;if(f=M,M!==null){let D=M.width,H=M.height;(a.width!==D||a.height!==H)&&this.setSize(D,H)}return O===!1&&T.setRenderTarget(a),p=T.toneMapping,T.toneMapping=Ri,!0},this.hasRenderPass=function(){return O},this.end=function(T,M){T.toneMapping=p,A=!0;let D=a,H=o;for(let E=0;E<F.length;E++){let L=F[E];L.enabled!==!1&&(L.render(T,H,D,M),L.needsSwap!==!1&&(D=H,H=H===o?l:o))}if(_!==T.outputColorSpace||x!==T.toneMapping){_=T.outputColorSpace,x=T.toneMapping,u.defines={},Ne.getTransfer(_)===$e&&(u.defines.SRGB_TRANSFER="");let E=my[x];E&&(u.defines[E]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=D.texture,T.setRenderTarget(f),T.render(m,d),f=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Em=new Qn,vd=new bs(1,1),Tm=new Ga,Am=new Vl,Cm=new Ka,am=[],om=[],lm=new Float32Array(16),cm=new Float32Array(9),hm=new Float32Array(4);function ea(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=am[s];if(r===void 0&&(r=new Float32Array(s),am[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function gn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _n(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function dh(i,t){let e=om[t];e===void 0&&(e=new Int32Array(t),om[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function _y(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;i.uniform2fv(this.addr,t),_n(e,t)}}function vy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(gn(e,t))return;i.uniform3fv(this.addr,t),_n(e,t)}}function yy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;i.uniform4fv(this.addr,t),_n(e,t)}}function Sy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(gn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_n(e,t)}else{if(gn(e,n))return;hm.set(n),i.uniformMatrix2fv(this.addr,!1,hm),_n(e,n)}}function My(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(gn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_n(e,t)}else{if(gn(e,n))return;cm.set(n),i.uniformMatrix3fv(this.addr,!1,cm),_n(e,n)}}function by(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(gn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_n(e,t)}else{if(gn(e,n))return;lm.set(n),i.uniformMatrix4fv(this.addr,!1,lm),_n(e,n)}}function wy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ey(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;i.uniform2iv(this.addr,t),_n(e,t)}}function Ty(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;i.uniform3iv(this.addr,t),_n(e,t)}}function Ay(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;i.uniform4iv(this.addr,t),_n(e,t)}}function Cy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ry(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;i.uniform2uiv(this.addr,t),_n(e,t)}}function Iy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;i.uniform3uiv(this.addr,t),_n(e,t)}}function Py(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;i.uniform4uiv(this.addr,t),_n(e,t)}}function Ly(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vd.compareFunction=e.isReversedDepthBuffer()?rh:sh,r=vd):r=Em,e.setTexture2D(t||r,s)}function Dy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Am,s)}function Ny(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Cm,s)}function Uy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Tm,s)}function Fy(i){switch(i){case 5126:return _y;case 35664:return xy;case 35665:return vy;case 35666:return yy;case 35674:return Sy;case 35675:return My;case 35676:return by;case 5124:case 35670:return wy;case 35667:case 35671:return Ey;case 35668:case 35672:return Ty;case 35669:case 35673:return Ay;case 5125:return Cy;case 36294:return Ry;case 36295:return Iy;case 36296:return Py;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Uy}}function Oy(i,t){i.uniform1fv(this.addr,t)}function By(i,t){let e=ea(t,this.size,2);i.uniform2fv(this.addr,e)}function ky(i,t){let e=ea(t,this.size,3);i.uniform3fv(this.addr,e)}function zy(i,t){let e=ea(t,this.size,4);i.uniform4fv(this.addr,e)}function Vy(i,t){let e=ea(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hy(i,t){let e=ea(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Gy(i,t){let e=ea(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $y(i,t){i.uniform1iv(this.addr,t)}function Wy(i,t){i.uniform2iv(this.addr,t)}function Xy(i,t){i.uniform3iv(this.addr,t)}function qy(i,t){i.uniform4iv(this.addr,t)}function Yy(i,t){i.uniform1uiv(this.addr,t)}function Zy(i,t){i.uniform2uiv(this.addr,t)}function Jy(i,t){i.uniform3uiv(this.addr,t)}function Ky(i,t){i.uniform4uiv(this.addr,t)}function jy(i,t,e){let n=this.cache,s=t.length,r=dh(e,s);gn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=vd:a=Em;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Qy(i,t,e){let n=this.cache,s=t.length,r=dh(e,s);gn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Am,r[a])}function tS(i,t,e){let n=this.cache,s=t.length,r=dh(e,s);gn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Cm,r[a])}function eS(i,t,e){let n=this.cache,s=t.length,r=dh(e,s);gn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Tm,r[a])}function nS(i){switch(i){case 5126:return Oy;case 35664:return By;case 35665:return ky;case 35666:return zy;case 35674:return Vy;case 35675:return Hy;case 35676:return Gy;case 5124:case 35670:return $y;case 35667:case 35671:return Wy;case 35668:case 35672:return Xy;case 35669:case 35673:return qy;case 5125:return Yy;case 36294:return Zy;case 36295:return Jy;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return tS;case 36289:case 36303:case 36311:case 36292:return eS}}var yd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fy(e.type)}},Sd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nS(e.type)}},Md=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},_d=/(\w+)(\])?(\[|\.)?/g;function um(i,t){i.seq.push(t),i.map[t.id]=t}function iS(i,t,e){let n=i.name,s=n.length;for(_d.lastIndex=0;;){let r=_d.exec(n),a=_d.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){um(e,c===void 0?new yd(o,i,t):new Sd(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new Md(o),um(e,m)),e=m}}}var ta=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);iS(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function dm(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var sS=37297,rS=0;function aS(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var fm=new ye;function oS(i){Ne._getMatrix(fm,Ne.workingColorSpace,i);let t=`mat3( ${fm.elements.map(e=>e.toFixed(4))} )`;switch(Ne.getTransfer(i)){case za:return[t,"LinearTransferOETF"];case $e:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pm(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+aS(i.getShaderSource(t),o)}else return r}function lS(i,t){let e=oS(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var cS={[$u]:"Linear",[Wu]:"Reinhard",[Xu]:"Cineon",[qu]:"ACESFilmic",[Zu]:"AgX",[Ju]:"Neutral",[Yu]:"Custom"};function hS(i,t){let e=cS[t];return e===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var oh=new $;function uS(){Ne.getLuminanceCoefficients(oh);let i=oh.x.toFixed(4),t=oh.y.toFixed(4),e=oh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function fS(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function pS(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Lo(i){return i!==""}function mm(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gm(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var mS=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(i){return i.replace(mS,_S)}var gS=new Map;function _S(i,t){let e=Ce[t];if(e===void 0){let n=gS.get(t);if(n!==void 0)e=Ce[n],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return bd(e)}var xS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(i){return i.replace(xS,vS)}function vS(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xm(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var yS={[yo]:"SHADOWMAP_TYPE_PCF",[Yr]:"SHADOWMAP_TYPE_VSM"};function SS(i){return yS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var MS={[Rs]:"ENVMAP_TYPE_CUBE",[er]:"ENVMAP_TYPE_CUBE",[So]:"ENVMAP_TYPE_CUBE_UV"};function bS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":MS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var wS={[er]:"ENVMAP_MODE_REFRACTION"};function ES(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":wS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var TS={[gc]:"ENVMAP_BLENDING_MULTIPLY",[Dp]:"ENVMAP_BLENDING_MIX",[Np]:"ENVMAP_BLENDING_ADD"};function AS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":TS[i.combine]||"ENVMAP_BLENDING_NONE"}function CS(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function RS(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=SS(e),c=bS(e),u=ES(e),m=AS(e),d=CS(e),_=dS(e),x=fS(r),A=s.createProgram(),p,f,F=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Lo).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Lo).join(`
`),f.length>0&&(f+=`
`)):(p=[xm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),f=[xm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?Ce.tonemapping_pars_fragment:"",e.toneMapping!==Ri?hS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ce.colorspace_pars_fragment,lS("linearToOutputTexel",e.outputColorSpace),uS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lo).join(`
`)),a=bd(a),a=mm(a,e),a=gm(a,e),o=bd(o),o=mm(o,e),o=gm(o,e),a=_m(a),o=_m(o),e.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,p=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let O=F+p+a,T=F+f+o,M=dm(s,s.VERTEX_SHADER,O),D=dm(s,s.FRAGMENT_SHADER,T);s.attachShader(A,M),s.attachShader(A,D),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function H(W){if(i.debug.checkShaderErrors){let tt=s.getProgramInfoLog(A)||"",st=s.getShaderInfoLog(M)||"",Y=s.getShaderInfoLog(D)||"",K=tt.trim(),ot=st.trim(),lt=Y.trim(),Mt=!0,ct=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(Mt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,M,D);else{let yt=pm(s,M,"vertex"),vt=pm(s,D,"fragment");me("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+K+`
`+yt+`
`+vt)}else K!==""?de("WebGLProgram: Program Info Log:",K):(ot===""||lt==="")&&(ct=!1);ct&&(W.diagnostics={runnable:Mt,programLog:K,vertexShader:{log:ot,prefix:p},fragmentShader:{log:lt,prefix:f}})}s.deleteShader(M),s.deleteShader(D),E=new ta(s,A),L=pS(s,A)}let E;this.getUniforms=function(){return E===void 0&&H(this),E};let L;this.getAttributes=function(){return L===void 0&&H(this),L};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(A,sS)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rS++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=M,this.fragmentShader=D,this}var IS=0,wd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ed(t),e.set(t,n)),n}},Ed=class{constructor(t){this.id=IS++,this.code=t,this.usedTimes=0}};function PS(i){return i===Ls||i===Ao||i===Co}function LS(i,t,e,n,s,r){let a=new zr,o=new wd,l=new Set,c=[],u=new Map,m=n.logarithmicDepthBuffer,d=n.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function A(E,L,V,W,tt,st){let Y=W.fog,K=tt.geometry,ot=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?W.environment:null,lt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,Mt=t.get(E.envMap||ot,lt),ct=Mt&&Mt.mapping===So?Mt.image.height:null,yt=_[E.type];E.precision!==null&&(d=n.getMaxPrecision(E.precision),d!==E.precision&&de("WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let vt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ht=vt!==void 0?vt.length:0,Xt=0;K.morphAttributes.position!==void 0&&(Xt=1),K.morphAttributes.normal!==void 0&&(Xt=2),K.morphAttributes.color!==void 0&&(Xt=3);let ke,be,Le,ft;if(yt){let Ae=qn[yt];ke=Ae.vertexShader,be=Ae.fragmentShader}else{ke=E.vertexShader,be=E.fragmentShader;let Ae=o.getVertexShaderStage(E),we=o.getFragmentShaderStage(E);o.update(E,Ae,we),Le=Ae.id,ft=we.id}let _t=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Qt=tt.isInstancedMesh===!0,Gt=tt.isBatchedMesh===!0,le=!!E.map,ae=!!E.matcap,at=!!Mt,wt=!!E.aoMap,G=!!E.lightMap,Tt=!!E.bumpMap&&E.wireframe===!1,Nt=!!E.normalMap,oe=!!E.displacementMap,se=!!E.emissiveMap,he=!!E.metalnessMap,fe=!!E.roughnessMap,z=E.anisotropy>0,Re=E.clearcoat>0,pe=E.dispersion>0,P=E.retroreflectivity>0,y=E.iridescence>0,X=E.sheen>0,rt=E.transmission>0,ht=z&&!!E.anisotropyMap,Rt=Re&&!!E.clearcoatMap,Dt=Re&&!!E.clearcoatNormalMap,ut=Re&&!!E.clearcoatRoughnessMap,xt=y&&!!E.iridescenceMap,Ut=y&&!!E.iridescenceThicknessMap,te=X&&!!E.sheenColorMap,zt=X&&!!E.sheenRoughnessMap,Ot=!!E.specularMap,ee=!!E.specularColorMap,ce=!!E.specularIntensityMap,_e=rt&&!!E.transmissionMap,q=rt&&!!E.thicknessMap,Lt=!!E.gradientMap,gt=!!E.alphaMap,Bt=E.alphaTest>0,Vt=!!E.alphaHash,St=!!E.extensions,ie=Ri;E.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ie=i.toneMapping);let Kt={shaderID:yt,shaderType:E.type,shaderName:E.name,vertexShader:ke,fragmentShader:be,defines:E.defines,customVertexShaderID:Le,customFragmentShaderID:ft,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Gt,batchingColor:Gt&&tt._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&tt.instanceColor!==null,instancingMorph:Qt&&tt.morphTexture!==null,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Ne.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:le,matcap:ae,envMap:at,envMapMode:at&&Mt.mapping,envMapCubeUVHeight:ct,aoMap:wt,lightMap:G,bumpMap:Tt,normalMap:Nt,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:Nt&&E.normalMapType===Op,normalMapTangentSpace:Nt&&E.normalMapType===ih,packedNormalMap:Nt&&E.normalMapType===ih&&PS(E.normalMap.format),metalnessMap:he,roughnessMap:fe,anisotropy:z,anisotropyMap:ht,clearcoat:Re,clearcoatMap:Rt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:ut,dispersion:pe,retroreflection:P,iridescence:y,iridescenceMap:xt,iridescenceThicknessMap:Ut,sheen:X,sheenColorMap:te,sheenRoughnessMap:zt,specularMap:Ot,specularColorMap:ee,specularIntensityMap:ce,transmission:rt,transmissionMap:_e,thicknessMap:q,gradientMap:Lt,opaque:E.transparent===!1&&E.blending===Zr&&E.alphaToCoverage===!1,alphaMap:gt,alphaTest:Bt,alphaHash:Vt,combine:E.combine,mapUv:le&&x(E.map.channel),aoMapUv:wt&&x(E.aoMap.channel),lightMapUv:G&&x(E.lightMap.channel),bumpMapUv:Tt&&x(E.bumpMap.channel),normalMapUv:Nt&&x(E.normalMap.channel),displacementMapUv:oe&&x(E.displacementMap.channel),emissiveMapUv:se&&x(E.emissiveMap.channel),metalnessMapUv:he&&x(E.metalnessMap.channel),roughnessMapUv:fe&&x(E.roughnessMap.channel),anisotropyMapUv:ht&&x(E.anisotropyMap.channel),clearcoatMapUv:Rt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:te&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:zt&&x(E.sheenRoughnessMap.channel),specularMapUv:Ot&&x(E.specularMap.channel),specularColorMapUv:ee&&x(E.specularColorMap.channel),specularIntensityMapUv:ce&&x(E.specularIntensityMap.channel),transmissionMapUv:_e&&x(E.transmissionMap.channel),thicknessMapUv:q&&x(E.thicknessMap.channel),alphaMapUv:gt&&x(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Nt||z),vertexNormals:!!K.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!K.attributes.uv&&(le||gt),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||K.attributes.normal===void 0&&Nt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:At,skinning:tt.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:Xt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:st.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:le&&E.map.isVideoTexture===!0&&Ne.getTransfer(E.map.colorSpace)===$e,decodeVideoTextureEmissive:se&&E.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(E.emissiveMap.colorSpace)===$e,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Hi,flipSided:E.side===Xn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:St&&E.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&E.extensions.multiDraw===!0||Gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function p(E){let L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(let V in E.defines)L.push(V),L.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(f(L,E),F(L,E),L.push(i.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function f(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapCubeUVHeight),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.morphAttributeCount),E.push(L.numSunLights),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numSunLightShadows),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function F(E,L){a.disableAll(),L.instancing&&a.enable(0),L.instancingColor&&a.enable(1),L.instancingMorph&&a.enable(2),L.matcap&&a.enable(3),L.envMap&&a.enable(4),L.normalMapObjectSpace&&a.enable(5),L.normalMapTangentSpace&&a.enable(6),L.clearcoat&&a.enable(7),L.iridescence&&a.enable(8),L.alphaTest&&a.enable(9),L.vertexColors&&a.enable(10),L.vertexAlphas&&a.enable(11),L.vertexUv1s&&a.enable(12),L.vertexUv2s&&a.enable(13),L.vertexUv3s&&a.enable(14),L.vertexTangents&&a.enable(15),L.anisotropy&&a.enable(16),L.alphaHash&&a.enable(17),L.batching&&a.enable(18),L.dispersion&&a.enable(19),L.retroreflection&&a.enable(24),L.batchingColor&&a.enable(20),L.gradientMap&&a.enable(21),L.packedNormalMap&&a.enable(22),L.vertexNormals&&a.enable(23),E.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.reversedDepthBuffer&&a.enable(4),L.skinning&&a.enable(5),L.morphTargets&&a.enable(6),L.morphNormals&&a.enable(7),L.morphColors&&a.enable(8),L.premultipliedAlpha&&a.enable(9),L.shadowMapEnabled&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),L.decodeVideoTextureEmissive&&a.enable(20),L.alphaToCoverage&&a.enable(21),L.numLightProbeGrids>0&&a.enable(22),L.hasPositionAttribute&&a.enable(23),E.push(a.mask)}function O(E){let L=_[E.type],V;if(L){let W=qn[L];V=Ro.clone(W.uniforms)}else V=E.uniforms;return V}function T(E,L){let V=u.get(L);return V!==void 0?++V.usedTimes:(V=new RS(i,L,E,s),c.push(V),u.set(L,V)),V}function M(E){if(--E.usedTimes===0){let L=c.indexOf(E);c[L]=c[c.length-1],c.pop(),u.delete(E.cacheKey),E.destroy()}}function D(E){o.remove(E)}function H(){o.dispose()}return{getParameters:A,getProgramCacheKey:p,getUniforms:O,acquireProgram:T,releaseProgram:M,releaseShaderCache:D,programs:c,dispose:H}}function DS(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function NS(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function vm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ym(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let _=0;return d.isInstancedMesh&&(_+=2),d.isSkinnedMesh&&(_+=1),_}function o(d,_,x,A,p,f){let F=i[t];return F===void 0?(F={id:d.id,object:d,geometry:_,material:x,materialVariant:a(d),groupOrder:A,renderOrder:d.renderOrder,z:p,group:f},i[t]=F):(F.id=d.id,F.object=d,F.geometry=_,F.material=x,F.materialVariant=a(d),F.groupOrder=A,F.renderOrder=d.renderOrder,F.z=p,F.group=f),t++,F}function l(d,_,x,A,p,f,F){F.reversedDepth===!0&&(p=-p);let O=o(d,_,x,A,p,f);x.transmission>0?n.push(O):x.transparent===!0?s.push(O):e.push(O)}function c(d,_,x,A,p,f){let F=o(d,_,x,A,p,f);x.transmission>0?n.unshift(F):x.transparent===!0?s.unshift(F):e.unshift(F)}function u(d,_){e.length>1&&e.sort(d||NS),n.length>1&&n.sort(_||vm),s.length>1&&s.sort(_||vm)}function m(){for(let d=t,_=i.length;d<_;d++){let x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:u}}function US(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ym,i.set(n,[a])):s>=r.length?(a=new ym,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function FS(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new ue};break;case"SpotLight":e={position:new $,direction:new $,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new ue,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":e={color:new ue,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function OS(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var BS=0;function kS(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zS(i){let t=new FS,e=OS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);let s=new $,r=new Ve,a=new Ve;function o(c){let u=0,m=0,d=0;for(let tt=0;tt<9;tt++)n.probe[tt].set(0,0,0);let _=0,x=0,A=0,p=0,f=0,F=0,O=0,T=0,M=0,D=0,H=0,E=0,L=0,V=0;c.sort(kS);for(let tt=0,st=c.length;tt<st;tt++){let Y=c[tt],K=Y.color,ot=Y.intensity,lt=Y.distance,Mt=null;if(Y.shadow&&Y.shadow.map&&(Y.shadow.map.texture.format===Ls?Mt=Y.shadow.map.texture:Mt=Y.shadow.map.depthTexture||Y.shadow.map.texture),Y.isAmbientLight)u+=K.r*ot,m+=K.g*ot,d+=K.b*ot;else if(Y.isLightProbe){for(let ct=0;ct<9;ct++)n.probe[ct].addScaledVector(Y.sh.coefficients[ct],ot);V++}else if(Y.isSunLight){let ct=t.get(Y);if(ct.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){let yt=Y.shadow,vt=e.get(Y);vt.shadowIntensity=yt.intensity,vt.shadowBias=yt.bias,vt.shadowNormalBias=yt.normalBias,vt.shadowRadius=yt.radius,vt.shadowMapSize.copy(yt.mapSize).multiply(yt.getFrameExtents()),n.sunShadow[x]=vt,n.sunShadowMap[x]=Mt;let Ht=yt.getViewportCount();for(let Xt=0;Xt<Ht;Xt++)n.sunShadowMatrix[A+Xt]=yt.getMatrix(Xt),n.sunShadowCascade[A+Xt]=yt._cascadeData[Xt];A+=Ht,x++}n.sun[_]=ct,_++}else if(Y.isDirectionalLight){let ct=t.get(Y);if(ct.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){let yt=Y.shadow,vt=e.get(Y);vt.shadowIntensity=yt.intensity,vt.shadowBias=yt.bias,vt.shadowNormalBias=yt.normalBias,vt.shadowRadius=yt.radius,vt.shadowMapSize=yt.mapSize,n.directionalShadow[p]=vt,n.directionalShadowMap[p]=Mt,n.directionalShadowMatrix[p]=Y.shadow.matrix,M++}n.directional[p]=ct,p++}else if(Y.isSpotLight){let ct=t.get(Y);ct.position.setFromMatrixPosition(Y.matrixWorld),ct.color.copy(K).multiplyScalar(ot),ct.distance=lt,ct.coneCos=Math.cos(Y.angle),ct.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),ct.decay=Y.decay,n.spot[F]=ct;let yt=Y.shadow;if(Y.map&&(n.spotLightMap[E]=Y.map,E++,yt.updateMatrices(Y),Y.castShadow&&L++),n.spotLightMatrix[F]=yt.matrix,Y.castShadow){let vt=e.get(Y);vt.shadowIntensity=yt.intensity,vt.shadowBias=yt.bias,vt.shadowNormalBias=yt.normalBias,vt.shadowRadius=yt.radius,vt.shadowMapSize=yt.mapSize,n.spotShadow[F]=vt,n.spotShadowMap[F]=Mt,H++}F++}else if(Y.isRectAreaLight){let ct=t.get(Y);ct.color.copy(K).multiplyScalar(ot),ct.halfWidth.set(Y.width*.5,0,0),ct.halfHeight.set(0,Y.height*.5,0),n.rectArea[O]=ct,O++}else if(Y.isPointLight){let ct=t.get(Y);if(ct.color.copy(Y.color).multiplyScalar(Y.intensity),ct.distance=Y.distance,ct.decay=Y.decay,Y.castShadow){let yt=Y.shadow,vt=e.get(Y);vt.shadowIntensity=yt.intensity,vt.shadowBias=yt.bias,vt.shadowNormalBias=yt.normalBias,vt.shadowRadius=yt.radius,vt.shadowMapSize=yt.mapSize,vt.shadowCameraNear=yt.camera.near,vt.shadowCameraFar=yt.camera.far,n.pointShadow[f]=vt,n.pointShadowMap[f]=Mt,n.pointShadowMatrix[f]=Y.shadow.matrix,D++}n.point[f]=ct,f++}else if(Y.isHemisphereLight){let ct=t.get(Y);ct.skyColor.copy(Y.color).multiplyScalar(ot),ct.groundColor.copy(Y.groundColor).multiplyScalar(ot),n.hemi[T]=ct,T++}}O>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=kt.LTC_FLOAT_1,n.rectAreaLTC2=kt.LTC_FLOAT_2):(n.rectAreaLTC1=kt.LTC_HALF_1,n.rectAreaLTC2=kt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=m,n.ambient[2]=d;let W=n.hash;(W.sunLength!==_||W.directionalLength!==p||W.pointLength!==f||W.spotLength!==F||W.rectAreaLength!==O||W.hemiLength!==T||W.numSunShadows!==x||W.numDirectionalShadows!==M||W.numPointShadows!==D||W.numSpotShadows!==H||W.numSpotMaps!==E||W.numLightProbes!==V)&&(n.sun.length=_,n.directional.length=p,n.spot.length=F,n.rectArea.length=O,n.point.length=f,n.hemi.length=T,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=A,n.sunShadowCascade.length=A,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=D,n.pointShadowMap.length=D,n.pointShadowMatrix.length=D,n.spotShadow.length=H,n.spotShadowMap.length=H,n.spotLightMatrix.length=H+E-L,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=V,W.sunLength=_,W.directionalLength=p,W.pointLength=f,W.spotLength=F,W.rectAreaLength=O,W.hemiLength=T,W.numSunShadows=x,W.numDirectionalShadows=M,W.numPointShadows=D,W.numSpotShadows=H,W.numSpotMaps=E,W.numLightProbes=V,n.version=BS++)}function l(c,u){let m=0,d=0,_=0,x=0,A=0,p=0,f=u.matrixWorldInverse;for(let F=0,O=c.length;F<O;F++){let T=c[F];if(T.isSunLight){let M=n.sun[m];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(f),m++}else if(T.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),d++}else if(T.isSpotLight){let M=n.spot[x];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),x++}else if(T.isRectAreaLight){let M=n.rectArea[A];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(f),a.identity(),r.copy(T.matrixWorld),r.premultiply(f),a.extractRotation(r),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),A++}else if(T.isPointLight){let M=n.point[_];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(f),_++}else if(T.isHemisphereLight){let M=n.hemi[p];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:n}}function Sm(i){let t=new zS(i),e=[],n=[],s=[];function r(d){m.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function u(d){t.setupView(e,d)}let m={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function VS(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Sm(i),t.set(s,[o])):r>=a.length?(o=new Sm(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var HS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GS=`uniform sampler2D shadow_pass;
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
}`,$S=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],WS=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Mm=new Ve,Po=new $,xd=new $;function XS(i,t,e){let n=new Hr,s=new Ft,r=new Ft,a=new We,o=new ec,l=new nc,c={},u=e.maxTextureSize,m={[Cs]:Xn,[Xn]:Cs,[Hi]:Hi},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:HS,fragmentShader:GS}),_=d.clone();_.defines.HORIZONTAL_PASS=1;let x=new ln;x.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new wn(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo;let f=this.type;this.render=function(D,H,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;this.type===pp&&(de("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yo);let L=i.getRenderTarget(),V=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),tt=i.state;tt.setBlending(Gi),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);let st=f!==this.type;st&&H.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(K=>K.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,K=D.length;Y<K;Y++){let ot=D[Y],lt=ot.shadow;if(lt===void 0){de("WebGLShadowMap:",ot,"has no shadow.");continue}if(lt.autoUpdate===!1&&lt.needsUpdate===!1)continue;s.copy(lt.mapSize);let Mt=lt.getFrameExtents();s.multiply(Mt),r.copy(lt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Mt.x),s.x=r.x*Mt.x,lt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Mt.y),s.y=r.y*Mt.y,lt.mapSize.y=r.y));let ct=i.state.buffers.depth.getReversed();if(lt.camera._reversedDepth=ct,lt.map===null||st===!0){if(lt.map!==null&&(lt.map.depthTexture!==null&&(lt.map.depthTexture.dispose(),lt.map.depthTexture=null),lt.map.dispose()),this.type===Yr){if(ot.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}lt.map=new ti(s.x,s.y,{format:Ls,type:Pi,minFilter:In,magFilter:In,generateMipmaps:!1}),lt.map.texture.name=ot.name+".shadowMap",lt.map.depthTexture=new bs(s.x,s.y,_i),lt.map.depthTexture.name=ot.name+".shadowMapDepth",lt.map.depthTexture.format=Bi,lt.map.depthTexture.compareFunction=null,lt.map.depthTexture.minFilter=Mn,lt.map.depthTexture.magFilter=Mn}else ot.isPointLight?(lt.map=new ch(s.x),lt.map.depthTexture=new ql(s.x,Ii)):(lt.map=new ti(s.x,s.y),lt.map.depthTexture=new bs(s.x,s.y,Ii)),lt.map.depthTexture.name=ot.name+".shadowMap",lt.map.depthTexture.format=Bi,this.type===yo?(lt.map.depthTexture.compareFunction=ct?rh:sh,lt.map.depthTexture.minFilter=In,lt.map.depthTexture.magFilter=In):(lt.map.depthTexture.compareFunction=null,lt.map.depthTexture.minFilter=Mn,lt.map.depthTexture.magFilter=Mn);lt.camera.updateProjectionMatrix()}lt.map.isWebGLCubeRenderTarget!==!0&&(lt.map.width!==s.x||lt.map.height!==s.y)&&lt.map.setSize(s.x,s.y);let yt=lt.map.isWebGLCubeRenderTarget?6:lt.getViewportCount();ot.isPointLight!==!0&&lt.updateMatrices(ot,E);for(let vt=0;vt<yt;vt++){let Ht=lt.getCamera(vt);if(ot.isPointLight){let Xt=lt.camera,ke=lt.matrix,be=ot.distance||Xt.far;be!==Xt.far&&(Xt.far=be,Xt.updateProjectionMatrix()),Po.setFromMatrixPosition(ot.matrixWorld),Xt.position.copy(Po),xd.copy(Xt.position),xd.add($S[vt]),Xt.up.copy(WS[vt]),Xt.lookAt(xd),Xt.updateMatrixWorld(),ke.makeTranslation(-Po.x,-Po.y,-Po.z),Mm.multiplyMatrices(Xt.projectionMatrix,Xt.matrixWorldInverse),lt._frustum.setFromProjectionMatrix(Mm,Xt.coordinateSystem,Xt.reversedDepth)}if(lt.map.isWebGLCubeRenderTarget)i.setRenderTarget(lt.map,vt),i.clear();else{vt===0&&(i.setRenderTarget(lt.map),i.clear());let Xt=lt.getViewport(vt);a.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),tt.viewport(a)}n=lt.getFrustum(vt),T(H,E,Ht,ot,this.type)}lt.isPointLightShadow!==!0&&this.type===Yr&&F(lt,E),lt.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(L,V,W)};function F(D,H){let E=t.update(A);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,_.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),D.mapPass===null?D.mapPass=new ti(s.x,s.y,{format:Ls,type:Pi}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value.set(D.map.width,D.map.height),d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(H,null,E,d,A,null),_.uniforms.shadow_pass.value=D.mapPass.texture,_.uniforms.resolution.value.set(D.map.width,D.map.height),_.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(H,null,E,_,A,null)}function O(D,H,E,L){let V=null,W=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(W!==void 0)V=W;else if(V=E.isPointLight===!0?l:o,i.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){let tt=V.uuid,st=H.uuid,Y=c[tt];Y===void 0&&(Y={},c[tt]=Y);let K=Y[st];K===void 0&&(K=V.clone(),Y[st]=K,H.addEventListener("dispose",M)),V=K}if(V.visible=H.visible,V.wireframe=H.wireframe,L===Yr?V.side=H.shadowSide!==null?H.shadowSide:H.side:V.side=H.shadowSide!==null?H.shadowSide:m[H.side],V.alphaMap=H.alphaMap,V.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,V.map=H.map,V.clipShadows=H.clipShadows,V.clippingPlanes=H.clippingPlanes,V.clipIntersection=H.clipIntersection,V.displacementMap=H.displacementMap,V.displacementScale=H.displacementScale,V.displacementBias=H.displacementBias,V.wireframeLinewidth=H.wireframeLinewidth,V.linewidth=H.linewidth,E.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let tt=i.properties.get(V);tt.light=E}return V}function T(D,H,E,L,V){if(D.visible===!1)return;if(D.layers.test(H.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&V===Yr)&&(!D.frustumCulled||D.intersectsFrustum(n))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);let st=t.update(D),Y=D.material;if(Array.isArray(Y)){let K=st.groups;for(let ot=0,lt=K.length;ot<lt;ot++){let Mt=K[ot],ct=Y[Mt.materialIndex];if(ct&&ct.visible){let yt=O(D,ct,L,V);D.onBeforeShadow(i,D,H,E,st,yt,Mt),i.renderBufferDirect(E,null,st,yt,D,Mt),D.onAfterShadow(i,D,H,E,st,yt,Mt)}}}else if(Y.visible){let K=O(D,Y,L,V);D.onBeforeShadow(i,D,H,E,st,K,null),i.renderBufferDirect(E,null,st,K,D,null),D.onAfterShadow(i,D,H,E,st,K,null)}}let tt=D.children;for(let st=0,Y=tt.length;st<Y;st++)T(tt[st],H,E,L,V)}function M(D){D.target.removeEventListener("dispose",M);for(let E in c){let L=c[E],V=D.target.uuid;V in L&&(L[V].dispose(),delete L[V])}}}function qS(i,t){function e(){let q=!1,Lt=new We,gt=null,Bt=new We(0,0,0,0);return{setMask:function(Vt){gt!==Vt&&!q&&(i.colorMask(Vt,Vt,Vt,Vt),gt=Vt)},setLocked:function(Vt){q=Vt},setClear:function(Vt,St,ie,Kt,Ae){Ae===!0&&(Vt*=Kt,St*=Kt,ie*=Kt),Lt.set(Vt,St,ie,Kt),Bt.equals(Lt)===!1&&(i.clearColor(Vt,St,ie,Kt),Bt.copy(Lt))},reset:function(){q=!1,gt=null,Bt.set(-1,0,0,0)}}}function n(){let q=!1,Lt=!1,gt=null,Bt=null,Vt=null;return{setReversed:function(St){if(Lt!==St){let ie=t.get("EXT_clip_control");St?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),Lt=St;let Kt=Vt;Vt=null,this.setClear(Kt)}},getReversed:function(){return Lt},setTest:function(St){St?_t(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(St){gt!==St&&!q&&(i.depthMask(St),gt=St)},setFunc:function(St){if(Lt&&(St=Yp[St]),Bt!==St){switch(St){case Rl:i.depthFunc(i.NEVER);break;case Il:i.depthFunc(i.ALWAYS);break;case Pl:i.depthFunc(i.LESS);break;case Ur:i.depthFunc(i.LEQUAL);break;case Ll:i.depthFunc(i.EQUAL);break;case Dl:i.depthFunc(i.GEQUAL);break;case Nl:i.depthFunc(i.GREATER);break;case Ul:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Bt=St}},setLocked:function(St){q=St},setClear:function(St){Vt!==St&&(Vt=St,Lt&&(St=1-St),i.clearDepth(St))},reset:function(){q=!1,gt=null,Bt=null,Vt=null,Lt=!1}}}function s(){let q=!1,Lt=null,gt=null,Bt=null,Vt=null,St=null,ie=null,Kt=null,Ae=null;return{setTest:function(we){q||(we?_t(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(we){Lt!==we&&!q&&(i.stencilMask(we),Lt=we)},setFunc:function(we,cn,Vn){(gt!==we||Bt!==cn||Vt!==Vn)&&(i.stencilFunc(we,cn,Vn),gt=we,Bt=cn,Vt=Vn)},setOp:function(we,cn,Vn){(St!==we||ie!==cn||Kt!==Vn)&&(i.stencilOp(we,cn,Vn),St=we,ie=cn,Kt=Vn)},setLocked:function(we){q=we},setClear:function(we){Ae!==we&&(i.clearStencil(we),Ae=we)},reset:function(){q=!1,Lt=null,gt=null,Bt=null,Vt=null,St=null,ie=null,Kt=null,Ae=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},m={},d={},_=new WeakMap,x=[],A=null,p=!1,f=null,F=null,O=null,T=null,M=null,D=null,H=null,E=new ue(0,0,0),L=0,V=!1,W=null,tt=null,st=null,Y=null,K=null,ot=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),lt=!1,Mt=0,ct=i.getParameter(i.VERSION);ct.indexOf("WebGL")!==-1?(Mt=parseFloat(/^WebGL (\d)/.exec(ct)[1]),lt=Mt>=1):ct.indexOf("OpenGL ES")!==-1&&(Mt=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),lt=Mt>=2);let yt=null,vt={},Ht=i.getParameter(i.SCISSOR_BOX),Xt=i.getParameter(i.VIEWPORT),ke=new We().fromArray(Ht),be=new We().fromArray(Xt);function Le(q,Lt,gt,Bt){let Vt=new Uint8Array(4),St=i.createTexture();i.bindTexture(q,St),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ie=0;ie<gt;ie++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Lt,0,i.RGBA,1,1,Bt,0,i.RGBA,i.UNSIGNED_BYTE,Vt):i.texImage2D(Lt+ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Vt);return St}let ft={};ft[i.TEXTURE_2D]=Le(i.TEXTURE_2D,i.TEXTURE_2D,1),ft[i.TEXTURE_CUBE_MAP]=Le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[i.TEXTURE_2D_ARRAY]=Le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ft[i.TEXTURE_3D]=Le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(i.DEPTH_TEST),a.setFunc(Ur),Tt(!1),Nt(Bu),_t(i.CULL_FACE),wt(Gi);function _t(q){u[q]!==!0&&(i.enable(q),u[q]=!0)}function At(q){u[q]!==!1&&(i.disable(q),u[q]=!1)}function Qt(q,Lt){return d[q]!==Lt?(i.bindFramebuffer(q,Lt),d[q]=Lt,q===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Lt),q===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Gt(q,Lt){let gt=x,Bt=!1;if(q){gt=_.get(Lt),gt===void 0&&(gt=[],_.set(Lt,gt));let Vt=q.textures;if(gt.length!==Vt.length||gt[0]!==i.COLOR_ATTACHMENT0){for(let St=0,ie=Vt.length;St<ie;St++)gt[St]=i.COLOR_ATTACHMENT0+St;gt.length=Vt.length,Bt=!0}}else gt[0]!==i.BACK&&(gt[0]=i.BACK,Bt=!0);Bt&&i.drawBuffers(gt)}function le(q){return A!==q?(i.useProgram(q),A=q,!0):!1}let ae={[tr]:i.FUNC_ADD,[gp]:i.FUNC_SUBTRACT,[_p]:i.FUNC_REVERSE_SUBTRACT};ae[xp]=i.MIN,ae[vp]=i.MAX;let at={[yp]:i.ZERO,[Sp]:i.ONE,[Mp]:i.SRC_COLOR,[Hu]:i.SRC_ALPHA,[Cp]:i.SRC_ALPHA_SATURATE,[Tp]:i.DST_COLOR,[wp]:i.DST_ALPHA,[bp]:i.ONE_MINUS_SRC_COLOR,[Gu]:i.ONE_MINUS_SRC_ALPHA,[Ap]:i.ONE_MINUS_DST_COLOR,[Ep]:i.ONE_MINUS_DST_ALPHA,[Rp]:i.CONSTANT_COLOR,[Ip]:i.ONE_MINUS_CONSTANT_COLOR,[Pp]:i.CONSTANT_ALPHA,[Lp]:i.ONE_MINUS_CONSTANT_ALPHA};function wt(q,Lt,gt,Bt,Vt,St,ie,Kt,Ae,we){if(q===Gi){p===!0&&(At(i.BLEND),p=!1);return}if(p===!1&&(_t(i.BLEND),p=!0),q!==mp){if(q!==f||we!==V){if((F!==tr||M!==tr)&&(i.blendEquation(i.FUNC_ADD),F=tr,M=tr),we)switch(q){case Zr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ku:i.blendFunc(i.ONE,i.ONE);break;case zu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:me("WebGLState: Invalid blending: ",q);break}else switch(q){case Zr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ku:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zu:me("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vu:me("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:me("WebGLState: Invalid blending: ",q);break}O=null,T=null,D=null,H=null,E.set(0,0,0),L=0,f=q,V=we}return}Vt=Vt||Lt,St=St||gt,ie=ie||Bt,(Lt!==F||Vt!==M)&&(i.blendEquationSeparate(ae[Lt],ae[Vt]),F=Lt,M=Vt),(gt!==O||Bt!==T||St!==D||ie!==H)&&(i.blendFuncSeparate(at[gt],at[Bt],at[St],at[ie]),O=gt,T=Bt,D=St,H=ie),(Kt.equals(E)===!1||Ae!==L)&&(i.blendColor(Kt.r,Kt.g,Kt.b,Ae),E.copy(Kt),L=Ae),f=q,V=!1}function G(q,Lt){q.side===Hi?At(i.CULL_FACE):_t(i.CULL_FACE);let gt=q.side===Xn;Lt&&(gt=!gt),Tt(gt),q.blending===Zr&&q.transparent===!1?wt(Gi):wt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);let Bt=q.stencilWrite;o.setTest(Bt),Bt&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),se(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(q){W!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),W=q)}function Nt(q){q!==dp?(_t(i.CULL_FACE),q!==tt&&(q===Bu?i.cullFace(i.BACK):q===fp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),tt=q}function oe(q){q!==st&&(lt&&i.lineWidth(q),st=q)}function se(q,Lt,gt){q?(_t(i.POLYGON_OFFSET_FILL),(Y!==Lt||K!==gt)&&(Y=Lt,K=gt,a.getReversed()&&(Lt=-Lt),i.polygonOffset(Lt,gt))):At(i.POLYGON_OFFSET_FILL)}function he(q){q?_t(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function fe(q){q===void 0&&(q=i.TEXTURE0+ot-1),yt!==q&&(i.activeTexture(q),yt=q)}function z(q,Lt,gt){gt===void 0&&(yt===null?gt=i.TEXTURE0+ot-1:gt=yt);let Bt=vt[gt];Bt===void 0&&(Bt={type:void 0,texture:void 0},vt[gt]=Bt),(Bt.type!==q||Bt.texture!==Lt)&&(yt!==gt&&(i.activeTexture(gt),yt=gt),i.bindTexture(q,Lt||ft[q]),Bt.type=q,Bt.texture=Lt)}function Re(){let q=vt[yt];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function pe(){try{i.compressedTexImage2D(...arguments)}catch(q){me("WebGLState:",q)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(q){me("WebGLState:",q)}}function y(){try{i.texSubImage2D(...arguments)}catch(q){me("WebGLState:",q)}}function X(){try{i.texSubImage3D(...arguments)}catch(q){me("WebGLState:",q)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(q){me("WebGLState:",q)}}function ht(){try{i.compressedTexSubImage3D(...arguments)}catch(q){me("WebGLState:",q)}}function Rt(){try{i.texStorage2D(...arguments)}catch(q){me("WebGLState:",q)}}function Dt(){try{i.texStorage3D(...arguments)}catch(q){me("WebGLState:",q)}}function ut(){try{i.texImage2D(...arguments)}catch(q){me("WebGLState:",q)}}function xt(){try{i.texImage3D(...arguments)}catch(q){me("WebGLState:",q)}}function Ut(q){return m[q]!==void 0?m[q]:i.getParameter(q)}function te(q,Lt){m[q]!==Lt&&(i.pixelStorei(q,Lt),m[q]=Lt)}function zt(q){ke.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),ke.copy(q))}function Ot(q){be.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),be.copy(q))}function ee(q,Lt){let gt=c.get(Lt);gt===void 0&&(gt=new WeakMap,c.set(Lt,gt));let Bt=gt.get(q);Bt===void 0&&(Bt=i.getUniformBlockIndex(Lt,q.name),gt.set(q,Bt))}function ce(q,Lt){let Bt=c.get(Lt).get(q);l.get(Lt)!==Bt&&(i.uniformBlockBinding(Lt,Bt,q.__bindingPointIndex),l.set(Lt,Bt))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},m={},yt=null,vt={},d={},_=new WeakMap,x=[],A=null,p=!1,f=null,F=null,O=null,T=null,M=null,D=null,H=null,E=new ue(0,0,0),L=0,V=!1,W=null,tt=null,st=null,Y=null,K=null,ke.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:At,bindFramebuffer:Qt,drawBuffers:Gt,useProgram:le,setBlending:wt,setMaterial:G,setFlipSided:Tt,setCullFace:Nt,setLineWidth:oe,setPolygonOffset:se,setScissorTest:he,activeTexture:fe,bindTexture:z,unbindTexture:Re,compressedTexImage2D:pe,compressedTexImage3D:P,texImage2D:ut,texImage3D:xt,pixelStorei:te,getParameter:Ut,updateUBOMapping:ee,uniformBlockBinding:ce,texStorage2D:Rt,texStorage3D:Dt,texSubImage2D:y,texSubImage3D:X,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:zt,viewport:Ot,reset:_e}}function YS(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,u=new WeakMap,m=new Set,d,_=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(P,y){return x?new OffscreenCanvas(P,y):Va("canvas")}function p(P,y,X){let rt=1,ht=pe(P);if((ht.width>X||ht.height>X)&&(rt=X/Math.max(ht.width,ht.height)),rt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Rt=Math.floor(rt*ht.width),Dt=Math.floor(rt*ht.height);d===void 0&&(d=A(Rt,Dt));let ut=y?A(Rt,Dt):d;return ut.width=Rt,ut.height=Dt,ut.getContext("2d").drawImage(P,0,0,Rt,Dt),de("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+Rt+"x"+Dt+")."),ut}else return"data"in P&&de("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),P;return P}function f(P){return P.generateMipmaps}function F(P){i.generateMipmap(P)}function O(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(P,y,X,rt,ht,Rt=!1){if(P!==null){if(i[P]!==void 0)return i[P];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Dt;rt&&(Dt=t.get("EXT_texture_norm16"),Dt||de("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=y;if(y===i.RED&&(X===i.FLOAT&&(ut=i.R32F),X===i.HALF_FLOAT&&(ut=i.R16F),X===i.UNSIGNED_BYTE&&(ut=i.R8),X===i.UNSIGNED_SHORT&&Dt&&(ut=Dt.R16_EXT),X===i.SHORT&&Dt&&(ut=Dt.R16_SNORM_EXT)),y===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ut=i.R8UI),X===i.UNSIGNED_SHORT&&(ut=i.R16UI),X===i.UNSIGNED_INT&&(ut=i.R32UI),X===i.BYTE&&(ut=i.R8I),X===i.SHORT&&(ut=i.R16I),X===i.INT&&(ut=i.R32I)),y===i.RG&&(X===i.FLOAT&&(ut=i.RG32F),X===i.HALF_FLOAT&&(ut=i.RG16F),X===i.UNSIGNED_BYTE&&(ut=i.RG8),X===i.UNSIGNED_SHORT&&Dt&&(ut=Dt.RG16_EXT),X===i.SHORT&&Dt&&(ut=Dt.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ut=i.RG8UI),X===i.UNSIGNED_SHORT&&(ut=i.RG16UI),X===i.UNSIGNED_INT&&(ut=i.RG32UI),X===i.BYTE&&(ut=i.RG8I),X===i.SHORT&&(ut=i.RG16I),X===i.INT&&(ut=i.RG32I)),y===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),X===i.UNSIGNED_INT&&(ut=i.RGB32UI),X===i.BYTE&&(ut=i.RGB8I),X===i.SHORT&&(ut=i.RGB16I),X===i.INT&&(ut=i.RGB32I)),y===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),X===i.UNSIGNED_INT&&(ut=i.RGBA32UI),X===i.BYTE&&(ut=i.RGBA8I),X===i.SHORT&&(ut=i.RGBA16I),X===i.INT&&(ut=i.RGBA32I)),y===i.RGB&&(X===i.UNSIGNED_SHORT&&Dt&&(ut=Dt.RGB16_EXT),X===i.SHORT&&Dt&&(ut=Dt.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(ut=i.R11F_G11F_B10F)),y===i.RGBA){let xt=Rt?za:Ne.getTransfer(ht);X===i.FLOAT&&(ut=i.RGBA32F),X===i.HALF_FLOAT&&(ut=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ut=xt===$e?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&Dt&&(ut=Dt.RGBA16_EXT),X===i.SHORT&&Dt&&(ut=Dt.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function M(P,y){let X;return P?y===null||y===Ii||y===Kr?X=i.DEPTH24_STENCIL8:y===_i?X=i.DEPTH32F_STENCIL8:y===Jr&&(X=i.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ii||y===Kr?X=i.DEPTH_COMPONENT24:y===_i?X=i.DEPTH_COMPONENT32F:y===Jr&&(X=i.DEPTH_COMPONENT16),X}function D(P,y){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==Mn&&P.minFilter!==In?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function H(P){let y=P.target;y.removeEventListener("dispose",H),L(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&m.delete(y)}function E(P){let y=P.target;y.removeEventListener("dispose",E),W(y)}function L(P){let y=n.get(P);if(y.__webglInit===void 0)return;let X=P.source,rt=_.get(X);if(rt){let ht=rt[y.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&V(P),Object.keys(rt).length===0&&_.delete(X)}n.remove(P)}function V(P){let y=n.get(P);i.deleteTexture(y.__webglTexture);let X=P.source,rt=_.get(X);delete rt[y.__cacheKey],a.memory.textures--}function W(P){let y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(y.__webglFramebuffer[rt]))for(let ht=0;ht<y.__webglFramebuffer[rt].length;ht++)i.deleteFramebuffer(y.__webglFramebuffer[rt][ht]);else i.deleteFramebuffer(y.__webglFramebuffer[rt]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[rt])}else{if(Array.isArray(y.__webglFramebuffer))for(let rt=0;rt<y.__webglFramebuffer.length;rt++)i.deleteFramebuffer(y.__webglFramebuffer[rt]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let rt=0;rt<y.__webglColorRenderbuffer.length;rt++)y.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[rt]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let X=P.textures;for(let rt=0,ht=X.length;rt<ht;rt++){let Rt=n.get(X[rt]);Rt.__webglTexture&&(i.deleteTexture(Rt.__webglTexture),a.memory.textures--),n.remove(X[rt])}n.remove(P)}let tt=0;function st(){tt=0}function Y(){return tt}function K(P){tt=P}function ot(){let P=tt;return P>=s.maxTextures&&de("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),tt+=1,P}function lt(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function Mt(P,y){let X=n.get(P);if(P.isVideoTexture&&z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){let rt=P.image;if(rt===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{At(X,P,y);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+y)}function ct(P,y){let X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){At(X,P,y);return}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+y)}function yt(P,y){let X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){At(X,P,y);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+y)}function vt(P,y){let X=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&X.__version!==P.version){Qt(X,P,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+y)}let Ht={[Fl]:i.REPEAT,[Fi]:i.CLAMP_TO_EDGE,[Ol]:i.MIRRORED_REPEAT},Xt={[Mn]:i.NEAREST,[Up]:i.NEAREST_MIPMAP_NEAREST,[Mo]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[vc]:i.LINEAR_MIPMAP_NEAREST,[Is]:i.LINEAR_MIPMAP_LINEAR},ke={[kp]:i.NEVER,[$p]:i.ALWAYS,[zp]:i.LESS,[sh]:i.LEQUAL,[Vp]:i.EQUAL,[rh]:i.GEQUAL,[Hp]:i.GREATER,[Gp]:i.NOTEQUAL};function be(P,y){if(y.type===_i&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===In||y.magFilter===vc||y.magFilter===Mo||y.magFilter===Is||y.minFilter===In||y.minFilter===vc||y.minFilter===Mo||y.minFilter===Is)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Ht[y.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Ht[y.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Ht[y.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Xt[y.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Xt[y.minFilter]),y.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ke[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Mn||y.minFilter!==Mo&&y.minFilter!==Is||y.type===_i&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Le(P,y){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",H));let rt=y.source,ht=_.get(rt);ht===void 0&&(ht={},_.set(rt,ht));let Rt=lt(y);if(Rt!==P.__cacheKey){ht[Rt]===void 0&&(ht[Rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ht[Rt].usedTimes++;let Dt=ht[P.__cacheKey];Dt!==void 0&&(ht[P.__cacheKey].usedTimes--,Dt.usedTimes===0&&V(y)),P.__cacheKey=Rt,P.__webglTexture=ht[Rt].texture}return X}function ft(P,y,X){return Math.floor(Math.floor(P/X)/y)}function _t(P,y,X,rt){let Rt=P.updateRanges;if(Rt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,X,rt,y.data);else{Rt.sort((te,zt)=>te.start-zt.start);let Dt=0;for(let te=1;te<Rt.length;te++){let zt=Rt[Dt],Ot=Rt[te],ee=zt.start+zt.count,ce=ft(Ot.start,y.width,4),_e=ft(zt.start,y.width,4);Ot.start<=ee+1&&ce===_e&&ft(Ot.start+Ot.count-1,y.width,4)===ce?zt.count=Math.max(zt.count,Ot.start+Ot.count-zt.start):(++Dt,Rt[Dt]=Ot)}Rt.length=Dt+1;let ut=e.getParameter(i.UNPACK_ROW_LENGTH),xt=e.getParameter(i.UNPACK_SKIP_PIXELS),Ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let te=0,zt=Rt.length;te<zt;te++){let Ot=Rt[te],ee=Math.floor(Ot.start/4),ce=Math.ceil(Ot.count/4),_e=ee%y.width,q=Math.floor(ee/y.width),Lt=ce,gt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),e.pixelStorei(i.UNPACK_SKIP_ROWS,q),e.texSubImage2D(i.TEXTURE_2D,0,_e,q,Lt,gt,X,rt,y.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ut),e.pixelStorei(i.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ut)}}function At(P,y,X){let rt=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(rt=i.TEXTURE_3D);let ht=Le(P,y),Rt=y.source;e.bindTexture(rt,P.__webglTexture,i.TEXTURE0+X);let Dt=n.get(Rt);if(Rt.version!==Dt.__version||ht===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let gt=Ne.getPrimaries(Ne.workingColorSpace),Bt=y.colorSpace===hs?null:Ne.getPrimaries(y.colorSpace),Vt=y.colorSpace===hs||gt===Bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let xt=p(y.image,!1,s.maxTextureSize);xt=Re(y,xt);let Ut=r.convert(y.format,y.colorSpace),te=r.convert(y.type),zt=T(y.internalFormat,Ut,te,y.normalized,y.colorSpace,y.isVideoTexture);be(rt,y);let Ot,ee=y.mipmaps,ce=y.isVideoTexture!==!0,_e=Dt.__version===void 0||ht===!0,q=Rt.dataReady,Lt=D(y,xt);if(y.isDepthTexture)zt=M(y.format===Ps,y.type),_e&&(ce?e.texStorage2D(i.TEXTURE_2D,1,zt,xt.width,xt.height):e.texImage2D(i.TEXTURE_2D,0,zt,xt.width,xt.height,0,Ut,te,null));else if(y.isDataTexture)if(ee.length>0){ce&&_e&&e.texStorage2D(i.TEXTURE_2D,Lt,zt,ee[0].width,ee[0].height);for(let gt=0,Bt=ee.length;gt<Bt;gt++)Ot=ee[gt],ce?q&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Ot.width,Ot.height,Ut,te,Ot.data):e.texImage2D(i.TEXTURE_2D,gt,zt,Ot.width,Ot.height,0,Ut,te,Ot.data);y.generateMipmaps=!1}else ce?(_e&&e.texStorage2D(i.TEXTURE_2D,Lt,zt,xt.width,xt.height),q&&_t(y,xt,Ut,te)):e.texImage2D(i.TEXTURE_2D,0,zt,xt.width,xt.height,0,Ut,te,xt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ce&&_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,zt,ee[0].width,ee[0].height,xt.depth);for(let gt=0,Bt=ee.length;gt<Bt;gt++)if(Ot=ee[gt],y.format!==xi)if(Ut!==null)if(ce){if(q)if(y.layerUpdates.size>0){let Vt=dd(Ot.width,Ot.height,y.format,y.type);for(let St of y.layerUpdates){let ie=Ot.data.subarray(St*Vt/Ot.data.BYTES_PER_ELEMENT,(St+1)*Vt/Ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,St,Ot.width,Ot.height,1,Ut,ie)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Ot.width,Ot.height,xt.depth,Ut,Ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,zt,Ot.width,Ot.height,xt.depth,0,Ot.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Ot.width,Ot.height,xt.depth,Ut,te,Ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,zt,Ot.width,Ot.height,xt.depth,0,Ut,te,Ot.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ce&&_e&&e.texStorage2D(i.TEXTURE_2D,Lt,zt,ee[0].width,ee[0].height);for(let gt=0,Bt=ee.length;gt<Bt;gt++)Ot=ee[gt],y.format!==xi?Ut!==null?ce?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,Ot.width,Ot.height,Ut,Ot.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,zt,Ot.width,Ot.height,0,Ot.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?q&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Ot.width,Ot.height,Ut,te,Ot.data):e.texImage2D(i.TEXTURE_2D,gt,zt,Ot.width,Ot.height,0,Ut,te,Ot.data)}else if(y.isDataArrayTexture)if(ce){if(_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,zt,xt.width,xt.height,xt.depth),q)if(y.layerUpdates.size>0){let gt=dd(xt.width,xt.height,y.format,y.type);for(let Bt of y.layerUpdates){let Vt=xt.data.subarray(Bt*gt/xt.data.BYTES_PER_ELEMENT,(Bt+1)*gt/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Bt,xt.width,xt.height,1,Ut,te,Vt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Ut,te,xt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,xt.width,xt.height,xt.depth,0,Ut,te,xt.data);else if(y.isData3DTexture)ce?(_e&&e.texStorage3D(i.TEXTURE_3D,Lt,zt,xt.width,xt.height,xt.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Ut,te,xt.data)):e.texImage3D(i.TEXTURE_3D,0,zt,xt.width,xt.height,xt.depth,0,Ut,te,xt.data);else if(y.isFramebufferTexture){if(_e)if(ce)e.texStorage2D(i.TEXTURE_2D,Lt,zt,xt.width,xt.height);else{let gt=xt.width,Bt=xt.height;for(let Vt=0;Vt<Lt;Vt++)e.texImage2D(i.TEXTURE_2D,Vt,zt,gt,Bt,0,Ut,te,null),gt>>=1,Bt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let gt=i.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),xt.parentNode!==gt){gt.appendChild(xt),m.add(y),gt.onpaint=Bt=>{let Vt=Bt.changedElements;for(let St of m)Vt.includes(St.image)&&(St.needsUpdate=!0)},gt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,xt);else{let Vt=i.RGBA,St=i.RGBA,ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Vt,St,ie,xt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ee.length>0){if(ce&&_e){let gt=pe(ee[0]);e.texStorage2D(i.TEXTURE_2D,Lt,zt,gt.width,gt.height)}for(let gt=0,Bt=ee.length;gt<Bt;gt++)Ot=ee[gt],ce?q&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Ut,te,Ot):e.texImage2D(i.TEXTURE_2D,gt,zt,Ut,te,Ot);y.generateMipmaps=!1}else if(ce){if(_e){let gt=pe(xt);e.texStorage2D(i.TEXTURE_2D,Lt,zt,gt.width,gt.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ut,te,xt)}else e.texImage2D(i.TEXTURE_2D,0,zt,Ut,te,xt);f(y)&&F(rt),Dt.__version=Rt.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Qt(P,y,X){if(y.image.length!==6)return;let rt=Le(P,y),ht=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);let Rt=n.get(ht);if(ht.version!==Rt.__version||rt===!0){e.activeTexture(i.TEXTURE0+X);let Dt=Ne.getPrimaries(Ne.workingColorSpace),ut=y.colorSpace===hs?null:Ne.getPrimaries(y.colorSpace),xt=y.colorSpace===hs||Dt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Ut=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,zt=[];for(let St=0;St<6;St++)!Ut&&!te?zt[St]=p(y.image[St],!0,s.maxCubemapSize):zt[St]=te?y.image[St].image:y.image[St],zt[St]=Re(y,zt[St]);let Ot=zt[0],ee=r.convert(y.format,y.colorSpace),ce=r.convert(y.type),_e=T(y.internalFormat,ee,ce,y.normalized,y.colorSpace),q=y.isVideoTexture!==!0,Lt=Rt.__version===void 0||rt===!0,gt=ht.dataReady,Bt=D(y,Ot);be(i.TEXTURE_CUBE_MAP,y);let Vt;if(Ut){q&&Lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,_e,Ot.width,Ot.height);for(let St=0;St<6;St++){Vt=zt[St].mipmaps;for(let ie=0;ie<Vt.length;ie++){let Kt=Vt[ie];y.format!==xi?ee!==null?q?gt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ie,0,0,Kt.width,Kt.height,ee,Kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ie,_e,Kt.width,Kt.height,0,Kt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ie,0,0,Kt.width,Kt.height,ee,ce,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ie,_e,Kt.width,Kt.height,0,ee,ce,Kt.data)}}}else{if(Vt=y.mipmaps,q&&Lt){Vt.length>0&&Bt++;let St=pe(zt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,_e,St.width,St.height)}for(let St=0;St<6;St++)if(te){q?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,zt[St].width,zt[St].height,ee,ce,zt[St].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,_e,zt[St].width,zt[St].height,0,ee,ce,zt[St].data);for(let ie=0;ie<Vt.length;ie++){let Ae=Vt[ie].image[St].image;q?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ie+1,0,0,Ae.width,Ae.height,ee,ce,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ie+1,_e,Ae.width,Ae.height,0,ee,ce,Ae.data)}}else{q?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,ee,ce,zt[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,_e,ee,ce,zt[St]);for(let ie=0;ie<Vt.length;ie++){let Kt=Vt[ie];q?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ie+1,0,0,ee,ce,Kt.image[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ie+1,_e,ee,ce,Kt.image[St])}}}f(y)&&F(i.TEXTURE_CUBE_MAP),Rt.__version=ht.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Gt(P,y,X,rt,ht,Rt){let Dt=r.convert(X.format,X.colorSpace),ut=r.convert(X.type),xt=T(X.internalFormat,Dt,ut,X.normalized,X.colorSpace),Ut=n.get(y),te=n.get(X);if(te.__renderTarget=y,!Ut.__hasExternalTextures){let zt=Math.max(1,y.width>>Rt),Ot=Math.max(1,y.height>>Rt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,Rt,xt,zt,Ot,y.depth,0,Dt,ut,null):e.texImage2D(ht,Rt,xt,zt,Ot,0,Dt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),fe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,ht,te.__webglTexture,0,he(y)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,ht,te.__webglTexture,Rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function le(P,y,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),y.depthBuffer){let rt=y.depthTexture,ht=rt&&rt.isDepthTexture?rt.type:null,Rt=M(y.stencilBuffer,ht),Dt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fe(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(y),Rt,y.width,y.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(y),Rt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,P)}else{let rt=y.textures;for(let ht=0;ht<rt.length;ht++){let Rt=rt[ht],Dt=r.convert(Rt.format,Rt.colorSpace),ut=r.convert(Rt.type),xt=T(Rt.internalFormat,Dt,ut,Rt.normalized,Rt.colorSpace);fe(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(y),xt,y.width,y.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(y),xt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,xt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(P,y,X){let rt=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ht=n.get(y.depthTexture);if(ht.__renderTarget=y,(!ht.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),rt){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,y.depthTexture.addEventListener("dispose",H)),ht.__webglTexture===void 0){ht.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),be(i.TEXTURE_CUBE_MAP,y.depthTexture);let Ut=r.convert(y.depthTexture.format),te=r.convert(y.depthTexture.type),zt;y.depthTexture.format===Bi?zt=i.DEPTH_COMPONENT24:y.depthTexture.format===Ps&&(zt=i.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,zt,y.width,y.height,0,Ut,te,null)}}else Mt(y.depthTexture,0);let Rt=ht.__webglTexture,Dt=he(y),ut=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,xt=y.depthTexture.format===Ps?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Bi)fe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,ut,Rt,0,Dt):i.framebufferTexture2D(i.FRAMEBUFFER,xt,ut,Rt,0);else if(y.depthTexture.format===Ps)fe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,ut,Rt,0,Dt):i.framebufferTexture2D(i.FRAMEBUFFER,xt,ut,Rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(P){let y=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let rt=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),rt){let ht=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,rt.removeEventListener("dispose",ht)};rt.addEventListener("dispose",ht),y.__depthDisposeCallback=ht}y.__boundDepthTexture=rt}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(X)for(let rt=0;rt<6;rt++)ae(y.__webglFramebuffer[rt],P,rt);else{let rt=P.texture.mipmaps;rt&&rt.length>0?ae(y.__webglFramebuffer[0],P,0):ae(y.__webglFramebuffer,P,0)}else if(X){y.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[rt]),y.__webglDepthbuffer[rt]===void 0)y.__webglDepthbuffer[rt]=i.createRenderbuffer(),le(y.__webglDepthbuffer[rt],P,!1);else{let ht=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=y.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,Rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,Rt)}}else{let rt=P.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),le(y.__webglDepthbuffer,P,!1);else{let ht=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,Rt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(P,y,X){let rt=n.get(P);y!==void 0&&Gt(rt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&at(P)}function G(P){let y=P.texture,X=n.get(P),rt=n.get(y);P.addEventListener("dispose",E);let ht=P.textures,Rt=P.isWebGLCubeRenderTarget===!0,Dt=ht.length>1;if(Dt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=y.version,a.memory.textures++),Rt){X.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[ut]=[];for(let xt=0;xt<y.mipmaps.length;xt++)X.__webglFramebuffer[ut][xt]=i.createFramebuffer()}else X.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)X.__webglFramebuffer[ut]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let ut=0,xt=ht.length;ut<xt;ut++){let Ut=n.get(ht[ut]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&fe(P)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ut=0;ut<ht.length;ut++){let xt=ht[ut];X.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ut]);let Ut=r.convert(xt.format,xt.colorSpace),te=r.convert(xt.type),zt=T(xt.internalFormat,Ut,te,xt.normalized,xt.colorSpace,P.isXRRenderTarget===!0),Ot=he(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,zt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,X.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),le(X.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Rt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),be(i.TEXTURE_CUBE_MAP,y);for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0)for(let xt=0;xt<y.mipmaps.length;xt++)Gt(X.__webglFramebuffer[ut][xt],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,xt);else Gt(X.__webglFramebuffer[ut],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);f(y)&&F(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let ut=0,xt=ht.length;ut<xt;ut++){let Ut=ht[ut],te=n.get(Ut),zt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(zt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(zt,te.__webglTexture),be(zt,Ut),Gt(X.__webglFramebuffer,P,Ut,i.COLOR_ATTACHMENT0+ut,zt,0),f(Ut)&&F(zt)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ut=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,rt.__webglTexture),be(ut,y),y.mipmaps&&y.mipmaps.length>0)for(let xt=0;xt<y.mipmaps.length;xt++)Gt(X.__webglFramebuffer[xt],P,y,i.COLOR_ATTACHMENT0,ut,xt);else Gt(X.__webglFramebuffer,P,y,i.COLOR_ATTACHMENT0,ut,0);f(y)&&F(ut),e.unbindTexture()}P.depthBuffer&&at(P)}function Tt(P){let y=P.textures;for(let X=0,rt=y.length;X<rt;X++){let ht=y[X];if(f(ht)){let Rt=O(P),Dt=n.get(ht).__webglTexture;e.bindTexture(Rt,Dt),F(Rt),e.unbindTexture()}}}let Nt=[],oe=[];function se(P){if(P.samples>0){if(fe(P)===!1){let y=P.textures,X=P.width,rt=P.height,ht=i.COLOR_BUFFER_BIT,Rt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(P),ut=y.length>1;if(ut)for(let Ut=0;Ut<y.length;Ut++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);let xt=P.texture.mipmaps;xt&&xt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Ut=0;Ut<y.length;Ut++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Ut]);let te=n.get(y[Ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,X,rt,0,0,X,rt,ht,i.NEAREST),l===!0&&(Nt.length=0,oe.length=0,Nt.push(i.COLOR_ATTACHMENT0+Ut),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Nt.push(Rt),oe.push(Rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Ut=0;Ut<y.length;Ut++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Ut]);let te=n.get(y[Ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function he(P){return Math.min(s.maxSamples,P.samples)}function fe(P){let y=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function z(P){let y=a.render.frame;u.get(P)!==y&&(u.set(P,y),P.update())}function Re(P,y){let X=P.colorSpace,rt=P.format,ht=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==ka&&X!==hs&&(Ne.getTransfer(X)===$e?(rt!==xi||ht!==ni)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):me("WebGLTextures: Unsupported texture color space:",X)),y}function pe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=ot,this.resetTextureUnits=st,this.getTextureUnits=Y,this.setTextureUnits=K,this.setTexture2D=Mt,this.setTexture2DArray=ct,this.setTexture3D=yt,this.setTextureCube=vt,this.rebindTextures=wt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Gt,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ZS(i,t){function e(n,s=hs){let r,a=Ne.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===Sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===td)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ed)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ju)return i.BYTE;if(n===Qu)return i.SHORT;if(n===Jr)return i.UNSIGNED_SHORT;if(n===yc)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===_i)return i.FLOAT;if(n===Pi)return i.HALF_FLOAT;if(n===nd)return i.ALPHA;if(n===id)return i.RGB;if(n===xi)return i.RGBA;if(n===Bi)return i.DEPTH_COMPONENT;if(n===Ps)return i.DEPTH_STENCIL;if(n===bc)return i.RED;if(n===wc)return i.RED_INTEGER;if(n===Ls)return i.RG;if(n===Ec)return i.RG_INTEGER;if(n===Tc)return i.RGBA_INTEGER;if(n===bo||n===wo||n===Eo||n===To)if(a===$e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ac||n===Cc||n===Rc||n===Ic)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ac)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pc||n===Lc||n===Dc||n===Nc||n===Uc||n===Ao||n===Fc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pc||n===Lc)return a===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Dc)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Nc)return r.COMPRESSED_R11_EAC;if(n===Uc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ao)return r.COMPRESSED_RG11_EAC;if(n===Fc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oc||n===Bc||n===kc||n===zc||n===Vc||n===Hc||n===Gc||n===$c||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===Jc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oc)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bc)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kc)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zc)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vc)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hc)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gc)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$c)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wc)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xc)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qc)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yc)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zc)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jc)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kc||n===jc||n===Qc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Kc)return a===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===th||n===eh||n===Co||n===nh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===th)return r.COMPRESSED_RED_RGTC1_EXT;if(n===eh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Kr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var JS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KS=`
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

}`,Td=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ja(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new En({vertexShader:JS,fragmentShader:KS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wn(new lo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ad=class extends ki{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,m=null,d=null,_=null,x=null,A=typeof XRWebGLBinding<"u",p=new Td,f={},F=e.getContextAttributes(),O=null,T=null,M=[],D=[],H=new Ft,E=null,L=null,V=new Bn;V.viewport=new We;let W=new Bn;W.viewport=new We;let tt=[V,W],st=new mc,Y=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ft){let _t=M[ft];return _t===void 0&&(_t=new Vr,M[ft]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(ft){let _t=M[ft];return _t===void 0&&(_t=new Vr,M[ft]=_t),_t.getGripSpace()},this.getHand=function(ft){let _t=M[ft];return _t===void 0&&(_t=new Vr,M[ft]=_t),_t.getHandSpace()};function ot(ft){let _t=D.indexOf(ft.inputSource);if(_t===-1)return;let At=M[_t];At!==void 0&&(At.update(ft.inputSource,ft.frame,c||a),At.dispatchEvent({type:ft.type,data:ft.inputSource}))}function lt(){s.removeEventListener("select",ot),s.removeEventListener("selectstart",ot),s.removeEventListener("selectend",ot),s.removeEventListener("squeeze",ot),s.removeEventListener("squeezestart",ot),s.removeEventListener("squeezeend",ot),s.removeEventListener("end",lt),s.removeEventListener("inputsourceschange",Mt);for(let ft=0;ft<M.length;ft++){let _t=D[ft];_t!==null&&(D[ft]=null,M[ft].disconnect(_t))}Y=null,K=null,p.reset();for(let ft in f)delete f[ft];if(t.setRenderTarget(O),_=null,d=null,m=null,s=null,T=null,Le.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(H.width,H.height,!1),L!==null){let ft=L.camera;ft.fov=L.fov,ft.zoom=L.zoom,ft.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ft){r=ft,n.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ft){o=ft,n.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ft){c=ft},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return m===null&&A&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ft){if(s=ft,s!==null){if(O=t.getRenderTarget(),s.addEventListener("select",ot),s.addEventListener("selectstart",ot),s.addEventListener("selectend",ot),s.addEventListener("squeeze",ot),s.addEventListener("squeezestart",ot),s.addEventListener("squeezeend",ot),s.addEventListener("end",lt),s.addEventListener("inputsourceschange",Mt),F.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(H),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Qt=null,Gt=null;F.depth&&(Gt=F.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=F.stencil?Ps:Bi,Qt=F.stencil?Kr:Ii);let le={colorFormat:e.RGBA8,depthFormat:Gt,scaleFactor:r};m=this.getBinding(),d=m.createProjectionLayer(le),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new ti(d.textureWidth,d.textureHeight,{format:xi,type:ni,depthTexture:new bs(d.textureWidth,d.textureHeight,Qt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:F.stencil,colorSpace:t.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let At={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),T=new ti(_.framebufferWidth,_.framebufferHeight,{format:xi,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Le.setContext(s),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Mt(ft){for(let _t=0;_t<ft.removed.length;_t++){let At=ft.removed[_t],Qt=D.indexOf(At);Qt>=0&&(D[Qt]=null,M[Qt].disconnect(At))}for(let _t=0;_t<ft.added.length;_t++){let At=ft.added[_t],Qt=D.indexOf(At);if(Qt===-1){for(let le=0;le<M.length;le++)if(le>=D.length){D.push(At),Qt=le;break}else if(D[le]===null){D[le]=At,Qt=le;break}if(Qt===-1)break}let Gt=M[Qt];Gt&&Gt.connect(At)}}let ct=new $,yt=new $;function vt(ft,_t,At){ct.setFromMatrixPosition(_t.matrixWorld),yt.setFromMatrixPosition(At.matrixWorld);let Qt=ct.distanceTo(yt),Gt=_t.projectionMatrix.elements,le=At.projectionMatrix.elements,ae=Gt[14]/(Gt[10]-1),at=Gt[14]/(Gt[10]+1),wt=(Gt[9]+1)/Gt[5],G=(Gt[9]-1)/Gt[5],Tt=(Gt[8]-1)/Gt[0],Nt=(le[8]+1)/le[0],oe=ae*Tt,se=ae*Nt,he=Qt/(-Tt+Nt),fe=he*-Tt;if(_t.matrixWorld.decompose(ft.position,ft.quaternion,ft.scale),ft.translateX(fe),ft.translateZ(he),ft.matrixWorld.compose(ft.position,ft.quaternion,ft.scale),ft.matrixWorldInverse.copy(ft.matrixWorld).invert(),Gt[10]===-1)ft.projectionMatrix.copy(_t.projectionMatrix),ft.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{let z=ae+he,Re=at+he,pe=oe-fe,P=se+(Qt-fe),y=wt*at/Re*z,X=G*at/Re*z;ft.projectionMatrix.makePerspective(pe,P,y,X,z,Re),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert()}}function Ht(ft,_t){_t===null?ft.matrixWorld.copy(ft.matrix):ft.matrixWorld.multiplyMatrices(_t.matrixWorld,ft.matrix),ft.matrixWorldInverse.copy(ft.matrixWorld).invert()}this.updateCamera=function(ft){if(s===null)return;let _t=ft.near,At=ft.far;p.texture!==null&&(p.depthNear>0&&(_t=p.depthNear),p.depthFar>0&&(At=p.depthFar)),st.near=W.near=V.near=_t,st.far=W.far=V.far=At,(Y!==st.near||K!==st.far)&&(s.updateRenderState({depthNear:st.near,depthFar:st.far}),Y=st.near,K=st.far),st.layers.mask=ft.layers.mask|6,V.layers.mask=st.layers.mask&-5,W.layers.mask=st.layers.mask&-3;let Qt=ft.parent,Gt=st.cameras;Ht(st,Qt);for(let le=0;le<Gt.length;le++)Ht(Gt[le],Qt);Gt.length===2?vt(st,V,W):st.projectionMatrix.copy(V.projectionMatrix),L===null&&ft.isPerspectiveCamera&&(L={camera:ft,fov:ft.fov,zoom:ft.zoom}),Xt(ft,st,Qt)};function Xt(ft,_t,At){At===null?ft.matrix.copy(_t.matrixWorld):(ft.matrix.copy(At.matrixWorld),ft.matrix.invert(),ft.matrix.multiply(_t.matrixWorld)),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.updateMatrixWorld(!0),ft.projectionMatrix.copy(_t.projectionMatrix),ft.projectionMatrixInverse.copy(_t.projectionMatrixInverse),ft.isPerspectiveCamera&&(ft.fov=Br*2*Math.atan(1/ft.projectionMatrix.elements[5]),ft.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(d===null&&_===null))return l},this.setFoveation=function(ft){l=ft,d!==null&&(d.fixedFoveation=ft),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ft)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(st)},this.getCameraTexture=function(ft){return f[ft]};let ke=null;function be(ft,_t){if(u=_t.getViewerPose(c||a),x=_t,u!==null){let At=u.views;_!==null&&(t.setRenderTargetFramebuffer(T,_.framebuffer),t.setRenderTarget(T));let Qt=!1;At.length!==st.cameras.length&&(st.cameras.length=0,Qt=!0);for(let at=0;at<At.length;at++){let wt=At[at],G=null;if(_!==null)G=_.getViewport(wt);else{let Nt=m.getViewSubImage(d,wt);G=Nt.viewport,at===0&&(t.setRenderTargetTextures(T,Nt.colorTexture,Nt.depthStencilTexture),t.setRenderTarget(T))}let Tt=tt[at];Tt===void 0&&(Tt=new Bn,Tt.layers.enable(at),Tt.viewport=new We,tt[at]=Tt),Tt.matrix.fromArray(wt.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(wt.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(G.x,G.y,G.width,G.height),at===0&&(st.matrix.copy(Tt.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),Qt===!0&&st.cameras.push(Tt)}let Gt=s.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&A){m=n.getBinding();let at=m.getDepthInformation(At[0]);at&&at.isValid&&at.texture&&p.init(at,s.renderState)}if(Gt&&Gt.includes("camera-access")&&A){t.state.unbindTexture(),m=n.getBinding();for(let at=0;at<At.length;at++){let wt=At[at].camera;if(wt){let G=f[wt];G||(G=new ja,f[wt]=G);let Tt=m.getCameraImage(wt);G.sourceTexture=Tt}}}}for(let At=0;At<M.length;At++){let Qt=D[At],Gt=M[At];Qt!==null&&Gt!==void 0&&Gt.update(Qt,_t,c||a)}ke&&ke(ft,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),x=null}let Le=new bm;Le.setAnimationLoop(be),this.setAnimationLoop=function(ft){ke=ft},this.dispose=function(){}}},jS=new Ve,Rm=new ye;Rm.set(-1,0,0,0,1,0,0,0,1);function QS(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,cd(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,F,O,T){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),m(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&_(p,f,T)):f.isMeshMatcapMaterial?(r(p,f),x(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),A(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,F,O):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Xn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Xn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let F=t.get(f),O=F.envMap,T=F.envMapRotation;O&&(p.envMap.value=O,p.envMapRotation.value.setFromMatrix4(jS.makeRotationFromEuler(T)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Rm),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,F,O){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*F,p.scale.value=O*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function m(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function _(p,f,F){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Xn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=F.texture,p.transmissionSamplerSize.value.set(F.width,F.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function A(p,f){let F=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(F.matrixWorld),p.nearDistance.value=F.shadow.camera.near,p.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tM(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){let D=M.program;n.uniformBlockBinding(T,D)}function c(T,M){let D=s[T.id];D===void 0&&(p(T),D=u(T),s[T.id]=D,T.addEventListener("dispose",F));let H=M.program;n.updateUBOMapping(T,H);let E=t.render.frame;r[T.id]!==E&&(d(T),r[T.id]=E)}function u(T){let M=m();T.__bindingPointIndex=M;let D=i.createBuffer(),H=T.__size,E=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,H,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,D),D}function m(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return me("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let M=s[T.id],D=T.uniforms,H=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,L=D.length;E<L;E++){let V=D[E];if(Array.isArray(V))for(let W=0,tt=V.length;W<tt;W++)_(V[W],E,W,H);else _(V,E,0,H)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(T,M,D,H){if(A(T,M,D,H)===!0){let E=T.__offset,L=T.value;if(Array.isArray(L)){let V=0;for(let W=0;W<L.length;W++){let tt=L[W],st=f(tt);x(tt,T.__data,V),typeof tt!="number"&&typeof tt!="boolean"&&!tt.isMatrix3&&!ArrayBuffer.isView(tt)&&(V+=st.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(L,T.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,T.__data)}}function x(T,M,D){typeof T=="number"||typeof T=="boolean"?M[0]=T:T.isMatrix3?(M[0]=T.elements[0],M[1]=T.elements[1],M[2]=T.elements[2],M[3]=0,M[4]=T.elements[3],M[5]=T.elements[4],M[6]=T.elements[5],M[7]=0,M[8]=T.elements[6],M[9]=T.elements[7],M[10]=T.elements[8],M[11]=0):ArrayBuffer.isView(T)?M.set(new T.constructor(T.buffer,T.byteOffset,M.length)):T.toArray(M,D)}function A(T,M,D,H){let E=T.value,L=M+"_"+D;if(H[L]===void 0)return typeof E=="number"||typeof E=="boolean"?H[L]=E:ArrayBuffer.isView(E)?H[L]=E.slice():H[L]=E.clone(),!0;{let V=H[L];if(typeof E=="number"||typeof E=="boolean"){if(V!==E)return H[L]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(V.equals(E)===!1)return V.copy(E),!0}}return!1}function p(T){let M=T.uniforms,D=0,H=16;for(let L=0,V=M.length;L<V;L++){let W=Array.isArray(M[L])?M[L]:[M[L]];for(let tt=0,st=W.length;tt<st;tt++){let Y=W[tt],K=Array.isArray(Y.value)?Y.value:[Y.value];for(let ot=0,lt=K.length;ot<lt;ot++){let Mt=K[ot],ct=f(Mt),yt=D%H,vt=yt%ct.boundary,Ht=yt+vt;D+=vt,Ht!==0&&H-Ht<ct.storage&&(D+=H-Ht),Y.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=D,D+=ct.storage}}}let E=D%H;return E>0&&(D+=H-E),T.__size=D,T.__cache={},this}function f(T){let M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(M.boundary=16,M.storage=T.byteLength):de("WebGLRenderer: Unsupported uniform value type.",T),M}function F(T){let M=T.target;M.removeEventListener("dispose",F);let D=a.indexOf(M.__bindingPointIndex);a.splice(D,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function O(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:O}}var eM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$i=null;function nM(){return $i===null&&($i=new qa(eM,16,16,Ls,Pi),$i.name="DFG_LUT",$i.minFilter=In,$i.magFilter=In,$i.wrapS=Fi,$i.wrapT=Fi,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}var hh=class{constructor(t={}){let{canvas:e=Wp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:d=!1,outputBufferType:_=ni}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let A=_,p=new Set([Tc,Ec,wc]),f=new Set([ni,Ii,Jr,Kr,Sc,Mc]),F=new Uint32Array(4),O=new Int32Array(4),T=new $,M=null,D=null,H=[],E=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,W=!1,tt=null,st=null,Y=null,K=null;this._outputColorSpace=li;let ot=0,lt=0,Mt=null,ct=-1,yt=null,vt=new We,Ht=new We,Xt=null,ke=new ue(0),be=0,Le=e.width,ft=e.height,_t=1,At=null,Qt=null,Gt=new We(0,0,Le,ft),le=new We(0,0,Le,ft),ae=!1,at=new Hr,wt=!1,G=!1,Tt=new Ve,Nt=new $,oe=new We,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function fe(){return Mt===null?_t:1}let z=n;function Re(b,k){return e.getContext(b,k)}let pe,P,y,X,rt,ht,Rt,Dt,ut,xt,Ut,te,zt,Ot,ee,ce,_e,q,Lt,gt,Bt,Vt,St;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",cn,!1),z===null){let k="webgl2";if(z=Re(k,b),z===null)throw Re(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ie()}catch(b){throw e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",cn,!1),me("WebGLRenderer: "+b.message),b}function ie(){pe=new cy(z),pe.init(),Bt=new ZS(z,pe),P=new Qv(z,pe,t,Bt),y=new qS(z,pe),P.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),st=z.createFramebuffer(),Y=z.createFramebuffer(),K=z.createFramebuffer(),X=new dy(z),rt=new DS,ht=new YS(z,pe,y,rt,P,Bt,X),Rt=new ly(V),Dt=new p_(z),Vt=new Kv(z,Dt),ut=new hy(z,Dt,X,Vt),xt=new py(z,ut,Dt,Vt,X),q=new fy(z,P,ht),ee=new ty(rt),Ut=new LS(V,Rt,pe,P,Vt,ee),te=new QS(V,rt),zt=new US,Ot=new VS(pe),_e=new Jv(V,Rt,y,xt,x,l),ce=new XS(V,xt,P),St=new tM(z,X,P,y),Lt=new jv(z,pe,X),gt=new uy(z,pe,X),X.programs=Ut.programs,V.capabilities=P,V.extensions=pe,V.properties=rt,V.renderLists=zt,V.shadowMap=ce,V.state=y,V.info=X}A!==ni&&(L=new gy(A,e.width,e.height,o,s,r));let Kt=new Ad(V,z);this.xr=Kt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let b=pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(b){b!==void 0&&(_t=b,this.setSize(Le,ft,!1))},this.getSize=function(b){return b.set(Le,ft)},this.setSize=function(b,k,it=!0){if(Kt.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}Le=b,ft=k,e.width=Math.floor(b*_t),e.height=Math.floor(k*_t),it===!0&&(e.style.width=b+"px",e.style.height=k+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(Le*_t,ft*_t).floor()},this.setDrawingBufferSize=function(b,k,it){Le=b,ft=k,_t=it,e.width=Math.floor(b*it),e.height=Math.floor(k*it),this.setViewport(0,0,b,k)},this.setEffects=function(b){if(A===ni){me("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let k=0;k<b.length;k++)if(b[k].isOutputPass===!0){de("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(vt)},this.getViewport=function(b){return b.copy(Gt)},this.setViewport=function(b,k,it,j){b.isVector4?Gt.set(b.x,b.y,b.z,b.w):Gt.set(b,k,it,j),y.viewport(vt.copy(Gt).multiplyScalar(_t).round())},this.getScissor=function(b){return b.copy(le)},this.setScissor=function(b,k,it,j){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,k,it,j),y.scissor(Ht.copy(le).multiplyScalar(_t).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(b){y.setScissorTest(ae=b)},this.setOpaqueSort=function(b){At=b},this.setTransparentSort=function(b){Qt=b},this.getClearColor=function(b){return b.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,it=!0){let j=0;if(b){let Q=!1;if(Mt!==null){let Ct=Mt.texture.format;Q=p.has(Ct)}if(Q){let Ct=Mt.texture.type,mt=f.has(Ct),Et=_e.getClearColor(),It=_e.getClearAlpha(),jt=Et.r,Me=Et.g,Ee=Et.b;mt?(F[0]=jt,F[1]=Me,F[2]=Ee,F[3]=It,z.clearBufferuiv(z.COLOR,0,F)):(O[0]=jt,O[1]=Me,O[2]=Ee,O[3]=It,z.clearBufferiv(z.COLOR,0,O))}else j|=z.COLOR_BUFFER_BIT}k&&(j|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(j|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&z.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),tt=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",cn,!1),_e.dispose(),zt.dispose(),Ot.dispose(),rt.dispose(),Rt.dispose(),xt.dispose(),Vt.dispose(),St.dispose(),Ut.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",fr),Kt.removeEventListener("sessionend",Li),di.stop()};function Ae(b){b.preventDefault(),Ha("WebGLRenderer: Context Lost."),W=!0}function we(){Ha("WebGLRenderer: Context Restored."),W=!1;let b=X.autoReset,k=ce.enabled,it=ce.autoUpdate,j=ce.needsUpdate,Q=ce.type;ie(),X.autoReset=b,ce.enabled=k,ce.autoUpdate=it,ce.needsUpdate=j,ce.type=Q}function cn(b){me("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Vn(b){let k=b.target;k.removeEventListener("dispose",Vn),dr(k)}function dr(b){aa(b),rt.remove(b)}function aa(b){let k=rt.get(b).programs;k!==void 0&&(k.forEach(function(it){Ut.releaseProgram(it)}),b.isShaderMaterial&&Ut.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,it,j,Q,Ct){k===null&&(k=se);let mt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Et=Lh(b,k,it,j,Q);y.setMaterial(j,mt);let It=it.index,jt=1;if(j.wireframe===!0){if(It=ut.getWireframeAttribute(it),It===void 0)return;jt=2}let Me=it.drawRange,Ee=it.attributes.position,Jt=Me.start*jt,Ie=(Me.start+Me.count)*jt;Ct!==null&&(Jt=Math.max(Jt,Ct.start*jt),Ie=Math.min(Ie,(Ct.start+Ct.count)*jt)),It!==null?(Jt=Math.max(Jt,0),Ie=Math.min(Ie,It.count)):Ee!=null&&(Jt=Math.max(Jt,0),Ie=Math.min(Ie,Ee.count));let Ke=Ie-Jt;if(Ke<0||Ke===1/0)return;Vt.setup(Q,j,Et,it,It);let Ue,Xe=Lt;if(It!==null&&(Ue=Dt.get(It),Xe=gt,Xe.setIndex(Ue)),Q.isMesh)j.wireframe===!0?(y.setLineWidth(j.wireframeLinewidth*fe()),Xe.setMode(z.LINES)):Xe.setMode(z.TRIANGLES);else if(Q.isLine){let xn=j.linewidth;xn===void 0&&(xn=1),y.setLineWidth(xn*fe()),Q.isLineSegments?Xe.setMode(z.LINES):Q.isLineLoop?Xe.setMode(z.LINE_LOOP):Xe.setMode(z.LINE_STRIP)}else Q.isPoints?Xe.setMode(z.POINTS):Q.isSprite&&Xe.setMode(z.TRIANGLES);if(Q.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))Xe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let xn=Q._multiDrawStarts,Yt=Q._multiDrawCounts,An=Q._multiDrawCount,Fe=It?Dt.get(It).bytesPerElement:1,Jn=rt.get(j).currentProgram.getUniforms();for(let si=0;si<An;si++)Jn.setValue(z,"_gl_DrawID",si),Xe.render(xn[si]/Fe,Yt[si])}else if(Q.isInstancedMesh)Xe.renderInstances(Jt,Ke,Q.count);else if(it.isInstancedBufferGeometry){let xn=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Yt=Math.min(it.instanceCount,xn);Xe.renderInstances(Jt,Ke,Yt)}else Xe.render(Jt,Ke)};function oa(b,k,it,j){tt!==null&&b.isNodeMaterial&&tt.setObject(j,b),wt===!0&&ee.setState(b,it,!1),b.transparent===!0&&b.side===Hi&&b.forceSinglePass===!1?(b.side=Xn,b.needsUpdate=!0,Us(b,k,j),b.side=Cs,b.needsUpdate=!0,Us(b,k,j),b.side=Hi):Us(b,k,j)}this.compile=function(b,k,it=null){it===null&&(it=b),tt!==null&&tt.renderStart(b,k,it),D=Ot.get(it),D.init(k),E.push(D),it.traverseVisible(function(Q){Q.isLight&&Q.layers.test(k.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),b!==it&&b.traverseVisible(function(Q){Q.isLight&&Q.layers.test(k.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),D.setupLights(),tt!==null&&tt.updateLights(D.state.lightsArray),G=this.localClippingEnabled,wt=ee.init(this.clippingPlanes,G),wt===!0&&ee.setGlobalState(this.clippingPlanes,k),tt!==null&&ce.render(D.state.shadowsArray,it,k);let j=new Set;return b.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ct=Q.material;if(Ct)if(Array.isArray(Ct))for(let mt=0;mt<Ct.length;mt++){let Et=Ct[mt];oa(Et,it,k,Q),j.add(Et)}else oa(Ct,it,k,Q),j.add(Ct)}),D=E.pop(),tt!==null&&tt.renderEnd(),j},this.compileAsync=function(b,k,it=null){let j=this.compile(b,k,it);return new Promise(Q=>{function Ct(){if(j.forEach(function(mt){let It=rt.get(mt).currentProgram;(It===void 0||It.isReady())&&j.delete(mt)}),j.size===0){Q(b);return}setTimeout(Ct,10)}pe.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let ji=null;function Ih(b){ji&&ji(b)}function fr(){di.stop()}function Li(){di.start()}let di=new bm;di.setAnimationLoop(Ih),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(b){ji=b,Kt.setAnimationLoop(b),b===null?di.stop():di.start()},Kt.addEventListener("sessionstart",fr),Kt.addEventListener("sessionend",Li),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){me("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;tt!==null&&tt.renderStart(b,k);let it=Kt.enabled===!0&&Kt.isPresenting===!0,j=L!==null&&(Mt===null||it)&&L.begin(V,Mt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(k),k=Kt.getCamera()),b.isScene===!0&&b.onBeforeRender(V,b,k,Mt),D=Ot.get(b,E.length),D.init(k),D.state.textureUnits=ht.getTextureUnits(),E.push(D),Tt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),at.setFromProjectionMatrix(Tt,Ti,k.reversedDepth),G=this.localClippingEnabled,wt=ee.init(this.clippingPlanes,G),M=zt.get(b,H.length),M.init(),H.push(M),Kt.enabled===!0&&Kt.isPresenting===!0){let mt=V.xr.getDepthSensingMesh();mt!==null&&pr(mt,k,-1/0,V.sortObjects)}pr(b,k,0,V.sortObjects),M.finish(),tt!==null&&tt.updateLights(D.state.lightsArray),V.sortObjects===!0&&M.sort(At,Qt),he=Kt.enabled===!1||Kt.isPresenting===!1||Kt.hasDepthSensing()===!1,he&&_e.addToRenderList(M,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),wt===!0&&ee.beginShadows();let Q=D.state.shadowsArray;if(ce.render(Q,b,k),wt===!0&&ee.endShadows(),(j&&L.hasRenderPass())===!1){let mt=M.opaque,Et=M.transmissive;if(D.setupLights(),k.isArrayCamera){let It=k.cameras;if(Et.length>0)for(let jt=0,Me=It.length;jt<Me;jt++){let Ee=It[jt];ca(mt,Et,b,Ee)}he&&_e.render(b);for(let jt=0,Me=It.length;jt<Me;jt++){let Ee=It[jt];la(M,b,Ee,Ee.viewport)}}else Et.length>0&&ca(mt,Et,b,k),he&&_e.render(b),la(M,b,k)}Mt!==null&&lt===0&&(ht.updateMultisampleRenderTarget(Mt),ht.updateRenderTargetMipmap(Mt)),j&&L.end(V),b.isScene===!0&&b.onAfterRender(V,b,k),Vt.resetDefaultState(),ct=-1,yt=null,E.pop(),E.length>0?(D=E[E.length-1],ht.setTextureUnits(D.state.textureUnits),wt===!0&&ee.setGlobalState(V.clippingPlanes,D.state.camera)):D=null,H.pop(),H.length>0?M=H[H.length-1]:M=null,tt!==null&&tt.renderEnd()};function pr(b,k,it,j){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)it=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLightProbeGrid)D.pushLightProbeGrid(b);else if(b.isLight)D.pushLight(b),b.castShadow&&D.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(at)){j&&oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Tt);let mt=xt.update(b),Et=b.material;Et.visible&&M.push(b,mt,Et,it,oe.z,null,k)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(at))){let mt=xt.update(b),Et=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),oe.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),oe.copy(mt.boundingSphere.center)),oe.applyMatrix4(b.matrixWorld).applyMatrix4(Tt)),Array.isArray(Et)){let It=mt.groups;for(let jt=0,Me=It.length;jt<Me;jt++){let Ee=It[jt],Jt=Et[Ee.materialIndex];Jt&&Jt.visible&&M.push(b,mt,Jt,it,oe.z,Ee,k)}}else Et.visible&&M.push(b,mt,Et,it,oe.z,null,k)}}let Ct=b.children;for(let mt=0,Et=Ct.length;mt<Et;mt++)pr(Ct[mt],k,it,j)}function la(b,k,it,j){let{opaque:Q,transmissive:Ct,transparent:mt}=b;D.setupLightsView(it),wt===!0&&ee.setGlobalState(V.clippingPlanes,it),j&&y.viewport(vt.copy(j)),Q.length>0&&ms(Q,k,it),Ct.length>0&&ms(Ct,k,it),mt.length>0&&ms(mt,k,it),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ca(b,k,it,j){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[j.id]===void 0){let Jt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[j.id]=new ti(1,1,{generateMipmaps:!0,type:Jt?Pi:ni,minFilter:Is,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ne.workingColorSpace})}let Ct=D.state.transmissionRenderTarget[j.id],mt=j.viewport||vt;Ct.setSize(mt.z*V.transmissionResolutionScale,mt.w*V.transmissionResolutionScale);let Et=V.getRenderTarget(),It=V.getActiveCubeFace(),jt=V.getActiveMipmapLevel();V.setRenderTarget(Ct),V.getClearColor(ke),be=V.getClearAlpha(),be<1&&V.setClearColor(16777215,.5),V.clear(),he&&_e.render(it);let Me=V.toneMapping;V.toneMapping=Ri;let Ee=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),D.setupLightsView(j),wt===!0&&ee.setGlobalState(V.clippingPlanes,j),ms(b,it,j),ht.updateMultisampleRenderTarget(Ct),ht.updateRenderTargetMipmap(Ct),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ie=0,Ke=k.length;Ie<Ke;Ie++){let Ue=k[Ie],{object:Xe,geometry:xn,material:Yt,group:An}=Ue;if(Yt.side===Hi&&Xe.layers.test(j.layers)){let Fe=Yt.side;Yt.side=Xn,Yt.needsUpdate=!0,ha(Xe,it,j,xn,Yt,An),Yt.side=Fe,Yt.needsUpdate=!0,Jt=!0}}Jt===!0&&(ht.updateMultisampleRenderTarget(Ct),ht.updateRenderTargetMipmap(Ct))}V.setRenderTarget(Et,It,jt),V.setClearColor(ke,be),Ee!==void 0&&(j.viewport=Ee),V.toneMapping=Me}function ms(b,k,it){let j=k.isScene===!0?k.overrideMaterial:null;for(let Q=0,Ct=b.length;Q<Ct;Q++){let mt=b[Q],{object:Et,geometry:It,group:jt}=mt,Me=mt.material;Me.allowOverride===!0&&j!==null&&(Me=j),Et.layers.test(it.layers)&&ha(Et,k,it,It,Me,jt)}}function ha(b,k,it,j,Q,Ct){tt!==null&&Q.isNodeMaterial&&tt.setObject(b,Q),b.onBeforeRender(V,k,it,j,Q,Ct),b.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Q.onBeforeRender(V,k,it,j,b,Ct),Q.transparent===!0&&Q.side===Hi&&Q.forceSinglePass===!1?(Q.side=Xn,Q.needsUpdate=!0,V.renderBufferDirect(it,k,j,Q,b,Ct),Q.side=Cs,Q.needsUpdate=!0,V.renderBufferDirect(it,k,j,Q,b,Ct),Q.side=Hi):V.renderBufferDirect(it,k,j,Q,b,Ct),b.onAfterRender(V,k,it,j,Q,Ct)}function Us(b,k,it){k.isScene!==!0&&(k=se);let j=rt.get(b),Q=D.state.lights,Ct=D.state.shadowsArray,mt=Q.state.version,Et=Ut.getParameters(b,Q.state,Ct,k,it,D.state.lightProbeGridArray),It=Ut.getProgramCacheKey(Et),jt=j.programs;j.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,j.fog=k.fog;let Me=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;j.envMap=Rt.get(b.envMap||j.environment,Me),j.envMapRotation=j.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,jt===void 0&&(b.addEventListener("dispose",Vn),jt=new Map,j.programs=jt);let Ee=jt.get(It);if(Ee!==void 0){if(j.currentProgram===Ee&&j.lightsStateVersion===mt)return Os(b,Et),Ee}else Et.uniforms=Ut.getUniforms(b),tt!==null&&b.isNodeMaterial&&tt.build(b,it,Et),b.onBeforeCompile(Et,V),Ee=Ut.acquireProgram(Et,It),jt.set(It,Ee),j.uniforms=Et.uniforms;let Jt=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Jt.clippingPlanes=ee.uniform),Os(b,Et),j.needsLights=Dh(b),j.lightsStateVersion=mt,j.needsLights&&(Jt.ambientLightColor.value=Q.state.ambient,Jt.lightProbe.value=Q.state.probe,Jt.sunLights.value=Q.state.sun,Jt.sunLightShadows.value=Q.state.sunShadow,Jt.directionalLights.value=Q.state.directional,Jt.directionalLightShadows.value=Q.state.directionalShadow,Jt.spotLights.value=Q.state.spot,Jt.spotLightShadows.value=Q.state.spotShadow,Jt.rectAreaLights.value=Q.state.rectArea,Jt.ltc_1.value=Q.state.rectAreaLTC1,Jt.ltc_2.value=Q.state.rectAreaLTC2,Jt.pointLights.value=Q.state.point,Jt.pointLightShadows.value=Q.state.pointShadow,Jt.hemisphereLights.value=Q.state.hemi,Jt.sunShadowMatrix.value=Q.state.sunShadowMatrix,Jt.sunShadowCascade.value=Q.state.sunShadowCascade,Jt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Jt.spotLightMatrix.value=Q.state.spotLightMatrix,Jt.spotLightMap.value=Q.state.spotLightMap,Jt.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.lightProbeGrid=D.state.lightProbeGridArray.length>0,j.currentProgram=Ee,j.uniformsList=null,Ee}function Fs(b){if(b.uniformsList===null){let k=b.currentProgram.getUniforms();b.uniformsList=ta.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Os(b,k){let it=rt.get(b);it.outputColorSpace=k.outputColorSpace,it.batching=k.batching,it.batchingColor=k.batchingColor,it.instancing=k.instancing,it.instancingColor=k.instancingColor,it.instancingMorph=k.instancingMorph,it.skinning=k.skinning,it.morphTargets=k.morphTargets,it.morphNormals=k.morphNormals,it.morphColors=k.morphColors,it.morphTargetsCount=k.morphTargetsCount,it.numClippingPlanes=k.numClippingPlanes,it.numIntersection=k.numClipIntersection,it.vertexAlphas=k.vertexAlphas,it.vertexTangents=k.vertexTangents,it.toneMapping=k.toneMapping}function Ph(b,k){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;T.setFromMatrixPosition(k.matrixWorld);for(let it=0,j=b.length;it<j;it++){let Q=b[it];if(Q.texture!==null&&Q.boundingBox.containsPoint(T))return Q}return null}function Lh(b,k,it,j,Q){k.isScene!==!0&&(k=se),ht.resetTextureUnits();let Ct=k.fog,mt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?k.environment:null,Et=Mt===null?V.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Ne.workingColorSpace,It=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,jt=Rt.get(j.envMap||mt,It),Me=j.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Ee=!!it.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Jt=!!it.morphAttributes.position,Ie=!!it.morphAttributes.normal,Ke=!!it.morphAttributes.color,Ue=Ri;j.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Ue=V.toneMapping);let Xe=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,xn=Xe!==void 0?Xe.length:0,Yt=rt.get(j),An=D.state.lights;if(wt===!0&&(G===!0||b!==yt)){let Oe=b===yt&&j.id===ct;ee.setState(j,b,Oe)}let Fe=!1;j.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==An.state.version||Yt.outputColorSpace!==Et||Q.isBatchedMesh&&Yt.batching===!1||!Q.isBatchedMesh&&Yt.batching===!0||Q.isBatchedMesh&&Yt.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Yt.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Yt.instancing===!1||!Q.isInstancedMesh&&Yt.instancing===!0||Q.isSkinnedMesh&&Yt.skinning===!1||!Q.isSkinnedMesh&&Yt.skinning===!0||Q.isInstancedMesh&&Yt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Yt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Yt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Yt.instancingMorph===!1&&Q.morphTexture!==null||Yt.envMap!==jt||j.fog===!0&&Yt.fog!==Ct||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==ee.numPlanes||Yt.numIntersection!==ee.numIntersection)||Yt.vertexAlphas!==Me||Yt.vertexTangents!==Ee||Yt.morphTargets!==Jt||Yt.morphNormals!==Ie||Yt.morphColors!==Ke||Yt.toneMapping!==Ue||Yt.morphTargetsCount!==xn||!!Yt.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Fe=!0):(Fe=!0,Yt.__version=j.version);let Jn=Yt.currentProgram;Fe===!0&&(Jn=Us(j,k,Q),tt&&j.isNodeMaterial&&tt.onUpdateProgram(j,Jn,Yt));let si=!1,Te=!1,gs=!1,He=Jn.getUniforms(),en=Yt.uniforms;if(y.useProgram(Jn.program)&&(si=!0,Te=!0,gs=!0),j.id!==ct&&(ct=j.id,Te=!0),Yt.needsLights){let Oe=Ph(D.state.lightProbeGridArray,Q);Yt.lightProbeGrid!==Oe&&(Yt.lightProbeGrid=Oe,Te=!0)}if(si||yt!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),He.setValue(z,"projectionMatrix",b.projectionMatrix),He.setValue(z,"viewMatrix",b.matrixWorldInverse);let vn=He.map.cameraPosition;vn!==void 0&&vn.setValue(z,Nt.setFromMatrixPosition(b.matrixWorld)),P.logarithmicDepthBuffer&&He.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&He.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),yt!==b&&(yt=b,Te=!0,gs=!0)}if(Yt.needsLights&&(An.state.sunShadowMap.length>0&&He.setValue(z,"sunShadowMap",An.state.sunShadowMap,ht),An.state.directionalShadowMap.length>0&&He.setValue(z,"directionalShadowMap",An.state.directionalShadowMap,ht),An.state.spotShadowMap.length>0&&He.setValue(z,"spotShadowMap",An.state.spotShadowMap,ht),An.state.pointShadowMap.length>0&&He.setValue(z,"pointShadowMap",An.state.pointShadowMap,ht)),Q.isSkinnedMesh){He.setOptional(z,Q,"bindMatrix"),He.setOptional(z,Q,"bindMatrixInverse");let Oe=Q.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),He.setValue(z,"boneTexture",Oe.boneTexture,ht))}Q.isBatchedMesh&&(He.setOptional(z,Q,"batchingTexture"),He.setValue(z,"batchingTexture",Q._matricesTexture,ht),He.setOptional(z,Q,"batchingIdTexture"),He.setValue(z,"batchingIdTexture",Q._indirectTexture,ht),He.setOptional(z,Q,"batchingColorTexture"),Q._colorsTexture!==null&&He.setValue(z,"batchingColorTexture",Q._colorsTexture,ht));let fi=it.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&q.update(Q,it,Jn),(Te||Yt.receiveShadow!==Q.receiveShadow)&&(Yt.receiveShadow=Q.receiveShadow,He.setValue(z,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&k.environment!==null&&(en.envMapIntensity.value=k.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=nM()),Te){if(He.setValue(z,"toneMappingExposure",V.toneMappingExposure),Yt.needsLights&&zo(en,gs),Ct&&j.fog===!0&&te.refreshFogUniforms(en,Ct),te.refreshMaterialUniforms(en,j,_t,ft,D.state.transmissionRenderTarget[b.id]),Yt.needsLights&&Yt.lightProbeGrid){let Oe=Yt.lightProbeGrid;en.probesSH.value=Oe.texture,en.probesMin.value.copy(Oe.boundingBox.min),en.probesMax.value.copy(Oe.boundingBox.max),en.probesResolution.value.copy(Oe.resolution)}ta.upload(z,Fs(Yt),en,ht)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ta.upload(z,Fs(Yt),en,ht),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&He.setValue(z,"center",Q.center),He.setValue(z,"modelViewMatrix",Q.modelViewMatrix),He.setValue(z,"normalMatrix",Q.normalMatrix),He.setValue(z,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){let Oe=j.uniformsGroups;for(let vn=0,Qi=Oe.length;vn<Qi;vn++){let Di=Oe[vn];St.update(Di,Jn),St.bind(Di,Jn)}}return Jn}function zo(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.sunLights.needsUpdate=k,b.sunLightShadows.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Dh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ot},this.getActiveMipmapLevel=function(){return lt},this.getRenderTarget=function(){return Mt},this.setRenderTargetTextures=function(b,k,it){let j=rt.get(b);j.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),rt.get(b.texture).__webglTexture=k,rt.get(b.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:it,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){let it=rt.get(b);it.__webglFramebuffer=k,it.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,it=0){Mt=b,ot=k,lt=it;let j=null,Q=!1,Ct=!1;if(b){let Et=rt.get(b);if(Et.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(z.FRAMEBUFFER,Et.__webglFramebuffer),vt.copy(b.viewport),Ht.copy(b.scissor),Xt=b.scissorTest,y.viewport(vt),y.scissor(Ht),y.setScissorTest(Xt),ct=-1;return}else if(Et.__webglFramebuffer===void 0)ht.setupRenderTarget(b);else if(Et.__hasExternalTextures)ht.rebindTextures(b,rt.get(b.texture).__webglTexture,rt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Me=b.depthTexture;if(Et.__boundDepthTexture!==Me){if(Me!==null&&rt.has(Me)&&(b.width!==Me.image.width||b.height!==Me.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(b)}}let It=b.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Ct=!0);let jt=rt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(jt[k])?j=jt[k][it]:j=jt[k],Q=!0):b.samples>0&&ht.useMultisampledRTT(b)===!1?j=rt.get(b).__webglMultisampledFramebuffer:Array.isArray(jt)?j=jt[it]:j=jt,vt.copy(b.viewport),Ht.copy(b.scissor),Xt=b.scissorTest}else vt.copy(Gt).multiplyScalar(_t).floor(),Ht.copy(le).multiplyScalar(_t).floor(),Xt=ae;if(it!==0&&(j=st),y.bindFramebuffer(z.FRAMEBUFFER,j)&&y.drawBuffers(b,j),y.viewport(vt),y.scissor(Ht),y.setScissorTest(Xt),Q){let Et=rt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,Et.__webglTexture,it)}else if(Ct){let Et=k;for(let It=0;It<b.textures.length;It++){let jt=rt.get(b.textures[It]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+It,jt.__webglTexture,it,Et)}}else if(b!==null&&it!==0){let Et=rt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Et.__webglTexture,it)}ct=-1};function Zn(b){let k=rt.get(b);return(k.__readFormat!==b.format||k.__readType!==b.type)&&(k.__readFormat=b.format,k.__readType=b.type,k.__formatReadable=P.textureFormatReadable(b.format),k.__typeReadable=P.textureTypeReadable(b.type)),k}this.readRenderTargetPixels=function(b,k,it,j,Q,Ct,mt,Et=0){if(!(b&&b.isWebGLRenderTarget)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(It=It[mt]),It){y.bindFramebuffer(z.FRAMEBUFFER,It);try{let jt=b.textures[Et],Me=jt.format,Ee=jt.type;b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Et);let Jt=Zn(jt);if(Jt.__formatReadable===!1){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Jt.__typeReadable===!1){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-j&&it>=0&&it<=b.height-Q&&z.readPixels(k,it,j,Q,Bt.convert(Me),Bt.convert(Ee),Ct)}finally{let jt=Mt!==null?rt.get(Mt).__webglFramebuffer:null;y.bindFramebuffer(z.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(b,k,it,j,Q,Ct,mt,Et=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(It=It[mt]),It)if(k>=0&&k<=b.width-j&&it>=0&&it<=b.height-Q){y.bindFramebuffer(z.FRAMEBUFFER,It);let jt=b.textures[Et],Me=jt.format,Ee=jt.type;b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Et);let Jt=Zn(jt);if(Jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ie),z.bufferData(z.PIXEL_PACK_BUFFER,Ct.byteLength,z.STREAM_READ),z.readPixels(k,it,j,Q,Bt.convert(Me),Bt.convert(Ee),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Ke=Mt!==null?rt.get(Mt).__webglFramebuffer:null;y.bindFramebuffer(z.FRAMEBUFFER,Ke);let Ue=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await qp(z,Ue,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ie),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ct),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Ie),z.deleteSync(Ue),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,it=0){let j=Math.pow(2,-it),Q=Math.floor(b.image.width*j),Ct=Math.floor(b.image.height*j),mt=k!==null?k.x:0,Et=k!==null?k.y:0;ht.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,it,0,0,mt,Et,Q,Ct),y.unbindTexture()},this.copyTextureToTexture=function(b,k,it=null,j=null,Q=0,Ct=0){let mt,Et,It,jt,Me,Ee,Jt,Ie,Ke,Ue=b.isCompressedTexture?b.mipmaps[Ct]:b.image;if(it!==null)mt=it.max.x-it.min.x,Et=it.max.y-it.min.y,It=it.isBox3?it.max.z-it.min.z:1,jt=it.min.x,Me=it.min.y,Ee=it.isBox3?it.min.z:0;else{let en=Math.pow(2,-Q);mt=Math.floor(Ue.width*en),Et=Math.floor(Ue.height*en),b.isDataArrayTexture?It=Ue.depth:b.isData3DTexture?It=Math.floor(Ue.depth*en):It=1,jt=0,Me=0,Ee=0}j!==null?(Jt=j.x,Ie=j.y,Ke=j.z):(Jt=0,Ie=0,Ke=0);let Xe=Bt.convert(k.format),xn=Bt.convert(k.type),Yt;k.isData3DTexture?(ht.setTexture3D(k,0),Yt=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ht.setTexture2DArray(k,0),Yt=z.TEXTURE_2D_ARRAY):(ht.setTexture2D(k,0),Yt=z.TEXTURE_2D),y.activeTexture(z.TEXTURE0),y.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);let An=y.getParameter(z.UNPACK_ROW_LENGTH),Fe=y.getParameter(z.UNPACK_IMAGE_HEIGHT),Jn=y.getParameter(z.UNPACK_SKIP_PIXELS),si=y.getParameter(z.UNPACK_SKIP_ROWS),Te=y.getParameter(z.UNPACK_SKIP_IMAGES);y.pixelStorei(z.UNPACK_ROW_LENGTH,Ue.width),y.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ue.height),y.pixelStorei(z.UNPACK_SKIP_PIXELS,jt),y.pixelStorei(z.UNPACK_SKIP_ROWS,Me),y.pixelStorei(z.UNPACK_SKIP_IMAGES,Ee);let gs=b.isDataArrayTexture||b.isData3DTexture,He=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){let en=rt.get(b),fi=rt.get(k),Oe=rt.get(en.__renderTarget),vn=rt.get(fi.__renderTarget);y.bindFramebuffer(z.READ_FRAMEBUFFER,Oe.__webglFramebuffer),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let Qi=0;Qi<It;Qi++)gs&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,rt.get(b).__webglTexture,Q,Ee+Qi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,rt.get(k).__webglTexture,Ct,Ke+Qi)),z.blitFramebuffer(jt,Me,mt,Et,Jt,Ie,mt,Et,z.DEPTH_BUFFER_BIT,z.NEAREST);y.bindFramebuffer(z.READ_FRAMEBUFFER,null),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Q!==0||b.isRenderTargetTexture||rt.has(b)){let en=rt.get(b),fi=rt.get(k);y.bindFramebuffer(z.READ_FRAMEBUFFER,Y),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,K);for(let Oe=0;Oe<It;Oe++)gs?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,en.__webglTexture,Q,Ee+Oe):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,en.__webglTexture,Q),He?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,fi.__webglTexture,Ct,Ke+Oe):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,fi.__webglTexture,Ct),Q!==0?z.blitFramebuffer(jt,Me,mt,Et,Jt,Ie,mt,Et,z.COLOR_BUFFER_BIT,z.NEAREST):He?z.copyTexSubImage3D(Yt,Ct,Jt,Ie,Ke+Oe,jt,Me,mt,Et):z.copyTexSubImage2D(Yt,Ct,Jt,Ie,jt,Me,mt,Et);y.bindFramebuffer(z.READ_FRAMEBUFFER,null),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else He?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(Yt,Ct,Jt,Ie,Ke,mt,Et,It,Xe,xn,Ue.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(Yt,Ct,Jt,Ie,Ke,mt,Et,It,Xe,Ue.data):z.texSubImage3D(Yt,Ct,Jt,Ie,Ke,mt,Et,It,Xe,xn,Ue):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ct,Jt,Ie,mt,Et,Xe,xn,Ue.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ct,Jt,Ie,Ue.width,Ue.height,Xe,Ue.data):z.texSubImage2D(z.TEXTURE_2D,Ct,Jt,Ie,mt,Et,Xe,xn,Ue);y.pixelStorei(z.UNPACK_ROW_LENGTH,An),y.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Fe),y.pixelStorei(z.UNPACK_SKIP_PIXELS,Jn),y.pixelStorei(z.UNPACK_SKIP_ROWS,si),y.pixelStorei(z.UNPACK_SKIP_IMAGES,Te),Ct===0&&k.generateMipmaps&&z.generateMipmap(Yt),y.unbindTexture()},this.initRenderTarget=function(b){rt.get(b).__webglFramebuffer===void 0&&ht.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ht.setTextureCube(b,0):b.isData3DTexture?ht.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ht.setTexture2DArray(b,0):ht.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){ot=0,lt=0,Mt=null,y.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ne._getUnpackColorSpace()}};var Pm=new Wn,fh=new $,us=class extends _o{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new on(t,3)),this.setAttribute("uv",new on(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new As(e,6,1);return this.setAttribute("instanceStart",new Ci(n,3,0)),this.setAttribute("instanceEnd",new Ci(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new As(e,6,1);return this.setAttribute("instanceColorStart",new Ci(n,3,0)),this.setAttribute("instanceColorEnd",new Ci(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new co(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Pm.setFromBufferAttribute(e),this.boundingBox.union(Pm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)fh.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(fh)),fh.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(fh));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};kt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ft},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};qn.line={uniforms:Ro.merge([kt.common,kt.fog,kt.line]),vertexShader:`
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
		`};var Wi=class extends En{constructor(t){super({type:"LineMaterial",uniforms:Ro.clone(qn.line.uniforms),vertexShader:qn.line.vertexShader,fragmentShader:qn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Cd=new We,Lm=new $,Dm=new $,Pn=new We,Ln=new We,Xi=new We,Rd=new $,Id=new Ve,Dn=new vo,Nm=new $,ph=new Wn,mh=new ei,qi=new We,Yi,sr;function Um(i,t,e){return qi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),qi.multiplyScalar(1/qi.w),qi.x=sr/e.width,qi.y=sr/e.height,qi.applyMatrix4(i.projectionMatrixInverse),qi.multiplyScalar(1/qi.w),Math.abs(Math.max(qi.x,qi.y))}function iM(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Dn.start.fromBufferAttribute(s,o),Dn.end.fromBufferAttribute(r,o),Dn.applyMatrix4(e);let c=new $,u=new $;Yi.distanceSqToSegment(Dn.start,Dn.end,u,c),u.distanceTo(c)<sr*.5&&t.push({point:u,pointOnLine:c,distance:Yi.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function sM(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,u=Math.min(o.instanceCount,l.count),m=-t.near;Yi.at(1,Xi),Xi.w=1,Xi.applyMatrix4(t.matrixWorldInverse),Xi.applyMatrix4(n),Xi.multiplyScalar(1/Xi.w),Xi.x*=r.x/2,Xi.y*=r.y/2,Xi.z=0,Rd.copy(Xi),Id.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,_=u;d<_;d++){if(Pn.fromBufferAttribute(l,d),Ln.fromBufferAttribute(c,d),Pn.w=1,Ln.w=1,Pn.applyMatrix4(Id),Ln.applyMatrix4(Id),Pn.z>m&&Ln.z>m)continue;if(Pn.z>m){let O=Pn.z-Ln.z,T=(Pn.z-m)/O;Pn.lerp(Ln,T)}else if(Ln.z>m){let O=Ln.z-Pn.z,T=(Ln.z-m)/O;Ln.lerp(Pn,T)}Pn.applyMatrix4(n),Ln.applyMatrix4(n),Pn.multiplyScalar(1/Pn.w),Ln.multiplyScalar(1/Ln.w),Pn.x*=r.x/2,Pn.y*=r.y/2,Ln.x*=r.x/2,Ln.y*=r.y/2,Dn.start.copy(Pn),Dn.start.z=0,Dn.end.copy(Ln),Dn.end.z=0;let A=Dn.closestPointToPointParameter(Rd,!0);Dn.at(A,Nm);let p=od.lerp(Pn.z,Ln.z,A),f=p>=-1&&p<=1,F=Rd.distanceTo(Nm)<sr*.5;if(f&&F){Dn.start.fromBufferAttribute(l,d),Dn.end.fromBufferAttribute(c,d),Dn.start.applyMatrix4(a),Dn.end.applyMatrix4(a);let O=new $,T=new $;Yi.distanceSqToSegment(Dn.start,Dn.end,T,O),e.push({point:T,pointOnLine:O,distance:Yi.origin.distanceTo(T),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}var rr=class extends wn{constructor(t=new us,e=new Wi({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)Lm.fromBufferAttribute(e,a),Dm.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Lm.distanceTo(Dm);let r=new As(s,2,1);return t.setAttribute("instanceDistanceStart",new Ci(r,1,0)),t.setAttribute("instanceDistanceEnd",new Ci(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Yi=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;sr=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),mh.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=sr*.5;else{let m=Math.max(s.near,mh.distanceToPoint(Yi.origin));c=Um(s,m,l.resolution)}if(mh.radius+=c,Yi.intersectsSphere(mh)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),ph.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=sr*.5;else{let m=Math.max(s.near,ph.distanceToPoint(Yi.origin));u=Um(s,m,l.resolution)}ph.expandByScalar(u),Yi.intersectsBox(ph)!==!1&&(n?iM(this,e):sM(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Cd),this.material.uniforms.resolution.value.set(Cd.z,Cd.w))}};var ar=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function Fm(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:l,CY:c,mcs:u,q:m,list:d,clamp:_,norm:x,munis:A}=i,p=h=>document.querySelector(h),f=h=>String(h).replace(/[<>&"]/g,g=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[g]),F=(h,g)=>[(h-l)*o,(g-c)*o],O=.06,T=t.segs.map(h=>{let g=[],S=[0];for(let w=0;w<h.length;w+=2){let C=F(h[w],h[w+1]);g.length&&S.push(S[S.length-1]+Math.hypot(C[0]-g[g.length-1][0],C[1]-g[g.length-1][1])),g.push(C)}return{p:g,c:S,L:S[S.length-1]}}),M=t.stops.map(([h,g,S,w])=>({n:h,id:w,w:F(g,S),fams:new Set})),D=t.routes.map(([h,g,S])=>({s:h,l:g,c:S})),H=new Map;(t.bus||[]).forEach(([h,g,S,w])=>{let C={days:new Set(h),name:g,stops:S,times:w};S.forEach((R,N)=>{if(N<S.length-1){let U=H.get(R)||[];U.push([C,N]),H.set(R,U)}})});function E(h,g,S){let w=ae(),C=t.days.indexOf(w.ymd),R=[];for(let[N,U]of H.get(h)||[]){if(!N.days.has(C))continue;let B=N.times[U];if(B<g||B>S)continue;let J=N.stops[N.stops.length-1];R.push({sm:B,est:B,dl:0,fam:N.name,dest:M[J].n,destId:M[J].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:N.stops.slice(U)})}return R}let L=(h,g)=>{let S=h.match(/^R([A-Z]*)(\d*)(.*)$/),w=g.match(/^R([A-Z]*)(\d*)(.*)$/);return(S[1]||"").localeCompare(w[1]||"")||(+S[2]||0)-(+w[2]||0)||S[3].localeCompare(w[3])},V=[...new Set(D.map(h=>h.s))].sort(L),W={};D.forEach(h=>{W[h.s]||(W[h.s]=h.c)});let tt=t.pats.map(([h,g,S])=>({stops:h,t:g,segs:S})),st=t.trips.map(([h,g,S,w,C],R)=>({day:h,pat:tt[g],fam:D[S].s,c:D[S].c,t0:w,num:C,tid:t.tids[R]})),Y={};V.forEach(h=>Y[h]=new Set),st.forEach(h=>{h.pat.segs.forEach(g=>Y[h.fam].add(g)),h.pat.stops.forEach(g=>M[g].fams.add(h.fam))});let K=t.days.map((h,g)=>st.filter(S=>S.day===g)),ot=new Map(st.map(h=>[h.tid,h])),lt=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],Mt=Math.PI/180,ct=3.922*Mt,yt=-39.705*Mt;function vt(h,g){let S=h*Mt+ct,w=g*Mt,C=Math.cos(yt),R=Math.sin(yt),N=Math.cos(w),U=Math.cos(S)*N,B=Math.sin(S)*N,J=Math.sin(w),et=Math.atan2(B,U*C-J*R),v=Math.asin(J*C+U*R),I=Math.sqrt(2/(1+Math.cos(et)*Math.cos(v))),Z=I*Math.cos(v)*Math.sin(et),nt=I*Math.sin(v),[bt,$t,Zt,Pt,dt,xe,re]=lt;return F(($t+bt*Z-dt)*re,(xe-(Pt-Zt*nt))*re)}let Ht=new Map(M.map((h,g)=>[h.id,g]));function Xt(h){if(h.g)return h.g;let g=[],S=[],w=[0],C=0;return h.segs.forEach((R,N)=>{let U=T[R];U.p.forEach((B,J)=>{N&&!J||(g.push(B),S.push(C+U.c[J]))}),C+=U.L,w.push(C)}),h.g={pts:g,cum:S,stopD:w}}function ke(h,g,S,w){let C=1e18,R=0;for(let N=0;N+1<h.pts.length;N++){if(h.cum[N+1]<S||h.cum[N]>w)continue;let U=h.pts[N],B=h.pts[N+1],J=B[0]-U[0],et=B[1]-U[1],v=J*J+et*et||1e-9,I=Math.max(0,Math.min(1,((g[0]-U[0])*J+(g[1]-U[1])*et)/v)),Z=U[0]+J*I-g[0],nt=U[1]+et*I-g[1],bt=Z*Z+nt*nt;bt<C&&(C=bt,R=h.cum[N]+I*(h.cum[N+1]-h.cum[N]))}return{d:R,err:Math.sqrt(C)}}function be(h,g){let S=0,w=h.cum.length-1;if(g<=0)return h.pts[0];if(g>=h.cum[w])return h.pts[w];for(;w-S>1;){let U=S+w>>1;h.cum[U]<=g?S=U:w=U}let C=(g-h.cum[S])/(h.cum[w]-h.cum[S]||1),R=h.pts[S],N=h.pts[w];return[R[0]+(N[0]-R[0])*C,R[1]+(N[1]-R[1])*C]}let Le=h=>`${h.slice(6,8)}/${h.slice(4,6)}`,ft=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function _t(h){let g={};return ft.formatToParts(h).forEach(S=>g[S.type]=S.value),{ymd:g.year+g.month+g.day,min:+g.hour*60+ +g.minute+ +g.second/60}}let At=0,Qt=null,Gt=0,le=0;function ae(){let h=_t(new Date);if(At===0&&Qt==null)return{...h,live:!0};let g=Qt==null?h.min:Gt+(At?(performance.now()-le)/6e4*At:0);return{ymd:h.ymd,min:g,live:!1}}let at=h=>(h=(Math.round(h)%1440+1440)%1440,String(Math.floor(h/60)).padStart(2,"0")+":"+String(h%60).padStart(2,"0")),wt="https://rodalies.erathegameoftime.com",G={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let h=new URLSearchParams(location.search).get("rt");h&&localStorage.setItem("rod_rt",h);let g=localStorage.getItem("rod_rt");g&&/jhmuyo\.workers\.dev/.test(g)&&(g=wt,localStorage.setItem("rod_rt",g)),G.url=g||wt}catch{G.url=wt}let Tt=(h,g)=>fetch(h+g,{cache:"no-store"}).then(S=>{if(!S.ok)throw new Error("HTTP "+S.status);return S.json()}),Nt=h=>/^51/.test(h||"");async function oe(){if(!G.url){Re();return}let h=G.url.replace(/\/+$/,"");(!G.repFail||Date.now()-G.repFail>15*6e4)&&Tt(h,"/reports.json").then(B=>{B&&Array.isArray(B.items)?(G.rep=B.items,G.repSkew=(B.now||Date.now())-Date.now(),B.tipos&&(G.tipos=B.tipos),G.repOk=Date.now(),G.repFail=0):G.repFail=Date.now()}).catch(()=>{G.repFail=Date.now(),G.repOk=0});let g=!G.adifAt||Date.now()-G.adifAt>11e4,[S,w,C,R,N]=await Promise.allSettled([Tt(h,"/trip_updates.json"),Tt(h,"/vehicle_positions.json"),Tt(h,"/alerts.json"),Tt(h,"/notices.json"),g?Tt(h,"/adif.json"):Promise.reject(0)]);if(N.status==="fulfilled"&&N.value&&N.value.ok?(G.adif=N.value,G.adifAt=Date.now()):g&&(G.adifAt=Date.now()-6e4),S.status==="fulfilled"){let B=new Map,J=new Map;for(let et of S.value.entity||[]){let v=et.tripUpdate;if(!v||!v.trip||!Nt(v.trip.tripId))continue;let I=v.trip.tripId,Z=(v.stopTimeUpdate||[])[0],nt=v.delay;nt==null&&Z&&(nt=(Z.arrival||Z.departure||{}).delay),v.trip.scheduleRelationship==="CANCELED"&&(nt="X"),nt!=null&&B.set(I,nt),J.set(I,{next:Z?{sid:Z.stopId,t:+((Z.arrival||Z.departure||{}).time||0)}:null})}G.delays=B,G.tu=J,G.ok=Date.now(),G.feedTs=+((S.value.header||{}).timestamp||0)*1e3,G.err=""}else G.err=S.reason&&S.reason.message||__t(0);if(w.status==="fulfilled"){let B=new Map,J=Date.now()/1e3;for(let et of w.value.entity||[]){let v=et.vehicle;if(!v||!v.trip||!Nt(v.trip.tripId)||!v.position)continue;let I=v.vehicle&&v.vehicle.label||"",Z=I.match(/PLATF\.\(([^)]+)\)/),nt=G.vp.get(v.trip.tripId),bt={tid:v.trip.tripId,w:vt(+v.position.longitude,+v.position.latitude),st:v.currentStatus||"",sid:v.stopId||"",ts:+v.timestamp||J,label:I,plat:Z?Z[1]:"",fam:(I.split("-")[0]||"").trim(),num:v.vehicle&&v.vehicle.id||""};bt.disp=nt?nt.disp:null,B.set(bt.tid,bt)}G.vp=B,G.okVP=Date.now()}let U=[];if(R.status==="fulfilled"&&Array.isArray(R.value.included)){G.okNotices=Date.now();for(let B of R.value.included){let J=new Set((B.lines||[]).map(nt=>nt.id).filter(nt=>W[nt])),et=(nt,bt)=>((nt||{})[bt||window.__L]||(nt||{}).es||(nt||{}).ca||"").trim(),v=nt=>[et(B.description,nt),et(B.title,nt)].sort((bt,$t)=>$t.length-bt.length)[0],I=v(),Z=v("es");I&&U.push({id:"N"+B.externalId,fams:J,stops:new Set,txt:I,es:Z,when:(B.date||"")+"T"+(B.time||""),src:"Rodalies",core:B.core||""})}}if(C.status==="fulfilled"){let B=+((C.value.header||{}).timestamp||0);if(G.alertsTs=B,Date.now()/1e3-B<6*3600)for(let J of C.value.entity||[]){let et=J.alert;if(!et)continue;let v=new Set,I=new Set;for(let $t of et.informedEntity||[])($t.routeId||"").startsWith("51")&&v.add($t.routeId.replace(/^51T\d+/,"")),$t.stopId&&Ht.has($t.stopId)&&I.add(Ht.get($t.stopId));if(!v.size&&!I.size)continue;let Z=(et.descriptionText||et.headerText||{translation:[]}).translation||[],nt=((Z.find($t=>$t.language==="es")||Z[0]||{}).text||"").trim(),bt=+((et.activePeriod||[])[0]||{}).start||0;U.some($t=>$t.txt===nt)||U.push({id:J.id,fams:v,stops:I,txt:nt,when:bt?new Date(bt*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(G.adif&&Date.now()-G.adifAt<15*6e4)for(let[B,J]of(G.adif.items||[]).entries()){let et=(J.t?J.t+". ":"")+J.txt,v=new Set,I=new Set,Z=x(et);for(let nt of et.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))W[nt[1]]&&v.add(nt[1]);M.forEach((nt,bt)=>{nt.fams.size&&nt.n.length>4&&Z.includes(x(nt.n))&&(I.add(bt),v.size||nt.fams.forEach($t=>v.add($t)))}),U.some(nt=>nt.txt===et)||U.push({id:"A"+B,fams:v,stops:I,txt:et,when:G.adif.upd||"",src:"Adif",lvl:J.lvl})}if(R.status==="fulfilled"||C.status==="fulfilled"||G.adif){G.alerts=U.sort((B,J)=>J.when>B.when?1:-1);try{Rg()}catch{}}Re(),Bh(),Q=0,a()}let se=()=>G.okVP&&Date.now()-G.okVP<9e4,he={at:0,v:!1},fe=()=>{if(!se()||G.vp.size>0)return!1;if(Date.now()-he.at>3e4){he.at=Date.now();let h=_t(new Date),g=t.days.indexOf(h.ymd),S=0;if(g>=0)for(let w of K[g]){let C=h.min-w.t0;C>w.pat.t[1]+2&&C<w.pat.t[w.pat.t.length-2]-2&&S++}he.v=S>=6}return he.v},z=()=>se()&&!fe();function Re(){let h=p("#rtst"),g=p("#mode");if(g){let w=!!z()&&ae().live;g.classList.toggle("on",w),g.classList.toggle("pre",!w),g.textContent=w?__t(1):pe.cur?__t(2):__t(3),g.classList.toggle("past",!!pe.cur),g.title=pe.cur?`${__t(4)}${pe.cur.sn.t}${__t(5)}`:""}if(!h)return;G.url?G.err?h.textContent=__t(7)+G.err+__t(8):z()?h.innerHTML=`${__t(9)}${G.vp.size}${__t(10)}${G.delays.size}${__t(11)}${new Date(G.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:fe()?h.textContent=__t(12):h.textContent=__t(13):h.textContent=G.err||__t(6);let S=p("#rturl");S&&S._shown!==G.url&&(S.value=G.url,S._shown=G.url)}p("#rtsave").onclick=()=>{let h=p("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(h&&!/^https?:\/\//.test(h)&&(h="https://"+h),!h){G.err=__t(14),Re();return}G.url=h;try{localStorage.setItem("rod_rt",h)}catch{}G.ok=0,G.err="",Re(),oe()},p("#rtoff").onclick=()=>{G.url=wt;try{localStorage.removeItem("rod_rt")}catch{}u._h="",oe()},setInterval(oe,2e4),setTimeout(oe,50);let pe={snap:null,key:""};function P(){let h=ae();if(h.live||!Te.hoy||!Te.hoy.snaps||At&&Qt==null)return null;let g=_t(new Date).min;if(h.min>g+1)return null;let S=null;for(let w of Te.hoy.snaps){if(!w.d)continue;let C=of(w.t);C<=h.min+1&&(!S||C>S.m)&&(S={m:C,sn:w})}return S&&h.min-S.m<=25?S:null}let y=h=>{{let C=Nh(h.num);if(C&&C.cx&&ae().live)return"X"}let g=pe.cur;if(g){if(g.sn.x&&g.sn.x.includes(h.tid))return"X";let C=g.sn.d[h.tid];return C??0}if(!z())return null;let S=G.delays.get(h.tid),w=G.vp.get(h.tid);return S==="X"?S:w&&w.pre&&w.preDl>=1?Math.max(typeof S=="number"?S:0,w.preDl*60):S??null},X=new Set(V);try{let h=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(h)&&h.some(g=>V.includes(g))&&(X.clear(),h.forEach(g=>V.includes(g)&&X.add(g)))}catch{}let rt=new us,ht=new us,Rt=new Wi({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),Dt=new Wi({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),ut=new rr(rt,Rt),xt=new rr(ht,Dt);xt.renderOrder=20,ut.renderOrder=21,ut.frustumCulled=xt.frustumCulled=!1,e.add(xt,ut);function Ut(h){let g=h[0]/o+l,S=h[1]/o+c;for(let w of A){if(w._bb===void 0){let R=1e9,N=1e9,U=-1e9,B=-1e9;for(let J of w.rings||[]){let et=J[0]||[];for(let v=0;v<et.length;v+=2)et[v]<R&&(R=et[v]),et[v]>U&&(U=et[v]),et[v+1]<N&&(N=et[v+1]),et[v+1]>B&&(B=et[v+1])}w._bb=[R,N,U,B]}let C=w._bb;if(!(g<C[0]||g>C[2]||S<C[1]||S>C[3]))for(let R of w.rings||[]){let N=R[0]||[],U=!1;for(let B=0,J=N.length,et=J-2;B<J;et=B,B+=2){let v=N[B+1],I=N[et+1];v>S!=I>S&&g<(N[et]-N[B])*(S-v)/(I-v)+N[B]&&(U=!U)}if(U)return!0}}return!1}let te=!1;function zt(){te||!A.length||(te=!0,M.forEach(h=>{h.ext=!Ut(h.w)}),T.forEach(h=>{h.ext=!Ut(h.p[0])&&!Ut(h.p[h.p.length-1])&&!Ut(h.p[h.p.length>>1])}))}let Ot=()=>{let h=new Set(X.size<=2?X:[]);try{mt&&mt.fam&&h.add(mt.fam)}catch{}return h},ee="";function ce(){zt();let h=[],g=[],S=new Set,w=new ue,C=new ue("#d2d0d0"),R=Ot();ee=[...R].join();for(let N of V)if(X.has(N))for(let U of Y[N]){if(S.has(U))continue;S.add(U);let B=T[U].p;w.set(W[N]),T[U].ext&&!R.has(N)&&w.lerp(C,.55);for(let J=0;J+1<B.length;J++)h.push(B[J][0],B[J][1],O,B[J+1][0],B[J+1][1],O),g.push(w.r,w.g,w.b,w.r,w.g,w.b)}h.length||(h.push(0,0,-50,0,0,-50),g.push(0,0,0,0,0,0)),rt.setPositions(h),rt.setColors(g),ht.setPositions(h),a()}ce();let _e=h=>new En({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ue(h)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),q=new ln,Lt=M.length,gt=new Float32Array(Lt*3),Bt=new Float32Array(Lt*3),Vt=new Float32Array(Lt),St=new Float32Array(Lt);M.forEach((h,g)=>{gt[g*3]=h.w[0],gt[g*3+1]=h.w[1],gt[g*3+2]=O,Bt.set([1,1,1],g*3),Vt[g]=6,St[g]=1.6}),q.setAttribute("position",new Ye(gt,3)),q.setAttribute("fill",new Ye(Bt,3)),q.setAttribute("size",new Ye(Vt,1)),q.setAttribute("bw",new Ye(St,1));let ie=_e("#1d2330"),Kt=new Ks(q,ie);Kt.renderOrder=22,Kt.frustumCulled=!1,e.add(Kt);function Ae(){let h=r.dist<45,g=Ot();M.forEach((S,w)=>{let C=[...S.fams].some(N=>X.has(N)),R=S.ext&&![...S.fams].some(N=>g.has(N))&&w!==Et;Vt[w]=C?w===Et?13:R?3:h?8:5:0,St[w]=w===Et?3:1.6}),q.attributes.size.needsUpdate=!0,q.attributes.bw.needsUpdate=!0}let we=600,cn=new ln,Vn=new Float32Array(we*3),dr=new Float32Array(we*3),aa=new Float32Array(we),oa=new Float32Array(we);cn.setAttribute("position",new Ye(Vn,3)),cn.setAttribute("fill",new Ye(dr,3)),cn.setAttribute("size",new Ye(aa,1)),cn.setAttribute("bw",new Ye(oa,1));let ji=new Float32Array(we);cn.setAttribute("ang",new Ye(ji,1));let Ih=new En({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ue("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),fr=new Ks(cn,Ih);fr.renderOrder=24,fr.frustumCulled=!1,e.add(fr);let Li=new ln,di=new Float32Array(we*3),pr=new Float32Array(we*3),la=new Float32Array(we),ca=new Float32Array(we);Li.setAttribute("position",new Ye(di,3)),Li.setAttribute("fill",new Ye(pr,3)),Li.setAttribute("size",new Ye(la,1)),Li.setAttribute("bw",new Ye(ca,1));let ms=new Ks(Li,_e("#ffffff"));ms.renderOrder=23,ms.frustumCulled=!1,e.add(ms);function ha(h,g){let S=T[h],w=g*S.L,C=0,R=S.c.length-1;for(;R-C>1;){let et=C+R>>1;S.c[et]<=w?C=et:R=et}let N=S.c[R]-S.c[C]||1,U=(w-S.c[C])/N,B=S.p[C],J=S.p[R];return[B[0]+(J[0]-B[0])*U,B[1]+(J[1]-B[1])*U]}let Us=h=>h*h*(3-2*h)*.35+h*.65;function Fs(h,g){let S=h.pat.t,w=h.pat.stops.length,C=S[2*w-2];if(g<S[1]-2||g>C+1)return null;if(g<=S[1])return{w:M[h.pat.stops[0]].w,at:0,next:0,moving:!1};for(let R=0;R<w-1;R++){let N=S[2*R+1],U=S[2*R+2],B=S[2*R+3];if(g<=U){let J=U>N?(g-N)/(U-N):1;return{w:ha(h.pat.segs[R],Us(_(J,0,1))),at:-1,next:R+1,prev:R,moving:!0}}if(g<=B)return{w:M[h.pat.stops[R+1]].w,at:R+1,next:R+1,moving:!1}}return{w:M[h.pat.stops[w-1]].w,at:w-1,next:w-1,moving:!1}}function Os(h){let g=t.days.indexOf(h.ymd),S=[];if(g<0)return{k:g,out:S};let w=(C,R)=>{for(let N of C){if(!X.has(N.fam))continue;let U=y(N);if(U==="X")continue;let B=(U||0)/60,J=h.min+R-N.t0-B;if(J<-2||J>N.pat.t[N.pat.t.length-2]+1)continue;let et=Fs(N,J);et&&S.push({tr:N,p:et,rel:J,dl:B,live:U!=null})}};return w(K[g],0),g>0&&w(K[g-1],1440),{k:g,out:S}}function Ph(h,g,S,w){let C=h.pat.stops[0],R=g.dep0,N=null,U=(J,et)=>{for(let v of J||[]){let I=v.pat.stops,Z=I.length;if(I[Z-1]!==C||v===h)continue;let nt=v.t0+v.pat.t[2*(Z-1)]-et;if(nt>R+5||nt<R-120)continue;let bt=Xt(v.pat),$t=ke(bt,g.w,-1,1e9);if($t.err>.6)continue;let Zt=bt.stopD,Pt=v.pat.t,dt=Zt.findIndex(ve=>ve>$t.d);dt<0&&(dt=Z-1);let xe=dt===0?Pt[1]:Pt[2*dt-1]+(Zt[dt]>Zt[dt-1]?($t.d-Zt[dt-1])/(Zt[dt]-Zt[dt-1]):1)*(Pt[2*dt]-Pt[2*dt-1]),re=S-(v.t0+xe-et);re<-5||re>120||(!N||Math.abs(re)<Math.abs(N.prevDl))&&(N={prevTr:v,dPrev:$t.d,prevDl:re,arrO:nt+Math.max(0,re)})}};if(U(K[w],0),w>0&&U(K[w-1],1440),!N)return{prevTr:null,preDl:0};let B=Math.max(R,N.arrO+3);return{...N,depEst:B,preDl:Math.max(0,B-R)}}function Lh(h,g,S){let w=h.pat.t,C=g.length;if(!(S>=0))return S<0?g[0]:null;for(let R=0;R<C;R++)if(S<=w[2*R+1]){if(S>=w[2*R]||R===0)return g[R];let N=w[2*R-1],U=w[2*R];return g[R-1]+(g[R]-g[R-1])*(U>N?(S-N)/(U-N):1)}return g[C-1]}let zo=performance.now();function Dh(){let h=[],g=Date.now()/1e3,S=performance.now(),w=Math.min(1,(S-zo)/1e3);zo=S;for(let C of G.vp.values()){let R=ot.get(C.tid),N=R?R.fam:C.fam;if(N&&W[N]&&!X.has(N))continue;let U=G.delays.get(C.tid),B=typeof U=="number"?U/60:0,J=Math.max(0,g-C.ts);C.mvTs!==C.ts&&((!C.mvW||Math.hypot(C.w[0]-C.mvW[0],C.w[1]-C.mvW[1])>.025)&&(C.mvW=C.w,C.mvAt=C.ts),C.mvTs=C.ts),C.still=C.ts-(C.mvAt||C.ts);let et=C.w,v=-1;if(R){let Z=Xt(R.pat),nt=Z.stopD;if(C.dObs==null||C.obsAt!==C.ts){let dt=ke(Z,C.w,-1,1e9);C.dObs=dt.d,C.err=dt.err,C.obsAt=C.ts}let bt=ae(),$t=t.days.indexOf(bt.ymd),Zt=R.day===$t-1?1440:0,Pt=R.t0+R.pat.t[1]-Zt;if(C.pre=bt.min+B<Pt-1&&(C.dObs>nt[0]+.35||C.err>.6)&&!(C.st==="STOPPED_AT"&&C.sid===M[R.pat.stops[0]].id),C.dep0=Pt,C.pre){if(C.atStop=-1,C.next=0,v=0,C.disp=null,C.prevAt!==C.ts&&(C.prevAt=C.ts,Object.assign(C,Ph(R,C,bt.min,$t))),C.prevTr){let dt=Xt(C.prevTr.pat);et=be(dt,C.dPrev)}}else if(C.err<=.6){let dt=nt.findIndex(ve=>ve>C.dObs+.08);dt<0&&(dt=nt.length-1);let xe=nt.reduce((ve,dn,Ge)=>Math.abs(dn-C.dObs)<Math.abs(nt[ve]-C.dObs)?Ge:ve,0);C.atStop=Math.abs(nt[xe]-C.dObs)<.16?xe:-1,C.next=dt,v=dt;let re=C.dObs;if(C.st==="STOPPED_AT"&&C.atStop>=0)re=nt[C.atStop];else if(dt>0){let ve=(R.pat.t[2*dt]-R.pat.t[2*dt-1])*60,dn=ve>0?(nt[dt]-nt[dt-1])/ve:0,Ge=ae(),ne=t.days.indexOf(Ge.ymd),mn=R.day===ne-1?1440:0,_r=Lh(R,nt,Ge.min+mn-R.t0-B),tn=C.dObs+dn*Math.min(J,60);_r!=null&&(tn=Math.min(tn,Math.max(C.dObs,_r))),re=Math.max(C.dObs,Math.min(nt[dt]-.03,tn))}C.disp==null||Math.abs(C.disp-re)>1.2?C.disp=re:re>C.disp&&(C.disp+=(re-C.disp)*Math.min(1,w*1.5)),et=be(Z,C.disp)}else if(C.err>2){let dt=ae(),xe=t.days.indexOf(dt.ymd),re=R.day===xe-1?1440:0,ve=Fs(R,dt.min+re-R.t0-B);ve&&(et=ve.w,C.est=!0,v=ve.next),C.atStop=-1,C.next=ve?ve.next:-1}else C.atStop=-1,C.next=-1}let I=C.pre?"":C.st==="STOPPED_AT"&&C.atStop>=0||C.atStop>=0&&C.still>30?"st":C.still>=90?"via":"";h.push({tr:R,v:C,w:et,stop:I,p:{w:et},fam:N||"?",c:R?R.c:W[N]||"#6b7385",dl:B,live:!0,real:!0,idx:v,age:J,cancel:U==="X"})}return h}let Zn=new Map,b=!1,k=!1,it="",j=[],Q=0,Ct=null,mt=null,Et=-1,It=!1,jt=0,Me="";function Ee(h){let g=At>0||z()&&Qt==null||!!mt,S=g?50:250;if(h-Q<S)return!1;Q=h,[...Ot()].join()!==ee&&(ce(),Ae());{let v=P(),I=v?v.sn.t:"";pe.cur=v,I!==pe.key&&(pe.key=I,Re()),!v&&!ae().live&&!Te.at&&He()}let w=ae(),C=z()&&w.live,R=C?{k:t.days.indexOf(w.ymd),out:Dh()}:Os(w);j=R.out;let N=new ue,U=0,B=0;for(let v of j){if(U>=we)break;Vn[U*3]=v.p.w[0],Vn[U*3+1]=v.p.w[1],Vn[U*3+2]=O+.02;let I=null;if(v.real&&v.v.pre&&v.v.prevTr)I=be(Xt(v.v.prevTr.pat),v.v.dPrev+.35);else if(v.real&&v.tr&&!v.v.pre&&v.v.err<=.6&&v.v.disp!=null&&!(v.v.st==="STOPPED_AT"&&v.v.atStop>=0))I=be(Xt(v.tr.pat),v.v.disp+.35);else if(!v.real&&v.p.moving){let Zt=v.tr.pat.t,Pt=v.p.prev,dt=Zt[2*Pt+1],xe=Zt[2*Pt+2],re=xe>dt?(v.rel-dt)/(xe-dt):1;I=ha(v.tr.pat.segs[Pt],Math.min(1,Us(_(re,0,1))+.04))}let Z=v.real?!!v.stop:!v.p.moving;if(v.broke=jd(v),v.broke)ji[U]=85;else if(Z)ji[U]=75;else if(I){let Zt=Vo(v.p.w),Pt=Vo(I),dt=Pt[0]-Zt[0],xe=Pt[1]-Zt[1];ji[U]=Math.hypot(dt,xe)>.05?Math.atan2(dt,-xe):99}else ji[U]=99;N.set(v.c||v.tr.c),dr[U*3]=N.r,dr[U*3+1]=N.g,dr[U*3+2]=N.b;let nt=v.tr?v.tr===mt:mt&&mt.vtid===v.v.tid;aa[U]=nt?22:r.dist<45?17:14,oa[U]=nt?3.5:2.2;let bt=v.real&&v.stop==="via"||!!v.broke,$t=v.cancel||v.broke?[.86,.15,.15]:v.dl>10?[.86,.15,.15]:v.dl>5?[.92,.48,.05]:v.dl>=1?[.98,.8,.08]:[.09,.64,.29];(v.live&&v.dl>=5||nt||bt)&&(di[B*3]=v.p.w[0],di[B*3+1]=v.p.w[1],di[B*3+2]=O+.01,pr.set(nt?$t:bt?[.86,.15,.15]:[.98,.45,.09],B*3),la[B]=aa[U]+(nt?16+5*Math.sin(h/220):bt?10+3*Math.sin(h/400):8),ca[B]=nt?2:3,B++),U++}if(cn.setDrawRange(0,U),Li.setDrawRange(0,B),["position","fill","size","bw"].forEach(v=>{cn.attributes[v].needsUpdate=!0,Li.attributes[v].needsUpdate=!0}),cn.attributes.ang.needsUpdate=!0,Ct){let v=j.find(I=>I.tr===Ct);if(v){let I=0,Z=innerHeight,nt=u.style.display!=="none"&&!u.classList.contains("min")?u.getBoundingClientRect():null,bt=p("#rc").getBoundingClientRect();innerWidth<=640&&(nt&&(I=nt.bottom),Z=Math.min(Z,bt.top));let $t=I+(Z-I)/2,Zt=$t-innerHeight/2,Pt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=v.p.w[0]-Math.sin(r.yaw)*Zt*Pt,s.ty=v.p.w[1]+Math.cos(r.yaw)*Zt*Pt}else z()&&ae().live&&(Ct=null)}let J=at(Math.floor(w.min+1e-6));J!==Me&&(Me=J,p("#ctime").textContent=J),p("#ntr").textContent=String(j.length),p("#ntrl").textContent=C?__t(15):__t(16);{let v=X.size<V.length?[...X].sort(L).join(", "):"",I=p("#ccount"),Z=pe.cur?`\u23EA ${j.length}${__t(17)}${pe.cur.sn.t} \xB7 ${Object.values(pe.cur.sn.d).filter(nt=>nt>=60).length}${__t(18)}`:!w.live&&w.min<_t(new Date).min-1&&!At?`${__t(19)}${Te.hoy&&Te.hoy.snaps&&Te.hoy.snaps.some(nt=>nt.d)?`${__t(20)}${Te.hoy.snaps.find(nt=>nt.d).t}`:__t(21)}`:`\u{1F686} ${j.length} ${C?__t(22):__t(23)}${v?` <small>\xB7 ${f(v)}</small>`:""}`;I&&I._t!==Z&&(I.innerHTML=Z,I._t=Z)}let et=new Date;if(p("#cdate").textContent=w.live?__t(24):At?__t(25)+At:mi?__t(26):__t(27),R.k<0?p("#src").innerHTML=`${__t(28)}${Le(t.days[0])}${__t(29)}${Le(t.days[t.days.length-1])}${__t(30)}`:C?p("#src").textContent=`${__t(31)}${ar(Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...G.vp.values()].map(v=>v.ts),0)))+" s")}`:fe()&&w.live?p("#src").innerHTML=__t(32):p("#src").innerHTML=__t(33)+(G.url?__t(34):__t(35))+__t(36),w.live){let v=Math.round(w.min),I=p("#tsl");document.activeElement!==I&&(I.value=v<240?v+1440:v)}{let v=mt?String(mt.num||mt.vtid||""):"";v!==Ee._sk&&(Ee._sk=v,je(!0))}return je(),h-jt>3e3&&(mt||Et>=0||It||k||it)&&(jt=h,ze()),Re(),!0}let Jt=-1,Ie=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Ke=[],Ue=document.createElement("button");Ue.type="button",Ue.id="mbtn",Ue.title=__t(37),Ue.innerHTML=__t(38),Ue.onclick=()=>{Ie=!Ie;try{localStorage.setItem("rod_mun",Ie?"1":"")}catch{}Ue.classList.toggle("on",Ie),a(),si()},Ue.classList.toggle("on",Ie),document.body.appendChild(Ue);let Xe=A.slice().sort((h,g)=>g.pop-h.pop);function xn(h){if(h._a)return h._a;let g=null,S=0;for(let w of h.rings||[]){let C=w[0];if(!C)continue;let R=0,N=0,U=0;for(let B=0,J=C.length;B<J;B+=2){let et=C[B],v=C[B+1],I=C[(B+2)%J],Z=C[(B+3)%J],nt=et*Z-I*v;R+=nt,N+=(et+I)*nt,U+=(v+Z)*nt}Math.abs(R)>S&&(S=Math.abs(R),g=[N/(3*R),U/(3*R)])}return h._a=g?[(g[0]-l)*o,(g[1]-c)*o]:[h.cx,h.cy]}let Yt=h=>h>=1e5?1:h>=2e4?2:h>=5e3?3:4,An=[0,7.6,6.7,6,5.4],Fe=[0,17,15,13,12],Jn=h=>h.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function si(){let h=s.tilt<.06&&r.tilt<.08;Ue.classList.toggle("show",h);let g=0;if(Ie&&h){let S=[...document.querySelectorAll(".plab, .slab")].filter(R=>R.offsetParent!==null||R.style.display==="block").map(R=>{let N=R.getBoundingClientRect();return[N.left-2,N.top-2,N.right+2,N.bottom+2]}).filter(R=>R[2]>R[0]),w=r.dist,C=w>160?5e4:w>130?2e4:w>105?8e3:w>80?3e3:w>62?800:0;for(let R of Xe){let N=Yt(R.pop);if(R.pop<C)break;let U=xn(R);if(hn.set(U[0],U[1],O).project(n),Math.abs(hn.x)>1.02||Math.abs(hn.y)>1.02)continue;let B=(hn.x*.5+.5)*innerWidth,J=(-hn.y*.5+.5)*innerHeight,et=Jn(R.name),v=et.length*An[N]+8,I=Fe[N],Z=[B-v/2,J-I/2,B+v/2,J+I/2];if(S.some(bt=>Z[0]<bt[2]&&bt[0]<Z[2]&&Z[1]<bt[3]&&bt[1]<Z[3]))continue;S.push(Z);let nt=Ke[g]||(Ke[g]=Object.assign(document.createElement("div"),{className:"mlab"}));nt.isConnected||document.body.appendChild(nt),nt._n!==et&&(nt.textContent=et,nt._n=et),nt._t!==N&&(nt.className="mlab t"+N,nt._t=N),nt.style.transform=`translate(${Math.round(B)}px,${Math.round(J)}px) translate(-50%,-50%)`,nt.style.display="block",g++}}for(;g<Ke.length;g++)Ke[g].style.display="none"}let Te={at:0,hoy:null,ayer:null,err:""},gs="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function He(){Date.now()-Te.at<5*6e4||(Te.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(h=>fetch(gs+h+".json",{cache:"no-store"}).then(g=>g.ok?g.json():null).catch(()=>null))).then(([h,g,S])=>{Te.hoy=h,Te.ayer=g,Te.hist=S,Te.tr=null,Te.err=h?"":__t(39),k&&(u._h="",ze()),je(!0)}))}function en(h){let g={};for(let w of h&&h.snaps||[])for(let C of w.r||[]){let R=/^\d+[A-Z](\d+)/.exec(C);R&&(g[R[1]]=g[R[1]]||[]).push(Math.max(0,w.d&&w.d[C]||0)/60)}let S={};for(let w in g){let C=g[w].sort((R,N)=>R-N);S[w]=Math.round(C[C.length>>1])}return S}function fi(h){if(!Te.tr){let S=new Map;for(let w of Te.hist&&Te.hist.days||[])S.set(w.day,w.tr);for(let w of[Te.ayer,Te.hoy])if(w&&w.day&&!S.has(w.day)){let C=en(w);Object.keys(C).length&&S.set(w.day,C)}Te.tr=S}let g=[...Te.tr.values()].map(S=>S[String(h)]).filter(S=>S!=null);return g.length?{n:g.length,late:g.filter(S=>S>=5).length,avg:g.reduce((S,w)=>S+w,0)/g.length}:null}let Oe=h=>h>=90?"g":h>=80?"y":h>=65?"w":"b",vn={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},Qi=h=>h>10?vn.b:h>5?vn.w:h>=1?vn.y:vn.g,Di=h=>(h>=.05?"+":"")+(Math.round(h*10)/10).toString().replace(".",",")+" min";function ua(h,g,S){return`<div class="sbars">${h.map(w=>`<div class="sbar" title="${f(w.tip||"")}"><span class="sl">${w.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(w.w*100))}%;background:${w.c}"></i></span><b class="sv" style="color:${w.c===vn.y?"var(--svy,#a16207)":w.c===vn.w?"var(--svw,#c2410c)":w.c}">${w.val}</b></div>`).join("")}</div>`}function og(h){if(h=(h||[]).filter(U=>U.n>=10),!h||h.length<2){let U=h&&h[0];return U?`${__t(40)}${U.t}: ${Math.round(U.ok/U.n*100)}${__t(41)}${U.n}${__t(42)}`:__t(43)}let g=300,S=92,w=22,C=U=>w+U*(g-w-6)/(h.length-1),R=U=>6+(100-U)/100*(S-22),N=h.map((U,B)=>[C(B),R(U.n?U.ok/U.n*100:100),U]);return`<svg class="schart" viewBox="0 0 ${g} ${S}${__t(44)}${[100,75,50].map(U=>`<line x1="${w}" x2="${g-4}" y1="${R(U)}" y2="${R(U)}" class="gl"/><text x="2" y="${R(U)+3}" class="ax">${U}%</text>`).join("")}
      <polyline points="${N.map(U=>U[0].toFixed(1)+","+U[1].toFixed(1)).join(" ")}" class="ln"/>
      ${N.map(([U,B,J])=>`<circle cx="${U.toFixed(1)}" cy="${B.toFixed(1)}" r="5" class="pt"><title>${J.t} \xB7 ${J.n?Math.round(J.ok/J.n*100):100}${__t(45)}${J.n}${__t(46)}${J.d5}${__t(47)}${Di(J.avg)}${J.nd?` \xB7 ${J.nd}${__t(48)}`:""}</title></circle>`).join("")}
      <text x="${w}" y="${S-3}" class="ax">${h[0].t}</text><text x="${g-4}" y="${S-3}" class="ax" text-anchor="end">${h[h.length-1].t}</text></svg>`}function lg(){He();let h=ae(),g=j.filter(U=>U.real&&z()&&h.live),S=g.filter(U=>G.delays.has(U.v.tid)),w=S.length,C=g.length-w,R=`${__t(49)}`;if(w){let U=S.filter(Pt=>Pt.dl<3).length,B=S.filter(Pt=>Pt.dl>=5).length,J=S.filter(Pt=>Pt.stop==="via").length,et=Math.round(U/w*100);R+=`${__t(50)}${w}${__t(51)}${C?` \xB7 ${C}${__t(56)}`:""}</small><div class="kpis">
        <div class="kpi ${Oe(et)}"><b>${et}${__t(52)}${Oe(100-B/w*100*2)}" title="${Math.round(B/w*100)}${__t(53)}${B}${__t(54)}${J===0?"g":J<=2?"w":"b"}"><b>${J}${__t(55)}`;let v=new Map;S.forEach(Pt=>{let dt=Pt.fam,xe=v.get(dt)||{n:0,ok:0,sum:0};xe.n++,xe.ok+=Pt.dl<3,xe.sum+=Math.max(0,Pt.dl),v.set(dt,xe)});let I=[...v].filter(([Pt])=>W[Pt]).sort((Pt,dt)=>Pt[1].ok/Pt[1].n-dt[1].ok/dt[1].n||dt[1].sum/dt[1].n-Pt[1].sum/Pt[1].n),Z=I.filter(([,Pt])=>Pt.ok<Pt.n),nt=I.filter(([,Pt])=>Pt.ok===Pt.n);R+=`${__t(57)}`+(Z.length?"":__t(58))+ua(Z.map(([Pt,dt])=>({lab:Hn(Pt),w:dt.ok/dt.n,c:vn[Oe(dt.ok/dt.n*100)],val:`${Math.round(dt.ok/dt.n*100)}% <small>${Di(dt.sum/dt.n)}</small>`,tip:`${Pt}: ${dt.ok}${__t(59)}${dt.n}${__t(60)}${Di(dt.sum/dt.n)}`})))+(nt.length?`${__t(61)}${nt.map(([Pt])=>Hn(Pt)).join(" ")}</p>`:"");let bt=new Map;S.forEach(Pt=>{if(!Pt.tr||Pt.v.next==null||Pt.v.next<0||Pt.v.pre)return;let dt=Pt.tr.pat.stops[Pt.v.next],xe=bt.get(dt)||{n:0,sum:0};xe.n++,xe.sum+=Math.max(0,Pt.dl),bt.set(dt,xe)});let $t=[...bt].filter(([,Pt])=>Pt.sum/Pt.n>=1).sort((Pt,dt)=>dt[1].sum/dt[1].n-Pt[1].sum/Pt[1].n).slice(0,8),Zt=$t.length?$t[0][1].sum/$t[0][1].n:1;R+=`${__t(62)}`+($t.length?ua($t.map(([Pt,dt])=>({lab:`<span class="sn" data-gs="${Pt}">${f(M[Pt].n)}</span>`,w:dt.sum/dt.n/Zt,c:Qi(dt.sum/dt.n),val:`${Di(dt.sum/dt.n)} <small>${dt.n} ${dt.n===1?"tren":__t(63)}</small>`,tip:`${M[Pt].n}: ${dt.n}${__t(64)}${Di(dt.sum/dt.n)}${__t(65)}`}))):__t(66))}else R+=`${__t(67)}`;let N=Te.hoy;R+=`<button type="button" class="hmore" data-cols>${Kn.on?__t(68):__t(69)}</button>`;{kh("");let U=[...zs.m].filter(([B,J])=>W[B]&&J[0]>=3).map(([B,J])=>[B,J[1]/J[0]]).sort((B,J)=>B[1]-J[1]);U.length&&(R+=`${__t(70)}`+ua(U.slice(0,8).map(([B,J])=>({lab:Hn(B),w:J,c:vn[Oe(J*100)],val:`${Math.round(J*100)}%`,tip:`${B}: ${Math.round(J*100)}${__t(71)}`}))))}{let U=et=>{let v=(et&&et.snaps||[]).filter(nt=>nt.n),I=v.reduce((nt,bt)=>nt+bt.n,0),Z=v.reduce((nt,bt)=>nt+bt.ok,0);return I?Z/I*100:null},B=U(Te.hoy),J=U(Te.ayer);B!=null&&(R+=`${__t(72)}${Oe(B)}">${Math.round(B)}${__t(73)}${J!=null?`${__t(74)}${Oe(J)}">${Math.round(J)} %</b></span><span>${B>=J?__t(76):__t(77)}${__t(75)}`:""}</div>`)}if(R+=`${__t(78)}`,N&&N.snaps){R+=og(N.snaps);let U=Object.entries(N.st||{}).map(([et,v])=>[Ht.get(et),v]).filter(([et,v])=>et!=null&&v.n>=3).map(([et,v])=>[et,v.sum/v.n/60,v]).filter(et=>et[1]>=1).sort((et,v)=>v[1]-et[1]).slice(0,8);if(U.length){let et=U[0][1];R+=`${__t(79)}`+ua(U.map(([v,I,Z])=>({lab:`<span class="sn" data-gs="${v}">${f(M[v].n)}</span>`,w:I/et,c:Qi(I),val:`${Di(I)}${__t(80)}${Math.round(Z.max/60)}</small>`,tip:`${M[v].n}: ${Z.n}${__t(81)}${Z.d5}${__t(82)}${Math.round(Z.max/60)} min`})))}let B=Object.entries(N.lines||{}).filter(([et,v])=>W[et]&&v.n>=3).sort((et,v)=>et[1].ok/et[1].n-v[1].ok/v[1].n);B.length&&(R+=`${__t(83)}`+ua(B.map(([et,v])=>({lab:Hn(et),w:v.ok/v.n,c:vn[Oe(v.ok/v.n*100)],val:`${Math.round(v.ok/v.n*100)}% <small>${Di(v.sum/v.n/60)}</small>`,tip:`${et}${__t(84)}${Math.round(v.ok/v.n*100)}${__t(85)}${Math.round(v.max/60)} min`}))));let J=N.upd?(Date.now()-Date.parse(N.upd))/6e4:0;R+=`<small class="snote">${J>40?`${__t(87)}${ar(Math.round(J)+" min")}${__t(88)}`:""}${__t(86)}${f((N.upd||"").slice(11,16))} \xB7 ${(N.note||"").includes("Solo cuentan")?__t(89):__t(90)}</small>`}else R+=`<p class="snote">${Te.at?__t(91):__t(92)}</p>`;return R+"</div>"}function cg(h){let g=ae(),S=j.filter(I=>(I.fam||I.tr&&I.tr.fam)===h),w=S.filter(I=>I.real),C=S.length,R=S.filter(I=>I.dl>=5).length,N=S.filter(I=>I.dl<3).length,U=S.filter(I=>I.stop==="via"||I.broke).length,B=G.alerts.filter(I=>I.fams.has(h)),J=I=>{let Z=I.tr;if(!Z)return"";let nt=I.v;if(I.real&&nt){let $t=nt.next>=0?M[Z.pat.stops[nt.next]].n:"";return nt.atStop>=0?`${__t(93)}${M[Z.pat.stops[nt.atStop]].n}`:$t?`${__t(94)}${$t}`:""}let bt=I.p;return bt&&bt.next!=null&&bt.next>=0?`${__t(94)}${M[Z.pat.stops[bt.next]].n}`:""},et=S.slice().sort((I,Z)=>Z.dl-I.dl).slice(0,40).map(I=>{let Z=I.tr;return`<li class="go${ma({num:Z?Z.num:I.v.num,tid:Z?Z.tid:I.v.tid})?" sel":""}" data-gt="${f(Z?Z.num:I.v.num)}|${f(I.real?I.v.tid:Z?Z.tid:"")}"><b>${f(Z?Z.num:I.v.num)}</b><span>${Z?Ni(M[Z.pat.stops[Z.pat.stops.length-1]].n,h):""} <small>${f(J(I))}</small></span>${I.dl>=1?`<em class="dl ${es(I.dl)}">+${Math.round(I.dl)}</em>`:__t(95)}</li>`}).join(""),v=kh(h);return`<div class="tc sts" style="--c:${W[h]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${Hn(h)}${__t(96)}${g.live?`${__t(102)}${C}${__t(103)}${w.length<C?` (${w.length}${__t(104)}`:""}`:`${__t(105)}${at(g.min)}`}</small>
      <div class="kpis"><div class="kpi ${C?Oe(N/C*100):""}"><b>${C?Math.round(N/C*100)+"%":"\u2014"}${__t(97)}${R?R/Math.max(1,C)>.2?"b":"w":"g"}"><b>${R}${__t(98)}${U?"b":"g"}"><b>${U}${__t(99)}${B.length?hg(B):__t(106)}${v<.7?`${__t(107)}${Math.round(v*100)}${__t(108)}`:""}${__t(100)}${et||__t(109)}${__t(101)}`}let hg=h=>`<div class="al">${h.slice(0,3).map(g=>`<p>\u26A0\uFE0F ${_a(g)} ${f(g.txt)} <small>${xa(g)}</small></p>`).join("")}</div>`,Kn={on:!1,mesh:null};function Zd(){let h=Te.hoy,g=[];if(h&&h.st)for(let[S,w]of Object.entries(h.st)){let C=Ht.get(S);C!=null&&w.n>=2&&g.push([C,w.sum/w.n/60,w.n])}if(!g.length){let S=new Map;j.forEach(w=>{if(!w.real||!w.tr||w.v.next==null||w.v.next<0||w.v.pre||!G.delays.has(w.v.tid))return;let C=w.tr.pat.stops[w.v.next],R=S.get(C)||[0,0];R[0]+=Math.max(0,w.dl),R[1]++,S.set(C,R)}),S.forEach((w,C)=>g.push([C,w[0]/w[1],w[1]]))}return g}function ug(){if(Kn.mesh&&(e.remove(Kn.mesh),Kn.mesh.geometry.dispose(),Kn.mesh.material.dispose(),Kn.mesh=null),!Kn.on){a();return}let h=Zd();if(!h.length){an(__t(110)),Kn.on=!1;return}let g=new Qa(.32,.32,1,16);g.rotateX(Math.PI/2),g.translate(0,0,.5);let S=new Zs({fog:!1}),w=new Za(g,S,h.length),C=new Ve,R=new ue;h.forEach(([N,U],B)=>{let J=.3+Math.min(U,40)*.3;C.makeScale(1,1,J),C.setPosition(M[N].w[0],M[N].w[1],O),w.setMatrixAt(B,C),R.set(U>10?"#dc2626":U>5?"#ea7a0c":U>=1?"#eab308":"#16a34a"),w.setColorAt(B,R)}),w.renderOrder=25,w.frustumCulled=!1,e.add(w),Kn.mesh=w,s.tilt<.5&&(s.tilt=.85),a()}let mr=document.createElement("button");mr.type="button",mr.id="sbtn",mr.title=__t(111),mr.innerHTML=__t(112),mr.onclick=()=>{k=!k,k&&(b=It=!1,Te.at=0),u._h="",ze(),a()},document.body.appendChild(mr);function dg(){r.dist<45!=Jt<45&&(Jt=r.dist,Ae()),fg(),si()}let ts=[],hn=new $;function fg(){let h=0;if(Kn.on){let S=Zd().sort((C,R)=>R[1]-C[1]),w=[];for(let[C,R]of S){if(h>=30)break;if(hn.set(M[C].w[0],M[C].w[1],O).project(n),hn.z>1||Math.abs(hn.x)>1||Math.abs(hn.y)>1)continue;let N=(hn.x*.5+.5)*innerWidth,U=(-hn.y*.5+.5)*innerHeight;if(w.some(([J,et])=>Math.abs(J-N)<90&&Math.abs(et-U)<18))continue;w.push([N,U]);let B=ts[h]||(ts[h]=Object.assign(document.createElement("div"),{className:"slab"}));B.isConnected||document.body.appendChild(B),B.textContent=M[C].n+" +"+Math.round(R)+"\u2032",B.dataset.i=C,B.style.display="block",B.style.transform=`translate(${Math.round(N+8)}px,${Math.round(U-8)}px)`,h++}for(;h<ts.length;h++)ts[h].style.display="none";return}if(r.dist<30){let S=[];for(let w=0;w<Lt;w++)Vt[w]<4||(hn.set(M[w].w[0],M[w].w[1],O).project(n),!(hn.z>1||Math.abs(hn.x)>1.05||Math.abs(hn.y)>1.05)&&S.push([w,(hn.x*.5+.5)*innerWidth,(-hn.y*.5+.5)*innerHeight]));if(S.length<=70)for(let[w,C,R]of S){let N=ts[h]||(ts[h]=Object.assign(document.createElement("div"),{className:"slab"}));N.isConnected||document.body.appendChild(N),N.textContent=M[w].n,N.dataset.i=w,N.style.display="block",N.style.transform=`translate(${Math.round(C+8)}px,${Math.round(R-7)}px)`,h++}}for(;h<ts.length;h++)ts[h].style.display="none"}function Vo(h){return hn.set(h[0],h[1],O).project(n),[(hn.x*.5+.5)*innerWidth,(-hn.y*.5+.5)*innerHeight,hn.z]}function Jd(h,g,S,w){let C=null,R=S*S;for(let N of j){let[U,B,J]=Vo(N.p.w);if(J>1)continue;let et=(U-h)**2+(B-g)**2;et<R&&(R=et,C={a:N})}if(C)return C;R=w*w;for(let N=0;N<Lt;N++){if(!Vt[N])continue;let[U,B,J]=Vo(M[N].w);if(J>1)continue;let et=(U-h)**2+(B-g)**2;et<R&&(R=et,C={s:N})}return C}let Bs=!1;window.__rodHide=()=>{Bs=!0},document.addEventListener("click",h=>{Bs&&!h.target.closest("#mcs, canvas")&&(Bs=!1)},!0),window.__rodTap=(h,g)=>{let S=null,w=1e9;for(let R of ts){if(R.style.display==="none")continue;let N=R.getBoundingClientRect();if(h>=N.left-4&&h<=N.right+4&&g>=N.top-4&&g<=N.bottom+4){let U=Math.abs(g-(N.top+N.bottom)/2)*4+(h-N.left);U<w&&(w=U,S=R)}}if(S)return window.__rodPickStation(+S.dataset.i),!0;let C=Jd(h,g,24,18);return C&&(C.a||C.s!=null)&&(Bs=!1),C&&C.a?(b=!1,It=!1,k=!1,mt=C.a.tr||{vtid:C.a.v.tid},Et=-1,Ct=null,Ae(),ze(),Q=0,a(),!0):C&&C.s!=null?(b=!1,It=!1,k=!1,Et=C.s,mt=null,Ct=null,Ae(),ze(),a(),!0):!1},window.__rodHover=(h,g)=>{let S=Jd(h,g,14,10);if(S&&S.a){let w=S.a,C=w.tr?M[w.tr.pat.stops[w.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${w.c}">\u25A0</span> ${f(w.fam||w.tr&&w.tr.fam||"?")}${__t(113)}${f(w.tr?w.tr.num:w.v.num)}</b><small>${C?__t(94)+f(C):""}${w.real?(w.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(w.dl)} min</b>`:__t(114))+__t(115):__t(116)}</small>`}return S&&S.s!=null?`<b>${f(M[S.s].n)}</b><small>${[...M[S.s].fams].sort(L).join(" \xB7 ")}</small>`:null},window.__rodPickStation=h=>{Bs=!1,b=It=k=!1,mt=null,Ct=null,Et=h,Ae(),u._h="",ze(),a()};{let h=p("#rc"),g=()=>{let S=h.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,S-64-10)+"px")};try{new ResizeObserver(g).observe(h)}catch{}addEventListener("resize",g),setTimeout(g,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let h=!1,g=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{g&&!h&&(h=!0,location.reload())}),navigator.serviceWorker.register("./sw.js").then(S=>{S.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||S.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{He()}catch{}},2500),setInterval(()=>{try{Te.at=0,He()}catch{}},15*6e4);let jn={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},da=matchMedia("(prefers-color-scheme: dark)");function Ho(){let h=jn.mode==="dark"||jn.mode==="auto"&&da.matches;document.documentElement.classList.toggle("dark",h);for(let S=0;S<Lt;S++)Bt.set(h?[.06,.08,.11]:[1,1,1],S*3);q.attributes.fill.needsUpdate=!0,ie.uniforms.border.value.set(h?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(h),ks.textContent=jn.mode==="auto"?h?"\u{1F319}":"\u2600\uFE0F":jn.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",ks.title=__t(117)+{auto:__t(118),dark:__t(119),light:"desactivado"}[jn.mode];let g=document.querySelector("meta[name=theme-color]");g&&(g.content=h?"#0d1119":"#eef1f5"),a()}let ks=document.createElement("button");ks.type="button",ks.id="tbtn",ks.onclick=()=>{jn.mode=jn.mode==="auto"?da.matches?"light":"dark":jn.mode==="dark"?"light":"dark",jn.mode==="dark"===da.matches&&(jn.mode="auto");try{localStorage.setItem("rod_theme",jn.mode)}catch{}Ho(),an(ks.title)},document.body.appendChild(ks);{let h=document.createElement("a");h.id="wabtn",h.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",h.target="_blank",h.rel="noopener",h.title=__t(120),h.innerHTML=__t(121),document.body.appendChild(h)}da.addEventListener&&da.addEventListener("change",Ho),Ho(),window.__rodTick=Ee,window.__rodFrame=dg,window.__rodResize=()=>{Rt.resolution.set(innerWidth,innerHeight),Dt.resolution.set(innerWidth,innerHeight)},window.__rodResize();let pi={st:-1,f:new Set},Kd=h=>{let g=[...M[h].fams].sort(L);return`<div class="sfc">${g.length>1?`<button type="button" data-sf="" class="${pi.f.size?"":"on"}${__t(122)}`:""}${g.map(S=>`<button type="button" data-sf="${f(S)}" class="ln ${pi.f.size&&!pi.f.has(S)?"off":""}${X.has(S)?"":" hid"}" style="--c:${W[S]}">${f(S)}</button>`).join("")}</div>${g.some(S=>!X.has(S))?__t(123):""}`},pg=h=>{let g=(h||"#6b7385").replace("#",""),S=parseInt(g.slice(0,2),16),w=parseInt(g.slice(2,4),16),C=parseInt(g.slice(4,6),16);return(.299*S+.587*w+.114*C)/255>.62?"#1d2330":"#fff"},Ni=(h,g)=>{let S=W[g]||"#6b7385";return`<span class="dst" style="background:${S};color:${pg(S)}" title="${f(g||"")}">${f(h)}</span>`},Go=h=>{let g=M[h]&&M[h].id;return Gn.st.includes(g)?"\u{1F3E0} ":un.st.includes(g)?"\u{1F4BC} ":""},es=h=>h>10?"d-hi":h>5?"d-md":"d-lo",mg=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,fa={ref:null,m:new Map};function Nh(h){if(fa.ref!==G.alerts){fa.ref=G.alerts,fa.m=new Map;for(let g of G.alerts){if(g.src!=="Rodalies")continue;let S=g.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let w of(g.es||g.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))fa.m.set(w[1],{why:S?S[1].trim().replace(/\s+/g," "):"",txt:g.txt,when:g.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(g.es||g.txt)})}}return fa.m.get(String(h))||null}let pa={ref:null,m:new Map};function jd(h){let g=String(h.tr?h.tr.num:h.v&&h.v.num||"");if(!g)return null;if(pa.ref!==G.alerts){pa.ref=G.alerts,pa.m=new Map;for(let w of G.alerts)if(w.src==="Rodalies"&&mg.test(w.es||w.txt))for(let C of(w.es||w.txt).matchAll(/\b(\d{4,6})\b/g))pa.m.set(C[1],w)}let S=pa.m.get(g);return S?{why:"aviso",txt:S.txt}:h.real&&h.stop==="via"&&h.v.still>=300?{why:"via",min:Math.round(h.v.still/60)}:null}let ma=h=>{try{let g=mt;return g?g.num!=null&&String(g.num)===String(h.num)||h.tid&&(g.tid===h.tid||g.vtid===h.tid):!1}catch{return!1}},Qd=(h,g)=>{let S=E(h,g.min-1,g.min+240).sort((w,C)=>w.est-C.est).slice(0,6);return S.length?`${__t(124)}${S.map(w=>`<li><b>${at(w.est)}</b>${Hn(w.fam)}<span>${Ni(w.dest,w.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},vi=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),gg=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(vi))}catch{}},tf=h=>!!h&&vi.some(g=>g.num===String(h.num)),rn=(()=>{try{let h=JSON.parse(localStorage.getItem("rod_alarm")||"null");return h&&Date.now()-h.at<4*36e5?h:null}catch{return null}})(),$o=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(rn))}catch{}},Wo=(h,g)=>!!(rn&&h&&rn.num===String(h.num)&&rn.sid===M[h.pat.stops[g]].id);function Uh(h,g){try{navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}an(h+" \xB7 "+g),"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(S=>S?S.showNotification(h,{body:g,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(h,{body:g})).catch(()=>{})}function _g(){if(!rn||rn.done)return;let h=ae();if(!h.live)return;let g=t.days.indexOf(h.ymd),S=(K[g]||[]).find(B=>String(B.num)===rn.num)||(K[g-1]||[]).find(B=>String(B.num)===rn.num);if(!S)return;let w=S.pat.stops.findIndex(B=>M[B].id===rn.sid);if(w<0)return;let C=y(S),R=typeof C=="number"?Math.max(0,C/60):0,N=S.day===g-1?1440:0,U=S.t0+S.pat.t[2*w]+R-N;if(U-h.min<-3){rn.done=!0,$o();return}U-h.min<=2&&(rn.done=!0,$o(),Uh(`${__t(125)}${M[S.pat.stops[w]].n}`,`${__t(126)}${Math.max(0,Math.round(U-h.min))}${__t(127)}${at(U)}${__t(128)}`))}function Fh(h,g){let S=+h.t.slice(0,2)*60+ +h.t.slice(3,5),w=K[g]||[],C=(U,B)=>U.t0+U.pat.t[2*B+1],R=null,N=11;for(let U of w){let B=U.pat.stops.findIndex(et=>M[et].id===h.sid);if(B<0||B===U.pat.stops.length-1)continue;let J=Math.abs(C(U,B)-S)+(String(U.num)===h.num?-5:0)+(U.fam===h.fam?0:20)+(h.dest&&M[U.pat.stops[U.pat.stops.length-1]].id!==h.dest?3:0);J<N&&(N=J,R=U)}return R}let Xo=new Set;function xg(){if(!vi.length)return;let h=ae();if(!h.live)return;let g=t.days.indexOf(h.ymd);for(let S of vi){let w=Fh(S,g);if(!w)continue;let C=w.pat.stops.findIndex(et=>M[et].id===S.sid);if(C<0)continue;let R=w.t0+w.pat.t[2*C+1],N=y(w),U=typeof N=="number"?N/60:0,B=R-h.min;if(B<-2||B>60)continue;let J=h.ymd+S.num+(N==="X"?"X":U>=10?10:U>=5?5:0);Xo.has(J)||(N==="X"||U>=5?(Xo.add(J),Uh(`${__t(129)}${at(R)} ${N==="X"?__t(130):`${__t(131)}${Math.round(U)} min`}`,`${w.fam} ${w.num}${__t(132)}${M[w.pat.stops[C]].n}${N==="X"?"":`${__t(133)}${at(R+U)}`}`)):B<=20&&!Xo.has(h.ymd+S.num+"ok")&&G.vp.has(w.tid)&&(Xo.add(h.ymd+S.num+"ok"),an(`${__t(129)}${at(R)}${__t(134)}`)))}}setInterval(()=>{try{_g(),xg()}catch{}},15e3);let Hn=h=>`<span class="ln" style="--c:${W[h]}">${f(h)}</span>`;{let h=S=>{let w=/^#?([0-9a-f]{6})$/i.exec(S||"");return w?[0,2,4].map(C=>{let R=parseInt(w[1].slice(C,C+2),16)/255;return R<=.03928?R/12.92:Math.pow((R+.055)/1.055,2.4)}).reduce((C,R,N)=>C+R*[.2126,.7152,.0722][N],0):0},g=[...new Set(Object.values(W))].filter(S=>h(S)>.3).map(S=>`.ln[style*="--c:${S}"],[data-f][style*="--c:${S}"].on,[data-f][style*="--c:${S}"]:not(.off){color:#14203a!important}`).join("");if(g){let S=document.createElement("style");S.textContent=g,document.head.appendChild(S)}}function ef(h,g){return g?h==="X"?__t(136):h>=60?`<span class="st late ${es(h/60)}${__t(137)}${Math.round(h/60)} min</span>`:__t(138):__t(135)}function ze(){try{vg()}finally{window.__rodTabSync&&window.__rodTabSync()}}function vg(){if(!mt&&Et<0&&!It&&!b&&!k&&!it){Bs=!1,u.innerHTML="",u._h="",u.style.display="none",u.classList.remove("peek"),$h();return}let h=ae(),g="",S=z()&&h.live,w=(v,I)=>G.alerts.filter(Z=>[...Z.fams].some(nt=>v.has(nt))||I!=null&&Z.stops.has(I)),C=v=>v.length?`<div class="al">${v.slice(0,4).map(I=>`<p>\u26A0\uFE0F ${_a(I)} ${[...I.fams].sort(L).slice(0,6).map(Hn).join(" ")} ${f(I.txt)} <small>${xa(I)}</small></p>`).join("")}${v.length>4?`<small>y ${v.length-4}${__t(139)}`:""}</div>`:"",R=mt&&S?j.find(v=>v.real&&(mt.vtid?v.v.tid===mt.vtid:v.tr===mt)):null;if(it&&!k&&!b&&!It&&!mt&&Et<0)g=cg(it);else if(k)g=lg();else if(b)g=`${__t(140)}${f(p("#ver").firstChild.textContent)}</small><ul class="chg">${p("#chg").innerHTML||__t(142)}${__t(141)}`;else if(It){let v=G.alerts.filter(I=>[...I.fams].some(Z=>X.has(Z))||!I.fams.size);g=`${__t(143)}${v.length}${__t(144)}${v.map(I=>`<div class="al"><p>${_a(I)} ${[...I.fams].sort(L).map(Hn).join(" ")} <small>${xa(I)}</small></p><p>${f(I.txt)}</p></div>`).join("")||__t(146)}${__t(145)}${G.alertsTs&&Date.now()/1e3-G.alertsTs<6*3600?__t(147):`${__t(148)}${G.alertsTs?new Date(G.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(R){let v=R.v,I=R.tr,Z=ne=>f(M[I.pat.stops[ne]].n),nt=I?I.pat.stops.length:0,bt=Ht.get(v.sid),$t=bt!=null?f(M[bt].n):f(v.sid),Zt=I&&v.atStop>=0?Z(v.atStop):"",Pt=I&&v.next>=0?Z(v.next):$t,dt=I&&v.next>0?Z(v.next-1):"",xe=R.broke||jd(R),re=xe?`<b class="stopv">\u26A0\uFE0F ${xe.why==="aviso"?__t(149):`${__t(150)}${xe.min} min`}</b>${I&&dt?`${__t(151)}${dt}${__t(152)}${Pt}</b>`:""}`:R.stop==="via"&&I?`${__t(153)}${dt?`${__t(155)}${dt}${__t(152)}${Pt}</b>`:`${__t(156)}${Pt}</b>`}${__t(154)}${Math.max(1,Math.round(v.still/60))} min`:v.pre&&I?v.prevTr?`${__t(157)}${f(v.prevTr.num)}${__t(158)}${Z(0)}</b>${v.prevDl>=1?`${__t(161)}${Math.round(v.prevDl)} min</b>`:""}${__t(159)}${at(v.arrO)}${__t(160)}${at(v.depEst)}</b>${v.preDl>=1?`${__t(162)}${at(v.dep0)})`:""}`:`${__t(163)}${Z(0)}${__t(164)}${at(v.dep0+R.dl)}</b>`:v.st==="STOPPED_AT"&&Zt?`${__t(165)}${Zt}</b>`:Zt&&v.next>=0&&v.atStop!==v.next?`${__t(166)}${Zt}${__t(158)}${Pt}</b>`:dt?`${__t(167)}${dt}${__t(152)}${Pt}</b>`:`${__t(168)}${Pt}</b>`,ve=G.tu.get(v.tid),dn=ve&&ve.next&&I&&v.next>=0&&ve.next.sid===M[I.pat.stops[v.next]].id&&ve.next.t?new Date(ve.next.t*1e3).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"",Ge=[];if(I){let ne=R.idx>=0?R.idx:0,mn=v.pre?Math.max(R.dl,v.preDl||0):R.dl,_r=tn=>I.t0+I.pat.t[tn]+mn;for(let tn=ne;tn<nt;tn++)Ge.push(`<li class="${Go(I.pat.stops[tn])?"mine":""}${Wo(I,tn)?" alm":""}"><b>${at(_r(tn===0?1:2*tn))}</b><span title="${Z(tn)}">${Go(I.pat.stops[tn])}${Z(tn)}</span>${mn>=1?`<em class="dl ${es(mn)}">${v.pre?"\u2248":""}+${Math.round(mn)}</em>`:""}${tn>0?`<button type="button" class="abtn" data-alarm="${tn}" title="Av\xEDsame 2 min antes de llegar aqu\xED">${Wo(I,tn)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}g=`<div class="tc" style="--c:${R.c}"><button class="x" data-cx>\xD7</button><div>${Hn(R.fam)}${__t(169)}${f(I?I.num:v.num)}${__t(170)}${I?`<h3 class="rt"><span class="o" title="${Z(0)}">${Z(0)}</span><span class="ar">\u2192</span>${Ni(M[I.pat.stops[nt-1]].n,I.fam)}</h3>`:""}
        <p>${re}${dn?`${__t(171)}${dn}`:""}${v.plat&&v.st==="STOPPED_AT"&&Zt?`${__t(172)}${f(v.plat)}</b>`:""}</p><p>${v.pre&&v.prevTr?v.preDl>=1?`${__t(173)}${Math.round(v.preDl)}${__t(174)}`:__t(175):ef(G.delays.get(v.tid),G.delays.has(v.tid))}${(()=>{let ne=I&&fi(I.num);return ne&&ne.n>=2?`${__t(176)}${ne.n}${__t(177)}${ne.late?`${__t(179)}${ne.late}${__t(59)}${ne.n}</b>`:__t(180)}${__t(178)}${ne.avg<.5?"0":"+"+Math.round(ne.avg)} min</span>`:""})()}${(()=>{let ne=I&&Nh(I.num);return ne?`<span class="why" title="${f(ne.txt)}">${ne.why?__t(181)+f(ne.why):__t(182)}</span>`:""})()}</p>
        <small>${v.pre?`${__t(183)}${ar(Math.round(R.age)+" s")}`:v.est?__t(184):`${__t(185)}${ar(Math.round(R.age)+" s")}${R.age>120?__t(186):""}`}</small>
        ${Ge.length?`${R.dl>=1||v.pre&&v.preDl>=1?`${__t(187)}`:""}<ol class="stops">${Ge.join("")}</ol>`:""}${C(w(new Set([R.fam])))}
        ${Zo(I?I.num:v.num,"",R.fam)}${I?`<div class="rtb two"><button type="button" data-fav>${tf(I)?__t(188):__t(189)}</button><button type="button" data-follow>${Ct===I?__t(190):__t(191)}</button></div>`:""}</div>`}else if(mt&&S)g=`${__t(192)}${f(mt.num||mt.vtid||"")}${__t(193)}`;else if(mt){let v=mt,I=v.pat,Z=I.stops.length,nt=y(v),bt=typeof nt=="number"?nt/60:0,$t=t.days.indexOf(h.ymd),Zt=v.day===$t-1?1440:0,Pt=h.min+Zt-v.t0-bt,dt=Fs(v,Pt),xe=ne=>v.t0+I.t[ne]+bt,re=ne=>f(M[I.stops[ne]].n),ve=__t(194);dt&&(ve=dt.moving?`${__t(195)}${re(dt.next)}${__t(196)}${at(xe(2*dt.next))}`:dt.at===Z-1?`${__t(197)}${re(Z-1)}</b>`:`${__t(165)}${re(dt.at)}${__t(198)}${at(xe(2*dt.at+1))}`);let dn=dt?dt.next:0,Ge=[];for(let ne=dn;ne<Z;ne++)Ge.push(`<li class="${Go(I.stops[ne])?"mine":""}${Wo(v,ne)?" alm":""}"><b>${at(xe(2*ne))}</b><span title="${re(ne)}">${Go(I.stops[ne])}${re(ne)}</span>${bt>=1?`<em class="dl ${es(bt)}">+${Math.round(bt)}</em>`:""}${ne>0?`<button type="button" class="abtn" data-alarm="${ne}" title="Av\xEDsame 2 min antes de llegar aqu\xED">${Wo(v,ne)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);g=`<div class="tc" style="--c:${v.c}"><button class="x" data-cx>\xD7</button><div>${Hn(v.fam)}${__t(169)}${f(v.num)}${__t(199)}${re(0)}">${re(0)}</span><span class="ar">\u2192</span>${Ni(M[v.pat.stops[Z-1]].n,v.fam)}</h3>
        <p>${ve}</p><p>${ef(nt,nt!=null)}${(()=>{let ne=fi(v.num);return ne&&ne.n>=2?`${__t(176)}${ne.n}${__t(177)}${ne.late?`${__t(179)}${ne.late}${__t(59)}${ne.n}</b>`:__t(180)}${__t(178)}${ne.avg<.5?"0":"+"+Math.round(ne.avg)} min</span>`:""})()}${__t(200)}${at(v.t0+I.t[1])}${__t(201)}${at(v.t0+I.t[2*Z-2])}${__t(202)}${bt>=1?__t(187):""}<ol class="stops">${Ge.join("")}</ol>${Zo(v.num,"",v.fam)}<div class="rtb two"><button type="button" data-fav>${tf(v)?__t(188):__t(189)}</button><button type="button" data-follow>${Ct===v?__t(190):__t(191)}</button></div></div>`}else{let v=Et,I=t.days.indexOf(h.ymd),Z=[];pi.st!==v&&(pi.st=v,pi.f.clear());let nt=dt=>(!W[dt]||X.has(dt))&&(!pi.f.size||pi.f.has(dt));if(I>=0){let dt=(xe,re)=>{for(let ve of xe){if(!nt(ve.fam))continue;let dn=ve.pat.stops.indexOf(v);if(dn<0||dn===ve.pat.stops.length-1)continue;let Ge=y(ve),ne=typeof Ge=="number"?Ge/60:0,mn=ve.t0+ve.pat.t[2*dn+1]-re;mn+ne<h.min-1||mn>h.min+360||Z.push({tr:ve,t:mn,dl:ne,d:Ge,on:G.vp.has(ve.tid),past:h.min>ve.t0+ve.pat.t[1]-re+2})}};dt(K[I],0),I>0&&dt(K[I-1],1440)}Z.sort((dt,xe)=>dt.t+dt.dl-xe.t-xe.dl);let bt=M[v].id,$t=Zn.get(bt),Zt=(S||fe()&&h.live)&&G.url;Zt&&(!$t||Date.now()-$t.at>3e4)&&!$t?.loading&&(Zn.set(bt,{...$t||{},loading:!0,at:$t?$t.at:0}),Tt(G.url.replace(/\/+$/,""),"/departures.json?stationId="+bt).then(dt=>{Zn.set(bt,{at:Date.now(),d:dt}),Et===v&&(u._h="",ze())}).catch(()=>Zn.set(bt,{at:Date.now(),err:1})));let Pt=Zt&&$t&&$t.d&&Array.isArray($t.d.trains)?$t.d.trains:null;if(Pt){let dt=new Map([...G.vp.values()].map(re=>[String((ot.get(re.tid)||{}).num||re.num),re])),xe=Pt.filter(re=>nt((re.line||{}).id||"")).slice(0,40).map(re=>{let ve=(re.departureDateHourSelectedStation||"").slice(11,16),dn=(re.line||{}).id||"",Ge=String(re.commercialNumber||re.technicalNumber||""),ne=dt.get(Ge),mn=ne?G.delays.get(ne.tid):null;return`<li class="go${ma({num:Ge,tid:ne?ne.tid:""})?" sel":""}" data-gt="${f(Ge)}|${ne?f(ne.tid):""}"><b>${f(ve)}</b>${W[dn]?Hn(dn):`<span class="ln" style="--c:#6b7385">${f(dn||"?")}</span>`}<span>${Ni((re.destinationStation||{}).name||"",dn)}${re.trainObservations?` \xB7 <i>${f(re.trainObservations)}</i>`:""}</span>${re.trainCancelled?__t(203):typeof mn=="number"&&mn>=60?`<em class="dl ${es(mn/60)}">+${Math.round(mn/60)}</em>`:""}${re.platformSelectedStation?`${__t(204)}${f(re.platformSelectedStation)}</i>`:""}${ne?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");g=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${f(M[v].n)}</h3>${Kd(v)}${Zo("",M[v].id,"")}${__t(205)}${xe||__t(207)}</ol>${Qd(v,h)}${C(w(M[v].fams,v))}${__t(206)}`}else g=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${f(M[v].n)}</h3>${Kd(v)}${Zo("",M[v].id,"")}
        <small style="margin-top:6px">${S&&G.url?__t(209):""}${__t(208)}${S?__t(210):__t(211)}</small>
        <ol>${Z.slice(0,40).map(dt=>`<li class="go${ma({num:dt.tr.num,tid:dt.tr.tid})?" sel":""}" data-gt="${f(dt.tr.num)}|${f(dt.tr.tid)}"><b>${at(dt.t+dt.dl)}</b>${Hn(dt.tr.fam)}<span>${Ni(M[dt.tr.pat.stops[dt.tr.pat.stops.length-1]].n,dt.tr.fam)}</span>${dt.d==="X"?__t(203):dt.dl>=1?`<em class="dl ${es(dt.dl)}">+${Math.round(dt.dl)}</em>`:""}${S?dt.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':dt.past?__t(212):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(213)}</ol>${Qd(v,h)}${C(w(M[v].fams,v))}${__t(206)}`}let N=u.scrollTop;if(u._h!==g&&(u.innerHTML=g,u._h=g,u.scrollTop=N),u.style.display="flex",u.classList.toggle("min",Bs),$h(),innerWidth<=640){let v=u.querySelector(".tc");if(v&&!v.querySelector(".mn")){let I=document.createElement("button");I.type="button",I.className="mn",I.setAttribute("aria-label",__t(214)),I.textContent=u.classList.contains("peek")?"\u25B4":"\u25BE",I.onclick=Z=>{Z.stopPropagation(),u.classList.toggle("peek"),I.textContent=u.classList.contains("peek")?"\u25B4":"\u25BE",u.scrollTop=0},v.appendChild(I)}}else u.classList.remove("peek");let U=p("#rc");if(innerWidth<=640&&!U.classList.contains("min")&&!ze.done&&(ze.done=1,p("#rcgrab").click()),innerWidth<=640){let v=p("#inf").getBoundingClientRect().bottom;u.style.top=Math.round(v+8)+"px",u.style.width="calc(100vw - 76px)",u.style.maxHeight=Math.max(140,p("#rc").getBoundingClientRect().top-v-16)+"px"}else if(innerHeight<=500){let v=p("#inf").getBoundingClientRect().bottom;u.style.top=Math.round(v+8)+"px",u.style.width="min(290px, 40vw)",u.style.maxHeight=innerHeight-v-20+"px"}else u.style.top="",u.style.width=k?"390px":"300px",u.style.maxHeight="";let J=u.querySelector("[data-cx]");J&&(J.onclick=v=>{if(v.stopPropagation(),ze.done=0,k||b||It||it&&!mt&&Et<0){k=b=It=!1,mt||Et>=0||(it=""),u._h="",ze(),a();return}It=!1,b=!1,k=!1,mt=null,Et=-1,Ct=null,Ae(),ze(),Q=0,a()}),rf(u),u.querySelectorAll("[data-alarm]").forEach(v=>v.onclick=I=>{I.stopPropagation();let Z=mt&&mt.pat?mt:ot.get(mt&&mt.vtid)||null;if(!Z)return;let nt=+v.dataset.alarm,bt=M[Z.pat.stops[nt]].id;rn&&rn.num===String(Z.num)&&rn.sid===bt?(rn=null,an(__t(215))):(rn={num:String(Z.num),sid:bt,at:Date.now()},an(`${__t(216)}${M[Z.pat.stops[nt]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),$o(),u._h="",ze()});{let v=u.querySelector("[data-fav]");v&&(v.onclick=I=>{I.stopPropagation();let Z=mt&&mt.pat?mt:ot.get(mt&&mt.vtid)||null;if(!Z)return;let nt=vi.findIndex(bt=>bt.num===String(Z.num));if(nt>=0)vi.splice(nt,1),an(__t(217));else{let bt=[...Gn.st,...un.st,...qt.st],$t=Z.pat.stops.find(Zt=>bt.includes(M[Zt].id))??Z.pat.stops[0];vi.push({num:String(Z.num),fam:Z.fam,sid:M[$t].id,dest:M[Z.pat.stops[Z.pat.stops.length-1]].id,t:at(Z.t0+Z.pat.t[2*Z.pat.stops.indexOf($t)+1])}),an(`${__t(218)}${Z.fam}${__t(219)}${vi[vi.length-1].t}${__t(132)}${M[$t].n}${__t(220)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}gg(),u._h="",ze(),je(!0)})}{let v=u.querySelector("[data-share]");v&&(v.onclick=()=>{let I=it,Z=j.filter(Zt=>(Zt.fam||Zt.tr&&Zt.tr.fam)===I),nt=Z.filter(Zt=>Zt.dl>=5).sort((Zt,Pt)=>Pt.dl-Zt.dl),bt=G.alerts.filter(Zt=>Zt.fams.has(I)),$t=`${I}${__t(221)}${at(ae().min)}: ${Z.length}${__t(222)}${nt.length}${__t(223)}${nt.length?" ("+nt.slice(0,4).map(Zt=>`${Zt.tr?Zt.tr.num:Zt.v.num} +${Math.round(Zt.dl)}`).join(", ")+")":""}.${bt.length?__t(224)+bt[0].txt:__t(225)}`;navigator.share?navigator.share({text:$t}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText($t),an(__t(226)+$t.slice(0,60)+"\u2026"))})}{let v=u.querySelector("[data-cols]");v&&(v.onclick=()=>{Kn.on=!Kn.on,ug(),u._h="",ze()})}u.querySelectorAll("[data-gs]").forEach(v=>v.onclick=()=>{let I=+v.dataset.gs;k=!1,window.__rodPickStation(I),Object.assign(s,{tx:M[I].w[0],ty:M[I].w[1],dist:Math.min(s.dist,20)}),a()}),u.querySelectorAll("[data-sf]").forEach(v=>v.onclick=I=>{I.stopPropagation();let Z=v.dataset.sf;Z?pi.f.has(Z)?pi.f.delete(Z):pi.f.add(Z):pi.f.clear(),u._h="",ze()}),u.querySelectorAll("[data-gt]").forEach(v=>v.onclick=()=>{let[I,Z]=v.dataset.gt.split("|"),nt=ot.get(Z);Sf({num:I,tid:G.vp.has(Z)?Z:"",tr:nt||null})}),u.querySelectorAll("[data-sethome]").forEach(v=>v.onclick=()=>Wh(Et,v.dataset.sethome));let et=u.querySelector("[data-follow]");et&&(et.onclick=()=>{Ct=Ct===mt?null:mt,Ct?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(u.classList.add("peek"),u.scrollTop=0,p("#rc").classList.contains("min")||p("#rcgrab").click())):u.classList.remove("peek"),u._h="",ze(),a()})}window.__rodCard=ze;try{let h=localStorage.getItem("rod_inf");(h==="mini"||h==null)&&p("#inf").classList.add("mini")}catch{}p("#inft").onclick=()=>{let h=p("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",h?"mini":"")}catch{}(mt||Et>=0||It||b)&&(u._h="",ze())},p("#ver").onclick=()=>{b=!0,k=!1,It=!1,u._h="",ze()};let qo={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},yg=["vacio","lleno","petado",__t(227),"calor","abordo"],Sg=["gente","retraso","cancel","ascensor","via"],Mg={vacio:__t(228),lleno:__t(229),petado:__t(230),parado:__t(231),calor:__t(232),abordo:__t(233),gente:__t(234),retraso:__t(235),cancel:__t(236),ascensor:__t(237),via:__t(238)},Yo=h=>(G.tipos||Mg)[h]||h,Oh=(h,g)=>(G.rep||[]).filter(S=>h&&S.num===String(h)&&!S.sid||g&&S.sid===String(g)&&!S.num||h&&g&&S.num===String(h)&&S.sid===String(g)),nf=h=>{let g=Math.round((Date.now()+(G.repSkew||0)-h.at)/6e4);return g<1?__t(239):ar(g+" min")},ga=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function Zo(h,g,S){if(!G.url||!G.repOk)return"";let w=Oh(h,g),C=h?yg:Sg;return`${__t(240)}${w.length?"":__t(242)}</small>${w.map(R=>`<p><span>${qo[R.kind]||"\u2022"} <b>${f(Yo(R.kind))}</b> <small>${R.up>1?R.up+__t(243):""}${nf(R)}</small></span>${ga.has(R.id)?"<small>\u2713</small>":`<button type="button" data-rv="${R.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${R.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${h?__t(244):__t(245)}</summary><div class="ckb">${C.map(R=>`<button type="button" data-rk="${R}" data-rn="${f(h||"")}" data-rs="${f(g||"")}" data-rl="${f(S||"")}">${qo[R]} ${f(Yo(R))}</button>`).join("")}${__t(241)}`}async function sf(h,g){try{let w=await(await fetch(G.url.replace(/\/+$/,"")+g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)})).json();if(!w.ok){an(w.err||__t(246));return}if(w.id){ga.add(w.id);try{localStorage.setItem("rod_votes",JSON.stringify([...ga].slice(-300)))}catch{}}an(g==="/vote"?__t(247):w.n>1?`${__t(248)}${w.n}${__t(249)}`:__t(250));let C=await Tt(G.url.replace(/\/+$/,""),"/reports.json");C&&C.items&&(G.rep=C.items),u._h="",ze(),je(!0)}catch{an(__t(251))}}function rf(h){h.querySelectorAll("[data-rk]").forEach(g=>g.onclick=S=>{S.stopPropagation(),g.disabled=!0,sf({kind:g.dataset.rk,num:g.dataset.rn,sid:g.dataset.rs,line:g.dataset.rl},"/report")}),h.querySelectorAll("[data-rv]").forEach(g=>g.onclick=S=>{S.stopPropagation();let[w,C]=g.dataset.rv.split(":");ga.add(+w);try{localStorage.setItem("rod_votes",JSON.stringify([...ga].slice(-300)))}catch{}sf({id:+w,v:+C},"/vote")})}let af=0;function an(h){let g=p("#toast");g||(g=document.createElement("div"),g.id="toast",document.body.appendChild(g)),g.textContent=h,g.className="on",clearTimeout(af),af=setTimeout(()=>{g.className=""},2600)}function _a(h){return h.src?`<b class="asrc ${h.src==="Adif"?"adif":""}">${h.src==="Adif"?__t(252):f(h.src)}</b>`:""}function xa(h){if(!h.when)return"";let[g,S]=h.when.split("T"),w=_t(new Date),C=w.ymd.slice(0,4)+"-"+w.ymd.slice(4,6)+"-"+w.ymd.slice(6,8);if(g===C&&S){let R=Math.round(w.min-(+S.slice(0,2)*60+ +S.slice(3,5)));return R<1?__t(239):R<60?ar(R+" min"):`${__t(253)}${S.slice(0,5)}`}return`${g.slice(8,10)}/${g.slice(5,7)}${S?" "+S.slice(0,5):""}`}function Bh(){let h=p("#alr");if(!h)return;let g=G.alerts.filter(S=>[...S.fams].some(w=>X.has(w))).length;h.hidden=!g,h.textContent=`\u26A0\uFE0F ${g}${g===1?__t(254):__t(255)}`}{let h=p("#alrslot");h&&h.appendChild(p("#alr"))}p("#alr").onclick=()=>{b=!1,k=!1,It=!0,ze()},p("#wcopy").onclick=async()=>{let h=p("#wcode").textContent;try{await navigator.clipboard.writeText(h),p("#wcopy").textContent=__t(256)}catch{let S=document.createRange();S.selectNodeContents(p("#wcode"));let w=getSelection();w.removeAllRanges(),w.addRange(S),p("#wcopy").textContent=__t(257)}setTimeout(()=>p("#wcopy").textContent=__t(258),2500)};let bg=Ht.get("71801");function wg(h,g){let S=M[h].id,w=Zn.get(S);!(se()&&G.url)||w&&(w.loading||Date.now()-w.at<3e4)||(Zn.set(S,{...w||{},loading:!0,at:w?w.at:0}),Tt(G.url.replace(/\/+$/,""),"/departures.json?stationId="+S).then(C=>{Zn.set(S,{at:Date.now(),d:C}),g&&g()}).catch(()=>Zn.set(S,{at:Date.now(),err:1})))}let of=h=>+h.slice(0,2)*60+ +h.slice(3,5),va={k:-2,m:null};function Eg(h){let g=t.days.indexOf(ae().ymd);if(va.k!==g){va.k=g,va.m=new Map;for(let S of K[g]||[])va.m.set(String(S.num),S)}return va.m.get(String(h))||null}let zs={at:0,m:new Map};function kh(h){if(Date.now()-zs.at>6e4){zs.at=Date.now(),zs.m=new Map;let S=ae(),w=t.days.indexOf(S.ymd);if(w>=0)for(let C of K[w]){let R=S.min-C.t0;if(R<C.pat.t[1]+3||R>C.pat.t[C.pat.t.length-2]-3)continue;let N=zs.m.get(C.fam)||[0,0];N[0]++,G.vp.has(C.tid)&&N[1]++,zs.m.set(C.fam,N)}}let g=zs.m.get(h);return g&&g[0]>=3?g[1]/g[0]:1}function zh(h,g){let S=ae(),w=(z()||fe())&&S.live&&!g,C=Zn.get(M[h].id),R=[],N=new Map([...G.vp.values()].map(B=>[String((ot.get(B.tid)||{}).num||B.num),B]));if(w&&C&&C.d&&Array.isArray(C.d.trains))for(let B of C.d.trains){let J=(B.departureDateHourSelectedStation||"").slice(11,16);if(!J)continue;let et=String(B.commercialNumber||B.technicalNumber||""),v=N.get(et),I=v?G.delays.get(v.tid):null,Z=Math.max(typeof I=="number"?Math.max(0,I/60):0,v&&v.pre&&v.preDl||0),nt=of(J);nt<S.min-720&&(nt+=1440),R.push({sm:nt,est:nt+Z,dl:Z,fam:(B.line||{}).id||"",dest:(B.destinationStation||{}).name||"",destId:(B.destinationStation||{}).id||"",plat:B.platformSelectedStation||"",cancel:!!B.trainCancelled,obs:B.trainObservations||"",live:!!v,num:et,tid:v?v.tid:"",tr:v&&ot.get(v.tid)||Eg(et),src:"oficial"})}else{let B=t.days.indexOf(S.ymd);if(B<0)return R;let J=(et,v)=>{for(let I of et){let Z=I.pat.stops.indexOf(h);if(Z<0||Z===I.pat.stops.length-1)continue;let nt=y(I),bt=typeof nt=="number"?Math.max(0,nt/60):0,$t=I.t0+I.pat.t[2*Z+1]-v;if($t+bt<S.min-1||$t>S.min+360)continue;let Zt=I.pat.stops[I.pat.stops.length-1];R.push({sm:$t,est:$t+bt,dl:bt,fam:I.fam,dest:M[Zt].n,destId:M[Zt].id,plat:"",cancel:nt==="X",obs:"",live:G.vp.has(I.tid),num:I.num,tid:I.tid,tr:I,src:"horario"})}};J(K[B],0),B>0&&J(K[B-1],1440),B+1<t.days.length&&S.min>1080&&J(K[B+1],-1440)}if(w){let B=new Set(R.map(v=>v.num)),J=t.days.indexOf(S.ymd),et=(v,I)=>{for(let Z of v||[]){if(B.has(String(Z.num)))continue;let nt=Z.pat.stops.indexOf(h);if(nt<0||nt===Z.pat.stops.length-1)continue;let bt=Z.t0+Z.pat.t[2*nt+1]-I;if(bt<S.min-45||bt>S.min+1||!G.vp.get(Z.tid))continue;let Zt=G.delays.get(Z.tid),Pt=typeof Zt=="number"?Math.max(0,Zt/60):0,dt=Z.pat.stops[Z.pat.stops.length-1];R.push({sm:bt,est:bt+Pt,dl:Pt,fam:Z.fam,dest:M[dt].n,destId:M[dt].id,plat:"",cancel:!1,obs:"",live:!0,num:Z.num,tid:Z.tid,tr:Z,src:"horario"})}};J>=0&&(et(K[J],0),J>0&&et(K[J-1],1440));for(let v of R){let I=v.tid&&G.vp.get(v.tid),Z=v.tr?v.tr.pat.stops.indexOf(h):-1;v.passed=!!(I&&Z>=0&&!I.pre&&I.next!=null&&I.next>=0&&I.next>Z&&I.atStop!==Z),!v.passed&&v.live&&v.est<S.min&&(v.est=S.min,v.late=!0),v.passed&&(v.gone=!0)}}let U=R.filter(B=>B.gone?S.min-B.est<20:B.est>=S.min-.5).sort((B,J)=>B.est-J.est);{let B=U.filter(J=>J.gone);if(B.length>2){let J=new Set(B.slice(0,B.length-2));U=U.filter(et=>!J.has(et))}}if(!U.filter(B=>!B.gone).length&&R.length&&R[0].src==="oficial"&&!g)return zh(h,!0);for(let B of U){let J=B.num&&Nh(B.num);J&&J.cx&&(B.cancel=!0,B.cxWhy=J.txt)}if(z()&&S.live){let B=t.days.indexOf(S.ymd);for(let J of U){if(J.live||J.cancel||!J.tr)continue;let et=J.tr.day===B-1?1440:J.tr.day===B+1?-1440:0,v=J.tr.t0+J.tr.pat.t[1]-et+(J.dl||0);J.ghost=S.min>v+3&&kh(J.fam)>=.7}}if(g||(U=U.concat(E(h,S.min-.5,S.min+360)).sort((B,J)=>B.est-J.est)),U.some(B=>B.src==="oficial")){let B=Math.max(...U.map(et=>et.sm)),J=new Set(U.map(et=>et.num));U=U.concat(zh(h,!0).filter(et=>et.sm>B&&!J.has(String(et.num))))}return U}let lf=(h,g,S,w)=>{let C={key:h,ico:g,name:S,st:[],i:0,walk:10,open:!1};try{let R=JSON.parse(localStorage.getItem("rod_"+h)||"null");R&&Object.assign(C,R)}catch{}return!C.st.length&&w&&(C.st=w),C},Gn=lf("home","\u{1F3E0}",__t(259),null),un=lf("work","\u{1F4BC}",__t(260),null),qt={key:"near",ico:"\u{1F4CD}",name:__t(261),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},ya=[qt,Gn,un];try{qt.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}Gn.open=!1,un.open=!1;function cf(h,g){let S=vt(h,g),w=vt(h,g+.009);return 1/Math.hypot(w[0]-S[0],w[1]-S[1])}function Vh(h){if(!navigator.geolocation){qt.err=__t(262),je(!0);return}navigator.geolocation.getCurrentPosition(g=>{let{longitude:S,latitude:w}=g.coords,C=vt(S,w),R=cf(S,w),N=M.map((et,v)=>[v,Math.hypot(et.w[0]-C[0],et.w[1]-C[1])*R]).filter(([et])=>M[et].fams.size).sort((et,v)=>et[1]-v[1]),U=N.filter(([,et],v)=>v===0||et<Math.max(2.5,N[0][1]*1.6)).slice(0,3),B=qt.st[0]!==M[U[0][0]].id;qt.w=C,qt.k=R,qt.acc=g.coords.accuracy!=null?g.coords.accuracy:999,qt.st=U.map(([et])=>M[et].id),qt.dist=Object.fromEntries(U.map(([et,v])=>[M[et].id,v])),qt.fix=Date.now(),qt.err="",B&&(qt.i=0);let J=[Gn,un].find(et=>et.st.includes(qt.st[0])&&qt.dist[qt.st[0]]<1.5);je(!0)},g=>{qt.err=g.code===1?__t(263):__t(264),je(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let hf=h=>Math.max(1,Math.round(h*1.3/.08));setTimeout(()=>Vh(!0),400);let yn={fixes:[],tid:"",no:new Map,shown:""};function Tg(){let h=yn.fixes;if(h.length<2)return;let g=h[h.length-1],S=h.slice().reverse().find(I=>g.t-I.t>=8e3&&g.t-I.t<=9e4);if(!S)return;let w=Math.hypot(g.w[0]-S.w[0],g.w[1]-S.w[1])*g.k,C=g.spd!=null&&g.spd>0?g.spd*3.6:w/((g.t-S.t)/36e5);if(g.acc!=null&&g.acc>100)return;if(yn.tid){let I=j.find(Z=>Z.tr&&String(Z.tr.num)===yn.tid)||Os(ae()).out.find(Z=>Z.tr&&String(Z.tr.num)===yn.tid);if(I){if(Math.hypot(I.p.w[0]-g.w[0],I.p.w[1]-g.w[1])*g.k<=5){yn.far=0;return}if(yn.far||(yn.far=g.t),g.t-yn.far<12e4)return}yn.far=0}if(C<22||C>200)return;let R=[g.w[0]-S.w[0],g.w[1]-S.w[1]],N=null,U=2.5,B=j.filter(I=>I.real),J=Os(ae()).out.filter(I=>I.tr&&!B.some(Z=>Z.tr&&String(Z.tr.num)===String(I.tr.num)));for(let I of[...B,...J]){if(!I.tr)continue;let Z=I.real?2.5:3.5,nt=Math.hypot(I.p.w[0]-g.w[0],I.p.w[1]-g.w[1])*g.k;if(nt>Math.min(U,Z)||N&&N.real&&!I.real)continue;let bt=I.real?I.v.next:I.p.next;if(bt==null||bt<0)continue;let $t=M[I.tr.pat.stops[bt]].w,Zt=[$t[0]-I.p.w[0],$t[1]-I.p.w[1]];if(Zt[0]*R[0]+Zt[1]*R[1]<=0)continue;let Pt=String(I.tr.num);(yn.no.get(Pt)||0)>Date.now()||(U=nt,N=I)}if(!N)return;let et=String(N.tr.num);if(yn.tid===et)return;yn.tid=et,b=It=k=!1,Et=-1,mt=N.tr,Ct=N.tr,Object.assign(s,{tx:N.p.w[0],ty:N.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(u.classList.add("peek"),p("#rc").classList.contains("min")||p("#rcgrab").click());{let I=N.tr.pat.stops,Z=N.real?N.v.next:N.p.next,nt=[...Gn.st,...un.st],bt=I.findIndex(($t,Zt)=>Zt>=Z&&nt.includes(M[$t].id));bt>0&&!(rn&&rn.num===et)&&(rn={num:et,sid:M[I[bt]].id,at:Date.now()},$o())}Ae(),u._h="",ze(),Q=0,a();let v=p("#onb");v||(v=document.createElement("div"),v.id="onb",document.body.appendChild(v)),v.innerHTML=`${__t(265)}${f(N.tr.fam)} ${f(N.tr.num)}${__t(266)}${f(M[N.tr.pat.stops[N.tr.pat.stops.length-1]].n)}${__t(267)}${rn&&rn.num===et?`${__t(269)}${f(M[Ht.get(rn.sid)].n)}`:""}${__t(268)}`,v.className="on",v.querySelector("[data-onb-no]").onclick=()=>{yn.no.set(et,Date.now()+20*6e4),yn.tid="",Ct=null,mt=null,u._h="",ze(),v.className=""},v.querySelector("[data-onb-x]").onclick=()=>{v.className=""},setTimeout(()=>{v.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let h=null,g=()=>{h==null&&(h=navigator.geolocation.watchPosition(w=>{let{longitude:C,latitude:R}=w.coords,N={t:w.timestamp||Date.now(),w:vt(C,R),k:cf(C,R),spd:w.coords.speed,acc:w.coords.accuracy};yn.fixes.push(N),yn.fixes=yn.fixes.filter(U=>N.t-U.t<12e4);try{ae().live&&Tg()}catch{}},()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4}))},S=()=>{h!=null&&(navigator.geolocation.clearWatch(h),h=null)};setTimeout(g,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?S():(yn.fixes=[],g())})}setInterval(()=>{!document.hidden&&(Date.now()-qt.fix>11e4||ya.some(h=>h.goAt))&&Vh(!1)},3e4);let ns=h=>{try{localStorage.setItem("rod_"+h.key,JSON.stringify({st:h.st,i:h.i,walk:h.walk,open:h.open,hide:h.hide||"",goAt:h.goAt||0}))}catch{}},Hh=h=>h.st.length?Ht.get(h.st[h.i]||h.st[0]):null;function uf(h,g,S,w){if(w&&g.bus)return g.bstops.slice(1).some(N=>w.has(N))?"to":"out";if(w&&g.tr){let N=g.tr.pat.stops,U=N.indexOf(h);if(U>=0&&N.slice(U+1).some(B=>w.has(B)))return"to"}if(w&&g.tr)return"out";let C=Ht.get(g.destId)??M.findIndex(N=>N.n===g.dest);if(C<0||C==null||S==null)return"otros";let R=N=>Math.hypot(M[N].w[0]-M[S].w[0],M[N].w[1]-M[S].w[1]);return R(C)<R(h)?"to":"out"}let Sa=h=>h<1?__t(239):h<60?Math.round(h)+" min":Math.floor(h/60)+" h "+String(Math.round(h%60)).padStart(2,"0"),df=0,ff=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i;function Ag(h,g,S){let w=Hh(h);if(h===qt){if(w==null)return`${__t(270)}${qt.err?f(qt.err)+__t(271):__t(272)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Gn,un].find(Wt=>Wt.st.includes(qt.st[0])&&qt.dist[qt.st[0]]<1.5))return"";h.walk=hf(qt.dist[h.st[h.i]]||0)}if(w==null){let pt=qt.st.length?Ht.get(qt.st[0]):null,Wt=h===un?Gn:un,Be=pt!=null&&!Wt.st.includes(qt.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${h.ico}</span><span class="htit"><b>${h.name}</b><small>${Be?`${__t(273)}${f(M[pt].n)}</b>`:__t(274)}</small></span>${Be?`<button type="button" class="hpick" data-hnear="${h.key}${__t(275)}`:""}<button type="button" class="hpick alt" data-hset="${h.key}">${Be?__t(276):__t(277)}</button></div></div>`}wg(w,()=>je(!0));let C=h===qt?null:h===Gn?un:Gn,R=C?Hh(C):null,N=R!=null&&R!==w?R:bg,U=R!=null&&R!==w?C===un?__t(278):"casa":"Barcelona",B=M[w].fams,J=new Set([...B].filter(pt=>X.has(pt))),et=J.size<B.size,v=!1;J.size||(J=new Set(B),et=!1,v=!0);let I=qt.w?Math.hypot(M[w].w[0]-qt.w[0],M[w].w[1]-qt.w[1])*qt.k:null,Z=I!=null&&Date.now()-qt.fix<10*6e4,nt=h===qt||Z&&I>3&&!h.goAt,bt=h!==qt&&Z&&I<.08&&qt.acc<=40&&!(h===Gn&&qt.homeW&&Math.hypot(qt.homeW[0]-qt.w[0],qt.homeW[1]-qt.w[1])*qt.k<.05),$t=h.goAt?(Date.now()-h.goAt)/6e4:null;$t!=null&&($t>60||bt)&&(h.goAt=0,ns(h));let Zt=!bt&&h!==qt&&!!h.goAt,Pt=Zt?Z&&I<=3?hf(I):Math.max(0,h.walk-$t):0,dt=zh(w),xe=dt.filter(pt=>!W[pt.fam]||X.has(pt.fam)||v),re=nt||bt?0:Zt?Pt:h.walk,ve=G.alerts.filter(pt=>[...pt.fams].some(Wt=>J.has(Wt))||pt.stops&&pt.stops.has(w)),dn=ve.some(pt=>ff.test(pt.es||pt.txt)),Ge={to:[],out:[],otros:[],all:xe},ne=U!=="Barcelona"?new Set(C.st.map(pt=>Ht.get(pt)).filter(pt=>pt!=null)):null;xe.forEach(pt=>Ge[uf(w,pt,N,ne)].push(pt));let mn="";if(ne&&!Ge.to.length&&xe.length<dt.length){let pt=dt.filter(Wt=>!xe.includes(Wt)&&uf(w,Wt,N,ne)==="to");pt.length&&(Ge.to=pt,mn=[...new Set(pt.map(Wt=>Wt.fam))].sort(L).join(", "))}let _r=pt=>{if(pt==="all")return __t(279);let Wt=De=>(De.find(Cn=>Cn.fam)||{}).fam;if(pt==="to")return __t(280)+Ni(U==="Barcelona"?"Barcelona":M[N].n,Wt(Ge.to)||[...J][0])+(U!=="Barcelona"?` <small>${U}</small>`:"");let Be=[];for(let De of Ge[pt])Be.some(Cn=>Cn[0]===De.dest)||Be.push([De.dest,De.fam]);return Be.length?__t(280)+Be.slice(0,2).map(([De,Cn])=>Ni(De,Cn)).join(" "):__t(281)},tn=pt=>{let Wt=Ge[pt].find(Rn=>!Rn.cancel&&!Rn.gone&&Rn.est-g.min>=re);if(!Wt){let Rn=Ge[pt].find(Vg=>!Vg.cancel);return Rn&&!nt?{cls:"v-no",big:__t(282),small:`${__t(283)}${at(Rn.est)}${__t(284)}${Sa(Rn.est-g.min)}${__t(285)}`}:{cls:"v-no",big:__t(286),small:__t(287)}}let Be=Wt.est-g.min-re,De=nt||bt?"v-info":Zt?Be<1.5?"v-warn":"v-ok":Be<1.5?"v-bad":Be<5?"v-warn":"v-ok",Cn=Wt.ghost?Ge[pt].find(Rn=>!Rn.cancel&&!Rn.ghost&&Rn.live&&Rn.est>Wt.est):null;return{cls:De,ghost:!!Wt.ghost,big:nt||bt?Be<1?__t(288):__t(289)+Sa(Be):Zt?Be<1.5?__t(290):__t(291)+Sa(Be)+__t(292):Be<1.5?__t(293):__t(294)+Sa(Be),warn:Wt.ghost?`${__t(295)}${Cn?`${__t(296)}${at(Cn.est)}`:""}`:dn?__t(297):"",small:`${Wt.bus?__t(298):""}${at(Wt.est)} \xB7 ${Wt.fam} a ${Wt.dest}${Wt.plat?__t(299)+Wt.plat:""}${Wt.dl>=1?` \xB7 +${Math.round(Wt.dl)} min`:""}${Wt.arr!=null?`${__t(300)}${at(Wt.arr)}`:""}`,x:Wt}},Ug=ne||new Set([N]),Fg=pt=>{let Wt=pt.tr;if(!Wt)return null;let Be=Wt.pat.stops,De=Be.indexOf(w);if(De<0)return null;let Cn=-1;for(let Rn=De+1;Rn<Be.length;Rn++)if(Ug.has(Be[Rn])){Cn=Rn;break}return Cn<0?null:pt.est+(Wt.pat.t[2*Cn]-Wt.pat.t[2*De+1])};Ge.to.forEach(pt=>{pt.arr=Fg(pt)});let Kh=Ge.out.length?"out":"otros",ri=tn("to"),jh=tn(Kh);if(!nt&&h!==qt&&ri.x&&Lg(h,ri.x,M[w].n,re),bt||h===qt&&qt.acc<=40&&(qt.dist[h.st[h.i]]||9)<.08){for(let pt of[ri.x,jh.x].concat(h===qt?[tn("all").x]:[]))if(pt&&!pt.cancel&&pt.est-g.min<=2&&pt.est-g.min>-.5){let Wt="w"+pt.num+"|"+Math.round(pt.sm);Jo.has(Wt)||(Jo.add(Wt),Uh(`${__t(301)}${pt.fam} a ${pt.dest}`,`${__t(126)}${Math.max(0,Math.round(pt.est-g.min))}${__t(302)}${M[w].n}${pt.plat?__t(299)+pt.plat:""}`))}}let Tf=z()&&g.live,Af=J.size===1,Og=pt=>{let Wt=pt.est-g.min;return nt?pt.cancel?"cx":Wt<0?"u-miss":"u-info":pt.cancel?"cx":Wt<re?"u-miss":Wt<re+1.5?"u-now":Wt<re+5?"u-soon":"u-ok"},Bg=pt=>{if(pt.gone)return`<li class="hr u-gone${pt.live?" on":""}${ma(pt)?" sel":""} go" data-dk="${S.push(pt)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${at(pt.est)}${__t(303)}${ar(Math.max(1,Math.round(g.min-pt.est))+" min")}</small></span><span class="hrd">${Ni((Af?"":pt.fam+" \xB7 ")+pt.dest,pt.fam)}${__t(304)}${f(pt.num)}</small></span><span class="hrm">${pt.dl>=1?`<em class="dl ${es(pt.dl)}">+${Math.round(pt.dl)}</em>`:""}</span></li>`;let Wt=!pt.cancel&&pt.est-g.min<re,Be=Oh(pt.num,"");return`<li class="hr ${Og(pt)}${pt.live?" on":""}${pt.ghost?" gh":""}${ma(pt)?" sel":""}${vi.some(De=>{let Cn=Fh(De,t.days.indexOf(g.ymd));return Cn&&String(Cn.num)===String(pt.num)})?" fav":""} go" style="--lc:${W[pt.fam]||"#6b7385"}" data-dk="${S.push(pt)-1}" title="${pt.cancel?__t(305):Wt?__t(306):__t(307)}"><span class="hrt"><b>${pt.cancel?"\u2715":Wt?at(pt.est):Sa(pt.est-g.min)}</b><small>${pt.cancel?__t(308):pt.late?__t(309):Wt?__t(310):pt.ghost?__t(311):at(pt.est)}</small></span><span class="hrd">${pt.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Ni((Af?"":pt.fam+" \xB7 ")+pt.dest,pt.fam)}${Be.length?`<i class="cr" title="${f(Be.map(De=>Yo(De.kind)).join(" \xB7 "))}">${Be.slice(0,2).map(De=>qo[De.kind]).join("")}</i>`:""}${pt.arr!=null?`${__t(312)}${at(pt.arr)}${(()=>{let De=pt.num&&fi(pt.num);return De&&De.n>=3&&De.late/De.n>=.5?`${__t(313)}${De.late}/${De.n})</b>`:""})()}</small>`:""}${pt.obs?`<small class="hro">${f(pt.obs)}</small>`:""}</span><span class="hrm">${!pt.cancel&&pt.dl>=1?`<em class="dl ${es(pt.dl)}">+${Math.round(pt.dl)}</em>`:""}${pt.plat?`${__t(204)}${f(pt.plat)}</i>`:""}</span></li>`},Ea=(pt,Wt,Be)=>`<div class="hcol"><div class="hdir">${_r(pt)}${Be?`<button type="button" class="hhide" data-hhide="${h.key}:${Be}" title="Ocultar esta direcci\xF3n">\u2715</button>`:""}</div><div class="hv ${Wt.cls}${Wt.ghost?" gh":""}${Wt.x?" go":""}"${Wt.x?` data-dk="${S.push(Wt.x)-1}"`:""}><b>${Wt.big}</b><small>${f(Wt.small)}</small>${Wt.warn?`<span class="hvw">${f(Wt.warn)}</span>`:""}</div><ol>${Ge[pt].slice(0,(h.more?pt==="all"||h.hide?20:10:pt==="all"?7:h.hide?8:4)+Ge[pt].filter(De=>De.gone).length).map(Bg).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(h===qt){let pt=tn("all");var kg=pt.x?`${pt.big} \xB7 <b>${at(pt.x.est)}</b> ${f(pt.x.fam)} a ${f(pt.x.dest)}${pt.x.plat?__t(299)+f(pt.x.plat):""}`:pt.big}let zg=h===qt?kg:ri.x?`${ri.big} \xB7 <b>${at(ri.x.est)}</b>${ri.x.arr!=null?` \u2192 <span class="lla">llegas a las </span><b>${at(ri.x.arr)}</b>`:""}<span class="lla"> hacia ${f(U)}</span>${ri.x.plat?__t(299)+f(ri.x.plat):""}`:__t(314)+f(U);return`<div class="hplace ${h.open?"open":""}"><button type="button" class="hhead" data-ht="${h.key}"><span class="hico">${h.ico}</span><span class="htit"><b>${f(M[w].n)}</b><small class="c${dn?"bad":ri.cls.slice(2)}">${zg}</small></span><span class="hchev">\u25BE</span></button>`+(h.open?`
      <div class="hbody">
        ${h.st.length>1?`<div class="hst">${h.st.map((pt,Wt)=>{let Be=Ht.get(pt);return Be==null?"":`<button type="button" data-hs="${h.key}:${Wt}" class="${Wt===h.i?"on":""}">${f(M[Be].n)}</button>`}).join("")}</div>`:""}
        ${h===qt?`<div class="hwalk">\u{1F4CD} A ${(()=>{let pt=qt.dist[h.st[h.i]]||0;return pt<1?Math.round(pt*100)*10+" m":pt.toFixed(1).replace(".",",")+" km"})()}${__t(318)}${h.walk}${__t(319)}`:""}
        ${bt?`${__t(320)}${h.key}${__t(321)}`:Zt?`${__t(322)}${Math.round(Pt)} min</b>${Z&&I<=3?__t(324):""} \xB7 <a data-hgo="${h.key}${__t(323)}`:""}${nt&&h!==qt?`${__t(325)}${I<10?I.toFixed(1).replace(".",","):Math.round(I)}${__t(326)}`:""}<div class="hwalk"${nt||bt||Zt?" hidden":""}><button type="button" class="hgo" data-hgo="${h.key}${__t(315)}${h.key}:-1">\u2212</button><b>${re} min</b><button type="button" data-hw="${h.key}${__t(316)}${(()=>{let pt=vi.filter(Wt=>h.st.includes(Wt.sid));return pt.length?`<div class="hfav">${pt.map(Wt=>{let Be=Fh(Wt,t.days.indexOf(g.ymd)),De=Be&&xe.find(Cn=>String(Cn.num)===String(Be.num));return`\u2B50 <b>${Wt.t}</b> ${f(Wt.fam)} ${De?De.cancel?__t(327):De.gone?__t(328):De.dl>=1?`<em class="dl ${es(De.dl)}">+${Math.round(De.dl)}${__t(329)}${at(De.est)}`:__t(330):__t(331)}`}).join("<br>")}</div>`:""})()}
        ${et?`${__t(332)}${[...J].sort(L).map(Hn).join(" ")}${__t(333)}${mn?`${__t(334)}${U}${__t(335)}${mn}${__t(336)}`:""}</div>`:v?`${__t(337)}${[...X].sort(L).slice(0,3).map(Hn).join(" ")}${__t(338)}`:""}
        ${ve.length?`<div class="hal ${dn?"bad":""}${qh.v?" open":""}" data-halx>\u26A0\uFE0F ${_a(ve[0])} ${f(ve[0].txt)} <small>${xa(ve[0])}</small>${ve.length>1?` <a data-hal>+${ve.length-1}${__t(339)}`:""}</div>`:`${__t(340)}${[...J].sort(L).join(", ")}</div>`}
        ${(()=>{let pt=h.st.flatMap(Wt=>Oh("",Wt));return pt.length?`<div class="hcr">${pt.slice(0,3).map(Wt=>`${qo[Wt.kind]} <b>${f(Yo(Wt.kind))}</b> <small>${Wt.up>1?Wt.up+__t(243):""}${nf(Wt)}</small>`).join("<br>")}</div>`:""})()}
        ${h===qt?`<div class="hcols one">${Ea("all",tn("all"))}</div>`:h.hide==="out"?`<div class="hcols one">${Ea("to",ri)}</div><a class="hshow" data-hshow="${h.key}${__t(341)}`:h.hide==="to"?`<div class="hcols one">${Ea(Kh,jh)}</div><a class="hshow" data-hshow="${h.key}${__t(341)}`:`<div class="hcols">${Ea("to",ri,"to")}${Ea(Kh,jh,"out")}</div>`}
        ${xe.length>(h===qt?7:8)?`<button type="button" class="hmore" data-hmore="${h.key}">${h.more?__t(342):__t(343)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${Tf?Zn.get(M[w].id)?.d?__t(344):__t(345):__t(346)} \xB7 \u25CF = tren circulando">${Tf?Zn.get(M[w].id)?.d?__t(347):__t(348):__t(349)}</span><a data-hmap="${w}${__t(317)}${h===qt?__t(350):`<a data-hset="${h.key}${__t(351)}`}${h===un?`${__t(352)}`:""}</div>
      </div>`:"")+"</div>"}let yi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},pf=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,mf=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,Ma=()=>{let h=[...Gn.st,...un.st],g=new Set;return h.forEach(S=>{let w=Ht.get(S);w!=null&&M[w].fams.forEach(C=>g.add(C))}),{stations:h,lines:[...g].sort(L)}},Cg=h=>Uint8Array.from(atob(h.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((h.length+3)%4)),g=>g.charCodeAt(0));async function gf(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function _f(h){let S=await(await fetch(G.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:h.toJSON(),...Ma()})})).json();if(!S.ok)throw new Error(S.err||"error")}let Nn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function Rg(){let{lines:h,stations:g}=Ma(),S=new Set(h),w=new Set(g.map(N=>Ht.get(N))),C=G.alerts.filter(N=>[...N.fams].some(U=>S.has(U))||[...N.stops||[]].some(U=>w.has(U)));if(!Nn.seen){try{Nn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Nn.seen=new Set}if(!Nn.seen.size){C.forEach(N=>Nn.seen.add(N.id+"|"+N.txt.length)),xf();return}}let R=C.filter(N=>!Nn.seen.has(N.id+"|"+N.txt.length));if(R.length&&(R.forEach(N=>Nn.seen.add(N.id+"|"+N.txt.length)),xf(),!(!Nn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let N of R.slice(0,3)){let U=(N.src==="Adif"?__t(252):"Rodalies")+(N.fams.size?" \xB7 "+[...N.fams].sort(L).slice(0,4).join(" "):""),B={body:N.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+N.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(J=>J?J.showNotification(U,B):new Notification(U,B)).catch(()=>{try{new Notification(U,B)}catch{}})}}function xf(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Nn.seen].slice(-400)))}catch{}}async function Ig(){if(Nn.on)Nn.on=!1,an(__t(353));else{if(!("Notification"in window)){an(pf&&!mf()?__t(354):__t(355));return}if(await Notification.requestPermission()!=="granted"){an(__t(356));return}Nn.on=!0,an(__t(357)+Ma().lines.join(", ")+__t(358))}try{localStorage.setItem("rod_ln",Nn.on?"1":"")}catch{}je(!0)}async function Pg(){if(!G.repOk)return Ig();if(!yi.busy){yi.busy=!0;try{let h=await gf();if(!h){an(pf&&!mf()?__t(359):__t(360));return}if(await navigator.serviceWorker.ready,yi.on){let g=await h.pushManager.getSubscription();g&&(fetch(G.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:g.endpoint})}).catch(()=>{}),await g.unsubscribe().catch(()=>{})),yi.on=!1,an(__t(353))}else{if(!G.url){an(__t(361));return}if(await Notification.requestPermission()!=="granted"){an(__t(356));return}let S=(await Tt(G.url.replace(/\/+$/,""),"/push/key")).key,w=await h.pushManager.getSubscription()||await h.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Cg(S)});await _f(w),yi.on=!0,an(__t(362)+Ma().lines.join(", "))}try{localStorage.setItem("rod_push",yi.on?"1":"")}catch{}}catch(h){an(__t(363)+(h.message||h))}finally{yi.busy=!1,je(!0)}}}async function vf(){if(yi.on)try{let h=await gf(),g=h&&await h.pushManager.getSubscription();g&&await _f(g)}catch{}}let Gh=!1,yf="";function $h(){let h=mt?"t"+(mt.tid||mt.vtid):Et>=0?"s"+Et:It?"a":b?"n":"";h!==yf&&(Gh=!1,yf=h);let g=innerWidth<=640&&!!h&&!Gh&&!document.documentElement.classList.contains("tabmode"),S=p("#inf");S.classList.contains("compact")!==g&&(S.classList.toggle("compact",g),requestAnimationFrame(()=>{if(u.style.display!=="none"){let w=S.getBoundingClientRect().bottom;u.style.top=Math.round(w+8)+"px",u.style.maxHeight=Math.max(140,p("#rc").getBoundingClientRect().top-w-16)+"px"}}))}let Jo=new Set;function Lg(h,g,S,w){if(!(Nn.on||yi.on)||!("Notification"in window)||Notification.permission!=="granted")return;let C=ae(),R=g.sm-C.min-w;if(!C.live||g.dl<10||R>40||Jo.has(g.num+"|"+g.sm))return;Jo.add(g.num+"|"+g.sm);let N=`${h.ico} ${S} ${h===un?__t(366):__t(367)}${__t(364)}${at(g.sm)}${__t(365)}${Math.round(g.dl)} min`,U=`${g.fam} a ${g.dest}${__t(368)}${at(g.est)}. Si ibas a cogerlo, puedes salir ${Math.round(g.dl)}${__t(369)}${h===un?__t(260):__t(259)}${__t(370)}`;(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(B=>B?B.showNotification(N,{body:U,tag:"rd-"+g.num,icon:"icons/icon-192.png"}):new Notification(N,{body:U})).catch(()=>{try{new Notification(N,{body:U})}catch{}})}function Dg(h){let g=h.lines;if(!g.length&&qt.st&&qt.st.length){let N=new Set;qt.st.forEach(U=>{let B=Ht.get(U);B!=null&&M[B].fams.forEach(J=>N.add(J))}),g=[...N].sort(L)}let S=new Set(g),w=G.alerts.filter(N=>!S.size||[...N.fams].some(U=>S.has(U))),R=`<div class="hnowh"><b>${w.length?"\u26A0\uFE0F "+w.length+(w.length===1?__t(254):__t(255)):__t(371)}</b>${g.length?" \xB7 "+g.slice(0,6).map(Hn).join(" "):""}<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener">\u{1F4AC} WhatsApp</a></div>`;return`<div class="hnow${w.some(N=>ff.test(N.es||N.txt))?" bad":w.length?" warn":""}">${R}${w.map(N=>`<p>${_a(N)} ${f(N.txt)} <small>${xa(N)}</small></p>`).join("")}</div>`}function je(h){let g=p("#home");if(!g)return;let S=performance.now();if(!h&&S-df<4e3)return;df=S;let w=ae(),C=[],R=Ma(),N=v=>{let I=Hh(v);return I==null||!qt.w?1:Math.hypot(M[I].w[0]-qt.w[0],M[I].w[1]-qt.w[1])},U=[qt,...[Gn,un].sort((v,I)=>N(v)-N(I))],B=(document.documentElement.classList.contains("tabmode")?Dg(R):"")+U.map(v=>Ag(v,w,C)).join("")+(ya.some(v=>v.open)&&R.lines.length,"");if(g.className=ya.some(v=>v.open)?"open":"",g._h===B)return;g._h=B,g.innerHTML=B;{let v=[...g.children].find(I=>I.classList.contains("hplace")&&!I.querySelector(".hnew"));v&&v.classList.add("lead")}let J=v=>v==="work"?un:v==="near"?qt:Gn;g.querySelectorAll("[data-hloc]").forEach(v=>v.onclick=()=>{qt.err="",Vh(!0)}),g.querySelectorAll("[data-ht]").forEach(v=>v.onclick=()=>{if(p("#inf").classList.contains("compact")){Gh=!0,$h();return}let I=J(v.dataset.ht);I.open=!I.open,ns(I),je(!0),(mt||Et>=0||It||b)&&(u._h="",ze())}),g.querySelectorAll("[data-hs]").forEach(v=>v.onclick=()=>{let[I,Z]=v.dataset.hs.split(":"),nt=J(I);nt.i=+Z,ns(nt),je(!0)}),g.querySelectorAll("[data-hw]").forEach(v=>v.onclick=()=>{let[I,Z]=v.dataset.hw.split(":"),nt=J(I);nt.walk=_(nt.walk+ +Z,0,60),ns(nt),je(!0)}),g.querySelectorAll("[data-hmap]").forEach(v=>v.onclick=()=>{let I=+v.dataset.hmap;b=It=k=!1,mt=null,Et=I,Ae(),Object.assign(s,{tx:M[I].w[0],ty:M[I].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),u._h="",ze(),a()}),g.querySelectorAll("[data-hset]").forEach(v=>v.onclick=()=>{Vs=v.dataset.hset,m.value="",m.placeholder=Vs==="work"?__t(379):__t(380),m.focus()}),g.querySelectorAll("[data-hnear]").forEach(v=>v.onclick=()=>{let I=Ht.get(qt.st[0]);I!=null&&Wh(I,v.dataset.hnear)}),g.querySelectorAll("[data-hmore]").forEach(v=>v.onclick=()=>{let I=J(v.dataset.hmore);I.more=!I.more,je(!0)}),g.querySelectorAll("[data-hhide]").forEach(v=>v.onclick=I=>{I.stopPropagation();let[Z,nt]=v.dataset.hhide.split(":"),bt=J(Z);bt.hide=nt,ns(bt),je(!0)}),g.querySelectorAll("[data-hshow]").forEach(v=>v.onclick=()=>{let I=J(v.dataset.hshow);I.hide="",ns(I),je(!0)}),g.querySelectorAll("[data-hgo]").forEach(v=>v.onclick=I=>{I.stopPropagation();let[Z,nt]=v.dataset.hgo.split(":"),bt=J(Z);bt.goAt=nt==="1"?Date.now():0,ns(bt),je(!0)}),g.querySelectorAll("[data-hnotst]").forEach(v=>v.onclick=I=>{I.stopPropagation(),qt.homeW=qt.w;try{localStorage.setItem("rod_homew",JSON.stringify(qt.w))}catch{}je(!0)}),g.querySelectorAll("[data-hdel]").forEach(v=>v.onclick=()=>{un.st=[],un.open=!1,ns(un),je(!0),vf()}),g.querySelectorAll("[data-dk]").forEach(v=>v.onclick=()=>Sf(C[+v.dataset.dk])),g.querySelectorAll("[data-hal]").forEach(v=>v.onclick=()=>p("#alr").click());let et=p("#bell");et||(et=document.createElement("button"),et.type="button",et.id="bell",et.onclick=Pg,p("#inf .more").prepend(et));{let v=G.repOk?yi.on:Nn.on;et.hidden=!R.lines.length,et.className=v?"on":"",et.textContent=(v?__t(381):__t(382))+R.lines.join(", "),et.title=(v?__t(383):__t(384))+__t(59)+R.lines.join(", ")+(G.repOk?"":__t(385))}rf(g)}function Sf(h){if(!h)return;let g=t.days.indexOf(ae().ymd),S=j.find(R=>R.real?h.tid&&R.v.tid===h.tid||h.num&&String(R.tr?R.tr.num:R.v.num)===String(h.num):h.tr&&R.tr===h.tr||h.num&&R.tr&&String(R.tr.num)===String(h.num)),w=h.tr||S&&S.tr||(K[g]||[]).find(R=>String(R.num)===String(h.num));if(b=It=k=!1,Et=-1,mt=S?S.tr||{vtid:S.v.tid}:w||null,!mt)return;Ct=S&&S.tr?S.tr:null,Ct&&innerWidth<=640&&(u.classList.add("peek"),p("#rc").classList.contains("min")||p("#rcgrab").click());let C=S?S.p.w:null;C&&Object.assign(s,{tx:C[0],ty:C[1],dist:Math.min(s.dist,22)}),Ae(),u._h="",ze(),Q=0,a()}let Vs=!1;m.addEventListener("blur",()=>setTimeout(()=>{Vs&&!m.value.trim()&&(Vs=!1,m.placeholder=__t(386))},600));function SM(){}function Wh(h,g){let S=g==="work"?un:Gn,w=M[h].id,C=M.filter(R=>R.fams.size&&R!==M[h]&&Math.hypot(R.w[0]-M[h].w[0],R.w[1]-M[h].w[1])<.6).map(R=>R.id);S.st=[w,...C].slice(0,3),S.i=0,S.open=!0,ns(S),je(!0),vf()}let Ko=p("#lines");Ko.innerHTML=`${__t(387)}`+V.map(h=>`<button type="button" style="--c:${W[h]}" data-f="${h}">${h}</button>`).join("");function Mf(){try{je(!0)}catch{}{let h=p("#linebtn");h||(h=document.createElement("button"),h.type="button",h.id="linebtn",Ko.after(h),h.onclick=()=>{it=[...X][0],k=b=It=!1,u._h="",ze()});let g=X.size===1?[...X][0]:"";h.hidden=!g,g&&(h.innerHTML=`${__t(388)}${f(g)}${__t(389)}`)}Ko.querySelectorAll("[data-f]").forEach(h=>{h.dataset.f!=="*"&&h.classList.toggle("off",!X.has(h.dataset.f))})}Ko.querySelectorAll("[data-f]").forEach(h=>h.onclick=()=>{let g=h.dataset.f;g==="*"?V.forEach(S=>X.add(S)):X.size===V.length?(X.clear(),X.add(g)):X.has(g)?(X.delete(g),X.size||V.forEach(S=>X.add(S))):X.add(g);try{localStorage.setItem("rod_lines",JSON.stringify([...X]))}catch{}Mf(),ce(),Ae(),Bh(),Q=0,a()});let Xh=[...document.querySelectorAll("[data-sp]")],mi=0;function bf(h){let g=ae();h&&(At===h||mi===h)?At?(Gt=g.min,Qt=g.min,At=0,mi=h):(le=performance.now(),At=h,mi=0):h===0?(At=0,Qt=null,mi=0):(Gt=g.min,le=performance.now(),Qt=g.min,At=h,mi=0),Xh.forEach(S=>{let w=+S.dataset.sp;S.classList.toggle("on",w===(At||mi)||!At&&!mi&&Qt==null&&w===0),S.classList.toggle("pz",!!mi&&w===mi),S.textContent=w===0?__t(390):mi===w?"\u25B6 \xD7"+w:At===w?"\u23F8 \xD7"+w:"\xD7"+w}),Q=0,a()}Xh.forEach(h=>h.onclick=()=>bf(+h.dataset.sp)),p("#tsl").oninput=h=>{let g=+h.target.value;Gt=g,Qt=g,le=performance.now(),At===0&&!mi&&Xh.forEach(S=>S.classList.remove("on")),Q=0,a()},setInterval(()=>{Qt!=null&&At&&Gt+(performance.now()-le)/6e4*At>1560&&(Gt=240,le=performance.now())},1e3),window.__rodSearch=h=>{let g=x(h.trim());if(!g){d.style.display="none",d._pick=null;return}let S=[],w=[];M.forEach((U,B)=>{if(!U.fams.size)return;let J=x(U.n);J.startsWith(g)||J.includes(" "+g)||J.includes("-"+g)?S.push(B):J.includes(g)&&w.push(B)});let C=S.concat(w).slice(0,7),R=A.filter(U=>x(U.name).startsWith(g)).sort((U,B)=>B.pop-U.pop).slice(0,3),N=C.map(U=>({h:`\u{1F689} ${f(M[U].n)}<em>${[...M[U].fams].sort(L).slice(0,3).map(B=>`<em class="ls" style="background:${W[B]}">${B}</em>`).join(" ")}</em>`,go:()=>{if(Vs){let B=Vs;Vs=!1,m.placeholder=__t(386),Wh(U,B);return}b=!1,It=!1,k=!1,Et=U,mt=null,Ct=null,Ae(),Object.assign(s,{tx:M[U].w[0],ty:M[U].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),ze(),a()}})).concat(R.map(U=>({h:`${f(U.name)}${__t(391)}`,go:()=>{Object.assign(s,{tx:U.cx,ty:U.cy,dist:_(U.size*3+14,14,60)}),a()}})));d.innerHTML=N.map((U,B)=>`<li data-i="${B}">${U.h}</li>`).join("")||__t(392),d.style.display="block",d._pick=U=>{N[U]&&(N[U].go(),d.style.display="none",m.value="",m.blur())},d.querySelectorAll("li[data-i]").forEach(U=>U.onclick=()=>d._pick(+U.dataset.i))},Mf(),Ae();try{let h=new URLSearchParams(location.search).get("st");if(h){let g=x(h),S=-1,w=0;M.forEach((C,R)=>{if(!C.fams.size)return;let N=x(C.n),U=N===g?3:N.startsWith(g)||g.startsWith(N)?2:N.includes(g)||g.includes(N)?1:0;U>w&&(w=U,S=R)}),S>=0&&setTimeout(()=>{Et=S,Ae(),Object.assign(s,{tx:M[S].w[0],ty:M[S].w[1],dist:18,tilt:.5}),ze(),a()},300)}}catch{}let qh={v:!1};document.addEventListener("click",h=>{!(h.target.closest&&h.target.closest("[data-halx]"))||h.target.closest("a")||(qh.v=!qh.v,je(!0))});let Un={on:!1,cur:__t(239),home:new Map},jo=matchMedia("(max-width:640px)"),ba=document.createElement("nav");ba.id="tabs";let Ng=[[__t(239),"\u{1F552}",__t(390)],["mapa","\u{1F5FA}\uFE0F",__t(393)],["linea","\u{1F4CA}",__t(394)],["ajustes","\u2699\uFE0F",__t(395)]];ba.innerHTML=Ng.map(([h,g,S])=>`<button type="button" data-tab="${h}"><span>${g}</span><small>${S}</small></button>`).join(""),document.body.appendChild(ba);let gr=document.createElement("div");gr.id="tabL",document.body.appendChild(gr);let wa=document.createElement("div");wa.id="tabA",wa.className="box",document.body.appendChild(wa);let Yh=(h,g)=>{h&&(Un.home.has(h)||Un.home.set(h,[h.parentNode,h.nextSibling]),g.appendChild(h))},wf=()=>{for(let[h,[g,S]]of Un.home)try{g.insertBefore(h,S&&S.parentNode===g?S:null)}catch{}Un.home.clear()};function Zh(){let h=X.size===1?[...X][0]:"",g=G.alerts.filter(w=>[...w.fams].some(C=>X.has(C))).length,S=[k,It,it,h,g].join("|");gr._k!==S&&(gr._k=S,gr.innerHTML=`<button type="button" data-tl="stats" class="${k?"on":""}">\u{1F4CA} ${__t(396)}</button><button type="button" data-tl="alr" class="${It?"on":""}">\u26A0\uFE0F ${g}${g===1?__t(254):__t(255)}</button>${h?`<button type="button" data-tl="line" class="${it?"on":""}">\u{1F4CB} ${f(h)}</button>`:""}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(120)}">\u{1F4AC}</a>`,gr.querySelectorAll("[data-tl]").forEach(w=>w.onclick=()=>{let C=w.dataset.tl;k=C==="stats",It=C==="alr",it=C==="line"?h:"",b=!1,mt=null,Et=-1,k&&(Te.at=0),u._h="",ze(),Zh()}))}function Ef(){wf();let h=window.__L||"es",g=jn.mode;wa.innerHTML=`<h3>${__t(395)}</h3>
      <h4>\u{1F310} ${__t(397)}</h4><div class="seg2">${[["ca","Catal\xE0"],["es","Castellano"],["en","English"]].map(([S,w])=>`<button type="button" data-lang="${S}" class="${h===S?"on":""}">${w}</button>`).join("")}</div>
      <h4>\u{1F319} ${__t(398)}</h4><div class="seg2">${[["auto",__t(399)],["light",__t(400)],["dark",__t(401)]].map(([S,w])=>`<button type="button" data-th="${S}" class="${g===S?"on":""}">${w}</button>`).join("")}</div>
      <h4>\u{1F514} ${__t(402)}</h4><div id="tabAbell"></div>
      <h4>\u{1F4E1} ${__t(403)}</h4><div id="tabArt"></div>
      <h4>\u2139\uFE0F ${__t(404)}</h4><div id="tabAinf"></div>
      <p class="tabAfoot">MonkiSoft</p>`,wa.querySelectorAll("[data-th]").forEach(S=>S.onclick=()=>{jn.mode=S.dataset.th;try{localStorage.setItem("rod_theme",jn.mode)}catch{}Ho(),Ef()}),Yh(p("#bell"),p("#tabAbell")),Yh(p("#src"),p("#tabArt")),Yh(p("#ver"),p("#tabAinf"))}function Qo(h){if(!Un.on)return;let g=Un.cur;if(Un.cur=h,document.documentElement.dataset.tab=h,window.__mapHidden=h!=="mapa",ba.querySelectorAll("[data-tab]").forEach(S=>S.classList.toggle("on",S.dataset.tab===h)),h==="linea"?(!k&&!It&&!it&&(k=!0,Te.at=0),mt=null,Et=-1,b=!1,u._h="",ze(),Zh()):g==="linea"&&(k=It=!1,it="",u._h="",ze()),h==="ajustes"&&Ef(),h==="ahora"&&(je(!0),!p("#home .hbody"))){let S=p("#home .hhead[data-ht]");S&&S.click()}Q=0,a()}ba.onclick=h=>{let g=h.target.closest("[data-tab]");g&&Qo(g.dataset.tab)},window.__rodTabSync=()=>{if(!Un.on)return;let h=mt?"t"+(mt.num||mt.vtid):Et>=0?"s"+Et:"",g=h!==Un.sk;Un.sk=h,h&&g&&Un.cur!=="mapa"?Qo("mapa"):(It||it||b)&&Un.cur!=="linea"&&Un.cur!=="mapa"&&Qo("linea"),Un.cur==="linea"&&Zh()};function Jh(){let h=jo.matches||document.documentElement.classList.contains("cap");h!==Un.on&&(Un.on=h,document.documentElement.classList.toggle("tabmode",h),h||(window.__mapHidden=!1),h?Qo(__t(239)):(delete document.documentElement.dataset.tab,wf()))}jo.addEventListener?jo.addEventListener("change",Jh):jo.addListener(Jh),Jh(),window.__rod={TID:ot,SID:Ht,byDay:K,get days(){return t.days},get hist(){return Te},get past(){return pe.cur},get cols(){return Kn.mesh?Kn.mesh.count:-1},get dist(){return r.dist},get follow(){return Ct},get selTrip(){return mt},ST:M,TR:st,FAM:V,act:()=>j,setSpeed:bf,RT:G,pollRT:oe,nowState:ae,posAt:Fs,activeTrips:Os,LL:vt,select:h=>{mt=h,ze()}}}var ra=window.__DATA__;var Pe=i=>document.querySelector(i),fs=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),zn=(i,t,e)=>Math.min(e,Math.max(t,i)),Dd=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Yn=Pe("#c"),Bo=new hh({canvas:Yn,antialias:!0});Bo.setPixelRatio(Math.min(devicePixelRatio||1,2));var ps=new $a;ps.background=new ue(15659509);var Eh=35,Ki=new Bn(Eh,1,2,1500);ps.add(new po(16777215,9080992,1));var $m=new go(16777215,.9);$m.position.set(-40,-70,90);ps.add($m);var Zi=100/ra.w,Uo=ra.w/2,Fo=ra.h/2,sn=[],Nd=new Ai;ps.add(Nd);var yh=new Js({color:16777215,transparent:!0,opacity:.55});for(let i of ra.m){let t=new Ai,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let _ of i.g){let x=_.map(p=>{let f=[];for(let F=0;F<p.length;F+=2)f.push(new Ft((p[F]-Uo)*Zi,(p[F+1]-Fo)*Zi));return f.length>1&&f[0].equals(f[f.length-1])&&f.pop(),f}).filter(p=>p.length>=3);if(!x.length)continue;let A=new Wr(x[0]);for(let p=1;p<x.length;p++)A.holes.push(new js(x[p]));e.push(A);for(let p of x[0])s=Math.min(s,p.x),r=Math.max(r,p.x),a=Math.min(a,p.y),o=Math.max(o,p.y);for(let p of x)n.push(new Ja(new ln().setFromPoints(p.map(f=>new $(f.x,f.y,0))),yh))}if(!e.length)continue;let l;try{l=new oo(e,{depth:1,bevelEnabled:!1})}catch{continue}let c=new ho({color:13421772}),u=new wn(l,c);t.add(u);let m=new Ai;n.forEach(_=>m.add(_)),m.position.z=.04,Nd.add(m),t.scale.z=.01,Nd.add(t);let d={og:m,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:u,mat:c,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};u.userData.m=d,sn.push(d)}var Xw=sn.map(i=>i.mesh),Om=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},Wm=0,Xm=0;for(let i of sn){for(let t of i.rings)Wm+=Om(t[0])-t.slice(1).reduce((e,n)=>e+Om(n),0);Xm+=i.area}var rM=Math.sqrt(Xm/Wm),_h={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},qm={"08":__t(405),17:__t(406),25:__t(407),43:__t(408)},Vd="sqrt",Hd="pop",Pd=0,Ud=0,na=1,Do=1,aM={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},Fd=i=>Hd==="pop"?i.pop:i.pop/i.area,gh=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new ue(i));function oM(i){i=zn(i,0,1)*(gh.length-1);let t=Math.min(Math.floor(i),gh.length-2);return gh[t].clone().lerp(gh[t+1],i-t)}var ia=i=>i>=100?fs(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function lM(){Ud=0;for(let i of sn)Ud+=i.pop;[...sn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...sn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),Jm()}var Ym=new ue("#d3d8e2"),Zm=new ue("#eceff3");window.__mapTheme=i=>{ps.background=new ue(i?856345:15659509),Zm.set(i?"#2b3242":"#eceff3"),Ym.set(i?"#1a1f29":"#d3d8e2"),yh.color.set(i?856345:16777215),yh.opacity=i?.7:.55,Gd.color.set(i?329483:2764864),$d.color.set(i?9081766:16777215);for(let t of sn)t.base&&Th(t);Tn()};function Th(i){i.mat.color.copy(i.base).lerp(Zm,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(Ym,.8)}function Jm(){na=1,Do=1e12;for(let e of sn){let n=Fd(e);na=Math.max(na,n),Do=Math.min(Do,n)}let i=Math.log10(Math.max(Do,.01)),t=Math.log10(na);for(let e of sn)e.base=oM((Math.log10(Math.max(Fd(e),.01))-i)/(t-i)),Th(e);Pe("#lmin").textContent=ia(Do),Pe("#lmax").textContent=ia(na),Pe("#lname").textContent=Hd==="pop"?__t(409):__t(410),Ah()}function Ah(){let i=aM[Vd],t=i(na),e=24*Pd;for(let n of sn)n.zt=Pd<=.001?.01:Math.max(.12*Math.min(1,Pd),e*i(Fd(n))/t)*(n.inF?1:.1);Tn()}var Bm=Object.fromEntries(sn.map(i=>[i.code,i])),xh=[],Km=[];for(let i of ra.bd){let t=Bm[i.a],e=Bm[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)Km.push((i.p[n]-Uo)*Zi,(i.p[n+1]-Fo)*Zi,0,(i.p[n+2]-Uo)*Zi,(i.p[n+3]-Fo)*Zi,0),xh.push(t,e)}var Sh=new us;Sh.setPositions(Km);var Gd=new Wi({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),$d=new Wi({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[Gd,$d].forEach((i,t)=>{let e=new rr(Sh,i);e.frustumCulled=!1,e.renderOrder=10+t,ps.add(e)});function cM(){let i=Sh.attributes.instanceStart.data.array;for(let t=0;t<xh.length;t+=2){let e=Math.max(xh[t].z,xh[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}Sh.attributes.instanceStart.data.needsUpdate=!0}var Mh={};for(let i of Object.keys(_h)){let t=sn.filter(u=>u.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,l=-1e9;for(let u of t)e+=u.area,n+=u.cx*u.area,s+=u.cy*u.area,r=Math.min(r,u.cx),a=Math.max(a,u.cx),o=Math.min(o,u.cy),l=Math.max(l,u.cy);let c=document.createElement("div");c.className="plab",c.textContent=_h[i],c.title=__t(411)+qm[i],c.onclick=()=>yM("pr:"+i),document.body.appendChild(c),Mh[i]={el:c,p:new $(n/e,s/e,0),cx:(r+a)/2,cy:(o+l)/2,ext:Math.max(a-r,l-o),ext2:[a-r,l-o],area:e,name:_h[i]}}var Ld=new $;function hM(){for(let i in Mh){let t=Mh[i];Ld.copy(t.p).project(Ki),t.el.style.transform=`translate(-50%,-50%) translate(${(Ld.x*.5+.5)*innerWidth}px,${(-Ld.y*.5+.5)*innerHeight}px)`}}var fn={tilt:0,yaw:0,dist:150,tx:0,ty:0},ge={...fn};function uM(){let i=innerWidth/innerHeight,t=Math.tan(Eh*Math.PI/360);return Math.max(ra.h*Zi*1.1,100*1.1/i)/(2*t)}var dM=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{ge.yaw=Math.round(ge.yaw/(2*Math.PI))*2*Math.PI,ge.tilt=0,Tn()});function Wd(){Object.assign(ge,{tilt:0,yaw:0,dist:uM(),tx:0,ty:0}),Tn()}function fM(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=fn;Ki.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),Ki.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),Ki.lookAt(n,s,0)}var No=!0,km=performance.now(),Oo=new Map;function Tn(){No=!0}function jm(i){requestAnimationFrame(jm);let t=zn((i-km)/1e3,0,.05);km=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(fn)){let r=ge[s]-fn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(fn[s]+=r*e,n=!0):fn[s]=ge[s]}for(let s of sn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of Oo){let a=(i-r)/1800;a>=1?(Oo.delete(s),ur(s)):ur(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(No=!0),window.__mapHidden){No=!0;return}if(n||No){dM.style.transform=`rotate(${fn.yaw}rad) scaleY(${(.55+.45*Math.cos(fn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(ge.yaw/2))<.02&&ge.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(412):__t(413))}fM(),cM(),hM(),window.__rodFrame&&window.__rodFrame(),Bo.render(ps,Ki),No=n,Pe("#tilt").value=Math.round(ge.tilt*180/Math.PI),Pe("#yaw").value=Math.round(((ge.yaw*180/Math.PI+180)%360+360)%360-180)}}function Qm(){Bo.setSize(innerWidth,innerHeight,!1),Ki.aspect=innerWidth/innerHeight,Ki.updateProjectionMatrix(),Gd.resolution.set(innerWidth,innerHeight),$d.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),Tn()}addEventListener("resize",()=>{Qm(),Je.length&&Ns()});Yn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;ge.yaw+=n*.0035}else i.ctrlKey?ge.dist=zn(ge.dist*Math.exp(e*.01),6,400):ge.tilt=zn(ge.tilt+e*.002,0,1.32);Tn()},{passive:!1});Yn.addEventListener("contextmenu",i=>i.preventDefault());var Ji=new Map,ii=null,lr=0,Od=0,Bd=0;var bh=null;Yn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),Je.length&&setTimeout(Ns,50)),Yn.setPointerCapture(i.pointerId),Ji.set(i.pointerId,{x:i.clientX,y:i.clientY}),Ji.size===1&&(ii={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),Ji.size===2){let[t,e]=[...Ji.values()];lr=Math.hypot(t.x-e.x,t.y-e.y),Od=Math.atan2(e.y-t.y,e.x-t.x),Bd=(t.y+e.y)/2,bh={mode:null,rot:0,sc:0,tl:0},ii&&(ii.multi=!0)}Xd()});Yn.addEventListener("pointermove",i=>{let t=Ji.get(i.pointerId);if(!t){ds={x:i.clientX,y:i.clientY},kd||(kd=requestAnimationFrame(mM));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,Ji.size===2){let[s,r]=[...Ji.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),l=(s.y+r.y)/2,c=o-Od;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI);let u=lr?a-lr:0,m=l-Bd,d=bh||(bh={mode:null,rot:0,sc:0,tl:0});d.rot+=c,d.sc+=u,d.tl+=m,d.mode?d.mode==="zoom"&&Math.abs(d.rot)>.45&&(d.mode="rotate"):Math.abs(d.rot)>.3?d.mode="rotate":Math.abs(d.tl)>30&&Math.abs(d.sc)<18?d.mode="tilt":Math.abs(d.sc)>12&&(d.mode="zoom"),(d.mode==="zoom"||d.mode==="rotate")&&lr&&(ge.dist=zn(ge.dist*lr/a,6,400)),d.mode==="rotate"&&(ge.yaw+=c,fn.yaw=ge.yaw),d.mode==="tilt"&&(ge.tilt=zn(ge.tilt-m*.006,0,1.32),fn.tilt=ge.tilt),lr=a,Od=o,Bd=l,Tn();return}if(ii.moved+=Math.abs(e)+Math.abs(n),ii.rot||i.altKey)ge.yaw+=e*.005,ge.tilt=zn(ge.tilt+n*.004,0,1.32),fn.yaw=ge.yaw,fn.tilt=ge.tilt;else{let s=2*fn.dist*Math.tan(Eh*Math.PI/360)/innerHeight,r=Math.sin(fn.yaw),a=Math.cos(fn.yaw),o=1/Math.max(Math.cos(fn.tilt),.3);ge.tx=zn(ge.tx-a*e*s+-r*n*s*o,-70,70),ge.ty=zn(ge.ty-r*e*s+a*n*s*o,-70,70),fn.tx=ge.tx,fn.ty=ge.ty}Tn()});var tg=i=>{let t=ii&&!ii.rot&&!ii.multi&&ii.moved<(ii.touch?12:6)&&i.type==="pointerup"&&Ji.size===1,e=ii&&ii.touch;Ji.delete(i.pointerId),lr=0,bh=null,Ji.size||(ii=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};Yn.addEventListener("pointerup",tg);Yn.addEventListener("pointercancel",tg);Yn.addEventListener("dblclick",Wd);addEventListener("keydown",i=>{i.key==="Alt"&&(Yn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(Yn.style.cursor="")});addEventListener("blur",()=>{Yn.style.cursor=""});var pM=new xo,zm=new Ft,ds=null,kd=0,cr=null;function mM(){if(kd=0,!ds||ii)return;zm.set(ds.x/innerWidth*2-1,-(ds.y/innerHeight)*2+1),pM.setFromCamera(zm,Ki);let i=null;if(i!==cr){let e=cr;cr=i,e&&ur(e),i&&ur(i),Tn()}let t=window.__rodHover&&window.__rodHover(ds.x,ds.y);if(t){or.innerHTML=t,or.style.display="block";let e=or.offsetWidth,n=or.offsetHeight;or.style.left=zn(ds.x+14,6,innerWidth-e-6)+"px",or.style.top=zn(ds.y+14,6,innerHeight-n-6)+"px",Yn.style.cursor="pointer"}else Xd(),Yn.style.cursor=""}Yn.addEventListener("pointerleave",()=>{if(ds=null,cr){let i=cr;cr=null,ur(i),Tn()}Xd()});var or=Pe("#tip");function Xd(){or.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{Hd=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),Jm()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{Vd=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),Ah()});Pe("#yaw").oninput=i=>{ge.yaw=+i.target.value*Math.PI/180,Tn()};Pe("#tilt").oninput=i=>{ge.tilt=+i.target.value*Math.PI/180,Tn()};Pe("#zin").onclick=()=>{ge.dist=zn(ge.dist*.75,6,400),Tn()};Pe("#zout").onclick=()=>{ge.dist=zn(ge.dist/.75,6,400),Tn()};Pe("#rst").onclick=Wd;var Vm=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],Je=[],Hm={},gM=i=>Hm[i]||(Hm[i]=new Js({color:i}));function eg(i,t){i.og.children.forEach(e=>e.material=t?gM(t):yh)}function ur(i,t=0){let e=i.mat.emissive;i===cr?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function qd(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let c of i)e=Math.min(e,c.cx-c.size/2),n=Math.max(n,c.cx+c.size/2),s=Math.min(s,c.cy-c.size/2),r=Math.max(r,c.cy+c.size/2);let a=innerWidth/innerHeight,o=Math.tan(Eh*Math.PI/360),l=i.length===1?zn(i[0].size*3.2+14,14,120):zn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(ge,{tx:(e+n)/2,ty:(s+r)/2,dist:l,tilt:t,yaw:0}),Tn()}var Ds=Pe("#q"),ui=Pe("#list"),Ze=Pe("#mcs");function Ch(i,t=!0){if(ui.style.display="none",Ds.value="",!i.sel){Je.length>=6&&ng(Je[0].o,!0);let e=new Set(Je.map(s=>s.color)),n=Vm.find(s=>!e.has(s))||Vm[0];i.sel={o:i,color:n,tint:new ue(n).multiplyScalar(.12)},Je.push(i.sel),eg(i,n)}Ze.classList.contains("min")&&ko(!1),Oo.set(i,performance.now()),ur(i),t&&qd([i],Math.max(ge.tilt,.9)),Ns()}function ng(i,t){let e=Je.indexOf(i.sel);e>=0&&Je.splice(e,1),i.sel=null,eg(i,null),ur(i),Tn(),t||Ns()}function ig(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=Je.map(u=>{let m=1e9,d=-1e9,_=1e9,x=-1e9;for(let A of u.o.rings)for(let p=0;p<A[0].length;p+=2)m=Math.min(m,A[0][p]),d=Math.max(d,A[0][p]),_=Math.min(_,A[0][p+1]),x=Math.max(x,A[0][p+1]);return{x0:m,x1:d,y0:_,y1:x}}),a=Math.max(...r.map(u=>Math.max(u.x1-u.x0,u.y1-u.y0))),o=(Math.min(e,n)-22)/a;Je.forEach((u,m)=>{let d=r[m],_=(d.x0+d.x1)/2,x=(d.y0+d.y1)/2;s.beginPath();for(let A of u.o.rings)for(let p of A)for(let f=0;f<p.length;f+=2){let F=e/2+(p[f]-_)*o,O=n/2-(p[f+1]-x)*o;f?s.lineTo(F,O):s.moveTo(F,O),f===p.length-2&&s.closePath()}s.fillStyle=u.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=u.color,s.stroke()});let l=o/rM,c=[.5,1,2,5,10,20,50,100].find(u=>u*l>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,c*l,2),s.font="10px system-ui",s.fillText(c+" km",12+c*l,n-8)}function Ns(){if(!Je.length){Ze.innerHTML="",Ze.style.display="none",ko(!1);return}if(Ze.style.display="flex",innerWidth<=640){let e=Pe("#inf").getBoundingClientRect().bottom;Ze.style.top=Math.round(e+8)+"px",Ze.style.maxHeight=Math.max(110,Math.min(innerHeight*(Pe("#rc").classList.contains("min")?.7:.4),Pe("#rc").getBoundingClientRect().top-e-16))+"px",Ze.style.width=""}else if(innerHeight<=500){let e=Pe("#inf").getBoundingClientRect().bottom;Ze.style.top=Math.round(e+8)+"px",Ze.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",Ze.style.width="min(290px, 40vw)"}else Ze.style.top="",Ze.style.maxHeight="",Ze.style.width="";let i=Je.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${_h[s.pr]}</em></div><div class="mb">${fs(s.pop)}${__t(419)}${ia(s.area)} km\xB2 \xB7 ${ia(s.pop/s.area)}${__t(420)}${s.rankP}${__t(421)}`}).join("");if(Je.length>1){let e=s=>Math.max(...Je.map(s)),n=[[__t(422),s=>s.o.pop,fs],[__t(423),s=>s.o.area,ia],[__t(424),s=>s.o.pop/s.o.area,ia]];if(i+=`${__t(425)}`+n.map(([s,r,a])=>`<div class="cr"><span>${s}</span>${Je.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),Je.length===2){let[s,r]=Je.map(c=>c.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],l=(c,u)=>(c>=u?c/u:u/c).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}${__t(426)}${l(a.pop,o.pop)}${__t(427)}${o.name}${__t(428)}${l(a.area,o.area)}\xD7 ${a.area>=o.area?__t(429):__t(430)}.</small>`}i+="</div>"}Ze.innerHTML=i,Ze.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),ng(Je[+e.dataset.x].o)}),Ze.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>qd([Je[+e.dataset.i].o],Math.max(ge.tilt,.9)),e.onmouseenter=()=>{let n=Je[+e.dataset.i].o;Oo.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=Je.splice(s,1);Je.splice(r,0,a),Ns();let o=Pe("#sil");o&&o.classList.add("flash")}}});let t=Pe("#sil");t&&ig(t)}Ds.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(Ds.value);return}let i=Dd(Ds.value.trim());if(!i){ui.style.display="none";return}let t=[],e=[];for(let s of sn){let r=Dd(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);ui.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${fs(s.pop)}</em></li>`).join("")||__t(392),ui.style.display="block",ui.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>Ch(n[+s.dataset.i])),ui._r=n});Ds.addEventListener("keydown",i=>{i.key==="Enter"&&ui._pick?ui._pick(0):i.key==="Enter"&&ui._r&&ui._r[0]&&Ch(ui._r[0]),i.key==="Escape"&&(Ds.value="",ui.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==Ds&&sg()});var Gm=0;addEventListener("resize",()=>{clearTimeout(Gm),Gm=setTimeout(()=>{let i=Pe("#sil");i&&ig(i)},120)});var wh=null,zd=Pe("#chip");function _M(i,t,e=.8){wh={codes:new Set(i.map(n=>n.code)),label:t},sn.forEach(n=>{n.inF=wh.codes.has(n.code),Th(n)}),zd.innerHTML=`${__t(431)}${t}</b> \xB7 ${i.length}${i.length===1?__t(432):__t(433)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,zd.style.display="flex",Pe("#chx").onclick=sg,Ah(),qd(i,e),i.slice(0,40).forEach(n=>Oo.set(n,performance.now()))}function sg(){wh&&(wh=null,sn.forEach(i=>{i.inF=!0,Th(i)}),zd.style.display="none",Ah())}var xM="prov";function vM(i){let t=[...sn].sort((a,o)=>o.pop-a.pop),e=[...sn].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[sn.filter(a=>a.pr===s),qm[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(434)]:[e.slice(0,10),__t(435)];if(n==="low")return s==="pop"?[t.slice(-10),__t(436)]:[e.slice(-10),__t(437)];if(n==="size")return[sn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${fs(+s)}${__t(438)}`:+s==0?`${__t(439)}${fs(+r)}${__t(440)}`:`${fs(+s)} \u2013 ${fs(+r-1)}${__t(440)}`];if(n==="n50"){let a=0,o=0;for(let l of t)if(a+=l.pop,o++,a>=Ud/2)break;return[t.slice(0,o),`${__t(441)}`]}return[[],""]}function yM(i){let[t,e]=vM(i);t.length&&_M(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{xM=i.dataset.tab,Pe("#dbody").scrollTop=0});var hr=Pe("#rc"),vh=Pe("#mcstab");function sa(i){hr.classList.toggle("min",i),Pe("#rcgrab span").textContent=i?__t(483):__t(484),Je.length&&Ns()}function ko(i){Ze.classList.toggle("min",i),Ze.style.transform="",Ze.style.opacity="",vh.classList.toggle("on",i&&Je.length>0),i&&(vh.textContent=`\u25B8 ${Je.length} ${Je.length===1?"ficha":"fichas"}`,vh.style.top=Ze.style.top||"124px")}function Yd(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!Rh.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y;!s.lock&&Math.hypot(o,l)>10&&(s.lock=Math.abs(o)>Math.abs(l)?"x":"y"),s.lock===n&&t&&t(o,l)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y,c=s.lock;s=null,e(c===n?o:0,c===n?l:0,c)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Pe("#rcgrab").onclick=()=>sa(!hr.classList.contains("min"));innerWidth<=640&&sa(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var rg=()=>innerWidth>640;Yd(hr,{axis:"y",onEnd:(i,t)=>{if(!rg())if(t>40&&!hr.classList.contains("min")){let e=Pe("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&sa(!0)}else t<-30&&hr.classList.contains("min")&&sa(!1)}});Yd(hr,{axis:"x",onEnd:i=>{rg()&&(i>50?sa(!0):i<-30&&hr.classList.contains("min")&&sa(!1))}});Yd(Ze,{axis:"x",onMove:i=>{i<0&&(Ze.classList.add("sw"),Ze.style.transform=`translateX(${i}px)`,Ze.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{Ze.classList.remove("sw"),i<-60?(ko(!0),window.__rodHide&&!Je.length&&window.__rodHide()):(Ze.style.transform="",Ze.style.opacity="")}});vh.onclick=()=>{ko(!1),Ns()};Pe("#dtoggle").onclick=()=>{let i=Pe("#dp").classList.toggle("open");Pe("#rc").classList.toggle("dopen",i),Pe("#dtoggle").textContent=i?Rh.matches&&innerWidth<=640?__t(485):__t(486):__t(487),window.__rodCard&&window.__rodCard()};var Rh=matchMedia("(max-width:640px), (max-height:500px)");function ag(){let i=Pe("#leg");Rh.matches?Pe("#rc").insertBefore(i,Pe("#dtoggle")):document.body.appendChild(i),Je.length&&Ns()}Rh.addEventListener("change",ag);ag();Qm();lM();Wd();Object.assign(fn,ge);for(let i of sn)i.z=.01;requestAnimationFrame(jm);Fm({scene:ps,camera:Ki,renderer:Bo,goal:ge,cur:fn,invalidate:Tn,flyTo:(i,t,e,n)=>{Object.assign(ge,{tx:(i-Uo)*Zi,ty:(t-Fo)*Zi,dist:e,tilt:n}),Tn()},K:Zi,CX:Uo,CY:Fo,mcs:Ze,q:Ds,list:ui,munis:sn,select:Ch,norm:Dd,fmt:fs,clamp:zn,mcsMin:ko});window.__app={scene:ps,renderer:Bo,camera:Ki,munis:sn,labs:Mh,goal:ge,cur:fn,select:Ch,get mode(){return Vd}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
