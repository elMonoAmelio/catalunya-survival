(()=>{var bd=0,_h=1,wd=2;var wa=1,Ed=2,_r=3,ls=0,Ln=1,Ai=2,Ci=0,xr=1,xh=2,vh=3,yh=4,Td=5;var Cs=100,Ad=101,Cd=102,Rd=103,Id=104,Pd=200,Ld=201,Dd=202,Nd=203,Sh=204,Mh=205,Ud=206,Fd=207,Od=208,Bd=209,zd=210,kd=211,Vd=212,Hd=213,Gd=214,bo=0,wo=1,Eo=2,sr=3,To=4,Ao=5,Co=6,Ro=7,ul=0,Wd=1,Xd=2,fi=0,bh=1,wh=2,Eh=3,Th=4,Ah=5,Ch=6,Rh=7;var Ih=300,cs=301,Rs=302,dl=303,fl=304,Ea=306,Io=1e3,Si=1001,Po=1002,gn=1003,$d=1004;var Ta=1005;var vn=1006,pl=1007;var hs=1008;var kn=1009,Ph=1010,Lh=1011,vr=1012,ml=1013,pi=1014,mi=1015,gi=1016,gl=1017,_l=1018,yr=1020,Dh=35902,Nh=35899,Uh=1021,Fh=1022,ni=1023,bi=1026,us=1027,Oh=1028,xl=1029,ds=1030,vl=1031;var yl=1033,Aa=33776,Ca=33777,Ra=33778,Ia=33779,Sl=35840,Ml=35841,bl=35842,wl=35843,El=36196,Tl=37492,Al=37496,Cl=37488,Rl=37489,Pa=37490,Il=37491,Pl=37808,Ll=37809,Dl=37810,Nl=37811,Ul=37812,Fl=37813,Ol=37814,Bl=37815,zl=37816,kl=37817,Vl=37818,Hl=37819,Gl=37820,Wl=37821,Xl=36492,$l=36494,ql=36495,Yl=36283,Zl=36284,La=36285,Jl=36286;var $r=2300,Lo=2301,So=2302,sh=2303,rh=2400,ah=2401,oh=2402;var qd=3200;var Kl=0,Yd=1,$i="",$n="srgb",qr="srgb-linear",Yr="linear",Fe="srgb";var Mo=7680;var Zd=519,Jd=512,Kd=513,jd=514,jl=515,Qd=516,tf=517,Ql=518,ef=519,Bh=35044;var zh="300 es",hi=2e3,rr=2001;function Ip(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Pp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nf(){let i=Zr("canvas");return i.style.display="block",i}var Vu={},ar=null;function Jr(...i){let t="THREE."+i.shift();ar?ar("log",t,...i):console.log(t,...i)}function sf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ie(...i){i=sf(i);let t="THREE."+i.shift();if(ar)ar("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function re(...i){i=sf(i);let t="THREE."+i.shift();if(ar)ar("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ms(...i){let t=i.join(" ");t in Vu||(Vu[t]=!0,ie(...i))}function rf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var af={[bo]:wo,[Eo]:Co,[To]:Ro,[sr]:Ao,[wo]:bo,[Co]:Eo,[Ro]:To,[Ao]:sr},wi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hu=1234567,Hr=Math.PI/180,or=180/Math.PI;function Mi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[e&63|128]+wn[e>>8&255]+"-"+wn[e>>16&255]+wn[e>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function kh(i,t){return(i%t+t)%t}function Lp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Dp(i,t,e){return i!==t?(e-i)/(t-i):0}function Gr(i,t,e){return(1-e)*i+e*t}function Np(i,t,e,n){return Gr(i,t,1-Math.exp(-e*n))}function Up(i,t=1){return t-Math.abs(kh(i,t*2)-t)}function Fp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Op(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Bp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function zp(i,t){return i+Math.random()*(t-i)}function kp(i){return i*(.5-Math.random())}function Vp(i){i!==void 0&&(Hu=i);let t=Hu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hp(i){return i*Hr}function Gp(i){return i*or}function Wp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Xp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $p(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),p=r((t-n)/2),u=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*p,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*p,o*c);break;case"ZXZ":i.set(l*p,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ci(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Vh={DEG2RAD:Hr,RAD2DEG:or,generateUUID:Mi,clamp:de,euclideanModulo:kh,mapLinear:Lp,inverseLerp:Dp,lerp:Gr,damp:Np,pingpong:Up,smoothstep:Fp,smootherstep:Op,randInt:Bp,randFloat:zp,randFloatSpread:kp,seededRandom:Vp,degToRad:Hp,radToDeg:Gp,isPowerOfTwo:Wp,ceilPowerOfTwo:Xp,floorPowerOfTwo:$p,setQuaternionFromProperEuler:qp,normalize:ze,denormalize:ci},Pt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ei=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],u=r[a+0],m=r[a+1],g=r[a+2],M=r[a+3];if(p!==M||l!==u||c!==m||h!==g){let f=l*u+c*m+h*g+p*M;f<0&&(u=-u,m=-m,g=-g,M=-M,f=-f);let d=1-o;if(f<.9995){let C=Math.acos(f),P=Math.sin(C);d=Math.sin(d*C)/P,o=Math.sin(o*C)/P,l=l*d+u*o,c=c*d+m*o,h=h*d+g*o,p=p*d+M*o}else{l=l*d+u*o,c=c*d+m*o,h=h*d+g*o,p=p*d+M*o;let C=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=C,c*=C,h*=C,p*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*p+l*m-c*u,t[e+1]=l*g+h*u+c*p-o*m,t[e+2]=c*g+h*m+o*u-l*p,t[e+3]=h*g-o*p-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),u=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*p+c*m*g,this._y=c*m*p-u*h*g,this._z=c*h*g+u*m*p,this._w=c*h*p-u*m*g;break;case"YXZ":this._x=u*h*p+c*m*g,this._y=c*m*p-u*h*g,this._z=c*h*g-u*m*p,this._w=c*h*p+u*m*g;break;case"ZXY":this._x=u*h*p-c*m*g,this._y=c*m*p+u*h*g,this._z=c*h*g+u*m*p,this._w=c*h*p-u*m*g;break;case"ZYX":this._x=u*h*p-c*m*g,this._y=c*m*p+u*h*g,this._z=c*h*g-u*m*p,this._w=c*h*p+u*m*g;break;case"YZX":this._x=u*h*p+c*m*g,this._y=c*m*p+u*h*g,this._z=c*h*g-u*m*p,this._w=c*h*p-u*m*g;break;case"XZY":this._x=u*h*p-c*m*g,this._y=c*m*p-u*h*g,this._z=c*h*g+u*m*p,this._w=c*h*p+u*m*g;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],u=n+o+p;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lc.copy(this).projectOnVector(t),this.sub(Lc)}reflect(t){return this.sub(Lc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lc=new U,Gu=new Ei,he=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],u=n[2],m=n[5],g=n[8],M=s[0],f=s[3],d=s[6],C=s[1],P=s[4],S=s[7],b=s[2],T=s[5],L=s[8];return r[0]=a*M+o*C+l*b,r[3]=a*f+o*P+l*T,r[6]=a*d+o*S+l*L,r[1]=c*M+h*C+p*b,r[4]=c*f+h*P+p*T,r[7]=c*d+h*S+p*L,r[2]=u*M+m*C+g*b,r[5]=u*f+m*P+g*T,r[8]=u*d+m*S+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*a-o*c,u=o*l-h*r,m=c*r-a*l,g=e*p+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=p*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=m*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dc.makeScale(t,e)),this}rotate(t){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dc.makeRotation(-t)),this}translate(t,e){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Dc=new he,Wu=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xu=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yp(){let i={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Fe&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Fe&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?Yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qr]:{primaries:t,whitePoint:n,transfer:Yr,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:t,whitePoint:n,transfer:Fe,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),i}var Te=Yp();function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hs,Do=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Hs===void 0&&(Hs=Zr("canvas")),Hs.width=t.width,Hs.height=t.height;let s=Hs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Hs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Zr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wi(e[n]/255)*255):e[n]=Wi(e[n]);return{data:e,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zp=0,lr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Nc(s[a].image)):r.push(Nc(s[a]))}else r=Nc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Do.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}var Jp=0,Uc=new U,Bn=class i extends wi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Si,s=Si,r=vn,a=hs,o=ni,l=kn,c=i.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Mi(),this.name="",this.source=new lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Uc).x}get height(){return this.source.getSize(Uc).y}get depth(){return this.source.getSize(Uc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ie(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Io:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case Po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Io:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case Po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Ih;Bn.DEFAULT_ANISOTROPY=1;var Oe=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],m=l[5],g=l[9],M=l[2],f=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-M)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+M)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let P=(c+1)/2,S=(m+1)/2,b=(d+1)/2,T=(h+u)/4,L=(p+M)/4,y=(g+f)/4;return P>S&&P>b?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=T/n,r=L/n):S>b?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=L/r,s=y/r),this.set(n,s,r,e),this}let C=Math.sqrt((f-g)*(f-g)+(p-M)*(p-M)+(u-h)*(u-h));return Math.abs(C)<.001&&(C=1),this.x=(f-g)/C,this.y=(p-M)/C,this.z=(u-h)/C,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},No=class extends wi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Bn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new lr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends No{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Kr=class extends Bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Uo=class extends Bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ke=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,p,u,m,g,M,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,p,u,m,g,M,f)}set(t,e,n,s,r,a,o,l,c,h,p,u,m,g,M,f){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=m,d[7]=g,d[11]=M,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Gs.setFromMatrixColumn(t,0).length(),r=1/Gs.setFromMatrixColumn(t,1).length(),a=1/Gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*p,g=o*h,M=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=m+g*c,e[5]=u-M*c,e[9]=-o*l,e[2]=M-u*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,m=l*p,g=c*h,M=c*p;e[0]=u+M*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=M+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,m=l*p,g=c*h,M=c*p;e[0]=u-M*o,e[4]=-a*p,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,m=a*p,g=o*h,M=o*p;e[0]=l*h,e[4]=g*c-m,e[8]=u*c+M,e[1]=l*p,e[5]=M*c+u,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-u*p,e[8]=g*p+m,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*p+g,e[10]=u-M*p}else if(t.order==="XZY"){let u=a*l,m=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=u*p+M,e[5]=a*h,e[9]=m*p-g,e[2]=g*p-m,e[6]=o*h,e[10]=M*p+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kp,t,jp)}lookAt(t,e,n){let s=this.elements;return Wn.subVectors(t,e),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Ki.crossVectors(n,Wn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Ki.crossVectors(n,Wn)),Ki.normalize(),Ya.crossVectors(Wn,Ki),s[0]=Ki.x,s[4]=Ya.x,s[8]=Wn.x,s[1]=Ki.y,s[5]=Ya.y,s[9]=Wn.y,s[2]=Ki.z,s[6]=Ya.z,s[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],u=n[9],m=n[13],g=n[2],M=n[6],f=n[10],d=n[14],C=n[3],P=n[7],S=n[11],b=n[15],T=s[0],L=s[4],y=s[8],A=s[12],B=s[1],V=s[5],Z=s[9],J=s[13],k=s[2],q=s[6],rt=s[10],et=s[14],gt=s[3],nt=s[7],ot=s[11],ut=s[15];return r[0]=a*T+o*B+l*k+c*gt,r[4]=a*L+o*V+l*q+c*nt,r[8]=a*y+o*Z+l*rt+c*ot,r[12]=a*A+o*J+l*et+c*ut,r[1]=h*T+p*B+u*k+m*gt,r[5]=h*L+p*V+u*q+m*nt,r[9]=h*y+p*Z+u*rt+m*ot,r[13]=h*A+p*J+u*et+m*ut,r[2]=g*T+M*B+f*k+d*gt,r[6]=g*L+M*V+f*q+d*nt,r[10]=g*y+M*Z+f*rt+d*ot,r[14]=g*A+M*J+f*et+d*ut,r[3]=C*T+P*B+S*k+b*gt,r[7]=C*L+P*V+S*q+b*nt,r[11]=C*y+P*Z+S*rt+b*ot,r[15]=C*A+P*J+S*et+b*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],m=t[14],g=t[3],M=t[7],f=t[11],d=t[15],C=l*m-c*u,P=o*m-c*p,S=o*u-l*p,b=a*m-c*h,T=a*u-l*h,L=a*p-o*h;return e*(M*C-f*P+d*S)-n*(g*C-f*b+d*T)+s*(g*P-M*b+d*L)-r*(g*S-M*T+f*L)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],m=t[11],g=t[12],M=t[13],f=t[14],d=t[15],C=e*o-n*a,P=e*l-s*a,S=e*c-r*a,b=n*l-s*o,T=n*c-r*o,L=s*c-r*l,y=h*M-p*g,A=h*f-u*g,B=h*d-m*g,V=p*f-u*M,Z=p*d-m*M,J=u*d-m*f,k=C*J-P*Z+S*V+b*B-T*A+L*y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/k;return t[0]=(o*J-l*Z+c*V)*q,t[1]=(s*Z-n*J-r*V)*q,t[2]=(M*L-f*T+d*b)*q,t[3]=(u*T-p*L-m*b)*q,t[4]=(l*B-a*J-c*A)*q,t[5]=(e*J-s*B+r*A)*q,t[6]=(f*S-g*L-d*P)*q,t[7]=(h*L-u*S+m*P)*q,t[8]=(a*Z-o*B+c*y)*q,t[9]=(n*B-e*Z-r*y)*q,t[10]=(g*T-M*S+d*C)*q,t[11]=(p*S-h*T-m*C)*q,t[12]=(o*A-a*V-l*y)*q,t[13]=(e*V-n*A+s*y)*q,t[14]=(M*P-g*b-f*C)*q,t[15]=(h*b-p*P+u*C)*q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,p=o+o,u=r*c,m=r*h,g=r*p,M=a*h,f=a*p,d=o*p,C=l*c,P=l*h,S=l*p,b=n.x,T=n.y,L=n.z;return s[0]=(1-(M+d))*b,s[1]=(m+S)*b,s[2]=(g-P)*b,s[3]=0,s[4]=(m-S)*T,s[5]=(1-(u+d))*T,s[6]=(f+C)*T,s[7]=0,s[8]=(g+P)*L,s[9]=(f-C)*L,s[10]=(1-(u+M))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Gs.set(s[0],s[1],s[2]).length(),o=Gs.set(s[4],s[5],s[6]).length(),l=Gs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ri.copy(this);let c=1/a,h=1/o,p=1/l;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=p,ri.elements[9]*=p,ri.elements[10]*=p,e.setFromRotationMatrix(ri),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=hi,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===hi)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===rr)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=hi,l=!1){let c=this.elements,h=2/(e-t),p=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===hi)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===rr)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Gs=new U,ri=new ke,Kp=new U(0,0,0),jp=new U(1,1,1),Ki=new U,Ya=new U,Wn=new U,$u=new ke,qu=new Ei,Xi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-de(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $u.makeRotationFromQuaternion(t),this.setFromRotationMatrix($u,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qu.setFromEuler(this),this.setFromQuaternion(qu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xi.DEFAULT_ORDER="XYZ";var cr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qp=0,Yu=new U,Ws=new Ei,zi=new ke,Za=new U,Fr=new U,tm=new U,em=new Ei,Zu=new U(1,0,0),Ju=new U(0,1,0),Ku=new U(0,0,1),ju={type:"added"},nm={type:"removed"},Xs={type:"childadded",child:null},Fc={type:"childremoved",child:null},_n=class i extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new Xi,n=new Ei,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new he}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.premultiply(Ws),this}rotateX(t){return this.rotateOnAxis(Zu,t)}rotateY(t){return this.rotateOnAxis(Ju,t)}rotateZ(t){return this.rotateOnAxis(Ku,t)}translateOnAxis(t,e){return Yu.copy(t).applyQuaternion(this.quaternion),this.position.add(Yu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zu,t)}translateY(t){return this.translateOnAxis(Ju,t)}translateZ(t){return this.translateOnAxis(Ku,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Za.copy(t):Za.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Fr,Za,this.up):zi.lookAt(Za,Fr,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(zi),this.quaternion.premultiply(Ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ju),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nm),Fc.child=t,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ju),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,t,tm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,em,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),p=a(t.shapes),u=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_n.DEFAULT_UP=new U(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ui=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},im={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let f=e.getJointPose(M,n),d=this._getHandJoint(c,M);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(im)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function Oc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ae=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=n,Te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Te.workingColorSpace){if(t=kh(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Oc(a,r,t+1/3),this.g=Oc(a,r,t),this.b=Oc(a,r,t-1/3)}return Te.colorSpaceToWorking(this,s),this}setStyle(t,e=$n){function n(r){r!==void 0&&parseFloat(r)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ie("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$n){let n=of[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$n){return Te.workingToColorSpace(En.copy(this),t),Math.round(de(En.r*255,0,255))*65536+Math.round(de(En.g*255,0,255))*256+Math.round(de(En.b*255,0,255))}getHexString(t=$n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.workingToColorSpace(En.copy(this),e);let n=En.r,s=En.g,r=En.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Te.workingColorSpace){return Te.workingToColorSpace(En.copy(this),e),t.r=En.r,t.g=En.g,t.b=En.b,t}getStyle(t=$n){Te.workingToColorSpace(En.copy(this),t);let e=En.r,n=En.g,s=En.b;return t!==$n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(Ja);let n=Gr(ji.h,Ja.h,e),s=Gr(ji.s,Ja.s,e),r=Gr(ji.l,Ja.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new ae;ae.NAMES=of;var jr=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ai=new U,ki=new U,Bc=new U,Vi=new U,$s=new U,qs=new U,Qu=new U,zc=new U,kc=new U,Vc=new U,Hc=new Oe,Gc=new Oe,Wc=new Oe,ns=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ai.subVectors(t,e),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ai.subVectors(s,e),ki.subVectors(n,e),Bc.subVectors(t,e);let a=ai.dot(ai),o=ai.dot(ki),l=ai.dot(Bc),c=ki.dot(ki),h=ki.dot(Bc),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,m=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vi.x),l.addScaledVector(a,Vi.y),l.addScaledVector(o,Vi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Hc.setScalar(0),Gc.setScalar(0),Wc.setScalar(0),Hc.fromBufferAttribute(t,e),Gc.fromBufferAttribute(t,n),Wc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Hc,r.x),a.addScaledVector(Gc,r.y),a.addScaledVector(Wc,r.z),a}static isFrontFacing(t,e,n,s){return ai.subVectors(n,e),ki.subVectors(t,e),ai.cross(ki).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ai.cross(ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;$s.subVectors(s,n),qs.subVectors(r,n),zc.subVectors(t,n);let l=$s.dot(zc),c=qs.dot(zc);if(l<=0&&c<=0)return e.copy(n);kc.subVectors(t,s);let h=$s.dot(kc),p=qs.dot(kc);if(h>=0&&p<=h)return e.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector($s,a);Vc.subVectors(t,r);let m=$s.dot(Vc),g=qs.dot(Vc);if(g>=0&&m<=g)return e.copy(r);let M=m*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(qs,o);let f=h*g-m*p;if(f<=0&&p-h>=0&&m-g>=0)return Qu.subVectors(r,s),o=(p-h)/(p-h+(m-g)),e.copy(s).addScaledVector(Qu,o);let d=1/(f+M+u);return a=M*d,o=u*d,e.copy(n).addScaledVector($s,a).addScaledVector(qs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,oi):oi.fromBufferAttribute(r,a),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ka.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ka.copy(n.boundingBox)),Ka.applyMatrix4(t.matrixWorld),this.union(Ka)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Or),ja.subVectors(this.max,Or),Ys.subVectors(t.a,Or),Zs.subVectors(t.b,Or),Js.subVectors(t.c,Or),Qi.subVectors(Zs,Ys),ts.subVectors(Js,Zs),_s.subVectors(Ys,Js);let e=[0,-Qi.z,Qi.y,0,-ts.z,ts.y,0,-_s.z,_s.y,Qi.z,0,-Qi.x,ts.z,0,-ts.x,_s.z,0,-_s.x,-Qi.y,Qi.x,0,-ts.y,ts.x,0,-_s.y,_s.x,0];return!Xc(e,Ys,Zs,Js,ja)||(e=[1,0,0,0,1,0,0,0,1],!Xc(e,Ys,Zs,Js,ja))?!1:(Qa.crossVectors(Qi,ts),e=[Qa.x,Qa.y,Qa.z],Xc(e,Ys,Zs,Js,ja))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Hi=[new U,new U,new U,new U,new U,new U,new U,new U],oi=new U,Ka=new qn,Ys=new U,Zs=new U,Js=new U,Qi=new U,ts=new U,_s=new U,Or=new U,ja=new U,Qa=new U,xs=new U;function Xc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xs.fromArray(i,r);let o=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),l=t.dot(xs),c=e.dot(xs),h=n.dot(xs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var rn=new U,to=new Pt,sm=0,Ge=class extends wi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bh,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)to.fromBufferAttribute(this,e),to.applyMatrix3(t),this.setXY(e,to.x,to.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Qr=class extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ta=class extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ln=class extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},rm=new qn,Br=new U,$c=new U,ei=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):rm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Br.subVectors(t,this.center);let e=Br.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Br,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Br.copy(t.center).add($c)),this.expandByPoint(Br.copy(t.center).sub($c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},am=0,ti=new ke,qc=new _n,Ks=new U,Xn=new qn,zr=new qn,mn=new U,nn=class i extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ip(t)?ta:Qr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,n){return ti.makeTranslation(t,e,n),this.applyMatrix4(ti),this}scale(t,e,n){return ti.makeScale(t,e,n),this.applyMatrix4(ti),this}lookAt(t){return qc.lookAt(t),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ln(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];zr.setFromBufferAttribute(o),this.morphTargetsRelative?(mn.addVectors(Xn.min,zr.min),Xn.expandByPoint(mn),mn.addVectors(Xn.max,zr.max),Xn.expandByPoint(mn)):(Xn.expandByPoint(zr.min),Xn.expandByPoint(zr.max))}Xn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)mn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(mn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)mn.fromBufferAttribute(o,c),l&&(Ks.fromBufferAttribute(t,c),mn.add(Ks)),s=Math.max(s,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ge(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new U,l[y]=new U;let c=new U,h=new U,p=new U,u=new Pt,m=new Pt,g=new Pt,M=new U,f=new U;function d(y,A,B){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,A),p.fromBufferAttribute(n,B),u.fromBufferAttribute(r,y),m.fromBufferAttribute(r,A),g.fromBufferAttribute(r,B),h.sub(c),p.sub(c),m.sub(u),g.sub(u);let V=1/(m.x*g.y-g.x*m.y);isFinite(V)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(V),f.copy(p).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(V),o[y].add(M),o[A].add(M),o[B].add(M),l[y].add(f),l[A].add(f),l[B].add(f))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let y=0,A=C.length;y<A;++y){let B=C[y],V=B.start,Z=B.count;for(let J=V,k=V+Z;J<k;J+=3)d(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let P=new U,S=new U,b=new U,T=new U;function L(y){b.fromBufferAttribute(s,y),T.copy(b);let A=o[y];P.copy(A),P.sub(b.multiplyScalar(b.dot(A))).normalize(),S.crossVectors(T,A);let V=S.dot(l[y])<0?-1:1;a.setXYZW(y,P.x,P.y,P.z,V)}for(let y=0,A=C.length;y<A;++y){let B=C[y],V=B.start,Z=B.count;for(let J=V,k=V+Z;J<k;J+=3)L(t.getX(J+0)),L(t.getX(J+1)),L(t.getX(J+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,p=new U;if(t)for(let u=0,m=t.count;u<m;u+=3){let g=t.getX(u+0),M=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,f),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)mn.fromBufferAttribute(t,e),mn.normalize(),t.setXYZ(e,mn.x,mn.y,mn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),m=0,g=0;for(let M=0,f=l.length;M<f;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*h;for(let d=0;d<h;d++)u[g++]=c[m++]}return new Ge(u,h,p)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let m=c[p];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let u=0,m=p.length;u<m;u++)h.push(p[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Bh,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Pn=new U,di=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Pn.fromBufferAttribute(this,e),Pn.applyMatrix4(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pn.fromBufferAttribute(this,e),Pn.applyNormalMatrix(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pn.fromBufferAttribute(this,e),Pn.transformDirection(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ci(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ci(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ci(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ci(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Jr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Jr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Yc=new U,om=new U,lm=new he,li=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Yc.subVectors(n,e).cross(om.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Yc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||lm.getNormalMatrix(t),s=this.coplanarPoint(Yc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},cm=0,Ti=class extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=xr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sh,this.blendDst=Mh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ie(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new li().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Gi=new U,Zc=new U,eo=new U,no=new U,bs=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gi.copy(this.origin).addScaledVector(this.direction,e),Gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Zc.copy(t).add(e).multiplyScalar(.5),eo.copy(e).sub(t).normalize(),no.copy(this.origin).sub(Zc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(eo),o=no.dot(this.direction),l=-no.dot(eo),c=no.lengthSq(),h=Math.abs(1-a*a),p,u,m,g;if(h>0)if(p=a*l-o,u=a*o-l,g=r*h,p>=0)if(u>=-g)if(u<=g){let M=1/h;p*=M,u*=M,m=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Zc).addScaledVector(eo,u),m}intersectSphere(t,e){if(t.radius<0)return null;Gi.subVectors(t.center,this.origin);let n=Gi.dot(this.direction),s=Gi.dot(Gi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-a.x,u=t.y-a.y,m=t.z-a.z,g=e.x-a.x,M=e.y-a.y,f=e.z-a.z,d=n.x-a.x,C=n.y-a.y,P=n.z-a.z,S=Math.abs(l),b=Math.abs(c),T=Math.abs(h),L,y,A,B,V,Z,J,k,q,rt,et,gt;if(S>=b&&S>=T?(A=l,Z=p,q=g,gt=d,l>=0?(L=c,y=h,B=u,V=m,J=M,k=f,rt=C,et=P):(L=h,y=c,B=m,V=u,J=f,k=M,rt=P,et=C)):b>=T?(A=c,Z=u,q=M,gt=C,c>=0?(L=h,y=l,B=m,V=p,J=f,k=g,rt=P,et=d):(L=l,y=h,B=p,V=m,J=g,k=f,rt=d,et=P)):(A=h,Z=m,q=f,gt=P,h>=0?(L=l,y=c,B=p,V=u,J=g,k=M,rt=d,et=C):(L=c,y=l,B=u,V=p,J=M,k=g,rt=C,et=d)),A===0)return null;let nt=L/A,ot=y/A,ut=1/A,Zt=B-nt*Z,Vt=V-ot*Z,Ce=J-nt*q,ve=k-ot*q,Me=rt-nt*gt,j=et-ot*gt,lt=Me*ve-j*Ce,Ct=Zt*j-Vt*Me,te=Ce*Vt-ve*Zt;if(s){if(lt<0||Ct<0||te<0)return null}else if((lt<0||Ct<0||te<0)&&(lt>0||Ct>0||te>0))return null;let At=lt+Ct+te;if(At===0)return null;let Xt=ut*(lt*Z+Ct*q+te*gt);return(At>0?Xt<0:Xt>0)?null:this.at(Xt/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ea=class extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},td=new ke,vs=new bs,io=new ei,ed=new U,so=new U,ro=new U,ao=new U,Jc=new U,oo=new U,nd=new U,lo=new U,An=class extends _n{constructor(t=new nn,e=new ea){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(Jc.fromBufferAttribute(p,t),a?oo.addScaledVector(Jc,h):oo.addScaledVector(Jc.sub(e),h))}e.add(oo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),vs.copy(t.ray).recast(t.near),!(io.containsPoint(vs.origin)===!1&&(vs.intersectSphere(io,ed)===null||vs.origin.distanceToSquared(ed)>(t.far-t.near)**2))&&(td.copy(r).invert(),vs.copy(t.ray).applyMatrix4(td),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let f=u[g],d=a[f.materialIndex],C=Math.max(f.start,m.start),P=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let S=C,b=P;S<b;S+=3){let T=o.getX(S),L=o.getX(S+1),y=o.getX(S+2);s=co(this,d,t,n,c,h,p,T,L,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let f=g,d=M;f<d;f+=3){let C=o.getX(f),P=o.getX(f+1),S=o.getX(f+2);s=co(this,a,t,n,c,h,p,C,P,S),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let f=u[g],d=a[f.materialIndex],C=Math.max(f.start,m.start),P=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let S=C,b=P;S<b;S+=3){let T=S,L=S+1,y=S+2;s=co(this,d,t,n,c,h,p,T,L,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let f=g,d=M;f<d;f+=3){let C=f,P=f+1,S=f+2;s=co(this,a,t,n,c,h,p,C,P,S),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function hm(i,t,e,n,s,r,a,o){let l;if(t.side===Ln?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ls,o),l===null)return null;lo.copy(o),lo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(lo);return c<e.near||c>e.far?null:{distance:c,point:lo.clone(),object:i}}function co(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,so),i.getVertexPosition(l,ro),i.getVertexPosition(c,ao);let h=hm(i,t,e,n,so,ro,ao,nd);if(h){let p=new U;ns.getBarycoord(nd,so,ro,ao,p),s&&(h.uv=ns.getInterpolatedAttribute(s,o,l,c,p,new Pt)),r&&(h.uv1=ns.getInterpolatedAttribute(r,o,l,c,p,new Pt)),a&&(h.normal=ns.getInterpolatedAttribute(a,o,l,c,p,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};ns.getNormal(so,ro,ao,u.normal),h.face=u,h.barycoord=p}return h}var Oo=class extends Bn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=gn,h=gn,p,u){super(null,a,o,l,c,h,s,r,p,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ys=new ei,um=new Pt(.5,.5),ho=new U,ur=class{constructor(t=new li,e=new li,n=new li,s=new li,r=new li,a=new li){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hi,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],u=r[6],m=r[7],g=r[8],M=r[9],f=r[10],d=r[11],C=r[12],P=r[13],S=r[14],b=r[15];if(s[0].setComponents(c-a,m-h,d-g,b-C).normalize(),s[1].setComponents(c+a,m+h,d+g,b+C).normalize(),s[2].setComponents(c+o,m+p,d+M,b+P).normalize(),s[3].setComponents(c-o,m-p,d-M,b-P).normalize(),n)s[4].setComponents(l,u,f,S).normalize(),s[5].setComponents(c-l,m-u,d-f,b-S).normalize();else if(s[4].setComponents(c-l,m-u,d-f,b-S).normalize(),e===hi)s[5].setComponents(c+l,m+u,d+f,b+S).normalize();else if(e===rr)s[5].setComponents(l,u,f,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);let e=um.distanceTo(t.center);return ys.radius=.7071067811865476+e,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ho.x=s.normal.x>0?t.max.x:t.min.x,ho.y=s.normal.y>0?t.max.y:t.min.y,ho.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ws=class extends Ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Bo=new U,zo=new U,id=new ke,kr=new bs,uo=new ei,Kc=new U,sd=new U,ko=class extends _n{constructor(t=new nn,e=new ws){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Bo.fromBufferAttribute(e,s-1),zo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Bo.distanceTo(zo);t.setAttribute("lineDistance",new ln(n,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(s),uo.radius+=r,t.ray.intersectsSphere(uo)===!1)return;id.copy(s).invert(),kr.copy(t.ray).applyMatrix4(id);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=m,f=g-1;M<f;M+=c){let d=h.getX(M),C=h.getX(M+1),P=fo(this,t,kr,l,d,C,M);P&&e.push(P)}if(this.isLineLoop){let M=h.getX(g-1),f=h.getX(m),d=fo(this,t,kr,l,M,f,g-1);d&&e.push(d)}}else{let m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=m,f=g-1;M<f;M+=c){let d=fo(this,t,kr,l,M,M+1,M);d&&e.push(d)}if(this.isLineLoop){let M=fo(this,t,kr,l,g-1,m,g-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function fo(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Bo.fromBufferAttribute(o,s),zo.fromBufferAttribute(o,r),e.distanceSqToSegment(Bo,zo,Kc,sd)>n)return;Kc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Kc);if(!(c<t.near||c>t.far))return{distance:c,point:sd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var na=class extends ko{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Vo=class extends Ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rd=new ke,lh=new bs,po=new ei,mo=new U,Es=class extends _n{constructor(t=new nn,e=new Vo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(s),po.radius+=r,t.ray.intersectsSphere(po)===!1)return;rd.copy(s).invert(),lh.copy(t.ray).applyMatrix4(rd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=u,M=m;g<M;g++){let f=c.getX(g);mo.fromBufferAttribute(p,f),ad(mo,f,l,s,t,e,this)}}else{let u=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let g=u,M=m;g<M;g++)mo.fromBufferAttribute(p,g),ad(mo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ad(i,t,e,n,s,r,a){let o=lh.distanceSqToPoint(i);if(o<e){let l=new U;lh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ia=class extends Bn{constructor(t=[],e=cs,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var is=class extends Bn{constructor(t,e,n=pi,s,r,a,o=gn,l=gn,c,h=bi,p=1){if(h!==bi&&h!==us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:p};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ho=class extends is{constructor(t,e=pi,n=cs,s,r,a=gn,o=gn,l,c=bi){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},sa=class extends Bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},dr=class i extends nn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],u=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(h,3)),this.setAttribute("uv",new ln(p,2));function g(M,f,d,C,P,S,b,T,L,y,A){let B=S/L,V=b/y,Z=S/2,J=b/2,k=T/2,q=L+1,rt=y+1,et=0,gt=0,nt=new U;for(let ot=0;ot<rt;ot++){let ut=ot*V-J;for(let Zt=0;Zt<q;Zt++){let Vt=Zt*B-Z;nt[M]=Vt*C,nt[f]=ut*P,nt[d]=k,c.push(nt.x,nt.y,nt.z),nt[M]=0,nt[f]=0,nt[d]=T>0?1:-1,h.push(nt.x,nt.y,nt.z),p.push(Zt/L),p.push(1-ot/y),et+=1}}for(let ot=0;ot<y;ot++)for(let ut=0;ut<L;ut++){let Zt=u+ut+q*ot,Vt=u+ut+q*(ot+1),Ce=u+(ut+1)+q*(ot+1),ve=u+(ut+1)+q*ot;l.push(Zt,Vt,ve),l.push(Vt,Ce,ve),gt+=6}o.addGroup(m,gt,A),m+=gt,u+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ie("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,m=(a-h)/u;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Pt:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],a=[],o=new U,l=new ke;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(de(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(de(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},fr=class extends Yn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*h-m*p+this.aX,c=u*p+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Go=class extends fr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Hh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+p)+(l-o)/p;u*=h,m*=h,s(a,o,u,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var od=new U,ld=new U,jc=new Hh,Qc=new Hh,th=new Hh,Wo=class extends Yn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ld.subVectors(s[0],s[1]).add(s[0]),c=ld);let p=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(od.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=od),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),m),M=Math.pow(p.distanceToSquared(u),m),f=Math.pow(u.distanceToSquared(h),m);M<1e-4&&(M=1),g<1e-4&&(g=M),f<1e-4&&(f=M),jc.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,g,M,f),Qc.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,g,M,f),th.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,g,M,f)}else this.curveType==="catmullrom"&&(jc.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),Qc.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),th.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return n.set(jc.calc(l),Qc.calc(l),th.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function cd(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function dm(i,t){let e=1-i;return e*e*t}function fm(i,t){return 2*(1-i)*i*t}function pm(i,t){return i*i*t}function Wr(i,t,e,n){return dm(i,t)+fm(i,e)+pm(i,n)}function mm(i,t){let e=1-i;return e*e*e*t}function gm(i,t){let e=1-i;return 3*e*e*i*t}function _m(i,t){return 3*(1-i)*i*i*t}function xm(i,t){return i*i*i*t}function Xr(i,t,e,n,s){return mm(i,t)+gm(i,e)+_m(i,n)+xm(i,s)}var ra=class extends Yn{constructor(t=new Pt,e=new Pt,n=new Pt,s=new Pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Pt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xr(t,s.x,r.x,a.x,o.x),Xr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xo=class extends Yn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xr(t,s.x,r.x,a.x,o.x),Xr(t,s.y,r.y,a.y,o.y),Xr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},aa=class extends Yn{constructor(t=new Pt,e=new Pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$o=class extends Yn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oa=class extends Yn{constructor(t=new Pt,e=new Pt,n=new Pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Pt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Wr(t,s.x,r.x,a.x),Wr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qo=class extends Yn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Wr(t,s.x,r.x,a.x),Wr(t,s.y,r.y,a.y),Wr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},la=class extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Pt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(cd(o,l.x,c.x,h.x,p.x),cd(o,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Pt().fromArray(s))}return this}},ch=Object.freeze({__proto__:null,ArcCurve:Go,CatmullRomCurve3:Wo,CubicBezierCurve:ra,CubicBezierCurve3:Xo,EllipseCurve:fr,LineCurve:aa,LineCurve3:$o,QuadraticBezierCurve:oa,QuadraticBezierCurve3:qo,SplineCurve:la}),Yo=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ch[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ch[s.type]().fromJSON(s))}return this}},Ts=class extends Yo{constructor(t){super(),this.type="Path",this.currentPoint=new Pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new aa(this.currentPoint.clone(),new Pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new oa(this.currentPoint.clone(),new Pt(t,e),new Pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new ra(this.currentPoint.clone(),new Pt(t,e),new Pt(n,s),new Pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new la(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new fr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},pr=class extends Ts{constructor(t){super(t),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ts().fromJSON(s))}return this}};function vm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=lf(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=wm(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,p=l;for(let u=e;u<s;u+=e){let m=i[u],g=i[u+1];m<o&&(o=m),g<l&&(l=g),m>h&&(h=m),g>p&&(p=g)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return ca(r,a,e,o,l,c,0),a}function lf(i,t,e,n,s){let r;if(s===Um(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=hd(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=hd(a/n|0,i[a],i[a+1],r);return r&&mr(r,r.next)&&(ua(r),r=r.next),r}function As(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(mr(e,e.next)||je(e.prev,e,e.next)===0)){if(ua(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ca(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Rm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Sm(i,n,s,r):ym(i)){t.push(l.i,i.i,c.i),ua(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Mm(As(i),t),ca(i,t,e,n,s,r,2)):a===2&&bm(i,t,e,n,s,r):ca(As(i),t,e,n,s,r,1);break}}}function ym(i){let t=i.prev,e=i,n=i.next;if(je(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),p=Math.min(o,l,c),u=Math.max(s,r,a),m=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=p&&g.y<=m&&Vr(s,o,r,l,a,c,g.x,g.y)&&je(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sm(i,t,e,n){let s=i.prev,r=i,a=i.next;if(je(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,p=r.y,u=a.y,m=Math.min(o,l,c),g=Math.min(h,p,u),M=Math.max(o,l,c),f=Math.max(h,p,u),d=hh(m,g,t,e,n),C=hh(M,f,t,e,n),P=i.prevZ,S=i.nextZ;for(;P&&P.z>=d&&S&&S.z<=C;){if(P.x>=m&&P.x<=M&&P.y>=g&&P.y<=f&&P!==s&&P!==a&&Vr(o,h,l,p,c,u,P.x,P.y)&&je(P.prev,P,P.next)>=0||(P=P.prevZ,S.x>=m&&S.x<=M&&S.y>=g&&S.y<=f&&S!==s&&S!==a&&Vr(o,h,l,p,c,u,S.x,S.y)&&je(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;P&&P.z>=d;){if(P.x>=m&&P.x<=M&&P.y>=g&&P.y<=f&&P!==s&&P!==a&&Vr(o,h,l,p,c,u,P.x,P.y)&&je(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;S&&S.z<=C;){if(S.x>=m&&S.x<=M&&S.y>=g&&S.y<=f&&S!==s&&S!==a&&Vr(o,h,l,p,c,u,S.x,S.y)&&je(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Mm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!mr(n,s)&&hf(n,e,e.next,s)&&ha(n,s)&&ha(s,n)&&(t.push(n.i,e.i,s.i),ua(e),ua(e.next),e=i=s),e=e.next}while(e!==i);return As(e)}function bm(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Lm(a,o)){let l=uf(a,o);a=As(a,a.next),l=As(l,l.next),ca(a,t,e,n,s,r,0),ca(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function wm(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=lf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Pm(c))}s.sort(Em);for(let r=0;r<s.length;r++)e=Tm(s[r],e);return e}function Em(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Tm(i,t){let e=Am(i,t);if(!e)return t;let n=uf(e,i);return As(n,n.next),As(e,e.next)}function Am(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(mr(i,e))return e;do{if(mr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&cf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);ha(e,i)&&(p<h||p===h&&(e.x>a.x||e.x===a.x&&Cm(a,e)))&&(a=e,h=p)}e=e.next}while(e!==o);return a}function Cm(i,t){return je(i.prev,i,t.prev)<0&&je(t.next,i,i.next)<0}function Rm(i,t,e,n){let s=i;do s.z===0&&(s.z=hh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Im(s)}function Im(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function hh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Pm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function cf(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Vr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&cf(i,t,e,n,s,r,a,o)}function Lm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Dm(i,t)&&(ha(i,t)&&ha(t,i)&&Nm(i,t)&&(je(i.prev,i,t.prev)||je(i,t.prev,t))||mr(i,t)&&je(i.prev,i,i.next)>0&&je(t.prev,t,t.next)>0)}function je(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function mr(i,t){return i.x===t.x&&i.y===t.y}function hf(i,t,e,n){let s=_o(je(i,t,e)),r=_o(je(i,t,n)),a=_o(je(e,n,i)),o=_o(je(e,n,t));return!!(s!==r&&a!==o||s===0&&go(i,e,t)||r===0&&go(i,n,t)||a===0&&go(e,i,n)||o===0&&go(e,t,n))}function go(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _o(i){return i>0?1:i<0?-1:0}function Dm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&hf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ha(i,t){return je(i.prev,i,i.next)<0?je(i,t,i.next)>=0&&je(i,i.prev,t)>=0:je(i,t,i.prev)<0||je(i,i.next,t)<0}function Nm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function uf(i,t){let e=uh(i.i,i.x,i.y),n=uh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hd(i,t,e,n){let s=uh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ua(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function uh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Um(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var dh=class{static triangulate(t,e,n=2){return vm(t,e,n)}},Ss=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ud(t),dd(n,t);let a=t.length;e.forEach(ud);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,dd(n,e[l]);let o=dh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ud(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function dd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var da=class i extends nn{constructor(t=new pr([new Pt(.5,.5),new Pt(-.5,.5),new Pt(-.5,-.5),new Pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ln(s,3)),this.setAttribute("uv",new ln(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,C=e.UVGenerator!==void 0?e.UVGenerator:Fm,P,S=!1,b,T,L,y;if(d){P=d.getSpacedPoints(h),S=!0,u=!1;let D=d.isCatmullRomCurve3?d.closed:!1;b=d.computeFrenetFrames(h,D),T=new U,L=new U,y=new U}u||(f=0,m=0,g=0,M=0);let A=o.extractPoints(c),B=A.shape,V=A.holes;if(!Ss.isClockWise(B)){B=B.reverse();for(let D=0,mt=V.length;D<mt;D++){let xt=V[D];Ss.isClockWise(xt)&&(V[D]=xt.reverse())}}function J(D){let xt=10000000000000001e-36,_t=D[0];for(let Mt=1;Mt<=D.length;Mt++){let Qt=Mt%D.length,jt=D[Qt],Gt=jt.x-_t.x,le=jt.y-_t.y,N=Gt*Gt+le*le,Ie=Math.max(Math.abs(jt.x),Math.abs(jt.y),Math.abs(_t.x),Math.abs(_t.y)),me=xt*Ie*Ie;if(N<=me){D.splice(Qt,1),Mt--;continue}_t=jt}}J(B),V.forEach(J);let k=V.length,q=B;for(let D=0;D<k;D++){let mt=V[D];B=B.concat(mt)}function rt(D,mt,xt){return mt||re("ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(mt,xt)}let et=B.length;function gt(D,mt,xt){let _t,Mt,Qt,jt=D.x-mt.x,Gt=D.y-mt.y,le=xt.x-D.x,N=xt.y-D.y,Ie=jt*jt+Gt*Gt,me=jt*N-Gt*le;if(Math.abs(me)>Number.EPSILON){let E=Math.sqrt(Ie),_=Math.sqrt(le*le+N*N),W=mt.x-Gt/E,Y=mt.y+jt/E,tt=xt.x-N/_,vt=xt.y+le/_,Et=((tt-W)*N-(vt-Y)*le)/(jt*N-Gt*le);_t=W+jt*Et-D.x,Mt=Y+Gt*Et-D.y;let st=_t*_t+Mt*Mt;if(st<=2)return new Pt(_t,Mt);Qt=Math.sqrt(st/2)}else{let E=!1;jt>Number.EPSILON?le>Number.EPSILON&&(E=!0):jt<-Number.EPSILON?le<-Number.EPSILON&&(E=!0):Math.sign(Gt)===Math.sign(N)&&(E=!0),E?(_t=-Gt,Mt=jt,Qt=Math.sqrt(Ie)):(_t=jt,Mt=Gt,Qt=Math.sqrt(Ie/2))}return new Pt(_t/Qt,Mt/Qt)}let nt=[];for(let D=0,mt=q.length,xt=mt-1,_t=D+1;D<mt;D++,xt++,_t++)xt===mt&&(xt=0),_t===mt&&(_t=0),nt[D]=gt(q[D],q[xt],q[_t]);let ot=[],ut,Zt=nt.concat();for(let D=0,mt=k;D<mt;D++){let xt=V[D];ut=[];for(let _t=0,Mt=xt.length,Qt=Mt-1,jt=_t+1;_t<Mt;_t++,Qt++,jt++)Qt===Mt&&(Qt=0),jt===Mt&&(jt=0),ut[_t]=gt(xt[_t],xt[Qt],xt[jt]);ot.push(ut),Zt=Zt.concat(ut)}let Vt;if(f===0)Vt=Ss.triangulateShape(q,V);else{let D=[],mt=[];for(let xt=0;xt<f;xt++){let _t=xt/f,Mt=m*Math.cos(_t*Math.PI/2),Qt=g*Math.sin(_t*Math.PI/2)+M;for(let jt=0,Gt=q.length;jt<Gt;jt++){let le=rt(q[jt],nt[jt],Qt);Ct(le.x,le.y,-Mt),_t===0&&D.push(le)}for(let jt=0,Gt=k;jt<Gt;jt++){let le=V[jt];ut=ot[jt];let N=[];for(let Ie=0,me=le.length;Ie<me;Ie++){let E=rt(le[Ie],ut[Ie],Qt);Ct(E.x,E.y,-Mt),_t===0&&N.push(E)}_t===0&&mt.push(N)}}Vt=Ss.triangulateShape(D,mt)}let Ce=Vt.length,ve=g+M;for(let D=0;D<et;D++){let mt=u?rt(B[D],Zt[D],ve):B[D];S?(L.copy(b.normals[0]).multiplyScalar(mt.x),T.copy(b.binormals[0]).multiplyScalar(mt.y),y.copy(P[0]).add(L).add(T),Ct(y.x,y.y,y.z)):Ct(mt.x,mt.y,0)}for(let D=1;D<=h;D++)for(let mt=0;mt<et;mt++){let xt=u?rt(B[mt],Zt[mt],ve):B[mt];S?(L.copy(b.normals[D]).multiplyScalar(xt.x),T.copy(b.binormals[D]).multiplyScalar(xt.y),y.copy(P[D]).add(L).add(T),Ct(y.x,y.y,y.z)):Ct(xt.x,xt.y,p/h*D)}for(let D=f-1;D>=0;D--){let mt=D/f,xt=m*Math.cos(mt*Math.PI/2),_t=g*Math.sin(mt*Math.PI/2)+M;for(let Mt=0,Qt=q.length;Mt<Qt;Mt++){let jt=rt(q[Mt],nt[Mt],_t);Ct(jt.x,jt.y,p+xt)}for(let Mt=0,Qt=V.length;Mt<Qt;Mt++){let jt=V[Mt];ut=ot[Mt];for(let Gt=0,le=jt.length;Gt<le;Gt++){let N=rt(jt[Gt],ut[Gt],_t);S?Ct(N.x,N.y+P[h-1].y,P[h-1].x+xt):Ct(N.x,N.y,p+xt)}}}Me(),j();function Me(){let D=s.length/3;if(u){let mt=0,xt=et*mt;for(let _t=0;_t<Ce;_t++){let Mt=Vt[_t];te(Mt[2]+xt,Mt[1]+xt,Mt[0]+xt)}mt=h+f*2,xt=et*mt;for(let _t=0;_t<Ce;_t++){let Mt=Vt[_t];te(Mt[0]+xt,Mt[1]+xt,Mt[2]+xt)}}else{for(let mt=0;mt<Ce;mt++){let xt=Vt[mt];te(xt[2],xt[1],xt[0])}for(let mt=0;mt<Ce;mt++){let xt=Vt[mt];te(xt[0]+et*h,xt[1]+et*h,xt[2]+et*h)}}n.addGroup(D,s.length/3-D,0)}function j(){let D=s.length/3,mt=0;lt(q,mt),mt+=q.length;for(let xt=0,_t=V.length;xt<_t;xt++){let Mt=V[xt];lt(Mt,mt),mt+=Mt.length}n.addGroup(D,s.length/3-D,1)}function lt(D,mt){let xt=D.length;for(;--xt>=0;){let _t=xt,Mt=xt-1;Mt<0&&(Mt=D.length-1);for(let Qt=0,jt=h+f*2;Qt<jt;Qt++){let Gt=et*Qt,le=et*(Qt+1),N=mt+_t+Gt,Ie=mt+Mt+Gt,me=mt+Mt+le,E=mt+_t+le;At(N,Ie,me,E)}}}function Ct(D,mt,xt){l.push(D),l.push(mt),l.push(xt)}function te(D,mt,xt){Xt(D),Xt(mt),Xt(xt);let _t=s.length/3,Mt=C.generateTopUV(n,s,_t-3,_t-2,_t-1);Re(Mt[0]),Re(Mt[1]),Re(Mt[2])}function At(D,mt,xt,_t){Xt(D),Xt(mt),Xt(_t),Xt(mt),Xt(xt),Xt(_t);let Mt=s.length/3,Qt=C.generateSideWallUV(n,s,Mt-6,Mt-3,Mt-2,Mt-1);Re(Qt[0]),Re(Qt[1]),Re(Qt[3]),Re(Qt[1]),Re(Qt[2]),Re(Qt[3])}function Xt(D){s.push(l[D*3+0]),s.push(l[D*3+1]),s.push(l[D*3+2])}function Re(D){r.push(D.x),r.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Om(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ch[s.type]().fromJSON(s)),new i(n,t.options)}},Fm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Pt(r,a),new Pt(o,l),new Pt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],u=t[s*3],m=t[s*3+1],g=t[s*3+2],M=t[r*3],f=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Pt(a,1-l),new Pt(c,1-p),new Pt(u,1-g),new Pt(M,1-d)]:[new Pt(o,1-l),new Pt(h,1-p),new Pt(m,1-g),new Pt(f,1-d)]}};function Om(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var fa=class i extends nn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=t/o,u=e/l,m=[],g=[],M=[],f=[];for(let d=0;d<h;d++){let C=d*u-a;for(let P=0;P<c;P++){let S=P*p-r;g.push(S,-C,0),M.push(0,0,1),f.push(P/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let C=0;C<o;C++){let P=C+c*d,S=C+c*(d+1),b=C+1+c*(d+1),T=C+1+c*d;m.push(P,S,T),m.push(S,b,T)}this.setIndex(m),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(M,3)),this.setAttribute("uv",new ln(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var pa=class extends nn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new U,r=new U;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let p=l[c],u=p.start,m=p.count;for(let g=u,M=u+m;g<M;g+=3)for(let f=0;f<3;f++){let d=o.getX(g+f),C=o.getX(g+(f+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,C),fd(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,p=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,p),fd(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new ln(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function fd(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Is(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(pd(s))s.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(pd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Cn(i){let t={};for(let e=0;e<i.length;e++){let n=Is(i[e]);for(let s in n)t[s]=n[s]}return t}function pd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Bm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}var Da={clone:Is,merge:Cn},zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zm,this.fragmentShader=km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Bm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ae().setHex(s.value);break;case"v2":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new he().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ke().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Zo=class extends xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ma=class extends Ti{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=ul,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Jo=class extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ko=class extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function js(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function eh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ss=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},jo=class extends ss{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rh,endingEnd:rh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ah:r=t,o=2*e-n;break;case oh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ah:a=t,l=2*n-e;break;case oh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),M=g*g,f=M*g,d=-u*f+2*u*M-u*g,C=(1+u)*f+(-1.5-2*u)*M+(-.5+u)*g+1,P=(-1-m)*f+(1.5+m)*M+.5*g,S=m*f-m*M;for(let b=0;b!==o;++b)r[b]=d*a[h+b]+C*a[c+b]+P*a[l+b]+S*a[p+b];return r}},Qo=class extends ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),p=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*p+a[l+u]*h;return r}},tl=class extends ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},el=class extends ss{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(n-e)/(s-e),M=1-g;for(let f=0;f!==o;++f)r[f]=a[c+f]*M+a[l+f]*g;return r}let u=o*2,m=t-1;for(let g=0;g!==o;++g){let M=a[c+g],f=a[l+g],d=m*u+g*2,C=p[d],P=p[d+1],S=t*u+g*2,b=h[S],T=h[S+1],L=Hm(n,e,C,b,s);r[g]=df(L,M,P,T,f)}return r}};function df(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Vm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Hm(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=df(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Vm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Zn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=js(e,this.TimeBufferType),this.values=js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:js(t.times,Array),values:js(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),eh(t.settings)&&(n.settings={inTangents:js(t.settings.inTangents,Array),outTangents:js(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new el(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case $r:e=this.InterpolantFactoryMethodDiscrete;break;case Lo:e=this.InterpolantFactoryMethodLinear;break;case So:e=this.InterpolantFactoryMethodSmooth;break;case sh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ie("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return Lo;case this.InterpolantFactoryMethodSmooth:return So;case this.InterpolantFactoryMethodBezier:return sh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;eh(this.settings)&&(md(this.settings.inTangents,t),md(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(re("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(re("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){re("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){re("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Pp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){re("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===So,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,u=p-n,m=p+n;for(let g=0;g!==n;++g){let M=e[p+g];if(M!==e[u+g]||M!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[p+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,eh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function md(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Lo;var rs=class extends Zn{constructor(t,e,n){super(t,e,n)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=$r;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var nl=class extends Zn{constructor(t,e,n,s){super(t,e,n,s)}};nl.prototype.ValueTypeName="color";var il=class extends Zn{constructor(t,e,n,s){super(t,e,n,s)}};il.prototype.ValueTypeName="number";var sl=class extends ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ei.slerpFlat(r,0,a,c-o,a,c,l);return r}},ga=class extends Zn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new sl(this.times,this.values,this.getValueSize(),t)}};ga.prototype.ValueTypeName="quaternion";ga.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends Zn{constructor(t,e,n){super(t,e,n)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=$r;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends Zn{constructor(t,e,n,s){super(t,e,n,s)}};rl.prototype.ValueTypeName="vector";var al=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let m=c[p],g=c[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ff=new al,ol=class{constructor(t){this.manager=t!==void 0?t:ff,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ol.DEFAULT_MATERIAL_NAME="__DEFAULT";var _a=class extends _n{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},xa=class extends _a{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},nh=new ke,gd=new U,_d=new U,ll=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;gd.setFromMatrixPosition(t.matrixWorld),e.position.copy(gd),_d.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_d),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){nh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(nh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===rr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(nh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},xo=new U,vo=new Ei,yi=new U,va=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xo,vo,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,vo,yi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(xo,vo,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,vo,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},es=new U,xd=new Pt,vd=new Pt,Tn=class extends va{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return or*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,e){return this.getViewBounds(t,xd,vd),e.subVectors(vd,xd)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var gr=class extends va{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fh=class extends ll{constructor(){super(new gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ya=class extends _a{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new fh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Sa=class extends nn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Qs=-90,tr=1,cl=class extends _n{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tn(Qs,tr,t,e);s.layers=this.layers,this.add(s);let r=new Tn(Qs,tr,t,e);r.layers=this.layers,this.add(r);let a=new Tn(Qs,tr,t,e);a.layers=this.layers,this.add(a);let o=new Tn(Qs,tr,t,e);o.layers=this.layers,this.add(o);let l=new Tn(Qs,tr,t,e);l.layers=this.layers,this.add(l);let c=new Tn(Qs,tr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,u,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},hl=class extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Wh="\\[\\]\\.:\\/",Gm=new RegExp("["+Wh+"]","g"),Xh="[^"+Wh+"]",Wm="[^"+Wh.replace("\\.","")+"]",Xm=/((?:WC+[\/:])*)/.source.replace("WC",Xh),$m=/(WCOD+)?/.source.replace("WCOD",Wm),qm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xh),Ym=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xh),Zm=new RegExp("^"+Xm+$m+qm+Ym+"$"),Jm=["material","materials","bones","map"],ph=class{constructor(t,e,n){let s=n||Ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gm,"")}static parseTrackName(t){let e=Zm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Jm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;re("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ye.Composite=ph;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uy=new Float32Array(1);var os=class extends Fo{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var yd=new ke,Ma=class{constructor(t,e,n=0,s=1/0){this.ray=new bs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):re("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yd),this}intersectObject(t,e=!0,n=[]){return mh(t,this,n,e),n.sort(Sd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)mh(t[s],this,n,e);return n.sort(Sd),n}};function Sd(i,t){return i.distance-t.distance}function mh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)mh(r[a],t,e,!0)}}var gh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Md=new U,yo=new U,er=new U,nr=new U,ih=new U,Km=new U,jm=new U,ba=class{constructor(t=new U,e=new U){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Md.subVectors(t,this.start),yo.subVectors(this.end,this.start);let n=yo.dot(yo);if(n===0)return 0;let r=yo.dot(Md)/n;return e&&(r=de(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Km,n=jm){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;er.subVectors(c,o),nr.subVectors(h,l),ih.subVectors(o,l);let p=er.dot(er),u=nr.dot(nr),m=nr.dot(ih);if(p<=s&&u<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(p<=s)r=0,a=m/u,a=de(a,0,1);else{let g=er.dot(ih);if(u<=s)a=0,r=de(-g/p,0,1);else{let M=er.dot(nr),f=p*u-M*M;f!==0?r=de((M*m-g*u)/f,0,1):r=0,a=(M*r+m)/u,a<0?(a=0,r=de(-g/p,0,1)):a>1&&(a=1,r=de((M-g)/p,0,1))}}return e.copy(o).addScaledVector(er,r),n.copy(l).addScaledVector(nr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function $h(i,t,e,n){let s=Qm(n);switch(e){case Uh:return i*t;case Oh:return i*t/s.components*s.byteLength;case xl:return i*t/s.components*s.byteLength;case ds:return i*t*2/s.components*s.byteLength;case vl:return i*t*2/s.components*s.byteLength;case Fh:return i*t*3/s.components*s.byteLength;case ni:return i*t*4/s.components*s.byteLength;case yl:return i*t*4/s.components*s.byteLength;case Aa:case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ra:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ml:case wl:return Math.max(i,16)*Math.max(t,8)/4;case Sl:case bl:return Math.max(i,8)*Math.max(t,8)/2;case El:case Tl:case Cl:case Rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Al:case Pa:case Il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xl:case $l:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Yl:case Zl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case La:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qm(i){switch(i){case kn:case Ph:return{byteLength:1,components:1};case vr:case Lh:case gi:return{byteLength:2,components:1};case gl:case _l:return{byteLength:2,components:4};case pi:case ml:case mi:return{byteLength:4,components:1};case Dh:case Nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Uf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function eg(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,h);else{p.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<p.length;m++){let g=p[u],M=p[m];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,p[u]=M)}p.length=u+1;for(let m=0,g=p.length;m<g;m++){let M=p[m];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ng=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ig=`#ifdef USE_ALPHAHASH
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
#endif`,sg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lg=`#ifdef USE_AOMAP
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
#endif`,cg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hg=`#ifdef USE_BATCHING
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
#endif`,ug=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mg=`#ifdef USE_IRIDESCENCE
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
#endif`,gg=`#ifdef USE_BUMPMAP
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
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Eg=`#define PI 3.141592653589793
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
} // validated`,Tg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ag=`vec3 transformedNormal = objectNormal;
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
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ng=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
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
#endif`,Og=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gg=`#ifdef USE_GRADIENTMAP
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
}`,Wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Yg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qg=`PhysicalMaterial material;
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
#endif`,t0=`uniform sampler2D dfgLUT;
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
}`,e0=`
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
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
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,r0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d0=`#if defined( USE_POINTS_UV )
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
#endif`,f0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`#ifdef USE_MORPHTARGETS
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
#endif`,v0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,E0=`#ifdef USE_NORMALMAP
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
#endif`,T0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V0=`float getShadowMask() {
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
}`,H0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,W0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,$0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J0=`#ifdef USE_TRANSMISSION
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
#endif`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,n_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i_=`uniform sampler2D t2D;
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
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`#include <common>
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
}`,c_=`#if DEPTH_PACKING == 3200
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
}`,h_=`#define DISTANCE
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
}`,u_=`#define DISTANCE
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`uniform float scale;
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
}`,m_=`uniform vec3 diffuse;
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
}`,g_=`#include <common>
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
}`,__=`uniform vec3 diffuse;
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
}`,x_=`#define LAMBERT
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
}`,v_=`#define LAMBERT
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
}`,y_=`#define MATCAP
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
}`,S_=`#define MATCAP
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
}`,M_=`#define NORMAL
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
}`,b_=`#define NORMAL
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
}`,w_=`#define PHONG
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
}`,E_=`#define PHONG
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
}`,T_=`#define STANDARD
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
}`,A_=`#define STANDARD
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
}`,C_=`#define TOON
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
}`,R_=`#define TOON
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
}`,I_=`uniform float size;
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
}`,P_=`uniform vec3 diffuse;
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
}`,L_=`#include <common>
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
}`,D_=`uniform vec3 color;
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
}`,N_=`uniform float rotation;
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
}`,U_=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:ng,alphahash_pars_fragment:ig,alphamap_fragment:sg,alphamap_pars_fragment:rg,alphatest_fragment:ag,alphatest_pars_fragment:og,aomap_fragment:lg,aomap_pars_fragment:cg,batching_pars_vertex:hg,batching_vertex:ug,begin_vertex:dg,beginnormal_vertex:fg,bsdfs:pg,iridescence_fragment:mg,bumpmap_pars_fragment:gg,clipping_planes_fragment:_g,clipping_planes_pars_fragment:xg,clipping_planes_pars_vertex:vg,clipping_planes_vertex:yg,color_fragment:Sg,color_pars_fragment:Mg,color_pars_vertex:bg,color_vertex:wg,common:Eg,cube_uv_reflection_fragment:Tg,defaultnormal_vertex:Ag,displacementmap_pars_vertex:Cg,displacementmap_vertex:Rg,emissivemap_fragment:Ig,emissivemap_pars_fragment:Pg,colorspace_fragment:Lg,colorspace_pars_fragment:Dg,envmap_fragment:Ng,envmap_common_pars_fragment:Ug,envmap_pars_fragment:Fg,envmap_pars_vertex:Og,envmap_physical_pars_fragment:Yg,envmap_vertex:Bg,fog_vertex:zg,fog_pars_vertex:kg,fog_fragment:Vg,fog_pars_fragment:Hg,gradientmap_pars_fragment:Gg,lightmap_pars_fragment:Wg,lights_lambert_fragment:Xg,lights_lambert_pars_fragment:$g,lights_pars_begin:qg,lights_toon_fragment:Zg,lights_toon_pars_fragment:Jg,lights_phong_fragment:Kg,lights_phong_pars_fragment:jg,lights_physical_fragment:Qg,lights_physical_pars_fragment:t0,lights_fragment_begin:e0,lights_fragment_maps:n0,lights_fragment_end:i0,lightprobes_pars_fragment:s0,logdepthbuf_fragment:r0,logdepthbuf_pars_fragment:a0,logdepthbuf_pars_vertex:o0,logdepthbuf_vertex:l0,map_fragment:c0,map_pars_fragment:h0,map_particle_fragment:u0,map_particle_pars_fragment:d0,metalnessmap_fragment:f0,metalnessmap_pars_fragment:p0,morphinstance_vertex:m0,morphcolor_vertex:g0,morphnormal_vertex:_0,morphtarget_pars_vertex:x0,morphtarget_vertex:v0,normal_fragment_begin:y0,normal_fragment_maps:S0,normal_pars_fragment:M0,normal_pars_vertex:b0,normal_vertex:w0,normalmap_pars_fragment:E0,clearcoat_normal_fragment_begin:T0,clearcoat_normal_fragment_maps:A0,clearcoat_pars_fragment:C0,iridescence_pars_fragment:R0,opaque_fragment:I0,packing:P0,premultiplied_alpha_fragment:L0,project_vertex:D0,dithering_fragment:N0,dithering_pars_fragment:U0,roughnessmap_fragment:F0,roughnessmap_pars_fragment:O0,shadowmap_pars_fragment:B0,shadowmap_pars_vertex:z0,shadowmap_vertex:k0,shadowmask_pars_fragment:V0,skinbase_vertex:H0,skinning_pars_vertex:G0,skinning_vertex:W0,skinnormal_vertex:X0,specularmap_fragment:$0,specularmap_pars_fragment:q0,tonemapping_fragment:Y0,tonemapping_pars_fragment:Z0,transmission_fragment:J0,transmission_pars_fragment:K0,uv_pars_fragment:j0,uv_pars_vertex:Q0,uv_vertex:t_,worldpos_vertex:e_,background_vert:n_,background_frag:i_,backgroundCube_vert:s_,backgroundCube_frag:r_,cube_vert:a_,cube_frag:o_,depth_vert:l_,depth_frag:c_,distance_vert:h_,distance_frag:u_,equirect_vert:d_,equirect_frag:f_,linedashed_vert:p_,linedashed_frag:m_,meshbasic_vert:g_,meshbasic_frag:__,meshlambert_vert:x_,meshlambert_frag:v_,meshmatcap_vert:y_,meshmatcap_frag:S_,meshnormal_vert:M_,meshnormal_frag:b_,meshphong_vert:w_,meshphong_frag:E_,meshphysical_vert:T_,meshphysical_frag:A_,meshtoon_vert:C_,meshtoon_frag:R_,points_vert:I_,points_frag:P_,shadow_vert:L_,shadow_frag:D_,sprite_vert:N_,sprite_frag:U_},Dt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Dn={basic:{uniforms:Cn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Cn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Cn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Cn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Cn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new ae(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Cn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Cn([Dt.points,Dt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Cn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Cn([Dt.common,Dt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Cn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Cn([Dt.sprite,Dt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:Cn([Dt.common,Dt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:Cn([Dt.lights,Dt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Dn.physical={uniforms:Cn([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};var tc={r:0,b:0,g:0},F_=new ke,Ff=new he;Ff.set(-1,0,0,0,1,0,0,0,1);function O_(i,t,e,n,s,r){let a=new ae(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function m(C){let P=C.isScene===!0?C.background:null;if(P&&P.isTexture){let S=C.backgroundBlurriness>0;P=t.get(P,S)}return P}function g(C){let P=!1,S=m(C);S===null?f(a,o):S&&S.isColor&&(f(S,1),P=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(C,P){let S=m(P);S&&(S.isCubeTexture||S.mapping===Ea)?(c===void 0&&(c=new An(new dr(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Is(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(F_.makeRotationFromEuler(P.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ff),c.material.toneMapped=Te.getTransfer(S.colorSpace)!==Fe,(h!==S||p!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,u=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new An(new fa(2,2),new xn({name:"BackgroundMaterial",uniforms:Is(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=Te.getTransfer(S.colorSpace)!==Fe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,p=S.version,u=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function f(C,P){C.getRGB(tc,Gh(i)),e.buffers.color.setClear(tc.r,tc.g,tc.b,P,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,P=1){a.set(C),o=P,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(C){o=C,f(a,o)},render:g,addToRenderList:M,dispose:d}}function B_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(V,Z,J,k,q){let rt=!1,et=p(V,k,J,Z);r!==et&&(r=et,c(r.object)),rt=m(V,k,J,q),rt&&g(V,k,J,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(rt||a)&&(a=!1,S(V,Z,J,k),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(V){return i.bindVertexArray(V)}function h(V){return i.deleteVertexArray(V)}function p(V,Z,J,k){let q=k.wireframe===!0,rt=n[Z.id];rt===void 0&&(rt={},n[Z.id]=rt);let et=V.isInstancedMesh===!0?V.id:0,gt=rt[et];gt===void 0&&(gt={},rt[et]=gt);let nt=gt[J.id];nt===void 0&&(nt={},gt[J.id]=nt);let ot=nt[q];return ot===void 0&&(ot=u(l()),nt[q]=ot),ot}function u(V){let Z=[],J=[],k=[];for(let q=0;q<e;q++)Z[q]=0,J[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:J,attributeDivisors:k,object:V,attributes:{},index:null}}function m(V,Z,J,k){let q=r.attributes,rt=Z.attributes,et=0,gt=J.getAttributes();for(let nt in gt)if(gt[nt].location>=0){let ut=q[nt],Zt=rt[nt];if(Zt===void 0&&(nt==="instanceMatrix"&&V.instanceMatrix&&(Zt=V.instanceMatrix),nt==="instanceColor"&&V.instanceColor&&(Zt=V.instanceColor)),ut===void 0||ut.attribute!==Zt||Zt&&ut.data!==Zt.data)return!0;et++}return r.attributesNum!==et||r.index!==k}function g(V,Z,J,k){let q={},rt=Z.attributes,et=0,gt=J.getAttributes();for(let nt in gt)if(gt[nt].location>=0){let ut=rt[nt];ut===void 0&&(nt==="instanceMatrix"&&V.instanceMatrix&&(ut=V.instanceMatrix),nt==="instanceColor"&&V.instanceColor&&(ut=V.instanceColor));let Zt={};Zt.attribute=ut,ut&&ut.data&&(Zt.data=ut.data),q[nt]=Zt,et++}r.attributes=q,r.attributesNum=et,r.index=k}function M(){let V=r.newAttributes;for(let Z=0,J=V.length;Z<J;Z++)V[Z]=0}function f(V){d(V,0)}function d(V,Z){let J=r.newAttributes,k=r.enabledAttributes,q=r.attributeDivisors;J[V]=1,k[V]===0&&(i.enableVertexAttribArray(V),k[V]=1),q[V]!==Z&&(i.vertexAttribDivisor(V,Z),q[V]=Z)}function C(){let V=r.newAttributes,Z=r.enabledAttributes;for(let J=0,k=Z.length;J<k;J++)Z[J]!==V[J]&&(i.disableVertexAttribArray(J),Z[J]=0)}function P(V,Z,J,k,q,rt,et){et===!0?i.vertexAttribIPointer(V,Z,J,q,rt):i.vertexAttribPointer(V,Z,J,k,q,rt)}function S(V,Z,J,k){M();let q=k.attributes,rt=J.getAttributes(),et=Z.defaultAttributeValues;for(let gt in rt){let nt=rt[gt];if(nt.location>=0){let ot=q[gt];if(ot===void 0&&(gt==="instanceMatrix"&&V.instanceMatrix&&(ot=V.instanceMatrix),gt==="instanceColor"&&V.instanceColor&&(ot=V.instanceColor)),ot!==void 0){let ut=ot.normalized,Zt=ot.itemSize,Vt=t.get(ot);if(Vt===void 0)continue;let Ce=Vt.buffer,ve=Vt.type,Me=Vt.bytesPerElement,j=ve===i.INT||ve===i.UNSIGNED_INT||ot.gpuType===ml;if(ot.isInterleavedBufferAttribute){let lt=ot.data,Ct=lt.stride,te=ot.offset;if(lt.isInstancedInterleavedBuffer){for(let At=0;At<nt.locationSize;At++)d(nt.location+At,lt.meshPerAttribute);V.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let At=0;At<nt.locationSize;At++)f(nt.location+At);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let At=0;At<nt.locationSize;At++)P(nt.location+At,Zt/nt.locationSize,ve,ut,Ct*Me,(te+Zt/nt.locationSize*At)*Me,j)}else{if(ot.isInstancedBufferAttribute){for(let lt=0;lt<nt.locationSize;lt++)d(nt.location+lt,ot.meshPerAttribute);V.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let lt=0;lt<nt.locationSize;lt++)f(nt.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let lt=0;lt<nt.locationSize;lt++)P(nt.location+lt,Zt/nt.locationSize,ve,ut,Zt*Me,Zt/nt.locationSize*lt*Me,j)}}else if(et!==void 0){let ut=et[gt];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(nt.location,ut);break;case 3:i.vertexAttrib3fv(nt.location,ut);break;case 4:i.vertexAttrib4fv(nt.location,ut);break;default:i.vertexAttrib1fv(nt.location,ut)}}}}C()}function b(){A();for(let V in n){let Z=n[V];for(let J in Z){let k=Z[J];for(let q in k){let rt=k[q];for(let et in rt)h(rt[et].object),delete rt[et];delete k[q]}}delete n[V]}}function T(V){if(n[V.id]===void 0)return;let Z=n[V.id];for(let J in Z){let k=Z[J];for(let q in k){let rt=k[q];for(let et in rt)h(rt[et].object),delete rt[et];delete k[q]}}delete n[V.id]}function L(V){for(let Z in n){let J=n[Z];for(let k in J){let q=J[k];if(q[V.id]===void 0)continue;let rt=q[V.id];for(let et in rt)h(rt[et].object),delete rt[et];delete q[V.id]}}}function y(V){for(let Z in n){let J=n[Z],k=V.isInstancedMesh===!0?V.id:0,q=J[k];if(q!==void 0){for(let rt in q){let et=q[rt];for(let gt in et)h(et[gt].object),delete et[gt];delete q[rt]}delete J[k],Object.keys(J).length===0&&delete n[Z]}}}function A(){B(),a=!0,r!==s&&(r=s,c(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:B,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:f,disableUnusedAttributes:C}}function z_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function k_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==ni&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let y=L===gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==kn&&L!==mi&&!y&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:C,maxVaryings:P,maxFragmentUniforms:S,maxSamples:b,samples:T}}function V_(i){let t=this,e=null,n=0,s=!1,r=!1,a=new li,o=new he,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let m=p.length!==0||u||n!==0||s;return s=u,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){e=h(p,u,0)},this.setState=function(p,u,m){let g=p.clippingPlanes,M=p.clipIntersection,f=p.clipShadows,d=i.get(p);if(!s||g===null||g.length===0||r&&!f)r?h(null):c();else{let C=r?0:n,P=C*4,S=d.clippingState||null;l.value=S,S=h(g,u,P,m);for(let b=0;b!==P;++b)S[b]=e[b];d.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,u,m,g){let M=p!==null?p.length:0,f=null;if(M!==0){if(f=l.value,g!==!0||f===null){let d=m+M*4,C=u.matrixWorldInverse;o.getNormalMatrix(C),(f===null||f.length<d)&&(f=new Float32Array(d));for(let P=0,S=m;P!==M;++P,S+=4)a.copy(p[P]).applyMatrix4(C,o),a.normal.toArray(f,S),f[S+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,f}}var Mr=4,H_=6,G_=20,W_=256,Na=new gr,pf=new ae,qh=null,Yh=0,Zh=0,Jh=!1,X_=new U,Ps=new U,nc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=X_}=r;qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qh,Yh,Zh),this._renderer.xr.enabled=Jh,t.scissorTest=!1,Sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:gi,format:ni,colorSpace:qr,depthBuffer:!1},s=mf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=$_(r)),this._blurMaterial=Y_(r,t,e),this._ggxMaterial=q_(r,t,e)}return s}_compileMaterial(t){let e=new An(new nn,t);this._renderer.compile(e,Na)}_sceneToCubeUV(t,e,n,s,r){let l=new Tn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(pf),p.toneMapping=fi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new An(new dr,new ea({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,f=M.material,d=!1,C=t.background;C?C.isColor&&(f.color.copy(C),t.background=null,d=!0):(f.color.copy(pf),d=!0);for(let P=0;P<6;P++){let S=P%3;S===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[P],r.y,r.z)):S===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[P]));let b=this._cubeSize;Sr(s,S*b,P>2?b:0,b,b),p.setRenderTarget(s),d&&p.render(M,l),p.render(t,l)}p.toneMapping=m,p.autoClear=u,t.background=C}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===cs||t.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_f()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Sr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Na)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,m=p*u,{_lodMax:g}=this,M=this._sizeLods[n],f=3*M*(n>g-Mr?n-g+Mr:0),d=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=g-e,Sr(r,f,d,3*M,2*M),s.setRenderTarget(r),s.render(o,Na),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Sr(t,f,d,3*M,2*M),s.setRenderTarget(t),s.render(o,Na)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-Mr?s-this._lodMax+Mr:0),u=4*(this._cubeSize-h);Sr(e,p,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Na)}};function $_(i){let t=[],e=[],n=i,s=i-Mr+1+H_;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,m=3,g=new Float32Array(m*u*p),M=new Float32Array(m*u*p);for(let d=0;d<p;d++){let C=d%3*2/3-1,P=d>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];g.set(S,m*u*d);for(let b=0;b<u;b++){let T=h[b*2]*2-1,L=h[b*2+1]*2-1;d===0?Ps.set(1,L,T):d===1?Ps.set(-T,1,-L):d===2?Ps.set(-T,L,1):d===3?Ps.set(-1,L,-T):d===4?Ps.set(-T,-1,L):Ps.set(T,L,-1),Ps.toArray(M,(d*u+b)*m)}}let f=new nn;f.setAttribute("position",new Ge(g,m)),f.setAttribute("outputDirection",new Ge(M,m)),e.push(new An(f,null)),n>Mr&&n--}return{lodMeshes:e,sizeLods:t}}function mf(i,t,e){let n=new zn(i,t,e);return n.texture.mapping=Ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function q_(i,t,e){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:W_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Y_(i,t,e){return new xn({name:"SphericalGaussianBlur",defines:{SAMPLES:G_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function gf(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function _f(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ic=class extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ia(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dr(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:Ci});r.uniforms.tEquirect.value=e;let a=new An(s,r),o=e.minFilter;return e.minFilter===hs&&(e.minFilter=vn),new cl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Z_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===dl||m===fl)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let M=new ic(g.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let m=u.mapping,g=m===dl||m===fl,M=m===cs||m===Rs;if(g||M){let f=e.get(u),d=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new nc(i)),f=g?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{let C=u.image;return g&&C&&C.height>0||M&&C&&l(C)?(n===null&&(n=new nc(i)),f=g?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,m){return m===dl?u.mapping=cs:m===fl&&(u.mapping=Rs),u}function l(u){let m=0,g=6;for(let M=0;M<g;M++)u[M]!==void 0&&m++;return m===g}function c(u){let m=u.target;m.removeEventListener("dispose",c);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function J_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ms("WebGLRenderer: "+n+" extension not supported."),s}}}function K_(i,t,e,n){let s={},r=new WeakMap;function a(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(p){let u=p.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER)}function c(p){let u=[],m=p.index,g=p.attributes.position,M=0;if(g===void 0)return;if(m!==null){let C=m.array;M=m.version;for(let P=0,S=C.length;P<S;P+=3){let b=C[P+0],T=C[P+1],L=C[P+2];u.push(b,T,T,L,L,b)}}else{let C=g.array;M=g.version;for(let P=0,S=C.length/3-1;P<S;P+=3){let b=P+0,T=P+1,L=P+2;u.push(b,T,T,L,L,b)}}let f=new(g.count>=65535?ta:Qr)(u,1);f.version=M;let d=r.get(p);d&&t.remove(d),r.set(p,f)}function h(p){let u=r.get(p);if(u){let m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function j_(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,u){i.drawElements(n,u,r,p*a),e.update(u,n,1)}function c(p,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,p*a,m),e.update(u,n,m))}function h(p,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,m);let M=0;for(let f=0;f<m;f++)M+=u[f];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Q_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:re("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function tx(i,t,e){let n=new WeakMap,s=new Oe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==p){let A=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],C=o.morphAttributes.color||[],P=0;m===!0&&(P=1),g===!0&&(P=2),M===!0&&(P=3);let S=o.attributes.position.count*P,b=1;S>t.maxTextureSize&&(b=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let T=new Float32Array(S*b*4*p),L=new Kr(T,S,b,p);L.type=mi,L.needsUpdate=!0;let y=P*4;for(let B=0;B<p;B++){let V=f[B],Z=d[B],J=C[B],k=S*b*4*B;for(let q=0;q<V.count;q++){let rt=q*y;m===!0&&(s.fromBufferAttribute(V,q),T[k+rt+0]=s.x,T[k+rt+1]=s.y,T[k+rt+2]=s.z,T[k+rt+3]=0),g===!0&&(s.fromBufferAttribute(Z,q),T[k+rt+4]=s.x,T[k+rt+5]=s.y,T[k+rt+6]=s.z,T[k+rt+7]=0),M===!0&&(s.fromBufferAttribute(J,q),T[k+rt+8]=s.x,T[k+rt+9]=s.y,T[k+rt+10]=s.z,T[k+rt+11]=J.itemSize===4?s.w:1)}}u={count:p,texture:L,size:new Pt(S,b)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];let g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function ex(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,u=t.get(c,p);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var nx={[bh]:"LINEAR_TONE_MAPPING",[wh]:"REINHARD_TONE_MAPPING",[Eh]:"CINEON_TONE_MAPPING",[Th]:"ACES_FILMIC_TONE_MAPPING",[Ch]:"AGX_TONE_MAPPING",[Rh]:"NEUTRAL_TONE_MAPPING",[Ah]:"CUSTOM_TONE_MAPPING"};function ix(i,t,e,n,s,r){let a=new zn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new nn;c.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ln([0,2,0,0,2,0],2));let h=new Zo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new An(c,h),u=new gr(-1,1,1,-1,0,1),m=null,g=null,M=!1,f,d=null,C=[],P=!1;this.setSize=function(S,b){a.setSize(S,b),o!==null&&o.setSize(S,b),l!==null&&l.setSize(S,b);for(let T=0;T<C.length;T++){let L=C[T];L.setSize&&L.setSize(S,b)}},this.setEffects=function(S){C=S,P=C.length>0&&C[0].isRenderPass===!0;let b=a.width,T=a.height;C.length>0&&o===null&&(o=new zn(b,T,{type:gi,depthBuffer:!1,stencilBuffer:!1}),l=new zn(b,T,{type:gi,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<C.length;L++){let y=C[L];y.setSize&&y.setSize(b,T)}},this.begin=function(S,b){if(M||S.toneMapping===fi&&C.length===0)return!1;if(d=b,b!==null){let T=b.width,L=b.height;(a.width!==T||a.height!==L)&&this.setSize(T,L)}return P===!1&&S.setRenderTarget(a),f=S.toneMapping,S.toneMapping=fi,!0},this.hasRenderPass=function(){return P},this.end=function(S,b){S.toneMapping=f,M=!0;let T=a,L=o;for(let y=0;y<C.length;y++){let A=C[y];A.enabled!==!1&&(A.render(S,L,T,b),A.needsSwap!==!1&&(T=L,L=L===o?l:o))}if(m!==S.outputColorSpace||g!==S.toneMapping){m=S.outputColorSpace,g=S.toneMapping,h.defines={},Te.getTransfer(m)===Fe&&(h.defines.SRGB_TRANSFER="");let y=nx[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(d),S.render(p,u),d=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Of=new Bn,Qh=new is(1,1),Bf=new Kr,zf=new Uo,kf=new ia,xf=[],vf=[],yf=new Float32Array(16),Sf=new Float32Array(9),Mf=new Float32Array(4);function wr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=xf[s];if(r===void 0&&(r=new Float32Array(s),xf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function cn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function hn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ac(i,t){let e=vf[t];e===void 0&&(e=new Int32Array(t),vf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function sx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2fv(this.addr,t),hn(e,t)}}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;i.uniform3fv(this.addr,t),hn(e,t)}}function ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4fv(this.addr,t),hn(e,t)}}function lx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;Mf.set(n),i.uniformMatrix2fv(this.addr,!1,Mf),hn(e,n)}}function cx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;Sf.set(n),i.uniformMatrix3fv(this.addr,!1,Sf),hn(e,n)}}function hx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;yf.set(n),i.uniformMatrix4fv(this.addr,!1,yf),hn(e,n)}}function ux(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2iv(this.addr,t),hn(e,t)}}function fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;i.uniform3iv(this.addr,t),hn(e,t)}}function px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4iv(this.addr,t),hn(e,t)}}function mx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2uiv(this.addr,t),hn(e,t)}}function _x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;i.uniform3uiv(this.addr,t),hn(e,t)}}function xx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4uiv(this.addr,t),hn(e,t)}}function vx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qh.compareFunction=e.isReversedDepthBuffer()?Ql:jl,r=Qh):r=Of,e.setTexture2D(t||r,s)}function yx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zf,s)}function Sx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||kf,s)}function Mx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bf,s)}function bx(i){switch(i){case 5126:return sx;case 35664:return rx;case 35665:return ax;case 35666:return ox;case 35674:return lx;case 35675:return cx;case 35676:return hx;case 5124:case 35670:return ux;case 35667:case 35671:return dx;case 35668:case 35672:return fx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return _x;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return Mx}}function wx(i,t){i.uniform1fv(this.addr,t)}function Ex(i,t){let e=wr(t,this.size,2);i.uniform2fv(this.addr,e)}function Tx(i,t){let e=wr(t,this.size,3);i.uniform3fv(this.addr,e)}function Ax(i,t){let e=wr(t,this.size,4);i.uniform4fv(this.addr,e)}function Cx(i,t){let e=wr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rx(i,t){let e=wr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ix(i,t){let e=wr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Px(i,t){i.uniform1iv(this.addr,t)}function Lx(i,t){i.uniform2iv(this.addr,t)}function Dx(i,t){i.uniform3iv(this.addr,t)}function Nx(i,t){i.uniform4iv(this.addr,t)}function Ux(i,t){i.uniform1uiv(this.addr,t)}function Fx(i,t){i.uniform2uiv(this.addr,t)}function Ox(i,t){i.uniform3uiv(this.addr,t)}function Bx(i,t){i.uniform4uiv(this.addr,t)}function zx(i,t,e){let n=this.cache,s=t.length,r=ac(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Qh:a=Of;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function kx(i,t,e){let n=this.cache,s=t.length,r=ac(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||zf,r[a])}function Vx(i,t,e){let n=this.cache,s=t.length,r=ac(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||kf,r[a])}function Hx(i,t,e){let n=this.cache,s=t.length,r=ac(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Bf,r[a])}function Gx(i){switch(i){case 5126:return wx;case 35664:return Ex;case 35665:return Tx;case 35666:return Ax;case 35674:return Cx;case 35675:return Rx;case 35676:return Ix;case 5124:case 35670:return Px;case 35667:case 35671:return Lx;case 35668:case 35672:return Dx;case 35669:case 35673:return Nx;case 5125:return Ux;case 36294:return Fx;case 36295:return Ox;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return kx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Hx}}var tu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bx(e.type)}},eu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gx(e.type)}},nu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Kh=/(\w+)(\])?(\[|\.)?/g;function bf(i,t){i.seq.push(t),i.map[t.id]=t}function Wx(i,t,e){let n=i.name,s=n.length;for(Kh.lastIndex=0;;){let r=Kh.exec(n),a=Kh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){bf(e,c===void 0?new tu(o,i,t):new eu(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new nu(o),bf(e,p)),e=p}}}var br=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Wx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function wf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Xx=37297,$x=0;function qx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ef=new he;function Yx(i){Te._getMatrix(Ef,Te.workingColorSpace,i);let t=`mat3( ${Ef.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(i)){case Yr:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Tf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+qx(i.getShaderSource(t),o)}else return r}function Zx(i,t){let e=Yx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Jx={[bh]:"Linear",[wh]:"Reinhard",[Eh]:"Cineon",[Th]:"ACESFilmic",[Ch]:"AgX",[Rh]:"Neutral",[Ah]:"Custom"};function Kx(i,t){let e=Jx[t];return e===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ec=new U;function jx(){Te.getLuminanceCoefficients(ec);let i=ec.x.toFixed(4),t=ec.y.toFixed(4),e=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function tv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ev(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Fa(i){return i!==""}function Af(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(i){return i.replace(nv,sv)}var iv=new Map;function sv(i,t){let e=xe[t];if(e===void 0){let n=iv.get(t);if(n!==void 0)e=xe[n],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return iu(e)}var rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rf(i){return i.replace(rv,av)}function av(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function If(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var ov={[wa]:"SHADOWMAP_TYPE_PCF",[_r]:"SHADOWMAP_TYPE_VSM"};function lv(i){return ov[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cv={[cs]:"ENVMAP_TYPE_CUBE",[Rs]:"ENVMAP_TYPE_CUBE",[Ea]:"ENVMAP_TYPE_CUBE_UV"};function hv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":cv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var uv={[Rs]:"ENVMAP_MODE_REFRACTION"};function dv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":uv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fv={[ul]:"ENVMAP_BLENDING_MULTIPLY",[Wd]:"ENVMAP_BLENDING_MIX",[Xd]:"ENVMAP_BLENDING_ADD"};function pv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":fv[i.combine]||"ENVMAP_BLENDING_NONE"}function mv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function gv(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=lv(e),c=hv(e),h=dv(e),p=pv(e),u=mv(e),m=Qx(e),g=tv(r),M=s.createProgram(),f,d,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fa).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fa).join(`
`),d.length>0&&(d+=`
`)):(f=[If(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),d=[If(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?xe.tonemapping_pars_fragment:"",e.toneMapping!==fi?Kx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,Zx("linearToOutputTexel",e.outputColorSpace),jx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fa).join(`
`)),a=iu(a),a=Af(a,e),a=Cf(a,e),o=iu(o),o=Af(o,e),o=Cf(o,e),a=Rf(a),o=Rf(o),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let P=C+f+a,S=C+d+o,b=wf(s,s.VERTEX_SHADER,P),T=wf(s,s.FRAGMENT_SHADER,S);s.attachShader(M,b),s.attachShader(M,T),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function L(V){if(i.debug.checkShaderErrors){let Z=s.getProgramInfoLog(M)||"",J=s.getShaderInfoLog(b)||"",k=s.getShaderInfoLog(T)||"",q=Z.trim(),rt=J.trim(),et=k.trim(),gt=!0,nt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(gt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,b,T);else{let ot=Tf(s,b,"vertex"),ut=Tf(s,T,"fragment");re("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+q+`
`+ot+`
`+ut)}else q!==""?ie("WebGLProgram: Program Info Log:",q):(rt===""||et==="")&&(nt=!1);nt&&(V.diagnostics={runnable:gt,programLog:q,vertexShader:{log:rt,prefix:f},fragmentShader:{log:et,prefix:d}})}s.deleteShader(b),s.deleteShader(T),y=new br(s,M),A=ev(s,M)}let y;this.getUniforms=function(){return y===void 0&&L(this),y};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(M,Xx)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$x++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=T,this}var _v=0,su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ru(t),e.set(t,n)),n}},ru=class{constructor(t){this.id=_v++,this.code=t,this.usedTimes=0}};function xv(i){return i===ds||i===Pa||i===La}function vv(i,t,e,n,s,r){let a=new cr,o=new su,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,u=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function M(y,A,B,V,Z,J){let k=V.fog,q=Z.geometry,rt=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?V.environment:null,et=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,gt=t.get(y.envMap||rt,et),nt=gt&&gt.mapping===Ea?gt.image.height:null,ot=m[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&ie("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let ut=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Zt=ut!==void 0?ut.length:0,Vt=0;q.morphAttributes.position!==void 0&&(Vt=1),q.morphAttributes.normal!==void 0&&(Vt=2),q.morphAttributes.color!==void 0&&(Vt=3);let Ce,ve,Me,j;if(ot){let Be=Dn[ot];Ce=Be.vertexShader,ve=Be.fragmentShader}else{Ce=y.vertexShader,ve=y.fragmentShader;let Be=o.getVertexShaderStage(y),Pe=o.getFragmentShaderStage(y);o.update(y,Be,Pe),Me=Be.id,j=Pe.id}let lt=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),te=Z.isInstancedMesh===!0,At=Z.isBatchedMesh===!0,Xt=!!y.map,Re=!!y.matcap,D=!!gt,mt=!!y.aoMap,xt=!!y.lightMap,_t=!!y.bumpMap&&y.wireframe===!1,Mt=!!y.normalMap,Qt=!!y.displacementMap,jt=!!y.emissiveMap,Gt=!!y.metalnessMap,le=!!y.roughnessMap,N=y.anisotropy>0,Ie=y.clearcoat>0,me=y.dispersion>0,E=y.retroreflectivity>0,_=y.iridescence>0,W=y.sheen>0,Y=y.transmission>0,tt=N&&!!y.anisotropyMap,vt=Ie&&!!y.clearcoatMap,Et=Ie&&!!y.clearcoatNormalMap,st=Ie&&!!y.clearcoatRoughnessMap,ht=_&&!!y.iridescenceMap,Rt=_&&!!y.iridescenceThicknessMap,Jt=W&&!!y.sheenColorMap,wt=W&&!!y.sheenRoughnessMap,bt=!!y.specularMap,Wt=!!y.specularColorMap,ee=!!y.specularIntensityMap,ce=Y&&!!y.transmissionMap,z=Y&&!!y.thicknessMap,Lt=!!y.gradientMap,ct=!!y.alphaMap,Nt=y.alphaTest>0,Ot=!!y.alphaHash,ft=!!y.extensions,Kt=fi;y.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Kt=i.toneMapping);let Yt={shaderID:ot,shaderType:y.type,shaderName:y.name,vertexShader:Ce,fragmentShader:ve,defines:y.defines,customVertexShaderID:Me,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:At,batchingColor:At&&Z._colorsTexture!==null,instancing:te,instancingColor:te&&Z.instanceColor!==null,instancingMorph:te&&Z.morphTexture!==null,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Te.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Xt,matcap:Re,envMap:D,envMapMode:D&&gt.mapping,envMapCubeUVHeight:nt,aoMap:mt,lightMap:xt,bumpMap:_t,normalMap:Mt,displacementMap:Qt,emissiveMap:jt,normalMapObjectSpace:Mt&&y.normalMapType===Yd,normalMapTangentSpace:Mt&&y.normalMapType===Kl,packedNormalMap:Mt&&y.normalMapType===Kl&&xv(y.normalMap.format),metalnessMap:Gt,roughnessMap:le,anisotropy:N,anisotropyMap:tt,clearcoat:Ie,clearcoatMap:vt,clearcoatNormalMap:Et,clearcoatRoughnessMap:st,dispersion:me,retroreflection:E,iridescence:_,iridescenceMap:ht,iridescenceThicknessMap:Rt,sheen:W,sheenColorMap:Jt,sheenRoughnessMap:wt,specularMap:bt,specularColorMap:Wt,specularIntensityMap:ee,transmission:Y,transmissionMap:ce,thicknessMap:z,gradientMap:Lt,opaque:y.transparent===!1&&y.blending===xr&&y.alphaToCoverage===!1,alphaMap:ct,alphaTest:Nt,alphaHash:Ot,combine:y.combine,mapUv:Xt&&g(y.map.channel),aoMapUv:mt&&g(y.aoMap.channel),lightMapUv:xt&&g(y.lightMap.channel),bumpMapUv:_t&&g(y.bumpMap.channel),normalMapUv:Mt&&g(y.normalMap.channel),displacementMapUv:Qt&&g(y.displacementMap.channel),emissiveMapUv:jt&&g(y.emissiveMap.channel),metalnessMapUv:Gt&&g(y.metalnessMap.channel),roughnessMapUv:le&&g(y.roughnessMap.channel),anisotropyMapUv:tt&&g(y.anisotropyMap.channel),clearcoatMapUv:vt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Et&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:wt&&g(y.sheenRoughnessMap.channel),specularMapUv:bt&&g(y.specularMap.channel),specularColorMapUv:Wt&&g(y.specularColorMap.channel),specularIntensityMapUv:ee&&g(y.specularIntensityMap.channel),transmissionMapUv:ce&&g(y.transmissionMap.channel),thicknessMapUv:z&&g(y.thicknessMap.channel),alphaMapUv:ct&&g(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Mt||N),vertexNormals:!!q.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!q.attributes.uv&&(Xt||ct),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||q.attributes.normal===void 0&&Mt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ct,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Zt,morphTextureStride:Vt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Kt,decodeVideoTexture:Xt&&y.map.isVideoTexture===!0&&Te.getTransfer(y.map.colorSpace)===Fe,decodeVideoTextureEmissive:jt&&y.emissiveMap.isVideoTexture===!0&&Te.getTransfer(y.emissiveMap.colorSpace)===Fe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ai,flipSided:y.side===Ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ft&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&y.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function f(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let B in y.defines)A.push(B),A.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(d(A,y),C(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function d(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function C(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function P(y){let A=m[y.type],B;if(A){let V=Dn[A];B=Da.clone(V.uniforms)}else B=y.uniforms;return B}function S(y,A){let B=h.get(A);return B!==void 0?++B.usedTimes:(B=new gv(i,A,y,s),c.push(B),h.set(A,B)),B}function b(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function L(){o.dispose()}return{getParameters:M,getProgramCacheKey:f,getUniforms:P,acquireProgram:S,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:L}}function yv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Sv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Pf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,g,M,f,d){let C=i[t];return C===void 0?(C={id:u.id,object:u,geometry:m,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:f,group:d},i[t]=C):(C.id=u.id,C.object=u,C.geometry=m,C.material=g,C.materialVariant=a(u),C.groupOrder=M,C.renderOrder=u.renderOrder,C.z=f,C.group=d),t++,C}function l(u,m,g,M,f,d,C){C.reversedDepth===!0&&(f=-f);let P=o(u,m,g,M,f,d);g.transmission>0?n.push(P):g.transparent===!0?s.push(P):e.push(P)}function c(u,m,g,M,f,d){let C=o(u,m,g,M,f,d);g.transmission>0?n.unshift(C):g.transparent===!0?s.unshift(C):e.unshift(C)}function h(u,m){e.length>1&&e.sort(u||Sv),n.length>1&&n.sort(m||Pf),s.length>1&&s.sort(m||Pf)}function p(){for(let u=t,m=i.length;u<m;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function Mv(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Lf,i.set(n,[a])):s>=r.length?(a=new Lf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function bv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new ae};break;case"SpotLight":e={position:new U,direction:new U,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function wv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ev=0;function Tv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Av(i){let t=new bv,e=wv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new ke,a=new ke;function o(c){let h=0,p=0,u=0;for(let Z=0;Z<9;Z++)n.probe[Z].set(0,0,0);let m=0,g=0,M=0,f=0,d=0,C=0,P=0,S=0,b=0,T=0,L=0,y=0,A=0,B=0;c.sort(Tv);for(let Z=0,J=c.length;Z<J;Z++){let k=c[Z],q=k.color,rt=k.intensity,et=k.distance,gt=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ds?gt=k.shadow.map.texture:gt=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)h+=q.r*rt,p+=q.g*rt,u+=q.b*rt;else if(k.isLightProbe){for(let nt=0;nt<9;nt++)n.probe[nt].addScaledVector(k.sh.coefficients[nt],rt);B++}else if(k.isSunLight){let nt=t.get(k);if(nt.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let ot=k.shadow,ut=e.get(k);ut.shadowIntensity=ot.intensity,ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),n.sunShadow[g]=ut,n.sunShadowMap[g]=gt;let Zt=ot.getViewportCount();for(let Vt=0;Vt<Zt;Vt++)n.sunShadowMatrix[M+Vt]=ot.getMatrix(Vt),n.sunShadowCascade[M+Vt]=ot._cascadeData[Vt];M+=Zt,g++}n.sun[m]=nt,m++}else if(k.isDirectionalLight){let nt=t.get(k);if(nt.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let ot=k.shadow,ut=e.get(k);ut.shadowIntensity=ot.intensity,ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize=ot.mapSize,n.directionalShadow[f]=ut,n.directionalShadowMap[f]=gt,n.directionalShadowMatrix[f]=k.shadow.matrix,b++}n.directional[f]=nt,f++}else if(k.isSpotLight){let nt=t.get(k);nt.position.setFromMatrixPosition(k.matrixWorld),nt.color.copy(q).multiplyScalar(rt),nt.distance=et,nt.coneCos=Math.cos(k.angle),nt.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),nt.decay=k.decay,n.spot[C]=nt;let ot=k.shadow;if(k.map&&(n.spotLightMap[y]=k.map,y++,ot.updateMatrices(k),k.castShadow&&A++),n.spotLightMatrix[C]=ot.matrix,k.castShadow){let ut=e.get(k);ut.shadowIntensity=ot.intensity,ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize=ot.mapSize,n.spotShadow[C]=ut,n.spotShadowMap[C]=gt,L++}C++}else if(k.isRectAreaLight){let nt=t.get(k);nt.color.copy(q).multiplyScalar(rt),nt.halfWidth.set(k.width*.5,0,0),nt.halfHeight.set(0,k.height*.5,0),n.rectArea[P]=nt,P++}else if(k.isPointLight){let nt=t.get(k);if(nt.color.copy(k.color).multiplyScalar(k.intensity),nt.distance=k.distance,nt.decay=k.decay,k.castShadow){let ot=k.shadow,ut=e.get(k);ut.shadowIntensity=ot.intensity,ut.shadowBias=ot.bias,ut.shadowNormalBias=ot.normalBias,ut.shadowRadius=ot.radius,ut.shadowMapSize=ot.mapSize,ut.shadowCameraNear=ot.camera.near,ut.shadowCameraFar=ot.camera.far,n.pointShadow[d]=ut,n.pointShadowMap[d]=gt,n.pointShadowMatrix[d]=k.shadow.matrix,T++}n.point[d]=nt,d++}else if(k.isHemisphereLight){let nt=t.get(k);nt.skyColor.copy(k.color).multiplyScalar(rt),nt.groundColor.copy(k.groundColor).multiplyScalar(rt),n.hemi[S]=nt,S++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;let V=n.hash;(V.sunLength!==m||V.directionalLength!==f||V.pointLength!==d||V.spotLength!==C||V.rectAreaLength!==P||V.hemiLength!==S||V.numSunShadows!==g||V.numDirectionalShadows!==b||V.numPointShadows!==T||V.numSpotShadows!==L||V.numSpotMaps!==y||V.numLightProbes!==B)&&(n.sun.length=m,n.directional.length=f,n.spot.length=C,n.rectArea.length=P,n.point.length=d,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+y-A,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=B,V.sunLength=m,V.directionalLength=f,V.pointLength=d,V.spotLength=C,V.rectAreaLength=P,V.hemiLength=S,V.numSunShadows=g,V.numDirectionalShadows=b,V.numPointShadows=T,V.numSpotShadows=L,V.numSpotMaps=y,V.numLightProbes=B,n.version=Ev++)}function l(c,h){let p=0,u=0,m=0,g=0,M=0,f=0,d=h.matrixWorldInverse;for(let C=0,P=c.length;C<P;C++){let S=c[C];if(S.isSunLight){let b=n.sun[p];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(d),p++}else if(S.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),u++}else if(S.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),g++}else if(S.isRectAreaLight){let b=n.rectArea[M];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),a.identity(),r.copy(S.matrixWorld),r.premultiply(d),a.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){let b=n.point[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){let b=n.hemi[f];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(d),f++}}}return{setup:o,setupView:l,state:n}}function Df(i){let t=new Av(i),e=[],n=[],s=[];function r(u){p.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Cv(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Df(i),t.set(s,[o])):r>=a.length?(o=new Df(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Rv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iv=`uniform sampler2D shadow_pass;
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
}`,Pv=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Lv=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Nf=new ke,Ua=new U,jh=new U;function Dv(i,t,e){let n=new ur,s=new Pt,r=new Pt,a=new Oe,o=new Jo,l=new Ko,c={},h=e.maxTextureSize,p={[ls]:Ln,[Ln]:ls,[Ai]:Ai},u=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:Rv,fragmentShader:Iv}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new nn;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new An(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa;let d=this.type;this.render=function(T,L,y){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;this.type===Ed&&(ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wa);let A=i.getRenderTarget(),B=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Ci),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let J=d!==this.type;J&&L.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(q=>q.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,q=T.length;k<q;k++){let rt=T[k],et=rt.shadow;if(et===void 0){ie("WebGLShadowMap:",rt,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;s.copy(et.mapSize);let gt=et.getFrameExtents();s.multiply(gt),r.copy(et.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/gt.x),s.x=r.x*gt.x,et.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/gt.y),s.y=r.y*gt.y,et.mapSize.y=r.y));let nt=i.state.buffers.depth.getReversed();if(et.camera._reversedDepth=nt,et.map===null||J===!0){if(et.map!==null&&(et.map.depthTexture!==null&&(et.map.depthTexture.dispose(),et.map.depthTexture=null),et.map.dispose()),this.type===_r){if(rt.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}et.map=new zn(s.x,s.y,{format:ds,type:gi,minFilter:vn,magFilter:vn,generateMipmaps:!1}),et.map.texture.name=rt.name+".shadowMap",et.map.depthTexture=new is(s.x,s.y,mi),et.map.depthTexture.name=rt.name+".shadowMapDepth",et.map.depthTexture.format=bi,et.map.depthTexture.compareFunction=null,et.map.depthTexture.minFilter=gn,et.map.depthTexture.magFilter=gn}else rt.isPointLight?(et.map=new ic(s.x),et.map.depthTexture=new Ho(s.x,pi)):(et.map=new zn(s.x,s.y),et.map.depthTexture=new is(s.x,s.y,pi)),et.map.depthTexture.name=rt.name+".shadowMap",et.map.depthTexture.format=bi,this.type===wa?(et.map.depthTexture.compareFunction=nt?Ql:jl,et.map.depthTexture.minFilter=vn,et.map.depthTexture.magFilter=vn):(et.map.depthTexture.compareFunction=null,et.map.depthTexture.minFilter=gn,et.map.depthTexture.magFilter=gn);et.camera.updateProjectionMatrix()}et.map.isWebGLCubeRenderTarget!==!0&&(et.map.width!==s.x||et.map.height!==s.y)&&et.map.setSize(s.x,s.y);let ot=et.map.isWebGLCubeRenderTarget?6:et.getViewportCount();rt.isPointLight!==!0&&et.updateMatrices(rt,y);for(let ut=0;ut<ot;ut++){let Zt=et.getCamera(ut);if(rt.isPointLight){let Vt=et.camera,Ce=et.matrix,ve=rt.distance||Vt.far;ve!==Vt.far&&(Vt.far=ve,Vt.updateProjectionMatrix()),Ua.setFromMatrixPosition(rt.matrixWorld),Vt.position.copy(Ua),jh.copy(Vt.position),jh.add(Pv[ut]),Vt.up.copy(Lv[ut]),Vt.lookAt(jh),Vt.updateMatrixWorld(),Ce.makeTranslation(-Ua.x,-Ua.y,-Ua.z),Nf.multiplyMatrices(Vt.projectionMatrix,Vt.matrixWorldInverse),et._frustum.setFromProjectionMatrix(Nf,Vt.coordinateSystem,Vt.reversedDepth)}if(et.map.isWebGLCubeRenderTarget)i.setRenderTarget(et.map,ut),i.clear();else{ut===0&&(i.setRenderTarget(et.map),i.clear());let Vt=et.getViewport(ut);a.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),Z.viewport(a)}n=et.getFrustum(ut),S(L,y,Zt,rt,this.type)}et.isPointLightShadow!==!0&&this.type===_r&&C(et,y),et.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(A,B,V)};function C(T,L){let y=t.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new zn(s.x,s.y,{format:ds,type:gi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(L,null,y,u,M,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(L,null,y,m,M,null)}function P(T,L,y,A){let B=null,V=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(V!==void 0)B=V;else if(B=y.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let Z=B.uuid,J=L.uuid,k=c[Z];k===void 0&&(k={},c[Z]=k);let q=k[J];q===void 0&&(q=B.clone(),k[J]=q,L.addEventListener("dispose",b)),B=q}if(B.visible=L.visible,B.wireframe=L.wireframe,A===_r?B.side=L.shadowSide!==null?L.shadowSide:L.side:B.side=L.shadowSide!==null?L.shadowSide:p[L.side],B.alphaMap=L.alphaMap,B.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,B.map=L.map,B.clipShadows=L.clipShadows,B.clippingPlanes=L.clippingPlanes,B.clipIntersection=L.clipIntersection,B.displacementMap=L.displacementMap,B.displacementScale=L.displacementScale,B.displacementBias=L.displacementBias,B.wireframeLinewidth=L.wireframeLinewidth,B.linewidth=L.linewidth,y.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let Z=i.properties.get(B);Z.light=y}return B}function S(T,L,y,A,B){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&B===_r)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let J=t.update(T),k=T.material;if(Array.isArray(k)){let q=J.groups;for(let rt=0,et=q.length;rt<et;rt++){let gt=q[rt],nt=k[gt.materialIndex];if(nt&&nt.visible){let ot=P(T,nt,A,B);T.onBeforeShadow(i,T,L,y,J,ot,gt),i.renderBufferDirect(y,null,J,ot,T,gt),T.onAfterShadow(i,T,L,y,J,ot,gt)}}}else if(k.visible){let q=P(T,k,A,B);T.onBeforeShadow(i,T,L,y,J,q,null),i.renderBufferDirect(y,null,J,q,T,null),T.onAfterShadow(i,T,L,y,J,q,null)}}let Z=T.children;for(let J=0,k=Z.length;J<k;J++)S(Z[J],L,y,A,B)}function b(T){T.target.removeEventListener("dispose",b);for(let y in c){let A=c[y],B=T.target.uuid;B in A&&(A[B].dispose(),delete A[B])}}}function Nv(i,t){function e(){let z=!1,Lt=new Oe,ct=null,Nt=new Oe(0,0,0,0);return{setMask:function(Ot){ct!==Ot&&!z&&(i.colorMask(Ot,Ot,Ot,Ot),ct=Ot)},setLocked:function(Ot){z=Ot},setClear:function(Ot,ft,Kt,Yt,Be){Be===!0&&(Ot*=Yt,ft*=Yt,Kt*=Yt),Lt.set(Ot,ft,Kt,Yt),Nt.equals(Lt)===!1&&(i.clearColor(Ot,ft,Kt,Yt),Nt.copy(Lt))},reset:function(){z=!1,ct=null,Nt.set(-1,0,0,0)}}}function n(){let z=!1,Lt=!1,ct=null,Nt=null,Ot=null;return{setReversed:function(ft){if(Lt!==ft){let Kt=t.get("EXT_clip_control");ft?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),Lt=ft;let Yt=Ot;Ot=null,this.setClear(Yt)}},getReversed:function(){return Lt},setTest:function(ft){ft?lt(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(ft){ct!==ft&&!z&&(i.depthMask(ft),ct=ft)},setFunc:function(ft){if(Lt&&(ft=af[ft]),Nt!==ft){switch(ft){case bo:i.depthFunc(i.NEVER);break;case wo:i.depthFunc(i.ALWAYS);break;case Eo:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case To:i.depthFunc(i.EQUAL);break;case Ao:i.depthFunc(i.GEQUAL);break;case Co:i.depthFunc(i.GREATER);break;case Ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Nt=ft}},setLocked:function(ft){z=ft},setClear:function(ft){Ot!==ft&&(Ot=ft,Lt&&(ft=1-ft),i.clearDepth(ft))},reset:function(){z=!1,ct=null,Nt=null,Ot=null,Lt=!1}}}function s(){let z=!1,Lt=null,ct=null,Nt=null,Ot=null,ft=null,Kt=null,Yt=null,Be=null;return{setTest:function(Pe){z||(Pe?lt(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(Pe){Lt!==Pe&&!z&&(i.stencilMask(Pe),Lt=Pe)},setFunc:function(Pe,In,Hn){(ct!==Pe||Nt!==In||Ot!==Hn)&&(i.stencilFunc(Pe,In,Hn),ct=Pe,Nt=In,Ot=Hn)},setOp:function(Pe,In,Hn){(ft!==Pe||Kt!==In||Yt!==Hn)&&(i.stencilOp(Pe,In,Hn),ft=Pe,Kt=In,Yt=Hn)},setLocked:function(Pe){z=Pe},setClear:function(Pe){Be!==Pe&&(i.clearStencil(Pe),Be=Pe)},reset:function(){z=!1,Lt=null,ct=null,Nt=null,Ot=null,ft=null,Kt=null,Yt=null,Be=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},p={},u={},m=new WeakMap,g=[],M=null,f=!1,d=null,C=null,P=null,S=null,b=null,T=null,L=null,y=new ae(0,0,0),A=0,B=!1,V=null,Z=null,J=null,k=null,q=null,rt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),et=!1,gt=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(gt=parseFloat(/^WebGL (\d)/.exec(nt)[1]),et=gt>=1):nt.indexOf("OpenGL ES")!==-1&&(gt=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),et=gt>=2);let ot=null,ut={},Zt=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),Ce=new Oe().fromArray(Zt),ve=new Oe().fromArray(Vt);function Me(z,Lt,ct,Nt){let Ot=new Uint8Array(4),ft=i.createTexture();i.bindTexture(z,ft),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<ct;Kt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Lt,0,i.RGBA,1,1,Nt,0,i.RGBA,i.UNSIGNED_BYTE,Ot):i.texImage2D(Lt+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ot);return ft}let j={};j[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(sr),_t(!1),Mt(_h),lt(i.CULL_FACE),mt(Ci);function lt(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Ct(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function te(z,Lt){return u[z]!==Lt?(i.bindFramebuffer(z,Lt),u[z]=Lt,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Lt),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Lt),!0):!1}function At(z,Lt){let ct=g,Nt=!1;if(z){ct=m.get(Lt),ct===void 0&&(ct=[],m.set(Lt,ct));let Ot=z.textures;if(ct.length!==Ot.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Kt=Ot.length;ft<Kt;ft++)ct[ft]=i.COLOR_ATTACHMENT0+ft;ct.length=Ot.length,Nt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,Nt=!0);Nt&&i.drawBuffers(ct)}function Xt(z){return M!==z?(i.useProgram(z),M=z,!0):!1}let Re={[Cs]:i.FUNC_ADD,[Ad]:i.FUNC_SUBTRACT,[Cd]:i.FUNC_REVERSE_SUBTRACT};Re[Rd]=i.MIN,Re[Id]=i.MAX;let D={[Pd]:i.ZERO,[Ld]:i.ONE,[Dd]:i.SRC_COLOR,[Sh]:i.SRC_ALPHA,[zd]:i.SRC_ALPHA_SATURATE,[Od]:i.DST_COLOR,[Ud]:i.DST_ALPHA,[Nd]:i.ONE_MINUS_SRC_COLOR,[Mh]:i.ONE_MINUS_SRC_ALPHA,[Bd]:i.ONE_MINUS_DST_COLOR,[Fd]:i.ONE_MINUS_DST_ALPHA,[kd]:i.CONSTANT_COLOR,[Vd]:i.ONE_MINUS_CONSTANT_COLOR,[Hd]:i.CONSTANT_ALPHA,[Gd]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(z,Lt,ct,Nt,Ot,ft,Kt,Yt,Be,Pe){if(z===Ci){f===!0&&(Ct(i.BLEND),f=!1);return}if(f===!1&&(lt(i.BLEND),f=!0),z!==Td){if(z!==d||Pe!==B){if((C!==Cs||b!==Cs)&&(i.blendEquation(i.FUNC_ADD),C=Cs,b=Cs),Pe)switch(z){case xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xh:i.blendFunc(i.ONE,i.ONE);break;case vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:re("WebGLState: Invalid blending: ",z);break}else switch(z){case xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vh:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yh:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",z);break}P=null,S=null,T=null,L=null,y.set(0,0,0),A=0,d=z,B=Pe}return}Ot=Ot||Lt,ft=ft||ct,Kt=Kt||Nt,(Lt!==C||Ot!==b)&&(i.blendEquationSeparate(Re[Lt],Re[Ot]),C=Lt,b=Ot),(ct!==P||Nt!==S||ft!==T||Kt!==L)&&(i.blendFuncSeparate(D[ct],D[Nt],D[ft],D[Kt]),P=ct,S=Nt,T=ft,L=Kt),(Yt.equals(y)===!1||Be!==A)&&(i.blendColor(Yt.r,Yt.g,Yt.b,Be),y.copy(Yt),A=Be),d=z,B=!1}function xt(z,Lt){z.side===Ai?Ct(i.CULL_FACE):lt(i.CULL_FACE);let ct=z.side===Ln;Lt&&(ct=!ct),_t(ct),z.blending===xr&&z.transparent===!1?mt(Ci):mt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let Nt=z.stencilWrite;o.setTest(Nt),Nt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),jt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(z){V!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),V=z)}function Mt(z){z!==bd?(lt(i.CULL_FACE),z!==Z&&(z===_h?i.cullFace(i.BACK):z===wd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),Z=z}function Qt(z){z!==J&&(et&&i.lineWidth(z),J=z)}function jt(z,Lt,ct){z?(lt(i.POLYGON_OFFSET_FILL),(k!==Lt||q!==ct)&&(k=Lt,q=ct,a.getReversed()&&(Lt=-Lt),i.polygonOffset(Lt,ct))):Ct(i.POLYGON_OFFSET_FILL)}function Gt(z){z?lt(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function le(z){z===void 0&&(z=i.TEXTURE0+rt-1),ot!==z&&(i.activeTexture(z),ot=z)}function N(z,Lt,ct){ct===void 0&&(ot===null?ct=i.TEXTURE0+rt-1:ct=ot);let Nt=ut[ct];Nt===void 0&&(Nt={type:void 0,texture:void 0},ut[ct]=Nt),(Nt.type!==z||Nt.texture!==Lt)&&(ot!==ct&&(i.activeTexture(ct),ot=ct),i.bindTexture(z,Lt||j[z]),Nt.type=z,Nt.texture=Lt)}function Ie(){let z=ut[ot];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function me(){try{i.compressedTexImage2D(...arguments)}catch(z){re("WebGLState:",z)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(z){re("WebGLState:",z)}}function _(){try{i.texSubImage2D(...arguments)}catch(z){re("WebGLState:",z)}}function W(){try{i.texSubImage3D(...arguments)}catch(z){re("WebGLState:",z)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(z){re("WebGLState:",z)}}function tt(){try{i.compressedTexSubImage3D(...arguments)}catch(z){re("WebGLState:",z)}}function vt(){try{i.texStorage2D(...arguments)}catch(z){re("WebGLState:",z)}}function Et(){try{i.texStorage3D(...arguments)}catch(z){re("WebGLState:",z)}}function st(){try{i.texImage2D(...arguments)}catch(z){re("WebGLState:",z)}}function ht(){try{i.texImage3D(...arguments)}catch(z){re("WebGLState:",z)}}function Rt(z){return p[z]!==void 0?p[z]:i.getParameter(z)}function Jt(z,Lt){p[z]!==Lt&&(i.pixelStorei(z,Lt),p[z]=Lt)}function wt(z){Ce.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Ce.copy(z))}function bt(z){ve.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),ve.copy(z))}function Wt(z,Lt){let ct=c.get(Lt);ct===void 0&&(ct=new WeakMap,c.set(Lt,ct));let Nt=ct.get(z);Nt===void 0&&(Nt=i.getUniformBlockIndex(Lt,z.name),ct.set(z,Nt))}function ee(z,Lt){let Nt=c.get(Lt).get(z);l.get(Lt)!==Nt&&(i.uniformBlockBinding(Lt,Nt,z.__bindingPointIndex),l.set(Lt,Nt))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},ot=null,ut={},u={},m=new WeakMap,g=[],M=null,f=!1,d=null,C=null,P=null,S=null,b=null,T=null,L=null,y=new ae(0,0,0),A=0,B=!1,V=null,Z=null,J=null,k=null,q=null,Ce.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Ct,bindFramebuffer:te,drawBuffers:At,useProgram:Xt,setBlending:mt,setMaterial:xt,setFlipSided:_t,setCullFace:Mt,setLineWidth:Qt,setPolygonOffset:jt,setScissorTest:Gt,activeTexture:le,bindTexture:N,unbindTexture:Ie,compressedTexImage2D:me,compressedTexImage3D:E,texImage2D:st,texImage3D:ht,pixelStorei:Jt,getParameter:Rt,updateUBOMapping:Wt,uniformBlockBinding:ee,texStorage2D:vt,texStorage3D:Et,texSubImage2D:_,texSubImage3D:W,compressedTexSubImage2D:Y,compressedTexSubImage3D:tt,scissor:wt,viewport:bt,reset:ce}}function Uv(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap,p=new Set,u,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,_){return g?new OffscreenCanvas(E,_):Zr("canvas")}function f(E,_,W){let Y=1,tt=me(E);if((tt.width>W||tt.height>W)&&(Y=W/Math.max(tt.width,tt.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let vt=Math.floor(Y*tt.width),Et=Math.floor(Y*tt.height);u===void 0&&(u=M(vt,Et));let st=_?M(vt,Et):u;return st.width=vt,st.height=Et,st.getContext("2d").drawImage(E,0,0,vt,Et),ie("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+vt+"x"+Et+")."),st}else return"data"in E&&ie("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),E;return E}function d(E){return E.generateMipmaps}function C(E){i.generateMipmap(E)}function P(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,_,W,Y,tt,vt=!1){if(E!==null){if(i[E]!==void 0)return i[E];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Et;Y&&(Et=t.get("EXT_texture_norm16"),Et||ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=_;if(_===i.RED&&(W===i.FLOAT&&(st=i.R32F),W===i.HALF_FLOAT&&(st=i.R16F),W===i.UNSIGNED_BYTE&&(st=i.R8),W===i.UNSIGNED_SHORT&&Et&&(st=Et.R16_EXT),W===i.SHORT&&Et&&(st=Et.R16_SNORM_EXT)),_===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(st=i.R8UI),W===i.UNSIGNED_SHORT&&(st=i.R16UI),W===i.UNSIGNED_INT&&(st=i.R32UI),W===i.BYTE&&(st=i.R8I),W===i.SHORT&&(st=i.R16I),W===i.INT&&(st=i.R32I)),_===i.RG&&(W===i.FLOAT&&(st=i.RG32F),W===i.HALF_FLOAT&&(st=i.RG16F),W===i.UNSIGNED_BYTE&&(st=i.RG8),W===i.UNSIGNED_SHORT&&Et&&(st=Et.RG16_EXT),W===i.SHORT&&Et&&(st=Et.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(st=i.RG8UI),W===i.UNSIGNED_SHORT&&(st=i.RG16UI),W===i.UNSIGNED_INT&&(st=i.RG32UI),W===i.BYTE&&(st=i.RG8I),W===i.SHORT&&(st=i.RG16I),W===i.INT&&(st=i.RG32I)),_===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(st=i.RGB8UI),W===i.UNSIGNED_SHORT&&(st=i.RGB16UI),W===i.UNSIGNED_INT&&(st=i.RGB32UI),W===i.BYTE&&(st=i.RGB8I),W===i.SHORT&&(st=i.RGB16I),W===i.INT&&(st=i.RGB32I)),_===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),W===i.UNSIGNED_INT&&(st=i.RGBA32UI),W===i.BYTE&&(st=i.RGBA8I),W===i.SHORT&&(st=i.RGBA16I),W===i.INT&&(st=i.RGBA32I)),_===i.RGB&&(W===i.UNSIGNED_SHORT&&Et&&(st=Et.RGB16_EXT),W===i.SHORT&&Et&&(st=Et.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),_===i.RGBA){let ht=vt?Yr:Te.getTransfer(tt);W===i.FLOAT&&(st=i.RGBA32F),W===i.HALF_FLOAT&&(st=i.RGBA16F),W===i.UNSIGNED_BYTE&&(st=ht===Fe?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&Et&&(st=Et.RGBA16_EXT),W===i.SHORT&&Et&&(st=Et.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function b(E,_){let W;return E?_===null||_===pi||_===yr?W=i.DEPTH24_STENCIL8:_===mi?W=i.DEPTH32F_STENCIL8:_===vr&&(W=i.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===pi||_===yr?W=i.DEPTH_COMPONENT24:_===mi?W=i.DEPTH_COMPONENT32F:_===vr&&(W=i.DEPTH_COMPONENT16),W}function T(E,_){return d(E)===!0||E.isFramebufferTexture&&E.minFilter!==gn&&E.minFilter!==vn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function L(E){let _=E.target;_.removeEventListener("dispose",L),A(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&p.delete(_)}function y(E){let _=E.target;_.removeEventListener("dispose",y),V(_)}function A(E){let _=n.get(E);if(_.__webglInit===void 0)return;let W=E.source,Y=m.get(W);if(Y){let tt=Y[_.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&B(E),Object.keys(Y).length===0&&m.delete(W)}n.remove(E)}function B(E){let _=n.get(E);i.deleteTexture(_.__webglTexture);let W=E.source,Y=m.get(W);delete Y[_.__cacheKey],a.memory.textures--}function V(E){let _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let tt=0;tt<_.__webglFramebuffer[Y].length;tt++)i.deleteFramebuffer(_.__webglFramebuffer[Y][tt]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let W=E.textures;for(let Y=0,tt=W.length;Y<tt;Y++){let vt=n.get(W[Y]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(W[Y])}n.remove(E)}let Z=0;function J(){Z=0}function k(){return Z}function q(E){Z=E}function rt(){let E=Z;return E>=s.maxTextures&&ie("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,E}function et(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function gt(E,_){let W=n.get(E);if(E.isVideoTexture&&N(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&W.__version!==E.version){let Y=E.image;if(Y===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(W,E,_);return}}else E.isExternalTexture&&(W.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+_)}function nt(E,_){let W=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){Ct(W,E,_);return}else E.isExternalTexture&&(W.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+_)}function ot(E,_){let W=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){Ct(W,E,_);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+_)}function ut(E,_){let W=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&W.__version!==E.version){te(W,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+_)}let Zt={[Io]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[Po]:i.MIRRORED_REPEAT},Vt={[gn]:i.NEAREST,[$d]:i.NEAREST_MIPMAP_NEAREST,[Ta]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[pl]:i.LINEAR_MIPMAP_NEAREST,[hs]:i.LINEAR_MIPMAP_LINEAR},Ce={[Jd]:i.NEVER,[ef]:i.ALWAYS,[Kd]:i.LESS,[jl]:i.LEQUAL,[jd]:i.EQUAL,[Ql]:i.GEQUAL,[Qd]:i.GREATER,[tf]:i.NOTEQUAL};function ve(E,_){if(_.type===mi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===vn||_.magFilter===pl||_.magFilter===Ta||_.magFilter===hs||_.minFilter===vn||_.minFilter===pl||_.minFilter===Ta||_.minFilter===hs)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Zt[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Zt[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Zt[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Vt[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Vt[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ce[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===gn||_.minFilter!==Ta&&_.minFilter!==hs||_.type===mi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Me(E,_){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",L));let Y=_.source,tt=m.get(Y);tt===void 0&&(tt={},m.set(Y,tt));let vt=et(_);if(vt!==E.__cacheKey){tt[vt]===void 0&&(tt[vt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),tt[vt].usedTimes++;let Et=tt[E.__cacheKey];Et!==void 0&&(tt[E.__cacheKey].usedTimes--,Et.usedTimes===0&&B(_)),E.__cacheKey=vt,E.__webglTexture=tt[vt].texture}return W}function j(E,_,W){return Math.floor(Math.floor(E/W)/_)}function lt(E,_,W,Y){let vt=E.updateRanges;if(vt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,W,Y,_.data);else{vt.sort((Jt,wt)=>Jt.start-wt.start);let Et=0;for(let Jt=1;Jt<vt.length;Jt++){let wt=vt[Et],bt=vt[Jt],Wt=wt.start+wt.count,ee=j(bt.start,_.width,4),ce=j(wt.start,_.width,4);bt.start<=Wt+1&&ee===ce&&j(bt.start+bt.count-1,_.width,4)===ee?wt.count=Math.max(wt.count,bt.start+bt.count-wt.start):(++Et,vt[Et]=bt)}vt.length=Et+1;let st=e.getParameter(i.UNPACK_ROW_LENGTH),ht=e.getParameter(i.UNPACK_SKIP_PIXELS),Rt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Jt=0,wt=vt.length;Jt<wt;Jt++){let bt=vt[Jt],Wt=Math.floor(bt.start/4),ee=Math.ceil(bt.count/4),ce=Wt%_.width,z=Math.floor(Wt/_.width),Lt=ee,ct=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,ce,z,Lt,ct,W,Y,_.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,st),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function Ct(E,_,W){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);let tt=Me(E,_),vt=_.source;e.bindTexture(Y,E.__webglTexture,i.TEXTURE0+W);let Et=n.get(vt);if(vt.version!==Et.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ct=Te.getPrimaries(Te.workingColorSpace),Nt=_.colorSpace===$i?null:Te.getPrimaries(_.colorSpace),Ot=_.colorSpace===$i||ct===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ht=f(_.image,!1,s.maxTextureSize);ht=Ie(_,ht);let Rt=r.convert(_.format,_.colorSpace),Jt=r.convert(_.type),wt=S(_.internalFormat,Rt,Jt,_.normalized,_.colorSpace,_.isVideoTexture);ve(Y,_);let bt,Wt=_.mipmaps,ee=_.isVideoTexture!==!0,ce=Et.__version===void 0||tt===!0,z=vt.dataReady,Lt=T(_,ht);if(_.isDepthTexture)wt=b(_.format===us,_.type),ce&&(ee?e.texStorage2D(i.TEXTURE_2D,1,wt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,wt,ht.width,ht.height,0,Rt,Jt,null));else if(_.isDataTexture)if(Wt.length>0){ee&&ce&&e.texStorage2D(i.TEXTURE_2D,Lt,wt,Wt[0].width,Wt[0].height);for(let ct=0,Nt=Wt.length;ct<Nt;ct++)bt=Wt[ct],ee?z&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,bt.width,bt.height,Rt,Jt,bt.data):e.texImage2D(i.TEXTURE_2D,ct,wt,bt.width,bt.height,0,Rt,Jt,bt.data);_.generateMipmaps=!1}else ee?(ce&&e.texStorage2D(i.TEXTURE_2D,Lt,wt,ht.width,ht.height),z&&lt(_,ht,Rt,Jt)):e.texImage2D(i.TEXTURE_2D,0,wt,ht.width,ht.height,0,Rt,Jt,ht.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ee&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,wt,Wt[0].width,Wt[0].height,ht.depth);for(let ct=0,Nt=Wt.length;ct<Nt;ct++)if(bt=Wt[ct],_.format!==ni)if(Rt!==null)if(ee){if(z)if(_.layerUpdates.size>0){let Ot=$h(bt.width,bt.height,_.format,_.type);for(let ft of _.layerUpdates){let Kt=bt.data.subarray(ft*Ot/bt.data.BYTES_PER_ELEMENT,(ft+1)*Ot/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,ft,bt.width,bt.height,1,Rt,Kt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,bt.width,bt.height,ht.depth,Rt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,wt,bt.width,bt.height,ht.depth,0,bt.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,bt.width,bt.height,ht.depth,Rt,Jt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,wt,bt.width,bt.height,ht.depth,0,Rt,Jt,bt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{ee&&ce&&e.texStorage2D(i.TEXTURE_2D,Lt,wt,Wt[0].width,Wt[0].height);for(let ct=0,Nt=Wt.length;ct<Nt;ct++)bt=Wt[ct],_.format!==ni?Rt!==null?ee?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,bt.width,bt.height,Rt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,wt,bt.width,bt.height,0,bt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?z&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,bt.width,bt.height,Rt,Jt,bt.data):e.texImage2D(i.TEXTURE_2D,ct,wt,bt.width,bt.height,0,Rt,Jt,bt.data)}else if(_.isDataArrayTexture)if(ee){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,wt,ht.width,ht.height,ht.depth),z)if(_.layerUpdates.size>0){let ct=$h(ht.width,ht.height,_.format,_.type);for(let Nt of _.layerUpdates){let Ot=ht.data.subarray(Nt*ct/ht.data.BYTES_PER_ELEMENT,(Nt+1)*ct/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Nt,ht.width,ht.height,1,Rt,Jt,Ot)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Rt,Jt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,ht.width,ht.height,ht.depth,0,Rt,Jt,ht.data);else if(_.isData3DTexture)ee?(ce&&e.texStorage3D(i.TEXTURE_3D,Lt,wt,ht.width,ht.height,ht.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Rt,Jt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,wt,ht.width,ht.height,ht.depth,0,Rt,Jt,ht.data);else if(_.isFramebufferTexture){if(ce)if(ee)e.texStorage2D(i.TEXTURE_2D,Lt,wt,ht.width,ht.height);else{let ct=ht.width,Nt=ht.height;for(let Ot=0;Ot<Lt;Ot++)e.texImage2D(i.TEXTURE_2D,Ot,wt,ct,Nt,0,Rt,Jt,null),ct>>=1,Nt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let ct=i.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),ht.parentNode!==ct){ct.appendChild(ht),p.add(_),ct.onpaint=Nt=>{let Ot=Nt.changedElements;for(let ft of p)Ot.includes(ft.image)&&(ft.needsUpdate=!0)},ct.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ht);else{let Ot=i.RGBA,ft=i.RGBA,Kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ot,ft,Kt,ht)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(ee&&ce){let ct=me(Wt[0]);e.texStorage2D(i.TEXTURE_2D,Lt,wt,ct.width,ct.height)}for(let ct=0,Nt=Wt.length;ct<Nt;ct++)bt=Wt[ct],ee?z&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Rt,Jt,bt):e.texImage2D(i.TEXTURE_2D,ct,wt,Rt,Jt,bt);_.generateMipmaps=!1}else if(ee){if(ce){let ct=me(ht);e.texStorage2D(i.TEXTURE_2D,Lt,wt,ct.width,ct.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Jt,ht)}else e.texImage2D(i.TEXTURE_2D,0,wt,Rt,Jt,ht);d(_)&&C(Y),Et.__version=vt.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function te(E,_,W){if(_.image.length!==6)return;let Y=Me(E,_),tt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+W);let vt=n.get(tt);if(tt.version!==vt.__version||Y===!0){e.activeTexture(i.TEXTURE0+W);let Et=Te.getPrimaries(Te.workingColorSpace),st=_.colorSpace===$i?null:Te.getPrimaries(_.colorSpace),ht=_.colorSpace===$i||Et===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Rt=_.isCompressedTexture||_.image[0].isCompressedTexture,Jt=_.image[0]&&_.image[0].isDataTexture,wt=[];for(let ft=0;ft<6;ft++)!Rt&&!Jt?wt[ft]=f(_.image[ft],!0,s.maxCubemapSize):wt[ft]=Jt?_.image[ft].image:_.image[ft],wt[ft]=Ie(_,wt[ft]);let bt=wt[0],Wt=r.convert(_.format,_.colorSpace),ee=r.convert(_.type),ce=S(_.internalFormat,Wt,ee,_.normalized,_.colorSpace),z=_.isVideoTexture!==!0,Lt=vt.__version===void 0||Y===!0,ct=tt.dataReady,Nt=T(_,bt);ve(i.TEXTURE_CUBE_MAP,_);let Ot;if(Rt){z&&Lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,ce,bt.width,bt.height);for(let ft=0;ft<6;ft++){Ot=wt[ft].mipmaps;for(let Kt=0;Kt<Ot.length;Kt++){let Yt=Ot[Kt];_.format!==ni?Wt!==null?z?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Kt,0,0,Yt.width,Yt.height,Wt,Yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Kt,ce,Yt.width,Yt.height,0,Yt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Kt,0,0,Yt.width,Yt.height,Wt,ee,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Kt,ce,Yt.width,Yt.height,0,Wt,ee,Yt.data)}}}else{if(Ot=_.mipmaps,z&&Lt){Ot.length>0&&Nt++;let ft=me(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,ce,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(Jt){z?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,wt[ft].width,wt[ft].height,Wt,ee,wt[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ce,wt[ft].width,wt[ft].height,0,Wt,ee,wt[ft].data);for(let Kt=0;Kt<Ot.length;Kt++){let Be=Ot[Kt].image[ft].image;z?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Kt+1,0,0,Be.width,Be.height,Wt,ee,Be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Kt+1,ce,Be.width,Be.height,0,Wt,ee,Be.data)}}else{z?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Wt,ee,wt[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ce,Wt,ee,wt[ft]);for(let Kt=0;Kt<Ot.length;Kt++){let Yt=Ot[Kt];z?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Kt+1,0,0,Wt,ee,Yt.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Kt+1,ce,Wt,ee,Yt.image[ft])}}}d(_)&&C(i.TEXTURE_CUBE_MAP),vt.__version=tt.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function At(E,_,W,Y,tt,vt){let Et=r.convert(W.format,W.colorSpace),st=r.convert(W.type),ht=S(W.internalFormat,Et,st,W.normalized,W.colorSpace),Rt=n.get(_),Jt=n.get(W);if(Jt.__renderTarget=_,!Rt.__hasExternalTextures){let wt=Math.max(1,_.width>>vt),bt=Math.max(1,_.height>>vt);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,vt,ht,wt,bt,_.depth,0,Et,st,null):e.texImage2D(tt,vt,ht,wt,bt,0,Et,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),le(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,tt,Jt.__webglTexture,0,Gt(_)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,tt,Jt.__webglTexture,vt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(E,_,W){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){let Y=_.depthTexture,tt=Y&&Y.isDepthTexture?Y.type:null,vt=b(_.stencilBuffer,tt),Et=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;le(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(_),vt,_.width,_.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(_),vt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,vt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,E)}else{let Y=_.textures;for(let tt=0;tt<Y.length;tt++){let vt=Y[tt],Et=r.convert(vt.format,vt.colorSpace),st=r.convert(vt.type),ht=S(vt.internalFormat,Et,st,vt.normalized,vt.colorSpace);le(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(_),ht,_.width,_.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(_),ht,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ht,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(E,_,W){let Y=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(_.depthTexture);if(tt.__renderTarget=_,(!tt.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,_.depthTexture.addEventListener("dispose",L)),tt.__webglTexture===void 0){tt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),ve(i.TEXTURE_CUBE_MAP,_.depthTexture);let Rt=r.convert(_.depthTexture.format),Jt=r.convert(_.depthTexture.type),wt;_.depthTexture.format===bi?wt=i.DEPTH_COMPONENT24:_.depthTexture.format===us&&(wt=i.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,wt,_.width,_.height,0,Rt,Jt,null)}}else gt(_.depthTexture,0);let vt=tt.__webglTexture,Et=Gt(_),st=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,ht=_.depthTexture.format===us?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===bi)le(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,st,vt,0,Et):i.framebufferTexture2D(i.FRAMEBUFFER,ht,st,vt,0);else if(_.depthTexture.format===us)le(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,st,vt,0,Et):i.framebufferTexture2D(i.FRAMEBUFFER,ht,st,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function D(E){let _=n.get(E),W=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let Y=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let tt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",tt)};Y.addEventListener("dispose",tt),_.__depthDisposeCallback=tt}_.__boundDepthTexture=Y}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(W)for(let Y=0;Y<6;Y++)Re(_.__webglFramebuffer[Y],E,Y);else{let Y=E.texture.mipmaps;Y&&Y.length>0?Re(_.__webglFramebuffer[0],E,0):Re(_.__webglFramebuffer,E,0)}else if(W){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),Xt(_.__webglDepthbuffer[Y],E,!1);else{let tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,vt)}}else{let Y=E.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Xt(_.__webglDepthbuffer,E,!1);else{let tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,vt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(E,_,W){let Y=n.get(E);_!==void 0&&At(Y.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&D(E)}function xt(E){let _=E.texture,W=n.get(E),Y=n.get(_);E.addEventListener("dispose",y);let tt=E.textures,vt=E.isWebGLCubeRenderTarget===!0,Et=tt.length>1;if(Et||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),vt){W.__webglFramebuffer=[];for(let st=0;st<6;st++)if(_.mipmaps&&_.mipmaps.length>0){W.__webglFramebuffer[st]=[];for(let ht=0;ht<_.mipmaps.length;ht++)W.__webglFramebuffer[st][ht]=i.createFramebuffer()}else W.__webglFramebuffer[st]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){W.__webglFramebuffer=[];for(let st=0;st<_.mipmaps.length;st++)W.__webglFramebuffer[st]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Et)for(let st=0,ht=tt.length;st<ht;st++){let Rt=n.get(tt[st]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&le(E)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let st=0;st<tt.length;st++){let ht=tt[st];W.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[st]);let Rt=r.convert(ht.format,ht.colorSpace),Jt=r.convert(ht.type),wt=S(ht.internalFormat,Rt,Jt,ht.normalized,ht.colorSpace,E.isXRRenderTarget===!0),bt=Gt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,wt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,W.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Xt(W.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(vt){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ve(i.TEXTURE_CUBE_MAP,_);for(let st=0;st<6;st++)if(_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)At(W.__webglFramebuffer[st][ht],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ht);else At(W.__webglFramebuffer[st],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);d(_)&&C(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let st=0,ht=tt.length;st<ht;st++){let Rt=tt[st],Jt=n.get(Rt),wt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(wt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,Jt.__webglTexture),ve(wt,Rt),At(W.__webglFramebuffer,E,Rt,i.COLOR_ATTACHMENT0+st,wt,0),d(Rt)&&C(wt)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(st=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,Y.__webglTexture),ve(st,_),_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)At(W.__webglFramebuffer[ht],E,_,i.COLOR_ATTACHMENT0,st,ht);else At(W.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,st,0);d(_)&&C(st),e.unbindTexture()}E.depthBuffer&&D(E)}function _t(E){let _=E.textures;for(let W=0,Y=_.length;W<Y;W++){let tt=_[W];if(d(tt)){let vt=P(E),Et=n.get(tt).__webglTexture;e.bindTexture(vt,Et),C(vt),e.unbindTexture()}}}let Mt=[],Qt=[];function jt(E){if(E.samples>0){if(le(E)===!1){let _=E.textures,W=E.width,Y=E.height,tt=i.COLOR_BUFFER_BIT,vt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(E),st=_.length>1;if(st)for(let Rt=0;Rt<_.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);let ht=E.texture.mipmaps;ht&&ht.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Rt=0;Rt<_.length;Rt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Rt]);let Jt=n.get(_[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,W,Y,0,0,W,Y,tt,i.NEAREST),l===!0&&(Mt.length=0,Qt.length=0,Mt.push(i.COLOR_ATTACHMENT0+Rt),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(Mt.push(vt),Qt.push(vt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Qt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let Rt=0;Rt<_.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Rt]);let Jt=n.get(_[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Gt(E){return Math.min(s.maxSamples,E.samples)}function le(E){let _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(E){let _=a.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Ie(E,_){let W=E.colorSpace,Y=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||W!==qr&&W!==$i&&(Te.getTransfer(W)===Fe?(Y!==ni||tt!==kn)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",W)),_}function me(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=rt,this.resetTextureUnits=J,this.getTextureUnits=k,this.setTextureUnits=q,this.setTexture2D=gt,this.setTexture2DArray=nt,this.setTexture3D=ot,this.setTextureCube=ut,this.rebindTextures=mt,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=At,this.useMultisampledRTT=le,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Fv(i,t){function e(n,s=$i){let r,a=Te.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ph)return i.BYTE;if(n===Lh)return i.SHORT;if(n===vr)return i.UNSIGNED_SHORT;if(n===ml)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===mi)return i.FLOAT;if(n===gi)return i.HALF_FLOAT;if(n===Uh)return i.ALPHA;if(n===Fh)return i.RGB;if(n===ni)return i.RGBA;if(n===bi)return i.DEPTH_COMPONENT;if(n===us)return i.DEPTH_STENCIL;if(n===Oh)return i.RED;if(n===xl)return i.RED_INTEGER;if(n===ds)return i.RG;if(n===vl)return i.RG_INTEGER;if(n===yl)return i.RGBA_INTEGER;if(n===Aa||n===Ca||n===Ra||n===Ia)if(a===Fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sl||n===Ml||n===bl||n===wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===El||n===Tl||n===Al||n===Cl||n===Rl||n===Pa||n===Il)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===El||n===Tl)return a===Fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Al)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Cl)return r.COMPRESSED_R11_EAC;if(n===Rl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Pa)return r.COMPRESSED_RG11_EAC;if(n===Il)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pl||n===Ll||n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Vl||n===Hl||n===Gl||n===Wl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ul)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wl)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xl||n===$l||n===ql)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xl)return a===Fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yl||n===Zl||n===La||n===Jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===La)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ov=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bv=`
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

}`,au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new sa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xn({vertexShader:Ov,fragmentShader:Bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new An(new fa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ou=class extends wi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,m=null,g=null,M=typeof XRWebGLBinding<"u",f=new au,d={},C=e.getContextAttributes(),P=null,S=null,b=[],T=[],L=new Pt,y=null,A=null,B=new Tn;B.viewport=new Oe;let V=new Tn;V.viewport=new Oe;let Z=[B,V],J=new hl,k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let lt=b[j];return lt===void 0&&(lt=new hr,b[j]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(j){let lt=b[j];return lt===void 0&&(lt=new hr,b[j]=lt),lt.getGripSpace()},this.getHand=function(j){let lt=b[j];return lt===void 0&&(lt=new hr,b[j]=lt),lt.getHandSpace()};function rt(j){let lt=T.indexOf(j.inputSource);if(lt===-1)return;let Ct=b[lt];Ct!==void 0&&(Ct.update(j.inputSource,j.frame,c||a),Ct.dispatchEvent({type:j.type,data:j.inputSource}))}function et(){s.removeEventListener("select",rt),s.removeEventListener("selectstart",rt),s.removeEventListener("selectend",rt),s.removeEventListener("squeeze",rt),s.removeEventListener("squeezestart",rt),s.removeEventListener("squeezeend",rt),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",gt);for(let j=0;j<b.length;j++){let lt=T[j];lt!==null&&(T[j]=null,b[j].disconnect(lt))}k=null,q=null,f.reset();for(let j in d)delete d[j];if(t.setRenderTarget(P),m=null,u=null,p=null,s=null,S=null,Me.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(L.width,L.height,!1),A!==null){let j=A.camera;j.fov=A.fov,j.zoom=A.zoom,j.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(P=t.getRenderTarget(),s.addEventListener("select",rt),s.addEventListener("selectstart",rt),s.addEventListener("selectend",rt),s.addEventListener("squeeze",rt),s.addEventListener("squeezestart",rt),s.addEventListener("squeezeend",rt),s.addEventListener("end",et),s.addEventListener("inputsourceschange",gt),C.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(L),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,te=null,At=null;C.depth&&(At=C.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=C.stencil?us:bi,te=C.stencil?yr:pi);let Xt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new zn(u.textureWidth,u.textureHeight,{format:ni,type:kn,depthTexture:new is(u.textureWidth,u.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ct={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Ct),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new zn(m.framebufferWidth,m.framebufferHeight,{format:ni,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function gt(j){for(let lt=0;lt<j.removed.length;lt++){let Ct=j.removed[lt],te=T.indexOf(Ct);te>=0&&(T[te]=null,b[te].disconnect(Ct))}for(let lt=0;lt<j.added.length;lt++){let Ct=j.added[lt],te=T.indexOf(Ct);if(te===-1){for(let Xt=0;Xt<b.length;Xt++)if(Xt>=T.length){T.push(Ct),te=Xt;break}else if(T[Xt]===null){T[Xt]=Ct,te=Xt;break}if(te===-1)break}let At=b[te];At&&At.connect(Ct)}}let nt=new U,ot=new U;function ut(j,lt,Ct){nt.setFromMatrixPosition(lt.matrixWorld),ot.setFromMatrixPosition(Ct.matrixWorld);let te=nt.distanceTo(ot),At=lt.projectionMatrix.elements,Xt=Ct.projectionMatrix.elements,Re=At[14]/(At[10]-1),D=At[14]/(At[10]+1),mt=(At[9]+1)/At[5],xt=(At[9]-1)/At[5],_t=(At[8]-1)/At[0],Mt=(Xt[8]+1)/Xt[0],Qt=Re*_t,jt=Re*Mt,Gt=te/(-_t+Mt),le=Gt*-_t;if(lt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(le),j.translateZ(Gt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),At[10]===-1)j.projectionMatrix.copy(lt.projectionMatrix),j.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let N=Re+Gt,Ie=D+Gt,me=Qt-le,E=jt+(te-le),_=mt*D/Ie*N,W=xt*D/Ie*N;j.projectionMatrix.makePerspective(me,E,_,W,N,Ie),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Zt(j,lt){lt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(lt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let lt=j.near,Ct=j.far;f.texture!==null&&(f.depthNear>0&&(lt=f.depthNear),f.depthFar>0&&(Ct=f.depthFar)),J.near=V.near=B.near=lt,J.far=V.far=B.far=Ct,(k!==J.near||q!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),k=J.near,q=J.far),J.layers.mask=j.layers.mask|6,B.layers.mask=J.layers.mask&-5,V.layers.mask=J.layers.mask&-3;let te=j.parent,At=J.cameras;Zt(J,te);for(let Xt=0;Xt<At.length;Xt++)Zt(At[Xt],te);At.length===2?ut(J,B,V):J.projectionMatrix.copy(B.projectionMatrix),A===null&&j.isPerspectiveCamera&&(A={camera:j,fov:j.fov,zoom:j.zoom}),Vt(j,J,te)};function Vt(j,lt,Ct){Ct===null?j.matrix.copy(lt.matrixWorld):(j.matrix.copy(Ct.matrixWorld),j.matrix.invert(),j.matrix.multiply(lt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(lt.projectionMatrix),j.projectionMatrixInverse.copy(lt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=or*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(J)},this.getCameraTexture=function(j){return d[j]};let Ce=null;function ve(j,lt){if(h=lt.getViewerPose(c||a),g=lt,h!==null){let Ct=h.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let te=!1;Ct.length!==J.cameras.length&&(J.cameras.length=0,te=!0);for(let D=0;D<Ct.length;D++){let mt=Ct[D],xt=null;if(m!==null)xt=m.getViewport(mt);else{let Mt=p.getViewSubImage(u,mt);xt=Mt.viewport,D===0&&(t.setRenderTargetTextures(S,Mt.colorTexture,Mt.depthStencilTexture),t.setRenderTarget(S))}let _t=Z[D];_t===void 0&&(_t=new Tn,_t.layers.enable(D),_t.viewport=new Oe,Z[D]=_t),_t.matrix.fromArray(mt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(mt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(xt.x,xt.y,xt.width,xt.height),D===0&&(J.matrix.copy(_t.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),te===!0&&J.cameras.push(_t)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=n.getBinding();let D=p.getDepthInformation(Ct[0]);D&&D.isValid&&D.texture&&f.init(D,s.renderState)}if(At&&At.includes("camera-access")&&M){t.state.unbindTexture(),p=n.getBinding();for(let D=0;D<Ct.length;D++){let mt=Ct[D].camera;if(mt){let xt=d[mt];xt||(xt=new sa,d[mt]=xt);let _t=p.getCameraImage(mt);xt.sourceTexture=_t}}}}for(let Ct=0;Ct<b.length;Ct++){let te=T[Ct],At=b[Ct];te!==null&&At!==void 0&&At.update(te,lt,c||a)}Ce&&Ce(j,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),g=null}let Me=new Uf;Me.setAnimationLoop(ve),this.setAnimationLoop=function(j){Ce=j},this.dispose=function(){}}},zv=new ke,Vf=new he;Vf.set(-1,0,0,0,1,0,0,0,1);function kv(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Gh(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,C,P,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(f,d):d.isMeshLambertMaterial?(r(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(f,d),p(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(f,d),u(f,d),d.isMeshPhysicalMaterial&&m(f,d,S)):d.isMeshMatcapMaterial?(r(f,d),g(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),M(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,C,P):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Ln&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Ln&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let C=t.get(d),P=C.envMap,S=C.envMapRotation;P&&(f.envMap.value=P,f.envMapRotation.value.setFromMatrix4(zv.makeRotationFromEuler(S)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Vf),f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,C,P){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*C,f.scale.value=P*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function p(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function u(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,C){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ln&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.retroreflectivity>0&&(f.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=C.texture,f.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function M(f,d){let C=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(C.matrixWorld),f.nearDistance.value=C.shadow.camera.near,f.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vv(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){let T=b.program;n.uniformBlockBinding(S,T)}function c(S,b){let T=s[S.id];T===void 0&&(f(S),T=h(S),s[S.id]=T,S.addEventListener("dispose",C));let L=b.program;n.updateUBOMapping(S,L);let y=t.render.frame;r[S.id]!==y&&(u(S),r[S.id]=y)}function h(S){let b=p();S.__bindingPointIndex=b;let T=i.createBuffer(),L=S.__size,y=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,L,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let b=s[S.id],T=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let y=0,A=T.length;y<A;y++){let B=T[y];if(Array.isArray(B))for(let V=0,Z=B.length;V<Z;V++)m(B[V],y,V,L);else m(B,y,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,b,T,L){if(M(S,b,T,L)===!0){let y=S.__offset,A=S.value;if(Array.isArray(A)){let B=0;for(let V=0;V<A.length;V++){let Z=A[V],J=d(Z);g(Z,S.__data,B),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(B+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,S.__data)}}function g(S,b,T){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,T)}function M(S,b,T,L){let y=S.value,A=b+"_"+T;if(L[A]===void 0)return typeof y=="number"||typeof y=="boolean"?L[A]=y:ArrayBuffer.isView(y)?L[A]=y.slice():L[A]=y.clone(),!0;{let B=L[A];if(typeof y=="number"||typeof y=="boolean"){if(B!==y)return L[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(B.equals(y)===!1)return B.copy(y),!0}}return!1}function f(S){let b=S.uniforms,T=0,L=16;for(let A=0,B=b.length;A<B;A++){let V=Array.isArray(b[A])?b[A]:[b[A]];for(let Z=0,J=V.length;Z<J;Z++){let k=V[Z],q=Array.isArray(k.value)?k.value:[k.value];for(let rt=0,et=q.length;rt<et;rt++){let gt=q[rt],nt=d(gt),ot=T%L,ut=ot%nt.boundary,Zt=ot+ut;T+=ut,Zt!==0&&L-Zt<nt.storage&&(T+=L-Zt),k.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=T,T+=nt.storage}}}let y=T%L;return y>0&&(T+=L-y),S.__size=T,S.__cache={},this}function d(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):ie("WebGLRenderer: Unsupported uniform value type.",S),b}function C(S){let b=S.target;b.removeEventListener("dispose",C);let T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function P(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:P}}var Hv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function Gv(){return Ri===null&&(Ri=new Oo(Hv,16,16,ds,gi),Ri.name="DFG_LUT",Ri.minFilter=vn,Ri.magFilter=vn,Ri.wrapS=Si,Ri.wrapT=Si,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var sc=class{constructor(t={}){let{canvas:e=nf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=kn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=m,f=new Set([yl,vl,xl]),d=new Set([kn,pi,vr,yr,gl,_l]),C=new Uint32Array(4),P=new Int32Array(4),S=new U,b=null,T=null,L=[],y=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,V=!1,Z=null,J=null,k=null,q=null;this._outputColorSpace=$n;let rt=0,et=0,gt=null,nt=-1,ot=null,ut=new Oe,Zt=new Oe,Vt=null,Ce=new ae(0),ve=0,Me=e.width,j=e.height,lt=1,Ct=null,te=null,At=new Oe(0,0,Me,j),Xt=new Oe(0,0,Me,j),Re=!1,D=new ur,mt=!1,xt=!1,_t=new ke,Mt=new U,Qt=new Oe,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function le(){return gt===null?lt:1}let N=n;function Ie(v,F){return e.getContext(v,F)}let me,E,_,W,Y,tt,vt,Et,st,ht,Rt,Jt,wt,bt,Wt,ee,ce,z,Lt,ct,Nt,Ot,ft;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Be,!1),e.addEventListener("webglcontextrestored",Pe,!1),e.addEventListener("webglcontextcreationerror",In,!1),N===null){let F="webgl2";if(N=Ie(F,v),N===null)throw Ie(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(v){throw e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",In,!1),re("WebGLRenderer: "+v.message),v}function Kt(){me=new J_(N),me.init(),Nt=new Fv(N,me),E=new k_(N,me,t,Nt),_=new Nv(N,me),E.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),J=N.createFramebuffer(),k=N.createFramebuffer(),q=N.createFramebuffer(),W=new Q_(N),Y=new yv,tt=new Uv(N,me,_,Y,E,Nt,W),vt=new Z_(B),Et=new eg(N),Ot=new B_(N,Et),st=new K_(N,Et,W,Ot),ht=new ex(N,st,Et,Ot,W),z=new tx(N,E,tt),Wt=new V_(Y),Rt=new vv(B,vt,me,E,Ot,Wt),Jt=new kv(B,Y),wt=new Mv,bt=new Cv(me),ce=new O_(B,vt,_,ht,g,l),ee=new Dv(B,ht,E),ft=new Vv(N,W,E,_),Lt=new z_(N,me,W),ct=new j_(N,me,W),W.programs=Rt.programs,B.capabilities=E,B.extensions=me,B.properties=Y,B.renderLists=wt,B.shadowMap=ee,B.state=_,B.info=W}M!==kn&&(A=new ix(M,e.width,e.height,o,s,r));let Yt=new ou(B,N);this.xr=Yt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=me.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=me.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(v){v!==void 0&&(lt=v,this.setSize(Me,j,!1))},this.getSize=function(v){return v.set(Me,j)},this.setSize=function(v,F,K=!0){if(Yt.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=v,j=F,e.width=Math.floor(v*lt),e.height=Math.floor(F*lt),K===!0&&(e.style.width=v+"px",e.style.height=F+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(Me*lt,j*lt).floor()},this.setDrawingBufferSize=function(v,F,K){Me=v,j=F,lt=K,e.width=Math.floor(v*K),e.height=Math.floor(F*K),this.setViewport(0,0,v,F)},this.setEffects=function(v){if(M===kn){re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let F=0;F<v.length;F++)if(v[F].isOutputPass===!0){ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ut)},this.getViewport=function(v){return v.copy(At)},this.setViewport=function(v,F,K,$){v.isVector4?At.set(v.x,v.y,v.z,v.w):At.set(v,F,K,$),_.viewport(ut.copy(At).multiplyScalar(lt).round())},this.getScissor=function(v){return v.copy(Xt)},this.setScissor=function(v,F,K,$){v.isVector4?Xt.set(v.x,v.y,v.z,v.w):Xt.set(v,F,K,$),_.scissor(Zt.copy(Xt).multiplyScalar(lt).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(v){_.setScissorTest(Re=v)},this.setOpaqueSort=function(v){Ct=v},this.setTransparentSort=function(v){te=v},this.getClearColor=function(v){return v.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(v=!0,F=!0,K=!0){let $=0;if(v){let X=!1;if(gt!==null){let Ft=gt.texture.format;X=f.has(Ft)}if(X){let Ft=gt.texture.type,Bt=d.has(Ft),Ut=ce.getClearColor(),Tt=ce.getClearAlpha(),$t=Ut.r,pe=Ut.g,ye=Ut.b;Bt?(C[0]=$t,C[1]=pe,C[2]=ye,C[3]=Tt,N.clearBufferuiv(N.COLOR,0,C)):(P[0]=$t,P[1]=pe,P[2]=ye,P[3]=Tt,N.clearBufferiv(N.COLOR,0,P))}else $|=N.COLOR_BUFFER_BIT}F&&($|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),Z=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",In,!1),ce.dispose(),wt.dispose(),bt.dispose(),Y.dispose(),vt.dispose(),ht.dispose(),Ot.dispose(),ft.dispose(),Rt.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",Ir),Yt.removeEventListener("sessionend",Xa),un.stop()};function Be(v){v.preventDefault(),Jr("WebGLRenderer: Context Lost."),V=!0}function Pe(){Jr("WebGLRenderer: Context Restored."),V=!1;let v=W.autoReset,F=ee.enabled,K=ee.autoUpdate,$=ee.needsUpdate,X=ee.type;Kt(),W.autoReset=v,ee.enabled=F,ee.autoUpdate=K,ee.needsUpdate=$,ee.type=X}function In(v){re("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Hn(v){let F=v.target;F.removeEventListener("dispose",Hn),Wa(F)}function Wa(v){zs(v),Y.remove(v)}function zs(v){let F=Y.get(v).programs;F!==void 0&&(F.forEach(function(K){Rt.releaseProgram(K)}),v.isShaderMaterial&&Rt.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,K,$,X,Ft){F===null&&(F=jt);let Bt=X.isMesh&&X.matrixWorld.determinantAffine()<0,Ut=wc(v,F,K,$,X);_.setMaterial($,Bt);let Tt=K.index,$t=1;if($.wireframe===!0){if(Tt=st.getWireframeAttribute(K),Tt===void 0)return;$t=2}let pe=K.drawRange,ye=K.attributes.position,qt=pe.start*$t,Ae=(pe.start+pe.count)*$t;Ft!==null&&(qt=Math.max(qt,Ft.start*$t),Ae=Math.min(Ae,(Ft.start+Ft.count)*$t)),Tt!==null?(qt=Math.max(qt,0),Ae=Math.min(Ae,Tt.count)):ye!=null&&(qt=Math.max(qt,0),Ae=Math.min(Ae,ye.count));let Ze=Ae-qt;if(Ze<0||Ze===1/0)return;Ot.setup(X,$,Ut,K,Tt);let Ve,Le=Lt;if(Tt!==null&&(Ve=Et.get(Tt),Le=ct,Le.setIndex(Ve)),X.isMesh)$.wireframe===!0?(_.setLineWidth($.wireframeLinewidth*le()),Le.setMode(N.LINES)):Le.setMode(N.TRIANGLES);else if(X.isLine){let en=$.linewidth;en===void 0&&(en=1),_.setLineWidth(en*le()),X.isLineSegments?Le.setMode(N.LINES):X.isLineLoop?Le.setMode(N.LINE_LOOP):Le.setMode(N.LINE_STRIP)}else X.isPoints?Le.setMode(N.POINTS):X.isSprite&&Le.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(me.get("WEBGL_multi_draw"))Le.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let en=X._multiDrawStarts,kt=X._multiDrawCounts,pn=X._multiDrawCount,we=Tt?Et.get(Tt).bytesPerElement:1,$e=Y.get($).currentProgram.getUniforms();for(let Un=0;Un<pn;Un++)$e.setValue(N,"_gl_DrawID",Un),Le.render(en[Un]/we,kt[Un])}else if(X.isInstancedMesh)Le.renderInstances(qt,Ze,X.count);else if(K.isInstancedBufferGeometry){let en=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,kt=Math.min(K.instanceCount,en);Le.renderInstances(qt,Ze,kt)}else Le.render(qt,Ze)};function Cr(v,F,K,$){Z!==null&&v.isNodeMaterial&&Z.setObject($,v),mt===!0&&Wt.setState(v,K,!1),v.transparent===!0&&v.side===Ai&&v.forceSinglePass===!1?(v.side=Ln,v.needsUpdate=!0,Xe(v,F,$),v.side=ls,v.needsUpdate=!0,Xe(v,F,$),v.side=Ai):Xe(v,F,$)}this.compile=function(v,F,K=null){K===null&&(K=v),Z!==null&&Z.renderStart(v,F,K),T=bt.get(K),T.init(F),y.push(T),K.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),v!==K&&v.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),Z!==null&&Z.updateLights(T.state.lightsArray),xt=this.localClippingEnabled,mt=Wt.init(this.clippingPlanes,xt),mt===!0&&Wt.setGlobalState(this.clippingPlanes,F),Z!==null&&ee.render(T.state.shadowsArray,K,F);let $=new Set;return v.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Ft=X.material;if(Ft)if(Array.isArray(Ft))for(let Bt=0;Bt<Ft.length;Bt++){let Ut=Ft[Bt];Cr(Ut,K,F,X),$.add(Ut)}else Cr(Ft,K,F,X),$.add(Ft)}),T=y.pop(),Z!==null&&Z.renderEnd(),$},this.compileAsync=function(v,F,K=null){let $=this.compile(v,F,K);return new Promise(X=>{function Ft(){if($.forEach(function(Bt){let Tt=Y.get(Bt).currentProgram;(Tt===void 0||Tt.isReady())&&$.delete(Bt)}),$.size===0){X(v);return}setTimeout(Ft,10)}me.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let Rr=null;function bc(v){Rr&&Rr(v)}function Ir(){un.stop()}function Xa(){un.start()}let un=new Uf;un.setAnimationLoop(bc),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(v){Rr=v,Yt.setAnimationLoop(v),v===null?un.stop():un.start()},Yt.addEventListener("sessionstart",Ir),Yt.addEventListener("sessionend",Xa),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Z!==null&&Z.renderStart(v,F);let K=Yt.enabled===!0&&Yt.isPresenting===!0,$=A!==null&&(gt===null||K)&&A.begin(B,gt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(F),F=Yt.getCamera()),v.isScene===!0&&v.onBeforeRender(B,v,F,gt),T=bt.get(v,y.length),T.init(F),T.state.textureUnits=tt.getTextureUnits(),y.push(T),_t.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),D.setFromProjectionMatrix(_t,hi,F.reversedDepth),xt=this.localClippingEnabled,mt=Wt.init(this.clippingPlanes,xt),b=wt.get(v,L.length),b.init(),L.push(b),Yt.enabled===!0&&Yt.isPresenting===!0){let Bt=B.xr.getDepthSensingMesh();Bt!==null&&dn(Bt,F,-1/0,B.sortObjects)}dn(v,F,0,B.sortObjects),b.finish(),Z!==null&&Z.updateLights(T.state.lightsArray),B.sortObjects===!0&&b.sort(Ct,te),Gt=Yt.enabled===!1||Yt.isPresenting===!1||Yt.hasDepthSensing()===!1,Gt&&ce.addToRenderList(b,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&Wt.beginShadows();let X=T.state.shadowsArray;if(ee.render(X,v,F),mt===!0&&Wt.endShadows(),($&&A.hasRenderPass())===!1){let Bt=b.opaque,Ut=b.transmissive;if(T.setupLights(),F.isArrayCamera){let Tt=F.cameras;if(Ut.length>0)for(let $t=0,pe=Tt.length;$t<pe;$t++){let ye=Tt[$t];Kn(Bt,Ut,v,ye)}Gt&&ce.render(v);for(let $t=0,pe=Tt.length;$t<pe;$t++){let ye=Tt[$t];ii(b,v,ye,ye.viewport)}}else Ut.length>0&&Kn(Bt,Ut,v,F),Gt&&ce.render(v),ii(b,v,F)}gt!==null&&et===0&&(tt.updateMultisampleRenderTarget(gt),tt.updateRenderTargetMipmap(gt)),$&&A.end(B),v.isScene===!0&&v.onAfterRender(B,v,F),Ot.resetDefaultState(),nt=-1,ot=null,y.pop(),y.length>0?(T=y[y.length-1],tt.setTextureUnits(T.state.textureUnits),mt===!0&&Wt.setGlobalState(B.clippingPlanes,T.state.camera)):T=null,L.pop(),L.length>0?b=L[L.length-1]:b=null,Z!==null&&Z.renderEnd()};function dn(v,F,K,$){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)K=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLightProbeGrid)T.pushLightProbeGrid(v);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(D)){$&&Qt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(_t);let Bt=ht.update(v),Ut=v.material;Ut.visible&&b.push(v,Bt,Ut,K,Qt.z,null,F)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(D))){let Bt=ht.update(v),Ut=v.material;if($&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Qt.copy(v.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),Qt.copy(Bt.boundingSphere.center)),Qt.applyMatrix4(v.matrixWorld).applyMatrix4(_t)),Array.isArray(Ut)){let Tt=Bt.groups;for(let $t=0,pe=Tt.length;$t<pe;$t++){let ye=Tt[$t],qt=Ut[ye.materialIndex];qt&&qt.visible&&b.push(v,Bt,qt,K,Qt.z,ye,F)}}else Ut.visible&&b.push(v,Bt,Ut,K,Qt.z,null,F)}}let Ft=v.children;for(let Bt=0,Ut=Ft.length;Bt<Ut;Bt++)dn(Ft[Bt],F,K,$)}function ii(v,F,K,$){let{opaque:X,transmissive:Ft,transparent:Bt}=v;T.setupLightsView(K),mt===!0&&Wt.setGlobalState(B.clippingPlanes,K),$&&_.viewport(ut.copy($)),X.length>0&&tn(X,F,K),Ft.length>0&&tn(Ft,F,K),Bt.length>0&&tn(Bt,F,K),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Kn(v,F,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[$.id]===void 0){let qt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[$.id]=new zn(1,1,{generateMipmaps:!0,type:qt?gi:kn,minFilter:hs,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Te.workingColorSpace})}let Ft=T.state.transmissionRenderTarget[$.id],Bt=$.viewport||ut;Ft.setSize(Bt.z*B.transmissionResolutionScale,Bt.w*B.transmissionResolutionScale);let Ut=B.getRenderTarget(),Tt=B.getActiveCubeFace(),$t=B.getActiveMipmapLevel();B.setRenderTarget(Ft),B.getClearColor(Ce),ve=B.getClearAlpha(),ve<1&&B.setClearColor(16777215,.5),B.clear(),Gt&&ce.render(K);let pe=B.toneMapping;B.toneMapping=fi;let ye=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),T.setupLightsView($),mt===!0&&Wt.setGlobalState(B.clippingPlanes,$),tn(v,K,$),tt.updateMultisampleRenderTarget(Ft),tt.updateRenderTargetMipmap(Ft),me.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Ae=0,Ze=F.length;Ae<Ze;Ae++){let Ve=F[Ae],{object:Le,geometry:en,material:kt,group:pn}=Ve;if(kt.side===Ai&&Le.layers.test($.layers)){let we=kt.side;kt.side=Ln,kt.needsUpdate=!0,be(Le,K,$,en,kt,pn),kt.side=we,kt.needsUpdate=!0,qt=!0}}qt===!0&&(tt.updateMultisampleRenderTarget(Ft),tt.updateRenderTargetMipmap(Ft))}B.setRenderTarget(Ut,Tt,$t),B.setClearColor(Ce,ve),ye!==void 0&&($.viewport=ye),B.toneMapping=pe}function tn(v,F,K){let $=F.isScene===!0?F.overrideMaterial:null;for(let X=0,Ft=v.length;X<Ft;X++){let Bt=v[X],{object:Ut,geometry:Tt,group:$t}=Bt,pe=Bt.material;pe.allowOverride===!0&&$!==null&&(pe=$),Ut.layers.test(K.layers)&&be(Ut,F,K,Tt,pe,$t)}}function be(v,F,K,$,X,Ft){Z!==null&&X.isNodeMaterial&&Z.setObject(v,X),v.onBeforeRender(B,F,K,$,X,Ft),v.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),X.onBeforeRender(B,F,K,$,v,Ft),X.transparent===!0&&X.side===Ai&&X.forceSinglePass===!1?(X.side=Ln,X.needsUpdate=!0,B.renderBufferDirect(K,F,$,X,v,Ft),X.side=ls,X.needsUpdate=!0,B.renderBufferDirect(K,F,$,X,v,Ft),X.side=Ai):B.renderBufferDirect(K,F,$,X,v,Ft),v.onAfterRender(B,F,K,$,X,Ft)}function Xe(v,F,K){F.isScene!==!0&&(F=jt);let $=Y.get(v),X=T.state.lights,Ft=T.state.shadowsArray,Bt=X.state.version,Ut=Rt.getParameters(v,X.state,Ft,F,K,T.state.lightProbeGridArray),Tt=Rt.getProgramCacheKey(Ut),$t=$.programs;$.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,$.fog=F.fog;let pe=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;$.envMap=vt.get(v.envMap||$.environment,pe),$.envMapRotation=$.environment!==null&&v.envMap===null?F.environmentRotation:v.envMapRotation,$t===void 0&&(v.addEventListener("dispose",Hn),$t=new Map,$.programs=$t);let ye=$t.get(Tt);if(ye!==void 0){if($.currentProgram===ye&&$.lightsStateVersion===Bt)return Pr(v,Ut),ye}else Ut.uniforms=Rt.getUniforms(v),Z!==null&&v.isNodeMaterial&&Z.build(v,K,Ut),v.onBeforeCompile(Ut,B),ye=Rt.acquireProgram(Ut,Tt),$t.set(Tt,ye),$.uniforms=Ut.uniforms;let qt=$.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(qt.clippingPlanes=Wt.uniform),Pr(v,Ut),$.needsLights=Ec(v),$.lightsStateVersion=Bt,$.needsLights&&(qt.ambientLightColor.value=X.state.ambient,qt.lightProbe.value=X.state.probe,qt.sunLights.value=X.state.sun,qt.sunLightShadows.value=X.state.sunShadow,qt.directionalLights.value=X.state.directional,qt.directionalLightShadows.value=X.state.directionalShadow,qt.spotLights.value=X.state.spot,qt.spotLightShadows.value=X.state.spotShadow,qt.rectAreaLights.value=X.state.rectArea,qt.ltc_1.value=X.state.rectAreaLTC1,qt.ltc_2.value=X.state.rectAreaLTC2,qt.pointLights.value=X.state.point,qt.pointLightShadows.value=X.state.pointShadow,qt.hemisphereLights.value=X.state.hemi,qt.sunShadowMatrix.value=X.state.sunShadowMatrix,qt.sunShadowCascade.value=X.state.sunShadowCascade,qt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,qt.spotLightMatrix.value=X.state.spotLightMatrix,qt.spotLightMap.value=X.state.spotLightMap,qt.pointShadowMatrix.value=X.state.pointShadowMatrix),$.lightProbeGrid=T.state.lightProbeGridArray.length>0,$.currentProgram=ye,$.uniformsList=null,ye}function fn(v){if(v.uniformsList===null){let F=v.currentProgram.getUniforms();v.uniformsList=br.seqWithValue(F.seq,v.uniforms)}return v.uniformsList}function Pr(v,F){let K=Y.get(v);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function $a(v,F){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;S.setFromMatrixPosition(F.matrixWorld);for(let K=0,$=v.length;K<$;K++){let X=v[K];if(X.texture!==null&&X.boundingBox.containsPoint(S))return X}return null}function wc(v,F,K,$,X){F.isScene!==!0&&(F=jt),tt.resetTextureUnits();let Ft=F.fog,Bt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?F.environment:null,Ut=gt===null?B.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Te.workingColorSpace,Tt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,$t=vt.get($.envMap||Bt,Tt),pe=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ye=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),qt=!!K.morphAttributes.position,Ae=!!K.morphAttributes.normal,Ze=!!K.morphAttributes.color,Ve=fi;$.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Ve=B.toneMapping);let Le=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,en=Le!==void 0?Le.length:0,kt=Y.get($),pn=T.state.lights;if(mt===!0&&(xt===!0||v!==ot)){let De=v===ot&&$.id===nt;Wt.setState($,v,De)}let we=!1;$.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==pn.state.version||kt.outputColorSpace!==Ut||X.isBatchedMesh&&kt.batching===!1||!X.isBatchedMesh&&kt.batching===!0||X.isBatchedMesh&&kt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&kt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&kt.instancing===!1||!X.isInstancedMesh&&kt.instancing===!0||X.isSkinnedMesh&&kt.skinning===!1||!X.isSkinnedMesh&&kt.skinning===!0||X.isInstancedMesh&&kt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&kt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&kt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&kt.instancingMorph===!1&&X.morphTexture!==null||kt.envMap!==$t||$.fog===!0&&kt.fog!==Ft||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Wt.numPlanes||kt.numIntersection!==Wt.numIntersection)||kt.vertexAlphas!==pe||kt.vertexTangents!==ye||kt.morphTargets!==qt||kt.morphNormals!==Ae||kt.morphColors!==Ze||kt.toneMapping!==Ve||kt.morphTargetsCount!==en||!!kt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,kt.__version=$.version);let $e=kt.currentProgram;we===!0&&($e=Xe($,F,X),Z&&$.isNodeMaterial&&Z.onUpdateProgram($,$e,kt));let Un=!1,jn=!1,_i=!1,Ne=$e.getUniforms(),Je=kt.uniforms;if(_.useProgram($e.program)&&(Un=!0,jn=!0,_i=!0),$.id!==nt&&(nt=$.id,jn=!0),kt.needsLights){let De=$a(T.state.lightProbeGridArray,X);kt.lightProbeGrid!==De&&(kt.lightProbeGrid=De,jn=!0)}if(Un||ot!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Ne.setValue(N,"projectionMatrix",v.projectionMatrix),Ne.setValue(N,"viewMatrix",v.matrixWorldInverse);let vi=Ne.map.cameraPosition;vi!==void 0&&vi.setValue(N,Mt.setFromMatrixPosition(v.matrixWorld)),E.logarithmicDepthBuffer&&Ne.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ne.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),ot!==v&&(ot=v,jn=!0,_i=!0)}if(kt.needsLights&&(pn.state.sunShadowMap.length>0&&Ne.setValue(N,"sunShadowMap",pn.state.sunShadowMap,tt),pn.state.directionalShadowMap.length>0&&Ne.setValue(N,"directionalShadowMap",pn.state.directionalShadowMap,tt),pn.state.spotShadowMap.length>0&&Ne.setValue(N,"spotShadowMap",pn.state.spotShadowMap,tt),pn.state.pointShadowMap.length>0&&Ne.setValue(N,"pointShadowMap",pn.state.pointShadowMap,tt)),X.isSkinnedMesh){Ne.setOptional(N,X,"bindMatrix"),Ne.setOptional(N,X,"bindMatrixInverse");let De=X.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Ne.setValue(N,"boneTexture",De.boneTexture,tt))}X.isBatchedMesh&&(Ne.setOptional(N,X,"batchingTexture"),Ne.setValue(N,"batchingTexture",X._matricesTexture,tt),Ne.setOptional(N,X,"batchingIdTexture"),Ne.setValue(N,"batchingIdTexture",X._indirectTexture,tt),Ne.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&Ne.setValue(N,"batchingColorTexture",X._colorsTexture,tt));let xi=K.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&z.update(X,K,$e),(jn||kt.receiveShadow!==X.receiveShadow)&&(kt.receiveShadow=X.receiveShadow,Ne.setValue(N,"receiveShadow",X.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&F.environment!==null&&(Je.envMapIntensity.value=F.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=Gv()),jn){if(Ne.setValue(N,"toneMappingExposure",B.toneMappingExposure),kt.needsLights&&qa(Je,_i),Ft&&$.fog===!0&&Jt.refreshFogUniforms(Je,Ft),Jt.refreshMaterialUniforms(Je,$,lt,j,T.state.transmissionRenderTarget[v.id]),kt.needsLights&&kt.lightProbeGrid){let De=kt.lightProbeGrid;Je.probesSH.value=De.texture,Je.probesMin.value.copy(De.boundingBox.min),Je.probesMax.value.copy(De.boundingBox.max),Je.probesResolution.value.copy(De.resolution)}br.upload(N,fn(kt),Je,tt)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(br.upload(N,fn(kt),Je,tt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ne.setValue(N,"center",X.center),Ne.setValue(N,"modelViewMatrix",X.modelViewMatrix),Ne.setValue(N,"normalMatrix",X.normalMatrix),Ne.setValue(N,"modelMatrix",X.matrixWorld),$.uniformsGroups!==void 0){let De=$.uniformsGroups;for(let vi=0,Oi=De.length;vi<Oi;vi++){let Lr=De[vi];ft.update(Lr,$e),ft.bind(Lr,$e)}}return $e}function qa(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.sunLights.needsUpdate=F,v.sunLightShadows.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function Ec(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return rt},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return gt},this.setRenderTargetTextures=function(v,F,K){let $=Y.get(v);$.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Y.get(v.texture).__webglTexture=F,Y.get(v.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,F){let K=Y.get(v);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(v,F=0,K=0){gt=v,rt=F,et=K;let $=null,X=!1,Ft=!1;if(v){let Ut=Y.get(v);if(Ut.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,Ut.__webglFramebuffer),ut.copy(v.viewport),Zt.copy(v.scissor),Vt=v.scissorTest,_.viewport(ut),_.scissor(Zt),_.setScissorTest(Vt),nt=-1;return}else if(Ut.__webglFramebuffer===void 0)tt.setupRenderTarget(v);else if(Ut.__hasExternalTextures)tt.rebindTextures(v,Y.get(v.texture).__webglTexture,Y.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let pe=v.depthTexture;if(Ut.__boundDepthTexture!==pe){if(pe!==null&&Y.has(pe)&&(v.width!==pe.image.width||v.height!==pe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(v)}}let Tt=v.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(Ft=!0);let $t=Y.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray($t[F])?$=$t[F][K]:$=$t[F],X=!0):v.samples>0&&tt.useMultisampledRTT(v)===!1?$=Y.get(v).__webglMultisampledFramebuffer:Array.isArray($t)?$=$t[K]:$=$t,ut.copy(v.viewport),Zt.copy(v.scissor),Vt=v.scissorTest}else ut.copy(At).multiplyScalar(lt).floor(),Zt.copy(Xt).multiplyScalar(lt).floor(),Vt=Re;if(K!==0&&($=J),_.bindFramebuffer(N.FRAMEBUFFER,$)&&_.drawBuffers(v,$),_.viewport(ut),_.scissor(Zt),_.setScissorTest(Vt),X){let Ut=Y.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ut.__webglTexture,K)}else if(Ft){let Ut=F;for(let Tt=0;Tt<v.textures.length;Tt++){let $t=Y.get(v.textures[Tt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Tt,$t.__webglTexture,K,Ut)}}else if(v!==null&&K!==0){let Ut=Y.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ut.__webglTexture,K)}nt=-1};function Ji(v){let F=Y.get(v);return(F.__readFormat!==v.format||F.__readType!==v.type)&&(F.__readFormat=v.format,F.__readType=v.type,F.__formatReadable=E.textureFormatReadable(v.format),F.__typeReadable=E.textureTypeReadable(v.type)),F}this.readRenderTargetPixels=function(v,F,K,$,X,Ft,Bt,Ut=0){if(!(v&&v.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Bt!==void 0&&(Tt=Tt[Bt]),Tt){_.bindFramebuffer(N.FRAMEBUFFER,Tt);try{let $t=v.textures[Ut],pe=$t.format,ye=$t.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ut);let qt=Ji($t);if(qt.__formatReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qt.__typeReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-$&&K>=0&&K<=v.height-X&&N.readPixels(F,K,$,X,Nt.convert(pe),Nt.convert(ye),Ft)}finally{let $t=gt!==null?Y.get(gt).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(v,F,K,$,X,Ft,Bt,Ut=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Bt!==void 0&&(Tt=Tt[Bt]),Tt)if(F>=0&&F<=v.width-$&&K>=0&&K<=v.height-X){_.bindFramebuffer(N.FRAMEBUFFER,Tt);let $t=v.textures[Ut],pe=$t.format,ye=$t.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ut);let qt=Ji($t);if(qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ae=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.bufferData(N.PIXEL_PACK_BUFFER,Ft.byteLength,N.STREAM_READ),N.readPixels(F,K,$,X,Nt.convert(pe),Nt.convert(ye),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ze=gt!==null?Y.get(gt).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Ze);let Ve=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await rf(N,Ve,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ft),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Ae),N.deleteSync(Ve),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,F=null,K=0){let $=Math.pow(2,-K),X=Math.floor(v.image.width*$),Ft=Math.floor(v.image.height*$),Bt=F!==null?F.x:0,Ut=F!==null?F.y:0;tt.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,Bt,Ut,X,Ft),_.unbindTexture()},this.copyTextureToTexture=function(v,F,K=null,$=null,X=0,Ft=0){let Bt,Ut,Tt,$t,pe,ye,qt,Ae,Ze,Ve=v.isCompressedTexture?v.mipmaps[Ft]:v.image;if(K!==null)Bt=K.max.x-K.min.x,Ut=K.max.y-K.min.y,Tt=K.isBox3?K.max.z-K.min.z:1,$t=K.min.x,pe=K.min.y,ye=K.isBox3?K.min.z:0;else{let Je=Math.pow(2,-X);Bt=Math.floor(Ve.width*Je),Ut=Math.floor(Ve.height*Je),v.isDataArrayTexture?Tt=Ve.depth:v.isData3DTexture?Tt=Math.floor(Ve.depth*Je):Tt=1,$t=0,pe=0,ye=0}$!==null?(qt=$.x,Ae=$.y,Ze=$.z):(qt=0,Ae=0,Ze=0);let Le=Nt.convert(F.format),en=Nt.convert(F.type),kt;F.isData3DTexture?(tt.setTexture3D(F,0),kt=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(tt.setTexture2DArray(F,0),kt=N.TEXTURE_2D_ARRAY):(tt.setTexture2D(F,0),kt=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);let pn=_.getParameter(N.UNPACK_ROW_LENGTH),we=_.getParameter(N.UNPACK_IMAGE_HEIGHT),$e=_.getParameter(N.UNPACK_SKIP_PIXELS),Un=_.getParameter(N.UNPACK_SKIP_ROWS),jn=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,Ve.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ve.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,$t),_.pixelStorei(N.UNPACK_SKIP_ROWS,pe),_.pixelStorei(N.UNPACK_SKIP_IMAGES,ye);let _i=v.isDataArrayTexture||v.isData3DTexture,Ne=F.isDataArrayTexture||F.isData3DTexture;if(v.isDepthTexture){let Je=Y.get(v),xi=Y.get(F),De=Y.get(Je.__renderTarget),vi=Y.get(xi.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,De.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let Oi=0;Oi<Tt;Oi++)_i&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Y.get(v).__webglTexture,X,ye+Oi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Y.get(F).__webglTexture,Ft,Ze+Oi)),N.blitFramebuffer($t,pe,Bt,Ut,qt,Ae,Bt,Ut,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(X!==0||v.isRenderTargetTexture||Y.has(v)){let Je=Y.get(v),xi=Y.get(F);_.bindFramebuffer(N.READ_FRAMEBUFFER,k),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,q);for(let De=0;De<Tt;De++)_i?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Je.__webglTexture,X,ye+De):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Je.__webglTexture,X),Ne?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xi.__webglTexture,Ft,Ze+De):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xi.__webglTexture,Ft),X!==0?N.blitFramebuffer($t,pe,Bt,Ut,qt,Ae,Bt,Ut,N.COLOR_BUFFER_BIT,N.NEAREST):Ne?N.copyTexSubImage3D(kt,Ft,qt,Ae,Ze+De,$t,pe,Bt,Ut):N.copyTexSubImage2D(kt,Ft,qt,Ae,$t,pe,Bt,Ut);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ne?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(kt,Ft,qt,Ae,Ze,Bt,Ut,Tt,Le,en,Ve.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(kt,Ft,qt,Ae,Ze,Bt,Ut,Tt,Le,Ve.data):N.texSubImage3D(kt,Ft,qt,Ae,Ze,Bt,Ut,Tt,Le,en,Ve):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ft,qt,Ae,Bt,Ut,Le,en,Ve.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ft,qt,Ae,Ve.width,Ve.height,Le,Ve.data):N.texSubImage2D(N.TEXTURE_2D,Ft,qt,Ae,Bt,Ut,Le,en,Ve);_.pixelStorei(N.UNPACK_ROW_LENGTH,pn),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,we),_.pixelStorei(N.UNPACK_SKIP_PIXELS,$e),_.pixelStorei(N.UNPACK_SKIP_ROWS,Un),_.pixelStorei(N.UNPACK_SKIP_IMAGES,jn),Ft===0&&F.generateMipmaps&&N.generateMipmap(kt),_.unbindTexture()},this.initRenderTarget=function(v){Y.get(v).__webglFramebuffer===void 0&&tt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?tt.setTextureCube(v,0):v.isData3DTexture?tt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?tt.setTexture2DArray(v,0):tt.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){rt=0,et=0,gt=null,_.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}};var Gf=new qn,oc=new U,qi=class extends Sa{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ln(t,3)),this.setAttribute("uv",new ln(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new os(e,6,1);return this.setAttribute("instanceStart",new di(n,3,0)),this.setAttribute("instanceEnd",new di(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new os(e,6,1);return this.setAttribute("instanceColorStart",new di(n,3,0)),this.setAttribute("instanceColorEnd",new di(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new pa(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Gf.setFromBufferAttribute(e),this.boundingBox.union(Gf))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)oc.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(oc)),oc.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(oc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Dt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Pt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Dn.line={uniforms:Da.merge([Dt.common,Dt.fog,Dt.line]),vertexShader:`
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
		`};var Ii=class extends xn{constructor(t){super({type:"LineMaterial",uniforms:Da.clone(Dn.line.uniforms),vertexShader:Dn.line.vertexShader,fragmentShader:Dn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var lu=new Oe,Wf=new U,Xf=new U,yn=new Oe,Sn=new Oe,Pi=new Oe,cu=new U,hu=new ke,Mn=new ba,$f=new U,lc=new qn,cc=new ei,Li=new Oe,Di,Ls;function qf(i,t,e){return Li.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Li.multiplyScalar(1/Li.w),Li.x=Ls/e.width,Li.y=Ls/e.height,Li.applyMatrix4(i.projectionMatrixInverse),Li.multiplyScalar(1/Li.w),Math.abs(Math.max(Li.x,Li.y))}function Wv(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Mn.start.fromBufferAttribute(s,o),Mn.end.fromBufferAttribute(r,o),Mn.applyMatrix4(e);let c=new U,h=new U;Di.distanceSqToSegment(Mn.start,Mn.end,h,c),h.distanceTo(c)<Ls*.5&&t.push({point:h,pointOnLine:c,distance:Di.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function Xv(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),p=-t.near;Di.at(1,Pi),Pi.w=1,Pi.applyMatrix4(t.matrixWorldInverse),Pi.applyMatrix4(n),Pi.multiplyScalar(1/Pi.w),Pi.x*=r.x/2,Pi.y*=r.y/2,Pi.z=0,cu.copy(Pi),hu.multiplyMatrices(t.matrixWorldInverse,a);for(let u=0,m=h;u<m;u++){if(yn.fromBufferAttribute(l,u),Sn.fromBufferAttribute(c,u),yn.w=1,Sn.w=1,yn.applyMatrix4(hu),Sn.applyMatrix4(hu),yn.z>p&&Sn.z>p)continue;if(yn.z>p){let P=yn.z-Sn.z,S=(yn.z-p)/P;yn.lerp(Sn,S)}else if(Sn.z>p){let P=Sn.z-yn.z,S=(Sn.z-p)/P;Sn.lerp(yn,S)}yn.applyMatrix4(n),Sn.applyMatrix4(n),yn.multiplyScalar(1/yn.w),Sn.multiplyScalar(1/Sn.w),yn.x*=r.x/2,yn.y*=r.y/2,Sn.x*=r.x/2,Sn.y*=r.y/2,Mn.start.copy(yn),Mn.start.z=0,Mn.end.copy(Sn),Mn.end.z=0;let M=Mn.closestPointToPointParameter(cu,!0);Mn.at(M,$f);let f=Vh.lerp(yn.z,Sn.z,M),d=f>=-1&&f<=1,C=cu.distanceTo($f)<Ls*.5;if(d&&C){Mn.start.fromBufferAttribute(l,u),Mn.end.fromBufferAttribute(c,u),Mn.start.applyMatrix4(a),Mn.end.applyMatrix4(a);let P=new U,S=new U;Di.distanceSqToSegment(Mn.start,Mn.end,S,P),e.push({point:S,pointOnLine:P,distance:Di.origin.distanceTo(S),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}}var Ds=class extends An{constructor(t=new qi,e=new Ii({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)Wf.fromBufferAttribute(e,a),Xf.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Wf.distanceTo(Xf);let r=new os(s,2,1);return t.setAttribute("instanceDistanceStart",new di(r,1,0)),t.setAttribute("instanceDistanceEnd",new di(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Di=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;Ls=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),cc.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=Ls*.5;else{let p=Math.max(s.near,cc.distanceToPoint(Di.origin));c=qf(s,p,l.resolution)}if(cc.radius+=c,Di.intersectsSphere(cc)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),lc.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=Ls*.5;else{let p=Math.max(s.near,lc.distanceToPoint(Di.origin));h=qf(s,p,l.resolution)}lc.expandByScalar(h),Di.intersectsBox(lc)!==!1&&(n?Wv(this,e):Xv(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(lu),this.material.uniforms.resolution.value.set(lu.z,lu.w))}};function Yf(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:l,CY:c,mcs:h,q:p,list:u,clamp:m,norm:g,munis:M}=i,f=x=>document.querySelector(x),d=x=>String(x).replace(/[<>&"]/g,w=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[w]),C=(x,w)=>[(x-l)*o,(w-c)*o],P=.06,S=t.segs.map(x=>{let w=[],R=[0];for(let O=0;O<x.length;O+=2){let H=C(x[O],x[O+1]);w.length&&R.push(R[R.length-1]+Math.hypot(H[0]-w[w.length-1][0],H[1]-w[w.length-1][1])),w.push(H)}return{p:w,c:R,L:R[R.length-1]}}),b=t.stops.map(([x,w,R,O])=>({n:x,id:O,w:C(w,R),fams:new Set})),T=t.routes.map(([x,w,R])=>({s:x,l:w,c:R})),L=(x,w)=>{let R=x.match(/^R([A-Z]*)(\d*)(.*)$/),O=w.match(/^R([A-Z]*)(\d*)(.*)$/);return(R[1]||"").localeCompare(O[1]||"")||(+R[2]||0)-(+O[2]||0)||R[3].localeCompare(O[3])},y=[...new Set(T.map(x=>x.s))].sort(L),A={};T.forEach(x=>{A[x.s]||(A[x.s]=x.c)});let B=t.pats.map(([x,w,R])=>({stops:x,t:w,segs:R})),V=t.trips.map(([x,w,R,O,H],G)=>({day:x,pat:B[w],fam:T[R].s,c:T[R].c,t0:O,num:H,tid:t.tids[G]})),Z={};y.forEach(x=>Z[x]=new Set),V.forEach(x=>{x.pat.segs.forEach(w=>Z[x.fam].add(w)),x.pat.stops.forEach(w=>b[w].fams.add(x.fam))});let J=t.days.map((x,w)=>V.filter(R=>R.day===w)),k=new Map(V.map(x=>[x.tid,x])),q=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],rt=Math.PI/180,et=3.922*rt,gt=-39.705*rt;function nt(x,w){let R=x*rt+et,O=w*rt,H=Math.cos(gt),G=Math.sin(gt),Q=Math.cos(O),it=Math.cos(R)*Q,dt=Math.sin(R)*Q,pt=Math.sin(O),St=Math.atan2(dt,it*H-pt*G),I=Math.asin(pt*H+it*G),at=Math.sqrt(2/(1+Math.cos(St)*Math.cos(I))),yt=at*Math.cos(I)*Math.sin(St),Ht=at*Math.sin(I),[oe,ne,Ee,zt,ge,_e,se]=q;return C((ne+oe*yt-ge)*se,(_e-(zt-Ee*Ht))*se)}let ot=new Map(b.map((x,w)=>[x.id,w]));function ut(x){if(x.g)return x.g;let w=[],R=[],O=[0],H=0;return x.segs.forEach((G,Q)=>{let it=S[G];it.p.forEach((dt,pt)=>{Q&&!pt||(w.push(dt),R.push(H+it.c[pt]))}),H+=it.L,O.push(H)}),x.g={pts:w,cum:R,stopD:O}}function Zt(x,w,R,O){let H=1e18,G=0;for(let Q=0;Q+1<x.pts.length;Q++){if(x.cum[Q+1]<R||x.cum[Q]>O)continue;let it=x.pts[Q],dt=x.pts[Q+1],pt=dt[0]-it[0],St=dt[1]-it[1],I=pt*pt+St*St||1e-9,at=Math.max(0,Math.min(1,((w[0]-it[0])*pt+(w[1]-it[1])*St)/I)),yt=it[0]+pt*at-w[0],Ht=it[1]+St*at-w[1],oe=yt*yt+Ht*Ht;oe<H&&(H=oe,G=x.cum[Q]+at*(x.cum[Q+1]-x.cum[Q]))}return{d:G,err:Math.sqrt(H)}}function Vt(x,w){let R=0,O=x.cum.length-1;if(w<=0)return x.pts[0];if(w>=x.cum[O])return x.pts[O];for(;O-R>1;){let it=R+O>>1;x.cum[it]<=w?R=it:O=it}let H=(w-x.cum[R])/(x.cum[O]-x.cum[R]||1),G=x.pts[R],Q=x.pts[O];return[G[0]+(Q[0]-G[0])*H,G[1]+(Q[1]-G[1])*H]}let Ce=x=>`${x.slice(6,8)}/${x.slice(4,6)}`,ve=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Me(x){let w={};return ve.formatToParts(x).forEach(R=>w[R.type]=R.value),{ymd:w.year+w.month+w.day,min:+w.hour*60+ +w.minute+ +w.second/60}}let j=0,lt=null,Ct=0,te=0;function At(){let x=Me(new Date);if(j===0&&lt==null)return{...x,live:!0};let w=lt==null?x.min:Ct+(j?(performance.now()-te)/6e4*j:0);return{ymd:x.ymd,min:w,live:!1}}let Xt=x=>(x=(Math.round(x)%1440+1440)%1440,String(Math.floor(x/60)).padStart(2,"0")+":"+String(x%60).padStart(2,"0")),Re="https://rodalies.erathegameoftime.com",D={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let x=new URLSearchParams(location.search).get("rt");x&&localStorage.setItem("rod_rt",x);let w=localStorage.getItem("rod_rt");w&&/jhmuyo\.workers\.dev/.test(w)&&(w=Re,localStorage.setItem("rod_rt",w)),D.url=w||Re}catch{D.url=Re}let mt=(x,w)=>fetch(x+w,{cache:"no-store"}).then(R=>{if(!R.ok)throw new Error("HTTP "+R.status);return R.json()}),xt=x=>/^51/.test(x||"");async function _t(){if(!D.url){Qt();return}let x=D.url.replace(/\/+$/,"");mt(x,"/reports.json").then(dt=>{dt&&Array.isArray(dt.items)&&(D.rep=dt.items,D.repSkew=(dt.now||Date.now())-Date.now(),dt.tipos&&(D.tipos=dt.tipos),D.repOk=Date.now())}).catch(()=>{});let w=!D.adifAt||Date.now()-D.adifAt>11e4,[R,O,H,G,Q]=await Promise.allSettled([mt(x,"/trip_updates.json"),mt(x,"/vehicle_positions.json"),mt(x,"/alerts.json"),mt(x,"/notices.json"),w?mt(x,"/adif.json"):Promise.reject(0)]);if(Q.status==="fulfilled"&&Q.value&&Q.value.ok?(D.adif=Q.value,D.adifAt=Date.now()):w&&(D.adifAt=Date.now()-6e4),R.status==="fulfilled"){let dt=new Map,pt=new Map;for(let St of R.value.entity||[]){let I=St.tripUpdate;if(!I||!I.trip||!xt(I.trip.tripId))continue;let at=I.trip.tripId,yt=(I.stopTimeUpdate||[])[0],Ht=I.delay;Ht==null&&yt&&(Ht=(yt.arrival||yt.departure||{}).delay),I.trip.scheduleRelationship==="CANCELED"&&(Ht="X"),Ht!=null&&dt.set(at,Ht),pt.set(at,{next:yt?{sid:yt.stopId,t:+((yt.arrival||yt.departure||{}).time||0)}:null})}D.delays=dt,D.tu=pt,D.ok=Date.now(),D.feedTs=+((R.value.header||{}).timestamp||0)*1e3,D.err=""}else D.err=R.reason&&R.reason.message||"sin respuesta";if(O.status==="fulfilled"){let dt=new Map,pt=Date.now()/1e3;for(let St of O.value.entity||[]){let I=St.vehicle;if(!I||!I.trip||!xt(I.trip.tripId)||!I.position)continue;let at=I.vehicle&&I.vehicle.label||"",yt=at.match(/PLATF\.\(([^)]+)\)/),Ht=D.vp.get(I.trip.tripId),oe={tid:I.trip.tripId,w:nt(+I.position.longitude,+I.position.latitude),st:I.currentStatus||"",sid:I.stopId||"",ts:+I.timestamp||pt,label:at,plat:yt?yt[1]:"",fam:(at.split("-")[0]||"").trim(),num:I.vehicle&&I.vehicle.id||""};oe.disp=Ht?Ht.disp:null,dt.set(oe.tid,oe)}D.vp=dt,D.okVP=Date.now()}let it=[];if(G.status==="fulfilled"&&Array.isArray(G.value.included)){D.okNotices=Date.now();for(let dt of G.value.included){let pt=new Set((dt.lines||[]).map(at=>at.id).filter(at=>A[at])),St=dt.title||dt.description||{},I=(St.es||St.ca||"").trim();I&&it.push({id:"N"+dt.externalId,fams:pt,stops:new Set,txt:I,when:(dt.date||"")+"T"+(dt.time||""),src:"Rodalies",core:dt.core||""})}}if(H.status==="fulfilled"){let dt=+((H.value.header||{}).timestamp||0);if(D.alertsTs=dt,Date.now()/1e3-dt<6*3600)for(let pt of H.value.entity||[]){let St=pt.alert;if(!St)continue;let I=new Set,at=new Set;for(let ne of St.informedEntity||[])(ne.routeId||"").startsWith("51")&&I.add(ne.routeId.replace(/^51T\d+/,"")),ne.stopId&&ot.has(ne.stopId)&&at.add(ot.get(ne.stopId));if(!I.size&&!at.size)continue;let yt=(St.descriptionText||St.headerText||{translation:[]}).translation||[],Ht=((yt.find(ne=>ne.language==="es")||yt[0]||{}).text||"").trim(),oe=+((St.activePeriod||[])[0]||{}).start||0;it.some(ne=>ne.txt===Ht)||it.push({id:pt.id,fams:I,stops:at,txt:Ht,when:oe?new Date(oe*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(D.adif&&Date.now()-D.adifAt<15*6e4)for(let[dt,pt]of(D.adif.items||[]).entries()){let St=(pt.t?pt.t+". ":"")+pt.txt,I=new Set,at=new Set,yt=g(St);for(let Ht of St.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))A[Ht[1]]&&I.add(Ht[1]);b.forEach((Ht,oe)=>{Ht.fams.size&&Ht.n.length>4&&yt.includes(g(Ht.n))&&(at.add(oe),I.size||Ht.fams.forEach(ne=>I.add(ne)))}),it.some(Ht=>Ht.txt===St)||it.push({id:"A"+dt,fams:I,stops:at,txt:St,when:D.adif.upd||"",src:"Adif",lvl:pt.lvl})}if(G.status==="fulfilled"||H.status==="fulfilled"||D.adif){D.alerts=it.sort((dt,pt)=>pt.when>dt.when?1:-1);try{Tp()}catch{}}Qt(),_i(),Kn=0,a()}let Mt=()=>D.okVP&&Date.now()-D.okVP<9e4;function Qt(){let x=f("#rtst"),w=f("#mode");if(w){let O=!!Mt()&&At().live;w.classList.toggle("on",O),w.classList.toggle("pre",!O),w.textContent=O?"En directo":"Previsi\xF3n"}if(!x)return;D.url?D.err?x.textContent="No se pudo conectar con el puente ("+D.err+"). Se usa el horario.":Mt()?x.innerHTML=`Conectado \xB7 ${D.vp.size} trenes con posici\xF3n real y ${D.delays.size} con retraso \xB7 actualizado a las ${new Date(D.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:x.textContent="Conectando\u2026":x.textContent=D.err||"Sin puente: trenes seg\xFAn horario oficial.";let R=f("#rturl");R&&R._shown!==D.url&&(R.value=D.url,R._shown=D.url)}f("#rtsave").onclick=()=>{let x=f("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(x&&!/^https?:\/\//.test(x)&&(x="https://"+x),!x){D.err="pega la direcci\xF3n de tu puente",Qt();return}D.url=x;try{localStorage.setItem("rod_rt",x)}catch{}D.ok=0,D.err="",Qt(),_t()},f("#rtoff").onclick=()=>{D.url=Re;try{localStorage.removeItem("rod_rt")}catch{}h._h="",_t()},setInterval(_t,2e4),setTimeout(_t,50);let jt=x=>{if(!Mt())return null;let w=D.delays.get(x.tid),R=D.vp.get(x.tid);return w==="X"?w:R&&R.pre&&R.preDl>=1?Math.max(typeof w=="number"?w:0,R.preDl*60):w??null},Gt=new Set(y),le=new qi,N=new qi,Ie=new Ii({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),me=new Ii({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),E=new Ds(le,Ie),_=new Ds(N,me);_.renderOrder=20,E.renderOrder=21,E.frustumCulled=_.frustumCulled=!1,e.add(_,E);function W(){let x=[],w=[],R=new Set,O=new ae;for(let H of y)if(Gt.has(H)){O.set(A[H]);for(let G of Z[H]){if(R.has(G))continue;R.add(G);let Q=S[G].p;for(let it=0;it+1<Q.length;it++)x.push(Q[it][0],Q[it][1],P,Q[it+1][0],Q[it+1][1],P),w.push(O.r,O.g,O.b,O.r,O.g,O.b)}}x.length||(x.push(0,0,-50,0,0,-50),w.push(0,0,0,0,0,0)),le.setPositions(x),le.setColors(w),N.setPositions(x),a()}W();let Y=x=>new xn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ae(x)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),tt=new nn,vt=b.length,Et=new Float32Array(vt*3),st=new Float32Array(vt*3),ht=new Float32Array(vt),Rt=new Float32Array(vt);b.forEach((x,w)=>{Et[w*3]=x.w[0],Et[w*3+1]=x.w[1],Et[w*3+2]=P,st.set([1,1,1],w*3),ht[w]=6,Rt[w]=1.6}),tt.setAttribute("position",new Ge(Et,3)),tt.setAttribute("fill",new Ge(st,3)),tt.setAttribute("size",new Ge(ht,1)),tt.setAttribute("bw",new Ge(Rt,1));let Jt=new Es(tt,Y("#1d2330"));Jt.renderOrder=22,Jt.frustumCulled=!1,e.add(Jt);function wt(){let x=r.dist<45;b.forEach((w,R)=>{let O=[...w.fams].some(H=>Gt.has(H));ht[R]=O?R===Xe?13:x?8:5:0,Rt[R]=R===Xe?3:1.6}),tt.attributes.size.needsUpdate=!0,tt.attributes.bw.needsUpdate=!0}let bt=600,Wt=new nn,ee=new Float32Array(bt*3),ce=new Float32Array(bt*3),z=new Float32Array(bt),Lt=new Float32Array(bt);Wt.setAttribute("position",new Ge(ee,3)),Wt.setAttribute("fill",new Ge(ce,3)),Wt.setAttribute("size",new Ge(z,1)),Wt.setAttribute("bw",new Ge(Lt,1));let ct=new Float32Array(bt);Wt.setAttribute("ang",new Ge(ct,1));let Nt=new xn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ae("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Ot=new Es(Wt,Nt);Ot.renderOrder=24,Ot.frustumCulled=!1,e.add(Ot);let ft=new nn,Kt=new Float32Array(bt*3),Yt=new Float32Array(bt*3),Be=new Float32Array(bt),Pe=new Float32Array(bt);ft.setAttribute("position",new Ge(Kt,3)),ft.setAttribute("fill",new Ge(Yt,3)),ft.setAttribute("size",new Ge(Be,1)),ft.setAttribute("bw",new Ge(Pe,1));let In=new Es(ft,Y("#f97316"));In.renderOrder=23,In.frustumCulled=!1,e.add(In);function Hn(x,w){let R=S[x],O=w*R.L,H=0,G=R.c.length-1;for(;G-H>1;){let St=H+G>>1;R.c[St]<=O?H=St:G=St}let Q=R.c[G]-R.c[H]||1,it=(O-R.c[H])/Q,dt=R.p[H],pt=R.p[G];return[dt[0]+(pt[0]-dt[0])*it,dt[1]+(pt[1]-dt[1])*it]}let Wa=x=>x*x*(3-2*x)*.35+x*.65;function zs(x,w){let R=x.pat.t,O=x.pat.stops.length,H=R[2*O-2];if(w<R[1]-2||w>H+1)return null;if(w<=R[1])return{w:b[x.pat.stops[0]].w,at:0,next:0,moving:!1};for(let G=0;G<O-1;G++){let Q=R[2*G+1],it=R[2*G+2],dt=R[2*G+3];if(w<=it){let pt=it>Q?(w-Q)/(it-Q):1;return{w:Hn(x.pat.segs[G],Wa(m(pt,0,1))),at:-1,next:G+1,prev:G,moving:!0}}if(w<=dt)return{w:b[x.pat.stops[G+1]].w,at:G+1,next:G+1,moving:!1}}return{w:b[x.pat.stops[O-1]].w,at:O-1,next:O-1,moving:!1}}function Cr(x){let w=t.days.indexOf(x.ymd),R=[];if(w<0)return{k:w,out:R};let O=(H,G)=>{for(let Q of H){if(!Gt.has(Q.fam))continue;let it=jt(Q);if(it==="X")continue;let dt=(it||0)/60,pt=x.min+G-Q.t0-dt;if(pt<-2||pt>Q.pat.t[Q.pat.t.length-2]+1)continue;let St=zs(Q,pt);St&&R.push({tr:Q,p:St,rel:pt,dl:dt,live:it!=null})}};return O(J[w],0),w>0&&O(J[w-1],1440),{k:w,out:R}}function Rr(x,w,R,O){let H=x.pat.stops[0],G=w.dep0,Q=null,it=(pt,St)=>{for(let I of pt||[]){let at=I.pat.stops,yt=at.length;if(at[yt-1]!==H||I===x)continue;let Ht=I.t0+I.pat.t[2*(yt-1)]-St;if(Ht>G+5||Ht<G-120)continue;let oe=ut(I.pat),ne=Zt(oe,w.w,-1,1e9);if(ne.err>.6)continue;let Ee=oe.stopD,zt=I.pat.t,ge=Ee.findIndex(Ke=>Ke>ne.d);ge<0&&(ge=yt-1);let _e=ge===0?zt[1]:zt[2*ge-1]+(Ee[ge]>Ee[ge-1]?(ne.d-Ee[ge-1])/(Ee[ge]-Ee[ge-1]):1)*(zt[2*ge]-zt[2*ge-1]),se=R-(I.t0+_e-St);se<-5||se>120||(!Q||Math.abs(se)<Math.abs(Q.prevDl))&&(Q={prevTr:I,dPrev:ne.d,prevDl:se,arrO:Ht+Math.max(0,se)})}};if(it(J[O],0),O>0&&it(J[O-1],1440),!Q)return{prevTr:null,preDl:0};let dt=Math.max(G,Q.arrO+3);return{...Q,depEst:dt,preDl:Math.max(0,dt-G)}}function bc(x,w,R){let O=x.pat.t,H=w.length;if(!(R>=0))return R<0?w[0]:null;for(let G=0;G<H;G++)if(R<=O[2*G+1]){if(R>=O[2*G]||G===0)return w[G];let Q=O[2*G-1],it=O[2*G];return w[G-1]+(w[G]-w[G-1])*(it>Q?(R-Q)/(it-Q):1)}return w[H-1]}let Ir=performance.now();function Xa(){let x=[],w=Date.now()/1e3,R=performance.now(),O=Math.min(1,(R-Ir)/1e3);Ir=R;for(let H of D.vp.values()){let G=k.get(H.tid),Q=G?G.fam:H.fam;if(Q&&A[Q]&&!Gt.has(Q))continue;let it=D.delays.get(H.tid),dt=typeof it=="number"?it/60:0,pt=Math.max(0,w-H.ts),St=H.w,I=-1;if(G){let at=ut(G.pat),yt=at.stopD;if(H.dObs==null||H.obsAt!==H.ts){let zt=Zt(at,H.w,-1,1e9);H.dObs=zt.d,H.err=zt.err,H.obsAt=H.ts}let Ht=At(),oe=t.days.indexOf(Ht.ymd),ne=G.day===oe-1?1440:0,Ee=G.t0+G.pat.t[1]-ne;if(H.pre=Ht.min+dt<Ee-1&&(H.dObs>yt[0]+.35||H.err>.6)&&!(H.st==="STOPPED_AT"&&H.sid===b[G.pat.stops[0]].id),H.dep0=Ee,H.pre){if(H.atStop=-1,H.next=0,I=0,H.disp=null,H.prevAt!==H.ts&&(H.prevAt=H.ts,Object.assign(H,Rr(G,H,Ht.min,oe))),H.prevTr){let zt=ut(H.prevTr.pat);St=Vt(zt,H.dPrev)}}else if(H.err<=.6){let zt=yt.findIndex(se=>se>H.dObs+.08);zt<0&&(zt=yt.length-1);let ge=yt.reduce((se,Ke,an)=>Math.abs(Ke-H.dObs)<Math.abs(yt[se]-H.dObs)?an:se,0);H.atStop=Math.abs(yt[ge]-H.dObs)<.16?ge:-1,H.next=zt,I=zt;let _e=H.dObs;if(H.st==="STOPPED_AT"&&H.atStop>=0)_e=yt[H.atStop];else if(zt>0){let se=(G.pat.t[2*zt]-G.pat.t[2*zt-1])*60,Ke=se>0?(yt[zt]-yt[zt-1])/se:0,an=At(),on=t.days.indexOf(an.ymd),It=G.day===on-1?1440:0,ue=bc(G,yt,an.min+It-G.t0-dt),qe=H.dObs+Ke*Math.min(pt,60);ue!=null&&(qe=Math.min(qe,Math.max(H.dObs,ue))),_e=Math.max(H.dObs,Math.min(yt[zt]-.03,qe))}H.disp==null||Math.abs(H.disp-_e)>1.2?H.disp=_e:_e>H.disp&&(H.disp+=(_e-H.disp)*Math.min(1,O*1.5)),St=Vt(at,H.disp)}else if(H.err>2){let zt=At(),ge=t.days.indexOf(zt.ymd),_e=G.day===ge-1?1440:0,se=zs(G,zt.min+_e-G.t0-dt);se&&(St=se.w,H.est=!0,I=se.next),H.atStop=-1,H.next=se?se.next:-1}else H.atStop=-1,H.next=-1}x.push({tr:G,v:H,w:St,p:{w:St},fam:Q||"?",c:G?G.c:A[Q]||"#6b7385",dl:dt,live:!0,real:!0,idx:I,age:pt,cancel:it==="X"})}return x}let un=new Map,dn=!1,ii=[],Kn=0,tn=null,be=null,Xe=-1,fn=!1,Pr=0,$a="";function wc(x){let w=j>0||Mt()&&lt==null,R=w?50:250;if(x-Kn<R)return!1;Kn=x;let O=At(),H=Mt()&&O.live,G=H?{k:t.days.indexOf(O.ymd),out:Xa()}:Cr(O);ii=G.out;let Q=new ae,it=0,dt=0;for(let I of ii){if(it>=bt)break;ee[it*3]=I.p.w[0],ee[it*3+1]=I.p.w[1],ee[it*3+2]=P+.02;let at=null;if(I.real&&I.v.pre&&I.v.prevTr)at=Vt(ut(I.v.prevTr.pat),I.v.dPrev+.35);else if(I.real&&I.tr&&!I.v.pre&&I.v.err<=.6&&I.v.disp!=null&&!(I.v.st==="STOPPED_AT"&&I.v.atStop>=0))at=Vt(ut(I.tr.pat),I.v.disp+.35);else if(!I.real&&I.p.moving){let Ht=I.tr.pat.t,oe=I.p.prev,ne=Ht[2*oe+1],Ee=Ht[2*oe+2],zt=Ee>ne?(I.rel-ne)/(Ee-ne):1;at=Hn(I.tr.pat.segs[oe],Math.min(1,Wa(m(zt,0,1))+.04))}if(at){let Ht=K(I.p.w),oe=K(at),ne=oe[0]-Ht[0],Ee=oe[1]-Ht[1];ct[it]=Math.hypot(ne,Ee)>.05?Math.atan2(ne,-Ee):99}else ct[it]=99;Q.set(I.c||I.tr.c),ce[it*3]=Q.r,ce[it*3+1]=Q.g,ce[it*3+2]=Q.b;let yt=I.tr?I.tr===be:be&&be.vtid===I.v.tid;z[it]=yt?22:r.dist<45?17:14,Lt[it]=yt?3.5:2.2,(I.live&&I.dl>=5||yt)&&(Kt[dt*3]=I.p.w[0],Kt[dt*3+1]=I.p.w[1],Kt[dt*3+2]=P+.01,Yt.set(yt?[.11,.14,.19]:[.98,.45,.09],dt*3),Be[dt]=z[it]+8,Pe[dt]=3,dt++),it++}if(Wt.setDrawRange(0,it),ft.setDrawRange(0,dt),["position","fill","size","bw"].forEach(I=>{Wt.attributes[I].needsUpdate=!0,ft.attributes[I].needsUpdate=!0}),Wt.attributes.ang.needsUpdate=!0,tn){let I=ii.find(at=>at.tr===tn);if(I){let at=0,yt=innerHeight,Ht=h.style.display!=="none"&&!h.classList.contains("min")?h.getBoundingClientRect():null,oe=f("#rc").getBoundingClientRect();innerWidth<=640&&(Ht&&(at=Ht.bottom),yt=Math.min(yt,oe.top));let ne=at+(yt-at)/2,Ee=ne-innerHeight/2,zt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=I.p.w[0]-Math.sin(r.yaw)*Ee*zt,s.ty=I.p.w[1]+Math.cos(r.yaw)*Ee*zt}else Mt()&&At().live&&(tn=null)}let pt=Xt(O.min);pt!==$a&&($a=pt,f("#ctime").textContent=pt),f("#ntr").textContent=String(ii.length),f("#ntrl").textContent=H?"trenes de Rodalies con posici\xF3n real":"trenes previstos seg\xFAn el horario";let St=new Date;if(f("#cdate").textContent=O.live?"hora actual":j?"simulaci\xF3n \xD7"+j:Qn?"en pausa":"hora elegida",G.k<0?f("#src").innerHTML=`<b style="color:#c2410c">Sin horarios para hoy.</b> Los datos guardados van del ${Ce(t.days[0])} al ${Ce(t.days[t.days.length-1])}: actualiza la app.`:H?f("#src").textContent=`En directo \xB7 posiciones de Renfe de hace ${Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...D.vp.values()].map(I=>I.ts),0)))} s`:f("#src").innerHTML='<b style="color:#c2410c">No es tiempo real:</b> '+(D.url?"sin conexi\xF3n con el puente, ":"conecta el puente para ver los trenes reales; ")+"posiciones calculadas con el horario",O.live){let I=Math.round(O.min),at=f("#tsl");document.activeElement!==at&&(at.value=I<240?I+1440:I)}return On(),x-Pr>3e3&&(be||Xe>=0||fn)&&(Pr=x,Tt()),Qt(),!0}let qa=-1;function Ec(){r.dist<45!=qa<45&&(qa=r.dist,wt()),F()}let Ji=[],v=new U;function F(){let x=r.dist<30,w=0;if(x){let R=[];for(let O=0;O<vt;O++)ht[O]&&(v.set(b[O].w[0],b[O].w[1],P).project(n),!(v.z>1||Math.abs(v.x)>1.05||Math.abs(v.y)>1.05)&&R.push([O,(v.x*.5+.5)*innerWidth,(-v.y*.5+.5)*innerHeight]));if(R.length<=70)for(let[O,H,G]of R){let Q=Ji[w]||(Ji[w]=Object.assign(document.createElement("div"),{className:"slab"}));Q.isConnected||document.body.appendChild(Q),Q.textContent=b[O].n,Q.dataset.i=O,Q.style.display="block",Q.style.transform=`translate(${Math.round(H+8)}px,${Math.round(G-7)}px)`,w++}}for(;w<Ji.length;w++)Ji[w].style.display="none"}function K(x){return v.set(x[0],x[1],P).project(n),[(v.x*.5+.5)*innerWidth,(-v.y*.5+.5)*innerHeight,v.z]}function $(x,w,R,O){let H=null,G=R*R;for(let Q of ii){let[it,dt,pt]=K(Q.p.w);if(pt>1)continue;let St=(it-x)**2+(dt-w)**2;St<G&&(G=St,H={a:Q})}if(H)return H;G=O*O;for(let Q=0;Q<vt;Q++){if(!ht[Q])continue;let[it,dt,pt]=K(b[Q].w);if(pt>1)continue;let St=(it-x)**2+(dt-w)**2;St<G&&(G=St,H={s:Q})}return H}window.__rodTap=(x,w)=>{let R=null,O=1e9;for(let G of Ji){if(G.style.display==="none")continue;let Q=G.getBoundingClientRect();if(x>=Q.left-4&&x<=Q.right+4&&w>=Q.top-4&&w<=Q.bottom+4){let it=Math.abs(w-(Q.top+Q.bottom)/2)*4+(x-Q.left);it<O&&(O=it,R=G)}}if(R)return window.__rodPickStation(+R.dataset.i),!0;let H=$(x,w,24,18);return H&&H.a?(dn=!1,fn=!1,be=H.a.tr||{vtid:H.a.v.tid},Xe=-1,tn=null,ks(),wt(),Tt(),Kn=0,a(),!0):H&&H.s!=null?(dn=!1,fn=!1,Xe=H.s,be=null,tn=null,ks(),wt(),Tt(),a(),!0):!1},window.__rodHover=(x,w)=>{let R=$(x,w,14,10);if(R&&R.a){let O=R.a,H=O.tr?b[O.tr.pat.stops[O.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${O.c}">\u25A0</span> ${d(O.fam)} \xB7 tren ${d(O.tr?O.tr.num:O.v.num)}</b><small>${H?"hacia "+d(H):""}${O.real?(O.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(O.dl)} min</b>`:" \xB7 puntual")+" \xB7 en directo":" \xB7 previsto"}</small>`}return R&&R.s!=null?`<b>${d(b[R.s].n)}</b><small>${[...b[R.s].fams].sort(L).join(" \xB7 ")}</small>`:null},window.__rodPickStation=x=>{dn=fn=!1,be=null,tn=null,Xe=x,ks(),wt(),h._h="",Tt(),a()};{let x=f("#rc"),w=()=>{let R=x.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,R-64-10)+"px")};try{new ResizeObserver(w).observe(x)}catch{}addEventListener("resize",w),setTimeout(w,300)}window.__rodTick=wc,window.__rodFrame=Ec,window.__rodResize=()=>{Ie.resolution.set(innerWidth,innerHeight),me.resolution.set(innerWidth,innerHeight)},window.__rodResize();let X={st:-1,f:new Set},Ft=x=>{let w=[...b[x].fams].sort(L);return`<div class="sfc">${w.length>1?`<button type="button" data-sf="" class="${X.f.size?"":"on"}">Todas</button>`:""}${w.map(R=>`<button type="button" data-sf="${d(R)}" class="ln ${X.f.size&&!X.f.has(R)?"off":""}${Gt.has(R)?"":" hid"}" style="--c:${A[R]}">${d(R)}</button>`).join("")}</div>${w.some(R=>!Gt.has(R))?"<small>Las l\xEDneas apagadas en el filtro general no se muestran</small>":""}`},Bt=x=>`<span class="ln" style="--c:${A[x]}">${d(x)}</span>`;function Ut(x,w){return w?x==="X"?'<span class="st late">Cancelado</span>':x>=60?`<span class="st late">Retraso de ${Math.round(x/60)} min</span>`:'<span class="st ok">Puntual</span>':'<span class="st sch">Seg\xFAn horario \xB7 sin dato en directo</span>'}function Tt(){if(!be&&Xe<0&&!fn&&!dn){h.innerHTML="",h._h="",h.style.display="none",h.classList.remove("peek"),Rc();return}let x=At(),w="",R=Mt()&&x.live,O=(I,at)=>D.alerts.filter(yt=>[...yt.fams].some(Ht=>I.has(Ht))||at!=null&&yt.stops.has(at)),H=I=>I.length?`<div class="al">${I.slice(0,4).map(at=>`<p>\u26A0\uFE0F ${Un(at)} ${[...at.fams].sort(L).slice(0,6).map(Bt).join(" ")} ${d(at.txt)} <small>${jn(at)}</small></p>`).join("")}${I.length>4?`<small>y ${I.length-4} avisos m\xE1s</small>`:""}</div>`:"",G=be&&R?ii.find(I=>I.real&&(be.vtid?I.v.tid===be.vtid:I.tr===be)):null;if(dn)w=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>Novedades</h3><small>${d(f("#ver").textContent.replace(" \xB7 novedades y fuentes",""))}</small><ul class="chg">${f("#chg").innerHTML||"<li>Versi\xF3n de prueba</li>"}</ul>
        <h3 style="margin-top:14px">Fuentes</h3><ul class="fts">
        <li><b>Renfe Operadora</b> \xB7 horarios (GTFS), posici\xF3n de los trenes y retrasos (GTFS-RT) \xB7 <a href="https://data.renfe.com" target="_blank" rel="noopener">data.renfe.com</a> \xB7 licencia CC BY 4.0</li>
        <li><b>Rodalies de Catalunya</b> (Generalitat) \xB7 salidas con v\xEDa, cancelaciones y avisos \xB7 <a href="https://rodalies.gencat.cat" target="_blank" rel="noopener">rodalies.gencat.cat</a></li>
        <li><b>Adif</b> \xB7 incidencias en la infraestructura de Catalu\xF1a \xB7 <a href="https://www.adif.es/viajeros/estado-de-la-red" target="_blank" rel="noopener">estado de la red</a> \xB7 \xA9 Adif</li>
        <li><b>OpenStreetMap</b> \xB7 trazado de las v\xEDas \xB7 <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">\xA9 colaboradores de OpenStreetMap</a>, licencia ODbL</li>
        </ul><small>Los datos se muestran tal como los publican sus fuentes. Ante cualquier duda, manda lo que diga el operador en la estaci\xF3n.</small></div>`;else if(fn){let I=D.alerts.filter(at=>[...at.fams].some(yt=>Gt.has(yt))||!at.fams.size);w=`<div class="tc" style="--c:#c2410c"><button class="x" data-cx>\xD7</button><h3>Avisos e incidencias</h3><small>${I.length} avisos activos para las l\xEDneas que tienes visibles</small>${I.map(at=>`<div class="al"><p>${Un(at)} ${[...at.fams].sort(L).map(Bt).join(" ")} <small>${jn(at)}</small></p><p>${d(at.txt)}</p></div>`).join("")||"<p>Sin avisos activos.</p>"}<small>Fuente: avisos oficiales de Rodalies de Catalunya, incidencias en la v\xEDa de Adif (gestor de la infraestructura)${D.alertsTs&&Date.now()/1e3-D.alertsTs<6*3600?" y de Renfe":` \xB7 los avisos GTFS de Renfe no se muestran: Renfe no los actualiza desde el ${D.alertsTs?new Date(D.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(G){let I=G.v,at=G.tr,yt=on=>d(b[at.pat.stops[on]].n),Ht=at?at.pat.stops.length:0,oe=ot.get(I.sid),ne=oe!=null?d(b[oe].n):d(I.sid),Ee=at&&I.atStop>=0?yt(I.atStop):"",zt=at&&I.next>=0?yt(I.next):ne,ge=at&&I.next>0?yt(I.next-1):"",_e=I.pre&&at?I.prevTr?`A\xFAn no ha empezado este viaje. Est\xE1 terminando el tren <b>${d(I.prevTr.num)}</b> hacia <b>${yt(0)}</b>${I.prevDl>=1?` con <b>+${Math.round(I.prevDl)} min</b>`:""}: llega hacia las <b>${Xt(I.arrO)}</b> y saldr\xEDa hacia las <b>${Xt(I.depEst)}</b>${I.preDl>=1?` (horario ${Xt(I.dep0)})`:""}`:`A\xFAn no ha empezado este viaje: va hacia <b>${yt(0)}</b>, de donde sale a las <b>${Xt(I.dep0+G.dl)}</b>`:I.st==="STOPPED_AT"&&Ee?`Parado en <b>${Ee}</b>`:Ee&&I.next>=0&&I.atStop!==I.next?`Saliendo de <b>${Ee}</b> hacia <b>${zt}</b>`:ge?`Entre ${ge} y <b>${zt}</b>`:`Hacia <b>${zt}</b>`,se=D.tu.get(I.tid),Ke=se&&se.next&&at&&I.next>=0&&se.next.sid===b[at.pat.stops[I.next]].id&&se.next.t?new Date(se.next.t*1e3).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"",an=[];if(at){let on=G.idx>=0?G.idx:0,It=I.pre?Math.max(G.dl,I.preDl||0):G.dl,ue=qe=>at.t0+at.pat.t[qe]+It;for(let qe=on;qe<Ht;qe++)an.push(`<li><b>${Xt(ue(qe===0?1:2*qe))}</b><span>${yt(qe)}</span>${It>=1?`<em>${I.pre?"\u2248":""}+${Math.round(It)}</em>`:""}</li>`)}w=`<div class="tc" style="--c:${G.c}"><button class="x" data-cx>\xD7</button><div>${Bt(G.fam)}<b>Tren ${d(at?at.num:I.num)}</b> <span class="lv">\u25CF en directo</span></div>${at?`<h3>${yt(0)} \u2192 ${yt(Ht-1)}</h3>`:""}
        <p>${_e}${Ke?` \xB7 prevista ${Ke}`:""}${I.plat?` \xB7 <b>and\xE9n ${d(I.plat)}</b>`:""}</p><p>${I.pre&&I.prevTr?I.preDl>=1?`<span class="st late">Saldr\xE1 con unos ${Math.round(I.preDl)} min de retraso (estimado)</span>`:'<span class="st ok">Le da tiempo a salir a su hora (estimado)</span>':Ut(D.delays.get(I.tid),D.delays.has(I.tid))}</p>
        <small>${I.pre?`Renfe ya le pone el n\xFAmero de su pr\xF3ximo viaje. Posici\xF3n real enviada hace ${Math.round(G.age)} s`:I.est?"Renfe da una posici\xF3n que no encaja con su recorrido: se muestra donde deber\xEDa estar seg\xFAn el horario y su retraso":`Posici\xF3n enviada por Renfe hace ${Math.round(G.age)} s${G.age>120?" \xB7 <b>sin actualizar</b>":""}`}</small>
        ${an.length?`<small style="margin-top:6px">Pr\xF3ximas paradas \xB7 hora prevista con el retraso actual</small><ol>${an.join("")}</ol>`:""}${H(O(new Set([G.fam])))}
        ${en(at?at.num:I.num,"",G.fam)}${at?`<div class="rtb"><button type="button" data-follow>${tn===at?"Dejar de seguir":"Seguir este tren"}</button></div>`:""}</div>`}else if(be&&R)w=`<div class="tc" style="--c:#6b7385"><button class="x" data-cx>\xD7</button><h3>Tren ${d(be.num||be.vtid||"")}</h3><p>Renfe no da ahora la posici\xF3n de este tren: puede haber terminado su viaje, no haber salido o no estar circulando.</p></div>`;else if(be){let I=be,at=I.pat,yt=at.stops.length,Ht=jt(I),oe=typeof Ht=="number"?Ht/60:0,ne=t.days.indexOf(x.ymd),Ee=I.day===ne-1?1440:0,zt=x.min+Ee-I.t0-oe,ge=zs(I,zt),_e=It=>I.t0+at.t[It]+oe,se=It=>d(b[at.stops[It]].n),Ke="Fuera de servicio ahora";ge&&(Ke=ge.moving?`Circulando hacia <b>${se(ge.next)}</b> \xB7 llega ${Xt(_e(2*ge.next))}`:ge.at===yt-1?`Ha llegado a <b>${se(yt-1)}</b>`:`Parado en <b>${se(ge.at)}</b> \xB7 sale ${Xt(_e(2*ge.at+1))}`);let an=ge?ge.next:0,on=[];for(let It=an;It<yt;It++)on.push(`<li><b>${Xt(_e(2*It))}</b><span>${se(It)}</span>${oe>=1?`<em>+${Math.round(oe)}</em>`:""}</li>`);w=`<div class="tc" style="--c:${I.c}"><button class="x" data-cx>\xD7</button><div>${Bt(I.fam)}<b>Tren ${d(I.num)}</b> <span class="pv">previsi\xF3n</span></div><h3>${se(0)} \u2192 ${se(yt-1)}</h3>
        <p>${Ke}</p><p>${Ut(Ht,Ht!=null)}</p><small>Sale ${Xt(I.t0+at.t[1])} \xB7 llega ${Xt(I.t0+at.t[2*yt-2])} (horario)</small>
        <small style="margin-top:6px">Pr\xF3ximas paradas${oe>=1?" \xB7 hora prevista con el retraso":""}</small><ol>${on.join("")}</ol>${en(I.num,"",I.fam)}<div class="rtb"><button type="button" data-follow>${tn===I?"Dejar de seguir":"Seguir este tren"}</button></div></div>`}else{let I=Xe,at=t.days.indexOf(x.ymd),yt=[];X.st!==I&&(X.st=I,X.f.clear());let Ht=zt=>(!A[zt]||Gt.has(zt))&&(!X.f.size||X.f.has(zt));if(at>=0){let zt=(ge,_e)=>{for(let se of ge){if(!Ht(se.fam))continue;let Ke=se.pat.stops.indexOf(I);if(Ke<0||Ke===se.pat.stops.length-1)continue;let an=jt(se),on=typeof an=="number"?an/60:0,It=se.t0+se.pat.t[2*Ke+1]-_e;It+on<x.min-1||It>x.min+360||yt.push({tr:se,t:It,dl:on,d:an,on:D.vp.has(se.tid),past:x.min>se.t0+se.pat.t[1]-_e+2})}};zt(J[at],0),at>0&&zt(J[at-1],1440)}yt.sort((zt,ge)=>zt.t+zt.dl-ge.t-ge.dl);let oe=b[I].id,ne=un.get(oe);R&&D.url&&(!ne||Date.now()-ne.at>3e4)&&!ne?.loading&&(un.set(oe,{...ne||{},loading:!0,at:ne?ne.at:0}),mt(D.url.replace(/\/+$/,""),"/departures.json?stationId="+oe).then(zt=>{un.set(oe,{at:Date.now(),d:zt}),Xe===I&&(h._h="",Tt())}).catch(()=>un.set(oe,{at:Date.now(),err:1})));let Ee=R&&ne&&ne.d&&Array.isArray(ne.d.trains)?ne.d.trains:null;if(Ee){let zt=new Map([...D.vp.values()].map(_e=>[String((k.get(_e.tid)||{}).num||_e.num),_e])),ge=Ee.filter(_e=>Ht((_e.line||{}).id||"")).slice(0,40).map(_e=>{let se=(_e.departureDateHourSelectedStation||"").slice(11,16),Ke=(_e.line||{}).id||"",an=String(_e.commercialNumber||_e.technicalNumber||""),on=zt.get(an),It=on?D.delays.get(on.tid):null;return`<li class="go" data-gt="${d(an)}|${on?d(on.tid):""}"><b>${d(se)}</b>${A[Ke]?Bt(Ke):`<span class="ln" style="--c:#6b7385">${d(Ke||"?")}</span>`}<span>${d((_e.destinationStation||{}).name||"")}${_e.trainObservations?` \xB7 <i>${d(_e.trainObservations)}</i>`:""}</span>${_e.trainCancelled?"<em>cancelado</em>":typeof It=="number"&&It>=60?`<em>+${Math.round(It/60)}</em>`:""}${_e.platformSelectedStation?`<i class="via">v\xEDa ${d(_e.platformSelectedStation)}</i>`:""}${on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':""}</li>`}).join("");w=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(b[I].n)}</h3>${Ft(I)}${en("",b[I].id,"")}
          <small style="margin-top:6px">Pr\xF3ximas salidas oficiales de Rodalies \xB7 hora prevista \xB7 \u25CF tren circulando</small>
          <ol>${ge||"<li><span>Rodalies no anuncia salidas ahora mismo</span></li>"}</ol>${H(O(b[I].fams,I))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}else w=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(b[I].n)}</h3>${Ft(I)}${en("",b[I].id,"")}
        <small style="margin-top:6px">${R&&D.url?"Cargando salidas oficiales\u2026 mientras, ":""}Pr\xF3ximas salidas${R?" \xB7 hora prevista con el retraso actual \xB7 \u25CF tren circulando":" \xB7 previsi\xF3n seg\xFAn horario (sin tiempo real)"}</small>
        <ol>${yt.slice(0,40).map(zt=>`<li class="go" data-gt="${d(zt.tr.num)}|${d(zt.tr.tid)}"><b>${Xt(zt.t+zt.dl)}</b>${Bt(zt.tr.fam)}<span>${d(b[zt.tr.pat.stops[zt.tr.pat.stops.length-1]].n)}</span>${zt.d==="X"?"<em>cancelado</em>":zt.dl>=1?`<em>+${Math.round(zt.dl)}</em>`:""}${R?zt.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':zt.past?'<i class="nos" title="deber\xEDa haber salido y Renfe no da su posici\xF3n">sin se\xF1al</i>':"":""}</li>`).join("")||"<li><span>No hay salidas en las pr\xF3ximas 6 horas</span></li>"}</ol>${H(O(b[I].fams,I))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}let Q=h.scrollTop;if(h._h!==w&&(h.innerHTML=w,h._h=w,h.scrollTop=Q),h.style.display="flex",h.classList.remove("min"),Rc(),innerWidth<=640){let I=h.querySelector(".tc");if(I&&!I.querySelector(".mn")){let at=document.createElement("button");at.type="button",at.className="mn",at.setAttribute("aria-label","Encoger o ampliar la ficha"),at.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",at.onclick=yt=>{yt.stopPropagation(),h.classList.toggle("peek"),at.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",h.scrollTop=0},I.appendChild(at)}}else h.classList.remove("peek");let it=f("#rc");if(innerWidth<=640&&!it.classList.contains("min")&&!Tt.done&&(Tt.done=1,f("#rcgrab").click()),innerWidth<=640){let I=f("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(I+8)+"px",h.style.width="calc(100vw - 76px)",h.style.maxHeight=Math.max(140,f("#rc").getBoundingClientRect().top-I-16)+"px"}else if(innerHeight<=500){let I=f("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(I+8)+"px",h.style.width="min(290px, 40vw)",h.style.maxHeight=innerHeight-I-20+"px"}else h.style.top="",h.style.width="300px",h.style.maxHeight="";let pt=h.querySelector("[data-cx]");pt&&(pt.onclick=I=>{I.stopPropagation(),Tt.done=0,fn=!1,dn=!1,be=null,Xe=-1,tn=null,wt(),Tt(),Kn=0,a()}),pn(h),h.querySelectorAll("[data-sf]").forEach(I=>I.onclick=at=>{at.stopPropagation();let yt=I.dataset.sf;yt?X.f.has(yt)?X.f.delete(yt):X.f.add(yt):X.f.clear(),h._h="",Tt()}),h.querySelectorAll("[data-gt]").forEach(I=>I.onclick=()=>{let[at,yt]=I.dataset.gt.split("|"),Ht=k.get(yt);Ou({num:at,tid:D.vp.has(yt)?yt:"",tr:Ht||null})}),h.querySelectorAll("[data-sethome]").forEach(I=>I.onclick=()=>Bu(Xe,I.dataset.sethome));let St=h.querySelector("[data-follow]");St&&(St.onclick=()=>{tn=tn===be?null:be,tn?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(h.classList.add("peek"),h.scrollTop=0,f("#rc").classList.contains("min")||f("#rcgrab").click())):h.classList.remove("peek"),h._h="",Tt(),a()})}window.__rodCard=Tt;try{localStorage.getItem("rod_inf")==="mini"&&f("#inf").classList.add("mini")}catch{}f("#inft").onclick=()=>{let x=f("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",x?"mini":"")}catch{}(be||Xe>=0||fn||dn)&&(h._h="",Tt())},f("#ver").onclick=()=>{dn=!0,be=null,Xe=-1,fn=!1,h._h="",Tt()};let $t={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},pe=["vacio","lleno","petado","parado","calor","abordo"],ye=["gente","retraso","cancel","ascensor","via"],qt={vacio:"Va con sitio",lleno:"Va lleno",petado:"Muy lleno, cuesta subir",parado:"Parado sin moverse",calor:"Sin aire acondicionado",abordo:"Incidencia a bordo",gente:"Mucha gente esperando",retraso:"Anuncian retraso por megafon\xEDa",cancel:"Anuncian tren cancelado",ascensor:"Ascensor o escalera averiados",via:"Incidencia en la estaci\xF3n"},Ae=x=>(D.tipos||qt)[x]||x,Ze=(x,w)=>(D.rep||[]).filter(R=>x&&R.num===String(x)&&!R.sid||w&&R.sid===String(w)&&!R.num||x&&w&&R.num===String(x)&&R.sid===String(w)),Ve=x=>{let w=Math.round((Date.now()+(D.repSkew||0)-x.at)/6e4);return w<1?"ahora":`hace ${w} min`},Le=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function en(x,w,R){if(!D.url||!D.repOk)return"";let O=Ze(x,w),H=x?pe:ye;return`<div class="crowd"><small>\u{1F465} Lo que dicen los viajeros${O.length?"":" \xB7 nadie ha avisado todav\xEDa"}</small>${O.map(G=>`<p><span>${$t[G.kind]||"\u2022"} <b>${d(Ae(G.kind))}</b> <small>${G.up>1?G.up+" viajeros \xB7 ":""}${Ve(G)}</small></span>${Le.has(G.id)?"<small>\u2713</small>":`<button type="button" data-rv="${G.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${G.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${x?"\xBFVas en este tren? Avisa a los dem\xE1s":"\xBFEst\xE1s en la estaci\xF3n? Avisa a los dem\xE1s"}</summary><div class="ckb">${H.map(G=>`<button type="button" data-rk="${G}" data-rn="${d(x||"")}" data-rs="${d(w||"")}" data-rl="${d(R||"")}">${$t[G]} ${d(Ae(G))}</button>`).join("")}</div><small>An\xF3nimo \xB7 se borra solo en 90 min \xB7 sin texto libre</small></details></div>`}async function kt(x,w){try{let O=await(await fetch(D.url.replace(/\/+$/,"")+w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)})).json();if(!O.ok){$e(O.err||"No se ha podido enviar");return}if(O.id){Le.add(O.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Le].slice(-300)))}catch{}}$e(w==="/vote"?"Gracias, voto guardado":O.n>1?`Gracias \xB7 ya sois ${O.n} avisando de lo mismo`:"Gracias, aviso enviado");let H=await mt(D.url.replace(/\/+$/,""),"/reports.json");H&&H.items&&(D.rep=H.items),h._h="",Tt(),On(!0)}catch{$e("Sin conexi\xF3n con el puente")}}function pn(x){x.querySelectorAll("[data-rk]").forEach(w=>w.onclick=R=>{R.stopPropagation(),w.disabled=!0,kt({kind:w.dataset.rk,num:w.dataset.rn,sid:w.dataset.rs,line:w.dataset.rl},"/report")}),x.querySelectorAll("[data-rv]").forEach(w=>w.onclick=R=>{R.stopPropagation();let[O,H]=w.dataset.rv.split(":");Le.add(+O);try{localStorage.setItem("rod_votes",JSON.stringify([...Le].slice(-300)))}catch{}kt({id:+O,v:+H},"/vote")})}let we=0;function $e(x){let w=f("#toast");w||(w=document.createElement("div"),w.id="toast",document.body.appendChild(w)),w.textContent=x,w.className="on",clearTimeout(we),we=setTimeout(()=>{w.className=""},2600)}function Un(x){return x.src?`<b class="asrc ${x.src==="Adif"?"adif":""}">${x.src==="Adif"?"Adif \xB7 v\xEDa":d(x.src)}</b>`:""}function jn(x){if(!x.when)return"";let[w,R]=x.when.split("T"),O=Me(new Date),H=O.ymd.slice(0,4)+"-"+O.ymd.slice(4,6)+"-"+O.ymd.slice(6,8);if(w===H&&R){let G=Math.round(O.min-(+R.slice(0,2)*60+ +R.slice(3,5)));return G<1?"ahora":G<60?`hace ${G} min`:`hoy a las ${R.slice(0,5)}`}return`${w.slice(8,10)}/${w.slice(5,7)}${R?" "+R.slice(0,5):""}`}function _i(){let x=f("#alr");if(!x)return;let w=D.alerts.filter(R=>[...R.fams].some(O=>Gt.has(O))).length;x.hidden=!w,x.textContent=`\u26A0\uFE0F ${w} aviso${w===1?"":"s"}`}f("#alr").onclick=()=>{dn=!1,fn=!0,be=null,Xe=-1,Tt()},f("#wcopy").onclick=async()=>{let x=f("#wcode").textContent;try{await navigator.clipboard.writeText(x),f("#wcopy").textContent="Copiado \u2713"}catch{let R=document.createRange();R.selectNodeContents(f("#wcode"));let O=getSelection();O.removeAllRanges(),O.addRange(R),f("#wcopy").textContent="Selecciona y copia"}setTimeout(()=>f("#wcopy").textContent="Copiar c\xF3digo",2500)};let Ne=ot.get("71801");function Je(x,w){let R=b[x].id,O=un.get(R);!(Mt()&&D.url)||O&&(O.loading||Date.now()-O.at<3e4)||(un.set(R,{...O||{},loading:!0,at:O?O.at:0}),mt(D.url.replace(/\/+$/,""),"/departures.json?stationId="+R).then(H=>{un.set(R,{at:Date.now(),d:H}),w&&w()}).catch(()=>un.set(R,{at:Date.now(),err:1})))}let xi=x=>+x.slice(0,2)*60+ +x.slice(3,5),De={k:-2,m:null};function vi(x){let w=t.days.indexOf(At().ymd);if(De.k!==w){De.k=w,De.m=new Map;for(let R of J[w]||[])De.m.set(String(R.num),R)}return De.m.get(String(x))||null}function Oi(x,w){let R=At(),O=Mt()&&R.live&&!w,H=un.get(b[x].id),G=[],Q=new Map([...D.vp.values()].map(dt=>[String((k.get(dt.tid)||{}).num||dt.num),dt]));if(O&&H&&H.d&&Array.isArray(H.d.trains))for(let dt of H.d.trains){let pt=(dt.departureDateHourSelectedStation||"").slice(11,16);if(!pt)continue;let St=String(dt.commercialNumber||dt.technicalNumber||""),I=Q.get(St),at=I?D.delays.get(I.tid):null,yt=Math.max(typeof at=="number"?Math.max(0,at/60):0,I&&I.pre&&I.preDl||0),Ht=xi(pt);Ht<R.min-720&&(Ht+=1440),G.push({sm:Ht,est:Ht+yt,dl:yt,fam:(dt.line||{}).id||"",dest:(dt.destinationStation||{}).name||"",destId:(dt.destinationStation||{}).id||"",plat:dt.platformSelectedStation||"",cancel:!!dt.trainCancelled,obs:dt.trainObservations||"",live:!!I,num:St,tid:I?I.tid:"",tr:I&&k.get(I.tid)||vi(St),src:"oficial"})}else{let dt=t.days.indexOf(R.ymd);if(dt<0)return G;let pt=(St,I)=>{for(let at of St){let yt=at.pat.stops.indexOf(x);if(yt<0||yt===at.pat.stops.length-1)continue;let Ht=jt(at),oe=typeof Ht=="number"?Math.max(0,Ht/60):0,ne=at.t0+at.pat.t[2*yt+1]-I;if(ne+oe<R.min-1||ne>R.min+240)continue;let Ee=at.pat.stops[at.pat.stops.length-1];G.push({sm:ne,est:ne+oe,dl:oe,fam:at.fam,dest:b[Ee].n,destId:b[Ee].id,plat:"",cancel:Ht==="X",obs:"",live:D.vp.has(at.tid),num:at.num,tid:at.tid,tr:at,src:"horario"})}};pt(J[dt],0),dt>0&&pt(J[dt-1],1440)}let it=G.filter(dt=>dt.est>=R.min-.5).sort((dt,pt)=>dt.est-pt.est);return!it.length&&G.length&&G[0].src==="oficial"&&!w?Oi(x,!0):it}let Lr=(x,w,R,O)=>{let H={key:x,ico:w,name:R,st:[],i:0,walk:10,open:!1};try{let G=JSON.parse(localStorage.getItem("rod_"+x)||"null");G&&Object.assign(H,G)}catch{}return!H.st.length&&O&&(H.st=O),H},si=Lr("home","\u{1F3E0}","Casa",["79410","79412"]),Gn=Lr("work","\u{1F4BC}","Trabajo",null),Ue={key:"near",ico:"\u{1F4CD}",name:"Cerca de ti",st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},Dr=[Ue,si,Gn];si.open=!1,Gn.open=!1;function yp(x,w){let R=nt(x,w),O=nt(x,w+.009);return 1/Math.hypot(O[0]-R[0],O[1]-R[1])}function Tc(x){if(!navigator.geolocation){Ue.err="Este navegador no da la ubicaci\xF3n",On(!0);return}navigator.geolocation.getCurrentPosition(w=>{let{longitude:R,latitude:O}=w.coords,H=nt(R,O),G=yp(R,O),Q=b.map((St,I)=>[I,Math.hypot(St.w[0]-H[0],St.w[1]-H[1])*G]).filter(([St])=>b[St].fams.size).sort((St,I)=>St[1]-I[1]),it=Q.filter(([,St],I)=>I===0||St<Math.max(2.5,Q[0][1]*1.6)).slice(0,3),dt=Ue.st[0]!==b[it[0][0]].id;Ue.st=it.map(([St])=>b[St].id),Ue.dist=Object.fromEntries(it.map(([St,I])=>[b[St].id,I])),Ue.fix=Date.now(),Ue.err="",dt&&(Ue.i=0);let pt=[si,Gn].find(St=>St.st.includes(Ue.st[0])&&Ue.dist[Ue.st[0]]<1.5);x&&(pt?pt.open=!0:Ue.open=!0),On(!0)},w=>{Ue.err=w.code===1?"Sin permiso de ubicaci\xF3n":"No se ha podido obtener la ubicaci\xF3n",x&&(si.open=!!si.st.length),On(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let Sp=x=>Math.max(1,Math.round(x*1.3/.08));setTimeout(()=>Tc(!0),400),setInterval(()=>{document.hidden||Tc(!1)},12e4);let Nr=x=>{try{localStorage.setItem("rod_"+x.key,JSON.stringify({st:x.st,i:x.i,walk:x.walk,open:x.open}))}catch{}},Cu=x=>x.st.length?ot.get(x.st[x.i]||x.st[0]):null;function Mp(x,w,R,O){if(O&&w.tr){let Q=w.tr.pat.stops,it=Q.indexOf(x);if(it>=0&&Q.slice(it+1).some(dt=>O.has(dt)))return"to"}if(O&&w.tr)return"out";let H=ot.get(w.destId)??b.findIndex(Q=>Q.n===w.dest);if(H<0||H==null||R==null)return"otros";let G=Q=>Math.hypot(b[Q].w[0]-b[R].w[0],b[Q].w[1]-b[R].w[1]);return G(H)<G(x)?"to":"out"}let Ac=x=>x<1?"ahora":x<60?Math.round(x)+" min":Math.floor(x/60)+" h "+String(Math.round(x%60)).padStart(2,"0"),Ru=0,bp=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i;function wp(x,w,R){let O=Cu(x);if(x===Ue){if(O==null)return`<div class="hplace"><button type="button" class="hhead hnew" data-hloc><span class="hico">\u{1F4CD}</span><span class="htit"><b>Cerca de ti</b><small>${Ue.err?d(Ue.err)+" \xB7 toca para reintentar":"Buscando tu ubicaci\xF3n\u2026"}</small></span><span class="hchev">\u27F3</span></button></div>`;if([si,Gn].find(ue=>ue.st.includes(Ue.st[0])&&Ue.dist[Ue.st[0]]<1.5))return"";x.walk=Sp(Ue.dist[x.st[x.i]]||0)}if(O==null)return`<div class="hplace"><button type="button" class="hhead hnew" data-hset="${x.key}"><span class="hico">${x.ico}</span><span class="htit"><b>${x.name}</b><small>Toca para elegir tu estaci\xF3n</small></span><span class="hchev">\uFF0B</span></button></div>`;Je(O,()=>On(!0));let H=x===Ue?null:x===si?Gn:si,G=H?Cu(H):null,Q=G!=null&&G!==O?G:Ne,it=G!=null&&G!==O?H===Gn?"el trabajo":"casa":"Barcelona",dt=Oi(O),pt=x.walk,St=b[O].fams,I=D.alerts.filter(It=>[...It.fams].some(ue=>St.has(ue))||It.stops&&It.stops.has(O)),at=I.some(It=>bp.test(It.txt)),yt={to:[],out:[],otros:[],all:dt},Ht=it!=="Barcelona"?new Set(H.st.map(It=>ot.get(It)).filter(It=>It!=null)):null;dt.forEach(It=>yt[Mp(O,It,Q,Ht)].push(It));let oe=It=>{if(It==="all")return"Pr\xF3ximas salidas \xB7 todas las direcciones";if(It==="to")return"Hacia "+it+(it!=="Barcelona"?` \xB7 ${b[Q].n}`:"");let ue=[...new Set(yt[It].map(qe=>qe.dest))].slice(0,2);return ue.length?"Hacia "+ue.join(" \xB7 "):"Otros"},ne=It=>{let ue=yt[It].find(Vs=>!Vs.cancel&&Vs.est-w.min>=pt);if(!ue){let Vs=yt[It].find(Rp=>!Rp.cancel);return Vs?{cls:"v-no",big:"No llegas",small:`El pr\xF3ximo (${Xt(Vs.est)}) sale en ${Ac(Vs.est-w.min)}: no da tiempo a pie`}:{cls:"v-no",big:"Sin trenes",small:"No hay salidas pr\xF3ximas en este sentido"}}let qe=ue.est-w.min-pt;return{cls:qe<1.5?"v-bad":qe<5?"v-warn":"v-ok",big:qe<1.5?"\xA1Sal ya!":"Sal en "+Ac(qe),small:`${at?"\u26A0\uFE0F servicio afectado \xB7 ":""}${Xt(ue.est)} \xB7 ${ue.fam} a ${ue.dest}${ue.plat?" \xB7 v\xEDa "+ue.plat:""}${ue.dl>=1?` \xB7 +${Math.round(ue.dl)} min`:""}`,x:ue}},Ee=yt.out.length?"out":"otros",zt=ne("to"),ge=ne(Ee),_e=Mt()&&w.live,se=It=>`<li class="${It.cancel?"cx":""} go" data-dk="${R.push(It)-1}" title="Ver este tren en el mapa"><b class="cd">${It.cancel?"\u2715":Ac(It.est-w.min)}</b><span><b>${Xt(It.est)}</b> ${Bt(It.fam)} ${d(It.dest)}${It.obs?` <i>${d(It.obs)}</i>`:""}</span>${It.dl>=1?`<em>+${Math.round(It.dl)}</em>`:""}${It.plat?`<i class="via">v\xEDa ${d(It.plat)}</i>`:""}${(()=>{let ue=Ze(It.num,"");return ue.length?`<i class="cr" title="${d(ue.map(qe=>Ae(qe.kind)).join(" \xB7 "))}">${ue.slice(0,2).map(qe=>$t[qe.kind]).join("")}</i>`:""})()}${It.live?'<i class="lvd">\u25CF</i>':""}</li>`,Ke=(It,ue)=>`<div class="hcol"><div class="hdir">${d(oe(It))}</div><div class="hv ${ue.cls}${ue.x?" go":""}"${ue.x?` data-dk="${R.push(ue.x)-1}"`:""}><b>${ue.big}</b><small>${d(ue.small)}</small></div><ol>${yt[It].slice(0,It==="all"?7:4).map(se).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(x===Ue){let It=ne("all");var an=It.x?`${It.big} \xB7 <b>${Xt(It.x.est)}</b> ${d(It.x.fam)} a ${d(It.x.dest)}${It.x.plat?" \xB7 v\xEDa "+d(It.x.plat):""}`:It.big}let on=x===Ue?an:zt.x?`${zt.big} \xB7 <b>${Xt(zt.x.est)}</b> hacia ${d(it)}${zt.x.plat?" \xB7 v\xEDa "+d(zt.x.plat):""}`:"Sin trenes hacia "+d(it);return`<div class="hplace ${x.open?"open":""}"><button type="button" class="hhead" data-ht="${x.key}"><span class="hico">${x.ico}</span><span class="htit"><b>${d(b[O].n)}</b><small class="c${at?"bad":zt.cls.slice(2)}">${on}</small></span><span class="hchev">\u25BE</span></button>`+(x.open?`
      <div class="hbody">
        ${x.st.length>1?`<div class="hst">${x.st.map((It,ue)=>{let qe=ot.get(It);return qe==null?"":`<button type="button" data-hs="${x.key}:${ue}" class="${ue===x.i?"on":""}">${d(b[qe].n)}</button>`}).join("")}</div>`:""}
        ${x===Ue?`<div class="hwalk">\u{1F4CD} A ${(()=>{let It=Ue.dist[x.st[x.i]]||0;return It<1?Math.round(It*100)*10+" m":It.toFixed(1).replace(".",",")+" km"})()} \xB7 unos <b>${x.walk} min</b> a pie</div>`:""}
        <div class="hwalk"${x===Ue?" hidden":""}>\u{1F6B6} Tardo <button type="button" data-hw="${x.key}:-1">\u2212</button><b>${pt} min</b><button type="button" data-hw="${x.key}:1">+</button> a pie hasta la estaci\xF3n</div>
        ${I.length?`<div class="hal ${at?"bad":""}">\u26A0\uFE0F ${Un(I[0])} ${d(I[0].txt)} <small>${jn(I[0])}</small>${I.length>1?` <a data-hal>+${I.length-1} avisos</a>`:""}</div>`:`<div class="hok">\u2713 Sin avisos para ${[...St].sort(L).join(", ")}</div>`}
        ${(()=>{let It=x.st.flatMap(ue=>Ze("",ue));return It.length?`<div class="hcr">${It.slice(0,3).map(ue=>`${$t[ue.kind]} <b>${d(Ae(ue.kind))}</b> <small>${ue.up>1?ue.up+" viajeros \xB7 ":""}${Ve(ue)}</small>`).join("<br>")}</div>`:""})()}
        ${x===Ue?`<div class="hcols one">${Ke("all",ne("all"))}</div>`:`<div class="hcols">${Ke("to",zt)}${Ke(Ee,ge)}</div>`}
        <small class="hsrc">${_e?un.get(b[O].id)?.d?"Salidas oficiales de Rodalies en directo":"Cargando salidas oficiales\u2026 mientras, horario + retrasos":"Previsi\xF3n seg\xFAn horario (sin tiempo real)"} \xB7 \u25CF tren circulando \xB7 <a data-hmap="${O}">ver en el mapa</a> \xB7 ${x===Ue?"<a data-hloc>actualizar ubicaci\xF3n</a>":`<a data-hset="${x.key}">cambiar estaci\xF3n</a>`}${x===Gn?' \xB7 <a data-hdel="work">quitar</a>':""}</small>
      </div>`:"")+"</div>"}let Bi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},Iu=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Pu=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,Ur=()=>{let x=[...si.st,...Gn.st],w=new Set;return x.forEach(R=>{let O=ot.get(R);O!=null&&b[O].fams.forEach(H=>w.add(H))}),{stations:x,lines:[...w].sort(L)}},Ep=x=>Uint8Array.from(atob(x.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((x.length+3)%4)),w=>w.charCodeAt(0));async function Lu(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function Du(x){let R=await(await fetch(D.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:x.toJSON(),...Ur()})})).json();if(!R.ok)throw new Error(R.err||"error")}let Fn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function Tp(){let{lines:x,stations:w}=Ur(),R=new Set(x),O=new Set(w.map(Q=>ot.get(Q))),H=D.alerts.filter(Q=>[...Q.fams].some(it=>R.has(it))||[...Q.stops||[]].some(it=>O.has(it)));if(!Fn.seen){try{Fn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Fn.seen=new Set}if(!Fn.seen.size){H.forEach(Q=>Fn.seen.add(Q.id+"|"+Q.txt.length)),Nu();return}}let G=H.filter(Q=>!Fn.seen.has(Q.id+"|"+Q.txt.length));if(G.length&&(G.forEach(Q=>Fn.seen.add(Q.id+"|"+Q.txt.length)),Nu(),!(!Fn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let Q of G.slice(0,3)){let it=(Q.src==="Adif"?"Adif \xB7 v\xEDa":"Rodalies")+(Q.fams.size?" \xB7 "+[...Q.fams].sort(L).slice(0,4).join(" "):""),dt={body:Q.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+Q.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(pt=>pt?pt.showNotification(it,dt):new Notification(it,dt)).catch(()=>{try{new Notification(it,dt)}catch{}})}}function Nu(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Fn.seen].slice(-400)))}catch{}}async function Ap(){if(Fn.on)Fn.on=!1,$e("Avisos desactivados");else{if(!("Notification"in window)){$e(Iu&&!Pu()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio y activa los avisos desde la app":"Este navegador no permite avisos");return}if(await Notification.requestPermission()!=="granted"){$e("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}Fn.on=!0,$e("Listo: te aviso de incidencias en "+Ur().lines.join(", ")+" mientras la app est\xE9 abierta")}try{localStorage.setItem("rod_ln",Fn.on?"1":"")}catch{}On(!0)}async function Cp(){if(!D.repOk)return Ap();if(!Bi.busy){Bi.busy=!0;try{let x=await Lu();if(!x){$e(Iu&&!Pu()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio, abre la app desde ah\xED y activa los avisos":"Este navegador no permite avisos (hace falta abrir la web publicada, no el archivo)");return}if(await navigator.serviceWorker.ready,Bi.on){let w=await x.pushManager.getSubscription();w&&(fetch(D.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:w.endpoint})}).catch(()=>{}),await w.unsubscribe().catch(()=>{})),Bi.on=!1,$e("Avisos desactivados")}else{if(!D.url){$e("Hace falta el puente en directo");return}if(await Notification.requestPermission()!=="granted"){$e("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}let R=(await mt(D.url.replace(/\/+$/,""),"/push/key")).key,O=await x.pushManager.getSubscription()||await x.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ep(R)});await Du(O),Bi.on=!0,$e("Listo: te avisaremos de incidencias en "+Ur().lines.join(", "))}try{localStorage.setItem("rod_push",Bi.on?"1":"")}catch{}}catch(x){$e("No se han podido activar los avisos: "+(x.message||x))}finally{Bi.busy=!1,On(!0)}}}async function Uu(){if(Bi.on)try{let x=await Lu(),w=x&&await x.pushManager.getSubscription();w&&await Du(w)}catch{}}let Cc=!1,Fu="";function Rc(){let x=be?"t"+(be.tid||be.vtid):Xe>=0?"s"+Xe:fn?"a":dn?"n":"";x!==Fu&&(Cc=!1,Fu=x);let w=innerWidth<=640&&!!x&&!Cc,R=f("#inf");R.classList.contains("compact")!==w&&(R.classList.toggle("compact",w),requestAnimationFrame(()=>{if(h.style.display!=="none"){let O=R.getBoundingClientRect().bottom;h.style.top=Math.round(O+8)+"px",h.style.maxHeight=Math.max(140,f("#rc").getBoundingClientRect().top-O-16)+"px"}}))}function On(x){let w=f("#home");if(!w)return;let R=performance.now();if(!x&&R-Ru<4e3)return;Ru=R;let O=At(),H=[],G=Ur(),Q=Dr.map(pt=>wp(pt,O,H)).join("")+(Dr.some(pt=>pt.open)&&G.lines.length?`${(()=>{let pt=!!D.repOk,St=pt?Bi.on:Fn.on;return`<div class="hpush"><span>\u{1F514} Avisos de ${G.lines.join(", ")}<small>${pt?St?"Activados: incidencias oficiales, de Adif y de viajeros":"Te llegan aunque tengas la app cerrada":St?"Activados mientras la app est\xE9 abierta":"Incidencias nuevas de tus l\xEDneas mientras la app est\xE9 abierta"}</small></span><button type="button" data-push class="${St?"on":""}">${St?"Desactivar":"Activar"}</button></div>`})()}`:"");if(w.className=Dr.some(pt=>pt.open)?"open":"",w._h===Q)return;w._h=Q,w.innerHTML=Q;let it=pt=>pt==="work"?Gn:pt==="near"?Ue:si;w.querySelectorAll("[data-hloc]").forEach(pt=>pt.onclick=()=>{Ue.err="",Tc(!0)}),w.querySelectorAll("[data-ht]").forEach(pt=>pt.onclick=()=>{if(f("#inf").classList.contains("compact")){Cc=!0,Rc();return}let St=it(pt.dataset.ht);St.open=!St.open,Nr(St),On(!0),(be||Xe>=0||fn||dn)&&(h._h="",Tt())}),w.querySelectorAll("[data-hs]").forEach(pt=>pt.onclick=()=>{let[St,I]=pt.dataset.hs.split(":"),at=it(St);at.i=+I,Nr(at),On(!0)}),w.querySelectorAll("[data-hw]").forEach(pt=>pt.onclick=()=>{let[St,I]=pt.dataset.hw.split(":"),at=it(St);at.walk=m(at.walk+ +I,0,60),Nr(at),On(!0)}),w.querySelectorAll("[data-hmap]").forEach(pt=>pt.onclick=()=>{let St=+pt.dataset.hmap;dn=fn=!1,be=null,Xe=St,ks(),wt(),Object.assign(s,{tx:b[St].w[0],ty:b[St].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),h._h="",Tt(),a()}),w.querySelectorAll("[data-hset]").forEach(pt=>pt.onclick=()=>{gs=pt.dataset.hset,p.value="",p.placeholder=gs==="work"?"Escribe la estaci\xF3n del trabajo\u2026":"Escribe la estaci\xF3n de casa\u2026",p.focus()}),w.querySelectorAll("[data-hdel]").forEach(pt=>pt.onclick=()=>{Gn.st=[],Gn.open=!1,Nr(Gn),On(!0),Uu()}),w.querySelectorAll("[data-dk]").forEach(pt=>pt.onclick=()=>Ou(H[+pt.dataset.dk])),w.querySelectorAll("[data-hal]").forEach(pt=>pt.onclick=()=>f("#alr").click());let dt=w.querySelector("[data-push]");dt&&(dt.onclick=Cp),pn(w)}function Ou(x){if(!x)return;let w=t.days.indexOf(At().ymd),R=ii.find(G=>G.real?x.tid&&G.v.tid===x.tid||x.num&&String(G.tr?G.tr.num:G.v.num)===String(x.num):x.tr&&G.tr===x.tr||x.num&&G.tr&&String(G.tr.num)===String(x.num)),O=x.tr||R&&R.tr||(J[w]||[]).find(G=>String(G.num)===String(x.num));if(dn=fn=!1,Xe=-1,ks(),be=R?R.tr||{vtid:R.v.tid}:O||null,!be)return;tn=R&&R.tr?R.tr:null,tn&&innerWidth<=640&&(h.classList.add("peek"),f("#rc").classList.contains("min")||f("#rcgrab").click());let H=R?R.p.w:null;H&&Object.assign(s,{tx:H[0],ty:H[1],dist:Math.min(s.dist,22)}),wt(),h._h="",Tt(),Kn=0,a()}let gs=!1;p.addEventListener("blur",()=>setTimeout(()=>{gs&&!p.value.trim()&&(gs=!1,p.placeholder="Buscar estaci\xF3n o municipio\u2026")},600));function ks(){Dr.some(x=>x.open)&&(Dr.forEach(x=>{x.open=!1}),On(!0))}function Bu(x,w){let R=w==="work"?Gn:si,O=b[x].id,H=b.filter(G=>G.fams.size&&G!==b[x]&&Math.hypot(G.w[0]-b[x].w[0],G.w[1]-b[x].w[1])<.6).map(G=>G.id);R.st=[O,...H].slice(0,3),R.i=0,R.open=!0,Nr(R),On(!0),Uu()}let Ic=f("#lines");Ic.innerHTML='<button type="button" class="all" data-f="*">Todas</button>'+y.map(x=>`<button type="button" style="--c:${A[x]}" data-f="${x}">${x}</button>`).join("");function zu(){Ic.querySelectorAll("[data-f]").forEach(x=>{x.dataset.f!=="*"&&x.classList.toggle("off",!Gt.has(x.dataset.f))})}Ic.querySelectorAll("[data-f]").forEach(x=>x.onclick=()=>{let w=x.dataset.f;w==="*"?y.forEach(R=>Gt.add(R)):Gt.size===y.length?(Gt.clear(),Gt.add(w)):Gt.has(w)?(Gt.delete(w),Gt.size||y.forEach(R=>Gt.add(R))):Gt.add(w),zu(),W(),wt(),_i(),Kn=0,a()});let Pc=[...document.querySelectorAll("[data-sp]")],Qn=0;function ku(x){let w=At();x&&(j===x||Qn===x)?j?(Ct=w.min,lt=w.min,j=0,Qn=x):(te=performance.now(),j=x,Qn=0):x===0?(j=0,lt=null,Qn=0):(Ct=w.min,te=performance.now(),lt=w.min,j=x,Qn=0),Pc.forEach(R=>{let O=+R.dataset.sp;R.classList.toggle("on",O===(j||Qn)||!j&&!Qn&&lt==null&&O===0),R.classList.toggle("pz",!!Qn&&O===Qn),R.textContent=O===0?"Ahora":Qn===O?"\u25B6 \xD7"+O:j===O?"\u23F8 \xD7"+O:"\xD7"+O}),Kn=0,a()}Pc.forEach(x=>x.onclick=()=>ku(+x.dataset.sp)),f("#tsl").oninput=x=>{let w=+x.target.value;Ct=w,lt=w,te=performance.now(),j===0&&!Qn&&Pc.forEach(R=>R.classList.remove("on")),Kn=0,a()},setInterval(()=>{lt!=null&&j&&Ct+(performance.now()-te)/6e4*j>1560&&(Ct=240,te=performance.now())},1e3),window.__rodSearch=x=>{let w=g(x.trim());if(!w){u.style.display="none",u._pick=null;return}let R=[],O=[];b.forEach((it,dt)=>{if(!it.fams.size)return;let pt=g(it.n);pt.startsWith(w)||pt.includes(" "+w)||pt.includes("-"+w)?R.push(dt):pt.includes(w)&&O.push(dt)});let H=R.concat(O).slice(0,7),G=M.filter(it=>g(it.name).startsWith(w)).sort((it,dt)=>dt.pop-it.pop).slice(0,3),Q=H.map(it=>({h:`\u{1F689} ${d(b[it].n)}<em>${[...b[it].fams].sort(L).slice(0,3).map(dt=>`<em class="ls" style="background:${A[dt]}">${dt}</em>`).join(" ")}</em>`,go:()=>{if(gs){let dt=gs;gs=!1,p.placeholder="Buscar estaci\xF3n o municipio\u2026",Bu(it,dt);return}dn=!1,fn=!1,Xe=it,be=null,tn=null,ks(),wt(),Object.assign(s,{tx:b[it].w[0],ty:b[it].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Tt(),a()}})).concat(G.map(it=>({h:`${d(it.name)}<em>municipio</em>`,go:()=>{Object.assign(s,{tx:it.cx,ty:it.cy,dist:m(it.size*3+14,14,60)}),a()}})));u.innerHTML=Q.map((it,dt)=>`<li data-i="${dt}">${it.h}</li>`).join("")||'<li class="no">Sin resultados</li>',u.style.display="block",u._pick=it=>{Q[it]&&(Q[it].go(),u.style.display="none",p.value="",p.blur())},u.querySelectorAll("li[data-i]").forEach(it=>it.onclick=()=>u._pick(+it.dataset.i))},zu(),wt();try{let x=new URLSearchParams(location.search).get("st");if(x){let w=g(x),R=-1,O=0;b.forEach((H,G)=>{if(!H.fams.size)return;let Q=g(H.n),it=Q===w?3:Q.startsWith(w)||w.startsWith(Q)?2:Q.includes(w)||w.includes(Q)?1:0;it>O&&(O=it,R=G)}),R>=0&&setTimeout(()=>{Xe=R,wt(),Object.assign(s,{tx:b[R].w[0],ty:b[R].w[1],dist:18,tilt:.5}),Tt(),a()},300)}}catch{}window.__rod={get follow(){return tn},get selTrip(){return be},ST:b,TR:V,FAM:y,act:()=>ii,setSpeed:ku,RT:D,pollRT:_t,nowState:At,posAt:zs,activeTrips:Cr,select:x=>{be=x,Tt()}}}var Ar=window.__DATA__;var Se=i=>document.querySelector(i),Zi=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Rn=(i,t,e)=>Math.min(e,Math.max(t,i)),fu=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Nn=Se("#c"),Ha=new sc({canvas:Nn,antialias:!0});Ha.setPixelRatio(Math.min(devicePixelRatio||1,2));var ps=new jr;ps.background=new ae(15659509);var vc=35,Fi=new Tn(vc,1,2,1500);ps.add(new xa(16777215,9080992,1));var np=new ya(16777215,.9);np.position.set(-40,-70,90);ps.add(np);var Ni=100/Ar.w,Ba=Ar.w/2,za=Ar.h/2,Qe=[],pu=new ui;ps.add(pu);var ip=new ws({color:16777215,transparent:!0,opacity:.55});for(let i of Ar.m){let t=new ui,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let m of i.g){let g=m.map(f=>{let d=[];for(let C=0;C<f.length;C+=2)d.push(new Pt((f[C]-Ba)*Ni,(f[C+1]-za)*Ni));return d.length>1&&d[0].equals(d[d.length-1])&&d.pop(),d}).filter(f=>f.length>=3);if(!g.length)continue;let M=new pr(g[0]);for(let f=1;f<g.length;f++)M.holes.push(new Ts(g[f]));e.push(M);for(let f of g[0])s=Math.min(s,f.x),r=Math.max(r,f.x),a=Math.min(a,f.y),o=Math.max(o,f.y);for(let f of g)n.push(new na(new nn().setFromPoints(f.map(d=>new U(d.x,d.y,0))),ip))}if(!e.length)continue;let l;try{l=new da(e,{depth:1,bevelEnabled:!1})}catch{continue}let c=new ma({color:13421772}),h=new An(l,c);t.add(h);let p=new ui;n.forEach(m=>p.add(m)),p.position.z=.04,pu.add(p),t.scale.z=.01,pu.add(t);let u={og:p,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:h,mat:c,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};h.userData.m=u,Qe.push(u)}var Bb=Qe.map(i=>i.mesh),Zf=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},sp=0,rp=0;for(let i of Qe){for(let t of i.rings)sp+=Zf(t[0])-t.slice(1).reduce((e,n)=>e+Zf(n),0);rp+=i.area}var $v=Math.sqrt(rp/sp),uc={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},ap={"08":"provincia de Barcelona",17:"provincia de Girona",25:"provincia de Lleida",43:"provincia de Tarragona"},Su="sqrt",Mu="pop",uu=0,mu=0,Er=1,Oa=1,qv={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},gu=i=>Mu==="pop"?i.pop:i.pop/i.area,hc=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new ae(i));function Yv(i){i=Rn(i,0,1)*(hc.length-1);let t=Math.min(Math.floor(i),hc.length-2);return hc[t].clone().lerp(hc[t+1],i-t)}var Tr=i=>i>=100?Zi(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function Zv(){mu=0;for(let i of Qe)mu+=i.pop;[...Qe].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...Qe].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),op()}var Jv=new ae("#d3d8e2"),Kv=new ae("#eceff3");function bu(i){i.mat.color.copy(i.base).lerp(Kv,.86),i.inF||i.mat.color.lerp(Jv,.8)}function op(){Er=1,Oa=1e12;for(let e of Qe){let n=gu(e);Er=Math.max(Er,n),Oa=Math.min(Oa,n)}let i=Math.log10(Math.max(Oa,.01)),t=Math.log10(Er);for(let e of Qe)e.base=Yv((Math.log10(Math.max(gu(e),.01))-i)/(t-i)),bu(e);Se("#lmin").textContent=Tr(Oa),Se("#lmax").textContent=Tr(Er),Se("#lname").textContent=Mu==="pop"?"habitantes":"hab./km\xB2",yc()}function yc(){let i=qv[Su],t=i(Er),e=24*uu;for(let n of Qe)n.zt=uu<=.001?.01:Math.max(.12*Math.min(1,uu),e*i(gu(n))/t)*(n.inF?1:.1);bn()}var Jf=Object.fromEntries(Qe.map(i=>[i.code,i])),dc=[],lp=[];for(let i of Ar.bd){let t=Jf[i.a],e=Jf[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)lp.push((i.p[n]-Ba)*Ni,(i.p[n+1]-za)*Ni,0,(i.p[n+2]-Ba)*Ni,(i.p[n+3]-za)*Ni,0),dc.push(t,e)}var mc=new qi;mc.setPositions(lp);var cp=new Ii({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),hp=new Ii({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[cp,hp].forEach((i,t)=>{let e=new Ds(mc,i);e.frustumCulled=!1,e.renderOrder=10+t,ps.add(e)});function jv(){let i=mc.attributes.instanceStart.data.array;for(let t=0;t<dc.length;t+=2){let e=Math.max(dc[t].z,dc[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}mc.attributes.instanceStart.data.needsUpdate=!0}var gc={};for(let i of Object.keys(uc)){let t=Qe.filter(h=>h.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,l=-1e9;for(let h of t)e+=h.area,n+=h.cx*h.area,s+=h.cy*h.area,r=Math.min(r,h.cx),a=Math.max(a,h.cx),o=Math.min(o,h.cy),l=Math.max(l,h.cy);let c=document.createElement("div");c.className="plab",c.textContent=uc[i],c.title="Ver solo "+ap[i],c.onclick=()=>cy("pr:"+i),document.body.appendChild(c),gc[i]={el:c,p:new U(n/e,s/e,0),cx:(r+a)/2,cy:(o+l)/2,ext:Math.max(a-r,l-o),ext2:[a-r,l-o],area:e,name:uc[i]}}var du=new U;function Qv(){for(let i in gc){let t=gc[i];du.copy(t.p).project(Fi),t.el.style.transform=`translate(-50%,-50%) translate(${(du.x*.5+.5)*innerWidth}px,${(-du.y*.5+.5)*innerHeight}px)`}}var sn={tilt:0,yaw:0,dist:150,tx:0,ty:0},fe={...sn};function ty(){let i=innerWidth/innerHeight,t=Math.tan(vc*Math.PI/360);return Math.max(Ar.h*Ni*1.1,100*1.1/i)/(2*t)}var ey=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{fe.yaw=Math.round(fe.yaw/(2*Math.PI))*2*Math.PI,bn()});function wu(){Object.assign(fe,{tilt:0,yaw:0,dist:ty(),tx:0,ty:0}),bn()}function ny(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=sn;Fi.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),Fi.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),Fi.lookAt(n,s,0)}var fc=!0,Kf=performance.now(),ka=new Map;function bn(){fc=!0}function up(i){requestAnimationFrame(up);let t=Rn((i-Kf)/1e3,0,.05);Kf=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(sn)){let r=fe[s]-sn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(sn[s]+=r*e,n=!0):sn[s]=fe[s]}for(let s of Qe){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of ka){let a=(i-r)/1800;a>=1?(ka.delete(s),Bs(s)):Bs(s,.5*Math.sin(Math.PI*a)),n=!0}window.__rodTick&&window.__rodTick(i)&&(fc=!0),(n||fc)&&(ey.style.transform=`rotate(${sn.yaw}rad) scaleY(${(.55+.45*Math.cos(sn.tilt)).toFixed(3)})`,ny(),jv(),Qv(),window.__rodFrame&&window.__rodFrame(),Ha.render(ps,Fi),fc=n,Se("#tilt").value=Math.round(fe.tilt*180/Math.PI),Se("#yaw").value=Math.round(((fe.yaw*180/Math.PI+180)%360+360)%360-180))}function dp(){Ha.setSize(innerWidth,innerHeight,!1),Fi.aspect=innerWidth/innerHeight,Fi.updateProjectionMatrix(),cp.resolution.set(innerWidth,innerHeight),hp.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),bn()}addEventListener("resize",()=>{dp(),We.length&&ms()});Nn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;fe.yaw+=n*.0035}else i.ctrlKey?fe.dist=Rn(fe.dist*Math.exp(e*.01),6,400):fe.tilt=Rn(fe.tilt+e*.002,0,1.32);bn()},{passive:!1});Nn.addEventListener("contextmenu",i=>i.preventDefault());var Ui=new Map,Vn=null,Us=0,_u=0,xu=0;var _c=null;Nn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),We.length&&setTimeout(ms,50)),Nn.setPointerCapture(i.pointerId),Ui.set(i.pointerId,{x:i.clientX,y:i.clientY}),Ui.size===1&&(Vn={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),Ui.size===2){let[t,e]=[...Ui.values()];Us=Math.hypot(t.x-e.x,t.y-e.y),_u=Math.atan2(e.y-t.y,e.x-t.x),xu=(t.y+e.y)/2,_c={mode:null,rot:0,sc:0,tl:0},Vn&&(Vn.multi=!0)}Eu()});Nn.addEventListener("pointermove",i=>{let t=Ui.get(i.pointerId);if(!t){Yi={x:i.clientX,y:i.clientY},vu||(vu=requestAnimationFrame(sy));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,Ui.size===2){let[s,r]=[...Ui.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),l=(s.y+r.y)/2,c=o-_u;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI);let h=Us?a-Us:0,p=l-xu,u=_c||(_c={mode:null,rot:0,sc:0,tl:0});u.rot+=c,u.sc+=h,u.tl+=p,u.mode?u.mode==="zoom"&&Math.abs(u.rot)>.45&&(u.mode="rotate"):Math.abs(u.rot)>.3?u.mode="rotate":Math.abs(u.tl)>30&&Math.abs(u.sc)<18?u.mode="tilt":Math.abs(u.sc)>12&&(u.mode="zoom"),(u.mode==="zoom"||u.mode==="rotate")&&Us&&(fe.dist=Rn(fe.dist*Us/a,6,400)),u.mode==="rotate"&&(fe.yaw+=c,sn.yaw=fe.yaw),u.mode==="tilt"&&(fe.tilt=Rn(fe.tilt-p*.006,0,1.32),sn.tilt=fe.tilt),Us=a,_u=o,xu=l,bn();return}if(Vn.moved+=Math.abs(e)+Math.abs(n),Vn.rot||i.altKey)fe.yaw+=e*.005,fe.tilt=Rn(fe.tilt+n*.004,0,1.32),sn.yaw=fe.yaw,sn.tilt=fe.tilt;else{let s=2*sn.dist*Math.tan(vc*Math.PI/360)/innerHeight,r=Math.sin(sn.yaw),a=Math.cos(sn.yaw),o=1/Math.max(Math.cos(sn.tilt),.3);fe.tx=Rn(fe.tx-a*e*s+-r*n*s*o,-70,70),fe.ty=Rn(fe.ty-r*e*s+a*n*s*o,-70,70),sn.tx=fe.tx,sn.ty=fe.ty}bn()});var fp=i=>{let t=Vn&&!Vn.rot&&!Vn.multi&&Vn.moved<(Vn.touch?12:6)&&i.type==="pointerup"&&Ui.size===1,e=Vn&&Vn.touch;Ui.delete(i.pointerId),Us=0,_c=null,Ui.size||(Vn=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};Nn.addEventListener("pointerup",fp);Nn.addEventListener("pointercancel",fp);Nn.addEventListener("dblclick",wu);addEventListener("keydown",i=>{i.key==="Alt"&&(Nn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(Nn.style.cursor="")});addEventListener("blur",()=>{Nn.style.cursor=""});var iy=new Ma,jf=new Pt,Yi=null,vu=0,Fs=null;function sy(){if(vu=0,!Yi||Vn)return;jf.set(Yi.x/innerWidth*2-1,-(Yi.y/innerHeight)*2+1),iy.setFromCamera(jf,Fi);let i=null;if(i!==Fs){let e=Fs;Fs=i,e&&Bs(e),i&&Bs(i),bn()}let t=window.__rodHover&&window.__rodHover(Yi.x,Yi.y);if(t){Ns.innerHTML=t,Ns.style.display="block";let e=Ns.offsetWidth,n=Ns.offsetHeight;Ns.style.left=Rn(Yi.x+14,6,innerWidth-e-6)+"px",Ns.style.top=Rn(Yi.y+14,6,innerHeight-n-6)+"px",Nn.style.cursor="pointer"}else Eu(),Nn.style.cursor=""}Nn.addEventListener("pointerleave",()=>{if(Yi=null,Fs){let i=Fs;Fs=null,Bs(i),bn()}Eu()});var Ns=Se("#tip");function Eu(){Ns.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{Mu=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),op()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{Su=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),yc()});Se("#yaw").oninput=i=>{fe.yaw=+i.target.value*Math.PI/180,bn()};Se("#tilt").oninput=i=>{fe.tilt=+i.target.value*Math.PI/180,bn()};Se("#zin").onclick=()=>{fe.dist=Rn(fe.dist*.75,6,400),bn()};Se("#zout").onclick=()=>{fe.dist=Rn(fe.dist/.75,6,400),bn()};Se("#rst").onclick=wu;var Qf=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],We=[],tp={},ry=i=>tp[i]||(tp[i]=new ws({color:i}));function pp(i,t){i.og.children.forEach(e=>e.material=t?ry(t):ip)}function Bs(i,t=0){let e=i.mat.emissive;i===Fs?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function Tu(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let c of i)e=Math.min(e,c.cx-c.size/2),n=Math.max(n,c.cx+c.size/2),s=Math.min(s,c.cy-c.size/2),r=Math.max(r,c.cy+c.size/2);let a=innerWidth/innerHeight,o=Math.tan(vc*Math.PI/360),l=i.length===1?Rn(i[0].size*3.2+14,14,120):Rn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(fe,{tx:(e+n)/2,ty:(s+r)/2,dist:l,tilt:t,yaw:0}),bn()}var fs=Se("#q"),Jn=Se("#list"),He=Se("#mcs");function Sc(i,t=!0){if(Jn.style.display="none",fs.value="",!i.sel){We.length>=6&&mp(We[0].o,!0);let e=new Set(We.map(s=>s.color)),n=Qf.find(s=>!e.has(s))||Qf[0];i.sel={o:i,color:n,tint:new ae(n).multiplyScalar(.12)},We.push(i.sel),pp(i,n)}He.classList.contains("min")&&Ga(!1),ka.set(i,performance.now()),Bs(i),t&&Tu([i],Math.max(fe.tilt,.9)),ms()}function mp(i,t){let e=We.indexOf(i.sel);e>=0&&We.splice(e,1),i.sel=null,pp(i,null),Bs(i),bn(),t||ms()}function gp(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=We.map(h=>{let p=1e9,u=-1e9,m=1e9,g=-1e9;for(let M of h.o.rings)for(let f=0;f<M[0].length;f+=2)p=Math.min(p,M[0][f]),u=Math.max(u,M[0][f]),m=Math.min(m,M[0][f+1]),g=Math.max(g,M[0][f+1]);return{x0:p,x1:u,y0:m,y1:g}}),a=Math.max(...r.map(h=>Math.max(h.x1-h.x0,h.y1-h.y0))),o=(Math.min(e,n)-22)/a;We.forEach((h,p)=>{let u=r[p],m=(u.x0+u.x1)/2,g=(u.y0+u.y1)/2;s.beginPath();for(let M of h.o.rings)for(let f of M)for(let d=0;d<f.length;d+=2){let C=e/2+(f[d]-m)*o,P=n/2-(f[d+1]-g)*o;d?s.lineTo(C,P):s.moveTo(C,P),d===f.length-2&&s.closePath()}s.fillStyle=h.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=h.color,s.stroke()});let l=o/$v,c=[.5,1,2,5,10,20,50,100].find(h=>h*l>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,c*l,2),s.font="10px system-ui",s.fillText(c+" km",12+c*l,n-8)}function ms(){if(!We.length){He.innerHTML="",He.style.display="none",Ga(!1);return}if(He.style.display="flex",innerWidth<=640){let e=Se("#inf").getBoundingClientRect().bottom;He.style.top=Math.round(e+8)+"px",He.style.maxHeight=Math.max(110,Math.min(innerHeight*(Se("#rc").classList.contains("min")?.7:.4),Se("#rc").getBoundingClientRect().top-e-16))+"px",He.style.width=""}else if(innerHeight<=500){let e=Se("#inf").getBoundingClientRect().bottom;He.style.top=Math.round(e+8)+"px",He.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",He.style.width="min(290px, 40vw)"}else He.style.top="",He.style.maxHeight="",He.style.width="";let i=We.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${uc[s.pr]}</em></div><div class="mb">${Zi(s.pop)} hab.</div><small>${Tr(s.area)} km\xB2 \xB7 ${Tr(s.pop/s.area)} hab./km\xB2 \xB7 n\xBA ${s.rankP} en poblaci\xF3n</small></div>`}).join("");if(We.length>1){let e=s=>Math.max(...We.map(s));if(i+='<div class="cmp"><div class="ct">Comparar <small>arrastra una ficha sobre otra para reordenar</small></div><canvas id="sil"></canvas><small class="sc">Siluetas superpuestas a la misma escala</small>'+[["Habitantes",s=>s.o.pop,Zi],["Superficie (km\xB2)",s=>s.o.area,Tr],["Densidad (hab./km\xB2)",s=>s.o.pop/s.o.area,Tr]].map(([s,r,a])=>`<div class="cr"><span>${s}</span>${We.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),We.length===2){let[s,r]=We.map(c=>c.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],l=(c,h)=>(c>=h?c/h:h/c).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}</b> tiene ${l(a.pop,o.pop)}\xD7 los habitantes de <b>${o.name}</b> y ocupa ${l(a.area,o.area)}\xD7 ${a.area>=o.area?"su superficie":"menos superficie"}.</small>`}i+="</div>"}He.innerHTML=i,He.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),mp(We[+e.dataset.x].o)}),He.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>Tu([We[+e.dataset.i].o],Math.max(fe.tilt,.9)),e.onmouseenter=()=>{let n=We[+e.dataset.i].o;ka.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=We.splice(s,1);We.splice(r,0,a),ms();let o=Se("#sil");o&&o.classList.add("flash")}}});let t=Se("#sil");t&&gp(t)}fs.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(fs.value);return}let i=fu(fs.value.trim());if(!i){Jn.style.display="none";return}let t=[],e=[];for(let s of Qe){let r=fu(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);Jn.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${Zi(s.pop)}</em></li>`).join("")||'<li class="no">Sin resultados</li>',Jn.style.display="block",Jn.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>Sc(n[+s.dataset.i])),Jn._r=n});fs.addEventListener("keydown",i=>{i.key==="Enter"&&Jn._pick?Jn._pick(0):i.key==="Enter"&&Jn._r&&Jn._r[0]&&Sc(Jn._r[0]),i.key==="Escape"&&(fs.value="",Jn.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==fs&&_p()});var ep=0;addEventListener("resize",()=>{clearTimeout(ep),ep=setTimeout(()=>{let i=Se("#sil");i&&gp(i)},120)});var xc=null,yu=Se("#chip");function ay(i,t,e=.8){xc={codes:new Set(i.map(n=>n.code)),label:t},Qe.forEach(n=>{n.inF=xc.codes.has(n.code),bu(n)}),yu.innerHTML=`<span>Mostrando: <b>${t}</b> \xB7 ${i.length} municipio${i.length===1?"":"s"}</span><button id="chx" title="Quitar filtro">\xD7</button>`,yu.style.display="flex",Se("#chx").onclick=_p,yc(),Tu(i,e),i.slice(0,40).forEach(n=>ka.set(n,performance.now()))}function _p(){xc&&(xc=null,Qe.forEach(i=>{i.inF=!0,bu(i)}),yu.style.display="none",yc())}var oy="prov";function ly(i){let t=[...Qe].sort((a,o)=>o.pop-a.pop),e=[...Qe].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[Qe.filter(a=>a.pr===s),ap[s]];if(n==="top")return s==="pop"?[t.slice(0,10),"10 con m\xE1s habitantes"]:[e.slice(0,10),"10 m\xE1s densos"];if(n==="low")return s==="pop"?[t.slice(-10),"10 con menos habitantes"]:[e.slice(-10),"10 menos densos"];if(n==="size")return[Qe.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${Zi(+s)} o m\xE1s habitantes`:+s==0?`menos de ${Zi(+r)} habitantes`:`${Zi(+s)} \u2013 ${Zi(+r-1)} habitantes`];if(n==="n50"){let a=0,o=0;for(let l of t)if(a+=l.pop,o++,a>=mu/2)break;return[t.slice(0,o),"la mitad de la poblaci\xF3n"]}return[[],""]}function cy(i){let[t,e]=ly(i);t.length&&ay(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{oy=i.dataset.tab,Se("#dbody").scrollTop=0});var Os=Se("#rc"),pc=Se("#mcstab");function Va(i){Os.classList.toggle("min",i),Se("#rcgrab span").textContent=i?"Mostrar controles":"Ocultar controles",We.length&&ms()}function Ga(i){He.classList.toggle("min",i),He.style.transform="",He.style.opacity="",pc.classList.toggle("on",i&&We.length>0),i&&(pc.textContent=`\u25B8 ${We.length} ${We.length===1?"ficha":"fichas"}`,pc.style.top=He.style.top||"124px")}function Au(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!Mc.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y;!s.lock&&Math.hypot(o,l)>10&&(s.lock=Math.abs(o)>Math.abs(l)?"x":"y"),s.lock===n&&t&&t(o,l)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y,c=s.lock;s=null,e(c===n?o:0,c===n?l:0,c)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Se("#rcgrab").onclick=()=>Va(!Os.classList.contains("min"));var xp=()=>innerWidth>640;Au(Os,{axis:"y",onEnd:(i,t)=>{if(!xp())if(t>40&&!Os.classList.contains("min")){let e=Se("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&Va(!0)}else t<-30&&Os.classList.contains("min")&&Va(!1)}});Au(Os,{axis:"x",onEnd:i=>{xp()&&(i>50?Va(!0):i<-30&&Os.classList.contains("min")&&Va(!1))}});Au(He,{axis:"x",onMove:i=>{i<0&&(He.classList.add("sw"),He.style.transform=`translateX(${i}px)`,He.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{He.classList.remove("sw"),i<-60?Ga(!0):(He.style.transform="",He.style.opacity="")}});pc.onclick=()=>{Ga(!1),ms()};Se("#dtoggle").onclick=()=>{let i=Se("#dp").classList.toggle("open");Se("#rc").classList.toggle("dopen",i),Se("#dtoggle").textContent=i?Mc.matches&&innerWidth<=640?"\u2190 Controles":"En directo \u25B4":"En directo: conectar datos de Renfe \u25BE",window.__rodCard&&window.__rodCard()};var Mc=matchMedia("(max-width:640px), (max-height:500px)");function vp(){let i=Se("#leg");Mc.matches?Se("#rc").insertBefore(i,Se("#dtoggle")):document.body.appendChild(i),We.length&&ms()}Mc.addEventListener("change",vp);vp();dp();Zv();wu();Object.assign(sn,fe);for(let i of Qe)i.z=.01;requestAnimationFrame(up);Yf({scene:ps,camera:Fi,renderer:Ha,goal:fe,cur:sn,invalidate:bn,flyTo:(i,t,e,n)=>{Object.assign(fe,{tx:(i-Ba)*Ni,ty:(t-za)*Ni,dist:e,tilt:n}),bn()},K:Ni,CX:Ba,CY:za,mcs:He,q:fs,list:Jn,munis:Qe,select:Sc,norm:fu,fmt:Zi,clamp:Rn,mcsMin:Ga});window.__app={scene:ps,renderer:Ha,camera:Fi,munis:Qe,labs:gc,goal:fe,cur:sn,select:Sc,get mode(){return Su}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
