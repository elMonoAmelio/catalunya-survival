(()=>{var Cd=0,yh=1,Rd=2;var Ta=1,Id=2,vr=3,us=0,Un=1,Pi=2,Li=0,yr=1,Sh=2,Mh=3,bh=4,Pd=5;var Ps=100,Ld=101,Dd=102,Nd=103,Ud=104,Fd=200,Od=201,Bd=202,zd=203,wh=204,Eh=205,kd=206,Vd=207,Hd=208,Gd=209,Wd=210,Xd=211,$d=212,qd=213,Yd=214,To=0,Ao=1,Co=2,ar=3,Ro=4,Io=5,Po=6,Lo=7,pl=0,Zd=1,Jd=2,gi=0,Th=1,Ah=2,Ch=3,Rh=4,Ih=5,Ph=6,Lh=7;var Dh=300,ds=301,Ls=302,ml=303,gl=304,Aa=306,Do=1e3,Ei=1001,No=1002,gn=1003,Kd=1004;var Ca=1005;var vn=1006,_l=1007;var fs=1008;var Vn=1009,Nh=1010,Uh=1011,Sr=1012,xl=1013,_i=1014,xi=1015,vi=1016,vl=1017,yl=1018,Mr=1020,Fh=35902,Oh=35899,Bh=1021,zh=1022,ri=1023,Ai=1026,ps=1027,kh=1028,Sl=1029,ms=1030,Ml=1031;var bl=1033,Ra=33776,Ia=33777,Pa=33778,La=33779,wl=35840,El=35841,Tl=35842,Al=35843,Cl=36196,Rl=37492,Il=37496,Pl=37488,Ll=37489,Da=37490,Dl=37491,Nl=37808,Ul=37809,Fl=37810,Ol=37811,Bl=37812,zl=37813,kl=37814,Vl=37815,Hl=37816,Gl=37817,Wl=37818,Xl=37819,$l=37820,ql=37821,Yl=36492,Zl=36494,Jl=36495,Kl=36283,jl=36284,Na=36285,Ql=36286;var Yr=2300,Uo=2301,wo=2302,oh=2303,lh=2400,ch=2401,hh=2402;var jd=3200;var tc=0,Qd=1,Yi="",Yn="srgb",Zr="srgb-linear",Jr="linear",Oe="srgb";var Eo=7680;var tf=519,ef=512,nf=513,sf=514,ec=515,rf=516,af=517,nc=518,of=519,Vh=35044;var Hh="300 es",fi=2e3,or=2001;function Up(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lf(){let i=Kr("canvas");return i.style.display="block",i}var $u={},lr=null;function jr(...i){let t="THREE."+i.shift();lr?lr("log",t,...i):console.log(t,...i)}function cf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function re(...i){i=cf(i);let t="THREE."+i.shift();if(lr)lr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ae(...i){i=cf(i);let t="THREE."+i.shift();if(lr)lr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Es(...i){let t=i.join(" ");t in $u||($u[t]=!0,re(...i))}function hf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var uf={[To]:Ao,[Co]:Po,[Ro]:Lo,[ar]:Io,[Ao]:To,[Po]:Co,[Lo]:Ro,[Io]:ar},Ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qu=1234567,Wr=Math.PI/180,cr=180/Math.PI;function Ti(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[e&63|128]+En[e>>8&255]+"-"+En[e>>16&255]+En[e>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function Gh(i,t){return(i%t+t)%t}function Op(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Bp(i,t,e){return i!==t?(e-i)/(t-i):0}function Xr(i,t,e){return(1-e)*i+e*t}function zp(i,t,e,n){return Xr(i,t,1-Math.exp(-e*n))}function kp(i,t=1){return t-Math.abs(Gh(i,t*2)-t)}function Vp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Hp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Gp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Wp(i,t){return i+Math.random()*(t-i)}function Xp(i){return i*(.5-Math.random())}function $p(i){i!==void 0&&(qu=i);let t=qu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qp(i){return i*Wr}function Yp(i){return i*cr}function Zp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Jp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),p=r((t-n)/2),u=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*p,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*p,o*c);break;case"ZXZ":i.set(l*p,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function di(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Wh={DEG2RAD:Wr,RAD2DEG:cr,generateUUID:Ti,clamp:pe,euclideanModulo:Gh,mapLinear:Op,inverseLerp:Bp,lerp:Xr,damp:zp,pingpong:kp,smoothstep:Vp,smootherstep:Hp,randInt:Gp,randFloat:Wp,randFloatSpread:Xp,seededRandom:$p,degToRad:qp,radToDeg:Yp,isPowerOfTwo:Zp,ceilPowerOfTwo:Jp,floorPowerOfTwo:Kp,setQuaternionFromProperEuler:jp,normalize:ke,denormalize:di},It=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ri=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],u=r[a+0],m=r[a+1],g=r[a+2],b=r[a+3];if(p!==b||l!==u||c!==m||h!==g){let f=l*u+c*m+h*g+p*b;f<0&&(u=-u,m=-m,g=-g,b=-b,f=-f);let d=1-o;if(f<.9995){let R=Math.acos(f),P=Math.sin(R);d=Math.sin(d*R)/P,o=Math.sin(o*R)/P,l=l*d+u*o,c=c*d+m*o,h=h*d+g*o,p=p*d+b*o}else{l=l*d+u*o,c=c*d+m*o,h=h*d+g*o,p=p*d+b*o;let R=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=R,c*=R,h*=R,p*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*p+l*m-c*u,t[e+1]=l*g+h*u+c*p-o*m,t[e+2]=c*g+h*m+o*u-l*p,t[e+3]=h*g-o*p-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),u=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*p+c*m*g,this._y=c*m*p-u*h*g,this._z=c*h*g+u*m*p,this._w=c*h*p-u*m*g;break;case"YXZ":this._x=u*h*p+c*m*g,this._y=c*m*p-u*h*g,this._z=c*h*g-u*m*p,this._w=c*h*p+u*m*g;break;case"ZXY":this._x=u*h*p-c*m*g,this._y=c*m*p+u*h*g,this._z=c*h*g+u*m*p,this._w=c*h*p-u*m*g;break;case"ZYX":this._x=u*h*p-c*m*g,this._y=c*m*p+u*h*g,this._z=c*h*g-u*m*p,this._w=c*h*p+u*m*g;break;case"YZX":this._x=u*h*p+c*m*g,this._y=c*m*p+u*h*g,this._z=c*h*g-u*m*p,this._w=c*h*p-u*m*g;break;case"XZY":this._x=u*h*p-c*m*g,this._y=c*m*p-u*h*g,this._z=c*h*g+u*m*p,this._w=c*h*p+u*m*g;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],u=n+o+p;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Uc.copy(this).projectOnVector(t),this.sub(Uc)}reflect(t){return this.sub(Uc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uc=new F,Yu=new Ri,de=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],u=n[2],m=n[5],g=n[8],b=s[0],f=s[3],d=s[6],R=s[1],P=s[4],S=s[7],M=s[2],T=s[5],D=s[8];return r[0]=a*b+o*R+l*M,r[3]=a*f+o*P+l*T,r[6]=a*d+o*S+l*D,r[1]=c*b+h*R+p*M,r[4]=c*f+h*P+p*T,r[7]=c*d+h*S+p*D,r[2]=u*b+m*R+g*M,r[5]=u*f+m*P+g*T,r[8]=u*d+m*S+g*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*a-o*c,u=o*l-h*r,m=c*r-a*l,g=e*p+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return t[0]=p*b,t[1]=(s*c-h*n)*b,t[2]=(o*n-s*a)*b,t[3]=u*b,t[4]=(h*e-s*l)*b,t[5]=(s*r-o*e)*b,t[6]=m*b,t[7]=(n*l-c*e)*b,t[8]=(a*e-n*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fc.makeScale(t,e)),this}rotate(t){return Es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fc.makeRotation(-t)),this}translate(t,e){return Es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Fc=new de,Zu=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ju=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qp(){let i={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Oe&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Oe&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yi?Jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zr]:{primaries:t,whitePoint:n,transfer:Jr,toXYZ:Zu,fromXYZ:Ju,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:t,whitePoint:n,transfer:Oe,toXYZ:Zu,fromXYZ:Ju,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),i}var Te=Qp();function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ws,Fo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ws===void 0&&(Ws=Kr("canvas")),Ws.width=t.width,Ws.height=t.height;let s=Ws.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ws}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Kr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$i(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($i(e[n]/255)*255):e[n]=$i(e[n]);return{data:e,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tm=0,hr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Ti(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Oc(s[a].image)):r.push(Oc(s[a]))}else r=Oc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Oc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}var em=0,Bc=new F,zn=class i extends Ci{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ei,s=Ei,r=vn,a=fs,o=ri,l=Vn,c=i.DEFAULT_ANISOTROPY,h=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Ti(),this.name="",this.source=new hr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bc).x}get height(){return this.source.getSize(Bc).y}get depth(){return this.source.getSize(Bc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){re(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Do:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case No:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Do:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case No:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Dh;zn.DEFAULT_ANISOTROPY=1;var Be=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],m=l[5],g=l[9],b=l[2],f=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-b)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+b)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let P=(c+1)/2,S=(m+1)/2,M=(d+1)/2,T=(h+u)/4,D=(p+b)/4,y=(g+f)/4;return P>S&&P>M?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=T/n,r=D/n):S>M?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=y/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=D/r,s=y/r),this.set(n,s,r,e),this}let R=Math.sqrt((f-g)*(f-g)+(p-b)*(p-b)+(u-h)*(u-h));return Math.abs(R)<.001&&(R=1),this.x=(f-g)/R,this.y=(p-b)/R,this.z=(u-h)/R,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oo=class extends Ci{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new zn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new hr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},kn=class extends Oo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qr=class extends zn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bo=class extends zn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ve=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,p,u,m,g,b,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,p,u,m,g,b,f)}set(t,e,n,s,r,a,o,l,c,h,p,u,m,g,b,f){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=m,d[7]=g,d[11]=b,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Xs.setFromMatrixColumn(t,0).length(),r=1/Xs.setFromMatrixColumn(t,1).length(),a=1/Xs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*p,g=o*h,b=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=m+g*c,e[5]=u-b*c,e[9]=-o*l,e[2]=b-u*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,m=l*p,g=c*h,b=c*p;e[0]=u+b*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=b+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,m=l*p,g=c*h,b=c*p;e[0]=u-b*o,e[4]=-a*p,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=b-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,m=a*p,g=o*h,b=o*p;e[0]=l*h,e[4]=g*c-m,e[8]=u*c+b,e[1]=l*p,e[5]=b*c+u,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*c,g=o*l,b=o*c;e[0]=l*h,e[4]=b-u*p,e[8]=g*p+m,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*p+g,e[10]=u-b*p}else if(t.order==="XZY"){let u=a*l,m=a*c,g=o*l,b=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=u*p+b,e[5]=a*h,e[9]=m*p-g,e[2]=g*p-m,e[6]=o*h,e[10]=b*p+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nm,t,im)}lookAt(t,e,n){let s=this.elements;return $n.subVectors(t,e),$n.lengthSq()===0&&($n.z=1),$n.normalize(),ts.crossVectors(n,$n),ts.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),ts.crossVectors(n,$n)),ts.normalize(),Ka.crossVectors($n,ts),s[0]=ts.x,s[4]=Ka.x,s[8]=$n.x,s[1]=ts.y,s[5]=Ka.y,s[9]=$n.y,s[2]=ts.z,s[6]=Ka.z,s[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],u=n[9],m=n[13],g=n[2],b=n[6],f=n[10],d=n[14],R=n[3],P=n[7],S=n[11],M=n[15],T=s[0],D=s[4],y=s[8],A=s[12],z=s[1],H=s[5],Z=s[9],J=s[13],V=s[2],q=s[6],at=s[10],et=s[14],gt=s[3],nt=s[7],ot=s[11],ft=s[15];return r[0]=a*T+o*z+l*V+c*gt,r[4]=a*D+o*H+l*q+c*nt,r[8]=a*y+o*Z+l*at+c*ot,r[12]=a*A+o*J+l*et+c*ft,r[1]=h*T+p*z+u*V+m*gt,r[5]=h*D+p*H+u*q+m*nt,r[9]=h*y+p*Z+u*at+m*ot,r[13]=h*A+p*J+u*et+m*ft,r[2]=g*T+b*z+f*V+d*gt,r[6]=g*D+b*H+f*q+d*nt,r[10]=g*y+b*Z+f*at+d*ot,r[14]=g*A+b*J+f*et+d*ft,r[3]=R*T+P*z+S*V+M*gt,r[7]=R*D+P*H+S*q+M*nt,r[11]=R*y+P*Z+S*at+M*ot,r[15]=R*A+P*J+S*et+M*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],m=t[14],g=t[3],b=t[7],f=t[11],d=t[15],R=l*m-c*u,P=o*m-c*p,S=o*u-l*p,M=a*m-c*h,T=a*u-l*h,D=a*p-o*h;return e*(b*R-f*P+d*S)-n*(g*R-f*M+d*T)+s*(g*P-b*M+d*D)-r*(g*S-b*T+f*D)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],m=t[11],g=t[12],b=t[13],f=t[14],d=t[15],R=e*o-n*a,P=e*l-s*a,S=e*c-r*a,M=n*l-s*o,T=n*c-r*o,D=s*c-r*l,y=h*b-p*g,A=h*f-u*g,z=h*d-m*g,H=p*f-u*b,Z=p*d-m*b,J=u*d-m*f,V=R*J-P*Z+S*H+M*z-T*A+D*y;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/V;return t[0]=(o*J-l*Z+c*H)*q,t[1]=(s*Z-n*J-r*H)*q,t[2]=(b*D-f*T+d*M)*q,t[3]=(u*T-p*D-m*M)*q,t[4]=(l*z-a*J-c*A)*q,t[5]=(e*J-s*z+r*A)*q,t[6]=(f*S-g*D-d*P)*q,t[7]=(h*D-u*S+m*P)*q,t[8]=(a*Z-o*z+c*y)*q,t[9]=(n*z-e*Z-r*y)*q,t[10]=(g*T-b*S+d*R)*q,t[11]=(p*S-h*T-m*R)*q,t[12]=(o*A-a*H-l*y)*q,t[13]=(e*H-n*A+s*y)*q,t[14]=(b*P-g*M-f*R)*q,t[15]=(h*M-p*P+u*R)*q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,p=o+o,u=r*c,m=r*h,g=r*p,b=a*h,f=a*p,d=o*p,R=l*c,P=l*h,S=l*p,M=n.x,T=n.y,D=n.z;return s[0]=(1-(b+d))*M,s[1]=(m+S)*M,s[2]=(g-P)*M,s[3]=0,s[4]=(m-S)*T,s[5]=(1-(u+d))*T,s[6]=(f+R)*T,s[7]=0,s[8]=(g+P)*D,s[9]=(f-R)*D,s[10]=(1-(u+b))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Xs.set(s[0],s[1],s[2]).length(),o=Xs.set(s[4],s[5],s[6]).length(),l=Xs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),li.copy(this);let c=1/a,h=1/o,p=1/l;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=p,li.elements[9]*=p,li.elements[10]*=p,e.setFromRotationMatrix(li),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=fi,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s),g,b;if(l)g=r/(a-r),b=a*r/(a-r);else if(o===fi)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===or)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=fi,l=!1){let c=this.elements,h=2/(e-t),p=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s),g,b;if(l)g=1/(a-r),b=a/(a-r);else if(o===fi)g=-2/(a-r),b=-(a+r)/(a-r);else if(o===or)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Xs=new F,li=new Ve,nm=new F(0,0,0),im=new F(1,1,1),ts=new F,Ka=new F,$n=new F,Ku=new Ve,ju=new Ri,qi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ku.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ku,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ju.setFromEuler(this),this.setFromQuaternion(ju,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qi.DEFAULT_ORDER="XYZ";var ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sm=0,Qu=new F,$s=new Ri,Vi=new Ve,ja=new F,Br=new F,rm=new F,am=new Ri,td=new F(1,0,0),ed=new F(0,1,0),nd=new F(0,0,1),id={type:"added"},om={type:"removed"},qs={type:"childadded",child:null},zc={type:"childremoved",child:null},_n=class i extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new qi,n=new Ri,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new de}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.multiply($s),this}rotateOnWorldAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.premultiply($s),this}rotateX(t){return this.rotateOnAxis(td,t)}rotateY(t){return this.rotateOnAxis(ed,t)}rotateZ(t){return this.rotateOnAxis(nd,t)}translateOnAxis(t,e){return Qu.copy(t).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(td,t)}translateY(t){return this.translateOnAxis(ed,t)}translateZ(t){return this.translateOnAxis(nd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ja.copy(t):ja.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Br,ja,this.up):Vi.lookAt(ja,Br,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Vi),this.quaternion.premultiply($s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(id),qs.child=t,this.dispatchEvent(qs),qs.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(om),zc.child=t,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(id),qs.child=t,this.dispatchEvent(qs),qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,t,rm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,am,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),p=a(t.shapes),u=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_n.DEFAULT_UP=new F(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pi=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},lm={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let b of t.hand.values()){let f=e.getJointPose(b,n),d=this._getHandJoint(c,b);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new pi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function kc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var oe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=n,Te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Te.workingColorSpace){if(t=Gh(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=kc(a,r,t+1/3),this.g=kc(a,r,t),this.b=kc(a,r,t-1/3)}return Te.colorSpaceToWorking(this,s),this}setStyle(t,e=Yn){function n(r){r!==void 0&&parseFloat(r)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:re("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Yn){let n=df[t.toLowerCase()];return n!==void 0?this.setHex(n,e):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Yn){return Te.workingToColorSpace(Tn.copy(this),t),Math.round(pe(Tn.r*255,0,255))*65536+Math.round(pe(Tn.g*255,0,255))*256+Math.round(pe(Tn.b*255,0,255))}getHexString(t=Yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.workingToColorSpace(Tn.copy(this),e);let n=Tn.r,s=Tn.g,r=Tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Te.workingColorSpace){return Te.workingToColorSpace(Tn.copy(this),e),t.r=Tn.r,t.g=Tn.g,t.b=Tn.b,t}getStyle(t=Yn){Te.workingToColorSpace(Tn.copy(this),t);let e=Tn.r,n=Tn.g,s=Tn.b;return t!==Yn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(es),this.setHSL(es.h+t,es.s+e,es.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(es),t.getHSL(Qa);let n=Xr(es.h,Qa.h,e),s=Xr(es.s,Qa.s,e),r=Xr(es.l,Qa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new oe;oe.NAMES=df;var ta=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ci=new F,Hi=new F,Vc=new F,Gi=new F,Ys=new F,Zs=new F,sd=new F,Hc=new F,Gc=new F,Wc=new F,Xc=new Be,$c=new Be,qc=new Be,rs=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ci.subVectors(t,e),s.cross(ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ci.subVectors(s,e),Hi.subVectors(n,e),Vc.subVectors(t,e);let a=ci.dot(ci),o=ci.dot(Hi),l=ci.dot(Vc),c=Hi.dot(Hi),h=Hi.dot(Vc),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,m=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gi.x),l.addScaledVector(a,Gi.y),l.addScaledVector(o,Gi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Xc.setScalar(0),$c.setScalar(0),qc.setScalar(0),Xc.fromBufferAttribute(t,e),$c.fromBufferAttribute(t,n),qc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Xc,r.x),a.addScaledVector($c,r.y),a.addScaledVector(qc,r.z),a}static isFrontFacing(t,e,n,s){return ci.subVectors(n,e),Hi.subVectors(t,e),ci.cross(Hi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),ci.cross(Hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ys.subVectors(s,n),Zs.subVectors(r,n),Hc.subVectors(t,n);let l=Ys.dot(Hc),c=Zs.dot(Hc);if(l<=0&&c<=0)return e.copy(n);Gc.subVectors(t,s);let h=Ys.dot(Gc),p=Zs.dot(Gc);if(h>=0&&p<=h)return e.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ys,a);Wc.subVectors(t,r);let m=Ys.dot(Wc),g=Zs.dot(Wc);if(g>=0&&m<=g)return e.copy(r);let b=m*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Zs,o);let f=h*g-m*p;if(f<=0&&p-h>=0&&m-g>=0)return sd.subVectors(r,s),o=(p-h)/(p-h+(m-g)),e.copy(s).addScaledVector(sd,o);let d=1/(f+b+u);return a=b*d,o=u*d,e.copy(n).addScaledVector(Ys,a).addScaledVector(Zs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),to.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(t.matrixWorld),this.union(to)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zr),eo.subVectors(this.max,zr),Js.subVectors(t.a,zr),Ks.subVectors(t.b,zr),js.subVectors(t.c,zr),ns.subVectors(Ks,Js),is.subVectors(js,Ks),ys.subVectors(Js,js);let e=[0,-ns.z,ns.y,0,-is.z,is.y,0,-ys.z,ys.y,ns.z,0,-ns.x,is.z,0,-is.x,ys.z,0,-ys.x,-ns.y,ns.x,0,-is.y,is.x,0,-ys.y,ys.x,0];return!Yc(e,Js,Ks,js,eo)||(e=[1,0,0,0,1,0,0,0,1],!Yc(e,Js,Ks,js,eo))?!1:(no.crossVectors(ns,is),e=[no.x,no.y,no.z],Yc(e,Js,Ks,js,eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Wi=[new F,new F,new F,new F,new F,new F,new F,new F],hi=new F,to=new Zn,Js=new F,Ks=new F,js=new F,ns=new F,is=new F,ys=new F,zr=new F,eo=new F,no=new F,Ss=new F;function Yc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ss.fromArray(i,r);let o=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),l=t.dot(Ss),c=e.dot(Ss),h=n.dot(Ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var an=new F,io=new It,cm=0,We=class extends Ci{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vh,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)io.fromBufferAttribute(this,e),io.applyMatrix3(t),this.setXY(e,io.x,io.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix3(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=di(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=di(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=di(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ea=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var na=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var cn=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},hm=new Zn,kr=new F,Zc=new F,si=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):hm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kr.subVectors(t,this.center);let e=kr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(kr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kr.copy(t.center).add(Zc)),this.expandByPoint(kr.copy(t.center).sub(Zc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},um=0,ii=new Ve,Jc=new _n,Qs=new F,qn=new Zn,Vr=new Zn,mn=new F,nn=class i extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Up(t)?na:ea)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new de().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,n){return ii.makeTranslation(t,e,n),this.applyMatrix4(ii),this}scale(t,e,n){return ii.makeScale(t,e,n),this.applyMatrix4(ii),this}lookAt(t){return Jc.lookAt(t),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new cn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];qn.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Vr.setFromBufferAttribute(o),this.morphTargetsRelative?(mn.addVectors(qn.min,Vr.min),qn.expandByPoint(mn),mn.addVectors(qn.max,Vr.max),qn.expandByPoint(mn)):(qn.expandByPoint(Vr.min),qn.expandByPoint(Vr.max))}qn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)mn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(mn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)mn.fromBufferAttribute(o,c),l&&(Qs.fromBufferAttribute(t,c),mn.add(Qs)),s=Math.max(s,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new F,l[y]=new F;let c=new F,h=new F,p=new F,u=new It,m=new It,g=new It,b=new F,f=new F;function d(y,A,z){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,A),p.fromBufferAttribute(n,z),u.fromBufferAttribute(r,y),m.fromBufferAttribute(r,A),g.fromBufferAttribute(r,z),h.sub(c),p.sub(c),m.sub(u),g.sub(u);let H=1/(m.x*g.y-g.x*m.y);isFinite(H)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(H),f.copy(p).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(H),o[y].add(b),o[A].add(b),o[z].add(b),l[y].add(f),l[A].add(f),l[z].add(f))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let y=0,A=R.length;y<A;++y){let z=R[y],H=z.start,Z=z.count;for(let J=H,V=H+Z;J<V;J+=3)d(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let P=new F,S=new F,M=new F,T=new F;function D(y){M.fromBufferAttribute(s,y),T.copy(M);let A=o[y];P.copy(A),P.sub(M.multiplyScalar(M.dot(A))).normalize(),S.crossVectors(T,A);let H=S.dot(l[y])<0?-1:1;a.setXYZW(y,P.x,P.y,P.z,H)}for(let y=0,A=R.length;y<A;++y){let z=R[y],H=z.start,Z=z.count;for(let J=H,V=H+Z;J<V;J+=3)D(t.getX(J+0)),D(t.getX(J+1)),D(t.getX(J+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,p=new F;if(t)for(let u=0,m=t.count;u<m;u+=3){let g=t.getX(u+0),b=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,f),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)mn.fromBufferAttribute(t,e),mn.normalize(),t.setXYZ(e,mn.x,mn.y,mn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),m=0,g=0;for(let b=0,f=l.length;b<f;b++){o.isInterleavedBufferAttribute?m=l[b]*o.data.stride+o.offset:m=l[b]*h;for(let d=0;d<h;d++)u[g++]=c[m++]}return new We(u,h,p)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let m=c[p];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let u=0,m=p.length;u<m;u++)h.push(p[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},zo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Vh,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Nn=new F,mi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Nn.fromBufferAttribute(this,e),Nn.applyMatrix4(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Nn.fromBufferAttribute(this,e),Nn.applyNormalMatrix(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Nn.fromBufferAttribute(this,e),Nn.transformDirection(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=di(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=di(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=di(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=di(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){jr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){jr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kc=new F,dm=new F,fm=new de,ui=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Kc.subVectors(n,e).cross(dm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Kc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fm.getNormalMatrix(t),s=this.coplanarPoint(Kc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},pm=0,Ii=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=yr,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wh,this.blendDst=Eh,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){re(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new oe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ui().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new It().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Xi=new F,jc=new F,so=new F,ro=new F,Ts=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,e),Xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){jc.copy(t).add(e).multiplyScalar(.5),so.copy(e).sub(t).normalize(),ro.copy(this.origin).sub(jc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(so),o=ro.dot(this.direction),l=-ro.dot(so),c=ro.lengthSq(),h=Math.abs(1-a*a),p,u,m,g;if(h>0)if(p=a*l-o,u=a*o-l,g=r*h,p>=0)if(u>=-g)if(u<=g){let b=1/h;p*=b,u*=b,m=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(jc).addScaledVector(so,u),m}intersectSphere(t,e){if(t.radius<0)return null;Xi.subVectors(t.center,this.origin);let n=Xi.dot(this.direction),s=Xi.dot(Xi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-a.x,u=t.y-a.y,m=t.z-a.z,g=e.x-a.x,b=e.y-a.y,f=e.z-a.z,d=n.x-a.x,R=n.y-a.y,P=n.z-a.z,S=Math.abs(l),M=Math.abs(c),T=Math.abs(h),D,y,A,z,H,Z,J,V,q,at,et,gt;if(S>=M&&S>=T?(A=l,Z=p,q=g,gt=d,l>=0?(D=c,y=h,z=u,H=m,J=b,V=f,at=R,et=P):(D=h,y=c,z=m,H=u,J=f,V=b,at=P,et=R)):M>=T?(A=c,Z=u,q=b,gt=R,c>=0?(D=h,y=l,z=m,H=p,J=f,V=g,at=P,et=d):(D=l,y=h,z=p,H=m,J=g,V=f,at=d,et=P)):(A=h,Z=m,q=f,gt=P,h>=0?(D=l,y=c,z=p,H=u,J=g,V=b,at=d,et=R):(D=c,y=l,z=u,H=p,J=b,V=g,at=R,et=d)),A===0)return null;let nt=D/A,ot=y/A,ft=1/A,Kt=z-nt*Z,kt=H-ot*Z,Ae=J-nt*q,ve=V-ot*q,be=at-nt*gt,j=et-ot*gt,lt=be*ve-j*Ae,Ct=Kt*j-kt*be,ne=Ae*kt-ve*Kt;if(s){if(lt<0||Ct<0||ne<0)return null}else if((lt<0||Ct<0||ne<0)&&(lt>0||Ct>0||ne>0))return null;let Tt=lt+Ct+ne;if(Tt===0)return null;let Wt=ft*(lt*Z+Ct*q+ne*gt);return(Tt>0?Wt<0:Wt>0)?null:this.at(Wt/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ia=class extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},rd=new Ve,Ms=new Ts,ao=new si,ad=new F,oo=new F,lo=new F,co=new F,Qc=new F,ho=new F,od=new F,uo=new F,Cn=class extends _n{constructor(t=new nn,e=new ia){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(Qc.fromBufferAttribute(p,t),a?ho.addScaledVector(Qc,h):ho.addScaledVector(Qc.sub(e),h))}e.add(ho)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),Ms.copy(t.ray).recast(t.near),!(ao.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(ao,ad)===null||Ms.origin.distanceToSquared(ad)>(t.far-t.near)**2))&&(rd.copy(r).invert(),Ms.copy(t.ray).applyMatrix4(rd),!(n.boundingBox!==null&&Ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ms)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=u.length;g<b;g++){let f=u[g],d=a[f.materialIndex],R=Math.max(f.start,m.start),P=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let S=R,M=P;S<M;S+=3){let T=o.getX(S),D=o.getX(S+1),y=o.getX(S+2);s=fo(this,d,t,n,c,h,p,T,D,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let f=g,d=b;f<d;f+=3){let R=o.getX(f),P=o.getX(f+1),S=o.getX(f+2);s=fo(this,a,t,n,c,h,p,R,P,S),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,b=u.length;g<b;g++){let f=u[g],d=a[f.materialIndex],R=Math.max(f.start,m.start),P=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let S=R,M=P;S<M;S+=3){let T=S,D=S+1,y=S+2;s=fo(this,d,t,n,c,h,p,T,D,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let f=g,d=b;f<d;f+=3){let R=f,P=f+1,S=f+2;s=fo(this,a,t,n,c,h,p,R,P,S),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function mm(i,t,e,n,s,r,a,o){let l;if(t.side===Un?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===us,o),l===null)return null;uo.copy(o),uo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(uo);return c<e.near||c>e.far?null:{distance:c,point:uo.clone(),object:i}}function fo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,oo),i.getVertexPosition(l,lo),i.getVertexPosition(c,co);let h=mm(i,t,e,n,oo,lo,co,od);if(h){let p=new F;rs.getBarycoord(od,oo,lo,co,p),s&&(h.uv=rs.getInterpolatedAttribute(s,o,l,c,p,new It)),r&&(h.uv1=rs.getInterpolatedAttribute(r,o,l,c,p,new It)),a&&(h.normal=rs.getInterpolatedAttribute(a,o,l,c,p,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};rs.getNormal(oo,lo,co,u.normal),h.face=u,h.barycoord=p}return h}var ko=class extends zn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=gn,h=gn,p,u){super(null,a,o,l,c,h,s,r,p,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bs=new si,gm=new It(.5,.5),po=new F,fr=class{constructor(t=new ui,e=new ui,n=new ui,s=new ui,r=new ui,a=new ui){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fi,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],u=r[6],m=r[7],g=r[8],b=r[9],f=r[10],d=r[11],R=r[12],P=r[13],S=r[14],M=r[15];if(s[0].setComponents(c-a,m-h,d-g,M-R).normalize(),s[1].setComponents(c+a,m+h,d+g,M+R).normalize(),s[2].setComponents(c+o,m+p,d+b,M+P).normalize(),s[3].setComponents(c-o,m-p,d-b,M-P).normalize(),n)s[4].setComponents(l,u,f,S).normalize(),s[5].setComponents(c-l,m-u,d-f,M-S).normalize();else if(s[4].setComponents(c-l,m-u,d-f,M-S).normalize(),e===fi)s[5].setComponents(c+l,m+u,d+f,M+S).normalize();else if(e===or)s[5].setComponents(l,u,f,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(t){bs.center.set(0,0,0);let e=gm.distanceTo(t.center);return bs.radius=.7071067811865476+e,bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(po.x=s.normal.x>0?t.max.x:t.min.x,po.y=s.normal.y>0?t.max.y:t.min.y,po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var As=class extends Ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Vo=new F,Ho=new F,ld=new Ve,Hr=new Ts,mo=new si,th=new F,cd=new F,Go=class extends _n{constructor(t=new nn,e=new As){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Vo.fromBufferAttribute(e,s-1),Ho.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Vo.distanceTo(Ho);t.setAttribute("lineDistance",new cn(n,1))}else re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,t.ray.intersectsSphere(mo)===!1)return;ld.copy(s).invert(),Hr.copy(t.ray).applyMatrix4(ld);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=m,f=g-1;b<f;b+=c){let d=h.getX(b),R=h.getX(b+1),P=go(this,t,Hr,l,d,R,b);P&&e.push(P)}if(this.isLineLoop){let b=h.getX(g-1),f=h.getX(m),d=go(this,t,Hr,l,b,f,g-1);d&&e.push(d)}}else{let m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let b=m,f=g-1;b<f;b+=c){let d=go(this,t,Hr,l,b,b+1,b);d&&e.push(d)}if(this.isLineLoop){let b=go(this,t,Hr,l,g-1,m,g-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function go(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Vo.fromBufferAttribute(o,s),Ho.fromBufferAttribute(o,r),e.distanceSqToSegment(Vo,Ho,th,cd)>n)return;th.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(th);if(!(c<t.near||c>t.far))return{distance:c,point:cd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var sa=class extends Go{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Wo=class extends Ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hd=new Ve,uh=new Ts,_o=new si,xo=new F,Cs=class extends _n{constructor(t=new nn,e=new Wo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,t.ray.intersectsSphere(_o)===!1)return;hd.copy(s).invert(),uh.copy(t.ray).applyMatrix4(hd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=u,b=m;g<b;g++){let f=c.getX(g);xo.fromBufferAttribute(p,f),ud(xo,f,l,s,t,e,this)}}else{let u=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let g=u,b=m;g<b;g++)xo.fromBufferAttribute(p,g),ud(xo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ud(i,t,e,n,s,r,a){let o=uh.distanceSqToPoint(i);if(o<e){let l=new F;uh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ra=class extends zn{constructor(t=[],e=ds,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var as=class extends zn{constructor(t,e,n=_i,s,r,a,o=gn,l=gn,c,h=Ai,p=1){if(h!==Ai&&h!==ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:p};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Xo=class extends as{constructor(t,e=_i,n=ds,s,r,a=gn,o=gn,l,c=Ai){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},aa=class extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},pr=class i extends nn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],u=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(p,2));function g(b,f,d,R,P,S,M,T,D,y,A){let z=S/D,H=M/y,Z=S/2,J=M/2,V=T/2,q=D+1,at=y+1,et=0,gt=0,nt=new F;for(let ot=0;ot<at;ot++){let ft=ot*H-J;for(let Kt=0;Kt<q;Kt++){let kt=Kt*z-Z;nt[b]=kt*R,nt[f]=ft*P,nt[d]=V,c.push(nt.x,nt.y,nt.z),nt[b]=0,nt[f]=0,nt[d]=T>0?1:-1,h.push(nt.x,nt.y,nt.z),p.push(Kt/D),p.push(1-ot/y),et+=1}}for(let ot=0;ot<y;ot++)for(let ft=0;ft<D;ft++){let Kt=u+ft+q*ot,kt=u+ft+q*(ot+1),Ae=u+(ft+1)+q*(ot+1),ve=u+(ft+1)+q*ot;l.push(Kt,kt,ve),l.push(kt,Ae,ve),gt+=6}o.addGroup(m,gt,A),m+=gt,u+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){re("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,m=(a-h)/u;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new It:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new F,s=[],r=[],a=[],o=new F,l=new Ve;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(pe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(pe(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},mr=class extends Jn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new It){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*h-m*p+this.aX,c=u*p+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$o=class extends mr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Xh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+p)+(l-o)/p;u*=h,m*=h,s(a,o,u,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var dd=new F,fd=new F,eh=new Xh,nh=new Xh,ih=new Xh,qo=class extends Jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(fd.subVectors(s[0],s[1]).add(s[0]),c=fd);let p=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(dd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=dd),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),m),b=Math.pow(p.distanceToSquared(u),m),f=Math.pow(u.distanceToSquared(h),m);b<1e-4&&(b=1),g<1e-4&&(g=b),f<1e-4&&(f=b),eh.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,g,b,f),nh.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,g,b,f),ih.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,g,b,f)}else this.curveType==="catmullrom"&&(eh.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),nh.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),ih.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return n.set(eh.calc(l),nh.calc(l),ih.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function pd(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function _m(i,t){let e=1-i;return e*e*t}function xm(i,t){return 2*(1-i)*i*t}function vm(i,t){return i*i*t}function $r(i,t,e,n){return _m(i,t)+xm(i,e)+vm(i,n)}function ym(i,t){let e=1-i;return e*e*e*t}function Sm(i,t){let e=1-i;return 3*e*e*i*t}function Mm(i,t){return 3*(1-i)*i*i*t}function bm(i,t){return i*i*i*t}function qr(i,t,e,n,s){return ym(i,t)+Sm(i,e)+Mm(i,n)+bm(i,s)}var oa=class extends Jn{constructor(t=new It,e=new It,n=new It,s=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(qr(t,s.x,r.x,a.x,o.x),qr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Yo=class extends Jn{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(qr(t,s.x,r.x,a.x,o.x),qr(t,s.y,r.y,a.y,o.y),qr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},la=class extends Jn{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zo=class extends Jn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ca=class extends Jn{constructor(t=new It,e=new It,n=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set($r(t,s.x,r.x,a.x),$r(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jo=class extends Jn{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set($r(t,s.x,r.x,a.x),$r(t,s.y,r.y,a.y),$r(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ha=class extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(pd(o,l.x,c.x,h.x,p.x),pd(o,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new It().fromArray(s))}return this}},dh=Object.freeze({__proto__:null,ArcCurve:$o,CatmullRomCurve3:qo,CubicBezierCurve:oa,CubicBezierCurve3:Yo,EllipseCurve:mr,LineCurve:la,LineCurve3:Zo,QuadraticBezierCurve:ca,QuadraticBezierCurve3:Jo,SplineCurve:ha}),Ko=class extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new dh[s.type]().fromJSON(s))}return this}},Rs=class extends Ko{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new la(this.currentPoint.clone(),new It(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ca(this.currentPoint.clone(),new It(t,e),new It(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new oa(this.currentPoint.clone(),new It(t,e),new It(n,s),new It(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ha(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new mr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},gr=class extends Rs{constructor(t){super(t),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Rs().fromJSON(s))}return this}};function wm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ff(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Rm(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,p=l;for(let u=e;u<s;u+=e){let m=i[u],g=i[u+1];m<o&&(o=m),g<l&&(l=g),m>h&&(h=m),g>p&&(p=g)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return ua(r,a,e,o,l,c,0),a}function ff(i,t,e,n,s){let r;if(s===km(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=md(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=md(a/n|0,i[a],i[a+1],r);return r&&_r(r,r.next)&&(fa(r),r=r.next),r}function Is(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(_r(e,e.next)||Ke(e.prev,e,e.next)===0)){if(fa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ua(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Nm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Tm(i,n,s,r):Em(i)){t.push(l.i,i.i,c.i),fa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Am(Is(i),t),ua(i,t,e,n,s,r,2)):a===2&&Cm(i,t,e,n,s,r):ua(Is(i),t,e,n,s,r,1);break}}}function Em(i){let t=i.prev,e=i,n=i.next;if(Ke(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),p=Math.min(o,l,c),u=Math.max(s,r,a),m=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=p&&g.y<=m&&Gr(s,o,r,l,a,c,g.x,g.y)&&Ke(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Tm(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ke(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,p=r.y,u=a.y,m=Math.min(o,l,c),g=Math.min(h,p,u),b=Math.max(o,l,c),f=Math.max(h,p,u),d=fh(m,g,t,e,n),R=fh(b,f,t,e,n),P=i.prevZ,S=i.nextZ;for(;P&&P.z>=d&&S&&S.z<=R;){if(P.x>=m&&P.x<=b&&P.y>=g&&P.y<=f&&P!==s&&P!==a&&Gr(o,h,l,p,c,u,P.x,P.y)&&Ke(P.prev,P,P.next)>=0||(P=P.prevZ,S.x>=m&&S.x<=b&&S.y>=g&&S.y<=f&&S!==s&&S!==a&&Gr(o,h,l,p,c,u,S.x,S.y)&&Ke(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;P&&P.z>=d;){if(P.x>=m&&P.x<=b&&P.y>=g&&P.y<=f&&P!==s&&P!==a&&Gr(o,h,l,p,c,u,P.x,P.y)&&Ke(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;S&&S.z<=R;){if(S.x>=m&&S.x<=b&&S.y>=g&&S.y<=f&&S!==s&&S!==a&&Gr(o,h,l,p,c,u,S.x,S.y)&&Ke(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Am(i,t){let e=i;do{let n=e.prev,s=e.next.next;!_r(n,s)&&mf(n,e,e.next,s)&&da(n,s)&&da(s,n)&&(t.push(n.i,e.i,s.i),fa(e),fa(e.next),e=i=s),e=e.next}while(e!==i);return Is(e)}function Cm(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Om(a,o)){let l=gf(a,o);a=Is(a,a.next),l=Is(l,l.next),ua(a,t,e,n,s,r,0),ua(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Rm(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=ff(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Fm(c))}s.sort(Im);for(let r=0;r<s.length;r++)e=Pm(s[r],e);return e}function Im(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Pm(i,t){let e=Lm(i,t);if(!e)return t;let n=gf(e,i);return Is(n,n.next),Is(e,e.next)}function Lm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(_r(i,e))return e;do{if(_r(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&pf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);da(e,i)&&(p<h||p===h&&(e.x>a.x||e.x===a.x&&Dm(a,e)))&&(a=e,h=p)}e=e.next}while(e!==o);return a}function Dm(i,t){return Ke(i.prev,i,t.prev)<0&&Ke(t.next,i,i.next)<0}function Nm(i,t,e,n){let s=i;do s.z===0&&(s.z=fh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Um(s)}function Um(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function fh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Fm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function pf(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Gr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&pf(i,t,e,n,s,r,a,o)}function Om(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Bm(i,t)&&(da(i,t)&&da(t,i)&&zm(i,t)&&(Ke(i.prev,i,t.prev)||Ke(i,t.prev,t))||_r(i,t)&&Ke(i.prev,i,i.next)>0&&Ke(t.prev,t,t.next)>0)}function Ke(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function _r(i,t){return i.x===t.x&&i.y===t.y}function mf(i,t,e,n){let s=yo(Ke(i,t,e)),r=yo(Ke(i,t,n)),a=yo(Ke(e,n,i)),o=yo(Ke(e,n,t));return!!(s!==r&&a!==o||s===0&&vo(i,e,t)||r===0&&vo(i,n,t)||a===0&&vo(e,i,n)||o===0&&vo(e,t,n))}function vo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function yo(i){return i>0?1:i<0?-1:0}function Bm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&mf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function da(i,t){return Ke(i.prev,i,i.next)<0?Ke(i,t,i.next)>=0&&Ke(i,i.prev,t)>=0:Ke(i,t,i.prev)<0||Ke(i,i.next,t)<0}function zm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function gf(i,t){let e=ph(i.i,i.x,i.y),n=ph(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function md(i,t,e,n){let s=ph(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ph(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function km(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var mh=class{static triangulate(t,e,n=2){return wm(t,e,n)}},ws=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];gd(t),_d(n,t);let a=t.length;e.forEach(gd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,_d(n,e[l]);let o=mh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function gd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function _d(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var pa=class i extends nn{constructor(t=new gr([new It(.5,.5),new It(-.5,.5),new It(-.5,-.5),new It(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new cn(s,3)),this.setAttribute("uv",new cn(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,b=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,R=e.UVGenerator!==void 0?e.UVGenerator:Vm,P,S=!1,M,T,D,y;if(d){P=d.getSpacedPoints(h),S=!0,u=!1;let L=d.isCatmullRomCurve3?d.closed:!1;M=d.computeFrenetFrames(h,L),T=new F,D=new F,y=new F}u||(f=0,m=0,g=0,b=0);let A=o.extractPoints(c),z=A.shape,H=A.holes;if(!ws.isClockWise(z)){z=z.reverse();for(let L=0,mt=H.length;L<mt;L++){let vt=H[L];ws.isClockWise(vt)&&(H[L]=vt.reverse())}}function J(L){let vt=10000000000000001e-36,xt=L[0];for(let St=1;St<=L.length;St++){let ee=St%L.length,te=L[ee],Vt=te.x-xt.x,le=te.y-xt.y,N=Vt*Vt+le*le,Re=Math.max(Math.abs(te.x),Math.abs(te.y),Math.abs(xt.x),Math.abs(xt.y)),_e=vt*Re*Re;if(N<=_e){L.splice(ee,1),St--;continue}xt=te}}J(z),H.forEach(J);let V=H.length,q=z;for(let L=0;L<V;L++){let mt=H[L];z=z.concat(mt)}function at(L,mt,vt){return mt||ae("ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(mt,vt)}let et=z.length;function gt(L,mt,vt){let xt,St,ee,te=L.x-mt.x,Vt=L.y-mt.y,le=vt.x-L.x,N=vt.y-L.y,Re=te*te+Vt*Vt,_e=te*N-Vt*le;if(Math.abs(_e)>Number.EPSILON){let E=Math.sqrt(Re),_=Math.sqrt(le*le+N*N),W=mt.x-Vt/E,Y=mt.y+te/E,tt=vt.x-N/_,yt=vt.y+le/_,wt=((tt-W)*N-(yt-Y)*le)/(te*N-Vt*le);xt=W+te*wt-L.x,St=Y+Vt*wt-L.y;let rt=xt*xt+St*St;if(rt<=2)return new It(xt,St);ee=Math.sqrt(rt/2)}else{let E=!1;te>Number.EPSILON?le>Number.EPSILON&&(E=!0):te<-Number.EPSILON?le<-Number.EPSILON&&(E=!0):Math.sign(Vt)===Math.sign(N)&&(E=!0),E?(xt=-Vt,St=te,ee=Math.sqrt(Re)):(xt=te,St=Vt,ee=Math.sqrt(Re/2))}return new It(xt/ee,St/ee)}let nt=[];for(let L=0,mt=q.length,vt=mt-1,xt=L+1;L<mt;L++,vt++,xt++)vt===mt&&(vt=0),xt===mt&&(xt=0),nt[L]=gt(q[L],q[vt],q[xt]);let ot=[],ft,Kt=nt.concat();for(let L=0,mt=V;L<mt;L++){let vt=H[L];ft=[];for(let xt=0,St=vt.length,ee=St-1,te=xt+1;xt<St;xt++,ee++,te++)ee===St&&(ee=0),te===St&&(te=0),ft[xt]=gt(vt[xt],vt[ee],vt[te]);ot.push(ft),Kt=Kt.concat(ft)}let kt;if(f===0)kt=ws.triangulateShape(q,H);else{let L=[],mt=[];for(let vt=0;vt<f;vt++){let xt=vt/f,St=m*Math.cos(xt*Math.PI/2),ee=g*Math.sin(xt*Math.PI/2)+b;for(let te=0,Vt=q.length;te<Vt;te++){let le=at(q[te],nt[te],ee);Ct(le.x,le.y,-St),xt===0&&L.push(le)}for(let te=0,Vt=V;te<Vt;te++){let le=H[te];ft=ot[te];let N=[];for(let Re=0,_e=le.length;Re<_e;Re++){let E=at(le[Re],ft[Re],ee);Ct(E.x,E.y,-St),xt===0&&N.push(E)}xt===0&&mt.push(N)}}kt=ws.triangulateShape(L,mt)}let Ae=kt.length,ve=g+b;for(let L=0;L<et;L++){let mt=u?at(z[L],Kt[L],ve):z[L];S?(D.copy(M.normals[0]).multiplyScalar(mt.x),T.copy(M.binormals[0]).multiplyScalar(mt.y),y.copy(P[0]).add(D).add(T),Ct(y.x,y.y,y.z)):Ct(mt.x,mt.y,0)}for(let L=1;L<=h;L++)for(let mt=0;mt<et;mt++){let vt=u?at(z[mt],Kt[mt],ve):z[mt];S?(D.copy(M.normals[L]).multiplyScalar(vt.x),T.copy(M.binormals[L]).multiplyScalar(vt.y),y.copy(P[L]).add(D).add(T),Ct(y.x,y.y,y.z)):Ct(vt.x,vt.y,p/h*L)}for(let L=f-1;L>=0;L--){let mt=L/f,vt=m*Math.cos(mt*Math.PI/2),xt=g*Math.sin(mt*Math.PI/2)+b;for(let St=0,ee=q.length;St<ee;St++){let te=at(q[St],nt[St],xt);Ct(te.x,te.y,p+vt)}for(let St=0,ee=H.length;St<ee;St++){let te=H[St];ft=ot[St];for(let Vt=0,le=te.length;Vt<le;Vt++){let N=at(te[Vt],ft[Vt],xt);S?Ct(N.x,N.y+P[h-1].y,P[h-1].x+vt):Ct(N.x,N.y,p+vt)}}}be(),j();function be(){let L=s.length/3;if(u){let mt=0,vt=et*mt;for(let xt=0;xt<Ae;xt++){let St=kt[xt];ne(St[2]+vt,St[1]+vt,St[0]+vt)}mt=h+f*2,vt=et*mt;for(let xt=0;xt<Ae;xt++){let St=kt[xt];ne(St[0]+vt,St[1]+vt,St[2]+vt)}}else{for(let mt=0;mt<Ae;mt++){let vt=kt[mt];ne(vt[2],vt[1],vt[0])}for(let mt=0;mt<Ae;mt++){let vt=kt[mt];ne(vt[0]+et*h,vt[1]+et*h,vt[2]+et*h)}}n.addGroup(L,s.length/3-L,0)}function j(){let L=s.length/3,mt=0;lt(q,mt),mt+=q.length;for(let vt=0,xt=H.length;vt<xt;vt++){let St=H[vt];lt(St,mt),mt+=St.length}n.addGroup(L,s.length/3-L,1)}function lt(L,mt){let vt=L.length;for(;--vt>=0;){let xt=vt,St=vt-1;St<0&&(St=L.length-1);for(let ee=0,te=h+f*2;ee<te;ee++){let Vt=et*ee,le=et*(ee+1),N=mt+xt+Vt,Re=mt+St+Vt,_e=mt+St+le,E=mt+xt+le;Tt(N,Re,_e,E)}}}function Ct(L,mt,vt){l.push(L),l.push(mt),l.push(vt)}function ne(L,mt,vt){Wt(L),Wt(mt),Wt(vt);let xt=s.length/3,St=R.generateTopUV(n,s,xt-3,xt-2,xt-1);Ce(St[0]),Ce(St[1]),Ce(St[2])}function Tt(L,mt,vt,xt){Wt(L),Wt(mt),Wt(xt),Wt(mt),Wt(vt),Wt(xt);let St=s.length/3,ee=R.generateSideWallUV(n,s,St-6,St-3,St-2,St-1);Ce(ee[0]),Ce(ee[1]),Ce(ee[3]),Ce(ee[1]),Ce(ee[2]),Ce(ee[3])}function Wt(L){s.push(l[L*3+0]),s.push(l[L*3+1]),s.push(l[L*3+2])}function Ce(L){r.push(L.x),r.push(L.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Hm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new dh[s.type]().fromJSON(s)),new i(n,t.options)}},Vm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new It(r,a),new It(o,l),new It(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],u=t[s*3],m=t[s*3+1],g=t[s*3+2],b=t[r*3],f=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new It(a,1-l),new It(c,1-p),new It(u,1-g),new It(b,1-d)]:[new It(o,1-l),new It(h,1-p),new It(m,1-g),new It(f,1-d)]}};function Hm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ma=class i extends nn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=t/o,u=e/l,m=[],g=[],b=[],f=[];for(let d=0;d<h;d++){let R=d*u-a;for(let P=0;P<c;P++){let S=P*p-r;g.push(S,-R,0),b.push(0,0,1),f.push(P/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let R=0;R<o;R++){let P=R+c*d,S=R+c*(d+1),M=R+1+c*(d+1),T=R+1+c*d;m.push(P,S,T),m.push(S,M,T)}this.setIndex(m),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(b,3)),this.setAttribute("uv",new cn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ga=class extends nn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new F,r=new F;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let p=l[c],u=p.start,m=p.count;for(let g=u,b=u+m;g<b;g+=3)for(let f=0;f<3;f++){let d=o.getX(g+f),R=o.getX(g+(f+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,R),xd(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,p=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,p),xd(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new cn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function xd(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Ds(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(vd(s))s.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(vd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Rn(i){let t={};for(let e=0;e<i.length;e++){let n=Ds(i[e]);for(let s in n)t[s]=n[s]}return t}function vd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $h(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}var Ua={clone:Ds,merge:Rn},Wm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wm,this.fragmentShader=Xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=Gm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new oe().setHex(s.value);break;case"v2":this.uniforms[n].value=new It().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new de().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},jo=class extends xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var _a=class extends Ii{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=pl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Qo=class extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tl=class extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function tr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function sh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var os=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},el=class extends os{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lh,endingEnd:lh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ch:r=t,o=2*e-n;break;case hh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ch:a=t,l=2*n-e;break;case hh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),b=g*g,f=b*g,d=-u*f+2*u*b-u*g,R=(1+u)*f+(-1.5-2*u)*b+(-.5+u)*g+1,P=(-1-m)*f+(1.5+m)*b+.5*g,S=m*f-m*b;for(let M=0;M!==o;++M)r[M]=d*a[h+M]+R*a[c+M]+P*a[l+M]+S*a[p+M];return r}},nl=class extends os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),p=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*p+a[l+u]*h;return r}},il=class extends os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},sl=class extends os{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(n-e)/(s-e),b=1-g;for(let f=0;f!==o;++f)r[f]=a[c+f]*b+a[l+f]*g;return r}let u=o*2,m=t-1;for(let g=0;g!==o;++g){let b=a[c+g],f=a[l+g],d=m*u+g*2,R=p[d],P=p[d+1],S=t*u+g*2,M=h[S],T=h[S+1],D=qm(n,e,R,M,s);r[g]=_f(D,b,P,T,f)}return r}};function _f(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function $m(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function qm(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=_f(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=$m(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Kn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=tr(e,this.TimeBufferType),this.values=tr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:tr(t.times,Array),values:tr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),sh(t.settings)&&(n.settings={inTangents:tr(t.settings.inTangents,Array),outTangents:tr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new sl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Yr:e=this.InterpolantFactoryMethodDiscrete;break;case Uo:e=this.InterpolantFactoryMethodLinear;break;case wo:e=this.InterpolantFactoryMethodSmooth;break;case oh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return re("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return Uo;case this.InterpolantFactoryMethodSmooth:return wo;case this.InterpolantFactoryMethodBezier:return oh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;sh(this.settings)&&(yd(this.settings.inTangents,t),yd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ae("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ae("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ae("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ae("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Fp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ae("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,u=p-n,m=p+n;for(let g=0;g!==n;++g){let b=e[p+g];if(b!==e[u+g]||b!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[p+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,sh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function yd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=Uo;var ls=class extends Kn{constructor(t,e,n){super(t,e,n)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Yr;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends Kn{constructor(t,e,n,s){super(t,e,n,s)}};rl.prototype.ValueTypeName="color";var al=class extends Kn{constructor(t,e,n,s){super(t,e,n,s)}};al.prototype.ValueTypeName="number";var ol=class extends os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ri.slerpFlat(r,0,a,c-o,a,c,l);return r}},xa=class extends Kn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}};xa.prototype.ValueTypeName="quaternion";xa.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends Kn{constructor(t,e,n){super(t,e,n)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Yr;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends Kn{constructor(t,e,n,s){super(t,e,n,s)}};ll.prototype.ValueTypeName="vector";var cl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let m=c[p],g=c[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xf=new cl,hl=class{constructor(t){this.manager=t!==void 0?t:xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var va=class extends _n{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ya=class extends va{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},rh=new Ve,Sd=new F,Md=new F,ul=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Sd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sd),Md.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Md),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){rh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(rh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===or||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(rh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},So=new F,Mo=new Ri,wi=new F,Sa=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(So,Mo,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,Mo,wi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(So,Mo,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,Mo,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ss=new F,bd=new It,wd=new It,An=class extends Sa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ss.x,ss.y).multiplyScalar(-t/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ss.x,ss.y).multiplyScalar(-t/ss.z)}getViewSize(t,e){return this.getViewBounds(t,bd,wd),e.subVectors(wd,bd)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Wr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var xr=class extends Sa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gh=class extends ul{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ma=class extends va{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new gh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ba=class extends nn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var er=-90,nr=1,dl=class extends _n{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new An(er,nr,t,e);s.layers=this.layers,this.add(s);let r=new An(er,nr,t,e);r.layers=this.layers,this.add(r);let a=new An(er,nr,t,e);a.layers=this.layers,this.add(a);let o=new An(er,nr,t,e);o.layers=this.layers,this.add(o);let l=new An(er,nr,t,e);l.layers=this.layers,this.add(l);let c=new An(er,nr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===fi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,u,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},fl=class extends An{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var qh="\\[\\]\\.:\\/",Ym=new RegExp("["+qh+"]","g"),Yh="[^"+qh+"]",Zm="[^"+qh.replace("\\.","")+"]",Jm=/((?:WC+[\/:])*)/.source.replace("WC",Yh),Km=/(WCOD+)?/.source.replace("WCOD",Zm),jm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yh),Qm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yh),tg=new RegExp("^"+Jm+Km+jm+Qm+"$"),eg=["material","materials","bones","map"],_h=class{constructor(t,e,n){let s=n||Ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ym,"")}static parseTrackName(t){let e=tg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);eg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ae("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ye.Composite=_h;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var my=new Float32Array(1);var hs=class extends zo{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Ed=new Ve,wa=class{constructor(t,e,n=0,s=1/0){this.ray=new Ts(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ae("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ed.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ed),this}intersectObject(t,e=!0,n=[]){return xh(t,this,n,e),n.sort(Td),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)xh(t[s],this,n,e);return n.sort(Td),n}};function Td(i,t){return i.distance-t.distance}function xh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)xh(r[a],t,e,!0)}}var vh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Ad=new F,bo=new F,ir=new F,sr=new F,ah=new F,ng=new F,ig=new F,Ea=class{constructor(t=new F,e=new F){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Ad.subVectors(t,this.start),bo.subVectors(this.end,this.start);let n=bo.dot(bo);if(n===0)return 0;let r=bo.dot(Ad)/n;return e&&(r=pe(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=ng,n=ig){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;ir.subVectors(c,o),sr.subVectors(h,l),ah.subVectors(o,l);let p=ir.dot(ir),u=sr.dot(sr),m=sr.dot(ah);if(p<=s&&u<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(p<=s)r=0,a=m/u,a=pe(a,0,1);else{let g=ir.dot(ah);if(u<=s)a=0,r=pe(-g/p,0,1);else{let b=ir.dot(sr),f=p*u-b*b;f!==0?r=pe((b*m-g*u)/f,0,1):r=0,a=(b*r+m)/u,a<0?(a=0,r=pe(-g/p,0,1)):a>1&&(a=1,r=pe((b-g)/p,0,1))}}return e.copy(o).addScaledVector(ir,r),n.copy(l).addScaledVector(sr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Zh(i,t,e,n){let s=sg(n);switch(e){case Bh:return i*t;case kh:return i*t/s.components*s.byteLength;case Sl:return i*t/s.components*s.byteLength;case ms:return i*t*2/s.components*s.byteLength;case Ml:return i*t*2/s.components*s.byteLength;case zh:return i*t*3/s.components*s.byteLength;case ri:return i*t*4/s.components*s.byteLength;case bl:return i*t*4/s.components*s.byteLength;case Ra:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pa:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case El:case Al:return Math.max(i,16)*Math.max(t,8)/4;case wl:case Tl:return Math.max(i,8)*Math.max(t,8)/2;case Cl:case Rl:case Pl:case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Il:case Da:case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Yl:case Zl:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kl:case jl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Na:case Ql:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sg(i){switch(i){case Vn:case Nh:return{byteLength:1,components:1};case Sr:case Uh:case vi:return{byteLength:2,components:1};case vl:case yl:return{byteLength:2,components:4};case _i:case xl:case xi:return{byteLength:4,components:1};case Fh:case Oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function kf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ag(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,h);else{p.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<p.length;m++){let g=p[u],b=p[m];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++u,p[u]=b)}p.length=u+1;for(let m=0,g=p.length;m<g;m++){let b=p[m];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lg=`#ifdef USE_ALPHAHASH
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
#endif`,cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ug=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fg=`#ifdef USE_AOMAP
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
#endif`,pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mg=`#ifdef USE_BATCHING
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
#endif`,gg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yg=`#ifdef USE_IRIDESCENCE
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
#endif`,Sg=`#ifdef USE_BUMPMAP
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
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ig=`#define PI 3.141592653589793
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
} // validated`,Pg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lg=`vec3 transformedNormal = objectNormal;
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
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Og="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zg=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yg=`#ifdef USE_GRADIENTMAP
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
}`,Zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Qg=`#ifdef USE_ENVMAP
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
#endif`,t0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s0=`PhysicalMaterial material;
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
#endif`,r0=`uniform sampler2D dfgLUT;
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
}`,a0=`
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
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
#endif`,l0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,h0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_0=`#if defined( USE_POINTS_UV )
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
#endif`,x0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`#ifdef USE_MORPHTARGETS
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
#endif`,w0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,I0=`#ifdef USE_NORMALMAP
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
#endif`,P0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$0=`float getShadowMask() {
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
}`,q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,Z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J0=`#ifdef USE_SKINNING
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
#endif`,K0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e_=`#ifdef USE_TRANSMISSION
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
#endif`,n_=`#ifdef USE_TRANSMISSION
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
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,o_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l_=`uniform sampler2D t2D;
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
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`#include <common>
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
}`,p_=`#if DEPTH_PACKING == 3200
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
}`,m_=`#define DISTANCE
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
}`,g_=`#define DISTANCE
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
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`uniform float scale;
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
}`,y_=`uniform vec3 diffuse;
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
}`,S_=`#include <common>
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
}`,M_=`uniform vec3 diffuse;
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
}`,b_=`#define LAMBERT
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
}`,w_=`#define LAMBERT
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
}`,E_=`#define MATCAP
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
}`,T_=`#define MATCAP
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
}`,A_=`#define NORMAL
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
}`,C_=`#define NORMAL
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
}`,R_=`#define PHONG
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
}`,I_=`#define PHONG
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
}`,P_=`#define STANDARD
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
}`,L_=`#define STANDARD
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
}`,D_=`#define TOON
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
}`,N_=`#define TOON
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
}`,U_=`uniform float size;
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
}`,F_=`uniform vec3 diffuse;
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
}`,O_=`#include <common>
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
}`,B_=`uniform vec3 color;
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
}`,z_=`uniform float rotation;
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
}`,k_=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:og,alphahash_pars_fragment:lg,alphamap_fragment:cg,alphamap_pars_fragment:hg,alphatest_fragment:ug,alphatest_pars_fragment:dg,aomap_fragment:fg,aomap_pars_fragment:pg,batching_pars_vertex:mg,batching_vertex:gg,begin_vertex:_g,beginnormal_vertex:xg,bsdfs:vg,iridescence_fragment:yg,bumpmap_pars_fragment:Sg,clipping_planes_fragment:Mg,clipping_planes_pars_fragment:bg,clipping_planes_pars_vertex:wg,clipping_planes_vertex:Eg,color_fragment:Tg,color_pars_fragment:Ag,color_pars_vertex:Cg,color_vertex:Rg,common:Ig,cube_uv_reflection_fragment:Pg,defaultnormal_vertex:Lg,displacementmap_pars_vertex:Dg,displacementmap_vertex:Ng,emissivemap_fragment:Ug,emissivemap_pars_fragment:Fg,colorspace_fragment:Og,colorspace_pars_fragment:Bg,envmap_fragment:zg,envmap_common_pars_fragment:kg,envmap_pars_fragment:Vg,envmap_pars_vertex:Hg,envmap_physical_pars_fragment:Qg,envmap_vertex:Gg,fog_vertex:Wg,fog_pars_vertex:Xg,fog_fragment:$g,fog_pars_fragment:qg,gradientmap_pars_fragment:Yg,lightmap_pars_fragment:Zg,lights_lambert_fragment:Jg,lights_lambert_pars_fragment:Kg,lights_pars_begin:jg,lights_toon_fragment:t0,lights_toon_pars_fragment:e0,lights_phong_fragment:n0,lights_phong_pars_fragment:i0,lights_physical_fragment:s0,lights_physical_pars_fragment:r0,lights_fragment_begin:a0,lights_fragment_maps:o0,lights_fragment_end:l0,lightprobes_pars_fragment:c0,logdepthbuf_fragment:h0,logdepthbuf_pars_fragment:u0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:f0,map_fragment:p0,map_pars_fragment:m0,map_particle_fragment:g0,map_particle_pars_fragment:_0,metalnessmap_fragment:x0,metalnessmap_pars_fragment:v0,morphinstance_vertex:y0,morphcolor_vertex:S0,morphnormal_vertex:M0,morphtarget_pars_vertex:b0,morphtarget_vertex:w0,normal_fragment_begin:E0,normal_fragment_maps:T0,normal_pars_fragment:A0,normal_pars_vertex:C0,normal_vertex:R0,normalmap_pars_fragment:I0,clearcoat_normal_fragment_begin:P0,clearcoat_normal_fragment_maps:L0,clearcoat_pars_fragment:D0,iridescence_pars_fragment:N0,opaque_fragment:U0,packing:F0,premultiplied_alpha_fragment:O0,project_vertex:B0,dithering_fragment:z0,dithering_pars_fragment:k0,roughnessmap_fragment:V0,roughnessmap_pars_fragment:H0,shadowmap_pars_fragment:G0,shadowmap_pars_vertex:W0,shadowmap_vertex:X0,shadowmask_pars_fragment:$0,skinbase_vertex:q0,skinning_pars_vertex:Y0,skinning_vertex:Z0,skinnormal_vertex:J0,specularmap_fragment:K0,specularmap_pars_fragment:j0,tonemapping_fragment:Q0,tonemapping_pars_fragment:t_,transmission_fragment:e_,transmission_pars_fragment:n_,uv_pars_fragment:i_,uv_pars_vertex:s_,uv_vertex:r_,worldpos_vertex:a_,background_vert:o_,background_frag:l_,backgroundCube_vert:c_,backgroundCube_frag:h_,cube_vert:u_,cube_frag:d_,depth_vert:f_,depth_frag:p_,distance_vert:m_,distance_frag:g_,equirect_vert:__,equirect_frag:x_,linedashed_vert:v_,linedashed_frag:y_,meshbasic_vert:S_,meshbasic_frag:M_,meshlambert_vert:b_,meshlambert_frag:w_,meshmatcap_vert:E_,meshmatcap_frag:T_,meshnormal_vert:A_,meshnormal_frag:C_,meshphong_vert:R_,meshphong_frag:I_,meshphysical_vert:P_,meshphysical_frag:L_,meshtoon_vert:D_,meshtoon_frag:N_,points_vert:U_,points_frag:F_,shadow_vert:O_,shadow_frag:B_,sprite_vert:z_,sprite_frag:k_},Lt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Fn={basic:{uniforms:Rn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Rn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new oe(0)},envMapIntensity:{value:1}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Rn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Rn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Rn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new oe(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Rn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Rn([Lt.points,Lt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Rn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Rn([Lt.common,Lt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Rn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Rn([Lt.sprite,Lt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:Rn([Lt.common,Lt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:Rn([Lt.lights,Lt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Fn.physical={uniforms:Rn([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};var ic={r:0,b:0,g:0},V_=new Ve,Vf=new de;Vf.set(-1,0,0,0,1,0,0,0,1);function H_(i,t,e,n,s,r){let a=new oe(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function m(R){let P=R.isScene===!0?R.background:null;if(P&&P.isTexture){let S=R.backgroundBlurriness>0;P=t.get(P,S)}return P}function g(R){let P=!1,S=m(R);S===null?f(a,o):S&&S.isColor&&(f(S,1),P=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(R,P){let S=m(P);S&&(S.isCubeTexture||S.mapping===Aa)?(c===void 0&&(c=new Cn(new pr(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Ds(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(V_.makeRotationFromEuler(P.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vf),c.material.toneMapped=Te.getTransfer(S.colorSpace)!==Oe,(h!==S||p!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,u=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Cn(new ma(2,2),new xn({name:"BackgroundMaterial",uniforms:Ds(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=Te.getTransfer(S.colorSpace)!==Oe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,p=S.version,u=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function f(R,P){R.getRGB(ic,$h(i)),e.buffers.color.setClear(ic.r,ic.g,ic.b,P,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,P=1){a.set(R),o=P,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(R){o=R,f(a,o)},render:g,addToRenderList:b,dispose:d}}function G_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(H,Z,J,V,q){let at=!1,et=p(H,V,J,Z);r!==et&&(r=et,c(r.object)),at=m(H,V,J,q),at&&g(H,V,J,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(at||a)&&(a=!1,S(H,Z,J,V),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(H){return i.bindVertexArray(H)}function h(H){return i.deleteVertexArray(H)}function p(H,Z,J,V){let q=V.wireframe===!0,at=n[Z.id];at===void 0&&(at={},n[Z.id]=at);let et=H.isInstancedMesh===!0?H.id:0,gt=at[et];gt===void 0&&(gt={},at[et]=gt);let nt=gt[J.id];nt===void 0&&(nt={},gt[J.id]=nt);let ot=nt[q];return ot===void 0&&(ot=u(l()),nt[q]=ot),ot}function u(H){let Z=[],J=[],V=[];for(let q=0;q<e;q++)Z[q]=0,J[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:J,attributeDivisors:V,object:H,attributes:{},index:null}}function m(H,Z,J,V){let q=r.attributes,at=Z.attributes,et=0,gt=J.getAttributes();for(let nt in gt)if(gt[nt].location>=0){let ft=q[nt],Kt=at[nt];if(Kt===void 0&&(nt==="instanceMatrix"&&H.instanceMatrix&&(Kt=H.instanceMatrix),nt==="instanceColor"&&H.instanceColor&&(Kt=H.instanceColor)),ft===void 0||ft.attribute!==Kt||Kt&&ft.data!==Kt.data)return!0;et++}return r.attributesNum!==et||r.index!==V}function g(H,Z,J,V){let q={},at=Z.attributes,et=0,gt=J.getAttributes();for(let nt in gt)if(gt[nt].location>=0){let ft=at[nt];ft===void 0&&(nt==="instanceMatrix"&&H.instanceMatrix&&(ft=H.instanceMatrix),nt==="instanceColor"&&H.instanceColor&&(ft=H.instanceColor));let Kt={};Kt.attribute=ft,ft&&ft.data&&(Kt.data=ft.data),q[nt]=Kt,et++}r.attributes=q,r.attributesNum=et,r.index=V}function b(){let H=r.newAttributes;for(let Z=0,J=H.length;Z<J;Z++)H[Z]=0}function f(H){d(H,0)}function d(H,Z){let J=r.newAttributes,V=r.enabledAttributes,q=r.attributeDivisors;J[H]=1,V[H]===0&&(i.enableVertexAttribArray(H),V[H]=1),q[H]!==Z&&(i.vertexAttribDivisor(H,Z),q[H]=Z)}function R(){let H=r.newAttributes,Z=r.enabledAttributes;for(let J=0,V=Z.length;J<V;J++)Z[J]!==H[J]&&(i.disableVertexAttribArray(J),Z[J]=0)}function P(H,Z,J,V,q,at,et){et===!0?i.vertexAttribIPointer(H,Z,J,q,at):i.vertexAttribPointer(H,Z,J,V,q,at)}function S(H,Z,J,V){b();let q=V.attributes,at=J.getAttributes(),et=Z.defaultAttributeValues;for(let gt in at){let nt=at[gt];if(nt.location>=0){let ot=q[gt];if(ot===void 0&&(gt==="instanceMatrix"&&H.instanceMatrix&&(ot=H.instanceMatrix),gt==="instanceColor"&&H.instanceColor&&(ot=H.instanceColor)),ot!==void 0){let ft=ot.normalized,Kt=ot.itemSize,kt=t.get(ot);if(kt===void 0)continue;let Ae=kt.buffer,ve=kt.type,be=kt.bytesPerElement,j=ve===i.INT||ve===i.UNSIGNED_INT||ot.gpuType===xl;if(ot.isInterleavedBufferAttribute){let lt=ot.data,Ct=lt.stride,ne=ot.offset;if(lt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<nt.locationSize;Tt++)d(nt.location+Tt,lt.meshPerAttribute);H.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Tt=0;Tt<nt.locationSize;Tt++)f(nt.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let Tt=0;Tt<nt.locationSize;Tt++)P(nt.location+Tt,Kt/nt.locationSize,ve,ft,Ct*be,(ne+Kt/nt.locationSize*Tt)*be,j)}else{if(ot.isInstancedBufferAttribute){for(let lt=0;lt<nt.locationSize;lt++)d(nt.location+lt,ot.meshPerAttribute);H.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let lt=0;lt<nt.locationSize;lt++)f(nt.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let lt=0;lt<nt.locationSize;lt++)P(nt.location+lt,Kt/nt.locationSize,ve,ft,Kt*be,Kt/nt.locationSize*lt*be,j)}}else if(et!==void 0){let ft=et[gt];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(nt.location,ft);break;case 3:i.vertexAttrib3fv(nt.location,ft);break;case 4:i.vertexAttrib4fv(nt.location,ft);break;default:i.vertexAttrib1fv(nt.location,ft)}}}}R()}function M(){A();for(let H in n){let Z=n[H];for(let J in Z){let V=Z[J];for(let q in V){let at=V[q];for(let et in at)h(at[et].object),delete at[et];delete V[q]}}delete n[H]}}function T(H){if(n[H.id]===void 0)return;let Z=n[H.id];for(let J in Z){let V=Z[J];for(let q in V){let at=V[q];for(let et in at)h(at[et].object),delete at[et];delete V[q]}}delete n[H.id]}function D(H){for(let Z in n){let J=n[Z];for(let V in J){let q=J[V];if(q[H.id]===void 0)continue;let at=q[H.id];for(let et in at)h(at[et].object),delete at[et];delete q[H.id]}}}function y(H){for(let Z in n){let J=n[Z],V=H.isInstancedMesh===!0?H.id:0,q=J[V];if(q!==void 0){for(let at in q){let et=q[at];for(let gt in et)h(et[gt].object),delete et[gt];delete q[at]}delete J[V],Object.keys(J).length===0&&delete n[Z]}}}function A(){z(),a=!0,r!==s&&(r=s,c(r.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:z,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:D,initAttributes:b,enableAttribute:f,disableUnusedAttributes:R}}function W_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function X_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==ri&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let y=D===vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Vn&&D!==xi&&!y&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(re("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:R,maxVaryings:P,maxFragmentUniforms:S,maxSamples:M,samples:T}}function $_(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ui,o=new de,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let m=p.length!==0||u||n!==0||s;return s=u,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){e=h(p,u,0)},this.setState=function(p,u,m){let g=p.clippingPlanes,b=p.clipIntersection,f=p.clipShadows,d=i.get(p);if(!s||g===null||g.length===0||r&&!f)r?h(null):c();else{let R=r?0:n,P=R*4,S=d.clippingState||null;l.value=S,S=h(g,u,P,m);for(let M=0;M!==P;++M)S[M]=e[M];d.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,u,m,g){let b=p!==null?p.length:0,f=null;if(b!==0){if(f=l.value,g!==!0||f===null){let d=m+b*4,R=u.matrixWorldInverse;o.getNormalMatrix(R),(f===null||f.length<d)&&(f=new Float32Array(d));for(let P=0,S=m;P!==b;++P,S+=4)a.copy(p[P]).applyMatrix4(R,o),a.normal.toArray(f,S),f[S+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,f}}var wr=4,q_=6,Y_=20,Z_=256,Fa=new xr,vf=new oe,Jh=null,Kh=0,jh=0,Qh=!1,J_=new F,Ns=new F,rc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=J_}=r;Jh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jh,Kh,jh),this._renderer.xr.enabled=Qh,t.scissorTest=!1,br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:vi,format:ri,colorSpace:Zr,depthBuffer:!1},s=yf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=K_(r)),this._blurMaterial=Q_(r,t,e),this._ggxMaterial=j_(r,t,e)}return s}_compileMaterial(t){let e=new Cn(new nn,t);this._renderer.compile(e,Fa)}_sceneToCubeUV(t,e,n,s,r){let l=new An(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(vf),p.toneMapping=gi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Cn(new pr,new ia({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,f=b.material,d=!1,R=t.background;R?R.isColor&&(f.color.copy(R),t.background=null,d=!0):(f.color.copy(vf),d=!0);for(let P=0;P<6;P++){let S=P%3;S===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[P],r.y,r.z)):S===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[P]));let M=this._cubeSize;br(s,S*M,P>2?M:0,M,M),p.setRenderTarget(s),d&&p.render(b,l),p.render(t,l)}p.toneMapping=m,p.autoClear=u,t.background=R}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ds||t.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;br(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Fa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,m=p*u,{_lodMax:g}=this,b=this._sizeLods[n],f=3*b*(n>g-wr?n-g+wr:0),d=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=g-e,br(r,f,d,3*b,2*b),s.setRenderTarget(r),s.render(o,Fa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,br(t,f,d,3*b,2*b),s.setRenderTarget(t),s.render(o,Fa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-wr?s-this._lodMax+wr:0),u=4*(this._cubeSize-h);br(e,p,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Fa)}};function K_(i){let t=[],e=[],n=i,s=i-wr+1+q_;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,m=3,g=new Float32Array(m*u*p),b=new Float32Array(m*u*p);for(let d=0;d<p;d++){let R=d%3*2/3-1,P=d>2?0:-1,S=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];g.set(S,m*u*d);for(let M=0;M<u;M++){let T=h[M*2]*2-1,D=h[M*2+1]*2-1;d===0?Ns.set(1,D,T):d===1?Ns.set(-T,1,-D):d===2?Ns.set(-T,D,1):d===3?Ns.set(-1,D,-T):d===4?Ns.set(-T,-1,D):Ns.set(T,D,-1),Ns.toArray(b,(d*u+M)*m)}}let f=new nn;f.setAttribute("position",new We(g,m)),f.setAttribute("outputDirection",new We(b,m)),e.push(new Cn(f,null)),n>wr&&n--}return{lodMeshes:e,sizeLods:t}}function yf(i,t,e){let n=new kn(i,t,e);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function j_(i,t,e){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Z_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Q_(i,t,e){return new xn({name:"SphericalGaussianBlur",defines:{SAMPLES:Y_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Sf(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Mf(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function lc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ac=class extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ra(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pr(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:Li});r.uniforms.tEquirect.value=e;let a=new Cn(s,r),o=e.minFilter;return e.minFilter===fs&&(e.minFilter=vn),new dl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function tx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===ml||m===gl)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let b=new ac(g.height);return b.fromEquirectangularTexture(i,u),t.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let m=u.mapping,g=m===ml||m===gl,b=m===ds||m===Ls;if(g||b){let f=e.get(u),d=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new rc(i)),f=g?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{let R=u.image;return g&&R&&R.height>0||b&&R&&l(R)?(n===null&&(n=new rc(i)),f=g?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,m){return m===ml?u.mapping=ds:m===gl&&(u.mapping=Ls),u}function l(u){let m=0,g=6;for(let b=0;b<g;b++)u[b]!==void 0&&m++;return m===g}function c(u){let m=u.target;m.removeEventListener("dispose",c);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function ex(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Es("WebGLRenderer: "+n+" extension not supported."),s}}}function nx(i,t,e,n){let s={},r=new WeakMap;function a(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(p){let u=p.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER)}function c(p){let u=[],m=p.index,g=p.attributes.position,b=0;if(g===void 0)return;if(m!==null){let R=m.array;b=m.version;for(let P=0,S=R.length;P<S;P+=3){let M=R[P+0],T=R[P+1],D=R[P+2];u.push(M,T,T,D,D,M)}}else{let R=g.array;b=g.version;for(let P=0,S=R.length/3-1;P<S;P+=3){let M=P+0,T=P+1,D=P+2;u.push(M,T,T,D,D,M)}}let f=new(g.count>=65535?na:ea)(u,1);f.version=b;let d=r.get(p);d&&t.remove(d),r.set(p,f)}function h(p){let u=r.get(p);if(u){let m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function ix(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,u){i.drawElements(n,u,r,p*a),e.update(u,n,1)}function c(p,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,p*a,m),e.update(u,n,m))}function h(p,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,m);let b=0;for(let f=0;f<m;f++)b+=u[f];e.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function sx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ae("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rx(i,t,e){let n=new WeakMap,s=new Be;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==p){let A=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],R=o.morphAttributes.color||[],P=0;m===!0&&(P=1),g===!0&&(P=2),b===!0&&(P=3);let S=o.attributes.position.count*P,M=1;S>t.maxTextureSize&&(M=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let T=new Float32Array(S*M*4*p),D=new Qr(T,S,M,p);D.type=xi,D.needsUpdate=!0;let y=P*4;for(let z=0;z<p;z++){let H=f[z],Z=d[z],J=R[z],V=S*M*4*z;for(let q=0;q<H.count;q++){let at=q*y;m===!0&&(s.fromBufferAttribute(H,q),T[V+at+0]=s.x,T[V+at+1]=s.y,T[V+at+2]=s.z,T[V+at+3]=0),g===!0&&(s.fromBufferAttribute(Z,q),T[V+at+4]=s.x,T[V+at+5]=s.y,T[V+at+6]=s.z,T[V+at+7]=0),b===!0&&(s.fromBufferAttribute(J,q),T[V+at+8]=s.x,T[V+at+9]=s.y,T[V+at+10]=s.z,T[V+at+11]=J.itemSize===4?s.w:1)}}u={count:p,texture:D,size:new It(S,M)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let b=0;b<c.length;b++)m+=c[b];let g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function ax(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,u=t.get(c,p);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var ox={[Th]:"LINEAR_TONE_MAPPING",[Ah]:"REINHARD_TONE_MAPPING",[Ch]:"CINEON_TONE_MAPPING",[Rh]:"ACES_FILMIC_TONE_MAPPING",[Ph]:"AGX_TONE_MAPPING",[Lh]:"NEUTRAL_TONE_MAPPING",[Ih]:"CUSTOM_TONE_MAPPING"};function lx(i,t,e,n,s,r){let a=new kn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new nn;c.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new cn([0,2,0,0,2,0],2));let h=new jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Cn(c,h),u=new xr(-1,1,1,-1,0,1),m=null,g=null,b=!1,f,d=null,R=[],P=!1;this.setSize=function(S,M){a.setSize(S,M),o!==null&&o.setSize(S,M),l!==null&&l.setSize(S,M);for(let T=0;T<R.length;T++){let D=R[T];D.setSize&&D.setSize(S,M)}},this.setEffects=function(S){R=S,P=R.length>0&&R[0].isRenderPass===!0;let M=a.width,T=a.height;R.length>0&&o===null&&(o=new kn(M,T,{type:vi,depthBuffer:!1,stencilBuffer:!1}),l=new kn(M,T,{type:vi,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<R.length;D++){let y=R[D];y.setSize&&y.setSize(M,T)}},this.begin=function(S,M){if(b||S.toneMapping===gi&&R.length===0)return!1;if(d=M,M!==null){let T=M.width,D=M.height;(a.width!==T||a.height!==D)&&this.setSize(T,D)}return P===!1&&S.setRenderTarget(a),f=S.toneMapping,S.toneMapping=gi,!0},this.hasRenderPass=function(){return P},this.end=function(S,M){S.toneMapping=f,b=!0;let T=a,D=o;for(let y=0;y<R.length;y++){let A=R[y];A.enabled!==!1&&(A.render(S,D,T,M),A.needsSwap!==!1&&(T=D,D=D===o?l:o))}if(m!==S.outputColorSpace||g!==S.toneMapping){m=S.outputColorSpace,g=S.toneMapping,h.defines={},Te.getTransfer(m)===Oe&&(h.defines.SRGB_TRANSFER="");let y=ox[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(d),S.render(p,u),d=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Hf=new zn,nu=new as(1,1),Gf=new Qr,Wf=new Bo,Xf=new ra,bf=[],wf=[],Ef=new Float32Array(16),Tf=new Float32Array(9),Af=new Float32Array(4);function Tr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=bf[s];if(r===void 0&&(r=new Float32Array(s),bf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function hn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function un(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function cc(i,t){let e=wf[t];e===void 0&&(e=new Int32Array(t),wf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;i.uniform2fv(this.addr,t),un(e,t)}}function ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(hn(e,t))return;i.uniform3fv(this.addr,t),un(e,t)}}function dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;i.uniform4fv(this.addr,t),un(e,t)}}function fx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;Af.set(n),i.uniformMatrix2fv(this.addr,!1,Af),un(e,n)}}function px(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;Tf.set(n),i.uniformMatrix3fv(this.addr,!1,Tf),un(e,n)}}function mx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;Ef.set(n),i.uniformMatrix4fv(this.addr,!1,Ef),un(e,n)}}function gx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;i.uniform2iv(this.addr,t),un(e,t)}}function xx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;i.uniform3iv(this.addr,t),un(e,t)}}function vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;i.uniform4iv(this.addr,t),un(e,t)}}function yx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;i.uniform2uiv(this.addr,t),un(e,t)}}function Mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;i.uniform3uiv(this.addr,t),un(e,t)}}function bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;i.uniform4uiv(this.addr,t),un(e,t)}}function wx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nu.compareFunction=e.isReversedDepthBuffer()?nc:ec,r=nu):r=Hf,e.setTexture2D(t||r,s)}function Ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wf,s)}function Tx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xf,s)}function Ax(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gf,s)}function Cx(i){switch(i){case 5126:return cx;case 35664:return hx;case 35665:return ux;case 35666:return dx;case 35674:return fx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return _x;case 35668:case 35672:return xx;case 35669:case 35673:return vx;case 5125:return yx;case 36294:return Sx;case 36295:return Mx;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return Ax}}function Rx(i,t){i.uniform1fv(this.addr,t)}function Ix(i,t){let e=Tr(t,this.size,2);i.uniform2fv(this.addr,e)}function Px(i,t){let e=Tr(t,this.size,3);i.uniform3fv(this.addr,e)}function Lx(i,t){let e=Tr(t,this.size,4);i.uniform4fv(this.addr,e)}function Dx(i,t){let e=Tr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Nx(i,t){let e=Tr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ux(i,t){let e=Tr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fx(i,t){i.uniform1iv(this.addr,t)}function Ox(i,t){i.uniform2iv(this.addr,t)}function Bx(i,t){i.uniform3iv(this.addr,t)}function zx(i,t){i.uniform4iv(this.addr,t)}function kx(i,t){i.uniform1uiv(this.addr,t)}function Vx(i,t){i.uniform2uiv(this.addr,t)}function Hx(i,t){i.uniform3uiv(this.addr,t)}function Gx(i,t){i.uniform4uiv(this.addr,t)}function Wx(i,t,e){let n=this.cache,s=t.length,r=cc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=nu:a=Hf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Xx(i,t,e){let n=this.cache,s=t.length,r=cc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Wf,r[a])}function $x(i,t,e){let n=this.cache,s=t.length,r=cc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Xf,r[a])}function qx(i,t,e){let n=this.cache,s=t.length,r=cc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Gf,r[a])}function Yx(i){switch(i){case 5126:return Rx;case 35664:return Ix;case 35665:return Px;case 35666:return Lx;case 35674:return Dx;case 35675:return Nx;case 35676:return Ux;case 5124:case 35670:return Fx;case 35667:case 35671:return Ox;case 35668:case 35672:return Bx;case 35669:case 35673:return zx;case 5125:return kx;case 36294:return Vx;case 36295:return Hx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return qx}}var iu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cx(e.type)}},su=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yx(e.type)}},ru=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},tu=/(\w+)(\])?(\[|\.)?/g;function Cf(i,t){i.seq.push(t),i.map[t.id]=t}function Zx(i,t,e){let n=i.name,s=n.length;for(tu.lastIndex=0;;){let r=tu.exec(n),a=tu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Cf(e,c===void 0?new iu(o,i,t):new su(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new ru(o),Cf(e,p)),e=p}}}var Er=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Zx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Rf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Jx=37297,Kx=0;function jx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var If=new de;function Qx(i){Te._getMatrix(If,Te.workingColorSpace,i);let t=`mat3( ${If.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(i)){case Jr:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+jx(i.getShaderSource(t),o)}else return r}function tv(i,t){let e=Qx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var ev={[Th]:"Linear",[Ah]:"Reinhard",[Ch]:"Cineon",[Rh]:"ACESFilmic",[Ph]:"AgX",[Lh]:"Neutral",[Ih]:"Custom"};function nv(i,t){let e=ev[t];return e===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sc=new F;function iv(){Te.getLuminanceCoefficients(sc);let i=sc.x.toFixed(4),t=sc.y.toFixed(4),e=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function rv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function av(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ba(i){return i!==""}function Lf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Df(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(i){return i.replace(ov,cv)}var lv=new Map;function cv(i,t){let e=xe[t];if(e===void 0){let n=lv.get(t);if(n!==void 0)e=xe[n],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return au(e)}var hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nf(i){return i.replace(hv,uv)}function uv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var dv={[Ta]:"SHADOWMAP_TYPE_PCF",[vr]:"SHADOWMAP_TYPE_VSM"};function fv(i){return dv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var pv={[ds]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE",[Aa]:"ENVMAP_TYPE_CUBE_UV"};function mv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":pv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var gv={[Ls]:"ENVMAP_MODE_REFRACTION"};function _v(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":gv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xv={[pl]:"ENVMAP_BLENDING_MULTIPLY",[Zd]:"ENVMAP_BLENDING_MIX",[Jd]:"ENVMAP_BLENDING_ADD"};function vv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":xv[i.combine]||"ENVMAP_BLENDING_NONE"}function yv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Sv(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=fv(e),c=mv(e),h=_v(e),p=vv(e),u=yv(e),m=sv(e),g=rv(r),b=s.createProgram(),f,d,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ba).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ba).join(`
`),d.length>0&&(d+=`
`)):(f=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),d=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?xe.tonemapping_pars_fragment:"",e.toneMapping!==gi?nv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,tv("linearToOutputTexel",e.outputColorSpace),iv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ba).join(`
`)),a=au(a),a=Lf(a,e),a=Df(a,e),o=au(o),o=Lf(o,e),o=Df(o,e),a=Nf(a),o=Nf(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let P=R+f+a,S=R+d+o,M=Rf(s,s.VERTEX_SHADER,P),T=Rf(s,s.FRAGMENT_SHADER,S);s.attachShader(b,M),s.attachShader(b,T),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function D(H){if(i.debug.checkShaderErrors){let Z=s.getProgramInfoLog(b)||"",J=s.getShaderInfoLog(M)||"",V=s.getShaderInfoLog(T)||"",q=Z.trim(),at=J.trim(),et=V.trim(),gt=!0,nt=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(gt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,M,T);else{let ot=Pf(s,M,"vertex"),ft=Pf(s,T,"fragment");ae("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+q+`
`+ot+`
`+ft)}else q!==""?re("WebGLProgram: Program Info Log:",q):(at===""||et==="")&&(nt=!1);nt&&(H.diagnostics={runnable:gt,programLog:q,vertexShader:{log:at,prefix:f},fragmentShader:{log:et,prefix:d}})}s.deleteShader(M),s.deleteShader(T),y=new Er(s,b),A=av(s,b)}let y;this.getUniforms=function(){return y===void 0&&D(this),y};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(b,Jx)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kx++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=T,this}var Mv=0,ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new lu(t),e.set(t,n)),n}},lu=class{constructor(t){this.id=Mv++,this.code=t,this.usedTimes=0}};function bv(i){return i===ms||i===Da||i===Na}function wv(i,t,e,n,s,r){let a=new ur,o=new ou,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,u=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,A,z,H,Z,J){let V=H.fog,q=Z.geometry,at=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?H.environment:null,et=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,gt=t.get(y.envMap||at,et),nt=gt&&gt.mapping===Aa?gt.image.height:null,ot=m[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&re("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let ft=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Kt=ft!==void 0?ft.length:0,kt=0;q.morphAttributes.position!==void 0&&(kt=1),q.morphAttributes.normal!==void 0&&(kt=2),q.morphAttributes.color!==void 0&&(kt=3);let Ae,ve,be,j;if(ot){let ze=Fn[ot];Ae=ze.vertexShader,ve=ze.fragmentShader}else{Ae=y.vertexShader,ve=y.fragmentShader;let ze=o.getVertexShaderStage(y),Ie=o.getFragmentShaderStage(y);o.update(y,ze,Ie),be=ze.id,j=Ie.id}let lt=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),ne=Z.isInstancedMesh===!0,Tt=Z.isBatchedMesh===!0,Wt=!!y.map,Ce=!!y.matcap,L=!!gt,mt=!!y.aoMap,vt=!!y.lightMap,xt=!!y.bumpMap&&y.wireframe===!1,St=!!y.normalMap,ee=!!y.displacementMap,te=!!y.emissiveMap,Vt=!!y.metalnessMap,le=!!y.roughnessMap,N=y.anisotropy>0,Re=y.clearcoat>0,_e=y.dispersion>0,E=y.retroreflectivity>0,_=y.iridescence>0,W=y.sheen>0,Y=y.transmission>0,tt=N&&!!y.anisotropyMap,yt=Re&&!!y.clearcoatMap,wt=Re&&!!y.clearcoatNormalMap,rt=Re&&!!y.clearcoatRoughnessMap,dt=_&&!!y.iridescenceMap,Rt=_&&!!y.iridescenceThicknessMap,jt=W&&!!y.sheenColorMap,bt=W&&!!y.sheenRoughnessMap,Mt=!!y.specularMap,Gt=!!y.specularColorMap,ie=!!y.specularIntensityMap,ce=Y&&!!y.transmissionMap,k=Y&&!!y.thicknessMap,Pt=!!y.gradientMap,ct=!!y.alphaMap,Dt=y.alphaTest>0,Ot=!!y.alphaHash,pt=!!y.extensions,Qt=gi;y.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Qt=i.toneMapping);let $t={shaderID:ot,shaderType:y.type,shaderName:y.name,vertexShader:Ae,fragmentShader:ve,defines:y.defines,customVertexShaderID:be,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Tt,batchingColor:Tt&&Z._colorsTexture!==null,instancing:ne,instancingColor:ne&&Z.instanceColor!==null,instancingMorph:ne&&Z.morphTexture!==null,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Te.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Wt,matcap:Ce,envMap:L,envMapMode:L&&gt.mapping,envMapCubeUVHeight:nt,aoMap:mt,lightMap:vt,bumpMap:xt,normalMap:St,displacementMap:ee,emissiveMap:te,normalMapObjectSpace:St&&y.normalMapType===Qd,normalMapTangentSpace:St&&y.normalMapType===tc,packedNormalMap:St&&y.normalMapType===tc&&bv(y.normalMap.format),metalnessMap:Vt,roughnessMap:le,anisotropy:N,anisotropyMap:tt,clearcoat:Re,clearcoatMap:yt,clearcoatNormalMap:wt,clearcoatRoughnessMap:rt,dispersion:_e,retroreflection:E,iridescence:_,iridescenceMap:dt,iridescenceThicknessMap:Rt,sheen:W,sheenColorMap:jt,sheenRoughnessMap:bt,specularMap:Mt,specularColorMap:Gt,specularIntensityMap:ie,transmission:Y,transmissionMap:ce,thicknessMap:k,gradientMap:Pt,opaque:y.transparent===!1&&y.blending===yr&&y.alphaToCoverage===!1,alphaMap:ct,alphaTest:Dt,alphaHash:Ot,combine:y.combine,mapUv:Wt&&g(y.map.channel),aoMapUv:mt&&g(y.aoMap.channel),lightMapUv:vt&&g(y.lightMap.channel),bumpMapUv:xt&&g(y.bumpMap.channel),normalMapUv:St&&g(y.normalMap.channel),displacementMapUv:ee&&g(y.displacementMap.channel),emissiveMapUv:te&&g(y.emissiveMap.channel),metalnessMapUv:Vt&&g(y.metalnessMap.channel),roughnessMapUv:le&&g(y.roughnessMap.channel),anisotropyMapUv:tt&&g(y.anisotropyMap.channel),clearcoatMapUv:yt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:wt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(y.sheenRoughnessMap.channel),specularMapUv:Mt&&g(y.specularMap.channel),specularColorMapUv:Gt&&g(y.specularColorMap.channel),specularIntensityMapUv:ie&&g(y.specularIntensityMap.channel),transmissionMapUv:ce&&g(y.transmissionMap.channel),thicknessMapUv:k&&g(y.thicknessMap.channel),alphaMapUv:ct&&g(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(St||N),vertexNormals:!!q.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!q.attributes.uv&&(Wt||ct),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||q.attributes.normal===void 0&&St===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ct,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Kt,morphTextureStride:kt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,decodeVideoTexture:Wt&&y.map.isVideoTexture===!0&&Te.getTransfer(y.map.colorSpace)===Oe,decodeVideoTextureEmissive:te&&y.emissiveMap.isVideoTexture===!0&&Te.getTransfer(y.emissiveMap.colorSpace)===Oe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Pi,flipSided:y.side===Un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:pt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&y.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return $t.vertexUv1s=l.has(1),$t.vertexUv2s=l.has(2),$t.vertexUv3s=l.has(3),l.clear(),$t}function f(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let z in y.defines)A.push(z),A.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(d(A,y),R(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function d(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function R(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function P(y){let A=m[y.type],z;if(A){let H=Fn[A];z=Ua.clone(H.uniforms)}else z=y.uniforms;return z}function S(y,A){let z=h.get(A);return z!==void 0?++z.usedTimes:(z=new Sv(i,A,y,s),c.push(z),h.set(A,z)),z}function M(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function D(){o.dispose()}return{getParameters:b,getProgramCacheKey:f,getUniforms:P,acquireProgram:S,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:D}}function Ev(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Tv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ff(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Of(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,g,b,f,d){let R=i[t];return R===void 0?(R={id:u.id,object:u,geometry:m,material:g,materialVariant:a(u),groupOrder:b,renderOrder:u.renderOrder,z:f,group:d},i[t]=R):(R.id=u.id,R.object=u,R.geometry=m,R.material=g,R.materialVariant=a(u),R.groupOrder=b,R.renderOrder=u.renderOrder,R.z=f,R.group=d),t++,R}function l(u,m,g,b,f,d,R){R.reversedDepth===!0&&(f=-f);let P=o(u,m,g,b,f,d);g.transmission>0?n.push(P):g.transparent===!0?s.push(P):e.push(P)}function c(u,m,g,b,f,d){let R=o(u,m,g,b,f,d);g.transmission>0?n.unshift(R):g.transparent===!0?s.unshift(R):e.unshift(R)}function h(u,m){e.length>1&&e.sort(u||Tv),n.length>1&&n.sort(m||Ff),s.length>1&&s.sort(m||Ff)}function p(){for(let u=t,m=i.length;u<m;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function Av(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Of,i.set(n,[a])):s>=r.length?(a=new Of,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Cv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new oe};break;case"SpotLight":e={position:new F,direction:new F,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Rv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Iv=0;function Pv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Lv(i){let t=new Cv,e=Rv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new Ve,a=new Ve;function o(c){let h=0,p=0,u=0;for(let Z=0;Z<9;Z++)n.probe[Z].set(0,0,0);let m=0,g=0,b=0,f=0,d=0,R=0,P=0,S=0,M=0,T=0,D=0,y=0,A=0,z=0;c.sort(Pv);for(let Z=0,J=c.length;Z<J;Z++){let V=c[Z],q=V.color,at=V.intensity,et=V.distance,gt=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===ms?gt=V.shadow.map.texture:gt=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)h+=q.r*at,p+=q.g*at,u+=q.b*at;else if(V.isLightProbe){for(let nt=0;nt<9;nt++)n.probe[nt].addScaledVector(V.sh.coefficients[nt],at);z++}else if(V.isSunLight){let nt=t.get(V);if(nt.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let ot=V.shadow,ft=e.get(V);ft.shadowIntensity=ot.intensity,ft.shadowBias=ot.bias,ft.shadowNormalBias=ot.normalBias,ft.shadowRadius=ot.radius,ft.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),n.sunShadow[g]=ft,n.sunShadowMap[g]=gt;let Kt=ot.getViewportCount();for(let kt=0;kt<Kt;kt++)n.sunShadowMatrix[b+kt]=ot.getMatrix(kt),n.sunShadowCascade[b+kt]=ot._cascadeData[kt];b+=Kt,g++}n.sun[m]=nt,m++}else if(V.isDirectionalLight){let nt=t.get(V);if(nt.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let ot=V.shadow,ft=e.get(V);ft.shadowIntensity=ot.intensity,ft.shadowBias=ot.bias,ft.shadowNormalBias=ot.normalBias,ft.shadowRadius=ot.radius,ft.shadowMapSize=ot.mapSize,n.directionalShadow[f]=ft,n.directionalShadowMap[f]=gt,n.directionalShadowMatrix[f]=V.shadow.matrix,M++}n.directional[f]=nt,f++}else if(V.isSpotLight){let nt=t.get(V);nt.position.setFromMatrixPosition(V.matrixWorld),nt.color.copy(q).multiplyScalar(at),nt.distance=et,nt.coneCos=Math.cos(V.angle),nt.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),nt.decay=V.decay,n.spot[R]=nt;let ot=V.shadow;if(V.map&&(n.spotLightMap[y]=V.map,y++,ot.updateMatrices(V),V.castShadow&&A++),n.spotLightMatrix[R]=ot.matrix,V.castShadow){let ft=e.get(V);ft.shadowIntensity=ot.intensity,ft.shadowBias=ot.bias,ft.shadowNormalBias=ot.normalBias,ft.shadowRadius=ot.radius,ft.shadowMapSize=ot.mapSize,n.spotShadow[R]=ft,n.spotShadowMap[R]=gt,D++}R++}else if(V.isRectAreaLight){let nt=t.get(V);nt.color.copy(q).multiplyScalar(at),nt.halfWidth.set(V.width*.5,0,0),nt.halfHeight.set(0,V.height*.5,0),n.rectArea[P]=nt,P++}else if(V.isPointLight){let nt=t.get(V);if(nt.color.copy(V.color).multiplyScalar(V.intensity),nt.distance=V.distance,nt.decay=V.decay,V.castShadow){let ot=V.shadow,ft=e.get(V);ft.shadowIntensity=ot.intensity,ft.shadowBias=ot.bias,ft.shadowNormalBias=ot.normalBias,ft.shadowRadius=ot.radius,ft.shadowMapSize=ot.mapSize,ft.shadowCameraNear=ot.camera.near,ft.shadowCameraFar=ot.camera.far,n.pointShadow[d]=ft,n.pointShadowMap[d]=gt,n.pointShadowMatrix[d]=V.shadow.matrix,T++}n.point[d]=nt,d++}else if(V.isHemisphereLight){let nt=t.get(V);nt.skyColor.copy(V.color).multiplyScalar(at),nt.groundColor.copy(V.groundColor).multiplyScalar(at),n.hemi[S]=nt,S++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;let H=n.hash;(H.sunLength!==m||H.directionalLength!==f||H.pointLength!==d||H.spotLength!==R||H.rectAreaLength!==P||H.hemiLength!==S||H.numSunShadows!==g||H.numDirectionalShadows!==M||H.numPointShadows!==T||H.numSpotShadows!==D||H.numSpotMaps!==y||H.numLightProbes!==z)&&(n.sun.length=m,n.directional.length=f,n.spot.length=R,n.rectArea.length=P,n.point.length=d,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=D,n.spotShadowMap.length=D,n.spotLightMatrix.length=D+y-A,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=z,H.sunLength=m,H.directionalLength=f,H.pointLength=d,H.spotLength=R,H.rectAreaLength=P,H.hemiLength=S,H.numSunShadows=g,H.numDirectionalShadows=M,H.numPointShadows=T,H.numSpotShadows=D,H.numSpotMaps=y,H.numLightProbes=z,n.version=Iv++)}function l(c,h){let p=0,u=0,m=0,g=0,b=0,f=0,d=h.matrixWorldInverse;for(let R=0,P=c.length;R<P;R++){let S=c[R];if(S.isSunLight){let M=n.sun[p];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(d),p++}else if(S.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),u++}else if(S.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),g++}else if(S.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(d),a.identity(),r.copy(S.matrixWorld),r.premultiply(d),a.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),b++}else if(S.isPointLight){let M=n.point[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){let M=n.hemi[f];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(d),f++}}}return{setup:o,setupView:l,state:n}}function Bf(i){let t=new Lv(i),e=[],n=[],s=[];function r(u){p.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Dv(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Bf(i),t.set(s,[o])):r>=a.length?(o=new Bf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uv=`uniform sampler2D shadow_pass;
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
}`,Fv=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Ov=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],zf=new Ve,Oa=new F,eu=new F;function Bv(i,t,e){let n=new fr,s=new It,r=new It,a=new Be,o=new Qo,l=new tl,c={},h=e.maxTextureSize,p={[us]:Un,[Un]:us,[Pi]:Pi},u=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Nv,fragmentShader:Uv}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new nn;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Cn(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ta;let d=this.type;this.render=function(T,D,y){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;this.type===Id&&(re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ta);let A=i.getRenderTarget(),z=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Li),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let J=d!==this.type;J&&D.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(q=>q.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,q=T.length;V<q;V++){let at=T[V],et=at.shadow;if(et===void 0){re("WebGLShadowMap:",at,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;s.copy(et.mapSize);let gt=et.getFrameExtents();s.multiply(gt),r.copy(et.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/gt.x),s.x=r.x*gt.x,et.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/gt.y),s.y=r.y*gt.y,et.mapSize.y=r.y));let nt=i.state.buffers.depth.getReversed();if(et.camera._reversedDepth=nt,et.map===null||J===!0){if(et.map!==null&&(et.map.depthTexture!==null&&(et.map.depthTexture.dispose(),et.map.depthTexture=null),et.map.dispose()),this.type===vr){if(at.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}et.map=new kn(s.x,s.y,{format:ms,type:vi,minFilter:vn,magFilter:vn,generateMipmaps:!1}),et.map.texture.name=at.name+".shadowMap",et.map.depthTexture=new as(s.x,s.y,xi),et.map.depthTexture.name=at.name+".shadowMapDepth",et.map.depthTexture.format=Ai,et.map.depthTexture.compareFunction=null,et.map.depthTexture.minFilter=gn,et.map.depthTexture.magFilter=gn}else at.isPointLight?(et.map=new ac(s.x),et.map.depthTexture=new Xo(s.x,_i)):(et.map=new kn(s.x,s.y),et.map.depthTexture=new as(s.x,s.y,_i)),et.map.depthTexture.name=at.name+".shadowMap",et.map.depthTexture.format=Ai,this.type===Ta?(et.map.depthTexture.compareFunction=nt?nc:ec,et.map.depthTexture.minFilter=vn,et.map.depthTexture.magFilter=vn):(et.map.depthTexture.compareFunction=null,et.map.depthTexture.minFilter=gn,et.map.depthTexture.magFilter=gn);et.camera.updateProjectionMatrix()}et.map.isWebGLCubeRenderTarget!==!0&&(et.map.width!==s.x||et.map.height!==s.y)&&et.map.setSize(s.x,s.y);let ot=et.map.isWebGLCubeRenderTarget?6:et.getViewportCount();at.isPointLight!==!0&&et.updateMatrices(at,y);for(let ft=0;ft<ot;ft++){let Kt=et.getCamera(ft);if(at.isPointLight){let kt=et.camera,Ae=et.matrix,ve=at.distance||kt.far;ve!==kt.far&&(kt.far=ve,kt.updateProjectionMatrix()),Oa.setFromMatrixPosition(at.matrixWorld),kt.position.copy(Oa),eu.copy(kt.position),eu.add(Fv[ft]),kt.up.copy(Ov[ft]),kt.lookAt(eu),kt.updateMatrixWorld(),Ae.makeTranslation(-Oa.x,-Oa.y,-Oa.z),zf.multiplyMatrices(kt.projectionMatrix,kt.matrixWorldInverse),et._frustum.setFromProjectionMatrix(zf,kt.coordinateSystem,kt.reversedDepth)}if(et.map.isWebGLCubeRenderTarget)i.setRenderTarget(et.map,ft),i.clear();else{ft===0&&(i.setRenderTarget(et.map),i.clear());let kt=et.getViewport(ft);a.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),Z.viewport(a)}n=et.getFrustum(ft),S(D,y,Kt,at,this.type)}et.isPointLightShadow!==!0&&this.type===vr&&R(et,y),et.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(A,z,H)};function R(T,D){let y=t.update(b);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new kn(s.x,s.y,{format:ms,type:vi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(D,null,y,u,b,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(D,null,y,m,b,null)}function P(T,D,y,A){let z=null,H=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(H!==void 0)z=H;else if(z=y.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let Z=z.uuid,J=D.uuid,V=c[Z];V===void 0&&(V={},c[Z]=V);let q=V[J];q===void 0&&(q=z.clone(),V[J]=q,D.addEventListener("dispose",M)),z=q}if(z.visible=D.visible,z.wireframe=D.wireframe,A===vr?z.side=D.shadowSide!==null?D.shadowSide:D.side:z.side=D.shadowSide!==null?D.shadowSide:p[D.side],z.alphaMap=D.alphaMap,z.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,z.map=D.map,z.clipShadows=D.clipShadows,z.clippingPlanes=D.clippingPlanes,z.clipIntersection=D.clipIntersection,z.displacementMap=D.displacementMap,z.displacementScale=D.displacementScale,z.displacementBias=D.displacementBias,z.wireframeLinewidth=D.wireframeLinewidth,z.linewidth=D.linewidth,y.isPointLight===!0&&z.isMeshDistanceMaterial===!0){let Z=i.properties.get(z);Z.light=y}return z}function S(T,D,y,A,z){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&z===vr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let J=t.update(T),V=T.material;if(Array.isArray(V)){let q=J.groups;for(let at=0,et=q.length;at<et;at++){let gt=q[at],nt=V[gt.materialIndex];if(nt&&nt.visible){let ot=P(T,nt,A,z);T.onBeforeShadow(i,T,D,y,J,ot,gt),i.renderBufferDirect(y,null,J,ot,T,gt),T.onAfterShadow(i,T,D,y,J,ot,gt)}}}else if(V.visible){let q=P(T,V,A,z);T.onBeforeShadow(i,T,D,y,J,q,null),i.renderBufferDirect(y,null,J,q,T,null),T.onAfterShadow(i,T,D,y,J,q,null)}}let Z=T.children;for(let J=0,V=Z.length;J<V;J++)S(Z[J],D,y,A,z)}function M(T){T.target.removeEventListener("dispose",M);for(let y in c){let A=c[y],z=T.target.uuid;z in A&&(A[z].dispose(),delete A[z])}}}function zv(i,t){function e(){let k=!1,Pt=new Be,ct=null,Dt=new Be(0,0,0,0);return{setMask:function(Ot){ct!==Ot&&!k&&(i.colorMask(Ot,Ot,Ot,Ot),ct=Ot)},setLocked:function(Ot){k=Ot},setClear:function(Ot,pt,Qt,$t,ze){ze===!0&&(Ot*=$t,pt*=$t,Qt*=$t),Pt.set(Ot,pt,Qt,$t),Dt.equals(Pt)===!1&&(i.clearColor(Ot,pt,Qt,$t),Dt.copy(Pt))},reset:function(){k=!1,ct=null,Dt.set(-1,0,0,0)}}}function n(){let k=!1,Pt=!1,ct=null,Dt=null,Ot=null;return{setReversed:function(pt){if(Pt!==pt){let Qt=t.get("EXT_clip_control");pt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),Pt=pt;let $t=Ot;Ot=null,this.setClear($t)}},getReversed:function(){return Pt},setTest:function(pt){pt?lt(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(pt){ct!==pt&&!k&&(i.depthMask(pt),ct=pt)},setFunc:function(pt){if(Pt&&(pt=uf[pt]),Dt!==pt){switch(pt){case To:i.depthFunc(i.NEVER);break;case Ao:i.depthFunc(i.ALWAYS);break;case Co:i.depthFunc(i.LESS);break;case ar:i.depthFunc(i.LEQUAL);break;case Ro:i.depthFunc(i.EQUAL);break;case Io:i.depthFunc(i.GEQUAL);break;case Po:i.depthFunc(i.GREATER);break;case Lo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Dt=pt}},setLocked:function(pt){k=pt},setClear:function(pt){Ot!==pt&&(Ot=pt,Pt&&(pt=1-pt),i.clearDepth(pt))},reset:function(){k=!1,ct=null,Dt=null,Ot=null,Pt=!1}}}function s(){let k=!1,Pt=null,ct=null,Dt=null,Ot=null,pt=null,Qt=null,$t=null,ze=null;return{setTest:function(Ie){k||(Ie?lt(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(Ie){Pt!==Ie&&!k&&(i.stencilMask(Ie),Pt=Ie)},setFunc:function(Ie,Pn,Gn){(ct!==Ie||Dt!==Pn||Ot!==Gn)&&(i.stencilFunc(Ie,Pn,Gn),ct=Ie,Dt=Pn,Ot=Gn)},setOp:function(Ie,Pn,Gn){(pt!==Ie||Qt!==Pn||$t!==Gn)&&(i.stencilOp(Ie,Pn,Gn),pt=Ie,Qt=Pn,$t=Gn)},setLocked:function(Ie){k=Ie},setClear:function(Ie){ze!==Ie&&(i.clearStencil(Ie),ze=Ie)},reset:function(){k=!1,Pt=null,ct=null,Dt=null,Ot=null,pt=null,Qt=null,$t=null,ze=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},p={},u={},m=new WeakMap,g=[],b=null,f=!1,d=null,R=null,P=null,S=null,M=null,T=null,D=null,y=new oe(0,0,0),A=0,z=!1,H=null,Z=null,J=null,V=null,q=null,at=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),et=!1,gt=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(gt=parseFloat(/^WebGL (\d)/.exec(nt)[1]),et=gt>=1):nt.indexOf("OpenGL ES")!==-1&&(gt=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),et=gt>=2);let ot=null,ft={},Kt=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),Ae=new Be().fromArray(Kt),ve=new Be().fromArray(kt);function be(k,Pt,ct,Dt){let Ot=new Uint8Array(4),pt=i.createTexture();i.bindTexture(k,pt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<ct;Qt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,Ot):i.texImage2D(Pt+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ot);return pt}let j={};j[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(ar),xt(!1),St(yh),lt(i.CULL_FACE),mt(Li);function lt(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function Ct(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function ne(k,Pt){return u[k]!==Pt?(i.bindFramebuffer(k,Pt),u[k]=Pt,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Pt),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Tt(k,Pt){let ct=g,Dt=!1;if(k){ct=m.get(Pt),ct===void 0&&(ct=[],m.set(Pt,ct));let Ot=k.textures;if(ct.length!==Ot.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Qt=Ot.length;pt<Qt;pt++)ct[pt]=i.COLOR_ATTACHMENT0+pt;ct.length=Ot.length,Dt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,Dt=!0);Dt&&i.drawBuffers(ct)}function Wt(k){return b!==k?(i.useProgram(k),b=k,!0):!1}let Ce={[Ps]:i.FUNC_ADD,[Ld]:i.FUNC_SUBTRACT,[Dd]:i.FUNC_REVERSE_SUBTRACT};Ce[Nd]=i.MIN,Ce[Ud]=i.MAX;let L={[Fd]:i.ZERO,[Od]:i.ONE,[Bd]:i.SRC_COLOR,[wh]:i.SRC_ALPHA,[Wd]:i.SRC_ALPHA_SATURATE,[Hd]:i.DST_COLOR,[kd]:i.DST_ALPHA,[zd]:i.ONE_MINUS_SRC_COLOR,[Eh]:i.ONE_MINUS_SRC_ALPHA,[Gd]:i.ONE_MINUS_DST_COLOR,[Vd]:i.ONE_MINUS_DST_ALPHA,[Xd]:i.CONSTANT_COLOR,[$d]:i.ONE_MINUS_CONSTANT_COLOR,[qd]:i.CONSTANT_ALPHA,[Yd]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(k,Pt,ct,Dt,Ot,pt,Qt,$t,ze,Ie){if(k===Li){f===!0&&(Ct(i.BLEND),f=!1);return}if(f===!1&&(lt(i.BLEND),f=!0),k!==Pd){if(k!==d||Ie!==z){if((R!==Ps||M!==Ps)&&(i.blendEquation(i.FUNC_ADD),R=Ps,M=Ps),Ie)switch(k){case yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sh:i.blendFunc(i.ONE,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ae("WebGLState: Invalid blending: ",k);break}else switch(k){case yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Mh:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bh:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",k);break}P=null,S=null,T=null,D=null,y.set(0,0,0),A=0,d=k,z=Ie}return}Ot=Ot||Pt,pt=pt||ct,Qt=Qt||Dt,(Pt!==R||Ot!==M)&&(i.blendEquationSeparate(Ce[Pt],Ce[Ot]),R=Pt,M=Ot),(ct!==P||Dt!==S||pt!==T||Qt!==D)&&(i.blendFuncSeparate(L[ct],L[Dt],L[pt],L[Qt]),P=ct,S=Dt,T=pt,D=Qt),($t.equals(y)===!1||ze!==A)&&(i.blendColor($t.r,$t.g,$t.b,ze),y.copy($t),A=ze),d=k,z=!1}function vt(k,Pt){k.side===Pi?Ct(i.CULL_FACE):lt(i.CULL_FACE);let ct=k.side===Un;Pt&&(ct=!ct),xt(ct),k.blending===yr&&k.transparent===!1?mt(Li):mt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let Dt=k.stencilWrite;o.setTest(Dt),Dt&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),te(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(k){H!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),H=k)}function St(k){k!==Cd?(lt(i.CULL_FACE),k!==Z&&(k===yh?i.cullFace(i.BACK):k===Rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),Z=k}function ee(k){k!==J&&(et&&i.lineWidth(k),J=k)}function te(k,Pt,ct){k?(lt(i.POLYGON_OFFSET_FILL),(V!==Pt||q!==ct)&&(V=Pt,q=ct,a.getReversed()&&(Pt=-Pt),i.polygonOffset(Pt,ct))):Ct(i.POLYGON_OFFSET_FILL)}function Vt(k){k?lt(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function le(k){k===void 0&&(k=i.TEXTURE0+at-1),ot!==k&&(i.activeTexture(k),ot=k)}function N(k,Pt,ct){ct===void 0&&(ot===null?ct=i.TEXTURE0+at-1:ct=ot);let Dt=ft[ct];Dt===void 0&&(Dt={type:void 0,texture:void 0},ft[ct]=Dt),(Dt.type!==k||Dt.texture!==Pt)&&(ot!==ct&&(i.activeTexture(ct),ot=ct),i.bindTexture(k,Pt||j[k]),Dt.type=k,Dt.texture=Pt)}function Re(){let k=ft[ot];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function _e(){try{i.compressedTexImage2D(...arguments)}catch(k){ae("WebGLState:",k)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(k){ae("WebGLState:",k)}}function _(){try{i.texSubImage2D(...arguments)}catch(k){ae("WebGLState:",k)}}function W(){try{i.texSubImage3D(...arguments)}catch(k){ae("WebGLState:",k)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(k){ae("WebGLState:",k)}}function tt(){try{i.compressedTexSubImage3D(...arguments)}catch(k){ae("WebGLState:",k)}}function yt(){try{i.texStorage2D(...arguments)}catch(k){ae("WebGLState:",k)}}function wt(){try{i.texStorage3D(...arguments)}catch(k){ae("WebGLState:",k)}}function rt(){try{i.texImage2D(...arguments)}catch(k){ae("WebGLState:",k)}}function dt(){try{i.texImage3D(...arguments)}catch(k){ae("WebGLState:",k)}}function Rt(k){return p[k]!==void 0?p[k]:i.getParameter(k)}function jt(k,Pt){p[k]!==Pt&&(i.pixelStorei(k,Pt),p[k]=Pt)}function bt(k){Ae.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Ae.copy(k))}function Mt(k){ve.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),ve.copy(k))}function Gt(k,Pt){let ct=c.get(Pt);ct===void 0&&(ct=new WeakMap,c.set(Pt,ct));let Dt=ct.get(k);Dt===void 0&&(Dt=i.getUniformBlockIndex(Pt,k.name),ct.set(k,Dt))}function ie(k,Pt){let Dt=c.get(Pt).get(k);l.get(Pt)!==Dt&&(i.uniformBlockBinding(Pt,Dt,k.__bindingPointIndex),l.set(Pt,Dt))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},ot=null,ft={},u={},m=new WeakMap,g=[],b=null,f=!1,d=null,R=null,P=null,S=null,M=null,T=null,D=null,y=new oe(0,0,0),A=0,z=!1,H=null,Z=null,J=null,V=null,q=null,Ae.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Ct,bindFramebuffer:ne,drawBuffers:Tt,useProgram:Wt,setBlending:mt,setMaterial:vt,setFlipSided:xt,setCullFace:St,setLineWidth:ee,setPolygonOffset:te,setScissorTest:Vt,activeTexture:le,bindTexture:N,unbindTexture:Re,compressedTexImage2D:_e,compressedTexImage3D:E,texImage2D:rt,texImage3D:dt,pixelStorei:jt,getParameter:Rt,updateUBOMapping:Gt,uniformBlockBinding:ie,texStorage2D:yt,texStorage3D:wt,texSubImage2D:_,texSubImage3D:W,compressedTexSubImage2D:Y,compressedTexSubImage3D:tt,scissor:bt,viewport:Mt,reset:ce}}function kv(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,h=new WeakMap,p=new Set,u,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,_){return g?new OffscreenCanvas(E,_):Kr("canvas")}function f(E,_,W){let Y=1,tt=_e(E);if((tt.width>W||tt.height>W)&&(Y=W/Math.max(tt.width,tt.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let yt=Math.floor(Y*tt.width),wt=Math.floor(Y*tt.height);u===void 0&&(u=b(yt,wt));let rt=_?b(yt,wt):u;return rt.width=yt,rt.height=wt,rt.getContext("2d").drawImage(E,0,0,yt,wt),re("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+yt+"x"+wt+")."),rt}else return"data"in E&&re("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),E;return E}function d(E){return E.generateMipmaps}function R(E){i.generateMipmap(E)}function P(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,_,W,Y,tt,yt=!1){if(E!==null){if(i[E]!==void 0)return i[E];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let wt;Y&&(wt=t.get("EXT_texture_norm16"),wt||re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=_;if(_===i.RED&&(W===i.FLOAT&&(rt=i.R32F),W===i.HALF_FLOAT&&(rt=i.R16F),W===i.UNSIGNED_BYTE&&(rt=i.R8),W===i.UNSIGNED_SHORT&&wt&&(rt=wt.R16_EXT),W===i.SHORT&&wt&&(rt=wt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(rt=i.R8UI),W===i.UNSIGNED_SHORT&&(rt=i.R16UI),W===i.UNSIGNED_INT&&(rt=i.R32UI),W===i.BYTE&&(rt=i.R8I),W===i.SHORT&&(rt=i.R16I),W===i.INT&&(rt=i.R32I)),_===i.RG&&(W===i.FLOAT&&(rt=i.RG32F),W===i.HALF_FLOAT&&(rt=i.RG16F),W===i.UNSIGNED_BYTE&&(rt=i.RG8),W===i.UNSIGNED_SHORT&&wt&&(rt=wt.RG16_EXT),W===i.SHORT&&wt&&(rt=wt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(rt=i.RG8UI),W===i.UNSIGNED_SHORT&&(rt=i.RG16UI),W===i.UNSIGNED_INT&&(rt=i.RG32UI),W===i.BYTE&&(rt=i.RG8I),W===i.SHORT&&(rt=i.RG16I),W===i.INT&&(rt=i.RG32I)),_===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),W===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),W===i.UNSIGNED_INT&&(rt=i.RGB32UI),W===i.BYTE&&(rt=i.RGB8I),W===i.SHORT&&(rt=i.RGB16I),W===i.INT&&(rt=i.RGB32I)),_===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),W===i.UNSIGNED_INT&&(rt=i.RGBA32UI),W===i.BYTE&&(rt=i.RGBA8I),W===i.SHORT&&(rt=i.RGBA16I),W===i.INT&&(rt=i.RGBA32I)),_===i.RGB&&(W===i.UNSIGNED_SHORT&&wt&&(rt=wt.RGB16_EXT),W===i.SHORT&&wt&&(rt=wt.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),_===i.RGBA){let dt=yt?Jr:Te.getTransfer(tt);W===i.FLOAT&&(rt=i.RGBA32F),W===i.HALF_FLOAT&&(rt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(rt=dt===Oe?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&wt&&(rt=wt.RGBA16_EXT),W===i.SHORT&&wt&&(rt=wt.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function M(E,_){let W;return E?_===null||_===_i||_===Mr?W=i.DEPTH24_STENCIL8:_===xi?W=i.DEPTH32F_STENCIL8:_===Sr&&(W=i.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===_i||_===Mr?W=i.DEPTH_COMPONENT24:_===xi?W=i.DEPTH_COMPONENT32F:_===Sr&&(W=i.DEPTH_COMPONENT16),W}function T(E,_){return d(E)===!0||E.isFramebufferTexture&&E.minFilter!==gn&&E.minFilter!==vn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function D(E){let _=E.target;_.removeEventListener("dispose",D),A(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&p.delete(_)}function y(E){let _=E.target;_.removeEventListener("dispose",y),H(_)}function A(E){let _=n.get(E);if(_.__webglInit===void 0)return;let W=E.source,Y=m.get(W);if(Y){let tt=Y[_.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&z(E),Object.keys(Y).length===0&&m.delete(W)}n.remove(E)}function z(E){let _=n.get(E);i.deleteTexture(_.__webglTexture);let W=E.source,Y=m.get(W);delete Y[_.__cacheKey],a.memory.textures--}function H(E){let _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let tt=0;tt<_.__webglFramebuffer[Y].length;tt++)i.deleteFramebuffer(_.__webglFramebuffer[Y][tt]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let W=E.textures;for(let Y=0,tt=W.length;Y<tt;Y++){let yt=n.get(W[Y]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(W[Y])}n.remove(E)}let Z=0;function J(){Z=0}function V(){return Z}function q(E){Z=E}function at(){let E=Z;return E>=s.maxTextures&&re("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,E}function et(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function gt(E,_){let W=n.get(E);if(E.isVideoTexture&&N(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&W.__version!==E.version){let Y=E.image;if(Y===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(W,E,_);return}}else E.isExternalTexture&&(W.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+_)}function nt(E,_){let W=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){Ct(W,E,_);return}else E.isExternalTexture&&(W.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+_)}function ot(E,_){let W=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){Ct(W,E,_);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+_)}function ft(E,_){let W=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&W.__version!==E.version){ne(W,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+_)}let Kt={[Do]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[No]:i.MIRRORED_REPEAT},kt={[gn]:i.NEAREST,[Kd]:i.NEAREST_MIPMAP_NEAREST,[Ca]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[_l]:i.LINEAR_MIPMAP_NEAREST,[fs]:i.LINEAR_MIPMAP_LINEAR},Ae={[ef]:i.NEVER,[of]:i.ALWAYS,[nf]:i.LESS,[ec]:i.LEQUAL,[sf]:i.EQUAL,[nc]:i.GEQUAL,[rf]:i.GREATER,[af]:i.NOTEQUAL};function ve(E,_){if(_.type===xi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===vn||_.magFilter===_l||_.magFilter===Ca||_.magFilter===fs||_.minFilter===vn||_.minFilter===_l||_.minFilter===Ca||_.minFilter===fs)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Kt[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Kt[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Kt[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,kt[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,kt[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ae[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===gn||_.minFilter!==Ca&&_.minFilter!==fs||_.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function be(E,_){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",D));let Y=_.source,tt=m.get(Y);tt===void 0&&(tt={},m.set(Y,tt));let yt=et(_);if(yt!==E.__cacheKey){tt[yt]===void 0&&(tt[yt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),tt[yt].usedTimes++;let wt=tt[E.__cacheKey];wt!==void 0&&(tt[E.__cacheKey].usedTimes--,wt.usedTimes===0&&z(_)),E.__cacheKey=yt,E.__webglTexture=tt[yt].texture}return W}function j(E,_,W){return Math.floor(Math.floor(E/W)/_)}function lt(E,_,W,Y){let yt=E.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,W,Y,_.data);else{yt.sort((jt,bt)=>jt.start-bt.start);let wt=0;for(let jt=1;jt<yt.length;jt++){let bt=yt[wt],Mt=yt[jt],Gt=bt.start+bt.count,ie=j(Mt.start,_.width,4),ce=j(bt.start,_.width,4);Mt.start<=Gt+1&&ie===ce&&j(Mt.start+Mt.count-1,_.width,4)===ie?bt.count=Math.max(bt.count,Mt.start+Mt.count-bt.start):(++wt,yt[wt]=Mt)}yt.length=wt+1;let rt=e.getParameter(i.UNPACK_ROW_LENGTH),dt=e.getParameter(i.UNPACK_SKIP_PIXELS),Rt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let jt=0,bt=yt.length;jt<bt;jt++){let Mt=yt[jt],Gt=Math.floor(Mt.start/4),ie=Math.ceil(Mt.count/4),ce=Gt%_.width,k=Math.floor(Gt/_.width),Pt=ie,ct=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),e.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,ce,k,Pt,ct,W,Y,_.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,rt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function Ct(E,_,W){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);let tt=be(E,_),yt=_.source;e.bindTexture(Y,E.__webglTexture,i.TEXTURE0+W);let wt=n.get(yt);if(yt.version!==wt.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ct=Te.getPrimaries(Te.workingColorSpace),Dt=_.colorSpace===Yi?null:Te.getPrimaries(_.colorSpace),Ot=_.colorSpace===Yi||ct===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let dt=f(_.image,!1,s.maxTextureSize);dt=Re(_,dt);let Rt=r.convert(_.format,_.colorSpace),jt=r.convert(_.type),bt=S(_.internalFormat,Rt,jt,_.normalized,_.colorSpace,_.isVideoTexture);ve(Y,_);let Mt,Gt=_.mipmaps,ie=_.isVideoTexture!==!0,ce=wt.__version===void 0||tt===!0,k=yt.dataReady,Pt=T(_,dt);if(_.isDepthTexture)bt=M(_.format===ps,_.type),ce&&(ie?e.texStorage2D(i.TEXTURE_2D,1,bt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,bt,dt.width,dt.height,0,Rt,jt,null));else if(_.isDataTexture)if(Gt.length>0){ie&&ce&&e.texStorage2D(i.TEXTURE_2D,Pt,bt,Gt[0].width,Gt[0].height);for(let ct=0,Dt=Gt.length;ct<Dt;ct++)Mt=Gt[ct],ie?k&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Mt.width,Mt.height,Rt,jt,Mt.data):e.texImage2D(i.TEXTURE_2D,ct,bt,Mt.width,Mt.height,0,Rt,jt,Mt.data);_.generateMipmaps=!1}else ie?(ce&&e.texStorage2D(i.TEXTURE_2D,Pt,bt,dt.width,dt.height),k&&lt(_,dt,Rt,jt)):e.texImage2D(i.TEXTURE_2D,0,bt,dt.width,dt.height,0,Rt,jt,dt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ie&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,bt,Gt[0].width,Gt[0].height,dt.depth);for(let ct=0,Dt=Gt.length;ct<Dt;ct++)if(Mt=Gt[ct],_.format!==ri)if(Rt!==null)if(ie){if(k)if(_.layerUpdates.size>0){let Ot=Zh(Mt.width,Mt.height,_.format,_.type);for(let pt of _.layerUpdates){let Qt=Mt.data.subarray(pt*Ot/Mt.data.BYTES_PER_ELEMENT,(pt+1)*Ot/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,pt,Mt.width,Mt.height,1,Rt,Qt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Mt.width,Mt.height,dt.depth,Rt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,bt,Mt.width,Mt.height,dt.depth,0,Mt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Mt.width,Mt.height,dt.depth,Rt,jt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,bt,Mt.width,Mt.height,dt.depth,0,Rt,jt,Mt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{ie&&ce&&e.texStorage2D(i.TEXTURE_2D,Pt,bt,Gt[0].width,Gt[0].height);for(let ct=0,Dt=Gt.length;ct<Dt;ct++)Mt=Gt[ct],_.format!==ri?Rt!==null?ie?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,Mt.width,Mt.height,Rt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,bt,Mt.width,Mt.height,0,Mt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?k&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Mt.width,Mt.height,Rt,jt,Mt.data):e.texImage2D(i.TEXTURE_2D,ct,bt,Mt.width,Mt.height,0,Rt,jt,Mt.data)}else if(_.isDataArrayTexture)if(ie){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,bt,dt.width,dt.height,dt.depth),k)if(_.layerUpdates.size>0){let ct=Zh(dt.width,dt.height,_.format,_.type);for(let Dt of _.layerUpdates){let Ot=dt.data.subarray(Dt*ct/dt.data.BYTES_PER_ELEMENT,(Dt+1)*ct/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Dt,dt.width,dt.height,1,Rt,jt,Ot)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Rt,jt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,dt.width,dt.height,dt.depth,0,Rt,jt,dt.data);else if(_.isData3DTexture)ie?(ce&&e.texStorage3D(i.TEXTURE_3D,Pt,bt,dt.width,dt.height,dt.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Rt,jt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,bt,dt.width,dt.height,dt.depth,0,Rt,jt,dt.data);else if(_.isFramebufferTexture){if(ce)if(ie)e.texStorage2D(i.TEXTURE_2D,Pt,bt,dt.width,dt.height);else{let ct=dt.width,Dt=dt.height;for(let Ot=0;Ot<Pt;Ot++)e.texImage2D(i.TEXTURE_2D,Ot,bt,ct,Dt,0,Rt,jt,null),ct>>=1,Dt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let ct=i.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),dt.parentNode!==ct){ct.appendChild(dt),p.add(_),ct.onpaint=Dt=>{let Ot=Dt.changedElements;for(let pt of p)Ot.includes(pt.image)&&(pt.needsUpdate=!0)},ct.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,dt);else{let Ot=i.RGBA,pt=i.RGBA,Qt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ot,pt,Qt,dt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Gt.length>0){if(ie&&ce){let ct=_e(Gt[0]);e.texStorage2D(i.TEXTURE_2D,Pt,bt,ct.width,ct.height)}for(let ct=0,Dt=Gt.length;ct<Dt;ct++)Mt=Gt[ct],ie?k&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Rt,jt,Mt):e.texImage2D(i.TEXTURE_2D,ct,bt,Rt,jt,Mt);_.generateMipmaps=!1}else if(ie){if(ce){let ct=_e(dt);e.texStorage2D(i.TEXTURE_2D,Pt,bt,ct.width,ct.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,jt,dt)}else e.texImage2D(i.TEXTURE_2D,0,bt,Rt,jt,dt);d(_)&&R(Y),wt.__version=yt.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ne(E,_,W){if(_.image.length!==6)return;let Y=be(E,_),tt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+W);let yt=n.get(tt);if(tt.version!==yt.__version||Y===!0){e.activeTexture(i.TEXTURE0+W);let wt=Te.getPrimaries(Te.workingColorSpace),rt=_.colorSpace===Yi?null:Te.getPrimaries(_.colorSpace),dt=_.colorSpace===Yi||wt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Rt=_.isCompressedTexture||_.image[0].isCompressedTexture,jt=_.image[0]&&_.image[0].isDataTexture,bt=[];for(let pt=0;pt<6;pt++)!Rt&&!jt?bt[pt]=f(_.image[pt],!0,s.maxCubemapSize):bt[pt]=jt?_.image[pt].image:_.image[pt],bt[pt]=Re(_,bt[pt]);let Mt=bt[0],Gt=r.convert(_.format,_.colorSpace),ie=r.convert(_.type),ce=S(_.internalFormat,Gt,ie,_.normalized,_.colorSpace),k=_.isVideoTexture!==!0,Pt=yt.__version===void 0||Y===!0,ct=tt.dataReady,Dt=T(_,Mt);ve(i.TEXTURE_CUBE_MAP,_);let Ot;if(Rt){k&&Pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,ce,Mt.width,Mt.height);for(let pt=0;pt<6;pt++){Ot=bt[pt].mipmaps;for(let Qt=0;Qt<Ot.length;Qt++){let $t=Ot[Qt];_.format!==ri?Gt!==null?k?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt,0,0,$t.width,$t.height,Gt,$t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt,ce,$t.width,$t.height,0,$t.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt,0,0,$t.width,$t.height,Gt,ie,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt,ce,$t.width,$t.height,0,Gt,ie,$t.data)}}}else{if(Ot=_.mipmaps,k&&Pt){Ot.length>0&&Dt++;let pt=_e(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,ce,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(jt){k?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,bt[pt].width,bt[pt].height,Gt,ie,bt[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ce,bt[pt].width,bt[pt].height,0,Gt,ie,bt[pt].data);for(let Qt=0;Qt<Ot.length;Qt++){let ze=Ot[Qt].image[pt].image;k?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt+1,0,0,ze.width,ze.height,Gt,ie,ze.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt+1,ce,ze.width,ze.height,0,Gt,ie,ze.data)}}else{k?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Gt,ie,bt[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ce,Gt,ie,bt[pt]);for(let Qt=0;Qt<Ot.length;Qt++){let $t=Ot[Qt];k?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt+1,0,0,Gt,ie,$t.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt+1,ce,Gt,ie,$t.image[pt])}}}d(_)&&R(i.TEXTURE_CUBE_MAP),yt.__version=tt.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Tt(E,_,W,Y,tt,yt){let wt=r.convert(W.format,W.colorSpace),rt=r.convert(W.type),dt=S(W.internalFormat,wt,rt,W.normalized,W.colorSpace),Rt=n.get(_),jt=n.get(W);if(jt.__renderTarget=_,!Rt.__hasExternalTextures){let bt=Math.max(1,_.width>>yt),Mt=Math.max(1,_.height>>yt);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,yt,dt,bt,Mt,_.depth,0,wt,rt,null):e.texImage2D(tt,yt,dt,bt,Mt,0,wt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),le(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,tt,jt.__webglTexture,0,Vt(_)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,tt,jt.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(E,_,W){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){let Y=_.depthTexture,tt=Y&&Y.isDepthTexture?Y.type:null,yt=M(_.stencilBuffer,tt),wt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;le(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt(_),yt,_.width,_.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt(_),yt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,yt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,E)}else{let Y=_.textures;for(let tt=0;tt<Y.length;tt++){let yt=Y[tt],wt=r.convert(yt.format,yt.colorSpace),rt=r.convert(yt.type),dt=S(yt.internalFormat,wt,rt,yt.normalized,yt.colorSpace);le(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt(_),dt,_.width,_.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt(_),dt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,dt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(E,_,W){let Y=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(_.depthTexture);if(tt.__renderTarget=_,(!tt.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,_.depthTexture.addEventListener("dispose",D)),tt.__webglTexture===void 0){tt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),ve(i.TEXTURE_CUBE_MAP,_.depthTexture);let Rt=r.convert(_.depthTexture.format),jt=r.convert(_.depthTexture.type),bt;_.depthTexture.format===Ai?bt=i.DEPTH_COMPONENT24:_.depthTexture.format===ps&&(bt=i.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,bt,_.width,_.height,0,Rt,jt,null)}}else gt(_.depthTexture,0);let yt=tt.__webglTexture,wt=Vt(_),rt=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,dt=_.depthTexture.format===ps?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ai)le(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,rt,yt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,dt,rt,yt,0);else if(_.depthTexture.format===ps)le(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,rt,yt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,dt,rt,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function L(E){let _=n.get(E),W=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let Y=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let tt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",tt)};Y.addEventListener("dispose",tt),_.__depthDisposeCallback=tt}_.__boundDepthTexture=Y}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(W)for(let Y=0;Y<6;Y++)Ce(_.__webglFramebuffer[Y],E,Y);else{let Y=E.texture.mipmaps;Y&&Y.length>0?Ce(_.__webglFramebuffer[0],E,0):Ce(_.__webglFramebuffer,E,0)}else if(W){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),Wt(_.__webglDepthbuffer[Y],E,!1);else{let tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,yt)}}else{let Y=E.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Wt(_.__webglDepthbuffer,E,!1);else{let tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,yt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(E,_,W){let Y=n.get(E);_!==void 0&&Tt(Y.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&L(E)}function vt(E){let _=E.texture,W=n.get(E),Y=n.get(_);E.addEventListener("dispose",y);let tt=E.textures,yt=E.isWebGLCubeRenderTarget===!0,wt=tt.length>1;if(wt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),yt){W.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(_.mipmaps&&_.mipmaps.length>0){W.__webglFramebuffer[rt]=[];for(let dt=0;dt<_.mipmaps.length;dt++)W.__webglFramebuffer[rt][dt]=i.createFramebuffer()}else W.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){W.__webglFramebuffer=[];for(let rt=0;rt<_.mipmaps.length;rt++)W.__webglFramebuffer[rt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(wt)for(let rt=0,dt=tt.length;rt<dt;rt++){let Rt=n.get(tt[rt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&le(E)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let rt=0;rt<tt.length;rt++){let dt=tt[rt];W.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[rt]);let Rt=r.convert(dt.format,dt.colorSpace),jt=r.convert(dt.type),bt=S(dt.internalFormat,Rt,jt,dt.normalized,dt.colorSpace,E.isXRRenderTarget===!0),Mt=Vt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,bt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,W.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Wt(W.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ve(i.TEXTURE_CUBE_MAP,_);for(let rt=0;rt<6;rt++)if(_.mipmaps&&_.mipmaps.length>0)for(let dt=0;dt<_.mipmaps.length;dt++)Tt(W.__webglFramebuffer[rt][dt],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt);else Tt(W.__webglFramebuffer[rt],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);d(_)&&R(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let rt=0,dt=tt.length;rt<dt;rt++){let Rt=tt[rt],jt=n.get(Rt),bt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(bt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,jt.__webglTexture),ve(bt,Rt),Tt(W.__webglFramebuffer,E,Rt,i.COLOR_ATTACHMENT0+rt,bt,0),d(Rt)&&R(bt)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(rt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),ve(rt,_),_.mipmaps&&_.mipmaps.length>0)for(let dt=0;dt<_.mipmaps.length;dt++)Tt(W.__webglFramebuffer[dt],E,_,i.COLOR_ATTACHMENT0,rt,dt);else Tt(W.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,rt,0);d(_)&&R(rt),e.unbindTexture()}E.depthBuffer&&L(E)}function xt(E){let _=E.textures;for(let W=0,Y=_.length;W<Y;W++){let tt=_[W];if(d(tt)){let yt=P(E),wt=n.get(tt).__webglTexture;e.bindTexture(yt,wt),R(yt),e.unbindTexture()}}}let St=[],ee=[];function te(E){if(E.samples>0){if(le(E)===!1){let _=E.textures,W=E.width,Y=E.height,tt=i.COLOR_BUFFER_BIT,yt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(E),rt=_.length>1;if(rt)for(let Rt=0;Rt<_.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let dt=E.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Rt=0;Rt<_.length;Rt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Rt]);let jt=n.get(_[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,W,Y,0,0,W,Y,tt,i.NEAREST),l===!0&&(St.length=0,ee.length=0,St.push(i.COLOR_ATTACHMENT0+Rt),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(St.push(yt),ee.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,St))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let Rt=0;Rt<_.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Rt]);let jt=n.get(_[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Vt(E){return Math.min(s.maxSamples,E.samples)}function le(E){let _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(E){let _=a.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Re(E,_){let W=E.colorSpace,Y=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||W!==Zr&&W!==Yi&&(Te.getTransfer(W)===Oe?(Y!==ri||tt!==Vn)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",W)),_}function _e(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=at,this.resetTextureUnits=J,this.getTextureUnits=V,this.setTextureUnits=q,this.setTexture2D=gt,this.setTexture2DArray=nt,this.setTexture3D=ot,this.setTextureCube=ft,this.rebindTextures=mt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=le,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Vv(i,t){function e(n,s=Yi){let r,a=Te.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nh)return i.BYTE;if(n===Uh)return i.SHORT;if(n===Sr)return i.UNSIGNED_SHORT;if(n===xl)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===xi)return i.FLOAT;if(n===vi)return i.HALF_FLOAT;if(n===Bh)return i.ALPHA;if(n===zh)return i.RGB;if(n===ri)return i.RGBA;if(n===Ai)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===kh)return i.RED;if(n===Sl)return i.RED_INTEGER;if(n===ms)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===Ra||n===Ia||n===Pa||n===La)if(a===Oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wl||n===El||n===Tl||n===Al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cl||n===Rl||n===Il||n===Pl||n===Ll||n===Da||n===Dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cl||n===Rl)return a===Oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Il)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pl)return r.COMPRESSED_R11_EAC;if(n===Ll)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Da)return r.COMPRESSED_RG11_EAC;if(n===Dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Vl||n===Hl||n===Gl||n===Wl||n===Xl||n===$l||n===ql)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ul)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ol)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$l)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ql)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yl||n===Zl||n===Jl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yl)return a===Oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kl||n===jl||n===Na||n===Ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gv=`
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

}`,cu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new aa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xn({vertexShader:Hv,fragmentShader:Gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Cn(new ma(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hu=class extends Ci{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,m=null,g=null,b=typeof XRWebGLBinding<"u",f=new cu,d={},R=e.getContextAttributes(),P=null,S=null,M=[],T=[],D=new It,y=null,A=null,z=new An;z.viewport=new Be;let H=new An;H.viewport=new Be;let Z=[z,H],J=new fl,V=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let lt=M[j];return lt===void 0&&(lt=new dr,M[j]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(j){let lt=M[j];return lt===void 0&&(lt=new dr,M[j]=lt),lt.getGripSpace()},this.getHand=function(j){let lt=M[j];return lt===void 0&&(lt=new dr,M[j]=lt),lt.getHandSpace()};function at(j){let lt=T.indexOf(j.inputSource);if(lt===-1)return;let Ct=M[lt];Ct!==void 0&&(Ct.update(j.inputSource,j.frame,c||a),Ct.dispatchEvent({type:j.type,data:j.inputSource}))}function et(){s.removeEventListener("select",at),s.removeEventListener("selectstart",at),s.removeEventListener("selectend",at),s.removeEventListener("squeeze",at),s.removeEventListener("squeezestart",at),s.removeEventListener("squeezeend",at),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",gt);for(let j=0;j<M.length;j++){let lt=T[j];lt!==null&&(T[j]=null,M[j].disconnect(lt))}V=null,q=null,f.reset();for(let j in d)delete d[j];if(t.setRenderTarget(P),m=null,u=null,p=null,s=null,S=null,be.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(D.width,D.height,!1),A!==null){let j=A.camera;j.fov=A.fov,j.zoom=A.zoom,j.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(P=t.getRenderTarget(),s.addEventListener("select",at),s.addEventListener("selectstart",at),s.addEventListener("selectend",at),s.addEventListener("squeeze",at),s.addEventListener("squeezestart",at),s.addEventListener("squeezeend",at),s.addEventListener("end",et),s.addEventListener("inputsourceschange",gt),R.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(D),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,ne=null,Tt=null;R.depth&&(Tt=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=R.stencil?ps:Ai,ne=R.stencil?Mr:_i);let Wt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Wt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new kn(u.textureWidth,u.textureHeight,{format:ri,type:Vn,depthTexture:new as(u.textureWidth,u.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ct={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Ct),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new kn(m.framebufferWidth,m.framebufferHeight,{format:ri,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function gt(j){for(let lt=0;lt<j.removed.length;lt++){let Ct=j.removed[lt],ne=T.indexOf(Ct);ne>=0&&(T[ne]=null,M[ne].disconnect(Ct))}for(let lt=0;lt<j.added.length;lt++){let Ct=j.added[lt],ne=T.indexOf(Ct);if(ne===-1){for(let Wt=0;Wt<M.length;Wt++)if(Wt>=T.length){T.push(Ct),ne=Wt;break}else if(T[Wt]===null){T[Wt]=Ct,ne=Wt;break}if(ne===-1)break}let Tt=M[ne];Tt&&Tt.connect(Ct)}}let nt=new F,ot=new F;function ft(j,lt,Ct){nt.setFromMatrixPosition(lt.matrixWorld),ot.setFromMatrixPosition(Ct.matrixWorld);let ne=nt.distanceTo(ot),Tt=lt.projectionMatrix.elements,Wt=Ct.projectionMatrix.elements,Ce=Tt[14]/(Tt[10]-1),L=Tt[14]/(Tt[10]+1),mt=(Tt[9]+1)/Tt[5],vt=(Tt[9]-1)/Tt[5],xt=(Tt[8]-1)/Tt[0],St=(Wt[8]+1)/Wt[0],ee=Ce*xt,te=Ce*St,Vt=ne/(-xt+St),le=Vt*-xt;if(lt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(le),j.translateZ(Vt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Tt[10]===-1)j.projectionMatrix.copy(lt.projectionMatrix),j.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let N=Ce+Vt,Re=L+Vt,_e=ee-le,E=te+(ne-le),_=mt*L/Re*N,W=vt*L/Re*N;j.projectionMatrix.makePerspective(_e,E,_,W,N,Re),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Kt(j,lt){lt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(lt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let lt=j.near,Ct=j.far;f.texture!==null&&(f.depthNear>0&&(lt=f.depthNear),f.depthFar>0&&(Ct=f.depthFar)),J.near=H.near=z.near=lt,J.far=H.far=z.far=Ct,(V!==J.near||q!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),V=J.near,q=J.far),J.layers.mask=j.layers.mask|6,z.layers.mask=J.layers.mask&-5,H.layers.mask=J.layers.mask&-3;let ne=j.parent,Tt=J.cameras;Kt(J,ne);for(let Wt=0;Wt<Tt.length;Wt++)Kt(Tt[Wt],ne);Tt.length===2?ft(J,z,H):J.projectionMatrix.copy(z.projectionMatrix),A===null&&j.isPerspectiveCamera&&(A={camera:j,fov:j.fov,zoom:j.zoom}),kt(j,J,ne)};function kt(j,lt,Ct){Ct===null?j.matrix.copy(lt.matrixWorld):(j.matrix.copy(Ct.matrixWorld),j.matrix.invert(),j.matrix.multiply(lt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(lt.projectionMatrix),j.projectionMatrixInverse.copy(lt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=cr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(J)},this.getCameraTexture=function(j){return d[j]};let Ae=null;function ve(j,lt){if(h=lt.getViewerPose(c||a),g=lt,h!==null){let Ct=h.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let ne=!1;Ct.length!==J.cameras.length&&(J.cameras.length=0,ne=!0);for(let L=0;L<Ct.length;L++){let mt=Ct[L],vt=null;if(m!==null)vt=m.getViewport(mt);else{let St=p.getViewSubImage(u,mt);vt=St.viewport,L===0&&(t.setRenderTargetTextures(S,St.colorTexture,St.depthStencilTexture),t.setRenderTarget(S))}let xt=Z[L];xt===void 0&&(xt=new An,xt.layers.enable(L),xt.viewport=new Be,Z[L]=xt),xt.matrix.fromArray(mt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(mt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(vt.x,vt.y,vt.width,vt.height),L===0&&(J.matrix.copy(xt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),ne===!0&&J.cameras.push(xt)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=n.getBinding();let L=p.getDepthInformation(Ct[0]);L&&L.isValid&&L.texture&&f.init(L,s.renderState)}if(Tt&&Tt.includes("camera-access")&&b){t.state.unbindTexture(),p=n.getBinding();for(let L=0;L<Ct.length;L++){let mt=Ct[L].camera;if(mt){let vt=d[mt];vt||(vt=new aa,d[mt]=vt);let xt=p.getCameraImage(mt);vt.sourceTexture=xt}}}}for(let Ct=0;Ct<M.length;Ct++){let ne=T[Ct],Tt=M[Ct];ne!==null&&Tt!==void 0&&Tt.update(ne,lt,c||a)}Ae&&Ae(j,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),g=null}let be=new kf;be.setAnimationLoop(ve),this.setAnimationLoop=function(j){Ae=j},this.dispose=function(){}}},Wv=new Ve,$f=new de;$f.set(-1,0,0,0,1,0,0,0,1);function Xv(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,$h(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,R,P,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(f,d):d.isMeshLambertMaterial?(r(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(f,d),p(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(f,d),u(f,d),d.isMeshPhysicalMaterial&&m(f,d,S)):d.isMeshMatcapMaterial?(r(f,d),g(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),b(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,R,P):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Un&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Un&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let R=t.get(d),P=R.envMap,S=R.envMapRotation;P&&(f.envMap.value=P,f.envMapRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(S)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply($f),f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,R,P){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*R,f.scale.value=P*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function p(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function u(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,R){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Un&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.retroreflectivity>0&&(f.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=R.texture,f.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function b(f,d){let R=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(R.matrixWorld),f.nearDistance.value=R.shadow.camera.near,f.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $v(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){let T=M.program;n.uniformBlockBinding(S,T)}function c(S,M){let T=s[S.id];T===void 0&&(f(S),T=h(S),s[S.id]=T,S.addEventListener("dispose",R));let D=M.program;n.updateUBOMapping(S,D);let y=t.render.frame;r[S.id]!==y&&(u(S),r[S.id]=y)}function h(S){let M=p();S.__bindingPointIndex=M;let T=i.createBuffer(),D=S.__size,y=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,D,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let M=s[S.id],T=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,A=T.length;y<A;y++){let z=T[y];if(Array.isArray(z))for(let H=0,Z=z.length;H<Z;H++)m(z[H],y,H,D);else m(z,y,0,D)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,M,T,D){if(b(S,M,T,D)===!0){let y=S.__offset,A=S.value;if(Array.isArray(A)){let z=0;for(let H=0;H<A.length;H++){let Z=A[H],J=d(Z);g(Z,S.__data,z),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,S.__data)}}function g(S,M,T){typeof S=="number"||typeof S=="boolean"?M[0]=S:S.isMatrix3?(M[0]=S.elements[0],M[1]=S.elements[1],M[2]=S.elements[2],M[3]=0,M[4]=S.elements[3],M[5]=S.elements[4],M[6]=S.elements[5],M[7]=0,M[8]=S.elements[6],M[9]=S.elements[7],M[10]=S.elements[8],M[11]=0):ArrayBuffer.isView(S)?M.set(new S.constructor(S.buffer,S.byteOffset,M.length)):S.toArray(M,T)}function b(S,M,T,D){let y=S.value,A=M+"_"+T;if(D[A]===void 0)return typeof y=="number"||typeof y=="boolean"?D[A]=y:ArrayBuffer.isView(y)?D[A]=y.slice():D[A]=y.clone(),!0;{let z=D[A];if(typeof y=="number"||typeof y=="boolean"){if(z!==y)return D[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(z.equals(y)===!1)return z.copy(y),!0}}return!1}function f(S){let M=S.uniforms,T=0,D=16;for(let A=0,z=M.length;A<z;A++){let H=Array.isArray(M[A])?M[A]:[M[A]];for(let Z=0,J=H.length;Z<J;Z++){let V=H[Z],q=Array.isArray(V.value)?V.value:[V.value];for(let at=0,et=q.length;at<et;at++){let gt=q[at],nt=d(gt),ot=T%D,ft=ot%nt.boundary,Kt=ot+ft;T+=ft,Kt!==0&&D-Kt<nt.storage&&(T+=D-Kt),V.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=nt.storage}}}let y=T%D;return y>0&&(T+=D-y),S.__size=T,S.__cache={},this}function d(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):re("WebGLRenderer: Unsupported uniform value type.",S),M}function R(S){let M=S.target;M.removeEventListener("dispose",R);let T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function P(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:P}}var qv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Di=null;function Yv(){return Di===null&&(Di=new ko(qv,16,16,ms,vi),Di.name="DFG_LUT",Di.minFilter=vn,Di.magFilter=vn,Di.wrapS=Ei,Di.wrapT=Ei,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}var oc=class{constructor(t={}){let{canvas:e=lf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Vn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let b=m,f=new Set([bl,Ml,Sl]),d=new Set([Vn,_i,Sr,Mr,vl,yl]),R=new Uint32Array(4),P=new Int32Array(4),S=new F,M=null,T=null,D=[],y=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let z=this,H=!1,Z=null,J=null,V=null,q=null;this._outputColorSpace=Yn;let at=0,et=0,gt=null,nt=-1,ot=null,ft=new Be,Kt=new Be,kt=null,Ae=new oe(0),ve=0,be=e.width,j=e.height,lt=1,Ct=null,ne=null,Tt=new Be(0,0,be,j),Wt=new Be(0,0,be,j),Ce=!1,L=new fr,mt=!1,vt=!1,xt=new Ve,St=new F,ee=new Be,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function le(){return gt===null?lt:1}let N=n;function Re(v,B){return e.getContext(v,B)}let _e,E,_,W,Y,tt,yt,wt,rt,dt,Rt,jt,bt,Mt,Gt,ie,ce,k,Pt,ct,Dt,Ot,pt;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ze,!1),e.addEventListener("webglcontextrestored",Ie,!1),e.addEventListener("webglcontextcreationerror",Pn,!1),N===null){let B="webgl2";if(N=Re(B,v),N===null)throw Re(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(v){throw e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",Ie,!1),e.removeEventListener("webglcontextcreationerror",Pn,!1),ae("WebGLRenderer: "+v.message),v}function Qt(){_e=new ex(N),_e.init(),Dt=new Vv(N,_e),E=new X_(N,_e,t,Dt),_=new zv(N,_e),E.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),J=N.createFramebuffer(),V=N.createFramebuffer(),q=N.createFramebuffer(),W=new sx(N),Y=new Ev,tt=new kv(N,_e,_,Y,E,Dt,W),yt=new tx(z),wt=new ag(N),Ot=new G_(N,wt),rt=new nx(N,wt,W,Ot),dt=new ax(N,rt,wt,Ot,W),k=new rx(N,E,tt),Gt=new $_(Y),Rt=new wv(z,yt,_e,E,Ot,Gt),jt=new Xv(z,Y),bt=new Av,Mt=new Dv(_e),ce=new H_(z,yt,_,dt,g,l),ie=new Bv(z,dt,E),pt=new $v(N,W,E,_),Pt=new W_(N,_e,W),ct=new ix(N,_e,W),W.programs=Rt.programs,z.capabilities=E,z.extensions=_e,z.properties=Y,z.renderLists=bt,z.shadowMap=ie,z.state=_,z.info=W}b!==Vn&&(A=new lx(b,e.width,e.height,o,s,r));let $t=new hu(z,N);this.xr=$t,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=_e.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=_e.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(v){v!==void 0&&(lt=v,this.setSize(be,j,!1))},this.getSize=function(v){return v.set(be,j)},this.setSize=function(v,B,K=!0){if($t.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}be=v,j=B,e.width=Math.floor(v*lt),e.height=Math.floor(B*lt),K===!0&&(e.style.width=v+"px",e.style.height=B+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,v,B)},this.getDrawingBufferSize=function(v){return v.set(be*lt,j*lt).floor()},this.setDrawingBufferSize=function(v,B,K){be=v,j=B,lt=K,e.width=Math.floor(v*K),e.height=Math.floor(B*K),this.setViewport(0,0,v,B)},this.setEffects=function(v){if(b===Vn){ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let B=0;B<v.length;B++)if(v[B].isOutputPass===!0){re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ft)},this.getViewport=function(v){return v.copy(Tt)},this.setViewport=function(v,B,K,$){v.isVector4?Tt.set(v.x,v.y,v.z,v.w):Tt.set(v,B,K,$),_.viewport(ft.copy(Tt).multiplyScalar(lt).round())},this.getScissor=function(v){return v.copy(Wt)},this.setScissor=function(v,B,K,$){v.isVector4?Wt.set(v.x,v.y,v.z,v.w):Wt.set(v,B,K,$),_.scissor(Kt.copy(Wt).multiplyScalar(lt).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(v){_.setScissorTest(Ce=v)},this.setOpaqueSort=function(v){Ct=v},this.setTransparentSort=function(v){ne=v},this.getClearColor=function(v){return v.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(v=!0,B=!0,K=!0){let $=0;if(v){let X=!1;if(gt!==null){let Ft=gt.texture.format;X=f.has(Ft)}if(X){let Ft=gt.texture.type,Ht=d.has(Ft),At=ce.getClearColor(),zt=ce.getClearAlpha(),Zt=At.r,qt=At.g,ge=At.b;Ht?(R[0]=Zt,R[1]=qt,R[2]=ge,R[3]=zt,N.clearBufferuiv(N.COLOR,0,R)):(P[0]=Zt,P[1]=qt,P[2]=ge,P[3]=zt,N.clearBufferiv(N.COLOR,0,P))}else $|=N.COLOR_BUFFER_BIT}B&&($|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),Z=v},this.dispose=function(){e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",Ie,!1),e.removeEventListener("webglcontextcreationerror",Pn,!1),ce.dispose(),bt.dispose(),Mt.dispose(),Y.dispose(),yt.dispose(),dt.dispose(),Ot.dispose(),pt.dispose(),Rt.dispose(),$t.dispose(),$t.removeEventListener("sessionstart",Lr),$t.removeEventListener("sessionend",qa),on.stop()};function ze(v){v.preventDefault(),jr("WebGLRenderer: Context Lost."),H=!0}function Ie(){jr("WebGLRenderer: Context Restored."),H=!1;let v=W.autoReset,B=ie.enabled,K=ie.autoUpdate,$=ie.needsUpdate,X=ie.type;Qt(),W.autoReset=v,ie.enabled=B,ie.autoUpdate=K,ie.needsUpdate=$,ie.type=X}function Pn(v){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Gn(v){let B=v.target;B.removeEventListener("dispose",Gn),$a(B)}function $a(v){Hs(v),Y.remove(v)}function Hs(v){let B=Y.get(v).programs;B!==void 0&&(B.forEach(function(K){Rt.releaseProgram(K)}),v.isShaderMaterial&&Rt.releaseShaderCache(v))}this.renderBufferDirect=function(v,B,K,$,X,Ft){B===null&&(B=te);let Ht=X.isMesh&&X.matrixWorld.determinantAffine()<0,At=Ac(v,B,K,$,X);_.setMaterial($,Ht);let zt=K.index,Zt=1;if($.wireframe===!0){if(zt=rt.getWireframeAttribute(K),zt===void 0)return;Zt=2}let qt=K.drawRange,ge=K.attributes.position,Xt=qt.start*Zt,Pe=(qt.start+qt.count)*Zt;Ft!==null&&(Xt=Math.max(Xt,Ft.start*Zt),Pe=Math.min(Pe,(Ft.start+Ft.count)*Zt)),zt!==null?(Xt=Math.max(Xt,0),Pe=Math.min(Pe,zt.count)):ge!=null&&(Xt=Math.max(Xt,0),Pe=Math.min(Pe,ge.count));let je=Pe-Xt;if(je<0||je===1/0)return;Ot.setup(X,$,At,K,zt);let Ue,Ne=Pt;if(zt!==null&&(Ue=wt.get(zt),Ne=ct,Ne.setIndex(Ue)),X.isMesh)$.wireframe===!0?(_.setLineWidth($.wireframeLinewidth*le()),Ne.setMode(N.LINES)):Ne.setMode(N.TRIANGLES);else if(X.isLine){let ln=$.linewidth;ln===void 0&&(ln=1),_.setLineWidth(ln*le()),X.isLineSegments?Ne.setMode(N.LINES):X.isLineLoop?Ne.setMode(N.LINE_LOOP):Ne.setMode(N.LINE_STRIP)}else X.isPoints?Ne.setMode(N.POINTS):X.isSprite&&Ne.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))Ne.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let ln=X._multiDrawStarts,Bt=X._multiDrawCounts,rn=X._multiDrawCount,we=zt?wt.get(zt).bytesPerElement:1,Ln=Y.get($).currentProgram.getUniforms();for(let Wn=0;Wn<rn;Wn++)Ln.setValue(N,"_gl_DrawID",Wn),Ne.render(ln[Wn]/we,Bt[Wn])}else if(X.isInstancedMesh)Ne.renderInstances(Xt,je,X.count);else if(K.isInstancedBufferGeometry){let ln=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Bt=Math.min(K.instanceCount,ln);Ne.renderInstances(Xt,je,Bt)}else Ne.render(Xt,je)};function Ir(v,B,K,$){Z!==null&&v.isNodeMaterial&&Z.setObject($,v),mt===!0&&Gt.setState(v,K,!1),v.transparent===!0&&v.side===Pi&&v.forceSinglePass===!1?(v.side=Un,v.needsUpdate=!0,$e(v,B,$),v.side=us,v.needsUpdate=!0,$e(v,B,$),v.side=Pi):$e(v,B,$)}this.compile=function(v,B,K=null){K===null&&(K=v),Z!==null&&Z.renderStart(v,B,K),T=Mt.get(K),T.init(B),y.push(T),K.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),v!==K&&v.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),Z!==null&&Z.updateLights(T.state.lightsArray),vt=this.localClippingEnabled,mt=Gt.init(this.clippingPlanes,vt),mt===!0&&Gt.setGlobalState(this.clippingPlanes,B),Z!==null&&ie.render(T.state.shadowsArray,K,B);let $=new Set;return v.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Ft=X.material;if(Ft)if(Array.isArray(Ft))for(let Ht=0;Ht<Ft.length;Ht++){let At=Ft[Ht];Ir(At,K,B,X),$.add(At)}else Ir(Ft,K,B,X),$.add(Ft)}),T=y.pop(),Z!==null&&Z.renderEnd(),$},this.compileAsync=function(v,B,K=null){let $=this.compile(v,B,K);return new Promise(X=>{function Ft(){if($.forEach(function(Ht){let zt=Y.get(Ht).currentProgram;(zt===void 0||zt.isReady())&&$.delete(Ht)}),$.size===0){X(v);return}setTimeout(Ft,10)}_e.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let Pr=null;function Tc(v){Pr&&Pr(v)}function Lr(){on.stop()}function qa(){on.start()}let on=new kf;on.setAnimationLoop(Tc),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(v){Pr=v,$t.setAnimationLoop(v),v===null?on.stop():on.start()},$t.addEventListener("sessionstart",Lr),$t.addEventListener("sessionend",qa),this.render=function(v,B){if(B!==void 0&&B.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;Z!==null&&Z.renderStart(v,B);let K=$t.enabled===!0&&$t.isPresenting===!0,$=A!==null&&(gt===null||K)&&A.begin(z,gt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$t.enabled===!0&&$t.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&($t.cameraAutoUpdate===!0&&$t.updateCamera(B),B=$t.getCamera()),v.isScene===!0&&v.onBeforeRender(z,v,B,gt),T=Mt.get(v,y.length),T.init(B),T.state.textureUnits=tt.getTextureUnits(),y.push(T),xt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),L.setFromProjectionMatrix(xt,fi,B.reversedDepth),vt=this.localClippingEnabled,mt=Gt.init(this.clippingPlanes,vt),M=bt.get(v,D.length),M.init(),D.push(M),$t.enabled===!0&&$t.isPresenting===!0){let Ht=z.xr.getDepthSensingMesh();Ht!==null&&dn(Ht,B,-1/0,z.sortObjects)}dn(v,B,0,z.sortObjects),M.finish(),Z!==null&&Z.updateLights(T.state.lightsArray),z.sortObjects===!0&&M.sort(Ct,ne),Vt=$t.enabled===!1||$t.isPresenting===!1||$t.hasDepthSensing()===!1,Vt&&ce.addToRenderList(M,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&Gt.beginShadows();let X=T.state.shadowsArray;if(ie.render(X,v,B),mt===!0&&Gt.endShadows(),($&&A.hasRenderPass())===!1){let Ht=M.opaque,At=M.transmissive;if(T.setupLights(),B.isArrayCamera){let zt=B.cameras;if(At.length>0)for(let Zt=0,qt=zt.length;Zt<qt;Zt++){let ge=zt[Zt];Qn(Ht,At,v,ge)}Vt&&ce.render(v);for(let Zt=0,qt=zt.length;Zt<qt;Zt++){let ge=zt[Zt];ai(M,v,ge,ge.viewport)}}else At.length>0&&Qn(Ht,At,v,B),Vt&&ce.render(v),ai(M,v,B)}gt!==null&&et===0&&(tt.updateMultisampleRenderTarget(gt),tt.updateRenderTargetMipmap(gt)),$&&A.end(z),v.isScene===!0&&v.onAfterRender(z,v,B),Ot.resetDefaultState(),nt=-1,ot=null,y.pop(),y.length>0?(T=y[y.length-1],tt.setTextureUnits(T.state.textureUnits),mt===!0&&Gt.setGlobalState(z.clippingPlanes,T.state.camera)):T=null,D.pop(),D.length>0?M=D[D.length-1]:M=null,Z!==null&&Z.renderEnd()};function dn(v,B,K,$){if(v.visible===!1)return;if(v.layers.test(B.layers)){if(v.isGroup)K=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(B);else if(v.isLightProbeGrid)T.pushLightProbeGrid(v);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(L)){$&&ee.setFromMatrixPosition(v.matrixWorld).applyMatrix4(xt);let Ht=dt.update(v),At=v.material;At.visible&&M.push(v,Ht,At,K,ee.z,null,B)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(L))){let Ht=dt.update(v),At=v.material;if($&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ee.copy(v.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),ee.copy(Ht.boundingSphere.center)),ee.applyMatrix4(v.matrixWorld).applyMatrix4(xt)),Array.isArray(At)){let zt=Ht.groups;for(let Zt=0,qt=zt.length;Zt<qt;Zt++){let ge=zt[Zt],Xt=At[ge.materialIndex];Xt&&Xt.visible&&M.push(v,Ht,Xt,K,ee.z,ge,B)}}else At.visible&&M.push(v,Ht,At,K,ee.z,null,B)}}let Ft=v.children;for(let Ht=0,At=Ft.length;Ht<At;Ht++)dn(Ft[Ht],B,K,$)}function ai(v,B,K,$){let{opaque:X,transmissive:Ft,transparent:Ht}=v;T.setupLightsView(K),mt===!0&&Gt.setGlobalState(z.clippingPlanes,K),$&&_.viewport(ft.copy($)),X.length>0&&en(X,B,K),Ft.length>0&&en(Ft,B,K),Ht.length>0&&en(Ht,B,K),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Qn(v,B,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[$.id]===void 0){let Xt=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[$.id]=new kn(1,1,{generateMipmaps:!0,type:Xt?vi:Vn,minFilter:fs,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Te.workingColorSpace})}let Ft=T.state.transmissionRenderTarget[$.id],Ht=$.viewport||ft;Ft.setSize(Ht.z*z.transmissionResolutionScale,Ht.w*z.transmissionResolutionScale);let At=z.getRenderTarget(),zt=z.getActiveCubeFace(),Zt=z.getActiveMipmapLevel();z.setRenderTarget(Ft),z.getClearColor(Ae),ve=z.getClearAlpha(),ve<1&&z.setClearColor(16777215,.5),z.clear(),Vt&&ce.render(K);let qt=z.toneMapping;z.toneMapping=gi;let ge=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),T.setupLightsView($),mt===!0&&Gt.setGlobalState(z.clippingPlanes,$),en(v,K,$),tt.updateMultisampleRenderTarget(Ft),tt.updateRenderTargetMipmap(Ft),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Pe=0,je=B.length;Pe<je;Pe++){let Ue=B[Pe],{object:Ne,geometry:ln,material:Bt,group:rn}=Ue;if(Bt.side===Pi&&Ne.layers.test($.layers)){let we=Bt.side;Bt.side=Un,Bt.needsUpdate=!0,Se(Ne,K,$,ln,Bt,rn),Bt.side=we,Bt.needsUpdate=!0,Xt=!0}}Xt===!0&&(tt.updateMultisampleRenderTarget(Ft),tt.updateRenderTargetMipmap(Ft))}z.setRenderTarget(At,zt,Zt),z.setClearColor(Ae,ve),ge!==void 0&&($.viewport=ge),z.toneMapping=qt}function en(v,B,K){let $=B.isScene===!0?B.overrideMaterial:null;for(let X=0,Ft=v.length;X<Ft;X++){let Ht=v[X],{object:At,geometry:zt,group:Zt}=Ht,qt=Ht.material;qt.allowOverride===!0&&$!==null&&(qt=$),At.layers.test(K.layers)&&Se(At,B,K,zt,qt,Zt)}}function Se(v,B,K,$,X,Ft){Z!==null&&X.isNodeMaterial&&Z.setObject(v,X),v.onBeforeRender(z,B,K,$,X,Ft),v.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),X.onBeforeRender(z,B,K,$,v,Ft),X.transparent===!0&&X.side===Pi&&X.forceSinglePass===!1?(X.side=Un,X.needsUpdate=!0,z.renderBufferDirect(K,B,$,X,v,Ft),X.side=us,X.needsUpdate=!0,z.renderBufferDirect(K,B,$,X,v,Ft),X.side=Pi):z.renderBufferDirect(K,B,$,X,v,Ft),v.onAfterRender(z,B,K,$,X,Ft)}function $e(v,B,K){B.isScene!==!0&&(B=te);let $=Y.get(v),X=T.state.lights,Ft=T.state.shadowsArray,Ht=X.state.version,At=Rt.getParameters(v,X.state,Ft,B,K,T.state.lightProbeGridArray),zt=Rt.getProgramCacheKey(At),Zt=$.programs;$.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?B.environment:null,$.fog=B.fog;let qt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;$.envMap=yt.get(v.envMap||$.environment,qt),$.envMapRotation=$.environment!==null&&v.envMap===null?B.environmentRotation:v.envMapRotation,Zt===void 0&&(v.addEventListener("dispose",Gn),Zt=new Map,$.programs=Zt);let ge=Zt.get(zt);if(ge!==void 0){if($.currentProgram===ge&&$.lightsStateVersion===Ht)return Dr(v,At),ge}else At.uniforms=Rt.getUniforms(v),Z!==null&&v.isNodeMaterial&&Z.build(v,K,At),v.onBeforeCompile(At,z),ge=Rt.acquireProgram(At,zt),Zt.set(zt,ge),$.uniforms=At.uniforms;let Xt=$.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Xt.clippingPlanes=Gt.uniform),Dr(v,At),$.needsLights=Cc(v),$.lightsStateVersion=Ht,$.needsLights&&(Xt.ambientLightColor.value=X.state.ambient,Xt.lightProbe.value=X.state.probe,Xt.sunLights.value=X.state.sun,Xt.sunLightShadows.value=X.state.sunShadow,Xt.directionalLights.value=X.state.directional,Xt.directionalLightShadows.value=X.state.directionalShadow,Xt.spotLights.value=X.state.spot,Xt.spotLightShadows.value=X.state.spotShadow,Xt.rectAreaLights.value=X.state.rectArea,Xt.ltc_1.value=X.state.rectAreaLTC1,Xt.ltc_2.value=X.state.rectAreaLTC2,Xt.pointLights.value=X.state.point,Xt.pointLightShadows.value=X.state.pointShadow,Xt.hemisphereLights.value=X.state.hemi,Xt.sunShadowMatrix.value=X.state.sunShadowMatrix,Xt.sunShadowCascade.value=X.state.sunShadowCascade,Xt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xt.spotLightMatrix.value=X.state.spotLightMatrix,Xt.spotLightMap.value=X.state.spotLightMap,Xt.pointShadowMatrix.value=X.state.pointShadowMatrix),$.lightProbeGrid=T.state.lightProbeGridArray.length>0,$.currentProgram=ge,$.uniformsList=null,ge}function fn(v){if(v.uniformsList===null){let B=v.currentProgram.getUniforms();v.uniformsList=Er.seqWithValue(B.seq,v.uniforms)}return v.uniformsList}function Dr(v,B){let K=Y.get(v);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function Ya(v,B){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;S.setFromMatrixPosition(B.matrixWorld);for(let K=0,$=v.length;K<$;K++){let X=v[K];if(X.texture!==null&&X.boundingBox.containsPoint(S))return X}return null}function Ac(v,B,K,$,X){B.isScene!==!0&&(B=te),tt.resetTextureUnits();let Ft=B.fog,Ht=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?B.environment:null,At=gt===null?z.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Te.workingColorSpace,zt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Zt=yt.get($.envMap||Ht,zt),qt=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ge=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Xt=!!K.morphAttributes.position,Pe=!!K.morphAttributes.normal,je=!!K.morphAttributes.color,Ue=gi;$.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Ue=z.toneMapping);let Ne=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ln=Ne!==void 0?Ne.length:0,Bt=Y.get($),rn=T.state.lights;if(mt===!0&&(vt===!0||v!==ot)){let He=v===ot&&$.id===nt;Gt.setState($,v,He)}let we=!1;$.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==rn.state.version||Bt.outputColorSpace!==At||X.isBatchedMesh&&Bt.batching===!1||!X.isBatchedMesh&&Bt.batching===!0||X.isBatchedMesh&&Bt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Bt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Bt.instancing===!1||!X.isInstancedMesh&&Bt.instancing===!0||X.isSkinnedMesh&&Bt.skinning===!1||!X.isSkinnedMesh&&Bt.skinning===!0||X.isInstancedMesh&&Bt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Bt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Bt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Bt.instancingMorph===!1&&X.morphTexture!==null||Bt.envMap!==Zt||$.fog===!0&&Bt.fog!==Ft||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Gt.numPlanes||Bt.numIntersection!==Gt.numIntersection)||Bt.vertexAlphas!==qt||Bt.vertexTangents!==ge||Bt.morphTargets!==Xt||Bt.morphNormals!==Pe||Bt.morphColors!==je||Bt.toneMapping!==Ue||Bt.morphTargetsCount!==ln||!!Bt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,Bt.__version=$.version);let Ln=Bt.currentProgram;we===!0&&(Ln=$e($,B,X),Z&&$.isNodeMaterial&&Z.onUpdateProgram($,Ln,Bt));let Wn=!1,Qe=!1,yi=!1,Le=Ln.getUniforms(),qe=Bt.uniforms;if(_.useProgram(Ln.program)&&(Wn=!0,Qe=!0,yi=!0),$.id!==nt&&(nt=$.id,Qe=!0),Bt.needsLights){let He=Ya(T.state.lightProbeGridArray,X);Bt.lightProbeGrid!==He&&(Bt.lightProbeGrid=He,Qe=!0)}if(Wn||ot!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Le.setValue(N,"projectionMatrix",v.projectionMatrix),Le.setValue(N,"viewMatrix",v.matrixWorldInverse);let Mi=Le.map.cameraPosition;Mi!==void 0&&Mi.setValue(N,St.setFromMatrixPosition(v.matrixWorld)),E.logarithmicDepthBuffer&&Le.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Le.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),ot!==v&&(ot=v,Qe=!0,yi=!0)}if(Bt.needsLights&&(rn.state.sunShadowMap.length>0&&Le.setValue(N,"sunShadowMap",rn.state.sunShadowMap,tt),rn.state.directionalShadowMap.length>0&&Le.setValue(N,"directionalShadowMap",rn.state.directionalShadowMap,tt),rn.state.spotShadowMap.length>0&&Le.setValue(N,"spotShadowMap",rn.state.spotShadowMap,tt),rn.state.pointShadowMap.length>0&&Le.setValue(N,"pointShadowMap",rn.state.pointShadowMap,tt)),X.isSkinnedMesh){Le.setOptional(N,X,"bindMatrix"),Le.setOptional(N,X,"bindMatrixInverse");let He=X.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Le.setValue(N,"boneTexture",He.boneTexture,tt))}X.isBatchedMesh&&(Le.setOptional(N,X,"batchingTexture"),Le.setValue(N,"batchingTexture",X._matricesTexture,tt),Le.setOptional(N,X,"batchingIdTexture"),Le.setValue(N,"batchingIdTexture",X._indirectTexture,tt),Le.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&Le.setValue(N,"batchingColorTexture",X._colorsTexture,tt));let Si=K.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&k.update(X,K,Ln),(Qe||Bt.receiveShadow!==X.receiveShadow)&&(Bt.receiveShadow=X.receiveShadow,Le.setValue(N,"receiveShadow",X.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&B.environment!==null&&(qe.envMapIntensity.value=B.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=Yv()),Qe){if(Le.setValue(N,"toneMappingExposure",z.toneMappingExposure),Bt.needsLights&&Za(qe,yi),Ft&&$.fog===!0&&jt.refreshFogUniforms(qe,Ft),jt.refreshMaterialUniforms(qe,$,lt,j,T.state.transmissionRenderTarget[v.id]),Bt.needsLights&&Bt.lightProbeGrid){let He=Bt.lightProbeGrid;qe.probesSH.value=He.texture,qe.probesMin.value.copy(He.boundingBox.min),qe.probesMax.value.copy(He.boundingBox.max),qe.probesResolution.value.copy(He.resolution)}Er.upload(N,fn(Bt),qe,tt)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Er.upload(N,fn(Bt),qe,tt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Le.setValue(N,"center",X.center),Le.setValue(N,"modelViewMatrix",X.modelViewMatrix),Le.setValue(N,"normalMatrix",X.normalMatrix),Le.setValue(N,"modelMatrix",X.matrixWorld),$.uniformsGroups!==void 0){let He=$.uniformsGroups;for(let Mi=0,ti=He.length;Mi<ti;Mi++){let Ja=He[Mi];pt.update(Ja,Ln),pt.bind(Ja,Ln)}}return Ln}function Za(v,B){v.ambientLightColor.needsUpdate=B,v.lightProbe.needsUpdate=B,v.sunLights.needsUpdate=B,v.sunLightShadows.needsUpdate=B,v.directionalLights.needsUpdate=B,v.directionalLightShadows.needsUpdate=B,v.pointLights.needsUpdate=B,v.pointLightShadows.needsUpdate=B,v.spotLights.needsUpdate=B,v.spotLightShadows.needsUpdate=B,v.rectAreaLights.needsUpdate=B,v.hemisphereLights.needsUpdate=B}function Cc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return at},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return gt},this.setRenderTargetTextures=function(v,B,K){let $=Y.get(v);$.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Y.get(v.texture).__webglTexture=B,Y.get(v.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,B){let K=Y.get(v);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(v,B=0,K=0){gt=v,at=B,et=K;let $=null,X=!1,Ft=!1;if(v){let At=Y.get(v);if(At.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,At.__webglFramebuffer),ft.copy(v.viewport),Kt.copy(v.scissor),kt=v.scissorTest,_.viewport(ft),_.scissor(Kt),_.setScissorTest(kt),nt=-1;return}else if(At.__webglFramebuffer===void 0)tt.setupRenderTarget(v);else if(At.__hasExternalTextures)tt.rebindTextures(v,Y.get(v.texture).__webglTexture,Y.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let qt=v.depthTexture;if(At.__boundDepthTexture!==qt){if(qt!==null&&Y.has(qt)&&(v.width!==qt.image.width||v.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(v)}}let zt=v.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Ft=!0);let Zt=Y.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Zt[B])?$=Zt[B][K]:$=Zt[B],X=!0):v.samples>0&&tt.useMultisampledRTT(v)===!1?$=Y.get(v).__webglMultisampledFramebuffer:Array.isArray(Zt)?$=Zt[K]:$=Zt,ft.copy(v.viewport),Kt.copy(v.scissor),kt=v.scissorTest}else ft.copy(Tt).multiplyScalar(lt).floor(),Kt.copy(Wt).multiplyScalar(lt).floor(),kt=Ce;if(K!==0&&($=J),_.bindFramebuffer(N.FRAMEBUFFER,$)&&_.drawBuffers(v,$),_.viewport(ft),_.scissor(Kt),_.setScissorTest(kt),X){let At=Y.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,At.__webglTexture,K)}else if(Ft){let At=B;for(let zt=0;zt<v.textures.length;zt++){let Zt=Y.get(v.textures[zt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+zt,Zt.__webglTexture,K,At)}}else if(v!==null&&K!==0){let At=Y.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,At.__webglTexture,K)}nt=-1};function ji(v){let B=Y.get(v);return(B.__readFormat!==v.format||B.__readType!==v.type)&&(B.__readFormat=v.format,B.__readType=v.type,B.__formatReadable=E.textureFormatReadable(v.format),B.__typeReadable=E.textureTypeReadable(v.type)),B}this.readRenderTargetPixels=function(v,B,K,$,X,Ft,Ht,At=0){if(!(v&&v.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ht!==void 0&&(zt=zt[Ht]),zt){_.bindFramebuffer(N.FRAMEBUFFER,zt);try{let Zt=v.textures[At],qt=Zt.format,ge=Zt.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+At);let Xt=ji(Zt);if(Xt.__formatReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xt.__typeReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=v.width-$&&K>=0&&K<=v.height-X&&N.readPixels(B,K,$,X,Dt.convert(qt),Dt.convert(ge),Ft)}finally{let Zt=gt!==null?Y.get(gt).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(v,B,K,$,X,Ft,Ht,At=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ht!==void 0&&(zt=zt[Ht]),zt)if(B>=0&&B<=v.width-$&&K>=0&&K<=v.height-X){_.bindFramebuffer(N.FRAMEBUFFER,zt);let Zt=v.textures[At],qt=Zt.format,ge=Zt.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+At);let Xt=ji(Zt);if(Xt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Pe),N.bufferData(N.PIXEL_PACK_BUFFER,Ft.byteLength,N.STREAM_READ),N.readPixels(B,K,$,X,Dt.convert(qt),Dt.convert(ge),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let je=gt!==null?Y.get(gt).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,je);let Ue=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await hf(N,Ue,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Pe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ft),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Pe),N.deleteSync(Ue),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,B=null,K=0){let $=Math.pow(2,-K),X=Math.floor(v.image.width*$),Ft=Math.floor(v.image.height*$),Ht=B!==null?B.x:0,At=B!==null?B.y:0;tt.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,Ht,At,X,Ft),_.unbindTexture()},this.copyTextureToTexture=function(v,B,K=null,$=null,X=0,Ft=0){let Ht,At,zt,Zt,qt,ge,Xt,Pe,je,Ue=v.isCompressedTexture?v.mipmaps[Ft]:v.image;if(K!==null)Ht=K.max.x-K.min.x,At=K.max.y-K.min.y,zt=K.isBox3?K.max.z-K.min.z:1,Zt=K.min.x,qt=K.min.y,ge=K.isBox3?K.min.z:0;else{let qe=Math.pow(2,-X);Ht=Math.floor(Ue.width*qe),At=Math.floor(Ue.height*qe),v.isDataArrayTexture?zt=Ue.depth:v.isData3DTexture?zt=Math.floor(Ue.depth*qe):zt=1,Zt=0,qt=0,ge=0}$!==null?(Xt=$.x,Pe=$.y,je=$.z):(Xt=0,Pe=0,je=0);let Ne=Dt.convert(B.format),ln=Dt.convert(B.type),Bt;B.isData3DTexture?(tt.setTexture3D(B,0),Bt=N.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(tt.setTexture2DArray(B,0),Bt=N.TEXTURE_2D_ARRAY):(tt.setTexture2D(B,0),Bt=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);let rn=_.getParameter(N.UNPACK_ROW_LENGTH),we=_.getParameter(N.UNPACK_IMAGE_HEIGHT),Ln=_.getParameter(N.UNPACK_SKIP_PIXELS),Wn=_.getParameter(N.UNPACK_SKIP_ROWS),Qe=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,Ue.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ue.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Zt),_.pixelStorei(N.UNPACK_SKIP_ROWS,qt),_.pixelStorei(N.UNPACK_SKIP_IMAGES,ge);let yi=v.isDataArrayTexture||v.isData3DTexture,Le=B.isDataArrayTexture||B.isData3DTexture;if(v.isDepthTexture){let qe=Y.get(v),Si=Y.get(B),He=Y.get(qe.__renderTarget),Mi=Y.get(Si.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,He.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let ti=0;ti<zt;ti++)yi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Y.get(v).__webglTexture,X,ge+ti),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Y.get(B).__webglTexture,Ft,je+ti)),N.blitFramebuffer(Zt,qt,Ht,At,Xt,Pe,Ht,At,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(X!==0||v.isRenderTargetTexture||Y.has(v)){let qe=Y.get(v),Si=Y.get(B);_.bindFramebuffer(N.READ_FRAMEBUFFER,V),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,q);for(let He=0;He<zt;He++)yi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,qe.__webglTexture,X,ge+He):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,qe.__webglTexture,X),Le?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Si.__webglTexture,Ft,je+He):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Si.__webglTexture,Ft),X!==0?N.blitFramebuffer(Zt,qt,Ht,At,Xt,Pe,Ht,At,N.COLOR_BUFFER_BIT,N.NEAREST):Le?N.copyTexSubImage3D(Bt,Ft,Xt,Pe,je+He,Zt,qt,Ht,At):N.copyTexSubImage2D(Bt,Ft,Xt,Pe,Zt,qt,Ht,At);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Le?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(Bt,Ft,Xt,Pe,je,Ht,At,zt,Ne,ln,Ue.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(Bt,Ft,Xt,Pe,je,Ht,At,zt,Ne,Ue.data):N.texSubImage3D(Bt,Ft,Xt,Pe,je,Ht,At,zt,Ne,ln,Ue):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ft,Xt,Pe,Ht,At,Ne,ln,Ue.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ft,Xt,Pe,Ue.width,Ue.height,Ne,Ue.data):N.texSubImage2D(N.TEXTURE_2D,Ft,Xt,Pe,Ht,At,Ne,ln,Ue);_.pixelStorei(N.UNPACK_ROW_LENGTH,rn),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,we),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Ln),_.pixelStorei(N.UNPACK_SKIP_ROWS,Wn),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Qe),Ft===0&&B.generateMipmaps&&N.generateMipmap(Bt),_.unbindTexture()},this.initRenderTarget=function(v){Y.get(v).__webglFramebuffer===void 0&&tt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?tt.setTextureCube(v,0):v.isData3DTexture?tt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?tt.setTexture2DArray(v,0):tt.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){at=0,et=0,gt=null,_.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}};var Yf=new Zn,hc=new F,Zi=class extends ba{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new cn(t,3)),this.setAttribute("uv",new cn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new hs(e,6,1);return this.setAttribute("instanceStart",new mi(n,3,0)),this.setAttribute("instanceEnd",new mi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new hs(e,6,1);return this.setAttribute("instanceColorStart",new mi(n,3,0)),this.setAttribute("instanceColorEnd",new mi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new ga(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Yf.setFromBufferAttribute(e),this.boundingBox.union(Yf))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)hc.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(hc)),hc.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(hc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Lt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new It},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Fn.line={uniforms:Ua.merge([Lt.common,Lt.fog,Lt.line]),vertexShader:`
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
		`};var Ni=class extends xn{constructor(t){super({type:"LineMaterial",uniforms:Ua.clone(Fn.line.uniforms),vertexShader:Fn.line.vertexShader,fragmentShader:Fn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var uu=new Be,Zf=new F,Jf=new F,yn=new Be,Sn=new Be,Ui=new Be,du=new F,fu=new Ve,Mn=new Ea,Kf=new F,uc=new Zn,dc=new si,Fi=new Be,Oi,Us;function jf(i,t,e){return Fi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Fi.multiplyScalar(1/Fi.w),Fi.x=Us/e.width,Fi.y=Us/e.height,Fi.applyMatrix4(i.projectionMatrixInverse),Fi.multiplyScalar(1/Fi.w),Math.abs(Math.max(Fi.x,Fi.y))}function Zv(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Mn.start.fromBufferAttribute(s,o),Mn.end.fromBufferAttribute(r,o),Mn.applyMatrix4(e);let c=new F,h=new F;Oi.distanceSqToSegment(Mn.start,Mn.end,h,c),h.distanceTo(c)<Us*.5&&t.push({point:h,pointOnLine:c,distance:Oi.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function Jv(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),p=-t.near;Oi.at(1,Ui),Ui.w=1,Ui.applyMatrix4(t.matrixWorldInverse),Ui.applyMatrix4(n),Ui.multiplyScalar(1/Ui.w),Ui.x*=r.x/2,Ui.y*=r.y/2,Ui.z=0,du.copy(Ui),fu.multiplyMatrices(t.matrixWorldInverse,a);for(let u=0,m=h;u<m;u++){if(yn.fromBufferAttribute(l,u),Sn.fromBufferAttribute(c,u),yn.w=1,Sn.w=1,yn.applyMatrix4(fu),Sn.applyMatrix4(fu),yn.z>p&&Sn.z>p)continue;if(yn.z>p){let P=yn.z-Sn.z,S=(yn.z-p)/P;yn.lerp(Sn,S)}else if(Sn.z>p){let P=Sn.z-yn.z,S=(Sn.z-p)/P;Sn.lerp(yn,S)}yn.applyMatrix4(n),Sn.applyMatrix4(n),yn.multiplyScalar(1/yn.w),Sn.multiplyScalar(1/Sn.w),yn.x*=r.x/2,yn.y*=r.y/2,Sn.x*=r.x/2,Sn.y*=r.y/2,Mn.start.copy(yn),Mn.start.z=0,Mn.end.copy(Sn),Mn.end.z=0;let b=Mn.closestPointToPointParameter(du,!0);Mn.at(b,Kf);let f=Wh.lerp(yn.z,Sn.z,b),d=f>=-1&&f<=1,R=du.distanceTo(Kf)<Us*.5;if(d&&R){Mn.start.fromBufferAttribute(l,u),Mn.end.fromBufferAttribute(c,u),Mn.start.applyMatrix4(a),Mn.end.applyMatrix4(a);let P=new F,S=new F;Oi.distanceSqToSegment(Mn.start,Mn.end,S,P),e.push({point:S,pointOnLine:P,distance:Oi.origin.distanceTo(S),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}}var Fs=class extends Cn{constructor(t=new Zi,e=new Ni({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)Zf.fromBufferAttribute(e,a),Jf.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Zf.distanceTo(Jf);let r=new hs(s,2,1);return t.setAttribute("instanceDistanceStart",new mi(r,1,0)),t.setAttribute("instanceDistanceEnd",new mi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Oi=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;Us=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),dc.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=Us*.5;else{let p=Math.max(s.near,dc.distanceToPoint(Oi.origin));c=jf(s,p,l.resolution)}if(dc.radius+=c,Oi.intersectsSphere(dc)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),uc.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=Us*.5;else{let p=Math.max(s.near,uc.distanceToPoint(Oi.origin));h=jf(s,p,l.resolution)}uc.expandByScalar(h),Oi.intersectsBox(uc)!==!1&&(n?Zv(this,e):Jv(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(uu),this.material.uniforms.resolution.value.set(uu.z,uu.w))}};function Qf(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:l,CY:c,mcs:h,q:p,list:u,clamp:m,norm:g,munis:b}=i,f=x=>document.querySelector(x),d=x=>String(x).replace(/[<>&"]/g,w=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[w]),R=(x,w)=>[(x-l)*o,(w-c)*o],P=.06,S=t.segs.map(x=>{let w=[],C=[0];for(let O=0;O<x.length;O+=2){let U=R(x[O],x[O+1]);w.length&&C.push(C[C.length-1]+Math.hypot(U[0]-w[w.length-1][0],U[1]-w[w.length-1][1])),w.push(U)}return{p:w,c:C,L:C[C.length-1]}}),M=t.stops.map(([x,w,C,O])=>({n:x,id:O,w:R(w,C),fams:new Set})),T=t.routes.map(([x,w,C])=>({s:x,l:w,c:C})),D=(x,w)=>{let C=x.match(/^R([A-Z]*)(\d*)(.*)$/),O=w.match(/^R([A-Z]*)(\d*)(.*)$/);return(C[1]||"").localeCompare(O[1]||"")||(+C[2]||0)-(+O[2]||0)||C[3].localeCompare(O[3])},y=[...new Set(T.map(x=>x.s))].sort(D),A={};T.forEach(x=>{A[x.s]||(A[x.s]=x.c)});let z=t.pats.map(([x,w,C])=>({stops:x,t:w,segs:C})),H=t.trips.map(([x,w,C,O,U],G)=>({day:x,pat:z[w],fam:T[C].s,c:T[C].c,t0:O,num:U,tid:t.tids[G]})),Z={};y.forEach(x=>Z[x]=new Set),H.forEach(x=>{x.pat.segs.forEach(w=>Z[x.fam].add(w)),x.pat.stops.forEach(w=>M[w].fams.add(x.fam))});let J=t.days.map((x,w)=>H.filter(C=>C.day===w)),V=new Map(H.map(x=>[x.tid,x])),q=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],at=Math.PI/180,et=3.922*at,gt=-39.705*at;function nt(x,w){let C=x*at+et,O=w*at,U=Math.cos(gt),G=Math.sin(gt),Q=Math.cos(O),st=Math.cos(C)*Q,ut=Math.sin(C)*Q,ht=Math.sin(O),_t=Math.atan2(ut,st*U-ht*G),I=Math.asin(ht*U+st*G),it=Math.sqrt(2/(1+Math.cos(_t)*Math.cos(I))),Et=it*Math.cos(I)*Math.sin(_t),Ut=it*Math.sin(I),[he,se,Ee,Yt,Jt,ye,fe]=q;return R((se+he*Et-Jt)*fe,(ye-(Yt-Ee*Ut))*fe)}let ot=new Map(M.map((x,w)=>[x.id,w]));function ft(x){if(x.g)return x.g;let w=[],C=[],O=[0],U=0;return x.segs.forEach((G,Q)=>{let st=S[G];st.p.forEach((ut,ht)=>{Q&&!ht||(w.push(ut),C.push(U+st.c[ht]))}),U+=st.L,O.push(U)}),x.g={pts:w,cum:C,stopD:O}}function Kt(x,w,C,O){let U=1e18,G=0;for(let Q=0;Q+1<x.pts.length;Q++){if(x.cum[Q+1]<C||x.cum[Q]>O)continue;let st=x.pts[Q],ut=x.pts[Q+1],ht=ut[0]-st[0],_t=ut[1]-st[1],I=ht*ht+_t*_t||1e-9,it=Math.max(0,Math.min(1,((w[0]-st[0])*ht+(w[1]-st[1])*_t)/I)),Et=st[0]+ht*it-w[0],Ut=st[1]+_t*it-w[1],he=Et*Et+Ut*Ut;he<U&&(U=he,G=x.cum[Q]+it*(x.cum[Q+1]-x.cum[Q]))}return{d:G,err:Math.sqrt(U)}}function kt(x,w){let C=0,O=x.cum.length-1;if(w<=0)return x.pts[0];if(w>=x.cum[O])return x.pts[O];for(;O-C>1;){let st=C+O>>1;x.cum[st]<=w?C=st:O=st}let U=(w-x.cum[C])/(x.cum[O]-x.cum[C]||1),G=x.pts[C],Q=x.pts[O];return[G[0]+(Q[0]-G[0])*U,G[1]+(Q[1]-G[1])*U]}let Ae=x=>`${x.slice(6,8)}/${x.slice(4,6)}`,ve=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function be(x){let w={};return ve.formatToParts(x).forEach(C=>w[C.type]=C.value),{ymd:w.year+w.month+w.day,min:+w.hour*60+ +w.minute+ +w.second/60}}let j=0,lt=null,Ct=0,ne=0;function Tt(){let x=be(new Date);if(j===0&&lt==null)return{...x,live:!0};let w=lt==null?x.min:Ct+(j?(performance.now()-ne)/6e4*j:0);return{ymd:x.ymd,min:w,live:!1}}let Wt=x=>(x=(Math.round(x)%1440+1440)%1440,String(Math.floor(x/60)).padStart(2,"0")+":"+String(x%60).padStart(2,"0")),Ce="https://rodalies.erathegameoftime.com",L={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let x=new URLSearchParams(location.search).get("rt");x&&localStorage.setItem("rod_rt",x);let w=localStorage.getItem("rod_rt");w&&/jhmuyo\.workers\.dev/.test(w)&&(w=Ce,localStorage.setItem("rod_rt",w)),L.url=w||Ce}catch{L.url=Ce}let mt=(x,w)=>fetch(x+w,{cache:"no-store"}).then(C=>{if(!C.ok)throw new Error("HTTP "+C.status);return C.json()}),vt=x=>/^51/.test(x||"");async function xt(){if(!L.url){ee();return}let x=L.url.replace(/\/+$/,"");mt(x,"/reports.json").then(ut=>{ut&&Array.isArray(ut.items)&&(L.rep=ut.items,L.repSkew=(ut.now||Date.now())-Date.now(),ut.tipos&&(L.tipos=ut.tipos),L.repOk=Date.now())}).catch(()=>{});let w=!L.adifAt||Date.now()-L.adifAt>11e4,[C,O,U,G,Q]=await Promise.allSettled([mt(x,"/trip_updates.json"),mt(x,"/vehicle_positions.json"),mt(x,"/alerts.json"),mt(x,"/notices.json"),w?mt(x,"/adif.json"):Promise.reject(0)]);if(Q.status==="fulfilled"&&Q.value&&Q.value.ok?(L.adif=Q.value,L.adifAt=Date.now()):w&&(L.adifAt=Date.now()-6e4),C.status==="fulfilled"){let ut=new Map,ht=new Map;for(let _t of C.value.entity||[]){let I=_t.tripUpdate;if(!I||!I.trip||!vt(I.trip.tripId))continue;let it=I.trip.tripId,Et=(I.stopTimeUpdate||[])[0],Ut=I.delay;Ut==null&&Et&&(Ut=(Et.arrival||Et.departure||{}).delay),I.trip.scheduleRelationship==="CANCELED"&&(Ut="X"),Ut!=null&&ut.set(it,Ut),ht.set(it,{next:Et?{sid:Et.stopId,t:+((Et.arrival||Et.departure||{}).time||0)}:null})}L.delays=ut,L.tu=ht,L.ok=Date.now(),L.feedTs=+((C.value.header||{}).timestamp||0)*1e3,L.err=""}else L.err=C.reason&&C.reason.message||"sin respuesta";if(O.status==="fulfilled"){let ut=new Map,ht=Date.now()/1e3;for(let _t of O.value.entity||[]){let I=_t.vehicle;if(!I||!I.trip||!vt(I.trip.tripId)||!I.position)continue;let it=I.vehicle&&I.vehicle.label||"",Et=it.match(/PLATF\.\(([^)]+)\)/),Ut=L.vp.get(I.trip.tripId),he={tid:I.trip.tripId,w:nt(+I.position.longitude,+I.position.latitude),st:I.currentStatus||"",sid:I.stopId||"",ts:+I.timestamp||ht,label:it,plat:Et?Et[1]:"",fam:(it.split("-")[0]||"").trim(),num:I.vehicle&&I.vehicle.id||""};he.disp=Ut?Ut.disp:null,ut.set(he.tid,he)}L.vp=ut,L.okVP=Date.now()}let st=[];if(G.status==="fulfilled"&&Array.isArray(G.value.included)){L.okNotices=Date.now();for(let ut of G.value.included){let ht=new Set((ut.lines||[]).map(it=>it.id).filter(it=>A[it])),_t=it=>((it||{}).es||(it||{}).ca||"").trim(),I=[_t(ut.description),_t(ut.title)].sort((it,Et)=>Et.length-it.length)[0];I&&st.push({id:"N"+ut.externalId,fams:ht,stops:new Set,txt:I,when:(ut.date||"")+"T"+(ut.time||""),src:"Rodalies",core:ut.core||""})}}if(U.status==="fulfilled"){let ut=+((U.value.header||{}).timestamp||0);if(L.alertsTs=ut,Date.now()/1e3-ut<6*3600)for(let ht of U.value.entity||[]){let _t=ht.alert;if(!_t)continue;let I=new Set,it=new Set;for(let se of _t.informedEntity||[])(se.routeId||"").startsWith("51")&&I.add(se.routeId.replace(/^51T\d+/,"")),se.stopId&&ot.has(se.stopId)&&it.add(ot.get(se.stopId));if(!I.size&&!it.size)continue;let Et=(_t.descriptionText||_t.headerText||{translation:[]}).translation||[],Ut=((Et.find(se=>se.language==="es")||Et[0]||{}).text||"").trim(),he=+((_t.activePeriod||[])[0]||{}).start||0;st.some(se=>se.txt===Ut)||st.push({id:ht.id,fams:I,stops:it,txt:Ut,when:he?new Date(he*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(L.adif&&Date.now()-L.adifAt<15*6e4)for(let[ut,ht]of(L.adif.items||[]).entries()){let _t=(ht.t?ht.t+". ":"")+ht.txt,I=new Set,it=new Set,Et=g(_t);for(let Ut of _t.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))A[Ut[1]]&&I.add(Ut[1]);M.forEach((Ut,he)=>{Ut.fams.size&&Ut.n.length>4&&Et.includes(g(Ut.n))&&(it.add(he),I.size||Ut.fams.forEach(se=>I.add(se)))}),st.some(Ut=>Ut.txt===_t)||st.push({id:"A"+ut,fams:I,stops:it,txt:_t,when:L.adif.upd||"",src:"Adif",lvl:ht.lvl})}if(G.status==="fulfilled"||U.status==="fulfilled"||L.adif){L.alerts=st.sort((ut,ht)=>ht.when>ut.when?1:-1);try{Pp()}catch{}}ee(),qe(),Qn=0,a()}let St=()=>L.okVP&&Date.now()-L.okVP<9e4;function ee(){let x=f("#rtst"),w=f("#mode");if(w){let O=!!St()&&Tt().live;w.classList.toggle("on",O),w.classList.toggle("pre",!O),w.textContent=O?"En directo":"Previsi\xF3n"}if(!x)return;L.url?L.err?x.textContent="No se pudo conectar con el puente ("+L.err+"). Se usa el horario.":St()?x.innerHTML=`Conectado \xB7 ${L.vp.size} trenes con posici\xF3n real y ${L.delays.size} con retraso \xB7 actualizado a las ${new Date(L.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:x.textContent="Conectando\u2026":x.textContent=L.err||"Sin puente: trenes seg\xFAn horario oficial.";let C=f("#rturl");C&&C._shown!==L.url&&(C.value=L.url,C._shown=L.url)}f("#rtsave").onclick=()=>{let x=f("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(x&&!/^https?:\/\//.test(x)&&(x="https://"+x),!x){L.err="pega la direcci\xF3n de tu puente",ee();return}L.url=x;try{localStorage.setItem("rod_rt",x)}catch{}L.ok=0,L.err="",ee(),xt()},f("#rtoff").onclick=()=>{L.url=Ce;try{localStorage.removeItem("rod_rt")}catch{}h._h="",xt()},setInterval(xt,2e4),setTimeout(xt,50);let te=x=>{if(!St())return null;let w=L.delays.get(x.tid),C=L.vp.get(x.tid);return w==="X"?w:C&&C.pre&&C.preDl>=1?Math.max(typeof w=="number"?w:0,C.preDl*60):w??null},Vt=new Set(y),le=new Zi,N=new Zi,Re=new Ni({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),_e=new Ni({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),E=new Fs(le,Re),_=new Fs(N,_e);_.renderOrder=20,E.renderOrder=21,E.frustumCulled=_.frustumCulled=!1,e.add(_,E);function W(){let x=[],w=[],C=new Set,O=new oe;for(let U of y)if(Vt.has(U)){O.set(A[U]);for(let G of Z[U]){if(C.has(G))continue;C.add(G);let Q=S[G].p;for(let st=0;st+1<Q.length;st++)x.push(Q[st][0],Q[st][1],P,Q[st+1][0],Q[st+1][1],P),w.push(O.r,O.g,O.b,O.r,O.g,O.b)}}x.length||(x.push(0,0,-50,0,0,-50),w.push(0,0,0,0,0,0)),le.setPositions(x),le.setColors(w),N.setPositions(x),a()}W();let Y=x=>new xn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new oe(x)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),tt=new nn,yt=M.length,wt=new Float32Array(yt*3),rt=new Float32Array(yt*3),dt=new Float32Array(yt),Rt=new Float32Array(yt);M.forEach((x,w)=>{wt[w*3]=x.w[0],wt[w*3+1]=x.w[1],wt[w*3+2]=P,rt.set([1,1,1],w*3),dt[w]=6,Rt[w]=1.6}),tt.setAttribute("position",new We(wt,3)),tt.setAttribute("fill",new We(rt,3)),tt.setAttribute("size",new We(dt,1)),tt.setAttribute("bw",new We(Rt,1));let jt=new Cs(tt,Y("#1d2330"));jt.renderOrder=22,jt.frustumCulled=!1,e.add(jt);function bt(){let x=r.dist<45;M.forEach((w,C)=>{let O=[...w.fams].some(U=>Vt.has(U));dt[C]=O?C===$e?13:x?8:5:0,Rt[C]=C===$e?3:1.6}),tt.attributes.size.needsUpdate=!0,tt.attributes.bw.needsUpdate=!0}let Mt=600,Gt=new nn,ie=new Float32Array(Mt*3),ce=new Float32Array(Mt*3),k=new Float32Array(Mt),Pt=new Float32Array(Mt);Gt.setAttribute("position",new We(ie,3)),Gt.setAttribute("fill",new We(ce,3)),Gt.setAttribute("size",new We(k,1)),Gt.setAttribute("bw",new We(Pt,1));let ct=new Float32Array(Mt);Gt.setAttribute("ang",new We(ct,1));let Dt=new xn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new oe("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Ot=new Cs(Gt,Dt);Ot.renderOrder=24,Ot.frustumCulled=!1,e.add(Ot);let pt=new nn,Qt=new Float32Array(Mt*3),$t=new Float32Array(Mt*3),ze=new Float32Array(Mt),Ie=new Float32Array(Mt);pt.setAttribute("position",new We(Qt,3)),pt.setAttribute("fill",new We($t,3)),pt.setAttribute("size",new We(ze,1)),pt.setAttribute("bw",new We(Ie,1));let Pn=new Cs(pt,Y("#ffffff"));Pn.renderOrder=23,Pn.frustumCulled=!1,e.add(Pn);function Gn(x,w){let C=S[x],O=w*C.L,U=0,G=C.c.length-1;for(;G-U>1;){let _t=U+G>>1;C.c[_t]<=O?U=_t:G=_t}let Q=C.c[G]-C.c[U]||1,st=(O-C.c[U])/Q,ut=C.p[U],ht=C.p[G];return[ut[0]+(ht[0]-ut[0])*st,ut[1]+(ht[1]-ut[1])*st]}let $a=x=>x*x*(3-2*x)*.35+x*.65;function Hs(x,w){let C=x.pat.t,O=x.pat.stops.length,U=C[2*O-2];if(w<C[1]-2||w>U+1)return null;if(w<=C[1])return{w:M[x.pat.stops[0]].w,at:0,next:0,moving:!1};for(let G=0;G<O-1;G++){let Q=C[2*G+1],st=C[2*G+2],ut=C[2*G+3];if(w<=st){let ht=st>Q?(w-Q)/(st-Q):1;return{w:Gn(x.pat.segs[G],$a(m(ht,0,1))),at:-1,next:G+1,prev:G,moving:!0}}if(w<=ut)return{w:M[x.pat.stops[G+1]].w,at:G+1,next:G+1,moving:!1}}return{w:M[x.pat.stops[O-1]].w,at:O-1,next:O-1,moving:!1}}function Ir(x){let w=t.days.indexOf(x.ymd),C=[];if(w<0)return{k:w,out:C};let O=(U,G)=>{for(let Q of U){if(!Vt.has(Q.fam))continue;let st=te(Q);if(st==="X")continue;let ut=(st||0)/60,ht=x.min+G-Q.t0-ut;if(ht<-2||ht>Q.pat.t[Q.pat.t.length-2]+1)continue;let _t=Hs(Q,ht);_t&&C.push({tr:Q,p:_t,rel:ht,dl:ut,live:st!=null})}};return O(J[w],0),w>0&&O(J[w-1],1440),{k:w,out:C}}function Pr(x,w,C,O){let U=x.pat.stops[0],G=w.dep0,Q=null,st=(ht,_t)=>{for(let I of ht||[]){let it=I.pat.stops,Et=it.length;if(it[Et-1]!==U||I===x)continue;let Ut=I.t0+I.pat.t[2*(Et-1)]-_t;if(Ut>G+5||Ut<G-120)continue;let he=ft(I.pat),se=Kt(he,w.w,-1,1e9);if(se.err>.6)continue;let Ee=he.stopD,Yt=I.pat.t,Jt=Ee.findIndex(De=>De>se.d);Jt<0&&(Jt=Et-1);let ye=Jt===0?Yt[1]:Yt[2*Jt-1]+(Ee[Jt]>Ee[Jt-1]?(se.d-Ee[Jt-1])/(Ee[Jt]-Ee[Jt-1]):1)*(Yt[2*Jt]-Yt[2*Jt-1]),fe=C-(I.t0+ye-_t);fe<-5||fe>120||(!Q||Math.abs(fe)<Math.abs(Q.prevDl))&&(Q={prevTr:I,dPrev:se.d,prevDl:fe,arrO:Ut+Math.max(0,fe)})}};if(st(J[O],0),O>0&&st(J[O-1],1440),!Q)return{prevTr:null,preDl:0};let ut=Math.max(G,Q.arrO+3);return{...Q,depEst:ut,preDl:Math.max(0,ut-G)}}function Tc(x,w,C){let O=x.pat.t,U=w.length;if(!(C>=0))return C<0?w[0]:null;for(let G=0;G<U;G++)if(C<=O[2*G+1]){if(C>=O[2*G]||G===0)return w[G];let Q=O[2*G-1],st=O[2*G];return w[G-1]+(w[G]-w[G-1])*(st>Q?(C-Q)/(st-Q):1)}return w[U-1]}let Lr=performance.now();function qa(){let x=[],w=Date.now()/1e3,C=performance.now(),O=Math.min(1,(C-Lr)/1e3);Lr=C;for(let U of L.vp.values()){let G=V.get(U.tid),Q=G?G.fam:U.fam;if(Q&&A[Q]&&!Vt.has(Q))continue;let st=L.delays.get(U.tid),ut=typeof st=="number"?st/60:0,ht=Math.max(0,w-U.ts);U.mvTs!==U.ts&&((!U.mvW||Math.hypot(U.w[0]-U.mvW[0],U.w[1]-U.mvW[1])>.025)&&(U.mvW=U.w,U.mvAt=U.ts),U.mvTs=U.ts),U.still=U.ts-(U.mvAt||U.ts);let _t=U.w,I=-1;if(G){let Et=ft(G.pat),Ut=Et.stopD;if(U.dObs==null||U.obsAt!==U.ts){let Jt=Kt(Et,U.w,-1,1e9);U.dObs=Jt.d,U.err=Jt.err,U.obsAt=U.ts}let he=Tt(),se=t.days.indexOf(he.ymd),Ee=G.day===se-1?1440:0,Yt=G.t0+G.pat.t[1]-Ee;if(U.pre=he.min+ut<Yt-1&&(U.dObs>Ut[0]+.35||U.err>.6)&&!(U.st==="STOPPED_AT"&&U.sid===M[G.pat.stops[0]].id),U.dep0=Yt,U.pre){if(U.atStop=-1,U.next=0,I=0,U.disp=null,U.prevAt!==U.ts&&(U.prevAt=U.ts,Object.assign(U,Pr(G,U,he.min,se))),U.prevTr){let Jt=ft(U.prevTr.pat);_t=kt(Jt,U.dPrev)}}else if(U.err<=.6){let Jt=Ut.findIndex(De=>De>U.dObs+.08);Jt<0&&(Jt=Ut.length-1);let ye=Ut.reduce((De,pn,Ze)=>Math.abs(pn-U.dObs)<Math.abs(Ut[De]-U.dObs)?Ze:De,0);U.atStop=Math.abs(Ut[ye]-U.dObs)<.16?ye:-1,U.next=Jt,I=Jt;let fe=U.dObs;if(U.st==="STOPPED_AT"&&U.atStop>=0)fe=Ut[U.atStop];else if(Jt>0){let De=(G.pat.t[2*Jt]-G.pat.t[2*Jt-1])*60,pn=De>0?(Ut[Jt]-Ut[Jt-1])/De:0,Ze=Tt(),Je=t.days.indexOf(Ze.ymd),Or=G.day===Je-1?1440:0,Nt=Tc(G,Ut,Ze.min+Or-G.t0-ut),ue=U.dObs+pn*Math.min(ht,60);Nt!=null&&(ue=Math.min(ue,Math.max(U.dObs,Nt))),fe=Math.max(U.dObs,Math.min(Ut[Jt]-.03,ue))}U.disp==null||Math.abs(U.disp-fe)>1.2?U.disp=fe:fe>U.disp&&(U.disp+=(fe-U.disp)*Math.min(1,O*1.5)),_t=kt(Et,U.disp)}else if(U.err>2){let Jt=Tt(),ye=t.days.indexOf(Jt.ymd),fe=G.day===ye-1?1440:0,De=Hs(G,Jt.min+fe-G.t0-ut);De&&(_t=De.w,U.est=!0,I=De.next),U.atStop=-1,U.next=De?De.next:-1}else U.atStop=-1,U.next=-1}let it=U.pre?"":U.st==="STOPPED_AT"&&U.atStop>=0||U.atStop>=0&&U.still>30?"st":U.still>=90?"via":"";x.push({tr:G,v:U,w:_t,stop:it,p:{w:_t},fam:Q||"?",c:G?G.c:A[Q]||"#6b7385",dl:ut,live:!0,real:!0,idx:I,age:ht,cancel:st==="X"})}return x}let on=new Map,dn=!1,ai=[],Qn=0,en=null,Se=null,$e=-1,fn=!1,Dr=0,Ya="";function Ac(x){let w=j>0||St()&&lt==null||!!Se,C=w?50:250;if(x-Qn<C)return!1;Qn=x;let O=Tt(),U=St()&&O.live,G=U?{k:t.days.indexOf(O.ymd),out:qa()}:Ir(O);ai=G.out;let Q=new oe,st=0,ut=0;for(let I of ai){if(st>=Mt)break;ie[st*3]=I.p.w[0],ie[st*3+1]=I.p.w[1],ie[st*3+2]=P+.02;let it=null;if(I.real&&I.v.pre&&I.v.prevTr)it=kt(ft(I.v.prevTr.pat),I.v.dPrev+.35);else if(I.real&&I.tr&&!I.v.pre&&I.v.err<=.6&&I.v.disp!=null&&!(I.v.st==="STOPPED_AT"&&I.v.atStop>=0))it=kt(ft(I.tr.pat),I.v.disp+.35);else if(!I.real&&I.p.moving){let se=I.tr.pat.t,Ee=I.p.prev,Yt=se[2*Ee+1],Jt=se[2*Ee+2],ye=Jt>Yt?(I.rel-Yt)/(Jt-Yt):1;it=Gn(I.tr.pat.segs[Ee],Math.min(1,$a(m(ye,0,1))+.04))}if(I.real?!!I.stop:!I.p.moving)ct[st]=75;else if(it){let se=K(I.p.w),Ee=K(it),Yt=Ee[0]-se[0],Jt=Ee[1]-se[1];ct[st]=Math.hypot(Yt,Jt)>.05?Math.atan2(Yt,-Jt):99}else ct[st]=99;Q.set(I.c||I.tr.c),ce[st*3]=Q.r,ce[st*3+1]=Q.g,ce[st*3+2]=Q.b;let Ut=I.tr?I.tr===Se:Se&&Se.vtid===I.v.tid;k[st]=Ut?22:r.dist<45?17:14,Pt[st]=Ut?3.5:2.2;let he=I.real&&I.stop==="via";(I.live&&I.dl>=5||Ut||he)&&(Qt[ut*3]=I.p.w[0],Qt[ut*3+1]=I.p.w[1],Qt[ut*3+2]=P+.01,$t.set(Ut?[1,.84,.1]:he?[.86,.15,.15]:[.98,.45,.09],ut*3),ze[ut]=k[st]+(Ut?16+5*Math.sin(x/220):he?10+3*Math.sin(x/400):8),Ie[ut]=Ut?2:3,ut++),st++}if(Gt.setDrawRange(0,st),pt.setDrawRange(0,ut),["position","fill","size","bw"].forEach(I=>{Gt.attributes[I].needsUpdate=!0,pt.attributes[I].needsUpdate=!0}),Gt.attributes.ang.needsUpdate=!0,en){let I=ai.find(it=>it.tr===en);if(I){let it=0,Et=innerHeight,Ut=h.style.display!=="none"&&!h.classList.contains("min")?h.getBoundingClientRect():null,he=f("#rc").getBoundingClientRect();innerWidth<=640&&(Ut&&(it=Ut.bottom),Et=Math.min(Et,he.top));let se=it+(Et-it)/2,Ee=se-innerHeight/2,Yt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=I.p.w[0]-Math.sin(r.yaw)*Ee*Yt,s.ty=I.p.w[1]+Math.cos(r.yaw)*Ee*Yt}else St()&&Tt().live&&(en=null)}let ht=Wt(O.min);ht!==Ya&&(Ya=ht,f("#ctime").textContent=ht),f("#ntr").textContent=String(ai.length),f("#ntrl").textContent=U?"trenes de Rodalies con posici\xF3n real":"trenes previstos seg\xFAn el horario";let _t=new Date;if(f("#cdate").textContent=O.live?"hora actual":j?"simulaci\xF3n \xD7"+j:ei?"en pausa":"hora elegida",G.k<0?f("#src").innerHTML=`<b style="color:#c2410c">Sin horarios para hoy.</b> Los datos guardados van del ${Ae(t.days[0])} al ${Ae(t.days[t.days.length-1])}: actualiza la app.`:U?f("#src").textContent=`En directo \xB7 posiciones de Renfe de hace ${Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...L.vp.values()].map(I=>I.ts),0)))} s`:f("#src").innerHTML='<b style="color:#c2410c">No es tiempo real:</b> '+(L.url?"sin conexi\xF3n con el puente, ":"conecta el puente para ver los trenes reales; ")+"posiciones calculadas con el horario",O.live){let I=Math.round(O.min),it=f("#tsl");document.activeElement!==it&&(it.value=I<240?I+1440:I)}return Bn(),x-Dr>3e3&&(Se||$e>=0||fn)&&(Dr=x,qt()),ee(),!0}let Za=-1;function Cc(){r.dist<45!=Za<45&&(Za=r.dist,bt()),B()}let ji=[],v=new F;function B(){let x=r.dist<30,w=0;if(x){let C=[];for(let O=0;O<yt;O++)dt[O]&&(v.set(M[O].w[0],M[O].w[1],P).project(n),!(v.z>1||Math.abs(v.x)>1.05||Math.abs(v.y)>1.05)&&C.push([O,(v.x*.5+.5)*innerWidth,(-v.y*.5+.5)*innerHeight]));if(C.length<=70)for(let[O,U,G]of C){let Q=ji[w]||(ji[w]=Object.assign(document.createElement("div"),{className:"slab"}));Q.isConnected||document.body.appendChild(Q),Q.textContent=M[O].n,Q.dataset.i=O,Q.style.display="block",Q.style.transform=`translate(${Math.round(U+8)}px,${Math.round(G-7)}px)`,w++}}for(;w<ji.length;w++)ji[w].style.display="none"}function K(x){return v.set(x[0],x[1],P).project(n),[(v.x*.5+.5)*innerWidth,(-v.y*.5+.5)*innerHeight,v.z]}function $(x,w,C,O){let U=null,G=C*C;for(let Q of ai){let[st,ut,ht]=K(Q.p.w);if(ht>1)continue;let _t=(st-x)**2+(ut-w)**2;_t<G&&(G=_t,U={a:Q})}if(U)return U;G=O*O;for(let Q=0;Q<yt;Q++){if(!dt[Q])continue;let[st,ut,ht]=K(M[Q].w);if(ht>1)continue;let _t=(st-x)**2+(ut-w)**2;_t<G&&(G=_t,U={s:Q})}return U}window.__rodTap=(x,w)=>{let C=null,O=1e9;for(let G of ji){if(G.style.display==="none")continue;let Q=G.getBoundingClientRect();if(x>=Q.left-4&&x<=Q.right+4&&w>=Q.top-4&&w<=Q.bottom+4){let st=Math.abs(w-(Q.top+Q.bottom)/2)*4+(x-Q.left);st<O&&(O=st,C=G)}}if(C)return window.__rodPickStation(+C.dataset.i),!0;let U=$(x,w,24,18);return U&&U.a?(dn=!1,fn=!1,Se=U.a.tr||{vtid:U.a.v.tid},$e=-1,en=null,Gs(),bt(),qt(),Qn=0,a(),!0):U&&U.s!=null?(dn=!1,fn=!1,$e=U.s,Se=null,en=null,Gs(),bt(),qt(),a(),!0):!1},window.__rodHover=(x,w)=>{let C=$(x,w,14,10);if(C&&C.a){let O=C.a,U=O.tr?M[O.tr.pat.stops[O.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${O.c}">\u25A0</span> ${d(O.fam)} \xB7 tren ${d(O.tr?O.tr.num:O.v.num)}</b><small>${U?"hacia "+d(U):""}${O.real?(O.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(O.dl)} min</b>`:" \xB7 puntual")+" \xB7 en directo":" \xB7 previsto"}</small>`}return C&&C.s!=null?`<b>${d(M[C.s].n)}</b><small>${[...M[C.s].fams].sort(D).join(" \xB7 ")}</small>`:null},window.__rodPickStation=x=>{dn=fn=!1,Se=null,en=null,$e=x,Gs(),bt(),h._h="",qt(),a()};{let x=f("#rc"),w=()=>{let C=x.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,C-64-10)+"px")};try{new ResizeObserver(w).observe(x)}catch{}addEventListener("resize",w),setTimeout(w,300)}window.__rodTick=Ac,window.__rodFrame=Cc,window.__rodResize=()=>{Re.resolution.set(innerWidth,innerHeight),_e.resolution.set(innerWidth,innerHeight)},window.__rodResize();let X={st:-1,f:new Set},Ft=x=>{let w=[...M[x].fams].sort(D);return`<div class="sfc">${w.length>1?`<button type="button" data-sf="" class="${X.f.size?"":"on"}">Todas</button>`:""}${w.map(C=>`<button type="button" data-sf="${d(C)}" class="ln ${X.f.size&&!X.f.has(C)?"off":""}${Vt.has(C)?"":" hid"}" style="--c:${A[C]}">${d(C)}</button>`).join("")}</div>${w.some(C=>!Vt.has(C))?"<small>Las l\xEDneas apagadas en el filtro general no se muestran</small>":""}`},Ht=x=>{let w=(x||"#6b7385").replace("#",""),C=parseInt(w.slice(0,2),16),O=parseInt(w.slice(2,4),16),U=parseInt(w.slice(4,6),16);return(.299*C+.587*O+.114*U)/255>.62?"#1d2330":"#fff"},At=(x,w)=>{let C=A[w]||"#6b7385";return`<span class="dst" style="background:${C};color:${Ht(C)}" title="${d(w||"")}">${d(x)}</span>`},zt=x=>`<span class="ln" style="--c:${A[x]}">${d(x)}</span>`;function Zt(x,w){return w?x==="X"?'<span class="st late">Cancelado</span>':x>=60?`<span class="st late">Retraso de ${Math.round(x/60)} min</span>`:'<span class="st ok">Puntual</span>':'<span class="st sch">Seg\xFAn horario \xB7 sin dato en directo</span>'}function qt(){if(!Se&&$e<0&&!fn&&!dn){h.innerHTML="",h._h="",h.style.display="none",h.classList.remove("peek"),Lc();return}let x=Tt(),w="",C=St()&&x.live,O=(I,it)=>L.alerts.filter(Et=>[...Et.fams].some(Ut=>I.has(Ut))||it!=null&&Et.stops.has(it)),U=I=>I.length?`<div class="al">${I.slice(0,4).map(it=>`<p>\u26A0\uFE0F ${yi(it)} ${[...it.fams].sort(D).slice(0,6).map(zt).join(" ")} ${d(it.txt)} <small>${Le(it)}</small></p>`).join("")}${I.length>4?`<small>y ${I.length-4} avisos m\xE1s</small>`:""}</div>`:"",G=Se&&C?ai.find(I=>I.real&&(Se.vtid?I.v.tid===Se.vtid:I.tr===Se)):null;if(dn)w=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>Novedades</h3><small>${d(f("#ver").textContent.replace(" \xB7 novedades y fuentes",""))}</small><ul class="chg">${f("#chg").innerHTML||"<li>Versi\xF3n de prueba</li>"}</ul>
        <h3 style="margin-top:14px">Fuentes</h3><ul class="fts">
        <li><b>Renfe Operadora</b> \xB7 horarios (GTFS), posici\xF3n de los trenes y retrasos (GTFS-RT) \xB7 <a href="https://data.renfe.com" target="_blank" rel="noopener">data.renfe.com</a> \xB7 licencia CC BY 4.0</li>
        <li><b>Rodalies de Catalunya</b> (Generalitat) \xB7 salidas con v\xEDa, cancelaciones y avisos \xB7 <a href="https://rodalies.gencat.cat" target="_blank" rel="noopener">rodalies.gencat.cat</a></li>
        <li><b>Adif</b> \xB7 incidencias en la infraestructura de Catalu\xF1a \xB7 <a href="https://www.adif.es/viajeros/estado-de-la-red" target="_blank" rel="noopener">estado de la red</a> \xB7 \xA9 Adif</li>
        <li><b>OpenStreetMap</b> \xB7 trazado de las v\xEDas \xB7 <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">\xA9 colaboradores de OpenStreetMap</a>, licencia ODbL</li>
        </ul><small>Los datos se muestran tal como los publican sus fuentes. Ante cualquier duda, manda lo que diga el operador en la estaci\xF3n.</small></div>`;else if(fn){let I=L.alerts.filter(it=>[...it.fams].some(Et=>Vt.has(Et))||!it.fams.size);w=`<div class="tc" style="--c:#c2410c"><button class="x" data-cx>\xD7</button><h3>Avisos e incidencias</h3><small>${I.length} avisos activos para las l\xEDneas que tienes visibles</small>${I.map(it=>`<div class="al"><p>${yi(it)} ${[...it.fams].sort(D).map(zt).join(" ")} <small>${Le(it)}</small></p><p>${d(it.txt)}</p></div>`).join("")||"<p>Sin avisos activos.</p>"}<small>Fuente: avisos oficiales de Rodalies de Catalunya, incidencias en la v\xEDa de Adif (gestor de la infraestructura)${L.alertsTs&&Date.now()/1e3-L.alertsTs<6*3600?" y de Renfe":` \xB7 los avisos GTFS de Renfe no se muestran: Renfe no los actualiza desde el ${L.alertsTs?new Date(L.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(G){let I=G.v,it=G.tr,Et=Ze=>d(M[it.pat.stops[Ze]].n),Ut=it?it.pat.stops.length:0,he=ot.get(I.sid),se=he!=null?d(M[he].n):d(I.sid),Ee=it&&I.atStop>=0?Et(I.atStop):"",Yt=it&&I.next>=0?Et(I.next):se,Jt=it&&I.next>0?Et(I.next-1):"",ye=G.stop==="via"&&it?`<b class="stopv">\u23F8 Detenido</b> ${Jt?`entre ${Jt} y <b>${Yt}</b>`:`antes de <b>${Yt}</b>`} desde hace ${Math.max(1,Math.round(I.still/60))} min`:I.pre&&it?I.prevTr?`A\xFAn no ha empezado este viaje. Est\xE1 terminando el tren <b>${d(I.prevTr.num)}</b> hacia <b>${Et(0)}</b>${I.prevDl>=1?` con <b>+${Math.round(I.prevDl)} min</b>`:""}: llega hacia las <b>${Wt(I.arrO)}</b> y saldr\xEDa hacia las <b>${Wt(I.depEst)}</b>${I.preDl>=1?` (horario ${Wt(I.dep0)})`:""}`:`A\xFAn no ha empezado este viaje: va hacia <b>${Et(0)}</b>, de donde sale a las <b>${Wt(I.dep0+G.dl)}</b>`:I.st==="STOPPED_AT"&&Ee?`Parado en <b>${Ee}</b>`:Ee&&I.next>=0&&I.atStop!==I.next?`Saliendo de <b>${Ee}</b> hacia <b>${Yt}</b>`:Jt?`Entre ${Jt} y <b>${Yt}</b>`:`Hacia <b>${Yt}</b>`,fe=L.tu.get(I.tid),De=fe&&fe.next&&it&&I.next>=0&&fe.next.sid===M[it.pat.stops[I.next]].id&&fe.next.t?new Date(fe.next.t*1e3).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"",pn=[];if(it){let Ze=G.idx>=0?G.idx:0,Je=I.pre?Math.max(G.dl,I.preDl||0):G.dl,Or=Nt=>it.t0+it.pat.t[Nt]+Je;for(let Nt=Ze;Nt<Ut;Nt++)pn.push(`<li><b>${Wt(Or(Nt===0?1:2*Nt))}</b><span>${Et(Nt)}</span>${Je>=1?`<em>${I.pre?"\u2248":""}+${Math.round(Je)}</em>`:""}</li>`)}w=`<div class="tc" style="--c:${G.c}"><button class="x" data-cx>\xD7</button><div>${zt(G.fam)}<b>Tren ${d(it?it.num:I.num)}</b> <span class="lv">\u25CF en directo</span></div>${it?`<h3>${Et(0)} \u2192 ${At(M[it.pat.stops[Ut-1]].n,it.fam)}</h3>`:""}
        <p>${ye}${De?` \xB7 prevista ${De}`:""}${I.plat?` \xB7 <b>and\xE9n ${d(I.plat)}</b>`:""}</p><p>${I.pre&&I.prevTr?I.preDl>=1?`<span class="st late">Saldr\xE1 con unos ${Math.round(I.preDl)} min de retraso (estimado)</span>`:'<span class="st ok">Le da tiempo a salir a su hora (estimado)</span>':Zt(L.delays.get(I.tid),L.delays.has(I.tid))}</p>
        <small>${I.pre?`Renfe ya le pone el n\xFAmero de su pr\xF3ximo viaje. Posici\xF3n real enviada hace ${Math.round(G.age)} s`:I.est?"Renfe da una posici\xF3n que no encaja con su recorrido: se muestra donde deber\xEDa estar seg\xFAn el horario y su retraso":`Posici\xF3n enviada por Renfe hace ${Math.round(G.age)} s${G.age>120?" \xB7 <b>sin actualizar</b>":""}`}</small>
        ${pn.length?`<small style="margin-top:6px">Pr\xF3ximas paradas \xB7 hora prevista con el retraso actual</small><ol>${pn.join("")}</ol>`:""}${U(O(new Set([G.fam])))}
        ${rn(it?it.num:I.num,"",G.fam)}${it?`<div class="rtb"><button type="button" data-follow>${en===it?"Dejar de seguir":"Seguir este tren"}</button></div>`:""}</div>`}else if(Se&&C)w=`<div class="tc" style="--c:#6b7385"><button class="x" data-cx>\xD7</button><h3>Tren ${d(Se.num||Se.vtid||"")}</h3><p>Renfe no da ahora la posici\xF3n de este tren: puede haber terminado su viaje, no haber salido o no estar circulando.</p></div>`;else if(Se){let I=Se,it=I.pat,Et=it.stops.length,Ut=te(I),he=typeof Ut=="number"?Ut/60:0,se=t.days.indexOf(x.ymd),Ee=I.day===se-1?1440:0,Yt=x.min+Ee-I.t0-he,Jt=Hs(I,Yt),ye=Je=>I.t0+it.t[Je]+he,fe=Je=>d(M[it.stops[Je]].n),De="Fuera de servicio ahora";Jt&&(De=Jt.moving?`Circulando hacia <b>${fe(Jt.next)}</b> \xB7 llega ${Wt(ye(2*Jt.next))}`:Jt.at===Et-1?`Ha llegado a <b>${fe(Et-1)}</b>`:`Parado en <b>${fe(Jt.at)}</b> \xB7 sale ${Wt(ye(2*Jt.at+1))}`);let pn=Jt?Jt.next:0,Ze=[];for(let Je=pn;Je<Et;Je++)Ze.push(`<li><b>${Wt(ye(2*Je))}</b><span>${fe(Je)}</span>${he>=1?`<em>+${Math.round(he)}</em>`:""}</li>`);w=`<div class="tc" style="--c:${I.c}"><button class="x" data-cx>\xD7</button><div>${zt(I.fam)}<b>Tren ${d(I.num)}</b> <span class="pv">previsi\xF3n</span></div><h3>${fe(0)} \u2192 ${At(M[I.pat.stops[Et-1]].n,I.fam)}</h3>
        <p>${De}</p><p>${Zt(Ut,Ut!=null)}</p><small>Sale ${Wt(I.t0+it.t[1])} \xB7 llega ${Wt(I.t0+it.t[2*Et-2])} (horario)</small>
        <small style="margin-top:6px">Pr\xF3ximas paradas${he>=1?" \xB7 hora prevista con el retraso":""}</small><ol>${Ze.join("")}</ol>${rn(I.num,"",I.fam)}<div class="rtb"><button type="button" data-follow>${en===I?"Dejar de seguir":"Seguir este tren"}</button></div></div>`}else{let I=$e,it=t.days.indexOf(x.ymd),Et=[];X.st!==I&&(X.st=I,X.f.clear());let Ut=Yt=>(!A[Yt]||Vt.has(Yt))&&(!X.f.size||X.f.has(Yt));if(it>=0){let Yt=(Jt,ye)=>{for(let fe of Jt){if(!Ut(fe.fam))continue;let De=fe.pat.stops.indexOf(I);if(De<0||De===fe.pat.stops.length-1)continue;let pn=te(fe),Ze=typeof pn=="number"?pn/60:0,Je=fe.t0+fe.pat.t[2*De+1]-ye;Je+Ze<x.min-1||Je>x.min+360||Et.push({tr:fe,t:Je,dl:Ze,d:pn,on:L.vp.has(fe.tid),past:x.min>fe.t0+fe.pat.t[1]-ye+2})}};Yt(J[it],0),it>0&&Yt(J[it-1],1440)}Et.sort((Yt,Jt)=>Yt.t+Yt.dl-Jt.t-Jt.dl);let he=M[I].id,se=on.get(he);C&&L.url&&(!se||Date.now()-se.at>3e4)&&!se?.loading&&(on.set(he,{...se||{},loading:!0,at:se?se.at:0}),mt(L.url.replace(/\/+$/,""),"/departures.json?stationId="+he).then(Yt=>{on.set(he,{at:Date.now(),d:Yt}),$e===I&&(h._h="",qt())}).catch(()=>on.set(he,{at:Date.now(),err:1})));let Ee=C&&se&&se.d&&Array.isArray(se.d.trains)?se.d.trains:null;if(Ee){let Yt=new Map([...L.vp.values()].map(ye=>[String((V.get(ye.tid)||{}).num||ye.num),ye])),Jt=Ee.filter(ye=>Ut((ye.line||{}).id||"")).slice(0,40).map(ye=>{let fe=(ye.departureDateHourSelectedStation||"").slice(11,16),De=(ye.line||{}).id||"",pn=String(ye.commercialNumber||ye.technicalNumber||""),Ze=Yt.get(pn),Je=Ze?L.delays.get(Ze.tid):null;return`<li class="go" data-gt="${d(pn)}|${Ze?d(Ze.tid):""}"><b>${d(fe)}</b>${A[De]?zt(De):`<span class="ln" style="--c:#6b7385">${d(De||"?")}</span>`}<span>${At((ye.destinationStation||{}).name||"",De)}${ye.trainObservations?` \xB7 <i>${d(ye.trainObservations)}</i>`:""}</span>${ye.trainCancelled?"<em>cancelado</em>":typeof Je=="number"&&Je>=60?`<em>+${Math.round(Je/60)}</em>`:""}${ye.platformSelectedStation?`<i class="via">v\xEDa ${d(ye.platformSelectedStation)}</i>`:""}${Ze?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");w=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(M[I].n)}</h3>${Ft(I)}${rn("",M[I].id,"")}
          <small style="margin-top:6px">Pr\xF3ximas salidas oficiales de Rodalies \xB7 hora prevista \xB7 \u25CF tren circulando</small>
          <ol>${Jt||"<li><span>Rodalies no anuncia salidas ahora mismo</span></li>"}</ol>${U(O(M[I].fams,I))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}else w=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(M[I].n)}</h3>${Ft(I)}${rn("",M[I].id,"")}
        <small style="margin-top:6px">${C&&L.url?"Cargando salidas oficiales\u2026 mientras, ":""}Pr\xF3ximas salidas${C?" \xB7 hora prevista con el retraso actual \xB7 \u25CF tren circulando":" \xB7 previsi\xF3n seg\xFAn horario (sin tiempo real)"}</small>
        <ol>${Et.slice(0,40).map(Yt=>`<li class="go" data-gt="${d(Yt.tr.num)}|${d(Yt.tr.tid)}"><b>${Wt(Yt.t+Yt.dl)}</b>${zt(Yt.tr.fam)}<span>${At(M[Yt.tr.pat.stops[Yt.tr.pat.stops.length-1]].n,Yt.tr.fam)}</span>${Yt.d==="X"?"<em>cancelado</em>":Yt.dl>=1?`<em>+${Math.round(Yt.dl)}</em>`:""}${C?Yt.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':Yt.past?'<i class="nos" title="deber\xEDa haber salido y Renfe no da su posici\xF3n">sin se\xF1al</i>':'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||"<li><span>No hay salidas en las pr\xF3ximas 6 horas</span></li>"}</ol>${U(O(M[I].fams,I))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}let Q=h.scrollTop;if(h._h!==w&&(h.innerHTML=w,h._h=w,h.scrollTop=Q),h.style.display="flex",h.classList.remove("min"),Lc(),innerWidth<=640){let I=h.querySelector(".tc");if(I&&!I.querySelector(".mn")){let it=document.createElement("button");it.type="button",it.className="mn",it.setAttribute("aria-label","Encoger o ampliar la ficha"),it.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",it.onclick=Et=>{Et.stopPropagation(),h.classList.toggle("peek"),it.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",h.scrollTop=0},I.appendChild(it)}}else h.classList.remove("peek");let st=f("#rc");if(innerWidth<=640&&!st.classList.contains("min")&&!qt.done&&(qt.done=1,f("#rcgrab").click()),innerWidth<=640){let I=f("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(I+8)+"px",h.style.width="calc(100vw - 76px)",h.style.maxHeight=Math.max(140,f("#rc").getBoundingClientRect().top-I-16)+"px"}else if(innerHeight<=500){let I=f("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(I+8)+"px",h.style.width="min(290px, 40vw)",h.style.maxHeight=innerHeight-I-20+"px"}else h.style.top="",h.style.width="300px",h.style.maxHeight="";let ht=h.querySelector("[data-cx]");ht&&(ht.onclick=I=>{I.stopPropagation(),qt.done=0,fn=!1,dn=!1,Se=null,$e=-1,en=null,bt(),qt(),Qn=0,a()}),Ln(h),h.querySelectorAll("[data-sf]").forEach(I=>I.onclick=it=>{it.stopPropagation();let Et=I.dataset.sf;Et?X.f.has(Et)?X.f.delete(Et):X.f.add(Et):X.f.clear(),h._h="",qt()}),h.querySelectorAll("[data-gt]").forEach(I=>I.onclick=()=>{let[it,Et]=I.dataset.gt.split("|"),Ut=V.get(Et);Hu({num:it,tid:L.vp.has(Et)?Et:"",tr:Ut||null})}),h.querySelectorAll("[data-sethome]").forEach(I=>I.onclick=()=>Gu($e,I.dataset.sethome));let _t=h.querySelector("[data-follow]");_t&&(_t.onclick=()=>{en=en===Se?null:Se,en?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(h.classList.add("peek"),h.scrollTop=0,f("#rc").classList.contains("min")||f("#rcgrab").click())):h.classList.remove("peek"),h._h="",qt(),a()})}window.__rodCard=qt;try{localStorage.getItem("rod_inf")==="mini"&&f("#inf").classList.add("mini")}catch{}f("#inft").onclick=()=>{let x=f("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",x?"mini":"")}catch{}(Se||$e>=0||fn||dn)&&(h._h="",qt())},f("#ver").onclick=()=>{dn=!0,Se=null,$e=-1,fn=!1,h._h="",qt()};let ge={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},Xt=["vacio","lleno","petado","parado","calor","abordo"],Pe=["gente","retraso","cancel","ascensor","via"],je={vacio:"Va con sitio",lleno:"Va lleno",petado:"Muy lleno, cuesta subir",parado:"Parado sin moverse",calor:"Sin aire acondicionado",abordo:"Incidencia a bordo",gente:"Mucha gente esperando",retraso:"Anuncian retraso por megafon\xEDa",cancel:"Anuncian tren cancelado",ascensor:"Ascensor o escalera averiados",via:"Incidencia en la estaci\xF3n"},Ue=x=>(L.tipos||je)[x]||x,Ne=(x,w)=>(L.rep||[]).filter(C=>x&&C.num===String(x)&&!C.sid||w&&C.sid===String(w)&&!C.num||x&&w&&C.num===String(x)&&C.sid===String(w)),ln=x=>{let w=Math.round((Date.now()+(L.repSkew||0)-x.at)/6e4);return w<1?"ahora":`hace ${w} min`},Bt=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function rn(x,w,C){if(!L.url||!L.repOk)return"";let O=Ne(x,w),U=x?Xt:Pe;return`<div class="crowd"><small>\u{1F465} Lo que dicen los viajeros${O.length?"":" \xB7 nadie ha avisado todav\xEDa"}</small>${O.map(G=>`<p><span>${ge[G.kind]||"\u2022"} <b>${d(Ue(G.kind))}</b> <small>${G.up>1?G.up+" viajeros \xB7 ":""}${ln(G)}</small></span>${Bt.has(G.id)?"<small>\u2713</small>":`<button type="button" data-rv="${G.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${G.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${x?"\xBFVas en este tren? Avisa a los dem\xE1s":"\xBFEst\xE1s en la estaci\xF3n? Avisa a los dem\xE1s"}</summary><div class="ckb">${U.map(G=>`<button type="button" data-rk="${G}" data-rn="${d(x||"")}" data-rs="${d(w||"")}" data-rl="${d(C||"")}">${ge[G]} ${d(Ue(G))}</button>`).join("")}</div><small>An\xF3nimo \xB7 se borra solo en 90 min \xB7 sin texto libre</small></details></div>`}async function we(x,w){try{let O=await(await fetch(L.url.replace(/\/+$/,"")+w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)})).json();if(!O.ok){Qe(O.err||"No se ha podido enviar");return}if(O.id){Bt.add(O.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Bt].slice(-300)))}catch{}}Qe(w==="/vote"?"Gracias, voto guardado":O.n>1?`Gracias \xB7 ya sois ${O.n} avisando de lo mismo`:"Gracias, aviso enviado");let U=await mt(L.url.replace(/\/+$/,""),"/reports.json");U&&U.items&&(L.rep=U.items),h._h="",qt(),Bn(!0)}catch{Qe("Sin conexi\xF3n con el puente")}}function Ln(x){x.querySelectorAll("[data-rk]").forEach(w=>w.onclick=C=>{C.stopPropagation(),w.disabled=!0,we({kind:w.dataset.rk,num:w.dataset.rn,sid:w.dataset.rs,line:w.dataset.rl},"/report")}),x.querySelectorAll("[data-rv]").forEach(w=>w.onclick=C=>{C.stopPropagation();let[O,U]=w.dataset.rv.split(":");Bt.add(+O);try{localStorage.setItem("rod_votes",JSON.stringify([...Bt].slice(-300)))}catch{}we({id:+O,v:+U},"/vote")})}let Wn=0;function Qe(x){let w=f("#toast");w||(w=document.createElement("div"),w.id="toast",document.body.appendChild(w)),w.textContent=x,w.className="on",clearTimeout(Wn),Wn=setTimeout(()=>{w.className=""},2600)}function yi(x){return x.src?`<b class="asrc ${x.src==="Adif"?"adif":""}">${x.src==="Adif"?"Adif \xB7 v\xEDa":d(x.src)}</b>`:""}function Le(x){if(!x.when)return"";let[w,C]=x.when.split("T"),O=be(new Date),U=O.ymd.slice(0,4)+"-"+O.ymd.slice(4,6)+"-"+O.ymd.slice(6,8);if(w===U&&C){let G=Math.round(O.min-(+C.slice(0,2)*60+ +C.slice(3,5)));return G<1?"ahora":G<60?`hace ${G} min`:`hoy a las ${C.slice(0,5)}`}return`${w.slice(8,10)}/${w.slice(5,7)}${C?" "+C.slice(0,5):""}`}function qe(){let x=f("#alr");if(!x)return;let w=L.alerts.filter(C=>[...C.fams].some(O=>Vt.has(O))).length;x.hidden=!w,x.textContent=`\u26A0\uFE0F ${w} aviso${w===1?"":"s"}`}f("#alr").onclick=()=>{dn=!1,fn=!0,Se=null,$e=-1,qt()},f("#wcopy").onclick=async()=>{let x=f("#wcode").textContent;try{await navigator.clipboard.writeText(x),f("#wcopy").textContent="Copiado \u2713"}catch{let C=document.createRange();C.selectNodeContents(f("#wcode"));let O=getSelection();O.removeAllRanges(),O.addRange(C),f("#wcopy").textContent="Selecciona y copia"}setTimeout(()=>f("#wcopy").textContent="Copiar c\xF3digo",2500)};let Si=ot.get("71801");function He(x,w){let C=M[x].id,O=on.get(C);!(St()&&L.url)||O&&(O.loading||Date.now()-O.at<3e4)||(on.set(C,{...O||{},loading:!0,at:O?O.at:0}),mt(L.url.replace(/\/+$/,""),"/departures.json?stationId="+C).then(U=>{on.set(C,{at:Date.now(),d:U}),w&&w()}).catch(()=>on.set(C,{at:Date.now(),err:1})))}let Mi=x=>+x.slice(0,2)*60+ +x.slice(3,5),ti={k:-2,m:null};function Ja(x){let w=t.days.indexOf(Tt().ymd);if(ti.k!==w){ti.k=w,ti.m=new Map;for(let C of J[w]||[])ti.m.set(String(C.num),C)}return ti.m.get(String(x))||null}function Pu(x,w){let C=Tt(),O=St()&&C.live&&!w,U=on.get(M[x].id),G=[],Q=new Map([...L.vp.values()].map(ut=>[String((V.get(ut.tid)||{}).num||ut.num),ut]));if(O&&U&&U.d&&Array.isArray(U.d.trains))for(let ut of U.d.trains){let ht=(ut.departureDateHourSelectedStation||"").slice(11,16);if(!ht)continue;let _t=String(ut.commercialNumber||ut.technicalNumber||""),I=Q.get(_t),it=I?L.delays.get(I.tid):null,Et=Math.max(typeof it=="number"?Math.max(0,it/60):0,I&&I.pre&&I.preDl||0),Ut=Mi(ht);Ut<C.min-720&&(Ut+=1440),G.push({sm:Ut,est:Ut+Et,dl:Et,fam:(ut.line||{}).id||"",dest:(ut.destinationStation||{}).name||"",destId:(ut.destinationStation||{}).id||"",plat:ut.platformSelectedStation||"",cancel:!!ut.trainCancelled,obs:ut.trainObservations||"",live:!!I,num:_t,tid:I?I.tid:"",tr:I&&V.get(I.tid)||Ja(_t),src:"oficial"})}else{let ut=t.days.indexOf(C.ymd);if(ut<0)return G;let ht=(_t,I)=>{for(let it of _t){let Et=it.pat.stops.indexOf(x);if(Et<0||Et===it.pat.stops.length-1)continue;let Ut=te(it),he=typeof Ut=="number"?Math.max(0,Ut/60):0,se=it.t0+it.pat.t[2*Et+1]-I;if(se+he<C.min-1||se>C.min+240)continue;let Ee=it.pat.stops[it.pat.stops.length-1];G.push({sm:se,est:se+he,dl:he,fam:it.fam,dest:M[Ee].n,destId:M[Ee].id,plat:"",cancel:Ut==="X",obs:"",live:L.vp.has(it.tid),num:it.num,tid:it.tid,tr:it,src:"horario"})}};ht(J[ut],0),ut>0&&ht(J[ut-1],1440)}let st=G.filter(ut=>ut.est>=C.min-.5).sort((ut,ht)=>ut.est-ht.est);return!st.length&&G.length&&G[0].src==="oficial"&&!w?Pu(x,!0):st}let Lu=(x,w,C,O)=>{let U={key:x,ico:w,name:C,st:[],i:0,walk:10,open:!1};try{let G=JSON.parse(localStorage.getItem("rod_"+x)||"null");G&&Object.assign(U,G)}catch{}return!U.st.length&&O&&(U.st=O),U},oi=Lu("home","\u{1F3E0}","Casa",["79410","79412"]),Xn=Lu("work","\u{1F4BC}","Trabajo",null),Fe={key:"near",ico:"\u{1F4CD}",name:"Cerca de ti",st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},Nr=[Fe,oi,Xn];oi.open=!1,Xn.open=!1;function Ep(x,w){let C=nt(x,w),O=nt(x,w+.009);return 1/Math.hypot(O[0]-C[0],O[1]-C[1])}function Rc(x){if(!navigator.geolocation){Fe.err="Este navegador no da la ubicaci\xF3n",Bn(!0);return}navigator.geolocation.getCurrentPosition(w=>{let{longitude:C,latitude:O}=w.coords,U=nt(C,O),G=Ep(C,O),Q=M.map((_t,I)=>[I,Math.hypot(_t.w[0]-U[0],_t.w[1]-U[1])*G]).filter(([_t])=>M[_t].fams.size).sort((_t,I)=>_t[1]-I[1]),st=Q.filter(([,_t],I)=>I===0||_t<Math.max(2.5,Q[0][1]*1.6)).slice(0,3),ut=Fe.st[0]!==M[st[0][0]].id;Fe.st=st.map(([_t])=>M[_t].id),Fe.dist=Object.fromEntries(st.map(([_t,I])=>[M[_t].id,I])),Fe.fix=Date.now(),Fe.err="",ut&&(Fe.i=0);let ht=[oi,Xn].find(_t=>_t.st.includes(Fe.st[0])&&Fe.dist[Fe.st[0]]<1.5);x&&(ht?ht.open=!0:Fe.open=!0),Bn(!0)},w=>{Fe.err=w.code===1?"Sin permiso de ubicaci\xF3n":"No se ha podido obtener la ubicaci\xF3n",x&&(oi.open=!!oi.st.length),Bn(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let Tp=x=>Math.max(1,Math.round(x*1.3/.08));setTimeout(()=>Rc(!0),400),setInterval(()=>{document.hidden||Rc(!1)},12e4);let Ur=x=>{try{localStorage.setItem("rod_"+x.key,JSON.stringify({st:x.st,i:x.i,walk:x.walk,open:x.open}))}catch{}},Du=x=>x.st.length?ot.get(x.st[x.i]||x.st[0]):null;function Ap(x,w,C,O){if(O&&w.tr){let Q=w.tr.pat.stops,st=Q.indexOf(x);if(st>=0&&Q.slice(st+1).some(ut=>O.has(ut)))return"to"}if(O&&w.tr)return"out";let U=ot.get(w.destId)??M.findIndex(Q=>Q.n===w.dest);if(U<0||U==null||C==null)return"otros";let G=Q=>Math.hypot(M[Q].w[0]-M[C].w[0],M[Q].w[1]-M[C].w[1]);return G(U)<G(x)?"to":"out"}let Ic=x=>x<1?"ahora":x<60?Math.round(x)+" min":Math.floor(x/60)+" h "+String(Math.round(x%60)).padStart(2,"0"),Nu=0,Cp=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i;function Rp(x,w,C){let O=Du(x);if(x===Fe){if(O==null)return`<div class="hplace"><button type="button" class="hhead hnew" data-hloc><span class="hico">\u{1F4CD}</span><span class="htit"><b>Cerca de ti</b><small>${Fe.err?d(Fe.err)+" \xB7 toca para reintentar":"Buscando tu ubicaci\xF3n\u2026"}</small></span><span class="hchev">\u27F3</span></button></div>`;if([oi,Xn].find(ue=>ue.st.includes(Fe.st[0])&&Fe.dist[Fe.st[0]]<1.5))return"";x.walk=Tp(Fe.dist[x.st[x.i]]||0)}if(O==null)return`<div class="hplace"><button type="button" class="hhead hnew" data-hset="${x.key}"><span class="hico">${x.ico}</span><span class="htit"><b>${x.name}</b><small>Toca para elegir tu estaci\xF3n</small></span><span class="hchev">\uFF0B</span></button></div>`;He(O,()=>Bn(!0));let U=x===Fe?null:x===oi?Xn:oi,G=U?Du(U):null,Q=G!=null&&G!==O?G:Si,st=G!=null&&G!==O?U===Xn?"el trabajo":"casa":"Barcelona",ut=Pu(O),ht=x.walk,_t=M[O].fams,I=L.alerts.filter(Nt=>[...Nt.fams].some(ue=>_t.has(ue))||Nt.stops&&Nt.stops.has(O)),it=I.some(Nt=>Cp.test(Nt.txt)),Et={to:[],out:[],otros:[],all:ut},Ut=st!=="Barcelona"?new Set(U.st.map(Nt=>ot.get(Nt)).filter(Nt=>Nt!=null)):null;ut.forEach(Nt=>Et[Ap(O,Nt,Q,Ut)].push(Nt));let he=Nt=>{if(Nt==="all")return"Pr\xF3ximas salidas \xB7 todas las direcciones";let ue=Qi=>(Qi.find(ni=>ni.fam)||{}).fam;if(Nt==="to")return"Hacia "+At(st==="Barcelona"?"Barcelona":M[Q].n,ue(Et.to)||[..._t][0])+(st!=="Barcelona"?` <small>${st}</small>`:"");let wn=[];for(let Qi of Et[Nt])wn.some(ni=>ni[0]===Qi.dest)||wn.push([Qi.dest,Qi.fam]);return wn.length?"Hacia "+wn.slice(0,2).map(([Qi,ni])=>At(Qi,ni)).join(" "):"Otros"},se=Nt=>{let ue=Et[Nt].find(ni=>!ni.cancel&&ni.est-w.min>=ht);if(!ue){let ni=Et[Nt].find(Np=>!Np.cancel);return ni?{cls:"v-no",big:"No llegas",small:`El pr\xF3ximo (${Wt(ni.est)}) sale en ${Ic(ni.est-w.min)}: no da tiempo a pie`}:{cls:"v-no",big:"Sin trenes",small:"No hay salidas pr\xF3ximas en este sentido"}}let wn=ue.est-w.min-ht;return{cls:wn<1.5?"v-bad":wn<5?"v-warn":"v-ok",big:wn<1.5?"\xA1Sal ya!":"Sal en "+Ic(wn),small:`${it?"\u26A0\uFE0F servicio afectado \xB7 ":""}${Wt(ue.est)} \xB7 ${ue.fam} a ${ue.dest}${ue.plat?" \xB7 v\xEDa "+ue.plat:""}${ue.dl>=1?` \xB7 +${Math.round(ue.dl)} min`:""}`,x:ue}},Ee=Et.out.length?"out":"otros",Yt=se("to"),Jt=se(Ee),ye=St()&&w.live,fe=_t.size===1,De=Nt=>{let ue=Nt.est-w.min;return Nt.cancel?"cx":ue<ht?"u-miss":ue<ht+1.5?"u-now":ue<ht+5?"u-soon":"u-ok"},pn=Nt=>`<li class="${De(Nt)} go" data-dk="${C.push(Nt)-1}" title="${Nt.cancel?"Cancelado":Nt.est-w.min<ht?"No llegas a pie":"Ver este tren en el mapa"}"><b class="cd">${Nt.cancel?"\u2715":Ic(Nt.est-w.min)}</b><span><b>${Wt(Nt.est)}</b> ${fe?"":zt(Nt.fam)+" "}${!Nt.cancel&&Nt.est-w.min<ht?'<i class="nl">no llegas</i> ':""}${At(Nt.dest,Nt.fam)}${Nt.obs?` <i>${d(Nt.obs)}</i>`:""}</span>${Nt.cancel?'<em class="dl d-hi">cancelado</em>':Nt.dl>=1?`<em class="dl ${Nt.dl>=5?"d-hi":"d-lo"}">+${Math.round(Nt.dl)}</em>`:""}${Nt.plat?`<i class="via">v\xEDa ${d(Nt.plat)}</i>`:""}${(()=>{let ue=Ne(Nt.num,"");return ue.length?`<i class="cr" title="${d(ue.map(wn=>Ue(wn.kind)).join(" \xB7 "))}">${ue.slice(0,2).map(wn=>ge[wn.kind]).join("")}</i>`:""})()}${Nt.live?'<i class="lvd">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`,Ze=(Nt,ue)=>`<div class="hcol"><div class="hdir">${he(Nt)}</div><div class="hv ${ue.cls}${ue.x?" go":""}"${ue.x?` data-dk="${C.push(ue.x)-1}"`:""}><b>${ue.big}</b><small>${d(ue.small)}</small></div><ol>${Et[Nt].slice(0,Nt==="all"?7:4).map(pn).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(x===Fe){let Nt=se("all");var Je=Nt.x?`${Nt.big} \xB7 <b>${Wt(Nt.x.est)}</b> ${d(Nt.x.fam)} a ${d(Nt.x.dest)}${Nt.x.plat?" \xB7 v\xEDa "+d(Nt.x.plat):""}`:Nt.big}let Or=x===Fe?Je:Yt.x?`${Yt.big} \xB7 <b>${Wt(Yt.x.est)}</b> hacia ${d(st)}${Yt.x.plat?" \xB7 v\xEDa "+d(Yt.x.plat):""}`:"Sin trenes hacia "+d(st);return`<div class="hplace ${x.open?"open":""}"><button type="button" class="hhead" data-ht="${x.key}"><span class="hico">${x.ico}</span><span class="htit"><b>${d(M[O].n)}</b><small class="c${it?"bad":Yt.cls.slice(2)}">${Or}</small></span><span class="hchev">\u25BE</span></button>`+(x.open?`
      <div class="hbody">
        ${x.st.length>1?`<div class="hst">${x.st.map((Nt,ue)=>{let wn=ot.get(Nt);return wn==null?"":`<button type="button" data-hs="${x.key}:${ue}" class="${ue===x.i?"on":""}">${d(M[wn].n)}</button>`}).join("")}</div>`:""}
        ${x===Fe?`<div class="hwalk">\u{1F4CD} A ${(()=>{let Nt=Fe.dist[x.st[x.i]]||0;return Nt<1?Math.round(Nt*100)*10+" m":Nt.toFixed(1).replace(".",",")+" km"})()} \xB7 unos <b>${x.walk} min</b> a pie</div>`:""}
        <div class="hwalk"${x===Fe?" hidden":""}>\u{1F6B6} Tardo <button type="button" data-hw="${x.key}:-1">\u2212</button><b>${ht} min</b><button type="button" data-hw="${x.key}:1">+</button> a pie hasta la estaci\xF3n</div>
        ${I.length?`<div class="hal ${it?"bad":""}">\u26A0\uFE0F ${yi(I[0])} ${d(I[0].txt)} <small>${Le(I[0])}</small>${I.length>1?` <a data-hal>+${I.length-1} avisos</a>`:""}</div>`:`<div class="hok">\u2713 Sin avisos para ${[..._t].sort(D).join(", ")}</div>`}
        ${(()=>{let Nt=x.st.flatMap(ue=>Ne("",ue));return Nt.length?`<div class="hcr">${Nt.slice(0,3).map(ue=>`${ge[ue.kind]} <b>${d(Ue(ue.kind))}</b> <small>${ue.up>1?ue.up+" viajeros \xB7 ":""}${ln(ue)}</small>`).join("<br>")}</div>`:""})()}
        ${x===Fe?`<div class="hcols one">${Ze("all",se("all"))}</div>`:`<div class="hcols">${Ze("to",Yt)}${Ze(Ee,Jt)}</div>`}
        <div class="hsrc"><span class="hsrcT" title="${ye?on.get(M[O].id)?.d?"Salidas oficiales de Rodalies en directo":"Horario + retrasos mientras cargan las salidas oficiales":"Previsi\xF3n seg\xFAn horario (sin tiempo real)"} \xB7 \u25CF = tren circulando">${ye?on.get(M[O].id)?.d?"\u25CF oficial en directo":"\u25CF horario + retrasos":"seg\xFAn horario"}</span><a data-hmap="${O}">\u{1F5FA}\uFE0F mapa</a>${x===Fe?"<a data-hloc>\u{1F4CD} actualizar</a>":`<a data-hset="${x.key}">\u270E cambiar</a>`}${x===Xn?'<a data-hdel="work">\u2715 quitar</a>':""}</div>
      </div>`:"")+"</div>"}let bi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},Uu=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Fu=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,Fr=()=>{let x=[...oi.st,...Xn.st],w=new Set;return x.forEach(C=>{let O=ot.get(C);O!=null&&M[O].fams.forEach(U=>w.add(U))}),{stations:x,lines:[...w].sort(D)}},Ip=x=>Uint8Array.from(atob(x.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((x.length+3)%4)),w=>w.charCodeAt(0));async function Ou(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function Bu(x){let C=await(await fetch(L.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:x.toJSON(),...Fr()})})).json();if(!C.ok)throw new Error(C.err||"error")}let Dn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function Pp(){let{lines:x,stations:w}=Fr(),C=new Set(x),O=new Set(w.map(Q=>ot.get(Q))),U=L.alerts.filter(Q=>[...Q.fams].some(st=>C.has(st))||[...Q.stops||[]].some(st=>O.has(st)));if(!Dn.seen){try{Dn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Dn.seen=new Set}if(!Dn.seen.size){U.forEach(Q=>Dn.seen.add(Q.id+"|"+Q.txt.length)),zu();return}}let G=U.filter(Q=>!Dn.seen.has(Q.id+"|"+Q.txt.length));if(G.length&&(G.forEach(Q=>Dn.seen.add(Q.id+"|"+Q.txt.length)),zu(),!(!Dn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let Q of G.slice(0,3)){let st=(Q.src==="Adif"?"Adif \xB7 v\xEDa":"Rodalies")+(Q.fams.size?" \xB7 "+[...Q.fams].sort(D).slice(0,4).join(" "):""),ut={body:Q.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+Q.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(ht=>ht?ht.showNotification(st,ut):new Notification(st,ut)).catch(()=>{try{new Notification(st,ut)}catch{}})}}function zu(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Dn.seen].slice(-400)))}catch{}}async function Lp(){if(Dn.on)Dn.on=!1,Qe("Avisos desactivados");else{if(!("Notification"in window)){Qe(Uu&&!Fu()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio y activa los avisos desde la app":"Este navegador no permite avisos");return}if(await Notification.requestPermission()!=="granted"){Qe("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}Dn.on=!0,Qe("Listo: te aviso de incidencias en "+Fr().lines.join(", ")+" mientras la app est\xE9 abierta")}try{localStorage.setItem("rod_ln",Dn.on?"1":"")}catch{}Bn(!0)}async function Dp(){if(!L.repOk)return Lp();if(!bi.busy){bi.busy=!0;try{let x=await Ou();if(!x){Qe(Uu&&!Fu()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio, abre la app desde ah\xED y activa los avisos":"Este navegador no permite avisos (hace falta abrir la web publicada, no el archivo)");return}if(await navigator.serviceWorker.ready,bi.on){let w=await x.pushManager.getSubscription();w&&(fetch(L.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:w.endpoint})}).catch(()=>{}),await w.unsubscribe().catch(()=>{})),bi.on=!1,Qe("Avisos desactivados")}else{if(!L.url){Qe("Hace falta el puente en directo");return}if(await Notification.requestPermission()!=="granted"){Qe("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}let C=(await mt(L.url.replace(/\/+$/,""),"/push/key")).key,O=await x.pushManager.getSubscription()||await x.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ip(C)});await Bu(O),bi.on=!0,Qe("Listo: te avisaremos de incidencias en "+Fr().lines.join(", "))}try{localStorage.setItem("rod_push",bi.on?"1":"")}catch{}}catch(x){Qe("No se han podido activar los avisos: "+(x.message||x))}finally{bi.busy=!1,Bn(!0)}}}async function ku(){if(bi.on)try{let x=await Ou(),w=x&&await x.pushManager.getSubscription();w&&await Bu(w)}catch{}}let Pc=!1,Vu="";function Lc(){let x=Se?"t"+(Se.tid||Se.vtid):$e>=0?"s"+$e:fn?"a":dn?"n":"";x!==Vu&&(Pc=!1,Vu=x);let w=innerWidth<=640&&!!x&&!Pc,C=f("#inf");C.classList.contains("compact")!==w&&(C.classList.toggle("compact",w),requestAnimationFrame(()=>{if(h.style.display!=="none"){let O=C.getBoundingClientRect().bottom;h.style.top=Math.round(O+8)+"px",h.style.maxHeight=Math.max(140,f("#rc").getBoundingClientRect().top-O-16)+"px"}}))}function Bn(x){let w=f("#home");if(!w)return;let C=performance.now();if(!x&&C-Nu<4e3)return;Nu=C;let O=Tt(),U=[],G=Fr(),Q=Nr.map(ht=>Rp(ht,O,U)).join("")+(Nr.some(ht=>ht.open)&&G.lines.length,"");if(w.className=Nr.some(ht=>ht.open)?"open":"",w._h===Q)return;w._h=Q,w.innerHTML=Q;{let ht=[...w.children].find(_t=>_t.classList.contains("hplace")&&!_t.querySelector(".hnew"));ht&&ht.classList.add("lead")}let st=ht=>ht==="work"?Xn:ht==="near"?Fe:oi;w.querySelectorAll("[data-hloc]").forEach(ht=>ht.onclick=()=>{Fe.err="",Rc(!0)}),w.querySelectorAll("[data-ht]").forEach(ht=>ht.onclick=()=>{if(f("#inf").classList.contains("compact")){Pc=!0,Lc();return}let _t=st(ht.dataset.ht);_t.open=!_t.open,Ur(_t),Bn(!0),(Se||$e>=0||fn||dn)&&(h._h="",qt())}),w.querySelectorAll("[data-hs]").forEach(ht=>ht.onclick=()=>{let[_t,I]=ht.dataset.hs.split(":"),it=st(_t);it.i=+I,Ur(it),Bn(!0)}),w.querySelectorAll("[data-hw]").forEach(ht=>ht.onclick=()=>{let[_t,I]=ht.dataset.hw.split(":"),it=st(_t);it.walk=m(it.walk+ +I,0,60),Ur(it),Bn(!0)}),w.querySelectorAll("[data-hmap]").forEach(ht=>ht.onclick=()=>{let _t=+ht.dataset.hmap;dn=fn=!1,Se=null,$e=_t,Gs(),bt(),Object.assign(s,{tx:M[_t].w[0],ty:M[_t].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),h._h="",qt(),a()}),w.querySelectorAll("[data-hset]").forEach(ht=>ht.onclick=()=>{vs=ht.dataset.hset,p.value="",p.placeholder=vs==="work"?"Escribe la estaci\xF3n del trabajo\u2026":"Escribe la estaci\xF3n de casa\u2026",p.focus()}),w.querySelectorAll("[data-hdel]").forEach(ht=>ht.onclick=()=>{Xn.st=[],Xn.open=!1,Ur(Xn),Bn(!0),ku()}),w.querySelectorAll("[data-dk]").forEach(ht=>ht.onclick=()=>Hu(U[+ht.dataset.dk])),w.querySelectorAll("[data-hal]").forEach(ht=>ht.onclick=()=>f("#alr").click());let ut=f("#bell");ut||(ut=document.createElement("button"),ut.type="button",ut.id="bell",ut.onclick=Dp,f("#inft").before(ut));{let ht=L.repOk?bi.on:Dn.on;ut.hidden=!G.lines.length,ut.className=ht?"on":"",ut.textContent=ht?"\u{1F514}":"\u{1F515}",ut.title=(ht?"Avisos activados":"Activar avisos")+" de "+G.lines.join(", ")+(L.repOk?"":" (mientras la app est\xE9 abierta)")}Ln(w)}function Hu(x){if(!x)return;let w=t.days.indexOf(Tt().ymd),C=ai.find(G=>G.real?x.tid&&G.v.tid===x.tid||x.num&&String(G.tr?G.tr.num:G.v.num)===String(x.num):x.tr&&G.tr===x.tr||x.num&&G.tr&&String(G.tr.num)===String(x.num)),O=x.tr||C&&C.tr||(J[w]||[]).find(G=>String(G.num)===String(x.num));if(dn=fn=!1,$e=-1,Gs(),Se=C?C.tr||{vtid:C.v.tid}:O||null,!Se)return;en=C&&C.tr?C.tr:null,en&&innerWidth<=640&&(h.classList.add("peek"),f("#rc").classList.contains("min")||f("#rcgrab").click());let U=C?C.p.w:null;U&&Object.assign(s,{tx:U[0],ty:U[1],dist:Math.min(s.dist,22)}),bt(),h._h="",qt(),Qn=0,a()}let vs=!1;p.addEventListener("blur",()=>setTimeout(()=>{vs&&!p.value.trim()&&(vs=!1,p.placeholder="Buscar estaci\xF3n o municipio\u2026")},600));function Gs(){Nr.some(x=>x.open)&&(Nr.forEach(x=>{x.open=!1}),Bn(!0))}function Gu(x,w){let C=w==="work"?Xn:oi,O=M[x].id,U=M.filter(G=>G.fams.size&&G!==M[x]&&Math.hypot(G.w[0]-M[x].w[0],G.w[1]-M[x].w[1])<.6).map(G=>G.id);C.st=[O,...U].slice(0,3),C.i=0,C.open=!0,Ur(C),Bn(!0),ku()}let Dc=f("#lines");Dc.innerHTML='<button type="button" class="all" data-f="*">Todas</button>'+y.map(x=>`<button type="button" style="--c:${A[x]}" data-f="${x}">${x}</button>`).join("");function Wu(){Dc.querySelectorAll("[data-f]").forEach(x=>{x.dataset.f!=="*"&&x.classList.toggle("off",!Vt.has(x.dataset.f))})}Dc.querySelectorAll("[data-f]").forEach(x=>x.onclick=()=>{let w=x.dataset.f;w==="*"?y.forEach(C=>Vt.add(C)):Vt.size===y.length?(Vt.clear(),Vt.add(w)):Vt.has(w)?(Vt.delete(w),Vt.size||y.forEach(C=>Vt.add(C))):Vt.add(w),Wu(),W(),bt(),qe(),Qn=0,a()});let Nc=[...document.querySelectorAll("[data-sp]")],ei=0;function Xu(x){let w=Tt();x&&(j===x||ei===x)?j?(Ct=w.min,lt=w.min,j=0,ei=x):(ne=performance.now(),j=x,ei=0):x===0?(j=0,lt=null,ei=0):(Ct=w.min,ne=performance.now(),lt=w.min,j=x,ei=0),Nc.forEach(C=>{let O=+C.dataset.sp;C.classList.toggle("on",O===(j||ei)||!j&&!ei&&lt==null&&O===0),C.classList.toggle("pz",!!ei&&O===ei),C.textContent=O===0?"Ahora":ei===O?"\u25B6 \xD7"+O:j===O?"\u23F8 \xD7"+O:"\xD7"+O}),Qn=0,a()}Nc.forEach(x=>x.onclick=()=>Xu(+x.dataset.sp)),f("#tsl").oninput=x=>{let w=+x.target.value;Ct=w,lt=w,ne=performance.now(),j===0&&!ei&&Nc.forEach(C=>C.classList.remove("on")),Qn=0,a()},setInterval(()=>{lt!=null&&j&&Ct+(performance.now()-ne)/6e4*j>1560&&(Ct=240,ne=performance.now())},1e3),window.__rodSearch=x=>{let w=g(x.trim());if(!w){u.style.display="none",u._pick=null;return}let C=[],O=[];M.forEach((st,ut)=>{if(!st.fams.size)return;let ht=g(st.n);ht.startsWith(w)||ht.includes(" "+w)||ht.includes("-"+w)?C.push(ut):ht.includes(w)&&O.push(ut)});let U=C.concat(O).slice(0,7),G=b.filter(st=>g(st.name).startsWith(w)).sort((st,ut)=>ut.pop-st.pop).slice(0,3),Q=U.map(st=>({h:`\u{1F689} ${d(M[st].n)}<em>${[...M[st].fams].sort(D).slice(0,3).map(ut=>`<em class="ls" style="background:${A[ut]}">${ut}</em>`).join(" ")}</em>`,go:()=>{if(vs){let ut=vs;vs=!1,p.placeholder="Buscar estaci\xF3n o municipio\u2026",Gu(st,ut);return}dn=!1,fn=!1,$e=st,Se=null,en=null,Gs(),bt(),Object.assign(s,{tx:M[st].w[0],ty:M[st].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),qt(),a()}})).concat(G.map(st=>({h:`${d(st.name)}<em>municipio</em>`,go:()=>{Object.assign(s,{tx:st.cx,ty:st.cy,dist:m(st.size*3+14,14,60)}),a()}})));u.innerHTML=Q.map((st,ut)=>`<li data-i="${ut}">${st.h}</li>`).join("")||'<li class="no">Sin resultados</li>',u.style.display="block",u._pick=st=>{Q[st]&&(Q[st].go(),u.style.display="none",p.value="",p.blur())},u.querySelectorAll("li[data-i]").forEach(st=>st.onclick=()=>u._pick(+st.dataset.i))},Wu(),bt();try{let x=new URLSearchParams(location.search).get("st");if(x){let w=g(x),C=-1,O=0;M.forEach((U,G)=>{if(!U.fams.size)return;let Q=g(U.n),st=Q===w?3:Q.startsWith(w)||w.startsWith(Q)?2:Q.includes(w)||w.includes(Q)?1:0;st>O&&(O=st,C=G)}),C>=0&&setTimeout(()=>{$e=C,bt(),Object.assign(s,{tx:M[C].w[0],ty:M[C].w[1],dist:18,tilt:.5}),qt(),a()},300)}}catch{}window.__rod={get follow(){return en},get selTrip(){return Se},ST:M,TR:H,FAM:y,act:()=>ai,setSpeed:Xu,RT:L,pollRT:xt,nowState:Tt,posAt:Hs,activeTrips:Ir,select:x=>{Se=x,qt()}}}var Rr=window.__DATA__;var Me=i=>document.querySelector(i),Ki=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),In=(i,t,e)=>Math.min(e,Math.max(t,i)),gu=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),On=Me("#c"),Wa=new oc({canvas:On,antialias:!0});Wa.setPixelRatio(Math.min(devicePixelRatio||1,2));var _s=new ta;_s.background=new oe(15659509);var Mc=35,ki=new An(Mc,1,2,1500);_s.add(new ya(16777215,9080992,1));var op=new Ma(16777215,.9);op.position.set(-40,-70,90);_s.add(op);var Bi=100/Rr.w,ka=Rr.w/2,Va=Rr.h/2,tn=[],_u=new pi;_s.add(_u);var lp=new As({color:16777215,transparent:!0,opacity:.55});for(let i of Rr.m){let t=new pi,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let m of i.g){let g=m.map(f=>{let d=[];for(let R=0;R<f.length;R+=2)d.push(new It((f[R]-ka)*Bi,(f[R+1]-Va)*Bi));return d.length>1&&d[0].equals(d[d.length-1])&&d.pop(),d}).filter(f=>f.length>=3);if(!g.length)continue;let b=new gr(g[0]);for(let f=1;f<g.length;f++)b.holes.push(new Rs(g[f]));e.push(b);for(let f of g[0])s=Math.min(s,f.x),r=Math.max(r,f.x),a=Math.min(a,f.y),o=Math.max(o,f.y);for(let f of g)n.push(new sa(new nn().setFromPoints(f.map(d=>new F(d.x,d.y,0))),lp))}if(!e.length)continue;let l;try{l=new pa(e,{depth:1,bevelEnabled:!1})}catch{continue}let c=new _a({color:13421772}),h=new Cn(l,c);t.add(h);let p=new pi;n.forEach(m=>p.add(m)),p.position.z=.04,_u.add(p),t.scale.z=.01,_u.add(t);let u={og:p,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:h,mat:c,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};h.userData.m=u,tn.push(u)}var Hb=tn.map(i=>i.mesh),tp=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},cp=0,hp=0;for(let i of tn){for(let t of i.rings)cp+=tp(t[0])-t.slice(1).reduce((e,n)=>e+tp(n),0);hp+=i.area}var Kv=Math.sqrt(hp/cp),pc={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},up={"08":"provincia de Barcelona",17:"provincia de Girona",25:"provincia de Lleida",43:"provincia de Tarragona"},wu="sqrt",Eu="pop",pu=0,xu=0,Ar=1,za=1,jv={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},vu=i=>Eu==="pop"?i.pop:i.pop/i.area,fc=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new oe(i));function Qv(i){i=In(i,0,1)*(fc.length-1);let t=Math.min(Math.floor(i),fc.length-2);return fc[t].clone().lerp(fc[t+1],i-t)}var Cr=i=>i>=100?Ki(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function ty(){xu=0;for(let i of tn)xu+=i.pop;[...tn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...tn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),dp()}var ey=new oe("#d3d8e2"),ny=new oe("#eceff3");function Tu(i){i.mat.color.copy(i.base).lerp(ny,.86),i.inF||i.mat.color.lerp(ey,.8)}function dp(){Ar=1,za=1e12;for(let e of tn){let n=vu(e);Ar=Math.max(Ar,n),za=Math.min(za,n)}let i=Math.log10(Math.max(za,.01)),t=Math.log10(Ar);for(let e of tn)e.base=Qv((Math.log10(Math.max(vu(e),.01))-i)/(t-i)),Tu(e);Me("#lmin").textContent=Cr(za),Me("#lmax").textContent=Cr(Ar),Me("#lname").textContent=Eu==="pop"?"habitantes":"hab./km\xB2",bc()}function bc(){let i=jv[wu],t=i(Ar),e=24*pu;for(let n of tn)n.zt=pu<=.001?.01:Math.max(.12*Math.min(1,pu),e*i(vu(n))/t)*(n.inF?1:.1);bn()}var ep=Object.fromEntries(tn.map(i=>[i.code,i])),mc=[],fp=[];for(let i of Rr.bd){let t=ep[i.a],e=ep[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)fp.push((i.p[n]-ka)*Bi,(i.p[n+1]-Va)*Bi,0,(i.p[n+2]-ka)*Bi,(i.p[n+3]-Va)*Bi,0),mc.push(t,e)}var xc=new Zi;xc.setPositions(fp);var pp=new Ni({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),mp=new Ni({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[pp,mp].forEach((i,t)=>{let e=new Fs(xc,i);e.frustumCulled=!1,e.renderOrder=10+t,_s.add(e)});function iy(){let i=xc.attributes.instanceStart.data.array;for(let t=0;t<mc.length;t+=2){let e=Math.max(mc[t].z,mc[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}xc.attributes.instanceStart.data.needsUpdate=!0}var vc={};for(let i of Object.keys(pc)){let t=tn.filter(h=>h.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,l=-1e9;for(let h of t)e+=h.area,n+=h.cx*h.area,s+=h.cy*h.area,r=Math.min(r,h.cx),a=Math.max(a,h.cx),o=Math.min(o,h.cy),l=Math.max(l,h.cy);let c=document.createElement("div");c.className="plab",c.textContent=pc[i],c.title="Ver solo "+up[i],c.onclick=()=>py("pr:"+i),document.body.appendChild(c),vc[i]={el:c,p:new F(n/e,s/e,0),cx:(r+a)/2,cy:(o+l)/2,ext:Math.max(a-r,l-o),ext2:[a-r,l-o],area:e,name:pc[i]}}var mu=new F;function sy(){for(let i in vc){let t=vc[i];mu.copy(t.p).project(ki),t.el.style.transform=`translate(-50%,-50%) translate(${(mu.x*.5+.5)*innerWidth}px,${(-mu.y*.5+.5)*innerHeight}px)`}}var sn={tilt:0,yaw:0,dist:150,tx:0,ty:0},me={...sn};function ry(){let i=innerWidth/innerHeight,t=Math.tan(Mc*Math.PI/360);return Math.max(Rr.h*Bi*1.1,100*1.1/i)/(2*t)}var ay=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{me.yaw=Math.round(me.yaw/(2*Math.PI))*2*Math.PI,bn()});function Au(){Object.assign(me,{tilt:0,yaw:0,dist:ry(),tx:0,ty:0}),bn()}function oy(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=sn;ki.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),ki.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),ki.lookAt(n,s,0)}var gc=!0,np=performance.now(),Ha=new Map;function bn(){gc=!0}function gp(i){requestAnimationFrame(gp);let t=In((i-np)/1e3,0,.05);np=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(sn)){let r=me[s]-sn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(sn[s]+=r*e,n=!0):sn[s]=me[s]}for(let s of tn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of Ha){let a=(i-r)/1800;a>=1?(Ha.delete(s),Vs(s)):Vs(s,.5*Math.sin(Math.PI*a)),n=!0}window.__rodTick&&window.__rodTick(i)&&(gc=!0),(n||gc)&&(ay.style.transform=`rotate(${sn.yaw}rad) scaleY(${(.55+.45*Math.cos(sn.tilt)).toFixed(3)})`,oy(),iy(),sy(),window.__rodFrame&&window.__rodFrame(),Wa.render(_s,ki),gc=n,Me("#tilt").value=Math.round(me.tilt*180/Math.PI),Me("#yaw").value=Math.round(((me.yaw*180/Math.PI+180)%360+360)%360-180))}function _p(){Wa.setSize(innerWidth,innerHeight,!1),ki.aspect=innerWidth/innerHeight,ki.updateProjectionMatrix(),pp.resolution.set(innerWidth,innerHeight),mp.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),bn()}addEventListener("resize",()=>{_p(),Xe.length&&xs()});On.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;me.yaw+=n*.0035}else i.ctrlKey?me.dist=In(me.dist*Math.exp(e*.01),6,400):me.tilt=In(me.tilt+e*.002,0,1.32);bn()},{passive:!1});On.addEventListener("contextmenu",i=>i.preventDefault());var zi=new Map,Hn=null,Bs=0,yu=0,Su=0;var yc=null;On.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),Xe.length&&setTimeout(xs,50)),On.setPointerCapture(i.pointerId),zi.set(i.pointerId,{x:i.clientX,y:i.clientY}),zi.size===1&&(Hn={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),zi.size===2){let[t,e]=[...zi.values()];Bs=Math.hypot(t.x-e.x,t.y-e.y),yu=Math.atan2(e.y-t.y,e.x-t.x),Su=(t.y+e.y)/2,yc={mode:null,rot:0,sc:0,tl:0},Hn&&(Hn.multi=!0)}Cu()});On.addEventListener("pointermove",i=>{let t=zi.get(i.pointerId);if(!t){Ji={x:i.clientX,y:i.clientY},Mu||(Mu=requestAnimationFrame(cy));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,zi.size===2){let[s,r]=[...zi.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),l=(s.y+r.y)/2,c=o-yu;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI);let h=Bs?a-Bs:0,p=l-Su,u=yc||(yc={mode:null,rot:0,sc:0,tl:0});u.rot+=c,u.sc+=h,u.tl+=p,u.mode?u.mode==="zoom"&&Math.abs(u.rot)>.45&&(u.mode="rotate"):Math.abs(u.rot)>.3?u.mode="rotate":Math.abs(u.tl)>30&&Math.abs(u.sc)<18?u.mode="tilt":Math.abs(u.sc)>12&&(u.mode="zoom"),(u.mode==="zoom"||u.mode==="rotate")&&Bs&&(me.dist=In(me.dist*Bs/a,6,400)),u.mode==="rotate"&&(me.yaw+=c,sn.yaw=me.yaw),u.mode==="tilt"&&(me.tilt=In(me.tilt-p*.006,0,1.32),sn.tilt=me.tilt),Bs=a,yu=o,Su=l,bn();return}if(Hn.moved+=Math.abs(e)+Math.abs(n),Hn.rot||i.altKey)me.yaw+=e*.005,me.tilt=In(me.tilt+n*.004,0,1.32),sn.yaw=me.yaw,sn.tilt=me.tilt;else{let s=2*sn.dist*Math.tan(Mc*Math.PI/360)/innerHeight,r=Math.sin(sn.yaw),a=Math.cos(sn.yaw),o=1/Math.max(Math.cos(sn.tilt),.3);me.tx=In(me.tx-a*e*s+-r*n*s*o,-70,70),me.ty=In(me.ty-r*e*s+a*n*s*o,-70,70),sn.tx=me.tx,sn.ty=me.ty}bn()});var xp=i=>{let t=Hn&&!Hn.rot&&!Hn.multi&&Hn.moved<(Hn.touch?12:6)&&i.type==="pointerup"&&zi.size===1,e=Hn&&Hn.touch;zi.delete(i.pointerId),Bs=0,yc=null,zi.size||(Hn=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};On.addEventListener("pointerup",xp);On.addEventListener("pointercancel",xp);On.addEventListener("dblclick",Au);addEventListener("keydown",i=>{i.key==="Alt"&&(On.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(On.style.cursor="")});addEventListener("blur",()=>{On.style.cursor=""});var ly=new wa,ip=new It,Ji=null,Mu=0,zs=null;function cy(){if(Mu=0,!Ji||Hn)return;ip.set(Ji.x/innerWidth*2-1,-(Ji.y/innerHeight)*2+1),ly.setFromCamera(ip,ki);let i=null;if(i!==zs){let e=zs;zs=i,e&&Vs(e),i&&Vs(i),bn()}let t=window.__rodHover&&window.__rodHover(Ji.x,Ji.y);if(t){Os.innerHTML=t,Os.style.display="block";let e=Os.offsetWidth,n=Os.offsetHeight;Os.style.left=In(Ji.x+14,6,innerWidth-e-6)+"px",Os.style.top=In(Ji.y+14,6,innerHeight-n-6)+"px",On.style.cursor="pointer"}else Cu(),On.style.cursor=""}On.addEventListener("pointerleave",()=>{if(Ji=null,zs){let i=zs;zs=null,Vs(i),bn()}Cu()});var Os=Me("#tip");function Cu(){Os.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{Eu=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),dp()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{wu=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),bc()});Me("#yaw").oninput=i=>{me.yaw=+i.target.value*Math.PI/180,bn()};Me("#tilt").oninput=i=>{me.tilt=+i.target.value*Math.PI/180,bn()};Me("#zin").onclick=()=>{me.dist=In(me.dist*.75,6,400),bn()};Me("#zout").onclick=()=>{me.dist=In(me.dist/.75,6,400),bn()};Me("#rst").onclick=Au;var sp=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],Xe=[],rp={},hy=i=>rp[i]||(rp[i]=new As({color:i}));function vp(i,t){i.og.children.forEach(e=>e.material=t?hy(t):lp)}function Vs(i,t=0){let e=i.mat.emissive;i===zs?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function Ru(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let c of i)e=Math.min(e,c.cx-c.size/2),n=Math.max(n,c.cx+c.size/2),s=Math.min(s,c.cy-c.size/2),r=Math.max(r,c.cy+c.size/2);let a=innerWidth/innerHeight,o=Math.tan(Mc*Math.PI/360),l=i.length===1?In(i[0].size*3.2+14,14,120):In(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(me,{tx:(e+n)/2,ty:(s+r)/2,dist:l,tilt:t,yaw:0}),bn()}var gs=Me("#q"),jn=Me("#list"),Ge=Me("#mcs");function wc(i,t=!0){if(jn.style.display="none",gs.value="",!i.sel){Xe.length>=6&&yp(Xe[0].o,!0);let e=new Set(Xe.map(s=>s.color)),n=sp.find(s=>!e.has(s))||sp[0];i.sel={o:i,color:n,tint:new oe(n).multiplyScalar(.12)},Xe.push(i.sel),vp(i,n)}Ge.classList.contains("min")&&Xa(!1),Ha.set(i,performance.now()),Vs(i),t&&Ru([i],Math.max(me.tilt,.9)),xs()}function yp(i,t){let e=Xe.indexOf(i.sel);e>=0&&Xe.splice(e,1),i.sel=null,vp(i,null),Vs(i),bn(),t||xs()}function Sp(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=Xe.map(h=>{let p=1e9,u=-1e9,m=1e9,g=-1e9;for(let b of h.o.rings)for(let f=0;f<b[0].length;f+=2)p=Math.min(p,b[0][f]),u=Math.max(u,b[0][f]),m=Math.min(m,b[0][f+1]),g=Math.max(g,b[0][f+1]);return{x0:p,x1:u,y0:m,y1:g}}),a=Math.max(...r.map(h=>Math.max(h.x1-h.x0,h.y1-h.y0))),o=(Math.min(e,n)-22)/a;Xe.forEach((h,p)=>{let u=r[p],m=(u.x0+u.x1)/2,g=(u.y0+u.y1)/2;s.beginPath();for(let b of h.o.rings)for(let f of b)for(let d=0;d<f.length;d+=2){let R=e/2+(f[d]-m)*o,P=n/2-(f[d+1]-g)*o;d?s.lineTo(R,P):s.moveTo(R,P),d===f.length-2&&s.closePath()}s.fillStyle=h.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=h.color,s.stroke()});let l=o/Kv,c=[.5,1,2,5,10,20,50,100].find(h=>h*l>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,c*l,2),s.font="10px system-ui",s.fillText(c+" km",12+c*l,n-8)}function xs(){if(!Xe.length){Ge.innerHTML="",Ge.style.display="none",Xa(!1);return}if(Ge.style.display="flex",innerWidth<=640){let e=Me("#inf").getBoundingClientRect().bottom;Ge.style.top=Math.round(e+8)+"px",Ge.style.maxHeight=Math.max(110,Math.min(innerHeight*(Me("#rc").classList.contains("min")?.7:.4),Me("#rc").getBoundingClientRect().top-e-16))+"px",Ge.style.width=""}else if(innerHeight<=500){let e=Me("#inf").getBoundingClientRect().bottom;Ge.style.top=Math.round(e+8)+"px",Ge.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",Ge.style.width="min(290px, 40vw)"}else Ge.style.top="",Ge.style.maxHeight="",Ge.style.width="";let i=Xe.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${pc[s.pr]}</em></div><div class="mb">${Ki(s.pop)} hab.</div><small>${Cr(s.area)} km\xB2 \xB7 ${Cr(s.pop/s.area)} hab./km\xB2 \xB7 n\xBA ${s.rankP} en poblaci\xF3n</small></div>`}).join("");if(Xe.length>1){let e=s=>Math.max(...Xe.map(s));if(i+='<div class="cmp"><div class="ct">Comparar <small>arrastra una ficha sobre otra para reordenar</small></div><canvas id="sil"></canvas><small class="sc">Siluetas superpuestas a la misma escala</small>'+[["Habitantes",s=>s.o.pop,Ki],["Superficie (km\xB2)",s=>s.o.area,Cr],["Densidad (hab./km\xB2)",s=>s.o.pop/s.o.area,Cr]].map(([s,r,a])=>`<div class="cr"><span>${s}</span>${Xe.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),Xe.length===2){let[s,r]=Xe.map(c=>c.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],l=(c,h)=>(c>=h?c/h:h/c).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}</b> tiene ${l(a.pop,o.pop)}\xD7 los habitantes de <b>${o.name}</b> y ocupa ${l(a.area,o.area)}\xD7 ${a.area>=o.area?"su superficie":"menos superficie"}.</small>`}i+="</div>"}Ge.innerHTML=i,Ge.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),yp(Xe[+e.dataset.x].o)}),Ge.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>Ru([Xe[+e.dataset.i].o],Math.max(me.tilt,.9)),e.onmouseenter=()=>{let n=Xe[+e.dataset.i].o;Ha.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=Xe.splice(s,1);Xe.splice(r,0,a),xs();let o=Me("#sil");o&&o.classList.add("flash")}}});let t=Me("#sil");t&&Sp(t)}gs.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(gs.value);return}let i=gu(gs.value.trim());if(!i){jn.style.display="none";return}let t=[],e=[];for(let s of tn){let r=gu(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);jn.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${Ki(s.pop)}</em></li>`).join("")||'<li class="no">Sin resultados</li>',jn.style.display="block",jn.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>wc(n[+s.dataset.i])),jn._r=n});gs.addEventListener("keydown",i=>{i.key==="Enter"&&jn._pick?jn._pick(0):i.key==="Enter"&&jn._r&&jn._r[0]&&wc(jn._r[0]),i.key==="Escape"&&(gs.value="",jn.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==gs&&Mp()});var ap=0;addEventListener("resize",()=>{clearTimeout(ap),ap=setTimeout(()=>{let i=Me("#sil");i&&Sp(i)},120)});var Sc=null,bu=Me("#chip");function uy(i,t,e=.8){Sc={codes:new Set(i.map(n=>n.code)),label:t},tn.forEach(n=>{n.inF=Sc.codes.has(n.code),Tu(n)}),bu.innerHTML=`<span>Mostrando: <b>${t}</b> \xB7 ${i.length} municipio${i.length===1?"":"s"}</span><button id="chx" title="Quitar filtro">\xD7</button>`,bu.style.display="flex",Me("#chx").onclick=Mp,bc(),Ru(i,e),i.slice(0,40).forEach(n=>Ha.set(n,performance.now()))}function Mp(){Sc&&(Sc=null,tn.forEach(i=>{i.inF=!0,Tu(i)}),bu.style.display="none",bc())}var dy="prov";function fy(i){let t=[...tn].sort((a,o)=>o.pop-a.pop),e=[...tn].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[tn.filter(a=>a.pr===s),up[s]];if(n==="top")return s==="pop"?[t.slice(0,10),"10 con m\xE1s habitantes"]:[e.slice(0,10),"10 m\xE1s densos"];if(n==="low")return s==="pop"?[t.slice(-10),"10 con menos habitantes"]:[e.slice(-10),"10 menos densos"];if(n==="size")return[tn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${Ki(+s)} o m\xE1s habitantes`:+s==0?`menos de ${Ki(+r)} habitantes`:`${Ki(+s)} \u2013 ${Ki(+r-1)} habitantes`];if(n==="n50"){let a=0,o=0;for(let l of t)if(a+=l.pop,o++,a>=xu/2)break;return[t.slice(0,o),"la mitad de la poblaci\xF3n"]}return[[],""]}function py(i){let[t,e]=fy(i);t.length&&uy(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{dy=i.dataset.tab,Me("#dbody").scrollTop=0});var ks=Me("#rc"),_c=Me("#mcstab");function Ga(i){ks.classList.toggle("min",i),Me("#rcgrab span").textContent=i?"Mostrar controles":"Ocultar controles",Xe.length&&xs()}function Xa(i){Ge.classList.toggle("min",i),Ge.style.transform="",Ge.style.opacity="",_c.classList.toggle("on",i&&Xe.length>0),i&&(_c.textContent=`\u25B8 ${Xe.length} ${Xe.length===1?"ficha":"fichas"}`,_c.style.top=Ge.style.top||"124px")}function Iu(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!Ec.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y;!s.lock&&Math.hypot(o,l)>10&&(s.lock=Math.abs(o)>Math.abs(l)?"x":"y"),s.lock===n&&t&&t(o,l)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y,c=s.lock;s=null,e(c===n?o:0,c===n?l:0,c)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Me("#rcgrab").onclick=()=>Ga(!ks.classList.contains("min"));var bp=()=>innerWidth>640;Iu(ks,{axis:"y",onEnd:(i,t)=>{if(!bp())if(t>40&&!ks.classList.contains("min")){let e=Me("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&Ga(!0)}else t<-30&&ks.classList.contains("min")&&Ga(!1)}});Iu(ks,{axis:"x",onEnd:i=>{bp()&&(i>50?Ga(!0):i<-30&&ks.classList.contains("min")&&Ga(!1))}});Iu(Ge,{axis:"x",onMove:i=>{i<0&&(Ge.classList.add("sw"),Ge.style.transform=`translateX(${i}px)`,Ge.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{Ge.classList.remove("sw"),i<-60?Xa(!0):(Ge.style.transform="",Ge.style.opacity="")}});_c.onclick=()=>{Xa(!1),xs()};Me("#dtoggle").onclick=()=>{let i=Me("#dp").classList.toggle("open");Me("#rc").classList.toggle("dopen",i),Me("#dtoggle").textContent=i?Ec.matches&&innerWidth<=640?"\u2190 Controles":"En directo \u25B4":"En directo: conectar datos de Renfe \u25BE",window.__rodCard&&window.__rodCard()};var Ec=matchMedia("(max-width:640px), (max-height:500px)");function wp(){let i=Me("#leg");Ec.matches?Me("#rc").insertBefore(i,Me("#dtoggle")):document.body.appendChild(i),Xe.length&&xs()}Ec.addEventListener("change",wp);wp();_p();ty();Au();Object.assign(sn,me);for(let i of tn)i.z=.01;requestAnimationFrame(gp);Qf({scene:_s,camera:ki,renderer:Wa,goal:me,cur:sn,invalidate:bn,flyTo:(i,t,e,n)=>{Object.assign(me,{tx:(i-ka)*Bi,ty:(t-Va)*Bi,dist:e,tilt:n}),bn()},K:Bi,CX:ka,CY:Va,mcs:Ge,q:gs,list:jn,munis:tn,select:wc,norm:gu,fmt:Ki,clamp:In,mcsMin:Xa});window.__app={scene:_s,renderer:Wa,camera:ki,munis:tn,labs:vc,goal:me,cur:sn,select:wc,get mode(){return wu}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
